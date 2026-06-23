"use client";
import {
  Zap, MessageCircle, Phone,
  ShieldCheck, Clock, Check,
  AlertTriangle, Wrench, ChevronRight,
} from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { Button } from "@/components/ui/button";
import { useSeo, preloadFromHero } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema } from "@/lib/schema";
import { NAP } from "@/content/site";

const IMG = {
  hero: {
    src: "/images/real/lab/macbook-air-lid-dubai.jpg",
    alt: "MacBook Air charging port repair at MacBook Repair Dubai, Dubai Media City workshop",
  },
};

type PortGenRow = {
  chip: string;
  portType: string;
  typicalFault: string;
  href: string;
};

const PORT_GENS: PortGenRow[] = [
  {
    chip: "Intel (2018-2020)",
    portType: "USB-C (Thunderbolt 3)",
    typicalFault: "Corrosion, broken tab",
    href: "/macbook-air-intel-charging-port-repair-dubai",
  },
  {
    chip: "M1 (2020)",
    portType: "USB-C (USB 4)",
    typicalFault: "Corrosion, debris",
    href: "/macbook-air-m1-repair-dubai",
  },
  {
    chip: "M2 / M3 (2022-2024)",
    portType: "MagSafe 3 + USB-C",
    typicalFault: "MagSafe board fault, USB-C corrosion",
    href: "/macbook-air-m2-charging-port-repair-dubai",
  },
  {
    chip: "M4 (2025)",
    portType: "MagSafe 3 + USB-C",
    typicalFault: "New chassis, 1-2 day turnaround",
    href: "/macbook-air-m4-repair-dubai",
  },
];

type PricingRow = {
  model: string;
  service: string;
  price: number;
  timeline: string;
};

const PRICING: PricingRow[] = [
  { model: 'Air 13" Intel 2018-2020', service: "USB-C board replacement", price: 280, timeline: "Same day" },
  { model: 'Air 13" M1 2020',          service: "USB-C board replacement", price: 280, timeline: "Same day" },
  { model: 'Air 13" M2 2022',          service: "MagSafe 3 board",         price: 220, timeline: "Same day" },
  { model: 'Air 15" M2 2023',          service: "MagSafe 3 board",         price: 220, timeline: "Same day" },
  { model: 'Air 13" M3 2024',          service: "MagSafe 3 board",         price: 220, timeline: "Same day" },
  { model: 'Air 15" M3 2024',          service: "MagSafe 3 board",         price: 220, timeline: "Same day" },
  { model: 'Air 13" M4 2025',          service: "MagSafe 3 board",         price: 250, timeline: "1-2 days" },
  { model: 'Air 15" M4 2025',          service: "MagSafe 3 board",         price: 280, timeline: "1-2 days" },
];

type CauseCard = { title: string; body: string };

const CAUSES: CauseCard[] = [
  {
    title: "MagSafe 3 board failure (M2 and later)",
    body: "The MagSafe 3 connector on M2, M3, and M4 Air is a small daughter board connected by a ribbon cable. The IC on this board fails from overvoltage spikes or connector stress. Symptoms: MagSafe LED does not light, no charge, charger falls out easily. Board replacement from AED 220.",
  },
  {
    title: "Corrosion inside the USB-C port from Dubai humidity",
    body: "USB-C ports have no moving parts to exclude moisture. Dubai summer humidity (80%+) combined with air-conditioned offices creates condensation inside the port. Green or white corrosion on the contacts stops charging. We clean the port first; if contacts are damaged the board is replaced.",
  },
  {
    title: "Bent or broken USB-C connector tab (dropped cable)",
    body: "The small alignment tab inside the USB-C port breaks if a cable is yanked out sideways or the laptop is dropped while plugged in. A broken tab means the cable sits loose and no longer makes contact reliably. USB-C board replacement is the fix. AED 280 same-day.",
  },
  {
    title: "Debris inside the USB-C port (lint, sand)",
    body: "Pockets, bags, and Dubai's sandy environment push lint and fine particles into the USB-C port over time. Packed debris lifts the cable slightly off the contacts. Try cleaning with a non-metal dental pick or compressed air before booking. If cleaning does not restore charging, book a diagnosis.",
  },
];

