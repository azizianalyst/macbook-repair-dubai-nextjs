import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { ReviewInputSchema } from "@/lib/seo-schema";
import { readReviews, insertReview } from "@/lib/seo-store";

// Owner-only reviews list + create. Edits bake into src/content/reviews.ts at the next build
// (scripts/gen-reviews.cjs) — see /admin/reviews.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOINDEX = { "X-Robots-Tag": "noindex" };

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const reviews = await readReviews();
  return NextResponse.json({ ok: true, count: reviews.length, reviews }, { headers: NOINDEX });
}

export async function POST(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const body = await req.json().catch(() => ({}));
  const parsed = ReviewInputSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) fieldErrors[String(issue.path[0])] = issue.message;
    return NextResponse.json({ ok: false, errors: fieldErrors }, { status: 400, headers: NOINDEX });
  }
  const row = await insertReview(parsed.data);
  if (!row) return NextResponse.json({ ok: false, error: "insert failed" }, { status: 500, headers: NOINDEX });
  return NextResponse.json({ ok: true, review: row }, { headers: NOINDEX });
}
