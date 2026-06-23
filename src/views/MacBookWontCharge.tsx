"use client";
import { Star, MessageCircle, Phone, ShieldCheck, Clock, Award, Search, Truck, Check, AlertTriangle, Wrench, HardDrive, Zap, Thermometer } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { VsAppleStore } from "@/components/blocks/VsAppleStore";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Button } from "@/components/ui/button";
import { useSeo, preloadFromHero } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema } from "@/lib/schema";
import { NAP } from "@/content/site";

const HERO_IMAGE = "/images/real/lab/macbook-air-lid-dubai.jpg";

const FAQS = [
  {
    q: "Why is my MacBook not charging?",
    a: "Most common causes in order: faulty cable (try another), dirty USB-C port (clean with dry toothbrush), failed MagSafe 3 board, battery not accepting charge, logic board power circuit. Free diagnosis at MacBook Repair Dubai identifies the exact cause.",
  },
  {
    q: "How much does MacBook charging repair cost in Dubai?",
    a: "From AED 200 for cable or port issues up to AED 800 for logic board power circuit repair. MagSafe 3 board replacement AED 250-400. Battery replacement AED 400-550. Free diagnosis before any paid work.",
  },
  {
    q: "My MacBook charges via USB-C but not MagSafe -- what is wrong?",
    a: "The MagSafe 3 and USB-C charging circuits are separate on M2/M3/M4 Air and M1-M5 Pro. If USB-C charges but MagSafe does not, the MagSafe 3 board (a small daughter board) has failed. Replacement AED 250-400, same-day.",
  },
  {
    q: "My MacBook shows charging but percentage never goes up -- why?",
    a: "The battery is not accepting charge -- either the BMS protection circuit tripped (common after deep discharge) or the cell is failing. Bring in for a battery health check. Battery replacement AED 400-550.",
  },
  {
    q: "How do I clean a MacBook USB-C port?",
    a: "Use a dry toothpick or wooden toothbrush to remove debris from the port. Never use metal tools or compressed air at high pressure. If the port looks clean but still will not charge, the port itself may be damaged internally.",
  },
  {
    q: "Can a MacBook charger damage the logic board?",
    a: "A genuine Apple charger or MFi-certified USB-C PD charger will not damage the board. Cheap non-certified chargers can deliver incorrect voltage and blow the input protection fuse. If you used a cheap charger and the Mac stopped charging, bring in for a fuse check (AED 200-300).",
  },
];

const FAULTS = [
  {
    title: "Faulty cable or adapter",
    body: "Free fix -- try another Apple or MFi-certified cable before booking. Around 20% of charging tickets are resolved this way at zero cost.",
  },
  {
    title: "MagSafe 3 board failed",
    body: "The MagSafe 3 board is a small daughter board on M2/M3/M4 Air and M1-M5 Pro. When it fails, USB-C still charges but the MagSafe port is dead. Replacement AED 250-400, same-day.",
  },
  {
    title: "USB-C port bent or debris inside",
    body: "A bent pin or compacted debris inside the USB-C port prevents connection. Port cleaning AED 200, port replacement AED 200-350 if the connector is physically damaged.",
  },
  {
    title: "Battery not detected or will not accept charge",
    body: "BMS protection circuit tripped after deep discharge, or the cell is end-of-life. Battery health check is free. Battery replacement AED 400-550 if the cell is failing.",
  },
  {
    title: "Logic board power circuit fault",
    body: "Input protection fuse, PMIC, or power regulation circuit on the board. Common after a cheap charger or liquid exposure. Component-level board repair AED 400-800.",
  },
  {
    title: "Liquid damage on charging circuit",
    body: "Liquid on the USB-C or MagSafe 3 area corrodes the charging circuit over weeks. Ultrasonic clean plus component repair AED 400-1000 depending on extent of corrosion.",
  },
];

const SELF_DIAG = [
  "Try a different USB-C cable or MagSafe 3 cable to rule out a faulty lead.",
  "Try a different wall adapter -- Apple's 30W, 67W, and 140W adapters are interchangeable for basic charging.",
  "Check the USB-C port with a flashlight for lint or debris -- clean with a dry wooden toothpick.",
  "Check the MagSafe LED: green means battery is full, amber means actively charging, no light means no power is reaching the board.",
  "On MacBook Air M2, M3, and M4 try charging from the second USB-C port -- if one port charges and the other does not, the faulty port needs repair.",
];

