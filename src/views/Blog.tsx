"use client";
// Blog index - lists all published posts. Posts live in src/content/blog-posts.ts
// (single source of truth, shared with the category hub pages).
import { useMemo, useState } from "react";
import { Link } from "@/lib/router-compat";
import { CalendarDays, Clock, ArrowRight, ShoppingCart, Wrench, Banknote, Tag, Zap, Newspaper, type LucideIcon } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { Hero } from "@/components/blocks/Hero";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization } from "@/lib/schema";
import { POSTS, CATEGORIES, categoryCounts, type Post } from "@/content/blog-posts";

const PAGE_SIZE = 18;

// Practical how-to guides kept at their original (legacy) slugs - linked here so they
// aren't orphaned. These are evergreen MacBook how-tos, distinct from the dated blog posts.
const GUIDES: { label: string; href: string }[] = [
  { label: "Top 10 common MacBook problems & how to fix them", href: "/top-10-common-macbook-problems-and-how-to-fix-them" },
  { label: "How to take a screenshot on a MacBook", href: "/how-to-take-a-screenshot-on-a-macbook" },
  { label: "How to copy and paste on a MacBook", href: "/how-to-copy-and-paste-on-a-macbook" },
  { label: "How to reset a MacBook", href: "/how-to-reset-a-macbook" },
  { label: "How to recover a MacBook password", href: "/how-to-recover-macbook-password" },
  { label: "How to reset passwords on your MacBook", href: "/how-do-i-reset-passwords-on-my-macbook" },
  { label: "How to change your MacBook's name", href: "/how-to-change-macbook-name" },
  { label: "How to clean a MacBook screen", href: "/how-to-clean-a-macbook-screen" },
  { label: "How to clean a MacBook Pro keyboard", href: "/how-to-clean-macbook-pro-keyboard" },
  { label: "How to erase all data before selling your Mac", href: "/how-to-erase-all-data-on-my-mac-before-giving-it-away" },
  { label: "Record audio while screen recording on Mac", href: "/how-can-i-record-audio-while-screen-recording-on-mac" },
  { label: "How to choose the right MacBook configuration", href: "/how-to-choose-the-right-configuration-for-a-macbook" },
  { label: "Best Apple laptop for gaming", href: "/how-to-choose-the-best-apple-laptop-for-gaming" },
  { label: "Do MacBooks last over a decade?", href: "/do-macbooks-last-over-a-decade" },
  { label: "Siri stopped working on MacBook Air", href: "/siri-stopped-working-on-macbook-air" },
  { label: "Caps Lock key not responding after restart", href: "/the-caps-lock-key-is-not-responding-after-restarting-my-macbook" },
  { label: "MacBook doesn't see internal SSD", href: "/the-macbook-does-not-see-the-internal-ssd" },
  { label: "Server error 403 Forbidden on Mac download", href: "/the-server-gave-an-error-during-download-403-forbidden" },
  { label: "Free MacBook diagnostic Dubai", href: "/macbook-full-diagnostic-dubai" },
  { label: "Run Windows on MacBook with Boot Camp", href: "/boot-camp-windows-macbook-dubai" },
];

// "What kind of Mac user are you?" finder. Each option recommends three real posts
// plus a contextual CTA, and links through to the matching category hub.
type Finder = {
  key: string;
  label: string;
  icon: LucideIcon;
  hub: string;            // /blog/<slug>
  cta: { label: string; href: string };
  postSlugs: string[];
};

