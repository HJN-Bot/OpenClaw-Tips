# Four-Agent Framework 操作手册（Sam 主脑版）

## 0) 总原则
- Sam = 主脑（拆解/仲裁/验收）
- 4 Agent = 并行执行（Andrew / Rex / Lulu / Alex）
- Airtable Task 为真源，所有关键进展必须回写证据
- Feishu 放协作稿，GitHub 放可下载资产，双向留链

## 1) 角色分工
- Andrew：AI学习（学习卡/观点卡/Paper/Prompt）
- Rex：Work+CER（里程碑/方案/风险/路演）
- Lulu：输出生产（选题/文案/脚本/复盘）
- Alex：Personal（通知策略/KPI/复盘）

## 2) 单任务执行流
1. Sam 拆任务（Task Root）
2. 并行分派给 4 Agent
3. 各 Agent 回传：目标/下一步/阻塞
4. 落地产出（Feishu/GitHub）
5. 回写 Task Desc（Deliverable/Link/Status/Next）
6. Sam Review（通过/待补/重做）

## 3) 回写标准（统一）
- Deliverable
- Feishu Link
- GitHub Link
- OwnerAgent
- Status
- Next（<=30min）
- UpdatedAt

## 4) Session 并行模式（当前）
- 已支持 subagent run 并行（rex/lulu/alex/andrew）
- 若 thread-bound session 禁用，则先用 run 模式
- Dashboard 用 Task Orchestration 视图看 plan -> execute -> review

## 5) 红线
- 不删除，不覆盖非 `- Sam` 页面（未确认前）
- 不外发敏感信息
- 不允许 Done 无证据链接
- 失败不可静默，必须上报阻塞

## 6) 八项任务映射（简）
- T1/T2/T4/T8 -> Rex
- T3/T7 -> Lulu
- T5/T6 -> Andrew
- 通知策略与红线 -> Alex


## 7) 权限与安全闸门（强制）
- 任何“主要任务”执行前，必须先向主导（Jianan）请求确认（Approval Gate）。
- 未确认仅可做：信息收集、方案草拟、风险评估，不可执行破坏性/外发/批量写入操作。
- 高风险动作（外发、覆盖、删除、批量更新）必须二次确认。

## 8) 风险同步与汇报
- 风险分级：
  - P0：安全/权限/数据泄露风险（立即停机并上报）
  - P1：流程阻塞或错误回写（30分钟内上报）
  - P2：质量偏差（当日汇总）
- 每次风险都要同步到 Dashboard 编排视图（riskFlag/riskLevel/riskNote）。
- 汇报格式：风险点 / 影响 / 当前缓解 / 需要主导决策。
