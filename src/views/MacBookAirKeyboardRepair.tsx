"use client";
import {
  Star, MessageCircle, Phone,
  ShieldCheck, Clock, Award,
  Search, Truck, Check,
  Wrench, AlertTriangle, Keyboard,
  HardDrive, Scissors,
} from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { VsAppleStore } from "@/components/blocks/VsAppleStore";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { Button } from "@/components/ui/button";
import { useSeo, preloadFromHero } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema } from "@/lib/schema";
import { NAP } from "@/content/site";
import type { LucideIcon } from "lucide-react";

const IMG = {
  hero: {
    src: "/images/real/lab/macbook-air-lid-dubai.jpg",
    alt: "MacBook Air keyboard repair at MacBook Repair Dubai, Dubai Media City workshop",
  },
};

type PricingRow = { model: string; price: number; timeline: string; l6href?: string };

const PRICING: PricingRow[] = [
  { model: 'MacBook Air 13" Intel (2018–2020) — top-case', price: 350, timeline: "Same day · 2 hours", l6href: "/macbook-air-intel-keyboard-repair-dubai" },
  { model: 'MacBook Air 13" M1 (2020) — individual key',   price: 300, timeline: "Same day · 1–2 hours", l6href: "/macbook-air-m1-keyboard-repair-dubai" },
  { model: 'MacBook Air 13" M2 (2022) — individual key',   price: 300, timeline: "Same day · 1–2 hours", l6href: "/macbook-air-m2-keyboard-repair-dubai" },
  { model: 'MacBook Air 15" M2 (2023) — individual key',   price: 320, timeline: "Same day · 1–2 hours", l6href: "/macbook-air-m2-keyboard-repair-dubai" },
  { model: 'MacBook Air 13" M3 (2024) — individual key',   price: 300, timeline: "Same day · 1–2 hours", l6href: "/macbook-air-m3-keyboard-repair-dubai" },
  { model: 'MacBook Air 15" M3 (2024) — individual key',   price: 320, timeline: "Same day · 1–2 hours", l6href: "/macbook-air-m3-keyboard-repair-dubai" },
  { model: 'MacBook Air 13" M4 (2025) — individual key',   price: 350, timeline: "1–2 business days",   l6href: "/macbook-air-m4-keyboard-repair-dubai" },
  { model: 'MacBook Air 15" M4 (2025) — individual key',   price: 380, timeline: "1–2 business days",   l6href: "/macbook-air-m4-keyboard-repair-dubai" },
];

type KeyboardGenRow = { chip: string; type: string; touchId: boolean; repairNote: string; href: string };

const KEYBOARD_GENS: KeyboardGenRow[] = [
  { chip: "Intel (2018–2020)", type: "Butterfly 3rd gen",         touchId: false, repairNote: "Top-case replacement only — butterfly keys cannot be replaced individually", href: "/macbook-air-intel-keyboard-repair-dubai" },
  { chip: "M1 (2020)",         type: "Magic Keyboard (scissor)",  touchId: true,  repairNote: "Individual key cap + clip replacement; top-case only for full keyboard failure", href: "/macbook-air-m1-keyboard-repair-dubai" },
  { chip: "M2 (2022–2023)",    type: "Magic Keyboard (scissor)",  touchId: true,  repairNote: "Same as M1; 15-inch top-case is a larger separate unit", href: "/macbook-air-m2-keyboard-repair-dubai" },
  { chip: "M3 (2024)",         type: "Magic Keyboard (scissor)",  touchId: true,  repairNote: "Same as M1/M2; Sky Blue colour-matched key caps available", href: "/macbook-air-m3-keyboard-repair-dubai" },
  { chip: "M4 (2025)",         type: "Magic Keyboard (scissor)",  touchId: true,  repairNote: "New chassis — 1–2 day turnaround as parts supply builds", href: "/macbook-air-m4-keyboard-repair-dubai" },
];