const PORT_BY_MODEL = [
  { model: "MacBook Air (Intel 2017-2019)", ports: "USB-C only (2 ports)" },
  { model: "MacBook Air M1 (2020)", ports: "USB-C only (2 ports)" },
  { model: "MacBook Air M2/M3/M4 (2022+)", ports: "MagSafe 3 + USB-C (2 ports)" },
  { model: "MacBook Pro 13\" Intel (2016-2020)", ports: "USB-C / Thunderbolt 3" },
  { model: "MacBook Pro 14\"/16\" M1-M5 (2021+)", ports: "MagSafe 3 + Thunderbolt 4 (3 ports)" },
];

const PRICING_ROWS = [
  { repair: "Cable or adapter replacement", price: "AED 80-150" },
  { repair: "MagSafe 3 board repair", price: "AED 250-400" },
  { repair: "USB-C port repair", price: "AED 200-350" },
  { repair: "Battery replacement", price: "AED 400-550" },
  { repair: "Logic board power repair", price: "AED 400-800" },
];

const WHY_US = [
  { icon: <Zap size={22} className="text-accent" aria-hidden />, title: "Genuine MagSafe + USB-C parts", body: "Apple-spec MagSafe 3 boards and USB-C connectors for every Air and Pro model in active stock." },
  { icon: <Search size={22} className="text-accent" aria-hidden />, title: "Free cable and adapter test", body: "Bring in your charger -- we test the cable and adapter on the bench before any paid diagnosis." },
  { icon: <ShieldCheck size={22} className="text-accent" aria-hidden />, title: "No fix no charge", body: "If we cannot fix the charging fault, you pay nothing. Free diagnosis every time." },
  { icon: <Clock size={22} className="text-accent" aria-hidden />, title: "Same-day on most faults", body: "Cable, MagSafe board, USB-C port, and battery faults resolved same-day in most cases." },
];

