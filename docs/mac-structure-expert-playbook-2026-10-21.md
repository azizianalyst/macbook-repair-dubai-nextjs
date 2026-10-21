# Expert playbook: running the Mac URL plan without mistakes

**21 October 2026.** Each step of [mac-url-structure-plan-2026-10-21.md](mac-url-structure-plan-2026-10-21.md), written the way a senior SEO would run it: what to check before, what to do, how to verify, what to watch after, and when to roll back.

Sources are Google Search Central documentation (links at the end). Where a point is my judgement rather than Google's, it says so.

---

## What the research changed in our plan

1. **Ship and observe wave 1 before wave 2.**
   - **Google's advice:** move "a low-risk section first" and "one change at a time".
   - **Our status:** wave 1 (11 newest-Mac pages merged, commit 5518eec) is built but **not deployed**.
   - **What to do:** deploy it, watch it for **14–21 days**, and only then run wave 2. If something goes wrong, we find out on 11 pages, not 22.
2. **Keep every redirect for at least a year, ideally forever.**
   - **Google's advice:** "Keep redirects for at least one year"; keeping them indefinitely is also fine.
   - **Rule:** never remove a merge redirect from `next.config.mjs`.
3. **Redirect only to the page that replaces the content.**
   - **Google's advice:** many URLs sent to one *unrelated* page "might be treated as a soft 404", but consolidating several pages into one new page and redirecting them there is explicitly fine.
   - **Our merges:** all variant to generation, same machine, same repairs, so they're correct.
4. **Never bump dates without a real change.**
   - **Google's warning:** changing dates "to seem fresh without substantive change" is a search-engine-first sign.
   - **Rule:** our visible dates and sitemap `lastmod` change only when the content really changes.
5. **Variants on one page is the right call for repair pages (my judgement).**
   - Google's ecommerce guide suggests a URL per product variant with a canonical. That's written for shops, where a size or colour is a separate thing to buy.
   - For repair pages, the doorway policy ("near-duplicate pages") and "minimize the number of alternative URLs" apply. So: one page per generation, variants in a table.

---

## Step A: deploy wave 1 and observe (next)

**Before**
- [ ] Gates green on the commit being deployed (they were on 21 Oct: tsc, build, 8/8 gates, SEO no new issues, 0 broken links, Lighthouse 100 on SEO, a11y and best practices).
- [ ] Note today's baseline for the 4 family pages and the 11 old URLs. Search Console 90 days: the 11 had 3 clicks and 3–55 impressions each. Family pages: Pro M5 4 impressions, Air M5 33, Neo 303.
- [ ] Deploy at a quiet time. Our judgement: late evening Dubai time, not Friday or Saturday daytime.

**Do:** deploy (DEPLOY.md). Then:
- [ ] Live check of all 11 redirects: one 301 to the trailing-slash family page, final 200.
  - Slash-less URLs take one extra trailing-slash hop first, the same as every other redirect on the site.
  - Internal links always use the slash form, so they're single-hop.
- [ ] Live check: the family pages show the spec table, have a self-canonical, and appear in the sitemap. The 11 old URLs are gone from the sitemap.
- [ ] Search Console:
  - resubmit `sitemap.xml`
  - URL Inspection on the 4 family pages, then request indexing
  - URL Inspection on 2 old URLs (should say "Page with redirect")

**Watch (days 1–21)**
- **Search Console, Pages report:** the 11 old URLs move to "Page with redirect". That's expected; sitemap warnings about them are normal for a few weeks.
- **Performance by page:** the 4 family pages should pick up the old pages' queries over 2–4 weeks. Google says rankings can "fluctuate" and moves take "a few weeks or more".
- **Old URLs still showing in results:** they may appear now and then. Google says alternate names "fade away without you doing anything".

**Roll back if:** a family page drops out of the index, or the redirects return errors. Fix the redirect or page. Don't revert the merge unless the content is wrong. Google: use permanent redirects "when you're sure that the redirect won't be reverted".

---

## Step B: wave 2 merges (after 14–21 days of clean wave 1 data)

**Before**
- [ ] Wave 1 passed: family pages indexed, no new errors, impressions holding or rising.
- [ ] Step 0 per URL:
  - Search Console 90-day clicks and impressions
  - top linked pages, plus Ahrefs backlinks once access is back
  - which queries each page gets
- [ ] Confirm each pair really is the same intent. Our check: 54–67% text overlap, same machine. **If a "variant" turns out to be a different repair, keep it and retitle it** (as we did with the Neo logic-board page).
- [ ] Write the mapping table (old → new) in the commit message before touching code.

**Do:** the same method as wave 1:
- [ ] Spec table from the model JSON (Apple facts only).
- [ ] `mergedInto` in the JSON.
- [ ] Remove the routes.
- [ ] 301 in `next.config.mjs` with a comment and date.
- [ ] Repoint every link, including the automatic related-model cards.
- [ ] Delete the per-page meta in `data/seo.json` (back it up first).
- [ ] Keyword map.

**Verify:** tsc, build, gates, check:seo, check:internal = 0 broken; Lighthouse 100 on each changed template; curl every old URL.

