import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { readLeads, leadStats } from "@/lib/sqlite";

// Owner-only list + stats. Gated by ADMIN_KEY (Bearer). Fails closed.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  if (!requireAdmin(req)) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  const leads = readLeads(5000);
  const stats = leadStats();
  return NextResponse.json({ ok: true, count: leads.length, leads, stats });
}
