# Autopilot: the one daily routine for macbook-repair-dubai.ae

Scheduled task `macbook-repair-dubai-ae`, daily 07:00 Dubai. Read `automation/AGENTS.md` first;
it binds every step below. Each job runs only when its War Room switch says so.

## 0. Start (every run)

1. `cd /Users/azizi/Claude/Projects/macbook-repair-dubai.ae`. Note `date +%u` (1 = Monday),
   `date +%d` and `date +%m`. The machine runs on Dubai time.
2. Load `ArtifactData`. Read the War Room collections `jobs`, `decisions`, `clusters`, `tasks`,
   and the `log` entries newer than the previous run (`automation/state/last-run.txt`).
3. A job runs today only if its `status` is `approved` or `active` **and** it is due today
   (table below). If a due job is `approved`, set it to `active` in the same write as its result.
   A `paused` or `proposed` job never runs.
4. Before the first code-changing job, apply the dirty-tree rule in `AGENTS.md`.

| Job | Id | Due | Changes code |
|---|---|---|---|
| Decision watcher | j02 | every day | only fact-sheet updates the owner confirmed |
| Lead and uptime check | j03 | every day; marked test lead on Mondays | no |
| Daily data | j01 | every day; new keywords on Mondays | no (data files only) |
| Weekly report | j06 | Monday | no |
| Apple watch | j04 | Monday and Thursday | no |
| Weekly build | j05 | Tuesday | yes |
| Truth drift scan | j07 | Wednesday | yes |
| Link monitor | j08 | Friday | redirects only |
| Monthly review | j09 | 1st of the month | no |
| Quarterly check | j10 | 1st of Jan, Apr, Jul, Oct | yes |
| Skill sweep | j11 | Thursday | template fixes only |

Run order: j02, j03, j01, then the rest in table order. A red gate stops that job, not the run.
`j00` is the separate Monday cloud routine; never run it from here.

---

## j02 Decision watcher

1. Compare `decisions` (answer, answeredAt), `clusters` (decision, decidedAt) and Owner `log`
   entries with `automation/state/war-room-seen.json` (create it if missing).
2. For each new or changed answer, create or update a task that says what the answer unblocks,
   with a `source` field naming it (e.g. `"D9 answered 2026-10-12"`). The work itself happens in
   j05 or j07, never here.
3. A cluster newly marked Target gets its planned tasks (from the cluster `plan`, the keyword map
   and `docs/cowork-mac-growth-plan.md`). Skip moves its open Claude tasks to done with
   "Skipped by owner". Later leaves them in todo with `week: "Later"`.
4. A business fact the owner confirmed in a decision answer goes into
   `docs/business-fact-sheet.md` as VERIFIED, source "Owner, War Room <id>, <date>" (code job:
   dirty-tree rule applies).
5. Save the new state file.

## j03 Lead and uptime check

Live-site rules apply (6 s apart, browser UA). Record each check pass or fail:

1. `/` returns 200 and contains "MacBook Repair Dubai".
2. These return 200: `/`, `/mac-repair-dubai/`, `/macbook-screen-repair-dubai/`,
   `/macbook-battery-replacement-dubai/`, `/imac-repair-dubai/`, `/iphone-repair-dubai/`,
   `/contact/`.
