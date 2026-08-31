# Keyword & Service Gap Audit — macbook-repair-dubai.ae
**Date:** 2026-08-30 · **Method:** 393 live routes cross-checked against `redirects.generated.ts`, GSC (Jun 2026) and GBP search terms (Jun 2026).
**Companion:** [gsc-insights-2026-06.md](gsc-insights-2026-06.md) · [gbp-audit-2026-08-30.md](gbp-audit-2026-08-30.md)

---

# PART 1 — AUDIT

## 🔴 Finding 1 — Two whole device lines were deleted and folded into a page that ranks 50th

`redirects.generated.ts` folds **83 pages into `/apple-repair-dubai/`**. That destination sits at **GSC position 50**.

| Device line | Pages folded away |
|---|---:|
| **Apple Watch** | **32** |
| **AirPods** | **24** |
| Apple TV / HomePod / accessories | 20 |
| Mac display / other | 5 |
| MacBook accessories | 2 |

A further **23 iPhone model pages** were folded into `/iphone-repair-dubai/` (position 26).

**Why this matters.** GSC explicitly flags both lines as live demand:
- *"AirPods — airpods repair, airpods battery replacement near me, airpods max repair (many)"* — the page ranked **~position 13** before removal
- *"Apple Watch — apple watch battery replacement dubai (~position 27)"*

So demand exists, ranking existed, and the pages were consolidated into a hub that ranks worse than the pages it absorbed. `/apple-watch-repair-dubai/` survives as a single page; **AirPods now has no page at all.**

This is the single biggest structural finding in the audit.

## 🔴 Finding 2 — 21 slugs are sentences, not keywords

Question-shaped slugs match essentially zero search volume. The local rule: if a slug starts with a verb (how / why / what / can / is), it needs renaming plus a 301.

```
/can-iphone-motherboard-be-repaired          → /iphone-motherboard-repair-dubai
/how-to-clean-macbook-pro-keyboard           → /macbook-keyboard-cleaning-dubai
/how-to-recover-macbook-password             → /macbook-password-recovery-dubai
/how-to-reset-a-macbook                      → /macbook-factory-reset-dubai
/how-to-erase-all-data-on-my-mac-before-giving-it-away → /mac-data-erase-dubai
/do-macbooks-last-over-a-decade              → keep as blog, move under /blog/
/how-to-take-a-screenshot-on-a-macbook       → keep as blog, move under /blog/
… 14 more
```

Two classes here, and they need different treatment:
- **Service intent behind the question** → rename to a keyword slug + 301 (the five above)
- **Genuinely informational** → move under `/blog/` rather than sitting at root competing as a service page

One of these, `/can-iphone-motherboard-be-repaired`, already pulls **3,436 impressions at 0.67% CTR, position 16** — it is the strongest of the group and the clearest rename candidate.

## 🟠 Finding 3 — 42 missing modifier pages across 12 core services

Every core service should carry its modifier set. Current coverage:

| Service | city | near me | best | cost | same-day |
|---|---|---|---|---|---|
| macbook-repair | ✅ | — | — | — | ✅ |
| iphone-repair | ✅ | ✅ | ✅ | — | — |
| ipad-repair | ✅ | — | — | — | — |
| imac-repair | ✅ | — | — | ✅ | — |
| mac-repair | ✅ | ✅ | — | ✅ | — |
| macbook-screen-repair | ✅ | — | — | — | — |
| macbook-battery-replacement | ✅ | — | — | — | — |
| iphone-screen-repair | ✅ | — | — | ✅ | — |
| iphone-battery-replacement | ✅ | — | — | — | — |
| mac-data-recovery | ✅ | — | — | — | — |
| apple-watch-repair | ✅ | — | — | — | — |
| **airpods-repair** | **—** | — | — | — | — |

**Do not build all 42.** "cost" pages conflict with the hide-prices decision, and a page per keyword causes cannibalisation. See Part 3 for the filtered set.

## 🟠 Finding 4 — "apple authorised service center" demand is under-served

GSC: *"apple authorized service center dubai" — many impressions, position 20–37.*

Only `/apple-service-center-dubai/` exists. The searcher's intent is "official-looking Apple repair", and the honest play is to rank as the **independent** alternative — never claiming authorisation. This is the same claim boundary as the GBP "certified Apple specialists" problem.

