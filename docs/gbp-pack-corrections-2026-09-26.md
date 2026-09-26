# GBP content pack: corrections, 2026-09-26

**What this is.** A log of every change made today to [gbp-content-pack-2026-08-30.md](gbp-content-pack-2026-08-30.md), with the reason for each.

The pack was written on 2026-08-30. Two days later, on 2026-09-01, the owner confirmed there is **no in-house Apple Watch or AirPods service**. The pack still offered Apple Watch in three places:
- the description
- the services list
- the W29 post

A full read of the pack found more to fix:
- prices printed inside the images
- a GITEX date that is wrong for 2026
- a few claims that cannot be checked

**Regenerated.** `node scripts/gen-gbp-content.mjs` was run after the edits, and every gate passed:

```
description  746/750 chars
categories   1 primary + 4 to add, 5 to remove
services     103   (51 Computer repair · 16 Mobile phone repair shop · 11 Data recovery · 11 Phone repair
                    · 5 Computer service · 5 Computer support and services · 3 Screen repair · 1 Electronics repair shop)
posts        52 full bodies, 52 briefs
```

The regenerated `src/content/gbp-content.generated.ts` (admin only) contains none of these: "watch", "airpods", "AED", "opposite", "GITEX", "most-collected", "within the hour" or "same workshop".

---

## ⚠️ Owner action: the live profile still has the old description

According to [gbp-execution-log-2026-09-02.md](gbp-execution-log-2026-09-02.md) §2, the **old 734-character description was pasted into the live profile on 2026-09-02.** That text says:
- "…iPhone, iPad **and Apple Watch**"
- "MacBook Neo **(Intel through M6)**", although no MacBook has an M6 chip

**Paste the new description from the pack's §1** (746/750 characters) into Business Profile Manager → Edit profile → Description.

The Apple Watch *service* was already deleted from the live profile on 2026-09-02. With today's fix it can no longer come back if the 103 services are published from the generated file.

---

## 1. Description (§1)

| | Before (734 chars, live on GBP since 2026-09-02) | After (746 chars) | Why |
|---|---|---|---|
| Opening | "Independent Apple repair specialists in Concord Tower, Dubai Media City, since 2004." | "Independent Apple repair specialists since 2004, based in Concord Tower, Dubai Media City." | The old wording says the business has been *in Concord Tower* since 2004. Nothing on record supports that. The founding date (10 Oct 2004) is recorded; the address history is not. |
| Devices | "MacBook Air, MacBook Pro and MacBook Neo (Intel through M6), iMac, Mac mini, Mac Studio, iPhone, iPad and Apple Watch" | "MacBook Air and MacBook Pro (Intel through M5), MacBook Neo, iMac, Mac mini, Mac Studio, iPhone and iPad" | **No Watch service** (owner, 2026-09-01). **No M6 MacBook exists.** M6 is only in the Mac mini (`docs/apple-lineup-2026-09-26.md`). The chip range now sits on Air and Pro only: the Neo runs an A18 Pro, so "Neo (Intel through M5)" was wrong. |
| Speed | "Most repairs are completed the same day" | "Many repairs are done the same day" | "Most" is a proportion no one has measured. "Many" is true without job data. It also saves characters. |
| Warranty | "every repair carries a written warranty of up to 12 months" | "every paid repair carries a written warranty of up to 12 months, depending on the repair" | Matches `WARRANTY.headlineLong` in `site.ts`. The terms run from 15 days (board, liquid, data, keyboard) through 15 days–3 months (screens) and 3 months (battery) to 12 months (hardware). "Every repair … 12 months" read as flat. |

The character count was measured with `node` (`d.length`) and is plain ASCII. The heading now reads "746 / 750 chars".

## 2. Services (§2)

