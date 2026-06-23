import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { clearGbpConfig } from "@/lib/gbp-store";
import { invalidateGbpTokenCache } from "@/lib/gbp";

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  await clearGbpConfig();
  invalidateGbpTokenCache();
  return NextResponse.json({ ok: true });
}
