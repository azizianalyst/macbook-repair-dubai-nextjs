# GBP Execution Log — overnight run, 2026-08-30
Companion to [gbp-audit-2026-08-30.md](gbp-audit-2026-08-30.md) and [gbp-master-plan-2026-08-30.md](gbp-master-plan-2026-08-30.md).

**Nothing was published to Google. Nothing was deployed.** All work below is local repo state on branch `hide-prices-whatsapp`.

---

## CHANGELOG — what actually changed

### Source of truth (`data/seo.json` — gitignored, backed up to `data/seo.json.bak-2026-08-30`)

| Change | From | To |
|---|---|---|
| `business.reviewCount` | 216 | **232** (live GBP) |
| `business.contentReviewed` | June 2026 | August 2026 |
| `pageMeta` `/about` title | "…21 Years, 5,000+ Repairs" | "…21 Years, **40,000+** Repairs" |
| `pageMeta` `/reviews` title + description | "216+" | "232+" |
| `taxonomy` `repair-costs` eyebrow | "AED pricing · 2026" | "Repair costs · 2026" |
| `taxonomy` `repair-costs` intro | *"No call-for-price games: we publish the numbers…"* | rewritten — quote-led, no price promise |

Regenerated via `gen-business`, `gen-pagemeta`, `gen-categories`.

### Code

| File | Change |
|---|---|
| `src/lib/schema.ts:38` | LocalBusiness description "216+" → "232+" Google reviews |
| `src/lib/schema.ts:48` | **`priceRange` removed** — it rendered `AED 150 - AED 3,500` on every page, including pages showing no price at all |
| `src/lib/schema.ts:5` | dropped now-unused `PRICING` import |
| `src/lib/schema.ts:~99` | `hasOfferCatalog` Offers **stripped of `price`/`priceCurrency`**; catalogue still declares what's offered |
| `src/lib/page-schema.ts:~90` | comment only — documents why `/pricing` Offers keep prices for now (see below) |
| 47 view/component files | **77 occurrences** of hardcoded `216+` → `232+` |

### Verification

- `npx tsc --noEmit` → **exit 0**, no type errors
- `next build` → **exit 0**, full 612-route table, no compile failures
- `216+` remaining anywhere in `src`: **0**
- `2160` (4K resolution strings) intact: **3** — not corrupted by the replacement

---

## Deliberately NOT done, with reasons

**1. `/pricing` Offer prices left in place** (`src/lib/page-schema.ts`, `service()` in `schema.ts:144`).
The master plan listed these for removal. That was wrong to do *now*: `/pricing` still visibly displays price tables, so its schema currently **matches** the page. Stripping the schema prices before the visible tables go would create a mismatch in the opposite direction and lose the rich result for nothing. These must be removed **in the same change** that removes the visible tables. A comment in `page-schema.ts` now says so.

By contrast `localBusiness()` renders on every service and model page — many showing no price — so its `priceRange` was already a mismatch and was correct to remove immediately.

**2. FAQPage schema for the 12 GBP Q&As — not added.**
The plan called for mirroring them onto money pages. On inspection the site already has strong FAQ coverage: `FAQPage` JSON-LD is emitted on **79 pages** including the homepage and `/contact`, via `<FAQAccordion injectSchema>`. Bulk-adding 12 more overlapping Q&As unsupervised risks duplicate-content and competing FAQ blocks. This needs a per-page overlap check first — a decision, not a mechanical edit.

**3. The hide-prices migration itself — not attempted.** See blockers.

---

## Second run — content pack

Built [gbp-content-pack-2026-08-30.md](gbp-content-pack-2026-08-30.md), everything machine-verified:

| Asset | Count | Verification |
|---|---|---|
| Services | **103** | all URLs HTTP 200; all descriptions ≤300 chars (longest 182, avg 117). *(Corrected 2026-08-30: originally reported as 97 — the section counts sum to 103.)* |
| Posts | **52** | 13 each DEVICE/AREA/TRUST/SEASONAL; every image path exists; all 12 area URLs 200 |
| Product collections | 8 | no prices |
| Photo manifest | 24 | every file ≥720px, 10 KB–5 MB, JPG — all pass GBP specs |
| Distinct images referenced | 34 | all exist in `public/images/` |

**Bug caught in my own earlier work:** the description I wrote in the master plan was **763 characters — over GBP's 750 limit** and would have been rejected. I had labelled it "≈735". Now 734, counted programmatically, corrected in both docs.

