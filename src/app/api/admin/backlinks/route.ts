import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { BacklinkInputSchema } from "@/lib/seo-schema";
import { readBacklinks, insertBacklink, insertBacklinksBulk, backlinkStats } from "@/lib/seo-store";

// Owner-only backlink list + create/import. Gated by requireAdmin (session cookie or Bearer).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOINDEX = { "X-Robots-Tag": "noindex" };

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const [backlinks, stats] = await Promise.all([readBacklinks(), backlinkStats()]);
  return NextResponse.json({ ok: true, count: backlinks.length, backlinks, stats }, { headers: NOINDEX });
}

export async function POST(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const body = await req.json().catch(() => ({}));

  // Bulk import: { items: BacklinkInput[] }
  if (Array.isArray(body?.items)) {
    const valid: import("@/lib/seo-schema").BacklinkInput[] = [];
    let skipped = 0;
    for (const raw of body.items) {
      const p = BacklinkInputSchema.safeParse(raw);
      if (p.success) valid.push(p.data); else skipped++;
    }
    const added = await insertBacklinksBulk(valid);
    return NextResponse.json({ ok: true, added, skipped }, { headers: NOINDEX });
  }

  // Single add
  const parsed = BacklinkInputSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) fieldErrors[String(issue.path[0])] = issue.message;
    return NextResponse.json({ ok: false, errors: fieldErrors }, { status: 400, headers: NOINDEX });
  }
  const row = await insertBacklink(parsed.data);
  if (!row) return NextResponse.json({ ok: false, error: "insert failed" }, { status: 500, headers: NOINDEX });
  return NextResponse.json({ ok: true, backlink: row }, { headers: NOINDEX });
}
