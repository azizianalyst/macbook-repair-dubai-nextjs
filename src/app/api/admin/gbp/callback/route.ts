import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { GBP_OAUTH_REDIRECT } from "@/lib/gbp-oauth";
import { setGbpConfig } from "@/lib/gbp-store";
import { listAccounts, listLocations, invalidateGbpTokenCache as clearCache } from "@/lib/gbp";

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const TOKEN_URL = "https://oauth2.googleapis.com/token";

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });

  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookieHeader = req.headers.get("cookie") || "";
  const savedState = cookieHeader.match(/gbp_oauth_state=([^;]+)/)?.[1];

  if (!code) return NextResponse.redirect(new URL("/admin/gbp?error=no_code", req.url));
  if (!state || state !== savedState) return NextResponse.redirect(new URL("/admin/gbp?error=state_mismatch", req.url));

  const redirect = GBP_OAUTH_REDIRECT(req);

  // Exchange code for tokens
  const tokenRes = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
      client_secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
      redirect_uri: redirect,
      grant_type: "authorization_code",
    }),
  });

  if (!tokenRes.ok) {
    const msg = await tokenRes.text().catch(() => "");
    console.error("GBP token exchange failed:", tokenRes.status, msg);
    return NextResponse.redirect(new URL("/admin/gbp?error=token_exchange", req.url));
  }

  const tokens = await tokenRes.json();
  if (!tokens.refresh_token) {
    return NextResponse.redirect(new URL("/admin/gbp?error=no_refresh_token", req.url));
  }

  // Temporarily store refresh token so listAccounts can use it
  await setGbpConfig({
    refreshToken: tokens.refresh_token,
    accountId: "",
    locationId: "",
    locationName: "",
    connectedAt: new Date().toISOString(),
  });
  clearCache();

  // Auto-detect first account + location
  try {
    const accounts = await listAccounts();
    if (accounts.length > 0) {
      const accountId = accounts[0].name;
      const locations = await listLocations(accountId);
      if (locations.length > 0) {
        const loc = locations[0];
        await setGbpConfig({
          refreshToken: tokens.refresh_token,
          accountId,
          locationId: `${accountId}/${loc.name.split("/").slice(-2).join("/")}`,
          locationName: loc.title,
          connectedAt: new Date().toISOString(),
        });
      }
    }
  } catch (e) {
    console.error("GBP auto-detect location failed:", e);
  }

  const res = NextResponse.redirect(new URL("/admin/gbp?connected=1", req.url));
  res.cookies.set("gbp_oauth_state", "", { maxAge: 0, path: "/" });
  return res;
}
