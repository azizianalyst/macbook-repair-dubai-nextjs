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
| 1 | ~~Restore~~ | `/airpods-repair-dubai/` | 9 | **DROPPED 2026-09-01** — owner confirmed no in-house AirPods service; the honest answer is no page, regardless of demand |
| 2 | ~~Restore~~ | `/airpods-battery-replacement-dubai/` | 9 | **DROPPED 2026-09-01** — same reason |
| 3 | ~~Strengthen~~ | `/apple-watch-repair-dubai/` | 9 | **DROPPED 2026-09-01** — no in-house Apple Watch service |
| 4 | ~~Build~~ | `/apple-watch-battery-replacement-dubai/` | 9 | **DROPPED 2026-09-01** — same reason |
| 5 | ✅ **Renamed+301** | `/can-iphone-motherboard-be-repaired` → `/iphone-motherboard-repair-dubai` | 6 | Already done pre-2026-09-01 (commit `06f5caa`) |
| 6 | ✅ **Renamed+301** | `/macbook-repair-near-me` → `/macbook-repair-near-me-dubai/` | 6 | **Done 2026-09-01** — was a substantial existing page (356 lines) on the wrong slug, not a gap |
| 7 | ✅ **Renamed+301** | `/best-macbook-repair-shop-dubai` → `/best-macbook-repair-dubai/` | 6 | **Done 2026-09-01** — same situation, 225 lines of existing content |
| 8 | **Strengthen** | `/apple-service-center-dubai/` | 6 | Many impressions at 20–37; own the *independent alternative* angle — still open |
| 9 | ✅ **Built** | `/macbook-screen-repair-near-me-dubai/` | 4 | **Done 2026-09-01** — the one candidate that was a genuine gap, not an existing page under a different slug |
| 10 | **Rename+301** | 4 more service-intent question slugs | 4 | Zero-volume slugs on service intent — still open |
| 11 | **Move** | ~14 informational question slugs → `/blog/` | 3 | Stop them competing as root-level service pages — still open |

### Cut deliberately, and why

- **All "[service] cost dubai" pages** — contradicts the hide-prices decision. Cost intent is served by the free-diagnosis CTA instead.
- **Individual iPhone model pages** (23 folded) — the consolidation was probably right here. iPhone 6/7/8 model demand is thin and `/iphone-repair-dubai/` at position 26 is a fixable page, not a broken strategy.
- **Apple TV / HomePod / accessories** (20 folded) — no GSC demand signal, and they dilute the Apple-repair entity.
- **The remaining ~30 modifier pages** — build only after the above prove out. Shipping 42 thin pages is the cannibalisation trap.

---

# PART 4 — IMPLEMENTATION

## Batch A — DROPPED 2026-09-01

Both open questions below are answered: consolidation was deliberate, and there's no
in-house AirPods/Apple Watch service. Restoring these pages would mean claiming a
capability the business doesn't have — the honest answer is no page, regardless of
GSC demand. `DEVICE_TYPES` stays as-is; no AirPods/Watch option needed.

## Batch B — slug hygiene (partially done)

- ✅ 3 of ~6 service-intent renames + 301s done — see Part 3, items 5–7
- ☐ 4 more service-intent question slugs → rename + 301 — still open
- ☐ ~14 informational pages → move under `/blog/` with 301s — still open
- Verify no redirect chains afterwards (`A→B→C` must become `A→C`) — caught and fixed one
  live case during the 2026-09-01 renames (`/blog/macbook-repair-near-me-dubai` was chaining
  through the old slug)

## Batch C — strengthen, don't build

`/apple-service-center-dubai/` onto `AziziTemplate`, absorbing the intent of the pages folded
into it. (`/apple-watch-repair-dubai/` dropped along with the rest of Batch A.)

## Genuine build — done 2026-09-01

`/macbook-screen-repair-near-me-dubai/` — the one candidate from Part 3 that was an actual
gap, not an existing page on the wrong slug. Built on `SubServicePageTemplate`, linked in from
`/macbook-screen-repair-dubai/` and `/macbook-repair-near-me-dubai/`.

## Sequence (updated)

1. ~~Batch A~~ — dropped
2. **The 8 GSC money pages** onto `AziziTemplate` (already agreed) — still open
3. **Batch B remainder** — 4 renames + 14 blog moves, low risk, mechanical
4. **Batch C** — strengthen `/apple-service-center-dubai/`

## Open questions — resolved 2026-09-01

1. ~~Was the 83-page consolidation deliberate?~~ **Yes, confirmed by the owner.**
2. ~~Do you actually repair AirPods and Apple Watch in-house?~~ **No — sent out, not offered.**
3. ~~`DEVICE_TYPES` — add Apple Watch and AirPods?~~ **No, not needed — moot given #2.**
