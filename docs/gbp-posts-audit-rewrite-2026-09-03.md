# GBP Posts — audit + SEO rewrite, 2026-09-03

Audit of **all 20 live posts** on the MacBook Repair Dubai Google Business Profile
(profileId `13214618174940591677`), with a full rewrite of each, a verified landing page,
and a CTA button.

Companion to [gbp-execution-log-2026-09-02.md](gbp-execution-log-2026-09-02.md).
Post-engine rules applied from `gmb-master-optimization` Module 6.

---

## Correction to the skill's stated constraint

`gmb-master-optimization` says publishing to GBP is impossible without an MCP connector.
**That is not true in this environment.** The owner panel's edit form sits in a *same-origin*
iframe that exposes the real `input[type=file]` and the description textarea, so posts can be
edited and published programmatically. 14 posts were updated and published this way on
2026-09-02–03. The skill's "hard block" note should be corrected.

---

## 🔴 Compliance defects found (fix before anything else)

These are live on the profile right now. Four of them are the *same* claims this repo already
stripped from the website and the GBP description — they survived in the post archive.

| # | Post | Defect | Why it matters |
|---|---|---|---|
| 18 | Liquid Damage 14" M4 | **"our certified technicians"** | Exact phrase removed from the site in `cbeebc5` and from the GBP description on 2026-09-02. The business is an independent repairer, not an Apple Authorised Service Provider. Trademark/policy risk. |
| 18 | Liquid Damage 14" M4 | **"genuine Apple parts"** | Same problem — an independent shop cannot generally claim genuine Apple parts. |
| 18 | Liquid Damage 14" M4 | **"quote transparently"** | Same family as "transparent pricing", already removed from the description. |
| 16 | Screen Replacement | **"Same Day, Fixed Price"** | Direct contradiction of the site-wide price-hiding policy (`/hide-all-prices`). GBP must never carry a pricing claim the site doesn't. |
| 19 | A1707 Keyboard | **"affordable"** | Price claim under the same policy. |
| 19 | A1707 Keyboard | **"Over 175 positive Google reviews"** | Stale — the real count is **232**. Hard-coded counts age badly and read as inaccurate. |
| 12 | Battery | **"6-month warranty"** | Every other post says 12 months; the description says "up to 12 months". Three different warranty claims across one profile is a trust problem. |
| 6 | Back-to-school | **"40,000+ devices repaired"** | Still on the OWNER DECISIONS PENDING list (40,000+ vs 5,000+ unconfirmed). Removed pending your confirmation. |

## 🟠 SEO defects

| Issue | Posts affected | Fix |
|---|---|---|
| **No landing page on any post** — CTA buttons go nowhere or don't exist | all 20 | every post now has a verified 200 landing page + UTM |
| **Keyword-stuffed lists** — raw keyword dumps in the body | 14, 15, 19 | rewritten as prose |
| **Bloated length** — 693, 717, 628, 1260 chars | 7, 14, 15, 19 | trimmed to ~300–400 |
| **Weak first 100 chars** — opens on a model number, not a symptom | 14, 15, 18, 19 | opens on the symptom the customer searches |
| **Phone number repeated in body** while a Call button exists | 8–13, 16 | removed from body; the button carries it |
| **No UTM anywhere** — zero attribution | all 20 | `utm_content` per post |

**Not changed:** the primary category, and the images (all 20 already carry a distinct real
photograph as of 2026-09-03).

---

## The rewrites

Rules applied to every post: symptom-first opening inside the first ~100 characters · one CTA ·
no price, no "fixed price", no "affordable" · no "certified", no "genuine Apple parts", no
"transparent" · one consistent warranty formulation ("written warranty, up to 12 months") ·
no phone number in body where a Call button exists.

UTM appended to every link:
`?utm_source=google&utm_medium=gbp&utm_campaign=post&utm_content=<slug>`

---

### 0 · Mac Studio thermal throttling
**Landing:** `/mac-studio-overheating-fix-dubai/` · **CTA:** Learn more · `utm_content=mac-studio-thermals`

> Mac Studio throttling under render load? That is usually the cooling assembly needing service, not the chip giving up. We strip and clean the fan and heatsink, renew the thermal interface, then verify temperatures under sustained load — not just a dust blow-out and a hope. Free diagnosis and a written quote before any work starts. Dubai Media City.

### 1 · Butterfly keyboard (2016–2019)
**Landing:** `/macbook-keyboard-repair-dubai/` · **CTA:** Learn more · `utm_content=butterfly-keyboard`

