# SEO master plan — macbook-repair-dubai.ae
**2026-09-26.** Built from Semrush data pulled today (Site Audit, Organic Research, Keyword Magic, Keyword Gap, Backlink Gap), a verified Apple lineup check (apple.com/ae + newsroom), and a read-only audit of the code on branch `fix/image-content-match` (`docs/repo-audit-2026-09-26.md`).

**Rule for this plan:** nothing gets built or changed without a line in this file. Work top to bottom. Each task names who does it (🧑 owner · 🤖 Claude in the repo), how long it takes, and how we check it worked.

**Data files** (all in `docs/keywords/`):

| File | What it is |
|---|---|
| `semrush-kmt-ae-2026-09-26.tsv` | Raw Keyword Magic harvest: 8,467 keywords from 35 seeds |
| `semrush-positions-ae-2026-09-25.tsv` | Our 450 ranking rows, plus fixsquad.ae (500), fixermanme.com (305) and macrepair.ae (208) |
| `semrush-backlink-gap-2026-09-26.tsv` | Top 500 of the 1,996 domains that link to competitors but not to us |
| `keyword-bank-2026-09.csv` | 6,184 relevant keywords, classified by device, type, KD tier, status and best existing page |
| `content-topics-2026-09.csv` | The keywords grouped into 597 topics (one URL each) |
| `low-competition-content-bank.md` | **The writing list:** 294 low-competition topics, 2,028 keywords, 47,980 searches/month |
| `competitor-gap-2026-09.csv` | 260 keywords where a competitor is top 20 and we're not top 10 |
| `link-prospects-2026-09.csv` | 354 non-spam link prospects; 29 are UAE directories or local sites |

---

## 1. Where we are

| | Us | fixsquad.ae | fixermanme.com |
|---|---:|---:|---:|
| Organic visits/month (Semrush estimate) | 1,300 (▼4.6%) | 6,300 | 3,300 |
| Ranking keywords (UAE) | 450 (▲11.9%) | 1,100 | 579 |
| Authority Score | 12 | 21 | 20 |
| Referring domains | 99 (▲18%) | 397 | 1,500 |
| Google reviews | 236 | ~2,278 | — |

- **What works:** the Mac core.
  - "macbook repair dubai" (1,300/mo) is in the **Local Pack and at #2**.
  - The same holds for "mac repair dubai", "imac repair dubai", "macbook screen repair" and the "near me" variants.
- **What doesn't work:**
  1. **87% of traffic lands on the homepage.** Dedicated service pages sit on pages 3–6. For example, `/imac-repair-dubai/` is #51 while the homepage is #2 for "imac repair dubai".
  2. **Our own pages compete with each other.** Up to 9 of our URLs rank for a single keyword.
  3. **iPhone and iPad are lost to general repair shops.** "iphone repair dubai" has 2,400/mo at KD 10; we're #32 and fixsquad is #2.
  4. **Links:** we have 4–15 times fewer than the leaders.
- **The live site is behind the code.** Deploys have been blocked since the Hostinger token turned out to belong to the wrong account. A week of fixes is committed but not live, including titles, schema, links, lead forms and truth corrections. The lead form fails 3 of 9 canary checks in production and passes 9 of 9 on the branch.

## 2. Guardrails (every task must respect these)

- **Truth gate** (`TRUST-CLAIMS.md`):
  - No invented reviews, testimonials, tenure or job counts.
  - The business is **independent, never "Apple Authorised/Certified"**.
  - Exactly one founder.
- **No AED repair prices in copy, titles, meta or schema.** Quotes go through WhatsApp. Apple's own published UAE prices may be quoted as a reference, with the source named.
- **Warranty tiers come from `site.ts` only:**

  | Work | Warranty |
  |---|---|
  | Hardware | Up to 12 months |
  | Battery | 3 months, with an 80% guarantee |
  | Screens | 90 days |
  | Keyboard, software, board, liquid and data work | 15 days |

