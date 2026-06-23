"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Loader2, Plus, Search, RefreshCw, ArrowLeft, Save, Trash2, Eye, Pencil, ExternalLink, FileText, X, FolderTree, CalendarClock, History, RotateCcw, Copy } from "lucide-react";
import { renderMarkdown } from "@/lib/markdown";
import { BLOG_CATEGORY_TYPES } from "@/lib/seo-schema";
import SeoMetaBox from "@/components/blocks/SeoMetaBox";
import ImagePicker from "@/components/blocks/ImagePicker";

type Faq = { q: string; a: string };
type Post = {
  id: number; slug: string; title: string; excerpt: string; category: string; author: string;
  authorRole?: string; quickAnswer?: string; body: string; heroImage?: string; heroAlt?: string;
  seoTitle?: string; seoDescription?: string; focusKeyword?: string; secondaryKeywords?: string[]; faqs?: Faq[]; status: "draft" | "published" | "scheduled";
  scheduledFor?: string; datePublished: string; dateModified?: string; minutes?: number;
  // Rank Math meta box (Schema / Social / Advanced)
  schemaType?: "Article" | "BlogPosting" | "NewsArticle" | "None";
  ogTitle?: string; ogDescription?: string; ogImage?: string;
  twitterCard?: "summary_large_image" | "summary"; twitterTitle?: string; twitterDescription?: string; twitterImage?: string;
  noindex?: boolean; nofollow?: boolean; noarchive?: boolean; noimageindex?: boolean; nosnippet?: boolean;
  canonical?: string; breadcrumbTitle?: string; redirect?: string; redirectType?: "301" | "302";
};
type Draft = Omit<Post, "id"> & { id?: number };

const today = () => new Date().toISOString().slice(0, 10);
const slugify = (s: string) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 120);

function emptyDraft(): Draft {
  return {
    slug: "", title: "", excerpt: "", category: "Problem solving · MacBook", author: "Shafiq",
    authorRole: "Senior Apple technician", quickAnswer: "", body: "", heroImage: "", heroAlt: "",
    seoTitle: "", seoDescription: "", focusKeyword: "", secondaryKeywords: [], faqs: [], status: "draft", scheduledFor: "", datePublished: today(), dateModified: "",
    schemaType: "Article", redirectType: "301",
  };
}

type Builtin = { slug: string; title: string; category: string; author: string; date: string };
type Category = { slug: string; name: string; blurb: string; types: string[]; count: number };
type RowU = { kind: "markdown" | "builtin"; id?: number; path: string; title: string; category: string; author: string; date: string; status?: "draft" | "published" | "scheduled"; raw?: Post };

