"use client";
import { useState } from "react";
import { Search, Share2, Code2, Settings2, Tag } from "lucide-react";
import SeoAnalysisPanel from "@/components/blocks/SeoAnalysisPanel";
import ImagePicker from "@/components/blocks/ImagePicker";
import ServicePanel from "@/components/blocks/ServicePanel";

// Rank Math–style SEO meta box: General / Schema / Social / Advanced tabs for a blog post.
export type MetaBoxPost = {
  title?: string; excerpt?: string; slug?: string;
  seoTitle?: string; seoDescription?: string; focusKeyword?: string; secondaryKeywords?: string[];
  schemaType?: "Article" | "BlogPosting" | "NewsArticle" | "None";
  ogTitle?: string; ogDescription?: string; ogImage?: string;
  twitterCard?: "summary_large_image" | "summary";
  twitterTitle?: string; twitterDescription?: string; twitterImage?: string;
  noindex?: boolean; nofollow?: boolean; noarchive?: boolean; noimageindex?: boolean; nosnippet?: boolean;
  canonical?: string; breadcrumbTitle?: string; redirect?: string; redirectType?: "301" | "302";
};

type Tab = "general" | "service" | "schema" | "social" | "advanced";

// Reused by the Blog editor (posts) and the Page SEO editor (pages). Pages hide the Schema tab
// (schema type needs per-component wiring) and pass their own urlPath.
export default function SeoMetaBox({
  post, set, previewHtml, urlPath, showSchemaTab = true, showBreadcrumb = true, showServiceTab = false,
  contentType, optimizeFields, onAiApply,
}: {
  post: MetaBoxPost;
  set: (k: string, v: unknown) => void;
  previewHtml: string;
  urlPath?: string;          // page path; defaults to /blog/<slug> for posts
  showSchemaTab?: boolean;
  showBreadcrumb?: boolean;  // breadcrumb title is post-only (pages don't share a template)
  showServiceTab?: boolean;  // Service tab: per-URL price/timeline/warranty linked to the Prices module
  contentType?: "post" | "page" | "category";   // enables the "Optimize with AI" button
  optimizeFields?: Record<string, unknown>;
  onAiApply?: (sel: Record<string, unknown>) => void;
}) {
  const TABS: { id: Tab; label: string; Icon: typeof Search }[] = [
    { id: "general", label: "General", Icon: Search },
    ...(showServiceTab ? [{ id: "service" as const, label: "Service / Price", Icon: Tag }] : []),
    ...(showSchemaTab ? [{ id: "schema" as const, label: "Schema", Icon: Code2 }] : []),
    { id: "social", label: "Social", Icon: Share2 },
    { id: "advanced", label: "Advanced", Icon: Settings2 },
  ];
  const [tab, setTab] = useState<Tab>("general");
  const title = post.seoTitle || post.title || "";
  const desc = post.seoDescription || post.excerpt || "";
  const displayPath = urlPath ?? "/blog/" + (post.slug || "your-slug");
  // For the homepage ("/") the slug is empty, but the domain name encodes the keyword
  // (e.g. macbook-repair-dubai.ae → "macbook-repair-dubai"). Use the hostname stem so the
  // keyword-in-URL check correctly passes for the homepage.
  // For the homepage ("/") the slug is empty, but the domain name encodes the keyword
  // (macbook-repair-dubai.ae → "macbook-repair-dubai"). Use the canonical domain stem so the
  // keyword-in-URL check passes correctly on both localhost and production.
  const DOMAIN_STEM = "macbook-repair-dubai"; // from SITE.url, avoids a runtime import cycle
  const analysisSlug = post.slug ?? (
    (urlPath === "/" || urlPath === "")
      ? DOMAIN_STEM
      : (urlPath || "").replace(/^\/+/, "")
  );

  return (
    <div className="rounded-md border border-border bg-bg-card">
      <div className="flex items-center gap-1 border-b border-border px-2">
        {TABS.map(({ id, label, Icon }) => (
          <button key={id} onClick={() => setTab(id)}
            className={`inline-flex items-center gap-1.5 border-b-2 px-3 py-2.5 text-[13px] ${tab === id ? "border-accent font-semibold text-text" : "border-transparent text-text-muted hover:text-text"}`}>
            <Icon size={14} /> {label}
          </button>
        ))}
      </div>

      <div className="p-md">
        {tab === "general" && (
          <div className="flex flex-col gap-4">
            <Field label="SEO title" hint={`${(post.seoTitle || "").length}/60 · blank = post title`}>
              <input value={post.seoTitle || ""} onChange={(e) => set("seoTitle", e.target.value)} className={inp} placeholder={post.title || ""} />
            </Field>
            <Field label="Meta description" hint={`${(post.seoDescription || "").length}/160 · blank = excerpt`}>
              <textarea value={post.seoDescription || ""} onChange={(e) => set("seoDescription", e.target.value)} rows={3} className={inp} placeholder={post.excerpt || ""} />
            </Field>
            {/* Quick indexing toggle (mirrors Advanced → No Index, surfaced here for visibility) */}
            <label className="flex items-center gap-2 text-[13px] text-text">
              <input type="checkbox" checked={!post.noindex} onChange={(e) => set("noindex", !e.target.checked)} />
              <span>Show this page in Google <span className="text-text-faint">(uncheck to noindex — full robots in Advanced)</span></span>
            </label>
            {/* Google preview */}
            <div className="rounded-md border border-border bg-bg-alt p-3">
              <p className="m-0 text-[11px] uppercase tracking-wide text-text-faint">Google preview</p>
              <p className="m-0 mt-1 text-[16px] text-[#1a0dab]">{title.slice(0, 60) || "(title)"}</p>
              <p className="m-0 text-[12px] text-[#006621]">macbook-repair-dubai.ae{displayPath}</p>
              <p className="m-0 text-[13px] text-text-muted">{desc.slice(0, 160) || "(description)"}</p>
            </div>
            <SeoAnalysisPanel
              input={{ seoTitle: title, metaDescription: desc, slug: analysisSlug, html: previewHtml }}
              focusKeyword={post.focusKeyword || ""}
              onFocusKeyword={(v) => set("focusKeyword", v)}
              secondaryKeywords={post.secondaryKeywords || []}
              onSecondaryKeywords={(v) => set("secondaryKeywords", v)}
              contentType={contentType}
              optimizeFields={optimizeFields}
              onApply={onAiApply}
            />
          </div>
        )}

        {tab === "service" && <ServicePanel urlPath={urlPath} />}

        {tab === "schema" && (
          <div className="flex flex-col gap-4">
            <Field label="Schema type" hint="The rich-snippet type Google sees for this post">
              <select value={post.schemaType || "Article"} onChange={(e) => set("schemaType", e.target.value)} className={inp}>
                <option value="Article">Article</option>
                <option value="BlogPosting">Blog Post</option>
                <option value="NewsArticle">News Article</option>
                <option value="None">None (no Article schema)</option>
              </select>
            </Field>
            <p className="m-0 rounded-md border border-border bg-bg-alt px-3 py-2 text-[12px] text-text-muted">
              Author, dates, publisher and the hero image are added to the schema automatically. Add FAQs in the editor below to also emit <strong className="text-text">FAQPage</strong> schema.
            </p>
          </div>
        )}

        {tab === "social" && (
          <div className="flex flex-col gap-5">
            <div>
              <p className="m-0 mb-2 text-[12px] font-semibold uppercase tracking-wide text-text-faint">Facebook / LinkedIn (Open Graph)</p>
              <div className="flex flex-col gap-3">
                <Field label="OG title" hint="blank = SEO title"><input value={post.ogTitle || ""} onChange={(e) => set("ogTitle", e.target.value)} className={inp} /></Field>
                <Field label="OG description" hint="blank = meta description"><textarea value={post.ogDescription || ""} onChange={(e) => set("ogDescription", e.target.value)} rows={2} className={inp} /></Field>
                <Field label="OG image" hint="blank = hero image; 1200×630 ideal"><ImagePicker value={post.ogImage || ""} onChange={(v) => set("ogImage", v)} /></Field>
              </div>
            </div>
            <div>
              <p className="m-0 mb-2 text-[12px] font-semibold uppercase tracking-wide text-text-faint">X / Twitter</p>
              <div className="flex flex-col gap-3">
                <Field label="Card type">
                  <select value={post.twitterCard || "summary_large_image"} onChange={(e) => set("twitterCard", e.target.value)} className={inp}>
                    <option value="summary_large_image">Summary with large image</option>
                    <option value="summary">Summary</option>
                  </select>
                </Field>
                <Field label="X title" hint="blank = OG / SEO title"><input value={post.twitterTitle || ""} onChange={(e) => set("twitterTitle", e.target.value)} className={inp} /></Field>
                <Field label="X description" hint="blank = OG / meta description"><textarea value={post.twitterDescription || ""} onChange={(e) => set("twitterDescription", e.target.value)} rows={2} className={inp} /></Field>
                <Field label="X image" hint="blank = OG image"><ImagePicker value={post.twitterImage || ""} onChange={(v) => set("twitterImage", v)} /></Field>
              </div>
            </div>
            <p className="m-0 rounded-md border border-border bg-bg-alt px-3 py-2 text-[12px] text-text-muted">
              Your <strong className="text-text">global social profiles</strong> (Facebook / Instagram / YouTube — used in site schema) are managed in <a href="/admin/business" className="text-accent hover:underline">Business / NAP</a>. The fields above are the per-page share card only.
            </p>
          </div>
        )}

        {tab === "advanced" && (
          <div className="flex flex-col gap-4">
            <div>
              <p className="m-0 mb-2 text-[12px] font-semibold uppercase tracking-wide text-text-faint">Robots meta</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  ["noindex", "No Index", "Hide from search results"],
                  ["nofollow", "No Follow", "Don't follow the links"],
                  ["noarchive", "No Archive", "No cached copy"],
                  ["noimageindex", "No Image Index", "Don't index images"],
                  ["nosnippet", "No Snippet", "No text snippet"],
                ].map(([k, label, hint]) => (
                  <label key={k} className="flex items-start gap-2 rounded-md border border-border px-2.5 py-2 text-[13px]">
                    <input type="checkbox" checked={!!post[k as keyof MetaBoxPost]} onChange={(e) => set(k, e.target.checked)} className="mt-0.5" />
                    <span><span className="text-text">{label}</span><span className="block text-[11px] text-text-faint">{hint}</span></span>
                  </label>
                ))}
              </div>
            </div>
            <Field label="Canonical URL" hint="blank = this page's own URL"><input value={post.canonical || ""} onChange={(e) => set("canonical", e.target.value)} placeholder="https://…" className={inp} /></Field>
            {showBreadcrumb && <Field label="Breadcrumb title" hint="blank = post title"><input value={post.breadcrumbTitle || ""} onChange={(e) => set("breadcrumbTitle", e.target.value)} className={inp} /></Field>}
            <div>
              <p className="m-0 mb-2 text-[12px] font-semibold uppercase tracking-wide text-text-faint">Redirect</p>
              <div className="flex gap-2">
                <input value={post.redirect || ""} onChange={(e) => set("redirect", e.target.value)} placeholder="/destination or https://…" className={inp + " flex-1"} />
                <select value={post.redirectType || "301"} onChange={(e) => set("redirectType", e.target.value)} className={inp + " w-28"}>
                  <option value="301">301</option>
                  <option value="302">302</option>
                </select>
              </div>
              <p className="m-0 mt-1 text-[11px] text-text-faint">If set, {displayPath} redirects here (applies on next deploy).</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 flex items-center justify-between text-[12px] text-text-faint"><span>{label}</span>{hint && <span className="text-[11px]">{hint}</span>}</span>
      {children}
    </label>
  );
}

const inp = "w-full rounded-md border border-border bg-bg px-3 py-2 text-[13px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none";
