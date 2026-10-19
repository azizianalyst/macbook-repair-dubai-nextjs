# Repair prices from the POS invoices (UltimatePOS backup), 2026-10-19

**Status: DRAFT for the owner. Nothing here is on the site yet.** CLAUDE.md still says "No AED repair
prices anywhere"; that rule changes only after the owner answers War Room decision **D17**.

Aggregates only. No customer names, phones, emails, addresses, serials, notes or invoice numbers
were copied out of the backup. The scripts that produced every number are in `scripts/pos/`.
They read a read-only copy of the dump, and `extract.py` drops all contact fields before writing
anything.

## Source

| Item | Value |
|---|---|
| Backup | UltimatePOS MariaDB dumps taken 2026-09-13: `~/Claude/crms/azizi-crm/_archive/merge-2026-09-13/dumps/02-accounts.sql` (taxed POS) and `01-appleforce.sql` (holds the "Azizi Without Tax" location). Originals untouched; work done on a read-only copy. |
| Newer data? | `azizi_os.dump` (2026-10-16) is the new in-house OS. It has no sales or invoice tables, so 2026-09-12 is the newest invoice in any backup on this Mac. |
| Window | Last 12 months of the backup: **2025-09-13 to 2026-09-12** |
| Invoices used | Final sales (`type=sell, status=final`) only; drafts, quotations and returns excluded |
| Price per line | What the customer paid: each invoice's final total (after discount, **including VAT**) spread over its lines in proportion to line price. If an invoice total doesn't reconcile with its lines (34 lines), the line price + 5% VAT is used instead. |
| Taxed vs untaxed | Taxed = invoice carries VAT 5% (order tax id 4). Untaxed = no tax, almost all from the "Azizi Without Tax" location. |

### What was kept and dropped (935 invoice lines in the window)

| Dropped | Lines |
|---|---|
| Device sales (used MacBooks, iMacs, iPhones), accessories, Surface parts | 255 |
| Other non-Apple parts and chargers (Surface, HP, Lenovo, Dell) | 96 |
| Repairs on non-Apple devices | 44 |
| Product not a repair (unclassifiable) | 52 |
| Quantity above 1 (trade / bulk part sales) | 23 |
| **Kept: Apple repair lines** | **465** (339 taxed, 126 untaxed) |

How repairs were classified: part lines by their product name ("Display…", "Battery A1964…",
"Keyboard…"); generic "Device Repair" lines by keyword in the job sheet's fault field (logic board /
no power, liquid, charging…), computed inside the script so the text itself is never saved.
Model family comes from the Apple A-number in the part name or the job sheet model.

## Taxed vs untaxed: they are two different businesses

The untaxed invoices are **not** cheaper retail repairs; they are trade part sales. They come from
the "Azizi Without Tax" location, are often multi-line, sometimes quantity 2+, and the prices are
far lower than retail:

- Battery, all MacBooks: taxed median **AED 440** (n 59) vs untaxed **AED 174** (n 24), about 60% lower.
- Screen, all MacBooks: taxed median **AED 1,190** (n 171) vs untaxed **AED 854** (n 70), about 28% lower.
- Screen, MacBook Pro 13" Intel: taxed 1,070 vs untaxed 774. Air M1: 1,129 vs 839.

So the site should use the **taxed** figures only. The untaxed figures are shown below only so the
gap is visible; they should never appear on the site.

## Results (AED, VAT-inclusive for taxed)

"Middle half" = 25th to 75th percentile: half of all invoices fell inside it.

### A. Publishable groups: taxed (VAT-inclusive) invoices, n ≥ 3

