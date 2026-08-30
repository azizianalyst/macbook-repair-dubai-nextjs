# GBP Master Optimisation Plan — MacBook Repair Dubai
**Date:** 2026-08-30 · **Audit:** [gbp-audit-2026-08-30.md](gbp-audit-2026-08-30.md)
**Owner decisions applied:** ① Prices hidden everywhere — **no figures anywhere on GBP**. ② Azizi Technologies and MacBook Repair Dubai deliberately differentiated.

**Binding constraint: completeness, not reviews.** You hold the best rating in your competitive set (5.0 vs 4.7–4.9) and lead the genuine third-party review median (232 vs 175). What is capping you is an empty Services field, empty Products, empty Q&A. Modules 2, 3 and 8 are worth more than review volume this quarter.

**Publishing:** everything below is paste-ready for `/admin/gbp`, which publishes to Google directly (`business.manage`). Nothing here has been published — every item needs your click.

**Strategic hierarchy (stated at the start, restated at the end):** Reviews > Services > Products > Posts > Photos.

---

# MODULE 1 — Emergency triage

Fix these before anything else. Each is live and costing you now.

| # | Fix | Where | Why |
|---|---|---|---|
| 1.1 | Delete **"certified Apple specialists"** from the description | GBP → Business Info | You are not an AASP; your own site says so in 6+ places. Trademark + policy risk. Replacement copy in Module 2. |
| 1.2 | Remove **"transparent pricing"** and **"200+ five-star reviews"** | GBP → Business Info | Price-policy conflict; promotional language; the review number goes stale. |
| 1.3 | Update site review count **216 → 232** | `src/content/business.generated.ts:20` (via `/admin/business`, then rebuild) | Live JSON-LD disagrees with GBP. |
| 1.4 | Fix About page title **"5,000+ Repairs" → "40,000+"** | `src/lib/page-meta-overrides.generated.ts:295` | Contradicts the homepage title, live. |
| 1.5 | Remove `priceRange` from LocalBusiness JSON-LD | `src/lib/schema.ts:48` | Prices are hidden; schema must not carry `AED 150 - AED 3,500`. |
| 1.6 | Remove hard-coded `Offer` prices | `src/lib/schema.ts:103` + `src/lib/page-schema.ts:89–95` | Same reason; structured data must match visible content. |
| 1.7 | Rewrite *"No call-for-price games: we publish the numbers"* | `src/content/blog-taxonomy.generated.ts:12` and `:81` | Directly contradicts the hide-prices decision. |
| 1.8 | Fix the `AED 0` rendering on the homepage | investigate `prices.generated.ts` consumers | Broken output; moot once prices are stripped, but verify. |
| 1.9 | Publish this week's post | GBP → Posts | Last post 6 days ago, prior Aug 8 — cadence broken. |

**Gate:** all 🔴 audit items resolved or explicitly blocked with a reason.

---

# MODULE 2 — Core identity

## 2.1 Description — paste exactly (**734 / 750 chars**, counted; no prices, no claims you can't defend)

> Independent Apple repair specialists in Concord Tower, Dubai Media City, since 2004. We repair MacBook Air and MacBook Pro (Intel through M5), iMac, Mac mini, Mac Studio, iPhone and iPad: screens, batteries, keyboards, charging ports, logic boards, water damage and data recovery. Free diagnosis on every device, and no fix, no fee. Most repairs are completed the same day, and every repair carries a written warranty of up to 12 months. Free door-to-door pickup and delivery across Dubai, including Marina, Downtown, Business Bay, JLT, JBR, DIFC, Deira and Bur Dubai. We work at component level on the board itself, so faults other workshops replace whole units for can often be repaired instead. Walk in, or arrange free collection.

**First 250 characters** (all that shows before truncation) end at *"…logic boards,"* — location, device range and service range all land above the fold. No URLs, no phone number, no prices, no superlatives.

## 2.2 Categories

- **Primary: Computer repair service** — ✅ correct, **do not change**. Changing it resets category-level ranking history.
- **Add as secondary** (you have 9 slots; these open the query classes currently returning zero impressions):
  1. Mobile phone repair shop
  2. Phone repair service
  3. Electronics repair shop
  4. Data recovery service
  5. Screen repair service
  6. Computer service
  7. Computer support and services
