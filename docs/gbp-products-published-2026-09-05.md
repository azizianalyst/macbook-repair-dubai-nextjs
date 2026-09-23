# GBP Products — published 2026-09-05

Module A of the GBP plan. Products were **completely empty** before this; they sit third in the
playbook hierarchy (`Reviews > Services > Products > Posts > Photos`) and above posts, so this
was the highest-value surface still unbuilt.

Eight collections published through the owner panel. Google marks new products `PENDING` for a
short review period — that is normal and not an error.

## What is live

| # | Product | Collection | Landing page (all verified 200) | `utm_content` | Photo |
|---|---|---|---|---|---|
| 1 | MacBook Repair | Mac Repair | `/macbook-repair-dubai/` | `macbook-repair` | `lab/macbook-pro-internals-topdown-dubai.jpg` |
| 2 | Data Recovery | Data Recovery | `/mac-data-recovery-dubai/` | `data-recovery` | `lab/macbook-full-internals-dubai.jpg` |
| 3 | Free Pickup & Delivery | Pickup & Delivery | `/onsite-macbook-repair-dubai/` | `pickup-delivery` | `team/technician-support-call-dubai.jpg` |
| 4 | iPad Repair | iPad Repair | `/ipad-repair-dubai/` | `ipad-repair` | `lab/ipad-on-bench-dubai.jpg` |
| 5 | iMac Repair | Mac Repair | `/imac-repair-dubai/` | `imac-repair` | `lab/imac-internals-teardown-dubai.jpg` |
| 6 | Mac mini & Mac Studio Repair | Mac Repair | `/mac-repair-dubai/` | `mac-mini-studio` | `lab/mac-studio-dubai.jpg` |
| 7 | Business & Corporate Support | Business & Corporate | `/corporate-macbook-repair-dubai/` | `corporate` | `team/team-workshop-dubai.jpg` |
| 8 | Sell or Trade In Your Mac | Sell & Trade In | `/sell-macbook-dubai/` | `sell-trade-in` | `lab/macbook-pro-product-dubai.jpg` |

Every URL carries `?utm_source=google&utm_medium=gbp&utm_campaign=product&utm_content=<above>`,
so year two can be re-weighted from data rather than opinion.

**Six collections**, not eight — iMac and Mac mini/Studio file under **Mac Repair** with the
MacBook product. A collection with one item in it is not a collection.

## Rules applied

- **No prices.** The price field was left empty on all eight, matching the site's hide-prices
  policy. GBP must never carry a figure the site doesn't.
- **Real photographs only.** All eight use real photos from `public/images/real/`. No generated
  or stock imagery — these depict actual work.
- **Claims checked against the live site, not invented.** The corporate description originally
  drafted here promised a loan machine and monthly credit terms; neither appears on
  [CorporateMacBookRepair.tsx](../src/views/CorporateMacBookRepair.tsx), so both were cut. The
  15% multi-device discount was cut too — it is a price claim. What remains (office collection,
  overnight repair, next-morning return, consolidated VAT invoice with serial numbers, direct
  WhatsApp line) is all on the page. The sell/trade-in copy was checked the same way against
  [SellMacBookDubai.tsx](../src/views/SellMacBookDubai.tsx).
- **No "certified" / "authorised" / "genuine Apple parts"** anywhere — the systemic defect found
  across the post archive.

## Gap this closes

The sell/trade-in line had **zero GBP representation** before product 8, despite having its own
money page and being a distinct revenue stream. It now has a collection of its own.

## Still open

- **iPhone Repair** is deliberately **not** published. iPhone was excluded from the services
  reconciliation, but the site has a live `/iphone-repair-dubai/` hub, so the exclusion may have
  been about focus rather than capability. Needs an owner decision before it goes on the profile.
- Apple Watch stays off the profile entirely — the business does not service it.

## Panel technique notes

- The category dropdown **reorders between renders** (most-recently-used first). Screenshot the
  open dropdown before clicking an option; a remembered coordinate picks the wrong category.
- After "Create a new category" the panel *sometimes* scrolls and sometimes doesn't. Screenshot
  before clicking the new field — on one product a blind click missed, and the URL then went into
  the description. Caught before publishing, but only because of the pre-publish screenshot.
- Keep `browser_batch` under ~45 s of waits; longer batches time out mid-sequence and leave the
  panel in an unknown state.
- The same-origin bridge upload works reliably; a thumbnail that looks missing is usually just
  hidden behind the open dropdown overlay or not yet loaded.
