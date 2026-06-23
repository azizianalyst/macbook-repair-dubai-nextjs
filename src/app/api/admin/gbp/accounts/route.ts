import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { listAccounts, listLocations } from "@/lib/gbp";
import { setGbpConfig, getGbpConfig } from "@/lib/gbp-store";

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const cfg = await getGbpConfig();
  if (!cfg?.refreshToken) return NextResponse.json({ ok: false, error: "Not connected", accounts: [] }, { status: 400 });
  try {
    const accounts = await listAccounts();
    const withLocs = await Promise.all(
      accounts.map(async (a) => {
        const locs = await listLocations(a.name).catch(() => []);
        return { ...a, locations: locs };
      })
    );
    return NextResponse.json({ ok: true, accounts: withLocs });
  } catch (e: unknown) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}

// POST to switch active location
export async function POST(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  try {
    const { accountId, locationId, locationName } = await req.json();
    const cfg = await getGbpConfig();
    if (!cfg) return NextResponse.json({ ok: false, error: "Not connected" }, { status: 400 });
    await setGbpConfig({ ...cfg, accountId, locationId, locationName });
    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
