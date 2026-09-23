# macbook-repair-dubai.ae — Full Site Audit (2026-09-23)

**Scope:** every prerendered route (601 public pages, `/admin/*` excluded as noindex+disallowed),
audited for image↔content match, image integrity, and the SEO checklist (`/nextjs-site-audit`).

**Method:** fresh `next build`, then a static pass over all 625 prerendered HTML files
(`scratchpad/audit.mjs`) extracting title/description/canonical/og:image/H1/JSON-LD/`<img>` src+alt,
plus **visual inspection of all 145 distinct images actually in use** (contact sheets) — because the
bug you spotted is invisible to filename-based checks: `svc-screen.jpg` has no device token in its name.

**Score: 588 / 601 pages clean on the automated checks.** 🔴2 🟠3 🟡4

---

## Top fixes (impact × effort)

### 🔴 1. An iPhone photo is used on 4 MacBook screen-repair pages — *the one you spotted*
`/images/services/svc-screen.jpg` shows a **cracked iPhone** being lifted off its frame with a suction
cup. It is served on:

| Page | Alt text currently claims |
|---|---|
| `/macbook-screen-repair-dubai` | "technician fitting a new **Retina display**" |
| `/macbook-pro-screen-repair-dubai` | "technician fitting a **Liquid Retina XDR panel**" |
| `/macbook-neo-screen-repair-dubai` | "MacBook Neo Screen Repair Dubai" |
| `/macbook-screen-repair-near-me-dubai` | "MacBook Screen Repair Near Me Dubai" |

So it is a **double failure**: wrong device *and* alt text that asserts something the image does not show
(a Google image-search / AI-extraction liability, and an E-E-A-T problem on a money page).

Sources — three places, all need the same new asset:
- `src/lib/page-images.ts:325` — `if (p.includes("screen")) return \`${SVC}/svc-screen.jpg\`;`
- `src/views/MacBookScreenRepair.tsx:227`
- `src/views/MacBookProScreenRepair.tsx:212`

**Fix:** shoot/source a MacBook display-assembly photo → `/images/real/lab/macbook-screen-repair-dubai.jpg`,
repoint all three, rewrite both alt strings to describe what is actually in frame. Keep `svc-screen.jpg`
only if an iPhone screen page wants it.

### 🔴 2. Broken image (HTTP 404) on 5 MacBook Pro screen pages
`/images/real/lab/macbook-pro-screen-repair.jpg` **does not exist** in `public/` and returns **404 on the
live site** (verified). The `.avif` responsive variants are also absent, so every source in the `<picture>`
fails — these pages render a blank image box.

- Referenced from `src/components/blocks/MacBookProChipScreenPage.tsx:21`
- Affects: `/macbook-pro-m1-screen-repair-dubai`, `…-m2-`, `…-m3-`, `…-m4-`, `…-m5-`

**Fix:** same asset as #1 solves both; then run `node scripts/optimize-images.cjs` to regenerate variants.

### 🟠 3. The "Mac Studio" photo is actually a Mac mini — 13 Mac Studio pages
`/images/real/lab/mac-studio-dubai.jpg` is a squat Mac mini (with the Mac mini retail box behind it),
not the much taller Mac Studio. Served on all 13 `/mac-studio-*-repair-dubai` pages.
Same class of error as #1, just not yet noticed.

- `src/lib/page-images.ts` — `macDesktopImage()` (`mac-studio` branch) and `imageForFamily()` (`studio`)
- **Fix:** rename the file to `mac-mini-*` and use it where it is honest, or replace with a real Mac Studio photo.

### 🟠 4. 11 desktop-Mac pages show MacBook imagery (9 also in `og:image`)
The `topicForPath()` fallbacks in `src/lib/page-images.ts` drop Mac mini / Studio / Pro / iMac routes onto
generic *MacBook* topic infographics:

| Page | Gets |
|---|---|
| `/mac-pro-data-recovery-dubai` | `macbook-data-recovery-dubai.jpg` |
| `/mac-pro-full-diagnostic-dubai` | `macbook-diagnostic-dubai.jpg` |
| `/mac-pro-gpu-repair-dubai` | `macbook-gpu-repair-dubai.jpg` |
| `/mac-pro-not-turning-on-dubai` | `macbook-diagnostic-dubai.jpg` |
| `/mac-studio-data-recovery-dubai` | `macbook-data-recovery-dubai.jpg` |
| `/mac-studio-not-turning-on-dubai` | `macbook-diagnostic-dubai.jpg` |
| `/mac-studio-overheating-fix-dubai` | `macbook-fan-heatsink-dubai.jpg` |
| `/mac-mini-overheating-fix-dubai` | `macbook-fan-heatsink-dubai.jpg` |
| `/mac-mini-ram-upgrade-dubai` | `macbook-ram-upgrade-dubai.jpg` |
| `/imac-virus-removal-dubai` | `macbook-virus-removal-dubai.jpg` |
| `/blog/imac-not-turning-on-power-supply-issues` | `macbook-diagnostic-dubai.jpg` — **alt says "iMac 27-inch power supply"** |

**Fix:** add device-family guards ahead of the generic MacBook block in `topicForPath()` so a
`mac-pro`/`mac-studio`/`mac-mini`/`imac` route never falls through to a MacBook asset.

### 🟠 5. 39 public pages have **zero images** — including money pages
Your rule ("every page should have images according to their title") is unmet on:

