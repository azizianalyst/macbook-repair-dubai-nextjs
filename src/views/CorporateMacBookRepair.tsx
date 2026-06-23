"use client";
import { Building2, Clock, Shield, Users, Phone, MessageCircle, CheckCircle2, FileText, Truck } from "lucide-react";
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

const SERVICES = [
  { icon: Truck,     label: "On-site collection & return",   body: "We collect from your office, repair overnight, and return by the next morning. No staff downtime, no devices left unattended in public." },
  { icon: Clock,     label: "Priority same-day turnaround",  body: "Corporate accounts get priority scheduling, screen, battery, keyboard, and trackpad repairs completed the day we collect." },
  { icon: Users,     label: "Multi-device batch repair",     body: "Bring in or schedule pickup of 3–20 MacBooks at once. 15% labour discount on 3+ devices in one booking." },
  { icon: FileText,  label: "Consolidated VAT invoices",     body: "Single invoice per batch repair with asset serial numbers, repair descriptions, and part costs, ready for your accounts team." },
  { icon: Shield,    label: "Warranty of up to 12 months",   body: "Every device repaired under corporate account carries the same written warranty of up to 12 months as retail customers." },
  { icon: Building2, label: "Dedicated WhatsApp line",       body: "A direct WhatsApp number for your IT manager or office admin, no queuing, no call centre, direct to the technician." },
];

const CLIENTS = [
  "Media agencies (Dubai Media City, JLT)",
  "Law firms (DIFC, Downtown Dubai)",
  "Architecture and design studios (Business Bay)",
  "Tech startups (Dubai Internet City)",
  "Trading companies (Deira, Bur Dubai)",
  "Schools and training centres (various)",
];

const REPAIRS = [
  { label: "MacBook screen replacement",   price: "From AED 499",  note: "All Air and Pro models, same-day for most" },
  { label: "MacBook battery replacement",  price: "From AED 450",  note: "3-month warranty, 80% capacity guarantee" },
  { label: "MacBook keyboard replacement", price: "From AED 550",  note: "Butterfly and scissor, US and UK layouts" },
  { label: "MacBook logic board repair",   price: "From AED 800",  note: "Component-level, 2–5 business days" },
  { label: "macOS reinstall / migration",  price: "From AED 200",  note: "Clean install + data migration to replacement device" },
  { label: "Annual maintenance check",     price: "AED 150/device", note: "Fan clean, thermal paste, battery health report" },
];

const FAQS = [
  { q: "Do you offer corporate MacBook repair in Dubai?",
    a: "Yes, corporate accounts with office collection and return, priority same-day turnaround, consolidated VAT invoices, and a 15% multi-device labour discount. We serve companies in Dubai Media City, JLT, DIFC, Downtown Dubai, Business Bay, and Dubai Internet City. WhatsApp 055 741 3706 to set up a corporate account." },
  { q: "Can you repair multiple MacBooks at once for our office?",
    a: "Yes, we handle batches of 3 to 20 MacBooks in one booking. One collection, one return, one VAT invoice listing all device serial numbers, repair types, and costs. 15% labour discount applied automatically to batches of 3 or more devices." },
  { q: "Do you come to our office to collect MacBooks for repair?",
    a: "Yes, free office collection and return across all Dubai Mainland commercial areas. WhatsApp 055 741 3706 with your office address, device count, and fault descriptions. We schedule a collection time that minimises team disruption." },
  { q: "How fast can you repair a fleet of office MacBooks?",
    a: "Screen, battery, keyboard, and trackpad repairs are same-day, devices collected in the morning, repaired, and returned the following morning. Logic board repairs take 2–5 business days. We prioritise corporate collections to minimise staff downtime." },
  { q: "Can you provide VAT invoices for corporate MacBook repair?",
    a: "Yes, all corporate repairs include a consolidated VAT-compliant invoice with each device's serial number, repair type, parts used, and cost. Invoices are issued in AED and can be sent by email to your accounts team." },
  { q: "Do you offer an annual MacBook maintenance contract for companies?",
    a: "Yes, the Annual Maintenance Contract (AMC) covers scheduled servicing, battery health checks, fan cleaning and thermal paste replacement, priority repair scheduling, and discounted parts. Pricing depends on fleet size. See /annual-maintenance-contract-dubai or WhatsApp for a quote." },
  { q: "What areas in Dubai do you collect corporate MacBooks from?",
    a: "Dubai Media City, JLT, JBR, Downtown Dubai, Business Bay, DIFC, Jumeirah Lake Towers, Al Quoz, Deira, Bur Dubai, Dubai Internet City, Dubai Silicon Oasis, and all Dubai Mainland commercial zones. Collection is free." },
];

const FEATURED_REVIEW_INDEXES = [4, 9, 14, 20, 25];