| Row | Before | After | Why |
|---|---|---|---|
| Electronics repair shop (1) | **Apple Watch repair**: "…Repaired in-house rather than sent away." → `/apple-watch-repair-dubai/` | **Apple repair**: "Mac, iPhone and iPad repair from one independent Dubai Media City workshop: screens, batteries, charging, liquid damage and board-level faults. Free diagnosis and a written quote before any work starts." → `/apple-repair-dubai/` | The service was false, and its URL now 301s in the code. The generator requires every claimed category to have at least one service, so the slot is refilled with a true one. That keeps "Electronics repair shop" valid and the count at 103. `/apple-repair-dubai/` is also the plan §2.1 target for "apple repair dubai". It returned 200 live on 2026-09-26. |
| MacBook Air screen replacement | link `/macbook-air-screen-repair-dubai/` | link `/macbook-air-screen-replacement-dubai/` | Plan §2.1 keeps `/macbook-air-screen-replacement-dubai/` and 301s the other URL into it. The service name already matches the kept slug. Both return 200 today, so nothing breaks before the 301 ships. |
| SSD data recovery | "…NAND-level recovery in our own lab." | "…On T2 and Apple Silicon Macs the data is encrypted to the board, so we revive the original board to recover it. Free assessment first." | Chip-off (NAND-level) recovery cannot decrypt T2 or Apple Silicon storage. The pack's own T2 row says the original board must be revived. The old line was technically misleading, and "our own lab" was unverified. |
| iPhone Air repair | "the latest ultra-thin iPhone" | "Apple's ultra-thin iPhone Air" | "Latest" goes stale. Apple now sells the iPhone 18 Pro and the Duo. |

Checked and left as they are:
- Every other link in the pack resolves to a live route, and none is a redirect source in `next.config.ts` or `redirects.generated.ts` (checked 2026-09-26).
- No row carries a price or a certification claim.

## 3. Products (§3)

The pack's §3 had drifted from what was actually published. [gbp-products-published-2026-09-05.md](gbp-products-published-2026-09-05.md) records the live set, which uses real photos. Three §3 rows pointed at infographics with AED prices printed in them. They now match the published photos:

| Product | Before | After | Price text found by OCR in the old image |
|---|---|---|---|
| Mac mini & Mac Studio | `topics/mac-studio-repair-dubai.jpg` | `real/lab/mac-studio-dubai.jpg` | "AED 2,800 (chip cost estimate)" |
| iPad Repair | `topics/ipad-repair-hub-dubai.jpg` | `real/lab/ipad-on-bench-dubai.jpg` | "Base Price: AED 4,999", "AED 850", "AED 1,450", "AED 2,100"… |
| Business & Corporate Support | `topics/annual-maintenance-contract-dubai.jpg` | `real/team/team-workshop-dubai.jpg` | "AED 125,000 / YEAR", "AED 950/ VISIT", "AED 2,450,000"… |

A note was added under §3 pointing to the published-products doc as the record of what is live.

## 4. Posts (§5 table and §5A bodies)

