# GBP Execution Guide — step by step + URL reference

Your `/admin/gbp` is a FULL Google Business Profile integration (publish posts, edit description/hours/categories, reply to reviews — all save directly to Google via the `business.manage` API). It reuses your admin-login Google credentials. **No copy-paste library needed** — paste content into the admin forms and Save/Publish.

## Connection (one-time)
1. Live site → `/admin/gbp` (logged in as admin).
2. If it says **Connect** → click → choose the Google account that manages the listing (`azizianalyst@gmail.com`) → grant "manage your Business Profile".
3. After redirect it shows **Connected** + the location name.
**If Connect fails / API 403s:** in Google Cloud Console (the project behind GOOGLE_OAUTH_CLIENT_ID) enable the Business Profile APIs (Account Management, Business Information, Business Profile Performance, and the My Business v4 for posts) and add the `business.manage` scope to the OAuth consent screen (add the email as a test user if the app is in Testing).

## Order of work
1. **Business Info tab** → paste new description (Save to Google) · fix Sunday hours · add categories.
2. **Posts tab → Create** → paste each draft from `gbp-posts-batch-1.md` → add CTA + URL → Publish (1–2×/week).
3. **Reviews tab** → reply to unreplied; report spam 2★ on Google.

## Profile values to set (Business Info tab)
- **Description:** see gbp-audit-optimization doc §C2 (1st-person, latest models, ≤750 chars).
- **Categories:** primary "Computer repair service"; add Mobile phone repair shop · Electronics repair shop · Phone repair service.
- **Hours:** confirm Sunday, make GBP = website = posts.

## URL reference (paste as the post/service link) — all `https://macbook-repair-dubai.ae/<slug>/`
**Services:** macbook-screen-repair-dubai · macbook-battery-replacement-dubai · macbook-keyboard-repair-dubai · macbook-logic-board-repair-dubai · macbook-water-damage-repair-dubai · mac-data-recovery-dubai · macbook-charging-port-repair-dubai · macbook-ssd-upgrade-dubai
**Devices/models:** macbook-pro-repair-dubai · macbook-air-repair-dubai · macbook-pro-m5-repair-dubai · macbook-pro-m4-repair-dubai · macbook-air-m4-repair-dubai · imac-m4-repair-dubai · imac-repair-dubai · imac-screen-repair-dubai · mac-mini-repair-dubai · mac-studio-repair-dubai
**iPhone/iPad:** iphone-repair-dubai · iphone-screen-repair-dubai · iphone-battery-replacement-dubai · ipad-repair-dubai · ipad-screen-repair-dubai · ipad-battery-replacement-dubai
**Areas:** macbook-repair-dubai-marina · macbook-repair-downtown-dubai · macbook-repair-business-bay · macbook-repair-jlt · macbook-repair-palm-jumeirah · macbook-repair-deira · macbook-repair-bur-dubai · onsite-macbook-repair-dubai
**Money pages:** pricing · macbook-repair-cost-calculator-dubai · warranty · contact · reviews