| Repair | Model family | Taxed n | Median AED | Middle half (p25–p75) AED | Min–max AED | Untaxed n | Untaxed median AED | Untaxed p25–p75 AED |
|---|---|---|---|---|---|---|---|---|
| Screen replacement | ALL MacBook models | 171 | 1,190 | 1,050–1,890 | 315–4,346 | 70 | 854 | 780–1,166 |
| Screen replacement | MacBook Air 13" M1 (2020) | 40 | 1,129 | 1,011–1,191 | 788–1,365 | 15 | 839 | 780–866 |
| Screen replacement | MacBook Air 13" M2 / M3 / M4 (2022-2025) | 27 | 1,100 | 950–1,340 | 390–2,140 | 17 | 930 | 824–1,425 |
| Screen replacement | MacBook Pro 13" Intel Touch Bar era (2016-2020) | 21 | 1,070 | 892–1,100 | 682–1,208 | 15 | 774 | 750–798 |
| Screen replacement | MacBook Pro 13" M1 / M2 (2020-2022) | 30 | 1,190 | 1,099–1,240 | 840–1,780 | 5 | 890 | 834–945 |
| Screen replacement | MacBook Pro 14" (M1 Pro to M4, 2021-2025) | 29 | 2,194 | 2,063–2,320 | 1,890–2,950 | 5 | 1,923 | 1,764–2,838 |
| Screen replacement | MacBook Pro 16" Apple silicon (2021-2025) | 13 | 2,440 | 2,360–3,615 | 2,031–4,346 | 6 | 2,020 | 1,720–2,076 |
| Screen replacement | MacBook Pro 16" Intel (2019) | 7 | 1,550 | 1,400–1,750 | 1,260–1,750 | – | – | – |
| Battery replacement | ALL MacBook models | 59 | 440 | 390–520 | 262–651 | 24 | 174 | 170–208 |
| Battery replacement | MacBook Air 13" Intel Retina (2018-2020) | 7 | 420 | 380–440 | 362–472 | 2 | 177 | 173–182 |
| Battery replacement | MacBook Air 13" M1 (2020) | 4 | 500 | 478–520 | 478–520 | 3 | 184 | 180–210 |
| Battery replacement | MacBook Pro 13" Intel Touch Bar era (2016-2020) | 24 | 409 | 380–468 | 262–578 | 8 | 166 | 154–173 |
| Battery replacement | MacBook Pro 15" Intel (2016-2019) | 8 | 505 | 440–577 | 400–620 | 3 | 172 | 170–430 |
| Battery replacement | MacBook Pro 16" Intel (2019) | 5 | 620 | 620–651 | 620–651 | 1 | 550 | 550–550 |
| Keyboard replacement | ALL MacBook models | 12 | 545 | 264–568 | 105–970 | 4 | 265 | 145–388 |
| Keyboard replacement | MacBook 12" (2015-2017) | 3 | 230 | 200–368 | 200–368 | – | – | – |
| Keyboard replacement | MacBook Air 13" M1 (2020) | 4 | 550 | 214–867 | 105–970 | – | – | – |
| Keyboard replacement | MacBook Pro 13" M1 / M2 (2020-2022) | 3 | 556 | 540–570 | 540–570 | 1 | 350 | 350–350 |
| Trackpad replacement | ALL MacBook models | 6 | 455 | 361–495 | 340–540 | 4 | 338 | 194–565 |
| Logic board / no-power repair | ALL MacBook models | 12 | 656 | 578–788 | 285–1,380 | 2 | 425 | 312–538 |
| Logic board / no-power repair | MacBook Pro 13" M1 / M2 (2020-2022) | 3 | 750 | 578–800 | 578–800 | – | – | – |
| Liquid damage repair | ALL MacBook models | 5 | 800 | 705–1,318 | 630–1,764 | 1 | 400 | 400–400 |
| Logic board replacement (part) | MacBook Pro 16" Intel (2019) | 3 | 1,780 | 1,670–1,890 | 1,670–1,890 | 2 | 950 | 950–950 |
| General repair (fault not recorded) | Mac (model not recorded) | 15 | 550 | 370–660 | 310–1,176 | 3 | 152 | 100–2,165 |
| General repair (fault not recorded) | MacBook Air 13" Intel Retina (2018-2020) | 5 | 540 | 158–651 | 45–720 | – | – | – |
| General repair (fault not recorded) | MacBook Air 13" M1 (2020) | 4 | 677 | 239–820 | 105–855 | – | – | – |
| General repair (fault not recorded) | MacBook Air 13" M2 / M3 / M4 (2022-2025) | 3 | 864 | 350–900 | 350–900 | – | – | – |
| General repair (fault not recorded) | MacBook Pro 13" Intel Touch Bar era (2016-2020) | 3 | 494 | 472–743 | 472–743 | – | – | – |
| General repair (fault not recorded) | MacBook Pro 13" M1 / M2 (2020-2022) | 6 | 450 | 270–715 | 210–865 | – | – | – |
| General repair (fault not recorded) | MacBook Pro 14" (M1 Pro to M4, 2021-2025) | 9 | 1,100 | 700–1,328 | 450–1,617 | 1 | 547 | 547–547 |
| General repair (fault not recorded) | MacBook Pro 15" Intel (2016-2019) | 3 | 640 | 450–763 | 450–763 | 1 | 450 | 450–450 |
| General repair (fault not recorded) | MacBook Pro 16" Apple silicon (2021-2025) | 5 | 1,438 | 894–1,698 | 370–1,932 | – | – | – |
| General repair (fault not recorded) | MacBook Pro 16" Intel (2019) | 5 | 850 | 635–890 | 520–910 | – | – | – |
| Diagnosis / troubleshooting | Mac (model not recorded) | 4 | 421 | 156–1,693 | 84–2,100 | – | – | – |

