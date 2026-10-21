# Local SEO — Action Checklist (Skill 4)

> On-site local SEO for the homepage is DONE & verified (see "On-site" below).
> The decisive local levers (GBP, reviews, citations) are OFF-SITE — owner actions below.
> Map-pack weight: GBP 36% > Reviews 17% > On-page 16% > Links 13% > Citations 7%.

## On-site (homepage) — ✅ complete & verified
- ✅ Consolidated NAP unit (Name + Address + Phone) in contact block, matches schema + GBP.
- ✅ `LocalBusiness` (ElectronicsStore) schema: NAP, geo, hours, payment, languages, contactPoint, `hasOfferCatalog`, `areaServed`.
- ✅ `aggregateRating` schema (5.0 / 215 reviews) — scoped to home + /reviews (no sitewide spam).
- ✅ Embedded GBP map (pins the real "MacBook Repair Dubai" listing), Get-directions + View-on-Google links.
- ✅ Hours (visible + schema), parking + metro proximity, 60-area free-pickup list.
- ✅ "near me" answered on-site (QuickAnswer capsule + location content + FAQ).

## ⚠️ Two on-site data flags (need owner's real numbers, then 1-line fixes)
1. **Price floor:** `priceRange` = "AED 60 – 4,550" in `src/lib/schema.ts` vs "from AED 49" everywhere visible (+ FAQ "single key from AED 150"). Decide the true floor; sync schema ↔ visible ↔ FAQ.
2. **areaServed:** schema = Dubai/Sharjah/Abu Dhabi only; site has pages for Ajman, Al Ain, Fujairah, RAK, UAQ, Kalba, Khor Fakkan. Add to schema ONLY the emirates genuinely served (with pickup), else leave conservative.

## OFF-SITE — Google Business Profile (highest leverage; Gemini grounds on GBP)
- [ ] Verify claimed + ownership secure; turn on messaging.
- [ ] **Primary category** = most specific ("Computer repair service" / "Electronics repair shop") — the #1 individual map-pack factor.
- [ ] Secondary categories for genuine extra offerings (data recovery, phone repair).
- [ ] Business type = storefront (show address — you have a real office).
- [ ] Standard + Ramadan/holiday hours (you already note Ramadan in a blog).
- [ ] Description with natural keywords (mirror the homepage answer capsule).
- [ ] **100+ photos**, descriptively named (correlates ~520% more calls). Use the real lab photos already on site.
- [ ] Services tab populated **matching the site's Services** (price-synced).
- [ ] Seed owner-verified Q&A (reuse top homepage FAQs).
- [ ] Weekly Posts cadence: Wk1 offer · Wk2 service spotlight+photo · Wk3 completed job · Wk4 FAQ/tip.

## OFF-SITE — Reviews (17% of map pack; AI summarizes RECENT sentiment)
- [ ] Steady **2–3 Google reviews/week** (no bursts). Use the request template below.
- [ ] Respond to ALL reviews within 24–48h, personalized. Never incentivize/pay.
- [ ] Bump `REVIEW_COUNT` in `src/content/site.ts` as totals cross thresholds (215 → 225 → 250…).

**Request template:** "Hi [Name], thanks for choosing MacBook Repair Dubai! If your [service] went well, a quick Google review really helps other Dubai customers find us: [short link]. Takes 30 seconds — thank you!"

## OFF-SITE — Citations / NAP consistency (cross-source = AI trust)
Use this EXACT canonical NAP everywhere:
`MacBook Repair Dubai | Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City, Dubai, UAE | +971 55 741 3706 | https://macbook-repair-dubai.ae`
- [ ] Core: Apple Maps, Bing Places, Facebook, Yelp, Foursquare.
- [ ] UAE/local: Yallalocal, Connect.ae, etc. + industry/Apple-repair directories.
- [ ] Audit + fix duplicate listings before adding new ones.
- [ ] Run a competitor Link/Citation Intersect to find directories rivals are in.

## OFF-SITE — Local links & third-party presence (Perplexity leans third-party)
- [ ] Dubai "best Apple repair" / "best laptop repair" best-of listicles.
- [ ] Local sponsorships / chambers / unlinked-mention reclamation.
- [ ] YouTube repair tutorials (YouTube mentions ~0.737 corr. with AI visibility).

## KPIs
map-pack rank · review count/velocity/avg · GBP actions (calls/directions/clicks) · local organic rank · NAP-consistency % · local backlinks · AI "near me" recommendation rate.
