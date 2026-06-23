"use client";
import { Star, MessageCircle, Phone, ShieldCheck, Clock, Award, Search, Truck, Check, AlertTriangle, Wrench, HardDrive } from "lucide-react";
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

const HERO_IMG = "/images/real/lab/macbook-air-lid-dubai.jpg";
const HERO_ALT = "MacBook water damage repair at MacBook Repair Dubai, Media City Dubai";

const IMMEDIATE_STEPS = [
  {
    step: "1",
    title: "Power off immediately",
    body: "Hold the power button for 10 seconds to force a shutdown. Do not let the Mac sleep -- a sleeping Mac with liquid inside will short circuits as soon as it wakes. Power off is the single most important step.",
  },
  {
    step: "2",
    title: "Unplug all cables",
    body: "Remove the charger, all USB-C accessories, external drives, and monitors. Every connected cable is another path for liquid to travel deeper into the board.",
  },
  {
    step: "3",
    title: "Tilt to drain",
    body: "Open the lid wide and tilt the MacBook so the keyboard faces down. Hold it at a 45-degree angle over a towel for a few minutes to let liquid run out by gravity.",
  },
  {
    step: "4",
    title: "Do NOT use rice",
    body: "Rice does not remove liquid from inside the chassis and leaves starch residue that accelerates corrosion. Do not put your MacBook in a bag of rice. This is the most damaging popular myth for MacBook spills.",
  },
  {
    step: "5",
    title: "Bring it to our workshop within 24 hours",
    body: "The faster you act, the higher the recovery rate. Corrosion begins within hours and bridges circuits within 24-72 hours. Call us for same-day free pickup anywhere in Dubai.",
  },
];

const WHAT_WE_DO = [
  {
    step: "1",
    Icon: Search,
    title: "Ultrasonic clean and microscope inspection",
    body: "The logic board is disassembled and cleaned in an ultrasonic bath with a specialist PCB solution that dissolves corrosion without damaging components. We then inspect every trace under the microscope to map damage before quoting.",
  },
  {
    step: "2",
    Icon: Wrench,
    title: "Component-level diagnosis and repair",
    body: "Individual corroded or shorted components are replaced at board level - capacitors, resistors, MOSFETs, charge ICs. We fix the root cause rather than replacing the whole board, which keeps costs down and preserves your SSD data.",
  },
  {
    step: "3",
    Icon: Check,
    title: "Full function test before return",
    body: "Keyboard, trackpad, display, speakers, USB-C ports, MagSafe, WiFi, Bluetooth, battery, camera and microphone are all verified before the Mac is returned. You get a written handover report.",
  },
];

const RECOVERY_RATES = [
  { time: "Within 2 hours of spill",          rate: "90%+ recovery" },
  { time: "2-24 hours after spill",            rate: "70-80% recovery" },
  { time: "24-72 hours after spill",           rate: "50-60% recovery" },
  { time: "Over 72 hours, or powered on",      rate: "30-40% recovery" },
];

const DAMAGE_PATTERNS = [
  {
    title: "Keyboard damage",
    body: "Liquid shorts key circuits and corrodes membrane contacts. Individual key replacement is possible; in severe cases a full top-case swap is the cleanest fix. From AED 350.",
  },
  {
    title: "Trackpad failure",
    body: "Liquid under the Force Touch sensor causes erratic clicks, ghost taps, or full trackpad death. Board-level repair or trackpad replacement. From AED 300.",
  },
  {
    title: "Logic board corrosion",
    body: "The most critical damage pattern. Corrosion bridges power rails and destroys ICs within 24-72 hours. Ultrasonic clean plus component repair. From AED 600.",
  },
  {
    title: "Battery swelling",
    body: "Liquid shorting a battery cell causes heat and swelling. A swollen battery is a fire risk. Battery replacement is mandatory in these cases. From AED 450.",
  },
  {
    title: "Speaker damage",
    body: "Liquid in the speaker cavity corrodes the voice coil within hours. Speakers sound crackling, distorted, or dead. Speaker replacement from AED 200 per side.",
  },
  {
    title: "USB-C port corrosion",
    body: "The USB-C ports sit low in the chassis and collect liquid first. Corroded pins cause charging failure or no-detection on peripherals. Port replacement from AED 300.",
  },
];

const PRICING_ROWS = [
  { model: "MacBook Air water damage (all models)", price: "From AED 400" },
  { model: "MacBook Pro water damage (all models)", price: "From AED 500" },
  { model: "iMac water damage",                     price: "From AED 600" },
];

