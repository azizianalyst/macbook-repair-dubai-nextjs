// CI deploy for macbook-repair-dubai.ae — same Hostinger developers-API flow as
// scripts/deploy-mbr.mjs, but reads the token from process.env.HOSTINGER_API_TOKEN
// and imports axios/tus from node_modules (the workflow installs them). Used by
// .github/workflows/deploy.yml for the one-click Publish button.
//   Usage: HOSTINGER_API_TOKEN=... node scripts/deploy-ci.mjs /tmp/mbr-deploy.zip
import { statSync, createReadStream } from "node:fs";
import { basename } from "node:path";
import axios from "axios";
import * as tus from "tus-js-client";

const DOMAIN = "macbook-repair-dubai.ae";
const BASE = "https://developers.hostinger.com";
const archivePath = process.argv[2] ?? "/tmp/mbr-deploy.zip";
const TOKEN = process.env.HOSTINGER_API_TOKEN;
if (!TOKEN) throw new Error("HOSTINGER_API_TOKEN env var is required");
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
log("done — Hostinger is building & deploying (~2-3 min).");
