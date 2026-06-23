import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { PriceInputSchema } from "@/lib/seo-schema";
import { readPrices, insertPrice, upsertPricesBulk } from "@/lib/seo-store";

// Owner-only price list + create. Gated by requireAdmin (session cookie or Bearer).
// Edits are baked into the static site at the next build (scripts/gen-prices.cjs) — see /admin/prices.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOINDEX = { "X-Robots-Tag": "noindex" };

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const prices = await readPrices();
  return NextResponse.json({ ok: true, count: prices.length, prices }, { headers: NOINDEX });
}

export async function POST(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const body = await req.json().catch(() => ({}));

  // Bulk upsert from CSV/Excel import: { items: [{ id?, group, service, price, ... }] }
  if (Array.isArray(body?.items)) {
    const valid: (import("@/lib/seo-schema").PriceInput & { id?: number })[] = [];
    let skipped = 0;
    for (const raw of body.items) {
      const { id, ...rest } = raw ?? {};
      const p = PriceInputSchema.safeParse(rest);
      if (p.success) valid.push(id ? { ...p.data, id: Number(id) } : p.data);
      else skipped++;
    }
    const r = await upsertPricesBulk(valid);
    return NextResponse.json({ ok: true, ...r, skipped }, { headers: NOINDEX });
  }

  const parsed = PriceInputSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) fieldErrors[String(issue.path[0])] = issue.message;
    return NextResponse.json({ ok: false, errors: fieldErrors }, { status: 400, headers: NOINDEX });
  }
  const row = await insertPrice(parsed.data);
  if (!row) return NextResponse.json({ ok: false, error: "insert failed" }, { status: 500, headers: NOINDEX });
  return NextResponse.json({ ok: true, price: row }, { headers: NOINDEX });
}
