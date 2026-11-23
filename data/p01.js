/* Exercise 2 · 01 Holiday accommodation — 0510/21/O/N/23
   题型：Matching（10 题，每题 1 分，选 A–D） */
window.PASSAGES = window.PASSAGES || [];
window.PASSAGES.push({
  id: 'p01',
  no: 1,
  page: 23,
  paper: '0510/21/O/N/23',
  topic: 'Travel & Holiday',
  title: 'Holiday accommodation',
  intro: 'Read the article about four people (A–D) who are describing accommodation they stayed in while on holiday. Then answer Question 10(a)–(j).',
  sections: [
    {
      key: 'A',
      label: 'Hoda',
      text: 'I’ve just got back from a week away in the mountains. There were eight of us in one rented house: me, my sister and parents, and my aunt, uncle and two cousins. The style of the place wouldn’t please some people and it was only just big enough for everyone, but it suited us. We’ve never had the slightest disagreement in all the times we’ve been away together. We stayed at a ski resort: it was warm, so there wasn’t any snow. I’d love to have been there when everything was frosty and white. We spent all day walking in the mountains and ate out in the evening, so we only went back to the house to sleep. The owners of the house lived nearby and gave us tips on the best walking routes. They clearly did loads of walking themselves, but perhaps they should have spent more time cleaning the holiday home – it could have done with it!'
    },
    {
      key: 'B',
      label: 'Phillip',
      text: 'My wife and I have just spent two weeks in an apartment by the sea with our two children. There were lots of other families staying in the same block, so the kids weren’t short of friends. I can’t remember how many times we got lost while driving there, but the beach was great, and unlike many holidays I’d been on before, there was no need to clean the apartment when we arrived. Normally, pictures you see of holiday accommodation on websites are taken using special cameras to make the rooms look bigger than they actually are. The opposite seemed to be true there, though, which was a pleasant surprise. I can’t say the colours the owners had painted the walls were to my taste, but you can’t have everything, I guess. As well as the sea, there were hills behind the town, so we spent time hiking in those as well as relaxing on the beach.'
    },
    {
      key: 'C',
      label: 'Alicia',
      text: 'My parents discovered the hotel we’ve just come back from a few years ago. We’ve been there in both summer and winter, and I’ve always enjoyed it whatever time of year it is. It belongs to a lovely family, who we’ve got to know well. I lost my passport when we were there this time, and I had to get them to translate when I reported it to the police. They were happy to do it, though. Our rooms are usually huge, but the only ones available this year were probably half the size, which was a bit of a shock. At least I had my own bedroom – I can’t think of anything worse than sharing. While I was there, I reserved a couple of rooms for my parents and me next spring. It’s their 25th wedding anniversary and my grandparents are going to pay as a special surprise. It’s a beautiful area and the perfect place to stay.'
    },
    {
      key: 'D',
      label: 'Hassan',
      text: 'My family has been going away with my best friend and his parents for years. This time, we found a house by a lake, which seemed like a great place for a holiday, especially in summer. Getting there was relatively straightforward and, although the house was fairly small, we thought it’d be fine for the six of us. Anyway, according to the guidebook, there was a huge variety of things to do in the region, which my parents and I hoped to make the most of. Once we’d got there, all the others fancied doing, however, was swimming in the lake and relaxing at the house. Because we’d travelled there in their car, it meant we were stuck and ended up spending far more time in the house and at the lake than we were hoping. This created quite a bit of tension between us, and I was left wishing we’d rented two separate houses instead of just one!'
    }
  ],
  questions: [
    {
      no: 'a', marks: 1, ans: 'C',
      stem: 'says their accommodation was smaller than they were expecting?',
      key: 'the only ones available this year were probably half the size',
      para: 'half the size ↔ smaller than they were expecting；a bit of a shock ↔ 与预期反差大',
      why: 'C 段说往年房间 “usually huge”，今年只剩 “probably half the size”，而且 “which was a bit of a shock”，正是“比预想的小”。',
      trap: 'B 段也提到房间大小，但说的是网站照片用特殊相机把房间拍得比实际大，属于“照片失真的惊喜”，不是“比预期小”。'
    },
    {
      no: 'b', marks: 1, ans: 'D',
      stem: 'felt uncomfortable sharing their accommodation with another family?',
      key: 'This created quite a bit of tension between us',
      para: 'going away with my best friend and his parents ↔ 与另一个家庭同住；tension ↔ uncomfortable',
      why: 'D 段一家与好友一家合住一栋房子，行程节奏不合，“created quite a bit of tension”，最后 “wishing we’d rented two separate houses”，说明共处让他不自在。',
      trap: 'C 段说 “I can’t think of anything worse than sharing”，但指的是与家人共享卧室、不愿与人合住一间，不是与另一个家庭合住整栋房。'
    },
    {
      no: 'c', marks: 1, ans: 'A',
      stem: 'suggests that their accommodation was rather dirty?',
      key: 'perhaps they should have spent more time cleaning the holiday home',
      para: 'should have spent more time cleaning ↔ 该打扫却没打扫 → rather dirty；it could have done with it ↔ 确实需要打扫',
      why: 'A 段先夸房东热心给徒步建议，接着转折：他们本该多花点时间打扫，房子“确实需要打扫一下”，暗示不干净。',
      trap: 'B 段说 “there was no need to clean the apartment when we arrived”，意思是不用自己动手打扫，属于优点，方向相反。'
    },
    {
      no: 'd', marks: 1, ans: 'B',
      stem: 'admits to not liking how the accommodation was decorated?',
      key: 'the colours the owners had painted the walls were to my taste',
      para: 'the colours … painted the walls ↔ 装修配色；not to my taste ↔ 不合我的口味',
      why: 'B 段用 “I can’t say … were to my taste” 这种委婉否定，等于明说墙面的颜色他不喜欢。',
      trap: 'A 段 “The style of the place wouldn’t please some people” 说的是房子的风格可能不合有些人的意，但他自己 “it suited us”，并不讨厌。'
    },
    {
      no: 'e', marks: 1, ans: 'A',
      stem: 'says they spent little time in their accommodation during the holiday?',
      key: 'we only went back to the house to sleep',
      para: 'only went back to the house to sleep ↔ 只回去睡觉 → 待的时间很少',
      why: 'A 段说白天都在山里徒步、晚上在外面吃饭，回房子只是睡觉，直接说明在住处的时间很短。',
      trap: 'D 段是 “spent far more time in the house”，时间反而更多，方向相反，容易被 “at the lake” 干扰。'
    },
    {
      no: 'f', marks: 1, ans: 'C',
      stem: 'needed to ask the owners of the accommodation for help?',
      key: 'I had to get them to translate when I reported it to the police',
      para: 'get them to translate ↔ 请房东帮忙翻译；“them” 指上一句的 a lovely family（房东一家）',
      why: 'C 段丢了护照要去警察局报案，语言不通，“had to get them to translate”，即必须请房东帮忙。',
      trap: 'A 段房东 “gave us tips on the best walking routes” 是主动提供建议，不是被请求帮忙，也不是必要之举。'
    },
    {
      no: 'g', marks: 1, ans: 'B',
      stem: 'had difficulty finding the way to their accommodation?',
      key: 'I can’t remember how many times we got lost while driving there',
      para: 'got lost while driving there ↔ 开车去的路上迷路 → had difficulty finding the way',
      why: 'B 段用 “记不清迷路了多少次” 强调反复走错，正是“找路困难”。',
      trap: 'D 段相反，说 “Getting there was relatively straightforward”，一路顺利，是典型的反义干扰项。'
    },
    {
      no: 'h', marks: 1, ans: 'A',
      stem: 'wishes they’d stayed in the accommodation at a different time of year?',
      key: 'I’d love to have been there when everything was frosty and white',
      para: 'I’d love to have been there when … ↔ 希望当时是另一个时节；frosty and white ↔ 下雪的冬天',
      why: 'A 段去的是滑雪场却赶上暖冬没雪，“I’d love to have been there when everything was frosty and white” 是对“换个时间再来”的明确愿望。',
      trap: 'C 段说 “We’ve been there in both summer and winter … whatever time of year”，是任何季节都满意，与“希望换个季节”相反。'
    },
    {
      no: 'i', marks: 1, ans: 'D',
      stem: 'wanted to explore the area around their accommodation more?',
      key: 'there was a huge variety of things to do in the region, which my parents and I hoped to make the most of',
      para: 'hoped to make the most of ↔ 想充分利用、多走走；a huge variety of things to do ↔ 周边可玩的多',
      why: 'D 段本想去周边玩，但同行的人只想在湖边待着，结果 “spending far more time in the house … than we were hoping”，说明他想探索却没实现。',
      trap: 'B 段确实去山里徒步了，是“已经探索”，不是“想探索更多”；A 段整天在山里走，也不缺探索。'
    },
    {
      no: 'j', marks: 1, ans: 'C',
      stem: 'has already booked to go back to the same accommodation?',
      key: 'I reserved a couple of rooms for my parents and me next spring',
      para: 'reserved ↔ booked；next spring ↔ 已经订好了下次',
      why: 'C 段明说已经为明年春天预留了两间房，还提到是父母结婚 25 周年，属于“已经预订再来”。',
      trap: 'A 段 “I’d love to have been there” 只是愿望，没有订；D 段 “wishing we’d rented two separate houses” 是后悔，不是预订。'
    }
  ],
  vocab: [
    { w: 'rented', ipa: '/ˈrentɪd/', pos: 'adj.', lvl: 'B2', def: 'paid for and used for a period of time', cn: '租来的', col: 'a rented house / flat', q: 'There were eight of us in one rented house' },
    { w: 'resort', ipa: '/rɪˈzɔːt/', pos: 'n.', lvl: 'B2', def: 'a place where many people go for holidays', cn: '度假胜地；滑雪场', col: 'a ski / seaside resort', q: 'We stayed at a ski resort' },
    { w: 'frosty', ipa: '/ˈfrɒsti/', pos: 'adj.', lvl: 'B2', def: 'covered with a thin white layer of ice; very cold', cn: '结霜的；严寒的', col: 'a frosty morning / frosty and white', q: 'when everything was frosty and white' },
    { w: 'tips', ipa: '/tɪps/', pos: 'n.', lvl: 'B2', def: 'useful pieces of advice about how to do something', cn: '建议；小窍门', col: 'give sb tips on sth / handy tips', q: 'gave us tips on the best walking routes' },
    { w: 'short of', ipa: '/ˈʃɔːt əv/', pos: 'phrase', lvl: 'B2', def: 'not having enough of something', cn: '缺少；不足', col: 'be short of time / money / friends', q: 'the kids weren’t short of friends' },
    { w: 'block', ipa: '/blɒk/', pos: 'n.', lvl: 'B2', def: 'a large building that is divided into separate flats or offices', cn: '（公寓）楼；街区', col: 'a block of flats / in the same block', q: 'staying in the same block' },
    { w: 'straightforward', ipa: '/ˌstreɪtˈfɔːwəd/', pos: 'adj.', lvl: 'B2', def: 'simple and easy to do or understand', cn: '简单明了的；顺利的', col: 'fairly / relatively straightforward', q: 'Getting there was relatively straightforward' },
    { w: 'variety', ipa: '/vəˈraɪəti/', pos: 'n.', lvl: 'B2', def: 'a range of different things of the same general type', cn: '多样性；种类', col: 'a huge / wide variety of sth', q: 'there was a huge variety of things to do in the region' },
    { w: 'make the most of', ipa: '/ˌmeɪk ðə ˈməʊst əv/', pos: 'phrase', lvl: 'B2', def: 'to use an opportunity as well as you can', cn: '充分利用', col: 'make the most of your time / the region', q: 'which my parents and I hoped to make the most of' },
    { w: 'fancy doing', ipa: '/ˌfænsi ˈduːɪŋ/', pos: 'phrase', lvl: 'B2', def: 'to want to do something (informal)', cn: '想要做（某事）', col: 'fancy doing sth / fancy a drink', q: 'all the others fancied doing, however, was swimming in the lake' },
    { w: 'end up doing', ipa: '/ˌend ʌp ˈduːɪŋ/', pos: 'phrase', lvl: 'B2', def: 'to finally be in a situation you did not plan', cn: '最终变成；结果沦落到', col: 'end up doing sth / end up in trouble', q: 'ended up spending far more time in the house' },
    { w: 'tension', ipa: '/ˈtenʃn/', pos: 'n.', lvl: 'C1', def: 'a feeling of nervousness or unfriendliness between people', cn: '紧张关系；矛盾', col: 'create / cause tension between', q: 'This created quite a bit of tension between us' },
    { w: 'available', ipa: '/əˈveɪləbl/', pos: 'adj.', lvl: 'B2', def: 'able to be bought, used or obtained', cn: '可获得的；可用的', col: 'the only ones available / readily available', q: 'the only ones available this year' },
    { w: 'anniversary', ipa: '/ˌænɪˈvɜːsəri/', pos: 'n.', lvl: 'B2', def: 'a date on which something special happened in a previous year', cn: '周年纪念日', col: 'a wedding / 25th anniversary', q: 'It’s their 25th wedding anniversary' },
    { w: 'to my taste', ipa: '/tə maɪ ˈteɪst/', pos: 'phrase', lvl: 'C1', def: 'matching what you personally like', cn: '合我的口味（多用于否定）', col: 'not to my taste / to everyone’s taste', q: 'were to my taste' }
  ],
  syntax: [
    {
      q: 'The style of the place wouldn’t please some people and it was only just big enough for everyone, but it suited us.',
      tags: ['并列句', 'only just'],
      main: 'The style wouldn’t please some people …, but it suited us.',
      parts: [
        { r: '分句 1', t: 'The style of the place wouldn’t please some people —— 房子的风格不会讨某些人喜欢' },
        { r: '分句 2', t: 'it was only just big enough for everyone —— “only just” 强调“刚刚够”，勉强但够住' },
        { r: '转折', t: 'but it suited us —— 但很适合我们；suited 是“合……的意”' }
      ],
      cn: '这地方的风格可能不合有些人的口味，而且它的大小也只是勉强够所有人住，但它很适合我们。',
      note: 'only just = 差一点就不够，阅读题里常用来暗示“勉强达标”，是判断作者态度的关键副词。'
    },
    {
      q: 'I can’t remember how many times we got lost while driving there',
      tags: ['宾语从句', 'while + 分词'],
      main: 'I can’t remember how many times we got lost',
      parts: [
        { r: '主句', t: 'I can’t remember —— 我记不清' },
        { r: '宾语从句', t: 'how many times we got lost —— 由 how many times 引导，作 remember 的宾语' },
        { r: '时间状语', t: 'while driving there —— while + 现在分词，主语与主句一致（we），等于 while we were driving there' }
      ],
      cn: '我记不清开车去那里的路上我们迷了多少次路。',
      note: '“记不清多少次”是英语里表达“次数极多”的常用夸张说法，匹配题常对应 difficulty / repeatedly。'
    },
    {
      q: 'Normally, pictures you see of holiday accommodation on websites are taken using special cameras to make the rooms look bigger than they actually are.',
      tags: ['省略关系词的定语从句', '被动语态', '比较从句'],
      main: 'pictures … are taken using special cameras',
      parts: [
        { r: '主语', t: 'pictures you see of holiday accommodation on websites —— 省略了 that/which 的定语从句修饰 pictures' },
        { r: '谓语', t: 'are taken —— 被动语态，“被拍摄”' },
        { r: '方式状语', t: 'using special cameras —— 现在分词表方式' },
        { r: '目的状语', t: 'to make the rooms look bigger than they actually are —— 比较从句，than 后省略了 the rooms' }
      ],
      cn: '通常，你在网站上看到的度假住宿照片都是用特殊相机拍的，好让房间看起来比实际更大。',
      note: '这句是 (d) 的干扰源：说的是“照片显得大”，不是“实际比预期小”，读题时要盯住主语到底是 photos 还是 rooms。'
    },
    {
      q: 'Although the house was fairly small, we thought it’d be fine for the six of us.',
      tags: ['让步状语从句', '形式宾语'],
      main: 'we thought (that) it would be fine',
      parts: [
        { r: '让步', t: 'Although the house was fairly small —— although 引导让步，不能与 but 连用' },
        { r: '主句', t: 'we thought it’d be fine for the six of us —— it’d = it would；it 指房子' },
        { r: '介词短语', t: 'for the six of us —— 对我们六个人来说' }
      ],
      cn: '虽然房子相当小，但我们觉得它对我们六个人来说够用了。',
      note: 'although 与 but 只能留一个，写作高频扣分点；阅读里 although 从句常是被弱化的背景信息，重点在主句。'
    },
    {
      q: 'Because we’d travelled there in their car, it meant we were stuck and ended up spending far more time in the house and at the lake than we were hoping.',
      tags: ['原因状语从句', '过去完成时', 'end up doing', '比较结构'],
      main: 'it meant (that) we were stuck and ended up spending far more time … than we were hoping',
      parts: [
        { r: '原因从句', t: 'Because we’d travelled there in their car —— 过去完成时，动作发生在主句之前' },
        { r: '主句', t: 'it meant we were stuck —— it 为形式主语，真正内容在后面' },
        { r: '并列谓语', t: 'ended up spending —— end up doing 表示“最终落到……的地步”' },
        { r: '比较', t: 'far more time … than we were hoping —— far 修饰比较级；than 后是省略了的 hoping 宾语' }
      ],
      cn: '因为我们是坐他们的车去的，这就意味着我们被拴住了，结果在房子和湖边待的时间远远超过我们原本的打算。',
      note: '“be stuck” 在这里不是“被困住”的字面义，而是“没有交通工具、走不了”，是 (i) 题的关键因果。'
    },
    {
      q: 'I was left wishing we’d rented two separate houses instead of just one!',
      tags: ['被动 + 分词', '虚拟语气', 'instead of'],
      main: 'I was left wishing …',
      parts: [
        { r: '被动结构', t: 'I was left wishing —— be left doing，“被留在……的状态中”，即“最后只剩下……的念头”' },
        { r: '虚拟从句', t: 'we’d rented = we had rented —— wish 后接过去完成时，表示对过去的后悔' },
        { r: '对比', t: 'instead of just one —— 而不是只租一栋' }
      ],
      cn: '到头来我只剩一个念头：当初我们该租两栋独立的房子，而不是只租一栋！',
      note: 'wish + had done 是“后悔没做”的标准结构，匹配题里常对应 regret / wish。'
    }
  ]
});