| Week | What changed | Why |
|---|---|---|
| **W29** (Mon 15 Mar 2027) | **Replaced.** It was an Apple Watch DEVICE post with CTA `/apple-watch-repair-dubai/` and image `topics/apple-repair-dubai.jpg`. It is now an **iPad screen** DEVICE post: CTA `/ipad-screen-repair-dubai/`, image `topics/ipad-screen-repair-dubai.jpg` (the iPad topic image already used at W33). The angle is display faults: lines, dark spots, touch not registering. It covers panel vs digitiser vs board, free diagnosis, a written quote, and the warranty term stated for the chosen part. The §5 row 29 brief was updated to match. | No Watch service. The old image also shows "AED 299/yr". W33 already covers cracked iPad glass, so W29 takes a different angle and the two don't repeat. No numeric warranty is given because iPad screens carry 15 days (aftermarket) to 3 months (genuine) per `/warranty/`. |
| **W8** (Mon 19 Oct 2026) | **Rewritten.** "GITEX week… 15 minutes from the World Trade Centre… free collection from your hotel or stand" became a post-summer thermal-service post. The CTA, image and SEASONAL type are unchanged. The §5A intro line was updated too. | **GITEX Global 2026 is 7–11 Dec 2026 at Dubai Exhibition Centre, Expo City**, not at DWTC in October ([gitex.com](https://www.gitex.com/), [Dubai Exhibition Centre](https://www.dubaiexhibitioncentre.com/en/whats-on/gitex-global-2026)). The "15 minutes" figure was also unmeasured. |
| **W1** | "Written warranty of up to 12 months" → "Written warranty on the work, with the term for your panel stated on the quote before you approve". "Concord Tower, Office 45, 10th floor, Dubai Media City — opposite Media City Metro" → "Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City" | It is a **screen** post, and screens carry 15 days to 3 months (`/warranty/`), not 12 months. On the landmark, see "Metro" below. |
| **W7** + §5 row 7 | "…the work we've done **from the same workshop** since 2004" → "…since 2004". The image changed from `topics/applecare-warranty-repair-dubai.jpg` to `real/team/macbook-bench-repairs-dubai.jpg`. | Nothing records that the workshop was at the same premises for 21 years. The old image shows "AED 800–2500+", "AED 395 (screen)", "AED 1055"… and "MIL-STD-810H CERTIFIED". |
| **W13** §5 row 13 (brief only) | Image changed from `topics/macbook-battery-replacement-dubai.jpg` to `real/lab/macbook-battery-internals-dubai.jpg`. | The old image shows "PART NO. A3112 – AED 849". The W13 body already used the photo. |
| **W15** + §5 row 15 | Image changed from `topics/applecare-warranty-repair-dubai.jpg` to `brand/team-portrait.jpg`. | Same AED image as W7. |
| **W18** + §5 row 18 | Image changed from `topics/macbook-repair-old-dubai.jpg` to `topics/macbook-repair-dubai-pickup.jpg`. | The old image shows **"PICKUP FEE: AED 10"**, "DELIVERY COST: AED 30", "TOTAL COST: AED 40/60/80". That contradicts free pickup. It also shows **"APPLE WATCH ULTRA 3"**. The replacement is the image every other AREA post uses. |
| **W30** + §5 row 30 | "Tenth floor of Concord Tower, **directly opposite Media City Metro**" → "Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City" | See "Metro" below. |
| **W37** + §5 row 37 | Image changed from `topics/mac-studio-repair-dubai.jpg` to `real/lab/macbook-cooling-fan-macro-dubai.jpg`. | The old image shows "AED 2,800". No price-free Mac Studio image exists in the repo. A cooling-fan photo matches the post's subject (cooling assembly service). |
| **W38** + §5 row 38 | Removed "our most-collected area, and for good reason". | It is a statistic with no job data behind it. |
| **W43** + §5 row 43 | "21 years, same workshop, same team. Shafiq has led the MacBook bench for 15 of them…" → "Repairing Apple devices since 2004. Shafiq has led the MacBook bench for 15 years…". Hashtags changed from `#21Years #SameTeam` to `#Since2004 #MeetTheTeam`. Added a "before posting: check `TEAM` in site.ts" line. | The post runs on 21 Jun 2027, when the business will be **22** years old (founded 10 Oct 2004). "Same team for 21 years" contradicts the roster: Shafiq has 15 years, Usman 11. "Same workshop" is unverified. |
| **W49** | Added a "before posting: check the lineup" line. | The post says M5 is the newest MacBook Pro chip. An M6 MacBook Pro is rumoured for late 2026, so by 2 Aug 2027 the post may be stale. |
| **W50** | "most JBR pickups are collected within the hour of a WhatsApp message" → "We're a short drive away in Dubai Media City, and you get a written quote before any work starts." | An operational statistic nobody has measured. (An interim "JBR is next door" wording was also dropped: JBR is not adjacent to Media City.) |
| W5, W12, W14, W16, W24, W28, W29, W30 | "Concord Tower, Office 45, Dubai Media City" → "Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City" | Identical NAP. The string now matches `business.generated.ts` (`street` + `area`) exactly. |

### Metro

The site and the pack said the workshop is "opposite Media City Metro". **Dubai Metro has no station with that name.** Property listings place the building by other landmarks:
- Bayut lists the Palm Jumeirah tram stop "1 minute away", and Mall of the Emirates and First Abu Dhabi Bank metro stations 8–9 minutes away ([bayut](https://www.bayut.com/buildings/concord-tower-dmc/)).
- Other listings say the Media City tram stop is opposite the tower.

The metro claim was removed from the pack rather than guessed at. **Owner: confirm the correct landmark** (probably the tram stop) and use one wording everywhere. The site repeats "Across from Media City Metro", for example in the `/apple-repair-dubai/` FAQ.

## 5. The "Deliberately excluded" section

Added two items to it:
1. **Apple Watch, AirPods, Apple TV and HomePod are not offered.** Keep them off the description, services, products and posts.
2. **Seven topic infographics must not be uploaded to GBP** until they are regenerated without prices:
   - `annual-maintenance-contract-dubai`
   - `apple-repair-dubai`
   - `applecare-warranty-repair-dubai`
   - `ipad-repair-hub-dubai`
   - `mac-studio-repair-dubai`
   - `macbook-battery-replacement-dubai`
   - `macbook-repair-old-dubai`

## 6. Checked and deliberately left alone

| Item | Why it stays |
|---|---|
| W7 "We are **not** an Apple Authorised Service Provider" | It is a denial. The generator's negation rule allows it on purpose. |
| W14 "marking 55 years" (UAE National Day, 2 Dec 2026) | True: the federation dates from 2 Dec 1971. |
| W12 / W16 "takes 20 minutes", W44 "twenty minutes" (used-Mac pre-purchase check) | This is a service promise the workshop controls, not a claim about the past. **Owner:** confirm it is realistic, or change it to "while you wait". |
| W5 "usually while you wait", W13 / W49 "same day on most models" | These are consistent with site-wide copy and aren't listed in `TRUST-CLAIMS.md` as open. Change them only if the owner says otherwise. |
| W25, W47, §5 row 12: `topics/blog-water-damage-dubai.jpg` | OCR found no price. One panel reads "CONTACT **CERTIFIED** REPAIR". That is generic first-aid advice, not a claim about this business, so the risk is low. If the image is ever regenerated, change the panel to "Contact a repair specialist". |
| W40 "New macOS release season" (Mon 31 May 2027) | Slightly early: WWDC announces the new macOS in June, and it ships in September. Not a false claim about the business. |
| `real/lab/mac-studio-dubai.jpg` | The photo shows a **Mac mini** (two front USB-C ports and a headphone jack, and the low height), not a Mac Studio. That is fine for the combined "Mac mini & Mac Studio" product. Don't caption it "Mac Studio" in posts. |

## 7. Outside the pack: for other owners and agents (not changed here)

- **`/apple-repair-dubai/` still claims Watch and TV in places.** The working tree changes the hero line to "seven Apple device families". But `src/views/AppleRepair.tsx` still says "9 device families" or "all 9 platforms" at lines 54, 71, 155, 170 and 227, including one FAQ that cites watchOS and tvOS. All 33 Watch URLs, and now the GBP "Apple repair" service, point to this page, so it has to agree with "Mac, iPhone and iPad only".
- **Other docs still mention the old count.** `docs/TASKS.md` Module 2 says "Paste new description (734/750 chars)". It should now say 746/750 and point to the pack. I did not edit TASKS.md because it is outside my file scope.
- **Price-carrying infographics on the website.** The same 7 images, and per `site-audit-image-content-match-2026-09-23.md` about 88 more, show AED prices on public pages. That is a hide-prices issue for the site as a whole, not only for GBP.

## 8. Follow-up fixes after review (2026-09-26, later the same day)

| Where | Before | After | Why |
|---|---|---|---|
| Pack header, line 5 | "every image below was OCR-checked, and none carries an AED figure" | "every image this pack tells you to upload was OCR-checked…", plus a pointer to the 7 excluded infographics | The pack itself lists 7 price-carrying images under "Deliberately excluded", so "every image below" contradicted it. |
| Address in the post bodies (10 places) and this log | "Office #45, 10th Floor, Concord Tower, Dubai Media City" | "Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City" | The earlier fix claimed an exact NAP match but dropped "Al Sufouh". `business.generated.ts` has `street` "Office #45, 10th Floor, Concord Tower" and `area` "Al Sufouh, Dubai Media City"; the string is now both, verbatim. |
| §1 description | "MacBook Air, MacBook Pro and MacBook Neo (Intel through M5)" | "MacBook Air and MacBook Pro (Intel through M5), MacBook Neo" | The Neo runs an A18 Pro; no Neo is Intel or M-series. Still 746/750 chars. |
| W8 body | "Same-day thermal service on most Macs" | "Cleaning and repasting is done the same day; if a fan has failed, the quote gives the part and the turnaround." | "Most" is an unmeasured proportion (same reasoning as the description's "Most repairs"). The site's fan-cleaning page promises same day for the clean; a failed fan depends on the part. |
| W50 body | "JBR is next door to our Dubai Media City workshop" | "We're a short drive away in Dubai Media City, and you get a written quote before any work starts." | JBR is not next door to Media City. |

`node scripts/gen-gbp-content.mjs` was re-run after these edits and every gate passed (746/750, 103 services, 52 bodies and 52 briefs).
