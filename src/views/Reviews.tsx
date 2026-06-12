"use client";
import { useMemo, useState } from "react";
import { ExternalLink, MessageSquareQuote } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { ReviewCard } from "@/components/blocks/ReviewCard";
import { Button } from "@/components/ui/button";
import { REVIEWS, type ReviewLanguage, type ReviewService } from "@/content/reviews";
import { useSeo } from "@/hooks/use-seo";
import { reviewSchema, localBusinessWithRating, organization } from "@/lib/schema";
import { REVIEW_COUNT, REVIEW_AVERAGE } from "@/content/site";

const SERVICE_FILTERS: ReadonlyArray<"All" | ReviewService> = [
  "All", "MacBook", "iMac", "iPhone", "iPad", "Water Damage", "Battery", "Screen",
];
const LANG_FILTERS: ReadonlyArray<"All" | ReviewLanguage> = [
  "All", "English", "Russian", "German", "French", "Turkish", "Arabic",
];
const RATING_FILTERS = ["All", "5★ only"] as const;

const GOOGLE_REVIEW_URL = "https://g.page/r/CXgGZOQdSHOxEAE/review";

const PAGE_SIZE = 20;

// Reviews that carry written feedback (rating-only entries are hidden - they render as empty cards).
const WRITTEN_REVIEW_COUNT = REVIEWS.filter((r) => r.text && r.text.trim().length > 0).length;

const RESPONSE_EXAMPLES = REVIEWS.filter((r) => r.ownerResponse && r.text.length > 80).slice(0, 3);

