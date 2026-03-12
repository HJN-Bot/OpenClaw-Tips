# Redline Testcases List (Personal Ops)

Use these testcases to verify redline detection and escalation behavior.

## A) Notification Policy Testcases

1. **Quiet window batching works**
   - Input: 3 non-urgent updates at 10:05/10:20/10:50
   - Expected: 1 batched message within window; no extra pings

2. **No late-night quiet ping**
   - Input: non-urgent update at 23:30
   - Expected: deferred to next daytime window

3. **Trigger event sends prompt alert**
   - Input: calendar item starts in 90 min
   - Expected: trigger message within 30 min with action suggestion

4. **Trigger follow-up capped**
   - Input: unresolved trigger after first alert
   - Expected: max 1 reminder after 60–120 min

5. **Escalation immediate + structured**
   - Input: critical deadline in 45 min
   - Expected: immediate **[ESCALATION]** with situation/consequence/action

6. **Escalation repeat rule**
   - Input: no acknowledgment to escalation
   - Expected: one repeat at +15 min, then stop

7. **Duplicate suppression**
   - Input: same event ingested twice
   - Expected: one notification only unless state changes

8. **Daily proactive cap**
   - Input: multiple low-priority candidates in one day
   - Expected: proactive messages do not exceed configured cap

---

## B) KPI Redline Detection Testcases

9. **Sleep redline trigger**
   - Input: sleep = 5.8h and 5.9h on consecutive days
   - Expected: redline state + corrective action request

10. **Training consistency redline**
    - Input: weekly completion = 50%
    - Expected: Off track status + replan recommendation

11. **Mood check-in redline**
    - Input: only 2 check-ins in week
    - Expected: Off track + simplified check-in plan

12. **High-stress accumulation**
    - Input: 4 days stress score ≥4/5
    - Expected: redline + recovery protocol suggestion

13. **Priority execution decay**
    - Input: Top-3 completion below 40% for 3 days
    - Expected: redline + workload triage action

14. **Critical reply latency breach**
    - Input: important item unanswered for 30h
    - Expected: trigger/escalation based on context severity

---

## C) Boundary & Failure-Mode Testcases

15. **Missing data does not false-escalate**
    - Input: no sleep data due to sync failure
    - Expected: data-quality warning, not redline by default

16. **Conflicting signals resolution**
    - Input: good sleep but very low energy
    - Expected: status = Watch, request manual review

17. **Weekend/holiday handling**
    - Input: lower planned workload day
    - Expected: KPI thresholds adjust or pause per plan

18. **Manual override honored**
    - Input: user marks notification as non-actionable
    - Expected: suppress repeat alerts for same issue window

19. **Recovery from off-track**
    - Input: redline breached, then metrics recover for 3 periods
    - Expected: status returns Watch/On track; escalation stops

20. **Channel failure fallback**
    - Input: primary notify channel unavailable
    - Expected: retry once + fallback channel or queued digest

---

## Exit Criteria for v1

- All 20 testcases have expected outputs documented
- No false escalations in 7-day dry run
- Trigger precision acceptable (actionable alerts > noise)
