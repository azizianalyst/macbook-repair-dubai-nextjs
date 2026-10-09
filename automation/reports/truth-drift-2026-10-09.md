# Truth drift scan (j07) — 2026-10-09 (run manually from chat)

Local production build, 640 HTML pages scanned against docs/business-fact-sheet.md and docs/apple-lineup-2026-09-26.md.

## Gate
check:seo before: 98 known debt (94 banned-claim, 1 ai-phrase, 2 meta-too-short), 0 new.
check:seo after: 92 known debt, 6 fixed, 0 new. check:gates 8/8. Lighthouse on 2 changed templates: a11y/BP/SEO 100.

## Fixed (13 commits, one per page, Truth Auditor APPROVED)
- /iphone-17-pro-repair-dubai/: said "current Apple lineup / still current". Discontinued 9 Sep 2026 (lineup doc). iOS 26 → iOS 27.
- /iphone-16e-repair-dubai/: said "current budget iPhone". Discontinued Mar 2026, replaced by 17e.
- /iphone-17e-repair-dubai/: "iOS 26 expected" → runs iOS 27.
- /blog/macbook-back-to-school-dubai: M4 Air labelled "Latest"; M5 is current.
- /blog/how-to-take-a-screenshot-on-a-macbook: "brand-new M4 MacBook Air" → M5.
- /blog/macbook-air-m4-common-problems-dubai: present-tense "in 2025".
- /macbook-pro-m1-battery-replacement-dubai/: "3 to 4 years old in 2025" → 4–5 years in 2026.
- "guaranteed" removed from 6 pages: iPhone battery cost post, best-iPhone-repair, 16 Pro, 16 Pro Max, and the two protected pages (battery, screen: wording only, no section or link removed). The battery page also dropped an unverified "or the repair is free" promise.

## Left as is (not contradictions)
- "21 years" / "15 years on Apple hardware": derived from NAP.founded and the TEAM roster (gate confirms).
- "40,000+ repairs": owner-attested TRUST-CLAIM in the fact sheet.
- "Apple Certified Mac Technician (ACMT)" for Abdul Aziz: a VERIFIED personal credential; the business is never called certified.
- "Apple Authorised" hits are all negations ("we are not…") or refer to Apple's own programmes.
- "guaranteed" inside written-warranty bullets (iPad camera/back glass/Pencil) describes the warranty terms; left for the owner to confirm the exact wording. Remaining "guaranteed" debt: 75 occurrences, mostly in blog prose and customer-quote style lines.

## Needs a fact (War Room task)
- /blog/best-mac-for-creative-pros-dubai compares a refurbished M2 Max with "a new M4 Max" (+25% claim). M4 Max was discontinued Mar 2026; the post needs an M5 Max refresh with sourced numbers.
