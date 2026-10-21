# Mac URL structure: 3-year model plan

**21 October 2026 · Plan; wave 2 merges not run yet**

## Scope

**Macs only.** "Focus window" = models Apple launched in the last 3 years (from late October 2023). The window rolls forward each October.

| Family | Generations in the window | Launched |
|---|---|---|
| MacBook Air | M3, M4, M5 | Mar 2024, Mar 2025, Mar 2026 |
| MacBook Pro | M3 family, M4 family, M5 family | Nov 2023, Nov 2024, Oct 2025 + Mar 2026 |
| MacBook Neo | A18 Pro | Mar 2026 |
| iMac | M3, M4 | Nov 2023, Nov 2024 |
| Mac mini | M4 / M4 Pro, M6 / M5 Pro | Nov 2024, Sep 2026 |
| Mac Studio | M4 Max / M3 Ultra, M5 Max / M5 Ultra | Mar 2025, Sep 2026 |

The M5, Neo, M6 and Mac Studio M5 dates come from `docs/apple-lineup-2026-09-26.md`. The M3 and M4 dates are Apple newsroom launch months; confirm each against the newsroom when its page is rebuilt (War Room t30).

## Where we are

There are 140 Mac URLs (excluding blog posts):
- **8 hubs:** `/mac-repair-dubai/`, `/macbook-repair-dubai/` and the six family hubs.
- **44 in the focus window:** 43 model pages plus 1 guide at the root (`/macbook-pro-m4-with-thunderbolt-5-and-portable-monitor`).
- **35 family-wide service and problem pages**, e.g. `/macbook-air-battery-replacement-dubai/`, `/mac-mini-no-display-dubai/`, `/imac-screen-repair-dubai/`.
- **53 older-generation model pages:** M2 2023, M1, Intel, Mac Pro.

**The structural problem:** inside each generation we have one page per size or chip variant. These pairs share most of their text, measured on the built pages (6-word overlap):

| Variant pages | Overlap |
|---|---|
| Air 13″ vs 15″ (M3, M4) | 67% |
| Pro 14″ vs 16″ (M3) | 57% |
| Pro 14″ vs 16″ (M4) | 58% |
| Mac mini M4 vs M4 Pro | 61% |
| Mac Studio M4 Max vs M3 Ultra | 54% |

That's the "swap the model name" pattern our rules forbid, and each one competes with its generation page. The M5 versions were merged on 21 Oct (commit 5518eec).

## The target structure (one rule for every Mac)

```
/mac-repair-dubai/                       all Macs
/macbook-repair-dubai/                   all MacBooks (homepage-level hub)
  /{family}-repair-dubai/                family hub: generations newest first,
                                         then "Older models"
    /{family}-{service}-dubai/           family-wide service page (all generations)
    /{family}-{chip}-repair-dubai/       ONE page per generation; size and chip
                                         variants go in a spec table on this page
      /{family}-{chip}-{service}-dubai/  service page for that generation (laptops
                                         only: screen-repair, battery-replacement,
                                         keyboard-repair)
```

**Exceptions we keep (changing them would break existing URLs):**
- **iMac** generation pages use `/imac-24-{chip}-{year}-repair-dubai/`. That's the existing pattern, and the 26 Sep redirects already point `/imac-m1|m3|m4-repair-dubai/` at it.
- **Mac Studio 2025** lives at `/mac-studio-m4-max-2025-repair-dubai/` and becomes the page for both of that year's chips.
- **MacBook Neo** is one family with one generation, so `/macbook-neo-repair-dubai/` is both. Its logic-board page is `/macbook-neo-a18-repair-dubai/`.

## URL counts

### Focus window: 43 model pages become 32

