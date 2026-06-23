"use client";
import { Monitor, HardDrive, Cpu, MemoryStick, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { PageShell } from "@/components/layout/PageShell";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Hero } from "@/components/blocks/Hero";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { useSeo } from "@/hooks/use-seo";
import { REVIEWS } from "@/content/reviews";
import { NAP } from "@/content/site";

const REPAIRS = [
  { icon: Monitor,     label: "iMac screen replacement",        price: "AED 699–1,800", time: "1–2 days",  note: "21.5\" and 27\", panel + glass, all Intel and M-series" },
  { icon: Cpu,         label: "iMac logic board repair",        price: "AED 900–2,500", time: "3–7 days",  note: "Component-level board repair. GPU fault, dead board, no-power" },
  { icon: HardDrive,   label: "iMac hard drive → SSD upgrade",  price: "AED 450–900",  time: "Same day",  note: "Fusion Drive SSD upgrade or HDD → SSD; macOS migration included" },
  { icon: MemoryStick, label: "iMac RAM upgrade",               price: "AED 300–700",  time: "Same day",  note: "Intel iMac only (M-series RAM is soldered); 8GB → 16GB or 32GB" },
  { icon: HardDrive,   label: "iMac SSD repair / replacement",  price: "AED 600–1,200", time: "1–2 days", note: "Blade SSD or PCIe M.2, model-dependent slot type" },
  { icon: Monitor,     label: "iMac backlight / display fault", price: "AED 500–1,200", time: "1–2 days",  note: "Stage light effect, dim screen, flickering, dead pixel cluster" },
  { icon: Cpu,         label: "iMac GPU fault",                 price: "AED 900–2,000", time: "3–7 days",  note: "Black screen, artefacts, no display, common on 2011–2013 models" },
  { icon: HardDrive,   label: "iMac data recovery",             price: "AED 800–2,500", time: "1–7 days",  note: "Deleted files, failed HDD/SSD, water damage" },
];

const FAQS = [
  { q: "How much does iMac repair cost in Dubai?",
    a: "iMac repair cost in Dubai: screen replacement AED 699–1,800, logic board repair AED 900–2,500, HDD to SSD upgrade AED 450–900, RAM upgrade AED 300–700. Prices vary by model (21.5\" vs 27\", Intel vs M-series). Diagnosis is always free. We confirm the cost in writing before any work starts." },
  { q: "Is it worth repairing an iMac in Dubai?",
    a: "Generally yes, if the repair cost is under 50–60% of a replacement iMac's price. A 27\" iMac logic board repair at AED 900–1,500 is worth it vs a AED 6,000+ replacement. Screen and drive repairs almost always make financial sense. Bring it in for a free diagnosis and we'll give you an honest recommendation." },
  { q: "How long does iMac repair take in Dubai?",
    a: "Screen repair: 1–2 days (panel sourcing). SSD/RAM upgrade: same day. Logic board repair: 3–7 days (component-level). Water damage: 3–7 days. We give you a daily WhatsApp update and notify you the moment the repair is complete." },
  { q: "Can you repair a 2011, 2013, or 2015 iMac in Dubai?",
    a: "Yes, we repair Intel iMacs from 2011 to 2019. GPU failures on 2011–2013 models, stage light display issues on 2011–2012, logic board faults, and HDD → SSD upgrades. Older iMacs (2011–2012) with GPU fault sometimes need a reflow or board replacement, we assess and advise before committing." },
  { q: "Can you upgrade an iMac SSD or RAM in Dubai?",
    a: "RAM: only on Intel iMacs (2011–2019). M-series iMac RAM is soldered and cannot be upgraded. SSD: upgradeable on most Intel iMacs (blade SSD or PCIe M.2 slot, model-dependent). M-series iMac SSD is also soldered, upgrade is not possible. We'll confirm before booking." },
  { q: "How much does iMac screen replacement cost in Dubai?",
    a: "iMac screen replacement costs AED 699–1,800 depending on model: 21.5\" iMac AED 699–1,200; 27\" iMac AED 900–1,800. The repair includes screen panel, glass, and adhesive seal. Takes 1–2 days due to panel sourcing." },
  { q: "Do you offer free iMac diagnosis in Dubai?",
    a: "Yes, free diagnosis on all iMac models. Bring it in to Concord Tower, Dubai Media City or schedule free pickup across Dubai Mainland. You receive a written quote with fault description, part cost, and labour cost before any work starts. No obligation to proceed." },
];

const FEATURED_REVIEW_INDEXES = [10, 16, 22, 27];

