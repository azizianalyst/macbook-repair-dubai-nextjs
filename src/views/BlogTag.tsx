"use client";
import { Link } from "@/lib/router-compat";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { Hero } from "@/components/blocks/Hero";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization } from "@/lib/schema";
import { TAGS, tagBySlug, postsByTag } from "@/content/blog-posts";
import type { TagSlug } from "@/content/blog-posts";

export default function BlogTag({ slug }: { slug: TagSlug }) {
  const tag = tagBySlug(slug);
  const posts = postsByTag(slug);
  const name = tag?.name ?? slug;
  const path = `/blog/tag/${slug}`;
  const url = `https://macbook-repair-dubai.ae${path}`;

  useSeo(
    {
      title: `${name} Repair & Guides Dubai. Blog`,
      description: `All repair guides, cost breakdowns, buying advice and troubleshooting for ${name} in Dubai. ${posts.length} articles from our technicians.`,
      path,
    },
    [
      localBusiness(),
      organization(),
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${url}#collection`,
        name: `${name} Repair & Guides Dubai`,
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
          eyebrow="Device tag"
          title={`${name}. Dubai Repair & Guides`}
          subtitle={`${posts.length} technician-written articles covering repairs, costs and buying advice for ${name} in Dubai.`}
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

        {/* Tag nav chips */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-lg">
          <div className="flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <Link
                key={t.slug}
                to={`/blog/tag/${t.slug}`}
                aria-current={t.slug === slug ? "page" : undefined}
                className={`text-[13px] font-medium rounded-full px-md py-1.5 border transition-colors ${
                  t.slug === slug
                    ? "border-accent/60 bg-accent/15 text-accent"
                    : "border-border bg-bg-card hover:border-accent/50 hover:text-accent"
                }`}
              >
                {t.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Posts grid */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl pb-3xl">
          {posts.length === 0 ? (
            <p className="text-text-muted">No posts found for this tag yet.</p>
          ) : (
            <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  to={p.slug}
                  className="group border border-border bg-bg-card rounded-md p-lg hover:border-accent/40 hover:bg-bg-alt transition-colors flex flex-col gap-sm"
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
              ))}
            </div>
          )}
        </section>
      </div>
    </PageShell>
  );
}
