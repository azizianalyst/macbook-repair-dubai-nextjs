# Repo findings: macbook-repair-dubai.ae (branch fix/image-content-match @ 202aead)

Read-only research, 2026-09-26. Nothing in the repo was modified.

**Source of truth for titles and robots:** the prerendered production build `.next/server/app/*.html` (BUILD_ID 2026-09-25 06:40). It includes the last title commit 39e820b. I spot-checked 6 of its 18 retitled pages and all matched. Title precedence in code is: admin store `page-meta-overrides.generated.ts` (baked from gitignored `data/seo.json`), then `dynamic-meta.ts` OVERRIDE, then `route-meta.generated.ts`, then data-driven MAP, then a slug-derived fallback (`src/lib/page-meta.ts:125,162`). `cleanTitle` caps titles at 60 characters (`page-meta.ts:45`) and `cleanDescription` caps descriptions at 155 (`:63`).

`main` is stale: its last commit is 2026-06-07 (90cd86f) with 349 routes. This branch is 119 commits ahead.

---

## 1. Page inventory (`inventory.tsv`)

- There are **663 routes** in `src/lib/routes.generated.ts`. Removing 24 `/admin` routes leaves **639 public routes**. All 639 have prerendered HTML.
- **631 are indexable and 8 are noindex:**
  - `/cookies`
  - `/azizi-template-demo` and `/landing-template-demo`
  - `/blog/tag/{imac,ipad,iphone,mac,macbook}`
- **No admin noindex overrides exist.** The kill-switches are off (`settings.generated.ts:7-8`).
- **No dynamic blog posts:** `ADMIN_POSTS` is empty (`src/content/posts.generated.ts`).

| Cluster | Pages | Indexable | Notes |
|---|---:|---:|---|
| blog | 213 | 208 | 200 posts, `/blog`, 6 category hubs, 5 noindex tag pages, `/macbook-guides` |
| macbook-model | 77 | 77 | 28 dated Air/Pro model pages, chip hubs, chip×service spokes, 5 MacBook Neo pages |
| mac-desktop | 70 | 70 | iMac, Mac mini, Mac Studio, Mac Pro, Studio Display (2), `/apple-display-repair-dubai` |
| macbook | 69 | 69 | Generic MacBook/Mac services and root-level MacBook Q&A guides |
| area | 65 | 65 | 56 Dubai areas + 9 other-emirate city pages. All are `/macbook-repair-<x>` (MacBook-only) |
| iphone | 31 | 31 | iPhone services and 3 root iPhone 16 Q&A pages |
| iphone-model | 25 | 25 | |
| ipad-model | 23 | 23 | |
| data-recovery | 17 | 17 | Includes 6 `/mac-data-recovery-<area>` pages |
| ipad | 16 | 16 | |
| brand/apple-service | 12 | 12 | apple-repair, service-center, best-×3, near-me, programs, applecare, out-of-warranty, AMC, about, reviews |
| legal/utility | 9 | 6 | |
| pricing/cost | 5 | 5 | `/pricing`, `/mac-repair-cost-dubai`, `/imac-repair-cost-dubai`, `/iphone-screen-repair-cost-dubai`, `/macbook-repair-cost-calculator-dubai` |
| sell-tradein | 3 | 3 | MacBook only. No iPhone sell or Apple trade-in hub |
| other | 2 | 2 | `/ipod-touch-7-repair-dubai`, `/the-server-gave-an-error-during-download-403-forbidden` |
| home | 1 | 1 | |
| apple-watch | 1 | 1 | |
| airpods | 0 | 0 | |

`docs/url-inventory-by-cluster.md` is stale: it dates from 2026-08-30 and lists 588 URLs and 7 area pages.

### Near-duplicate model URL pairs (cannibalisation risk)

