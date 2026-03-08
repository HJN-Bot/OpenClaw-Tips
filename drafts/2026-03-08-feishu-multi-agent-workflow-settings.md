# Feishu × Airtable × Dashboard 多Agent工作流设置记录（HJN）

## 背景
目标：把现有 4-agent 框架（Andrew/Rex/Lulu/Alex）与 Feishu Wiki、Airtable Tasks、Dashboard 完整打通。

核心原则：
1. Airtable 是任务真源（输入）
2. Feishu/GitHub 是交付物承载（输出）
3. Dashboard 是状态与评估看板（可视化）
4. 交付后必须回写 Task Desc（证据链接）

---

## 一、当前 Wiki 现状理解（基于真实读取）

### 1) AI Collection
- 现状：有能力画像、学习路径、阶段计划，内容成熟
- 定位：Andrew 行动层（学习执行）
- 继续沿用：作为 AI 学习任务拆解与每周学习行动主阵地

### 2) AI Solid Knowledge
- 现状：偏目标与长期知识结构
- 定位：Andrew 底座层（稳定知识）
- 继续沿用：概念库/方法库/术语与范式沉淀

### 3) R·Agent
- 现状：PoC、需求文档、技术栈、商业模式、路演等
- 定位：Rex 项目主线
- 继续沿用：项目推进记录、关键决策、里程碑证据

### 4) 全栈开发
- 现状：工程化学习地图
- 定位：Rex 工程化能力线
- 继续沿用：技术方案、实现路线、工程实践复盘

### 5) RAify
- 现状：首页/相对轻量
- 定位：Rex 创业试验板块
- 继续沿用：创业实验、假设验证、商业探索记录

### 6) She Codes Herself
- 现状：对谈/内容表达相关
- 定位：Lulu 输入输出主阵地
- 继续沿用：选题、脚本、发布复盘

### 7) 思维宫殿
- 现状：个人认知与辩论/思考内容
- 定位：Alex Personal 主阵地
- 继续沿用：Journal、读书感悟、情绪关系动作

---

## 二、Agent → Tag → Wiki 映射（定稿）

### Andrew（AI学习）
- 输入 tag：AI学习
- 输出 Wiki：AI Collection（行动层） + AI Solid Knowledge（底座层）
- 模板产出：
  1. 学习任务拆解（今日最小成功）
  2. 概念讲解卡（费曼三层）
  3. 可复用方法卡（Prompt/流程）

### Rex（工作/CER/工程）
- 输入 tag：工作 + CER
- 输出 Wiki：R·Agent + 全栈开发 + RAify
- 模板产出：
  1. 项目推进日报/周报
  2. 风险阻塞清单（owner/截止）
  3. 技术方案与交付证据（GitHub链接）

### Lulu（输入输出）
- 输入 tag：输出生产 + 兴趣探索
- 输出 Wiki：She Codes Herself
- 模板产出：
  1. 选题卡
  2. 脚本草稿
  3. 发布复盘（数据+下一步）

### Alex（Personal）
- 输入 tag：情感关系 + 健身
- 输出 Wiki：思维宫殿
- 模板产出：
  1. Journal/复盘
  2. 读书感悟
  3. 情绪与关系动作卡

---

## 三、文档命名与安全边界

### 命名规范
- 所有 AI 生成草稿：`<主题> - Sam`

### 编辑边界
- 默认只创建/更新 `... - Sam` 页面
- 默认不修改非 Sam 页面
- 删除、覆盖、批量更新必须二次确认

---

## 四、统一输出模板（适用于每个板块）

```markdown
# <标题> - Sam

## Context
- Task ID:
- Tag:
- OwnerAgent:
- Date:

## Progress
- Top Doing:
- 状态：Done / Doing / ToDo
- 卡点：

## Deliverable
- 一句话交付：
- Feishu Link:
- GitHub Link:

## KPI Check
- Self KPI：
- User KPI：

## Next Step (<=30min)
- 
```

---

## 五、回写规则（Airtable/Dashboard 联动）
每次任务产出后，回写 Airtable Task Desc：

