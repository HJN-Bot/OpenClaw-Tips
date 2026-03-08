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
