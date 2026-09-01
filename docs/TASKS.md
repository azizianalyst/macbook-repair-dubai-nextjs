# Master task register — MacBook Repair Dubai
**Consolidated 2026-08-30.** Every task from this engagement, by module, with who does it.

**Owner key:** 🧑 you (needs your login, your decision, or your camera) · 🤖 me (repo work) · ✅ done and verified

**Source docs:** [GBP audit](gbp-audit-2026-08-30.md) · [GBP plan](gbp-master-plan-2026-08-30.md) · [Content pack](gbp-content-pack-2026-08-30.md) · [Execution log](gbp-execution-log-2026-08-30.md) · [Keyword gap](keyword-service-gap-audit-2026-08-30.md) · [Template standard](azizi-template-standard.md) · [GBP extract prompt](gbp-extract-and-audit-prompt.md)

---

# WORKSTREAM A — Google Business Profile

## Module 1 · Emergency triage

| | Task | Owner |
|---|---|---|
| ✅ | Review count 216 → 232 (source + 77 hardcoded spots, 47 files) | 🤖 |
| ✅ | `priceRange` removed from sitewide LocalBusiness schema | 🤖 |
| ✅ | Offer prices stripped from sitewide catalogue | 🤖 |
| ✅ | About title "5,000+" → "40,000+" | 🤖 |
| ✅ | "We publish the numbers" removed from blog taxonomy | 🤖 |
| ✅ | `AED 0` investigated — intentional no-fix-no-charge copy, not a bug | 🤖 |
| ☐ | **Delete "certified Apple specialists" from the GBP description** | 🧑 |
| ☐ | Remove "transparent pricing" and "200+ five-star reviews" | 🧑 |
| ☐ | Publish this week's post — cadence is broken at ~3 weeks | 🧑 |

## Module 2 · Core identity — ~10 min, all paste-ready

| | Task | Owner |
|---|---|---|
| ☐ | Paste new description (734/750 chars, counted) | 🧑 |
| ☐ | Add 4 secondary categories (3 of the original 7 are already live) | 🧑 |
| ☐ | Remove 5 diluting categories → some move to Azizi listing | 🧑 |
| ☐ | Tick the 6 verified attributes | 🧑 |
| ☐ | Set opening date 10 Oct 2004 | 🧑 |
| ☐ | Set short name → unlocks the clean review link | 🧑 |
| ☐ | Set UAE holiday hours | 🧑 |
| ⚠️ | **Confirm then tick:** languages · accessibility · payments | 🧑 |

## Module 3 · Services ⭐ the biggest win

| | Task | Owner |
|---|---|---|
| ✅ | 103 services written, ≤300 chars each, all 103 URLs verified 200 | 🤖 |
| ☐ | **Publish all 103** — see the blocker below | 🧑 |
| ✅ | Extend `src/lib/gbp.ts` to support `serviceItems` | 🤖 |
| ✅ | `gen-gbp-content.mjs` — description, categories, 103 services and 13 post bodies generated from the content pack | 🤖 |

> ✅ **Blocker cleared 2026-08-30.** `serviceItems` and `attributes` are now in `INFO_READ_MASK`, with `buildServiceItems()`, `updateServices()` and `getPrimaryCategoryId()` helpers. The existing `PATCH /api/admin/gbp/info` route publishes them — no new route needed. Descriptions are validated against Google's 300-char ceiling locally, so a bad batch fails here rather than as an opaque 400 from Google.

> ⚠️ **Audit finding corrected 2026-09-01.** The original audit said "Services: EMPTY" and built the whole plan's "completeness is binding" framing on it. Live-checked in Business Profile Manager: Services is **not empty** — it's populated, diluted, off-strategy. Publishing the 103 is a **replace, not a fill**. Check the `/admin/gbp` dry-run count before publishing. Both `gbp-audit-2026-08-30.md` and `gbp-master-plan-2026-08-30.md` now carry correction notes rather than silently rewritten history.