type SymptomCard = { title: string; body: string };

const SYMPTOMS: SymptomCard[] = [
  {
    title: "Keys not registering or double-registering",
    body: "The most common Air keyboard fault. Intel butterfly keys stop registering after dust ingress. M1–M4 Magic Keyboard keys double-register from worn scissor clips. Both are fixable — butterfly requires top-case replacement (AED 350); Magic Keyboard can often be fixed with an individual key cap (AED 300).",
  },
  {
    title: "Sticky or stuck keys after liquid spill",
    body: "Liquid dries under the keycap and binds the scissor mechanism. On Intel butterfly keyboards, spilled liquid usually means a full top-case swap. On M1–M4 scissor keyboards, we clean or replace individual key caps and mechanisms without replacing the entire top case. Bring in as soon as possible after a spill.",
  },
  {
    title: "Missing or broken key cap",
    body: "Key caps snap off if forced sideways. On M1–M4 Air we fit a replacement cap and scissor clip in 30 minutes. Intel butterfly caps cannot be separately replaced — top-case replacement needed if the retainer is damaged.",
  },
  {
    title: "Backlight not working or uneven",
    body: "If the backlight is dark on specific keys, the backlight strip has delaminated. If all keys are dark, it is a logic board connector issue. We diagnose the cause before quoting — different repairs, different costs.",
  },
  {
    title: "Touch ID button not working (M1–M4)",
    body: "Touch ID on M1–M4 Air is paired to the Secure Enclave. Software recalibration in System Settings fixes most cases. If the button is physically damaged, the top-case assembly must be replaced with the original Touch ID button transferred — replacing it with a different button permanently disables the sensor.",
  },
  {
    title: "Multiple keys failing simultaneously",
    body: "Several keys failing at once usually points to a keyboard flex cable fault or a logic board connector, not individual key damage. Free diagnosis confirms the scope before any repair is quoted.",
  },
];

type FaqItem = { q: string; a: string };

const FAQ_GROUPS: { title: string; items: FaqItem[]; injectSchema?: boolean }[] = [
  {
    title: "Pricing and booking",
    injectSchema: true,
    items: [
      {
        q: "How much does MacBook Air keyboard repair cost in Dubai?",
        a: "MacBook Air keyboard repair at MacBook Repair Dubai starts from AED 300 for individual key replacement on M1–M4 models and AED 350 for Intel Air top-case replacement. Full top-case replacement on M1–M4 is AED 480–530. Apple charges AED 549–649. All prices include diagnosis, parts, and labour.",
      },
      {
        q: "How long does MacBook Air keyboard repair take in Dubai?",
        a: "Intel and M1–M3 Air keyboard repairs are same-day, typically 1–3 hours depending on the repair type. M4 Air (2025) keyboard repairs take 1–2 business days as parts availability builds. Call ahead to confirm stock before dropping off.",
      },
      {
        q: "Can individual keys be replaced on MacBook Air, or does the whole keyboard need replacing?",
        a: "On M1, M2, M3, and M4 Air keyboards (Magic Keyboard scissor mechanism) individual key caps and scissor clips can be replaced without replacing the whole keyboard. Intel Air (2018–2020) uses the butterfly mechanism — individual key replacement is not possible; the full top-case assembly must be replaced.",
      },
      {
        q: "Does Apple still repair Intel MacBook Air butterfly keyboards in Dubai?",
        a: "Apple services the 2018–2020 Intel Air but the butterfly keyboard models are approaching end of preferred support. MacBook Repair Dubai carries top-case assemblies for all Intel Air models (2018–2020) and repairs them same-day for AED 350.",
      },
    ],
  },
  {
    title: "Technical questions",
    items: [
      {
        q: "What is the difference between the Intel butterfly keyboard and the M1+ Magic Keyboard?",
        a: "The Intel Air (2018–2020) uses Apple's butterfly switch — a thin, flat mechanism with 0.55 mm key travel that is highly sensitive to dust. One particle can cause key failure. The M1, M2, M3, and M4 Air all use Apple's Magic Keyboard with scissor switches — 1 mm travel, much more robust. Butterfly requires top-case replacement; scissor allows individual key repair.",
      },
      {
        q: "Will Touch ID still work after MacBook Air keyboard repair?",
        a: "For individual key replacement — yes, completely unaffected. For full top-case replacement — we transfer the original Touch ID button from the old top-case to the new one at no extra charge. Touch ID remains fully functional after transfer.",
      },
      {
        q: "Can I use my MacBook Air with an external keyboard while waiting for repair?",
        a: "Yes. Connect any USB-C or Bluetooth keyboard. All Air models (Intel through M4) support external keyboards natively. A good workaround if only a few keys are affected and you need to keep working.",
      },
    ],
  },
];

