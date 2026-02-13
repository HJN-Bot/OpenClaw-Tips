# Agent Organ Storyboard Prompts（Apple Keynote 风｜内容丰富）

面向：
- 桌面智能（工程师 workflow）
- 医疗智能（临床医生 workflow）

> 用途：先生成多帧关键帧图片（storyboard frames），后续用于图生视频/概念宣传视频。

---

## 统一风格锁（建议每条 prompt 都携带）

**STYLE LOCK**

`Apple keynote product film, premium minimalism, cinematic studio lighting, soft gradients, immaculate surfaces, subtle film grain, ultra high-end industrial design, realistic UI (no readable sensitive text), shallow depth of field, 35mm lens, clean negative space, graphite black + warm amber accent + cool cyan highlight, 16:9, no logos, no watermark, no distorted hands, no extra fingers`

---

# A）桌面智能（工程师）Storyboards：9 帧

叙事：从 issue → 方案 → PRD/Spec → 代码生成 → 评测 → 合并 → 可回放

### D1（Wide）开场：桌面“器官中枢”
**Prompt**

A calm, premium engineering workspace, minimalist desk, an “Agent Organ Hub” dock centered with a gentle amber breathing LED, laptop showing a clean dashboard with three big cards (Top 3, Active Threads, Next Actions) with abstract placeholders (no readable text), phone companion app beside it, tidy cable management, studio-like lighting, wide shot. STYLE LOCK

### D2（Close）输入：碎片想法/语音捕捉
Close-up of a phone screen capturing a short voice note waveform (no text), engineer’s hand taps “capture”, a slim wearable ring on the finger glows cyan, hub LED shifts subtly from amber to cyan, intimate close shot. STYLE LOCK

### D3（Medium）结构化：口述→提纲→可交付结构
Laptop screen shows a split view: left “raw notes” as blurred blocks, right “structured outline” with sections (Goal / Deliverable / Acceptance) as UI headers only, a subtle progress indicator, hub LED steady cyan, medium shot. STYLE LOCK

### D4（Medium）生成：直接产出 repo 文件结构
A clean repository-like file tree UI (generic, no GitHub logo) showing new files: README, spec, eval checklist, scripts folder, with a small “commit created” toast, engineer’s hand on keyboard, medium shot, minimal but information-rich. STYLE LOCK

### D5（Close）评测：AB test / 质量门控可视化
A sleek evaluation panel UI: three minimal gauges (Parse Stability, Marker Integrity, Latency/Cost) with one red warning icon and two green checks (icons only, no numbers), a “fallback” arrow icon hinting B→A fallback strategy, close-up. STYLE LOCK

### D6（Medium）交付：一页式汇报/one-pager 自动成型
A single-page executive one-pager preview on screen: sections laid out as blocks (Context / Decision / Evidence / Next Steps), icons + separators, no readable text, a “share” icon, medium shot. STYLE LOCK

### D7（Wide）协作：把产物发给团队（但不露脸）
A small meeting room, two engineers viewed from behind/side silhouette (no identifiable faces), large display shows the same dashboard + one-pager preview, one person points gently, calm professional vibe, wide shot. STYLE LOCK

### D8（Close）可回放：trace timeline
A trace timeline UI: nodes connected (Input → Structure → Generate → Eval → Share), each node is a clean dot with an icon, one node highlighted, “audit-safe” vibe, close-up. STYLE LOCK

### D9（Hero）收束：硬件+软件同框的 Apple 结尾画面
Hero product shot: hub dock + ring + phone + laptop arranged symmetrically on a dark gradient background, pristine reflections, LED breathing amber, minimal tagline area (no actual text), cinematic hero frame. STYLE LOCK

---

# B）医疗智能（临床医生工作流）Storyboards：9 帧

叙事：临床现场 → 采集/总结 → 风险提醒 → HITL确认 → 计划建议 → 交接 → 审计

> 医疗提示：不要出现可读病历/姓名/条码/病历号；屏幕仅用抽象 UI。

### M1（Wide）开场：临床工作台（干净、克制、可信）
A modern clinical workspace, a clinician at desk (no identifiable face), Agent Organ Hub dock beside a tablet and laptop, daylight-clean lighting, sterile but warm, wide shot. STYLE LOCK (add: clinical, hygienic)

### M2（Close）输入：诊疗要点捕捉（隐私安全）
Close-up: clinician taps a “capture” button on tablet, abstract icons represent symptoms/notes, ring glows cyan, hub LED indicates “recording” with soft pulse, no patient visible, close shot. STYLE LOCK

### M3（Medium）总结：把碎片记录变成“可读的临床摘要”
Laptop shows a structured clinical summary layout (sections as headers only: Subjective / Objective / Assessment / Plan), content blurred placeholders, clean hierarchy, medium shot. STYLE LOCK

### M4（Close）风险门控：关键风险先提示（但不吓人）
A minimalist “Safety Gate” UI with three icons (Allergy, Contraindication, Follow-up), one amber caution icon highlighted, clinician’s hand pauses before confirming, close-up. STYLE LOCK

### M5（Medium）HITL：医生确认/修改（AI只做建议）
Split UI: left “suggested plan” blocks, right “clinician confirmation checklist” with toggles, stylus hovering over confirm, ring LED returns amber indicating “awaiting human decision”, medium shot. STYLE LOCK

### M6（Close）输出：患者沟通版 + 交接版（双输出）
A dual-output UI: left “Patient-friendly summary” (icons, short bullets blurred), right “Clinician handoff note” (structured blocks), no readable text, close-up. STYLE LOCK

### M7（Wide）协作：护士/医生交接（无脸、无信息泄露）
Wide shot: clinician hands over a tablet to another staff member (no faces), screen shows abstract checklist icons and a “handoff complete” checkmark, calm, professional. STYLE LOCK

### M8（Close）审计：可追溯但不官僚
A clean audit trail timeline UI with node icons (Capture → Summarize → Gate → Confirm → Handoff), a small “trace id” badge icon (no numbers), close-up. STYLE LOCK

### M9（Hero）收束：可信医疗概念产品画面
Hero shot: Agent Organ Hub + ring in clinical environment, pristine white/graphite palette, soft amber LED, minimal negative space, premium trust vibe, 16:9. STYLE LOCK

---

## 建议的转场脚本（可选）

- D1→D2：光从暖到冷（吸引注意）
- D4→D5：快速切入评测面板（We measure what matters）
- M3→M4：摘要→安全门控（Safety first）
- M5→M6：确认→双输出（For patients & for clinicians）