- Deliverable: <一句话>
- Feishu: <url or N/A>
- GitHub: <url or N/A>
- OwnerAgent: <andrew|rex|lulu|alex>
- Status: <Draft|Review|Published>
- Next: <下一步>

Dashboard 直接读取 Desc 展示证据与状态。

---

## 六、迭代变强看板（v1.2）对应逻辑
- 每个 agent 一行
- 支持按 tag 切换
- 每个 tag 下支持任务左右切换
- 展示进度条、当前任务、Feishu/GitHub 证据链接
- 分数保留精简呈现：
  - Self KPI 方向
  - User KPI 方向
  - 分数来源（小字 basis）

---

## 七、下一步执行顺序
1. 在 7 个 Wiki 下创建/维护 `Workflow Draft - Sam`
2. 将对应模板内容写入（按 agent 范围）
3. 打通 Discord 更新 -> Airtable Desc 自动回写
4. Dashboard 持续显示任务进度 + 证据链接
5. 每周复盘 KPI（Self + User）



---

## 八、模板升级（V2：实操驱动，不是汇报驱动）

> 目标：每周直接拿来执行，减少“向人汇报口吻”，强调“产出物与推进动作”。

### 8.1 页面类型（每个 Agent 每周 3 类）
1) **Runbook 页面**（本周怎么做）
2) **Deliverables 页面**（本周做出了什么）
3) **Decision Log 页面**（关键决策与取舍）

### 8.2 推荐命名
- `<Agent>-<YYYY-WW>-Runbook - Sam`
- `<Agent>-<YYYY-WW>-Deliverables - Sam`
- `<Agent>-<YYYY-WW>-Decisions - Sam`

### 8.3 Runbook（实操模板）
```markdown
# <Agent> Week <YYYY-WW> Runbook - Sam

## This Week Outcome Targets
- O1:
- O2:

## Execution Queue (from Airtable tags)
- [ ] Task A (id: ...)
- [ ] Task B (id: ...)

## Work Packets (可执行包)
- Packet 1: 输入 -> 动作 -> 验收
- Packet 2: 输入 -> 动作 -> 验收

## Dependencies / Risks
- Dep:
- Risk:

## Next Trigger
- 如果 X 完成，自动触发 Y
```

### 8.4 Deliverables（产出模板）
```markdown
# <Agent> Week <YYYY-WW> Deliverables - Sam

## Produced Artifacts
1. Artifact:
   - Type: Feishu Doc / Bitable / GitHub PR / Script
   - Link:
   - Related Task IDs:
   - Usage:

2. Artifact:
   - ...

## Reusable Assets Created
- 模板/脚本/流程卡：

## Handover Notes
- 给主脑/其他agent的可复用说明：
```

### 8.5 Decision Log（决策模板）
```markdown
# <Agent> Week <YYYY-WW> Decisions - Sam

## Decision 1
- Context:
- Options Considered:
- Chosen:
- Why:
- Impact:

## Decision 2
- ...
```

### 8.6 回写策略（不变）
每次关键产出仍回写 Airtable Task Desc：
- Deliverable / Feishu / GitHub / OwnerAgent / Status / Next

这样 Dashboard 不需要长文，也能看到“本周是否真的有产出与推进”。

### 8.7 上下文使用规则（新增）
- AI Collection / AI Solid Knowledge / 其他既有 Wiki 内容，视为各 Agent 的长期上下文来源。
- 新内容先写 `- Sam` 草稿，再由你合并到正式内容。
- 避免覆盖旧文档主体，优先“增量页 + 链接互引”。


---

## 九、Andrew Channel 可执行 Prompt / Skill 触发规范（落地版）

> 目标：当 Jianan 在 Andrew 频道一句话下指令时，系统能自动识别并调用 Andrew 的 Feishu 工作流 skill，写入对应 Wiki 草稿（`... - Sam`）并回写任务证据。

### 9.1 触发意图识别（Andrew）
以下类型的用户输入，默认触发 `feishu-agent-workflow`（Andrew 路由）：