export default function CorporateMacBookRepair() {
  const reviews = FEATURED_REVIEW_INDEXES.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);

  useSeo({
    title: "Corporate MacBook Repair Dubai. Fleet Service, VAT Invoice | AMC Available",
    description:
      "Corporate MacBook repair Dubai. Office collection & return, same-day turnaround, VAT invoices, 15% multi-device discount. AMC available. Call 055 741 3706.",
    path: "/corporate-macbook-repair-dubai",
  });

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          image={undefined}
          imageAlt="Corporate MacBook repair Dubai, office fleet service"
          variant="device"
          tone="dark"
          eyebrow="Corporate MacBook repair · Dubai · Fleet service"
          title="Corporate MacBook Repair Dubai"
          subtitle="Office collection & return. Same-day turnaround. VAT invoices. 15% multi-device discount. AMC available. Concord Tower, Media City."
        >
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Building2 size={14} aria-hidden /> Corporate accounts available</span>
            <span>·</span>
            <span>3+ devices = 15% off labour</span>
            <span>·</span>
            <span>VAT invoices issued</span>
          </p>
        </Hero>

        <USPStrip tone="dark" />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: "MacBook Repair Dubai", path: "/" }, { name: "Corporate MacBook Repair", path: "/corporate-macbook-repair-dubai" }]} />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <QuickAnswer
            tone="dark"
            question="Do you offer corporate MacBook repair in Dubai?"
            answer="Yes, corporate MacBook repair in Dubai with office collection and return, same-day turnaround for common repairs, consolidated VAT invoices per batch, and 15% labour discount for 3+ devices. We serve companies in Media City, JLT, DIFC, Downtown, Business Bay, and all Dubai Mainland. WhatsApp 055 741 3706."
          />
        </section>

        {/* Services */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Corporate MacBook repair services</h2>
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3 mt-lg">
            {SERVICES.map(({ icon: Icon, label, body }) => (
              <article key={label} className="border border-border bg-bg-card rounded-md p-lg">
                <Icon size={24} className="text-accent mb-sm" aria-hidden />
                <h3 className="text-[16px] font-bold mb-sm">{label}</h3>
                <p className="text-[14px] text-text-muted leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-md">Corporate repair pricing</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[14px] border-collapse">
                <thead>
                  <tr className="border-b border-border text-left text-text-muted">
                    <th className="py-sm pr-lg font-semibold">Repair</th>
                    <th className="py-sm pr-lg font-semibold">Single device</th>
                    <th className="py-sm font-semibold">3+ devices (15% off labour)</th>
                  </tr>
                </thead>
                <tbody>
                  {REPAIRS.map((row) => (
                    <tr key={row.label} className="border-b border-border">
                      <td className="py-sm pr-lg font-medium">{row.label}</td>
                      <td className="py-sm pr-lg text-accent font-semibold">{row.price}</td>
                      <td className="py-sm text-text-muted">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-text-muted mt-sm">All prices exclude VAT. VAT invoice issued per batch. Prices confirmed in writing before any work starts.</p>
          </div>
        </section>

        {/* Who we work with */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">Companies we work with in Dubai</h2>
          <div className="grid gap-sm sm:grid-cols-2 lg:grid-cols-3">
            {CLIENTS.map((c) => (
              <div key={c} className="flex items-center gap-sm border border-border bg-bg-card rounded-md p-md">
                <CheckCircle2 size={16} className="text-accent shrink-0" aria-hidden />
                <p className="text-[14px]">{c}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <div className="border border-border bg-bg-card rounded-md p-xl flex flex-col md:flex-row md:items-center gap-lg">
            <div className="flex-1">
              <h2 className="text-[22px] font-bold mb-sm">Set up a corporate MacBook repair account</h2>
              <p className="text-[15px] text-text-muted">Office collection · Priority turnaround · VAT invoices · 15% multi-device discount · AMC available.</p>
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
            <h2 className="text-[28px] md:text-[32px] mb-md">What our corporate clients say</h2>
            <ReviewGrid reviews={reviews} tone="dark" />
          </div>
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">Corporate MacBook repair Dubai. FAQ</h2>
          <FAQAccordion items={FAQS} injectSchema tone="dark" />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[22px] font-bold mb-md">Related corporate services</h2>
          <div className="flex flex-wrap gap-sm">
            {[
              { label: "Annual Maintenance Contract Dubai", href: "/annual-maintenance-contract-dubai" },
              { label: "MacBook Repair Dubai", href: "/" },
              { label: "Same-Day MacBook Repair", href: "/same-day-macbook-repair-dubai" },
              { label: "Mac Repair Dubai", href: "/mac-repair-dubai" },
              { label: "MacBook Screen Repair Dubai", href: "/macbook-screen-repair-dubai" },
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
      <RelatedArticles path="/corporate-macbook-repair-dubai" />
    </PageShell>
  );
}
