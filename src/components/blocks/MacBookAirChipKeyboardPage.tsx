"use client";
import {
  Star, MessageCircle, Phone,
  ShieldCheck, Clock, Award,
  Search, Truck, Check, AlertTriangle,
  Keyboard, Wrench, HardDrive,
} from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { Button } from "@/components/ui/button";
import { useSeo, preloadFromHero } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema } from "@/lib/schema";
import { NAP } from "@/content/site";

const HERO_IMG = {
  src: "/images/real/lab/macbook-air-lid-dubai.jpg",
  alt: "MacBook Air keyboard repair at MacBook Repair Dubai, Dubai Media City workshop",
};

export type ChipKeyboardPrice = {
  model: string;
  price: number;
  applePrice: number | null;
  timeline: string;
  l4href?: string;
};

export type ChipKeyboardFault = {
  title: string;
  body: string;
};

type Props = {
  path: string;
  chip: string;
  years: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  eyebrow: string;
  keyboardType: string;
  switchMechanism: string;
  touchId: boolean;
  heroAnswer: string;
  chipUniquePoints: string[];
  prices: ChipKeyboardPrice[];
  faults: ChipKeyboardFault[];
  faqs: { q: string; a: string }[];
  blogHref: string;
  blogLabel: string;
  l3href: string;
  l3label: string;
};

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
      <Button
        asChild
        variant={dark ? "secondary" : "outline"}
        size="lg"
        className={dark ? "bg-white/10 text-white border-white/30 hover:bg-white/20" : ""}
      >
        <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call Now</a>
      </Button>
    </div>
  );
}

const aed = (n: number) => `AED ${n.toLocaleString()}`;

