# SEO / AEO Master Plan — MacBook Repair Dubai

> Living document. Built on the Ahrefs methodology + 2026 AEO/GEO layer.
> Site: 350 routes, Next.js 16 App Router, static-first, Node deploy (Hostinger).
> Business: local Apple-repair shop, Dubai. NAP in `src/content/site.ts`.
> Branch context: `seo-recovery-schema-cwv` (post-WordPress migration, recovering rankings).
> See also: [`seo-recovery-internal-linking-and-gaps.md`](seo-recovery-internal-linking-and-gaps.md) — crawler policy, the automated internal-linking upgrade, and the staged content-gap backlog.

---

## 0. The 2026 mental model (why we cluster)

We optimize for **two audiences at once**: classic SERPs (ranked links) AND answer engines
(ChatGPT / Perplexity / Google AI Overviews citing us). Three durable truths drive every decision:

1. **Intent + comprehensiveness win.** One authoritative cluster beats scattered thin pages.
2. **Topical authority is the dominant signal** — for AI it's ~17% of citation variance vs <4% for domain authority. Breadth + depth of a topic = the trust signal.
3. **Depth beats volume.** ~90% of thin pages get zero traffic. The March 2026 core update penalized scaled near-duplicate content (60–90% loss). **Every page must add unique value.**

With 350 programmatic pages, our #1 risk is *thin/duplicate template pages* and our #1 lever is
*internal linking + cluster structure*. This plan addresses both.

---

## 1. Cluster architecture (the URL map)

The site is organized into **9 clusters**. Each cluster = 1 hub (pillar) + N spokes, with
**bidirectional internal linking** (hub→every spoke contextually; every spoke→hub with a keyword anchor)
and **sibling linking** (spoke↔related spoke).

### Tier 0 — Brand entity hub
- `/` (homepage) — targets **"macbook repair dubai"** (head term), is the entity anchor, links to all cluster hubs.
- ⚠️ **Cannibalization watch:** `/` vs `/mac-repair-dubai` vs `/macbook-repair-near-me`. Resolution in §3.

### Cluster 1 — MacBook Repair  ⭐ flagship (61 pages)
- **Hub:** `/mac-repair-dubai`
- **Sub-hubs:** `/macbook-pro-repair-dubai`, `/macbook-air-repair-dubai`
- **Model spokes (29):** `macbook-air-13/15-{intel,m1..m5}-YEAR-repair-dubai`, `macbook-pro-13/14/16-{intel,m1..m5}-YEAR-repair-dubai`
- **Service spokes (32):** screen, battery, keyboard, logic-board, water-damage, trackpad, hinge, gpu, ssd-upgrade, ram-upgrade, charging-port, speaker, camera, microphone, flexgate, overheating, virus-removal, data-recovery, etc.
- **Linking rule:** every model + service spoke → `/mac-repair-dubai`. Each model page → its top 4–6 relevant service pages (e.g. MacBook Air M1 → screen/battery/logic-board/water-damage). Each service page → the model hubs.

### Cluster 2 — iMac Repair (21 pages)
- **Hub:** `/imac-repair-dubai`
- **Model spokes:** `imac-24-{m1,m3,m4}-YEAR`, `imac-27-{intel,pro}-YEAR`
- **Service spokes:** screen, logic-board, gpu, power-supply, ssd-upgrade, ram-upgrade, fan-cleaning, overheating, data-recovery, os-reinstall, virus-removal, diagnostic

### Cluster 3 — Mac mini / Studio / Pro + cross-device Mac services (29 pages)
- **Hubs:** `/mac-mini-repair-dubai`, `/mac-studio-repair-dubai`, `/mac-pro-repair-dubai`
- **Model spokes:** the dated model pages under each
- **Cross-device service spokes (`mac-*`):** `mac-data-recovery`, `mac-logic-board-repair`, `mac-os-reinstall`, `mac-full-diagnostic`, `mac-ssd-upgrade`, `mac-fan-cleaning`, `mac-performance-tune`, `mac-port-repair`, `mac-setup-data-migration`, `mac-activation-lock-unlock` — these link UP to `/mac-repair-dubai` and across to all desktop hubs.

### Cluster 4 — iPhone Repair  ⭐ flagship (49 pages)
- **Hub:** `/iphone-repair-dubai`
- **Model spokes:** iPhone 13 → 17 families + SE + Air (13-mini, 13/13-pro/13-pro-max … 17/17-pro/17-pro-max, 17e, 16e, se-3rd-gen, air)
- **Service spokes:** screen, battery, back-glass, charging-port, face-id, camera, water-damage, speaker, microphone, power/volume button, sim-tray, nfc, vibration-motor, icloud-unlock, network-unlock, data-recovery, software-fix, diagnostic

