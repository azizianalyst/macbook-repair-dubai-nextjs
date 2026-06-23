# Expert Fix Prompt — GSC Index Coverage (All 8 Reasons)
**Site:** macbook-repair-dubai.ae | **Stack:** Next.js 16 App Router on Hostinger Node
**Total not indexed:** 583 pages | **Indexed:** 145 pages
**Date:** 2026-06-19

This document is the authoritative brief for fixing every GSC index-coverage issue.
Work through each section in priority order. A test checklist follows every fix group.
Do NOT skip the test section — every fix must be verified before marking done.

---

## Priority order (impact × effort)

| Priority | Issue | Count | Impact |
|---|---|---|---|
| P1 | Excluded by `noindex` tag | 47 | 🔴 Critical — could be accidentally hiding money pages |
| P2 | Crawled – currently not indexed | 109 | 🔴 Ghost URLs eating crawl budget |
| P3 | Page with redirect | 151 | 🟠 Redirect chains bleed link equity |
| P4 | Not found (404) | 12 | 🟠 Some may have backlinks |
| P5 | Discovered – currently not indexed | 257 | 🟡 Crawl budget + content depth |
| P6 | Duplicate – Google chose diff canonical | 4 | 🟡 Canonical signal conflict |
| P7 | Blocked by robots.txt | 2 | 🟢 Verify intentional |
| P8 | Alternate page with proper canonical | 1 | 🟢 Verify correct |

---

## P1 — Excluded by `noindex` tag (47 pages) 🔴

### What it means
47 pages have a `noindex` meta robots tag. Google crawled them and obeyed the tag.
Some are intentional; some may be accidentally blocking real service/content pages.

### Known intentional noindex pages (from codebase grep)
These are correct — do NOT remove their noindex:
- `/admin/leads` — admin panel
- `/landing-template-demo` — dev template
- `/blog/tag/imac`, `/blog/tag/macbook`, `/blog/tag/mac`, `/blog/tag/iphone`, `/blog/tag/ipad` — thin tag archives
- `/cookies` — legal boilerplate
- 404 page (NotFound view) — correct

That accounts for ~10 pages. The remaining ~37 are unknown — they must be audited.

### How to find all 47

Run this in the project root:
```bash
# Find every file that sets noindex in any form
grep -rn 'noindex\|index: false\|robots.*noindex' src --include="*.ts" --include="*.tsx" | grep -v "node_modules\|// \|SEOHead.tsx\|seo.ts\|LandingTemplate.tsx"
```

Also check the `SEOHead` component — any view that passes `noindex={true}` or `robots="noindex,..."` into it will be noindexed:
```bash
grep -rn 'noindex={true}\|noindex: true\|robots="noindex' src --include="*.ts" --include="*.tsx"
```