function CallButtons({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-sm">
      <Button asChild variant="whatsapp" size="lg">
        <a
          href={`${NAP.whatsappUrl}?text=${encodeURIComponent("Hi Shafiq, MacBook Air keyboard repair quote please. Model: ")}`}
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

export default function MacBookAirKeyboardRepair() {
  useSeo(
    {
      title: "MacBook Air Keyboard Repair Dubai — From AED 300",
      description: "MacBook Air keyboard repair Dubai from AED 300. Intel butterfly and M1–M4 Magic Keyboard. Individual key caps, sticky keys, backlight, Touch ID. Same-day 2-hour service. Call 055 741 3706.",
      path: "/macbook-air-keyboard-repair-dubai",
      preloadImage: preloadFromHero(IMG.hero.src),
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "MacBook Air Keyboard Repair Dubai",
        price: 300,
        timeline: "Same day · 2 hours",
        warranty: "P15D",
        url: "/macbook-air-keyboard-repair-dubai",
        description: "MacBook Air keyboard repair Dubai from AED 300. Intel butterfly top-case and M1–M4 Magic Keyboard individual key replacement. Same-day service.",
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
              { name: "Keyboard Repair", path: "/macbook-air-keyboard-repair-dubai" },
            ]} />
          </div>
        </div>

        {/* HERO */}
        <Hero
          variant="device"
          tone="dark"
          eyebrow="MacBook Air keyboard specialist · Dubai Media City · Same-day"
          title="MacBook Air Keyboard Repair Dubai"
          image={IMG.hero.src}
          imageAlt={IMG.hero.alt}
        >
          <p className="mt-md text-[15px] text-text-muted leading-relaxed max-w-[56ch]">
            MacBook Air keyboard repair in Dubai starts from AED 300 for individual key replacement on M1–M4 models and AED 350 for Intel Air top-case replacement. MacBook Repair Dubai carries parts for every Air keyboard generation — butterfly (Intel 2018–2020) and Magic Keyboard scissor (M1 through M4). Same-day 2-hour service on most models. Free diagnosis before any repair is quoted.
          </p>
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> From AED 300</span>
            <span>·</span>
            <span>Free key-by-key diagnosis</span>
            <span>·</span>
            <span>15-day warranty</span>
          </p>
        </Hero>

        {/* USP STRIP */}
        <div style={{ borderBottom: "1px solid var(--color-border)" }}>
          <ul className="mx-auto max-w-content px-5 md:px-6 py-md flex flex-wrap justify-center gap-x-xl gap-y-sm">
            {[
              { Icon: Search,      label: "Free key-by-key diagnosis" },
              { Icon: Keyboard,    label: "Butterfly + Magic Keyboard" },
              { Icon: Scissors,    label: "Individual key replacement M1–M4" },
              { Icon: Truck,       label: "Free pickup Dubai-wide" },
              { Icon: Clock,       label: "Same-day on most models" },
              { Icon: Star,        label: "Trusted since 2004" },
            ].map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-xs text-[14px] font-medium text-text">
                <Icon size={15} className="text-accent shrink-0" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* KEYBOARD TYPE BY CHIP */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <div className="text-center mb-[48px]">
            <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">
              By chip generation
            </p>
            <h2 className="text-center text-[36px] md:text-[48px] font-bold tracking-tight text-text leading-[1.1]">
              MacBook Air keyboard by chip generation
            </h2>
            <p className="text-center mt-4 text-[16px] text-text-muted max-w-[54ch] mx-auto">
              Every Air generation uses a different keyboard type. Repair approach and cost differ accordingly.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-bg-card">
            <table className="w-full border-collapse text-left text-[14px] min-w-[580px]">
              <thead>
                <tr className="border-b border-border text-accent">
                  <th className="px-lg py-md font-semibold">Chip</th>
                  <th className="px-lg py-md font-semibold">Keyboard type</th>
                  <th className="px-lg py-md font-semibold">Touch ID</th>
                  <th className="px-lg py-md font-semibold">Repair approach</th>
                </tr>
              </thead>
              <tbody>
                {KEYBOARD_GENS.map((k) => (
                  <tr key={k.chip} className="border-b border-border last:border-0">
                    <td className="px-lg py-sm">
                      <a href={k.href} className="text-accent hover:underline font-medium">{k.chip}</a>
                    </td>
                    <td className="px-lg py-sm font-medium text-text">{k.type}</td>
                    <td className="px-lg py-sm text-text-muted">{k.touchId ? "Yes" : "No"}</td>
                    <td className="px-lg py-sm text-text-muted text-[13px]">{k.repairNote}</td>
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
              MacBook Air keyboard repair prices Dubai
            </h2>
            <p className="text-center mt-4 text-[16px] text-text-muted max-w-[52ch] mx-auto">
              Fixed prices. Free diagnosis before any work starts. No hidden fees.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-bg-card">
            <table className="w-full border-collapse text-left text-[14px] min-w-[520px]">
              <thead>
                <tr className="border-b border-border text-accent">
                  <th className="px-lg py-md font-semibold">Model / repair type</th>
                  <th className="px-lg py-md font-semibold">Our price</th>
                  <th className="px-lg py-md font-semibold">Turnaround</th>
                  <th className="px-lg py-md font-semibold">Detail page</th>
                </tr>
              </thead>
              <tbody>
                {PRICING.map((r) => (
                  <tr key={r.model} className="border-b border-border last:border-0">
                    <td className="px-lg py-sm font-medium text-text">{r.model}</td>
                    <td className="px-lg py-sm font-bold text-accent whitespace-nowrap">{aed(r.price)}</td>
                    <td className="px-lg py-sm text-text-muted">{r.timeline}</td>
                    <td className="px-lg py-sm">
                      {r.l6href && (
                        <Link to={r.l6href} className="text-[13px] text-accent hover:underline whitespace-nowrap">
                          Chip detail →
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-md text-[13px] text-text-faint max-w-[72ch]">
            Intel prices cover full top-case replacement. M1–M4 prices cover individual key repair; full top-case quoted separately if needed.
          </p>
          <div className="mt-xl flex justify-center"><CallButtons /></div>
        </section>

        {/* COMMON SYMPTOMS */}
        <section
          className="mt-[96px] py-[80px]"
          style={{ background: "#2C3137", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
        >
          <div className="mx-auto max-w-content px-5 md:px-6">
            <div className="text-center mb-[48px]">
              <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent-bright font-semibold mb-4">
                Common keyboard faults
              </p>
              <h2 className="text-center text-[32px] md:text-[44px] font-bold tracking-tight text-white leading-[1.1]">
                MacBook Air keyboard symptoms we fix
              </h2>
              <p className="text-center mt-4 text-[16px] text-on-primary-muted max-w-[54ch] mx-auto">
                From a single dead key to a completely unresponsive keyboard — we diagnose first, repair second.
              </p>
            </div>
            <div className="grid gap-x-xl gap-y-[40px] sm:grid-cols-2 lg:grid-cols-3">
              {SYMPTOMS.map((s) => (
                <div key={s.title} className="flex flex-col gap-sm">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/20 mb-xs">
                    <AlertTriangle size={22} className="text-accent-bright" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-[17px] font-semibold text-white">{s.title}</h3>
                  <p className="text-[15px] text-on-primary-muted leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section
          className="mt-[0px] py-[80px]"
          style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-alt)" }}
        >
          <div className="mx-auto max-w-content px-5 md:px-6">
            <div className="text-center mb-[48px]">
              <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">Why us</p>
              <h2 className="text-center text-[32px] md:text-[44px] font-bold tracking-tight text-text leading-[1.1]">
                Why MacBook Repair Dubai for keyboard repair
              </h2>
              <p className="text-center mt-4 text-[16px] text-text-muted max-w-[54ch] mx-auto">
                Every Air keyboard generation covered. Independent Apple specialists since 2004.
              </p>
            </div>
            <div className="grid gap-x-xl gap-y-[40px] sm:grid-cols-2 lg:grid-cols-4">
              {[
                { Icon: Keyboard,    title: "Butterfly + Magic Keyboard",   body: "We carry top-case assemblies for Intel butterfly and key caps/scissor mechanisms for M1–M4 Magic Keyboard." },
                { Icon: Clock,       title: "Same-day on most models",      body: "Intel, M1, M2, M3 Air keyboards completed same-day. M4 typically 1–2 business days as parts build." },
                { Icon: Wrench,      title: "Individual key repair M1–M4",  body: "Most single-key issues on M1–M4 Air are fixed for AED 300 without replacing the full top-case assembly." },
                { Icon: ShieldCheck, title: "Touch ID transfer included",   body: "If we replace the top case on an M1–M4 Air, the original Touch ID button is transferred at no extra charge." },
              ].map(({ Icon, title, body }) => (
                <div key={title} className="flex flex-col gap-sm">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 mb-xs">
                    <Icon size={22} className="text-accent" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-[16px] font-semibold text-text">{title}</h3>
                  <p className="text-[14px] text-text-muted leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
            <div className="mt-xl flex justify-center"><CallButtons /></div>
          </div>
        </section>

        <VsAppleStore />

        {/* FAQ */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
            <div className="lg:sticky lg:top-24 rounded-xl border border-border bg-bg-card p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">FAQ</p>
              <h2 className="text-[22px] font-bold tracking-tight text-text leading-snug mb-3">
                MacBook Air keyboard questions
              </h2>
              <p className="text-[14px] text-text-muted leading-relaxed">
                Common questions about Air keyboard repair in Dubai.
              </p>
              <div className="mt-5 pt-5 border-t border-border flex flex-col gap-2 text-[13px] text-text-muted">
                <span>From AED 300</span>
                <span>Free key-by-key diagnosis</span>
                <span>15-day warranty</span>
                <span>Free pickup Dubai-wide</span>
              </div>
            </div>
            <div>
              {FAQ_GROUPS.map((group) => (
                <FAQAccordion
                  key={group.title}
                  items={group.items}
                  injectSchema={group.injectSchema ?? false}
                  tone="dark"
                />
              ))}
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-6">Find us</p>
          <LocationBlock tone="dark" compact />
        </section>

        {/* RELATED ARTICLES */}
        <RelatedArticles path="/macbook-air-keyboard-repair-dubai" topics={["keyboard", "macbook air"]} />

        {/* CTA */}
        <section className="mt-[80px]" style={{ background: "#2C3137" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 py-[48px] flex flex-col sm:flex-row items-center justify-between gap-md">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-on-primary-muted mb-1">
                MacBook Air · All generations
              </p>
              <h2 className="text-[22px] md:text-[26px] font-bold text-white leading-tight">
                MacBook Air keyboard repair from AED 300 · Free diagnosis · 15-day warranty
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