1) **观点学习卡**（AI时代观点）
- 触发句型示例：
  - “Andrew，把我今天这个 AI 观点整理成 draft”
  - “Andrew，把这段 YouTube 学习内容写成观点总结”

2) **技巧方法卡**（AI技巧总结）
- 触发句型示例：
  - “Andrew，把这个 coding 技巧写进 AI技巧总结”
  - “把 changelog / implementation plan 这个方法总结成可复用卡片”

3) **Prompt 资产卡**（精品Prompt）
- 触发句型示例：
  - “Andrew，把这个 prompt 沉淀到精品Prompt”
  - “把这组提示词整理成模板，并给使用边界”

4) **画像更新卡**（佳楠的进化）
- 触发句型示例：
  - “Andrew，更新我这个阶段的能力画像和目标”
  - “按季度更新我的背景画像 + 下阶段目标”

### 9.2 Andrew 默认落点（不反复追问）
- 观点学习卡 -> `AI Collection / AI时代观点`
- 技巧方法卡 -> `AI Collection / AI技巧总结`
- Prompt资产卡 -> `AI Collection / 精品Prompt`
- 画像更新卡 -> `AI Collection / 佳楠的进化`
- 底层沉淀（概念/长期知识） -> `AI Solid Knowledge`

### 9.3 输出模板（执行优先）
每次输出采用 V2 实操模板（Runbook/Deliverables/Decision）中的相应子模版，并至少包含：
- Context（任务来源）
- Progress（Top Doing/卡点）
- Deliverable（一句话产出）
- Next（<=30min）
- KPI Check（Self KPI / User KPI）

### 9.4 资产回流规则（Andrew 特有）
当输出为“观点学习卡”时：
1) 自动抽取 1~5 条金句（可复用表达）
2) 回写 Airtable `Sounds Smart`（Name/Phrase/Example/Source）
3) 在任务 Desc 追加：`SoundsSmart: <写入条数>`

### 9.5 安全边界（强约束）
- 只创建/更新 `... - Sam` 草稿页
- 不改非 Sam 文档（除非用户明确指定）
- 不删除（删除由用户手动执行）
- 覆盖/批量更新需二次确认

### 9.6 Andrew Channel 快捷指令（建议）
- `/andrew insight <内容>` -> 观点学习卡
- `/andrew method <内容>` -> 技巧方法卡
- `/andrew prompt <内容>` -> Prompt资产卡
- `/andrew profile-update <内容>` -> 画像更新卡

### 9.7 最小闭环（每次都做）
1) 识别意图并选模板
2) 写入 Feishu 草稿（`... - Sam`）
3) 追加回写 Task Desc（Deliverable/Feishu/GitHub/Owner/Status/Next）
4) 若是观点卡，额外回流 Sounds Smart


---

## 十、Andrew 第二板块补充：AI Solid Knowledge（Paper-first）

> 定位：以“啃论文 + 学习方法 + 每日学习汇总”为主，不追求花哨，强调可复用分析框架。

### 10.1 输入来源
- Dashboard 灵感板块 `Papers`（默认 topic: `cs.AI / cs.CL / cs.LG`）
- 用户口述学习记录（语音/文本）
- 既有 Wiki 中“每日学习汇总”相关内容（作为上下文）

### 10.2 输出优先级（Andrew）
1) **Paper 深读卡**（最高优先）
2) **每日学习汇总卡**（次优先）
3) **学习方法卡**（仅维护，不高频）
4) GitHub coding 深读（当前暂不写）

### 10.3 Paper 深读卡模板（v1）
```markdown
# Paper Deep Dive - Sam

## Paper Meta
- Title:
- Link:
- Topic: (cs.AI/cs.CL/cs.LG)

## Scan（快速扫描）
- 这篇在解决什么问题：
- 核心方法一句话：
- 主要结果一句话：

## Learn（学习收获）
- 我学到的 3 个点：
1)
2)
3)

## Link（知识链接）
- 与我现有项目/方法的连接：
- 可复用到 CER/工作/内容输出的点：

## Inspire（创新启发）
- 一个可实验方向：
- 一个可立即行动（<=30min）：
```