### B. Low-confidence groups (fewer than 3 taxed invoices): do not publish

| Repair | Model family | Taxed n | Taxed median AED | Taxed min–max AED | Untaxed n | Untaxed median AED |
|---|---|---|---|---|---|---|
| Screen replacement | Mac (model not recorded) | 0 | – | – | 6 | 1,739 |
| Screen replacement | MacBook 12" (2015-2017) | 1 | 682 | 682–682 | 1 | 790 |
| Screen replacement | MacBook Air 13" Intel (2012-2017) | 1 | 315 | 315–315 | 0 | – |
| Screen replacement | MacBook Air 13" Intel Retina (2018-2020) | 2 | 1,092 | 1,005–1,180 | 4 | 725 |
| Screen replacement | MacBook Air 15" (2023-2025) | 0 | – | – | 1 | 759 |
| Screen replacement | MacBook Pro 15" Intel (2016-2019) | 0 | – | – | 1 | 1,000 |
| Screen replacement | iMac | 1 | 74 | 74–74 | 0 | – |
| Screen replacement | iPad | 0 | – | – | 1 | 600 |
| Battery replacement | MacBook 12" (2015-2017) | 2 | 428 | 385–470 | 0 | – |
| Battery replacement | MacBook Air 13" Intel (2012-2017) | 2 | 345 | 310–380 | 1 | 105 |
| Battery replacement | MacBook Air 13" M2 / M3 / M4 (2022-2025) | 1 | 368 | 368–368 | 1 | 174 |
| Battery replacement | MacBook Air 15" (2023-2025) | 0 | – | – | 2 | 187 |
| Battery replacement | MacBook Pro 13" Intel Retina (2013-2015) | 1 | 420 | 420–420 | 1 | 172 |
| Battery replacement | MacBook Pro 13" M1 / M2 (2020-2022) | 1 | 520 | 520–520 | 0 | – |
| Battery replacement | MacBook Pro 14" (M1 Pro to M4, 2021-2025) | 2 | 451 | 450–452 | 1 | 280 |
| Battery replacement | MacBook Pro 16" Apple silicon (2021-2025) | 2 | 559 | 472–645 | 1 | 233 |
| Keyboard replacement | MacBook Air 13" Intel (2012-2017) | 1 | 550 | 550–550 | 0 | – |
| Keyboard replacement | MacBook Air 13" Intel Retina (2018-2020) | 0 | – | – | 1 | 400 |
| Keyboard replacement | MacBook Air 13" M2 / M3 / M4 (2022-2025) | 1 | 609 | 609–609 | 1 | 133 |
| Keyboard replacement | MacBook Pro 13" Intel Touch Bar era (2016-2020) | 0 | – | – | 1 | 180 |
| Trackpad replacement | MacBook Air 13" M1 (2020) | 1 | 368 | 368–368 | 0 | – |
| Trackpad replacement | MacBook Air 13" M2 / M3 / M4 (2022-2025) | 2 | 480 | 480–480 | 3 | 370 |
| Trackpad replacement | MacBook Pro 13" Intel Touch Bar era (2016-2020) | 2 | 440 | 340–540 | 0 | – |
| Trackpad replacement | MacBook Pro 13" M1 / M2 (2020-2022) | 1 | 430 | 430–430 | 0 | – |
| Trackpad replacement | MacBook Pro 16" Intel (2019) | 0 | – | – | 1 | 157 |
| Logic board / no-power repair | Mac (model not recorded) | 0 | – | – | 1 | 400 |
| Logic board / no-power repair | MacBook Air 13" M2 / M3 / M4 (2022-2025) | 2 | 1,045 | 710–1,380 | 1 | 350 |
| Logic board / no-power repair | MacBook Air 15" (2023-2025) | 1 | 651 | 651–651 | 0 | – |
| Logic board / no-power repair | MacBook Pro 13" Intel Retina (2013-2015) | 1 | 285 | 285–285 | 0 | – |
| Logic board / no-power repair | MacBook Pro 13" Intel Touch Bar era (2016-2020) | 2 | 514 | 368–662 | 0 | – |
| Logic board / no-power repair | MacBook Pro 15" Intel (2016-2019) | 2 | 694 | 578–810 | 0 | – |
| Logic board / no-power repair | MacBook Pro 16" Apple silicon (2021-2025) | 0 | – | – | 1 | 500 |
| Logic board / no-power repair | MacBook Pro 16" Intel (2019) | 1 | 593 | 593–593 | 0 | – |
| Liquid damage repair | MacBook Air 13" M1 (2020) | 1 | 872 | 872–872 | 1 | 400 |
| Liquid damage repair | MacBook Air 13" M2 / M3 / M4 (2022-2025) | 1 | 780 | 780–780 | 0 | – |
| Liquid damage repair | MacBook Pro 14" (M1 Pro to M4, 2021-2025) | 1 | 630 | 630–630 | 0 | – |
| Liquid damage repair | MacBook Pro 16" Apple silicon (2021-2025) | 2 | 1,282 | 800–1,764 | 0 | – |
| Logic board replacement (part) | MacBook 12" (2015-2017) | 1 | 689 | 689–689 | 0 | – |
| Logic board replacement (part) | MacBook Air 13" Intel (2012-2017) | 1 | 704 | 704–704 | 0 | – |
| Logic board replacement (part) | MacBook Air 13" Intel Retina (2018-2020) | 1 | 886 | 886–886 | 0 | – |
| Logic board replacement (part) | MacBook Air 13" M1 (2020) | 0 | – | – | 1 | 1,650 |
| Logic board replacement (part) | MacBook Air 13" M2 / M3 / M4 (2022-2025) | 0 | – | – | 1 | 1,200 |
| Logic board replacement (part) | MacBook Pro 13" Intel Touch Bar era (2016-2020) | 0 | – | – | 1 | 450 |
| Logic board replacement (part) | MacBook Pro 13" M1 / M2 (2020-2022) | 0 | – | – | 1 | 867 |
| Logic board replacement (part) | MacBook Pro 14" (M1 Pro to M4, 2021-2025) | 1 | 3,412 | 3,412–3,412 | 0 | – |
| Logic board replacement (part) | MacBook Pro 15" Intel (2016-2019) | 0 | – | – | 1 | 750 |
| General repair (fault not recorded) | MacBook Air 13" Intel (2012-2017) | 1 | 120 | 120–120 | 1 | 156 |
| General repair (fault not recorded) | MacBook Pro 13" Intel Retina (2013-2015) | 1 | 490 | 490–490 | 0 | – |
| General repair (fault not recorded) | iPad | 1 | 480 | 480–480 | 0 | – |
| Software / OS | Mac (model not recorded) | 1 | 210 | 210–210 | 0 | – |

