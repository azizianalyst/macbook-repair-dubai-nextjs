"use client";
import { withSlash } from "@/lib/utils";
import { Link } from "@/lib/router-compat";
import { ArrowRight, BookOpen } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { LeadForm } from "@/components/blocks/LeadForm";
import { PRESETS } from "@/data/form-presets";
import { Hero } from "@/components/blocks/Hero";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, breadcrumbs, itemList } from "@/lib/schema";
import { SITE } from "@/lib/seo";
import { GUIDES, GUIDE_THEMES } from "@/content/guides";

const PATH = "/macbook-guides";

const GUIDE_FAQS = [
  { q: "Are these guides safe to follow on my own?", a: "The everyday ones - screenshots, renaming, copy and paste, cleaning the screen - are completely safe. Anything involving a reset or erasing the drive says so clearly at the top: back up first, because an erase cannot be undone." },
  { q: "Do the guides work on both Apple silicon and Intel MacBooks?", a: "Most steps are the same on both. Where they differ - recovery mode, resets and startup options are the usual ones - the guide gives the Apple silicon and Intel steps separately." },
  { q: "What if a guide does not fix my MacBook?", a: "Then it is probably a hardware fault rather than a setting. Diagnosis at our Media City workshop is free, pickup across Dubai is free, and there is no fee if we cannot fix it." },
  { q: "Who writes these guides?", a: "The technicians who repair MacBooks at our Concord Tower workshop in Dubai Media City. They are written from the problems customers actually bring in, not rewritten from other websites." },
];

export default function MacBookGuides() {
  useSeo(
    {
      title: "MacBook Guides & How-Tos. Dubai Apple Workshop",
      description:
        "Step-by-step MacBook how-to guides from a working Dubai Apple workshop: screenshots, resets, passwords, cleaning, configuration and care. Plain-English, no jargon.",
      path: PATH,
    },
    [
      localBusiness(),
      organization(),
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "MacBook Guides", path: PATH },
      ]),
      itemList({ name: "MacBook how-to guides", items: GUIDES.map((g) => ({ name: g.title, url: g.slug })) }),
    ],
  );

  return (
    <PageShell>
      <Hero
        image="/images/topics/guide-macbook-basics-dubai.jpg"
        imageAlt="MacBook basics and settings guide - everyday shortcuts infographic"
        variant="service"
        eyebrow="Guides · written by working technicians"
        title="MacBook Guides & How-Tos"
        subtitle="Plain-English, step-by-step guides for everyday MacBook tasks, screenshots, resets, passwords, cleaning and care. Written at our Dubai Media City workshop, no jargon."
      />

      <QuickAnswer
        question="What do these MacBook guides cover?"
        answer="Plain-English, step-by-step guides written by the technicians at our Dubai Media City workshop: screenshots, resets, passwords, cleaning and care, plus troubleshooting for a black screen, a Mac stuck on the Apple logo, loud fans and charging faults. If a guide does not fix it, the diagnosis at the workshop is free."
      />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail trail={[{ name: "Home", path: "/" }, { name: "MacBook Guides", path: PATH }]} />
      </section>

      {GUIDE_THEMES.map((theme) => {
        const items = GUIDES.filter((g) => g.theme === theme);
        if (items.length === 0) return null;
        return (
          <section key={theme} className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
            <h2 className="text-[24px] md:text-[28px] mb-md flex items-center gap-sm">
              <BookOpen size={24} className="text-accent" aria-hidden /> {theme}
            </h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {items.map((g) => (
                <Link
                  key={g.slug}
                  to={g.slug}
                  className="group flex items-center justify-between gap-md bg-bg-card border border-border rounded-md px-lg py-md hover:border-primary transition-colors"
                >
                  <span className="text-[15px] font-medium leading-snug group-hover:text-accent">{g.title}</span>
                  <ArrowRight size={16} className="text-accent shrink-0" aria-hidden />
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {/* Lead form (template-audit 2026-09-24: page shipped with none) */}

      <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]" aria-labelledby="page-lead">

        <h2 id="page-lead" className="text-[26px] md:text-[32px] font-bold mb-md">Get a free quote</h2>

        <LeadForm preset={PRESETS.repair} sourcePath="/macbook-guides" defaultDeviceType="MacBook" />

      </section>


      {/* FAQ - the guides hub was the only commercial-tier page without one. */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">MacBook guides - frequently asked questions</h2>
        <FAQAccordion items={GUIDE_FAQS} injectSchema />
      </section>

      <RelatedArticles path={PATH} family="macbook" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl mb-3xl">
        <div className="bg-bg-alt text-text rounded-md p-xl md:p-2xl flex flex-col items-start gap-md shadow-md">
          <h2 className="text-text text-[24px] md:text-[28px] max-w-[30ch]">Guide didn't solve it? We repair MacBooks across Dubai</h2>
          <p className="text-text-muted text-[16px] max-w-[60ch]">
            Free diagnosis, free pickup across Dubai mainland, and a written warranty of up to 12 months, depending on the repair. Message the workshop on WhatsApp.
          </p>
          <a
            href={withSlash(SITE.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white text-accent font-semibold px-5 py-2.5"
          >
            WhatsApp 055 741 3706 <ArrowRight size={16} aria-hidden />
          </a>
        </div>
      </section>
    </PageShell>
  );
}
