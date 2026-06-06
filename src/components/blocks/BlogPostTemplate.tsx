"use client";
// Reusable blog post template - Article + FAQPage + BreadcrumbList schema, byline, quick-answer.
// Used by all blog posts. Body is JSX so authors can use tables + inline links.
import { ReactNode } from "react";
import { Link } from "@/lib/router-compat";
import { LinkifyProse } from "@/lib/linkify";
import { CalendarDays, Clock, User, MessageCircle, Phone, ChevronLeft } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion, type FAQ } from "@/components/blocks/FAQAccordion";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { GuideServiceBridge } from "@/components/blocks/GuideServiceBridge";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { article as articleSchema, localBusiness, organization, pageWithSpeakable } from "@/lib/schema";

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
};

export default function BlogPostTemplate(p: BlogPostProps) {
  useSeo(
    { title: p.seoTitle, description: p.seoDescription, path: p.path },
    [
      localBusiness(),
      organization(),
      articleSchema({
        title: p.h1,
        path: p.path,
        description: p.seoDescription,
        author: `${p.author.name}, ${p.author.role}`,
        datePublished: p.datePublished,
        dateModified: p.dateModified,
      }),
      // BreadcrumbList is emitted by the rendered <BreadcrumbTrail> below - don't duplicate it here.
      pageWithSpeakable({ url: SITE.url + p.path, name: p.seoTitle }),
      ...(p.extraSchemas ?? []),
    ],
  );

  return (
    <PageShell>
      <div data-hero-tone="dark" className="bg-primary text-on-primary -mb-[4rem]">
      <article className="mx-auto max-w-[768px] px-5 md:px-6 pt-[96px] flex flex-col gap-xl pb-3xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: p.h1.length > 50 ? p.h1.slice(0, 47) + "…" : p.h1, path: p.path },
        ]} />

        {/* Header */}
        <header className="flex flex-col gap-md">
          <p className="text-[12px] uppercase tracking-wider text-accent-bright mono">{p.category}</p>
          <h1 className="text-[32px] md:text-[44px] leading-tight font-heading font-extrabold text-on-primary">{p.h1}</h1>
          <p className="text-[18px] md:text-[20px] text-on-primary-muted leading-relaxed">{p.hook}</p>

          {/* Byline */}
          <div className="flex flex-wrap items-center gap-md text-[13px] text-on-primary-muted mono mt-sm border-t border-white/10 pt-md">
            <span className="flex items-center gap-1"><User size={14} aria-hidden /> By <strong className="text-on-primary">{p.author.name}</strong>, {p.author.role}</span>
            <span className="flex items-center gap-1"><CalendarDays size={14} aria-hidden /> Last updated {monthYear(p.dateModified)}</span>
            <span className="flex items-center gap-1"><Clock size={14} aria-hidden /> {p.readingMinutes} min read</span>
          </div>
        </header>

        {/* Featured hero photo. Per-post images can be passed via `featuredImage`;
            otherwise a real on-brand workshop photo is used so the hero never
            renders as an empty placeholder. */}
        <img
          src={p.featuredImage ?? "/images/real/lab/macbook-pro-internals-topdown-dubai.jpg"}
          alt={p.featuredImageAlt}
          loading="lazy"
          decoding="async"
          className="rounded-md w-full h-[200px] md:h-[300px] object-cover border border-white/10"
        />

        {/* Quick answer box - AI Overview citation magnet (microdata) */}
        <QuickAnswer
          tone="dark"
          question={p.h1.replace(/[.!?]+$/, "") + "?"}
          answer={p.quickAnswer}
        />

        {/* Body */}
        <div className="prose-blog flex flex-col gap-md text-[16px] leading-relaxed text-on-primary-muted [&_h2]:text-on-primary [&_h3]:text-on-primary [&_h4]:text-on-primary [&_strong]:text-on-primary [&_a]:text-accent-bright [&_a]:underline [&_blockquote]:border-white/10 [&_blockquote]:bg-white/[0.04] [&_blockquote]:text-on-primary-muted">
          {/* Contextual auto-linking only on MacBook-focused posts — keyword targets are
              MacBook service pages, so skip posts about iPhone/iPad/iMac/etc. */}
          {/iphone|ipad|imac|ipod|apple-tv|homepod|airpods|watch/.test(p.path)
            ? p.body
            : <LinkifyProse selfHref={p.path}>{p.body}</LinkifyProse>}
        </div>

        {/* FAQ - full container width so the 2-column accordion has room
           (body stays at 72ch for readability) */}
        <section className="mt-xl">
          <h2 className="text-[28px] md:text-[32px] mb-md text-on-primary">Frequently asked questions</h2>
          <FAQAccordion tone="dark" items={p.faqs} injectSchema />
        </section>

        {/* Related links */}
        <section className="max-w-[72ch] mt-xl">
          <h2 className="text-[24px] mb-md text-on-primary">Related on MacBook Repair Dubai</h2>
          <div className="grid gap-sm sm:grid-cols-2 lg:grid-cols-3">
            {p.relatedLinks.map((r) => (
              <Link
                key={r.href}
                to={r.href}
                className="group border border-white/10 bg-white/[0.04] rounded-md p-md hover:border-accent-bright/40 transition-colors"
              >
                <div className="font-semibold text-[15px] text-on-primary group-hover:text-accent-bright">{r.label}</div>
                {r.description && <div className="text-[13px] text-on-primary-muted mt-xs">{r.description}</div>}
              </Link>
            ))}
          </div>
        </section>

        {/* Author bio + CTA */}
        <section className="max-w-[72ch] mt-xl border border-white/10 bg-white/[0.04] rounded-md p-lg">
          <h2 className="text-[20px] mb-sm text-on-primary">About the author</h2>
          <p className="text-[15px] mb-md text-on-primary-muted">
            <strong className="text-on-primary">{p.author.name}</strong> is a {p.author.role.toLowerCase()} at {NAP.name},
            Dubai's longest-running Apple-only repair workshop (since 2004). Personally signs the QC checklist
            on every job leaving the bench.
          </p>
          <div className="flex flex-wrap gap-sm">
            <Button asChild variant="whatsapp" size="lg">
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden /> WhatsApp for a quote
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={`tel:${NAP.phoneE164}`}>
                <Phone aria-hidden /> {NAP.phoneDisplay}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/blog"><ChevronLeft size={16} aria-hidden /> Back to blog</Link>
            </Button>
          </div>
        </section>
      </article>
      <GuideServiceBridge tone="dark" slug={p.path} />
      <RelatedArticles tone="dark" path={p.path} />
      </div>
    </PageShell>
  );
}
