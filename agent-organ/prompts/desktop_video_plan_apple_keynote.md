# 桌面版概念视频计划（Apple Keynote 风｜统一运镜｜高清）

目标：用 9 张关键帧（D1-D9）生成一条 18–27s 的概念短片。

---

## 1) 全局一致性配置（强烈建议固定）

### 视觉一致性（必须固定）
- 画幅：16:9
- 质感：Apple keynote product film（极简高级、信息密度高但不拥挤）
- 色板：graphite black + warm amber + cool cyan
- 光线：studio lighting + soft gradients + immaculate surfaces
- 镜头：35mm / shallow depth of field（景深浅但 UI 保持可读轮廓）
- 画质：4K 或至少 2K（优先 4K）

### 内容一致性（必须固定）
- 同一套硬件：Hub Dock + Ring + Phone + Laptop
- 同一套 UI 语言：卡片式 dashboard、抽象占位符（**不出现可读敏感文本**）

### 负面词（每帧都建议带上）
`no logos, no watermark, no distorted hands, no extra fingers, no messy cables, no cluttered desk, no readable personal data, no brand names, no low-res, no artifacts, no deformed UI, no illegible UI text blocks`

---

## 2) 运镜与转场设计（从“展示”到“叙事”）

我们用“从大到小、从外到内、再回到大”的 Apple 典型叙事：

- **D1 Wide**（世界观）
- **D2 Close**（输入）
- **D3 Medium**（结构化）
- **D4 Medium**（生成）
- **D5 Close**（质量门控）
- **D6 Medium**（交付）
- **D7 Wide**（协作）
- **D8 Close**（可回放）
- **D9 Hero**（收束）

### 转场手法（统一一条主线即可）
- D1→D2：**push-in**（缓慢推进到手机）+ 灯光由 amber → cyan
- D2→D3：**match cut**（波形→结构化卡片的线条）
- D3→D4：**slide**（左侧 raw blocks 滑走，文件树浮现）
- D4→D5：**snap zoom**（轻微快速推进到评测面板）
- D5→D6：**cross dissolve**（warning icon 淡出，one-pager 出现）
- D6→D7：**pull-out**（从屏幕拉到会议室 wide）
- D7→D8：**cut on gesture**（指向动作 → timeline 节点高亮）
- D8→D9：**fade to hero**（暗场过渡到 hero 产品镜头）

---

## 3) 每帧最终 Prompt（含镜头词 + 高清词 + 负面词）

> 建议你生成关键帧时：每帧都带同一段 STYLE LOCK + 同一段负面词。

### STYLE LOCK（复制到每条末尾）
`Apple keynote product film, premium minimalism, cinematic studio lighting, soft gradients, immaculate surfaces, subtle film grain, ultra high-end industrial design, realistic UI (no readable sensitive text), shallow depth of field, 35mm lens, clean negative space, graphite black + warm amber accent + cool cyan highlight, 16:9, ultra high resolution, 4k`

### D1（Wide）
Prompt：
A calm, premium engineering workspace, minimalist desk, Agent Organ Hub dock centered with gentle amber breathing LED, laptop shows clean dashboard with three big cards (Top 3, Active Threads, Next Actions) as abstract placeholders, phone companion app beside it, perfectly managed cables, wide shot, slow dolly-in feeling. STYLE LOCK. NEGATIVE: <负面词>

### D2（Close）
Close-up of a phone screen capturing a short voice note waveform (no text), engineer hand taps capture, slim wearable ring glows cyan, hub LED shifts amber to cyan, macro close shot, bokeh background. STYLE LOCK. NEGATIVE: <负面词>

### D3（Medium）
Laptop screen split view: left raw notes blurred blocks, right structured outline headers (Goal / Deliverable / Acceptance), subtle progress indicator, hub LED steady cyan, medium shot, gentle camera pan left-to-right. STYLE LOCK. NEGATIVE: <负面词>

### D4（Medium）
Clean repository-like file tree UI (generic) showing new files: README, spec, eval checklist, scripts folder, small commit-created toast, engineer typing, medium shot, subtle parallax. STYLE LOCK. NEGATIVE: <负面词>

### D5（Close）
Close-up evaluation panel UI with three minimal gauges (Parse Stability, Marker Integrity, Latency/Cost) with icon-only indicators (two green checks, one amber warning), a fallback arrow icon (B→A), crisp UI, macro shot. STYLE LOCK. NEGATIVE: <负面词>

### D6（Medium）
One-pager preview on screen: blocks for Context / Decision / Evidence / Next Steps, clean separators and icons, share icon, medium shot, slight tilt-down. STYLE LOCK. NEGATIVE: <负面词>

### D7（Wide）
Small meeting room, two engineers seen from behind silhouette (no identifiable faces), large display shows dashboard + one-pager preview, one person points gently, wide shot, subtle handheld-free stable camera. STYLE LOCK. NEGATIVE: <负面词>

### D8（Close）
Trace timeline UI close-up: nodes connected (Input → Structure → Generate → Eval → Share), one node highlighted, audit-safe vibe, crisp vector icons, macro shot. STYLE LOCK. NEGATIVE: <负面词>

### D9（Hero）
Hero product shot: hub dock + ring + phone + laptop arranged symmetrically on dark gradient background, pristine reflections, amber breathing LED, minimal empty area for tagline (no text), extremely clean, stable hero frame. STYLE LOCK. NEGATIVE: <负面词>

---

## 4) 生成建议（如何保证“视频风格统一”）

### 关键帧生成（image）
- 先把 D1 生成到你最满意的风格（它是“全片风格锚点”）
- 之后 D2-D9 都使用：
  - 同样的 STYLE LOCK
  - 同样的色板词
  - 同样的硬件描述（Hub/Ring/Phone/Laptop）
  - 同样的负面词

### 视频生成（image→video）
- 每次只让模型做“轻微运动”（push-in / pan / pull-out），不要让它自由发挥大运动
- 如果支持：锁定 seed（或使用 reference image / style reference）

---

## 5) 音效/音乐（可选但很 Apple）
- 轻微的低频脉冲（与 LED 呼吸同步）
- 每次 UI 变化一个极轻的 click / whoosh
- 背景音乐：极简电子氛围（不要鼓点太强）