- `/mac-mini-m6-repair-dubai` vs `/mac-mini-m6-2026-repair-dubai`
- `/mac-mini-{m1,m2,m4}-repair-dubai` vs `/mac-mini-{m1-2020,m2-2023,m4-2024}-repair-dubai`
- `/mac-studio-m1-repair-dubai` vs `/mac-studio-m1-max-2022-…` and `/mac-studio-m1-ultra-2022-…` (the same pattern repeats for M2, M3, M4 and M5)
- `/mac-pro-m2-ultra-repair-dubai` vs `/mac-pro-m2-ultra-2023-repair-dubai`
- `/mac-pro-intel-repair-dubai` vs `/mac-pro-intel-2019-repair-dubai`
- `/imac-m{1,3,4}-repair-dubai` vs `/imac-24-m{1,3,4}-20xx-repair-dubai`
- `/macbook-air-screen-repair-dubai` vs `/macbook-air-screen-replacement-dubai`

---

## 2. Latest-model coverage

### Pages that exist, by family

**iPhone (25 pages)**
- iPhone 13: mini, 13, Pro, Pro Max
- iPhone 14: 14, Plus, Pro, Pro Max
- iPhone 15: 15, Plus, Pro, Pro Max
- iPhone 16: 16, Plus, Pro, Pro Max, 16e
- iPhone 17: 17, Pro, Pro Max, 17e
- iPhone Air
- iPhone 18: Pro, Pro Max
- iPhone SE (3rd gen)

**MacBook Air (12 dated pages)**
- 13-inch: Intel 2018, 2019, 2020; M1 2020; M2 2022; M3 2024; M4 2025; M5 2026
- 15-inch: M2 2023; M3 2024; M4 2025; M5 2026
- Plus chip hubs and screen/battery/keyboard spokes for M1–M5 and Intel

**MacBook Pro (16 dated pages)**
- 13-inch: Intel 2019, 2020; M1 2020; M2 2022
- 14-inch: M1 Pro 2021; M2 Pro 2023; M3 2023; M4 2024; M5 2025; M5 Pro 2026; M5 Max 2026
- 16-inch: M1 Pro 2021; M2 Pro 2023; M3 2023; M4 2024; M5 Pro 2026; M5 Max 2026
- Plus hubs and screen/battery spokes for M1–M5

**MacBook Neo, A18 Pro (5 pages):** hub, A18, screen, battery, keyboard

**iMac:** 24-inch M1 2021, M3 2023, M4 2024; 27-inch Intel 2017, 2019, 2020; iMac Pro 2017; chip hubs for Intel, M1, M3, M4

**Mac mini:** M1 2020, M2 2023, M2 Pro 2023, M4 2024, M4 Pro 2024, M5 Pro 2026, M6 2026, plus chip hubs

**Mac Studio:** M1 Max/Ultra 2022, M2 Max/Ultra 2023, M3 Ultra 2025, M4 Max 2025, M5 Max 2026, M5 Ultra 2026, plus chip hubs

**Mac Pro:** Intel 2019, M2 Ultra 2023

**Displays:** Studio Display, Studio Display XDR

**iPad (22 model pages plus an older-gen page)**
- Base: 9th, 10th, 11th gen
- mini: 5, 6, 7 (A17 Pro)
- Air: 4, 5, M2 11/13, M3 11/13, M4 11/13
- Pro: 11-inch M1, M2, M4, M5; 12.9-inch M1, M2; 13-inch M4, M5

**Apple Watch:** one hub only, `/apple-watch-repair-dubai`

**AirPods:** none

### The specific models you asked about