export default function MacBookWontCharge() {
  useSeo(
    {
      title: "MacBook Not Charging Dubai? MagSafe & USB-C Fix Same Day",
      description:
        "MacBook not charging in Dubai? MagSafe 3 dead, USB-C port fault, DC-in board, battery not detected. All Air and Pro models. Free diagnosis. From AED 200. Call 055 741 3706.",
      path: "/macbook-wont-charge-dubai",
      preloadImage: preloadFromHero(HERO_IMAGE),
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "MacBook Not Charging Repair Dubai",
        price: 200,
        timeline: "Same day",
        warranty: "P90D",
        url: "/macbook-wont-charge-dubai",
        description:
          "MacBook not charging repair in Dubai. MagSafe 3 board, USB-C port, battery, and logic board power circuit. All Air and Pro models. Free diagnosis before any repair.",
      }),
    ],
  );

  return (
    <PageShell>
      <BreadcrumbTrail
        tone="dark"
        trail={[
          { name: "Home", path: "/" },
          { name: "MacBook Repair", path: "/" },
          { name: "MacBook Not Charging", path: "/macbook-wont-charge-dubai" },
        ]}
      />

      <Hero
        variant="device"
        tone="dark"
        title="MacBook Not Charging Dubai"
        eyebrow="Charging specialist · Dubai Media City · Same-day"
        image={HERO_IMAGE}
        imageAlt="MacBook Air open lid on a repair bench in Dubai Media City workshop"
      >
        <p className="mt-md max-w-[72ch] text-[17px] leading-relaxed text-text-muted">
          MacBook not charging in Dubai? The most common causes are a faulty MagSafe 3 or USB-C cable (free fix), a damaged DC-in board (AED 200-400), a dead battery that will not accept charge (AED 400-550), or a logic board power circuit fault (AED 400-800). MacBook Repair Dubai diagnoses the exact cause for free before any repair is started.
        </p>
      </Hero>

      {/* ── USP strip ─────────────────────────────────────────────── */}
      <section className="border-y border-border bg-bg-alt">
        <div className="mx-auto max-w-content px-5 md:px-6 py-xl grid gap-xl grid-cols-2 lg:grid-cols-5 text-center">
          {[
            "Free diagnosis",
            "No fix no charge",
            "MagSafe 3 + USB-C specialist",
            "Same-day most models",
            "All Air and Pro models",
          ].map((label) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <Check size={18} className="text-accent" aria-hidden />
              <p className="text-[13px] text-text-muted m-0">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Self-diagnosis steps ───────────────────────────────────── */}
      <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
        <h2 className="text-[28px] md:text-[32px] mb-sm text-text">Try these before booking</h2>
        <p className="text-[16px] text-text-muted mb-xl max-w-[68ch]">
          Around 20% of charging faults are resolved by the owner with one of these steps -- free, no tools required.
        </p>
        <ol className="space-y-md list-none p-0 m-0">
          {SELF_DIAG.map((step, i) => (
            <li key={i} className="flex items-start gap-md rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 font-bold text-accent text-[15px]" aria-hidden>
                {i + 1}
              </span>
              <p className="m-0 text-[15px] text-text-muted leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Port types by model ────────────────────────────────────── */}
      <section className="bg-bg-alt border-y border-border">
        <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm text-text">Charging ports by MacBook model</h2>
          <p className="text-[16px] text-text-muted mb-xl max-w-[68ch]">
            Know which charging method your model supports before testing.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03]">
            <table className="w-full border-collapse text-left text-[14px] min-w-[480px]">
              <thead>
                <tr className="border-b border-border text-accent">
                  <th className="px-lg py-md font-semibold">Model</th>
                  <th className="px-lg py-md font-semibold">Charging ports</th>
                </tr>
              </thead>
              <tbody>
                {PORT_BY_MODEL.map((r) => (
                  <tr key={r.model} className="border-b border-border last:border-0">
                    <td className="px-lg py-sm font-medium text-text">{r.model}</td>
                    <td className="px-lg py-sm text-text-muted">{r.ports}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Common faults ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
        <h2 className="text-[28px] md:text-[32px] mb-sm text-text flex items-center gap-sm">
          <AlertTriangle size={28} className="text-accent" aria-hidden />
          Common charging faults and prices
        </h2>
        <p className="text-[16px] text-text-muted mb-xl max-w-[68ch]">
          The six highest-volume charging tickets at MacBook Repair Dubai, with typical repair cost.
        </p>
        <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
          {FAULTS.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg">
              <h3 className="m-0 mb-2 text-text text-[16px] font-bold">{f.title}</h3>
              <p className="m-0 text-[14px] text-text-muted leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing table ─────────────────────────────────────────── */}
      <section className="bg-bg-alt border-y border-border">
        <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm text-text">MacBook charging repair prices in Dubai</h2>
          <p className="text-[16px] text-text-muted mb-xl max-w-[68ch]">
            Free diagnosis before any paid repair. Prices include parts and labour.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03]">
            <table className="w-full border-collapse text-left text-[14px] min-w-[400px]">
              <thead>
                <tr className="border-b border-border text-accent">
                  <th className="px-lg py-md font-semibold">Repair</th>
                  <th className="px-lg py-md font-semibold">Price</th>
                </tr>
              </thead>
              <tbody>
                {PRICING_ROWS.map((r) => (
                  <tr key={r.repair} className="border-b border-border last:border-0">
                    <td className="px-lg py-sm font-medium text-text">{r.repair}</td>
                    <td className="px-lg py-sm mono font-semibold text-accent">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-md text-[13px] text-text-faint mono">
            Prices in AED, VAT inclusive. Free diagnosis in all cases. Final price confirmed before work begins.
          </p>
        </div>
      </section>

      {/* ── Why us ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
        <h2 className="text-[28px] md:text-[32px] mb-xl text-text">Why choose MacBook Repair Dubai for charging faults</h2>
        <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg">
              <div className="mb-md flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                {item.icon}
              </div>
              <h3 className="m-0 mb-2 text-text text-[16px] font-bold">{item.title}</h3>
              <p className="m-0 text-[14px] text-text-muted leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="bg-bg-alt border-y border-border">
        <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <h2 className="text-[28px] md:text-[32px] mb-xl text-text">MacBook not charging FAQ</h2>
          <FAQAccordion items={FAQS} injectSchema={true} tone="dark" />
        </div>
      </section>

      {/* ── Vs Apple Store ────────────────────────────────────────── */}
      <VsAppleStore tone="dark" />

      {/* ── Location ──────────────────────────────────────────────── */}
      <LocationBlock tone="dark" compact />

      {/* ── Final CTA ─────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-content px-5 md:px-6 py-4xl text-center">
          <h2 className="text-text m-0 mb-md max-w-[32ch] mx-auto text-[28px] md:text-[32px]">
            MacBook not charging? Free diagnosis. From AED 200.
          </h2>
          <p className="text-text-muted max-w-[56ch] mx-auto mb-xl text-[17px]">
            MagSafe 3 board, USB-C port, battery, or logic board power circuit. All Air and Pro models. Independent Apple specialist, Dubai Media City.
          </p>
          <div className="flex flex-wrap justify-center gap-sm">
            <Button asChild variant="whatsapp" size="lg">
              <a
                href={`${NAP.whatsappUrl}?text=${encodeURIComponent("Hi, my MacBook is not charging. Model: ")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden /> Message on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={`tel:${NAP.phoneE164}`}>
                <Phone aria-hidden /> {NAP.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <RelatedArticles path="/macbook-wont-charge-dubai" topics={["charging", "macbook", "magsafe"]} />
    </PageShell>
  );
}
