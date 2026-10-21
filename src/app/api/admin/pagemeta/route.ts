import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { PageMetaInputSchema } from "@/lib/seo-schema";
import { readPageMeta, upsertPageMeta } from "@/lib/seo-store";
import { ROUTES } from "@/lib/routes.generated";
import { metaForPath } from "@/lib/page-meta";

// Owner-only page SEO (per-route title + meta description). Edits bake into
// page-meta-overrides.generated.ts at the next build (scripts/gen-pagemeta.cjs) — see /admin/pageseo.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOINDEX = { "X-Robots-Tag": "noindex" };

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const overrides = await readPageMeta();
  const overMap = new Map(overrides.map((o) => [o.path, o]));
  // Skip the owner-only admin pages — they're noindex, so editing their SERP meta is pointless clutter.
  const editable = ROUTES.filter((path) => path !== "/admin" && !path.startsWith("/admin/"));
  const routes = editable.map((path) => {
    const m = metaForPath(path);
    const o = overMap.get(path);
    const liveTitle = typeof m.title === "string" ? m.title : "";
    const liveDescription = typeof m.description === "string" ? m.description : "";
    // overTitle/overDescription = what the owner has STORED (the pending edit). Distinct from
    // live*, which is what's currently rendered on the site (changes only on rebuild/deploy).
    // The store override may already be live (if a build ran) or pending (edited since last build).
    const overTitle = (o?.title || "").trim();
    const overDescription = (o?.description || "").trim();
    const pending = !!o && ((overTitle && overTitle !== liveTitle) || (overDescription && overDescription !== liveDescription));
    return {
      path,
      // Prefill the editor with the stored override when present, else the live value.
      title: overTitle || liveTitle,
      description: overDescription || liveDescription,
      liveTitle,
      liveDescription,
      overridden: !!o,
      pending,
      // Full stored override (Social/Advanced fields) so the editor can prefill every tab.
      override: o ?? null,
    };
  });
  return NextResponse.json({ ok: true, count: routes.length, routes }, { headers: NOINDEX });
}

// Upsert (or remove, if both fields blank) a per-path override.
export async function PUT(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const body = await req.json().catch(() => ({}));
  const parsed = PageMetaInputSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, error: "invalid fields" }, { status: 400, headers: NOINDEX });
  const ok = await upsertPageMeta(parsed.data);
  if (!ok) return NextResponse.json({ ok: false, error: "save failed" }, { status: 500, headers: NOINDEX });
  return NextResponse.json({ ok: true }, { headers: NOINDEX });
}
