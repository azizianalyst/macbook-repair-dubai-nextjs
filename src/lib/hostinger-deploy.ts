// Server-side one-click deploy: the running Hostinger Node app zips its OWN current source
// (code + the live data/ store with the owner's admin edits), uploads it to Hostinger via their
// developers API, and triggers a rebuild — exactly like scripts/deploy-mbr.mjs but in-process.
// This is what the /admin/publish button calls. Requires HOSTINGER_API_TOKEN in the server env.
import { createReadStream, statSync, createWriteStream, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import * as tus from "tus-js-client";
// archiver is a CommonJS export= module; load it via dynamic import + cast to dodge TS interop friction.
type ArchiverFactory = (format: string, opts?: { zlib?: { level?: number } }) => {
  pipe: (dest: NodeJS.WritableStream) => void;
  on: (ev: string, cb: (e: unknown) => void) => void;
  glob: (pattern: string, opts: Record<string, unknown>) => void;
  file: (src: string, opts: { name: string }) => void;
  finalize: () => void;
};

const DOMAIN = "macbook-repair-dubai.ae";
const BASE = "https://developers.hostinger.com";

export function deployConfigured(): boolean {
  return !!process.env.HOSTINGER_API_TOKEN;
}

// Build a zip of the app source at cwd (mirrors DEPLOY.md excludes), returning the temp zip path.
async function zipSource(): Promise<string> {
  const out = path.join(tmpdir(), `mbr-publish-${Date.now()}.zip`);
  const mod = await import("archiver");
  const archiver = ((mod as { default?: unknown }).default ?? mod) as unknown as ArchiverFactory;
  await new Promise<void>((resolve, reject) => {
    const output = createWriteStream(out);
    const archive = archiver("zip", { zlib: { level: 6 } });
    output.on("close", () => resolve());
    archive.on("error", reject);
    archive.pipe(output);
    // Whole app dir minus heavy/never-needed paths. glob is relative to cwd.
    archive.glob("**/*", {
      cwd: process.cwd(),
      dot: true,
      ignore: [
        "node_modules/**", ".next/**", ".git/**", ".env.local", "*.zip",
        ".github/**", ".claude/**", ".audit/**", ".mobile-audit/**",
        "scripts/topic-images/raw/**", "scripts/home-images/raw/**",
        "**/*.zip",
      ],
    });
    // If the store lives outside cwd (SEO_DB/GBP_DB persistent path), fold it into the archive
    // so the owner's edits are baked into the rebuild.
    const extra: [string | undefined, string][] = [
      [process.env.SEO_DB, "data/seo.json"],
      [process.env.GBP_DB, "data/gbp.json"],
    ];
    for (const [src, name] of extra) {
      if (src && !src.startsWith(process.cwd()) && existsSync(src)) archive.file(src, { name });
    }
    archive.finalize();
  });
  return out;
}

type Json = Record<string, unknown>;
async function api(method: string, url: string, token: string, body?: Json): Promise<Json> {
  const res = await fetch(url, {
    method,
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(`${method} ${url.replace(BASE, "")} → ${res.status} ${await res.text().catch(() => "")}`);
  return res.json();
}

// Runs the full Hostinger deploy. Returns a short status string. Throws on failure.
export async function runHostingerDeploy(): Promise<string> {
  const token = process.env.HOSTINGER_API_TOKEN;
  if (!token) throw new Error("HOSTINGER_API_TOKEN not set");
  const auth = { Authorization: `Bearer ${token}` } as const;

  // 1. resolve username
  const sites = await api("GET", `${BASE}/api/hosting/v1/websites?domain=${encodeURIComponent(DOMAIN)}`, token);
  const username = (sites as { data?: { username?: string }[] }).data?.[0]?.username;
  if (!username) throw new Error("No website found for domain");

  // 2. zip source
  const zipPath = await zipSource();
  const archive = path.basename(zipPath);
  const size = statSync(zipPath).size;

  // 3. upload credentials
  const creds = await api("POST", `${BASE}/api/hosting/v1/files/upload-urls`, token, { username, domain: DOMAIN });
  const { url: uploadUrl, auth_key: authKey, rest_auth_key: authRest } = creds as { url?: string; auth_key?: string; rest_auth_key?: string };
  if (!uploadUrl || !authKey || !authRest) throw new Error("Bad upload credentials");

  // 4. tus upload
  const uploadUrlWithFile = `${uploadUrl.replace(/\/$/, "")}/${archive}?override=true`;
  const headers = { "X-Auth": authKey, "X-Auth-Rest": authRest, "upload-length": String(size), "upload-offset": "0" };
  const pre = await fetch(uploadUrlWithFile, { method: "POST", headers });
  if (pre.status !== 201) throw new Error(`pre-upload → ${pre.status}`);
  await new Promise<void>((resolve, reject) => {
    const upload = new tus.Upload(createReadStream(zipPath), {
      uploadUrl: uploadUrlWithFile,
      retryDelays: [1000, 2000, 4000, 8000, 16000, 20000],
      uploadDataDuringCreation: false, parallelUploads: 1, chunkSize: 10485760,
      headers, removeFingerprintOnSuccess: true, uploadSize: size, metadata: { filename: archive },
      onError: reject, onSuccess: () => resolve(),
    });
    upload.start();
  });

  // 5. build settings + trigger
  const settings = await api("GET", `${BASE}/api/hosting/v1/accounts/${username}/websites/${DOMAIN}/nodejs/builds/settings/from-archive?archive_path=${encodeURIComponent(archive)}`, token);
  await api("POST", `${BASE}/api/hosting/v1/accounts/${username}/websites/${DOMAIN}/nodejs/builds`, token, {
    ...settings,
    node_version: (settings as { node_version?: number }).node_version || 20,
    source_type: "archive",
    source_options: { archive_path: archive },
  });
  void auth;
  return "Deploy triggered — Hostinger is rebuilding the site (~2-3 minutes).";
}
