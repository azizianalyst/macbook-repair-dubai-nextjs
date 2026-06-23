# Deploy runbook — macbook-repair-dubai.ae

**For a fresh chat: the user says "deploy" → run these steps. No need to ask for confirmation.**

This is a Next.js 16 (App Router, Turbopack) site deployed as a **Hostinger Node.js Web App**.
Production domain: **https://macbook-repair-dubai.ae** (non-www is canonical; www 308→non-www).
Hostinger MCP server for this site: **`hostinger-macbookrepair`**.

## Steps

1. **Build locally** (catches errors before upload):
   ```bash
   npm run build
   ```
   Must end with the route table + "Compiled successfully". If it fails, stop and fix.

2. **Package as ZIP** (must be zip, files at root — a tar with `./`-prefixed paths breaks
   Hostinger's settings resolver):
   ```bash
   rm -f /tmp/mbr-deploy.zip && zip -rq /tmp/mbr-deploy.zip . \
     -x "node_modules/*" ".next/*" ".git/*" ".env.local" "*.zip" \
        ".claude/*" ".audit/*" ".mobile-audit/*" \
        "scripts/topic-images/raw/*" "scripts/home-images/raw/*"
   ```
   (The `raw/` dirs hold ~600 MB of image-generation masters that the server
   never needs. `.claude/` (agent worktrees), `.audit/` and `.mobile-audit/`
   are local-only artifact dirs — none are git-tracked and the server never
   needs them, but they're large (~280M + 355M + 42M) so leaving them in
   bloats the archive to ~690M. Excluding all of the above keeps the upload
   ~205 MB.)

3. **Deploy** via Hostinger MCP (build runs server-side):
   - Tool: `mcp__hostinger-macbookrepair__hosting_deployJsApplication`
   - `domain`: `macbook-repair-dubai.ae`
   - `archivePath`: `/tmp/mbr-deploy.zip`
   - `removeArchive`: `true`
   - The result should show `resolveSettings → app_type: next, build_script: build` and a build `uuid` in `pending`.

4. **Wait for completion** — poll `mcp__hostinger-macbookrepair__hosting_listJsDeployments`
   (`perPage: 1`) until the newest build `state` is `completed` (~2.5 min). On `failed`, read
   `hosting_showJsDeploymentLogs` with the build uuid.

5. **Verify** (the CDN serves transient 503/stale for ~1–2 min while the origin reboots — wait
   for it to settle, don't panic):
   ```bash
   # wait until homepage is stable
   until [ "$(curl -s -o /dev/null -w '%{http_code}' https://macbook-repair-dubai.ae/)" = "200" ]; do sleep 4; done
   # sweep key pages (all should be 200)
   for h in / /pricing /reviews /warranty /contact /blog; do
     echo "$(curl -s -o /dev/null -w '%{http_code}' https://macbook-repair-dubai.ae$h)  $h"; sleep 2
   done
   # www should 308 -> non-www
   curl -sI https://www.macbook-repair-dubai.ae/ | grep -iE "^(HTTP|location)"
   ```

6. **Post-deploy SEO pings & audit**:
   ```bash
   node scripts/indexnow-ping.mjs      # tell Bing/ChatGPT-search about all URLs
   npm run check:urls:live             # 301s + sitemap + live 200s
   node scripts/crawl-site.mjs         # full crawl: 404s, broken assets, orphans
   ```

## Gotchas (already solved — keep them this way)
- **Use `proxy.ts`, never `middleware.ts`** — Next 16 deprecated `middleware`; the old
  convention caused intermittent 307/504 on page routes. `src/proxy.ts` sets the
  `Cache-Control: must-revalidate` HTML header that defeats Hostinger CDN staleness.
- **www→non-www** redirect in `next.config.ts` matches `x-forwarded-host` (NOT `type: host`)
  because the Node app sees `Host: localhost` behind the CDN.
- DNS: apex `@` ALIAS + `www` CNAME both → `*.cdn.hstgr.net` (CDN is in front of origin
  46.17.175.101). There is **no CDN purge API** — the must-revalidate header is what keeps
  pages fresh; just wait out the post-deploy revalidation window.
- **Legacy 1-year-cached pages do NOT self-heal by waiting.** If a page was cached by the
  CDN *before* the must-revalidate fix shipped, the edge holds it with `s-maxage=31536000`
  (verify: `curl -sI https://macbook-repair-dubai.ae/ | grep -iE 'cache-control|age|etag'`
  shows `s-maxage=31536000` + a multi-hour `age` + an etag ≠ origin's). must-revalidate only
  applies to entries cached *after* it deployed, so these stuck entries never expire on their
  own. Confirm origin is actually fresh:
  `curl -sI --resolve macbook-repair-dubai.ae:443:46.17.175.101 https://macbook-repair-dubai.ae/ -k`
  (should show `max-age=0, must-revalidate` + `x-nextjs-cache: HIT`), and that a cache-busted
  URL `…/?v=fresh` returns the origin etag. Fix = clear the CDN cache **once** in hPanel
  (Hosting → CDN / Cache Manager → Purge), then hard-refresh. After that it stays fresh.
- If the website vhost is ever missing ("No website found for domain"), recreate via
  `hosting_createWebsiteV1` (order_id 1008796045, plan hostinger_business_v3), then redeploy.

## Commit (only if user asks)
Branch off main if on it. End commit messages with:
`Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`
