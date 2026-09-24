"use client";
import { Link } from "@/lib/router-compat";
import { ArrowRight, BookOpen } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { LeadForm } from "@/components/blocks/LeadForm";
import { PRESETS } from "@/data/form-presets";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, breadcrumbs, itemList } from "@/lib/schema";
import { SITE } from "@/lib/seo";
import { GUIDES, GUIDE_THEMES } from "@/content/guides";

const PATH = "/macbook-guides";

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


      <RelatedArticles path={PATH} family="macbook" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl mb-3xl">
        <div className="bg-bg-alt text-text rounded-md p-xl md:p-2xl flex flex-col items-start gap-md shadow-md">
          <h2 className="text-text text-[24px] md:text-[28px] max-w-[30ch]">Guide didn't solve it? We repair MacBooks across Dubai</h2>
          <p className="text-text-muted text-[16px] max-w-[60ch]">
            Free diagnosis, free pickup across Dubai mainland, and a written warranty of up to 12 months, depending on the repair. Message the workshop on WhatsApp.
          </p>
          <a
            href={SITE.whatsapp}
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