### Cluster 5 — iPad Repair (38 pages)
- **Hub:** `/ipad-repair-dubai`
- **Model spokes:** ipad 9/10/11th-gen, air 4/5/m2/m3/m4 (11"+13"), mini 5/6/7, pro 11"/12.9"/13" m1..m5
- **Service spokes:** screen, battery, charging-port, back-glass, camera, home-button, power-button, speaker, smart-connector, water-damage, icloud-unlock, software-reset, pencil-compatibility, diagnostic
- **(iPod:** `ipod-touch-7-repair-dubai` — orphan; link into iPhone/iPad hubs.)

### Cluster 6 — Locations / Service-area (19 pages)
- **Hub:** `/macbook-repair-near-me`
- **Spokes:** Dubai areas (marina, jbr, jlt, difc, downtown, business-bay, jumeirah, internet-city, silicon-oasis) + emirates (abu-dhabi, sharjah, ajman, al-ain, fujairah, ras-al-khaimah, umm-al-quwain, kalba, khor-fakkan)
- **Linking rule:** each area page → main service hubs (MacBook/iPhone/iPad) + `/contact`. This is the **seo-local** cluster — pairs with GBP.

### Cluster 7 — Sell / Trade-in (transactional, 3 pages + bridges)
- **Pages:** `/sell-macbook-dubai`, `/trade-in-macbook-dubai`, `/sell-faulty-macbook-dubai`
- **Bridges to blog:** best-way-to-sell-old-iphone, how-much-is-my-iphone-worth, should-i-buy-refurbished-macbook, best-refurbished-iphone
- Distinct *commercial-but-not-repair* intent — keep separate from repair clusters, link from device hubs as a secondary CTA.

### Cluster 8 — Blog / Informational (89 posts + 15 top-level how-tos)
- **Category hubs:** `/blog/fixes`, `/blog/buying-guides`, `/blog/care-maintenance`, `/blog/repair-costs`, `/blog/sell-trade-in`, `/blog/apple-news`
- **The bridge rule (critical):** every informational post links to its matching **money page** via `GuideServiceBridge`. e.g. *"macbook-screen-flickering-fix"* → `/macbook-screen-repair-dubai`; *"iphone-screen-repair-cost-dubai-2026"* → `/iphone-screen-repair-dubai`.
- Top-level how-tos (`/how-to-*`, `/do-macbooks-last...`, `/top-10-common-macbook-problems`) = pure AEO/citation bait; same bridge rule.

### Cluster 9 — Trust / Conversion / Legal (E-E-A-T, ~11 pages)
- `/about`, `/contact`, `/reviews`, `/pricing`, `/warranty`, `/refund`, `/privacy`, `/terms`, `/cookies`, `/admin`
- Support author/E-E-A-T signals + conversion. `/reviews` + `/about` feed the entity authority needed for AI citation.

---

## 2. Internal-linking model (the highest-ROI lever past ~500 pages — we're at 350)

Existing infra to use: `RelatedServices.tsx`, `RelatedArticles.tsx`, `GuideServiceBridge.tsx`,
`related-articles.ts`, `mega-menu.ts`.

**Rules (from seo-enterprise §4):**
1. **Bidirectional pillar↔spoke** — every spoke links to its hub with a descriptive keyword anchor; hub links to every spoke.
2. **Priority pages ≤ 3 clicks from home** — all 5 device hubs + sell + locations hub in the homepage/nav.
3. **Sibling links** — model page → its relevant service pages; service page → related services.
4. **Bridge links** — every blog post → matching money page (commercial bridge); every money page → 2–3 supporting guides.
5. **No orphans** — fix `ipod-touch-7`, audit any page with 0 inbound internal links.
6. **Descriptive anchors** — never "click here"; use "MacBook screen repair Dubai" style anchors.

---

## 3. Cannibalization & taxonomy fixes (do before scaling content)

| Risk | Fix |
|---|---|
| `/` vs `/mac-repair-dubai` vs `/macbook-repair-near-me` all chasing "macbook repair dubai" | `/` = brand + head term; `/mac-repair-dubai` = the *service* pillar (broader "Mac repair"); `/macbook-repair-near-me` = "near me" intent + locations hub. Differentiate titles/H1/intent; cross-link, don't compete. |
| `mac-repair` vs `macbook-*` naming | Treat `/mac-repair-dubai` as the umbrella MacBook+desktop pillar; ensure model/service pages anchor to it. |
| Near-duplicate model/service templates (March 2026 penalty risk) | Each page needs ≥60% unique content: model-specific failure modes, real price, year/chip specifics, model-specific FAQ. Audit a sample (§5 QA gate). |
| 350 in sitemap | Sitemap = indexable money/content pages only; keep `/admin` + thin utility pages out. |

---

## 4. How each skill applies (skill → cluster → action)

Following the playbook's end-to-end sequence:

| # | Phase | Skill | What it does on THIS site |
|---|---|---|---|
| 0 | Baseline | **seo-data-benchmarks** | Set expectations (6–12 mo to rank), define KPIs: organic traffic value, Share of Voice, AI citation share. Snapshot current GSC. |
| 1 | Technical foundation | **seo-technical** | Finish the current branch: JSON-LD schema per page type (LocalBusiness, Service, Product/Offer for prices, FAQPage, BreadcrumbList, Article), Core Web Vitals pass, canonicals, sitemap hygiene, allow AI crawlers (GPTBot/ClaudeBot/PerplexityBot/Google-Extended) + `llms.txt`. **← we are here.** |
| 2 | Keyword/topic | **seo-keyword-research** | Validate each cluster against real demand; find gaps (missing models/services/areas); cluster by Parent Topic; tier by TP × Business Potential ÷ difficulty. Confirm no thin pages chasing zero-volume terms. |
| 3 | Architecture | **seo-enterprise** | This document. Build the hub↔spoke link graph, fix cannibalization, QA the programmatic template, internal-linking automation. |
| 4 | Content + on-page | **seo-on-page** + **seo-content-marketing** | Per money page: intent-matched title/meta/H1, answer capsule, model-specific body, price table, FAQ. Per blog post: brief → draft → bridge to money page. Refresh decaying posts. |
| 5 | AEO/GEO | **seo-aeo-geo** | Add 40–60-word answer capsules at top of every page; question-as-heading; cited stats; FAQ schema; entity consistency (NAP + brand) across site + off-domain; presence on AI-trusted platforms. |
| 6 | Local | **seo-local** | ⭐ High priority for a local business. GBP optimization, NAP consistency (matches `site.ts`), review velocity (215 reviews / 5.0 → keep growing), the 19 location pages, "near me" + map-pack, AI "near me" recommendation signals. |
| 7 | Authority | **seo-link-building** | Earn links + **brand mentions** (mentions ≈ backlinks for AI). Digital PR (repair-cost data studies), local citations, unlinked-mention reclamation. |
| 8 | Measure/refresh | **seo-data-benchmarks** + **seo-enterprise** | Track rankings + AI SoV; refresh pages in positions 4–15 for quick lifts; prune persistent zero-traffic pages; quarterly cadence on top earners. |

---

## 5. Prioritization — what to do first (Impact-Effort)

**Quick Wins (high impact / low effort) — DO FIRST**
- ✅ Finish technical schema + CWV (current branch).
- Internal-linking pass across all clusters (bidirectional hub↔spoke + bridges) — biggest lever, mostly mechanical via existing components.
- Answer capsules (40–60 words) on the 5 device hubs + top 10 money pages.
- Fix cannibalization (§3) + orphan pages.
- GBP optimization + review-request flow (seo-local quick wins).

**Strategic (high impact / high effort)**
- Per-page uniqueness pass on model/service templates (kill thin-content risk).
- Full FAQ + schema rollout across all money pages.
- Blog cluster completion + decay refresh.
- Digital PR / link campaign.

**Backlog / Reject**
- Net-new programmatic pages ONLY where they pass the QA gate (unique data + real demand). Do not scale page count for its own sake.

### Programmatic QA gate (run before adding/keeping any templated page)
Unique data source? · ≥60% unique content from 3+ angles? · real search demand? · distinct title/meta/H1? · correct canonical? · not auto-indexing near-dupes? · sample-audited?

---

## 6. Recommended rollout order (cluster priority)

Sequenced by Business Potential × traffic + journey importance:

1. **MacBook cluster** (flagship, brand-core) — hub + 61 pages
2. **iPhone cluster** (49 pages, highest volume) — hub + spokes
3. **Local cluster** (19 areas) + GBP — captures "near me" + map pack
4. **iPad cluster** (38) → **iMac** (21) → **Mac mini/Studio/Pro** (29)
5. **Sell/Trade-in** (3 + bridges)
6. **Blog cluster** (89) — bridge + refresh, continuous
7. **Trust/E-E-A-T** — ongoing (reviews, about, author signals)

Each cluster runs the same loop: **research → architecture/links → on-page+AEO → measure → refresh.**

---

## 7. KPIs / definition of done

- **Technical:** 100% money pages have valid schema; CWV "good"; 0 index-coverage errors; AI crawlers allowed.
- **Architecture:** 0 orphans; every spoke ≤3 clicks from home; bidirectional links verified.
- **Content:** every money page has answer capsule + FAQ + unique body; every blog post bridges to a money page.
- **Local:** GBP fully optimized; NAP consistent everywhere; review velocity tracked.
- **Growth:** organic traffic value ↑, Share of Voice ↑, AI citation share tracked across ChatGPT/Perplexity/Gemini.

---

*Next action: confirm cluster map + priority, then execute Phase-1 quick wins starting with the internal-linking pass on the MacBook + iPhone clusters.*