- **Drop:** *Used computer store*, *Computer software store*, *Computer accessories store* — they dilute repair intent and are the categories that overlap Azizi Technologies. Per decision ②, resale/multi-brand belongs on the Azizi listing.

Every category above is substantiated by services in Module 3 — that's the rule.

## 2.3 Attributes — tick only what is genuinely true

Confirmed true from the site: **online estimates · onsite services · free pickup and delivery · in-store shopping · small business · repair services.**
Payments — confirm which of *credit cards / debit cards / NFC mobile payments / cash* you actually take.

⚠️ **Owner must verify before ticking:** wheelchair-accessible entrance/parking/restroom (Concord Tower 10th floor — likely yes, confirm), and **languages spoken** (do not assume Arabic/Urdu — confirm with the team).

## 2.4 Other identity fields

- **Opening date:** 10 October 2004 — a 21-year longevity signal most rivals leave blank.
- **Short name:** set one to unlock a clean `g.page/<name>/review` link (needed in Module 7).
- **Holiday hours:** set UAE public holidays in advance — Eid dates shift, confirm each year.

**Gate:** description live and truncating well; 7 secondaries saved; all attributes true; opening date and short name set.

---

# MODULE 3 — Services ⭐ THE BIGGEST WIN

Currently **empty**. This is the highest-value work in the plan.

> **Superseded:** the 34 services below were expanded to **103** in [gbp-content-pack-2026-08-30.md §2](gbp-content-pack-2026-08-30.md). Use that list — it covers all 8 categories, every URL re-verified 200. The subset below is kept for reference.

None over 300 characters, **none carrying a price**.

## Under: Computer repair service (primary) — MacBook

| Service | Description (paste) | Link |
|---|---|---|
| MacBook screen repair | Cracked, flickering or dim display? We replace MacBook Air and Pro screens for every model from Intel to M5, including Flexgate backlight faults. Same-day on most models, written warranty, free pickup across Dubai. | `/macbook-screen-repair-dubai/` |
| MacBook battery replacement | Battery draining fast, swelling, or showing "Service Recommended"? We replace MacBook Air and Pro batteries and restore full runtime, usually the same day. Free diagnosis and a written warranty. | `/macbook-battery-replacement-dubai/` |
| MacBook keyboard repair | Sticky, repeating or dead keys? We repair and replace MacBook keyboards including butterfly-generation top-case assemblies, with a warranty on the work. | `/macbook-keyboard-repair-dubai/` |
| MacBook logic board repair | Won't power on, won't charge, or shutting down at random? We repair the logic board at component level — power rails, charging ICs, no-display faults — instead of swapping the whole board. Your data stays on the machine. | `/macbook-logic-board-repair-dubai/` |
| MacBook water damage repair | Liquid spill? Ultrasonic cleaning, corrosion treatment and board-level repair to recover MacBooks other workshops write off. Free diagnosis, and no fix means no fee. | `/macbook-water-damage-repair-dubai/` |
| MacBook charging port repair | Not charging, or the cable only works at an angle? We repair or replace USB-C and MagSafe charging ports and the charging circuit behind them. | `/macbook-charging-port-repair-dubai/` |
| MacBook trackpad repair | Trackpad not clicking, or registering phantom touches? We repair and replace Force Touch trackpads to restore accurate control. | `/macbook-trackpad-repair-dubai/` |
| MacBook overheating and fan repair | Fans loud, or the machine hot and throttling? We clean fans and vents, renew thermal paste, and replace failed heatsinks so the Mac runs cool and quiet again. | `/macbook-overheating-fix-dubai/` |
| MacBook SSD upgrade | Out of space, or running slow on an ageing drive? We fit larger, faster SSDs to compatible MacBooks and migrate your data across. | `/macbook-ssd-upgrade-dubai/` |
| MacBook not turning on | Black screen, no chime, no response to the power button? Free diagnosis to find whether it's power delivery, the board or the display before any work is quoted. | `/macbook-logic-board-repair-dubai/` |
| MacBook Pro repair | Full service for every MacBook Pro generation, Intel through M5 — screen, battery, keyboard, board-level and liquid-damage repair. | `/macbook-pro-repair-dubai/` |
| MacBook Air repair | Full service for every MacBook Air, Intel through M5 — screen, battery, keyboard, charging and board-level repair. | `/macbook-air-repair-dubai/` |

## Under: Computer repair service — desktop Mac

