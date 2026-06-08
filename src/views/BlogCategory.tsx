"use client";
// Blog category hub - one reusable page driven by a `slug` prop.
// Wired in App.tsx as one <Route> per category (see CATEGORIES in blog-posts.ts).
import { Link } from "@/lib/router-compat";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { Hero } from "@/components/blocks/Hero";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization } from "@/lib/schema";
import {
  CATEGORIES,
  categoryBySlug,
  postsInCategory,
  categoryCounts,
} from "@/content/blog-posts";

export default function BlogCategory({ slug }: { slug: string }) {
  const category = categoryBySlug(slug);
  const posts = postsInCategory(slug);
  const counts = categoryCounts();
  const others = CATEGORIES.filter((c) => c.slug !== slug);

  // Defensive: an unknown slug should never be routed here, but fail soft.
  const name = category?.name ?? "Blog";
  const path = `/blog/${slug}`;
  const url = `https://macbook-repair-dubai.ae${path}`;

  useSeo(
    {
      title: `${name} - Apple Repair Blog Dubai`,
      description: category
        ? `${category.blurb} Technician-written, with 2026 AED pricing. ${posts.length} guides.`
        : "Apple repair guides for Dubai.",
      path,
    },
    // BreadcrumbList is emitted by the rendered <BreadcrumbTrail> below.
    [
      localBusiness(),
      organization(),
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${url}#collection`,
        name: `${name} - Apple Repair Blog Dubai`,
        description: category?.intro,
        url,
        isPartOf: { "@id": "https://macbook-repair-dubai.ae/#website" },
        publisher: { "@id": "https://macbook-repair-dubai.ae/#organization" },
        inLanguage: "en-AE",
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: posts.length,
          itemListElement: posts.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `https://macbook-repair-dubai.ae${p.slug}`,
            name: p.title,
          })),
        },
      },
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          variant="service"
          tone="dark"
          eyebrow={category?.eyebrow ?? "Apple repair blog"}
          title={`${name} - Dubai`}
          subtitle={category?.blurb}
        />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail
            tone="dark"
            trail={[
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name, path },
            ]}
          />
        </section>

        {/* Category nav chips */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-lg">
          <div className="flex flex-wrap gap-2">
            <Link
              to="/blog"
              className="text-[13px] font-medium rounded-full px-md py-1.5 border border-border bg-bg-card hover:border-accent/50 hover:text-accent transition-colors"
            >
              All posts
            </Link>
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                to={`/blog/${c.slug}`}
                aria-current={c.slug === slug ? "page" : undefined}
                className={`text-[13px] font-medium rounded-full px-md py-1.5 border transition-colors ${
                  c.slug === slug
                    ? "border-accent/60 bg-accent/15 text-accent"
                    : "border-border bg-bg-card hover:border-accent/50 hover:text-accent"
                }`}
              >
                {c.name} ({counts[c.slug]})
              </Link>
            ))}
          </div>
        </section>

        {/* Intro */}
        {category?.intro && (
          <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
            <p className="text-[15px] md:text-[16px] text-text-muted leading-relaxed max-w-[75ch]">
              {category.intro}
            </p>
          </section>
        )}

        {/* Posts grid */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl pb-3xl">
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                to={p.slug}
                className="group border border-border bg-bg-card rounded-md p-lg hover:border-accent/40 hover:bg-bg-alt transition-colors flex flex-col gap-sm"
              >
                <p className="text-[11px] uppercase tracking-wider text-accent mono">{p.category}</p>
                <h2 className="text-[18px] font-bold leading-snug group-hover:text-accent">{p.title}</h2>
                <p className="text-[14px] text-text-muted leading-relaxed flex-1">{p.excerpt}</p>
                <div className="flex flex-wrap items-center gap-md text-[12px] text-text-muted mono mt-sm pt-sm border-t border-border">
                  <span className="flex items-center gap-1"><CalendarDays size={12} aria-hidden /> {p.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} aria-hidden /> {p.minutes} min</span>
                  <span className="ml-auto flex items-center gap-1 text-accent font-semibold">By {p.author} <ArrowRight size={12} aria-hidden /></span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Related categories */}
        <section className="mx-auto max-w-content px-5 md:px-6 pb-3xl">
          <h2 className="text-[24px] md:text-[28px] mb-lg">More from the blog</h2>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((c) => (
              <Link
                key={c.slug}
                to={`/blog/${c.slug}`}
                className="group flex items-center justify-between gap-md border border-border bg-bg-card rounded-md px-lg py-md hover:border-accent/40 hover:bg-bg-alt transition-colors"
              >
                <span className="text-[15px] font-medium group-hover:text-accent">
                  {c.name} <span className="text-text-muted">({counts[c.slug]})</span>
                </span>
                <ArrowRight size={14} className="text-accent shrink-0" aria-hidden />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