export default function BlogAdmin() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [builtins, setBuiltins] = useState<Builtin[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [q, setQ] = useState("");
  const [catFilter, setCatFilter] = useState("all");
  const [kindFilter, setKindFilter] = useState<"all" | "markdown" | "builtin">("all");
  const [editing, setEditing] = useState<Draft | null>(null);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [bulkBusy, setBulkBusy] = useState(false);

  const load = useCallback(async () => {
    setLoading(true); setErr("");
    try {
      const res = await fetch("/api/admin/blog/", { cache: "no-store" });
      if (res.status === 401) { window.location.href = "/admin/login"; return; }
      const d = await res.json();
      setPosts(d.posts || []); setBuiltins(d.builtins || []); setCategories(d.categories || []);
    } catch { setErr("Could not load posts."); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const hubFor = useCallback((category: string): Category | undefined => {
    const type = (category || "").split("·")[0].trim();
    return categories.find((c) => c.types.includes(type));
  }, [categories]);

  // One unified list: admin markdown posts (editable) + hand-built posts (read-only here).
  const allRows = useMemo<RowU[]>(() => {
    const md: RowU[] = posts.map((p) => ({ kind: "markdown", id: p.id, path: "/blog/" + p.slug, title: p.title, category: p.category, author: p.author, date: p.datePublished, status: p.status, raw: p }));
    const bi: RowU[] = builtins.map((b) => ({ kind: "builtin", path: b.slug, title: b.title, category: b.category, author: b.author, date: b.date }));
    return [...md, ...bi];
  }, [posts, builtins]);

  const filtered = useMemo(() => {
    const n = q.trim().toLowerCase();
    return allRows.filter((r) => {
      if (kindFilter !== "all" && r.kind !== kindFilter) return false;
      if (catFilter !== "all") {
        const hub = hubFor(r.category);
        if (catFilter === "uncat" ? !!hub : hub?.slug !== catFilter) return false;
      }
      if (n && !(r.title + " " + r.path + " " + r.category).toLowerCase().includes(n)) return false;
      return true;
    });
  }, [allRows, q, catFilter, kindFilter, hubFor]);

  // Duplicate a markdown post → fresh draft, then reload.
  async function duplicate(id: number) {
    const res = await fetch("/api/admin/blog/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "duplicate", id }) });
    if (res.status === 401) return void (window.location.href = "/admin/login");
    if (res.ok) load();
  }
  // Bulk actions over selected markdown posts (delete / set status).
  function toggleSel(id: number) { setSelected((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; }); }
  async function bulkDelete() {
    if (!selected.size || !confirm(`Delete ${selected.size} selected post(s)? This can't be undone.`)) return;
    setBulkBusy(true);
    for (const id of selected) await fetch(`/api/admin/blog/${id}/`, { method: "DELETE" });
    setSelected(new Set()); setBulkBusy(false); load();
  }
  async function bulkStatus(status: "published" | "draft") {
    if (!selected.size) return;
    setBulkBusy(true);
    for (const id of selected) await fetch(`/api/admin/blog/${id}/`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status }) });
    setSelected(new Set()); setBulkBusy(false); load();
  }

  if (editing) return <Editor draft={editing} onClose={() => setEditing(null)} onSaved={() => { setEditing(null); load(); }} />;
  if (loading) return <div className="mx-auto flex max-w-content items-center justify-center py-2xl text-text-faint"><Loader2 className="animate-spin" /></div>;

  const drafts = posts.filter((p) => p.status === "draft").length;

  return (
    <div className="mx-auto max-w-content">
      <div className="mb-lg flex flex-wrap items-center justify-between gap-sm">
        <div className="flex items-center gap-3">
          <a href="/admin" className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> Admin</a>
          <h1 className="m-0 text-[24px] text-text">Posts</h1>
        </div>
        <div className="flex items-center gap-2">
          <a href="/admin/categories" className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2 text-[13px] text-text-muted hover:text-text"><FolderTree size={14} /> Categories</a>
          <button onClick={load} className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2 text-[13px] text-text-muted hover:text-text"><RefreshCw size={14} /> Refresh</button>
          <button onClick={() => setEditing(emptyDraft())} className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-3 py-2 text-[13px] font-semibold text-white"><Plus size={15} /> New post</button>
        </div>
      </div>

      {err && <p className="mb-md rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-danger">{err}</p>}

      <div className="mb-md grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Card label="All posts" value={allRows.length} c="#e5e7eb" />
        <Card label="Built-in" value={builtins.length} c="#60a5fa" />
        <Card label="Markdown" value={posts.length} c="#34d399" />
        <Card label="Drafts" value={drafts} c="#fbbf24" />
      </div>

      <div className="mb-md flex flex-wrap items-center gap-2">
        <div className="relative min-w-[200px] max-w-sm flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-faint" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search posts…"
            className="w-full rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] pl-9 pr-3 py-2 text-[14px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none" />
        </div>
        <select value={catFilter} onChange={(e) => setCatFilter(e.target.value)} className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-2.5 py-2 text-[13px] text-text focus:border-accent focus:outline-none">
          <option value="all">All categories</option>
          {categories.map((c) => <option key={c.slug} value={c.slug}>{c.name} ({c.count})</option>)}
          <option value="uncat">Uncategorised</option>
        </select>
        <select value={kindFilter} onChange={(e) => setKindFilter(e.target.value as typeof kindFilter)} className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-2.5 py-2 text-[13px] text-text focus:border-accent focus:outline-none">
          <option value="all">All types</option>
          <option value="markdown">Markdown</option>
          <option value="builtin">Built-in</option>
        </select>
        <span className="text-[13px] text-text-faint">{filtered.length} shown</span>
      </div>

      {selected.size > 0 && (
        <div className="mb-2 flex flex-wrap items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-3 py-2 text-[13px]">
          <span className="font-semibold text-text">{selected.size} selected</span>
          <button onClick={() => bulkStatus("published")} disabled={bulkBusy} className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-2.5 py-1 text-text hover:border-accent disabled:opacity-50">Publish</button>
          <button onClick={() => bulkStatus("draft")} disabled={bulkBusy} className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-2.5 py-1 text-text hover:border-accent disabled:opacity-50">Set draft</button>
          <button onClick={bulkDelete} disabled={bulkBusy} className="inline-flex items-center gap-1 rounded-md border border-danger/40 px-2.5 py-1 text-danger hover:bg-danger/10 disabled:opacity-50"><Trash2 size={13} /> Delete</button>
          <button onClick={() => setSelected(new Set())} className="ml-auto text-text-muted hover:text-text">Clear</button>
          {bulkBusy && <Loader2 size={14} className="animate-spin text-text-faint" />}
        </div>
      )}

      <div className="overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[860px] text-[13px]">
          <thead className="bg-bg-card text-text-muted">
            <tr className="text-left"><th className="px-3 py-2 w-8"></th>{["Title", "Category", "Author", "Date", "Type", ""].map((h) => <th key={h} className="px-3 py-2 font-semibold whitespace-nowrap">{h}</th>)}</tr>
          </thead>
          <tbody>
            {filtered.length === 0 && <tr><td colSpan={7} className="px-3 py-8 text-center text-text-faint">No posts match.</td></tr>}
            {filtered.map((r) => {
              const hub = hubFor(r.category);
              const isMd = r.kind === "markdown";
              return (
                <tr key={r.path} className={`border-t border-border align-top ${isMd ? "cursor-pointer hover:bg-bg-alt" : ""}`}
                  onClick={isMd && r.raw ? () => setEditing({ ...r.raw!, faqs: r.raw!.faqs || [] }) : undefined}>
                  <td className="px-3 py-2" onClick={(e) => e.stopPropagation()}>
                    {isMd && r.id != null && <input type="checkbox" checked={selected.has(r.id)} onChange={() => toggleSel(r.id!)} />}
                  </td>
                  <td className="px-3 py-2">
                    <span className="text-text">{r.title}</span>
                    {isMd && r.status === "draft" && <span className="ml-2 rounded bg-[#fbbf24]/15 px-1.5 py-0.5 text-[11px] text-[#fbbf24]">Draft</span>}
                    {isMd && r.status === "scheduled" && <span className="ml-2 rounded bg-[#60a5fa]/15 px-1.5 py-0.5 text-[11px] text-[#60a5fa]">Scheduled</span>}
                    <span className="block text-[11px] text-text-faint">{r.path}</span>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {hub ? <span className="rounded bg-accent/12 px-1.5 py-0.5 text-[11px] text-accent">{hub.name}</span> : <span className="rounded bg-bg-alt px-1.5 py-0.5 text-[11px] text-text-faint">Uncategorised</span>}
                    <span className="block text-[11px] text-text-faint">{r.category}</span>
                  </td>
                  <td className="px-3 py-2 text-text-muted whitespace-nowrap">{r.author}</td>
                  <td className="px-3 py-2 text-text-muted whitespace-nowrap">{r.date}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{isMd ? <span className="text-[11px] text-[#34d399]">Markdown</span> : <span className="text-[11px] text-[#60a5fa]">Built-in</span>}</td>
                  <td className="px-2 py-2 text-right whitespace-nowrap">
                    {isMd ? (
                      <span className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => r.id != null && duplicate(r.id)} className="text-text-faint hover:text-text" title="Duplicate as draft"><Copy size={14} /></button>
                        <button onClick={() => r.raw && setEditing({ ...r.raw, faqs: r.raw.faqs || [] })} className="text-text-faint hover:text-text" title="Edit"><Pencil size={14} /></button>
                      </span>
                    ) : (
                      <span className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                        <a href={r.path} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text" title="View"><ExternalLink size={14} /></a>
                        <a href={`/admin/pageseo?path=${encodeURIComponent(r.path)}`} className="text-[12px] text-accent hover:underline">Edit SEO</a>
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-md text-[12px] text-text-faint"><strong className="text-text">Markdown</strong> posts are fully editable here. <strong className="text-text">Built-in</strong> posts keep their custom design — view them or edit their SEO (title, meta, social, robots) via Pages SEO.</p>
    </div>
  );
}

function Editor({ draft, onClose, onSaved }: { draft: Draft; onClose: () => void; onSaved: () => void }) {
  const [d, setD] = useState<Draft>(draft);
  const [slugTouched, setSlugTouched] = useState(!!draft.slug);
  const [tab, setTab] = useState<"write" | "preview">("write");
  const [busy, setBusy] = useState(false);
  const [errs, setErrs] = useState<Record<string, string>>({});
  const [topErr, setTopErr] = useState("");
  const isNew = d.id == null;

  // Autosave to localStorage so unsaved work survives a refresh/crash; cleared on a successful save.
  const AKEY = "mrd-blog-draft-" + (draft.id ?? "new");
  const [restored, setRestored] = useState(false);
  useEffect(() => {
    try { const s = localStorage.getItem(AKEY); if (s && s !== JSON.stringify(draft)) { setD(JSON.parse(s)); setRestored(true); } } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => { try { localStorage.setItem(AKEY, JSON.stringify(d)); } catch {} }, [d, AKEY]);
  const discardAutosave = () => { try { localStorage.removeItem(AKEY); } catch {} setD(draft); setRestored(false); };

  // Version history (last ~10 edits) for existing posts.
  const [revisions, setRevisions] = useState<{ id: number; at: string; snapshot: Partial<Draft> }[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  useEffect(() => {
    if (isNew) return;
    fetch(`/api/admin/blog/${draft.id}/`, { cache: "no-store" }).then((r) => (r.ok ? r.json() : null)).then((j) => { if (j?.revisions) setRevisions(j.revisions); }).catch(() => {});
  }, [isNew, draft.id]);

  const set = <K extends keyof Draft>(k: K, v: Draft[K]) => setD((p) => ({ ...p, [k]: v }));

  // Auto-slug from title until the owner edits the slug manually.
  useEffect(() => {
    if (!slugTouched) setD((p) => ({ ...p, slug: slugify(p.title) }));
  }, [d.title, slugTouched]);

  const previewHtml = useMemo(() => renderMarkdown(d.body), [d.body]);

  async function save(status: "draft" | "published" | "scheduled") {
    if (status === "scheduled" && !d.scheduledFor) { setTopErr("Pick a “Schedule for” date first."); return; }
    setBusy(true); setErrs({}); setTopErr("");
    const payload = { ...d, status, dateModified: d.dateModified || undefined };
    try {
      const url = isNew ? "/api/admin/blog/" : `/api/admin/blog/${d.id}/`;
      const method = isNew ? "POST" : "PUT";
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      const j = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (j.errors) { setErrs(j.errors); setTopErr("Please fix the highlighted fields."); }
        else setTopErr(j.error || "Save failed.");
        return;
      }
      try { localStorage.removeItem(AKEY); } catch {}
      onSaved();
    } catch { setTopErr("Could not reach the server."); }
    finally { setBusy(false); }
  }

  async function remove() {
    if (isNew || !confirm("Delete this post? This cannot be undone.")) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/blog/${d.id}/`, { method: "DELETE" });
      if (res.status === 401) return void (window.location.href = "/admin/login");
      if (res.ok) onSaved();
    } finally { setBusy(false); }
  }

  const setFaq = (i: number, k: keyof Faq, v: string) => set("faqs", (d.faqs || []).map((f, j) => j === i ? { ...f, [k]: v } : f));
  const addFaq = () => set("faqs", [...(d.faqs || []), { q: "", a: "" }]);
  const delFaq = (i: number) => set("faqs", (d.faqs || []).filter((_, j) => j !== i));

  return (
    <div className="mx-auto max-w-content">
      <div className="mb-md flex flex-wrap items-center justify-between gap-sm">
        <button onClick={onClose} className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> All posts</button>
        <div className="flex items-center gap-2">
          {!isNew && <a href={`/blog/${d.slug}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-2 text-[13px] text-text-muted hover:text-text"><ExternalLink size={14} /> View</a>}
          {!isNew && revisions.length > 0 && <button onClick={() => setShowHistory(true)} className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-2 text-[13px] text-text-muted hover:text-text"><History size={14} /> History ({revisions.length})</button>}
          {!isNew && <button onClick={remove} disabled={busy} className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-2 text-[13px] text-danger hover:bg-bg-alt disabled:opacity-50"><Trash2 size={14} /> Delete</button>}
          <button onClick={() => save("draft")} disabled={busy} className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2 text-[13px] text-text hover:border-accent disabled:opacity-50"><Save size={14} /> Save draft</button>
          <button onClick={() => save("scheduled")} disabled={busy} title="Save as scheduled (needs a date)" className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-2 text-[13px] text-text hover:border-accent disabled:opacity-50"><CalendarClock size={14} /> Schedule</button>
          <button onClick={() => save("published")} disabled={busy} className="inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-4 py-2 text-[13px] font-semibold text-white disabled:opacity-50">{busy ? <Loader2 size={14} className="animate-spin" /> : <Eye size={14} />} Publish</button>
        </div>
      </div>

      {restored && <p className="mb-md flex items-center justify-between gap-2 rounded-md border border-accent/40 bg-accent/10 px-3 py-2 text-[12px] text-text"><span>Restored unsaved changes from your last session.</span><button onClick={discardAutosave} className="text-accent hover:underline">Discard</button></p>}
      {topErr && <p className="mb-md rounded-md border border-danger/40 bg-danger/10 px-3 py-2 text-[13px] text-danger">{topErr}</p>}

      {showHistory && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowHistory(false)} />
          <div className="relative flex max-h-[80vh] w-full max-w-lg flex-col overflow-hidden rounded-lg border border-border bg-bg shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <h3 className="m-0 text-[15px] font-semibold text-text">Version history</h3>
              <button onClick={() => setShowHistory(false)} className="rounded-md p-1 text-text-muted hover:bg-bg-alt"><X size={18} /></button>
            </div>
            <div className="overflow-y-auto p-3">
              <p className="m-0 mb-2 text-[12px] text-text-faint">Each entry is the post as it was before an edit. Restore loads it into the editor — review, then Save.</p>
              <ul className="m-0 flex list-none flex-col gap-2 p-0">
                {revisions.map((r) => (
                  <li key={r.id} className="flex items-center justify-between gap-3 rounded-md border border-border p-2">
                    <span className="min-w-0"><span className="block truncate text-[13px] text-text">{r.snapshot.title || "(untitled)"}</span><span className="text-[11px] text-text-faint">{new Date(r.at).toLocaleString()}</span></span>
                    <button onClick={() => { setD((p) => ({ ...p, ...r.snapshot })); setShowHistory(false); setTopErr(""); }} className="inline-flex shrink-0 items-center gap-1 rounded-md border border-border px-2.5 py-1.5 text-[12px] text-accent hover:bg-bg-alt"><RotateCcw size={13} /> Restore</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <p className="mb-md rounded-md border border-[#fbbf24]/40 bg-[#fbbf24]/10 px-3 py-2 text-[12px] text-[#fbbf24]">Publishing saves the post; it goes live on the site at the next deploy (static build).</p>

      <div className="grid gap-lg lg:grid-cols-[1fr_360px]">
        {/* Main: title + markdown editor */}
        <div className="flex flex-col gap-md">
          <div>
            <input value={d.title} onChange={(e) => set("title", e.target.value)} placeholder="Post title"
              className="w-full rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-3 text-[20px] font-semibold text-text placeholder:text-text-faint focus:border-accent focus:outline-none" />
            {errs.title && <p className="m-0 mt-1 text-[12px] text-danger">{errs.title}</p>}
          </div>

          <div className="flex items-center gap-1 border-b border-border">
            <TabBtn active={tab === "write"} onClick={() => setTab("write")}><Pencil size={13} /> Write</TabBtn>
            <TabBtn active={tab === "preview"} onClick={() => setTab("preview")}><Eye size={13} /> Preview</TabBtn>
            <span className="ml-auto pb-1 text-[11px] text-text-faint">Markdown · use ## for headings, **bold**, [text](/link), tables, - lists</span>
          </div>

          {tab === "write" ? (
            <textarea value={d.body} onChange={(e) => set("body", e.target.value)} rows={26} spellCheck
              placeholder={"## Section heading\n\nWrite your post in **markdown**.\n\n- bullet points\n- work fine\n\n| Service | Price |\n|---|---|\n| Screen | AED 1,050 |\n"}
              className="w-full rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 py-3 font-mono text-[13px] leading-relaxed text-text placeholder:text-text-faint focus:border-accent focus:outline-none" />
          ) : (
            <div className="prose-blog min-h-[420px] rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-4 py-3 text-[15px] leading-relaxed text-text-muted [&_a]:text-accent [&_a]:underline [&_h2]:mt-4 [&_h2]:text-[22px] [&_h2]:text-text [&_h3]:text-text [&_strong]:text-text [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-border [&_th]:px-2 [&_th]:py-1 [&_th]:text-left [&_td]:border [&_td]:border-border [&_td]:px-2 [&_td]:py-1 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"
              dangerouslySetInnerHTML={{ __html: previewHtml }} />
          )}
          {errs.body && <p className="m-0 text-[12px] text-danger">{errs.body}</p>}

          {/* Rank Math–style SEO meta box: General / Schema / Social / Advanced + Optimize with AI */}
          <SeoMetaBox
            post={d}
            set={set as (k: string, v: unknown) => void}
            previewHtml={previewHtml}
            urlPath={d.slug ? `/blog/${d.slug}` : undefined}
            showServiceTab
            contentType="post"
            optimizeFields={{ seoTitle: d.seoTitle, seoDescription: d.seoDescription, focusKeyword: d.focusKeyword, secondaryKeywords: d.secondaryKeywords, body: d.body, excerpt: d.excerpt, quickAnswer: d.quickAnswer, faqs: d.faqs, ogTitle: d.ogTitle, ogDescription: d.ogDescription }}
            onAiApply={(sel) => setD((p) => ({ ...p, ...(sel as Partial<Draft>) }))}
          />

          {/* FAQs */}
          <div className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-md">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="m-0 text-[14px] text-text">FAQs <span className="text-text-faint">(optional — shown + emit FAQ schema)</span></h3>
              <button onClick={addFaq} className="inline-flex items-center gap-1 text-[12px] text-accent hover:underline"><Plus size={13} /> Add</button>
            </div>
            <div className="flex flex-col gap-3">
              {(d.faqs || []).length === 0 && <p className="m-0 text-[12px] text-text-faint">No FAQs yet.</p>}
              {(d.faqs || []).map((f, i) => (
                <div key={i} className="rounded-md border border-border p-2">
                  <div className="mb-1 flex items-center gap-2">
                    <input value={f.q} onChange={(e) => setFaq(i, "q", e.target.value)} placeholder="Question" className="flex-1 rounded border border-border bg-bg px-2 py-1 text-[13px] text-text focus:border-accent focus:outline-none" />
                    <button onClick={() => delFaq(i)} className="text-text-faint hover:text-danger"><X size={15} /></button>
                  </div>
                  <textarea value={f.a} onChange={(e) => setFaq(i, "a", e.target.value)} placeholder="Answer" rows={2} className="w-full rounded border border-border bg-bg px-2 py-1 text-[13px] text-text focus:border-accent focus:outline-none" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar: metadata */}
        <aside className="flex flex-col gap-3 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-md">
          <Field label="Slug" err={errs.slug} hint="The URL: /blog/your-slug">
            <div className="flex items-center rounded-md border border-border bg-bg px-2 focus-within:border-accent">
              <span className="text-[12px] text-text-faint">/blog/</span>
              <input value={d.slug} onChange={(e) => { setSlugTouched(true); set("slug", e.target.value); }} className="flex-1 bg-transparent px-1 py-2 text-[13px] text-text focus:outline-none" />
            </div>
          </Field>
          <Field label="Category" err={errs.category} hint="Type · Subtopic — Type routes it to a hub">
            <input list="blog-cat-types" value={d.category} onChange={(e) => set("category", e.target.value)} className={inp} />
            <datalist id="blog-cat-types">{BLOG_CATEGORY_TYPES.map((t) => <option key={t} value={`${t} · `} />)}</datalist>
          </Field>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Author" err={errs.author}><input value={d.author} onChange={(e) => set("author", e.target.value)} className={inp} /></Field>
            <Field label="Author role"><input value={d.authorRole || ""} onChange={(e) => set("authorRole", e.target.value)} className={inp} /></Field>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Published" err={errs.datePublished}><input type="date" value={d.datePublished} onChange={(e) => set("datePublished", e.target.value)} className={inp} /></Field>
            <Field label="Updated" hint="optional"><input type="date" value={d.dateModified || ""} onChange={(e) => set("dateModified", e.target.value)} className={inp} /></Field>
          </div>
          <Field label="Schedule for" hint="go-live date for the Schedule button (needs a daily deploy)">
            <input type="date" value={d.scheduledFor || ""} onChange={(e) => set("scheduledFor", e.target.value)} className={inp} />
          </Field>
          <Field label="Excerpt" err={errs.excerpt} hint="Listing card + hook under the title">
            <textarea value={d.excerpt} onChange={(e) => set("excerpt", e.target.value)} rows={3} className={inp} />
          </Field>
          <Field label="Quick answer" hint="≤40 words; the AI-citation answer box">
            <textarea value={d.quickAnswer || ""} onChange={(e) => set("quickAnswer", e.target.value)} rows={3} className={inp} />
          </Field>
          <Field label="Hero image" hint="optional; else auto from topic">
            <ImagePicker value={d.heroImage || ""} onChange={(v) => set("heroImage", v)} placeholder="/images/real/lab/…" />
          </Field>
          {d.heroImage ? <Field label="Hero alt"><input value={d.heroAlt || ""} onChange={(e) => set("heroAlt", e.target.value)} className={inp} /></Field> : null}
          <p className="m-0 border-t border-border pt-3 text-[11px] text-text-faint">SEO title, meta description, schema, social &amp; advanced options are in the <strong className="text-text">SEO</strong> box under the editor.</p>
        </aside>
      </div>
    </div>
  );
}

function Field({ label, hint, err, children }: { label: string; hint?: string; err?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 flex items-center justify-between text-[12px] text-text-faint"><span>{label}</span>{hint && <span className="text-[11px]">{hint}</span>}</span>
      {children}
      {err && <span className="mt-1 block text-[12px] text-danger">{err}</span>}
    </label>
  );
}

function TabBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className={`inline-flex items-center gap-1 border-b-2 px-3 pb-2 text-[13px] ${active ? "border-accent text-text" : "border-transparent text-text-muted hover:text-text"}`}>{children}</button>
  );
}

function StatusPill({ status }: { status: "draft" | "published" }) {
  return status === "published"
    ? <span className="rounded bg-[#34d399]/15 px-2 py-0.5 text-[11px] text-[#34d399]">Published</span>
    : <span className="rounded bg-[#fbbf24]/15 px-2 py-0.5 text-[11px] text-[#fbbf24]">Draft</span>;
}

function Card({ label, value, c }: { label: string; value: number; c: string }) {
  return (
    <div className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-md">
      <p className="m-0 text-[12px] uppercase tracking-wide text-text-faint">{label}</p>
      <p className="m-0 mt-1 text-[26px] font-bold" style={{ color: c }}>{value}</p>
    </div>
  );
}

const inp = "w-full rounded-md border border-border bg-bg px-2 py-2 text-[13px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none";