| Service | Description (paste) | Link |
|---|---|---|
| iMac screen repair | Cracked or failing iMac display, including 4.5K and 5K Retina and iMac M4? Professional panel replacement with full colour and touch-free testing before it goes back to you. | `/imac-screen-repair-dubai/` |
| iMac repair | iMac dead, no display, overheating or needing more storage? Board-level service for every iMac, Intel and M-series. | `/imac-repair-dubai/` |
| Mac mini repair | Mac mini won't power on, no display over HDMI, or due an upgrade? We service every Mac mini generation, Intel and M-series. | `/mac-mini-repair-dubai/` |
| Mac Studio repair | Mac Studio no-display, power or thermal faults, diagnosed and repaired at board level by technicians who work on Apple Silicon daily. | `/mac-studio-repair-dubai/` |
| Mac data recovery | Mac won't boot, SSD failed, or files deleted? We recover data from Intel and Apple Silicon Macs, including liquid-damaged boards. Free assessment, and no recovery means no charge. | `/mac-data-recovery-dubai/` |

## Under: Mobile phone repair shop — iPhone

| Service | Description (paste) | Link |
|---|---|---|
| iPhone screen repair | Cracked or unresponsive iPhone display? Same-day replacement across the iPhone range with quality parts and a written warranty. Free pickup across Dubai. | `/iphone-screen-repair-dubai/` |
| iPhone battery replacement | Battery health low, or the phone shutting down before it hits zero? We replace iPhone batteries and restore full-day runtime, often while you wait. | `/iphone-battery-replacement-dubai/` |
| iPhone charging port repair | Not charging, charging intermittently, or the cable feels loose? We clean or replace the charging port and repair the circuit behind it. | `/iphone-repair-dubai/` |
| iPhone water damage repair | Dropped it in water? Board-level cleaning and component repair to bring the phone back, with a free diagnosis before anything is charged. | `/iphone-repair-dubai/` |
| iPhone back glass repair | Shattered rear glass? Laser-assisted removal and replacement without disturbing the internals. | `/iphone-repair-dubai/` |
| iPhone repair | Full iPhone service — screen, battery, charging, cameras, liquid damage and board-level faults, diagnosed free before any work. | `/iphone-repair-dubai/` |

## Under: Mobile phone repair shop — iPad

| Service | Description (paste) | Link |
|---|---|---|
| iPad screen repair | Cracked iPad, iPad Air, iPad mini or iPad Pro glass or display? Professional replacement with a warranty and a free diagnosis first. | `/ipad-screen-repair-dubai/` |
| iPad battery replacement | iPad not holding charge, or dying mid-day? We replace iPad batteries and restore reliable runtime. | `/ipad-battery-replacement-dubai/` |
| iPad charging port repair | iPad slow to charge or not charging at all? We repair and replace Lightning and USB-C ports. | `/ipad-repair-dubai/` |
| iPad repair | Full iPad service across every generation — screen, battery, charging, buttons and board-level faults. | `/ipad-repair-dubai/` |

## Under: Data recovery service / Screen repair service / other

| Service | Description (paste) | Link |
|---|---|---|
| Apple Watch repair | Cracked Apple Watch screen, battery not lasting, or the watch not powering on? Repaired in-house rather than sent away. | `/apple-watch-repair-dubai/` |
| Free device diagnosis | Bring any Apple device in, or have it collected, and we diagnose the fault and quote before any work starts. No charge, and no obligation to proceed. | `/contact/` |
| Free pickup and delivery | We collect from anywhere in Dubai and return the device to you when it's done, at no cost — Marina, Downtown, Business Bay, JLT, JBR, DIFC, Deira and Bur Dubai included. | `/onsite-macbook-repair-dubai/` |
| Onsite Mac repair | Some faults we fix at your home or office rather than taking the machine away. Ask when you book. | `/onsite-macbook-repair-dubai/` |
| Data transfer and migration | Moving to a new Mac, or recovering from an old one? We transfer your data across intact. | `/mac-data-recovery-dubai/` |
| Mac fan cleaning | Dust-clogged fans and vents cleaned, thermal paste renewed, so the machine runs cool and quiet. | `/mac-fan-cleaning-dubai/` |

**Gate:** all 34 live, none over 300 chars, **no prices anywhere**, every claimed category substantiated, all CTAs verified 200.