- **No Apple Watch or AirPods pages.** The owner confirmed on 2026-09-01 that there is no in-house service. The demand exists (1,770 searches/month), but it stays parked.
- **Don't change the homepage `<title>`.** It ranks #1 or #2 for the head term.
- **Page standard** (`automation/AUTOPILOT.md`):
  - Title ≤60 characters, meta ≤160.
  - A 40–60-word answer block.
  - 4–6 FAQs.
  - Server-rendered schema.
  - At least 3 inbound links.
  - WhatsApp as the main CTA.
  - Length: service pages 900–1,400 words, guides 1,200–2,000.

---

## PHASE 0 — Unblock (owner, days 0–2)

Nothing else reaches Google until these are done.

| # | Task | Owner | Time | Check |
|---|---|---|---|---|
| 0.1 | **Fix deploy access.** Create an API token in the Hostinger account that owns macbook-repair-dubai.ae (order 1008796045 per `DEPLOY.md`). Either put it in `~/.claude.json → hostinger-macbookrepair`, or add it as the `HOSTINGER_API_TOKEN` repo secret and merge `deploy.yml` to `main`. Then deploy. | 🧑 then 🤖 | 15 min | The live `/sell-macbook-dubai/` title reads "Sell Your MacBook in Dubai - Free Valuation, Paid Same Day"; the lead canary passes 9/9 |
| 0.2 | **Fix `www` (currently a 525 error).** Add a Cloudflare redirect rule: `www.macbook-repair-dubai.ae/*` → `https://macbook-repair-dubai.ae/${1}` (301), so the redirect happens at the edge and never needs the origin. | 🧑 | 10 min | `curl -I https://www.macbook-repair-dubai.ae/` returns 301, not 525 |
| 0.3 | **Turn off Cloudflare Email Address Obfuscation** (Scrape Shield). It rewrites email links on 5 policy pages into a 404 URL. | 🧑 | 2 min | No `/cdn-cgi/l/email-protection` in `/privacy/` HTML |
| 0.4 | **Semrush campaign settings:** raise the crawl limit to 700 pages (it stopped at 500 of 639), and exclude `wa.me` from the broken-link check (690 false 429 errors). | 🧑 | 5 min | The next crawl covers all pages |
| 0.5 | **Decisions** (see §9). The two that block content: iPhone buy-back yes/no, and the `azizitechnologies.ae` consolidation. | 🧑 | 30 min | Answers recorded in `docs/TASKS.md` Workstream C |

## PHASE 1 — Technical and truth fixes (🤖, week 1, one PR)

Every item was verified in the current code, not just the live site.