| Model | Page? |
|---|---|
| iPhone 17 / 17 Pro / 17 Pro Max | Yes |
| "17 Air" | Yes, as `/iphone-air-repair-dubai` |
| iPhone 16e | Yes |
| iPhone 17e | Yes (extra) |
| iPhone 18 (base) | **No**. The site says there is none this cycle (`IPhone18ProRepair.tsx:39`) |
| iPhone 18 Pro / 18 Pro Max | Yes |
| iPhone Fold | **No service page**. Only `/blog/iphone-fold-2026-what-to-expect` |
| MacBook Air M4 / M5 | Yes |
| MacBook Pro M4 / M5 | Yes |
| MacBook Pro M6 | **No** |
| Low-cost A-chip MacBook | Yes, MacBook Neo A18 Pro (5 pages) |
| iPad Pro M5 | Yes (11-inch and 13-inch) |
| iPad Air M3 / M4 | Yes (11-inch and 13-inch) |
| iPad mini A17 Pro | Yes, `/ipad-mini-7-repair-dubai` |
| iPad 11th gen | Yes |
| iPad 12th gen | **No** |
| Apple Watch Series 10/11/12, Ultra 2/3, SE 3 | **No model pages**. 24 Watch model and service URLs (including Series 10/11, SE 3, Ultra 2/3) were 301'd to `/apple-repair-dubai` |
| AirPods Pro 3, AirPods 4 | **No**. 301'd to `/apple-repair-dubai` |

### What the site claims is current

- **18 models are flagged `currentInLineup: true`** in the model JSONs:
  - `macbook-air-models.json:403,442` (Air M5 13/15)
  - `macbook-pro-models.json:323,362,401,600,639` (14 M5, 14 M5 Pro/Max, 16 M5 Pro/Max)
  - `imac-models.json:78` (iMac M4)
  - `mac-desktop-models.json:472,507,542,577` (Mac mini M6, M5 Pro; Mac Studio M5 Max, M5 Ultra)
  - `ipad-models.json:73,178,431,467,616,765` (iPad 11th gen, mini 7, Air M4 11/13, Pro M5 11/13)
- **Mac discontinuation dates** in `mac-desktop-models.json`:
  - Mac mini M4 and M4 Pro, and Mac Studio M4 Max and M3 Ultra, are marked "disc August 2026".
  - Mac Pro is marked "disc March 2026 (no successor)".
  - Mac mini M6 is described as "12-core, 2nm" (`mac-desktop-models.json:472`).
- `iphone-models.ts:2` says the list reflects April 2026. **It ends at 17e and omits the iPhone 18 Pro and Pro Max.**
- **Stale iPhone claims:**
  - `IPhone17ProMaxRepair.tsx:11,31` still says "current Apple flagship", although 18 Pro pages exist.
  - `IPhone16Repair.tsx:11` and `IPhone16PlusRepair.tsx:11` say "current Apple lineup".
  - `IPhone17eRepair.tsx:13` says "Released 6 weeks ago" (it launched in March 2026).
  - `IPhone18Pro(Max)Repair.tsx:60` says "register ahead of launch", after the launch.
  - `BlogIPhoneScreenRepairVoucher.tsx:63` says "current generation iPhone 17 Pro Max".
- The iPhone 18 Pro pages state "announced 9 Sep 2026, shipping 18 Sep 2026, A20 Pro 2nm, iOS 27" (`IPhone18ProRepair.tsx:34-42`).
- `MacBookAirM3ScreenRepair.tsx:92` calls the M4 Air a "new MacBook Air M4 … AED 4,499", but the site's own data says it was discontinued in March 2026.
- `Home.tsx:450` says "through the latest M5".
- **`AppleWatchRepair.tsx` is inconsistent:**
  - It covers "Series 3 through Ultra 2" (`:91,96,119`) but its table lists Ultra 3 (`:30`).
  - Its newest standard model is Series 10 (`:31`).
  - Series 11 and SE 3 are missing.
- **Two docs contradict each other on the foldable iPhone:**
  - `docs/site-audit-image-content-match-2026-09-23.md:560-590` says "No foldable was announced… do not create pages".
  - `docs/growth-gap-and-gbp-audit-2026-09-24.md:95,109-113` says apple.com/ae lists an **"iPhone Duo" foldable, AED 8,499, pre-order 16 Oct**, and recommends building it.
  - **This needs live verification.**