---

# MODULE 4 — Products

**Skipped deliberately.** You are a pure service business and prices are hidden — product cards without prices read as broken, and dead listings damage trust. Per the skill's own rule, Module 3 is expanded instead. Revisit only if you start selling refurbished devices from this listing (which per decision ② belongs on Azizi Technologies, not here).

---

# MODULE 5 — Photos

Two classes, never mixed.

**Real photographs — only you can shoot these. Batch-upload in week 1, then 2–3/month.**

| Shot | Why |
|---|---|
| Exterior — Concord Tower entrance, and the 10th-floor office door | People genuinely can't find 10th-floor offices; this reduces no-shows |
| Interior — reception, waiting area, the bench | Completeness + trust |
| Team — technicians at the bench, faces visible | Named technicians already appear in your reviews (Shafiq, Usman, Ali) |
| **Process — microscope work, board-level soldering, ultrasonic cleaning, diagnostics rig** | **Your strongest differentiator. Almost no Dubai competitor has these.** It's also the visual proof of the component-level claim in your description. |
| Before/after — liquid-damaged board cleaned; cracked screen replaced | Matches your top review clusters (water damage 8, screen replacement 12) |
| Cover photo — **must be a real photo**, not a designed card | First image most people see |
| Logo — square, ≥250×250 | |

**Specs:** JPG/PNG, 10 KB–5 MB (over 5 MB is a hard rejection), min 720×720, posts 1200×900. Keep text out of the top and bottom 12% — it gets clipped.

**Never:** stock or generated imagery presented as your premises, your team or a real repair. Designed promo cards are fine *for posts only*.

**Gate:** full real batch uploaded, real cover set, logo set.

---

# MODULE 6 — Post engine (52 weeks)

**Weekly, no exceptions.** Your Maps decline in H1 2026 tracked the posting gaps. Current cadence is ~3 weeks.

**Rules:** first ~100 characters carry the message (Maps truncates early) · one CTA per post · **image must match that post's own topic** · no prices, ever · UTM every link, changing `utm_content` weekly so year two can be re-weighted from data.

**Rotation — 4 intent types, repeating:**

| Week | Type | Purpose |
|---|---|---|
| 1 | **DEVICE** | A specific model + fault (captures implicit model queries) |
| 2 | **AREA** | Free pickup in a named Dubai area (extends beyond map-pack proximity) |
| 3 | **TRUST** | How we work — diagnosis, warranty, component-level repair, what we refuse |
| 4 | **SEASONAL** | Weather, back-to-school, Ramadan/Eid, DSF, exam season |

TRUST posts are the differentiator and feed AI answer engines — do not let them slip.

**UTM pattern:** `?utm_source=google&utm_medium=gbp&utm_campaign=post&utm_content=w01-macbook-screen`

## First 8 posts — paste-ready

**W1 · DEVICE**
> MacBook Pro won't wake, or showing a black screen with the fans running? That pattern usually points at the display cable or the backlight circuit, not a dead machine — and both are repairable at board level. Free diagnosis before anything is quoted, same-day on most models, written warranty. Bring it to Concord Tower, Dubai Media City, or we'll collect it free anywhere in Dubai.
> **CTA:** Learn more → `/macbook-screen-repair-dubai/`

**W2 · AREA**
> Working from Dubai Marina and your MacBook just died? We collect from Marina free, diagnose it the same day at our Media City workshop, and bring it back to you when it's done. No charge for the diagnosis and no fee if we can't fix it.
> **CTA:** Learn more → `/macbook-repair-dubai-marina/`

**W3 · TRUST**
> What "component-level repair" actually means: instead of replacing a whole logic board, we find the failed component on it — a charging IC, a power rail, a corroded trace — and replace that. It takes a microscope, a hot-air station and someone who's done it for twenty years. It's why we can often save machines other workshops declare uneconomical.
> **CTA:** Learn more → `/macbook-logic-board-repair-dubai/`

**W4 · SEASONAL**
> Dubai summer, air-conditioned office, 40°C outside — that temperature swing puts condensation inside laptops, and we see the failures a few weeks later. If your Mac has started shutting down or the fans never stop, get it looked at before corrosion spreads. Free diagnosis.
> **CTA:** Learn more → `/macbook-overheating-fix-dubai/`