**Mistakes to avoid**
- Redirecting a variant to the family *hub* instead of its own generation page. Wrong page = soft-404 risk.
- Leaving an old URL in a sitemap, menu, related card, price table or blog link. The crawl catches it; never skip it.
- Combining wave 2 with the page rebuilds (Step C) in one deploy. One change at a time, so we can tell what moved rankings.

---

## Step C: rebuild the 13 generation pages (t30), one per week or two

This is where we beat competitors. Google's self-assessment is the brief: original information, beyond the obvious, clearly sourced, written or reviewed by an expert, first-hand experience, better than the other results.

**Before each page**
- [ ] Look at the live Google results for "{model} repair dubai" (slowly, a few searches) and the competitor pages there. Note what they cover and what's thin.
- [ ] Collect sourced facts and save the links with the page notes:
  - Apple tech specs and model identification (model numbers)
  - Apple Self Service Repair (which parts are offered, and whether part pairing / system configuration is needed)
  - iFixit teardown and repairability score
- [ ] Collect first-hand material: real bench jobs on this generation, with photos and videos from the team brief. **If we haven't repaired one yet, say so honestly.** Don't invent experience.

**Write**
- [ ] Answer-first block (40–60 words): what we repair on this model, and how to start.
- [ ] Variant table with a source line under it ("Specs: Apple tech specifications, checked {date}").
- [ ] A "what we can and can't repair on this model" section: soldered memory and storage, part pairing, Apple-only parts. Honest limits build trust.
- [ ] Known faults for this generation, only where we have evidence (bench jobs, Apple support notes, credible reports, cited).
- [ ] 8–10 real FAQs, taken from Search Console queries and customer WhatsApp questions, with FAQ schema identical to what's on the page.
- [ ] Named author and reviewer from `TEAM`, plus a visible date.
- [ ] Don't change the URL or the H1 keyword. Title ≤ 60 characters.

**Review (two people)**
- [ ] Supervisor: facts versus sources, truth rules (no "best", no guarantees, no invented numbers, no prices until the prices decision), cannibalisation versus the keyword map.
- [ ] Chief editor: does this page say something the previous generation's page doesn't? If not, it isn't ready.

**Order:** iMac M3 vs M4 first (56% the same today, but different machines), then Pro M4 and M3, Air M4 and M3, then Mac mini M4 and Mac Studio 2025. The newest ones (M5, Neo, M6) last, because repair demand for them is still forming.

**Mistakes to avoid:** padding to a word count; rewording Apple's spec page without adding anything; copying a section from the sibling page and swapping the chip name; changing the date for a small edit.

---

## Step D: family hubs (after wave 2)

- [ ] Each hub lists its generations **newest first** with descriptive anchors ("MacBook Air M4 repair"), then an "Older models" group, then the family-wide service pages.
- [ ] Every page in the window gets at least one in-context link from its hub. Google: each important page should have at least one link, with no generic "read more" anchors, no keyword stuffing and no excessive links.
- [ ] Keep every existing link (additive change); verify with check:internal.

---

## Step E: when Apple launches a new Mac (the repeatable recipe)

1. **Day 0–7:** confirm facts from Apple's newsroom and tech specs. Add the model to the JSON (with sources). Don't publish rumours. Google warns against content that "promises answers that don't exist".
2. **Same week:** **one** generation page `/{family}-{chip}-repair-dubai/`, plus keyword-map row, hub link (newest first), gates and Lighthouse. Variants go in the table. **No** size, year or chip URLs.
3. **No service pages yet.** Add screen, battery or keyboard pages for that generation only when the trigger fires: 50+ impressions in 28 days, or a competitor ranks with a page, **and** we have facts that differ from the previous generation or a real bench job.
4. **When the first real repair happens:** add the bench photos and notes to the generation page. That's when the page becomes better than anyone else's.

## Step F: every October, roll the window

- [ ] Generations older than 3 years move to "Older models" on the hub. Their URLs stay live and nothing is deleted.
- [ ] No new service pages for them. Fix only factual problems.
- [ ] Note the change in the War Room. Recount the URLs (target after wave 2 is 129 Mac URLs; each year adds about 5).

---

## Monitoring dashboard (monthly, in the War Room)

| What | Where | Healthy |
|---|---|---|
| Generation pages indexed | Search Console, Pages report / URL Inspection | All 13 indexed |
| Merged URLs | Pages report → "Page with redirect" | All there, none as 404 |
| Clicks and impressions per generation page | Performance → Pages | Flat or rising after 4 weeks |
| Internal link health | `npm run check:internal` | 0 broken, no new orphans |
| Redirect chains | `npm run check:gates` | Pass |
| Service-page triggers | Performance → Queries filtered by model | Build only when the rule fires |

## Sources

- Google: [Redirects and Google Search](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
- Google: [Site moves with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)
- Google: [Consolidate duplicate URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- Google: [Spam policies (scaled content, doorways)](https://developers.google.com/search/docs/essentials/spam-policies)
- Google: [Creating helpful, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- Google: [Link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- Google: [URL structure for ecommerce sites](https://developers.google.com/search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites)
- Google: [HTTP status codes and soft 404s](https://developers.google.com/search/docs/crawling-indexing/http-network-errors)
- Secondary: [Search Engine Roundtable on redirecting dead pages to the homepage](https://www.seroundtable.com/301-404-pages-to-your-home-page-26923.html)
