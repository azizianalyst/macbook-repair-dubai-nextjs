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
const HERO_ALT = "MacBook not turning on diagnosis at MacBook Repair Dubai, Media City";

const CAUSES = [
  {
    title: "Dead or drained battery",
    price: "AED 200-450",
    body: "The most common cause of a MacBook that appears dead. A battery at 0V trips the protection circuit and the Mac refuses to boot even on the charger. Battery replacement resolves it. AED 200-450 depending on model.",
  },
  {
    title: "Blown logic board fuse",
    price: "AED 300-500",
    body: "A fuse on the power rail protects the board from overcurrent. A failed charger or power surge can blow it silently. The Mac looks completely dead. Fuse replacement at component level is AED 300-500, same or next day.",
  },
  {
    title: "Liquid damage",
    price: "AED 400-1500",
    body: "Liquid causes corrosion on power rails and bridge circuits. A Mac that worked after a spill and then died 24-72 hours later is a classic liquid-corrosion failure. Ultrasonic clean plus component repair from AED 400.",
  },
  {
    title: "Failed DC-in or MagSafe board",
    price: "AED 300-600",
    body: "The DC-in board converts charger voltage for the logic board. A failed board means no power reaches the system even from a working charger. No MagSafe LED on a known-good charger points here. Repair from AED 300.",
  },
  {
    title: "Corrupted firmware or T2 chip",
    price: "AED 200-400",
    body: "A failed macOS update or T2 security chip fault can prevent a Mac from booting with no other hardware damage. Firmware restore or T2 revive via Apple Configurator fixes this from AED 200, no hardware swap needed.",
  },
  {
    title: "Logic board failure",
    price: "AED 800-2500",
    body: "A failed CPU, GPU, or power management IC requires component-level board repair. This is the worst-case scenario but still repairable in most cases. Free diagnosis confirms scope before any commitment.",
  },
];

const DIAG_STEPS = [
  {
    step: "1",
    title: "Charge for 30 minutes",
    body: "Plug in with the original Apple charger. Wait 30 minutes. A fully discharged battery needs time before the Mac can boot. Try power after 30 minutes, not immediately.",
  },
  {
    step: "2",
    title: "Check MagSafe LED color",
    body: "Amber = charging. Green = charged. No light = power not reaching the board. Try a different known-good Apple charger or cable before concluding the Mac is at fault.",
  },
  {
    step: "3",
    title: "Try SMC reset",
    body: "For Intel Macs: hold Shift + Control + Option + Power for 10 seconds. For Apple Silicon: hold the power button for 10 seconds until the Mac shuts down, then wait 10 seconds and press power. This resets the System Management Controller.",
  },
  {
    step: "4",
    title: "Listen for boot chime or fan spin",
    body: "Press power and listen carefully. A faint fan spin or boot chime means the board is alive and the fault is in the display or OS. No sound at all points to a power-stage or battery fault.",
  },
  {
    step: "5",
    title: "Remove all peripherals and try again",
    body: "Disconnect all USB-C hubs, external drives, and monitors. Some USB-C accessories can prevent boot by pulling the power rail. A bare Mac with only the charger connected sometimes boots when a loaded bus does not.",
  },
];

const PRICING_ROWS = [
  { model: "MacBook Air (Intel, 2017-2020)", price: "From AED 200" },
  { model: "MacBook Air M1-M4 (2020-2025)", price: "From AED 250" },
  { model: "MacBook Pro (Intel, 2012-2020)", price: "From AED 300" },
  { model: "MacBook Pro M1-M5 (2021-2026)", price: "From AED 350" },
  { model: "iMac / Mac mini", price: "From AED 300" },
];

