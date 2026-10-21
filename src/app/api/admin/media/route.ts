import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { requireAdmin } from "@/lib/admin-auth";
import { readMediaMeta, setMediaMeta } from "@/lib/seo-store";

// Owner-only Media Library. Uploads land in public/images/uploads/ and are served at
// /images/uploads/<name>. The library lists EVERY image under public/images/ (the whole site library)
// so the owner can browse, count and set alt/caption per image. Alt/caption are keyed by the image's
// public path (e.g. /images/devices/iphone-13.jpg) so files with the same name in different folders
// don't collide. Only uploaded images can be DELETED here (curated images are referenced by pages).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOINDEX = { "X-Robots-Tag": "noindex" };
const ROOT = path.join(process.cwd(), "public", "images");
const UPLOAD_DIR = path.join(ROOT, "uploads");
const UPLOAD_PREFIX = "/images/uploads/";
const ALLOWED = new Set(["jpg", "jpeg", "png", "webp", "avif", "gif"]);
const MAX_BYTES = 10 * 1024 * 1024;

const extOf = (name: string) => (name.split(".").pop() || "").toLowerCase();
const baseSlug = (name: string) =>
  name.replace(/\.[^.]+$/, "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 60) || "image";
// Upload filename (no path) — bare safe name, no traversal.
const safeName = (name: string) => /^[a-z0-9][a-z0-9.\-]*$/.test(name) && !name.includes("..");
// A public image path we manage: under /images/, no traversal.
const safePath = (p: string) => /^\/images\/[a-z0-9/_.\-]+$/i.test(p) && !p.includes("..");

// Recursively collect image files under public/images, returning absolute paths.
async function walk(dir: string, out: string[] = []): Promise<string[]> {
  let entries: import("fs").Dirent[] = [];
  try { entries = await fs.readdir(dir, { withFileTypes: true }); } catch { return out; }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) await walk(full, out);
    else if (ALLOWED.has(extOf(e.name))) out.push(full);
  }
  return out;
}

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const meta = await readMediaMeta();
  const files = await walk(ROOT);
  const items = (await Promise.all(
    files.map(async (full) => {
      try {
        const st = await fs.stat(full);
        const rel = full.slice(ROOT.length).replace(/\\/g, "/"); // e.g. /devices/iphone-13.jpg
        const pubPath = "/images" + rel;
        const name = path.basename(full);
        const folder = path.dirname(rel).replace(/^\//, "") || "(root)";
        const deletable = full.startsWith(UPLOAD_DIR);
        const m = meta[pubPath] || meta[name]; // prefer path-keyed; fall back to legacy basename
        return { name, path: pubPath, folder, size: st.size, mtime: st.mtimeMs, alt: m?.alt || "", caption: m?.caption || "", deletable };
      } catch { return null; }
    }),
  )).filter(Boolean) as { name: string; path: string; folder: string; size: number; mtime: number; alt: string; caption: string; deletable: boolean }[];
  items.sort((a, b) => a.folder.localeCompare(b.folder) || a.name.localeCompare(b.name));
  const folders = [...new Set(items.map((i) => i.folder))].sort();
  return NextResponse.json({ ok: true, count: items.length, folders, items }, { headers: NOINDEX });
}

// Derive readable alt text from a filename: drop extension + responsive/format qualifiers, dashes→spaces.
function altFromName(name: string): string {
  return name
    .replace(/\.[^.]+$/, "")
    .replace(/-(desktop|tablet|mobile|thumb|sm|md|lg|xl|2x|3x|hero|card|og)$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export async function POST(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  // JSON body → bulk action (seed alt text). Multipart → file upload.
  const ct = req.headers.get("content-type") || "";
  if (ct.includes("application/json")) {
    const body = await req.json().catch(() => ({}));
    if (body?.action !== "seed-alt") return NextResponse.json({ ok: false, error: "unknown action" }, { status: 400, headers: NOINDEX });
    const meta = await readMediaMeta();
    const files = await walk(ROOT);
    let filled = 0;
    for (const full of files) {
      const rel = full.slice(ROOT.length).replace(/\\/g, "/");
      const pubPath = "/images" + rel;
      const name = path.basename(full);
      const existing = meta[pubPath]?.alt || meta[name]?.alt || "";
      if (existing.trim()) continue; // never overwrite
      const alt = altFromName(name);
      if (!alt) continue;
      await setMediaMeta(pubPath, alt, meta[pubPath]?.caption || "");
      filled++;
    }
    return NextResponse.json({ ok: true, filled }, { headers: NOINDEX });
  }

  const form = await req.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof File)) return NextResponse.json({ ok: false, error: "No file" }, { status: 400, headers: NOINDEX });
  const ext = extOf(file.name);
  if (!ALLOWED.has(ext)) return NextResponse.json({ ok: false, error: "Use JPG, PNG, WebP, AVIF or GIF" }, { status: 400, headers: NOINDEX });
  if (file.size > MAX_BYTES) return NextResponse.json({ ok: false, error: "Max 10 MB" }, { status: 400, headers: NOINDEX });

  await fs.mkdir(UPLOAD_DIR, { recursive: true });
  let name = `${baseSlug(file.name)}.${ext}`;
  // De-dupe: append a short suffix if the name is taken.
  try { await fs.access(path.join(UPLOAD_DIR, name)); name = `${baseSlug(file.name)}-${Date.now().toString(36)}.${ext}`; } catch { /* free */ }

  const buf = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(UPLOAD_DIR, name), buf);
  const pubPath = UPLOAD_PREFIX + name;
  return NextResponse.json({ ok: true, item: { name, path: pubPath, folder: "uploads", size: buf.length, alt: "", caption: "", deletable: true } }, { headers: NOINDEX });
}

// Set alt/caption for ANY image, keyed by its public path (e.g. /images/devices/iphone-13.jpg).
export async function PATCH(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const body = await req.json().catch(() => ({}));
  // Accept the public path (new) or a bare name (legacy callers).
  const key = String(body?.path || body?.name || "");
  if (!(safePath(key) || safeName(key))) return NextResponse.json({ ok: false, error: "Bad path" }, { status: 400, headers: NOINDEX });
  const ok = await setMediaMeta(key, String(body?.alt || ""), String(body?.caption || ""));
  if (!ok) return NextResponse.json({ ok: false, error: "save failed" }, { status: 500, headers: NOINDEX });
  return NextResponse.json({ ok: true }, { headers: NOINDEX });
}

// Delete is allowed ONLY for uploaded images — curated site images are referenced by pages.
export async function DELETE(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const pub = new URL(req.url).searchParams.get("path") || "";
  if (!safePath(pub) || !pub.startsWith(UPLOAD_PREFIX)) return NextResponse.json({ ok: false, error: "Only uploaded images can be deleted here" }, { status: 400, headers: NOINDEX });
  const abs = path.join(ROOT, pub.slice("/images".length));
  try { await fs.unlink(abs); } catch { return NextResponse.json({ ok: false, error: "not found" }, { status: 404, headers: NOINDEX }); }
  return NextResponse.json({ ok: true }, { headers: NOINDEX });
}
