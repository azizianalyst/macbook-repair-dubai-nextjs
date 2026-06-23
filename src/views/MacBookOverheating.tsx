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
    q: "Why does my MacBook overheat in Dubai?",
    a: "Dubai's ambient temperature of 35-45°C in summer means your Mac's cooling system works harder than in cooler climates. Intel MacBook Pros have thermal paste that degrades in 3-5 years, especially in heat. MacBook Air (M1-M4) is fanless and throttles automatically -- this is normal, not a fault.",
  },
  {
    q: "How much does MacBook overheating repair cost in Dubai?",
    a: "Thermal paste replacement AED 150-250. Fan replacement AED 200-400. Deep clean plus thermal paste AED 200-300. Free diagnosis before any paid work.",
  },
  {
    q: "My MacBook Air M2 runs hot -- is that normal?",
    a: "The M2 Air is fanless and uses the aluminium chassis to dissipate heat. Under sustained load (video export, large Xcode builds) the bottom can reach 45-50°C -- this is within normal operating range. If the system throttles severely (tasks take 3-4x longer than normal), bring in for assessment.",
  },
  {
    q: "My MacBook Pro fans are running constantly and it is still hot -- what is wrong?",
    a: "Dried thermal paste is the most common cause on Intel MacBook Pros after 3+ years. The paste between the CPU and heat spreader degrades and loses conductivity. Thermal paste replacement takes 45 minutes and typically drops temperatures by 20-30°C. AED 150-250.",
  },
  {
    q: "Can overheating damage my MacBook permanently?",
    a: "Sustained temperatures above 100°C on the CPU or GPU can cause long-term solder fatigue on the logic board. If your Mac is regularly hitting thermal shutdown temperatures, address it promptly. Most cases caught early are repaired with just thermal paste or fan replacement.",
  },
  {
    q: "My MacBook shuts down suddenly without warning -- is that overheating?",
    a: "Could be thermal shutdown (overheating) or a battery protection circuit triggering on a worn cell. Both cause sudden shutdown. Free diagnosis determines which -- thermal or battery -- before any repair is recommended.",
  },
];

const FAULTS = [
  {
    title: "Dried thermal paste (Intel models)",
    body: "Intel MacBook Pros and Airs (2017-2020) use thermal paste that degrades in UAE heat after 3-4 years. Temperature at idle rises from 40°C to 80°C. Thermal paste replacement AED 150-250, same-day.",
  },
  {
    title: "Fan failure (MacBook Pro)",
    body: "MacBook Pro uses one or two fans (depending on model). A failed fan bearing causes continuous high-pitched noise followed by thermal shutdown. Fan replacement AED 200-400, fan in stock for all Pro models.",
  },
  {
    title: "Dust-blocked vents (Pro models)",
    body: "Dubai dust accumulates inside the Pro chassis and blocks airflow to the heat exchanger. Deep clean with compressed air and thermal paste replacement AED 150-200. Often prevents the need for a fan replacement.",
  },
  {
    title: "M-chip thermal throttling from software load",
    body: "MacBook Air M1-M4 and MacBook Pro M-chip models throttle under sustained load -- this is by design, not a fault. Closing background processes or switching to Low Power mode (System Settings > Battery) can resolve it at zero cost.",
  },
  {
    title: "Liquid damage on heat spreader",
    body: "Liquid residue on the CPU or GPU heat spreader insulates the chip and causes runaway temperatures. Ultrasonic clean plus thermal paste replacement AED 400+. Board assessment included.",
  },
  {
    title: "Logic board component overheating",
    body: "A failing PMIC, VRM, or GPU core generates excess heat that the thermal system cannot handle. Component-level board repair AED 600+. Requires bench measurement under thermal camera.",
  },
];

const SYMPTOMS = [
  "Bottom-left of the chassis hot to touch in idle",
  "Fan noise at maximum speed even during light tasks",
  "Sudden shutdown without warning or low-battery message",
  "Tasks completing 3-4x slower than usual (thermal throttling)",
  "Screen goes black and Mac restarts unexpectedly",
  "Battery draining at approximately 2x the normal rate under light use",
];

