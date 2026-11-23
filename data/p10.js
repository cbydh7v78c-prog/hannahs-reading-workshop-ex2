/* Exercise 2 · 10 Fitness classes, anyone? — 0510/21/M/J/21
   题型：Matching（10 题，每题 1 分，选 A–E） */
window.PASSAGES = window.PASSAGES || [];
window.PASSAGES.push({
  id: 'p10',
  no: 10,
  page: 41,
  paper: '0510/21/M/J/21',
  topic: 'Fitness',
  title: 'Fitness classes, anyone?',
  intro: 'Read sections (A–E) of a magazine article by a student who decided to try different fitness classes. Then answer Question 10(a)–(j).',
  sections: [
    {
      key: 'A',
      label: 'Pilates',
      text: 'I know from following videos at home that Pilates involves controlled movements and stretching, but this class wasn’t really what I’d expected. Admittedly, there was calming background music and a focus on breathing, but the instructor just wasn’t clear what she wanted us to do. So despite her repeated attempts to explain, there was quite a lot of confusion in this particular class. And although the class is meant to be for all levels, it is assumed you have basic knowledge and are not completely inexperienced. I’ve heard that different instructors tend to have very different teaching styles, although the basic exercises are similar, so I won’t give up yet – perhaps I’ll try a different one.'
    },
    {
      key: 'B',
      label: 'Bollywood Dance Beats',
      text: 'If you don’t know what happens in a Bollywood Dance Beats class, there’s a 15-minute warm-up followed by 45 minutes learning a dance routine set to a Bollywood movie soundtrack. I’ve been to one class so far and, although it was a mixed group of beginners and more experienced regulars, we were all made to feel completely at ease. I felt a little foolish dancing at first but soon gained confidence. The upbeat Indian music was new to me too. When the class finished, I was exhausted but in high spirits, even though it had been a constant challenge to remember the routine!'
    },
    {
      key: 'C',
      label: 'Capoeira Moves',
      text: 'Capoeira is a Brazilian martial art which includes elements of dance, gymnastics and music, and this class involved practising basic kicks and other movements in pairs. The teacher gave very few instructions, as many of the students were regulars, instead using body language to demonstrate. Other beginners found this approach slightly puzzling, but for me watching the teacher was all I needed to be able to follow the routine. I found the pace of the movements too fast to begin with, but when I thought about the class the next day, I realised I’d definitely learned something. Most beginners can probably cope with this class. However, to make the most of it, you might consider one or two easier classes before going to this one.'
    },
    {
      key: 'D',
      label: 'Flow Fit',
      text: 'This is the class I’ve attended most frequently. I never know what exercises to expect each week, which keeps it interesting. It’s a good workout, mainly strengthening your leg and stomach muscles, with some arm exercises too, and your body aches for days afterwards! Before the first class, I was worried I wouldn’t be able to do it. However, the instructor explained everything clearly, from beginner’s exercises up to more advanced options. In fact, it struck me at one point during the class that I was already familiar with many of the movements, so now I often just do the advanced options.'
    },
    {
      key: 'E',
      label: 'Body Pump',
      text: 'You can guess what this class is like from the name – basically lifting weights, with a few stretches in between. The only time I went, I was late and missed the warm-up – this bothered me as it’s crucial for exercising safely. In the main part of the class, we just repeated the same exercises again and again. Although this helped me to get my technique right, I soon got bored. I also found the loud music very distracting. Halfway through the class, the instructor suggested we all try using heavier weights for one exercise to see if we could manage, which I thought was quite a good approach. If you love lifting weights, this class might be for you. Otherwise, I’d advise you to try something else instead.'
    }
  ],
  questions: [
    {
      no: 'a', marks: 1, ans: 'E',
      stem: 'a teacher who gave students a particular challenge to complete',
      key: 'the instructor suggested we all try using heavier weights for one exercise to see if we could manage',
      para: 'suggested we all try using heavier weights ↔ 老师给出一个具体挑战；to see if we could manage ↔ 试着看能不能做到',
      why: 'E 段说课到一半，教练提议大家做一个动作时改用更重的哑铃，“看看能不能应付”，这正是老师给学生布置的一个具体挑战任务。',
      trap: 'A 段也提到老师的教学，但那是抱怨她“讲不清楚要我们做什么”，是负面评价，不是布置挑战；D 段老师“讲得很清楚”也不含挑战成分。'
    },
    {
      no: 'b', marks: 1, ans: 'A',
      stem: 'the use of music for relaxation',
      key: 'there was calming background music and a focus on breathing',
      para: 'calming background music ↔ 用音乐让人放松；a focus on breathing ↔ 注重呼吸调节',
      why: 'A 段承认这节课有“让人平静的背景音乐”并且“注重呼吸”，音乐在这里的作用就是帮助放松，而非伴奏或激发情绪。',
      trap: 'B 段有 “upbeat Indian music”，E 段有 “loud music”，但这两处音乐是让人兴奋或让人分心的，与 relaxation 相反。'
    },
    {
      no: 'c', marks: 1, ans: 'B',
      stem: 'a welcoming atmosphere for people of all levels',
      key: 'we were all made to feel completely at ease',
      para: 'a mixed group of beginners and more experienced regulars ↔ 各种水平的人都有；made to feel completely at ease ↔ 让人感到自在 → welcoming atmosphere',
      why: 'B 段强调班里既有新手也有老手，是个混合班，但“每个人都被人为地弄得很自在”，说明气氛对任何水平的人都友好。',
      trap: 'A 段说这课 “is meant to be for all levels”（号称适合各级别），但紧接着说实际上假定你有基础，是名不副实，属于反向干扰。'
    },
    {
      no: 'd', marks: 1, ans: 'D',
      stem: 'the fact that each class is unpredictable',
      key: 'I never know what exercises to expect each week',
      para: 'never know what exercises to expect ↔ 无法预料 → unpredictable；each week ↔ 每次课',
      why: 'D 段作者说自己每周都不知道会练什么动作，这种“无法预知”反而让课有意思，正对应 unpredictable。',
      trap: 'C 段说动作“太快”，E 段说动作“一遍遍重复”，都是可预期的，与 unpredictable 相反。'
    },
    {
      no: 'e', marks: 1, ans: 'B',
      stem: 'a positive feeling at the end of the class',
      key: 'I was exhausted but in high spirits',
      para: 'in high spirits ↔ 情绪高涨 → positive feeling；When the class finished ↔ at the end of the class',
      why: 'B 段结尾说下课时虽然筋疲力尽，但“情绪非常高”，正是课后积极、愉快的感受。',
      trap: 'E 段说 “I soon got bored”（很快就觉得无聊），D 段说 “your body aches for days”（疼好几天），都是负面感受。'
    },
    {
      no: 'f', marks: 1, ans: 'A',
      stem: 'the writer’s negative opinion of the teacher',
      key: 'the instructor just wasn’t clear what she wanted us to do',
      para: 'wasn’t clear what she wanted us to do ↔ 讲不清楚要求 → negative opinion of the teacher',
      why: 'A 段直接批评教练“根本没说清她要我们做什么”，即便她反复解释，班里还是“一片混乱”，是对老师明确的负面评价。',
      trap: 'C 段说老师“很少讲解”，但作者紧接着说看她示范就够了，并不抱怨；E 段还夸教练的方法 “quite a good approach”。'
    },
    {
      no: 'g', marks: 1, ans: 'E',
      stem: 'a concern about the risk of injury',
      key: 'this bothered me as it’s crucial for exercising safely',
      para: 'missed the warm-up ↔ 没做热身；crucial for exercising safely ↔ 对安全运动至关重要 → 担心受伤',
      why: 'E 段作者迟到错过热身，并为此不安，因为热身“对安全锻炼至关重要”，言下之意是没热身容易受伤。',
      trap: 'A 段只说班里有“confusion”（混乱），是组织问题；D 段说练完“肌肉酸痛”，是正常反应，都不是对受伤风险的担忧。'
    },
    {
      no: 'h', marks: 1, ans: 'C',
      stem: 'advice for getting maximum benefit from the class',
      key: 'to make the most of it, you might consider one or two easier classes before going to this one',
      para: 'to make the most of it ↔ 获得最大收益 → maximum benefit；you might consider … easier classes before ↔ 给出的建议',
      why: 'C 段最后直接给建议：想把这节课上得最有效，最好先上一两节更简单的课打底，这就是“如何获得最大收益”的忠告。',
      trap: 'E 段结尾 “I’d advise you to try something else instead” 是劝人干脆别上，属于放弃建议，不是“最大化收益”。'
    },
    {
      no: 'i', marks: 1, ans: 'D',
      stem: 'the writer realising in the class that she knew more than she thought',
      key: 'it struck me at one point during the class that I was already familiar with many of the movements',
      para: 'it struck me at one point during the class ↔ 课上突然意识到；already familiar with many of the movements ↔ 原来自己早就会 → knew more than she thought',
      why: 'D 段说上课途中她忽然发现“自己早已熟悉其中许多动作”，于是之后直接做进阶版，正说明她懂得比原先以为的多。',
      trap: 'C 段说她第二天回想才觉得“确实学到了东西”，是课后反思收获，不是课上发现原有基础好。'
    },
    {
      no: 'j', marks: 1, ans: 'C',
      stem: 'an initial struggle to keep up with the exercises',
      key: 'I found the pace of the movements too fast to begin with',
      para: 'too fast to begin with ↔ 一开始跟不上 → initial struggle to keep up；the pace of the movements ↔ 动作节奏',
      why: 'C 段说一开始觉得动作节奏太快，跟不上，这就是“最初阶段的吃力”。',
      trap: 'B 段说“记不住动作套路”是个持续的挑战，但那是记忆难度，且贯穿全程，不是“一开始跟不上节奏”。'
    }
  ],
  vocab: [
    { w: 'controlled', ipa: '/kənˈtrəʊld/', pos: 'adj.', lvl: 'B2', def: 'done slowly and carefully, with deliberate movements', cn: '有控制的；缓慢规范的', col: 'controlled movements / controlled breathing', q: 'Pilates involves controlled movements and stretching' },
    { w: 'admittedly', ipa: '/ədˈmɪtɪdli/', pos: 'adv.', lvl: 'C1', def: 'used to admit that something is true before adding a disagreement', cn: '诚然；不可否认', col: 'Admittedly, … / admittedly difficult', q: 'Admittedly, there was calming background music' },
    { w: 'confusion', ipa: '/kənˈfjuːʒn/', pos: 'n.', lvl: 'B2', def: 'a state in which people do not understand what is happening', cn: '混乱；困惑', col: 'cause / create confusion', q: 'there was quite a lot of confusion in this particular class' },
    { w: 'inexperienced', ipa: '/ˌɪnɪkˈspɪəriənst/', pos: 'adj.', lvl: 'B2', def: 'having little knowledge or practice in an activity', cn: '缺乏经验的；新手', col: 'completely / relatively inexperienced', q: 'are not completely inexperienced' },
    { w: 'routine', ipa: '/ruːˈtiːn/', pos: 'n.', lvl: 'B2', def: 'a fixed set of movements performed in a class or performance', cn: '（舞蹈、体操的）成套动作', col: 'learn / remember a routine', q: 'learning a dance routine set to a Bollywood movie soundtrack' },
    { w: 'at ease', ipa: '/ət ˈiːz/', pos: 'phrase', lvl: 'B2', def: 'feeling relaxed and not worried', cn: '自在；放松', col: 'feel at ease / put sb at ease', q: 'we were all made to feel completely at ease' },
    { w: 'foolish', ipa: '/ˈfuːlɪʃ/', pos: 'adj.', lvl: 'B2', def: 'feeling stupid or embarrassed about something you do', cn: '傻的；难为情的', col: 'feel foolish / look foolish', q: 'I felt a little foolish dancing at first' },
    { w: 'exhausted', ipa: '/ɪɡˈzɔːstɪd/', pos: 'adj.', lvl: 'B2', def: 'extremely tired', cn: '筋疲力尽的', col: 'absolutely / completely exhausted', q: 'I was exhausted but in high spirits' },
    { w: 'in high spirits', ipa: '/ɪn haɪ ˈspɪrɪts/', pos: 'phrase', lvl: 'C1', def: 'happy and full of energy', cn: '情绪高涨；兴高采烈', col: 'be in high / low spirits', q: 'but in high spirits' },
    { w: 'martial art', ipa: '/ˌmɑːʃl ˈɑːt/', pos: 'n.', lvl: 'B2', def: 'a sport such as karate or judo in which you fight using your hands and feet', cn: '武术', col: 'practise / learn a martial art', q: 'Capoeira is a Brazilian martial art' },
    { w: 'puzzling', ipa: '/ˈpʌzlɪŋ/', pos: 'adj.', lvl: 'C1', def: 'difficult to understand or explain', cn: '令人费解的', col: 'slightly puzzling / a puzzling question', q: 'Other beginners found this approach slightly puzzling' },
    { w: 'pace', ipa: '/peɪs/', pos: 'n.', lvl: 'B2', def: 'the speed at which something happens or is done', cn: '速度；节奏', col: 'a fast / slow pace / at your own pace', q: 'I found the pace of the movements too fast' },
    { w: 'workout', ipa: '/ˈwɜːkaʊt/', pos: 'n.', lvl: 'B2', def: 'a period of physical exercise to get fit', cn: '锻炼；训练课', col: 'a good / hard workout', q: 'It’s a good workout' },
    { w: 'strengthen', ipa: '/ˈstreŋθn/', pos: 'v.', lvl: 'B2', def: 'to make your body or a muscle stronger', cn: '增强；使强壮', col: 'strengthen muscles / your core', q: 'mainly strengthening your leg and stomach muscles' },
    { w: 'distracting', ipa: '/dɪˈstræktɪŋ/', pos: 'adj.', lvl: 'C1', def: 'stopping you from concentrating on what you are doing', cn: '让人分心的', col: 'very distracting / distracting noise', q: 'I also found the loud music very distracting' },
    { w: 'crucial', ipa: '/ˈkruːʃl/', pos: 'adj.', lvl: 'B2', def: 'extremely important because it affects the result', cn: '至关重要的', col: 'crucial for doing sth / absolutely crucial', q: 'it’s crucial for exercising safely' }
  ],
  syntax: [
    {
      q: 'I know from following videos at home that Pilates involves controlled movements and stretching, but this class wasn’t really what I’d expected.',
      tags: ['宾语从句', '表语从句', '并列句'],
      main: 'I know that Pilates involves … , but this class wasn’t what I’d expected.',
      parts: [
        { r: '方式状语', t: 'from following videos at home —— 介词 from + 动名词，说明“知道”的来源' },
        { r: '宾语从句', t: 'that Pilates involves controlled movements and stretching —— 作 know 的宾语' },
        { r: '转折分句', t: 'but this class wasn’t really what I’d expected —— what 引导表语从句，等于“不是我预期的样子”' }
      ],
      cn: '我在家跟着视频练过，知道普拉提是缓慢受控的动作和拉伸，但这节课并不是我预期的样子。',
      note: '“wasn’t what I’d expected” 是匹配题里表达“与预期不符”的高频句式，看到它要留心和 expected / disappointed 一类题干。'
    },
    {
      q: 'So despite her repeated attempts to explain, there was quite a lot of confusion in this particular class.',
      tags: ['介词短语作让步', 'there be 句型'],
      main: 'there was quite a lot of confusion in this particular class',
      parts: [
        { r: '让步状语', t: 'despite her repeated attempts to explain —— despite 是介词，后接名词短语，不能接句子' },
        { r: '主句', t: 'there was quite a lot of confusion —— there be 句型，confusion 不可数，用 quite a lot of 修饰' },
        { r: '地点状语', t: 'in this particular class —— particular 强调“就是这一节”，暗示别的情形可能不同' }
      ],
      cn: '所以尽管她反复试着解释，这一节课上还是相当混乱。',
      note: 'despite / in spite of 后只能接名词或动名词，这是语法填空和写作的高频考点；此处让步关系也帮助判断作者对老师持负面态度。'
    },
    {
      q: 'And although the class is meant to be for all levels, it is assumed you have basic knowledge and are not completely inexperienced.',
      tags: ['让步状语从句', '被动语态', '主语从句省略'],
      main: 'it is assumed (that) you have basic knowledge',
      parts: [
        { r: '让步从句', t: 'although the class is meant to be for all levels —— be meant to be 表示“本应、号称是”' },
        { r: '主句', t: 'it is assumed (that) … —— it 为形式主语，真正的主语是 that 从句' },
        { r: '宾语从句', t: 'you have basic knowledge and are not completely inexperienced —— 两个并列谓语' }
      ],
      cn: '而且，虽然这门课号称适合各个水平，但实际上它假定你有基础知识、并非完全没有经验。',
      note: 'be meant to be 与后面的 it is assumed 形成“宣称”与“实际”的对比，是 (c) 题的典型反义干扰点。'
    },
    {
      q: 'When the class finished, I was exhausted but in high spirits, even though it had been a constant challenge to remember the routine!',
      tags: ['时间状语从句', '让步状语从句', '形式主语'],
      main: 'I was exhausted but in high spirits',
      parts: [
        { r: '时间从句', t: 'When the class finished —— 下课的时候' },
        { r: '主句', t: 'I was exhausted but in high spirits —— 两个表语并列，形成“身体累 / 心情好”的对比' },
        { r: '让步从句', t: 'even though it had been a constant challenge to remember the routine —— it 为形式主语，真正主语是 to remember the routine' }
      ],
      cn: '下课的时候，我筋疲力尽但情绪高涨，尽管要记住那套动作一直是个不小的挑战！',
      note: '“exhausted but in high spirits” 是 (e) 题的原句依据：题干说 positive feeling，对应的是 in high spirits，而不是前面的 exhausted。'
    },
    {
      q: 'The teacher gave very few instructions, as many of the students were regulars, instead using body language to demonstrate.',
      tags: ['原因状语从句', '分词状语', 'few 的否定含义'],
      main: 'The teacher gave very few instructions … , instead using body language to demonstrate',
      parts: [
        { r: '主句', t: 'The teacher gave very few instructions —— few 表否定，“几乎没有讲解”' },
        { r: '原因从句', t: 'as many of the students were regulars —— as 表原因，不是“当……时”' },
        { r: '分词状语', t: 'instead using body language to demonstrate —— 现在分词作伴随状语，逻辑主语是 the teacher' }
      ],
      cn: '老师几乎不做讲解，因为很多学员都是老面孔，她改用肢体语言来示范。',
      note: 'as 引导原因从句时要靠上下文判断，不能一律译成“当……时”；few 与 a few 语义相反，是阅读细节题常设的陷阱。'
    },
    {
      q: 'In fact, it struck me at one point during the class that I was already familiar with many of the movements, so now I often just do the advanced options.',
      tags: ['形式主语', '主语从句', '结果状语'],
      main: 'it struck me that I was already familiar with many of the movements',
      parts: [
        { r: '形式主语', t: 'it struck me —— it 为形式主语，真正内容是后面的 that 从句' },
        { r: '主语从句', t: 'that I was already familiar with many of the movements —— be familiar with 表示“熟悉”' },
        { r: '结果分句', t: 'so now I often just do the advanced options —— so 引出结果，“所以现在常直接做进阶动作”' }
      ],
      cn: '事实上，上课途中我忽然意识到，其中许多动作我早就熟悉了，所以现在常常直接做进阶版本。',
      note: 'sth strikes sb that … 表示“某人突然意识到”，与 realise 同义，是 (i) 题“knew more than she thought”的对应表达。'
    }
  ]
});