export default function MacBookAirChipKeyboardPage({
  path,
  chip,
  years,
  seoTitle,
  seoDescription,
  h1,
  eyebrow,
  keyboardType,
  switchMechanism,
  touchId,
  heroAnswer,
  chipUniquePoints,
  prices,
  faults,
  faqs,
  blogHref,
  blogLabel,
  l3href,
  l3label,
}: Props) {
  const lowestPrice = Math.min(...prices.map((p) => p.price));

  useSeo(
    {
      title: seoTitle,
      description: seoDescription,
      path,
      preloadImage: preloadFromHero(HERO_IMG.src),
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: `MacBook Air ${chip} Keyboard Repair Dubai`,
        price: lowestPrice,
        timeline: prices[0]?.timeline ?? "Same day · 2 hours",
        warranty: "P15D",
        url: path,
        description: seoDescription,
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
              { name: `${chip} Keyboard`, path },
            ]} />
          </div>
        </div>

        {/* HERO */}
        <Hero
          variant="device"
          tone="dark"
          eyebrow={eyebrow}
          title={h1}
          image={HERO_IMG.src}
          imageAlt={HERO_IMG.alt}
        >
          <div className="mt-md" itemScope itemType="https://schema.org/Question">
            <p className="text-[15px] font-semibold text-text mb-2" itemProp="name">
              How much does MacBook Air {chip} keyboard repair cost in Dubai?
            </p>
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p className="text-[15px] text-text-muted leading-relaxed" itemProp="text">
                {heroAnswer}
              </p>
            </div>
          </div>
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> From {aed(lowestPrice)}</span>
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
              { Icon: Search,    label: "Free key-by-key diagnosis" },
              { Icon: Keyboard,  label: `${chip} keyboard specialist` },
              { Icon: Truck,     label: "Free pickup Dubai-wide" },
              { Icon: Clock,     label: prices[0]?.timeline ?? "Same day · 2 hours" },
              { Icon: Star,      label: "Trusted since 2004" },
              { Icon: ShieldCheck, label: "15-day warranty" },
            ].map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-xs text-[14px] font-medium text-text">
                <Icon size={15} className="text-accent shrink-0" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* KEYBOARD SPEC CARDS */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <div className="text-center mb-[48px]">
            <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">
              Keyboard specification
            </p>
            <h2 className="text-center text-[36px] md:text-[48px] font-bold tracking-tight text-text leading-[1.1]">
              MacBook Air {chip} keyboard spec
            </h2>
            <p className="text-center mt-4 text-[16px] text-text-muted max-w-[54ch] mx-auto">
              The exact keyboard your {chip} Air uses, and what that means for repair.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Keyboard type",      value: keyboardType },
              { label: "Switch mechanism",   value: switchMechanism },
              { label: "Touch ID",           value: touchId ? "Yes — power button" : "No" },
              { label: "Key repair",         value: chip === "Intel" ? "Top-case only" : "Individual key caps" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-4 flex flex-col gap-1"
              >
                <p className="text-[11px] uppercase tracking-[0.15em] text-accent font-semibold">{label}</p>
                <p className="text-[16px] font-bold text-text">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING TABLE */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <div className="text-center mb-[48px]">
            <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">
              Transparent pricing
            </p>
            <h2 className="text-center text-[36px] md:text-[48px] font-bold tracking-tight text-text leading-[1.1]">
              MacBook Air {chip} keyboard repair cost Dubai
            </h2>
            <p className="text-center mt-4 text-[16px] text-text-muted max-w-[52ch] mx-auto">
              All-in price: parts + labour + warranty. Free diagnosis before any repair begins.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03]">
            <table className="w-full border-collapse text-left text-[14px] min-w-[520px]">
              <thead>
                <tr className="border-b border-border text-accent">
                  <th className="px-lg py-md font-semibold">Model / repair type</th>
                  <th className="px-lg py-md font-semibold">Our price</th>
                  <th className="px-lg py-md font-semibold">Apple Store</th>
                  <th className="px-lg py-md font-semibold">Turnaround</th>
                  <th className="px-lg py-md font-semibold">Model page</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((r) => (
                  <tr key={r.model} className="border-b border-border last:border-0">
                    <td className="px-lg py-sm font-medium text-text">{r.model}</td>
                    <td className="px-lg py-sm font-bold text-accent whitespace-nowrap">{aed(r.price)}</td>
                    <td className="px-lg py-sm text-text-muted whitespace-nowrap">
                      {r.applePrice ? aed(r.applePrice) : "Not serviced"}
                    </td>
                    <td className="px-lg py-sm text-text-muted">{r.timeline}</td>
                    <td className="px-lg py-sm">
                      {r.l4href && (
                        <Link to={r.l4href} className="text-[13px] text-accent hover:underline whitespace-nowrap">
                          Model detail →
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-md text-[13px] text-text-faint max-w-[72ch]">
            Warranty: 15 days on parts and labour. No fix, no charge. Free key-by-key diagnosis before any repair is quoted.
          </p>
          <div className="mt-xl flex justify-center"><CallButtons /></div>
        </section>

        {/* WHAT MAKES THIS CHIP'S KEYBOARD UNIQUE */}
        <section
          className="mt-[96px] py-[80px]"
          style={{ background: "#2C3137", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
        >
          <div className="mx-auto max-w-content px-5 md:px-6">
            <div className="text-center mb-[48px]">
              <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent-bright font-semibold mb-4">
                {chip} keyboard facts
              </p>
              <h2 className="text-center text-[32px] md:text-[44px] font-bold tracking-tight text-white leading-[1.1]">
                What makes the {chip} Air keyboard different
              </h2>
            </div>
            <ul className="max-w-[64ch] mx-auto flex flex-col gap-4">
              {chipUniquePoints.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/20 mt-0.5">
                    <Check size={16} className="text-accent-bright" />
                  </div>
                  <p className="text-[15px] text-on-primary-muted leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* COMMON FAULTS */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <div className="text-center mb-[48px]">
            <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">
              Common issues
            </p>
            <h2 className="text-center text-[36px] md:text-[48px] font-bold tracking-tight text-text leading-[1.1]">
              MacBook Air {chip} keyboard faults we repair
            </h2>
          </div>
          <div className="grid gap-x-xl gap-y-[40px] sm:grid-cols-2">
            {faults.map((f) => (
              <div key={f.title} className="flex flex-col gap-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 mb-xs">
                  <AlertTriangle size={22} className="text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="text-[17px] font-semibold text-text">{f.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-xl flex justify-center"><CallButtons /></div>
        </section>

        {/* WHY CHOOSE US */}
        <section
          className="mt-[96px] py-[80px]"
          style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-alt)" }}
        >
          <div className="mx-auto max-w-content px-5 md:px-6">
            <div className="text-center mb-[48px]">
              <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">Why us</p>
              <h2 className="text-center text-[32px] md:text-[44px] font-bold tracking-tight text-text leading-[1.1]">
                MacBook Air {chip} keyboard repair in Dubai
              </h2>
              <p className="text-center mt-4 text-[16px] text-text-muted max-w-[54ch] mx-auto">
                Independent Apple specialists since 2004. Not Apple Authorised — the faster, fairer-priced alternative.
              </p>
            </div>
            <div className="grid gap-x-xl gap-y-[40px] sm:grid-cols-2 lg:grid-cols-4">
              {[
                { Icon: Award,       title: "Every Air generation covered",  body: `From Intel butterfly (2018–2020) to ${chip} Magic Keyboard — we stock parts for every MacBook Air keyboard type.` },
                { Icon: ShieldCheck, title: "No fix, no charge",             body: "We test every key before quoting. You approve the repair and cost before we start. No surprises." },
                { Icon: Wrench,      title: "Individual key repair on M1–M4", body: `${chip === "Intel" ? "Intel butterfly top-case replaced as one unit." : `${chip} Air keys can be replaced individually — no need to replace the full top-case in most cases.`}` },
                { Icon: HardDrive,   title: "Data stays private",            body: "Keyboard and top-case repairs never require accessing your storage. Your files are untouched throughout." },
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
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
            <div className="lg:sticky lg:top-24 rounded-xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">FAQ</p>
              <h2 className="text-[22px] font-bold tracking-tight text-text leading-snug mb-3">
                MacBook Air {chip} keyboard questions
              </h2>
              <p className="text-[14px] text-text-muted leading-relaxed">
                Chip-specific answers before you book.
              </p>
              <div className="mt-5 pt-5 border-t border-border flex flex-col gap-2 text-[13px] text-text-muted">
                <span>From {aed(lowestPrice)}</span>
                <span>Free key-by-key diagnosis</span>
                <span>15-day warranty</span>
                <span>Free pickup Dubai-wide</span>
              </div>
            </div>
            <FAQAccordion items={faqs} injectSchema tone="dark" />
          </div>
        </section>

        {/* LOCATION */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-6">Find us</p>
          <LocationBlock tone="dark" compact />
        </section>

        {/* RELATED LINKS */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">Related</p>
          <div className="flex flex-wrap justify-center gap-sm text-[15px]">
            {[
              { label: "MacBook Air keyboard repair Dubai (all chips)", href: "/macbook-air-keyboard-repair-dubai" },
              { label: l3label, href: l3href },
              { label: "MacBook Air repair Dubai", href: "/macbook-air-repair-dubai" },
              { label: blogLabel, href: blogHref },
              ...prices
                .filter((p) => p.l4href)
                .slice(0, 2)
                .map((p) => ({ label: p.model, href: p.l4href! })),
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-accent hover:underline">
                {l.label} ›
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-[80px]" style={{ background: "#2C3137" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 py-[48px] flex flex-col sm:flex-row items-center justify-between gap-md">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-on-primary-muted mb-1">
                MacBook Air {chip} · {years}
              </p>
              <h2 className="text-[22px] md:text-[26px] font-bold text-white leading-tight">
                MacBook Air {chip} keyboard from {aed(lowestPrice)} · Free diagnosis · 15-day warranty
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
