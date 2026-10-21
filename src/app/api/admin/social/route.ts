import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { readSocialPosts, insertSocialPost, updateSocialPost, deleteSocialPost, setSecret, type SocialPost } from "@/lib/seo-store";
import { facebookConfigured, postToFacebook } from "@/lib/facebook";

// Owner/manager/content social publishing. Compose once, publish or schedule to Facebook (Instagram
// next). Publishing runs at runtime via the Graph API — needs FB Page creds (env or dashboard-saved).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const NOINDEX = { "X-Robots-Tag": "noindex" };
const SITE = "https://macbook-repair-dubai.ae";
const abs = (u?: string) => (!u ? undefined : /^https?:\/\//i.test(u) ? u : SITE + (u.startsWith("/") ? u : "/" + u));

// Publish a stored post to its platforms; mutates status/externalId/error in the store.
async function publish(post: SocialPost): Promise<{ ok: boolean; error?: string; externalId?: string }> {
  try {
    let externalId = "";
    if (post.platforms.includes("facebook")) {
      const r = await postToFacebook({ message: post.text, link: post.link, imageUrl: abs(post.image) });
      externalId = r.id;
    }
    await updateSocialPost(post.id, { status: "published", publishedAt: new Date().toISOString(), externalId, error: "" });
    return { ok: true, externalId };
  } catch (e) {
    const error = String((e as Error).message || e).slice(0, 300);
    await updateSocialPost(post.id, { status: "failed", error });
    return { ok: false, error };
  }
}

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  return NextResponse.json({ ok: true, configured: await facebookConfigured(), posts: await readSocialPosts() }, { headers: NOINDEX });
}

export async function POST(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const body = await req.json().catch(() => ({}));

  // Connect Facebook (save Page id + token to secrets).
  if (body?.action === "connect") {
    const pageId = String(body?.pageId || "").trim();
    const token = String(body?.token || "").trim();
    if (!pageId || !token) return NextResponse.json({ ok: false, error: "Page ID and token required" }, { status: 400, headers: NOINDEX });
    await setSecret("fbPageId", pageId); await setSecret("fbPageToken", token);
    return NextResponse.json({ ok: true, configured: true }, { headers: NOINDEX });
  }
  // Publish an existing saved post now.
  if (body?.action === "publish" && typeof body?.id === "number") {
    const post = (await readSocialPosts()).find((p) => p.id === body.id);
    if (!post) return NextResponse.json({ ok: false, error: "not found" }, { status: 404, headers: NOINDEX });
    const r = await publish(post);
    return NextResponse.json({ ok: r.ok, error: r.error }, { headers: NOINDEX });
  }

  // Create a post (draft, scheduled, or publish-now).
  const text = String(body?.text || "").trim();
  const link = String(body?.link || "").trim() || undefined;
  const image = String(body?.image || "").trim() || undefined;
  const platforms: string[] = Array.isArray(body?.platforms) && body.platforms.length ? body.platforms : ["facebook"];
  const scheduledFor = body?.scheduledFor ? String(body.scheduledFor) : null;
  if (!text && !image) return NextResponse.json({ ok: false, error: "Add some text or an image." }, { status: 400, headers: NOINDEX });

  const status: SocialPost["status"] = body?.publishNow ? "draft" : scheduledFor ? "scheduled" : "draft";
  const created = await insertSocialPost({ text, link, image, platforms, status, scheduledFor, createdAt: new Date().toISOString() });
  if (!created) return NextResponse.json({ ok: false, error: "save failed" }, { status: 500, headers: NOINDEX });

  if (body?.publishNow) {
    const r = await publish(created);
    return NextResponse.json({ ok: r.ok, id: created.id, error: r.error }, { headers: NOINDEX });
  }
  return NextResponse.json({ ok: true, id: created.id }, { headers: NOINDEX });
}

export async function DELETE(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const id = Number(new URL(req.url).searchParams.get("id") || 0);
  if (!id) return NextResponse.json({ ok: false, error: "id required" }, { status: 400, headers: NOINDEX });
  const ok = await deleteSocialPost(id);
  return NextResponse.json({ ok }, { status: ok ? 200 : 404, headers: NOINDEX });
}
