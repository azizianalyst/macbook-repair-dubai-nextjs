# GSC-driven SEO action plan (2026-06-20)

Built from a Google Search Console "Top queries" export + a codebase audit (on-page meta,
structured data/entity, internal linking/coverage). Source data: huge impressions, almost
zero clicks — money queries rank page 3–7, page-1 queries sit at position 6–10 (below the
click zone).

## The diagnosis in one line
The site is **technically healthy** (clean migration, full Organization/LocalBusiness schema
with sameAs bridge, sophisticated automated internal linking) but is **under-monetising
impressions**: core repair pages rank page 3–7 (reindex lag + thin SERP presence) and
high-impression page-1/2 pages lack the schema/CTR polish to pull clicks.

## What's already good (do NOT touch)
- **Clean migration** — zero references to old domains `apple-force.com` / `iphoneipadfix.com`
  anywhere in the repo. The old-brand queries in GSC are Google reindex lag, not a code bug.
- **Entity bridge present** — Organization + LocalBusiness both carry the same `sameAs`
  (Facebook, Instagram, YouTube, GBP "Azizi Technologies", azizitechnologies.ae). Correct.
- **Internal linking is automated** — coverage ring + relevance scoring + content→conversion
  funnel (`src/lib/related-services.ts`). Money pages are well-linked (one footer gap below).
- **Per the ranking-drop diagnosis: do not touch homepage title/H1/URLs.**

---

## P0 — quick wins (days, high impact, low effort)

### P0.1 — FAQPage schema on core repair/service pages  ✅ ALREADY DONE (verified)
Initial audit flagged this as missing, but verification against the prerendered HTML shows
service pages **already emit `FAQPage` JSON-LD server-side** — `SubServicePageTemplate` renders
`<FAQAccordion injectSchema>`, which outputs the `<script type="application/ld+json">` in JSX
(reaches static HTML even though the component is `"use client"`). Confirmed on
`/macbook-battery-replacement-dubai`: FAQPage with 12 Q&As + Service + Organization +
LocalBusiness all present in `.next/server/app/*.html`. **No change needed.**
- Implication: the money pages stuck at position 30–70 are NOT a schema problem — it's
  post-migration reindex lag + on-page depth + authority (see P2.1). Schema is not the lever here.

### P0.2 — Entity + Service schema on trade-in/sell pages
`/trade-in-macbook-dubai`, `/sell-macbook-dubai`, `/sell-faulty-macbook-dubai` match neither
`SERVICE_RE` nor get Organization/LocalBusiness → they emit only an image node. Yet this is the
**best-ranking commercial cluster** (`apple trade in uae` 3,111 impr @ 6.9, `apple trade in`
2,805 @ 6.4). Add Organization + LocalBusiness + a `Service` ("device buy-back / trade-in") node
so the entity authority and offering are explicit. 3 pages, ~1 edit to `page-schema.ts`.

### P0.3 — Footer: add `/iphone-screen-repair-dubai` to "Popular repairs"
Only `/iphone-battery-replacement-dubai` is in the footer for iPhone. iPhone screen is a bigger
money query (`iphone screen replacement` 320 @ 54, `iphone screen repair dubai` 140 @ 52). One
link in `src/components/layout/Footer.tsx`.

### P0.4 — CTR title/meta tuning on high-impression page-1/2 pages
These already rank but bleed clicks. Tighten titles for click appeal (keep within 60 chars):
- `/iphone-16-shocks-while-charging` — **1,254 impr @ 10.3, ZERO clicks** (top of page 2).
  Biggest wasted query on the site. Confirm FAQ/HowTo schema present; sharpen title.
- `/why-does-my-macbook-air-m4-heat-up-so-quickly` — M4 overheating cluster (~1,500+ combined
  impr @ 7–10). Has HowTo. Tune title to the highest-volume variant phrasing.
- `/iphone-16-pro-max-screen-flickering` — flickering cluster (~600+ impr @ 7–10).

---

## P1 — new pages targeting head terms (1–2 weeks, high impact)

### P1.1 — "Apple Trade-In UAE" hub  ⭐ targets the single biggest query
`apple trade in uae` = **3,111 impressions @ 6.9** but there's no page owning the broad,
multi-device, UAE-level head term — only MacBook-specific routes. Build an Apple Trade-In hub
(MacBook + iPhone + iPad + iMac + Watch) with instant-valuation copy, FAQ schema, and links
down to each device's sell/trade page. This is where the migrated old-brand traffic lands.

### P1.2 — `/sell-iphone-dubai` service page
"sell iphone" intent currently lives only in blog guides, no service page with valuation/CTA.
Queries: `sell iphone dubai` (71 @ 29), `iphone sell in dubai`, `sell my iphone uae`, `how to
sell iphone in uae`. Mirror the `/sell-macbook-dubai` structure.

### P1.3 — Broaden iPhone 16 screen-issue coverage
The flickering page is Pro Max-specific, but demand is broad: `iphone 16 brightness flickering`
(254 @ 7.7), `iphone 16 screen brightness flickering` (263 @ 7.9), and **`iphone 16 black
screen but still on`** (169 @ 12.7) has **no page**. Add/broaden a non-Pro-Max iPhone 16 screen
guide + an iPhone 16 black-screen page; both with HowTo + FAQ schema.

---

## P2 — depth + coverage (ongoing)

### P2.1 — Lift the money pages off page 3–7
`imac repair dubai`, `macbook battery/screen replacement dubai`, `mac data recovery dubai`,
`iphone screen repair dubai` rank 30–70. After P0.1 schema, add on-page depth (process, parts,
warranty, model coverage, real FAQs), and ensure each gets contextual inbound links from the
relevant high-impression guides. Then allow reindex time (post-migration lag is the main drag).

### P2.2 — Apple Watch coverage (sell/trade first)
No Watch pages exist. GSC demand is mostly resale: `sell my apple watch` (63), `sell apple
watch` (67), `apple watch trade in uae` (34), `selling apple watch`. Lowest-effort: add Watch
to the trade-in/sell hub (P1.1). Optional later: a Watch repair hub (screen/battery/charging).

### P2.3 — Out of scope (log, don't build)
`surface pro repair dubai` (146 @ 16), `microsoft surface repair dubai` — Windows hardware,
off-brand for an Apple-only site. Accidental impressions; ignore unless expanding scope.

---

## Priority order to execute
1. P0.1 FAQ schema on service pages (template change — cascades to ~240 pages)
2. P0.2 trade-in/sell entity+Service schema · P0.3 footer link (same PR)
3. P0.4 CTR title tuning (grounded-charging, M4, flickering)
4. P1.1 Apple Trade-In UAE hub
5. P1.2 sell-iphone-dubai · P1.3 iPhone 16 screen coverage
6. P2 depth + Watch + reindex monitoring (track in GSC weekly)

## Measurement
Re-pull GSC "Top queries" weekly. Leading indicators: position on the money queries (target
sub-20 within 4–6 wks post-schema), and CTR on the page-1/2 cluster (grounded-charging, M4,
flickering) once titles + FAQ rich results land.