| # | Problem (source) | Fix | Check |
|---|---|---|---|
| 1.1 | **273 invalid structured-data items.** The Service `provider` is a stub typed `LocalBusiness` without an address (`src/lib/page-schema.ts:140,179`). The real node is `ElectronicsStore`. | Reference by `{ "@id": BUSINESS_ID }` only, as `schema.ts:206` already does | Semrush structured-data errors drop to 0; Rich Results test clean on 3 page types |
| 1.2 | **`areaServed` is hard-coded to Dubai**, so the Sharjah, Abu Dhabi and other emirate pages all declare Dubai (`page-schema.ts:141,180`) | Take the city from the area config | Built `macbook-repair-sharjah.html` declares Sharjah |
| 1.3 | **384 internal links without a trailing slash on 71 pages**, each costing a 308 hop. They are data-driven `<a href={x.href}>` in AppleRepairNearMe, BestAppleRepair, AppleRepair, IPadRepairHub, MacRepairHub and the MacBook Air views. | Route internal hrefs through `Link` (router-compat), or a `withSlash()` helper | 0 slash-less internal hrefs in the build; the Semrush redirects notice drops from 123 to ~0 |
| 1.4 | **Dead Apple link (404)** at `src/views/MacBookAirRepair.tsx:301` | Point to Apple's current Mac battery service page | External broken links: 0 real |
| 1.5 | **Titles** | Four fixes, listed below the table | Title list diff reviewed; nothing over 60 characters; no broken words |
| 1.6 | **Headings out of order** on `/apple-service-center-dubai/`, `/imac-intel-repair-dubai/`, `/sell-macbook-dubai/` and `/trade-in-macbook-dubai/`. **H1 identical to the title** on 9 pages. | Fix heading levels; make the titles differ from the H1s | Semrush content-optimisation and duplicate H1/title notices clear |
| 1.7 | **`llms.txt` is stale and malformed:** 4 H1 lines, "306 pages", dated June, 23 dead URLs, 364 missing, no trailing slashes. **`llms-full.txt`** has 426 AED lines, claims Apple TV and HomePod repair, and says "215+ reviews". | Generate both files from `routes.generated.ts` and `site.ts` at build time: one H1, a blockquote, sections by cluster, no prices, only real services | Semrush llms.txt notice clears; no AED in the file |
| 1.8 | **Stale "latest model" claims** | Seven claims to correct, listed below the table | Grep for "current flagship", "weeks ago" and "register ahead" returns 0 |
| 1.9 | **MacBook "OLED" claims** survive in metadata (`dynamic-meta.ts:152,304-305`, `page-meta-overrides.generated.ts:201,236-237,1917`). No MacBook ships with OLED (verified). | Rewrite as mini-LED / Liquid Retina XDR | Grep for "OLED" in MacBook meta returns 0 |
| 1.10 | **`/apple-watch-repair-dubai/` promises same-day repair at Concord Tower**, contradicting the owner's "no in-house service" | 301 to `/apple-repair-dubai/`, the same route as the 32 other Watch URLs. The alternative is a rewrite to "we assess and arrange repair", which needs owner OK. | Route redirects; no Watch repair promise anywhere |
| 1.11 | **About 15 near-duplicate model URL pairs** | Keep one URL per model and 301 the other. The pairs are listed below the table. | 0 duplicate pairs; sitemap regenerated |
| 1.12 | **Analytics undercounts leads.** GA4 loads only after cookie opt-in. | Add Google Consent Mode v2 (cookieless pings before consent), keep the `contact` event, add UTMs on GBP links | Lead counts in GA4 match the WhatsApp and form logs within ~20% |
| 1.13 | **Hide-prices migration:** 1,022 leaks across 120 files. Already planned in `TASKS.md`. | Run `/hide-all-prices`, then strip the `/pricing` schema offers | The price scan passes with 0 repair-price leaks |

**Title fixes (1.5):**
- 11 titles repeat "Same-Day", e.g. "MacBook Repair Deira. Same-Day. Free Diagnosis, Same-Day" (`page-meta-overrides.generated.ts:1256-1384`).
- The Al Ain, Fujairah and Kalba titles promise same-day although their own pages say 1–2 days by courier.
- 72 titles are cut off at render, and 9 of those end mid-word ("…MacBo").
- **Precedence bug:** 36 of 52 CTR-tuned titles in `dynamic-meta.ts` are overridden by generic admin-store titles (`page-meta.ts:162`). For example, the 5,493-impression M4-heat post renders "…So Quickly. MacBook Repa".

Fix all four:
- Make the hand-tuned `dynamic-meta` win.
- Rewrite the 11 doubled titles.
- Take "Same-Day" out of courier-city titles.
- Fix the casing slips: "iPhone SE", "16e/17e", "iPad mini", "iPod touch".

**Stale lineup claims (1.8):**
- `IPhone17ProMaxRepair.tsx:11,31` still says "current Apple flagship".
- `IPhone17eRepair.tsx:13` says "Released 6 weeks ago".
- `IPhone18Pro(Max)Repair.tsx:60` says "register ahead of launch".
- `IPhone16Repair.tsx:11` says "current lineup".
- `iphone-models.ts` stops at 17e.
- `MacBookAirM3ScreenRepair.tsx:92` calls the M4 Air "new".
- `AppleWatchRepair.tsx` has the lineup wrong.

