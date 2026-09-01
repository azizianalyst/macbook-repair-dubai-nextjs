# Trust claims register — macbook-repair-dubai.ae

Adjudication record for the content-truth audit of 2026-08-31. Every claim class was
scanned; what follows is what was found, what changed, and what still needs an owner
source. Convention per the content-truth-audit skill: a claim with no source gets
removed or neutralised; a claim with a source gets the source recorded here.

## Resolved this audit

| Claim | Was | Now | Basis |
|---|---|---|---|
| Founder | 3 different people: Abdul Aziz (home), Ali ("Founder" byline, 6 posts), Shafiq ("Founder & senior Apple technician", 3 guides) | Abdul Aziz only | Owner confirmed 2026-08-31 |
| Shafiq tenure | 21y (~20 pages), 15y (roster), 12y (3 pages), "since 2008" (2 posts + GBP pack) | 15y everywhere | Roster; owner saw and confirmed roster values |
| Usman tenure / role | 9y, 12y, 14y; "Parts manager + senior iPhone/iPad technician" | 11y; board-level M-series (roster) | Roster |
| Mohammed (14y, 49 pages) & Sayed (12y, 6 pages) | Bylined but absent from About roster | Added to TEAM with the years their pages already published | Owner confirmed real staff 2026-08-31 |
| Shafeeq | Ambiguous — looked like a misspelling of Shafiq with different years | Confirmed separate person; added to TEAM at 12y | Owner confirmed 2026-08-31 |
| ACMT certification | Asserted in a one-off homepage schema node | Attached to Abdul Aziz via the roster | Owner confirmed genuine 2026-08-31 |
| Stale content years | "Dubai 2024/2025: Fix Guide" titles (4) | 2026 | Freshness signal, not a fact claim |
| Prices advertised but not shown | "Full price list", "starting price in seconds", "real AED prices" | Reworded to the quote model | Hide-prices policy |

## Verified true (source recorded)

- **"232+ Google reviews · 5.0" — VERIFIED 2026-09-01.** Google knowledge panel for the correct
  listing (Concord Tower Office #45, Dubai Media City, 055 741 3706, macbook-repair-dubai.ae)
  reads exactly "5.0 · 232 Google reviews". Checked via the site's own sameAs maps link, so this
  is our listing, not the same-name competitor. Re-check quarterly; the store
  (data/seo.json → REVIEW_COUNT) is the one place to update.

- **Founded October 2004 / 21 years / since 2004** — consistent across all 38 occurrences. 21y matches 2004→2026 arithmetic.
- **"Shafiq Ahmed" surname** — attested by a customer review dated 11 Oct 2023 (reviews.ts:200, REVIEWS_LIBRARY.md:1137). Not an invention.
- **FAQ visibility** — FAQAccordion keeps collapsed answers in the DOM (`hidden` attr, not unmount), so FAQPage JSON-LD matches visible text. Google policy: compliant.
- **Internal URL promises** — 220 distinct hrefs in copy, 0 dead against the route table.
- **Placeholders/TODO in shipped views** — none.
- **40,000+ devices** — consistent across all 9 occurrences. Plausible for 21 years (~5/day). No independent source; treat as owner-attested.

## Needs an owner source (open)

| Claim | Where | What would settle it |
|---|---|---|
| **`founder: Azizi Technologies`** (Organization schema, schema.ts:73) | sitewide | Confirm the legal structure: is the business founded/operated by Azizi Technologies with Abdul Aziz as its founder? If yes this is fine alongside the Person nodes; if not, point it at Abdul Aziz. |
| **Mohammed 14y / Sayed 12y / Shafeeq 12y** | roster + bylines | Owner confirmed the people; the year values are the previously published ones, not independently confirmed. Correct in site.ts TEAM if wrong — everything now flows from there. |
| **"about 60 per month" USB-C repairs, "around 80" M5 repairs** | Blog21YearsExperience | Workshop job counts. Plausible; unverifiable here. |

## Rules to keep it true

- `TEAM` in `src/content/site.ts` is the single source of truth for names, years, titles
  and credentials. Never state a technician's tenure in page copy with a literal number
  that can drift — if it must appear, it must match the roster.
- One spelling per person. Shafiq ≠ Shafeeq (two real people); never "Shafeeq" for the lead.
- Exactly one founder: Abdul Aziz. `author={{ role: "Founder" }}` is only valid with his name.
- Review counts come from `data/seo.json` → generated constants, nowhere else. When the
  GBP count changes, update the store, not page copy.
