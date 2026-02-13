# OpenClaw-Tips（HJN 最佳实践）

> 目标：把我（HJN）在工作/生活里用 OpenClaw 的方法沉淀成可复用的套路。
> 框架：**代码｜学习｜效率管理｜个人定制｜情绪交互**。

---

## 0. 使用总纲（先记这 3 条）

1) **先跑通闭环，再谈形态**：输入→结构化→入库→提醒/执行→回放。
2) **只做可验收的输出**：每个任务必须有「交付物形状（文件/链接/命令）」+「通过标准」。
3) **一次只改一个变量**：尤其评测/AB test/提示词优化，否则无法归因。

---

## 1) 代码（Coding）

### 1.1 把“口头需求”落成可开发契约
- 输出：接口契约（API/Schema）+ 验收 checklist
- 做法：
  - 把需求拆成：输入/输出/状态机/失败分支/审计点
  - 每条验收都能用命令或截图证明

### 1.2 AB Test 的工程口径（以 CER 为例）
- 不要用“感觉更好”，用统一指标：
  - **硬门槛**：marker_validity/no_residue、parse_fail_rate、输出不丢原文
  - **质量**：有 golden 再算 FN/FP；无 golden 先看 agree_rate + 漂移
  - **成本**：tokens/latency
- 推荐策略：**B 先跑→校验不过回退 A**（混合策略）

### 1.3 让产物可回放（trace_id）
- 每个 event / run 都要有：输入指针、输出指针、日志指针
- 目的：排障、审计、复现

### 1.4 真实案例
- **CER 的 A/B 评测口径冲突**：Quick test 说 A 好、ABtest 说 B 好 → 先统一“硬门槛指标”（marker_validity/no_residue/parse_fail_rate/不丢原文），再谈质量/成本；最终建议混合策略 **B 先跑→校验不过回退 A**。
- **从 0 到 1 新建并交付一个小产品 repo**：把恋爱转盘做成可开发交付物（题库 JSON + 交互规范），并推到 GitHub（`HJN-Bot/Love-Spinner`），实现“想法→可协作工程资产”。

---

## 2) 学习（Learning）

### 2.1 20% 学习法（只学能验收的部分）
- 你不是要写完所有脚本，而是要能：
  - 复现（能跑）
  - 验收（知道对错）
  - 定位（知道卡在哪一步）

### 2.2 每次 AI 产出都“回写到自己身上”
- 固定动作：每次协作后写 3 条 learnings：
  - 我学到的概念/套路
  - 我能复用的命令/模板
  - 我下次会怎么更快

### 2.3 真实案例
- **春节学习清单（Phase One/Two）**：把大而全的学习拆成 3-5 天最小单元 checklist（只学能验收的 20%：E2E复现/Review+patch/rerun/Evals+AB/LLM验收）。仓库：`HJN-Bot/phase-one-phase-two-cny-checklist`。
- **Prompt+Skills 资源沉淀**：把零散的“好用网站/技巧”放进看板 threads，形成“随用随取”的学习入口（避免每次重复搜索）。

---

## 3) 效率管理（Execution / Ops）

### 3.1 每日站会输入模板（30 秒）
你每天只要发 3 行：
1) **今天必须交付**（1-2 个）
2) **今天推进**（2-3 个）
3) **时间约束/精力**（深度工作、会议、运动）

我输出 3 件套：
- Top3 优先级
- 时间线（可执行）
- checklist（可勾）+ 自动写入日历/看板

### 3.2 看板原则：Top8 + 低噪音
- Active Threads：近 14 天 Top8（按时间优先，其次 priority）
- 目的：减少“看板越做越乱”的负担

### 3.3 自动同步与提醒
- 用 cron/定时：Airtable→dashboard→消息摘要
- 提醒里只包含：Top8 + 是否需要 Idea→Task / 清理长期未动

### 3.4 真实案例
- **下班地铁提醒 + 自动同步**：每天定时从 Airtable 拉取近 14 天 Top8，同步到 `dashboard/index.html`，并在 Discord 发一条“低噪音摘要”（标题+相关+状态+一句话），同时提醒 Idea→Task 或清理长期未动。
- **把语音想法直接变成 Task**：你口述“明天要整理 cloud 交互体验并做网页分享”→ 我直接创建 Airtable 任务（High Priority），再立刻刷新 dashboard，保证第二天开工不丢。

---

## 4) 个人定制（Personalization）

### 4.1 L1/L2/L3 自主分层（任何自动化都按这个治理）
- **L1 自动记录**：只整理归档，不执行
- **L2 建议输出**：生成建议/草稿，你确认
- **L3 白名单执行**：低风险动作自动做（可撤销/可审计）