3. `https://www.macbook-repair-dubai.ae/` redirects to the apex (owner task t02 until it does;
   record, don't alert).
4. `robots.txt` contains `Sitemap:` and the first `User-Agent: *` group disallows only `/api/` and
   `/admin/`.
5. The HTML of `/`, `/contact/` and `/macbook-screen-repair-dubai/` contains
   `wa.me/971557413706`.
6. `POST /api/lead` with body `{}` returns 400 or 422 (the form rejects an empty lead and sends
   nobody anything). 404, 405 or 5xx is a failure.
7. No response carried `x-hcdn-request-id` or `platform: hostinger`, and none was a 429.
8. **Mondays only:** `node scripts/lead-canary.mjs --json` sends one lead marked
   "CANARY … please ignore" and reports per-channel delivery. Any channel not "sent" is a failure.

Write `automation/logs/health/YYYY-MM-DD.md` (table of checks). A failure creates or updates an
urgent Owner task "Site check failing: <what>", and follows the ALERT RULE.

**ALERT RULE.** Email azizianalyst@gmail.com (Gmail connector) only when: the site is down or
blank, any 429 or hCDN header appeared, the WhatsApp link is missing on a checked page, the form
endpoint is broken, or robots.txt is wrong. Subject "macbook-repair-dubai.ae canary: <what
failed>". Body: the failing check, one sentence on what it means, and the one action only the
owner can take. Never email the same open failure two days running; log "still open, day N".
Everything else goes to the War Room only.

## j01 Daily data

1. Semrush (Chrome): Domain overview (Authority Score, referring domains, organic keywords,
   organic traffic) and Organic positions UAE for macbook-repair-dubai.ae (all rows: keyword,
   position, volume, KD, URL). Save to `automation/data/positions-latest.tsv`; on Mondays also
   keep `automation/data/positions-YYYY-MM-DD.tsv`.
2. Write `snapshots/<YYYY-MM-DD>`: `{date, source: "Semrush UAE (daily data job)", authority,
   refDomains, keywords, top10, traffic, gscClicks: null, gscImpressions: null, gscCtr: null,
   gscPosition: null, aiCitations: null, note}`.
3. Opportunities, Mac and latest-iPhone keywords only (`device` in the keyword bank, and the
   owner direction in the growth plan):
   - our pages at positions 4–15 (refresh candidates);
   - positions 2–8 where the SERP has a featured snippet (answer-block candidates);
   - keywords where a page other than the owner page ranks (`owners` collection and
     `docs/keyword-page-map.csv`); update that `owners` row's `rankingNow` and `status`;
   - drops of 3+ positions against the previous saved file.
   Create or update one todo task per keyword (dedupe by keyword), `phase: "Data"`, with the
   numbers and the date in `detail`.
4. **Mondays:** Keyword Magic for the seeds "macbook repair", "mac repair", "imac", "mac mini",
   "mac studio", "macbook neo", "iphone 18", "iphone 17", "iphone air". Append keywords with
   KD 0–29 that are not in `docs/keywords/keyword-bank-2026-09.csv` to
   `docs/keywords/new-keywords-YYYY-MM.csv`.
5. Check: a fresh subagent re-reads 10 random numbers from the saved file against Semrush and
   reports mismatches. Any mismatch → redo that table.
6. **Search Console (every day, and the fallback when Semrush is unavailable).** In Chrome open
   `https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain%3Amacbook-repair-dubai.ae&num_of_days=28&compare_date=PREV`.
   Read the four totals with get_page_text. The query table holds every row in the DOM: build a TSV
   in-page, inject a full-page button whose click copies it with a hidden textarea +
   `document.execCommand('copy')` (navigator.clipboard is refused here), click the button **by ref**
   (find → ref; coordinate clicks miss), then `LANG=en_US.UTF-8 pbpaste > automation/data/gsc-queries-28d-YYYY-MM-DD.tsv`.
   Repeat with `&breakdown=page` for pages; strip " Copy URL to clipboard Open in new tab Inspect URL"
   from page cells. Fill the snapshot's gsc* fields, update `owners.rankingNow`, and create tasks for:
   page-one queries with zero clicks and 500+ impressions, pages that lost 10+ clicks, and protected
   pages that lost clicks (urgent). Supermetrics cannot be used (trial expired 30 Jun 2026).

## j06 Weekly report (Monday)

Compare this Monday's positions file with last Monday's: every keyword in `owners` and every
Target-cluster keyword in the top 30, referring domains, leads in the last 7 days
(`GET /api/leads` with `Authorization: Bearer $ADMIN_KEY` from `.env.local`; counts only, never
customer details), and what shipped (commits since last Monday). Say "Semrush only: GSC, GA4 and
Ahrefs not connected" until they are. Post it as one `log` entry; detail goes in
`automation/reports/weekly-YYYY-MM-DD.md`.

## j04 Apple watch (Monday and Thursday)

Fetch https://www.apple.com/newsroom/ , https://www.apple.com/ae/mac/ and
https://www.apple.com/ae/iphone/ (WebFetch). Compare with `docs/apple-lineup-2026-09-26.md`.

- Announced Mac → urgent Claude task "Build the <model> hub within 48 hours" with Apple's facts
  and source links in `detail`. Announced latest-tier iPhone → normal task.
- Discontinued model → task "Mark <model> discontinued within 7 days; keep the page".
- Price change → note in the lineup doc.
- Never act on rumours or non-Apple sources.

## j05 Weekly build (Tuesday)

Take the top 3–5 todo tasks with `owner: "Claude"` that belong to Target clusters (or are truth
fixes), ordered by `week` then `order`. For each page follow `docs/cowork-operating-prompt.md`
section 4, steps 5–9:

1. Read the live Google SERP for its keyword (Chrome, google.ae).
2. Write the change as the technician on the bench, to the page standard in `CLAUDE.md`.
3. Two independent reviewer subagents in fresh contexts: a Truth Auditor and a Technical SEO.
   Each returns APPROVED or REVISE. Apply only approved edits.
4. A Chief Editor subagent checks the whole batch for duplicate wording, cross-page
   contradictions and cannibalisation.
5. Gates: `npx tsc --noEmit`, `npm run build`, `npm run check:gates`, `npm run check:seo`,
   `check:internal` against the local build (see `AGENTS.md`), and Lighthouse (cached at
   `~/.npm/_npx/*/node_modules/.bin/lighthouse`) on changed templates: SEO and accessibility
   100. Best-practices is 96 sitewide until the CSP task lands; report it, don't block on it.
6. One commit per page on `WORK_BRANCH`. Never push, never deploy.

Mark each task done with its commit hash, and log a table: page | status | new title.

## j07 Truth drift scan (Wednesday)

1. `npm run check:seo`.
2. In the built HTML (`.next/server/app/**/*.html`) look for claims that change with time:
   "<n> years", "new", "latest", "just launched", "current lineup", release and discontinued
   statuses against `docs/apple-lineup-2026-09-26.md`, and any "same-day" claim that disagrees
   with that page's own table.
3. Clear contradictions → fix on the branch through the j05 review and gate steps. Anything that
   needs a fact → a new decision doc (next free D-number) with a `recommended` option.

## j08 Link monitor (Friday)

1. Semrush Backlinks: new and lost referring domains since last Friday.
   **Fallback / second source (works while Semrush is denied):** Search Console → Links in Chrome,
   `https://search.google.com/search-console/links/drilldown?resource_id=sc-domain%3Amacbook-repair-dubai.ae&type=DOMAIN`
   (and `type=EXTERNAL` for target pages). Read the table rows with javascript, save to
   `automation/data/gsc-links-YYYY-MM-DD.tsv`, and diff against the previous file for new and lost
   domains. Also request `http://www.macbook-repair-dubai.ae/` once: a "Parked Domain" page or a 525
   means backlinks to www are wasted (owner task t02).
2. Backlinks whose target URL is 404 on our site → add a 301 to the redirect source
   (`scripts/gen-redirects.cjs` input) through the j05 gates; one commit.
3. Unlinked brand mentions: WebSearch for "MacBook Repair Dubai" "Concord Tower" and the phone
   number; list pages that mention us without a link.
4. Directory progress from `docs/keywords/link-prospects-2026-09.csv` (aim: 10 UAE directories a
   month with the NAP exactly as in the fact sheet).
5. Draft up to 3 outreach emails to `automation/drafts/YYYY-MM-DD-outreach.md` and add one Owner
   task "Send the drafted outreach". Never send.

## j11 Skill sweep (Thursday)

Runs the audit skills no other job covers, against the local production build (`npm run build`,
`npm run start -- -p 3006`). Invoke each skill with the Skill tool and record its findings:

1. `/schema-audit`: `npm run check:gates`; FAQPage JSON-LD equals the visible FAQ on every page
   with one; LocalBusiness NAP equals `site.ts`. Tracker task `t-schema`.
2. `/internal-links-audit`: `npm run check:internal`; orphans must be 0; list money pages with
   fewer than 10 inbound links; anchors for a keyword link only to its owner page. `t-links`.
3. `/seo-technical`: robots.txt, sitemap, self-referencing canonicals, AI-crawler policy,
   Core Web Vitals on the local build. `t-tech`.
4. `/theme-visual-audit`: screenshots at 390 / 768 / 1280 / 1920 of the homepage, one service
   page, one blog post and `/contact/`; findings by severity. `t-visual`.

Clear template regressions → fix through the j05 review and gate steps, one commit. Content or
fact questions → War Room task. Report: `automation/reports/skill-sweep-YYYY-MM-DD.md`.

## j09 Monthly review (1st)

What moved and why (positions, referring domains, leads), the decay list (pages that dropped for
two weeks running), a refresh or merge plan, and next month's Mac and latest-iPhone plan. A second
subagent reviews the plan first. New clusters arrive in the War Room unmarked for the owner.

## j10 Quarterly check (1st of Jan, Apr, Jul, Oct)

Full fact check of the site against `docs/business-fact-sheet.md`, competitor gap against
fixsquad.ae, fixermanme.com and macrepair.ae, Arabic keyword re-pull. Bump `CONTENT_REVIEWED` in
`src/content/site.ts` only after the Truth Auditor approves the fact check. Code job.

---

## FINISH (every run)

0. **Skill Tracker** (https://claude.ai/artifact/HFAjMuyfXspSX3YNC9PAVh, `ArtifactData`,
   collections `tasks` and `log`). For every job that ran, update its tracker tasks (map in
   `docs/skill-automation-map.md`): set `lastRun`, `lastResult`, tick the `subs` entries that
   passed (`done: true`, `at`), untick ones that failed, set `status` (`recurring` for a
   scheduled task that ran clean, `blocked` + `blockedBy` when it needs the owner). Add one
   `log` entry `{at, by: "Autopilot", task, text}` per job. Pin writes with `if_version`.

1. For every job that ran: update `jobs/<id>` with `lastRun` (ISO time) and `lastResult` (one
   line), pinned to the version you read.
2. One `log` entry `{by: "Autopilot", at, text}`: what ran, what changed, and a "Needs you"
   list with the exact action for each item.
3. Write today's date to `automation/state/last-run.txt`.
4. If the dirty-tree rule passes, commit the `automation/` and `docs/keywords/` files this run
   wrote: `git commit -m "Autopilot YYYY-MM-DD: <jobs run>"`. Never push.
5. Final message: five lines at most, plus anything that needs the owner.
