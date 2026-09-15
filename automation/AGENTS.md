# Operating plan — macbook-repair-dubai.ae autopilot

This file binds every run of the scheduled task `mbr-growth-engine`. The loop
itself is in `AUTOPILOT.md`. Edit these two files, not the task prompt.

## Goal

Bring paying repair leads to macbook-repair-dubai.ae, unattended, 24/7:
leads arrive by **WhatsApp** (055 741 3706 → `https://wa.me/971557413706`, from
`src/content/business.generated.ts`, rendered by `StickyContactBar` and `WhatsAppCTA`
on every page). The `/api/lead` form is the secondary path (saves to `data/leads.jsonl`
and emails `LEAD_TO_EMAIL` over SMTP). Both must stay working.
Rank the site for high-intent Dubai Apple-repair queries, keep the Google
Business Profile alive, and never let the lead path break silently.

## Where things are

- Repo: `/Users/azizi/Claude/Projects/macbook-repair-dubai.ae-nextjs`, branch `main`,
  remote `origin` (GitHub `azizianalyst/macbook-repair-dubai-nextjs`).
- Production: https://macbook-repair-dubai.ae — Hostinger **Node.js** app (not static;
  there is no `out/`). Deploy exactly per `DEPLOY.md` with the `hostinger-macbookrepair` MCP.
- WhatsApp lead path: the `wa.me/971557413706` link must appear in the HTML of every money page.
  GA4 event for WhatsApp clicks: `NEXT_PUBLIC_GA_ID` is set; clicks are tracked by the CTA components.
- Form lead path: `src/app/api/lead/route.ts` → `data/leads.jsonl` on the server + SMTP email.
  Admin read of leads: `GET /api/leads` with `Authorization: Bearer $ADMIN_KEY`.
- GBP: OAuth connection in the admin (`/api/admin/gbp/*`), helpers in `src/lib/gbp.ts`.
  Reviews, posts, insights all go through the **live** admin API with `ADMIN_KEY`
  (from `.env.local`). Supermetrics is dead (trial expired) — never use it.
- Search Console: no API wired for the routine. Read it through the logged-in Chrome
  session (claude-in-chrome tools) at
  https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain%3Amacbook-repair-dubai.ae
- Content queue and open human tasks: `docs/TASKS.md`. Trust rules: `TRUST-CLAIMS.md`.
- Freshness cadence: `docs/freshness-cadence.md` (`CONTENT_REVIEWED` in `src/content/site.ts`).
- Generated files: `npm run build` runs `prebuild` (all `gen-*` + `extract-meta.cjs`).
  Never hand-edit `*.generated.ts`.

## Edge state (2026-09-16 — do not undo)
- Cloudflare DNS: apex `A 46.17.175.101` only (the hCDN `A 92.112.198.248` + two `AAAA 2a02:4780:…` records were deleted 2026-09-16), `www` CNAME → apex, all proxied.
- hPanel → Performance → CDN: **disabled**, and the site is ticked under "Opt out of automatic CDN" (Hostinger silently re-enables CDN otherwise — that is what put hCDN back in September).
- Daily check 14 (any `x-hcdn-request-id` header) is the alarm that either setting has reverted.

## Production branch guard (learned 2026-09-14 — do not remove)

`PRODUCTION_BRANCH` is the branch whose HEAD is what runs on the live site. Today it is
**`hide-prices-whatsapp`** (origin/main is a 3-commit June skeleton; do NOT deploy main until
Aziz merges). Before ANY build or deploy:

1. Resolve `PRODUCTION_BRANCH` from the line above. If it is not `main`, the worktree must be
   created from that branch and it must exist on `origin`; if it exists only locally
   (`git branch -r` lacks it), **do not build or deploy** — log "production branch unpushed"
   and put it under Needs Aziz.
2. Sanity gate after the build: `ls src/app | wc -l` in the worktree must be ≥ 95% of the
   live sitemap URL count / 3 (rough page count). If the worktree looks smaller than the live
   site, abort the deploy.

## Edge rule (learned 2026-09-15 — the 429 outage)