const FINDERS: Finder[] = [
  {
    key: "buy",
    label: "I'm buying a Mac or iPhone",
    icon: ShoppingCart,
    hub: "/blog/buying-guides",
    cta: { label: "All buying guides →", href: "/blog/buying-guides" },
    postSlugs: [
      "/blog/best-macbook-for-students-dubai-2026",
      "/blog/macbook-air-vs-macbook-pro-2026",
      "/blog/should-i-buy-refurbished-macbook-dubai",
    ],
  },
  {
    key: "broken",
    label: "Something's broken",
    icon: Wrench,
    hub: "/blog/fixes",
    cta: { label: "MacBook Screen Repair from AED 600", href: "/macbook-screen-repair-dubai" },
    postSlugs: [
      "/blog/macbook-not-turning-on-fix-guide",
      "/blog/macbook-black-screen-fix",
      "/blog/macbook-wont-charge-fixes",
    ],
  },
  {
    key: "cost",
    label: "What will a repair cost?",
    icon: Banknote,
    hub: "/blog/repair-costs",
    cta: { label: "See all repair prices →", href: "/blog/repair-costs" },
    postSlugs: [
      "/blog/macbook-screen-repair-cost-dubai-2026",
      "/blog/macbook-battery-replacement-cost-2026",
      "/blog/iphone-screen-repair-cost-dubai-2026",
    ],
  },
  {
    key: "sell",
    label: "Selling or trading in",
    icon: Tag,
    hub: "/blog/sell-trade-in",
    cta: { label: "Sell & trade-in guides →", href: "/blog/sell-trade-in" },
    postSlugs: [
      "/blog/how-much-is-my-iphone-worth-dubai",
      "/blog/best-way-to-sell-old-iphone-dubai",
      "/blog/should-i-buy-refurbished-macbook-dubai",
    ],
  },
  {
    key: "care",
    label: "Slow, hot, or just keeping it healthy",
    icon: Zap,
    hub: "/blog/care-maintenance",
    cta: { label: "Care & maintenance guides →", href: "/blog/care-maintenance" },
    postSlugs: [
      "/blog/macbook-running-slow-10-fixes",
      "/blog/macbook-maintenance-checklist-dubai",
      "/blog/protect-macbook-dubai-summer-heat",
    ],
  },
  {
    key: "news",
    label: "Just keeping up with Apple",
    icon: Newspaper,
    hub: "/blog/apple-news",
    cta: { label: "Latest Apple news →", href: "/blog/apple-news" },
    postSlugs: [
      "/blog/m5-chip-explained-vs-m4",
      "/blog/apple-intelligence-on-old-iphones",
      "/blog/iphone-fold-2026-what-to-expect",
    ],
  },
];

function PostCard({ p }: { p: Post }) {
  return (
    <Link
      to={p.slug}
      className="group border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg hover:border-accent/40 hover:bg-bg-alt transition-colors flex flex-col gap-sm"
    >
      <p className="text-[12px] uppercase tracking-wider text-accent mono">{p.category}</p>
      <h2 className="text-[18px] font-bold leading-snug group-hover:text-accent">{p.title}</h2>
      <p className="text-[14px] text-text-muted leading-relaxed flex-1">{p.excerpt}</p>
      <div className="flex flex-wrap items-center gap-md text-[12px] text-text-muted mono mt-sm pt-sm border-t border-border">
        <span className="flex items-center gap-1"><CalendarDays size={12} aria-hidden /> {p.date}</span>
        <span className="flex items-center gap-1"><Clock size={12} aria-hidden /> {p.minutes} min</span>
        <span className="ml-auto flex items-center gap-1 text-accent font-semibold">By {p.author} <ArrowRight size={12} aria-hidden /></span>
      </div>
    </Link>
  );
}

