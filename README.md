# Hannah's Reading Workshop · Exercise 2 (Matching)

剑桥 IGCSE ESL **0511 / 0510 Reading Exercise 2** 真题精讲网站。
左栏 A–D／A–E 段落原文，右栏 10 道匹配题；正确答案所在段落用彩色高亮直接标在原文里，配套 **B2–C1 词汇**与**长难句拆解**。

## 内容范围

Booklet 第 23–47 页，共 13 篇、130 题、130 分（每题 1 分）：

| # | Passage | Topic | Paper | 页 |
|---|---------|-------|-------|----|
| 1 | Holiday accommodation | Travel & Holiday | 0510/21/O/N/23 | 23 |
| 2 | Writing a blog | Lifestyle | 0510/21/O/N/21 | 25 |
| 3 | Why I love photography | Entertainment | 0510/22/O/N/21 | 27 |
| 4 | What's it like where you live? | Where we live | 0510/22/M/J/20 | 29 |
| 5 | Studying journalism | Work / Study | 0510/21/O/N/20 | 31 |
| 6 | Stone City by Max Kelly | Tourism | 0510/23/O/N/21 | 33 |
| 7 | Why we dream | Science | 0510/23/O/N/23 | 35 |
| 8 | Science projects | Science / Study | 0510/22/O/N/23 | 37 |
| 9 | Who says museums are boring? | Tourism / Science | 0510/21/M/J/22 | 39 |
| 10 | Fitness classes, anyone? | Fitness | 0510/21/M/J/21 | 41 |
| 11 | First prize! | Lifestyle / Goals | 0510/22/O/N/20 | 43 |
| 12 | My favourite activity | Entertainment | 0510/21/M/J/20 | 45 |
| 13 | My Favourite Song | Entertainment | 0510/23/M/J/23 | 47 |

第 9、10 篇为五选一（A–E），其余为四选一（A–D）。所有答案依据 UCLES 官方 **Mark Scheme** 整理。

## 功能

**原文区（左）**
- 每个段落一个 A／B／C… 字母块 + 说话人（或小节名），段落之间虚线分隔
- 答案句按题号配色高亮：半透明底 + 同色下划线 + 句末题号徽章
- 同一句同时服务多题时，显示斜纹双色徽章
- 独立滚动条；点句中高亮 → 右侧对应题目亮起并滚动到位

**题目区（右）**
- 每题：序号 (a)–(j)、题干、分值、答案所在段落与句号、A–E 选项按钮
- 选一个字母 → 「对答案」即时判定（对=绿，错=红并给出参考答案），顶部实时累计得分
- 点「解析」或题号：进入聚焦模式，只保留该题高亮，其余淡灰，并展开定位／同义替换／为什么／陷阱四项讲解
- `Esc` 或再次点击退出聚焦

**语言点**
- **B2–C1 词汇**：每篇约 15 条，含等级徽章、**英式 IPA 音标**、词性、英文释义、中文释义、常见搭配、原文例句；点小喇叭朗读单词（Web Speech API，优先 en-GB），点单词或例句，原文会用黄色 highlighter 把该词/整句标出来
- **长难句**：每篇 6 句，含语法标签、主干、逐成分拆解、参考译文、考点提示，右上角「定位原文 ↗」直接跳到原句并高亮

## 本地运行

不需要构建、不需要服务器，双击 `index.html` 即可；模拟线上环境：

```bash
cd hannahs-reading-workshop-ex2
python -m http.server 8099
# 打开 http://127.0.0.1:8099
```

## 数据校验

```bash
node tools/check.mjs          # 全部 13 篇
node tools/check.mjs 1 4      # 只校验 1–4 篇
```

检查项：段落 key 序列、题目数为 10、总分 10、答案字母合法、`key` 必须逐字出现在**答案所在段**、词汇与长难句的引用句必须能在原文中找到、讲解字段非空。

## 部署

纯静态站点（无后端、无构建、无外部 CDN），路径全部相对，可直接托管在 GitHub Pages 项目子路径下。

```bash
git init -b main && git add . && git commit -m "feat: Exercise 2"
git remote add origin https://github.com/<user>/<repo>.git && git push -u origin main
# Settings → Pages → Deploy from a branch → main / (root)
```

若本机无法直连 `github.com:443`（`git push` 报 `Empty reply` 或 `CONNECT tunnel failed`），但 `api.github.com` 可达，改用：

```bash
GH_TOKEN=<classic PAT，勾 repo> node tools/deploy-api.mjs
```

它用 Git Data API 提交整棵树、开启 Pages，并轮询到构建完成后实测首页与资源状态码。发布后请把 token 从 `.git/config` 与终端历史中清理干净。

## 目录结构

```
hannahs-reading-workshop-ex2/
├── index.html            页面骨架
├── assets/
│   ├── style.css         版式与配色（与 Exercise 1 同源，追加段落块与选项按钮样式）
│   └── app.js            分句、高亮、选项判分、联动
├── data/
│   ├── p01.js … p13.js   每篇的段落、题目、答案与解析
│   └── extra.js          可选扩展语言点
└── tools/
    ├── check.mjs         数据校验
    └── deploy-api.mjs    API 方式发布
```

## 添加新文章

在 `data/` 下新建 `p14.js`，在 `index.html` 里加一行 `<script src="data/p14.js"></script>`（放在 `extra.js` 之前），结构如下：

```js
window.PASSAGES = window.PASSAGES || [];
window.PASSAGES.push({
  id: 'p14', no: 14, page: 49, paper: '0510/XX/X/XX', topic: '...',
  title: '...',
  intro: 'Read the article about ... Then answer Question 10(a)–(j).',
  sections: [{ key: 'A', label: '人名或小节名', text: '原文段落全文' }],
  questions: [{
    no: 'a', marks: 1, ans: 'C',
    stem: 'says ... ?',
    key: '答案段中逐字出现的证据片段',
    para: '同义替换：英文 ↔ 中文',
    why: '为什么是这一段',
    trap: '哪个段最像但不对，为什么'
  }],
  vocab: [{ w: 'word', pos: 'n.', lvl: 'B2', def: 'English definition', cn: '中文', col: '搭配', q: '原文片段' }],
  syntax: [{ q: '原文句子', tags: ['定语从句'], main: '主干', parts: [{ r: '成分名', t: '说明' }], cn: '译文', note: '考点' }]
});
```
