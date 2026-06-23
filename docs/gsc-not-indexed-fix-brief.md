# GSC "Crawled – currently not indexed" Fix Brief
**Site:** macbook-repair-dubai.ae | **Branch:** seo-recovery-schema-cwv
**Issue:** 109 URLs crawled by Google but not indexed (GSC → Pages → Crawled – currently not indexed)
**Root cause:** WordPress → Next.js migration left ghost URLs that return soft-200s or thin content
**Goal:** Get the count to 0 by collapsing all ghost URLs into proper 301s or hard 404s

---

## Why these pages aren't indexed

"Crawled – currently not indexed" means Google fetched the page and got a 200-equivalent response, but decided the content was too thin, duplicate, or low-quality to serve. It does NOT mean 404. These are the failure modes at play:

| Pattern | What's happening | Fix |
|---|---|---|
| WordPress tag/author/date archives | Ghost URLs return 200 via Next.js catch-all or proxy; content is empty/thin | 301 to relevant live page |
| WordPress `/page/N/` pagination | Pagination on non-paginated Next.js content returns 200 with empty/near-duplicate content | 301 to canonical (page 1) |
| Old WordPress service slugs (`/mac-mini/`, `/ipad-repair/`) | URL changed in migration; may proxy to homepage or return stub | 301 to new canonical slug |
| WordPress A-number model slugs (`/macbook-pro-a2338-m1-repair/`) | Slug format changed; page either 404s as soft-200 or doesn't exist | 301 to correct model page |
| WordPress nested slugs (`/accessories/*`, `/apple-repair/*`, `/repair/*`) | Structural change; no route exists | 301 to correct live page |
| WordPress REST API (`/wp-json/`) | Returns Next.js 200 page content instead of 404 | Hard 404 |
| Existing thin pages (`/refund`, `/contact`, `/macbook-keyboard-issues/`) | Page exists but content too thin to pass quality threshold | Expand content OR noindex |

---

## Implementation: where the fixes go

All redirects in this Next.js project go in **`redirects.generated.ts`** (auto-generated bulk) or the **manual block in `next.config.ts`**. Add to the manual block in `next.config.ts` under the existing manual redirects section.

**Pattern:**
```ts
{ source: "/old-slug", destination: "/new-slug/", statusCode: 301 },
```

Hard 404s: ensure the Next.js `not-found.tsx` is called (no catch-all route intercepts these).

---

## Fix Group 1 — WordPress Tag Archives (20 URLs → 301)

These are WordPress taxonomy pages. No equivalent exists in Next.js. All need 301 to the most relevant live service page.

```ts
// Tag archives → relevant service pages
{ source: "/tag/linksys-velop", destination: "/macbook-wifi-bluetooth-repair-dubai/", statusCode: 301 },
{ source: "/tag/wireless-problems", destination: "/macbook-wifi-bluetooth-repair-dubai/", statusCode: 301 },
{ source: "/tag/m1-mac-wifi", destination: "/macbook-wifi-bluetooth-repair-dubai/", statusCode: 301 },
{ source: "/tag/macbook-not-turning-on", destination: "/mac-not-turning-on-dubai/", statusCode: 301 },
{ source: "/tag/macos-boot-fix", destination: "/mac-not-turning-on-dubai/", statusCode: 301 },
{ source: "/tag/mac-startup-issues", destination: "/mac-not-turning-on-dubai/", statusCode: 301 },
{ source: "/tag/mac-power-problems", destination: "/mac-not-turning-on-dubai/", statusCode: 301 },
{ source: "/tag/macbook-trackpad", destination: "/macbook-trackpad-repair-dubai/", statusCode: 301 },
{ source: "/tag/apple-vision-pro", destination: "/apple-repair-dubai/", statusCode: 301 },
{ source: "/tag/mac-display-issues", destination: "/macbook-screen-repair-dubai/", statusCode: 301 },
{ source: "/tag/caps-lock-not-working", destination: "/the-caps-lock-key-is-not-responding-after-restarting-my-macbook/", statusCode: 301 },
{ source: "/tag/macbook-keyboard-issues", destination: "/macbook-keyboard-repair-dubai/", statusCode: 301 },
{ source: "/tag/macos-keyboard-fix", destination: "/macbook-keyboard-repair-dubai/", statusCode: 301 },
{ source: "/tag/m1-imac", destination: "/imac-repair-dubai/", statusCode: 301 },
{ source: "/tag/macbook-startup", destination: "/mac-not-turning-on-dubai/", statusCode: 301 },
{ source: "/tag/mac-key-issues", destination: "/macbook-keyboard-repair-dubai/", statusCode: 301 },
{ source: "/tag/imac-display-issues", destination: "/imac-screen-repair-dubai/", statusCode: 301 },
{ source: "/tag/m2-macbook", destination: "/macbook-pro-repair-dubai/", statusCode: 301 },
{ source: "/tag/ios-data-recovery", destination: "/iphone-data-recovery-dubai/", statusCode: 301 },
{ source: "/tag/apple-vr", destination: "/apple-repair-dubai/", statusCode: 301 },
```