## What the POS can't price (no or almost no invoices in 12 months)

- **iPhone:** no iPhone repair invoices at all (only new and used iPhone sales). **iPad:** 1 repair.
  **iMac:** 1 screen. **Mac mini:** none (sales only). iPhone and iPad prices can't come from this backup.
- **Data recovery** (1 job), **charging port** (3, no model), **MacBook Air 15"** (no taxed screen or
  battery), **battery on Apple-silicon MacBooks** (Air M2/M3/M4: 1; Pro 14": 2; Pro 16": 2).
- "General repair (fault not recorded)" is a real price band but has no repair type, so it can't
  go on a repair page.

Caveats:
- One range covers every panel grade we sold (A-grade aftermarket, pulled genuine, other).
  The POS doesn't record the grade. So a range is honest, but a single price would not be.
- The newest invoice is 2026-09-12. No 2026 M5 models appear yet.
- A "from AED min" headline would rest on one invoice each time (e.g. screen from AED 315 on a
  2012-2017 Air). The middle-half range is the safer public format.

## Cross-check against the site today (branch `fix/image-content-match`, 66b0001)

**Every AED figure on the site is an Apple price, not ours.** They are all labelled "(Apple list)" or
"AppleCare+" and trace to `docs/apple-prices-ae-2026-10-09.md` (iPhone screen/battery, Mac laptop
battery, AppleCare+ fees, iPhone Duo launch price). So there are no number-vs-number mismatches;
the site shows no shop price at all. Things that do conflict with the invoices or with "no prices":

