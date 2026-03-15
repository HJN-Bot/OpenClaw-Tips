# 2026-03-15 Retro：YouTube 一键抓取链路排障与稳定化（Dashboard → n8n → OpenClaw）

## 背景目标
用户目标：在 Dashboard 贴链接后一键执行，自动完成抓取/转录/总结，并回写：
- Feishu（AI Collection / AI时代观点）
- GitHub（HJN-Bot/learning-dojo）
- Dashboard 进度可视化（步骤/百分比/摘要/链接）

希望覆盖平台：YouTube / 小红书 / 公众号 / Twitter。

---

## 最终架构（当前）

### 非 YouTube（云端全自动）
Dashboard 链接 → 云端 n8n（content-harvest）→ collect_notes.py → OpenClaw ingest → Feishu/GitHub 回写。

### YouTube（分流到本地 Mac Worker）
Dashboard 链接 → 云端写入 yt queue → Mac worker 拉队列 → 本地 yt-dlp + Whisper → 回传 done → OpenClaw ingest → Feishu/GitHub。

> 关键原因：云端（AWS IP）对 YouTube 抓取长期风控，纯云链路不稳定。

---

## 今天完成的关键动作（按时间线）

1. **Dashboard 触发链路修复**
   - 修复旧 endpoint 残留导致的触发失败。
   - 后端统一优先使用服务器配置 endpoint，避免前端本地缓存污染。
   - 增加 `/api/harvest/config` 供前端读默认 webhook。

2. **n8n webhook 可用性修复**
   - 导入/激活 `content-link-harvest-v1`。
   - 修复 workflow 导入后 ID/path 不一致与注册时序问题。
   - 改为 `onReceived` 响应模式，避免前端误判“超时失败”。

3. **OpenClaw ingest 增强**
   - 新增 ingest 后处理：summary 生成、写 learning-dojo、写 Feishu。
   - 新增状态文件 `/data/harvest_runs/*.status.json`。
   - 增加 `/api/harvest/latest` 给前端拉取进度。

4. **Dashboard 前端进度卡片**
   - 增加步骤、进度条、快速摘要、Feishu/GitHub 链接显示。
   - 解决“展示旧 run 状态”问题：按当前 URL 过滤 latest。

5. **质量门禁（防假结果）**
   - 对 `manual_inject` / 文本过短加 `needs_review`，不自动写 Feishu/GitHub。
   - 清理测试污染内容（learning-dojo 测试 summary）。

6. **YouTube 云端失败根因排查**
   - `TranscriptsDisabled` / `Sign in to confirm` 持续出现。
   - 升级 `yt-dlp`，增加 iOS client/UA/headers/cookies 参数。
   - 仍存在平台风控不稳定，确认需要分流方案。

7. **Mac Worker 分流方案落地**
   - 拉取新代码：`feat: mac local worker + yt queue`。
   - 导入并激活 `yt-queue-api.json`。
   - 由于 5678 对外不可达，新增 **8080 桥接接口**（OpenClaw 侧）：
     - `GET /api/yt-queue?token=...`
     - `POST /api/yt-queue/done?token=...`
   - Dashboard 的 YouTube 触发改为写 `/home/ubuntu/yt_queue.json` 队列。

8. **端到端桥接验证**
   - 用模拟 done 回传实测成功：可落 Feishu + GitHub + latest status done=100%。

---

## 主要卡点与根因回顾

1. **前端卡在 5%**
   - 根因：读取到旧 run / 无失败回写。
   - 处理：run-by-url 过滤 + queued 初始态 + needs_review 可见。

2. **看似成功但内容是假的**
   - 根因：联调 `manual_inject` 测试样本被当作正式结果。
   - 处理：加质量门禁并清理测试数据。

3. **n8n Code 节点报错（process/child_process）**
   - 根因：n8n 沙箱限制与脚本环境依赖冲突。
   - 处理：调整 code node 调用方式与环境注入策略。

4. **YouTube 云端抓取不稳定**
   - 根因：AWS IP 风控 + 字幕可得性不稳定 + bot 校验。
   - 处理：代理/UA/client/cookies 多轮修复后仍不稳，转分流架构。

5. **Mac worker 连接失败（exit code 28）**
   - 根因：5678 对外不可达。
   - 处理：改走 8080 队列桥接，绕过 5678 外网依赖。

6. **worker 收到任务后无后续日志**
   - 根因：本地权限/交互（密码/授权）导致后台静默阻塞。
   - 建议：前台跑一轮完成授权，再后台守护；保持单 worker 进程。

---

## 当前操作手册（最短路径）

### A. 触发（Dashboard）
- 粘贴链接 → 一键总结
- YouTube 会入本地队列，其他平台走云端抓取

### B. Mac Worker 配置（必须）
- Queue GET：
  - `http://54.169.36.2:8080/api/yt-queue?token=<N8N_INGEST_TOKEN>`
- Done POST：
  - `http://54.169.36.2:8080/api/yt-queue/done?token=<N8N_INGEST_TOKEN>`

### C. Mac Worker 运维
```bash
pkill -f mac_worker.sh
nohup bash ~/Auto-Grasp-Pipeline/scripts/mac_worker.sh >> ~/mac_worker.log 2>&1 &
tail -f ~/mac_worker.log
```

### D. 观察点
- 队列文件：`/home/ubuntu/yt_queue.json`
- 最新状态：`/api/harvest/latest?url=<encode(url)>`
- 成功标志：`done 100%` + Feishu/GitHub 链接回写

---

## 对系统生态的影响评估

- 云端负载：轻（主要是队列与回写）
- 重计算：转移至 Mac（yt-dlp/whisper）
- 稳定性：
  - YouTube 由“云端不稳定”转为“本地可控”
  - 非 YouTube 继续云端全自动
- 风险：
  - Mac worker 停止会导致 YouTube 队列积压
  - 需要单实例守护，避免多 worker 竞争

---

## 后续改进建议（优先级）

1. 在 Dashboard 卡片展示：`run_id / queue depth / fail_reason`。
2. 增加 worker 心跳（最后活跃时间）与 dead-worker 告警。
3. 给 `yt_queue.json` 增加超时重置（processing -> pending）。
4. 规范 done 回传错误码，减少“静默失败”。
5. 将 `youtube-cookie-health-check` 中不兼容节点替换为 v2 兼容节点，消除噪音重试日志。

---

## 本次结论
- “全云端 YouTube 一键抓取”在当前环境下不稳定；
- “YouTube 本地 worker + 云端编排回写”是当前最可落地且体验接近一键的方案；
- 非 YouTube 链路已可保持云端自动化。
