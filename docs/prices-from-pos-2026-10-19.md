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

## Update 2026-10-19 (owner request): prices per Apple model number

The owner asked for prices by model number (A-number) for more accurate client information, labelled with Apple's model names (apple.com/mac).
Same rules as above: taxed invoices only, middle half, incl. VAT, **5+ invoices per row**. A model number with 5+ invoices gets its own row;
the remaining models of that family get one combined row only if together they have 5+ invoices. Battery lines whose invoice names only
the battery part number (not the laptop) can't be tied to one model, so they stay in family rows. This **replaces** the 14-row table above
as what the site shows (`src/content/repair-prices.json`, written by `scripts/pos/publish.py`).

| Repair | Model (Apple name) | Model number(s) | Typical price AED incl. VAT | Invoices | Median |
|---|---|---|---|---|---|
| Screen replacement | MacBook Air (M1, 2020) | A2337 | 1,011–1,191 | 40 | 1,129 |
| Screen replacement | MacBook Air (13-inch, M2, 2022) | A2681 | 949–1,305 | 18 | 999 |
| Screen replacement | MacBook Air (13-inch, M3, 2024) | A3113 | 973–1,370 | 6 | 1,161 |
| Screen replacement | MacBook Pro (13-inch, 2019, Two Thunderbolt 3 ports) | A2159 | 1,092–1,168 | 6 | 1,100 |
| Screen replacement | MacBook Pro (13-inch, M1, 2020) and (13-inch, M2, 2022) | A2338 | 1,099–1,240 | 30 | 1,190 |
| Screen replacement | MacBook Pro (14-inch, 2021), M1 Pro or M1 Max | A2442 | 1,961–2,291 | 12 | 2,110 |
| Screen replacement | MacBook Pro (16-inch, Nov 2023), M3 Pro or M3 Max | A2991 | 2,055–2,490 | 5 | 2,380 |
| Screen replacement | MacBook Pro (16-inch, 2019) | A2141 | 1,400–1,750 | 7 | 1,550 |
| Battery replacement | MacBook Pro (13-inch, 2018 and 2019, Four Thunderbolt 3 ports) | A1989 | 419–488 | 8 | 451 |
| Battery replacement | MacBook Pro (16-inch, 2019) | A2141 | 620–651 | 5 | 620 |
| Screen replacement | Other MacBook Pro 13-inch Intel (2016 to 2020) | A1706, A1708, A1989, A2251, A2289 | 811–1,073 | 14 | 980 |
| Screen replacement | MacBook Pro 14-inch, M2 Pro to M4 (2023 and 2024) | A2779, A2918, A2992, A3112, A3185, A3401 | 2,154–2,426 | 12 | 2,195 |
| Battery replacement | Other MacBook Pro 13-inch Intel (2016 to 2020) | A1706, A1708, A2159, A2251, A2289 | 368–410 | 16 | 395 |
| Battery replacement | MacBook Air 13-inch Intel Retina (2018 to 2020) | A1932, A2179 | 380–440 | 7 | 420 |
| Battery replacement | MacBook Pro 15-inch Intel (2012 to 2019) | A1398, A1707, A1990 | 440–577 | 8 | 505 |
| Logic board / no-power repair | Any MacBook | any | 578–788 | 12 | 656 |
| Liquid damage repair | Any MacBook | any | 705–1,318 | 5 | 800 |
| Trackpad replacement | Any MacBook | any | 361–495 | 6 | 455 |

What changed against the 14-row table:
- Air M2/M3/M4 screen (950–1,340) split into A2681 M2 (949–1,305) and A3113 M3 (973–1,370). **Air M4 (A3240) has 2 invoices: now quoted on WhatsApp.**
- 16-inch Apple-silicon screen (2,360–3,615) mixed models: A2991 M3 Pro/Max is 2,055–2,490, while the M4 Pro A3403 ran 3,288–3,900 (4 invoices, too few to publish). **16-inch M1/M2/M4 screens are now quoted.**
- 14-inch screen split into A2442 M1 Pro/Max (1,961–2,291) and M2 Pro to M4 (2,154–2,426).
- Pro 13-inch Intel screen and battery each split out one model (A2159 screen, A1989 battery) plus an 'other models' row.
- The 15-inch Intel battery row also contains A1398 (2012-2015), so its label now says 2012 to 2019.

