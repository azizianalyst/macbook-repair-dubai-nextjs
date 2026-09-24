"use client";
// Shared template for the Mac data-recovery-by-area pages.
// Driven entirely by DataRecoveryAreaConfig from src/content/data-recovery-areas.ts.
// Deliberately NOT a clone of AreaPageTemplate: the intent here is data loss, not
// a repair booking, so the page leads with recoverability and confidentiality.
import { Link } from "@/lib/router-compat";
import { AlertTriangle, Clock, HardDrive, Lock, ShieldCheck, Truck } from "lucide-react";

import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { CtaBand } from "@/components/blocks/CtaBand";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { LeadForm } from "@/components/blocks/LeadForm";
import { PRESETS } from "@/data/form-presets";

import { useSeo } from "@/hooks/use-seo";
import { pageWithSpeakable } from "@/lib/schema";
import { SITE } from "@/lib/seo";
import { REVIEWS } from "@/content/reviews";
import { DATA_RECOVERY_AREAS, type DataRecoveryAreaConfig } from "@/content/data-recovery-areas";

const RELATED = [
  { label: "Mac data recovery (all Dubai)", href: "/mac-data-recovery-dubai" },
  { label: "Apple T2 chip data recovery", href: "/apple-t2-chip-data-recovery-dubai" },
  { label: "Data recovery after water damage", href: "/mac-data-recovery-after-water-damage-dubai" },
  { label: "SSD data recovery", href: "/ssd-data-recovery-dubai" },
  { label: "MacBook data recovery", href: "/macbook-data-recovery-dubai" },
  { label: "iMac data recovery", href: "/imac-data-recovery-dubai" },
];

