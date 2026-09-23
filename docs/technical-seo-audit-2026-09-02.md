# Technical SEO Audit — 2026-09-02

Live spot-check of macbook-repair-dubai.ae against the `/seo-technical` checklist. Prior technical
docs (`nextjs-tech-audit.md`, `seo-architecture-audit.md`, `indexing-recovery-plan.md`,
`gsc-*-fix-*.md`) are all dated 2026-06 and superseded by three months of subsequent work — this
audit checks the **live production site**, not the repo, against what the repo now believes is true.

---

## 🔴 DO NOW — production is running a stale build

**The live site is several commits behind `main`/`hide-prices-whatsapp`.** At least three recent,
already-committed fixes are not live:

| Fix (commit) | Expected live behavior | Actual live behavior |
|---|---|---|
| `dbc478d` — 17 sentence-slug guides moved under `/blog/` with 301s | `/do-macbooks-last-over-a-decade` → 301 → `/blog/do-macbooks-last-over-a-decade/` | Only Next.js's automatic trailing-slash redirect fires (`/do-macbooks-last-over-a-decade` → 308 → `/do-macbooks-last-over-a-decade/`, which then **404s**) |
| `cbeebc5` — `/apple-service-center-dubai` "certified technicians" claim removed | Page copy without the claim | Page **still live with "Certified technicians"** |
| `94725d4` — iPhone 18 Pro / Pro Max pre-announcement pages | `/iphone-18-pro-repair-dubai/` returns 200 | **404** |

This isn't a code problem — it's a deploy gap. Every fix above is correct in the repo; none of it
is doing anything for users or crawlers until deployed. This also means **any further technical
SEO diagnosis against the live site reflects a build that's already known to be wrong** — redeploy
before spending more time chasing live-site symptoms that are already fixed in the repo.

**Fix:** run the deploy (see [DEPLOY.md](../DEPLOY.md)). Known friction from
[[hostinger-mcp-token-dead]]: the upload endpoint 500s intermittently and `state` lags the actual
build — budget for a retry.

---

## 🟡 Low-effort fix — redirect chain

`http://www.macbook-repair-dubai.ae` is 2 hops to the canonical URL, not 1:

```
http://www...      --301--> https://www...
https://www...      --308--> https://macbook-repair-dubai.ae/
```

Collapse to a single redirect (`http://www` → `https://macbook-repair-dubai.ae/` directly).
Low traffic path (almost nothing links to `http://www` directly), but it's the textbook redirect-
chain mistake and a 5-minute fix in the same redirect config already being edited for deploys.

The `https://www` → apex hop alone is fine (single 308, correct destination) — only the `http` +
`www` combination stacks two hops.

---

## ✅ Passing

- **AI-crawler policy in `robots.txt` matches 2026 best practice**: GPTBot, OAI-SearchBot, ClaudeBot,
  PerplexityBot, Google-Extended, Bingbot, Applebot, Amazonbot all explicitly allowed. Known
  scrapers and generic HTTP clients (AhrefsBot, SemrushBot, MJ12bot, python-requests, curl, wget,
  scrapy...) explicitly disallowed — a deliberate, current policy, not an oversight.
- **Canonical domain resolves correctly** — apex + HTTPS is canonical, `Host:` directive in
  `robots.txt` matches, homepage `<link rel="canonical">` self-references the apex.
- **Sitemap index is well-formed**: 8 child sitemaps (services 149, models 165, locations 34, blog
  184, guides 15, general 27, categories 7, images 567 — **588 URLs** total, consistent with the
  "589 routes clean" rendered-gate figure from `49796ac`).
- **Per-URL `lastmod` is real and current** (spot-checked: 2026-08-31, 2026-09-01) — the sitemap
  *index* wrapper's own stale `2026-06-18` lastmod is cosmetic only; Google reads the child
  sitemaps' per-URL dates, which are accurate. Not a bug, despite looking like one at first glance.
- **Sampled sitemap URLs (8 of 588, spread across services + blog) all return live 200** — no
  immediate sitemap pollution from the sample checked.
- **Homepage**: 34 `application/ld+json` blocks present, title within length (54 chars), canonical
  correct.

---

## Not verified this session — needs different tooling

- **Core Web Vitals** (LCP/INP/CLS) — needs a PageSpeed Insights or Lighthouse run against the
  *deployed* site; pointless to run against the current stale build. Do this **after** redeploying.
- **Full-site crawl for broken internal links / orphans** — 588 URLs is too many to hand-check with
  `curl`; run Ahrefs Site Audit or Screaming Frog once the new deploy is live.
- **GSC index coverage reconciliation** — no GSC access this session. The existing
  `docs/gsc-not-indexed-fix-brief.md` / `docs/gsc-full-fix-prompt.md` are from 2026-06 and predate
  three months of fixes; worth a fresh pull once GSC access is available (see [[gsc-insights]]).
- **hreflang / international** — site appears single-market (Dubai, English); skipped as
  out-of-scope unless an Arabic version exists or is planned (see `/seo-international`).

---

## Heads-up for after the deploy lands

Once `dbc478d` (blog moves) is live, the sitemap will need regenerating: `services.xml` currently
lists the pre-redirect URLs (e.g. `/why-is-my-ipad-not-charging/`) as canonical, which is correct
*for the current live state* but will be stale the moment the redirect goes live — those 17 URLs
belong in `blog.xml` pointing at `/blog/<slug>/`, not in their current sitemap section. Regenerate
before submitting, keep the old URLs briefly in a **separate** sitemap only if you want Google to
discover the redirects faster (optional, not required — 301s are enough on their own).

---

**Priority order:** deploy first (unblocks everything and fixes three known-wrong live pages) →
collapse the `http://www` redirect chain → re-run CWV + a full crawl against the new build → pull
fresh GSC coverage data.
