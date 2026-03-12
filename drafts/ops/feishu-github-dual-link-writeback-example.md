# Feishu ↔ GitHub Dual-Link Writeback Example

Purpose: ensure every deliverable can be traced from Feishu to GitHub and back.

---

## 1) Canonical Rule
For each task/draft:
1. Feishu page must contain GitHub issue/PR links.
2. GitHub issue/PR must contain Feishu page link.
3. Both sides share the same `task_id`.

---

## 2) Example IDs
- `task_id`: `CF-20260312-007`
- Feishu Doc: `https://example.feishu.cn/wiki/AbCdEf123`
- GitHub Issue: `https://github.com/acme/content-ops/issues/128`
- GitHub PR: `https://github.com/acme/content-ops/pull/131`

---

## 3) Feishu Writeback Block (paste into doc)

```md
## Delivery Trace
- task_id: CF-20260312-007
- GitHub Issue: https://github.com/acme/content-ops/issues/128
- GitHub PR: https://github.com/acme/content-ops/pull/131
- Status: In Review
- Last Updated (UTC): 2026-03-12 11:40
```

Optional evidence section:

```md
## Evidence
- Source list: <link>
- QA checklist: <link>
- Final asset: <link>
```

---

## 4) GitHub Issue/PR Writeback Block (paste into comment/body)

```md
### Dual-Link Writeback
- task_id: CF-20260312-007
- Feishu Doc: https://example.feishu.cn/wiki/AbCdEf123
- Stage: Draft v2 / QA passed
- Owner: @lulu-agent
- Updated (UTC): 2026-03-12 11:40
```

---

## 5) Minimal Lifecycle Example

1. Open GitHub issue with `task_id`.
2. Create Feishu page and add issue link.
3. Post Feishu link back to GitHub issue.
4. When PR opens, add PR link into Feishu `Delivery Trace`.
5. At merge/ship, update both sides to `Status: Done`.

---

## 6) Copy-Paste JSON (for automation)

```json
{
  "task_id": "CF-20260312-007",
  "feishu_url": "https://example.feishu.cn/wiki/AbCdEf123",
  "github_issue_url": "https://github.com/acme/content-ops/issues/128",
  "github_pr_url": "https://github.com/acme/content-ops/pull/131",
  "status": "in_review",
  "updated_at_utc": "2026-03-12T11:40:00Z"
}
```

---

## 7) QA for Dual-Link Integrity
- [ ] task_id identical on both sides
- [ ] Feishu contains issue/PR links
- [ ] Issue or PR contains Feishu link
- [ ] Status timestamps are fresh and consistent
