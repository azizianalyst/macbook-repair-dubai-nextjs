import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { readLeads, leadStats } from "@/lib/store";

// Owner-only list + stats. Gated by ADMIN_KEY (Bearer). Fails closed.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  if (!requireAdmin(req)) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  const [leads, stats] = await Promise.all([readLeads(5000), leadStats()]);
  return NextResponse.json({ ok: true, count: leads.length, leads, stats });
}
