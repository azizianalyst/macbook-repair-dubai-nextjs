import { NextResponse } from "next/server";
import { dueScheduledSocialPosts, updateSocialPost } from "@/lib/seo-store";
import { postToFacebook } from "@/lib/facebook";

// Publishes scheduled social posts whose time has arrived. Gated by CRON_SECRET (Bearer or ?secret=)
// so a Hostinger cron or the scheduled cloud agent can call it without an admin session.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const NOINDEX = { "X-Robots-Tag": "noindex" };
const SITE = "https://macbook-repair-dubai.ae";
const abs = (u?: string) => (!u ? undefined : /^https?:\/\//i.test(u) ? u : SITE + (u.startsWith("/") ? u : "/" + u));

async function run(req: Request) {
  const secret = process.env.CRON_SECRET;
  const url = new URL(req.url);
  const provided = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "") || url.searchParams.get("secret") || "";
  if (!secret || provided !== secret) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });

  const due = await dueScheduledSocialPosts(new Date().toISOString());
  let published = 0, failed = 0;
  for (const post of due) {
    try {
      let externalId = "";
      if (post.platforms.includes("facebook")) externalId = (await postToFacebook({ message: post.text, link: post.link, imageUrl: abs(post.image) })).id;
      await updateSocialPost(post.id, { status: "published", publishedAt: new Date().toISOString(), externalId, error: "" });
      published++;
    } catch (e) {
      await updateSocialPost(post.id, { status: "failed", error: String((e as Error).message || e).slice(0, 300) });
      failed++;
    }
  }
  return NextResponse.json({ ok: true, due: due.length, published, failed }, { headers: NOINDEX });
}
export const GET = run;
export const POST = run;
