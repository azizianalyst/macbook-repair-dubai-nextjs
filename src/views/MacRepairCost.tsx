"use client";
import { Laptop, Monitor, Cpu, Battery, HardDrive, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
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

type RepairRow = { label: string; macbook: string; imac: string; mac_mini: string; notes: string };

const REPAIRS: RepairRow[] = [
  { label: "Screen replacement",    macbook: "AED 499–1,499", imac: "AED 699–1,800", mac_mini: "N/A",         notes: "MacBook varies by model; iMac varies by size" },
  { label: "Battery replacement",   macbook: "AED 450–750",   imac: "N/A",           mac_mini: "N/A",         notes: "3-month warranty, 80% capacity guarantee" },
  { label: "Logic board repair",    macbook: "AED 800–2,500", imac: "AED 900–2,500", mac_mini: "AED 800–2,000", notes: "Component-level, no board swapping" },
  { label: "SSD upgrade/repair",    macbook: "AED 500–1,200", imac: "AED 450–1,200", mac_mini: "AED 400–1,000", notes: "M-series SSD is soldered, repair not upgrade" },
  { label: "RAM upgrade",           macbook: "N/A (M-series soldered)", imac: "AED 300–700", mac_mini: "AED 200–600", notes: "Intel models only; M-series RAM is soldered" },
  { label: "Keyboard replacement",  macbook: "AED 550–900",   imac: "N/A",           mac_mini: "N/A",         notes: "Butterfly and scissor, US and UK layouts" },
  { label: "Data recovery",         macbook: "AED 500–2,500", imac: "AED 800–2,500", mac_mini: "AED 500–2,000", notes: "No-fix no-charge; T2/Apple Silicon requires Apple ID" },
  { label: "Annual maintenance",    macbook: "AED 150",       imac: "AED 200",       mac_mini: "AED 150",     notes: "Fan clean, thermal paste, battery health report" },
];

const FAQS = [
  { q: "How much does Mac repair cost in Dubai?",
    a: "Mac repair cost in Dubai: MacBook screen from AED 499, battery from AED 450, logic board repair from AED 800, keyboard from AED 550. iMac screen from AED 699, logic board from AED 900. Mac mini logic board from AED 800. Diagnosis is always free. WhatsApp 055 741 3706 for a specific model quote." },
  { q: "Is it worth repairing a MacBook in Dubai vs buying new?",
    a: "Generally yes if the repair is under 40–50% of replacement value. A MacBook screen repair at AED 499–800 vs a new MacBook Air at AED 4,000+ is almost always worth it. Logic board repair at AED 800–1,500 on a relatively recent model is also worth it. We give you an honest recommendation after free diagnosis." },
  { q: "How much does MacBook screen repair cost in Dubai?",
    a: "MacBook screen repair costs AED 499–1,499 in Dubai depending on model: MacBook Air M1/M2/M3 AED 499–799; MacBook Pro 13\" AED 699–999; MacBook Pro 14\" AED 999–1,299; MacBook Pro 16\" AED 1,099–1,499. Same-day for most models." },
  { q: "How much does MacBook battery replacement cost in Dubai?",
    a: "MacBook battery replacement costs AED 450–750 in Dubai: MacBook Air M1–M4 AED 450–550; MacBook Pro 13\" M1/M2 AED 500–600; MacBook Pro 14\"/16\" AED 600–750. 3-month warranty with 80% capacity guarantee. Same-day service." },
  { q: "How much does Mac logic board repair cost in Dubai?",
    a: "Mac logic board repair costs AED 800–2,500 in Dubai depending on fault and model. Component-level repair (not board replacement), we diagnose the specific chip or component at fault. MacBook AED 800–2,500; iMac AED 900–2,500; Mac mini AED 800–2,000. 3–7 business days. Free diagnosis." },
  { q: "Do you charge for Mac diagnosis in Dubai?",
    a: "No, diagnosis is always free. Walk in to Concord Tower, Dubai Media City or schedule free pickup across Dubai Mainland. You receive a written quote with the exact fault, parts, and cost before any work starts. No obligation to proceed." },
  { q: "How long does Mac repair take in Dubai?",
    a: "Screen, battery, keyboard, same day or next day. Logic board repair, 3–7 business days. Data recovery, 1–7 days depending on failure. We send WhatsApp updates throughout and notify you when complete." },
];

const FEATURED_REVIEW_INDEXES = [1, 8, 15, 22];

export default function MacRepairCost() {
  const reviews = FEATURED_REVIEW_INDEXES.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);

  useSeo({
    title: "Mac Repair Cost Dubai. MacBook, iMac, Mac mini | 2024 Prices",
    description:
      "Mac repair cost in Dubai. MacBook screen from AED 499, battery from AED 450, logic board from AED 800. iMac screen from AED 699. Free diagnosis. Call 055 741 3706.",
    path: "/mac-repair-cost-dubai",
  });

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          image={undefined}
          imageAlt="Mac repair cost Dubai. MacBook, iMac, Mac mini prices"
          variant="device"
          tone="dark"
          eyebrow="Mac repair cost · Dubai · MacBook · iMac · Mac mini"
          title="Mac Repair Cost Dubai"
          subtitle="MacBook screen from AED 499. Battery from AED 450. Logic board repair from AED 800. iMac screen from AED 699. Free diagnosis. Concord Tower, Media City."
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
          <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: "Mac Repair Dubai", path: "/mac-repair-dubai" }, { name: "Mac Repair Cost Dubai", path: "/mac-repair-cost-dubai" }]} />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <QuickAnswer
            tone="dark"
            question="How much does Mac repair cost in Dubai?"
            answer="Mac repair in Dubai: MacBook screen AED 499–1,499, battery AED 450–750, logic board repair AED 800–2,500. iMac screen AED 699–1,800. Mac mini logic board AED 800–2,000. Diagnosis always free. Written quote before any work starts. Concord Tower, Dubai Media City. Call 055 741 3706."
          />
        </section>

        {/* Pricing comparison table */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Mac repair prices by device. Dubai</h2>
          <div className="overflow-x-auto mt-lg">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="border-b border-border text-left text-text-muted">
                  <th className="py-sm pr-lg font-semibold">Repair</th>
                  <th className="py-sm pr-lg font-semibold">MacBook</th>
                  <th className="py-sm pr-lg font-semibold">iMac</th>
                  <th className="py-sm pr-lg font-semibold">Mac mini</th>
                  <th className="py-sm font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {REPAIRS.map((row) => (
                  <tr key={row.label} className="border-b border-border">
                    <td className="py-sm pr-lg font-medium">{row.label}</td>
                    <td className="py-sm pr-lg text-accent font-semibold">{row.macbook}</td>
                    <td className="py-sm pr-lg text-accent font-semibold">{row.imac}</td>
                    <td className="py-sm pr-lg text-accent font-semibold">{row.mac_mini}</td>
                    <td className="py-sm text-text-muted">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-text-muted mt-sm">All prices exclude VAT. Diagnosis free. Written quote before work starts. Warranty of up to 12 months.</p>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <div className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-xl flex flex-col md:flex-row md:items-center gap-lg">
            <div className="flex-1">
              <h2 className="text-[22px] font-bold mb-sm">Get a free Mac repair quote. Dubai</h2>
              <p className="text-[15px] text-text-muted">Walk in or book free pickup. Free diagnosis, written quote, no obligation.</p>
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
          <h2 className="text-[28px] md:text-[32px] mb-md">Mac repair cost Dubai. FAQ</h2>
          <FAQAccordion items={FAQS} injectSchema tone="dark" />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[22px] font-bold mb-md">Related services</h2>
          <div className="flex flex-wrap gap-sm">
            {[
              { label: "MacBook Repair Dubai", href: "/" },
              { label: "iMac Repair Dubai", href: "/imac-repair-dubai" },
              { label: "iMac Repair Cost Dubai", href: "/imac-repair-cost-dubai" },
              { label: "Mac Repair Dubai", href: "/mac-repair-dubai" },
              { label: "MacBook Screen Repair Dubai", href: "/macbook-screen-repair-dubai" },
              { label: "MacBook Battery Replacement Dubai", href: "/macbook-battery-replacement-dubai" },
              { label: "MacBook Logic Board Repair Dubai", href: "/macbook-logic-board-repair-dubai" },
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
      <RelatedArticles path="/mac-repair-cost-dubai" />
    </PageShell>
  );
}