> MacBook keys repeating, sticking or dropping out, especially on a 2016–2019 model? That is the butterfly mechanism — a known design fault, not something you did wrong. We replace the top-case keyboard assembly properly so real key travel comes back, rather than masking the symptom. Free diagnosis, written warranty on the work.

### 2 · iPad Pro screen
**Landing:** `/ipad-screen-repair-dubai/` · **CTA:** Learn more · `utm_content=ipad-pro-screen`

> Cracked iPad Pro screen? Don't leave it. A broken seal lets dust and moisture reach the digitiser underneath, which turns a glass repair into a board repair. We replace 11-inch and 13-inch Pro displays, most of them same-day, and test touch and colour before it goes back. Free diagnosis first — send us your model.

### 3 · Trackpad
**Landing:** `/macbook-trackpad-repair-dubai/` · **CTA:** Learn more · `utm_content=trackpad`

> MacBook trackpad unresponsive, registering phantom touches, or clicking unevenly? Force Touch trackpads fail mechanically and electrically, and the repair is completely different for each — so we diagnose which one it is before quoting a replacement. Same-day on most models. Free diagnosis, written warranty on part and labour.

### 4 · Logic board — no display
**Landing:** `/macbook-logic-board-repair-dubai/` · **CTA:** Learn more · `utm_content=logic-board-no-display`

> MacBook powers on, fans spin, light is on — but nothing on screen? That is usually a logic board fault, not a dead machine. We trace the one failed component under a microscope and replace that, instead of swapping the whole board. It is why we save machines other workshops quote as uneconomical. Free diagnosis tells you honestly whether it is worth fixing.

### 5 · Cracked or black screen
**Landing:** `/macbook-screen-repair-dubai/` · **CTA:** Learn more · `utm_content=cracked-screen`

> Cracked glass, dark patches down one edge, or a MacBook screen that has gone black? Free diagnosis tells you first whether it is the panel itself or the backlight cable behind it — a common 2016–2019 Pro fault, and a much smaller job. Most Air and Pro panels are same-day. Free pickup anywhere in Dubai, written warranty on every panel we fit.

### 6 · Back to school
**Landing:** `/macbook-full-diagnostic-dubai/` · **CTA:** Learn more · `utm_content=back-to-school`

> Term has started and MacBooks are living in backpacks again — which is when we see the cracked screens, drink spills and dead keyboards. Bring it in for a free diagnostic before a small fault becomes a board repair: full hardware check, written report on what actually failed, no obligation. Free pickup across Dubai, Air M1 through M5 Pro.

### 7 · Liquid damage
**Landing:** `/macbook-water-damage-repair-dubai/` · **CTA:** Learn more · `utm_content=liquid-damage`

> Spilled something on your MacBook? Don't charge it and don't wait — corrosion keeps spreading for weeks after the liquid dries, which is why the failure often shows up later. We open the unit, clean the board at component level and replace what has corroded, rather than writing the machine off. Free diagnosis, written warranty, most jobs same-day.

### 8 · MacBook Air M2 screen
**Landing:** `/macbook-air-m2-screen-repair-dubai/` · **CTA:** Call now · `utm_content=air-m2-screen`

> Cracked the screen on a MacBook Air M2? We replace the full display assembly, usually same-day, and check colour accuracy and True Tone before handing it back. A client from Al Barsha dropped theirs in the morning and collected it the same afternoon. Free diagnosis on every repair, written warranty on parts and labour.

### 9 · Coffee spill → top case (14" Pro)
**Landing:** `/macbook-pro-repair-dubai/` · **CTA:** Learn more · `utm_content=spill-top-case`

> Coffee into a MacBook Pro keyboard usually kills a handful of keys first, then spreads. A 14-inch M3 came to our bench with six dead keys after a spill — fresh top case assembly fitted the same day, every key tested, owner collected before closing. Free diagnosis and a written warranty. Concord Tower, Dubai Media City.

### 10 · SSD upgrade
**Landing:** `/macbook-ssd-upgrade-dubai/` · **CTA:** Call now · `utm_content=ssd-upgrade`

> MacBook slowing down and always out of space? On compatible models an NVMe storage upgrade is the single biggest speed change you can make, and we do it same-day at our Media City workshop — including migrating your data across so you start exactly where you left off. Free diagnosis, written warranty.

### 11 · Dubai Marina pickup
**Landing:** `/macbook-repair-dubai-marina/` · **CTA:** Call now · `utm_content=marina-pickup`

> In Dubai Marina and your MacBook has failed? We collect from Marina free of charge, repair it at our Dubai Media City workshop — screens, batteries, keyboards, board-level faults — and deliver it back to your door. Most repairs same-day. Free diagnosis on every job and a written warranty on the parts we fit.