**W5 · DEVICE**
> iPhone battery health dropped below 80%, or the phone shutting down before it reaches zero? We replace iPhone batteries in-house, usually while you wait, with a written warranty. Free diagnosis first, so you know whether it's the battery or the board.
> **CTA:** Learn more → `/iphone-battery-replacement-dubai/`

**W6 · AREA**
> Business Bay and Downtown: we collect your MacBook, iMac or iPad free, repair it at our Dubai Media City workshop, and deliver it back. Most repairs are same-day. Free diagnosis, no fix no fee.
> **CTA:** Learn more → `/macbook-repair-business-bay/`

**W7 · TRUST**
> We are not an Apple Authorised Service Provider, and we'll tell you when Apple is the better option. If your Mac is still inside Apple's warranty or AppleCare for a covered fault, go to Apple — you'll pay nothing. We're the alternative for out-of-warranty machines, board-level faults Apple won't repair, and anyone who needs it back today.
> **CTA:** Learn more → `/warranty/`

**W8 · SEASONAL**
> Back-to-school means MacBooks living in backpacks, and we see the cracked screens and bent lids that follow. Student or parent, bring it in for a free diagnosis — most screen replacements are done the same day, and we collect free anywhere in Dubai.
> **CTA:** Learn more → `/macbook-screen-repair-dubai/`

## Weeks 9–52 — topic calendar

| Wk | Type | Topic | Wk | Type | Topic |
|---|---|---|---|---|---|
| 9 | DEVICE | iMac M4 no display | 31 | TRUST | Genuine vs quality-alternative parts |
| 10 | AREA | JLT free pickup | 32 | SEASONAL | Peak-heat overheating round two |
| 11 | TRUST | What free diagnosis includes | 33 | DEVICE | iPad Pro screen |
| 12 | SEASONAL | Humidity + liquid damage | 34 | AREA | Al Barsha |
| 13 | DEVICE | MacBook Air M4 battery | 35 | TRUST | Why we refuse some repairs |
| 14 | AREA | Palm Jumeirah | 36 | SEASONAL | Back-to-school round two |
| 15 | TRUST | Warranty explained | 37 | DEVICE | Mac Studio thermals |
| 16 | SEASONAL | Ramadan hours *(confirm dates — lunar)* | 38 | AREA | Dubai Marina round two |
| 17 | DEVICE | Mac mini SSD upgrade | 39 | TRUST | Data safety during repair |
| 18 | AREA | Deira | 40 | SEASONAL | UAE National Day hours |
| 19 | TRUST | No fix, no fee | 41 | DEVICE | iPhone back glass |
| 20 | SEASONAL | Eid hours *(confirm — lunar)* | 42 | AREA | Downtown round two |
| 21 | DEVICE | MacBook keyboard / butterfly | 43 | TRUST | 21 years, same team |
| 22 | AREA | Bur Dubai | 44 | SEASONAL | DSF |
| 23 | TRUST | How we quote | 45 | DEVICE | iMac 5K screen |
| 24 | SEASONAL | Exam season turnaround | 46 | AREA | Jumeirah |
| 25 | DEVICE | Water-damage rescue | 47 | TRUST | What to do the minute you spill |
| 26 | AREA | DIFC | 48 | SEASONAL | Year-end backup push |
| 27 | TRUST | Data recovery, no recovery no charge | 49 | DEVICE | MacBook Pro M5 |
| 28 | SEASONAL | Summer travel prep | 50 | AREA | JBR |
| 29 | DEVICE | Apple Watch screen | 51 | TRUST | Choosing a repair shop — red flags |
| 30 | AREA | Al Sufouh / Media City | 52 | SEASONAL | New-year device health check |

⚠️ **Weeks 16, 20 and 40 carry shifting dates** — Ramadan and Eid move each year, National Day is fixed at 2 December. Confirm before scheduling.

**Gate:** 52 topics scheduled, images topic-matched, UTMs applied, no empty weeks.

---

# MODULE 7 — Review engine

**Not your binding constraint — but it is what protects you long-term.**

**The real gap:** set median 409 (leader GEEKS 1,105). Excluding your own Azizi listing, third-party median is 175 — **you already lead.** Target the 400+ band over 12 months to put distance between you and MacTech Pro (175).

**Maths:** 232 → 400 = 168 reviews. At **4/week ≈ 17/month, that's ~10 months.** Achievable. At 2/week it's 21 months — too slow.