- **MacBook OLED claims are still in the metadata,** although the 09-23 audit found that no MacBook ships OLED and unpublished the OLED post:
  - `/macbook-pro-m5-screen-repair-dubai` renders the title "…OLED Display Specialist" (`dynamic-meta.ts:304-305`).
  - `dynamic-meta.ts:152` has the `/macbook-pro-screen-repair-dubai` description.
  - `page-meta-overrides.generated.ts:201` says "First OLED on MacBook Pro" on the **M4** cost post.
  - `:236-237` has the M5 cost post title and description.
  - `:1917` has the M5 common-problems description.

---

## 3. Docs digest

### (a) Open items and owner decisions

1. **Deploy is blocked.**
   - The Hostinger MCP token belongs to the wrong account ("Customer does not own macbook-repair-dubai.ae").
   - The repo has no `HOSTINGER_API_TOKEN` secret, and `deploy.yml` exists on this branch only.
   - Live production runs old code. Sources: `docs/morning-report-2026-09-25.md:6-28` and the memory file.
2. **Gate 0: decide the domain.** `azizitechnologies.ae` ranks on page 1 alongside this site for the money queries, using a **different phone number (055 753 0104)**. The choice is to consolidate or hard-split (growth-gap §1). Link building is parked until this is decided.
3. **Unverified guarantees** (`TRUST-CLAIMS.md:93-104`):
   - "Free loaner MacBook" (a USP in `site.ts:133`)
   - "30-min appointment repair … or it's free" (7 files including the footer)
   - "WhatsApp answered 24/7" and "24/7 support" on the AMC page
   - "30-day money-back" on the unlock pages
   - Job counts
   - "Quote in 4 minutes" (225 pages) vs "within 4 hours" (56 area pages)
   - The founder schema says `founder: Azizi Technologies` (`schema.ts:73`)
   - Tenure for Mohammed, Sayed and Shafeeq
4. **Warranty conflicts:**
   - GBP says "90-day to 12-month"; the site says "up to 12 months" (`TASKS.md:187`).
   - Overheating/fan work is 15 days in `site.ts` but 12 months in the price list.
   - Screens are 15 days (aftermarket) in one place and a flat 3 months on many pages (morning report :102-104).
5. **GBP work for the owner** (TASKS Modules 1–13):
   - Description rewrite
   - Categories: add 4, remove 5
   - Publish 103 services. This replaces the existing list; it does not fill an empty one.
   - Photos, including 3 new shots
   - Weekly posts
   - Review link, QR code and 24h WhatsApp follow-up
   - Seed 12 Q&As
   - Fix "Al Safouh" to "Al Sufouh"
   - Claim LinkedIn and Apple Business Connect; add Bing Places and OSM
   - Correct the Apple Maps address, which shows "King Salman bin Abdulaziz St 189"
   - Remove "certified Apple specialists"
   - UTMs on GBP links and a GA4 baseline
   - Mitigate suspension risk: **6 profiles share Concord Tower Office 45 and 2 are already suspended** (growth-gap §4)
6. **Connectors:** Ahrefs, Supermetrics and Similarweb are not connected, and GSC setup has not been run. Neither the weekly routine nor Autopilot can see rankings. The only log (2026-09-14) shows the canary at 3/13 with Part 2 suspended.
7. **Page rebuilds onto AziziTemplate are listed "not started"** for 8 GSC money pages (`TASKS.md:146-153`): macbook-air-repair, apple-repair, ipad-repair, iphone-battery-replacement, imac-repair, iphone-repair, mac-data-recovery, macbook-pro-repair.
8. **Build plan from growth-gap §5, awaiting approval:**
   - GBP lineup sync
   - iPhone Duo cluster (disputed, see §2)
   - All-device area hubs `/apple-repair-<area>`
   - Service × area pages for the top 8 areas
   - High-ticket depth: data recovery, board repair, AMC
   - Review engine: 236 reviews vs Fixsquad's 2,278
