import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { BlogPostPatchSchema } from "@/lib/seo-schema";
import { readPost, updatePost, deletePost, slugTaken, slugify, readPostRevisions, restorePostRevision } from "@/lib/seo-store";
import { ROUTES } from "@/lib/routes.generated";

// Owner-only read / update / delete of a single admin blog post.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOINDEX = { "X-Robots-Tag": "noindex" };
type Ctx = { params: Promise<{ id: string }> };

export async function GET(req: Request, { params }: Ctx) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const { id } = await params;
  const post = await readPost(Number(id));
  if (!post) return NextResponse.json({ ok: false, error: "not found" }, { status: 404, headers: NOINDEX });
  const revisions = await readPostRevisions(Number(id));
  return NextResponse.json({ ok: true, post, revisions }, { headers: NOINDEX });
}

export async function PUT(req: Request, { params }: Ctx) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const { id } = await params;
  const body = await req.json().catch(() => ({}));
  const parsed = BlogPostPatchSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) fieldErrors[String(issue.path[0])] = issue.message;
    return NextResponse.json({ ok: false, errors: fieldErrors }, { status: 400, headers: NOINDEX });
  }
  if (parsed.data.slug) {
    const slug = slugify(parsed.data.slug);
    if (ROUTES.includes(`/blog/${slug}`)) return NextResponse.json({ ok: false, errors: { slug: "That slug is already used by an existing page." } }, { status: 409, headers: NOINDEX });
    if (await slugTaken(slug, Number(id))) return NextResponse.json({ ok: false, errors: { slug: "Another post already uses that slug." } }, { status: 409, headers: NOINDEX });
  }
  const ok = await updatePost(Number(id), parsed.data);
  if (!ok) return NextResponse.json({ ok: false, error: "not found" }, { status: 404, headers: NOINDEX });
  return NextResponse.json({ ok: true }, { headers: NOINDEX });
}

// Restore this post to a saved revision. Body: { action: "restore", revisionId }.
export async function POST(req: Request, { params }: Ctx) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const { id } = await params;
  const body = await req.json().catch(() => ({}));
  if (body?.action === "restore" && typeof body?.revisionId === "number") {
    const ok = await restorePostRevision(Number(id), body.revisionId);
    return NextResponse.json({ ok }, { status: ok ? 200 : 404, headers: NOINDEX });
  }
  return NextResponse.json({ ok: false, error: "unknown action" }, { status: 400, headers: NOINDEX });
}

export async function DELETE(req: Request, { params }: Ctx) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const { id } = await params;
  const ok = await deletePost(Number(id));
  if (!ok) return NextResponse.json({ ok: false, error: "not found" }, { status: 404, headers: NOINDEX });
  return NextResponse.json({ ok: true }, { headers: NOINDEX });
}