## Module 4 · Products

| | Task | Owner |
|---|---|---|
| ✅ | 8 collections written, no prices | 🤖 |
| ☐ | Publish (optional — lower value than services) | 🧑 |

## Module 5 · Photos

| | Task | Owner |
|---|---|---|
| ✅ | 24 images verified against GBP specs (JPG, ≥720px, 10 KB–5 MB) | 🤖 |
| ☐ | Upload the 24-image batch | 🧑 |
| ☐ | Set a real photo as cover; set logo | 🧑 |
| ☐ | **Shoot 3 missing:** tower exterior · 10th-floor door · reception | 🧑 |

## Module 6 · Posts

| | Task | Owner |
|---|---|---|
| ✅ | 52-week calendar, 4-type rotation, every post mapped to a real repo image | 🤖 |
| ☐ | Publish weekly, no gaps | 🧑 |
| ⚠️ | Confirm Ramadan/Eid 2027 dates before scheduling weeks 16, 20 | 🧑 |

## Module 7 · Review engine

| | Task | Owner |
|---|---|---|
| ☐ | Create review link + counter QR | 🧑 |
| ☐ | Set up the 24h WhatsApp follow-up ← **the one that compounds** | 🧑 |
| ☐ | Scrub "Apple Certified" from reply templates | 🧑 |
| ☐ | Report the no-comment 2★ | 🧑 |
| ☐ | Hold 100% reply rate ≤24h | 🧑 |

> Target 400 reviews in 12 months (232 today). At 4/week ≈ 10 months. Do **not** protect the 5.0 — 4.8–4.9 at 400 beats 5.0 at 232 in every local model.

## Module 8 · Q&A

| | Task | Owner |
|---|---|---|
| ✅ | 12 Q&As written, answer-first, 40–90 words | 🤖 |
| ☐ | Seed from a personal account, answer from the business, spaced over 2–3 weeks | 🧑 |

## Module 9 · NAP & entity

| | Task | Owner |
|---|---|---|
| ☐ | Fix GBP address "Al Safouh Second" → "Al Sufouh" | 🧑 |
| ✅ | Site-side NAP check — grepped every `.ts`/`.tsx` file for "Al Safouh": zero hits. Site already spells it "Al Sufouh" everywhere (schema, area pages, contact). Only the live GBP listing has the wrong spelling — nothing to fix in the codebase | 🤖 |
| ☐ | Claim the LinkedIn page — a competitor owns your brand name there | 🧑 |
| ☐ | Claim Apple Business Connect | 🧑 |
| ☐ | Bing Places · OpenStreetMap · UAE directories | 🧑 |
| ☐ | Execute the Azizi differentiation (move the 5 removed categories, as relevant) | 🧑 |
| ✅ | "Computer support and services" collision check — Azizi's primary is "IT support and services" (different string), no exact match, safe to add. Pre-existing overlap on 4 other categories flagged, not a blocker | 🤖 |

## Module 10 · Website ↔ GBP alignment

| | Task | Owner |
|---|---|---|
| ✅ | Review count parity 216 → 232 | 🤖 |
| ✅ | `priceRange` + Offer prices removed from sitewide schema | 🤖 |
| ✅ | 62 truncated meta descriptions repaired | 🤖 |
| ☐ | Strip `/pricing` Offer prices — **same change as the visible tables, never before** | 🤖 |
| ☐ | FAQPage overlap check before adding the 12 Q&As (79 pages already emit it) | 🤖 |

## Modules 11–13 · Measurement, cadence, acceptance

| | Task | Owner |
|---|---|---|
| ☐ | UTMs on every GBP CTA · GA4 events · log the baseline | 🧑 |
| ☐ | Weekly 15 min · monthly 30 min · quarterly 2 hr | 🧑 |
| ☐ | Final acceptance audit, logged out, mobile + desktop | 🧑 |

---

# WORKSTREAM B — Website & template

## Template — locked ✅