---

## Fix Group 2 — WordPress Date/Author Archives (3 URLs → 301)

WordPress-specific archive types. No Next.js equivalent.

```ts
{ source: "/2024/08", destination: "/blog/", statusCode: 301 },
{ source: "/2025/04", destination: "/blog/", statusCode: 301 },
{ source: "/author/azizi", destination: "/about/", statusCode: 301 },
```

---

## Fix Group 3 — WordPress Pagination on Non-Paginated Content (~38 URLs → 301 to page 1)

WordPress paginated blog posts and category listings. Next.js doesn't paginate these. Redirect all `/page/N/` suffixes to the canonical (no-pagination) URL.

```ts
// Category/listing paginations
{ source: "/mac-repair-dubai/page/2", destination: "/mac-repair-dubai/", statusCode: 301 },
{ source: "/mac-repair-dubai/page/3", destination: "/mac-repair-dubai/", statusCode: 301 },
{ source: "/mac-repair-dubai/page/4", destination: "/mac-repair-dubai/", statusCode: 301 },
{ source: "/mac-repair-dubai/page/5", destination: "/mac-repair-dubai/", statusCode: 301 },
{ source: "/iphone-repair-dubai/page/2", destination: "/iphone-repair-dubai/", statusCode: 301 },
{ source: "/iphone-repair-dubai/page/3", destination: "/iphone-repair-dubai/", statusCode: 301 },
{ source: "/imac-repair-dubai/page/2", destination: "/imac-repair-dubai/", statusCode: 301 },
{ source: "/imac-24-inch-m1-2021-repair/page/2", destination: "/imac-24-m1-2021-repair-dubai/", statusCode: 301 },
{ source: "/macbook-screen-repair-dubai/page/2", destination: "/macbook-screen-repair-dubai/", statusCode: 301 },
{ source: "/macbook-pro-a2338-m1-repair-dubai/page/5", destination: "/macbook-pro-13-m1-2020-repair-dubai/", statusCode: 301 },
{ source: "/macbook-pro-a1707-repair-dubai/page/2", destination: "/macbook-pro-repair-dubai/", statusCode: 301 },
{ source: "/mac-studio-repair-dubai/page/2", destination: "/mac-studio-repair-dubai/", statusCode: 301 },
{ source: "/mac-pro-repair-dubai/page/3", destination: "/mac-pro-repair-dubai/", statusCode: 301 },
{ source: "/apple-accessories-dubai/page/2", destination: "/apple-repair-dubai/", statusCode: 301 },
{ source: "/apple-accessories-dubai/page/3", destination: "/apple-repair-dubai/", statusCode: 301 },
{ source: "/apple-accessories-dubai/page/5", destination: "/apple-repair-dubai/", statusCode: 301 },

// Blog/howto post paginations → canonical post
{ source: "/ipad-speaker-repair-replacement/page/2", destination: "/ipad-speaker-repair-dubai/", statusCode: 301 },
{ source: "/why-wont-my-macbook-turn-on/page/2", destination: "/mac-not-turning-on-dubai/", statusCode: 301 },
{ source: "/how-can-i-fix-the-missing-touch-bar-controls-for-the-calculator-in-macbook-pro/page/2", destination: "/macbook-touch-bar-repair-dubai/", statusCode: 301 },
{ source: "/contact-us/page/2", destination: "/contact/", statusCode: 301 },
{ source: "/siri-stopped-working-on-macbook-air/page/2", destination: "/siri-stopped-working-on-macbook-air/", statusCode: 301 },
{ source: "/turn-off-startup-when-lid-opens-m2-macbook-air/page/2", destination: "/mac-not-turning-on-dubai/", statusCode: 301 },
{ source: "/how-to-change-macbook-name/page/2", destination: "/how-to-change-macbook-name/", statusCode: 301 },
{ source: "/how-to-choose-the-right-configuration-for-a-macbook/page/2", destination: "/how-to-choose-the-right-configuration-for-a-macbook/", statusCode: 301 },
{ source: "/how-to-install-windows-on-macbook-pro/page/2", destination: "/boot-camp-windows-macbook-dubai/", statusCode: 301 },
{ source: "/how-to-erase-all-data-on-my-mac-before-giving-it-away/page/2", destination: "/how-to-erase-all-data-on-my-mac-before-giving-it-away/", statusCode: 301 },
{ source: "/how-to-copy-and-paste-on-a-macbook/page/2", destination: "/how-to-copy-and-paste-on-a-macbook/", statusCode: 301 },
{ source: "/how-to-reset-a-macbook/page/2", destination: "/how-to-reset-a-macbook/", statusCode: 301 },
{ source: "/how-to-take-a-screenshot-on-a-macbook/page/2", destination: "/how-to-take-a-screenshot-on-a-macbook/", statusCode: 301 },
{ source: "/how-can-i-record-audio-while-screen-recording-on-mac/page/2", destination: "/how-can-i-record-audio-while-screen-recording-on-mac/", statusCode: 301 },
{ source: "/how-do-i-reset-passwords-on-my-macbook/page/2", destination: "/how-do-i-reset-passwords-on-my-macbook/", statusCode: 301 },
{ source: "/how-to-recover-macbook-password/page/2", destination: "/how-to-recover-macbook-password/", statusCode: 301 },
{ source: "/migrating-data-from-old-macbook-to-new-macbook-without-icloud/page/2", destination: "/migrating-data-from-old-macbook-to-new-macbook-without-icloud/", statusCode: 301 },
{ source: "/why-is-my-macbook-m3-not-charging/page/2", destination: "/macbook-charging-port-repair-dubai/", statusCode: 301 },
{ source: "/why-does-my-macbook-air-m4-heat-up-so-quickly/page/2", destination: "/why-does-my-macbook-air-m4-heat-up-so-quickly/", statusCode: 301 },
{ source: "/sources-to-purchase-a-refurbished-macbook/page/2", destination: "/sources-to-purchase-a-refurbished-macbook/", statusCode: 301 },
{ source: "/top-10-common-macbook-problems-and-how-to-fix-them/page/2", destination: "/top-10-common-macbook-problems-and-how-to-fix-them/", statusCode: 301 },
{ source: "/best-iphone-repair-company-in-dubai/page/2", destination: "/iphone-repair-dubai/", statusCode: 301 },
{ source: "/iphone-16-pro-battery-capacity/page/2", destination: "/iphone-16-pro-battery-capacity/", statusCode: 301 },
{ source: "/iphone-16-pro-max-screen-flickering/page/2", destination: "/iphone-16-pro-max-screen-flickering/", statusCode: 301 },
{ source: "/iphone-16-shocks-while-charging/page/2", destination: "/iphone-16-shocks-while-charging/", statusCode: 301 },
{ source: "/do-macbooks-last-over-a-decade/page/2", destination: "/do-macbooks-last-over-a-decade/", statusCode: 301 },
{ source: "/google-apps-crashing-after-ios-18-update/page/2", destination: "/iphone-software-fix-dubai/", statusCode: 301 },
```

