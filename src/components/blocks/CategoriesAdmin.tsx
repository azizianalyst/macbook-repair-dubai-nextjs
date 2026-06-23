"use client";
import { useCallback, useEffect, useState } from "react";
import { Loader2, ArrowLeft, Save, ExternalLink, FolderTree, Info, Lock, Search } from "lucide-react";
import { PageSeoEditor, type PageSeoRow } from "@/components/blocks/PageSeoAdmin";

type Category = { slug: string; name: string; eyebrow: string; blurb: string; intro: string; types: string[] };
type Tag = { slug: string; name: string };

// WordPress-style Categories editor for the blog. Slugs are locked to the hub route folders; the owner
// edits the copy + which post "Types" map to each hub, plus tag display names.
export default function CategoriesAdmin() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [uncat, setUncat] = useState(0);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");
  const [metaRows, setMetaRows] = useState<PageSeoRow[]>([]);   // pageMeta overrides keyed by /blog/<slug>
  const [seoRow, setSeoRow] = useState<PageSeoRow | null>(null); // open the full SEO editor for one hub

  const load = useCallback(async () => {
    setLoading(true); setErr("");
    try {
      const res = await fetch("/api/admin/categories/", { cache: "no-store" });
      if (res.status === 401) { window.location.href = "/admin/login"; return; }
      const d = await res.json();
      setCategories(d.categories || []); setTags(d.tags || []); setCounts(d.counts || {}); setUncat(d.uncategorised || 0);
      // pageMeta rows give each hub its full SEO override (title/meta/keywords/score/AI/Service tab).
      const mr = await fetch("/api/admin/pagemeta/", { cache: "no-store" });
      if (mr.ok) { const md = await mr.json(); setMetaRows(md.routes || []); }
    } catch { setErr("Could not load categories."); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const openSeo = (slug: string) => {
    const path = `/blog/${slug}`;
    const row = metaRows.find((r) => r.path === path);
    setSeoRow(row ?? { path, title: "", description: "", liveTitle: "", liveDescription: "", overridden: false, pending: false, override: null });
  };

  const patchCat = (i: number, p: Partial<Category>) => setCategories((cs) => cs.map((c, j) => j === i ? { ...c, ...p } : c));
  const patchTag = (i: number, name: string) => setTags((ts) => ts.map((t, j) => j === i ? { ...t, name } : t));

  async function save() {
    setBusy(true); setErr(""); setMsg("");
    try {
      const res = await fetch("/api/admin/categories/", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ categories, tags }) });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      const j = await res.json().catch(() => ({}));
      if (!res.ok) { setErr(j.error || "Save failed."); return; }
      setMsg("Saved. Applies on the next deploy.");
    } catch { setErr("Could not reach the server."); }
    finally { setBusy(false); }
  }

  if (loading) return <div className="mx-auto flex max-w-content items-center justify-center py-2xl text-text-faint"><Loader2 className="animate-spin" /></div>;

  // Full Rank Math–style SEO editor for the selected hub (/blog/<slug>) — keywords, score, AI, Service tab.
  if (seoRow) return <PageSeoEditor row={seoRow} backLabel="Categories" onClose={() => setSeoRow(null)} onSaved={() => { setSeoRow(null); load(); }} />;

  return (
    <div className="mx-auto max-w-content">
      <div className="mb-lg flex flex-wrap items-center justify-between gap-sm">
        <div className="flex items-center gap-3">
          <a href="/admin/blog" className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> Posts</a>
          <h1 className="m-0 text-[24px] text-text">Categories</h1>
        </div>
        <button onClick={save} disabled={busy} className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-4 py-2 text-[13px] font-semibold text-white disabled:opacity-50">{busy ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />} Save</button>
      </div>

      <div className="mb-md flex items-start gap-2 rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-text-muted">
        <Info size={15} className="mt-0.5 shrink-0 text-accent" />
        <span>Each category is a hub page at <code className="text-text">/blog/&lt;slug&gt;</code>. Edit its <strong className="text-text">name, copy and the post Types</strong> it collects. Slugs are <Lock size={11} className="inline" /> locked to the hub routes. A post joins a category by the <strong className="text-text">Type</strong> before the “·” in its category. Applies on the <strong className="text-text">next deploy</strong>.</span>
      </div>

      {err && <p className="mb-md rounded-md border border-danger/40 bg-danger/10 px-3 py-2 text-[13px] text-danger">{err}</p>}
      {msg && <p className="mb-md rounded-md border border-whatsapp/40 bg-whatsapp/10 px-3 py-2 text-[13px] text-whatsapp">{msg}</p>}
      {uncat > 0 && <p className="mb-md rounded-md border border-[#fbbf24]/40 bg-[#fbbf24]/10 px-3 py-2 text-[13px] text-[#fbbf24]">{uncat} post(s) match no category — add their Type to a hub below.</p>}

      <div className="flex flex-col gap-3">
        {categories.map((c, i) => (
          <div key={c.slug} className="rounded-md border border-border bg-bg-card p-md">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <FolderTree size={16} className="text-accent" />
                <input value={c.name} onChange={(e) => patchCat(i, { name: e.target.value })} className={inp + " max-w-[260px] font-semibold"} />
                <span className="inline-flex items-center gap-1 rounded bg-bg-alt px-1.5 py-0.5 text-[11px] text-text-faint"><Lock size={10} /> /blog/{c.slug}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded bg-accent/12 px-2 py-0.5 text-[12px] font-semibold text-accent">{counts[c.slug] ?? 0} posts</span>
                <a href={`/blog/${c.slug}`} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text"><ExternalLink size={14} /></a>
                <button onClick={() => openSeo(c.slug)} className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-[12px] text-accent hover:border-accent"><Search size={12} /> Edit SEO</button>
              </div>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <Field label="Eyebrow"><input value={c.eyebrow} onChange={(e) => patchCat(i, { eyebrow: e.target.value })} className={inp} /></Field>
              <Field label="Types (comma-separated)" hint="posts whose Type matches file here">
                <input value={c.types.join(", ")} onChange={(e) => patchCat(i, { types: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })} className={inp + " font-mono text-[12px]"} />
              </Field>
            </div>
            <Field label="Card blurb"><input value={c.blurb} onChange={(e) => patchCat(i, { blurb: e.target.value })} className={inp} /></Field>
            <Field label="Hub intro (SEO paragraph)"><textarea value={c.intro} onChange={(e) => patchCat(i, { intro: e.target.value })} rows={3} className={inp} /></Field>
          </div>
        ))}
      </div>

      <h2 className="mb-2 mt-lg text-[16px] text-text">Tags</h2>
      <p className="m-0 mb-2 text-[12px] text-text-faint">Device tag hubs (<Lock size={10} className="inline" /> slugs locked to <code>/blog/tag/&lt;slug&gt;</code>). Edit display names.</p>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {tags.map((t, i) => (
          <div key={t.slug} className="flex items-center gap-2 rounded-md border border-border bg-bg-card p-2">
            <span className="inline-flex items-center gap-1 rounded bg-bg-alt px-1.5 py-0.5 text-[11px] text-text-faint"><Lock size={10} /> {t.slug}</span>
            <input value={t.name} onChange={(e) => patchTag(i, e.target.value)} className={inp} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="mt-2 block">
      <span className="mb-1 flex items-center justify-between text-[12px] text-text-faint"><span>{label}</span>{hint && <span className="text-[11px]">{hint}</span>}</span>
      {children}
    </label>
  );
}

const inp = "w-full rounded-md border border-border bg-bg px-2 py-1.5 text-[13px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none";