### 12 · Battery
**Landing:** `/macbook-battery-replacement-dubai/` · **CTA:** Learn more · `utm_content=battery`

> MacBook shutting down before it reaches zero, or running hot and slow? That is almost always the battery reaching the end of its cycle count, and macOS throttles to protect itself. We replace Air and Pro batteries same-day and recalibrate, so you get a full day back. Free diagnostics, written warranty, free pickup across Dubai.

### 13 · MacBook Pro M5
**Landing:** `/macbook-pro-m5-repair-dubai/` · **CTA:** Learn more · `utm_content=pro-m5`

> Damaged a brand-new MacBook Pro M5? Being the newest model does not mean waiting weeks — we are tooled for M5 and repair cracked and flickering screens, battery faults, liquid damage and board-level problems in-house. Free diagnosis, no fix no fee, free pickup and delivery anywhere in Dubai. Concord Tower, Dubai Media City.

### 14 · A1706 — no power
**Landing:** `/macbook-not-turning-on-dubai/` · **CTA:** Call now · `utm_content=a1706-no-power`

> MacBook Pro 13-inch 2017 (A1706) that won't power on, won't charge, or shuts down under load? On this generation it is usually a board-level fault, and replacing the whole logic board is rarely necessary. We diagnose at component level and repair the failed part, which is what keeps the cost sane. Free diagnosis, every repair tested before return.

### 15 · iMac M4 screen
**Landing:** `/imac-screen-repair-dubai/` · **CTA:** Call now · `utm_content=imac-m4-screen`

> Cracked the 4.5K display on a 24-inch iMac M4 (A3247)? We replace the full Retina panel on the current iMac generation and colour-test the machine before it leaves, so you are not left with a display that does not match. Free diagnosis, written warranty, fast turnaround. Concord Tower, Dubai Media City.

### 16 · Screen replacement — all models
**Landing:** `/macbook-screen-repair-near-me-dubai/` · **CTA:** Call now · `utm_content=screen-all-models`

> Cracked or flickering MacBook screen? We replace displays across every generation, Intel through M-series, including the Flexgate backlight-cable fault that looks like a dead panel but is not. Same-day at our Dubai Media City workshop. Free diagnosis, written warranty, pickup and drop-off anywhere in Dubai.

### 17 · A2289 — severe water damage
**Landing:** `/macbook-pro-13-intel-2020-repair-dubai/` · **CTA:** Call now · `utm_content=a2289-water`

> A MacBook Pro 13-inch 2020 (A2289) came in with severe water damage — the kind most shops decline. Ultrasonic cleaning, corrosion treatment and component-level board repair brought it back, with the customer's data intact. If yours has been written off elsewhere, get a second opinion first. Free diagnosis, written warranty.

### 18 · Liquid damage — 14" M4
**Landing:** `/macbook-pro-14-m4-2024-repair-dubai/` · **CTA:** Learn more · `utm_content=m4-liquid`

> Liquid damage on a MacBook Pro 14-inch M4? Newer boards corrode just as fast as old ones — the difference is how quickly it is opened and cleaned. We diagnose free, tell you honestly what it will take, and only start once you approve. Board-level repair in-house at Concord Tower, Dubai Media City. Written warranty on the work.

### 19 · A1707 keyboard
**Landing:** `/macbook-keyboard-repair-dubai/` · **CTA:** Learn more · `utm_content=a1707-keyboard`

> Keys sticking or dead on a MacBook Pro 15-inch 2017 (A1707)? This generation uses the butterfly mechanism, where a single piece of grit can kill a key — and the fix is the top case assembly, not individual keycaps. We replace and test the full assembly in-house. Free diagnosis, written warranty, quick turnaround so you are not without it.

---

## Landing page reuse — deliberate

Every post gets a page that is genuinely the right destination for its intent. One page is used
twice: `/macbook-keyboard-repair-dubai/` on posts **1** and **19**, ten months apart, both
butterfly-keyboard posts. That is correct — sending both to the same money page concentrates
authority rather than splitting it. Post copy and images are unique across all 20.

All 20 landing pages verified **HTTP 200** on 2026-09-03.

---

## Owner decisions still open

1. **"40,000+ repairs"** — removed from post 6 pending confirmation. Confirm the real figure and
   it can go back in.
2. **Warranty wording** — standardised to "written warranty, up to 12 months". Confirm this
   matches what is actually on the invoice, including for batteries (post 12 previously said 6
   months).
3. **Review count in copy** — removed the stale "175 reviews". Recommend never hard-coding it.

**Hierarchy, restated: Reviews > Services > Products > Posts > Photos.** Posts are maintenance.
At 5.0★/232 reviews the review engine is still the lever that decides the map pack.