---

## Fix Group 4 — Legacy WordPress Nested URL Structures (7 URLs → 301)

Old WordPress had `/accessories/*` and `/apple-repair/*` prefixed paths. These don't exist in Next.js.

```ts
{ source: "/accessories/apple-magic-trackpad", destination: "/apple-repair-dubai/", statusCode: 301 },
{ source: "/accessories/airpods", destination: "/apple-repair-dubai/", statusCode: 301 },
{ source: "/apple-repair/mac-mini", destination: "/mac-mini-repair-dubai/", statusCode: 301 },
{ source: "/apple-repair/mac-studio", destination: "/mac-studio-repair-dubai/", statusCode: 301 },
{ source: "/apple-repair/imac", destination: "/imac-repair-dubai/", statusCode: 301 },
{ source: "/repair/iphone-15", destination: "/iphone-15-repair-dubai/", statusCode: 301 },
{ source: "/repair/mac", destination: "/mac-repair-dubai/", statusCode: 301 },
```

---

## Fix Group 5 — Old WordPress Service Slugs → New Next.js Slugs (12 URLs → 301)

Slug format changed during migration. These need to point to the correct live canonical.

```ts
{ source: "/mac-mini", destination: "/mac-mini-repair-dubai/", statusCode: 301 },
{ source: "/mac-studio", destination: "/mac-studio-repair-dubai/", statusCode: 301 },
{ source: "/mac-pro", destination: "/mac-pro-repair-dubai/", statusCode: 301 },
{ source: "/mac-pro/", destination: "/mac-pro-repair-dubai/", statusCode: 301 },  // double-slash variant
{ source: "/imac", destination: "/imac-repair-dubai/", statusCode: 301 },
{ source: "/mac-repair", destination: "/mac-repair-dubai/", statusCode: 301 },
{ source: "/iphone-repair", destination: "/iphone-repair-dubai/", statusCode: 301 },
{ source: "/ipad-repair", destination: "/ipad-repair-dubai/", statusCode: 301 },
{ source: "/macbook-battery-replace", destination: "/macbook-battery-replacement-dubai/", statusCode: 301 },
{ source: "/macbook-battery-replacement", destination: "/macbook-battery-replacement-dubai/", statusCode: 301 },
{ source: "/macbook-data-recovery", destination: "/macbook-data-recovery-dubai/", statusCode: 301 },
{ source: "/mac-studio-repair", destination: "/mac-studio-repair-dubai/", statusCode: 301 },
```