9. **Page gaps from `seo-gsc-action-plan.md`** (2026-06-20) that were never built:
   - Apple Trade-In UAE hub
   - `/sell-iphone-dubai`
   - iPhone 16 black-screen and non-Pro-Max flickering guides
   - Apple Watch sell/trade
10. **Other open items:**
    - The retired MacBook Pro M5 "OLED" post could be rewritten as a mini-LED display guide (09-23 audit).
    - `automation/AUTOPILOT.md` says to push to `main` and deploy, which conflicts with the branch-only, no-deploy weekly routine described in the morning report.

### (b) Facts a new plan must respect

- **Truth gate** (`TRUST-CLAIMS.md`, AUTOPILOT rules):
  - Never invent facts or testimonials.
  - Reviews render only from `src/content/reviews.ts` via `pickReviews()`.
  - Exactly one founder: Abdul Aziz, ACMT.
  - Tenure comes only from `TEAM` (`site.ts:142-159`), and `yearsInBusiness` is derived from founding date 10 Oct 2004.
  - The site is **independent and never "Apple Authorised/Certified"**. `/apple-service-center-dubai` carries the disclaimer.
- **Warranty tiers** (`site.ts:59-108`): hardware up to 12 months, battery 3 months with an 80% guarantee, screens 90 days, keyboard 15 days, software/board/liquid/data/diagnostics 15 days, unlock 0. The headline wording is "up to 12 months".
- **Review count policy:** `REVIEW_COUNT=232` and `REVIEW_AVERAGE=5` (`business.generated.ts:20-21`), edited only via the `data/seo.json` store. The live GBP count was 236 on 09-24, so 232 is stale but still true as "232+".
- **Pricing policy:** prices are hidden and quotes go through WhatsApp. No AED figure appears in titles or meta (`dynamic-meta.ts:42`). There are no "[service] cost" pages, no `priceRange`, and no Offer prices in schema.
  - 34 built pages still show AED figures. The ones I sampled were Apple list or device prices, which the price scan allows.
  - `llms-full.txt` has 426 lines containing "AED".
  - `PRICING` constants remain in `site.ts:47-57`.
- **NAP** (`business.generated.ts:3-18`):
  - MacBook Repair Dubai, Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City
  - Phone 055 741 3706 / +971557413706; WhatsApp wa.me/971557413706; email info@macbook-repair-dubai.ae
  - Mon–Sat 9 am–10 pm, Sun closed
  - The Instagram handle is `@azizitechnologies`
- **Apple Watch and AirPods were folded deliberately.** The owner confirmed on 2026-09-01 that there is no in-house service ("sent out, not offered"), so no pages will be restored whatever the demand (`keyword-service-gap-audit-2026-08-30.md:162-165,225-229`). Apple TV, HomePod and accessories were cut as well.
  - **Conflict:** `/apple-watch-repair-dubai` is still live and indexable, and claims "Same-day repair at Concord Tower" (`AppleWatchRepair.tsx:91,119`).
  - **Conflict:** `llms-full.txt` claims Apple TV and HomePod repair.
- **Do not change the homepage `<title>`.** It ranks #1 for "macbook repair dubai" (morning report :113, `seo-gsc-action-plan.md:20`).
- **Content rules (AUTOPILOT):**
  - Titles ≤60 characters and meta ≤160.
  - A 40–60 word answer block.
  - 4–6 FAQs.
  - Server-rendered `PageSchema`.
  - At least 3 inbound links.
  - Primary CTA is WhatsApp; the `/contact` form is secondary.
  - Service pages 900–1,400 words; guides 1,200–2,000 words.
