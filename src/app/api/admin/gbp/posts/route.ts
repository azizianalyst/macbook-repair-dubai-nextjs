import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { listPosts, createPost } from "@/lib/gbp";
import { getGbpConfig } from "@/lib/gbp-store";
import { SITE } from "@/lib/seo";

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const cfg = await getGbpConfig();
  if (!cfg?.locationId) return NextResponse.json({ ok: false, error: "No location" }, { status: 400 });
  try {
    const posts = await listPosts(cfg.locationId);
    return NextResponse.json({ ok: true, posts });
  } catch (e: unknown) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}

export async function POST(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const cfg = await getGbpConfig();
  if (!cfg?.locationId) return NextResponse.json({ ok: false, error: "No location" }, { status: 400 });
  const body = await req.json();
  if (!body.summary?.trim()) return NextResponse.json({ ok: false, error: "summary required" }, { status: 400 });
  // Google requires a publicly-reachable absolute URL. Accept a site-relative path
  // (e.g. "/images/devices/iphone-17.jpg") and resolve it against the live domain,
  // so the admin form can just reuse the same paths the site itself uses.
  const imageUrl: string | undefined = body.imageUrl?.trim() || undefined;
  const sourceUrl = imageUrl
    ? (imageUrl.startsWith("http") ? imageUrl : `${SITE.url}${imageUrl.startsWith("/") ? "" : "/"}${imageUrl}`)
    : undefined;
  try {
    const post = await createPost(cfg.locationId, {
      topicType: body.topicType || "STANDARD",
      summary: body.summary.trim(),
      ...(body.callToAction ? { callToAction: body.callToAction } : {}),
      ...(body.event ? { event: body.event } : {}),
      ...(sourceUrl ? { media: [{ mediaFormat: "PHOTO", sourceUrl }] } : {}),
    });
    return NextResponse.json({ ok: true, post });
  } catch (e: unknown) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
