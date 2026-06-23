# SEO Command Center — setup (`/admin`)

A private, noindexed, auth-gated dashboard built into the site. Phase 1 = **Rankings**
(live Google Search Console) + **Backlinks** (prospect pipeline + inbound-link audit), alongside
the existing **Leads** CRM. Everything lives under `/admin/*` and `/api/admin/*` — disallowed in
`robots.ts`, `noindex` on every page + `X-Robots-Tag: noindex` on every API response, and gated by
a signed session cookie. Zero public/crawlable surface.

## Quick start (works immediately, no Google needed)
1. Set `ADMIN_KEY` (a long random string) in `.env.local` (and Hostinger env for prod).
2. `npm run dev`, open `/admin/login`, use the **admin key** field → you're in.
3. Seed the backlink tracker from the workbook (one-off):
   ```bash
   python3 scripts/import-backlinks.py        # writes ./data/seo.json (or $SEO_DB)
   ```
   Or use **Import CSV** in the Backlinks page (also handles the GSC Links export).

`SEO_DB` should point at a **persistent path** on Hostinger (like `LEADS_DB`) so data survives
redeploys. Locally it defaults to `./data/seo.json` (gitignored).

## Enable Google sign-in (login identity)
In [Google Cloud Console](https://console.cloud.google.com) (one project, free):
1. **OAuth consent screen** → External → add your admin emails as test users (or publish).
2. **Credentials → Create OAuth client ID → Web application.** Authorized redirect URI:
   `https://macbook-repair-dubai.ae/api/admin/auth/callback` (add `http://localhost:3100/api/admin/auth/callback` for dev).
3. Set in env: `GOOGLE_OAUTH_CLIENT_ID`, `GOOGLE_OAUTH_CLIENT_SECRET`,
   `GOOGLE_OAUTH_REDIRECT`, `ADMIN_ALLOWED_EMAILS` (comma list), `ADMIN_SESSION_SECRET`.
4. "Sign in with Google" now works; only allowlisted emails get in (removing an email revokes
   access on the next request).

## Enable live rankings (GSC data)
1. Same project → **APIs & Services → Enable** the **Google Search Console API**.
2. **Create a service account** → create a **JSON key**.
3. In **Search Console → Settings → Users and permissions**, add the service-account
   `client_email` as a **Full** or **Restricted** user on `sc-domain:macbook-repair-dubai.ae`.
4. Set in env: `GSC_SA_EMAIL` (the client_email), `GSC_SA_PRIVATE_KEY` (the private_key — keep the
   `\n`), `GSC_SITE_URL=sc-domain:macbook-repair-dubai.ae`.
5. Open `/admin/rankings` → live top queries/pages + page-2 opportunities. Click **Snapshot now**
   periodically to build the position-over-time trend.

## Notes
- Login also accepts the `ADMIN_KEY` as a break-glass password; the existing `/admin/leads` Bearer
  flow is unchanged (`requireAdmin` accepts cookie **or** Bearer).
- Backlinks have **no free auto-feed** (GSC Links has no API). Use the CSV import (GSC Links export)
  or a paid API (Ahrefs/DataForSEO) later. Rankings are fully automated and free.
- Deploy per `DEPLOY.md`; set all the env vars in the Hostinger panel and point `SEO_DB` at the
  persistent dir before relying on it in production.
