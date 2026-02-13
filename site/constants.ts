import { Post, Category } from './types';

export const CATEGORIES: Category[] = ['All', 'Practice', 'Setup', 'Tips', 'Q&A'];

const AUTHOR = 'HJN';
const AUTHOR_AVATAR = 'https://ui-avatars.com/api/?name=HJN&background=0f172a&color=fff&size=128';

export const MOCK_POSTS: Post[] = [
  // --- HOME ---
  {
    id: 'home',
    title: 'OpenClaw Tips · 让 AI 变成你的「执行系统」',
    date: 'Overview',
    location: 'Practice / Setup / Tips / Q&A',
    category: 'Intro',
    viewpoint: '把碎片输入变成交付物：灵感/语音/聊天 → 提纲 → 直接生成 md/html/code → 入库（GitHub/Airtable）→ 可复盘可迭代。',
    content: '这是一套可复用的方法：不是“会用AI”，而是“用AI做出可交付的东西，并让系统越用越顺”。',
    characteristics: [
      { label: '你会看到什么', description: 'Practice：真实案例；Setup：系统搭建；Tips：高频技巧；Q&A：边界与协作。' },
      { label: '适用人群', description: '产品/运营/独立开发/创业者：信息多、产出要求高、需要把执行系统化的人。' },
      { label: '核心信念', description: 'AI=外骨骼，不是代替肌肉：目标/取舍/验收/复盘必须你来。' },
    ],
    images: [],
    author: AUTHOR,
    authorAvatar: AUTHOR_AVATAR,
  },

  // --- PRACTICE ---
  {
    id: 'practice-1',
    title: 'Vibe Project：灵感 → One-pager（md/html）→ 入库',
    date: 'Practice 01',
    location: '手机端 / 即时产出',
    category: 'Practice',
    viewpoint: '最关键的不是“聊得多”，而是“立刻有文件形状的交付物”。',
    content: `### 痛点\n- 灵感出现在地铁/路上/碎片时间，回到电脑续不上\n- 最难的是：直接生成一个可分享/可协作的交付文件\n\n### 做法（3步）\n1) 把想法压成 3-7 条提纲\n2) 让 OpenClaw 生成 \`README.md\` 或 \`index.html\` one-pager\n3) 直接 commit 到 GitHub（可协作资产）\n\n### 产出形态\n- 方案页（HTML）/ 文档（MD）/ Demo 页面（前端）\n\n### 你可以复制的提示词\n> 把我的口述整理成一个可以直接分享的 one-pager（md+html 两份）：包含背景、痛点、方案、交付物、下一步。`,
    images: [],
    takeaway: '交付物优先：先让作品存在，再慢慢变好。',
    author: AUTHOR,
    authorAvatar: AUTHOR_AVATAR,
  },
  {
    id: 'practice-2',
    title: '案例：Love-Spinner 从交互口述 → 可开发 Spec + 题库',
    date: 'Practice 02',
    location: '产品落地',
    category: 'Practice',
    viewpoint: '把“我脑子里的交互”翻译成“别人能开工”的工程资产。',
    content: `你提出：问题在中间，左右两个人分别选 ABCD，聊完后再选择一个“协商答案”。\n\n我做了三件事：\n- 题库：\`question_bank_v0.json\`（可扩展）\n- 交互规范：\`INTERACTION_SPEC.md\`（三栏作答 + 协商）\n- 推到 GitHub：\`HJN-Bot/Love-Spinner\`\n\n> 关键点：Spec 里必须写清数据结构（male/female/negotiated + notes），否则开发做不下去。`,
    links: [{ title: 'Repo: Love-Spinner', url: 'https://github.com/HJN-Bot/Love-Spinner' }],
    images: [],
    author: AUTHOR,
    authorAvatar: AUTHOR_AVATAR,
  },

  // --- SETUP ---
  {
    id: 'setup-1',
    title: '系统搭建：Airtable（数据底座） + Dashboard（中控台）',
    date: 'Setup 01',
    location: '效率系统',
    category: 'Setup',
    viewpoint: '底层一个真数据库，中层一个低噪音看板，表层一个交互协议。',
    content: `### 结构\n- 底层：Airtable（Tasks / Ideas / Goals / Weekly / 金句等）\n- 中层：Dashboard 展示近14天 Top8（只看最重要的）\n- 表层：交互约定（每次复盘都回流到 Airtable）\n\n### 自动化\n- 定时同步：Airtable → dashboard/index.html\n- 消息摘要：在 Discord 发 Top8（标题+状态+一句话）\n\n### 关键原则\n- Top8 低噪音：不做“全量信息垃圾场”\n- 一切以“可追踪可复盘”为导向`,
    images: [],
    author: AUTHOR,
    authorAvatar: AUTHOR_AVATAR,
  },
  {
    id: 'setup-2',
    title: '权限治理：L1 / L2 / L3（自动化不失控）',
    date: 'Setup 02',
    location: '安全与可控',
    category: 'Setup',
    viewpoint: '所有自动化都要分层：记录/建议/白名单执行。',
    content: `- **L1 自动记录**：整理归档，不执行\n- **L2 建议输出**：生成建议/草稿，你确认\n- **L3 白名单执行**：低风险动作自动做（可撤销/可审计）\n\n> 这套治理能让“全场景渗透生活”变得可信，而不是失控。`,
    images: [],
    author: AUTHOR,
    authorAvatar: AUTHOR_AVATAR,
  },

  // --- TIPS ---
  {
    id: 'tips-1',
    title: '高频 Tips：常用 skills 怎么选',
    date: 'Tips 01',
    location: '工具箱',
    category: 'Tips',
    viewpoint: '技能不是越多越好，按场景固定套路才有效。',
    content: `### 我常用的组合\n- 工程协作：github（gh） + coding-agent\n- 研究学习：summarize + blogwatcher + obsidian\n- 前端落地：frontend-design\n- 文档交付：nano-pdf\n- 视觉素材：nano-banana-pro\n\n### 经验法则\n- 要“快产出”：summarize / nano-banana-pro\n- 要“工程落地”：github / coding-agent\n- 要“长期积累”：obsidian / blogwatcher`,
    images: [],
    author: AUTHOR,
    authorAvatar: AUTHOR_AVATAR,
  },
  {
    id: 'tips-2',
    title: '高频 Tips：GitHub 仓库结构（可交接）',
    date: 'Tips 02',
    location: '仓库约定',
    category: 'Tips',
    viewpoint: '你要的不是“文件”，而是“别人拿走也能跑”的资产。',
    content: `推荐结构：\n- \`README.md\`：怎么用 + 交付物 + 下一步\n- \`notes/\`：脑暴/会议纪要\n- \`assets/\`：截图/海报/素材\n\n规则：\n- 每次改动都能复现（命令/截图/链接）\n- 重要结论要“回流”到文档与看板`,
    images: [],
    author: AUTHOR,
    authorAvatar: AUTHOR_AVATAR,
  },

  // --- Q&A ---
  {
    id: 'qa',
    title: 'Q&A：我和 AI 的边界怎么划？',
    date: 'Q&A',
    location: 'Boundaries',
    category: 'Q&A',
    viewpoint: '把焦虑变规则：AI 做执行，你做选择与复盘。',
    content: `这里是你可以现场互动填写的 Q&A。每个卡片会把你的回答保存在浏览器（localStorage），方便复盘。`,
    images: [],
    qaItems: [
      {
        topic: '能力边界',
        questions: [
          '哪些事情我必须自己做（否则成长不会发生在我身上）？',
          '哪些事情可以交给 AI 做到 80%（我只做验收/取舍）？'
        ]
      },
      {
        topic: '防能力外包',
        questions: [
          '每次 AI 产出后，我要回写的“3条 learning”是什么？',
          '我下一次要亲手做的“最小实现 20%”是哪一块？'
        ]
      },
      {
        topic: '协作协议',
        questions: [
          'L1/L2/L3 哪些动作我愿意放进白名单自动执行？',
          '我需要哪些审计/回滚机制才能放心？'
        ]
      }
    ],
    author: AUTHOR,
    authorAvatar: AUTHOR_AVATAR,
  },
];