const PRICING_ROWS = [
  { repair: "Thermal paste replacement", price: "AED 150-250" },
  { repair: "Fan replacement (MacBook Pro)", price: "AED 200-400" },
  { repair: "Deep clean + thermal paste", price: "AED 200-300" },
  { repair: "Diagnosis only", price: "AED 0 (free)" },
];

const WHY_US = [
  { icon: <Thermometer size={22} className="text-accent" aria-hidden />, title: "Dubai heat specialists", body: "Every technician knows UAE ambient temperatures add 10-15°C to chip load. Our thermal benchmarks use 40°C room temperature." },
  { icon: <Wrench size={22} className="text-accent" aria-hidden />, title: "Thermal paste on the bench", body: "Arctic MX-6 and Thermal Grizzly Conductonaut always in stock. Applied under magnification for full CPU and GPU coverage." },
  { icon: <HardDrive size={22} className="text-accent" aria-hidden />, title: "Fan stock for all Pro models", body: "Left and right fans for MacBook Pro 13\", 14\", 15\", and 16\" Intel and Apple Silicon. No waiting for parts to arrive." },
  { icon: <ShieldCheck size={22} className="text-accent" aria-hidden />, title: "Free diagnosis", body: "Temperature profile measured under load before and after repair. You see the numbers -- no guesswork, no upselling." },
];