## 🟢 Finding 5 — GBP services all have pages

All 103 services in the GBP content pack map to URLs that returned 200. No gap on that side.

---

# PART 2 — THE REUSABLE PROMPT

Paste this into a fresh session (or hand to a VA) to re-run this analysis quarterly.

```
You are running a keyword and service gap audit for a local service website.

SITE
- Business: MacBook Repair Dubai — independent Apple repair, Dubai
- Domain: macbook-repair-dubai.ae
- Repo: ~/Claude/Projects/macbook-repair-dubai.ae-nextjs
- Route list: src/lib/routes.generated.ts
- Redirects: redirects.generated.ts
- Price policy: PRICES ARE HIDDEN. Never propose a "[service] cost" page,
  and never put a figure in a title, meta or body.
- Claim policy: INDEPENDENT, never "Apple Authorised" or "Apple Certified".

DATA TO GROUND EVERY CLAIM IN (do not guess volumes)
- docs/gsc-insights-2026-06.md    — real impressions, positions, CTR
- docs/gbp-audit-2026-08-30.md    — GBP search terms, what the profile captures
- The live route list, and the live site over HTTP

RUN THESE SEVEN CHECKS, IN ORDER

1. DELETED DEMAND
   Parse redirects.generated.ts. Group by destination. Any destination
   absorbing >5 pages is suspect: list what was folded in, then check the
   destination's own GSC position. Folding a ranking page into a worse-ranking
   hub is a self-inflicted loss. Report page counts by device line.

2. SLUG RULE VIOLATIONS
   Flag every slug starting with a verb (how|why|what|when|can|is|does|where|
   which|do|are|should). Split them into (a) service intent → rename to a
   keyword slug + 301, and (b) genuinely informational → move under /blog/.
   Never delete: 301 to the closest keyword page.

3. MODIFIER COVERAGE
   For each core service, check for: [service]-dubai, [service]-near-me-dubai,
   best-[service]-dubai, same-day-[service]-dubai, and the area pages.
   SKIP the "cost" modifier — prices are hidden.

4. INTENT OVERLAP (before proposing anything new)
   For every proposed page, confirm no existing page already serves that
   intent. If one does, the answer is to strengthen it, not to build a
   sibling that cannibalises it.

5. AEO / ANSWER-ENGINE GAP
   Pull question queries from GSC. For each, check whether a page answers it
   in the first 100 words with a self-contained, quotable sentence. Missing
   answer = an AEO gap even when the ranking is fine.

6. GBP ↔ SITE PARITY
   Every GBP service must have a live page returning 200, and every money page
   should appear as a GBP service. Report both directions.

7. SCORE AND CUT
   Score each candidate: (Commercial Intent × Business Potential) ÷ Competition
     Commercial Intent: transactional 3 · commercial 2 · informational 1
     Business Potential: service we offer 3 · adjacent 2 · info only 1
     Competition:       low 1 · medium 2 · high 3
   Report only what scores ≥ 3. Explicitly list what you cut and why —
   a shorter list that ships beats a long one that does not.

OUTPUT
A table: keyword | intent | existing page? | action (build/rename/strengthen/
301) | score | why. Then a build order. Never invent search volumes; if you
do not have a number, say so and rank on intent and business fit instead.
```

---

# PART 3 — SOLUTIONS, SCORED AND CUT

Scored `(Commercial Intent × Business Potential) ÷ Competition`. Only ≥3 shown.

| # | Action | Target | Score | Why |
|---|---|---|---|---|
| 1 | **Restore** | `/airpods-repair-dubai/` | **9** | Ranked ~13 before deletion, GSC shows live demand, currently no page at all |
| 2 | **Restore** | `/airpods-battery-replacement-dubai/` | **9** | GSC names "airpods battery replacement near me" explicitly |
| 3 | **Strengthen** | `/apple-watch-repair-dubai/` | **9** | Survives, but 32 sibling pages were folded away; absorb their intent here |
| 4 | **Build** | `/apple-watch-battery-replacement-dubai/` | **9** | GSC position 27 with no dedicated page |
| 5 | **Rename+301** | `/can-iphone-motherboard-be-repaired` → `/iphone-motherboard-repair-dubai` | **6** | 3,436 impressions, position 16, sentence slug |
| 6 | **Build** | `/macbook-repair-near-me-dubai/` | **6** | "near me" is separate mobile-urgent intent; converts higher |
| 7 | **Build** | `/best-macbook-repair-dubai/` | **6** | Commercial-comparison intent; only the "shop" variant exists |
| 8 | **Strengthen** | `/apple-service-center-dubai/` | **6** | Many impressions at 20–37; own the *independent alternative* angle |
| 9 | **Build** | `/macbook-screen-repair-near-me-dubai/` | **4** | Highest-volume service × urgent intent |
| 10 | **Rename+301** | 4 more service-intent question slugs | **4** | Zero-volume slugs on service intent |
| 11 | **Move** | ~14 informational question slugs → `/blog/` | **3** | Stop them competing as root-level service pages |

