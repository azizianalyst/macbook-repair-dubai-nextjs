// Single-purpose deploy for macbook-repair-dubai.ae per DEPLOY.md, using
// Hostinger's official developers API directly (same endpoints the
// hostinger-api-mcp `hosting_deployJsApplication` tool wraps):
//   1. resolve username   GET  /api/hosting/v1/websites?domain=...
//   2. upload credentials POST /api/hosting/v1/files/upload-urls
//   3. upload archive     tus  {uploadUrl}/{archive}?override=true
//   4. build settings     GET  .../nodejs/builds/settings/from-archive
//   5. trigger build      POST .../nodejs/builds
// Usage: node scripts/deploy-mbr.mjs /tmp/mbr-deploy.zip
import { readFileSync, statSync, createReadStream } from "node:fs";
import { homedir } from "node:os";
import { basename } from "node:path";
import { createRequire } from "node:module";

// axios + tus-js-client from the cached hostinger-api-mcp install
const require = createRequire(
  "/Users/azizi/.npm/_npx/a7204b5813574340/node_modules/hostinger-api-mcp/package.json",
);
const axios = require("axios");
const tus = require("tus-js-client");

const DOMAIN = "macbook-repair-dubai.ae";
const BASE = "https://developers.hostinger.com";
const archivePath = process.argv[2] ?? "/tmp/mbr-deploy.zip";

const cfg = JSON.parse(readFileSync(`${homedir()}/.claude.json`, "utf8"));
const TOKEN = cfg.mcpServers["hostinger-macbookrepair"].env.API_TOKEN;
const auth = { Authorization: `Bearer ${TOKEN}` };

const log = (m) => console.log(`[deploy] ${m}`);

// 1. resolve username
const sites = await axios.get(`${BASE}/api/hosting/v1/websites?domain=${encodeURIComponent(DOMAIN)}`, { headers: auth });
const username = sites.data?.data?.[0]?.username;
if (!username) throw new Error(`No website found for ${DOMAIN}: ${JSON.stringify(sites.data)}`);
log(`username resolved: ${username}`);

// 2. upload credentials
const creds = await axios.post(`${BASE}/api/hosting/v1/files/upload-urls`, { username, domain: DOMAIN }, { headers: auth });
const { url: uploadUrl, auth_key: authToken, rest_auth_key: authRestToken } = creds.data;
if (!uploadUrl || !authToken || !authRestToken) throw new Error(`Bad upload credentials: ${JSON.stringify(creds.data)}`);
log("upload credentials received");

// 3. tus upload
const archive = basename(archivePath);
const size = statSync(archivePath).size;
const uploadUrlWithFile = `${uploadUrl.replace(/\/$/, "")}/${archive}?override=true`;
const headers = {
  "X-Auth": authToken,
  "X-Auth-Rest": authRestToken,
  "upload-length": String(size),
  "upload-offset": "0",
};
await axios.post(uploadUrlWithFile, "", { headers, validateStatus: (s) => s === 201 });
log(`pre-upload created, uploading ${(size / 1e6).toFixed(0)} MB...`);

await new Promise((resolve, reject) => {
  let lastPct = -10;
  const upload = new tus.Upload(createReadStream(archivePath), {
    uploadUrl: uploadUrlWithFile,
    retryDelays: [1000, 2000, 4000, 8000, 16000, 20000],
    uploadDataDuringCreation: false,
    parallelUploads: 1,
    chunkSize: 10485760,
    headers,
    removeFingerprintOnSuccess: true,
    uploadSize: size,
    metadata: { filename: archive },
    onProgress: (sent) => {
      const pct = Math.floor((sent / size) * 100);
      if (pct >= lastPct + 10) { log(`upload ${pct}%`); lastPct = pct; }
    },
    onError: reject,
    onSuccess: resolve,
  });
  upload.start();
});
log("archive uploaded");

// 4. build settings
const settings = await axios.get(
  `${BASE}/api/hosting/v1/accounts/${username}/websites/${DOMAIN}/nodejs/builds/settings/from-archive?archive_path=${encodeURIComponent(archive)}`,
  { headers: auth },
);
log(`resolveSettings: ${JSON.stringify(settings.data)}`);

// 5. trigger build
const build = await axios.post(
  `${BASE}/api/hosting/v1/accounts/${username}/websites/${DOMAIN}/nodejs/builds`,
  {
    ...settings.data,
    node_version: settings.data?.node_version || 20,
    source_type: "archive",
    source_options: { archive_path: archive },
  },
  { headers: { ...auth, "Content-Type": "application/json" } },
);
log(`build triggered: ${JSON.stringify(build.data)}`);