export default function IMacRepairCost() {
  const reviews = FEATURED_REVIEW_INDEXES.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);

  useSeo({
    title: "iMac Repair Cost Dubai. Screen, Logic Board, RAM | 2024 Prices",
    description:
      "iMac repair cost in Dubai. Screen from AED 699, logic board repair from AED 900, RAM upgrade from AED 300. All models. Free diagnosis. Concord Tower, Media City. Call 055 741 3706.",
    path: "/imac-repair-cost-dubai",
  });

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          image={undefined}
          imageAlt="iMac repair cost Dubai, screen, logic board, SSD"
          variant="device"
          tone="dark"
          eyebrow="iMac repair cost · Dubai · All models"
          title="iMac Repair Cost Dubai"
          subtitle="Screen from AED 699. Logic board repair from AED 900. SSD upgrade from AED 450. All Intel and M-series iMac models. Free diagnosis."
        >
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><CheckCircle2 size={14} aria-hidden /> Free diagnosis</span>
            <span>·</span>
            <span>Written quote before work starts</span>
            <span>·</span>
            <span>Warranty up to 12 months</span>
          </p>
        </Hero>

        <USPStrip tone="dark" />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: "iMac Repair Dubai", path: "/imac-repair-dubai" }, { name: "iMac Repair Cost Dubai", path: "/imac-repair-cost-dubai" }]} />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <QuickAnswer
            tone="dark"
            question="How much does iMac repair cost in Dubai?"
            answer="iMac repair in Dubai costs: screen replacement AED 699–1,800, logic board repair AED 900–2,500, HDD to SSD upgrade AED 450–900, RAM upgrade AED 300–700. Diagnosis is free. Prices confirmed in writing before work starts. Concord Tower, Dubai Media City. Call 055 741 3706."
          />
        </section>

        {/* Pricing table */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm">iMac repair prices in Dubai</h2>
          <div className="overflow-x-auto mt-lg">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="border-b border-border text-left text-text-muted">
                  <th className="py-sm pr-lg font-semibold">Repair</th>
                  <th className="py-sm pr-lg font-semibold">Price</th>
                  <th className="py-sm pr-lg font-semibold">Turnaround</th>
                  <th className="py-sm font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {REPAIRS.map((row) => (
                  <tr key={row.label} className="border-b border-border">
                    <td className="py-sm pr-lg font-medium">{row.label}</td>
                    <td className="py-sm pr-lg text-accent font-semibold">{row.price}</td>
                    <td className="py-sm pr-lg">{row.time}</td>
                    <td className="py-sm text-text-muted">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-text-muted mt-sm">All prices exclude VAT. Diagnosis is free. Written quote before any work starts. Warranty of up to 12 months.</p>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <div className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-xl flex flex-col md:flex-row md:items-center gap-lg">
            <div className="flex-1">
              <h2 className="text-[22px] font-bold mb-sm">Get a free iMac repair quote</h2>
              <p className="text-[15px] text-text-muted">Free diagnosis, walk in or book free pickup across Dubai. Written quote before any work starts.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-sm shrink-0">
              <a href={NAP.whatsappUrl} className="inline-flex items-center gap-sm bg-accent text-white font-semibold px-lg py-sm rounded-md text-[15px] hover:bg-accent/90">
                <MessageCircle size={18} aria-hidden /> WhatsApp
              </a>
              <a href={`tel:${NAP.phoneE164}`} className="inline-flex items-center gap-sm border border-border bg-bg font-semibold px-lg py-sm rounded-md text-[15px] hover:bg-bg-card">
                <Phone size={18} aria-hidden /> {NAP.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-md">What customers say</h2>
            <ReviewGrid reviews={reviews} tone="dark" />
          </div>
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">iMac repair cost Dubai. FAQ</h2>
          <FAQAccordion items={FAQS} injectSchema tone="dark" />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[22px] font-bold mb-md">Related iMac services</h2>
          <div className="flex flex-wrap gap-sm">
            {[
              { label: "iMac Repair Dubai", href: "/imac-repair-dubai" },
              { label: "iMac Screen Repair Dubai", href: "/imac-screen-repair-dubai" },
              { label: "Mac Repair Cost Dubai", href: "/mac-repair-cost-dubai" },
              { label: "iMac Data Recovery Dubai", href: "/imac-data-recovery-dubai" },
              { label: "Mac Repair Dubai", href: "/mac-repair-dubai" },
            ].map(({ label, href }) => (
              <a key={href} href={href} className="border border-border rounded-md px-md py-xs text-[14px] hover:bg-bg-card transition-colors">{label}</a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-lg">Find us. Concord Tower, Dubai Media City</h2>
          <LocationBlock tone="dark" />
        </section>
      </div>
      <RelatedArticles path="/imac-repair-cost-dubai" />
    </PageShell>
  );
}
