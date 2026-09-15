# Autopilot — the one daily routine for macbook-repair-dubai.ae

Read `automation/AGENTS.md` first; it binds every part below and defines the
worktree setup (do it before anything else). This file is the source of truth for
the scheduled task `mbr-growth-engine` (daily, 10:00 Dubai). Edit the loop here.

## How the day branches

After the worktree setup, run `date +%u` (1 = Monday, 4 = Thursday) and `date +%d`.
Do **Part 1 every day**. Add **Part 2 on Monday**, **Part 3 on Thursday**,
**Part 4 on the 1st and 15th**. Parts run in numeric order. A red gate stops the
whole run; everything else is skip-and-log. Finish with the FINISH section.

`ADMIN_KEY` comes from `.env.local` (`grep ^ADMIN_KEY .env.local | cut -d= -f2`).
`LIVE=https://macbook-repair-dubai.ae`. Every live request uses
`UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36"`
via `curl -sL -A "$UA" --max-time 20`, with **6 s** between requests (≤ 10/min). The first 429
ends all further live requests for this run (see AGENTS.md rule 4).

---

## PART 1 — Daily canary + GBP care (every run)

**A. Site and lead-path health.** Run in order, record each as pass/fail:

1. `curl -s -o /dev/null -w "%{http_code}" $LIVE/` → 200, and the body contains "MacBook Repair Dubai".
2. Money pages must be 200: `/`, `/macbook-repair-dubai`, `/macbook-screen-repair-dubai`,
   `/macbook-battery-replacement-dubai`, `/macbook-logic-board-repair-dubai`, `/iphone-repair-dubai`,
   `/contact`, `/reviews`, `/blog`. (If a slug 404s, check `src/app` for the real one before
   calling it a failure — then fix this list in a commit.)
3. `www` → 308 to non-www: `curl -sI https://www.macbook-repair-dubai.ae/ | grep -iE "^(HTTP|location)"`.
4. robots.txt must contain `Sitemap:`; in the **first** `User-Agent: *` group the only Disallows may be
   `/api/` and `/admin/` (a `Disallow: /` further down belongs to the scraper-bot group and is fine).
5. `/sitemap.xml` is an index. Fetch `/sitemap/services.xml`, `models.xml`, `locations.xml`, `blog.xml`,
   `guides.xml`, `general.xml`, `categories.xml` (7 requests) and sum the `<loc>` counts. Compare to the
   last health file that has a number; a drop of more than 5% is a failure.
6. WhatsApp lead path: for `/`, `/contact` and `/macbook-screen-repair-dubai`, the HTML must contain
   `https://wa.me/971557413706` (`curl -s $LIVE/<path> | grep -c "wa.me/971557413706"` > 0) and
   `curl -sI https://wa.me/971557413706` must not be a 4xx/5xx. A page missing the link, or a wrong
   number, is a **failure** — this is the money path.
6b. Form lead path (secondary): `curl -s -o /dev/null -w "%{http_code}" -X POST -H "content-type: application/json" -d '{}' $LIVE/api/lead`
   → 400 or 422 is healthy (it rejects an empty body). 404, 405 or 5xx is a failure.
   Then `curl -s -H "Authorization: Bearer $ADMIN_KEY" "$LIVE/api/leads"` → must be 200 JSON.
   Count leads with a timestamp in the last 24 h and the last 7 days; record both.
7. Live build matches main: `curl -s $LIVE/build-id.txt` if that file exists; otherwise compare
   `lastmod` of `/` in the sitemap with `src/content/lastmod.generated.ts` on origin/main. A gap of
   more than 24 h after a push is a failure ("deploy did not land").
