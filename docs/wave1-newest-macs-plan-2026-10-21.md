# Wave 1: newest Mac models

**21 October 2026 · Plan only; nothing built yet**

**Models covered** (from docs/apple-lineup-2026-09-26.md):
- MacBook Neo (A18 Pro, Mar 2026)
- MacBook Air M5 13″/15″ (Mar 2026)
- MacBook Pro 14″ M5 (Oct 2025)
- MacBook Pro 14″/16″ M5 Pro and M5 Max (Mar 2026)
- Mac mini M6 / M5 Pro (Sep 2026)
- Mac Studio M5 Max / M5 Ultra (Sep 2026)

iMac M4 (2024) is still current and already has one solid page.

## What we found

1. **We already have the pages.** For these models the site has 26 model and service pages plus about 15 blog posts. Competitors have almost none: mactechpro.ae has a few battery pages and one "new MacBook Pro M5" page, and prabhatmaccare has one Neo page. Wave 1 is not about building more pages.
2. **Very little demand yet.** Search Console (28 days to 18 Oct) shows 34 queries, 802 impressions and 9 clicks across all of these models. Most are not repair searches:

   | Query | Impressions | Our position |
   |---|---|---|
   | "macbook neo price" | 301 | 10.9 |
   | "m5 transistor count" and similar | about 180 | 4–8 |
   | "macbook air m5 problems / issues" | 35 | — |
   | "macbook pro m5 screen replacement cost" | 13 | — |
   | "macbook pro m5 not turning on" | 13 | — |
   | "macbook neo caps lock not working" | 13 | — |

   New Macs are under Apple warranty, so repair searches grow over the next 1–3 years.
3. **The variant pages are near-duplicates.** Each pair shares 55–68% of its text (6-word overlap, measured on the built pages):

   | Variant pages | Overlap |
   |---|---|
   | Air 13 M5 vs Air 15 M5 | 65% |
   | The five MacBook Pro M5 variants (14 M5, 14 M5 Pro, 14 M5 Max, 16 M5 Pro, 16 M5 Max) | 55–63% with each other |
   | Mac mini M6 vs M5 Pro | 66% |
   | Mac Studio M5 Max vs M5 Ultra | 68% |

   This is the "swap the model name" pattern our rules forbid. Each variant page also competes with its own family page (e.g. `/macbook-pro-m5-repair-dubai/`). That splits the little authority these models have, and it's a likely reason the keyword map marks the family pages "not ranking".
4. **The family pages already hold real facts:**
   - model numbers A3426–A3429 and A3434 on the MacBook Pro M5 page
   - the 52.6 Wh battery on the Air M5 page
   - iFixit and soldered-part notes on the Neo page
   - honest "which models can be upgraded" guidance on the Mac mini RAM and SSD pages

## Wave 1 plan

### Step 1: one strong page per family (merge 12 overlapping pages)

| Merge these (301) | Into this family page | What moves across |
|---|---|---|
| /macbook-air-13-m5-2026-repair-dubai/, /macbook-air-15-m5-2026-repair-dubai/ | /macbook-air-m5-repair-dubai/ | A 13″ vs 15″ table: display, battery Wh, speakers, model number |
| /macbook-pro-14-m5-2025-repair-dubai/, /macbook-pro-14-m5-pro-2026-repair-dubai/, /macbook-pro-14-m5-max-2026-repair-dubai/, /macbook-pro-16-m5-pro-2026-repair-dubai/, /macbook-pro-16-m5-max-2026-repair-dubai/ | /macbook-pro-m5-repair-dubai/ | A variant table (size, chip, model number, battery, display) plus anything unique on each page |
| /mac-mini-m6-2026-repair-dubai/, /mac-mini-m5-pro-2026-repair-dubai/ | /mac-mini-m6-repair-dubai/ | M6 vs M5 Pro differences (ports, cooling, memory options) |
| /mac-studio-m5-max-2026-repair-dubai/, /mac-studio-m5-ultra-2026-repair-dubai/ | /mac-studio-m5-repair-dubai/ | Max vs Ultra differences |
| /macbook-neo-a18-repair-dubai/ (check first) | /macbook-neo-repair-dubai/ | Its board-level and liquid damage content, as a section |

**Before merging:**
- Pull Search Console page data and Ahrefs/GSC backlinks for each variant page. Any page with real clicks or links keeps its content in the family page, and the 301 preserves it.
- Repoint every internal link and anchor to the family page.
- Update `docs/keyword-page-map.csv` (one owner per intent).
- Redirects go in the generated redirect list (no chains).

None of these are protected pages.

**Keep as they are:** the separate screen, battery and keyboard pages for Neo, Air M5 and Pro M5. Those are different repairs with different search wording, not swapped names.

### Step 2: make each family page the best page on the web for that model (War Room t30)

Facts only from apple.com/ae, Apple Support (tech specs, model identification, Self Service Repair) and iFixit teardowns, each with its source:
- Model numbers, sizes, chip variants, ports, battery Wh, display type, and memory/storage options (soldered or not).
- Repairability: how the battery is held (adhesive vs pull tabs), whether the screen is a full assembly, what is soldered, whether Apple Self Service Repair covers the model.
- "What we can and can't repair on this model" in plain words. If a part needs Apple's system configuration (pairing), say so.
- First-hand bench notes and real photos once we've repaired one; never before. The team brief covers photos and videos.
- An answer-first block, 8–10 real FAQs, a named author and a visible date (page standard).

### Step 3: capture the demand that exists today

- **"macbook neo price" (301 impressions, #10.9):** give it one owner (`/blog/macbook-neo-worth-buying-2026`) with Apple's UAE retail price from the lineup doc and its source. This is Apple's selling price, not a repair price.
- **"m5 transistor count" (about 180 impressions):** add the sourced figures to `/blog/m5-chip-explained-vs-m4`.
- **Repair questions already showing:**
  - "macbook air m5 problems" → `/blog/macbook-air-m5-common-problems-dubai`
  - "macbook pro m5 not turning on" → `/blog/macbook-pro-m5-not-turning-on-dubai`
  - "macbook neo caps lock not working" → a section on the Neo keyboard page

  Check each answers the query first.

### Step 4: rule for any new model page from now on

Build a new page for a model × service only when **both** of these are true:
1. Search Console shows that search group reaching 50+ impressions in 28 days (or a competitor ranks with a dedicated page), **and**
2. we have facts that differ from the neighbouring model (part, procedure, time, a known fault) or a real bench job to show.

Otherwise it becomes a section on the family page. This is how we stay first on new models without building thin pages.

## Order and owners

| When | What | Owner |
|---|---|---|
| Week 1 | Pull GSC page data and backlinks for the 12 variant pages; merge them (Step 1); gates; one commit per family | Claude |
| Week 2 | Rebuild the 5 family pages with sourced facts (Step 2, t30) | Claude; supervisor review |
| Week 3 | Step 3 query owners and sections | Claude |
| Ongoing | Photos and videos from real jobs on these models | Repair team |
| Monthly | Check Step 4 triggers in Search Console | Claude |

## What this changes

- **Pages:** 26 model/service pages become 14 stronger ones: 6 model pages (5 family pages + iMac M4) and 8 service pages.
- **Authority:** no page competes with its own family page.
- **Readiness:** when repair searches for these models grow, the page that owns each one already has the most facts and real evidence.

This is a plan for Wave 1 Macs only. The iPhone wave (18 Pro, Duo, Air, 17) has its own map in the War Room report `model-url-map-2026-10-21`.