export default function Reviews() {
  const [serviceFilter, setServiceFilter] = useState<(typeof SERVICE_FILTERS)[number]>("All");
  const [langFilter, setLangFilter] = useState<(typeof LANG_FILTERS)[number]>("All");
  const [ratingFilter, setRatingFilter] = useState<(typeof RATING_FILTERS)[number]>("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    return REVIEWS.filter((r) => {
      // Skip rating-only reviews with no written feedback - they render as empty cards.
      if (!r.text || !r.text.trim()) return false;
      if (serviceFilter !== "All" && !r.services.includes(serviceFilter)) return false;
      if (langFilter !== "All" && r.language !== langFilter) return false;
      if (ratingFilter === "5★ only" && r.rating !== 5) return false;
      return true;
    });
  }, [serviceFilter, langFilter, ratingFilter]);

  const visibleReviews = filtered.slice(0, visible);

  const reviewSchemas = useMemo(
    () =>
      // Only emit Review nodes for reviews that have real text - never fabricate a reviewBody.
      REVIEWS.slice(0, 50)
        .filter((r) => r.text && r.text.trim().length > 0)
        .map((r) => reviewSchema({ author: r.name, rating: r.rating, body: r.text })),
    [],
  );

  // JSON-LD is rendered SERVER-SIDE below (JSX <script>) so the AggregateRating star
  // rating + Review nodes reach the static HTML Google indexes. Previously these went
  // through useSeo's client-only useEffect and never appeared in the prerendered page.
  useSeo(
    {
      title: `${REVIEW_COUNT}+ Google Reviews · ${REVIEW_AVERAGE} Stars - MacBook Repair Dubai`,
      description: `${REVIEW_COUNT}+ verified Google reviews, ${REVIEW_AVERAGE}★ average. Real customers, real Apple repairs - MacBook, iMac, iPhone, iPad. Concord Tower, Dubai Media City.`,
      path: "/reviews",
    },
    [],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      {/* Server-rendered JSON-LD: business (with rating nested) + organization + Review nodes */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessWithRating(REVIEW_AVERAGE, REVIEW_COUNT)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization()) }} />
      {reviewSchemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Hero
        variant="service"
        tone="dark"
        eyebrow="Customer feedback"
        title="Real Reviews from Real Customers"
        subtitle="Every review below is a verified Google review. Nothing edited, nothing rewritten."
      >
        <p className="mt-sm text-[13px] text-text-muted mono">
          21+ years in Dubai · {WRITTEN_REVIEW_COUNT} written reviews on this page
        </p>
      </Hero>

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }]} />
      </section>

      {/* H1 + intro - critical for ranking "MacBook repair Dubai reviews" */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-lg">
        <h2 className="text-[28px] md:text-[36px] font-heading font-extrabold mb-md">
          MacBook Repair Dubai - {REVIEW_COUNT}+ Google Reviews
        </h2>
        <div className="flex flex-col gap-sm text-[16px] text-text-muted leading-relaxed max-w-[72ch]">
          <p>
            Every review below is a real, unedited Google review posted directly to our{" "}
            <a href="https://maps.app.goo.gl/eg8RhTxBg8nFLnWN9" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Google Business Profile
            </a>
            . Nothing has been rewritten, curated, or removed. {REVIEW_COUNT}+ verified reviews,{" "}
            {REVIEW_AVERAGE} average rating - from MacBook screen and battery repairs to water damage
            recovery, iMac upgrades, iPhone screen replacements, and iPad repairs, all at{" "}
            our Concord Tower workshop in Dubai Media City.
          </p>
          <p>
            We've been repairing Apple devices in Dubai since 2004 (21+ years). Every review below
            represents a real device repaired by a real technician - Shafiq, Usman, Ali, or the wider team.
            Filter by device, language, or rating to find reviews most relevant to your repair.
          </p>
        </div>
      </section>

      <section aria-labelledby="filters" className="mx-auto max-w-content px-5 md:px-6 mt-md">
        <h2 id="filters" className="sr-only">Filter reviews</h2>
        <div className="border border-border bg-bg-card rounded-md p-md flex flex-col gap-md">
          <FilterRow label="Service">
            {SERVICE_FILTERS.map((s) => (
              <Chip
                key={s}
                active={serviceFilter === s}
                onClick={() => { setServiceFilter(s); setVisible(PAGE_SIZE); }}
              >{s}</Chip>
            ))}
          </FilterRow>
          <FilterRow label="Language">
            {LANG_FILTERS.map((l) => (
              <Chip
                key={l}
                active={langFilter === l}
                onClick={() => { setLangFilter(l); setVisible(PAGE_SIZE); }}
              >{l}</Chip>
            ))}
          </FilterRow>
          <FilterRow label="Rating">
            {RATING_FILTERS.map((r) => (
              <Chip
                key={r}
                active={ratingFilter === r}
                onClick={() => { setRatingFilter(r); setVisible(PAGE_SIZE); }}
              >{r}</Chip>
            ))}
          </FilterRow>
        </div>
        <p className="mt-sm text-[13px] text-text-muted mono">
          Showing {visibleReviews.length} of {filtered.length} matching reviews · sorted newest first
        </p>
      </section>

      <section aria-label="Customer reviews" className="mx-auto max-w-content px-5 md:px-6 mt-lg">
        {filtered.length === 0 ? (
          <p className="text-text-muted py-xl text-center">
            No reviews match these filters. Try resetting one.
          </p>
        ) : (
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3">
            {visibleReviews.map((r, i) => (
              <ReviewCard
                key={`${r.name}-${i}`}
                name={r.name}
                date={r.date}
                rating={r.rating}
                text={r.text}
                ownerResponse={r.ownerResponse}
                tone="dark"
              />
            ))}
          </div>
        )}

        {visible < filtered.length && (
          <div className="mt-xl flex justify-center">
            <Button variant="primary" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
              Load 20 more reviews
            </Button>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <div className="border border-border bg-bg-card rounded-md p-xl text-center flex flex-col items-center gap-md">
          <h2 className="text-[28px] md:text-[32px]">Leave your own review</h2>
          <p className="text-[16px] text-text-muted max-w-[60ch]">
            Repaired with us in the past 21 years? A 30-second Google review helps the next customer in Dubai find an honest repair shop.
          </p>
          <Button asChild variant="primary">
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
              Write a Google review <ExternalLink size={16} aria-hidden />
            </a>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl pb-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
          <MessageSquareQuote size={28} className="text-accent" aria-hidden />
          Why every review gets a reply
        </h2>
        <div className="prose-tight max-w-[70ch] text-text-muted text-[16px] leading-relaxed flex flex-col gap-md">
          <p>
            Shafiq reads every Google review the day it lands. The reply comes from a real person at the Concord Tower office - not a marketing agency, not an automated bot.
          </p>
          <p>
            Two reasons. First, customers spent 30 seconds writing about their MacBook - that earns 30 seconds back. Second, a public reply commits the business in writing: when 5,000+ people read a 5-star review with a thoughtful response, the standard for the next repair is set in public.
          </p>
          <p>
            Below are 3 unedited examples from the past 6 months. Every word is verbatim.
          </p>
        </div>

        <div className="mt-lg grid gap-md md:grid-cols-3">
          {RESPONSE_EXAMPLES.map((r, i) => (
            <ReviewCard
              key={`example-${i}`}
              name={r.name}
              date={r.date}
              rating={r.rating}
              text={r.text}
              ownerResponse={r.ownerResponse}
              tone="dark"
            />
          ))}
        </div>
      </section>
      </div>
    </PageShell>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-sm">
      <span className="text-[12px] uppercase tracking-wider text-text-faint mono w-[72px] shrink-0">
        {label}
      </span>
      <div className="flex flex-wrap gap-1">{children}</div>
    </div>
  );
}

function Chip({
  active, onClick, children,
}: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={[
        "px-3 py-1.5 text-[13px] rounded-md border transition-colors",
        active
          ? "bg-accent text-accent border-accent font-semibold"
          : "bg-bg-card text-text-muted border-border hover:border-accent hover:text-accent",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
