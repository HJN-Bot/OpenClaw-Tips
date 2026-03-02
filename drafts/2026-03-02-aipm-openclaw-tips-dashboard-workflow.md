---
topic: OpenClaw-Tips
series: AIPM-style
status: draft
audience: internal
last_update: 2026-03-02
keywords:
  - Dashboard工作流
  - Airtable真源
  - Discord输入
  - Web输出
  - Cron提醒
  - Multi-agent
  - 自我进化
---

# OpenClaw-Tips｜把碎片输入变成交付物：Airtable 真源 + Dashboard 中控 + Discord 输入 + Cron 输出

> 本文是 AIPM 风格的工作流说明稿（draft）。目标：把“我们实际跑通的一套 OpenClaw 工作流”写成可复用的项目模板，后续可以持续迭代。

## TL;DR（先看这 5 条）

1) **Airtable 是任务/idea 的单一真源**：所有 ToDo/Doing/Done、Idea→Task 都要写回 Airtable。
2) **Dashboard 是低信息量视图（View）**：从 Airtable 同步到一个 HTML 看板，随时可在手机打开。
3) **Discord + Web 是输入端**：你在 Discord 说一句“加任务/改规则”，系统自动落表并同步前端。
4) **Web + Cron 是输出端**：日常看板看执行面；关键节点（周五/周六）由 cron 主动提醒/复盘。
5) **自我进化闭环要工程化**：把“复盘→改规则→下次执行读新规则”写成 skill + cron + playbook/changelog。

---

## 1. 工作流总览（Source of Truth vs View）

### 1.1 单一真源：Airtable

- **什么放 Airtable**：Tasks、Ideas（以及可扩展 Eureka/短句库等）
- **为什么**：结构化字段、跨设备、可统计、可被 cron/agent 自动化读写

> 原则：聊天里任何“要执行的东西”，最终都要变成 Airtable 里可检索的记录。

### 1.2 映射视图：Dashboard（8080）

- **Dashboard 负责什么**：展示“近期、未完成、低噪音聚焦”的任务视图；同时提供轻量编辑入口（如果需要）。
- **为什么要同步到 HTML**：
  - 手机端打开快
  - 易缓存、低依赖
  - 便于把“系统配置/cron/关键路径”直接写进一个页面

---

## 2. 输入端：Discord + Web（把碎片变成结构化）

### 2.1 Discord 输入约定（最常见）

常见输入：
- “加两个任务：A… 截止… tag… state…”
- “把任务页总览改成待完成总览：近30天 ToDo/Doing + 搜索”

系统动作：
1) 解析字段（title/desc/date/tag/state）
2) 写入 Airtable
3) 同步 dashboard（tasksData/calendarData/threadsData）
4) 回传确认（创建成功 + 同步完成）

### 2.2 Web 输入（补充）

- Dashboard Web 端可以提供“创建/编辑”的 API，最终写回 Airtable（保证单一真源）。

---

## 3. 输出端：Web 输出 + Cron 输出（让系统推你一把）

### 3.1 任务页「待完成总览」规则（已落地）

你最终确认的一套规则（关键是“可发现性”）：

- 把任务页筛选“总览”改名为：**待完成总览**
- 展示范围：**近 30 天（含未来）**
- 展示状态：**仅 ToDo + Doing（不展示 Done）**
- 不依赖 tag 切换也能看到全量（tag 只是可选过滤）
- 支持搜索：标题/备注/标签（实时过滤）

> 这套规则本质是“降低找任务成本”，让你永远不会陷入“我记得我加了，但我找不到”。

### 3.2 Cron（自动提醒）配置（已落地）

#### (1) 过期未完成提醒（周五 20:00）

- 目的：把“过期但未完成”的 ToDo/Doing 在周末前拉出来，让你做一次清理/延期/删减。
- 降噪：默认忽略过老的 backlog（例如 120 天前），避免刷屏。

#### (2) 交互自省复盘（周六 10:00）

- 目的：把“我们之间的交互”当作系统数据源，定期产生：
  - 【系统进化】我（agent 系统）应该怎么改
  - 【对你的建议】你下周怎么做更省力、更稳定

---

## 4. 多 Agent（4 agent MVP）如何分工

以“先跑通闭环”为原则，建议从 4 个角色开始：

- **主脑（当前 Andrew）**：系统规则、cron、技能封装、信息架构（低信息量）
- **写作/内容（Lulu）**：把想法变成可发布文本/脚本/结构化内容
- **执行推进（Rex）**：把任务拆解、跟进、会议材料与风险清单
- **情感/关系（Alex）**：情绪梳理、关系复盘、稳定节奏

原则：每个 agent 的输出必须**写回真源**（Airtable 或 MD），否则就是“对话即蒸发”。

---

## 5. 自我进化（自我净化/进化闭环）如何工程化

参考“自我进化闭环”的 5 步：

1) 采集数据（交互/任务/提醒执行结果）
2) 分析对比（本周 vs 上周；有效策略 vs 无效策略）
3) 得出结论（哪些规则有效、哪些是噪音）
4) 更新规则（写入 playbook + changelog；或固化为 skill；或改 dashboard 展示规则）
5) 下次执行读取新规则（cron/agent 运行时加载）

在我们当前系统里的对应落点：
- 数据：Airtable（Tasks/Ideas）+ agent memory（md）+ cron run history
- 规则：skills + dashboard 前端规则 + cron 配置
- 建议新增：`playbook/` 与 `changelog.md`（专门记录“规则变更”）

---

## 6. GitHub：一键把讨论变成仓库交付物（你的分享点之一）

你想表达的能力是：OpenClaw 不是“聊天”，而是**直接生成可协作的 repo**。

建议写法（AIPM 风格）：
- 场景：一个项目从 0→1 的最小交付
- 输入：3-7 条提纲 + 约束（受众/时间/格式）
- 输出：README + notes/ + assets/ + scripts/（别人可以接着干）

---

## 7. Setup 流程：Discord + AWS（最小可复现）

建议把 setup 写成 5 步（每步 1 个验收点）：

1) AWS/EC2 起服务（端口、权限、安全）
2) OpenClaw Gateway 运行（能收消息）
3) Discord 绑定（能从 Discord 下指令）
4) Airtable secrets 配好（能读写，不 401）
5) Dashboard Web 启动（8080 看板可打开 + 同步可见）

---

## 附录 A：后续要补的“缺口清单”（可按需展开）

- 一张系统架构图（Discord/Web → Airtable → Sync → Dashboard → Cron → Discord）
- 失败模式排查清单：前端没更新/任务找不到/Airtable 401/cron 不发
- 展示例：一次完整“加任务→看板可见→周五提醒→周六自省→改规则”的闭环截图

