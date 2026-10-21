# Monthly review — October 2026 (covers 9 Sep – 9 Oct; run 9 Oct from chat)

**Correction to the 9 Oct weekly report.** It said three of our pages compete for "macbook repair abu dhabi". Two of those rankings belong to macrepair.ae; the Semrush file mixes competitor rows and the filter missed the domain column. There is no Abu Dhabi cannibalisation, and that task is closed.

**Data limits.** Semrush access through hindseo is denied, so there is one ranking snapshot this month (25–26 Sep) and nothing to compare it with. GSC, GA4 and Ahrefs are not connected. The newest GSC export is from 1 Sep. So this review can say what we changed, not what it did to rankings.

## 1. What moved and why

**Rankings: unknown.** Baseline on 26 Sep: Semrush Authority Score 12, 99 referring domains, about 450 ranking keywords, about 60 in the top 10, about 1,300 estimated visits a month. No second reading exists.

**The live site did not move.** Deploy has been blocked since mid-September (Hostinger token, D1). Everything below sits on the work branch, so Google has seen none of it.

**What we changed (77 commits since 9 Sep):**
| Type | Commits |
|---|---|
| Truth fixes | 18 |
| Docs and plans | 11 |
| SEO, links, titles, sitemap | 8 |
| Automation | 7 |
| Accessibility, UI, CSP | 5 |
| Area pages | 4 |
| Other (images, leads/CRM, models, lineup, gates) | 24 |
| **Total** | **77** |
Counted by commit prefix with `git log --since=2026-09-09`.

The month went into the plan (master plan, 6,184-keyword bank, 18 clusters, 6 marked Target), the truth sweep, and the automation that now runs the jobs.

**Leads (website form only):** 2 in the last 7 days, 0 in the 7 before. 8 in the store in total. WhatsApp is not counted.

## 2. Decay list
Cannot be built. It needs pages that dropped for two weeks running, which needs two readings. It will be possible two weeks after Semrush access is restored.

## 3. Refresh and merge plan (for weeks 2–4, all already in the War Room)
**Merges (one owner per intent):**
- ~15 duplicate model URL pairs → 301s (t09).
- Screenshot guide: two of our URLs rank for the same queries, /how-to-take-a-screenshot-on-a-macbook/ and /blog/how-to-take-a-screenshot-on-a-macbook/, at positions 11–14 for "screen shot in mac" (29,000/mo), "screenshot macbook" (16,000/mo) and five smaller terms (semrush-positions-ae-2026-09-25.tsv, our domain only). Merge into the stronger URL with a 301, check backlinks first, repoint links (t-screenshot-dup). Not a protected page.
- "apple product repair": /apple-repair-near-me-dubai/ (#5) and /apple-repair-dubai/ (#8) compete. Pick the owner from keyword-page-map.csv. Neither is protected.
- Duplicate model URL pairs (t09): none of the five protected pages (/, /iphone-screen-repair-cost-dubai/, /macbook-screen-repair-dubai/, the M4-heat post, /sell-macbook-dubai/) may be the side that gets redirected.
- Done this month: the two MacBook Air screen URLs (t23).

**Owner-page rebuilds (Target clusters):**
- /imac-repair-dubai/ (t24), /macbook-battery-replacement-dubai/ (t25): week 2.
- /mac-repair-dubai/ (t27): week 3.
- MacBook Pro and Air hubs (t29): week 4.

**Refreshes:** model pages from 5 to 8–10 FAQs (t35); creative-pros guide to the M5 Max lineup (t-creative-pros-m5); Touch Bar guide (t28); latest-Mac fact check (t30); technical cleanup (t34).

## 4. Plan for November (Mac first; latest iPhones only)
1. Finish the six Target clusters: the four rebuilds above, plus hub-to-spoke links so no Mac money page sits on one inbound link (t-inbound-hubs).
2. iPhone Duo page is staged for 23 Oct on Apple-verified facts only (t15). It goes live only when you say deploy and the token works.
3. Truth sweep continues on Wednesdays: about 75 "guaranteed" occurrences remain (t06).
4. Measure: once Semrush is back, the first real month-on-month comparison lands in the November review.

## 5. Clusters waiting for your decision (12 unmarked)
These stay unmarked until you choose Target, Later or Skip. My recommendation, following the 30 Sep growth plan (Mac first, latest iPhones only, iPad maintain-only):
| Cluster | Volume | Top 10 now | Suggestion |
|---|---|---|---|
| apple · general | 9,660 | 6 | Target, with owner pages per keyword-page-map.csv (/apple-service-center-dubai/ for service-centre terms). Homepage changes additive only, title unchanged. Never imply Apple-authorised. |
| iphone · screen | 9,060 | 11 | Later. Latest-model screen terms are already covered by t15 and the latest-iPhone pages. Never compete with the protected /iphone-screen-repair-cost-dubai/. |
| iphone · general | 7,960 | 4 | Later |
| iphone · battery | 3,890 | 3 | Later. Latest-model battery terms stay on the latest-iPhone pages. |
| laptop · general | 3,580 | 0 | Skip: non-Apple laptops are outside the service list |
| ipad · screen | 2,460 | 1 | Later (maintain-only) |
| iphone · camera | 2,410 | 0 | Later |
| iphone · back glass | 1,300 | 3 | Later |
| ipad · general | 860 | 4 | Later |
| ipad · battery | 720 | 0 | Later |
| laptop · screen | 450 | 0 | Skip |
| iphone · water damage | 310 | 0 | Later |

## 6. Needs you (in order)
1. **Hostinger API token.** A month of work is waiting, and the live homepage's "21 years" is false from 10 Oct.
2. **Renew Semrush on hindseo.** No rankings, no decay list, no comparison until then.
3. **Connect Search Console and authorise Ahrefs** (t04). The protected-page list is still a guess without GSC.
4. **Mark the 12 clusters** in the War Room.
5. Cloudflare: www → apex 301 (t02) and turn off Email Address Obfuscation (t03).