**Rating realism:** do not protect the 5.0. A 4.8–4.9 at 400+ outranks a 5.0 at 232 in every local model, and a perfect score at scale reads as filtered. Ask everyone, unconditionally.

**Pacing:** cap at ~10/week. Spikes get filtered and silently removed.

**Timing:** ask ~24 hours after handover, not at the counter — the customer hasn't used the device yet.

**Channels, by yield:**
1. WhatsApp follow-up 24h after collection/delivery (your highest-volume channel — you already have the thread)
2. QR code at the counter + verbal ask at handover
3. Corporate/bulk clients — longer, more specific, more credible reviews
4. Pickup-and-delivery customers — the driver hands over a card

**Reply to every review within 24 hours.** You're at 100% — hold it.
- *Positive:* thank by name, reference the specific device and fault, weave one natural keyword. Vary the wording — your current replies repeat verbatim.
- *Negative:* own it, give a direct contact, restate the warranty, move it offline. Never argue, never mention the star rating.
- **Never** claim "Apple Certified" in a reply — scrub the templates.

**Outstanding:** the 2★ with no comment (Dec 2025) and the 1★ — report the no-comment one to Google as it carries no substantive content.

**Prohibited:** incentives · gating · bought reviews · staff or family reviews · bulk-mailing an old customer list · asking customers to include keywords.

**Diagnostic:** if you're under pace at month 3, it is almost always that the 24h follow-up isn't being sent consistently. Check that before changing anything else.

**Gate:** review link + QR + templates live, daily reminder set, on pace, 100% response ≤24h, monthly tracking started.

---

# MODULE 8 — Q&A

Currently **empty** — and it's crowd-editable, so if you don't fill it, a competitor or a wrong guess will, permanently.

**Method:** ask from a *personal* Google account (Google hides self-asked questions posted as the business), answer from the *business* account, upvote your answer to pin it. **Space these over 2–3 weeks** — twelve in one hour looks manufactured. Answer-first, 40–90 words.

1. **Are you an Apple Authorised Service Provider?**
   No. We're an independent Apple repair specialist and have been since 2004. That means we can do board-level repairs Apple doesn't offer, and usually return your device faster. If your Mac is still covered by Apple's warranty or AppleCare for a covered fault, we'll tell you — you'll be better off going to Apple.

2. **How long does a MacBook screen replacement take?**
   Most screen replacements are completed the same day. We diagnose first, free, then confirm the timeline before starting. Bring it to our Dubai Media City workshop or we'll collect it free anywhere in Dubai and deliver it back when it's done.

3. **Do you charge for diagnosis?**
   No. Diagnosis is free on every device, and there's no obligation to proceed. If we can't fix the fault, there's no fee at all.

4. **What warranty do you give?**
   Every repair carries a written warranty of up to 12 months, depending on the repair and the part. We'll tell you the exact term before you approve the work, and it's on your invoice.

5. **Do I need an appointment?**
   No, you're welcome to walk in — we're on the 10th floor of Concord Tower, Dubai Media City, opposite Media City Metro. If you'd rather not travel, message us and we'll arrange free collection.

6. **Do you collect and deliver?**
   Yes, free anywhere in Dubai — Marina, Downtown, Business Bay, JLT, JBR, DIFC, Deira, Bur Dubai and beyond. We collect, diagnose, repair, and return the device to you.

7. **Can you recover data from a Mac that won't turn on?**
   Often yes, including from liquid-damaged boards and failed SSDs. Assessment is free, and if we can't recover your data there's no charge.

8. **Do you repair water-damaged MacBooks?**
   Yes. We ultrasonically clean the board, treat corrosion and repair at component level — machines other workshops decline are frequently recoverable. The sooner you bring it in, the better the odds. Don't try to charge it first.

9. **Which MacBook models do you repair?**
   All of them, Intel through Apple Silicon M5 — MacBook Air and MacBook Pro of every generation, plus iMac, Mac mini and Mac Studio.

10. **Do you repair iPhones and iPads too?**
    Yes — screens, batteries, charging ports, back glass and board-level faults across the iPhone and iPad range.

11. **Where exactly are you and is there parking?**
    Concord Tower, Office 45, 10th floor, Dubai Media City, about 120 m from Media City Metro on the Red Line. Tower parking is paid; there's free street parking on Al Sufouh Road.

