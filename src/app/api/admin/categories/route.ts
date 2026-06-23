import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { BlogTaxonomySchema } from "@/lib/seo-schema";
import { readTaxonomy, saveTaxonomy } from "@/lib/seo-store";
import { POSTS, postType } from "@/content/blog-posts";

// Owner-only blog taxonomy (categories + tags). Baked into blog-taxonomy.generated.ts at the next
// build (scripts/gen-categories.cjs). SLUGS ARE LOCKED to the hub route folders — the PUT rejects any
// add/remove/rename of a slug so the 7 hub + 5 tag routes can never render empty. See /admin/categories.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOINDEX = { "X-Robots-Tag": "noindex" };
const REQUIRED_HUBS = ["repair-costs", "fixes", "buying-guides", "sell-trade-in", "care-maintenance", "apple-news", "why-us"];
const REQUIRED_TAGS = ["macbook", "iphone", "ipad", "imac", "mac"];
const sameSet = (a: string[], b: string[]) => a.length === b.length && new Set([...a, ...b]).size === a.length;

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const tax = await readTaxonomy();
  const categories = tax?.categories ?? [];
  const tags = tax?.tags ?? [];
  // Live post counts per hub (by the post's Type) + an uncategorised tally.
  const counts: Record<string, number> = {};
  for (const c of categories) counts[c.slug] = POSTS.filter((p) => c.types.includes(postType(p))).length;
  const uncategorised = POSTS.filter((p) => !categories.some((c) => c.types.includes(postType(p)))).length;
  return NextResponse.json({ ok: true, categories, tags, counts, uncategorised, requiredHubs: REQUIRED_HUBS, requiredTags: REQUIRED_TAGS }, { headers: NOINDEX });
}

export async function PUT(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const body = await req.json().catch(() => ({}));
  const parsed = BlogTaxonomySchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Invalid taxonomy shape." }, { status: 400, headers: NOINDEX });
  // Hub-route guard: the slug sets must match the route folders exactly (no add/remove/rename here).
  if (!sameSet(parsed.data.categories.map((c) => c.slug), REQUIRED_HUBS))
    return NextResponse.json({ ok: false, error: "Category slugs are locked to the hub pages — edit the text/types, don't add/remove/rename a category." }, { status: 400, headers: NOINDEX });
  if (!sameSet(parsed.data.tags.map((t) => t.slug), REQUIRED_TAGS))
    return NextResponse.json({ ok: false, error: "Tag slugs are locked — edit names only." }, { status: 400, headers: NOINDEX });
  const ok = await saveTaxonomy(parsed.data);
  if (!ok) return NextResponse.json({ ok: false, error: "save failed" }, { status: 500, headers: NOINDEX });
  return NextResponse.json({ ok: true }, { headers: NOINDEX });
}
