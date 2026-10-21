# Indexing Recovery Plan — 257 "Discovered, Never Crawled" Pages

_Created: 2026-06-19. Branch: `seo-recovery-schema-cwv`._

---

## 1. What the GSC signal actually means

**"Discovered – currently not indexed / Last crawled: N/A"** is the worst-case crawl state:
Google has received a URL (from the sitemap or an inbound link), put it in the crawl queue, but
**has never dispatched a crawler to fetch it.** This is not a content-quality rejection — Google
hasn't seen the content yet. It's a **crawl budget starvation** problem: Google's scheduler
decided these pages weren't worth the crawl cost given the domain's current authority.

The peak was ~375 pages in late March 2026, now down to 257. That's ~120 pages crawled and indexed
in 90 days (~1.3/day). At this rate, the remaining 257 pages would take ~197 days. This plan
accelerates it to weeks.

---

## 2. Root causes (ranked by impact)

### A. Low crawl budget allocation — the primary cause
Crawl budget is proportional to **domain authority** (PageRank-like signals from quality external
backlinks) and **server speed**. Post-WordPress migration, the domain's link graph was disrupted:
old WordPress URLs 301ed to new Next.js routes, backlinks may be resolving through 301 hops,
and the domain is rebuilding its crawl credit. Google allocates more crawl budget to domains with
more and better external links.

### B. Crawl budget dilution — solved by this plan
350+ pages on a recovering domain means every thin page steals a slot from a money page. The
current sitemap submits 5 tag listing pages + /cookies + all 350 routes simultaneously to
Googlebot's scheduler. Removing the lowest-value entries forces budget toward money pages.

### C. Misleading `changefreq` signals — solved by this plan
Blog posts declared as `changefreq: "weekly"` signal that posts change every week, causing
Googlebot to re-queue them (and waste slots re-crawling unchanged content). `monthly` is correct
and frees budget for un-crawled pages.

### D. Internal link equity — already fixed (§3 of seo-recovery-internal-linking-and-gaps.md)
The June 2026 internal linking upgrade achieved: 0 orphans, min 3 inbound contextual links for
iPhone services, min 4 for guides, blog→money-page links up from 0% to 8%. Internal links are
resolved.

### E. No manual indexing requests — gap
Google Search Console URL Inspection allows ~10 manual "Request Indexing" submissions per day.
For our most important money pages, this bypasses the scheduler entirely.

---

## 3. Fix inventory (priority-ordered)

### Priority 1 — Remove thin pages from sitemap → stops crawl budget waste TODAY

| Page | Why remove | Action |
|---|---|---|
| `/blog/tag/ipad`, `/blog/tag/mac`, `/blog/tag/macbook`, `/blog/tag/iphone`, `/blog/tag/imac` | Thin listing pages — identical structure to categories but tag-filtered. No unique content. 5 URLs consuming crawl slots that should go to service pages. | Remove `tags.xml` from sitemap index + add `robots: noindex` to all 5 tag pages |
| `/cookies` | Legal boilerplate page. Zero search traffic value. 1 crawl slot wasted. | Add `robots: noindex` + exclude from `general.xml` |

**Effect:** Removes 6 low-value entries from the scheduler, immediately increasing the crawl
probability of the 350 money+blog pages that remain.

### Priority 2 — Fix `changefreq` accuracy → stops re-crawl waste

