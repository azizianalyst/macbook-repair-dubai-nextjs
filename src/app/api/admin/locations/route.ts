import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { AreaOverrideSchema, CityOverrideSchema } from "@/lib/seo-schema";
import { readAreaOverrides, readCityOverrides, upsertAreaOverride, upsertCityOverride } from "@/lib/seo-store";
import { AREAS } from "@/content/areas";
import { CITIES } from "@/content/cities";

// Owner-only editor for area (26) + city (9) landing-page copy. SPARSE OVERRIDE: only the editable
// prose + FAQs are stored per slug; structural fields stay in code. Baked into the *-overrides
// generated maps at the next build (scripts/gen-locations.cjs). See /admin/locations.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOINDEX = { "X-Robots-Tag": "noindex" };

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const [aOver, cOver] = await Promise.all([readAreaOverrides(), readCityOverrides()]);
  const aSet = new Set(aOver.map((o) => o.slug));
  const cSet = new Set(cOver.map((o) => o.slug));
  // Current (merged) editable values for the editor to prefill.
  const areas = AREAS.map((a) => ({
    slug: a.slug, path: "/macbook-repair-" + a.slug, area: a.area, short: a.short, driveTime: a.driveTime,
    metroNote: a.metroNote, pickupWindow: a.pickupWindow, landmarkLine: a.landmarkLine,
    intro: a.intro, whyChoose: a.whyChoose, pickupNote: a.pickupNote, faqs: a.faqs, overridden: aSet.has(a.slug),
  }));
  const cities = CITIES.map((c) => ({
    slug: c.slug, path: "/macbook-repair-" + c.slug, city: c.city, short: c.short, distance: c.distance,
    collectionWindow: c.collectionWindow, turnaround: c.turnaround, landmarkLine: c.landmarkLine,
    intro: c.intro, whyChoose: c.whyChoose, collectionNote: c.collectionNote, faqs: c.faqs, overridden: cSet.has(c.slug),
  }));
  return NextResponse.json({ ok: true, areas, cities }, { headers: NOINDEX });
}

export async function PUT(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const body = await req.json().catch(() => ({}));
  const kind = body?.kind;
  if (kind === "area") {
    const parsed = AreaOverrideSchema.safeParse(body.override);
    if (!parsed.success) return NextResponse.json({ ok: false, error: "invalid area fields" }, { status: 400, headers: NOINDEX });
    const ok = await upsertAreaOverride(parsed.data);
    return NextResponse.json({ ok }, { status: ok ? 200 : 500, headers: NOINDEX });
  }
  if (kind === "city") {
    const parsed = CityOverrideSchema.safeParse(body.override);
    if (!parsed.success) return NextResponse.json({ ok: false, error: "invalid city fields" }, { status: 400, headers: NOINDEX });
    const ok = await upsertCityOverride(parsed.data);
    return NextResponse.json({ ok }, { status: ok ? 200 : 500, headers: NOINDEX });
  }
  return NextResponse.json({ ok: false, error: "bad kind" }, { status: 400, headers: NOINDEX });
}
