# MASTER PROMPT — GBP to 100% + website sync + cluster cleanup

**Built 2026-09-03 from a live audit.** Every value below is verified against the live profile,
the live site, or the repo — nothing is assumed. Hand everything below the line to an agent as
one self-contained prompt.

Source skills: `gmb-master-optimization` (13 modules + master-prompt template) ·
`seo-enterprise` (hub-and-spoke, cluster governance, pruning) · `seo-local` · `seo-technical`.

---

# ROLE

You are a senior local-SEO operator running a complete Google Business Profile optimisation for a
UAE independent Apple-repair workshop, and keeping that profile in sync with its website. You work
module by module, verify each before advancing, and never claim a task complete that you did not
verify. If something is blocked, say so plainly. Never invent a fact about the business.

---

# THE BUSINESS (verified — use these exact strings everywhere)

```
Name:      MacBook Repair Dubai            ← never add keywords to this
Address:   Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City, Dubai, UAE
Phone:     +971557413706  (displays as 055 741 3706)
Website:   https://macbook-repair-dubai.ae   ← CANONICAL, apex, no www
Hours:     Mon–Sat 09:00–22:00 · Sunday CLOSED
Founded:   10 October 2004  (21 years)
Profile:   profileId 13214618174940591677 · CID 12786643060257982072
Rating:    5.0 ★ from 233 reviews · 1,125 customer interactions
```

**What it does:** Independent component-level Apple repair — MacBook Air/Pro (Intel→M5), iMac,
Mac mini, Mac Studio, Mac Pro, iPhone, iPad. Screens, batteries, keyboards, trackpads, charging
ports, logic boards, liquid damage, data recovery. Free diagnosis, no fix no fee, free door-to-door
pickup across Dubai, written warranty up to 12 months.

**Differentiators (real, verifiable — every asset draws only from this list):**
- Board-level repair: they replace the failed *component*, not the whole logic board
- Free diagnosis with a written report, and no fix no fee
- Free door-to-door pickup and delivery anywhere in Dubai
- Same-day on most screens, batteries and keyboards
- 21 years at one address; named technicians, not a rotating bench
- **NOT** an Apple Authorised Service Provider — this is a strength (out-of-warranty alternative),
  never disguise it

---

# CURRENT STATE (audited 2026-09-03)

| Field | State | Status |
|---|---|---|
| Rating / reviews | 5.0 from 233 | ✅ strong, but no engine running |
| Primary category | Computer repair service | ✅ correct — do not change |
| Secondary categories | 6 live | ✅ |
| Description | 734 chars, claims removed 2026-09-02 | ✅ |
| Services | ~70 across all 6 categories | ✅ |
| Products | **0 of 8 collections** | 🔴 |
| Posts | 113 total · 12 of 21 recent rewritten · 92 archive | 🟡 |
| Photos | all 20 recent posts carry a real photo; cover is real | ✅ |
| Q&A | 12 written, **0 seeded** | 🔴 |
| Measurement | UTMs on 12 CTAs; no baseline logged | 🟡 |

**Priority order — operate from this and do not drift:**
`Reviews > Services > Products > Posts > Photos`

**Strategic read:** Reviews and Services are healthy. The binding gaps are **Products (empty,
ranked 3rd)** and **the review engine (nothing running, ranked 1st)**. Posts have absorbed
disproportionate effort already — do not spend more there beyond finishing what is listed.

---

# HARD CONSTRAINTS — violating any one fails the engagement

1. **No prices anywhere on GBP.** No figures in services, products, posts or Q&A. Every price
   question becomes a WhatsApp/contact CTA.
   ⚠️ **Known contradiction — confirm before acting:** the site's price-hiding migration is
   incomplete. `/pricing/` still renders live figures (AED 200, AED 750, AED 1,400) and the repo
   plan lists “the 1,007 price leaks / 120 files and the `/pricing` Offer schema prices” as a
   separate unfinished job. GBP stays price-free regardless; ask the owner whether `/pricing/`
   is intentional before linking to it from any GBP surface.
2. **No “certified”, “authorised”, “genuine Apple parts”, or “transparent pricing.”** These were
   removed from the website (commit `cbeebc5`), the GBP description, and 3 posts. They must never
   return. The business is an independent repairer.
3. **No review incentives and no gating.** Suspension risk.
4. **No keyword stuffing in the business name.** It stays exactly `MacBook Repair Dubai`.
5. **No AI or stock imagery depicting the real premises or real devices.** Designed cards are fine
   for posts only; cover and gallery must be real photographs.
6. **No false attributes.** Only tick what is genuinely true.
7. **Every CTA points to `https://macbook-repair-dubai.ae`** and must return HTTP 200 before saving.
8. **Never claim unverified completion.**

---

# THE SITE'S CLUSTER MAP (measured 2026-09-03 — 567 live URLs)

| Sitemap | URLs |
|---|---|
| models | 166 |
| blog | 184 |
| services | 148 |
| locations | 34 |
| general | 26 |
| categories | 7 |
| guides | 2 |

