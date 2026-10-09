# Skill sweep (j11) — 2026-10-09 (run manually from chat, ahead of the first Thursday run)

Local production build, http://localhost:3006. Four skills: schema-audit, internal-links-audit, seo-technical, theme-visual-audit.

## Schema (t-schema)
- check:gates: all JSON-LD parses, no dangling @id. PASS
- ElectronicsStore on `/`: telephone +971557413706, address Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City, foundingDate 2004-10-10, 1 openingHours spec. Matches the fact sheet. PASS
- FAQPage = visible FAQ: covered by check:seo (0 new). PASS
- Rich Results test: needs the live site; not run (deploy blocked).

## Internal links (t-links)
- 637 pages crawled, 0 broken. Orphans: 1 (`/iphone-duo-repair-dubai/`, War Room task t-orphan-iphone-duo).
- 249 non-blog, non-area pages have fewer than 10 inbound internal links; 34 have exactly 1 (model/service pages such as `/mac-mini-m4-repair-dubai/`, `/macbook-pro-m4-screen-repair-dubai/`, `/mac-studio-m5-repair-dubai/`).
- Anchor text pointing at more than one page (cannibalisation risk):
  - "macbook repair dubai" → `/` and `/macbook-repair-dubai/`
  - "macbook repair" → `/`, `/mac-repair-dubai/`, `/macbook-repair-dubai/`, `/apple-repair-dubai/`
  - "macbook repair near me dubai" → `/mac-repair-near-me-dubai/` and `/mac-repair-dubai/`
  - "same-day macbook repair" → `/same-day-macbook-repair-dubai/` and `/`
  - "iphone screen repair cost in dubai" → blog post and service page
  - "iphone water damage repair dubai" → blog post and service page
  - Generic "screen repair" / "battery replacement" style anchors inside device sections are contextual and acceptable.
- Actions: War Room tasks t-anchor-owners (repoint the 6 anchors above to the owner page in keyword-page-map.csv) and t-inbound-hubs (hub → model-page links so no money page sits under 3 inbound).

## Technical (t-tech)
- robots.txt: `User-Agent: *` disallows only /api/ and /admin/; AI crawlers allowed; SEO-tool and scraper bots blocked; Host + Sitemap lines present. PASS
- sitemap.xml: index of 8 child sitemaps, 200. llms.txt 200. Canonicals self-referencing on 5 sampled pages. PASS
- Lighthouse (local build, headless): `/` perf 89 · a11y 97→100 after fix · BP 100 · SEO 100; `/macbook-screen-repair-dubai/` 91/100/100/100; `/blog/` 91/100/100/100. LCP 3.5–3.7 s on localhost (throttled), CLS 0, TBT ≤40 ms.
- Note: sitemap index lastmod is 2026-06-18 on every child; check that `lastmod.generated.ts` feeds the child sitemaps after the next deploy.

## Visual (t-visual)
- 4 pages × 390/768/1280/1920: no horizontal overflow, one H1 each, no console errors.
- Fixed: homepage decorative step numbers were real text at 1.24:1 contrast (commit "fix(a11y): homepage step numbers drawn with CSS").
- Fixed: `/macbook-screen-repair-dubai/` facts card showed "Diagnosis: Free" twice (commit "fix(ui): remove duplicated row"). Row removal only; no section or link removed on this protected page.

## Gates after fixes
tsc clean · build ok · Lighthouse `/` a11y 100, BP 100, SEO 100.
