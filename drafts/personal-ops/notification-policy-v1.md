# Notification Policy v1 (Personal Ops)

## 0) Purpose
Keep notifications useful, low-noise, and action-oriented.

---

## 1) Modes

### A. Quiet (default)
Use for non-urgent info that can wait for batch review.

**Examples**
- Daily summaries
- Routine status updates
- FYI messages without immediate action

**Rules**
- Delivery windows: 09:00–12:00, 14:00–18:00 (local)
- Batch every 2–4 hours
- Max 1 proactive ping per batch window unless user asks
- No late-night push (23:00–08:00) unless trigger/escalation criteria met

---

### B. Trigger (attention-needed)
Use when a specific condition is met and action may be time-sensitive.

**Examples**
- Event starts in <2 hours
- New blocker on active plan
- Missed planned workout/streak break risk
- Important inbound requiring same-day reply

**Rules**
- Send within 10–30 minutes of trigger detection
- Include: what happened, why it matters, and one recommended next action
- If unresolved, remind once after 60–120 minutes (max 1 follow-up)

---

### C. Escalation (urgent)
Use only for high-impact/time-critical situations.

**Examples**
- Safety/health risk signal
- Hard deadline in <60 minutes with required input
- Confirmed critical failure in active commitment

**Rules**
- Immediate notify (do not batch)
- Clear severity label: **[ESCALATION]**
- Include 3-part format:
  1. Situation now
  2. Consequence if ignored
  3. Exact action to take in next 5–15 min
- If no acknowledgment, one repeat at +15 min, then stop and log

---

## 2) Message Format (all levels)

- **Context:** short (1 line)
- **Impact:** short (1 line)
- **Next step:** single clear action
- **Deadline:** if any

Template:

> Context: …  
> Impact: …  
> Next step: …  
> Deadline: …

---

## 3) Anti-Noise Guardrails

- No duplicate pings for same event unless state changed
- No more than 3 proactive messages/day outside user-initiated chat
- Prefer reaction/ack over full message when no action is needed
- Convert repeated non-urgent pings into one digest

---

## 4) Review Cadence

- Weekly check: what got ignored vs acted on
- Tune thresholds (too noisy → stricter trigger; too silent → looser trigger)
- Keep policy versioned (v1, v1.1, …)
