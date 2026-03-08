# OpenClaw Tips｜把「剪视频」改成「写脚本 + 跑流水线」：3个Skills + 1个MCP 的 Text-to-Video MVP

> 目标：输入 topic + 3~8 张截图/图片 → 输出 mp4（配音 + 字幕 + 动效节奏）

---

## 你要解决的痛点（一句话）
剪辑最耗时的不是按按钮，而是反复做“开场/转场/讲解/字幕对齐/配音节奏”。

## MVP 输入 / 输出协议（建议定死）
**输入：**
- `topic`：一句话主题
- `assets/`：3~8 张截图或图片（允许顺序）
- `duration_sec`：目标时长（如 60~90）
- `tone`：克制 / 冲突（可选）

**输出：**
- `storyboard.json`：分镜数组（每镜头：画面/字幕/旁白/时长/动效）
- `voice.wav`：TTS 配音
- `subtitles.srt`：字幕时间轴
- `final.mp4`：成片

---

## 3 个 Skills + 1 个 MCP（角色分工）
### Skill 1：Script / Storyboard Skill（把内容变成镜头）
- 产物：`storyboard.json`
- 每镜头字段建议：
  - `id`
  - `asset`（图片名或 null）
  - `on_screen_text`（大字）
  - `subtitle`（小字）
  - `voiceover`（旁白）
  - `duration_ms`
  - `motion`（push-in / pan / highlight-box / title-card / cut）

### Skill 2：TTS Skill（旁白变音频 + 字幕）
- 产物：`voice.wav` + `subtitles.srt`
- 关键：把旁白按镜头切分，方便对齐。

### Skill 3：Remotion / Renderer Skill（渲染成片）
- 输入：`storyboard.json` + assets + voice + srt
- 输出：`final.mp4`
- 先做 3 个镜头组件就够：
  1) 标题卡（title-card）
  2) 截图讲解（screenshot + push-in + highlight）
  3) 总结卡（summary-card）

### MCP：GitHub MCP（沉淀为可复现 repo）
- 每次生成一个可复现目录：
  - `inputs/` `assets/` `storyboard.json` `voice.wav` `subtitles.srt` `final.mp4`
- 好处：下次同类视频=替换 assets + 改两句脚本 → 重跑。

---

## 你录屏演示的 3 个镜头（最爽的一段）
1) 把 3 张截图丢进 `assets/`
2) 一句 prompt：生成 storyboard + voice + srt
3) 一条命令：render → 出 `final.mp4`

---

## 下一步可迭代（第二阶段）
- 镜头组件库扩展：对比卡、流程图卡、代码卡、QA卡
- 自动高亮（从截图 OCR 找关键词位置）
- BGM + 音效（不喧宾夺主）