| Family | Generation page | Service pages | Merge into the generation page (301) |
|---|---|---|---|
| MacBook Air | M5, M4, M3 (3) | screen, battery, keyboard × 3 = 9 | 13-m4-2025, 15-m4-2025, 13-m3-2024, 15-m3-2024 (M5 done) |
| MacBook Pro | M5, M4, M3 (3) | screen, battery × 3 = 6 | 14-m4-2024, 16-m4-2024, 14-m3-2023, 16-m3-2023 (M5 done) |
| MacBook Neo | 1 | logic board, screen, battery, keyboard = 4 | — |
| iMac | M4, M3 (2) | — | — |
| Mac mini | M6 (done), M4 (2) | — | m4-2024, m4-pro-2024 → /mac-mini-m4-repair-dubai/ |
| Mac Studio | M5 (done), 2025 (2) | — | m3-ultra-2025 → /mac-studio-m4-max-2025-repair-dubai/ |
| **Total** | **13** | **19** | **11 to merge (wave 2)** |

**New URLs needed today: 0.** Every generation in the window already has its page.

### Whole Mac section after wave 2

140 − 11 = **129 URLs**:
- 8 hubs
- 32 focus-window model pages
- 1 guide
- 35 family-wide service pages
- 53 older-generation pages

### Optional slots (built only when the trigger rule fires)

- MacBook Pro keyboard repair per generation (up to 3).
- Any other generation × service (port, liquid damage, logic board) where Search Console shows demand.

## Rules that keep the structure from breaking

1. **One page per generation.** Never a URL per size, year or chip variant. Variants go in the spec table (`VariantSpecTable`, model data in `src/content/*-models.json`).
2. **New Apple launch = one new URL.** Name it `/{family}-{chip}-repair-dubai/`. Add the model to the JSON, create the route, add a keyword-map row, link it from the family hub (newest first), then run the gates. Apple ships about 4–6 Mac generations a year, so expect about 5 new URLs a year.
3. **Generation service pages (laptops)** only when both are true:
   - Search Console shows 50+ impressions in 28 days for that search group, or a competitor ranks with a dedicated page;
   - we have facts that differ from the previous generation, or a real bench job.

   Otherwise it becomes a section on the generation page.
4. **Desktops get no generation service pages.** Their repairs (no display, not turning on, data recovery, overheating) are owned by the family-wide pages.
5. **One owner per search** (keyword map):

   | Page | Owns |
   |---|---|
   | `/macbook-battery-replacement-dubai/` | "macbook battery replacement dubai" |
   | `/macbook-air-battery-replacement-dubai/` | "macbook air battery replacement" |
   | `/macbook-air-m4-battery-replacement-dubai/` | "macbook air m4 battery" |

   Anchors follow the owner.
6. **Rolling window.** When a generation turns 3 years old (each October), its pages stay live at the same URL, stop getting new service pages, and move under "Older models" on the family hub. **Never delete** a page with clicks or links; merge with a 301 only.
7. **Redirect hygiene.** Merged URLs get a single-hop 301 to a trailing-slash destination in `next.config.mjs`. The redirect-chain gate must pass.
8. **Guides live under `/blog/`.** `/macbook-pro-m4-with-thunderbolt-5-and-portable-monitor` is a guide at the root. Leave it (its URL has history) but put new guides under `/blog/`.

## Order of work

| Step | What | Pages | Owner |
|---|---|---|---|
| Wave 1 | Newest Macs merged (M5 Air/Pro, mini M6, Studio M5) | done, 21 Oct | Claude |
| Wave 2 | Merge the 11 remaining variant pages in the window (Air M3/M4, Pro M3/M4, mini M4, Studio 2025); variant tables on those generation pages | 11 → 0 | Claude |
| t30 | Rebuild every generation page in the window with sourced facts (Apple specs, iFixit, Self Service Repair). Start with iMac M3 vs M4, which share 56% of their text but are different machines | 13 pages | Claude |
| Hubs | Each family hub: generations newest first, an "Older models" group, links to the family-wide service pages | 6 hubs | Claude |
| Monthly | Trigger-rule check for new service pages; check new Apple launches | — | Claude |
| Each October | Roll the window: move the oldest generation to "Older models" | — | Claude |

**Optional later (outside the window):** the same variant pattern exists in the older pages (Air M2 13/15, Pro M2 13/14/16, mini M2/M2 Pro, Studio M2 Max/Ultra, M1 Pro 14/16). They're frozen, so merging them is a tidy-up, not a priority.
