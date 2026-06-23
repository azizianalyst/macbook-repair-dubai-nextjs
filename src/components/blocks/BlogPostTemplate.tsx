"use client";
// Reusable blog post template - Article + FAQPage + BreadcrumbList schema, byline, quick-answer.
// Used by all blog posts. Body is JSX so authors can use tables + inline links.
import { ReactNode } from "react";
import { Link } from "@/lib/router-compat";
import { LinkifyProse } from "@/lib/linkify";
import { familyFromPath } from "@/lib/related-articles";
import { relatedConversion } from "@/lib/related-services";
import { guideBySlug } from "@/content/guides";
import { GuideClusterNav } from "@/components/blocks/GuideClusterNav";
import { CalendarDays, Clock, User, MessageCircle, Phone, ChevronLeft } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion, type FAQ } from "@/components/blocks/FAQAccordion";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { GuideServiceBridge } from "@/components/blocks/GuideServiceBridge";
import { Button } from "@/components/ui/button";
import { article as articleSchema, localBusiness, organization, pageWithSpeakable } from "@/lib/schema";
import { blogTopicForPath } from "@/lib/page-images";
import ResponsiveImage from "@/components/blocks/ResponsiveImage";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// Format an ISO date (YYYY-MM-DD) as "Month YYYY" without timezone drift.
function monthYear(iso: string): string {
  const [y, m] = iso.split("-");
  const mi = Number(m) - 1;
  return MONTHS[mi] ? `${MONTHS[mi]} ${y}` : iso;
}
import { SITE } from "@/lib/seo";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { NAP } from "@/content/site";
import { REVIEW_COUNT, REVIEW_AVERAGE } from "@/content/business.generated";

export type BlogPostProps = {
  // SEO
  seoTitle: string;
  seoDescription: string;
  path: string;             // /blog/...
  // Header
  category: string;         // e.g. "Cost guide · iPhone"
  h1: string;
  hook: string;             // single-sentence hook under H1
  quickAnswer: string;      // ≤40 words, AI-citation friendly
  // Byline
  author: { name: string; role: string };  // e.g. {name:"Shafiq", role:"Senior iPhone technician"}
  datePublished: string;    // ISO YYYY-MM-DD
  dateModified: string;     // ISO YYYY-MM-DD
  readingMinutes: number;
  featuredImageAlt: string; // describes hero
  featuredImage?: string;   // optional hero photo path; falls back to a default lab photo
  // Body
  body: ReactNode;          // long-form HTML/JSX with H2/H3, tables, inline links
  faqs: FAQ[];
  // Related (3 internal links)
  relatedLinks: { label: string; href: string; description?: string }[];
  // Optional extra schemas (e.g. HowTo)
  extraSchemas?: Record<string, unknown>[];
  // Wider reading column for data/table-heavy posts (cost reports, comparisons). Default off.
  wide?: boolean;
  // Table of contents entries — {id, label} pairs matching id= on h2s in body. Only shown when wide=true.
  toc?: { id: string; label: string }[];
  // Rank Math–style overrides (admin markdown posts). Defaults keep the 85 hand-built posts identical.
  schemaType?: "Article" | "BlogPosting" | "NewsArticle" | "None";
  breadcrumbTitle?: string;
};

