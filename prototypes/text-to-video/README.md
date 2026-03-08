# Text-to-Video MVP (OpenClaw / Skills / MCP) — Prototype

目标：把“剪视频”改成“写脚本 + 跑流水线”。

## 两条 MVP 都启动（你要求的两个都做）

### MVP-A｜教程类（截图讲解）
**输入：** topic + 3~8 张截图（按顺序） + 目标时长

**输出：**
- `storyboard.tutorial.json`
- `voice.wav`（TTS）
- `subtitles.srt`
- `final.mp4`

**镜头组件（先做最小 3 个）：**
- title-card：标题卡
- screenshot-explain：截图推入 + 高亮框/箭头 + 旁白
- summary-card：总结卡 + CTA

### MVP-B｜观点类（信息卡动画）
**输入：** topic + 0~3 张配图（可选） + 目标时长

**输出：**
- `storyboard.opinion.json`
- `voice.wav`（TTS）
- `subtitles.srt`
- `final.mp4`

**镜头组件（先做最小 3 个）：**
- hook-card：钩子句（大字）
- point-card：观点分条（1~3条）
- outro-card：收口 + CTA

---

## 关键协议（我们先把“可运行形状”定死）
- 统一 storyboard schema：见 `schemas/storyboard.schema.json`
- 教程模板：`templates/storyboard.tutorial.template.json`
- 观点模板：`templates/storyboard.opinion.template.json`

---

## 我现在的阻塞（需要你点头我才能产出“效果截图”）
当前机器没有 `ffmpeg`，所以我还没法在服务器上渲染 mp4 并截帧。

你如果同意我安装渲染依赖（推荐：`ffmpeg` + `remotion`/`puppeteer` 其中一个），我就能：
- 跑出一段 10~15 秒的 demo mp4
- 给你 2~3 张关键帧截图（教程/观点各一套）

你回复我一句：**“允许安装 ffmpeg 及渲染依赖”**，我就继续往下跑成片。
