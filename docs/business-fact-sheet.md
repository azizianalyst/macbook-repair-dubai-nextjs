# Business fact sheet — macbook-repair-dubai.ae

Created 2026-09-26. **Only VERIFIED facts may appear on the site, in schema, on GBP or in outreach.**
UNVERIFIED items stay off the site until the owner gives a source. When a fact changes, update the
source of truth named in the table first (never page copy), then this sheet.

Sources of truth in the repo: `data/seo.json` → `src/content/business.generated.ts` (NAP, hours, reviews),
`src/content/site.ts` (warranty, team, USPs), `TRUST-CLAIMS.md` (adjudication log).

## Identity and contact

| Fact | Value | Status | Source |
|---|---|---|---|
| Brand name | MacBook Repair Dubai | VERIFIED | GBP listing + site, checked 2026-09-01 (TRUST-CLAIMS) |
| Address | Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City, Dubai, UAE | VERIFIED | GBP knowledge panel 2026-09-01 |
| Phone / WhatsApp | 055 741 3706 · +971557413706 · wa.me/971557413706 | VERIFIED | GBP knowledge panel 2026-09-01 |
| Email | info@macbook-repair-dubai.ae | VERIFIED | Admin business store |
| Hours | Mon–Thu & Sat 9 am–7 pm; Fri 9 am–12 pm and 2 pm–7 pm; Sunday closed | VERIFIED | Google Business Profile, updated by the owner 2026-10-15 |
| Founded | 10 October 2004 (tenure is computed, never hard-coded) | VERIFIED | Owner; consistent across 38 occurrences |
| Founder | Abdul Aziz (exactly one founder) | VERIFIED | Owner 2026-08-31 |
| Legal operator | "Azizi Technologies" appears as Organization `founder` | UNVERIFIED | Open in TRUST-CLAIMS; owner decision D3 |
| Status vs Apple | **Independent repair shop. Never "Apple Authorised" or "Apple Certified" as a business.** | VERIFIED | Owner |
| Socials | facebook.com/macbookrepairdubai.ae · instagram.com/azizitechnologies · youtube.com/@AziziTechnologies | VERIFIED | Admin business store |

## Reviews

| Fact | Value | Status | Source |
|---|---|---|---|
| Google rating | 5.0 | VERIFIED | GBP panel 2026-09-01 |
| Google review count | 232 | VERIFIED | GBP panel 2026-09-01. The master plan cites 236 (not yet re-checked). Re-check quarterly; update only `data/seo.json` |

## People (E-E-A-T)

| Person | Role | Status |
|---|---|---|
| Abdul Aziz | Founder; Apple Certified Mac Technician (ACMT), a personal credential | VERIFIED (owner 2026-08-31) |
| Shafiq (Ahmed) | Lead technician, 15 years | VERIFIED person; years from the roster |
| Usman | Board-level repair, 11 years | VERIFIED person; years from the roster |
| Ali | Data recovery, 14 years | VERIFIED person; years from the roster |
| Hamza | iPhone and iPad, 7 years | VERIFIED person; years from the roster |
| Mohammed | Mac desktop repair, 14 years | VERIFIED person; **years UNVERIFIED** |
| Sayed | macOS software, 12 years | VERIFIED person; **years UNVERIFIED** |
| Shafeeq (≠ Shafiq) | iPad repair, 12 years | VERIFIED person; **years UNVERIFIED** |

## Services and policies