const WHY_US = [
  {
    Icon: Search,
    title: "Free diagnosis",
    body: "Bring your dead Mac in and we diagnose the cause at no charge, before any commitment to repair.",
  },
  {
    Icon: Check,
    title: "No fix, no charge",
    body: "If we cannot fix it, you pay nothing. Our no-fix guarantee removes all risk from the process.",
  },
  {
    Icon: Award,
    title: "20+ years experience",
    body: "MacBook Repair Dubai has been servicing Apple hardware since 2004. Every Mac model, every fault.",
  },
  {
    Icon: HardDrive,
    title: "All Mac models",
    body: "MacBook Air, MacBook Pro, iMac, Mac mini - Intel through M5. If Apple made it, we repair it.",
  },
];

const FAQS = [
  {
    q: "My MacBook won't turn on -- what should I try first?",
    a: "Start by charging for at least 30 minutes with the original Apple charger. Try a different known-good charger if you have one. Perform an SMC reset: on Intel Macs, hold Shift + Control + Option + Power for 10 seconds; on Apple Silicon, hold the power button for 10 seconds. Remove all peripherals and hubs and try again. If none of these work, bring it in for a free diagnosis at our workshop in Dubai Media City.",
  },
  {
    q: "How much does it cost to fix a MacBook that won't turn on in Dubai?",
    a: "From AED 200 depending on the cause. A dead battery costs AED 200-450 to replace. A blown logic board fuse costs AED 300-500 at component level. Liquid damage repair starts at AED 400. A failed DC-in board is AED 300-600. We diagnose for free and quote before starting any paid work, so you know the cost before committing.",
  },
  {
    q: "Can a dead MacBook be recovered without losing data?",
    a: "In most cases yes. Battery replacement, fuse repair, and DC-in board repair do not touch the SSD at all. Files, apps, and encryption are completely unaffected. Liquid damage is the exception - corrosion can affect multiple components including storage. In that case we assess the SSD separately as part of the diagnosis and tell you the data situation before starting repairs.",
  },
  {
    q: "How long does it take to fix a MacBook that won't turn on?",
    a: "After the free diagnosis (30-60 minutes), most power faults are fixed same-day. Dead battery: 2 hours. Blown fuse: same day. DC-in board: same day. Logic board corrosion or component failure may take 1-3 days depending on severity. We give you a realistic timeline at diagnosis, not after we have started.",
  },
  {
    q: "My MacBook shows no MagSafe light at all -- what does that mean?",
    a: "No MagSafe or USB-C charging LED on a known-good charger means power is not reaching the logic board. First eliminate the charger: borrow a known-good Apple charger and try it. If still no light, the likely causes are a failed DC-in board (AED 300-600), a blown power rail fuse (AED 300-500), or liquid damage to the charging circuit (AED 400+). Free diagnosis at our Media City workshop confirms which.",
  },
  {
    q: "Is it worth repairing a MacBook that won't turn on?",
    a: "Yes in most cases. The data alone is often worth the AED 200 diagnosis cost - a Mac that appears dead frequently has a simple power fault. Most dead-Mac repairs cost AED 200-600, which is a fraction of a replacement Mac. Even in the worst case of logic board failure, component-level repair (AED 800-2500) is often cheaper than a new machine. We give you a free assessment so you can make an informed decision.",
  },
];