12. **Are you open on Sunday?**
    No, we're closed Sundays. We're open Monday to Saturday, 9am to 10pm.

**Gate:** 12 seeded and spaced over 2–3 weeks, answer-first, weekly monitoring for new public questions.

---

# MODULE 9 — NAP consistency & entity consolidation

## 9.1 Canonical NAP — use this string everywhere

```
MacBook Repair Dubai
Office 45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City, Dubai, UAE
055 741 3706  ·  +971 55 741 3706
macbook-repair-dubai.ae
Mon–Sat 09:00–22:00 · Sunday closed
```

**Fix:** GBP currently reads "Al Safouh Second"; the site reads "Al Sufouh". Pick one — recommend **Al Sufouh** (matches the site, schema and the Dubai municipal spelling) and correct GBP.

## 9.2 The brand collision — `macbookrepairsdubai.ae`

A different business (Regal Tower, Business Bay, +971 56 970 9325) trades as "Macbook Repair Dubai", ranks directly beneath you for your own brand, and **owns the LinkedIn "MacBook Repair Dubai" profile pointing at their domain**.

You cannot remove them. You out-compete them on entity strength:
- **Claim your own LinkedIn company page** under the exact name, linked to `macbook-repair-dubai.ae` — currently the only LinkedIn result for your brand is theirs
- Keep `sameAs` in your schema pointing at every profile you *do* own (Facebook, Instagram, YouTube already in `business.generated.ts`)
- Build brand-name citations that carry your address and phone, so the entity resolves to Media City rather than Business Bay
- Monitor for suggested edits on your listing — a same-name competitor is exactly who submits them

## 9.3 Azizi Technologies — differentiate (decision ②)

Google currently lists your own Azizi listing as a competitor to this one. Stop the overlap:

| | MacBook Repair Dubai | Azizi Technologies |
|---|---|---|
| Position | Apple-only specialist, Media City | General IT / multi-brand / resale |
| Primary category | Computer repair service | Computer support and services |
| Categories to hold | Apple/phone/data-recovery repair | Used computer store, software, accessories, multi-brand |
| Services | The 34 above | Windows/Lenovo/HP, networking, IT support, refurbished sales |
| Never do | Sell refurbished devices from this listing | Claim Apple-specialist positioning |

The three dropped categories in Module 2.2 move here. That alone stops most of the cannibalisation.

## 9.4 Citation audit — check each against the canonical NAP