Fix them all to the verified lineup in §5.

**Duplicate model URL pairs (1.11):**
- `/mac-mini-m6-repair-dubai` vs `/mac-mini-m6-2026-repair-dubai`
- The Mac mini M1/M2/M4 and dated pairs
- The Mac Studio chip vs chip-year pairs
- The Mac Pro pairs
- `/imac-m{1,3,4}-repair-dubai` vs `/imac-24-m*-…`
- `/macbook-air-screen-repair-dubai` vs `/macbook-air-screen-replacement-dubai`

**How Phase 1 is checked:** `npm run build` plus the existing gates (page-standard audit, price scan, link check, lead canary), then deploy, then rerun the Semrush Site Audit and compare crawls. Target: Site Health 90% → 96%+, errors 280 → under 5.

## PHASE 2 — Stop cannibalisation; make service pages rank, not just the homepage (🤖, weeks 1–3)

The single biggest lever. Google gives almost all the authority to `/`, and the dedicated pages split what is left.

**2.1 One URL per keyword.** For each cluster below, keep one target page. Merge or 301 the rest, or cut the competing copy and link to the target instead.

| Keyword (volume/mo) | Our URLs ranking now | Target (keep) | Action for the others |
|---|---|---|---|
| macbook repair dubai (1,300) | `/` LP+#2 · `/mac-repair-dubai/` #74 · `/where-to-repair-macbook-dubai/` #88 | `/` | Keep `/mac-repair-dubai/` for "mac repair dubai" only (retitle and re-focus); the where-to post links to `/` |
| apple repair dubai (110) + apple repair (590) | `/` #7 · where-to #15 · `/iphone-repair-dubai/` #37 · `/apple-repair-dubai/` #59 · `/apple-service-center-dubai/` #69 | `/apple-repair-dubai/` | Rebuild it (TASKS page-rebuild #2); `/apple-service-center-dubai/` targets only "apple service center" terms |
| iphone screen repair (1,000) + dubai cost (110) + dubai (260) | `/iphone-screen-repair-cost-dubai/` #3 · blog 2026 cost #37 · `/iphone-screen-repair-dubai/` #58 · others | `/iphone-screen-repair-dubai/` for repair intent; `/iphone-screen-repair-cost-dubai/` for cost intent | 301 `/blog/iphone-screen-repair-cost-dubai-2026/` → the cost page; cross-link the two pages |
| imac repair dubai (90) + in dubai (110) | `/` #2 · `/mac-repair-near-me-dubai/` #19 · `/imac-repair-dubai/` #51 | `/imac-repair-dubai/` | Homepage links to it with anchor "iMac repair Dubai"; near-me page drops iMac copy |
| macbook battery replacement dubai (140) | `/` #3 · `/macbook-battery-replacement-dubai/` #41 | `/macbook-battery-replacement-dubai/` | Same: a homepage anchor, plus strengthen the page |
| macbook air screen replacement | 9 URLs | `/macbook-air-screen-replacement-dubai/` | 301 `/macbook-air-screen-repair-dubai/` into it (duplicate pair) |
| macbook pro screen repair cost | 8 URLs | `/macbook-pro-screen-repair-dubai/` | Blog cost posts link to it; no service copy in the posts |
| apple macbook pro battery replacement cost | 7 URLs | `/macbook-pro-battery-replacement-dubai/` | Same pattern |

**2.2 Give service pages authority from the homepage.** Add a "Repairs we do" block on `/` with exact-anchor links to about 12 money pages:
- iPhone repair
- iPhone screen repair
- iPhone battery
- iPad repair
- iMac repair
- MacBook battery
- MacBook screen
- Apple repair
- Data recovery
- Logic board
- Water damage
- Sell MacBook

Keep the homepage title unchanged.