- **Build-quality status (morning report):** 639/639 pass the page-standard audit, 8/8 gates pass, 0 orphans, 0 broken links, and the price scan passes. There are 0 fabricated testimonials.
  - On 09-25, 12 pages with 22 invented names were fixed.

### (c) Recorded GSC numbers

**From `gsc-insights-2026-06.md`** (28 days to 2026-06-24):
- About 300 clicks from 60k+ impressions, a CTR of about 0.5%.
- "macbook repair dubai": position 4.1, 4.5% CTR, 34 clicks.
- Money-page average positions: `/macbook-air-repair-dubai` 57, `/apple-repair-dubai` 50, `/ipad-repair-dubai` 39, `/iphone-battery-replacement-dubai` 35, `/apple-service-center-dubai` 34, `/imac-repair-dubai` 32, `/iphone-repair-dubai` 26, `/mac-data-recovery-dubai` 25, `/macbook-pro-repair-dubai` 17.
- Pages with a CTR gap:

| Page | Impressions | CTR | Position |
|---|---:|---:|---:|
| `/` | 5,800 | 1.1% | 10 |
| `/why-does-my-macbook-air-m4-heat-up-so-quickly` | 5,493 | 0.33% | 6 |
| `/iphone-16-pro-max-screen-flickering` | 3,842 | 0.29% | 10 |
| `/can-iphone-motherboard-be-repaired` | 3,436 | 0.67% | 16 |
| `/iphone-16-shocks-while-charging` | 2,973 | 0.30% | 7 |

- Trailing-slash duplicates split rankings, for example `/iphone-repair-dubai` at 50 without the slash vs 26 with it.
- AirPods ranked about position 13 before its page was folded; "apple watch battery replacement dubai" ranked about 27.

**From `seo-gsc-action-plan.md`:**
- "apple trade in uae": 3,111 impressions at position 6.9. "apple trade in": 2,805 at 6.4.
- "iphone screen replacement": 320 at 54. "iphone screen repair dubai": 140 at 52.
- "sell iphone dubai": 71 at 29.

**From `gsc-longtail-queries-2026-09-01.csv`** (1,000 queries):
- 230 clicks and 41,036 impressions in total.
- Top by impressions: "how to check laptop battery health" 1,247 at position 1; "display screen of iphone 6 in dubai" 786 at 25.7; "iphone 16 screen brightness flickering" 525 at 8.8; many "best macbook for gaming" variants at 400+ each around position 5–7; "macbook air m4 fanless" 373 at 2.2.
- "apple watch" queries: 35 queries, 1,559 impressions. "airpods": 3 queries, 81 impressions. "near me": 33 queries, 817 impressions.

**GBP (09-24):** 236 reviews at 5.0, 3,784 monthly views, 1,309 interactions.

### (d) Lead actions and tracking

- **Lead actions:**
  - WhatsApp `wa.me/971557413706` with per-service prefills. This is the primary CTA and the money path Autopilot checks.
  - `tel:` 055 741 3706.
  - `mailto:` info@.
  - `LeadForm` with 5 presets. It POSTs to `/api/lead`, which appends to `data/leads.jsonl`, sends an SMTP email, and mirrors to the CRM (`src/app/api/lead/route.ts`).
  - The form has a rate limit of 20 per 10 minutes per IP, an Origin check, and a honeypot.
  - **In production the lead canary fails 3 of 9 checks; on this branch it passes 9 of 9.** The fix ships with the deploy.
- **GA4 tracking** (`src/lib/analytics.ts`):
  - `NEXT_PUBLIC_GA_ID` is set in `.env`, `.env.local` and `.env.production`.
  - A single `contact` event fires with `method` (phone, whatsapp, email or form) and `placement` (from data-track, section, header/footer/nav or label). Page views include SPA navigation.
  - **GA loads only after opt-in** through the consent banner (`ConsentBanner.tsx:29-46`), so conversions are undercounted.
  - UTMs on GBP links and the GA4 baseline are still open for the owner (`TASKS.md:122`).
