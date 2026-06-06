import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { addNote } from "@/lib/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const { id } = await params;
  const body = await req.json().catch(() => ({}));
  const text = String(body?.body ?? "").trim().slice(0, 2000);
  if (!text) return NextResponse.json({ ok: false, error: "empty note" }, { status: 400 });
  const note = await addNote(Number(id), text);
  if (!note) return NextResponse.json({ ok: false, error: "not found" }, { status: 404 });
  return NextResponse.json({ ok: true, note });
}
