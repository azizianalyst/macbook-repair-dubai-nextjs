"use client";
import { Star, MessageCircle, Phone, ShieldCheck, Check, Building2, Calendar, Headphones } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { topicForPath } from "@/lib/page-images";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema, breadcrumbs, itemList } from "@/lib/schema";
import { NAP } from "@/content/site";

const INCLUDED = [
  { title: "Scheduled servicing", body: "Planned check-ups for every Mac, iPhone and iPad in your fleet - no waiting for something to break." },
  { title: "Battery-health checks", body: "Cycle counts and capacity logged each visit, with replacement before swelling or shutdowns hit." },
  { title: "Dust & thermal cleaning", body: "Fans and heatsinks cleared and re-pasted to stop throttling in Dubai's heat." },
  { title: "Hardware & software support", body: "macOS updates, driver and app fixes, storage clean-ups and performance tuning." },
  { title: "Priority repairs", body: "Contract devices jump the queue - same-day turnaround on most in-stock parts." },
  { title: "Discounted parts & labour", body: "Preferential pricing on any out-of-scope repair or replacement part." },
  { title: "Remote assistance", body: "Phone, WhatsApp and remote-desktop support for quick software and account fixes." },
  { title: "Backup & recovery support", body: "Time Machine and cloud-backup setup, plus priority data recovery if a drive fails." },
];

const PLANS = [
  { name: "Solo & freelancer", body: "1-3 devices. Two scheduled visits a year, priority repairs and remote support for individuals and home offices.", best: "Freelancers, home studios" },
  { name: "Business", body: "4-25 devices. Quarterly on-site servicing, asset logging, priority turnaround and a named technician.", best: "SMEs, agencies, clinics" },
  { name: "Enterprise & education", body: "25+ devices. Custom SLA, monthly visits, loaner units, and a single point of contact for your IT team.", best: "Schools, large offices" },
];

const FAQS = [
  { q: "What is an Apple Annual Maintenance Contract (AMC) in Dubai?",
    a: "An AMC is a yearly agreement that keeps your Apple devices serviced and supported for a fixed annual fee. It covers scheduled cleaning, battery and health checks, software upkeep, priority repairs and discounted parts - so you avoid surprise downtime and surprise bills." },
  { q: "How much does an AMC cost?",
    a: "Pricing is per device and scales with fleet size and the level of cover you need. Solo plans start low for 1-3 devices; business and enterprise plans are quoted after a free audit of your devices. WhatsApp us your device count for a same-day quote." },
  { q: "Does the AMC include spare parts and repairs?",
    a: "Scheduled servicing, diagnostics and remote support are included. Physical replacement parts (batteries, screens, SSDs) are charged at a discounted contract rate, and contract devices always get priority turnaround." },
  { q: "Can you service mixed fleets - Mac, iPhone, iPad and Windows?",
    a: "Yes. Our AMC covers MacBook, iMac, Mac mini, Mac Studio, Mac Pro, iPhone and iPad, and we also maintain Windows laptops from Lenovo, Dell, HP and Microsoft Surface alongside your Apple gear." },
  { q: "Do you come to our office?",
    a: "Yes - on-site servicing and free pickup/delivery across Dubai mainland are part of every business and enterprise plan. We work around your schedule to avoid disrupting the team." },
  { q: "How do we start?",
    a: "Send us your device list on WhatsApp or call 055 741 3706. We do a free audit, recommend the right plan, and put it in writing - no obligation until you approve." },
];

