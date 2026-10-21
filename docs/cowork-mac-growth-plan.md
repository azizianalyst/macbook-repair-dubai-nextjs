# Mac-first growth plan and automation setup (for Cowork)

**Date:** 30 Sep 2026. **Site:** macbook-repair-dubai.ae

Give this file to Cowork together with `docs/cowork-operating-prompt.md`. The operating prompt says how to work: roles, reviews and gates. This file says what to work on, how often, and what runs by itself.

## 0. The owner's direction (30 Sep 2026)

1. **Mac first.** MacBook, iMac, Mac mini, Mac Studio and MacBook Neo get almost all new effort. The latest models matter most.
2. **iPhone: latest models only.** That means the iPhone 18 Pro and 18 Pro Max, iPhone Duo, iPhone Air, iPhone 17 and 17e. The iPhone 17 Pro and 17 Pro Max are included too, because Apple stopped selling them but many people in Dubai still own them. Older iPhone pages are maintained, not expanded.
3. **iPad, older iPhones and area pages: maintain only.** Fix what is wrong. Don't create new pages or run pushes.
4. **Apple Watch and AirPods: never.** There is no in-house service.
5. **The goal is automation.** Everything that can run on a schedule does. The owner checks in once a week for about 15 minutes (section 6).

One trade-off, recorded so it is a conscious choice: "iphone repair dubai" (2,400 searches a month, keyword difficulty 10) is the biggest easy keyword the site could win. Under this direction, the iPhone hub is maintained and linked from every latest-iPhone page, but it doesn't get a push. The owner can change this in the War Room at any time.

## 1. What to take from here: the handover pack

Everything is in the repo at `~/Claude/Projects/macbook-repair-dubai.ae`. Cowork reads it there. Nothing needs to be copied.

### Rules and facts (read every session)

| File | Use |
|---|---|
| `CLAUDE.md` | Standing rules. Always win |
| `docs/business-fact-sheet.md` | The only allowed facts |
| `TRUST-CLAIMS.md` | Claims that were verified, removed or are still open |
| `docs/cowork-operating-prompt.md` | Team roles, review pipeline, gates |
| `DEPLOY.md` | Deploy steps. Run them only on "deploy" |

### Data (the starting baseline, 26 Sep 2026, Semrush UAE)

| File | Use |
|---|---|
| `docs/keywords/keyword-bank-2026-09.csv` | 6,184 relevant keywords with device, type, KD, our position and best page. **Filter `device` = macbook or mac-desktop for Mac work** |
| `docs/keywords/content-topics-2026-09.csv` | Keywords grouped into 623 topics, one URL each |
| `docs/keywords/low-competition-content-bank.md` | The writing list (low-competition topics) |
| `docs/keywords/competitor-gap-2026-09.csv` and `competitor-gap-expanded-2026-09-26.*` | Keywords where fixsquad.ae, fixermanme.com or macrepair.ae rank and we don't |
| `docs/keywords/semrush-positions-ae-2026-09-25.tsv` | Our 450 ranking rows, plus the competitors' |
| `docs/keywords/link-prospects-2026-09.csv` | 354 link prospects (29 are UAE directories) |
| `docs/keywords/semrush-kmt-arabic-ae-2026-09-26.tsv` | Arabic keywords (the text was damaged on save; re-pull before using) |
| `docs/keyword-page-map.csv` | One owner page per topic. Check it before any new page or retitle |
| `docs/keywords/page-inventory-2026-09-26.tsv` | All 639 public URLs by cluster |
| `docs/apple-lineup-2026-09-26.md` | Verified Apple lineup with sources, UAE prices and dates |
| `docs/seo-master-plan-2026-09-26.md` | Phases, targets, decisions |
| `data/leads.jsonl` | Website leads. Use it to count leads by landing page (it's gitignored, so don't commit it or quote customer details) |

### Tools already in the repo (use them; don't rebuild them)

| Command | Checks |
|---|---|
| `npm run check:gates` | Images, schema, redirect chains, hard-coded tenure, alt text |
| `npm run check:seo` | Banned claims, H1, title and meta length, FAQ schema matching the visible FAQ (known issues: 98) |
| `npm run check:internal` | Broken internal links, orphan pages |
| `node scripts/lead-canary.mjs` | Whether a website lead actually reaches a person |
| `node scripts/crawl-site.mjs`, `scripts/check-urls.mjs --live` | Live crawl and URL status (max 1 request every 2 seconds) |
| `npm run indexnow` | Tells Bing and Yandex about changed URLs after a deploy |

### The shared dashboard

- **SEO War Room:** https://claude.ai/artifact/KJdhnCzAKcSfDT4JYSW6Nf
- Collections: `snapshots`, `clusters`, `tasks`, `decisions`, `log`.
- It is the only place the owner looks, so every automated job writes its result there.