export default function MacBookOverheating() {
  useSeo(
    {
      title: "MacBook Overheating & Shutting Down Dubai -- Fix Same Day",
      description:
        "MacBook overheating or shutting down in Dubai? Thermal paste dried out, fan failure, dust blocked vents, M-chip throttling. All models. Free diagnosis. From AED 150. Call 055 741 3706.",
      path: "/macbook-overheating-shutting-down-dubai",
      preloadImage: preloadFromHero(HERO_IMAGE),
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "MacBook Overheating Repair Dubai",
        price: 150,
        timeline: "Same day",
        warranty: "P90D",
        url: "/macbook-overheating-shutting-down-dubai",
        description:
          "MacBook overheating and shutting down repair in Dubai. Thermal paste replacement, fan replacement, deep clean. All Air and Pro models including Intel and Apple Silicon. Free diagnosis.",
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
          { name: "MacBook Overheating", path: "/macbook-overheating-shutting-down-dubai" },
        ]}
      />

      <Hero
        variant="device"
        tone="dark"
        title="MacBook Overheating and Shutting Down Dubai"
        eyebrow="Thermal specialist · Dubai Media City · Same-day"
        image={HERO_IMAGE}
        imageAlt="MacBook Air open lid on a repair bench in Dubai Media City workshop"
      >
        <p className="mt-md max-w-[72ch] text-[17px] leading-relaxed text-text-muted">
          MacBook overheating in Dubai is fixed at MacBook Repair Dubai from AED 150. Dubai's 40°C+ summer temperatures accelerate thermal paste degradation and dust accumulation. MacBook Pro models with fans are repaired with thermal paste replacement and deep clean. MacBook Air (fanless) is assessed for throttling versus genuine component fault. Free diagnosis before any repair.
        </p>
      </Hero>

      {/* ── Dubai heat note ────────────────────────────────────────── */}
      <section className="border-y border-border bg-bg-alt">
        <div className="mx-auto max-w-content px-5 md:px-6 py-2xl">
          <div className="rounded-2xl border border-accent/30 bg-accent/[0.06] p-xl flex items-start gap-lg">
            <Thermometer size={28} className="text-accent shrink-0 mt-1" aria-hidden />
            <div>
              <h2 className="m-0 mb-2 text-text text-[20px] font-bold">Why Dubai summers destroy MacBook thermals</h2>
              <p className="m-0 text-[15px] text-text-muted leading-relaxed max-w-[80ch]">
                Dubai temperatures reach 35-45°C from May through October. Apple designs MacBook thermals for a 25°C lab environment. In Dubai, your Mac's CPU and GPU run 10-15°C hotter under the same workload -- meaning thermal paste on Intel Macs degrades in 3-4 years instead of the 6-8 years expected in cooler climates. This is a common and fixable issue, not a hardware failure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fanless vs fan section ─────────────────────────────────── */}
      <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
        <h2 className="text-[28px] md:text-[32px] mb-xl text-text">MacBook Air (fanless) vs MacBook Pro (fan-cooled)</h2>
        <div className="grid gap-lg md:grid-cols-2">
          <div className="rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg">
            <div className="mb-md flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
              <Zap size={22} className="text-accent" aria-hidden />
            </div>
            <h3 className="m-0 mb-2 text-text text-[18px] font-bold">MacBook Air M1-M4 (fanless)</h3>
            <p className="m-0 text-[14px] text-text-muted leading-relaxed">
              The MacBook Air has no cooling fan. It dissipates heat through the aluminium chassis. Under sustained load the system automatically throttles the CPU -- this is normal behaviour, not a hardware fault. If throttling is severe enough to make tasks take 3-4x longer than expected, bring in for software and thermal assessment. In most cases, closing background processes or using Low Power mode resolves it at zero cost.
            </p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg">
            <div className="mb-md flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
              <Wrench size={22} className="text-accent" aria-hidden />
            </div>
            <h3 className="m-0 mb-2 text-text text-[18px] font-bold">MacBook Pro (fan-cooled)</h3>
            <p className="m-0 text-[14px] text-text-muted leading-relaxed">
              MacBook Pro uses one or two fans depending on the model. In Dubai's heat, the two most common thermal faults are dried thermal paste (degraded after 3+ years) and dust-blocked vents that reduce airflow to the heat exchanger. Fan failure is less common but causes continuous high-pitched noise followed by thermal shutdown. All three faults are diagnosed and repaired at MacBook Repair Dubai, same-day on in-stock parts.
            </p>
          </div>
        </div>
      </section>

      {/* ── Common faults ─────────────────────────────────────────── */}
      <section className="bg-bg-alt border-y border-border">
        <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm text-text flex items-center gap-sm">
            <AlertTriangle size={28} className="text-accent" aria-hidden />
            Common overheating faults and prices
          </h2>
          <p className="text-[16px] text-text-muted mb-xl max-w-[68ch]">
            The six highest-volume thermal tickets at MacBook Repair Dubai, with typical repair cost.
          </p>
          <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
            {FAULTS.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg">
                <h3 className="m-0 mb-2 text-text text-[16px] font-bold">{f.title}</h3>
                <p className="m-0 text-[14px] text-text-muted leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Symptoms ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
        <h2 className="text-[28px] md:text-[32px] mb-xl text-text">Symptoms of MacBook overheating</h2>
        <ul className="grid gap-md md:grid-cols-2 list-none p-0 m-0">
          {SYMPTOMS.map((s) => (
            <li key={s} className="flex items-start gap-sm rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg">
              <AlertTriangle size={16} className="text-accent shrink-0 mt-1" aria-hidden />
              <span className="text-[15px] text-text-muted leading-relaxed">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Pricing ───────────────────────────────────────────────── */}
      <section className="bg-bg-alt border-y border-border">
        <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm text-text">MacBook thermal repair prices in Dubai</h2>
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
            Prices in AED, VAT inclusive. Final price confirmed before work begins. Temperature readings shown before and after repair.
          </p>
        </div>
      </section>

      {/* ── Why us ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
        <h2 className="text-[28px] md:text-[32px] mb-xl text-text">Why choose MacBook Repair Dubai for thermal repairs</h2>
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
          <h2 className="text-[28px] md:text-[32px] mb-xl text-text">MacBook overheating FAQ</h2>
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
          <h2 className="text-text m-0 mb-md max-w-[36ch] mx-auto text-[28px] md:text-[32px]">
            MacBook overheating in Dubai? Free diagnosis. Thermal paste from AED 150.
          </h2>
          <p className="text-text-muted max-w-[56ch] mx-auto mb-xl text-[17px]">
            Dubai heat specialists at MacBook Repair Dubai, Dubai Media City. Temperature readings before and after. Independent Apple specialist.
          </p>
          <div className="flex flex-wrap justify-center gap-sm">
            <Button asChild variant="whatsapp" size="lg">
              <a
                href={`${NAP.whatsappUrl}?text=${encodeURIComponent("Hi, my MacBook is overheating. Model: ")}`}
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

      <RelatedArticles path="/macbook-overheating-shutting-down-dubai" topics={["overheating", "macbook", "thermal"]} />
    </PageShell>
  );
}