export default function AnnualMaintenanceContract() {
  useSeo(
    {
      title: "Apple AMC Dubai - Annual Maintenance Contract for Mac & iPhone",
      description:
        "Annual Maintenance Contract (AMC) for Apple devices in Dubai. Scheduled servicing, battery checks, priority repairs, discounted parts & on-site support for businesses. Call 055 741 3706.",
      path: "/annual-maintenance-contract-dubai",
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "Apple Annual Maintenance Contract Dubai",
        price: 0,
        timeline: "Annual contract",
        warranty: "P1Y",
        url: "/annual-maintenance-contract-dubai",
        description: "Annual maintenance contracts for Apple and Windows device fleets in Dubai - scheduled servicing, priority repairs, discounted parts and on-site support.",
      }),
      itemList({
        name: "What an Apple AMC includes",
        items: INCLUDED.map((i) => ({ name: i.title, url: "/annual-maintenance-contract-dubai", description: i.body })),
      }),
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "Apple Repair", path: "/apple-repair-dubai" },
        { name: "Annual Maintenance Contract", path: "/annual-maintenance-contract-dubai" },
      ]),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image={topicForPath("/annual-maintenance-contract-dubai")?.src}
        imageAlt={topicForPath("/annual-maintenance-contract-dubai")?.alt}
        variant="service"
        tone="dark"
        eyebrow="Annual Maintenance Contract · Dubai"
        title="Apple Annual Maintenance Contract (AMC) in Dubai"
        subtitle="Keep every Mac, iPhone and iPad in your business serviced, healthy and repaired-on-priority for one predictable yearly fee. Scheduled visits, on-site support and discounted parts."
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> 5.0 · 215+ reviews</span>
          <span>·</span>
          <span>On-site across Dubai</span>
          <span>·</span>
          <span>21+ years on Apple hardware</span>
        </p>
      </Hero>

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "Apple Repair", path: "/apple-repair-dubai" },
          { name: "Annual Maintenance Contract", path: "/annual-maintenance-contract-dubai" },
        ]} />
      </section>

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <p className="text-[18px] leading-relaxed max-w-[75ch] mb-md">
          An <strong>Annual Maintenance Contract</strong> turns unpredictable repair bills and surprise downtime into one fixed yearly cost. Your devices are serviced on a schedule, problems are caught before they stop work, and when something does break, contract devices go to the front of the queue. Ideal for agencies, clinics, schools and any Dubai business that runs on Apple.
        </p>
      </section>

      {/* What's included */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <ShieldCheck size={28} className="text-accent" aria-hidden /> What every AMC includes
          </h2>
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-4">
            {INCLUDED.map((i) => (
              <article key={i.title} className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[17px] font-bold mb-sm flex items-start gap-2"><Check size={18} className="text-accent mt-1 shrink-0" aria-hidden /> {i.title}</h3>
                <p className="text-[14px] text-text-muted leading-relaxed m-0">{i.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
          <Building2 size={28} className="text-accent" aria-hidden /> Plans that scale with your fleet
        </h2>
        <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
          Three starting points - every contract is tailored after a free device audit. Pay per device, scale up or down as your team changes.
        </p>
        <div className="grid gap-md md:grid-cols-3">
          {PLANS.map((p) => (
            <article key={p.name} className="border border-border bg-bg-card rounded-md p-lg flex flex-col">
              <h3 className="text-[18px] font-bold mb-sm">{p.name}</h3>
              <p className="text-[15px] text-text-muted leading-relaxed mb-md flex-1">{p.body}</p>
              <p className="text-[13px] mono text-accent">Best for: {p.best}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <Calendar size={28} className="text-accent" aria-hidden /> Why businesses sign an AMC
          </h2>
          <div className="grid gap-md md:grid-cols-3">
            {[
              { title: "No surprise downtime", body: "Failing batteries and clogged fans are caught on schedule, not when a laptop dies mid-deadline." },
              { title: "Predictable budget", body: "One annual figure for servicing and support, plus discounted rates on any parts you do need." },
              { title: "One trusted partner", body: "The same workshop that's serviced Apple hardware in Dubai since 2004 - a named technician, no call centre." },
            ].map((c) => (
              <article key={c.title} className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm flex items-center gap-2"><Headphones size={18} className="text-accent" aria-hidden /> {c.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed m-0">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">AMC FAQ</h2>
        <FAQAccordion items={FAQS} injectSchema tone="dark" />
      </section>

      {/* Location */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg">Where we're based</h2>
        <LocationBlock tone="dark" />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl mb-3xl">
        <div className="relative overflow-hidden border border-border bg-bg-card rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <div aria-hidden className="pointer-events-none absolute -top-16 -right-10 h-[20rem] w-[20rem] rounded-full bg-accent/15 blur-3xl" />
          <h2 className="relative text-text text-[28px] md:text-[32px] max-w-[30ch]">Send your device count - get an AMC quote the same day</h2>
          <p className="relative text-text-muted text-[16px] max-w-[60ch]">
            Free device audit, written plan, no obligation. WhatsApp the number and types of devices and we'll recommend the right level of cover.
          </p>
          <div className="relative flex flex-wrap gap-sm">
            <Button asChild variant="whatsapp" size="lg">
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden /> Message on WhatsApp
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={`tel:${NAP.phoneE164}`}>
                <Phone aria-hidden /> {NAP.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </PageShell>
  );
}
