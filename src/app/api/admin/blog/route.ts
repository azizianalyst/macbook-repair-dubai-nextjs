import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { BlogPostInputSchema } from "@/lib/seo-schema";
import { readPosts, insertPost, slugTaken, slugify, duplicatePost } from "@/lib/seo-store";
import { ROUTES } from "@/lib/routes.generated";
import { POSTS, CATEGORIES } from "@/content/blog-posts";

// Owner-only blog posts list + create. Posts are written in markdown; they bake into
// src/content/posts.generated.ts at the next build (scripts/gen-blog.cjs) and serve from the
// /blog/[slug] dynamic route. See /admin/blog. The 85 hand-built TSX posts are untouched.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOINDEX = { "X-Robots-Tag": "noindex" };

// A slug collides if a real page already lives at /blog/<slug> (hand-built post or category hub —
// these come from the filesystem-derived ROUTES) or another admin post already uses it.
async function slugConflict(slug: string, exceptId?: number): Promise<string | null> {
  if (ROUTES.includes(`/blog/${slug}`)) return "That slug is already used by an existing page.";
  if (await slugTaken(slug, exceptId)) return "Another post already uses that slug.";
  return null;
}

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const posts = await readPosts(); // admin-authored markdown posts (fully editable)

  // Hand-built TSX posts from the registry (read-only here; their SEO is editable via Pages SEO).
  const adminSlugs = new Set(posts.map((p) => "/blog/" + p.slug));
  const builtins = POSTS
    .filter((p) => !adminSlugs.has(p.slug))
    .map((p) => ({ slug: p.slug, title: p.title, category: p.category, author: p.author, date: p.date }));

  // Categories = the blog hubs, each with a live post count (across all posts).
  const everyCat = [
    ...builtins.map((b) => b.category),
    ...posts.map((p) => p.category),
  ];
  const hubForType = (cat: string) => CATEGORIES.find((c) => c.types.includes((cat || "").split("·")[0].trim()));
  const categories = CATEGORIES.map((c) => ({
    slug: c.slug, name: c.name, blurb: c.blurb, types: c.types,
    count: everyCat.filter((cat) => c.types.includes((cat || "").split("·")[0].trim())).length,
  }));
  const uncategorised = everyCat.filter((cat) => !hubForType(cat)).length;

  return NextResponse.json(
    { ok: true, count: posts.length + builtins.length, posts, builtins, categories, uncategorised },
    { headers: NOINDEX },
  );
}

export async function POST(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const body = await req.json().catch(() => ({}));
  // Duplicate an existing post into a fresh draft. Body: { action: "duplicate", id }.
  if (body?.action === "duplicate" && typeof body?.id === "number") {
    const row = await duplicatePost(body.id);
    if (!row) return NextResponse.json({ ok: false, error: "not found" }, { status: 404, headers: NOINDEX });
    return NextResponse.json({ ok: true, post: row }, { headers: NOINDEX });
  }
  const parsed = BlogPostInputSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) fieldErrors[String(issue.path[0])] = issue.message;
    return NextResponse.json({ ok: false, errors: fieldErrors }, { status: 400, headers: NOINDEX });
  }
  const conflict = await slugConflict(slugify(parsed.data.slug));
  if (conflict) return NextResponse.json({ ok: false, errors: { slug: conflict } }, { status: 409, headers: NOINDEX });
  const row = await insertPost(parsed.data);
  if (!row) return NextResponse.json({ ok: false, error: "insert failed" }, { status: 500, headers: NOINDEX });
  return NextResponse.json({ ok: true, post: row }, { headers: NOINDEX });
}
