import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { SiteSettingsSchema } from "@/lib/seo-schema";
import { readSettings, saveSettings } from "@/lib/seo-store";

// Owner-only global Site Settings. Baked into src/content/settings.generated.ts at the next build
// (scripts/gen-settings.cjs) — see /admin/settings.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOINDEX = { "X-Robots-Tag": "noindex" };

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const settings = await readSettings();
  return NextResponse.json({ ok: true, settings }, { headers: NOINDEX });
}

export async function PUT(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const body = await req.json().catch(() => ({}));
  const parsed = SiteSettingsSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) fieldErrors[String(issue.path[0])] = issue.message;
    return NextResponse.json({ ok: false, errors: fieldErrors }, { status: 400, headers: NOINDEX });
  }
  const ok = await saveSettings(parsed.data);
  if (!ok) return NextResponse.json({ ok: false, error: "save failed" }, { status: 500, headers: NOINDEX });
  return NextResponse.json({ ok: true }, { headers: NOINDEX });
}