- **Other docs:** `docs/backlink-prospects-2026-06.csv` is 2.4 KB with 14 prospects, mostly directories (Yellow Pages UAE, Hotfrog, Cylex, Dubai Local, Yelp, …) with status "Prospect". `docs/link-and-mention-plan.md` covers phases for citations, Reddit/YouTube, and a digital-PR data study; none of it is executed.

---

## 4. Redirects and consolidation

- **There are 246 redirect rules in total:**
  - 193 legacy WordPress 301s in `redirects.generated.ts`.
  - 50 manual rules in `next.config.ts:22-133`: 48 path rules, www→apex, and `?s=`→`/blog/`.
  - 3 admin 301s in `src/content/redirects.generated.ts`, applied by `src/proxy.ts:331`.
  - On top of these, `trailingSlash: true` 308s every URL without a trailing slash.
- There are 0 redirect chains, 0 destinations that are not live routes, and 0 sources that shadow a live route.
- **Top destinations:**

| Destination | Rules pointing to it |
|---|---:|
| `/apple-repair-dubai` | **86** (32 Apple Watch, 24 AirPods, 22 TV/HomePod/accessories, 8 other including `/services` and `/apple-vision-pro`) |
| `/iphone-repair-dubai` | **26** (iPhone 6 through 12, SE 1/2, and one `/page/5` listed in both files) |
| `/about` | 8 (`/team/*`, `/about-us`, `/adopters`) |
| `/blog` | 7 (`/tag/*`, `/search/*`, `?s=`) |
| `/macbook-screen-repair-dubai` | 5 |
| `/macbook-pro-repair-dubai` | 5 |
| `/macbook-pro-13-intel-2019-repair-dubai` | 3 |
| `/iphone-software-fix-dubai` | 3 |
| `/macbook-overheating-fix-dubai` | 3 |
| `/terms`, `/macbook-keyboard-repair-dubai`, `/macbook-ram-upgrade-dubai`, `/iphone-battery-replacement-dubai`, `/iphone-data-recovery-dubai`, `/imac-repair-dubai` | 2 each |

- `/apple-repair-dubai`, which absorbs the most, sat at GSC position 50 in June.

---

## 5. Known-issue check (current code and build)

### (a) Internal links without a trailing slash

- **Source literals:** 32 `<a href="/x">` without a slash across 23 files in `src/views` and `src/components`. All but one are in noindex admin components; the only public one is `src/views/MacMiniSsdUpgrade.tsx:33`.
- **The real volume comes from `<a href={data.href}>`:** roughly 103 anchors in 63 public view/component files.
- **In the built HTML there are 384 internal `<a>` hrefs without a slash on 71 pages** (out of 74,948). Each one costs a 308 hop.
  - Top targets: `/macbook-air-repair-dubai` 30, `/mac-repair-dubai` 23, `/macbook-water-damage-repair-dubai` 21, `/macbook-screen-repair-dubai` 19, `/macbook-battery-replacement-dubai` 19.
  - Top views: AppleRepairNearMe 10, BestAppleRepair 10, AppleRepair 8, IPadRepairHub 7, MacRepairHub 7, and the MacBookAir(Intel) screen/battery/keyboard/repair views at 6–7 each.
  - Next.js `<Link>` output is already slashed.

### (b) Service schema provider stub: confirmed

- `src/lib/page-schema.ts:140` (trade-in and sell) and `:179` (every service, model and area page) set `provider: {"@type":"LocalBusiness","@id":".../#localbusiness","name":…}`.
- The node that defines that id is typed **ElectronicsStore** (`schema.ts:30-33`), so the stub's type conflicts with it.
- `schema.ts:206` does it correctly with a bare `{ "@id": BUSINESS_ID }`.
- The full `localBusiness()` node is emitted on the same pages (`:150,213`), so the reference does resolve.
- **Also:** `areaServed` is hard-coded to City Dubai (`:141,180`). The 9 other-emirate city pages (Sharjah, Abu Dhabi and so on) therefore declare Dubai; the built `macbook-repair-sharjah.html` confirms it.

