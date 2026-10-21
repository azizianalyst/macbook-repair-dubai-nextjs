import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { ScreenPricePatchSchema } from "@/lib/seo-schema";
import { updateScreenPrice, deleteScreenPrice } from "@/lib/seo-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOINDEX = { "X-Robots-Tag": "noindex" };

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const { id } = await params;
  const body = await req.json().catch(() => ({}));
  const parsed = ScreenPricePatchSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, errors: parsed.error.flatten().fieldErrors }, { status: 400, headers: NOINDEX });
  const ok = await updateScreenPrice(Number(id), parsed.data);
  return NextResponse.json({ ok }, { status: ok ? 200 : 404, headers: NOINDEX });
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const { id } = await params;
  const ok = await deleteScreenPrice(Number(id));
  return NextResponse.json({ ok }, { status: ok ? 200 : 404, headers: NOINDEX });
}