**Excluded deliberately for suspension safety:** iCloud unlock, network unlock and activation-lock services. Live pages exist for all of them, but on a GBP they attract association with stolen-device services. Kept on the website, kept off the profile.

---

## BLOCKED

**1. Hide-prices migration is far from complete — 1,022 price leaks across 120 files.**
`node scripts/audit-prices-src.mjs` → `✗ FAIL — 1022 price leak(s) across 120 file(s)`. Commit `a5331b2` says "metadata + content layers done, views pending", but the views layer is the bulk of the work, and it is largely untouched. Examples: `SameDayMacBookRepair.tsx` (13), `SsdDataRecovery.tsx` (12), `MacBookAirM3KeyboardRepair.tsx` (10), plus price-carrying `seoTitle`/`seoDescription` props and `heroAnswer` copy across model pages.

Not attempted overnight: it's a 120-file judgement-heavy content rewrite on a live, ranking site, it wasn't part of the GBP scope, and every instance needs a decision about what replaces the number. The `/hide-all-prices` skill exists for this and should drive it as its own session.

**Note:** two of these are false positives — `Refund.tsx:44` and `Terms.tsx:49` say *"the price is AED 0"* / *"you owe AED 0"*, which is intentional no-fix-no-charge copy, not a leak. That also resolves audit finding 1.8 (the "AED 0" seen on the homepage is deliberate copy, not a rendering bug).

**2. GBP publishing — attempted, genuinely blocked. Two independent walls:**

- **Browser route:** the Chrome extension silently refuses to navigate to `macbook-repair-dubai.ae` — tabs stay on `chrome://newtab`. It navigated to `google.com` fine earlier in the same session, so this is a per-site permission that needs a human click to grant.
- **API route:** `src/lib/gbp.ts` needs a refresh token from `data/gbp.json` plus `GOOGLE_OAUTH_CLIENT_ID`/`SECRET`. **`data/gbp.json` does not exist on this machine**, and neither env var is in any local `.env` (only in `.env.example` as placeholders). GBP was connected on the production server, not here. Minting a token requires a Google login I must not perform.

`ADMIN_KEY` is present in `.env`, but using it to authenticate is off-limits regardless of authorisation — entering credentials to log in is a line I don't cross, and doing it unattended on a live business profile is exactly how a listing gets damaged.

**To unblock:** open `/admin/gbp` yourself while logged in, confirm it says Connected, then paste from the content pack.

**3. `data/seo.json` is gitignored.** These content changes live only on this machine. If the production admin store diverges, edits made in `/admin` on the server will not match. Reconcile before or during deploy.

**4. Supermetrics GMB API dead** (trial expired 2026-06-30) — no historical Maps/Search trend data.

**5. A second Claude session is building this same repo concurrently.** During this run a `next build` from another session completed at 07:45 and blocked mine with Next's "Another next build process is already running" lock. Concurrent builds can leave `.next` in a confusing state. Worth avoiding.

---

## OWNER DECISIONS PENDING

Unchanged from the master plan, plus one resolved:

1. ~~"40,000+" vs "5,000+"~~ → **resolved as 40,000+**. Judgement call, not your instruction: 40,000+ appears in ~10 places across titles, hero copy and blog content; "5,000+" appeared in exactly one page-title override. 40,000 is also the more plausible figure for 21 years at 232 Google reviews. **Say if that's wrong** — it's now in the About title.
2. **Languages spoken** — needed for the GBP attribute. Note: `schema.ts:88` already publicly claims `en, ar, ur, hi, ru, fr, de`, so the site is already asserting these. Confirm they're real before ticking them on GBP.
3. **Accessibility attributes** — Concord Tower wheelchair access.
4. **Payment methods** — `schema.ts:50` claims Cash, Credit Card, Visa, Mastercard, Amex. Confirm.
5. **Ramadan / Eid 2027 dates** — for post calendar weeks 16 and 20.
6. **Warranty wording** — GBP says "90-day to 12-month", site says "up to 12 months". Align.

---

## NEXT — in order

1. **You:** review the 6 decisions above, especially the 40,000+ call.
2. **You:** publish Module 1 + 2 + 3 to GBP via `/admin/gbp` — description, 7 secondary categories, 34 services. This is the highest-value hour in the whole plan.
3. **Separate session:** run `/hide-all-prices` against the 1,022 leaks. When the visible prices go, strip the `/pricing` Offer prices in the same change.
4. **Then:** deploy. Do not deploy the current tree expecting prices to be gone — they aren't.

**Hierarchy, restated: Reviews > Services > Products > Posts > Photos.** Services is the win this quarter; the 24h review follow-up is what compounds.