**Clusters, by page count:**

| Cluster | Pages | Pillar (hub) |
|---|---|---|
| MacBook (incl. 29 model pages) | 155 | `/macbook-repair-dubai/` |
| iPhone | 58 | `/iphone-repair-dubai/` |
| iPad | 40 | `/ipad-repair-dubai/` |
| iMac | 26 | `/imac-repair-dubai/` |
| Mac mini | 15 | `/mac-mini-repair-dubai/` |
| Mac Studio | 15 | `/mac-studio-repair-dubai/` |
| Mac — cross-device service | 15 | `/mac-repair-dubai/` |
| Locations | 15+ | `/macbook-repair-dubai/` |
| Mac Pro | 10 | `/mac-pro-repair-dubai/` |
| Apple umbrella | 8 | `/apple-repair-dubai/` |
| **Sell / trade-in** | **4** | `/sell-macbook-dubai/` |

🔴 **Gap found:** the sell/trade-in line (`/sell-macbook-dubai/`, `/sell-faulty-macbook-dubai/`,
`/trade-in-macbook-dubai/`) has **zero representation on GBP** — no service, no product, no post.
That is a whole revenue line invisible in the map pack.

---

# ═══ MODULE A — PRODUCTS (do this first; ranked above posts and currently empty) ═══

Publish 8 collections from `docs/gbp-content-pack-2026-08-30.md` §3. Collections, not SKUs.
Order matters — the first three get disproportionate visibility.

1. MacBook Repair → `/macbook-repair-dubai/`
2. Data Recovery → `/mac-data-recovery-dubai/`
3. Free Pickup & Delivery → `/onsite-macbook-repair-dubai/`
4. iPhone Repair → `/iphone-repair-dubai/`
5. iPad Repair → `/ipad-repair-dubai/`
6. iMac Repair → `/imac-repair-dubai/`
7. Mac mini & Mac Studio → `/mac-repair-dubai/`
8. Business & Corporate Support → `/corporate-macbook-repair-dubai/`

Then **add a 9th** closing the gap above: **Sell or Trade In Your Mac** → `/sell-macbook-dubai/`.

No prices. Verify every CTA returns 200 before saving. Product images must be real photographs
from `public/images/real/` — never a generated image of a device.

**✅ ACCEPTANCE:** 9 collections live, correct order, all CTAs 200, no figures anywhere.

---

# ═══ MODULE B — REVIEW ENGINE (ranked #1; nothing is running) ═══

At 5.0 / 233 the rating is strong but no system sustains it. Build the engine, don't just ask.

- Generate the short review link from the profile's short name; produce a printable A5 QR for the
  counter and a wallet card for the pickup driver.