const FAQS = [
  {
    q: "What should I do immediately after spilling on my MacBook?",
    a: "Power off immediately - hold the power button for 10 seconds if needed to force shutdown. Unplug the charger and all accessories. Tilt the Mac to drain liquid by gravity. Do not use a hairdryer or rice. Do not turn it back on. Call MacBook Repair Dubai on 055 741 3706 for same-day free pickup anywhere in Dubai. The faster you act, the higher the recovery rate.",
  },
  {
    q: "How much does MacBook water damage repair cost in Dubai?",
    a: "From AED 400 for MacBook Air, AED 500 for MacBook Pro. The exact cost depends on what the ultrasonic clean and microscope inspection reveals. Simple corrosion cleaning with no component replacements is AED 400-600. Logic board component repair (corroded ICs, capacitors, MOSFETs) is AED 600-1500. We quote after diagnosis and before starting any paid work.",
  },
  {
    q: "Does rice actually work for a wet MacBook?",
    a: "No. Rice cannot absorb liquid from inside a sealed aluminium chassis, and it leaves starch residue on the board that accelerates corrosion. The only correct approach is professional ultrasonic cleaning within 24 hours. The rice myth is the single most damaging piece of popular advice for MacBook spills -- it wastes the critical first 24 hours while corrosion spreads.",
  },
  {
    q: "Will my data survive a MacBook water spill?",
    a: "Usually yes. The SSD in all Apple Silicon MacBooks is soldered to the logic board, but it is typically recoverable even after liquid damage because the NAND storage chips themselves are rarely corroded. We assess data integrity as part of the free diagnosis and tell you the data situation before starting repairs. If the board is too damaged to repair, we can attempt SSD data recovery separately.",
  },
  {
    q: "My MacBook got wet 3 days ago and worked fine -- now it is dead. Why?",
    a: "This is the classic delayed liquid-damage failure. Corrosion takes 24-72 hours to bridge circuits and destroy components. A Mac that works immediately after a spill often has liquid that has not yet oxidised. As the moisture evaporates, mineral deposits and corrosion bridge power rails and short ICs. Bring it in now -- every additional hour increases the damage. The recovery rate after 72 hours drops to 30-40%.",
  },
  {
    q: "Is water damage covered by Apple warranty or AppleCare+?",
    a: "Standard Apple warranty does not cover liquid damage. AppleCare+ covers accidental damage including liquid spills for a AED 149 service fee per incident. MacBook Repair Dubai offers independent repair from AED 400 with a faster turnaround -- typically same-day or next-day rather than the Apple Store timeline of several business days. We are an independent Apple specialist, not an Apple Authorized Service Provider.",
  },
];

