/* 独立核对答案字母：与官方 Mark Scheme 转录表逐题比对
   node tools/verify-answers.mjs
*/
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

// 官方 Mark Scheme 转录表（逐题，(a)–(j)）
const OFFICIAL = {
  1: ['C', 'D', 'A', 'B', 'A', 'C', 'B', 'A', 'D', 'C'],
  2: ['D', 'A', 'B', 'C', 'A', 'D', 'C', 'B', 'A', 'B'],
  3: ['B', 'C', 'A', 'C', 'A', 'D', 'B', 'A', 'D', 'C'],
  4: ['C', 'A', 'C', 'D', 'A', 'B', 'D', 'A', 'C', 'B'],
  5: ['C', 'A', 'D', 'C', 'A', 'B', 'A', 'C', 'B', 'D'],
  6: ['C', 'A', 'B', 'D', 'B', 'A', 'B', 'D', 'C', 'A'],
  7: ['B', 'A', 'C', 'A', 'D', 'B', 'A', 'D', 'B', 'C'],
  8: ['C', 'A', 'D', 'B', 'A', 'B', 'D', 'C', 'B', 'A'],
  9: ['C', 'E', 'B', 'D', 'E', 'A', 'D', 'B', 'A', 'C'],
  10: ['E', 'A', 'B', 'D', 'B', 'A', 'E', 'C', 'D', 'C'],
  11: ['C', 'A', 'B', 'A', 'D', 'C', 'D', 'A', 'C', 'B'],
  12: ['B', 'D', 'A', 'C', 'A', 'B', 'C', 'A', 'D', 'B'],
  13: ['C', 'B', 'A', 'D', 'B', 'A', 'C', 'B', 'D', 'A']
};

global.window = global;
const ROOT = path.resolve(import.meta.dirname, '..');
for (let i = 1; i <= 13; i++) {
  const f = path.join(ROOT, 'data', `p${String(i).padStart(2, '0')}.js`);
  if (fs.existsSync(f)) vm.runInThisContext(fs.readFileSync(f, 'utf8'), { filename: f });
}

const P = (global.PASSAGES || []).sort((a, b) => a.no - b.no);
let bad = 0;
for (const p of P) {
  const off = OFFICIAL[p.no];
  if (!off) continue;
  const got = (p.questions || []).map((q) => q.ans);
  const diff = [];
  off.forEach((want, i) => {
    if (got[i] !== want) diff.push(`(${'abcdefghij'[i]}) 期望 ${want} 实为 ${got[i]}`);
  });
  if (diff.length) {
    bad += diff.length;
    console.log(`P${String(p.no).padStart(2, '0')} ✗ ` + diff.join('，'));
  } else {
    console.log(`P${String(p.no).padStart(2, '0')} ✓ ${got.join('')}`);
  }
}
console.log(bad ? `\n✗ 共 ${bad} 处答案不符` : '\n✓ 全部答案与官方 Mark Scheme 一致');
process.exit(bad ? 1 : 0);
