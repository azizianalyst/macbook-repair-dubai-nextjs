# Freshness System & Refresh Cadence (#10)

> Why: AI search favours fresh pages ("3-month citation cliff"; fresh pages ~6 citations vs 3.6 stale;
> visible "2026" lifts Perplexity ~30%). Google's AI-surfaced URLs are ~25% fresher than classic results.
> Goal: the site never *looks* stale, and decaying pages get refreshed on a schedule.

## The mechanism (in code)
- **Single source of truth:** `CONTENT_REVIEWED` in `src/content/site.ts` (currently "June 2026").
  - Homepage price card renders it ("Pricing reviewed {CONTENT_REVIEWED}").
  - **Bump it every quarter** (or on any pricing/content change). One edit updates everywhere.
- Per-blog freshness: `Article` schema already emits `dateModified` — bump it when a post is edited.

## Quarterly cadence (do every 3 months)
1. **Bump `CONTENT_REVIEWED`** in `site.ts` to the current month/year.
2. **Prices:** re-verify the price tables + `priceRange` in `schema.ts` still match reality; fix drift.
3. **Reviews:** bump `REVIEW_COUNT` in `site.ts` as Google totals cross thresholds (215 → 225 → 250…).
4. **Decay check (GSC):** export queries; flag pages losing clicks over the last 3–6 months.
   - Pages in **positions 4–15** = quick-win refresh targets (best ROI).
   - Update title/intro/stats, add a new FAQ, refresh the answer capsule, re-publish.
5. **New models:** when Apple ships new hardware, add the model page + link it from the relevant hub.
6. **Top earners:** refresh the homepage + the 5 device hubs + top money pages first.

## Refresh priority (update > rewrite > merge > prune)
- **Update** a page that still has potential (most cases).
- **Merge** two thin overlapping pages into one stronger URL (301 the loser).
- **Prune** (noindex or 301) pages with persistent zero traffic after 12 months.

## Annual
- Re-run the thin-content audit (see method in chat / `/tmp` script) on templated groups.
- Re-validate all schema (Rich Results Test) after any template change.
- Review `areaServed`, NAP, hours, founder/年 facts for accuracy.

## KPI
Track in GSC/Looker: % of money pages refreshed in last 90 days · pages in pos 4–15 refreshed · clicks recovered on refreshed pages · AI citation freshness.