| Sitemap | Current | Correct |
|---|---|---|
| `blog.xml` — all posts | `weekly` | `monthly` (posts don't change weekly) |
| `categories.xml` — category hubs | `weekly` | `monthly` |

Googlebot uses `changefreq` as a *re-crawl* signal. `weekly` causes it to return and re-fetch
pages it already indexed, consuming budget that could go to N/A pages.

### Priority 3 — GSC manual "Request Indexing" → forces immediate crawl

Limit: ~10/day in GSC URL Inspection. Do these in order over ~25 days:

**Week 1 — Flagship hubs (highest authority pages):**
```
/mac-repair-dubai
/iphone-repair-dubai
/ipad-repair-dubai
/imac-repair-dubai
/mac-mini-repair-dubai
/mac-studio-repair-dubai
/macbook-repair-near-me
/applecare-macbook-repair-dubai
/pricing
/reviews
```

**Week 2 — Top service pages (highest commercial intent):**
```
/macbook-screen-repair-dubai
/macbook-battery-replacement-dubai
/macbook-water-damage-repair-dubai
/macbook-keyboard-repair-dubai
/macbook-logic-board-repair-dubai
/iphone-screen-repair-dubai
/iphone-battery-replacement-dubai
/iphone-water-damage-repair-dubai
/ipad-screen-repair-dubai
/ipad-battery-replacement-dubai
```

**Week 3 — High-value model pages:**
```
/macbook-air-13-m4-2025-repair-dubai
/macbook-air-15-m4-2025-repair-dubai
/macbook-pro-14-m4-2024-repair-dubai
/macbook-pro-16-m4-2024-repair-dubai
/macbook-air-13-m3-2024-repair-dubai
/iphone-16-plus-repair-dubai
/iphone-17-repair-dubai
/iphone-17-pro-repair-dubai
/iphone-air-repair-dubai
/mac-mini-m4-2024-repair-dubai
```

**Week 4 — Location pages (local SEO cluster):**
```
/macbook-repair-dubai-marina
/macbook-repair-business-bay
/macbook-repair-jlt
/macbook-repair-difc
/macbook-repair-downtown-dubai
/macbook-repair-abu-dhabi
/macbook-repair-sharjah
/macbook-repair-bur-dubai
/macbook-repair-jumeirah
/macbook-repair-deira
```

### Priority 4 — Server performance: ensure sub-200ms TTFB

Googlebot allocates more crawl budget to fast servers. The target is **TTFB ≤ 200ms** at
`/mac-repair-dubai` (the heaviest hub page). Check this in GSC > Core Web Vitals and also
manually with `curl -o /dev/null -s -w "%{time_starttransfer}" https://macbook-repair-dubai.ae/`.

If TTFB is above 200ms, options:
- Enable Hostinger's CDN (for static assets)
- Reduce React hydration payload on heavy pages
- Enable Next.js ISR (`revalidate`) on pages that are currently SSR

### Priority 5 — External authority: backlinks pointing to un-crawled pages

Google allocates crawl budget proportional to PageRank. Backlinks pointing directly to service
pages (not just the homepage) accelerate their indexing.

**Highest-ROI link targets (currently in the 257 un-crawled pool):**
- `/macbook-water-damage-repair-dubai` — evergreen how-to content
- `/iphone-repair-dubai` — flagship iPhone hub
- `/macbook-repair-dubai-marina`, `/macbook-repair-abu-dhabi` — local intent pages
- `/macbook-logic-board-repair-dubai` — high-value commercial page
- `/pricing` — referenced by all service pages, builds trust signals

**Tactics:**
1. **Blog guest posts** with contextual links to specific service pages (not just the homepage)
2. **Local citations** (e.g., Foursquare, Yelp UAE, Time Out Dubai, Gulf News business directory)
   linking directly to location pages
3. **Schema `sameAs`** references in the Organization JSON-LD: link to GBP, social profiles
4. **Repair community forums** (MacRumors, Apple Support Communities) where answering real
   questions earns contextual links to specific service pages

### Priority 6 — Sitemap resubmission after code changes

After deploying the code changes in this plan:
1. GSC → Sitemaps → Remove all existing sitemap URLs → Re-add:
   - `https://macbook-repair-dubai.ae/sitemap.xml`
   This triggers a fresh crawl of the sitemap index and all 8 child sitemaps (tags.xml removed).
2. Wait 24–48 hours for Googlebot to re-fetch the sitemap.
3. Monitor Coverage report → "Discovered" count should start falling within 7–14 days.

### Priority 7 — Content depth audit on blog categories

The blog category pages (`/blog/fixes`, `/blog/buying-guides`, etc.) are in the 257 affected
list. These pages are indexed via `categories.xml` but Google has never crawled them. The fix is
to ensure each category hub has:
1. A compelling introductory paragraph (≥ 100 words, unique, not just a post list)
2. An internal link to the matching money page (e.g., `/blog/fixes` → `/mac-repair-dubai`)
3. The `BlogCategory` component's `blurb` field in `blog-posts.ts` is visible and well-written

Check `CATEGORIES` in `src/content/blog-posts.ts` and ensure all `blurb` values are ≥ 2 sentences.

---

## 4. What NOT to do (common mistakes)

| Mistake | Why it's wrong |
|---|---|
| Changing homepage title/H1/URL | Disturbs an in-progress reindex; risks losing current rankings |
| Adding new redirects | 301 hops consume extra crawl budget; avoid new ones |
| Blocking any current URLs | Even thin pages you're noindexing — never 404 them, 200+noindex is correct |
| Submitting GSC removal requests | Only for content you want *permanently* delisted; using it on good pages tells Google you don't want them indexed |
| Mass-adding all 257 pages to "Request Indexing" at once | Daily limit is ~10; spread over 25 days focusing on the highest-value pages first |
| Changing URL structure | Never. The 301 redirect tax plus reindex penalty would be severe |

---

## 5. Success metrics & timeline

| Metric | Now | Target (30 days) | Target (60 days) |
|---|---|---|---|
| "Discovered - not indexed" count | 257 | < 180 | < 80 |
| Pages with "N/A" last crawled | 257 | < 150 | < 40 |
| Crawl rate (GSC Crawl Stats) | ~1.3 pages/day | > 5 pages/day | > 10 pages/day |
| TTFB (Googlebot-measured) | unknown | ≤ 200ms | ≤ 150ms |

**When to expect the crawl to accelerate:**
- Days 1–3: sitemap changes deploy, Googlebot fetches updated sitemaps
- Days 7–14: Googlebot starts preferentially crawling money pages (removed thin-page competition)
- Days 14–30: manual GSC indexing requests processed, hub+flagship service pages indexed
- Days 30–60: model pages and location pages gradually crawled as domain authority climbs

---

## 6. Code changes checklist

- [x] Remove `tags.xml` from `src/app/sitemap.xml/route.ts` (committed in this plan)
- [x] Add `robots: { index: false }` to all 5 tag page.tsx files
- [x] Add `robots: { index: false }` to `/cookies/page.tsx`
- [x] Exclude `/cookies` from `general.xml` sitemap
- [x] Fix `changefreq` in `blog.xml`: `weekly` → `monthly`
- [x] Fix `changefreq` in `categories.xml`: `weekly` → `monthly`
- [ ] GSC: resubmit `sitemap.xml` after deploy
- [ ] GSC: URL Inspection → Request Indexing — 10/day for 25 days (see §3 Priority 3)
- [ ] Backlink outreach: target pages listed in §3 Priority 5
- [ ] TTFB audit: measure with curl, fix if > 200ms
- [ ] Content audit: `/blog/fixes` etc. — verify each category `blurb` is substantive
