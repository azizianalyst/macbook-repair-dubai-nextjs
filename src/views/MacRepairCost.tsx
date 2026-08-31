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
  { label: "Screen replacement",    macbook: "On request", imac: "On request", mac_mini: "N/A",         notes: "MacBook varies by model; iMac varies by size" },
  { label: "Battery replacement",   macbook: "On request",   imac: "N/A",           mac_mini: "N/A",         notes: "3-month warranty, 80% capacity guarantee" },
  { label: "Logic board repair",    macbook: "On request", imac: "On request", mac_mini: "On request", notes: "Component-level, no board swapping" },
  { label: "SSD upgrade/repair",    macbook: "On request", imac: "On request", mac_mini: "On request", notes: "M-series SSD is soldered, repair not upgrade" },
  { label: "RAM upgrade",           macbook: "N/A (M-series soldered)", imac: "On request", mac_mini: "On request", notes: "Intel models only; M-series RAM is soldered" },
  { label: "Keyboard replacement",  macbook: "On request",   imac: "N/A",           mac_mini: "N/A",         notes: "Butterfly and scissor, US and UK layouts" },
  { label: "Data recovery",         macbook: "On request", imac: "On request", mac_mini: "On request", notes: "No-fix no-charge; T2/Apple Silicon requires Apple ID" },
  { label: "Annual maintenance",    macbook: "On request",       imac: "On request",       mac_mini: "On request",     notes: "Fan clean, thermal paste, battery health report" },
];

const FAQS = [
  { q: "How much does Mac repair cost in Dubai?",
    a: "It depends on the device, the exact model and which part failed - a 13-inch Air screen and a 16-inch Pro screen are different jobs with different panels. Diagnosis is always free, and you get a written quote before anything is opened up. WhatsApp 055 741 3706 with your model and the fault for a specific number." },
  { q: "Is it worth repairing a MacBook in Dubai vs buying new?",
    a: "Our rule of thumb: if the repair comes to less than 40-50% of what the machine is worth replaced, repair wins. A screen or battery on a machine that is otherwise healthy almost always clears that bar, and so does board-level work on a recent model. We give you an honest recommendation after the free diagnosis - including when the answer is not to repair it." },
  { q: "How much does MacBook screen repair cost in Dubai?",
    a: "It scales with the panel: a MacBook Air M1/M2/M3 is the least expensive, a Pro 13-inch sits above it, and the 14-inch and 16-inch Liquid Retina XDR panels are the most expensive because the part itself costs more. Tell us the model and we will quote it. Same-day for most models." },
  { q: "How much does MacBook battery replacement cost in Dubai?",
    a: "It follows cell size: a MacBook Air is the cheapest, a Pro 13-inch is a step up, and the 14-inch and 16-inch Pro carry the largest cells. Every replacement includes BMS re-pairing, a 3-month warranty and an 80% capacity guarantee. Same-day service - message us the model for a number." },
  { q: "How much does Mac logic board repair cost in Dubai?",
    a: "It depends entirely on which component failed - that is why we quote after diagnosis rather than before. We repair at component level rather than swapping the whole board, which is what keeps it well below Apple\u2019s board-replacement route. Typically 3-7 business days. Free diagnosis, no-fix no-charge." },
  { q: "Do you charge for Mac diagnosis in Dubai?",
    a: "No, diagnosis is always free. Walk in to Concord Tower, Dubai Media City or schedule free pickup across Dubai Mainland. You receive a written quote with the exact fault, parts, and cost before any work starts. No obligation to proceed." },
  { q: "How long does Mac repair take in Dubai?",
    a: "Screen, battery, keyboard, same day or next day. Logic board repair, 3–7 business days. Data recovery, 1–7 days depending on failure. We send WhatsApp updates throughout and notify you when complete." },
];

const FEATURED_REVIEW_INDEXES = [1, 8, 15, 22];

export default function MacRepairCost() {
  const reviews = FEATURED_REVIEW_INDEXES.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);

  useSeo({
    title: "Mac Repair Cost Dubai. MacBook, iMac & Mac mini 2026",
    description:
      "Mac repair cost in Dubai. MacBook screen, battery and logic board; iMac screen. Free diagnosis, written quote before any work. Call 055 741 3706.",
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
          subtitle="Screen, battery, logic board and data recovery for MacBook, iMac and Mac mini. Free diagnosis, written quote before any work, no-fix no-charge. Concord Tower, Media City."
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
            answer="Mac repair cost in Dubai depends on the device, the model and which part failed. We diagnose free, then send a written quote on WhatsApp before any work starts - approve it, decline it, or take the machine back at no charge. Component-level board repair rather than board swaps. Concord Tower, Dubai Media City. Call 055 741 3706."
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
