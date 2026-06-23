"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Loader2, Upload, Trash2, Copy, Check, ImageIcon, Search, Sparkles } from "lucide-react";

export type MediaItem = { name: string; path: string; folder?: string; size: number; mtime?: number; alt?: string; caption?: string; deletable?: boolean };

const fmtSize = (b: number) => (b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(0)} KB` : `${(b / 1024 / 1024).toFixed(1)} MB`);

// Owner Media Library: browse EVERY image under public/images/, upload new ones, set alt/caption on any
// image (keyed by its public path), and delete uploaded images. When `onPick` is set it acts as a
// picker (clicking an image returns its path). Used standalone at /admin/media and inside ImagePicker.
export default function MediaLibrary({ onPick }: { onPick?: (path: string) => void }) {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [folders, setFolders] = useState<string[]>([]);
  const [folderF, setFolderF] = useState("all");
  const [q, setQ] = useState("");
  const [missingAltOnly, setMissingAltOnly] = useState(false);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [copied, setCopied] = useState("");
  const [drag, setDrag] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const load = useCallback(async () => {
    setLoading(true); setErr("");
    try {
      const res = await fetch("/api/admin/media/", { cache: "no-store" });
      if (res.status === 401) { window.location.href = "/admin/login"; return; }
      const d = await res.json();
      setItems(d.items || []); setFolders(d.folders || []);
    } catch { setErr("Could not load media."); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return items.filter((it) => {
      if (folderF !== "all" && it.folder !== folderF) return false;
      if (missingAltOnly && (it.alt || "").trim()) return false;
      if (needle && ![it.name, it.path, it.alt].some((v) => (v || "").toLowerCase().includes(needle))) return false;
      return true;
    });
  }, [items, folderF, q, missingAltOnly]);

  const upload = useCallback(async (files: FileList | File[]) => {
    setErr(""); setBusy(true);
    try {
      for (const file of Array.from(files)) {
        const fd = new FormData(); fd.append("file", file);
        const res = await fetch("/api/admin/media/", { method: "POST", body: fd });
        if (res.status === 401) return void (window.location.href = "/admin/login");
        const d = await res.json().catch(() => ({}));
        if (!res.ok) { setErr(d.error || "Upload failed"); continue; }
        setItems((prev) => [d.item, ...prev.filter((p) => p.path !== d.item.path)]);
      }
    } finally { setBusy(false); }
  }, []);

  async function remove(it: MediaItem) {
    if (!it.deletable) return;
    if (!confirm("Delete this uploaded image? Pages still using it will lose it on the next deploy.")) return;
    const res = await fetch(`/api/admin/media/?path=${encodeURIComponent(it.path)}`, { method: "DELETE" });
    if (res.status === 401) return void (window.location.href = "/admin/login");
    if (res.ok) setItems((prev) => prev.filter((p) => p.path !== it.path));
  }

  function copy(text: string, key: string) {
    navigator.clipboard?.writeText(text); setCopied(key); setTimeout(() => setCopied(""), 1200);
  }

  async function saveAlt(it: MediaItem, alt: string) {
    setItems((prev) => prev.map((p) => p.path === it.path ? { ...p, alt } : p));
    await fetch("/api/admin/media/", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ path: it.path, alt, caption: it.caption || "" }) });
  }

  async function seedAlt() {
    if (!confirm("Fill a starter alt text (from the filename) for every image that has none? It never overwrites alt text you've set.")) return;
    setBusy(true); setErr("");
    try {
      const res = await fetch("/api/admin/media/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "seed-alt" }) });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      if (res.ok) await load(); else setErr("Seed failed.");
    } finally { setBusy(false); }
  }

  return (
    <div>
      {/* Upload zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => { e.preventDefault(); setDrag(false); if (e.dataTransfer.files?.length) upload(e.dataTransfer.files); }}
        onClick={() => inputRef.current?.click()}
        className={`mb-md flex cursor-pointer flex-col items-center justify-center gap-1 rounded-md border-2 border-dashed px-4 py-6 text-center transition-colors ${drag ? "border-accent bg-accent/5" : "border-border bg-bg-card hover:border-accent/50"}`}
      >
        {busy ? <Loader2 size={22} className="animate-spin text-accent" /> : <Upload size={22} className="text-accent" />}
        <p className="m-0 text-[14px] text-text">{busy ? "Uploading…" : "Drop images here or click to upload"}</p>
        <p className="m-0 text-[12px] text-text-faint">JPG, PNG, WebP, AVIF or GIF · up to 10 MB</p>
        <input ref={inputRef} type="file" accept="image/*" multiple hidden onChange={(e) => e.target.files && upload(e.target.files)} />
      </div>

      {err && <p className="mb-md rounded-md border border-danger/40 bg-danger/10 px-3 py-2 text-[13px] text-danger">{err}</p>}

      {/* Filters */}
      <div className="mb-md flex flex-wrap items-center gap-2">
        <div className="relative min-w-[200px] max-w-sm flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-faint" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, path or alt…" className="w-full rounded-md border border-border bg-bg-card pl-9 pr-3 py-2 text-[13px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none" />
        </div>
        <select value={folderF} onChange={(e) => setFolderF(e.target.value)} className="rounded-md border border-border bg-bg-card px-2.5 py-2 text-[13px] text-text focus:border-accent focus:outline-none">
          <option value="all">All folders ({items.length})</option>
          {folders.map((f) => <option key={f} value={f}>{f} ({items.filter((i) => i.folder === f).length})</option>)}
        </select>
        <label className="inline-flex items-center gap-2 text-[13px] text-text-muted"><input type="checkbox" checked={missingAltOnly} onChange={(e) => setMissingAltOnly(e.target.checked)} /> Missing alt only</label>
        <button onClick={seedAlt} disabled={busy} className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg-card px-3 py-2 text-[13px] text-text-muted hover:text-text disabled:opacity-50"><Sparkles size={14} /> Fill missing alt</button>
        <span className="text-[13px] text-text-faint">{shown.length} shown</span>
      </div>

      {loading ? (
        <div className="flex justify-center py-2xl text-text-faint"><Loader2 className="animate-spin" /></div>
      ) : shown.length === 0 ? (
        <div className="rounded-md border border-dashed border-border bg-bg-card px-3 py-10 text-center text-[14px] text-text-muted">
          <ImageIcon className="mx-auto mb-2 text-text-faint" /> No images match.
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {shown.map((it) => (
            <div key={it.path} className="group overflow-hidden rounded-md border border-border bg-bg-card">
              <div
                className={`relative aspect-[4/3] bg-bg-alt ${onPick ? "cursor-pointer" : ""}`}
                onClick={onPick ? () => onPick(it.path) : undefined}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.path} alt={it.alt || it.name} className="h-full w-full object-cover" loading="lazy" />
                {!(it.alt || "").trim() && <span className="absolute left-1 top-1 rounded bg-[#fbbf24]/90 px-1 py-0.5 text-[10px] font-semibold text-black">no alt</span>}
                {onPick && <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/40 group-hover:opacity-100"><span className="rounded bg-white px-2 py-1 text-[12px] font-semibold text-black">Select</span></div>}
              </div>
              <div className="p-2">
                <p className="m-0 truncate text-[12px] text-text" title={it.path}>{it.name}</p>
                <p className="m-0 truncate text-[11px] text-text-faint" title={it.folder}>{it.folder} · {fmtSize(it.size)}</p>
                <input
                  defaultValue={it.alt || ""}
                  onBlur={(e) => { if (e.target.value !== (it.alt || "")) saveAlt(it, e.target.value); }}
                  placeholder="Alt text (describe the image)"
                  className="mt-1.5 w-full rounded border border-border bg-bg px-1.5 py-1 text-[11px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
                />
                <div className="mt-1.5 flex items-center gap-1">
                  <button onClick={() => copy(it.path, "p" + it.path)} className="inline-flex items-center gap-1 rounded border border-border px-1.5 py-1 text-[11px] text-text-muted hover:text-text" title="Copy path">
                    {copied === "p" + it.path ? <Check size={12} className="text-whatsapp" /> : <Copy size={12} />} path
                  </button>
                  <button onClick={() => copy(`![${it.alt || it.name}](${it.path})`, "m" + it.path)} className="inline-flex items-center gap-1 rounded border border-border px-1.5 py-1 text-[11px] text-text-muted hover:text-text" title="Copy markdown">
                    {copied === "m" + it.path ? <Check size={12} className="text-whatsapp" /> : <Copy size={12} />} md
                  </button>
                  {it.deletable && <button onClick={() => remove(it)} className="ml-auto rounded border border-border p-1 text-text-faint hover:text-danger" title="Delete (uploaded image)"><Trash2 size={12} /></button>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