export default function BlogPostTemplate(p: BlogPostProps) {
  // Featured image: explicit per-post override > keyword-routed topic
  // infographic > real workshop photo (never an empty placeholder).
  const featuredSrc =
    p.featuredImage ?? blogTopicForPath(p.path)?.src ?? "/images/real/lab/macbook-pro-internals-topdown-dubai.jpg";
  // Server-rendered JSON-LD: Article (+ HowTo etc. via extraSchemas), Organization, LocalBusiness
  // and Speakable. Rendered as <script> in the JSX below (not via useSeo/useEffect) so it ships in
  // the prerendered HTML crawlers index — client-injected schema never reaches the static HTML.
  // Pure /blog/* posts have no other Organization node, so it's required here to resolve the
  // Article publisher @id; on guide pages that also get Org/LocalBusiness from <PageSchema>, the
  // stable @ids merge harmlessly. BreadcrumbList is emitted by the rendered <BreadcrumbTrail>.
  // Schema type is Article by default; admin posts can pick BlogPosting/NewsArticle, or "None" to
  // suppress the Article node entirely (e.g. a page that shouldn't be an article).
  const articleNode =
    p.schemaType === "None"
      ? null
      : articleSchema({
          title: p.h1,
          path: p.path,
          description: p.seoDescription,
          author: `${p.author.name}, ${p.author.role}`,
          datePublished: p.datePublished,
          dateModified: p.dateModified,
          image: SITE.url + featuredSrc,
          type: p.schemaType,
        });
  const schemaNodes = [
    localBusiness(),
    organization(),
    ...(articleNode ? [articleNode] : []),
    pageWithSpeakable({ url: SITE.url + p.path, name: p.seoTitle }),
    ...(p.extraSchemas ?? []),
  ];

  // Funnel one contextual link from every blog post to its most relevant conversion page — blog
  // posts historically sent 0% of their links to the commercial side. Guides get the guide-cluster
  // nav instead, so only true /blog/* posts append a conversion card, and only when it isn't
  // already one of the curated related links.
  const isGuide = !!guideBySlug(p.path);
  const conversion = p.path.startsWith("/blog/") && !isGuide ? relatedConversion(p.path) : null;
  const relatedLinks =
    conversion && !p.relatedLinks.some((r) => r.href === conversion.href)
      ? [...p.relatedLinks, conversion]
      : p.relatedLinks;

  const hasToc = p.wide && p.toc && p.toc.length > 0;
  const proseClass = "prose-blog flex flex-col gap-md text-[16px] leading-relaxed text-text-muted [&_h2]:text-text [&_h2]:text-[22px] [&_h2]:font-bold [&_h2]:mt-lg [&_h3]:text-text [&_h4]:text-text [&_strong]:text-text [&_a]:text-accent [&_a]:underline [&_blockquote]:border-border [&_blockquote]:bg-bg-card [&_blockquote]:text-text-muted [&_table]:w-full [&_table]:border-collapse [&_table]:text-[15px] [&_table]:my-sm [&_thead_th]:bg-bg-card [&_thead_th]:text-text [&_thead_th]:font-semibold [&_thead_th]:text-left [&_th]:border [&_th]:border-border [&_th]:px-3 [&_th]:py-2 [&_td]:border [&_td]:border-border [&_td]:px-3 [&_td]:py-2 [&_td]:align-top [&_tbody_tr:nth-child(even)]:bg-bg-alt/40";

  return (
    <PageShell>
      {schemaNodes.map((node, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }} />
      ))}
      <div data-hero-tone="light" className="bg-bg-alt text-text -mb-[4rem]">
      <article className={`mx-auto ${p.wide ? "max-w-content" : "max-w-[960px]"} px-5 md:px-6 pt-[96px] flex flex-col gap-xl pb-3xl`}>
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: (() => { const t = p.breadcrumbTitle || p.h1; return t.length > 50 ? t.slice(0, 47) + "…" : t; })(), path: p.path },
        ]} />

        {/* Header — 2-col on lg+: left=title/byline, right=quick answer card */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
          <header className="flex flex-col gap-5 flex-1 min-w-0">
            {/* Category badges */}
            <div className="flex flex-wrap gap-2">
              {p.category.split("·").map((cat) => (
                <span key={cat} className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                  {cat.trim()}
                </span>
              ))}
            </div>

            <h1 className="text-[34px] md:text-[48px] leading-[1.15] font-heading font-extrabold text-text tracking-tight">{p.h1}</h1>

            {/* Rating + trust — right under H1, max visibility */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-[13px] font-semibold text-text">{REVIEW_AVERAGE}.0</span>
                <span className="text-[13px] text-text-muted">· {REVIEW_COUNT}+ verified reviews</span>
                <span className="text-text-faint text-[13px]">·</span>
                <span className="text-[13px] text-text-muted">Apple specialists since 2004</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-text-muted">
                <span className="flex items-center gap-1.5"><span className="text-accent font-bold">✓</span> Free diagnosis</span>
                <span className="flex items-center gap-1.5"><span className="text-accent font-bold">✓</span> Same-day service</span>
                <span className="flex items-center gap-1.5"><span className="text-accent font-bold">✓</span> Warranty up to 12 months</span>
              </div>
            </div>

            <p className="text-[17px] md:text-[19px] text-text-muted leading-relaxed border-l-4 border-accent/40 pl-4">{p.hook}</p>

            {/* Byline chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-bg-card border border-border px-3 py-1.5 text-[12px] text-text-muted">
                <User size={12} aria-hidden className="text-accent" />
                <strong className="text-text font-medium">{p.author.name}</strong>
                <span className="text-text-faint">·</span>
                <span>{p.author.role}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-bg-card border border-border px-3 py-1.5 text-[12px] text-text-muted">
                <CalendarDays size={12} aria-hidden className="text-accent" />
                {monthYear(p.dateModified)}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-bg-card border border-border px-3 py-1.5 text-[12px] text-text-muted">
                <Clock size={12} aria-hidden className="text-accent" />
                {p.readingMinutes} min read
              </span>
            </div>
          </header>

          {/* Quick answer card — sticky infobox on desktop, stacks below on mobile */}
          <aside className="mt-6 lg:mt-0 lg:w-[320px] xl:w-[360px] shrink-0 rounded-2xl border border-accent/25 bg-bg-card overflow-hidden shadow-sm">
            {/* Quick answer */}
            <div className="bg-accent/10 border-b border-accent/20 px-5 py-3">
              <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold">Quick answer</p>
            </div>
            <div className="px-5 py-4 flex flex-col gap-3">
              <p className="text-[13px] leading-relaxed text-text-muted">{p.quickAnswer}</p>
              {/* Contact CTAs — right under the answer */}
              <div className="flex gap-2 pt-1">
                <a
                  href={NAP.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-whatsapp text-white text-[12px] font-semibold h-9 hover:brightness-110 transition-all"
                >
                  <MessageCircle size={13} aria-hidden /> WhatsApp
                </a>
                <a
                  href={`tel:${NAP.phoneE164}`}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border bg-bg-alt text-text text-[12px] font-semibold h-9 hover:border-accent/40 transition-all"
                >
                  <Phone size={13} aria-hidden /> Call us
                </a>
              </div>
            </div>

          </aside>
        </div>

        {/* Hero image — full width below header */}
        <ResponsiveImage
          src={featuredSrc}
          alt={p.featuredImageAlt}
          width={1600}
          height={900}
          priority
          sizes={p.wide ? "(max-width: 414px) 360px, (max-width: 1068px) 800px, 1200px" : "(max-width: 414px) 360px, 768px"}
          imgClassName="rounded-xl w-full h-auto"
        />

        {/* 2-col layout: TOC sidebar + prose (wide posts only) */}
        {hasToc ? (
          <div className="flex gap-10 items-start">
            {/* Sticky TOC sidebar */}
            <aside className="hidden xl:flex flex-col gap-3 w-[220px] shrink-0 sticky top-24 self-start">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold">Contents</p>
              <nav>
                <ul className="flex flex-col gap-1">
                  {p.toc!.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block text-[13px] text-text-muted hover:text-accent leading-snug py-1 border-l-2 border-border hover:border-accent pl-3 transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              {/* Mini CTA in sidebar */}
              <div className="mt-4 rounded-xl border border-border bg-bg-card p-4">
                <p className="text-[13px] font-semibold text-text mb-2">Need a repair?</p>
                <p className="text-[12px] text-text-muted mb-3">Free diagnosis · Same day · Warranty</p>
                <a
                  href={NAP.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-whatsapp text-white text-[13px] font-semibold h-9 hover:brightness-110 transition-all"
                >
                  <MessageCircle size={14} aria-hidden /> WhatsApp us
                </a>
              </div>
            </aside>

            {/* Prose — stays readable at max 72ch */}
            <div className="flex-1 min-w-0 flex flex-col gap-xl">
              <div className={proseClass}>
                <LinkifyProse selfHref={p.path} family={familyFromPath(p.path)} max={4}>{p.body}</LinkifyProse>
              </div>
              <section className="mt-xl">
                <h2 className="text-[28px] md:text-[32px] mb-md text-text">Frequently asked questions</h2>
                <FAQAccordion tone="dark" items={p.faqs} injectSchema />
              </section>
              <section className="mt-xl">
                <h2 className="text-[24px] mb-md text-text">Related on MacBook Repair Dubai</h2>
                <div className="grid gap-sm sm:grid-cols-2 lg:grid-cols-3">
                  {relatedLinks.map((r) => (
                    <Link key={r.href} to={r.href} className="group border border-border bg-bg-card rounded-md p-md hover:border-accent/40 transition-colors">
                      <div className="font-semibold text-[15px] text-text group-hover:text-accent">{r.label}</div>
                      {r.description && <div className="text-[13px] text-text-muted mt-xs">{r.description}</div>}
                    </Link>
                  ))}
                </div>
              </section>
              <section className="mt-xl border border-border bg-bg-card rounded-xl p-lg">
                <h2 className="text-[20px] mb-sm text-text">About the author</h2>
                <p className="text-[15px] mb-md text-text-muted">
                  <strong className="text-text">{p.author.name}</strong> is a {p.author.role.toLowerCase()} at {NAP.name},
                  Dubai's longest-running Apple-only repair workshop (since 2004). Personally signs the QC checklist on every job leaving the bench.
                </p>
                <div className="flex flex-wrap gap-sm">
                  <Button asChild variant="whatsapp" size="lg">
                    <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> WhatsApp for a quote</a>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> {NAP.phoneDisplay}</a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/blog"><ChevronLeft size={16} aria-hidden /> Back to blog</Link>
                  </Button>
                </div>
              </section>
            </div>
          </div>
        ) : (
          <>
            {/* Standard single-column layout */}
            <div className={proseClass}>
              <LinkifyProse selfHref={p.path} family={familyFromPath(p.path)} max={4}>{p.body}</LinkifyProse>
            </div>
            <section className="mt-xl">
              <h2 className="text-[28px] md:text-[32px] mb-md text-text">Frequently asked questions</h2>
              <FAQAccordion tone="dark" items={p.faqs} injectSchema />
            </section>
            <section className="max-w-[72ch] mt-xl">
              <h2 className="text-[24px] mb-md text-text">Related on MacBook Repair Dubai</h2>
              <div className="grid gap-sm sm:grid-cols-2 lg:grid-cols-3">
                {relatedLinks.map((r) => (
                  <Link key={r.href} to={r.href} className="group border border-border bg-bg-card rounded-md p-md hover:border-accent/40 transition-colors">
                    <div className="font-semibold text-[15px] text-text group-hover:text-accent">{r.label}</div>
                    {r.description && <div className="text-[13px] text-text-muted mt-xs">{r.description}</div>}
                  </Link>
                ))}
              </div>
            </section>
            <section className="max-w-[72ch] mt-xl border border-border bg-bg-card rounded-md p-lg">
              <h2 className="text-[20px] mb-sm text-text">About the author</h2>
              <p className="text-[15px] mb-md text-text-muted">
                <strong className="text-text">{p.author.name}</strong> is a {p.author.role.toLowerCase()} at {NAP.name},
                Dubai's longest-running Apple-only repair workshop (since 2004). Personally signs the QC checklist on every job leaving the bench.
              </p>
              <div className="flex flex-wrap gap-sm">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> WhatsApp for a quote</a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> {NAP.phoneDisplay}</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/blog"><ChevronLeft size={16} aria-hidden /> Back to blog</Link>
                </Button>
              </div>
            </section>
          </>
        )}
      </article>
      <GuideServiceBridge tone="dark" slug={p.path} />
      {isGuide && <GuideClusterNav slug={p.path} />}
      <RelatedArticles tone="dark" path={p.path} />
      </div>
    </PageShell>
  );
}