### 10.4 每日学习汇总模板（v1）
```markdown
# Daily Learning Summary - Sam

## 今日输入
- Paper/视频/文章：

## 今日扫描结论
- Top1 观点：
- Top1 方法：

## 今日收获
- 认知增量：
- 技术增量：

## 明日动作
- 30min 可验收动作：
```

### 10.5 Bitable/表格联动建议（先扩展，不替代正文）
可在 AI Solid Knowledge 下维护一个“Paper Tracker（多维表格）”，字段建议：
- Date
- Source Link
- Topic
- Problem
- Method
- Result
- Relevance to Jianan (1-5)
- Next Action
- Status (Scanned / Deep-dived / Applied)

### 10.6 与 Dashboard 联动规则
- Dashboard Papers 仅作为“发现入口”
- 真正沉淀写入 AI Solid Knowledge 的 `... - Sam` 草稿
- 产出后回写 Task Desc：
  - `Deliverable: Paper Deep Dive`
  - `Feishu: <draft link>`
  - `Status: Draft/Review`

### 10.7 Sounds Smart 回流（观点类）
当论文解读中出现可复用金句时：
- 抽取 1~3 条金句
- 回流 Airtable Sounds Smart
- 在 Desc 增加 `SoundsSmart: <count>`


---

## 十一、Lulu 板块补充：She Codes Herself（灵感→文案/脚本→发布资产）

> 定位：把“灵感输入”快速转成“可发布资产”。

### 11.1 目标与范围
Lulu 负责两个核心产出技能：
1) **图文文案生成**（公众号/小红书）
2) **视频脚本生成**（含镜头节奏/口播文本/转场建议）

工作站：`She Codes Herself` Wiki。

### 11.2 输入来源
- 你在 Wiki/Discord 提供的灵感（主题、角度、素材）
- Dashboard 对应标签任务（`输出生产` + `兴趣探索`）
- 历史内容上下文（旧脚本、旧发布风格）

### 11.3 输出分层（双落点）
- **Feishu（内容中台）**：策略、草稿、复盘（`... - Sam`）
- **GitHub（可下载资产）**：可执行/可下载文件（md/html/脚本/素材清单）

原则：
- Feishu 放“阅读与协作内容”
- GitHub 放“交付与下载内容”

### 11.4 关键联动规则（必须）
当 Lulu 生成 GitHub 资产后，必须在 Feishu 同名文档回写：
- `GitHub Asset Link: <repo/path>`
- `Asset Type: script / article / html / storyboard / checklist`
- `Usage: 如何打开与使用`

同时回写 Task Desc：
- Deliverable
- Feishu Link
- GitHub Link
- Status

### 11.5 She Codes Herself 模板（v1）

#### A) 灵感转选题卡
```markdown
# Idea Card - Sam

## Input
- 灵感来源：
- 目标受众：

## 选题角度（3选1）
1)
2)
3)

## 推荐主角度
-

## 下一步
- 先产出图文/视频：
```

#### B) 图文文案卡（公众号/小红书）
```markdown
# Content Draft - Sam

## 平台
- 公众号 / 小红书

## 标题候选（3个）
1)
2)
3)

## 正文结构
- Hook
- 核心观点
- 操作步骤
- 结尾CTA

## 发布参数
- 封面建议：
- 关键词：
```

#### C) 视频脚本卡
```markdown
# Video Script - Sam

## 主题
-

## 时长
- 30s / 60s / 90s

## 分镜脚本
1) 画面：
   口播：
2) 画面：
   口播：

## 动效/转场建议
-

## 交付资产
- GitHub Link:
```

#### D) 发布复盘卡
```markdown
# Publish Review - Sam

## 本次发布
- 链接：
- 平台：

## 数据
- 播放/阅读：
- 互动：

## 复盘
- 做对了：
- 可改进：

## 下一条动作（<=30min）
-
```