7b. **Edge probe (the 429 guard)** — 10 requests, 1 s apart, browser UA, to `/`, `/contact/`,
   `/macbook-screen-repair-dubai/`, `/macbook-battery-replacement-dubai/`, `/iphone-repair-dubai/`,
   `/reviews/`, `/blog/`, `/robots.txt`, `/sitemap.xml`, `/macbook-repair-dubai/`. Record every status
   and whether any response carries `x-hcdn-request-id` or `platform: hostinger`. **Any 429 = check 13
   fails. Any hCDN header = check 14 fails** ("Hostinger CDN is back in front of the site — see AGENTS.md
   Edge rule"). Both are alert conditions.
8. Latest Hostinger build (only if `hosting_listWebsitesV1` on `hostinger-macbookrepair` lists the domain;
   otherwise record "MCP on wrong account" as a failure): `mcp__hostinger-macbookrepair__hosting_listJsDeployments` (`perPage: 1`)
   → record state.

**B. GBP care (through the live admin API — skip all of B if a 429 was seen).**

9. `GET $LIVE/api/admin/gbp/status` → connected? If not, this is a failure ("GBP token expired —
   Aziz must reconnect at /admin/gbp").
10. `GET $LIVE/api/admin/gbp/reviews` → any review without a reply? Reply to each via
    `POST /api/admin/gbp/reviews` (read `src/app/api/admin/gbp/reviews/route.ts` for the body
    shape) following the reply rules in AGENTS.md. Record count replied.
11. Post cadence: `GET $LIVE/api/admin/gbp/posts` → date of the newest post. If it is older than
    **6 days**, publish one STANDARD post now: pick the next unused entry from
    `docs/gbp-posts-batch-2.md` (then batch-1), or write a fresh 80–120 word post about a live
    service page. Body must be quote-model, truthful, with a CTA linking to a page that curls 200.
    `POST /api/admin/gbp/posts` (read the route for the shape). Mark the entry used by appending
    the date in the batch file. Record the post link.
12. `GET $LIVE/api/admin/gbp/insights` (last 28 days) → calls, website clicks, direction
    requests; record in the health file for the weekly trend.

**C. Write and alert.**

Write `automation/logs/health/YYYY-MM-DD.md`: a table of checks 1–14 with results (13 = "no 429 seen this run", 14 = "no hCDN header seen"), plus
"Leads: N (24 h) / N (7 d)", "GBP: reviews replied N, post published Y/N, insights ...", and a
"Still needs Aziz" list built from the open 🧑 items in `docs/TASKS.md` Module 1–2 plus anything
found today. Append one line to `automation/logs/YYYY-MM.md`: "canary: N/14 pass — <failures>".

ALERT RULE. Email azizianalyst@gmail.com via the Gmail connector ONLY if: the site is down or
blank; any 429 or hCDN header (checks 13/14); the WhatsApp path (check 6) or form path (check 6b) fails; robots.txt fails; the sitemap dropped >5%; a deploy has not
landed for >24 h; the GBP connection is dead. Subject: "macbook-repair-dubai.ae canary: <what
failed>". Body: the failing check, one sentence on what it means, and the exact action only Aziz
can take (429/hCDN: Cloudflare DNS must be A → 46.17.175.101 only, www CNAME → apex, hPanel CDN Disabled; lead path: check `SMTP_*` + `LEAD_TO_EMAIL` in Hostinger → Node.js → Environment
variables; GBP: reconnect at /admin/gbp; deploy: rerun `DEPLOY.md`). Do not email when everything
passes. Do not repeat an unchanged failure two days running.

---

## PART 2 — Weekly growth run (Monday only)

Goal: ship one page that can win a lead-bearing query, then point GBP at it.

**Precondition:** the production branch guard in AGENTS.md passes (branch exists on origin) AND
`hostinger-macbookrepair` lists macbook-repair-dubai.ae. If either fails, do steps 1–2 only
(measure and pick), write the pick to the log as "Next Monday", and skip 3–7.

1. **MEASURE** — In the logged-in Chrome session open Search Console (URL in AGENTS.md), last
   28 days vs previous 28, Queries tab then Pages tab. Capture: top 30 queries by impressions with
   position and CTR; queries in position 5–20 with ≥ 50 impressions; pages that lost > 30% clicks.
   Write `automation/gsc/YYYY-MM-DD.md`. If Chrome is not logged in, log "GSC unavailable" and
   fall back to `docs/gsc-longtail-queries-2026-09-01.csv` + `docs/keyword-service-gap-audit-2026-08-30.md`.

2. **PICK one job**, in this priority:
   a. A money page (screen, battery, logic board, liquid damage, data recovery, iPhone screen/battery)
      in position 5–15 with impressions → **refresh** it: sharper title (≤ 60 chars, Dubai +
      service + a truthful qualifier), rewrite the 40–60 word answer block, add one FAQ that a
      real query asks, add 2 internal links to it from related pages, bump `dateModified`.
   b. A query cluster with ≥ 100 impressions and no page targeting it → **build** the page with
      the matching template (`src/components/blocks/…`) and register it exactly as sibling pages
      are (route file, `gen-routes`, menus/categories if needed, `docs/url-inventory-by-cluster.md`).
   c. Otherwise the next 🤖 item in `docs/TASKS.md` Workstream B/C that is a page job.
   Never pick a page that is mid-edit on Aziz's branch (`git -C $ROOT status --short` lists it).

3. **WRITE** under the content rules in AGENTS.md. Word count 900–1,400 for a service page,
   1,200–2,000 for a guide. Every page: H1 with the query, answer block, H2s that mirror real
   questions, FAQ (4–6), `PageSchema` server-rendered, ≥ 3 inbound links from live pages, primary CTA
   "WhatsApp us on 055 741 3706" (`wa.me/971557413706`, prefilled message naming the service), with
   the form at `/contact` as the secondary CTA.

4. **GATE** — from `$WT`: `rm -rf .next && npm run build && npm run check:urls && npm run check:internal && node scripts/audit-prices-src.mjs`.
   Non-zero exit → fix; if it cannot be fixed within the run, `git checkout -- .` and log why.

5. **SHIP** — commit ("feat(seo): <slug> — <why, with the GSC numbers>", ending with
   "Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"), push to main, then deploy exactly per
   `DEPLOY.md` steps 2–5 from `$WT`. Verify the new/refreshed URL returns 200 live and its
   `<title>` is the new one. Then `node scripts/indexnow-ping.mjs`.

6. **GBP follow-through** — publish one GBP post (rules in Part 1 step 11) whose CTA is the page
   just shipped. Add the page to `docs/gbp-posts-batch-2.md` as a used entry.

7. **LOG** — append to `automation/logs/YYYY-MM.md`: what shipped (URL), the query it targets and
   its GSC numbers, gate result, deploy verified Y/N, IndexNow Y/N, GBP post link. Add a
   "Next Monday" line with the second-best candidate so the next run starts faster.

---

## PART 3 — AI visibility and SERP watch (Thursday only)

No edits, no deploy, no email. Research only.

A. In Chrome, ask each of these 8 prompts in ChatGPT (chatgpt.com, search on) and Perplexity;
   record whether macbook-repair-dubai.ae is cited and which competitors are:
   "best MacBook repair in Dubai", "MacBook screen replacement Dubai", "MacBook battery
   replacement Dubai cost", "MacBook logic board repair Dubai", "MacBook liquid damage repair
   Dubai", "iPhone screen repair Dubai Media City", "Apple repair near Dubai Media City",
   "data recovery MacBook Dubai".
B. Google (incognito tab, `&gl=ae&hl=en`) the same 8 queries; record our position (or "not top
   10"), the map-pack members, and any new competitor URL not seen last week.
C. Write `automation/ai-visibility/YYYY-MM-DD.md` with both tables and up to 3 concrete
   recommendations for Monday (e.g. "build /x: cited for prompt 5 via competitor Y, we have no
   page"). Append one line to `automation/logs/YYYY-MM.md`: "AI: cited N/16, Google top-10: N/8".

---

## PART 4 — Links, quick wins, freshness (1st and 15th only)

1. **Corpus** — `rm -rf .next && npm run build` in `$WT`; then `npm run check:internal` and
   `node scripts/crawl-site.mjs` (against the local build if it supports it, else live, slowly).
2. **Gather** — pages with < 3 inbound links; money pages with < 5; titles < 45 chars; pages whose
   `dateModified` / lastmod is > 90 days old among the top-20 GSC pages; GSC pages with ≥ 200
   impressions and CTR < 2%.
3. **Score** — +5 money page, +4 fix < 30 min, +2 fix 30–120 min, +4 ranks 5–15, +3 ≥ 200
   impressions, +2 no template change. ≥ 12 do now; 8–11 if time allows; < 8 log.
4. **Fix**, ~2 hours max: add internal links (only genuinely relevant), lengthen weak titles
   truthfully, rewrite title/meta for up to 3 low-CTR pages, make a real content improvement on
   up to 2 stale money pages (new section answering an unanswered question) and bump the date.
   On the **1st of Jan/Apr/Jul/Oct** also bump `CONTENT_REVIEWED` in `src/content/site.ts`.
5. **Gate, ship, log** — exactly as Part 2 steps 4, 5 and 7, plus `node scripts/crawl-site.mjs`
   against live after deploy.
6. **Backlinks** — read `docs/backlink-prospects-2026-06.csv` and `docs/link-and-mention-plan.md`;
   draft (do NOT send) up to 3 outreach emails into `automation/outreach/YYYY-MM-DD.md` for Aziz
   to send. Listing sites/directories that only need a form: list them under "Needs Aziz".

---

## FINISH (every run)

From `$WT`: `git add automation docs && git commit -m "Autopilot YYYY-MM-DD: <parts run>" && git push origin main`
(if there is nothing to commit, say so). End with a short report:

- Canary: N/14 pass, alert sent Y/N, leads 24 h / 7 d, GBP reviews replied, post published.
- For any other part: what shipped (live URL), what was skipped and why, gate result, deploy
  verified Y/N, IndexNow Y/N.
- **Needs Aziz**: the human-only items, each with the exact action.

Never report a part complete if its deploy did not verify live. Never leave `$WT` on a branch
other than `main`.