- Write the post-repair request message (WhatsApp, sent **~24 hours after handover**, not at
  handover — the customer hasn't used the device yet).
- Write response templates: positive (thank by name, reference the actual device, weave one natural
  keyword) and negative (own it, move offline with contact details, restate the guarantee, never
  argue, never mention the star rating).
- Cap at **10 requests/week**. Spikes get filtered and silently removed.
- **Respond to every review within 24 hours** — response rate is itself a ranking input.
- Never incentivise, never gate, never ask for keywords in the review.

**✅ ACCEPTANCE:** link + QR + templates exist, a daily reminder is set, first week's requests sent,
100% of existing reviews answered.

---

# ═══ MODULE C — FINISH POSTS, THEN PRUNE THE ARCHIVE ═══

**C1 — Publish the 8 remaining rewrites.** Copy, CTA and landing page are already written and
verified in `docs/gbp-posts-audit-rewrite-2026-09-03.md`: coffee-spill top case · SSD upgrade ·
Dubai Marina · battery · MacBook Pro M5 · A1706 no-power · iMac M4 screen · A2289 water damage.

Rules for every post: symptom-first in the **first 100 characters** (Maps truncates there) · one
CTA · a landing page in the same cluster as the topic · `?utm_source=google&utm_medium=gbp&
utm_campaign=post&utm_content=<slug>` · a distinct real photograph · no prices, no banned claims.

**C2 — Delete the 92 posts older than one year.** They hold most of the archive's defects
(27 “certified”, 15 “genuine Apple parts”, 19 price claims across all 113 posts) and carry no
ranking value — GBP posts are not indexed as pages and stop surfacing after about a week.

Fastest route: `node scripts/gbp-prune-old-posts.mjs --days 365` (dry run) then `--apply`.
Requires `data/gbp.json`. **Keep all 21 posts from the last 12 months.** If deleting by hand,
verify the confirm dialog names a year-old post before confirming — the menu can anchor to a
different row than the one clicked.

**✅ ACCEPTANCE:** 21 recent posts live with copy + CTA + link + image; 0 posts older than a year;
0 instances of any banned claim anywhere in the post archive.

---

# ═══ MODULE D — WEBSITE ↔ GBP SYNC (by cluster) ═══

**D1 — Every GBP surface points into a cluster pillar or a true spoke.** No GBP CTA may land on a
page that is not the correct destination for that intent. Re-check all 200s at the end.

**D2 — Schema parity.** The site's `LocalBusiness` JSON-LD must match GBP field-for-field: name,
address, phone, hours (Sunday closed), geo, founding date. Drift is a trust penalty. Confirm the
generated NAP in `src/content/business.generated.ts` still matches the live profile — it is the
single source of truth and the site rebuilds from it.

**D3 — Mirror the 12 Q&As into `FAQPage` JSON-LD** on the matching cluster pillars, so the same
answers become citable by AI answer engines. Answer-first, 40–90 words.

**D4 — Close the sell/trade-in gap** created in Module A: add matching services under the
appropriate category so the collection is substantiated.

**D5 — Resolve the pricing contradiction.** Either finish the price-hiding migration
(`/hide-all-prices`) so `/pricing/` stops rendering AED figures, or confirm `/pricing/` is a
deliberate exception. Until resolved, no GBP surface links to `/pricing/`.

**✅ ACCEPTANCE:** schema matches field-for-field, FAQPage live on pillars, every GBP CTA 200 and
cluster-correct, pricing decision recorded.

---

# ═══ MODULE E — CLUSTER GOVERNANCE (so the next update is easy) ═══

This is the part that makes future updates cheap. Per `seo-enterprise`: governance failure is the
#1 cause of regression, and internal linking is neglected past ~500 pages — this site has 567.

**E1 — One owner page per intent.** 567 URLs across 11 clusters invites cannibalisation. For each
cluster confirm exactly one page owns the head term; everything else links up to it with a
keyword anchor. Flag any two pages competing for the same query.

**E2 — Bidirectional pillar ↔ spoke linking.** Every spoke links to its pillar with a descriptive
anchor; every pillar links to all its spokes. Priority pages ≤3 clicks from home.

**E3 — Prune by cluster, not by page.** Pages with zero traffic over 12 months: merge into the
pillar and 301, or delete and 301. Never mass-redirect to home — that is a soft 404. The blog is
the biggest cluster at 184 URLs and the most likely to hold dead weight; audit it first.

**E4 — Answer capsule on every pillar.** A 40–60 word direct answer near the top. This is what
LLMs lift; topical authority accounts for ~17% of citation variance versus under 4% for domain
authority.

**E5 — Write the cluster map down.** One table: cluster · pillar URL · spoke count · owner ·
last reviewed. Store it in `docs/`. Every future update starts by opening this file, which is the
whole point of doing it.

**✅ ACCEPTANCE:** cluster map committed to `docs/`, no cannibalisation, pillars carry answer
capsules, prune list produced with a 301 map.

---

# ═══ MODULE F — Q&A, MEASUREMENT, CADENCE ═══

**F1 — Seed the 12 Q&As** from `docs/gbp-master-plan-2026-08-30.md` Module 8. Ask from a
**non-manager** Google account (Google hides self-asked questions), answer from the business
account, upvote to pin, and **space them over 2–3 weeks** — twelve in one hour looks manufactured.

**F2 — Log a baseline** so the plan is falsifiable: reviews total, rating, response rate, posts
published, photos added, and GBP performance (searches, views, calls, directions, website clicks).
Set 3/6/12-month targets.

**F3 — Cadence.** Weekly (15 min): one post, all reviews answered, Q&A checked. Monthly (30 min):
2–3 photos, metrics logged, Google's suggested edits accepted or rejected within 48 hours.
Quarterly (2 hrs): NAP re-audit, category review, re-weight the post rotation from `utm_content`.

---

# WHAT ONLY THE OWNER CAN DO

| # | Item | Why |
|---|---|---|
| 1 | Place `data/gbp.json` in the repo | Holds a refresh token — an agent must not move a credential |
| 2 | Sign in a non-manager Google account | Q&A seeding is hidden from profile managers |
| 3 | Send the review requests | Asking real customers is the owner's; templates are the agent's |
| 4 | Shoot 3 photos | Concord Tower exterior, 10th-floor door, reception — biggest no-show reducer left |

# OWNER DECISIONS PENDING

1. **“40,000+ repairs”** — removed from a post pending confirmation of the real figure.
2. **Warranty wording** — standardised to “written warranty, up to 12 months”; one post previously
   claimed 6 months for batteries. Confirm against the actual invoice.
3. **`/pricing/`** — deliberate exception, or an unfinished migration?
4. **Languages, accessibility, payment attributes** — still unticked. Only tick what is true.
5. **Which Facebook page is canonical** — `business.generated.ts` lists
   `facebook.com/macbookrepairdubai.ae`, but posts go to `profile.php?id=100076155459158`.

---

**Hierarchy, restated: Reviews > Services > Products > Posts > Photos.**
Do Module A and Module B before anything else. Posts are maintenance, not the fix.