### Fix rules
For each page found:
- Is it a money/service/blog/location page? → **Remove the noindex immediately**
- Is it admin, demo, legal boilerplate, or thin tag? → **Keep noindex, this is correct**
- Is it a page that should be consolidated? → **Add a 301 redirect instead** (noindex alone doesn't remove it from crawl queue)

### Files to edit
- `src/app/[page]/page.tsx` — remove `robots: { index: false }` from the metadata export
- `src/views/[ViewName].tsx` — remove `noindex: true` from `buildSeo()` call
- `src/components/blocks/LandingTemplate.tsx` — check `noindex` prop usage across all instances

### Test after fix
```bash
# Check a previously-noindexed page now returns index,follow
curl -s https://macbook-repair-dubai.ae/[fixed-page]/ | grep -i 'robots'
# Should show: <meta name="robots" content="index,follow">
# NOT: noindex,nofollow
```

Also verify in browser: View Source → search for `<meta name="robots"` on fixed pages.

---

## P2 — Crawled – currently not indexed (109 pages) 🔴

### What it means
Google fetched these URLs, got a 200-like response, but found the content too thin,
duplicate, or low quality to index. Mostly WordPress migration ghost URLs.

### Full fix brief
See [gsc-not-indexed-fix-brief.md](gsc-not-indexed-fix-brief.md) for the complete
redirect map broken into 8 groups. Summary of what goes into `next.config.ts`:

**Group 1 — Tag archives (20 URLs):** 301 each to the closest service page
**Group 2 — Date/author archives (3 URLs):** 301 → `/blog/`
**Group 3 — Pagination /page/N/ (~38 URLs):** 301 → canonical (page 1)
**Group 4 — Nested legacy paths /accessories/*, /apple-repair/*, /repair/* (7):** 301 → new slug
**Group 5 — Old service slugs /mac-mini/, /ipad-repair/ etc. (12):** 301 → new canonical
**Group 6 — A-number model slugs /macbook-pro-a2338-m1-repair/ etc. (7):** 301 → model name slug
**Group 7 — /wp-json/ (1):** Hard 404 via `src/app/wp-json/route.ts`
**Group 8 — Thin existing pages (10):** Expand content OR 301

### Files to edit
- `next.config.ts` — manual redirects block (paste all from the fix brief)
- `src/app/wp-json/route.ts` — create this file, call `notFound()`

### Test after fix
```bash
# One sample from each group — all must return 301, not 200
curl -sI https://macbook-repair-dubai.ae/tag/m2-macbook | head -5
curl -sI https://macbook-repair-dubai.ae/mac-mini | head -5
curl -sI https://macbook-repair-dubai.ae/2024/08 | head -5
curl -sI https://macbook-repair-dubai.ae/mac-repair-dubai/page/2 | head -5
curl -sI https://macbook-repair-dubai.ae/accessories/apple-magic-trackpad | head -5
curl -sI https://macbook-repair-dubai.ae/macbook-pro-a2779-repair-dubai | head -5
curl -sI https://macbook-repair-dubai.ae/wp-json | head -5
# wp-json must return 404, all others must return 301

# Confirm no redirect chains — destinations must return 200 directly
curl -sIL https://macbook-repair-dubai.ae/mac-mini | grep -E "HTTP/|Location"
# Must see: 301 → 200 (two lines only, not 301 → 301 → 200)
```

---

## P3 — Page with redirect (151 pages) 🟠

### What it means
151 URLs in Google's index are returning 301/302 redirects. This is partly
expected (WordPress legacy URLs). The risk is:
1. **Redirect chains** (A → B → C) — Google drops equity after 2 hops
2. **Redirect to homepage/hub** for URLs that should have their own page (soft-404 equivalent)
3. **302 instead of 301** — temporary redirects don't pass equity permanently

### Where all redirects live in this project
```
next.config.ts          ← manual redirects (www→apex, service slug merges)
redirects.generated.ts  ← auto-generated WordPress legacy .htaccess 301s (~100+ entries)
```

### How to audit for chains
```bash
# Run this for every redirect in redirects.generated.ts — the destination must be a 200, not another 301
# Quick spot-check of 10 random redirect destinations:
npx tsx -e "
const { REDIRECTS } = require('./redirects.generated');
const sample = REDIRECTS.slice(0,10);
sample.forEach(r => console.log(r.destination));
"
# Then curl each destination:
curl -sI https://macbook-repair-dubai.ae/iphone-repair-dubai/ | head -3
curl -sI https://macbook-repair-dubai.ae/macbook-repair-dubai/ | head -3
# All must return HTTP/2 200
```

### How to find 302s (wrong redirect type)
```bash
grep -n 'statusCode: 302\|permanent: false' redirects.generated.ts next.config.ts
# Every permanent move must use statusCode: 301, NOT 302
```

### How to find mass-redirect-to-home (bad pattern)
```bash
grep -n 'destination.*"/"' redirects.generated.ts next.config.ts
# Any redirect that sends a specific URL to "/" is a soft-404 to Google
# Fix: redirect to the most relevant live service page instead
```

### Fix rules
- Every redirect destination must be a live 200 page — no chaining
- All permanent moves use `statusCode: 301`
- No redirects that dump non-related URLs to the homepage (`"/"`)

### Test after fix
```bash
# Full chain check — follow all hops and show status of each
curl -sIL https://macbook-repair-dubai.ae/iphone-6-repair-dubai | grep -E "HTTP/|Location:"
# Expected: one 301 line + one 200 line (total 2 hops)

# Confirm all redirect source pages are NOT in the sitemap
# (sitemaps must only contain canonical 200 URLs, not redirect sources)
curl -s https://macbook-repair-dubai.ae/sitemap/general.xml | grep -c "<loc>"
# Compare count before and after to confirm no spurious URLs added
```

---

## P4 — Not found (404) (12 pages) 🟠

### What it means
12 URLs Google crawled returned a real 404. If any of these have external backlinks,
those links are wasted — they need a 301 to recover the equity.

### How to identify which 12 pages these are
Check GSC → Pages → Not found (404) for the full URL list. Then for each URL:

```bash
# Does this URL have any backlinks worth recovering?
# Check in Ahrefs or run: (replace with actual URL)
curl -sI https://macbook-repair-dubai.ae/[404-url] | head -3
# Confirms it's a real 404 (not a soft 404)
```

### Fix rules
- Has external backlinks pointing to it → **301 to most relevant live page**
- No backlinks, no search history → **Leave as 404** (correct behaviour)
- Was a real page that got accidentally deleted → **Restore the page** or 301

### Common 404 candidates in this project (from redirect gap analysis)
These may be in the 12:
- `/macbook-keyboard-repair-replacement/` — old WP slug, no redirect yet
- `/iphone-screen-repair-cost/` — thin pricing page that 404s
- URLs from the WP A-number model slug group not yet covered

### Files to edit
- `next.config.ts` — add missing 301s for any 404 with backlinks
- OR restore the page in `src/app/[slug]/page.tsx` if it was a real content page

### Test after fix
```bash
# Every fixed URL must now return 301, not 404
curl -sI https://macbook-repair-dubai.ae/[previously-404-url] | head -3
# Expected: HTTP/2 301 + Location header pointing to live page
```

---

## P5 — Discovered – currently not indexed (257 pages) 🟡

### What it means
This is the largest bucket. Google knows these URLs exist (from sitemaps or internal
links) but has not crawled them yet, OR crawled them and put them in a queue. This is
a crawl budget + content quality problem.

### Root causes for this site
1. **Too many thin/similar pages** — Google deprioritises sites where many pages look alike
2. **Low domain authority** — limited crawl budget allocation from Google
3. **New pages not yet discovered** — after the Next.js migration, many new URLs
4. **Sitemaps not clean** — if sitemaps include redirect/noindex pages, Google wastes budget on those

### Fix steps

**Step 1 — Clean the sitemaps (highest impact)**
The sitemaps must contain ONLY canonical, indexable, 200 URLs. Check each sitemap:
```bash
# List all sitemap files
ls src/app/sitemap/

# For each, verify it doesn't include:
# - noindex pages (/cookies, /admin, /landing-template-demo, /blog/tag/*)
# - redirect source URLs (old WP slugs)
# - 404 pages
# Check general.xml
cat src/app/sitemap/general.xml/route.ts

# Fetch live sitemap and count URLs
curl -s https://macbook-repair-dubai.ae/sitemap/general.xml | grep -c "<loc>"
```

**Step 2 — Remove redirect sources from sitemaps**
If any redirect source URLs appear in a sitemap, remove them. Sitemaps should only
list the redirect DESTINATION (the canonical 200 URL).

**Step 3 — Add internal links to orphan pages**
Pages with zero internal links pointing to them get the lowest crawl priority.
```bash
# Find pages in the app directory that have no internal links pointing to them
# (quick proxy: search for the slug in all tsx/ts files)
grep -rl "macbook-data-recovery-dubai" src --include="*.tsx" --include="*.ts" | grep -v "node_modules\|route\|sitemap"
# If only 1-2 results (the page itself + sitemap), it's an orphan — add a link from a hub page
```

**Step 4 — Consolidate very thin pages**
Pages under ~300 words of unique content should either be:
- Expanded with real content (services, FAQ, pricing, schema)
- 301-redirected into a stronger hub page and removed from the sitemap

**Step 5 — Request indexing for priority pages**
After the above fixes are deployed, use GSC → URL Inspection → Request Indexing
for your top-priority money pages that are in this bucket. Do NOT bulk-submit all 257 —
only the pages that genuinely have good content.

### Key files to audit
```
src/app/sitemap/general.xml/route.ts   ← general pages sitemap
src/app/sitemap/services.xml/route.ts  ← service pages
src/app/sitemap/blog.xml/route.ts      ← blog posts
src/app/sitemap/models.xml/route.ts    ← model-specific repair pages
```

### Test after fix
```bash
# Verify sitemaps are clean — no redirects, no noindex pages
curl -s https://macbook-repair-dubai.ae/sitemap.xml
# Open each child sitemap and spot-check 5 URLs:
curl -sI https://macbook-repair-dubai.ae/[url-from-sitemap]/ | head -3
# Every URL in the sitemap must return HTTP/2 200
```

---

## P6 — Duplicate, Google chose different canonical than user (4 pages) 🟡

### What it means
You declared a canonical URL (via `<link rel="canonical">`), but Google disagrees
and is treating a different URL as the canonical. This happens when:
1. The canonical points to a thin/weak page — Google trusts the stronger duplicate instead
2. There's inconsistent internal linking (some links point to URL A, others to URL B)
3. The canonical and the content don't match
4. There's a trailing-slash inconsistency creating two versions of the same page

### How to find the 4 pages
Check GSC → Pages → Duplicate, Google chose different canonical than user → Examples.
Note both: **your declared canonical** and **Google's chosen canonical**.

### Fix rules
For each of the 4 pages, apply this decision tree:

```
Is Google's chosen URL the "better" page (more links, better content)?
├── YES → Update YOUR canonical to match Google's choice
│         Change: alternates.canonical in the metadata export of the page
│         Goal: agree with Google, not fight it
└── NO → Make your declared canonical page stronger:
          - Add more unique content to it
          - Update all internal links to point to YOUR canonical URL (not the other version)
          - Ensure trailingSlash is consistent (next.config.ts has trailingSlash: true)
```

### Common cause in this project
The `trailingSlash: true` setting means `/mac-repair/` and `/mac-repair` are two URLs.
If any internal links use the non-slash version while the canonical declares the slash version,
Google sees a conflict.

```bash
# Find internal links that use non-trailing-slash form for pages where trailingSlash: true
grep -rn 'href="\/mac-repair"' src --include="*.tsx"
# Should be: href="/mac-repair/" (with trailing slash)
```

### Files to edit
- `src/app/[page]/page.tsx` — update `alternates.canonical` to match the correct URL
- Any `<Link href="...">` pointing to the wrong variant

### Test after fix
```bash
# Canonical tag must match the intended URL exactly
curl -s https://macbook-repair-dubai.ae/[page]/ | grep 'canonical'
# Expected: <link rel="canonical" href="https://macbook-repair-dubai.ae/[page]/"/>
```

---

## P7 — Blocked by robots.txt (2 pages) 🟢

### What it means
2 URLs are being blocked from crawling by `robots.txt`. This should be intentional.

### Verify they are intentional
```bash
cat src/app/robots.ts
# The only disallowed paths are: /api/ and /admin/
# The 2 blocked pages should be under these paths

# Confirm what Google sees
curl -s https://macbook-repair-dubai.ae/robots.txt
```

If the 2 URLs are `/api/` or `/admin/` sub-paths → **correct, no action needed**.
If they are real content pages accidentally blocked → **remove the Disallow rule for them**.

### Test
```bash
curl -s https://macbook-repair-dubai.ae/robots.txt | grep -A2 "Disallow"
# Must only show: Disallow: /api/ and Disallow: /admin/
```

---

## P8 — Alternate page with proper canonical tag (1 page) 🟢

### What it means
One page is serving as an "alternate" — it has a canonical tag pointing to a
different (primary) URL, and Google is honouring it. This is usually correct behaviour.

### Verify it's intentional
In GSC → Pages → Alternate page with proper canonical tag → check the URL.

If it's a pagination page, a parameter variant, or a known duplicate → **correct, no action**.
If it's a real service page accidentally pointing its canonical somewhere else → fix the canonical.

### Test
```bash
curl -s https://macbook-repair-dubai.ae/[the-alternate-page]/ | grep 'canonical'
# Verify the canonical href points to the intended primary URL
```

---

## Post-fix test suite (run after ALL fixes are deployed)

This is the complete verification. Run every command and confirm every expected result.

### 1. Redirect integrity
```bash
#!/bin/bash
# Paste and run — checks key redirects return 301 with no chains

REDIRECTS=(
  "/tag/m2-macbook:https://macbook-repair-dubai.ae/macbook-pro-repair-dubai/"
  "/mac-mini:https://macbook-repair-dubai.ae/mac-mini-repair-dubai/"
  "/ipad-repair:https://macbook-repair-dubai.ae/ipad-repair-dubai/"
  "/macbook-battery-replace:https://macbook-repair-dubai.ae/macbook-battery-replacement-dubai/"
  "/2024/08:https://macbook-repair-dubai.ae/blog/"
  "/author/azizi:https://macbook-repair-dubai.ae/about/"
  "/mac-repair-dubai/page/2:https://macbook-repair-dubai.ae/mac-repair-dubai/"
  "/macbook-pro-a2779-repair-dubai:https://macbook-repair-dubai.ae/macbook-pro-16-m2-pro-2023-repair-dubai/"
)

for PAIR in "${REDIRECTS[@]}"; do
  SOURCE="${PAIR%%:*}"
  DEST="${PAIR##*:}"
  STATUS=$(curl -so /dev/null -w "%{http_code}" "https://macbook-repair-dubai.ae${SOURCE}")
  echo "$SOURCE → $STATUS (expect 301)"
done
```

### 2. noindex audit
```bash
# List all pages with noindex — compare against the approved whitelist
grep -rn 'noindex\|index: false' src --include="*.tsx" --include="*.ts" \
  | grep -v "node_modules\|SEOHead.tsx\|seo.ts\|// " \
  | grep -v "admin\|landing-template-demo\|blog/tag\|cookies\|NotFound"
# Expected: ZERO results (all remaining noindex should be on the approved list)
```

### 3. Sitemap cleanliness
```bash
# Every URL in the sitemap must return 200
for SITEMAP in general services blog guides models locations categories; do
  URLS=$(curl -s "https://macbook-repair-dubai.ae/sitemap/${SITEMAP}.xml" \
    | grep -oP '(?<=<loc>)[^<]+')
  echo "=== $SITEMAP.xml ==="
  for URL in $(echo "$URLS" | head -5); do
    STATUS=$(curl -so /dev/null -w "%{http_code}" "$URL")
    echo "$URL → $STATUS"
  done
done
# Expected: all 200
```

### 4. robots.txt check
```bash
curl -s https://macbook-repair-dubai.ae/robots.txt
# Must contain Sitemap: line pointing to sitemap.xml
# Must NOT have Disallow: / (would block everything)
# Must only block: /api/ and /admin/
```

### 5. Canonical tags spot-check
```bash
for PAGE in "/" "/macbook-repair-dubai/" "/iphone-repair-dubai/" "/mac-repair-dubai/" "/imac-repair-dubai/"; do
  CANONICAL=$(curl -s "https://macbook-repair-dubai.ae${PAGE}" | grep -oP '(?<=canonical" href=")[^"]+')
  echo "${PAGE} → canonical: ${CANONICAL}"
done
# Expected: each page's canonical must exactly match the URL you requested (no mismatches)
```

### 6. 404 returns real 404 (not soft-200)
```bash
STATUS=$(curl -so /dev/null -w "%{http_code}" "https://macbook-repair-dubai.ae/this-page-does-not-exist-xyz-123")
echo "404 test: $STATUS"
# Expected: 404
# If 200: the app is soft-404ing — fix not-found.tsx to return proper status
```

### 7. wp-json is a hard 404
```bash
STATUS=$(curl -so /dev/null -w "%{http_code}" "https://macbook-repair-dubai.ae/wp-json/")
echo "wp-json: $STATUS"
# Expected: 404
```

### 8. Run the project's built-in URL audit
```bash
npm run check:urls:live
# This runs the project's existing URL checker — must pass clean
```

---

## Definition of done

A fix is complete ONLY when ALL of the following are true:

- [ ] The fix is deployed to production (not just local)
- [ ] The test for that fix group passes (curl returns expected status)
- [ ] No new noindex pages added accidentally
- [ ] No redirect chains introduced (no redirect → redirect → 200)
- [ ] Sitemap still clean (no 301/404 URLs in it)
- [ ] `npm run check:urls:live` passes

**Do NOT request indexing in GSC until all fixes are deployed and all tests pass.**
After deploy, wait 48 hours for Googlebot to re-crawl, then request indexing
for the top-priority money pages only (not all 583).

---

## Files summary — everything that needs to change

| File | Change |
|---|---|
| `next.config.ts` | Add ~85 new 301 redirects (all groups from fix brief) |
| `redirects.generated.ts` | Remove any 302s; fix any chains; remove mass-to-home redirects |
| `src/app/robots.ts` | Add disallow for `/page/`, `/tag/`, `/author/`, `/wp-json/`, date archives |
| `src/app/wp-json/route.ts` | Create new — returns `notFound()` |
| `src/app/sitemap/general.xml/route.ts` | Verify NOINDEX_PATHS is complete |
| `src/app/[affected-pages]/page.tsx` | Remove accidental noindex from ~37 pages |
| `src/views/[AffectedView].tsx` | Remove `noindex: true` from buildSeo() where incorrect |