type FaqItem = { q: string; a: string };

const FAQS: FaqItem[] = [
  {
    q: "How much does MacBook Air charging port repair cost in Dubai?",
    a: "MacBook Air charging port repair at MacBook Repair Dubai starts from AED 220. USB-C board replacement for Intel and M1 models costs AED 280. MagSafe 3 board replacement for M2, M3, and M4 models costs AED 220 to AED 280. Most repairs are completed same-day.",
  },
  {
    q: "How long does MacBook Air charging port repair take?",
    a: "Same-day 1 to 2 hours for Intel, M1, M2, and M3 models. M4 Air repairs take 1 to 2 business days as parts supply builds for the new 2025 chassis.",
  },
  {
    q: "Does cleaning the USB-C port fix a non-charging MacBook Air?",
    a: "Sometimes. Debris (lint, sand) is the most common cause on USB-C models and can often be cleared with a non-metal dental pick or a short burst of compressed air. Try cleaning first before booking a repair. If the port is physically damaged or corroded inside, cleaning will not restore charging and board replacement is needed.",
  },
  {
    q: "Can you repair just the MagSafe 3 port without replacing the whole board?",
    a: "The MagSafe 3 connector on M2, M3, and M4 Air is a separate small board connected to the logic board by a ribbon cable. We replace the MagSafe board, which does not require touching the logic board. AED 220, same-day.",
  },
  {
    q: "My MacBook Air charges from one USB-C port but not the other. What is wrong?",
    a: "On Intel and M1 models, each USB-C port has its own trace on the shared charging board. A fault on one trace can kill one port while the other remains functional. We test both ports during free diagnosis, then repair or replace the board accordingly.",
  },
];