**2.3 The eight page rebuilds already queued in `TASKS.md`,** in Semrush evidence order:
1. `/iphone-repair-dubai/`: 2,400 + 1,000 + 880 /mo at KD 10–15; we're #22–32 and fixsquad is #2.
2. `/iphone-battery-replacement-dubai/`: "iphone battery replacement" 1,000 at #7, KD 19.
3. `/apple-repair-dubai/`
4. `/ipad-repair-dubai/`: 690 at #10.
5. `/macbook-air-repair-dubai/`
6. `/imac-repair-dubai/`
7. `/mac-data-recovery-dubai/`
8. `/macbook-pro-repair-dubai/`

Each rebuild covers every keyword listed for its topic in `content-topics-2026-09.csv`, as H2s and FAQs.

**2.4 Put old iPhone models back into the hubs, as model tables, not pages.** The iPhone 6–12 pages were folded into `/iphone-repair-dubai/` on purpose, yet the demand is real and easy:

| Keyword | Searches/mo | KD |
|---|---:|---:|
| iphone 6 plus screen replacement | 480 | 18 |
| iphone 6 screen replacement | 390 | 17 |
| iphone x back glass replacement | 480 | 23 |
| iphone xs back glass replacement | 480 | 18 |
| lcd touch screen replacement iphone 7 | 90 | 20 |

Add a "By model" section to `/iphone-screen-repair-dubai/`, `/iphone-battery-replacement-dubai/` and `/iphone-back-glass-repair-dubai/` with one H3 per model and a WhatsApp prefill per model. Don't recreate the folded pages.

**Check:** track the 8 keywords in 2.1 in Semrush Position Tracking (§8). Success means the target URL is the one ranking, and it moves into the top 10 within 6–8 weeks.

## PHASE 3 — Content from the keyword bank (🤖 writes; weeks 2–12)

The full list is in `docs/keywords/low-competition-content-bank.md` (294 topics). The build order below follows the lead-gap method: pages 1–3 can each produce a lead on their own; after that come quick wins, then new clusters.

**First 12 builds:**