Pages: hubs show every row for their repair; each model page shows only its own model's rows; a model page with no row (e.g. Air M4 screen) shows no table.

## Update 2026-10-21 (owner): one price per model, not a range

The owner found that a range reads as a starting price to clients and asked for one price per model, as close to the real price as possible.
The site now shows the **median** invoice (half of customers paid less, half paid more), incl. VAT, with one line that the final price follows the free diagnosis.
Not used: the lowest invoice as a 'from' price. It rests on a single job and most customers would pay more, which breaks the truth rule.

| Repair | Model | Model number(s) | Typical price shown (AED, incl. VAT) | Invoices |
|---|---|---|---|---|
| Screen replacement | MacBook Air (M1, 2020) | A2337 | 1,129 | 40 |
| Screen replacement | MacBook Air (13-inch, M2, 2022) | A2681 | 999 | 18 |
| Screen replacement | MacBook Air (13-inch, M3, 2024) | A3113 | 1,161 | 6 |
| Screen replacement | MacBook Pro (13-inch, 2019, Two Thunderbolt 3 ports) | A2159 | 1,100 | 6 |
| Screen replacement | MacBook Pro (13-inch, M1, 2020) and (13-inch, M2, 2022) | A2338 | 1,190 | 30 |
| Screen replacement | MacBook Pro (14-inch, 2021), M1 Pro or M1 Max | A2442 | 2,110 | 12 |
| Screen replacement | MacBook Pro (16-inch, Nov 2023), M3 Pro or M3 Max | A2991 | 2,380 | 5 |
| Screen replacement | MacBook Pro (16-inch, 2019) | A2141 | 1,550 | 7 |
| Battery replacement | MacBook Pro (13-inch, 2018 and 2019, Four Thunderbolt 3 ports) | A1989 | 451 | 8 |
| Battery replacement | MacBook Pro (16-inch, 2019) | A2141 | 620 | 5 |
| Screen replacement | Other MacBook Pro 13-inch Intel (2016 to 2020) | A1706, A1708, A1989, A2251, A2289 | 980 | 14 |
| Screen replacement | MacBook Pro 14-inch, M2 Pro to M4 (2023 and 2024) | A2779, A2918, A2992, A3112, A3185, A3401 | 2,195 | 12 |
| Battery replacement | Other MacBook Pro 13-inch Intel (2016 to 2020) | A1706, A1708, A2159, A2251, A2289 | 395 | 16 |
| Battery replacement | MacBook Air 13-inch Intel Retina (2018 to 2020) | A1932, A2179 | 420 | 7 |
| Battery replacement | MacBook Pro 15-inch Intel (2012 to 2019) | A1398, A1707, A1990 | 505 | 8 |
| Logic board / no-power repair | Any MacBook | any | 656 | 12 |
| Liquid damage repair | Any MacBook | any | 800 | 5 |
| Trackpad replacement | Any MacBook | any | 455 | 6 |

## Update 2026-10-21 (owner): part-only screen price next to the fitted price

The owner asked to use the part-only (untaxed, B2B) invoices to show a lower screen figure, and confirmed that **any customer can buy the screen part alone at that price**.
Shown as: "AED 1,129 fitted" with "Part only AED 881" underneath. Part price = median of part-only invoices for that model (5+ needed), **plus 5% VAT** because a walk-in purchase carries VAT and every site price is VAT-inclusive.
Not shown: a fitting/labour charge. Fitting = total minus part would mix medians from different jobs; for the Air M2 it came out at AED 91, which is not a real labour price. If the owner gives a real fitting charge it can be added.
Not done: setting prices 'below competitors'. There is no competitor price data in this project, so any such figure would be invented.

| Model | Fitted (typical, incl. VAT) | Part only (typical, VAT added) | Part-only invoices |
|---|---|---|---|
| MacBook Air (M1, 2020) | 1,129 | 881 | 15 |
| MacBook Air (13-inch, M2, 2022) | 999 | 908 | 12 |
| MacBook Pro (13-inch, M1, 2020) and (13-inch, M2, 2022) | 1,190 | 934 | 5 |
| Other MacBook Pro 13-inch Intel (2016 to 2020) | 980 | 819 | 10 |

