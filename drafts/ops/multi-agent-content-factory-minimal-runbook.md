# Multi-Agent Content Factory — Minimal Runbook (v1)

## 0) Goal
Ship one publish-ready content pack per cycle using a lightweight multi-agent flow.

**Content pack output (minimum):**
- 1 core draft (article/video script/post)
- 1 brief summary
- 1 QA checklist result
- 1 publish metadata block (title, tags, CTA, links)

---

## 1) Roles (minimum viable)

1. **Orchestrator (Lead Agent)**
   - Receives request
   - Sets scope, deadline, channel, constraints
   - Spawns/assigns worker tasks
   - Merges outputs and decides final

2. **Research Agent**
   - Collects facts, sources, examples
   - Produces evidence notes + source links

3. **Draft Agent**
   - Turns brief into first full draft
   - Keeps to target format/tone

4. **QA Agent**
   - Checks factual consistency, clarity, policy risks, formatting
   - Returns pass/fail + fix list

> Optional 5th role: **Distribution Agent** for platform adaptation (XHS/公众号/视频口播/Newsletter etc.)

---

## 2) Single-Cycle Workflow (MVP)

1. **Intake (Orchestrator)**
   - Input: objective, audience, format, deadline, constraints
   - Output: `Task Brief v1`

2. **Parallel Work**
   - Research Agent → `Evidence Pack`
   - Draft Agent (can start with partial brief) → `Draft v0`

3. **Merge + Revise**
   - Orchestrator injects evidence into draft → `Draft v1`

4. **QA Gate**
   - QA Agent checks with checklist
   - If fail: return fix list; Draft Agent revises to `Draft v2`

5. **Finalize**
   - Orchestrator publishes final pack + writeback links (Feishu/GitHub)

---

## 3) Handoff Contract (must-have fields)
Every agent output should include:

```yaml
task_id: CF-YYYYMMDD-###
owner: <agent-name>
status: done|blocked|needs-review
input_refs:
  - <url-or-doc-ref>
output_refs:
  - <file-path-or-url>
risks:
  - <optional>
next_action:
  - <single best next step>
```

Why: prevents context loss and makes async collaboration deterministic.

---

## 4) Minimal QA Checklist

- [ ] Core claim has at least one source/evidence ref
- [ ] No internal contradiction
- [ ] Fits target audience and channel format
- [ ] Tone is on-brief
- [ ] CTA and next step are explicit
- [ ] Metadata complete (title/tags/links)

If any critical item fails → do not publish.

---

## 5) SLA + Escalation (simple)

- **Research draft SLA:** 30–60 min
- **First draft SLA:** 45–90 min
- **QA turnaround:** 20–30 min

Escalate to human when:
- Conflicting sources on key claim
- Legal/compliance uncertainty
- Deadline risk > 30%

---

## 6) Minimal Folder Convention

```text
OpenClaw-Tips/
  drafts/ops/
    multi-agent-content-factory-minimal-runbook.md
    morning-evening-brief-template-v1.md
    feishu-github-dual-link-writeback-example.md
```

---

## 7) Day-1 Success Criteria

- One full cycle completed end-to-end
- All outputs linked in both Feishu and GitHub (dual-link)
- QA checklist attached
- Reusable template updated with one lesson learned