> **Note on double slash `/mac-pro//`:** Next.js normalises URLs, so adding a redirect for `/mac-pro` with `trailingSlash: true` will catch the double-slash variant automatically. Verify with `curl -I https://macbook-repair-dubai.ae/mac-pro//` after deploy.

---

## Fix Group 6 — WordPress A-Number Model Slugs (8 URLs → 301)

WordPress used Apple board-identifier slugs (A2338, A1707 etc.). Next.js uses descriptive model-name slugs.

| Old WordPress slug | Correct live page |
|---|---|
| `/macbook-pro-a2338-m1-repair` | `/macbook-pro-13-m1-2020-repair-dubai/` |
| `/macbook-pro-a2338-m2-repair-dubai` | `/macbook-pro-13-m2-2022-repair-dubai/` |
| `/macbook-pro-a2141-repair-dubai` | `/macbook-pro-16-m1-pro-2021-repair-dubai/` |
| `/macbook-pro-a2779-repair-dubai` | `/macbook-pro-16-m2-pro-2023-repair-dubai/` |
| `/macbook-pro-a2779-repair` | `/macbook-pro-16-m2-pro-2023-repair-dubai/` |
| `/macbook-pro-a1707-repair` | `/macbook-pro-repair-dubai/` (no exact model page; use hub) |
| `/macbook-pro-a2991-repair-dubai` | `/macbook-pro-14-m3-2023-repair-dubai/` (A2991 = MBP 14" M3 Pro 2023) |

```ts
{ source: "/macbook-pro-a2338-m1-repair", destination: "/macbook-pro-13-m1-2020-repair-dubai/", statusCode: 301 },
{ source: "/macbook-pro-a2338-m2-repair-dubai", destination: "/macbook-pro-13-m2-2022-repair-dubai/", statusCode: 301 },
{ source: "/macbook-pro-a2141-repair-dubai", destination: "/macbook-pro-16-m1-pro-2021-repair-dubai/", statusCode: 301 },
{ source: "/macbook-pro-a2779-repair-dubai", destination: "/macbook-pro-16-m2-pro-2023-repair-dubai/", statusCode: 301 },
{ source: "/macbook-pro-a2779-repair", destination: "/macbook-pro-16-m2-pro-2023-repair-dubai/", statusCode: 301 },
{ source: "/macbook-pro-a1707-repair", destination: "/macbook-pro-repair-dubai/", statusCode: 301 },
{ source: "/macbook-pro-a2991-repair-dubai", destination: "/macbook-pro-14-m3-2023-repair-dubai/", statusCode: 301 },
```

---

## Fix Group 7 — WordPress REST API Endpoint (1 URL → hard 404)

`/wp-json/` is a WordPress-only endpoint. It should return a hard 404, not a 200. Check what Next.js currently serves at this URL:

```bash
curl -I https://macbook-repair-dubai.ae/wp-json/
```

If it returns 200, add an explicit `not-found.tsx` catch or a route that calls `notFound()`:

```ts
// src/app/wp-json/route.ts
import { notFound } from "next/navigation";
export function GET() { notFound(); }
```

---

## Fix Group 8 — Existing Pages with Thin/Indexability Issues (9 URLs → content audit)

These pages exist and return 200, but Google deemed them too thin to index.

| URL | Issue | Fix |
|---|---|---|
| `/refund` | Exists (`src/app/refund/`), likely thin boilerplate text | Expand to 300+ words with clear policy, FAQ schema |
| `/contact/` | Exists (`src/app/contact/`), thin contact form | Add service hours, WhatsApp CTA, LocalBusiness schema, FAQ |
| `/macbook-repair-troubleshooting/` | Page exists but appears orphaned or thin | Either expand content significantly OR 301 → `/mac-repair-dubai/` |
| `/macbook-keyboard-issues/` | Thin/stub page | Either build out as a full guide OR 301 → `/macbook-keyboard-repair-dubai/` |
| `/macbook-display-connectivity/` | Thin/stub page | Either build out OR 301 → `/macbook-screen-repair-dubai/` |
| `/apple-vision-pro` | No trailing slash + thin/stub | 301 → `/apple-repair-dubai/` |
| `/airpods/` | Thin product listing | 301 → `/apple-repair-dubai/` or expand |
| `/apple-adapter/` | Thin product listing | 301 → `/apple-repair-dubai/` |
| `/apple-magic-trackpad/` | Thin product listing | 301 → `/apple-repair-dubai/` |
| `/apple-watch-repair/` | Thin or no content | 301 → `/apple-repair-dubai/` or build real page |
| `/iphone-water-damaged-repair-dubai/` | Slug differs from live `/iphone-water-damage-repair-dubai/` | 301 → `/iphone-water-damage-repair-dubai/` |
| `/iphone-screen-repair-cost/` | Thin pricing stub | 301 → `/iphone-screen-repair-dubai/` or `/pricing/` |
| `/ipad-repair/` | Old slug | Already in Group 5 |

---

## Fix Group 9 — Check /page/N/ catch-all in robots.txt (prevention)

After implementing all 301s, add a wildcard disallow to prevent Google from crawling future `/page/N/` variants that don't have explicit redirects:

```
# src/app/robots.ts — add to the rules object
{
  userAgent: '*',
  disallow: ['/page/', '*/page/*', '/tag/', '/author/', '/wp-json/', '/wp-admin/', '/2024/', '/2025/', '/2026/'],
}
```

> **Critical rule:** Only disallow pages you don't need indexed. Do NOT disallow pages you want indexed that merely don't exist yet — a 404 is fine; a robots-block on a future page you build is a trap.

---

## Verification checklist after deploy

Run these checks after every deploy that includes redirect changes:

```bash
# Spot-check a sample from each group
curl -sI https://macbook-repair-dubai.ae/tag/m2-macbook          # → 301 to /macbook-pro-repair-dubai/
curl -sI https://macbook-repair-dubai.ae/mac-mini                 # → 301 to /mac-mini-repair-dubai/
curl -sI https://macbook-repair-dubai.ae/2024/08                  # → 301 to /blog/
curl -sI https://macbook-repair-dubai.ae/mac-repair-dubai/page/2  # → 301 to /mac-repair-dubai/
curl -sI https://macbook-repair-dubai.ae/wp-json                  # → 404
curl -sI https://macbook-repair-dubai.ae/macbook-pro-a2779-repair-dubai  # → 301 to /macbook-pro-16-m2-pro-2023-repair-dubai/

# Confirm none of the redirect destinations are themselves redirects (no chains)
curl -sI https://macbook-repair-dubai.ae/macbook-pro-13-m1-2020-repair-dubai/  # → 200
curl -sI https://macbook-repair-dubai.ae/mac-mini-repair-dubai/                # → 200
```

Then run `npm run check:urls:live` (the project's URL audit script).

After 2–4 weeks, check GSC → Pages → Crawled – currently not indexed. The count should drop to <10 (residual Google processing lag). Use **URL Inspection → Request Indexing** only on pages you actually want indexed, not redirect sources.

---

## Summary count

| Group | URLs | Action |
|---|---|---|
| WordPress tag archives | 20 | 301 to relevant service |
| Date/author archives | 3 | 301 to /blog/ or /about/ |
| Pagination /page/N/ | ~38 | 301 to canonical |
| Nested legacy structures | 7 | 301 to new structure |
| Old service slugs | 12 | 301 to new slug |
| A-number model slugs | 7 | 301 to model name slug |
| WordPress REST API | 1 | Hard 404 |
| Thin/stub existing pages | ~10 | 301 or content expansion |
| **Total** | **~98** | All 109 covered |

The remaining ~11 are likely in GSC from crawl lag and will drop off once Google re-crawls the 301s.