Website footer · contact page · LocalBusiness JSON-LD · Facebook · Instagram · YouTube · LinkedIn (claim) · **Apple Business Connect (consistently under-claimed — your competitors almost certainly haven't)** · Bing Places · OpenStreetMap · UAE directories (Yellow Pages UAE, Connect.ae, Dubai Local).

**Gate:** address string reconciled, LinkedIn claimed, Azizi differentiation executed, Apple Business Connect claimed, citation checklist complete.

---

# MODULE 10 — Website ↔ GBP alignment

| Task | File | Action |
|---|---|---|
| Review count parity | `src/content/business.generated.ts:20` | 216 → 232, and re-check monthly |
| Remove priceRange | `src/lib/schema.ts:48` | Delete the field |
| Remove Offer prices | `src/lib/schema.ts:103`, `src/lib/page-schema.ts:89–95` | Delete price/priceCurrency from Offers |
| Hours parity | `src/lib/schema.ts:60–67` | ✅ already correct (Mon–Sat 09:00–22:00, Sun absent = closed) |
| Address parity | `src/lib/schema.ts:53` | Align with the GBP fix in 9.1 |
| About title | `src/lib/page-meta-overrides.generated.ts:295` | "5,000+" → "40,000+" |
| Price-promise copy | `src/content/blog-taxonomy.generated.ts:12,81` | Remove "we publish the numbers" |
| **FAQPage schema** | money pages | Mirror the 12 Module 8 Q&As into `FAQPage` JSON-LD so the same answers become citable by AI answer engines |
| Meta description price leak | homepage + area pages | SERP currently shows "starts from AED 150 for a single key" — strip once hide-prices ships |

**Gate:** schema matches GBP field-for-field, FAQPage live, no price in any structured data, every GBP CTA resolves 200 (verified — only `macbook-overheating-repair-dubai` was wrong, corrected to `macbook-overheating-fix-dubai`).

---

# MODULE 11 — Measurement

**Instrument:** UTMs on every GBP CTA (Module 6 pattern) · GA4 events for calls, WhatsApp clicks, direction requests, form submits · GBP Performance (searches, views, calls, directions, website clicks) · GSC branded vs non-branded split.

⚠️ **Supermetrics is dead** (trial expired 2026-06-30). Your `/admin/gbp/insights` route pulls Performance directly from the Business Profile API — use that instead, or re-subscribe.

**Monthly log:** reviews total · net new · rating · response rate · posts published · photos added · GBP views (Maps / Search split) · actions (calls / directions / website).

**Baseline — 2026-08-30:**
| Metric | Value |
|---|---|
| Reviews | 232 |
| Rating | 5.0 |
| Services listed | 0 |
| Q&A | 0 |
| Post cadence | ~3 weeks |
| Response rate | 100% |

**Targets:**
| | 3 months | 6 months | 12 months |
|---|---|---|---|
| Reviews | 285 | 340 | 400+ |
| Rating | ≥4.9 | ≥4.9 | ≥4.9 |
| Services | 34 | 34 | 34 |
| Q&A | 12 | 15 | 20 |
| Posts | 13 (weekly) | 26 | 52 |
| Non-branded impressions | +25% | +60% | +120% |

---

# MODULE 12 — Maintenance cadence

- **Weekly (15 min):** publish the post · respond to every review · check for new public Q&A
- **Monthly (30 min):** 2–3 real photos · log Module 11 metrics · accept/reject Google's suggested edits within 48h (watch for edits from the same-name competitor) · glance at competitor profiles
- **Quarterly (2 hrs):** full NAP re-audit · re-check categories · add Q&As · re-weight the post rotation from UTM data · confirm review count still matches the site
- **On any change** (hours, phone, address): GBP first, then every listing within 7 days

---

# MODULE 13 — Final acceptance audit

Run **logged out, on mobile and desktop** — the owner view differs from the public one and mobile truncates earlier.

- [ ] Description shows no "certified Apple", no prices, no review count; first 250 chars read as a complete message
- [ ] 34 services live, none truncated, no prices
- [ ] 7 secondary categories saved; diluting three removed
- [ ] 12 Q&As live and pinned
- [ ] Real photo batch uploaded; cover is a real photograph
- [ ] Posts running weekly, no gaps
- [ ] Every CTA resolves 200
- [ ] Site JSON-LD matches GBP: name, address, phone, hours, review count; no priceRange, no Offer prices
- [ ] LinkedIn claimed; Apple Business Connect claimed
- [ ] Azizi Technologies differentiated — no shared categories
- [ ] Review response rate 100%, on pace for 400
- [ ] Attributes all verified true (languages and accessibility confirmed with staff)

---

## OWNER DECISIONS STILL PENDING

1. **Languages spoken** — must confirm with the team before ticking the attribute.
2. **Accessibility attributes** — confirm Concord Tower wheelchair access.
3. **Payment methods** — confirm which to tick.
4. **"40,000+" vs "5,000+"** — which is the true repair count? Everything else keys off it.
5. **Ramadan/Eid 2027 dates** — needed before scheduling weeks 16 and 20.
6. **Warranty wording** — GBP says "90-day to 12-month", site says "up to 12 months". Align on one.

## BLOCKED

- **Supermetrics GMB API** — trial expired 2026-06-30. Historical Maps/Search view trends are unavailable until you re-subscribe or pull them from `/admin/gbp/insights`.
- **Publishing** — every asset here is paste-ready but nothing is published. Your `/admin/gbp` can push it via the Business Profile API; it needs your authorisation and click.

## NEXT 30 DAYS

| Week | Do |
|---|---|
| 1 | Module 1 triage in full — kill "certified Apple", fix review count, strip priceRange, publish this week's post |
| 2 | Module 3 — all 34 services live. This is the single biggest win in the plan. |
| 3 | Module 2 identity — new description, 7 secondary categories, attributes, opening date, short name. Start Q&A seeding (4–5). |
| 4 | Finish Q&A (12 total), upload the real photo batch, start the 24h WhatsApp review follow-up |

**Restating the hierarchy: Reviews > Services > Products > Posts > Photos.** Services is where your leverage is this quarter — but the review follow-up in week 4 is what compounds. Don't do the fun content work and skip it.