function CallButtons({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-sm">
      <Button asChild variant="whatsapp" size="lg">
        <a
          href={`${NAP.whatsappUrl}?text=${encodeURIComponent("Hi, MacBook Air charging port repair quote please. Model: ")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle aria-hidden /> WhatsApp Us
        </a>
      </Button>
      <Button asChild variant="outline" size="lg" className={dark ? "bg-white/10 text-white border-white/30 hover:bg-white/20" : ""}>
        <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call Now</a>
      </Button>
    </div>
  );
}

const aed = (n: number) => `AED ${n.toLocaleString()}`;

export default function MacBookAirChargingPortRepair() {
  useSeo(
    {
      title: "MacBook Air Charging Port Repair Dubai - MagSafe 3 and USB-C",
      description: "MacBook Air charging port repair Dubai. MagSafe 3 board (M2/M3/M4) from AED 220. USB-C port replacement (Intel/M1) from AED 280. Same-day 1-2 hours. 3-month warranty. Call 055 741 3706.",
      path: "/macbook-air-charging-port-repair-dubai",
      preloadImage: preloadFromHero(IMG.hero.src),
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "MacBook Air Charging Port Repair Dubai",
        price: 220,
        timeline: "Same day · 1-2 hours",
        warranty: "P3M",
        url: "/macbook-air-charging-port-repair-dubai",
        description: "MacBook Air charging port repair Dubai. MagSafe 3 board replacement (M2/M3/M4) from AED 220. USB-C port replacement (Intel/M1) from AED 280. Same-day service.",
      }),
    ],
  );

  return (
    <PageShell>
      <div className="-mb-[4rem] bg-bg text-text">

        {/* BREADCRUMB */}
        <div className="pt-[64px]" style={{ borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 py-[6px]">
            <BreadcrumbTrail tone="dark" trail={[
              { name: "Home", path: "/" },
              { name: "MacBook Repair", path: "/macbook-repair-dubai" },
              { name: "MacBook Air Repair", path: "/macbook-air-repair-dubai" },
              { name: "Charging Port Repair", path: "/macbook-air-charging-port-repair-dubai" },
            ]} />
          </div>
        </div>

        {/* HERO */}
        <Hero
          variant="device"
          tone="dark"
          eyebrow="MacBook Air charging port specialist · Dubai Media City · Same-day"
          title="MacBook Air Charging Port Repair Dubai - MagSafe 3 and USB-C"
          image={IMG.hero.src}
          imageAlt={IMG.hero.alt}
        >
          <p className="mt-md text-[15px] text-text-muted leading-relaxed max-w-[56ch]">
            MacBook Air charging port repair in Dubai covers every generation: USB-C board replacement for Intel and M1 models from AED 280, and MagSafe 3 board replacement for M2, M3, and M4 models from AED 220. Free diagnosis confirms the fault before any work begins. Same-day 1 to 2 hours on most models.
          </p>
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Zap size={16} className="text-accent" aria-hidden /> From AED 220</span>
            <span>·</span>
            <span>MagSafe 3 + USB-C</span>
            <span>·</span>
            <span>Same-day</span>
            <span>·</span>
            <span>Free diagnosis</span>
            <span>·</span>
            <span>3-month warranty</span>
          </p>
        </Hero>

        {/* USP STRIP */}
        <div style={{ borderBottom: "1px solid var(--color-border)" }}>
          <ul className="mx-auto max-w-content px-5 md:px-6 py-md flex flex-wrap justify-center gap-x-xl gap-y-sm">
            {[
              { Icon: Zap,         label: "From AED 220" },
              { Icon: Check,       label: "MagSafe 3 + USB-C" },
              { Icon: Clock,       label: "Same-day 1-2 hours" },
              { Icon: ShieldCheck, label: "Free diagnosis" },
              { Icon: ShieldCheck, label: "3-month warranty" },
              { Icon: Wrench,      label: "Independent Apple specialist since 2004" },
            ].map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-xs text-[14px] font-medium text-text">
                <Icon size={15} className="text-accent shrink-0" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* PORT TYPE BY CHIP */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <div className="text-center mb-[48px]">
            <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">
              By chip generation
            </p>
            <h2 className="text-center text-[36px] md:text-[48px] font-bold tracking-tight text-text leading-[1.1]">
              MacBook Air charging port by chip generation
            </h2>
            <p className="text-center mt-4 text-[16px] text-text-muted max-w-[54ch] mx-auto">
              Every Air generation uses a different charging system. Repair approach and cost differ accordingly.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-bg-card">
            <table className="w-full border-collapse text-left text-[14px] min-w-[580px]">
              <thead>
                <tr className="border-b border-border text-accent">
                  <th className="px-lg py-md font-semibold">Chip</th>
                  <th className="px-lg py-md font-semibold">Port type</th>
                  <th className="px-lg py-md font-semibold">Typical fault</th>
                  <th className="px-lg py-md font-semibold">Detail page</th>
                </tr>
              </thead>
              <tbody>
                {PORT_GENS.map((r) => (
                  <tr key={r.chip} className="border-b border-border last:border-0">
                    <td className="px-lg py-sm font-medium text-text">{r.chip}</td>
                    <td className="px-lg py-sm text-text-muted">{r.portType}</td>
                    <td className="px-lg py-sm text-text-muted">{r.typicalFault}</td>
                    <td className="px-lg py-sm">
                      <Link to={r.href} className="text-[13px] text-accent hover:underline whitespace-nowrap flex items-center gap-1">
                        View repair <ChevronRight size={13} aria-hidden />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* PRICING TABLE */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <div className="text-center mb-[48px]">
            <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">
              Transparent pricing
            </p>
            <h2 className="text-center text-[36px] md:text-[48px] font-bold tracking-tight text-text leading-[1.1]">
              MacBook Air charging port repair prices Dubai
            </h2>
            <p className="text-center mt-4 text-[16px] text-text-muted max-w-[52ch] mx-auto">
              Fixed prices. Free diagnosis before any work starts. No hidden fees.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-bg-card">
            <table className="w-full border-collapse text-left text-[14px] min-w-[520px]">
              <thead>
                <tr className="border-b border-border text-accent">
                  <th className="px-lg py-md font-semibold">Model</th>
                  <th className="px-lg py-md font-semibold">Service</th>
                  <th className="px-lg py-md font-semibold">Our price</th>
                  <th className="px-lg py-md font-semibold">Turnaround</th>
                </tr>
              </thead>
              <tbody>
                {PRICING.map((r) => (
                  <tr key={r.model + r.service} className="border-b border-border last:border-0">
                    <td className="px-lg py-sm font-medium text-text">{r.model}</td>
                    <td className="px-lg py-sm text-text-muted">{r.service}</td>
                    <td className="px-lg py-sm font-bold text-accent whitespace-nowrap">{aed(r.price)}</td>
                    <td className="px-lg py-sm text-text-muted">{r.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-md text-[13px] text-text-faint max-w-[72ch]">
            USB-C charging port is the same board as the Thunderbolt port on Intel and M1 models. Replacement is the only fix for a broken tab or corroded port. Free diagnosis confirms the fault before any work begins.
          </p>
          <div className="mt-xl flex justify-center"><CallButtons /></div>
        </section>

        {/* COMMON CAUSES */}
        <section
          className="mt-[96px] py-[80px]"
          style={{ background: "#2C3137", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
        >
          <div className="mx-auto max-w-content px-5 md:px-6">
            <div className="text-center mb-[48px]">
              <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent-bright font-semibold mb-4">
                Common causes
              </p>
              <h2 className="text-center text-[32px] md:text-[44px] font-bold tracking-tight text-white leading-[1.1]">
                Why MacBook Air charging ports fail in Dubai
              </h2>
              <p className="text-center mt-4 text-[16px] text-on-primary-muted max-w-[54ch] mx-auto">
                Four root causes cover the vast majority of charging port faults we see at the workshop.
              </p>
            </div>
            <div className="grid gap-x-xl gap-y-[40px] sm:grid-cols-2">
              {CAUSES.map((c) => (
                <div key={c.title} className="flex flex-col gap-sm">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/20 mb-xs">
                    <AlertTriangle size={22} className="text-accent-bright" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-[17px] font-semibold text-white">{c.title}</h3>
                  <p className="text-[15px] text-on-primary-muted leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
            <div className="lg:sticky lg:top-24 rounded-xl border border-border bg-bg-card p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">FAQ</p>
              <h2 className="text-[22px] font-bold tracking-tight text-text leading-snug mb-3">
                MacBook Air charging port questions
              </h2>
              <p className="text-[14px] text-text-muted leading-relaxed">
                Common questions about Air charging port repair in Dubai.
              </p>
              <div className="mt-5 pt-5 border-t border-border flex flex-col gap-2 text-[13px] text-text-muted">
                <span>From AED 220</span>
                <span>Free diagnosis</span>
                <span>3-month warranty</span>
                <span>Same-day on most models</span>
              </div>
            </div>
            <div>
              <FAQAccordion
                items={FAQS}
                injectSchema={true}
                tone="dark"
              />
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-6">Find us</p>
          <LocationBlock tone="dark" compact />
        </section>

        {/* RELATED ARTICLES */}
        <RelatedArticles path="/macbook-air-charging-port-repair-dubai" topics={["charging", "macbook air"]} />

        {/* CTA FOOTER */}
        <section className="mt-[80px]" style={{ background: "#2C3137" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 py-[48px] flex flex-col sm:flex-row items-center justify-between gap-md">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-on-primary-muted mb-1">
                MacBook Air · All generations
              </p>
              <h2 className="text-[22px] md:text-[26px] font-bold text-white leading-tight">
                MacBook Air charging port repair from AED 220 · Free diagnosis · 3-month warranty
              </h2>
            </div>
            <div className="flex flex-wrap gap-sm shrink-0">
              <CallButtons dark />
            </div>
          </div>
        </section>

      </div>
    </PageShell>
  );
}