### Not here yet: connect these once, so automation has real data

Only the owner can connect these. Until they are connected, say in every report that the data is Semrush-only.

1. **Google Search Console:** clicks, impressions, CTR and position by page and query. Without it there is no "which pages earn clicks", no protected-page list, and no early warning of new-model repair searches.
2. **Ahrefs:** DR, referring domains, lost and broken backlinks, a second keyword source.
3. **GA4:** leads by landing page. The WhatsApp and call click events exist; Consent Mode v2 is still to do (master plan 1.12).
4. **Google Business Profile insights:** calls, direction requests and website clicks from the Local Pack. That is where most of today's traffic comes from.
5. **Hostinger deploy token** for the account that owns the domain (decision D1). Without it nothing reaches Google.

## 2. What we're working with (Mac)

- **Demand:** 1,177 relevant Mac keywords, about 11,500 searches a month in the UAE.
- **Where we rank:**
  - Top 3: 24 keywords
  - Positions 4–10: 8 keywords
  - Page 2–3: 2 keywords
  - Not ranking: 1,143 keywords
- **What already works:** the homepage is #2 and in the Local Pack for "macbook repair dubai" (1,300 searches a month), "mac repair dubai" and "imac repair dubai".
- **The problem:** the dedicated service pages sit on pages 3–6, because the homepage and several URLs compete for the same keywords.
- **Latest Mac pages already exist:**
  - MacBook Neo (5 pages)
  - MacBook Air M5 (5)
  - MacBook Pro 14/16 M5, M5 Pro and M5 Max (8)
  - Mac mini M6 / M5 Pro (3)
  - Mac Studio M5 Max / Ultra (3)
- **Search behaviour for new models:** Semrush shows no repair searches yet for any 2025–26 model, only shopping searches (for example, "macbook neo" has 2,900 a month). Repair searches arrive months after launch: accidents first, batteries later.
- **So the strategy for latest models is:** be the accurate, ready page when the first repair searches appear. Catch them early in Search Console, since GSC shows new queries before Semrush does.

## 3. The Mac-first plan, in order

Each step goes through the full pipeline in the operating prompt: plan, independent review, Target mark, build, two reviewers, chief editor, gates, then the page table.

### Stage A: weeks 1–2, fix what blocks everything

1. **Get deploys working** (owner, D1). Until then, every improvement stays on the branch.
2. **Make Mac turnaround claims consistent** (task t20). Every Mac model and service page shows one timeline, and the title and meta description match it.
3. **Resolve the unverified claims (D6)**, starting with those on Mac pages: 30-minute appointments, the free loaner MacBook, "guaranteed" slots.
4. **Stop Mac pages competing with each other.** Each keyword gets one owner page, and competing copy links to the owner instead of duplicating it:

| Keyword | Owner page |
|---|---|
| "macbook repair dubai" | Homepage (don't change its title) |
| "mac repair dubai" | `/mac-repair-dubai/` |
| MacBook battery | `/macbook-battery-replacement-dubai/` (#41 while the homepage is #3) |
| MacBook screen | `/macbook-screen-repair-dubai/` (protected: add only) |
| MacBook Pro | `/macbook-pro-repair-dubai/` |
| MacBook Air | `/macbook-air-repair-dubai/` |
| iMac | `/imac-repair-dubai/` (#51 while the homepage is #2) |
| Mac data recovery | `/mac-data-recovery-dubai/` |
| Logic board | `/macbook-logic-board-repair-dubai/` |
| Water damage | `/macbook-water-damage-repair-dubai/` |

   Then 301 the duplicate MacBook Air screen URL into the replacement page (master plan 2.1), and give the homepage a "Repairs we do" block with exact-match links to the Mac owner pages. That block adds links only, so it is allowed on a protected page.

### Stage B: weeks 2–6, push the Mac money pages

For each owner page above, in order of searches × how winnable the SERP is:
- Read the live SERP.
- Rebuild the page to the page standard in CLAUDE.md.
- Cover every keyword in that page's topic row in `content-topics-2026-09.csv` as H2s and FAQs.
- Add at least 10 internal links in from relevant Mac pages.

Quick wins already on page 1 or 2:

| Keyword | Searches/mo | KD | Now |
|---|---:|---:|---|
| macbook repair abu dhabi | 390 | 15 | #10 |
| macbook battery replacement | 140 | 24 | #10 |
| imac screen replacement | 30 | 18 | #9 |
| apple macbook pro battery replacement cost | 30 | — | #4 |

### Stage C: weeks 3–8, Mac problem guides (low difficulty, the reader becomes a repair lead)

Build only where the keyword map shows no owner page. Otherwise improve the owner page.

| Keyword | Searches/mo | KD | Note |
|---|---:|---:|---|
| my macbook pro screen is black / black screen | 390 | 36 | We're #10 |
| macbook pro frozen | 140 | 29 | |
| macbook pro touch bar flickering | 110 | 22 | Fold into the existing Touch Bar post |
| imac upgrade | 140 | 26 | Owner: the iMac RAM/SSD upgrade page |
| macbook screen not turning on / my macbook pro won't turn on | 30 each | 28–29 | |

Every guide links to its owner service page with a descriptive anchor.

### Stage D: always on, latest Mac models

- **Keep the current model pages accurate against Apple:**
  - MacBook Neo: add the iFixit repairability facts (master plan 4.6).
  - MacBook Air M5 and MacBook Pro M5 family: check specs against apple.com/ae.
  - Mac mini M6 and Mac Studio M5: check the facts, and merge any leftover duplicate URLs.
- **Apple-price comparison posts:** name Apple's published UAE repair prices, with the source. Our own price stays "WhatsApp for a quote". Examples: "MacBook Neo battery replacement cost in the UAE", "MacBook Air M5 battery cost".
- **Launch rule:** when Apple announces a Mac, build its hub page within 48 hours of the announcement, never on rumours, and link it from its family hub. Expected next (rumoured, don't pre-build): M6 MacBook Pro and iMac, Oct–Dec 2026.
- **When the first repair searches for a new model appear in GSC,** give that model's page an early-fault section. Use only faults reported by two reputable sources.
- **When Apple discontinues a model,** update the page's status within a week and keep the page. Owners still need repairs.

### Stage E: always on, latest iPhones only

| Page | Task |
|---|---|
| `/iphone-18-pro-repair-dubai/`, `/iphone-18-pro-max-repair-dubai/` | Launched facts (aluminium unibody, Ceramic Shield back, variable-aperture camera). The display is the entry point for repairs |
| `/iphone-duo-repair-dubai/` | **Publish on 23 Oct 2026** (it's staged now and kept out of the sitemap). Apple-verified facts only; no repairability score exists yet, so say so |
| iPhone 17 Pro / Pro Max pages | Status "discontinued 9 Sep 2026, fully supported" |
| iPhone Air, 17, 17e | Keep accurate; no push |
| Posts | "iPhone 18 Pro screen replacement cost in the UAE" (Apple's price with the source). Early-fault posts only with two reputable sources |

### Stage F: months 2–6, authority for Mac pages

- **Citations:** 10 UAE directories a month with the NAP exactly as in the fact sheet. Cowork drafts and tracks; the owner submits anything that needs a login.
- **An earned data story from our own repair records,** for example "the Mac faults we see most in a Dubai summer". It must use real counts from the workshop, which the owner confirms. Pitch Khaleej Times and What's On.
- **Never** buy links, swap links or use a network of sites.

### Maintain-only areas (iPad, iPhone 16 and older, area pages)

These get only:
- truth and gate fixes
- 301s for any URL changes
- a meta refresh when a page ranks 4–15
- no new pages

## 4. How often to update what (what Google and AI search reward)

Google's guidance, in short:
- Update a page when something meaningful changes, not to look fresh.
- Change the visible date and `dateModified` only when the content really changed. Faking dates is a spam signal.
- New products create "freshness" demand, so launch pages must be fast and accurate.
- AI answers (Google AI Overviews and AI Mode, ChatGPT, Perplexity, Copilot) draw on the same content. They favour clear answer-first paragraphs, current facts, a visible date and consistent business details everywhere.

| What | How often | Trigger or check |
|---|---|---|
| **Latest-model pages** (Mac first, then latest iPhone) | At announcement (within 48 hours); at 30 days (parts availability, first faults); at 90 days (battery and screen demand); then every quarter while Apple sells the model | Apple newsroom and apple.com/ae checked weekly. GSC new-query watch weekly |
| **Model discontinued** | Within 7 days | apple.com/ae lineup change |
| **Mac money pages** (the Stage A owner pages) | Positions checked weekly. Facts checked monthly. Content refreshed every quarter, or right away if a page drops 3 or more positions for 2 weeks or the SERP changes type | Weekly ranking job |
| **Blog and problem guides** | Refresh when ranking 4–15 (best return) or declining; otherwise reviewed yearly. A year in the title only when the content was actually updated | Monthly decay job |
| **Business facts** (review count, rating, hours, NAP) | Review count checked monthly against the GBP panel. Hours and NAP checked monthly, and on every GBP change | Update `data/seo.json` only, then rebuild |
| **Truth and claims scan** | Every build (gates) and weekly (drift scan) | `check:seo` and `check:gates` |
| **Technical** (schema, redirects, sitemap, llms.txt, internal links) | Every build (automatic); full live crawl monthly; Lighthouse whenever a template changes | Gates and the monthly crawl |
| **Keyword data** | Positions weekly. Keyword bank and new KD 0–29 keywords monthly. Competitor gap and backlink gap quarterly | Data jobs |
| **GBP** | One post a week with a real photo. A review request after every job. Q&A checked weekly | Owner sends; Cowork drafts |
| **Apple's calendar** | September: iPhone. Oct–Nov: possible Macs. Spring: MacBook Air, iPad, e-model iPhone. June (WWDC): macOS and iOS problem guides after release | Calendar reminders |
| **`CONTENT_REVIEWED` date** (shown sitewide) | Quarterly, only after the quarterly fact check is done | Quarterly job |

## 5. Automation: what Cowork schedules

Every job writes to the War Room. Jobs that change code do it on a branch, run the full gates, get an independent review, and never deploy. Anything needing the owner becomes a War Room decision with a deadline.

| Job | When (Dubai time) | Does | Output |
|---|---|---|---|
| Daily data | Every day, 07:00 | Snapshot (Semrush now, plus GSC and Ahrefs once connected). Opportunities: Mac positions 4–15, snippet targets at positions 2–8, pages ranking for the wrong query, drops. New Mac and latest-iPhone KD 0–29 keywords added to the bank | Snapshot + opportunity list |
| Decision watcher | Every day, 07:30 | Reads new Target/Later/Skip marks and decision answers, and turns them into tasks | Tasks |
| Lead and uptime canary | Every day, 08:00 and 20:00 | Checks the live lead form reaches a person and the key pages load | Alert task if anything fails |
| Apple watch | Mondays and Thursdays | Checks the Apple newsroom and apple.com/ae lineup for announcements, discontinued models and price changes | Launch or update plan within 48 hours |
| Weekly build | Tuesday | Takes the top Target items from the plan through the full pipeline, 3–5 pages a week, Mac first | Commits on the branch + page table |
| Weekly report | Monday, 09:00 | Positions for every target keyword, clicks and CTR by page, leads by landing page, AI citations, referring domains, compared with last week | War Room log + snapshot |
| Truth drift scan | Wednesday | Claims that change with time: tenure, "new", "latest", launch dates, discontinued models | Fix tasks |
| Link monitor | Friday | New, lost and broken backlinks (301 the broken ones), unlinked mentions, directory progress | Link tracker + outreach drafts |
| Monthly review | 1st of the month | What moved and why. Decay list. Refresh or merge plan. Next month's Mac and latest-iPhone plan | Plan to the War Room for Target marks |
| Quarterly | 1 Jan / Apr / Jul / Oct | Full fact check. `CONTENT_REVIEWED` bump. Competitor and backlink gap. Arabic keyword re-pull | Plan + fact-sheet update |
| Pre-deploy | On "deploy" | Full gates, Lighthouse, diff summary, page table, then DEPLOY.md, then live content check and IndexNow | Release note |

Coordinate with the existing Monday 06:00 cloud routine, which also audits this branch:
- Cowork pulls before every job and never force-pushes.
- Cowork logs every change in the War Room.

## 6. The owner's weekly 15 minutes (the only human part)

The system can't be fully hands-off. These steps need a person by law, by account ownership, or by the site's truth rules. Keep them to one weekly visit to the War Room:

1. **Mark new clusters** Target, Later or Skip.
2. **Answer open decisions.** Each one comes with a recommended option.
3. **Type "deploy"** if the release note looks right.
   - Optional standing decision: "Deploy automatically when every gate passes and the reviewers approved." This removes this step. It is the owner's call; until it is made, deploys wait for the word.
4. **Send the drafted outreach, GBP posts and review replies.** Cowork drafts, the owner sends.
5. **Confirm new business facts:** real repair counts for the data story, new warranty terms, new services.

## 7. First week for Cowork

1. Read `docs/cowork-operating-prompt.md`, this file, and the War Room.
2. Record the owner's direction (section 0) in the War Room log.
3. Set up the scheduled jobs in section 5. Show the owner each job's schedule, what it may change, and how it is checked.
4. Run the first daily data job, filtered to Mac and the latest iPhones.
5. Start Stage A: t20 on the Mac pages, then the Mac keyword-owner table.
6. Post a 4-week Mac plan in the War Room, ordered by expected leads and effort, with anything waiting on the owner marked.

## 8. How we know it's working (targets for 31 Dec 2026)

| Measure | Now | Target |
|---|---|---|
| Mac keywords in the top 10 | 32 | 80 |
| Mac owner pages ranking for their own keyword (instead of the homepage or a sibling) | Most don't | 8 of the 10 in Stage A |
| Latest-Mac and latest-iPhone pages accurate against apple.com/ae | — | 100%, checked weekly |
| New models: hub page live within 48 hours of an announcement | — | Every time |
| Referring domains | 99 | 130 |
| Leads from Mac landing pages | Not measured | Measured weekly once GA4 or the leads log is connected |
