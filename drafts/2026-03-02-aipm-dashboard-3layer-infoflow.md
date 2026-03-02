---
topic: OpenClaw-Tips
series: AIPM-style
status: draft
audience: internal
last_update: 2026-03-02
keywords:
  - Airtable
  - Dashboard
  - Discord
  - Cron
  - Journal
  - Eureka
  - 信息流
---

# Dashboard 三层交互模型（Airtable 真源 → Web 中控 → Discord 触发/回执）

> 目标：把你当前的 Dashboard 工作流讲清楚：
> - 三层怎么分工
> - Web 层内部（Overview/Journal/Tasks/Calendar/System）怎么联动
> - Journal 如何映射到 Task / Eureka（“从文字到行动/洞察”）

本文是可直接迭代成《OpenClaw-Tips》正式章节的草稿。

---

## 0. 一句话总纲

Airtable 是 **base 真源**（Tasks/Ideas/Eurekas…），Web Dashboard 是 **中控视图与轻量编辑层**，Discord 是 **低摩擦输入端 + 主动提醒输出端（Cron）**。

---

## 1) 三层架构：谁是 Source of Truth，谁是 View

### Layer A：Airtable（Base 真源）

- **存什么**：
  - Tasks：title/desc/state/date/tag/priority（以及 start/deadline）
  - Ideas：灵感池、可转任务
  - Eurekas：顿悟/原则/复盘结论（可检索）
  - （可选）Sounds Smart/其它知识库

- **为什么 Airtable 做真源**：
  - 可结构化、可统计、可跨设备
  - 可被自动化（cron/agent）可靠读写

> 原则：对话里出现的“要执行/要复盘/要沉淀”的东西，最终必须写回 Airtable 或 MD（不允许只停在聊天记录里）。

### Layer B：Web Dashboard（视图/中控）

- **做什么**：
  - 用低信息量视图呈现“近期未完成”（例如：任务页的「待完成总览」）
  - 做轻量编辑（改 state/date/tag/title/desc）并写回 Airtable
  - 在“系统配置”页面暴露关键路径、cron、同步机制（减少遗忘与排障成本）

- **不做什么**：
  - 不把 Web 当作最终真源（否则会产生“看板上改了、库里没改”的分叉）

### Layer C：Discord（输入端 + 输出端）

- **输入端**：你用自然语言下指令（加任务/改规则/复盘）
- **输出端**：cron 主动把提醒/复盘推送给你（周五过期提醒、周六交互自省等）

---

## 2) Web 层内部：模块联动与信息流

你目前的 Web 层（8080 看板）可以理解为一个“多视图聚合器”，底层都围绕 Airtable 的数据。

### 2.1 Tasks（任务）

- 主视图：任务看板（ToDo/Doing/Done）
- 关键规则（已落地）：
  - 「待完成总览」= 近 30 天（含未来）ToDo + Doing + 搜索
  - Doing 不截断；本周 ToDo 不混历史噪音

**联动点：**
- 改任务状态/日期/标签 → PATCH 回 Airtable → 任务页立即更新
- 任务数据也会影响：Calendar 的排期视图、Overview 的统计（任务数/标签热度）

### 2.2 Calendar（日历）

- 使用 Tasks 的 Start/Deadline（或 date）映射到日历
- 作用：把任务从“清单”变成“时间占用”

**联动点：**
- 在 Calendar 上选择某天 → 渲染该天的任务详情（帮助日计划）

### 2.3 Journal（日记/复盘）

你提到的关键点：**Journal 更适合放在 MD 文件里**（自由度高、隐私边界清晰）。

建议的定位：
- Journal 是“原始叙事层”（真实的文本、情绪、上下文）
- Airtable 的 Eureka/Task 是“结构化沉淀层”（可检索、可执行、可统计）

**联动点（建议的产品化路径）：**
- Journal 不是孤岛，它要能把“结论/行动”抽出来映射到：
  - Task（下一步要做什么）
  - Eureka（我学到了什么/原则是什么）

### 2.4 Overview（总览）

总览适合“低噪音 KPI/入口”，不要再塞一个“任务总览”（因为任务页已经有待完成总览）。

建议总览保留：
- 任务统计（ToDo/Doing/Done 数量、标签热度）
- Active Threads（Top8 近期焦点）
- 系统流（你定义的端到端路径图）

### 2.5 System Config（系统配置）

这是你这套系统的“可维护性核心”：
- 把 cron/关键路径/脚本位置写进去，避免遗忘
- 让你能直接说：“去系统配置看看 cron/同步/路径”

> 你已经要求：新增 cron 必须写进系统配置页——这是很正确的“运维产品化”。

---

## 3) Journal → Task / Eureka：映射机制（你要的“闭环”）

这里给一个 **可落地的 v0 规则**，后续我们可以做成 skill + cron（自我进化闭环的一部分）。

### 3.1 两层沉淀：MD 原文 vs Airtable 结构化

- **MD（Journal 原文）**：完整记录，不做强结构
- **Airtable（结构化沉淀）**：只写“提纯后的 20%”

推荐每篇 Journal 固定抽取 3 个字段：
1) **结论（Eureka）**：一句话原则/洞察
2) **行动（Task）**：下一步最小动作（可验收）
3) **问题（Question）**：下周要验证的 1 个问题

### 3.2 映射触发方式

两种触发方式（二选一或同时存在）：

**方式 A：写完 Journal 后你一句话触发**
- 你说：“把今天这篇 journal 提炼成 task + eureka”
- 系统读取最新 md → 抽取 3 条 → 写入 Airtable（Tasks/Eurekas）→ 同步看板

**方式 B：周六自省 cron 自动提炼**
- 周六 10:00 的“交互自省复盘”除了输出建议，也可以：
  - 自动把“建议里可执行的 1-2 条”写成 Task
  - 把“系统进化原则”写成 Eureka

> v0 建议先从方式 A 做起：可控、不会误写太多。

### 3.3 命名约定（避免库里变成噪音）

- Eureka 标题建议：`[主题] 一句话原则`
- Task 标题建议：`[主题] 最小下一步（可验收）`
- 并且在 desc 里链接回 Journal 原文（文件名/日期）

---

## 4) 具体到你的现状：当前已落地的闭环点

你现在已经跑通了 3 个“关键闭环节点”：

1) **Task 创建闭环**：Discord 口述 → 写 Airtable → 同步 Dashboard → 任务页可见
2) **执行监督闭环**：周五 20:00 过期未完成提醒（降噪 120 天）
3) **系统进化闭环**：周六 10:00 交互自省复盘（系统进化 + 给你的建议）

下一步（把 Journal 纳入闭环）就是：
- 给 Journal 一个“结构化出口”（Eureka + Task）
- 并把“出口规则”写成 skill（可复用、可升级）

---

## 5) 建议提交到仓库的位置

- 本文建议放到：`OpenClaw-Tips/drafts/`（先迭代）
- 稳定后再迁移到 site 的正式内容目录（如果后续你们在 site 里有 content/posts 结构）

---

## 附：最小可复现的 3 个问题（用于你对外讲解）

1) 为什么 Airtable 必须是真源？Dashboard 为什么不适合当真源？
2) 为什么要把“cron”写进系统配置页？（运维可见性）
3) Journal 如何不丢“原文”，又能产生可执行与可检索的沉淀？