| Fact | Status | Source |
|---|---|---|
| Repairs for MacBook, iMac, Mac mini, Mac Studio, Mac Pro, iPhone and iPad; data recovery | VERIFIED | Owner; the site's service set |
| **No** in-house Apple Watch or AirPods repair | VERIFIED | Owner 2026-09-01 |
| MacBook buy-back and trade-in only (no iPhone buy-back) | VERIFIED | Owner; D2 is still open |
| Warranty: hardware up to 12 months; MacBook screens by grade (owner 2026-10-21): 3 months original pull-out (standard screen) and Apple original, 15 days new OEM and brand new (aftermarket), source `src/content/part-grades.ts`; battery 3 months (80% capacity guarantee on MacBook and iPhone only); keyboard, software, board, liquid and data work 15 days | VERIFIED | `site.ts` WARRANTY |
| Free diagnosis; no fix, no charge | VERIFIED (owner-attested) | Sitewide USPs |
| Free pickup and delivery (courier collection) | **DISCONTINUED** (owner, 2026-10-15). Never offer pickup, collection or delivery anywhere on the site. | Owner instruction in chat |
| Onsite repair (technician visits the customer) | VERIFIED, now a **paid** service (owner, 2026-10-15). Never call it free and never print a price; the charge is quoted on WhatsApp. Walk-in at Concord Tower is the main option. | Owner instruction in chat |
| Getting here (public transport) | Nearest stop: **Palm Jumeirah tram stop**, about a 3-minute walk. Nearest Metro: **Al Fardan Exchange** (Red Line, formerly Nakheel / Al Khail), about a 15-minute walk. From elsewhere on the Red Line, change to the tram at Sobha Realty (formerly Dubai Marina) or DMCC. There is **no "Media City Metro" station**: never write it. | RESEARCHED 2026-10-15 (Moovit, PropertyDigger, Gulf News/RTA renaming records); owner asked for research |
| Send by courier (customer-booked) | VERIFIED (owner, 2026-10-15). Inside Dubai: the customer books any same-day courier app, hands the device over and WhatsApps us the tracking link. It is the fastest option if they can't visit. From Abu Dhabi and the other emirates: the customer books a courier, which takes longer (not same-day). Return, anywhere: we can book the courier to send the device back (owner, 2026-10-15); the customer can also collect it. No courier price is quoted on the site; the return is arranged on WhatsApp. | Owner instruction in chat |
| Screen grades | VERIFIED (owner 2026-10-21): four names, as on invoices: Original pull-out (used genuine) = standard screen, Apple original (new), New OEM, Brand new (aftermarket). Invoices without a grade are pull-outs, so typical screen prices are for that grade. | Owner in chat |
| Price terms | VERIFIED: every quoted price is all-in (part, fitting, 5% VAT, card fees, and any booked onsite visit or return courier). Cash payment gets 2.5% off the quoted price. Text lives in `PRICE_TERMS` (`src/content/repair-prices.ts`). | Owner instruction in chat, 2026-10-21 |
| Repair prices | VERIFIED for the 18 rows in `src/content/repair-prices.json` only (per Apple model number where it has 5+ invoices, else per family): ONE typical price per row = the median of taxed (VAT 5%) POS invoices, 2025-09-13 to 2026-09-12, incl. VAT (owner, 2026-10-21; ranges dropped). Screen rows with 5+ part-only invoices also show "Part only" (median part-only sale, VAT added): the owner confirmed any customer can buy the screen part alone at that price (2026-10-21). Single source: `src/content/repair-prices.json`. Everything else (all iPhone, iPad, iMac, Mac mini, data recovery, keyboard, newer-MacBook batteries) stays quote-on-WhatsApp. No prices in titles or meta. The old admin price store (`/admin/prices`, single 'from' figures) is NOT verified and stays hidden. | Owner decision D17 (2026-10-19); `docs/prices-from-pos-2026-10-19.md` |
| 40,000+ devices repaired | Owner-attested, not independently verifiable | TRUST-CLAIMS |

## UNVERIFIED claims that are currently live (owner decision D6)

These break the standing rule "unverified claims never go on the site". Each needs a yes with a source,
or it gets removed.

| Claim | Reach |
|---|---|
| Free loaner MacBook for repairs over 2 hours | Sitewide USP strip + homepage FAQ |
| "30-minute repair by appointment, or it's free" | 7 files, including the footer |
| "WhatsApp answered 24/7" / "24/7 support" (hours are Mon–Sat 9–7) | Homepage |
| "30-day money-back" on unlock services | iPhone unlock pages |
| Job counts (5,200+ batteries, 3,400+ screens, 2,100+ keyboards, per-tech counts) | About 6 pages |
| "Quote in 4 minutes" (225 pages) vs "written quote within 4 hours" (56 area pages) | Sitewide |