**Commercial / money pages (fix first):** `/best-macbook-repair-dubai`, `/best-apple-repair-dubai`,
`/best-iphone-repair-dubai`, `/same-day-macbook-repair-dubai`, `/corporate-macbook-repair-dubai`,
`/pricing`, `/reviews`, `/contact`, `/about`, `/mac-repair-cost-dubai`, `/imac-repair-cost-dubai`,
`/apple-repair-near-me-dubai`, `/iphone-repair-near-me-dubai`, `/mac-repair-near-me-dubai`,
`/apple-watch-repair-dubai`, `/apple-t2-chip-data-recovery-dubai`, `/ssd-data-recovery-dubai`,
`/mac-data-recovery-after-water-damage-dubai`, `/macbook-battery-swollen-repair-dubai`

**Blog hubs / tag pages:** `/blog`, `/blog/apple-news`, `/blog/buying-guides`, `/blog/care-maintenance`,
`/blog/fixes`, `/blog/repair-costs`, `/blog/sell-trade-in`, `/blog/why-us`, `/blog/tag/{imac,ipad,iphone,mac,macbook}`

**Legal/utility (acceptable to leave):** `/privacy`, `/terms`, `/refund`, `/cookies`, `/warranty`,
`/image-usage-license`, `/landing-template-demo`

Note `/apple-watch-repair-dubai` is the sharpest gap — `watchImage()` exists in `page-images.ts` and
`/images/devices/watch-*.jpg` are referenced, but the page renders no image at all.

### 🟠 6. `https://www.` is broken (HTTP 525), not redirecting
`www.macbook-repair-dubai.ae` resolves to Cloudflare but the TLS handshake to origin fails → **525**.
The checklist wants one canonical host with `www → non-www` as a **301**. Today anyone (or any crawler)
hitting the www variant gets an error page instead. `http → https` on the apex is correct (301).
**Fix:** add the www hostname to the origin cert / Hostinger SSL, then a 301 to apex.

### 🟡 7. Six MacBook Air blog posts have no `og:image`
`/blog/macbook-air-{intel,m1,m2,m3,m4,m5}-common-problems-dubai` — `blogTopicForPath()` matches
`/m[1-5]/` → `blog-apple-silicon-dubai` for most posts but these fall through. Zero social/AI preview image.

### 🟡 8. Meta length overruns
- 12 descriptions at 166–174 chars (truncate to ≤155): 8 blog posts + `/macbook-air-m5-repair-dubai` (174),
  `/macbook-pro-intel-repair-dubai`, `/macbook-pro-m1-repair-dubai`, `/macbook-pro-m2-repair-dubai`
- 1 title at 66 chars: `/blog/macbook-pro-m5-battery-draining-overnight-dubai`

### 🟡 9. Prices and facts are baked **into** the topic infographics
The generated 2×2 blueprint images (88 of them) carry AED figures as pixels — e.g.
`blog-repair-cost-dubai.jpg` renders "AED 8,000–16,000" and "AED 4,500–7,000".
Two consequences:
1. **This conflicts with the `hide-prices-whatsapp` branch you are on** — the build-time price stripping
   cannot reach text inside a JPEG, so prices stay publicly visible after the change ships.
2. AEO: LLMs and AI Overviews cannot extract text from images. Every stat in those panels is invisible
   to the engines you want citing you, and the body copy must carry it instead.

---

## Full checklist results

| § | Area | Status |
|---|---|---|
| A | Framework & config | ✅ Next 16 App Router, `poweredByHeader:false`, `trailingSlash` consistent, clean build (exit 0), no `ignoreBuildErrors` |
| B | Indexability | ⚠️ apex/http 301 ✅, real 404 ✅, robots ✅ (`/api/`,`/admin/` disallowed, all AI crawlers explicitly allowed), sitemap ✅ — **www 525 ❌** |
| C | On-page SEO | ⚠️ 1×H1 on every public page ✅, canonical on all 601 ✅, unique titles ✅, unique descriptions ✅ — 12 descs + 1 title too long |
| D | Structured data | ✅ server-rendered JSON-LD on all 601 public pages |
| E | Performance | ✅ **582/582 images carry explicit width+height** (zero CLS risk), AVIF+responsive `<picture>` throughout; field CWV still 🔍 |
| F | Accessibility | ✅ **582/582 images have alt text; 0 missing, 0 empty** — but see #1/#4, two alts describe the wrong device |
| G | Security | ✅ Strong: HSTS w/ preload, real CSP (`object-src 'none'`, `base-uri 'self'`, `frame-ancestors`), nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy. `'unsafe-inline'` in `script-src` is the one tradeoff (static prerender) |
| H | AEO/GEO | ⚠️ crawlers allowed, `llms.txt` present — undermined by #9 (facts locked in images) |
| I | Local SEO | ✅ LocalBusiness schema, NAP, area pages |
| J | Analytics | 🔍 verify GA4 fires in prod |
| K | Mobile | ✅ favicon/manifest/apple-touch wired |
| L | Content & trust | ⚠️ `page-images.ts` still carries the PLACEHOLDER NOTICE — `/images/devices/*-product.jpg` are AI renders pending real photography |

**False positives I ruled out:** 24 `/admin/*` pages (noindex + robots-disallowed + 307 auth redirect —
correct, not gaps); 190 "og family mismatch" hits (my regex was matching the word *macbook* inside the
domain name); 5 homepage "mismatches" (the device grid legitimately shows iMac/mini/Studio/Pro).

## Verify externally (🔍)
Field CWV via PSI/GSC · GA4 real-time · Rich Results Test on the new schema · `npm audit`
