# CMS Parity Tracker — macbook-repair-dubai.ae admin vs WordPress

Goal: manage 100% of the site + business from `/admin`, WordPress-grade, single-pane, role-gated.
Each row is verified with tsc + build + headless before it's ticked. ✅ done · 🟡 partial · ⬜ todo.

## Phases
- **Phase 1 — Prices (PRIMARY)**: ✅ done (consolidated hub + CSV bulk + single-source confirmed for shared surfaces)
- **Phase 2 — GBP finish + verify**: 🟡 code-complete, BLOCKED on Google OAuth creds (owner)
- **Phase 3 — Social publishing (Facebook→IG)**: 🟡 BUILT + verified; needs Meta Page token (owner) to go live
  - `/admin/social`: composer (text/link/image via picker) → publish now or schedule; connect card (Page ID + token → secrets); history with status (draft/scheduled/published/failed) + FB link + re-publish/delete.
  - lib/facebook.ts (Graph v21 feed/photos), store `socialPosts`, /api/admin/social (+ connect/publish actions), /api/admin/social/cron (CRON_SECRET-gated, publishes due scheduled posts). Role: owner/manager/content (pricing blocked — verified). Scheduling needs a cron/agent to hit the cron endpoint.
- **Phase 4 — WP-parity gaps**: ✅ mostly (revisions/autosave/scheduled already existed; added Duplicate + Bulk). Remaining: Trash + Global search (deferred, low priority)
- **Phase 5 — Final parity audit + deploy**: ⬜

## WordPress feature parity
| WP feature | Status | Where |
|---|---|---|
| Dashboard (live metrics + alerts) | ✅ | /admin |
| Posts (markdown editor) | ✅ | /admin/blog |
| Pages SEO | ✅ | /admin/pageseo + URL Inspector |
| Categories & Tags | ✅ | /admin/categories |
| Media library (search, alt, bulk-ish) | ✅ | /admin/media (1018 imgs) |
| Menus | ✅ | /admin/menus |
| Users & Roles (RBAC) | ✅ | /admin/team (owner/manager/content/pricing) |
| Comments/inbox | ✅ (Leads) | /admin/leads |
| Settings | ✅ | /admin/settings |
| One-click Publish/Deploy | ✅ | /admin/publish (needs HOSTINGER_API_TOKEN) |
| **Prices — single source, consolidated** | 🟡 | /admin/prices (Service prices + Screen ladders tabs) |
| Revisions + restore | ✅ | blog editor "History" (last 10, restore) |
| Autosave | ✅ | blog editor (restores last session) |
| Scheduled publish | ✅ | post status=scheduled + scheduledFor → gen-blog go-live (needs a daily build) |
| Duplicate post | ✅ | Posts list (Copy → "(copy)" draft) |
| Bulk actions on lists | ✅ | Posts (select → publish/draft/delete); prices CSV |
| Quick-edit on lists | ✅ | inline edits on prices/keywords |
| Trash / restore | ⬜ | hard-delete only (soft-delete deferred) |
| Global search | ⬜ | (deferred) |
| **Social publishing (Facebook/IG)** | ⬜ | Phase 3 |
| **GBP management** | 🟡 | /admin/gbp (built, needs OAuth + live verify) |

## Phase 1 — Prices (consolidation) — done 2026-06-21
Was fragmented: service prices at /admin/keywords?tab=prices, screen ladders at /admin/prices.
Now: **one "Prices" hub** (`PricesHub.tsx`) at /admin/prices with tabs **Service prices** (PricesAdmin,
drives /pricing + Offer schema) + **Screen ladders** (ScreenPricesAdmin, per-model + Apple comparison →
screen-pricing.ts via gen-screen-prices). Removed the duplicate "prices" tab from KeywordHub (keywords +
tracker only). Nav "Screen Prices"→"Prices" (one item). roles.ts maps screen-prices→prices section so the
pricing role reaches both. Verified: pricing role 200 on both APIs, both tabs render, tsc+build clean.
CLOSED OUT 2026-06-21:
- Bulk-edit: added CSV export/import to Screen ladders (matched by id, uses the bulk {items} API).
- Single-source audit: shared price SURFACES (/pricing, screen guides, Offer schema) ARE store-driven ✅.
  242 files contain AED literals but only ~10 are inline price TABLES; the rest are PROSE in page copy.
  DECISION: do NOT migrate page copy to the store — it's page content (WP model) and rewriting ~170 top
  SEO pages mid-recovery is high-risk, low-value. Stores remain the single source for shared surfaces.
- History: DEFERRED to Phase 4 (post revisions) — same machinery; build once there. Screen prices already
  carry created_at/updated_at.