### 4.2 “外置器官”方向（Agent Organ Hub）
- 先用手机跑通闭环（C），再上穿戴 BLE（A）
- 输出要空间化：声/光/屏/动作
- 隐私最小基线：按键采集 + 不可关闭指示灯 + 本地优先 + 审计回放

### 4.3 真实案例
- **Love-Spinner：从需求到可交付 spec**：你提出“问题在中间，左右男女分别选 ABCD，聊完再协商一个答案”→ 我补齐了交互规格（`INTERACTION_SPEC.md`）、题库（`question_bank_v0.json`），并推到 GitHub，开发可直接开工。
- **Dashboard 目录规范化**：统一看板页面固定为 `workspace/dashboard/index.html`，配套服务脚本 `tools/dashboard_web.mjs`，避免“到处一个 index.html”导致维护崩掉。

---

## 5) 情绪交互（Emotion / Relationship with AI）

### 5.1 AI = 外骨骼，不是代替肌肉
- AI 负责：搜集、整理、初稿、自动化、重复劳动
- 你必须做：目标选择、关键取舍、验收标准、复盘、价值判断

### 5.2 防止“能力外包”的两条硬规则
1) 每次 AI 产出都要产出「我学到的 3 条」
2) 关键模块必须亲手做一遍“最小实现”（哪怕 20%）

---

## 6) 常用模板（可复制）

### 6.1 任务交付模板
- 目标：
- 输入：
- 输出（文件/链接/命令）：
- 验收标准：
- 风险与回滚：

### 6.2 汇报模板（老板/队友 one-on-one）
1) 本周交付（可演示）
2) 指标变化（不过线不合并）
3) 风险 & 需要资源
4) 下周验收点（≤3）

---

## 7) 好用的 Tips（具体到技能/账号/工具）

### 7.1 常用 Skills（按场景）
> 目标：把“会用”变成“形成固定套路”。

- **github（gh CLI）**：查 issue/PR、拉取代码、创建仓库（比如 Love-Spinner / OpenClaw-Tips）
  - 适用：工程协作、快速开源/内部共享
- **summarize**：总结 URL / PDF / 图片 / 音频 / YouTube（做研究、读论文、看视频）
- **blogwatcher**：监控博客/RSS，做行业情报与竞品追踪
- **obsidian**：把碎片化想法沉淀到 Obsidian vault（长期知识库）
- **coding-agent**：需要大量改代码/生成文件时，用子代理批量完成（你做“工程化落地”时最省命）
- **nano-pdf**：把 PDF 用自然语言编辑/加页/改格式（交付类文档）
- **nano-banana-pro**：做海报/封面/视觉素材（招募帖、one-pager配图）
- **bird（X/Twitter）**：抓线程/总结推文（需要 cookies 配置）

> 经验法则：
> - **要“快产出”**：summarize / nano-banana-pro
> - **要“工程落地”**：github / coding-agent
> - **要“长期积累”**：obsidian / blogwatcher

### 7.2 GitHub 账号与仓库约定
- 组织/账号：`HJN-Bot`
- 推荐仓库命名：
  - `OpenClaw-Tips`：方法论与最佳实践（这份文档所在）
  - `Love-Spinner`：恋爱转盘（题库+交互spec）
  - `phase-one-phase-two-cny-checklist`：学习路径/清单
- 约定：
  - `README.md` 写“怎么用 + 交付物 + 下一步”
  - 每次改动都能被别人复现（命令/截图/链接）

### 7.3 Dashboard（低噪音看板）
- 访问：`http://54.169.36.2:8080/`（Basic Auth）
- 服务脚本：`/home/ubuntu/.openclaw/workspace/tools/dashboard_web.mjs`
- 页面文件：`/home/ubuntu/.openclaw/workspace/dashboard/index.html`

**使用套路：**
1) Airtable 作为“单一事实来源”（Tasks/Ideas/Threads）
2) 定时同步把近 14 天 Top8 刷到 dashboard（只看最重要的）
3) 需要复盘时：从 dashboard 卡片回到 Airtable 查细节

### 7.4 个人定制 Tips（让系统越用越顺）
- 把所有“固定提醒/同步”交给 cron（而不是靠你记忆）
- 把“会话里产出的关键结论/待办”写入：Airtable + README/notes（可检索、可交接）
- 所有自动化都遵循：**L1记录 / L2建议 / L3白名单执行**

---

## 8) 未来补充
- Prompt Library（按场景）
- Dashboard 组件化（小屏/移动端）
- Agent Organ Hub 的 MVP 任务拆解