| # | Build | Keywords (volume/mo · KD) | Why this order |
|---|---|---|---|
| 1 | **Rebuild `/iphone-repair-dubai/`** (2.3 #1) | iphone repair dubai 2,400·10 · iphone repair near me 1,000·15 · iphone repair 880·12 · iphone fix dubai 110·10 · iphone service center dubai 260·13 | Largest easy money keyword; competitors win with thinner sites |
| 2 | **Rebuild `/iphone-battery-replacement-dubai/`** | iphone battery replacement 1,000·19 (#7) · apple battery replacement 480 (#6) · iphone battery replacement dubai 210·16 · replace iphone battery dubai 210·15 · iphone battery replacement cost 170·12 | Already on page 1; a short push converts |
| 3 | **`/iphone-screen-repair-dubai/` plus the cost page pair** (2.1) | iphone screen repair 1,000·7 · iphone screen repair dubai 260·9 · iphone screen replacement dubai 170·16 · iphone x screen replacement cost dubai 320·12 (#5) | KD 7–16; we have no page ranking for the head term |
| 4 | **NEW problem guide `/blog/iphone-screen-problems-dubai/`**: black spots, lines, yellow tint, touch not working | black spot on iphone screen 260·27 · iphone touch screen not working 110·29 · iphone xr yellow screen 70·24 · iphone gray/black screen 470 · my iphone screen is black 30 | Problem → repair intent; links to #3 |
| 5 | **iPad cluster:** optimise `/ipad-screen-repair-dubai/`, `/ipad-repair-dubai/`, `/ipad-battery-replacement-dubai/` | ipad screen repair 260·14 (#10) · ipad repair dubai 210·14 (#10) · ipad battery replacement dubai 320·13 (#18) · ipad screen repair dubai 170·13 · ipad repair near me 110·13 | Fixsquad wins with LP + #2; KD 13–14 |
| 6 | **NEW problem guide `/blog/ipad-screen-lines-dark-spots/`** | lines on ipad screen 320·26 · dark spots on ipad screen 170·9 | We're #54 through a service page; a guide fits the intent |
| 7 | **`/macbook-repair-abu-dhabi/`**: strengthen | macbook repair abu dhabi 390·15 (#10) | Page exists; one push to top 5 |
| 8 | **`/apple-service-center-dubai/`**: strengthen, keeping the honest "independent alternative" framing | apple service center 1,000 (#11) · dubai 1,000·19 (#21) · near me 720·20 (#16) · abu dhabi 320·18 · sharjah 260 | Large navigational demand; capture the people who can't get an Apple appointment |
| 9 | **NEW `/blog/iphone-battery-health-when-to-replace/`** | iphone battery health 260·18 · how to check iphone battery health 260 · iphone x battery health 140·16 · battery health iphone 11 pro max 140 | Informational → battery page (#2) |
| 10 | **NEW `/blog/macbook-pro-black-screen-fix/`** | my macbook pro screen is black 390·36 · why is my macbook screen black 320·25 · macbook pro black screen 30 · macbook screen not turning on 30 | We're #10; the Mac problem-intent cluster |
| 11 | **`/blog/macbook-air-vs-macbook-pro-2026/`**: optimise, adding M5 and MacBook Neo | macbook air vs pro 170 · macbook air vs macbook pro 110 · difference… 70 · macbook pro size 90 | #6 already; latest-model awareness with repair CTAs |
| 12 | **NEW `/blog/apple-repair-appointment-dubai/`**: "can't get a Genius Bar slot? what to do" | apple repair appointment 110·43 · apple store repair appointment 110·39 · apple service center dubai appointment 30 | Captures Apple Store overflow honestly |

**Then:** work down `low-competition-content-bank.md` at **3 pieces a week**. That means one service-page optimisation, one problem guide and one blog post. Each follows the page standard in §2 and gets 3 inbound links from relevant pages.

The bank's per-cluster split:

| Cluster | Topics | Searches/mo |
|---|---:|---:|
| iPhone | 154 | 33,650 |
| iPad | 55 | 4,160 |
| MacBook | 43 | 5,270 |
| Mac desktop | 22 | 2,310 |
| Laptop (generic) | 14 | 1,620 |
| Apple / service-centre | 6 | 970 |

## PHASE 4 — Latest Apple models, to catch leads early (🤖, ongoing)

**What the data says:** Semrush UAE shows **no repair volume yet** for any 2025–26 model, only shopping searches:
- "iphone 17 pro max" 135,000/mo
- "iphone 18 pro max" 9,900
- "macbook neo" 2,900

Repair searches build up after launch: accidents first, batteries later. So the job is to have correct pages ready and to catch the first searches (GSC shows them before Semrush).

**Verified lineup, 26 Sep 2026** (sources in `docs/apple-lineup-2026-09-26.md`):

| Family | Current models | Notes |
|---|---|---|
| iPhone | 18 Pro / 18 Pro Max (on sale 18 Sep, UAE AED 5,099/5,499) · **iPhone Duo** foldable (pre-order 16 Oct, **on sale 23 Oct**, from AED 8,499) · iPhone Air · 17 · 17e · 16 | 17 Pro/Pro Max discontinued 9 Sep (large installed base) · no base iPhone 18 yet (spring 2027) |
| Mac | **MacBook Neo** (A18 Pro, AED 2,599) · MacBook Air M5 · MacBook Pro 14" M5 · 14"/16" M5 Pro/Max · **Mac mini M6 / M5 Pro** (22 Sep) · **Mac Studio M5 Max / M5 Ultra** (22 Sep) · iMac M4 · Studio Display (2nd gen) · Studio Display XDR | Mac Pro discontinued 26 Mar 2026 · no M6 MacBook Pro / iMac yet (rumoured Oct–Dec) · no OLED MacBook |
| iPad | Pro M5 · Air M4 · mini (A17 Pro) · iPad (A16) | iPad mini 8 (A20 Pro, OLED) is rumoured for Oct |

**Tasks:**

| # | Task | Owner |
|---|---|---|
| 4.1 | Correct every stale lineup claim (Phase 1.8) and update `iphone-models.ts` to include the 18 Pro, 18 Pro Max and Duo | 🤖 |
| 4.2 | **iPhone Duo pages, staged now, published 23 Oct:** `/iphone-duo-repair-dubai/` (hub), `/iphone-duo-screen-repair-dubai/` (inner + outer display), `/iphone-duo-battery-replacement-dubai/`, and a hinge section. Use only Apple-verified facts: 7.6"/5.4", titanium, Ceramic Shield 2. There is no repairability score yet, so say so. | 🤖 |
| 4.3 | **iPhone 18 Pro pages:** update from "ahead of launch" to launched facts (aluminium unibody, Ceramic Shield back, variable-aperture camera, under-display Face ID). Add a section on how the display is the entry point and what that means for screen repair. | 🤖 |
| 4.4 | **Apple-price comparison posts** (anchor on Apple's published UAE estimates, excl. VAT, name the source; our price stays "WhatsApp for a quote"): "iPhone 18 Pro screen replacement cost in the UAE" (Apple: AED 1,279 / Pro Max 1,499); "MacBook Neo battery replacement cost" (Apple: AED 589); "MacBook Air M5 battery replacement cost" (Apple: AED 689/759) | 🤖 |
| 4.5 | **Early-fault posts,** only where there are two reputable sources: "iPhone 18 Pro Face ID freezing — fix or repair?" (reported Sep 2026, likely software, iOS 27.0.1) and "iPhone 17 Pro scratches/scuffs — what can be done". Link each to the repair page. | 🤖 |
| 4.6 | **MacBook Neo cluster** (5 pages exist): add iFixit 6/10 repairability facts (18-screw battery tray, swappable display/trackpad/Touch ID without pairing warnings) | 🤖 |
| 4.7 | **Mac mini M6 / Mac Studio M5:** verify page facts against Apple (M6 is the first 2nm Mac chip), and merge duplicate URLs (1.11) | 🤖 |
| 4.8 | **GBP:** add products or posts for the iPhone 18 Pro, Duo (from 23 Oct), MacBook Neo, Air M5 and Mac mini M6 | 🧑 |
| 4.9 | **Standing rule:** when Apple announces a product (M6 MacBook Pro, iMac M6 and iPad mini 8 are expected Oct–Dec), build its hub within 48 hours of the announcement, never on rumours | 🤖 |

## PHASE 5 — Local pack and Google Business Profile (🧑, weeks 1–4)

The Local Pack already drives most of our traffic. `docs/TASKS.md` Workstream A lists all of it. Priority order:

1. **Reviews:** 236 vs fixsquad's ~2,278. Do the 24h WhatsApp review follow-up after every job.
2. **Services:** publish the 103 services. That's the biggest single GBP win.
3. **Categories and description** (paste-ready).
4. **Photos and weekly posts.**
5. **Suspension risk:** 6 profiles share Concord Tower Office 45, and 2 are already suspended. Resolve this before anything else touches the profile.

**Also:**
- Get iPhone and iPad services into GBP. Competitors take the iPhone Local Pack ("iphone repair near me", "iphone battery replacement near me").
- Put UTMs on every GBP link.

## PHASE 6 — Authority and links (🧑 + 🤖, months 1–6)

**Gap:** 1,996 domains link to fixsquad, fixermanme, macrepair or geeks but not to us. After removing spam there are 354 prospects in `link-prospects-2026-09.csv`.

1. **Citations first:** 29 UAE directories and local sites that already link to competitors, including:
   - dubaidirectory.com
   - bizmideast.com
   - localemirates.com
   - arablocal.com
   - uaebusinessdirectory.com
   - dubaisbest.com
   - neardubai.com
   - dubailocal.ae
   - emarat.directory
   - techdirectory.io

   Use identical NAP from `business.generated.ts`. Target 10 a month.
2. **Media and PR:** khaleejtimes.com (AS 70) and whatson.ae (AS 45) link to competitors. Pitch a data story from our own repair records, e.g. "most common MacBook faults in Dubai summer heat". It must use real counts only.
3. **Earned links:** use the existing `docs/link-and-mention-plan.md` phases (Reddit/YouTube answers, supplier and partner pages).
4. **Blocked by decision 0.5:** don't build links to `azizitechnologies.ae` pages until the consolidation is decided.

**Target:** 99 → 160 referring domains by March 2027, and Authority Score 12 → 18.

## PHASE 7 — AI search (AEO) (🤖, with Phase 1)

- Semrush AI Search Health is 87% (30 issues). Every AI crawler is allowed. Keep it that way.
- Regenerate `llms.txt` and `llms-full.txt` (1.7). They are the files AI crawlers read, and today they list dead URLs and old claims.
- Every money page already has an answer block. Phase 3 pages follow the same pattern: a 40–60-word answer, question H2s and 4–6 FAQs.

## 8. Measurement

| What | Where | Cadence |
|---|---|---|
| Position Tracking campaign with ~100 keywords (the 8 in 2.1, the first 12 builds, 20 latest-model terms), UAE, mobile + desktop | Semrush | Weekly |
| Site Audit rerun, compared with the 26 Sep crawl | Semrush | After each deploy, then monthly |
| Search Console connected (`/workflow-gsc-setup`), plus new-query watch for latest-model repair terms | GSC | Weekly |
| Leads: WhatsApp and form counts by page (GA4 `contact` event with Consent Mode) | GA4 | Weekly |

**90-day targets (by 31 Dec 2026):**
- Organic visits 1,300 → 2,500/mo (Semrush).
- Keywords in the top 10: from about 60 to 150.
- "iphone repair dubai" moves from #32 into the top 10.
- 6 of the 8 cannibalised keywords are ranked by their target URL.
- Site Health 96% or more.
- Referring domains 130 or more.

## 9. Decisions only the owner can make

| # | Decision | Blocks |
|---|---|---|
| D1 | **Deploy token** (0.1) | Everything |
| D2 | **iPhone buy-back / trade-in?** "iphone trade in" 1,110/mo and "apple trade in" 2,930/mo. We only buy MacBooks today. | A `/iphone-trade-in-dubai/` page |
| D3 | **`azizitechnologies.ae`:** consolidate or hard-split? It ranks alongside us with a different phone number. | Link building, entity schema |
| D4 | **`/apple-watch-repair-dubai/`:** 301 it (the default) or keep it as "assess and arrange"? | 1.10 |
| D5 | **Generic "laptop repair dubai"** (1,000/mo, KD 34): stay Mac-only (the default), or add a MacBook-angle page? | 1 page |
| D6 | **Claims to confirm or remove** (`TRUST-CLAIMS.md`): free loaner MacBook, "30-min or it's free", 24/7 WhatsApp, 30-day money-back, "quote in 4 minutes" vs "4 hours" | Copy on 225+ pages |
| D7 | **Warranty wording** for GBP vs site ("90-day to 12-month" vs "up to 12 months") | GBP + page copy |

## 10. Not repeated (already done on the branch, live after deploy)

- 639/639 pages pass the page standard.
- 0 orphans.
- Answer blocks on every commercial page.
- Lead form on every commercial page (169 → 0 missing).
- Fabricated testimonials removed.
- Warranty text aligned.
- 18 misleading titles fixed.
- Snippet lengths fixed.
- Honest `/apple-service-center-dubai/` disclaimer.
- Slug hygiene (question slugs moved to `/blog/`).

## 11. Known gap in this research

- **Arabic searches:** Arabic keywords were collected ("تصليح لابتوب" 320/mo, KD 15; 23 "صيانة ايفون" variants), but the text was damaged when saved. Re-pull them before planning any Arabic content.
- **Semrush's "iphone no camera" / "iphone without camera"** (720/mo each) are shopping searches for camera-less phones, not repairs. Ignore them.