### Cut deliberately, and why

- **All "[service] cost dubai" pages** — contradicts the hide-prices decision. Cost intent is served by the free-diagnosis CTA instead.
- **Individual iPhone model pages** (23 folded) — the consolidation was probably right here. iPhone 6/7/8 model demand is thin and `/iphone-repair-dubai/` at position 26 is a fixable page, not a broken strategy.
- **Apple TV / HomePod / accessories** (20 folded) — no GSC demand signal, and they dilute the Apple-repair entity.
- **The remaining ~30 modifier pages** — build only after the above prove out. Shipping 42 thin pages is the cannibalisation trap.

---

# PART 4 — IMPLEMENTATION

## Batch A — restore the deleted demand (highest value)

Four pages, all on the new `AziziTemplate`:

| Page | Preset | Breadcrumb parent |
|---|---|---|
| `/airpods-repair-dubai/` | `repair` | `/apple-repair-dubai/` |
| `/airpods-battery-replacement-dubai/` | `repair` | `/airpods-repair-dubai/` |
| `/apple-watch-battery-replacement-dubai/` | `repair` | `/apple-watch-repair-dubai/` |
| `/macbook-repair-near-me-dubai/` | `repair` | `/macbook-repair-dubai/` |

**Each needs, per the template standard:** 1 H1 · ~16 H2 · 10 FAQs · ~78 internal links · one LCP-primed hero · a written QuickAnswer · 6 KeyTakeaways · real reviews or none · no prices.

**Three registrations, not one** — miss any and it is a silent 404:
1. `src/app/<slug>/page.tsx` (metadata + `<PageSchema>` + view)
2. `src/views/<Name>.tsx` (the `AziziTemplate` view)
3. **Remove the slug from `redirects.generated.ts`** — otherwise the redirect wins and the new page is unreachable

⚠️ **Step 3 is the one that will bite.** `/airpods-repair-dubai` currently 301s to `/apple-repair-dubai/`. Building the page without removing the redirect ships an invisible page.

**Blocked on you:** `airpods-repair` needs two more `DEVICE_TYPES` — the enum has no AirPods or Apple Watch option, so the lead form cannot categorise these leads. Add `"Apple Watch"` and `"AirPods"` to `src/lib/lead-schema.ts`, or accept they arrive as "Other Apple device".

## Batch B — slug hygiene

- 5 service-intent renames + 301s
- ~14 informational pages moved under `/blog/` with 301s
- Verify no redirect chains afterwards (`A→B→C` must become `A→C`)

## Batch C — strengthen, don't build

`/apple-watch-repair-dubai/` and `/apple-service-center-dubai/` onto `AziziTemplate`, absorbing the intent of the pages folded into them.

## Sequence

1. **Batch A** — restores measurable lost demand
2. **The 8 GSC money pages** onto `AziziTemplate` (already agreed)
3. **Batch B** — slug hygiene, low risk, mechanical
4. **Batch C** — strengthen the two survivors

## Open questions for you

1. **Was the 83-page consolidation deliberate?** If someone chose to exit Apple Watch and AirPods as business lines, findings 1 and the whole of Batch A are wrong and I should drop them. If it was a crawl-budget or thin-content cleanup, it over-corrected on the two lines with real demand.
2. **Do you actually repair AirPods and Apple Watch in-house?** Everything above assumes yes. If they are sent out, the honest answer is no page.
3. **`DEVICE_TYPES`** — add Apple Watch and AirPods to the lead form enum?
