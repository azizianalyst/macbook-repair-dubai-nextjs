import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { gscConfigured, getGscAccessToken } from "@/lib/google-auth";
import { defaultRange } from "@/lib/gsc";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOINDEX = { "X-Robots-Tag": "noindex" };

export type TrendRow = { date: string; clicks: number; impressions: number; position: number };

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  if (!gscConfigured()) return NextResponse.json({ ok: false, error: "GSC not configured" }, { status: 400, headers: NOINDEX });

  const { searchParams } = new URL(req.url);
  const path = searchParams.get("path") || "/macbook-screen-repair-dubai";
  const days = parseInt(searchParams.get("days") || "90", 10);
  const { startDate, endDate } = defaultRange(days);

  const site = process.env.GSC_SITE_URL || "";
  const pageUrl = site.replace(/\/$/, "") + path;

  try {
    const token = await getGscAccessToken();
    const res = await fetch(
      `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          startDate, endDate,
          dimensions: ["date"],
          rowLimit: 500,
          dimensionFilterGroups: [{
            filters: [{ dimension: "page", operator: "equals", expression: pageUrl }],
          }],
        }),
        cache: "no-store",
      }
    );
    if (!res.ok) throw new Error(`GSC ${res.status}: ${await res.text().catch(() => "")}`);
    const data = await res.json();
    const rows: TrendRow[] = (data.rows ?? []).map((r: { keys: string[]; clicks: number; impressions: number; position: number }) => ({
      date: r.keys[0],
      clicks: r.clicks ?? 0,
      impressions: r.impressions ?? 0,
      position: Math.round((r.position ?? 0) * 10) / 10,
    }));
    return NextResponse.json({ ok: true, path, rows, startDate, endDate }, { headers: NOINDEX });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String((e as Error).message || e) }, { status: 502, headers: NOINDEX });
  }
}