macbook-repair-dubai.ae is fronted by **Cloudflare** (nameservers austin/nina.ns.cloudflare.com,
zone in Azizianalyst@gmail.com's account). Hostinger's own CDN (hCDN, `*.cdn.hstgr.net`,
`x-hcdn-request-id` header) must **never** sit behind Cloudflare on this site: hCDN sees every
visitor as one of a few Cloudflare IPs, its per-IP security throttle bans that IP, and every
visitor worldwide gets a bare `429` (11,614 of ~18,000 requests in the week of 8–15 Sep).

Correct state: Cloudflare `A macbook-repair-dubai.ae → 46.17.175.101` (origin, proxied), no
other apex A/AAAA, `www` CNAME → `macbook-repair-dubai.ae`, hPanel → Performance → CDN =
**Disabled** for this site, hPanel CDN security level irrelevant once disabled. Hostinger
auto-enables CDN on sites; if it ever reappears (header present on a response), that is a
red alert (check 14).

Any 429 on this domain is an outage, never "rate limiting working as intended": the app's own
limiter was removed on 2026-08-31 (commit ea226f2) and the live build is from 2026-09-02.

## Working tree rule (important)

Aziz often has an uncommitted feature branch checked out in the project directory.
**Never touch it.** Every run works in a dedicated worktree on `main`:

```bash
ROOT=/Users/azizi/Claude/Projects/macbook-repair-dubai.ae-nextjs
WT=$ROOT/.claude/worktrees/autopilot
cd $ROOT && git fetch -q origin main
[ -d $WT ] || git worktree add -q $WT $PRODUCTION_BRANCH
cd $WT && git checkout -q $PRODUCTION_BRANCH && git reset -q --hard origin/$PRODUCTION_BRANCH
[ -e node_modules ] || ln -s $ROOT/node_modules node_modules
[ -e .env.local ]   || cp $ROOT/.env.local .env.local
```

All commands, builds, commits and the deploy ZIP run from `$WT`. Commit to `main`
and push. Logs under `automation/` are committed from the worktree too.

## Content rules (non-negotiable)

1. **Quote model** — the site does not advertise repair prices. Never add an AED figure,
   `priceRange`, or Offer price. "Free diagnosis, quote before work" is the only pricing line.
2. **Truth** — every fact must already exist in the repo (team roster, review count,
   address, founder) or in `TRUST-CLAIMS.md`. No invented reviews, tenures, certifications,
   turnaround guarantees, or "Apple authorised" language. Review count is whatever
   `src/content/site.ts` says; do not bump it without a screenshot-verified Google number.
3. **Brand** — "MacBook Repair Dubai" is also traded by another business; never cite or
   link the wrong LinkedIn/GBP. Our GBP is Concord Tower Office #45, Dubai Media City.
4. **Requests to the live site** — always a browser User-Agent (`curl` is on the scraper
   list), always `-L` (pages 308 to a trailing slash), ≤ 30 requests per run. A `429` is an
   outage (see Edge rule): stop, mark remaining checks "skipped (429)", fail check 13, alert.
5. **Templates** — new pages use the existing block templates in `src/components/blocks/`
   and the pattern in `docs/azizi-template-standard.md`; every page needs a server-rendered
   `PageSchema`, a 40–60 word answer block, FAQ, and ≥3 inbound internal links.
6. **Gates are blocking** — `npm run build`, `npm run check:urls`, `npm run check:internal`,
   `node scripts/audit-prices-src.mjs`. Red gate → fix or revert. Never deploy past red.
7. **Email** — only the daily canary sends email, only on failure, and only to
   azizianalyst@gmail.com via the Gmail connector. Never email the same open failure two
   days running; log "still open, day N" instead. Never send a real-looking test lead.
8. **WhatsApp is the conversion** — every page and every GBP post must make "WhatsApp us"
   the primary CTA (number 055 741 3706); the form is secondary. Never change the number.
9. **GBP** — posts must point at a page that is live (curl 200) and must obey the quote
   model and truth rules. Reply to every new review (≤ 60 words, thank by first name,
   mention the repair if the review does, no incentives, no "certified"). Never delete posts
   or edit business info in the routine; those are human decisions.

## Standing authorisation

Aziz has authorised the full routine path: read Search Console, research, write, build,
run gates, commit, push to main, deploy via the Hostinger MCP, ping IndexNow, reply to
reviews, publish GBP posts, and send the canary alert email. Do not ask permission and
do not stop to check in. Anything outside this list (business-info edits, pricing,
deleting content, new integrations such as WhatsApp) goes under "Needs Aziz" in the report.