### (c) Duplicated "Same-Day" titles (admin store, and rendered as-is)

- **11 titles contain "Same-Day" twice:** ajman, al-ain, barsha, deira, difc, fujairah, jumeirah, kalba, karama, mirdif, sharjah (`page-meta-overrides.generated.ts:1256-1384`).
- **14 contain ". Same-Day. ":** the 11 above plus jbr, jlt and jvc ("…Same-Day. Free Pickup").
- **Truth conflict:** the Al Ain, Fujairah and Kalba pages (and other courier cities) claim Same-Day in the title. Their own copy says 1–2 days by courier, and `cities.ts:732` says "a same-day turnaround is not realistic".
- **Generic suffixes are common:** 95 rendered titles end "Expert Same-Day" and 91 end "Free Diagnosis, Same-Day".
- **Casing slips:** "iPhone Se", "iPhone 16E/17E", "iPad Mini", "iPod Touch".

### (d) `public/llms.txt`

- Four lines start with "# " (lines 1-4). The header is written as four H1 lines, which does not follow the llms.txt format of one H1 plus a blockquote.
- It states "Total pages: 306" and "Last updated: 2026-06-01" (the file was last committed 2026-09-15).
- It claims "215+" reviews.
- It lists 299 unique URLs. **23 of them are no longer live** (redirected iPhone 6–12 pages and `/macbook-repair-near-me`), and **364 public routes are missing**.
- All URLs are listed without a trailing slash.
- `llms-full.txt` (1,775 lines) is dated "June 2026", claims 215+ reviews, offers "full pricing details" with 426 AED lines, and claims Apple TV and HomePod repair.

### (e) Title and description lengths

- **Rendered:** 0 titles over 60 characters and 0 descriptions over 160 (in fact all are ≤155, none are missing, and there are no duplicate titles or descriptions). The render-time clamps hide the source problems below.
- **Source:**
  - `page-meta-overrides.generated.ts`: 66 titles over 60 and 32 descriptions over 160. Worst titles are 78 characters (`/blog/macbook-pro-m5-throttling-fix-dubai`, `/blog/macbook-pro-m5-wont-charge-past-80-dubai`) and 77 (`/blog/macbook-pro-m4-keyboard-not-working-dubai`).
  - `route-meta.generated.ts`: 147 titles over 60 and 206 descriptions over 160 (worst: 81 characters for iPhone 14 Pro Max; 279 for the `/macbook-neo-a18-repair-dubai` description). Most of these are superseded or clamped.
  - 2 override entries point at routes that no longer exist.
- **72 rendered titles are clamp-truncations of a longer source title.** Nine end in a broken word or fragment:
  - "…MacBo", "…MacBook Repair Duba", "…MacBook Rep", "…MacBoo", "…MacB" (×2)
  - "…403 Forbidden. Mac", "…Portable Monitor. Mac"
  - "MacBook Neo Keyboard … Magic Keyboard + Touch"
- **Precedence bug:** 36 of 52 authored titles in `dynamic-meta.ts` OVERRIDE (`:127`, including the "CTR improvements" block at `:191`) are **shadowed by admin-store titles** (`page-meta.ts:162`).
  - Example: `/blog/why-does-my-macbook-air-m4-heat-up-so-quickly` (5,493 impressions) renders "…So Quickly. MacBook Repa".
  - Example: `/the-caps-lock-key…`, `/blog/how-to-choose-the-best-apple-laptop-for-gaming`, `/blog/do-macbooks-last-over-a-decade`, `/sources-to-purchase-a-refurbished-macbook` and `/migrating-data-…` all render slug-style titles in place of their CTR-tuned ones.