export default function MacBookNotTurningOn() {
  useSeo(
    {
      title: "MacBook Not Turning On Dubai? Dead Mac Fixed Same Day",
      description:
        "MacBook not turning on in Dubai? Free diagnosis. SMC reset, logic board fault, dead battery, liquid damage. All models MacBook Air and Pro. Same-day service from AED 200. Call 055 741 3706.",
      path: "/macbook-not-turning-on-dubai",
      preloadImage: preloadFromHero(HERO_IMG),
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "MacBook Not Turning On Repair Dubai",
        price: 200,
        timeline: "Same day",
        warranty: "P90D",
        url: "/macbook-not-turning-on-dubai",
        description:
          "MacBook not turning on repair in Dubai. Free diagnosis. Dead battery, blown fuse, liquid damage, DC-in board, T2 firmware. All models MacBook Air and Pro, Intel through M5. From AED 200.",
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
                { name: "MacBook Not Turning On Dubai", path: "/macbook-not-turning-on-dubai" },
              ]}
            />
          </div>
        </div>

        {/* Hero */}
        <Hero
          variant="device"
          tone="dark"
          eyebrow="Dead Mac specialist · Dubai Media City · Same-day diagnosis"
          title="MacBook Not Turning On Dubai"
          image={HERO_IMG}
          imageAlt={HERO_ALT}
        >
          <p className="mt-md text-[16px] leading-relaxed text-text-muted max-w-[64ch]">
            A MacBook that won't turn on is diagnosed free at MacBook Repair Dubai. The most common causes are a drained or dead battery (fix from AED 200), a blown fuse on the logic board (AED 300-500), liquid damage, or a failed DC-in board. Most dead Macs are repaired same-day once the cause is confirmed.
          </p>
          <div className="mt-lg flex flex-wrap gap-sm">
            <Button asChild variant="whatsapp" size="lg">
              <a
                href={`${NAP.whatsappUrl}?text=${encodeURIComponent("Hi, my MacBook won't turn on. Can I get a free diagnosis please? Model: ")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden /> WhatsApp for free diagnosis
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={`tel:${NAP.phoneE164}`}>
                <Phone aria-hidden /> Call {NAP.phoneDisplay}
              </a>
            </Button>
          </div>
        </Hero>

        {/* USP strip */}
        <div style={{ borderBottom: "1px solid var(--color-border)" }}>
          <ul className="mx-auto max-w-content px-5 md:px-6 py-md flex flex-wrap justify-center gap-x-xl gap-y-sm list-none m-0 p-0">
            {[
              { Icon: Search,      label: "Free diagnosis" },
              { Icon: Check,       label: "No fix, no charge" },
              { Icon: Clock,       label: "Same-day service" },
              { Icon: Truck,       label: "Free pickup Dubai-wide" },
              { Icon: Award,       label: "Trusted since 2004" },
              { Icon: HardDrive,   label: "All Mac models" },
            ].map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-xs text-[14px] font-medium text-text">
                <Icon size={15} className="text-accent shrink-0" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Heroic answer / quick context */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-xl">
          <p className="max-w-[78ch] text-[17px] leading-relaxed text-text-muted">
            MacBook Repair Dubai offers free diagnosis for every dead Mac. Most power faults -- dead battery, blown fuse, failed DC-in board -- are fixed same-day at our Dubai Media City workshop. If your Mac shows no response at all, bring it in or book a free pickup. No fix, no charge.
          </p>
        </section>

        {/* Self-diagnosis steps */}
        <section className="border-y border-border bg-bg-alt">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <div className="mb-2xl max-w-[64ch]">
              <h2 className="m-0 text-text text-[clamp(1.5rem,2.8vw,2rem)] font-bold flex items-center gap-sm">
                <Search size={24} className="text-accent" aria-hidden />
                5 things to try before bringing it in
              </h2>
              <p className="mt-md text-[17px] text-text-muted leading-relaxed">
                These self-checks take 10 minutes and occasionally fix the problem entirely. If none work, the diagnosis is free at our workshop.
              </p>
            </div>
            <ol className="grid gap-lg md:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
              {DIAG_STEPS.map((s) => (
                <li key={s.step} className="rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg">
                  <span
                    aria-hidden
                    className="mb-md flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 font-bold text-[18px] text-accent"
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

        {/* Causes section */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <div className="mb-2xl max-w-[64ch]">
            <h2 className="m-0 text-text text-[clamp(1.5rem,2.8vw,2rem)] font-bold flex items-center gap-sm">
              <AlertTriangle size={24} className="text-accent" aria-hidden />
              Why is my MacBook not turning on? 6 common causes
            </h2>
            <p className="mt-md text-[17px] text-text-muted leading-relaxed">
              Free diagnosis at our workshop identifies the exact cause. Most faults fall into one of these six categories.
            </p>
          </div>
          <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
            {CAUSES.map((c) => (
              <div key={c.title} className="rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg">
                <div className="flex items-start gap-sm mb-sm">
                  <AlertTriangle size={18} className="text-accent shrink-0 mt-[2px]" aria-hidden />
                  <h3 className="m-0 text-text text-[16px] font-bold">{c.title}</h3>
                </div>
                <p className="m-0 mb-sm text-[13.5px] text-text-muted leading-relaxed">{c.body}</p>
                <p className="m-0 text-[13px] font-semibold text-accent">{c.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing table */}
        <section className="border-y border-border bg-bg-alt">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <div className="mb-2xl max-w-[64ch]">
              <h2 className="m-0 text-text text-[clamp(1.5rem,2.8vw,2rem)] font-bold">
                MacBook not turning on -- repair prices Dubai
              </h2>
              <p className="mt-md text-[17px] text-text-muted leading-relaxed">
                Prices shown are from-prices. The exact cost depends on the cause identified during free diagnosis. All quotes are confirmed before any paid work begins.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-border bg-bg-alt">
              <table className="w-full border-collapse text-left text-[14px] min-w-[420px]">
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
              Prices are diagnosis + fix estimate. Exact price confirmed after free diagnosis. No fix, no charge.
            </p>
          </div>
        </section>

        {/* Why us */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <div className="mb-2xl max-w-[64ch]">
            <h2 className="m-0 text-text text-[clamp(1.5rem,2.8vw,2rem)] font-bold flex items-center gap-sm">
              <ShieldCheck size={24} className="text-accent" aria-hidden />
              Why bring your dead Mac to us
            </h2>
          </div>
          <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map(({ Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 mb-md">
                  <Icon size={22} className="text-accent" aria-hidden />
                </div>
                <h3 className="m-0 mb-sm text-text text-[16px] font-bold">{title}</h3>
                <p className="m-0 text-[13.5px] text-text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA bar */}
        <section className="border-y border-border bg-bg-alt">
          <div className="mx-auto max-w-content px-5 md:px-6 py-xl">
            <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-amber-950/30 p-xl md:p-2xl">
              <div className="flex flex-col gap-md md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="m-0 text-[12px] uppercase tracking-wider text-amber-400 font-semibold mb-2">
                    MacBook won't turn on? Free diagnosis. Same-day service.
                  </p>
                  <h3 className="m-0 text-white text-[22px] md:text-[26px] font-bold">
                    Dead Mac? We diagnose free -- quote before any work
                  </h3>
                  <p className="m-0 mt-2 text-amber-200/70 text-[15px]">
                    Most power faults fixed same-day from AED 200. No fix, no charge.
                  </p>
                </div>
                <div className="flex flex-wrap gap-sm shrink-0">
                  <Button asChild variant="whatsapp" size="lg">
                    <a
                      href={`${NAP.whatsappUrl}?text=${encodeURIComponent("Hi, my MacBook won't turn on. Can I get a free diagnosis? Model: ")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle aria-hidden /> WhatsApp Us
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
          </div>
        </section>

        {/* VS Apple Store */}
        <VsAppleStore tone="dark" />

        {/* FAQ */}
        <section className="border-y border-border bg-bg-alt">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <div className="mb-2xl max-w-[64ch]">
              <h2 className="m-0 text-text text-[clamp(1.5rem,2.8vw,2rem)] font-bold">
                MacBook not turning on -- FAQ
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
        <RelatedArticles path="/macbook-not-turning-on-dubai" topics={["macbook", "repair", "power"]} />

        {/* Final CTA */}
        <section className="relative overflow-hidden border-t border-border">
          <div className="relative mx-auto max-w-content px-5 md:px-6 py-2xl text-center">
            <h2 className="text-text m-0 mb-md max-w-[30ch] mx-auto text-[clamp(1.5rem,2.8vw,2rem)] font-bold">
              MacBook won't turn on? Free diagnosis. Same-day service.
            </h2>
            <p className="text-text-muted max-w-[60ch] mx-auto mb-xl text-[17px]">
              Drop in to Dubai Media City or book a free pickup anywhere in Dubai. Free diagnosis, quote before any work, no fix no charge.
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