export function DataRecoveryAreaTemplate({ cfg }: { cfg: DataRecoveryAreaConfig }) {
  const path = `/mac-data-recovery-${cfg.slug}`;
  const url = `${SITE.url}${path}`;
  const reviews = cfg.reviewIndexes.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);
  const title = `Mac Data Recovery ${cfg.area} — Free Collection`;
  const description = `Mac and MacBook data recovery in ${cfg.area}. Soldered SSD, T2 and Apple-silicon recovery, free diagnosis, no recovery no fee. Free collection. Call 055 741 3706.`;

  // Only the WebPage/speakable node is injected client-side. The Organization,
  // LocalBusiness, Service and Place nodes for this path are server-rendered by
  // <PageSchema> (src/lib/page-schema.ts), so emitting them here as well would
  // duplicate every @id in the DOM after hydration.
  useSeo({ title, description, path }, [pageWithSpeakable({ url, name: title })]);

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          variant="service"
          tone="dark"
          eyebrow={`Free collection in ${cfg.area}`}
          title={`Mac Data Recovery ${cfg.area}`}
          subtitle={`${cfg.landmarkLine} Soldered-SSD, T2 and Apple-silicon recovery at component level. Free diagnosis, and no fee if nothing is recovered.`}
        >
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Truck size={16} className="text-accent" aria-hidden /> Free collection</span>
            <span className="text-text-faint">·</span>
            <span className="flex items-center gap-1"><Clock size={16} className="text-accent" aria-hidden /> {cfg.collectWindow}</span>
            <span className="text-text-faint">·</span>
            <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-accent" aria-hidden /> No recovery, no fee</span>
          </p>
        </Hero>

        <QuickAnswer
          tone="dark"
          question={`Can you recover data from a Mac in ${cfg.area}?`}
          answer={`Yes. We collect free from ${cfg.area} - typically ${cfg.collectWindow.toLowerCase()} of your WhatsApp - and attempt recovery at our Concord Tower workshop in Media City (${cfg.driveTime} away). On Apple silicon and T2 Macs the SSD is soldered to the logic board, so recovery is done at component level rather than by removing a drive. Diagnosis is free, the price is fixed in writing before any work starts, and if nothing is recovered there is no fee.`}
        />

        {/* Act-now warning — the single most useful thing on a data-loss page */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <div className="border border-accent/40 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg flex items-start gap-md">
            <AlertTriangle size={22} className="text-accent shrink-0 mt-1" aria-hidden />
            <div>
              <p className="font-bold text-[16px] mb-1">Before you do anything else</p>
              <p className="text-[15px] text-text-muted leading-relaxed">
                Stop using the Mac. Every hour of continued use risks overwriting the data we are trying to recover.
                If it got wet, leave it switched off and do not plug it in to charge — corrosion spreads for as long as
                the board stays wet, and rice does nothing. Message us and we will tell you what to do next before the
                courier arrives.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail
            tone="dark"
            trail={[
              { name: "Home", path: "/" },
              { name: "Mac Data Recovery", path: "/mac-data-recovery-dubai" },
              { name: cfg.area, path },
            ]}
          />
        </section>

        {/* Area context */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">Data recovery for {cfg.area} — what we actually see</h2>
          <p className="text-[16px] text-text-muted leading-relaxed max-w-[72ch]">{cfg.angle}</p>
          <p className="text-[16px] text-text-muted leading-relaxed max-w-[72ch] mt-md">{cfg.who}</p>
        </section>

        {/* Scenarios */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <SectionHeading
            eyebrow="Most common cases"
            title={`The failures we recover from most often in ${cfg.area}`}
            sub="Listed most common first. In nearly all of them the storage itself is intact — it is the route to it that has broken."
          />
          <ol className="grid gap-md md:grid-cols-3">
            {cfg.scenarios.map((s, i) => (
              <li key={s.title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                <span className="mono text-accent text-[13px] font-bold">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-bold text-[16px] mb-1 mt-1">{s.title}</p>
                <p className="text-[14px] text-text-muted leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Collection + confidentiality */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <SectionHeading eyebrow="How it works" title={`Collection and confidentiality in ${cfg.area}`} />
          <div className="grid gap-md md:grid-cols-2">
            <div className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
              <Truck size={20} className="text-accent mb-2" aria-hidden />
              <p className="font-bold text-[16px] mb-1">Free collection, {cfg.collectWindow.toLowerCase()}</p>
              <p className="text-[15px] text-text-muted leading-relaxed">{cfg.collection}</p>
            </div>
            <div className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
              <Lock size={20} className="text-accent mb-2" aria-hidden />
              <p className="font-bold text-[16px] mb-1">Your data, handled once</p>
              <p className="text-[15px] text-text-muted leading-relaxed">
                Recoveries are done by one technician at one bench, not passed between hands. We do not browse or copy
                anything beyond what the recovery requires. If you need the Mac securely wiped before it comes back, say
                so and we will confirm in writing once it is done. Encrypted machines still need your password or
                recovery key — that is the encryption working as intended, and we will say so up front rather than after
                you have paid.
              </p>
            </div>
          </div>
        </section>

        {/* Why soldered storage matters */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <div className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
            <HardDrive size={20} className="text-accent mb-2" aria-hidden />
            <h2 className="text-[22px] md:text-[26px] mb-sm">Why Apple-silicon and T2 recovery is different</h2>
            <p className="text-[15px] text-text-muted leading-relaxed max-w-[80ch]">
              On every Mac with an M-series chip or a T2 security chip, the SSD is soldered to the logic board and tied
              to that chip. There is no drive to unplug and read in another machine, which is the method almost every
              general laptop shop relies on. Recovery has to happen on the board itself — repairing or bypassing the
              fault that is blocking access, with the original chip in place. That is specialist equipment and specialist
              work, and it is the reason a shop can tell you the data is unrecoverable when it is not.
            </p>
          </div>
        </section>

        <CtaBand
          eyebrow="Time matters with data loss"
          headline={`Send us the model and what happened — we will tell you the realistic odds first.`}
          description={`Free collection from ${cfg.area}, free diagnosis, and no fee if nothing is recovered.`}
        />

        {/* Reviews */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <SectionHeading
              eyebrow="What customers say"
              title="Customer reviews from across Dubai"
              sub="232+ five-star Google reviews. A small sample below."
            />
            <ReviewGrid tone="dark" reviews={reviews} />
            <p className="text-[14px] text-text-muted mt-md">
              <Link to="/reviews" className="text-accent underline underline-offset-2">Read all reviews →</Link>
            </p>
          </div>
        </section>

        {/* Lead form - the data-recovery preset, not the generic repair one: it leads
            with "stop powering the device on" and asks about backups. */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl" aria-labelledby="dr-lead">
          <h2 id="dr-lead" className="text-[26px] md:text-[32px] font-bold mb-md">Start a free recovery assessment</h2>
          <LeadForm preset={PRESETS["data-recovery"]} sourcePath={path} defaultDeviceType="MacBook" />
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">Mac data recovery in {cfg.area} — frequently asked questions</h2>
          <FAQAccordion items={cfg.faqs} injectSchema />
        </section>

        {/* Related */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <SectionHeading eyebrow="Related" title="Other data-recovery services" />
          <ul className="grid gap-sm md:grid-cols-2 lg:grid-cols-3">
            {RELATED.map((r) => (
              <li key={r.href}>
                <Link
                  to={r.href}
                  className="block border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-md hover:border-accent/40 transition text-[15px]"
                >
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Other areas */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <SectionHeading eyebrow="Other areas" title="Mac data recovery elsewhere in Dubai" />
          <ul className="flex flex-wrap gap-sm">
            {DATA_RECOVERY_AREAS.filter((a) => a.slug !== cfg.slug).map((a) => (
              <li key={a.slug}>
                <Link
                  to={`/mac-data-recovery-${a.slug}`}
                  className="inline-block border border-border/70 bg-bg-card rounded-md px-md py-sm hover:border-accent/40 transition text-[14px]"
                >
                  {a.area}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-[14px] text-text-muted mt-md">
            Not listed? We collect from anywhere in Dubai —{" "}
            <Link to="/mac-data-recovery-dubai" className="text-accent underline underline-offset-2">
              see the main data-recovery page
            </Link>.
          </p>
        </section>

        <LocationBlock />
      </div>
    </PageShell>
  );
}