### 11.6 Lulu 触发句型（频道）
- “Lulu，把这个灵感变成小红书文案”
- “Lulu，按这个主题给我视频脚本”
- “Lulu，把可下载资产放 GitHub，并把链接写回 wiki”

### 11.7 安全边界
- 只创建/更新 `... - Sam`
- 不改你的正式稿（除非明确要求）
- 不删除


---

## 十二、Rex 板块补充：R·Agent / 全栈开发 / RAify（Work+CER）

> 定位：Rex 负责“工作推进 + 工程化成长 + 创业预备”三条线，输出要可执行、可复盘、可路演。

### 12.1 板块定位

#### A) R·Agent（主线）
核心板块：
- 开发管理
- 执行学习
- 路演（高优先）

Rex 的重点职责：
1) 项目推进节奏管理（任务进度可视化）
2) 路演材料共创（每页逻辑/结构/证据）
3) 学习内容沉淀（与 CER/执行相关）

#### B) 全栈开发（工程成长线）
- 用“全栈视角”记录成长、规划目标、沉淀工程笔记
- 与 R·Agent 内容互链，避免重复写两份

#### C) RAify（创业预备线）
- 人脉搭建
- 资源积累
- 创业画像补全
- 商业思维习惯复盘
- 创业进度记录

当前状态：实践不足；Rex 以 mentor 角色驱动问题清单、节奏管理与答疑。

### 12.2 输入来源
- Airtable / Dashboard 标签：`工作` + `CER`
- 你口述的项目进展、路演思路、学习心得
- 历史 wiki 页面（PoC/技术栈/商业模式/路演汇总）

### 12.3 输出优先级
1) **路演共创包**（最高）
2) **执行进度摘要**
3) **学习沉淀卡（执行学习）**
4) **创业进度与导师问答卡（RAify）**

### 12.4 模板（v1）

#### A) 路演共创包（R·Agent）
```markdown
# Pitch Pack - Sam

## Presentation Narrative
- 核心问题：
- 目标用户：
- 解决方案：
- 证据与数据：

## Slide-by-Slide Plan
1. 封面（信息）
2. Problem（痛点）
3. Why now（时机）
4. Solution（方案）
5. Demo/Flow（流程）
6. Traction/Validation（验证）
7. Business Model（商业）
8. GTM（增长）
9. Team（团队）
10. Ask（需求）

## 每页产出状态
- Done / Doing / ToDo

## Next (<=30min)
-
```

#### B) 执行进度摘要（R·Agent / 全栈开发）
```markdown
# Execution Weekly - Sam

## 本周目标
-

## 进度看板
- Done:
- Doing:
- ToDo:

## 阻塞与风险
- 风险:
- owner:
- 截止:

## 证据链接
- Feishu:
- GitHub:
```

#### C) 执行学习沉淀卡
```markdown
# Execution Learning Note - Sam

## 学习主题
-

## 场景
- 来自哪个任务/问题：

## 方法与心得
- 做法：
- 成果：
- 坑点：

## 可复用 SOP
-
```

#### D) RAify 创业进度与导师问答卡
```markdown
# RAify Mentor Log - Sam

## 本周创业进度
-

## 资源/人脉动作
-

## 商业思维复盘
-

## 导师问题（Rex提出）
1)
2)
3)

## 你的回答与下一步
-
```

### 12.5 互链规则（R·Agent <-> 全栈开发 <-> RAify）
- 同一事项只保留“主页面”一份正文，其他页面用链接引用
- 每篇结尾固定增加：`Related Pages`
- 路演材料优先挂在 R·Agent，工程实现细节挂全栈开发，创业策略挂 RAify

### 12.6 回写规则（不变）
每次关键产出后回写 Task Desc：
- Deliverable / Feishu / GitHub / OwnerAgent / Status / Next

### 12.7 Rex 频道触发句型
- “Rex，更新本周执行进度并给出阻塞处理方案”
- “Rex，按路演结构帮我拆每页内容和证据”
- “Rex，把这个学习心得沉淀为可复用SOP”
- “Rex，在RAify视角给我本周导师问题清单”
