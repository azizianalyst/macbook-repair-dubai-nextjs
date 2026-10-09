# Skill sweep (j11), second run — 2026-10-09 evening

Regression check after today's ~25 page commits (redirect, anchors, 13 truth fixes, quarterly fixes). Local production build.

## Schema
- check:gates 8/8. Store NAP, founding date and hours match the fact sheet.
- **Fixed:** the Organization node on every page named "Azizi Technologies" (an Organization) as founder. The fact sheet says Abdul Aziz is the one and only founder. Now a Person, "Abdul Aziz". Confirmed in the built HTML of all pages that carry it; no page still has the old value. `legalName: Azizi Technologies` stays until the owner answers D3. Commit 64c18dc.
- No rating markup on any page, by design: Google does not show stars for a business's self-collected reviews (Home.tsx explains it). A stale code comment said otherwise; corrected.
- Founder Person markup on /about carries the ACMT credential as a job title, which the fact sheet verifies.

## Internal links
- 663 pages, 0 broken, 1 orphan (/iphone-duo-repair-dubai/, staged until 23 Oct on purpose).
- Old /macbook-air-screen-repair-dubai/ answers 301 to the replacement page.
- Money pages under 10 inbound links: 248 (249 this morning). Hub-to-spoke work is still open (t-inbound-hubs).

## Technical
- robots.txt with Sitemap line, sitemap 200, llms.txt 200, self-referencing canonicals on changed pages.

| Page | Perf | A11y | BP | SEO | CLS |
|---|---|---|---|---|---|
| /about/ | 94 | 100 | 100 | 100 | 0 |
| /blog/why-21-years-experience-matters/ | 86 | 100 | 100 | 100 | 0 |
| /best-apple-repair-dubai/ | 87 | 100 | 100 | 100 | 0 |
| /iphone-17-pro-repair-dubai/ | 89 | 100 | 100 | 100 | 0 |
Performance is measured on a throttled localhost run and is not a gate.

## Visual
6 changed pages × 390 / 768 / 1280 / 1920: no horizontal overflow, one H1 each, no console errors.

## Protected pages
Per D13 (pending), both the old list and the top-10-by-clicks list are treated as protected. Today's only change to a page on either list was wording on the battery and screen pages (j07), which is additive-safe.