## Update 2026-10-21: part grades on the invoices, and where the site can cause client conflict

How the grade was read: from each invoice line's note and product name, classified inside `scripts/pos/extract.py`
(only the class is kept; note text is never saved). Phrases counted from a fixed list of repair words, so no
names can appear. Most common wording on invoices (2 years, all lines): "brand new" 60, "pullout original" 28,
"new battery" 16, "new OEM" 15, "original used" / "used original" 17, "apple original" 11. "Refurbished",
"A/B grade" and "copy" almost never appear.

Last 12 months, MacBook screen and battery lines:

| | Grade not stated | Original pull-out (used) | "Original" | OEM | "Brand new" (grade not stated) |
|---|---|---|---|---|---|
| Screens, VAT invoices | 132 | 25 | 6 | 4 | 4 |
| Screens, part-only invoices | 64 | 4 | 0 | 1 | 1 |
| Batteries, VAT invoices | 50 | 2 | 0 | 1 | 6 |

Where the grade is stated, original pull-outs cost more than the unstated majority (VAT invoices, medians):
Pro 13" M1/M2 A2338 1,700 vs 1,180 (n 3 vs 27); Air M2 A2681 1,232 vs 997 (n 2 vs 15); Pro 14" A2442 2,445 vs 2,100
(n 2 vs 9); Air M1 A2337 1,150 vs 1,123 (n 5 vs 31). Too few per model (2-5) to publish a price per grade.

Conclusion: the published "typical" prices are mostly the unstated (standard) grade mixed with some pull-outs.
A price per grade needs the grade written on every invoice line from now on.

Site wording that contradicts itself (client-conflict risk, needs one owner decision):
- `/warranty/`: screens 15 days (aftermarket) to 3 months (genuine).
- `/macbook-pro-screen-repair-dubai/`: every panel, genuine or A-grade aftermarket, 90 days.
- `/terms/`: aftermarket parts carry the same warranty of up to 12 months as genuine.
- Fact sheet: screens 90 days (no grade split).
- Grade names vary across ~43 pages ("A-grade aftermarket", "OEM-spec", "Tier 3 aftermarket", "genuine pull-out"),
  while invoices say "brand new", "new OEM", "pullout original", "apple original".

## Competitor check, 2026-10-21 (pages read by a research agent; prices as written on their sites)

| Competitor | Air M1 (A2337) screen | Battery | Grade wording | VAT |
|---|---|---|---|---|
| ITtech4all | AED 768 (+ AED 150 labour?) | – | "Original Mac Screens" | not stated |
| MacTech Pro | AED 850 (another page: A2338 1,050–1,150 vs 950 on list) | A2337 AED 330–440 | "original Apple panel" / "genuine-grade OEM" | not stated |
| MacBook Repairs Dubai | AED 899 | – | "high-quality parts" | not stated |
| RepairZone | AED 1,100 "on average" | – | "high quality OEM" | not stated |
| My Celcare | AED 1,470 | – | "genuine-quality", "OEM" | "+ VAT" in a popup |
| Fixerman | "From AED 349" | "From AED 249" | "original-grade", "OEM Grade" | not stated |
| Celmetro | – | "from 450 AED" | "OEM battery" (90-day warranty) | **includes VAT** |
| Apple Mac Solutions | – | Air M1 400, Pro 13 M1 540 | "genuine Apple parts" | not stated |
| **Us (VAT invoices)** | **AED 1,129 fitted, part only AED 881, incl. VAT** | Pro 13" A1989 AED 451 | to be fixed (see above) | **incl. VAT** |

Takeaways: the same A2337 screen is listed at AED 768-1,470; most competitors don't say whether VAT is included, so our VAT-inclusive
figure is ~5% higher on paper; nobody publishes a price per grade or defines grades; several contradict themselves across pages
(price and warranty); "from AED 99/249/349" headlines don't match real jobs. Sources: see the session report.
