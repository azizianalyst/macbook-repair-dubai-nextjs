import crypto from "crypto";

// Service-account auth for Google Search Console DATA (read-only), independent of who logs in.
// Hand-rolled RS256 JWT -> access token (no googleapis dependency). The service-account email
// must be added as a user on the GSC property. Token is cached in-process until near expiry.

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";

export function gscConfigured(): boolean {
  return Boolean(process.env.GSC_SA_EMAIL && process.env.GSC_SA_PRIVATE_KEY && process.env.GSC_SITE_URL);
}

function privateKey(): string {
  // Env-stored PEM commonly has escaped newlines — normalize them.
  return (process.env.GSC_SA_PRIVATE_KEY || "").replace(/\\n/g, "\n");
}

const b64url = (b: Buffer) => b.toString("base64url");

let cached: { token: string; exp: number } | null = null;

export async function getGscAccessToken(): Promise<string> {
  if (cached && cached.exp - 60_000 > Date.now()) return cached.token;
  if (!gscConfigured()) throw new Error("GSC service account not configured");

  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 3600;
  const header = b64url(Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })));
  const claim = b64url(Buffer.from(JSON.stringify({
    iss: process.env.GSC_SA_EMAIL, scope: SCOPE, aud: TOKEN_URL, iat, exp,
  })));
  const signingInput = `${header}.${claim}`;
  const signature = b64url(crypto.createSign("RSA-SHA256").update(signingInput).sign(privateKey()));
  const assertion = `${signingInput}.${signature}`;

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion }),
  });
  if (!res.ok) throw new Error(`GSC token exchange failed: ${res.status} ${await res.text().catch(() => "")}`);
  const d = await res.json();
  cached = { token: d.access_token, exp: Date.now() + (d.expires_in ?? 3600) * 1000 };
  return cached.token;
}