| | Task | Owner |
|---|---|---|
| ✅ | `AziziTemplate` + 9 new modules, 24 modules total, all render | 🤖 |
| ✅ | 5 form presets, verified across 393 routes (375 matched, 18 documented) | 🤖 |
| ✅ | `template-audit.mjs` ported, calibrated, findings hand-verified | 🤖 |
| ✅ | Demo at `/azizi-template-demo`, benchmarked against the live reference | 🤖 |
| ✅ | Standard documented and locked | 🤖 |

**Shared fixes the template forced — all sitewide:** textarea iOS auto-zoom (14→16px) · Hero CTA tap targets (40→44px) · LeadForm chips (38→44px) · StatBand stale "20+" years → 21 · missing footer/sticky bar · missing breadcrumb schema.

## Page rebuilds — not started

| | Task | Owner |
|---|---|---|
| ☐ | `/macbook-air-repair-dubai/` — pos 57, worst, biggest upside | 🤖 |
| ☐ | `/apple-repair-dubai/` — pos 50 | 🤖 |
| ☐ | `/ipad-repair-dubai/` — pos 39 | 🤖 |
| ☐ | `/iphone-battery-replacement-dubai/` — pos 35 | 🤖 |
| ☐ | `/imac-repair-dubai/` — pos 32 | 🤖 |
| ☐ | `/iphone-repair-dubai/` — pos 26 | 🤖 |
| ☐ | `/mac-data-recovery-dubai/` — pos 25 | 🤖 |
| ☐ | `/macbook-pro-repair-dubai/` — pos 17 | 🤖 |

Then: cluster hubs → top MacBook services → top iPhone services. **Not all 292 Mac/iPhone pages** — rebuild on GSC evidence, not a schedule.

## Keyword & slug hygiene

| | Task | Owner |
|---|---|---|
| ☐ | Rename 5 service-intent question slugs + 301 | 🤖 |
| ☐ | Move ~14 informational question slugs under `/blog/` | 🤖 |
| ☐ | Build `/macbook-repair-near-me-dubai/` and `/best-macbook-repair-dubai/` | 🤖 |
| ⏸️ | AirPods + Apple Watch restores — **parked**, you deprioritised these | — |

## Hide-prices migration — blocked, own session

| | Task | Owner |
|---|---|---|
| ☐ | **1,022 price leaks across 120 files** — run `/hide-all-prices` | 🤖 |
| ☐ | Then strip `/pricing` schema Offer prices in the same change | 🤖 |
| ☐ | Then deploy | 🧑🤖 |

> ⚠️ Do not deploy expecting prices to be gone. Three of the eight money pages still show AED figures.

---

# WORKSTREAM C — decisions I need from you

| # | Question | Blocks |
|---|---|---|
| 1 | Languages, accessibility, payment methods — confirm each | Module 2 attributes |
| 2 | Warranty wording: "90-day to 12-month" (GBP) or "up to 12 months" (site)? | Module 2, page copy |
| 3 | Ramadan / Eid 2027 dates | Module 6 weeks 16, 20 |
| 4 | Extend `gbp.ts` for services, or type all 103 by hand? | Module 3 |
| 5 | Which technician reviews which page for the bylines? | Page rebuilds |
| 6 | Was the 83-page consolidation deliberate? | AirPods/Watch (parked) |

---

# Recommended order

1. **You:** Module 1 triage + Module 2 identity on GBP — ~1 hour, all paste-ready
2. **Me:** extend `gbp.ts` for `serviceItems` — ~1 hour, unblocks the 103 services
3. **You:** publish services (the single biggest win)
4. **Me:** rebuild `/macbook-air-repair-dubai/`, audit it, then the other 7
5. **You:** photos, Q&A, weekly posts, start the 24h review follow-up
6. **Separate session:** hide-prices migration → then deploy

**Hierarchy, restated: Reviews > Services > Products > Posts > Photos.** Services is the quarter's win; the daily review follow-up is what compounds.
