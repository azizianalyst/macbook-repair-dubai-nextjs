# MacBook screen cluster: competing URLs (2026-10-10)

Source: Search Console, last 28 days to 9 Oct (automation/data/gsc-pages-28d-2026-10-09.tsv). War Room task t-screen-consolidate.

## Owners (keyword map)
- `/macbook-screen-repair-dubai/` (protected): 'macbook screen repair dubai'. 271 impr, 2 clicks, pos 8.1.
- `/macbook-pro-screen-repair-dubai/`: Pro screen intents.
- `/macbook-air-screen-replacement-dubai/`: Air screen intents. 292 impr, pos 28.6 (the Air 301 is on the branch, not live).

## What is NOT a problem
- `/how-to-clean-a-macbook-screen/` (215 impr) already 301s to the blog post on the live site; the impressions are left over.
- Model service pages (Air M2/M3/M4, Pro M1-M5) are model intents with 20-90 impressions each.
- `/macbook-screen-repair-near-me-dubai/` (96 impr, pos 70.7) is a separate near-me intent.

## The real spread: 9 MacBook screen cost posts
| URL | Impr 28d | Clicks | Pos |
|---|---|---|---|
| /blog/macbook-screen-repair-cost-dubai-2026/ (all anchors) | ~3,480 across 6 anchors | 0 | 4.0-4.1 |
| /blog/macbook-pro-screen-replacement-cost-dubai/ | 239 | 5 | 16.5 |
| /blog/macbook-air-screen-repair-cost-dubai/ | 75 | 0 | 7.2 |
| /blog/macbook-pro-m5-screen-repair-cost-dubai/ | 57 | 1 | 10.2 |
| /blog/macbook-pro-m2-screen-repair-cost-dubai/ | 45 | 0 | 8.0 |
| /blog/macbook-pro-m1-screen-repair-cost-dubai/ | 40 | 0 | 7.7 |
| /blog/macbook-pro-m4-screen-repair-cost-dubai/ | 34 | 0 | 8.4 |
| /blog/macbook-pro-m3-screen-repair-cost-dubai/ | below 20 | - | - |
| /blog/macbook-pro-intel-screen-repair-cost-dubai/ | below 20 | - | - |

The main cost post ranks 4 with about 3,500 impressions and 0 clicks, the same zero-click pattern
the battery cost post had (fixed 10 Oct, commit 178b595). Eight further cost posts split the same
'how much does a MacBook screen cost' intent by model; under the site rule against model-swapped
pages, they read as scaled content.

## Recommendation (needs the owner: decision D15)
1. Fix the main cost post the way the battery cost post was fixed: answer-first block, a 'what
   decides the cost' table instead of 'Price on request' cells, truth pass, 8-10 FAQs.
2. Merge the 8 model cost posts into the main post as model sections and 301 each URL to its
   section; repoint internal links. Check backlinks first (none of these URLs appear in the
   9 Oct Ahrefs or Search Console link exports).
3. Leave the protected service page untouched apart from additive links.