export default function MacBookWaterDamage() {
  useSeo(
    {
      title: "MacBook Water Damage Repair Dubai -- Act Fast, Save Your Mac",
      description:
        "MacBook water damage repair Dubai. Coffee, water, juice spill on MacBook Air or Pro. Act within 24 hours for best recovery rate. Free diagnosis. From AED 400. Call 055 741 3706.",
      path: "/macbook-water-damage-repair-dubai",
      preloadImage: preloadFromHero(HERO_IMG),
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "MacBook Water Damage Repair Dubai",
        price: 400,
        timeline: "Same day - 2 days",
        warranty: "P90D",
        url: "/macbook-water-damage-repair-dubai",
        description:
          "MacBook water damage repair in Dubai. Liquid spill on MacBook Air or Pro. Ultrasonic clean, component-level board repair, full function test. Free diagnosis. From AED 400.",
      }),
    ],
  );

  return (
    <PageShell>
      <div className="-mb-[4rem] bg-bg text-text">

        {/* Breadcrumb */}
        <div className="pt-[64px]" style={{ borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 py-[6px]">
            <BreadcrumbTrail
              tone="dark"
              trail={[
                { name: "Home", path: "/" },
                { name: "MacBook Repair Dubai", path: "/macbook-repair-dubai" },
                { name: "MacBook Water Damage Repair Dubai", path: "/macbook-water-damage-repair-dubai" },
              ]}
            />
          </div>
        </div>

        {/* Hero */}
        <Hero
          variant="device"
          tone="dark"
          eyebrow="Liquid damage specialist · Dubai Media City · Act fast"
          title="MacBook Water Damage Repair Dubai"
          image={HERO_IMG}
          imageAlt={HERO_ALT}
        >
          <p className="mt-md text-[16px] leading-relaxed text-text-muted max-w-[64ch]">
            MacBook water damage repair in Dubai starts with free diagnosis at MacBook Repair Dubai. The faster you act -- ideally within 2-4 hours of the spill -- the higher the recovery rate. Do not turn the Mac on after a spill.
          </p>
          <div className="mt-lg flex flex-wrap gap-sm">
            <Button asChild variant="whatsapp" size="lg">
              <a
                href={`${NAP.whatsappUrl}?text=${encodeURIComponent("Hi, my MacBook has liquid damage from a spill. Can I get a free pickup and diagnosis? Model: ")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden /> Book free pickup now
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={`tel:${NAP.phoneE164}`}>
                <Phone aria-hidden /> Call {NAP.phoneDisplay}
              </a>
            </Button>
          </div>
        </Hero>

        {/* URGENT warning strip */}
        <div className="border-y border-red-900/40 bg-red-950/40">
          <div className="mx-auto max-w-content px-5 md:px-6 py-md">
            <div className="flex flex-wrap items-center justify-center gap-x-xl gap-y-sm text-center">
              {[
                "Do NOT turn it on",
                "Do NOT use a hairdryer",
                "Do NOT charge it",
                "Bring in within 24 hours for best results",
                "Free pickup available",
              ].map((item) => (
                <span key={item} className="flex items-center gap-xs text-[14px] font-semibold text-red-300">
                  <AlertTriangle size={14} className="text-red-400 shrink-0" aria-hidden />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hero answer / quick context */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-xl">
          <p className="max-w-[78ch] text-[17px] leading-relaxed text-text-muted">
            Coffee, water, juice -- any liquid on a MacBook starts a countdown. Corrosion begins within hours and bridges circuits within 24-72 hours. MacBook Repair Dubai uses ultrasonic cleaning and component-level board repair to recover water-damaged Macs that other shops write off. Free diagnosis, quote before any work, no fix no charge.
          </p>
        </section>

        {/* What to do immediately */}
        <section className="border-y border-border bg-bg-alt">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <div className="mb-2xl max-w-[64ch]">
              <h2 className="m-0 text-text text-[clamp(1.5rem,2.8vw,2rem)] font-bold flex items-center gap-sm">
                <AlertTriangle size={24} className="text-red-400" aria-hidden />
                What to do right now after a MacBook spill
              </h2>
              <p className="mt-md text-[17px] text-text-muted leading-relaxed">
                These five steps in the first 10 minutes can be the difference between a AED 400 clean and a AED 1500 board repair.
              </p>
            </div>
            <ol className="grid gap-lg md:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
              {IMMEDIATE_STEPS.map((s) => (
                <li key={s.step} className="rounded-2xl border border-border bg-bg-card p-lg">
                  <span
                    aria-hidden
                    className="mb-md flex h-11 w-11 items-center justify-center rounded-xl bg-red-900/30 font-bold text-[18px] text-red-400"
                  >
                    {s.step}
                  </span>
                  <p className="font-semibold text-[16px] m-0 mb-1 text-text">{s.title}</p>
                  <p className="text-[13.5px] text-text-muted leading-relaxed m-0">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* What we do */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <div className="mb-2xl max-w-[64ch]">
            <h2 className="m-0 text-text text-[clamp(1.5rem,2.8vw,2rem)] font-bold flex items-center gap-sm">
              <Wrench size={24} className="text-accent" aria-hidden />
              How we repair water-damaged MacBooks
            </h2>
            <p className="mt-md text-[17px] text-text-muted leading-relaxed">
              Our 3-step process goes deeper than surface drying. We treat the board at component level, not just clean the surface.
            </p>
          </div>
          <ol className="grid gap-lg md:grid-cols-3 list-none p-0 m-0">
            {WHAT_WE_DO.map((s) => (
              <li key={s.step} className="rounded-2xl border border-border bg-bg-card p-lg">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 mb-md">
                  <s.Icon size={22} className="text-accent" aria-hidden />
                </div>
                <p className="font-semibold text-[17px] m-0 mb-sm text-text">{s.title}</p>
                <p className="text-[13.5px] text-text-muted leading-relaxed m-0">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Recovery rate table */}
        <section className="border-y border-border bg-bg-alt">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <div className="mb-2xl max-w-[64ch]">
              <h2 className="m-0 text-text text-[clamp(1.5rem,2.8vw,2rem)] font-bold">
                MacBook water damage recovery rate by response time
              </h2>
              <p className="mt-md text-[17px] text-text-muted leading-relaxed">
                Time is the most important factor in water damage recovery. Every hour increases corrosion spread and reduces the chance of a full fix.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-border bg-bg-alt">
              <table className="w-full border-collapse text-left text-[14px] min-w-[400px]">
                <thead>
                  <tr className="border-b border-border text-accent">
                    <th className="px-lg py-md font-semibold">Time from spill to workshop</th>
                    <th className="px-lg py-md font-semibold">Typical recovery rate</th>
                  </tr>
                </thead>
                <tbody>
                  {RECOVERY_RATES.map((r, i) => (
                    <tr key={r.time} className="border-b border-border last:border-0">
                      <td className="px-lg py-sm font-medium text-text">{r.time}</td>
                      <td className={`px-lg py-sm font-semibold ${i === 0 ? "text-green-400" : i === 1 ? "text-accent" : i === 2 ? "text-amber-400" : "text-red-400"}`}>
                        {r.rate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-md text-[13px] text-text-faint">
              Recovery rates are estimates based on our workshop data. Actual outcome depends on liquid type, volume, and which components were affected.
            </p>
          </div>
        </section>

        {/* Common damage patterns */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <div className="mb-2xl max-w-[64ch]">
            <h2 className="m-0 text-text text-[clamp(1.5rem,2.8vw,2rem)] font-bold flex items-center gap-sm">
              <HardDrive size={24} className="text-accent" aria-hidden />
              Common MacBook water damage patterns
            </h2>
            <p className="mt-md text-[17px] text-text-muted leading-relaxed">
              Liquid damage rarely affects just one component. These are the most common damage patterns we see and repair.
            </p>
          </div>
          <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
            {DAMAGE_PATTERNS.map((d) => (
              <div key={d.title} className="rounded-2xl border border-border bg-bg-card p-lg">
                <h3 className="m-0 mb-sm text-text text-[16px] font-bold">{d.title}</h3>
                <p className="m-0 text-[13.5px] text-text-muted leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="border-y border-border bg-bg-alt">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <div className="mb-2xl max-w-[64ch]">
              <h2 className="m-0 text-text text-[clamp(1.5rem,2.8vw,2rem)] font-bold">
                MacBook water damage repair prices Dubai
              </h2>
              <p className="mt-md text-[17px] text-text-muted leading-relaxed">
                Exact price after free diagnosis. We quote before starting any paid work.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-border bg-bg-alt">
              <table className="w-full border-collapse text-left text-[14px] min-w-[400px]">
                <thead>
                  <tr className="border-b border-border text-accent">
                    <th className="px-lg py-md font-semibold">Mac model</th>
                    <th className="px-lg py-md font-semibold">Repair price</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICING_ROWS.map((r) => (
                    <tr key={r.model} className="border-b border-border last:border-0">
                      <td className="px-lg py-sm font-medium text-text">{r.model}</td>
                      <td className="px-lg py-sm font-semibold text-accent">{r.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-md text-[13px] text-text-faint">
              Exact price confirmed after free ultrasonic inspection and microscope diagnosis. No fix, no charge.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-xl">
          <div className="relative overflow-hidden rounded-2xl border border-red-900/30 bg-red-950/20 p-xl md:p-2xl">
            <div className="flex flex-col gap-md md:flex-row md:items-center md:justify-between">
              <div>
                <p className="m-0 text-[12px] uppercase tracking-wider text-red-400 font-semibold mb-2">
                  Act fast -- free same-day pickup in Dubai
                </p>
                <h3 className="m-0 text-white text-[22px] md:text-[26px] font-bold">
                  Spilled on your MacBook? Act fast.
                </h3>
                <p className="m-0 mt-2 text-red-200/70 text-[15px]">
                  Free same-day pickup across Dubai. Free diagnosis. The first 24 hours matter most.
                </p>
              </div>
              <div className="flex flex-wrap gap-sm shrink-0">
                <Button asChild variant="whatsapp" size="lg">
                  <a
                    href={`${NAP.whatsappUrl}?text=${encodeURIComponent("Hi, my MacBook has a liquid spill. I need urgent pickup and diagnosis. Model: ")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle aria-hidden /> Book pickup now
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary" className="border border-white/20 bg-white/10 text-white hover:bg-white/20">
                  <a href={`tel:${NAP.phoneE164}`}>
                    <Phone aria-hidden /> Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* VS Apple Store */}
        <VsAppleStore tone="dark" />

        {/* FAQ */}
        <section className="border-y border-border bg-bg-alt">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <div className="mb-2xl max-w-[64ch]">
              <h2 className="m-0 text-text text-[clamp(1.5rem,2.8vw,2rem)] font-bold">
                MacBook water damage repair -- FAQ
              </h2>
            </div>
            <FAQAccordion items={FAQS} injectSchema={true} tone="dark" />
          </div>
        </section>

        {/* Location */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <LocationBlock tone="dark" compact />
        </section>

        {/* Related articles */}
        <RelatedArticles path="/macbook-water-damage-repair-dubai" topics={["water damage", "macbook", "liquid"]} />

        {/* Final CTA */}
        <section className="relative overflow-hidden border-t border-border">
          <div className="relative mx-auto max-w-content px-5 md:px-6 py-2xl text-center">
            <h2 className="text-text m-0 mb-md max-w-[30ch] mx-auto text-[clamp(1.5rem,2.8vw,2rem)] font-bold">
              Spilled on your MacBook? Act fast -- free same-day pickup in Dubai.
            </h2>
            <p className="text-text-muted max-w-[60ch] mx-auto mb-xl text-[17px]">
              Free diagnosis, quote before any work, ultrasonic board clean. The first 24 hours are critical.
            </p>
            <div className="flex flex-wrap justify-center gap-sm">
              <Button asChild variant="whatsapp" size="lg">
                <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
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

      </div>
    </PageShell>
  );
}