export default function Blog() {
  const counts = categoryCounts();
  const bySlug = useMemo(() => new Map(POSTS.map((p) => [p.slug, p])), []);
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const selected = FINDERS.find((f) => f.key === active) ?? null;
  const recommended = selected
    ? selected.postSlugs.map((s) => bySlug.get(s)).filter((p): p is Post => !!p)
    : [];

  useSeo(
    {
      title: "Apple Repair Blog Dubai - Honest Cost Guides",
      description: "Honest, technician-written guides to iPhone, MacBook, iPad and Mac repair costs in Dubai. April 2026 prices. Same-day service, warranty of up to 12 months.",
      path: "/blog",
    },
    // BreadcrumbList is emitted by the rendered <BreadcrumbTrail> below - don't duplicate it here.
    [
      localBusiness(),
      organization(),
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "https://macbook-repair-dubai.ae/blog#collection",
        name: "Apple Repair Blog Dubai",
        description: "Honest repair cost guides, how-to articles, and buying advice for Apple device owners in Dubai.",
        url: "https://macbook-repair-dubai.ae/blog",
        isPartOf: { "@id": "https://macbook-repair-dubai.ae/#website" },
        publisher: { "@id": "https://macbook-repair-dubai.ae/#organization" },
        inLanguage: "en-AE",
      },
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        variant="service"
        tone="dark"
        eyebrow="Apple repair blog · since 2004"
        title="Apple repair blog - Dubai"
        subtitle={`Honest guides written by working technicians at our Dubai Media City workshop. Pricing, comparisons, and decision frameworks. ${POSTS.length} posts published.`}
      />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]} />
      </section>

      {/* "What kind of Mac user are you?" finder */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <div className="rounded-lg border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg md:p-xl">
          <h2 className="text-[20px] md:text-[24px] font-bold">What brings you here today?</h2>
          <p className="text-[14px] text-text-muted mt-1 mb-lg">Pick one and we'll point you to the right guides.</p>
          <div className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-x-visible scrollbar-none">
            {FINDERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setActive(active === f.key ? null : f.key)}
                aria-pressed={active === f.key}
                className={`inline-flex items-center gap-1.5 text-[14px] font-medium rounded-full px-md py-2 border transition-colors ${
                  active === f.key
                    ? "border-accent/60 bg-accent/10 text-accent"
                    : "border-border bg-bg-alt hover:border-accent/50 hover:text-accent"
                }`}
              >
                <f.icon size={16} aria-hidden className="shrink-0" />{f.label}
              </button>
            ))}
          </div>

          {selected && (
            <div className="mt-lg pt-lg border-t border-border">
              <div className="grid gap-2 sm:grid-cols-3">
                {recommended.map((p) => (
                  <Link
                    key={p.slug}
                    to={p.slug}
                    className="group border border-border bg-bg-alt rounded-md p-md hover:border-accent/40 hover:bg-bg-alt transition-colors flex flex-col gap-1"
                  >
                    <span className="text-[14px] font-semibold leading-snug group-hover:text-accent">{p.title}</span>
                    <span className="text-[12px] text-text-muted mono mt-auto pt-1">{p.minutes} min · By {p.author}</span>
                  </Link>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-md mt-md">
                <Link
                  to={selected.cta.href}
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold rounded-full px-lg py-2 bg-accent text-primary hover:opacity-90 transition-opacity"
                >
                  {selected.cta.label}
                </Link>
                {selected.cta.href !== selected.hub && (
                  <Link to={selected.hub} className="text-[13px] text-accent hover:underline">
                    See all guides in this topic →
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Category chips */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <div className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-x-visible scrollbar-none">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to={`/blog/${c.slug}`}
              className="text-[13px] font-medium rounded-full px-md py-1.5 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] hover:border-accent/50 hover:text-accent transition-colors"
            >
              {c.name} ({counts[c.slug]})
            </Link>
          ))}
        </div>
      </section>

      {/* Browse by device (tag archives) */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-lg">
        <p className="text-[12px] uppercase tracking-wider text-accent mono mb-sm">Browse by device</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: "macbook", label: "MacBook" },
            { slug: "imac", label: "iMac" },
            { slug: "mac", label: "Mac mini / Studio / Pro" },
            { slug: "iphone", label: "iPhone" },
            { slug: "ipad", label: "iPad" },
          ].map((t) => (
            <Link
              key={t.slug}
              to={`/blog/tag/${t.slug}`}
              className="text-[13px] font-medium rounded-full px-md py-1.5 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] hover:border-accent/50 hover:text-accent transition-colors"
            >
              {t.label}
            </Link>
          ))}
        </div>
      </section>

      {/* All posts (paginated) */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-lg pb-3xl">
        <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3">
          {POSTS.slice(0, visible).map((p) => (
            <PostCard key={p.slug} p={p} />
          ))}
        </div>
        {visible < POSTS.length && (
          <div className="flex justify-center mt-xl">
            <button
              type="button"
              onClick={() => setVisible((v) => Math.min(v + PAGE_SIZE, POSTS.length))}
              className="inline-flex items-center gap-2 text-[14px] font-semibold rounded-full px-xl py-2.5 border border-border-strong bg-bg-card hover:border-accent/50 hover:text-accent transition-colors"
            >
              Load more guides ({POSTS.length - visible} left)
            </button>
          </div>
        )}
      </section>

      {/* Practical how-to guides */}
      <section className="mx-auto max-w-content px-5 md:px-6 pb-3xl">
        <h2 className="text-[24px] md:text-[28px] mb-sm">Practical MacBook how-to guides</h2>
        <p className="text-[15px] text-text-muted max-w-[70ch] mb-lg">
          Evergreen step-by-step guides for everyday MacBook tasks - screenshots, resets, cleaning, passwords and more. See them all on the{" "}
          <Link to="/macbook-guides" className="text-accent font-semibold hover:underline">MacBook guides hub</Link>.
        </p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((g) => (
            <Link
              key={g.href}
              to={g.href}
              className="group flex items-center justify-between gap-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md px-lg py-md hover:border-accent/40 hover:bg-bg-alt transition-colors"
            >
              <span className="text-[15px] font-medium group-hover:text-accent">{g.label}</span>
              <ArrowRight size={14} className="text-accent shrink-0" aria-hidden />
            </Link>
          ))}
        </div>
      </section>
      </div>
    </PageShell>
  );
}