| # | Where | What it says | Problem |
|---|---|---|---|
| 1 | `/macbook-screen-repair-dubai/` (PROTECTED), `src/views/MacBookScreenRepair.tsx` pricing recap | "see the full per-model price list above" and "All prices in AED, VAT inclusive" | There is no price list on the page. Fix additively by adding the list (if approved), or the line stays wrong. |
| 2 | `src/components/blocks/VsAppleStore.tsx` | "Typical price: Around half of Apple's pricing" | Can't be proven. Apple publishes no MacBook screen price. On battery, Apple lists AED 589–959 + VAT for **current** M5/Neo models; our invoices are for older models (median AED 440 incl. VAT), so it isn't like-for-like. Rewrite to show both real numbers, or remove. |
| 3 | `/blog/iphone-screen-repair-voucher…` | "save 15% off our standard price" | There's no published standard price and no iPhone repair invoices in the POS. Unprovable; belongs in D6. |
| 4 | `blog-posts.ts` (M5 Pro vs Apple Store excerpt) | "our shop costs a fraction of the Apple Store" | Same as #2: no data for M5 screens. |
| 5 | `/terms/` | "All prices … include 5% VAT" | **Consistent** with the taxed invoices. Keep. |
| 6 | `/pricing/` battery row | Ours: "Quote after free diagnosis"; Apple: "AED 589-959 + VAT" | If approved, ours becomes AED 380–577 typical by model (older Intel models; see table A). |

## Proposed site table (only after the owner says yes; taxed n ≥ 5, middle half, VAT incl.)

| Repair | Model family | Typical price (AED, incl. VAT) | Invoices |
|---|---|---|---|
| Screen | MacBook Air 13" M1 (2020) | 1,011–1,191 | 40 |
| Screen | MacBook Air 13" M2 / M3 / M4 | 950–1,340 | 27 |
| Screen | MacBook Pro 13" Intel (2016-2020) | 892–1,100 | 21 |
| Screen | MacBook Pro 13" M1 / M2 | 1,099–1,240 | 30 |
| Screen | MacBook Pro 14" (M1 Pro to M4) | 2,063–2,320 | 29 |
| Screen | MacBook Pro 16" Apple silicon | 2,360–3,615 | 13 |
| Screen | MacBook Pro 16" Intel (2019) | 1,400–1,750 | 7 |
| Battery | MacBook Air 13" Intel Retina (2018-2020) | 380–440 | 7 |
| Battery | MacBook Pro 13" Intel (2016-2020) | 380–468 | 24 |
| Battery | MacBook Pro 15" Intel (2016-2019) | 440–577 | 8 |
| Battery | MacBook Pro 16" Intel (2019) | 620–651 | 5 |
| Logic board / no-power repair | Any MacBook | 578–788 | 12 |
| Liquid damage repair | Any MacBook | 705–1,318 | 5 |
| Trackpad | Any MacBook | 361–495 | 6 |

Left out on purpose: keyboard (264–568 is too wide to be useful, and n is 3–4 per family), and the
Air M1 battery (n 4). Everything else: quote on WhatsApp, as today.
