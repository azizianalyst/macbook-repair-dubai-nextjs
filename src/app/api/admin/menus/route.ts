import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { MenusSchema, type Menus } from "@/lib/seo-schema";
import { readMenus, saveMenus } from "@/lib/seo-store";
import { ROUTES } from "@/lib/routes.generated";

// Owner-only navigation menus (header mega-menu + footer columns). Baked into mega-menu.generated.ts
// at the next build (scripts/gen-menus.cjs). Internal hrefs are validated against ROUTES so a typo
// can't ship a broken nav link site-wide. See /admin/menus.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOINDEX = { "X-Robots-Tag": "noindex" };
const ROUTE_SET = new Set(ROUTES);

// Internal hrefs must resolve to a real route; external (http/tel/mailto) + the home "/" are allowed.
function badHrefs(m: Menus): string[] {
  const all: string[] = [];
  for (const p of m.header) { all.push(p.href); (p.links || []).forEach((l) => all.push(l.href)); }
  for (const c of m.footer) c.links.forEach((l) => all.push(l.href));
  const bad: string[] = [];
  for (const href of all) {
    if (!href.startsWith("/")) continue;            // external / tel / mailto
    if (href === "/") continue;
    const clean = href.split(/[?#]/)[0].replace(/\/+$/, "");
    if (!ROUTE_SET.has(clean)) bad.push(href);
  }
  return [...new Set(bad)];
}

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const menus = await readMenus();
  return NextResponse.json({ ok: true, menus, routes: ROUTES }, { headers: NOINDEX });
}

export async function PUT(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const body = await req.json().catch(() => ({}));
  const parsed = MenusSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Invalid menu shape." }, { status: 400, headers: NOINDEX });
  const bad = badHrefs(parsed.data);
  if (bad.length) return NextResponse.json({ ok: false, error: `Unknown internal links (fix or remove): ${bad.join(", ")}` }, { status: 400, headers: NOINDEX });
  const ok = await saveMenus(parsed.data);
  if (!ok) return NextResponse.json({ ok: false, error: "save failed" }, { status: 500, headers: NOINDEX });
  return NextResponse.json({ ok: true }, { headers: NOINDEX });
}
