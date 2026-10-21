import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import {
  getBusinessInfo,
  updateServices,
  buildServiceItems,
  SERVICE_DESCRIPTION_MAX,
  type ServiceInput,
} from "@/lib/gbp";
import { getGbpConfig } from "@/lib/gbp-store";
import { GBP_SERVICES } from "@/content/gbp-content.generated";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Publish the generated service list to the Google Business Profile.
 *
 * The 103 services live in src/content/gbp-content.generated.ts, produced by
 * scripts/gen-gbp-content.mjs from docs/gbp-content-pack-2026-08-30.md. The
 * markdown stays canonical; nothing here is hand-maintained.
 *
 * GET  → what is on the profile now, plus what we would send (a dry run).
 * POST → replace the profile's services with the generated list.
 *
 * ⚠️ REPLACE, NOT MERGE. Google has no partial update for serviceItems, so this
 * overwrites whatever is there. GET first if you need to keep anything.
 */

/**
 * Match a content-pack category name to one of the location's real categories
 * and return its gcid. Falls back to the primary category, which is the right
 * default — a service filed under a category the profile does not have is
 * rejected by the API.
 */
function resolveCategoryIds(
  info: Awaited<ReturnType<typeof getBusinessInfo>>,
): { primaryId?: string; byName: Map<string, string> } {
  const byName = new Map<string, string>();
  const primary = info.categories?.primaryCategory;
  const all = [primary, ...(info.categories?.additionalCategories ?? [])].filter(Boolean);
  for (const c of all) {
    if (c?.displayName && c.name) byName.set(c.displayName.toLowerCase(), c.name);
  }
  return { primaryId: primary?.name, byName };
}

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const cfg = await getGbpConfig();
  if (!cfg?.locationId) return NextResponse.json({ ok: false, error: "No location" }, { status: 400 });
  try {
    const info = await getBusinessInfo(cfg.locationId);
    const { primaryId, byName } = resolveCategoryIds(info);

    // Which content-pack categories are not on the profile yet? Those services
    // fall back to the primary category, which still publishes but does not
    // substantiate the secondary category the way the standard intends.
    const packCategories = [...new Set(GBP_SERVICES.map((s) => s.category))];
    const missing = packCategories.filter((c) => !byName.has(c.toLowerCase()));

    return NextResponse.json({
      ok: true,
      live: {
        count: info.serviceItems?.length ?? 0,
        primaryCategory: info.categories?.primaryCategory?.displayName,
        secondaryCategories: (info.categories?.additionalCategories ?? []).map((c) => c.displayName),
      },
      willPublish: {
        count: GBP_SERVICES.length,
        categories: packCategories,
        missingCategories: missing,
        note: missing.length
          ? `${missing.length} category(ies) are not on the profile yet — add them in Module 2 first, or those services publish under the primary category.`
          : "All content-pack categories exist on the profile.",
      },
      canPublish: Boolean(primaryId),
    });
  } catch (e: unknown) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}

export async function POST(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const cfg = await getGbpConfig();
  if (!cfg?.locationId) return NextResponse.json({ ok: false, error: "No location" }, { status: 400 });

  try {
    const info = await getBusinessInfo(cfg.locationId);
    const { primaryId, byName } = resolveCategoryIds(info);
    if (!primaryId) {
      return NextResponse.json(
        { ok: false, error: "No primary category gcid on the location — cannot file services." },
        { status: 400 },
      );
    }

    const inputs: ServiceInput[] = GBP_SERVICES.map((s) => ({
      name: s.name,
      description: s.description,
      categoryId: byName.get(s.category.toLowerCase()) ?? primaryId,
    }));

    // Throws with the offending names if any description is over the limit.
    // Google rejects the whole batch with an opaque 400 otherwise.
    const items = buildServiceItems(inputs, primaryId);
    const before = info.serviceItems?.length ?? 0;
    const updated = await updateServices(cfg.locationId, items);

    return NextResponse.json({
      ok: true,
      before,
      after: updated.serviceItems?.length ?? items.length,
      published: items.length,
      limit: SERVICE_DESCRIPTION_MAX,
    });
  } catch (e: unknown) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
