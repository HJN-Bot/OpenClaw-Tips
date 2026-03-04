---
topic: OpenClaw-Tips
series: system-notes
status: draft
last_update: 2026-03-04
keywords:
  - A2A
  - Multi-agent
  - KPI
  - Power Panel
  - Dashboard
  - Cron
---

# OpenClaw 个人公司化系统（A2A 四维提升计划 · v0）

> 目标：把你的“主脑 Sam + 四部门频道”做成可执行的公司化协作系统：A2A 协作/开会/互评 → 四维 KPI → 奖励机制 → 自我进化。


## 0. 现状与约束（你已经确认的口径）

- 频道结构：主脑（Sam）+ 4 个频道（沿用现有命名）
- EoD：已有四频道 EoD，时间固定 **24:00（Asia/Shanghai）**
- 自省升级路线：
  1) 先做 **你个人自省（你 ↔ Sam 对话）**
  2) 再升级为 **组织层 Agent-level 自省（四部门一起）**
- Dashboard：新增一个 **「迭代变强」PowerBI 风格面板**（系统配置之前）
  - Lulu 增长数据先走 **手动输入 v0**


## 1) A2A 协作机制（v0 可执行）

### 1.1 组织结构（公司化）

- **Sam（主脑 / CEO）**
  - 负责：收敛目标、分派任务、合并周报、拍板奖惩、更新 playbook/changelog

- **Andrew（AI 系统 / 产出效率 / 前沿深刻能量）**
- **Rex（Work / 项目进度 / Team management / 出世入世）**
- **Lulu（增长 / 运营 / 视频指标 / 渠道矩阵）**
- **Alex（Personal / 幸福 / 心系统成熟度）**

### 1.2 A2A 消息协议（统一格式，便于统计）

**日报（EoD）模板**：
- `#status`: green/yellow/red
- `#wins`：≤3
- `#risks`：≤3
- `#next`：≤3
- `#ask`：1 条（可 @其他部门）

**周报（Weekly）模板**：
- `#kpi`：本周分数 + 证据链接
- `#insights`：3 条
- `#changes`：本周规则/skill/流程变更（写入 playbook）
- `#plan`：下周 3 个目标（可验收）

### 1.3 定点开会（建议）

- 周六 10:00：先保持为你个人自省（你 ↔ Sam）
- 组织层例会（A2A）建议后续再加：
  - 周六 10:30（或周日）四部门例会：每部门 10 分钟 + 互相提问环节


## 2) 四维 KPI（每个 Agent 一个 KPI 面板）

> 原则：每个维度 1 个北极星 KPI + 3 个辅助指标；必须可用证据链接。

### 2.1 Andrew（AI 体系 / 产出效率）

- 北极星：AI 协作带来的 **可验证产出**（每周产物数/质量）
- 辅助：
  - AI 使用频率（skills 触发次数 / 自动化触发）
  - 产出效率（同类产物耗时下降 / 模板复用）
  - 前沿深刻能量（每周至少 1 条前沿 Eureka + 1 条高效产出证据）

### 2.2 Rex（Work / 进度 / Team mgmt）

- 北极星：关键里程碑达成率（应交付 vs 实交付）
- 辅助：
  - 风险/阻塞闭环率（提出→解决/升级）
  - 对齐质量（纪要/责任人/时间线完整）
  - 领导力动作（分工、review、反馈、推动）

### 2.3 Lulu（增长 / 运营）

- 北极星：小红书粉丝增长（目标：尽快破 1000）
- 辅助：
  - 发布频率（视频/图文数）
  - Top 内容播放/互动（收藏/评论）
  - 渠道矩阵动作（知乎/YouTube/X 每周至少 1 个有效动作）

> v0 数据源：手动录入（Dashboard 保存）→ 后续升级为写回 Airtable + 趋势图。

### 2.4 Alex（Personal / 幸福 / 心系统）

- 北极星：幸福与稳定指数（每周自评 + Journal 证据）
- 辅助：
  - 情绪恢复速度（触发→恢复）
  - 关系经营动作（沟通/边界对齐）
  - 身体/作息基础（运动/睡眠/能量）


## 3) 奖励机制（v0）

### 3.1 给你的奖励（人）

- 四维 KPI 达标 ≥3 项：生成「本周高光回顾」+ 推荐 1 个奖励活动（休息/玩/小庆祝）。

### 3.2 给 Agent 的奖励（系统权限）

- 本周 KPI 帮你显著提升的 Agent：
  - 获得“下周自动化优先权”（更高频 cron / 更深的系统改动）
  - 获得“安装新 skill 的优先权”（并通过 vetter 安全检查）


## 4) 自我进化机制（v0：先你自省，再组织自省）

### 4.1 个人自省（你 ↔ Sam）

- 周六 10:00（Asia/Shanghai）：自省输出两段：
  1) 系统进化（我该怎么改：流程/规则/skills/cron/dashboard）
  2) 对你的建议（下周实验：可落 1 条 task）

### 4.2 组织自省（后续）

- 每个部门每周至少 1 个“进化动作”：
  - 新增/学习 1 个 skill 或 SOP
  - 修复 1 个摩擦点
  - 写入 playbook/changelog（让下周真的生效）


## 5) Dashboard：迭代变强（Power Panel）

- 位置：系统配置之前
- 风格：PowerBI（卡片 KPI / 趋势 / 证据列表 / 可下钻）
- v0 内容：
  - 本周总览 4 卡（Andrew/Rex/Lulu/Alex）
  - 本周任务状态统计（ToDo/Doing/Done）
  - Lulu 增长手动输入区（本地保存）
  - 证据 Top10（Threads + 本周任务）


## 附：参考视觉（来自你给的参考图）

- `drafts/system-notes/assets/reference-1.png`
- `drafts/system-notes/assets/reference-2.png`

