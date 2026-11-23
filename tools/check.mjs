/* 校验 Exercise 2 数据：node tools/check.mjs [起始] [结束] */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = path.resolve(import.meta.dirname, '..');
const from = Number(process.argv[2] || 1);
const to = Number(process.argv[3] || 13);

global.window = global;
for (let i = 1; i <= 13; i++) {
  const f = path.join(ROOT, 'data', `p${String(i).padStart(2, '0')}.js`);
  if (fs.existsSync(f)) vm.runInThisContext(fs.readFileSync(f, 'utf8'), { filename: f });
}
const EXTRA = path.join(ROOT, 'data', 'extra.js');
if (fs.existsSync(EXTRA)) vm.runInThisContext(fs.readFileSync(EXTRA, 'utf8'), { filename: EXTRA });

const P = (global.PASSAGES || []).sort((a, b) => a.no - b.no);
const norm = (s) => String(s).replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"').replace(/\s+/g, ' ').trim().toLowerCase();

/* 与前端一致的分句，用于确认 key 不跨越句子边界 */
function splitSentences(text) {
  const parts = [];
  let last = 0;
  const re = /[.!?][\u201D\u2019"']?\s+(?=[A-Z0-9\u201C\u2018"'(£])/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    parts.push(text.slice(last, m.index + m[0].trim().length));
    last = m.index + m[0].length;
  }
  parts.push(text.slice(last));
  return parts.map((s) => s.trim()).filter(Boolean);
}

let errors = [];
let totQ = 0, totMarks = 0, totV = 0, totS = 0;
const ids = new Set();

for (const p of P) {
  if (p.no < from || p.no > to) continue;
  const tag = `P${String(p.no).padStart(2, '0')} ${p.title}`;
  const err = (m) => errors.push(`${tag}: ${m}`);

  if (ids.has(p.id)) err(`id 重复 ${p.id}`);
  ids.add(p.id);
  if (!['p' + String(p.no).padStart(2, '0')].includes(p.id)) err(`id 与 no 不一致 ${p.id}`);

  const keys = (p.sections || []).map((s) => s.key);
  const expect = p.sections.length === 5 ? ['A', 'B', 'C', 'D', 'E'] : ['A', 'B', 'C', 'D'];
  if (keys.join('') !== expect.join('')) err(`段落 key 异常 ${keys.join('')}`);

  const allText = norm(p.sections.map((s) => s.text).join(' '));
  const byKey = Object.fromEntries(p.sections.map((s) => [s.key, norm(s.text)]));

  let marks = 0;
  (p.questions || []).forEach((q) => {
    marks += q.marks;
    if (!q.stem || q.stem.length < 8) err(`(${q.no}) 题干过短`);
    if (!keys.includes(q.ans)) err(`(${q.no}) 答案 ${q.ans} 不在段落范围`);
    if (!q.why || q.why.length < 10) err(`(${q.no}) why 缺失`);
    if (!q.para) err(`(${q.no}) para 缺失`);
    if (!q.trap) err(`(${q.no}) trap 缺失`);
    if (!q.key) { err(`(${q.no}) key 缺失`); return; }
    const k = norm(q.key);
    if (!byKey[q.ans] || byKey[q.ans].indexOf(k) < 0) err(`(${q.no}) key 不在答案段 ${q.ans} 中：${q.key}`);
    const sec = p.sections.find((s) => s.key === q.ans);
    const inOne = splitSentences(sec.text).some((s) => norm(s).indexOf(k) >= 0);
    if (!inOne) err(`(${q.no}) key 跨越句子边界，前端无法高亮：${q.key}`);
  });
  if ((p.questions || []).length !== 10) err(`题目数 ${p.questions.length} ≠ 10`);
  if (marks !== 10) err(`总分 ${marks} ≠ 10`);

  (p.vocab || []).forEach((v) => {
    if (!v.w || !v.cn || !v.q) err(`词汇条目不完整：${v.w || '?'}`);
    if (!v.def) err(`词汇 ${v.w} 缺英文释义`);
    if (allText.indexOf(norm(v.q)) < 0) err(`词汇 ${v.w} 的例句在原文中找不到：${v.q}`);
  });
  (p.syntax || []).forEach((s, i) => {
    if (allText.indexOf(norm(s.q)) < 0) err(`长难句 ${i + 1} 在原文中找不到`);
    if (!s.cn) err(`长难句 ${i + 1} 缺译文`);
    if (!s.parts || s.parts.length < 2) err(`长难句 ${i + 1} 成分不足`);
  });
  if ((p.vocab || []).length < 12) err(`词汇仅 ${p.vocab.length} 条（少于 12）`);
  if ((p.syntax || []).length < 5) err(`长难句仅 ${p.syntax.length} 条（少于 5）`);

  totQ += p.questions.length;
  totMarks += marks;
  totV += (p.vocab || []).length;
  totS += (p.syntax || []).length;
  console.log(
    `${String(p.no).padStart(2, '0')} ${p.title.slice(0, 34).padEnd(36)} 段${p.sections.length} 题${p.questions.length} 分${marks} 词${(p.vocab || []).length} 句${(p.syntax || []).length}`
  );
}

console.log(`\n合计 ${P.filter((p) => p.no >= from && p.no <= to).length} 篇 / ${totQ} 题 / ${totMarks} 分 / ${totV} 词汇 / ${totS} 长难句`);
if (errors.length) {
  console.log(`\n✗ ${errors.length} 个问题：`);
  errors.slice(0, 40).forEach((e) => console.log('  - ' + e));
  process.exit(1);
} else console.log('\n全部通过');
