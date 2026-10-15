"use client";
// /ipad-repair-dubai/ - iPad cluster hub, rebuilt 2026-09-26 (SEO master plan, Phase 3 build 5).
// Targets: ipad repair dubai, ipad repair, ipad repair near me, apple ipad repair dubai,
// ipad repair uae / abu dhabi, ipad pro repair, ipad charging port repair.
// Current Apple line-up first (src/content/ipad-cluster.ts, verified 26 Sep 2026), older
// generations after. No prices of ours anywhere - quotes go through WhatsApp.
import { withSlash } from "@/lib/utils";
import {
  Star, MessageCircle, Phone,
  Monitor, BatteryCharging, Droplets, PlugZap, Database,
  Cpu, Camera, Home,
  ShieldCheck, Clock, Search, BadgeCheck, MapPin, Layers,
} from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { pickReviews, reviewDevicesForPath } from "@/lib/find-reviews";
import { TakeawaysByline } from "@/components/blocks/TakeawaysByline";
import { LeadForm } from "@/components/blocks/LeadForm";
import { PRESETS } from "@/data/form-presets";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { StatBand } from "@/components/blocks/StatBand";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { VsAppleStore } from "@/components/blocks/VsAppleStore";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { CtaBand } from "@/components/blocks/CtaBand";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { pageWithSpeakable } from "@/lib/schema";
import { SITE } from "@/lib/seo";
import { NAP, REVIEW_COUNT, HOURS, TEAM } from "@/content/site";
import { CURRENT_IPADS, OLDER_IPAD_PAGES, ipadWa } from "@/content/ipad-cluster";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

const PATH = "/ipad-repair-dubai";
const PREFILL = "Hi, I need an iPad repair. Model and fault:";
// Roster: "iPad repair · boards, ports & displays".
const TECH = TEAM.find((t) => t.name === "Shafeeq")!;
const inlineLink = "text-accent underline underline-offset-2";

const SERVICE_PAGES = [
  ["Screen Repair", "/ipad-screen-repair-dubai"], ["Battery Replacement", "/ipad-battery-replacement-dubai"], ["Charging Port", "/ipad-charging-port-repair-dubai"], ["Back Glass", "/ipad-back-glass-repair-dubai"], ["Camera Repair", "/ipad-camera-repair-dubai"], ["Speaker", "/ipad-speaker-repair-dubai"], ["Home Button", "/ipad-home-button-repair-dubai"], ["Power Button", "/ipad-power-button-repair-dubai"], ["Smart Connector", "/ipad-smart-connector-repair-dubai"], ["Water Damage", "/ipad-water-damage-repair-dubai"], ["Logic Board", "/ipad-logic-board-repair-dubai"], ["Data Recovery", "/ipad-data-recovery-dubai"], ["Software Reset", "/ipad-software-reset-dubai"], ["Full Diagnostic", "/ipad-full-diagnostic-dubai"], ["iCloud Unlock", "/ipad-icloud-unlock-dubai"], ["Pencil Compatibility", "/ipad-pencil-compatibility-dubai"],
];

const SERVICES: { title: string; body: string; Icon: LucideIcon; href: string }[] = [
  { Icon: Monitor,         title: "Screen Repair",        href: "/ipad-screen-repair-dubai",        body: "Cracked glass, dead touch, lines or dark patches. Full display assemblies on laminated models; glass and digitiser only on a standard iPad whose LCD still works." },
  { Icon: BatteryCharging, title: "Battery Replacement",  href: "/ipad-battery-replacement-dubai",  body: "Fast drain, shutdowns at 20-30% or a swollen case. The glued cell is tested first, removed safely and the display re-sealed." },
  { Icon: PlugZap,         title: "Charging Port Repair", href: "/ipad-charging-port-repair-dubai", body: "USB-C or Lightning that is loose, intermittent or dead. We check the port and the charging circuit before quoting." },
  { Icon: Droplets,        title: "Water Damage Repair",  href: "/ipad-water-damage-repair-dubai",  body: "Power it off and don't charge it. The board is cleaned and inspected, then we quote for what the liquid actually reached." },
  { Icon: Cpu,             title: "Logic Board Repair",   href: "/ipad-logic-board-repair-dubai",   body: "No power, boot loops, no charge after a port swap. Component-level diagnosis and micro-soldering in our Media City workshop." },
  { Icon: Database,        title: "Data Recovery",        href: "/ipad-data-recovery-dubai",        body: "Photos and files from iPads with broken screens, liquid damage or board faults." },
  { Icon: Camera,          title: "Camera Repair",        href: "/ipad-camera-repair-dubai",        body: "Blurry, black or shaking front and rear cameras. Modules replaced and tested." },
  { Icon: Layers,          title: "Back Glass Repair",    href: "/ipad-back-glass-repair-dubai",    body: "Cracked rear glass on iPad Pro models, replaced and sealed." },
  { Icon: Home,            title: "Buttons & Speakers",   href: "/ipad-home-button-repair-dubai",   body: "Home, power and volume buttons and loudspeakers. If Touch ID is involved, we tell you before we start whether it can be kept." },
];

const PROCESS: { title: string; body: string; Icon: LucideIcon }[] = [
  { Icon: Search,      title: "Free diagnosis",          body: "WhatsApp a photo and your model, then walk in or send it by courier. We test the iPad and tell you what is wrong, free, even if you decide not to repair." },
  { Icon: Clock,       title: "Written quote first",     body: "Price, part grade (genuine or quality-tested) and timing come in writing on WhatsApp. Nothing is repaired until you approve." },
  { Icon: ShieldCheck, title: "Repair, test, warranty",  body: "We test display, touch, Pencil, cameras, charging and Wi-Fi, then return the iPad with the written warranty for that repair type." },
];

const FAULTS: { title: string; body: ReactNode }[] = [
  {
    title: "Screens: digitiser, LCD or OLED",
    body: (
      <>
        The touch glass (digitiser) and the panel that makes the picture are separate parts on the standard iPad and one bonded assembly on Air, mini and Pro. Lines, dark spots and flicker point to the panel, not the glass: see{" "}
        <Link to="/blog/ipad-screen-lines-dark-spots/" className={inlineLink}>lines and dark spots on an iPad screen</Link>. Full detail on{" "}
        <Link to="/ipad-screen-repair-dubai/" className={inlineLink}>iPad screen repair</Link>.
      </>
    ),
  },
  {
    title: "Batteries",
    body: (
      <>
        Apple says an iPad battery is designed to keep up to 80% of its original capacity at 1,000 complete charge cycles. The cell is glued under the display, so replacing it is a longer job than on a phone. We test it before replacing anything:{" "}
        <Link to="/ipad-battery-replacement-dubai/" className={inlineLink}>iPad battery replacement</Link>.
      </>
    ),
  },
  {
    title: "Charging ports",
    body: (
      <>
        USB-C on current models and Lightning on older ones wear, collect lint and loosen. Some only need cleaning; others need the port or the charging circuit repaired. See{" "}
        <Link to="/ipad-charging-port-repair-dubai/" className={inlineLink}>iPad charging port repair</Link>, or{" "}
        <Link to="/blog/ipad-not-charging-dubai/" className={inlineLink}>why an iPad stops charging</Link> first.
      </>
    ),
  },
  {
    title: "Liquid and board faults",
    body: (
      <>
        Liquid damage and no-power faults are board-level work. They take longer, carry a 15-day warranty, and are quoted only after inspection:{" "}
        <Link to="/ipad-water-damage-repair-dubai/" className={inlineLink}>water damage</Link> ·{" "}
        <Link to="/ipad-logic-board-repair-dubai/" className={inlineLink}>logic board</Link>.
      </>
    ),
  },
];

const FAQS = [
  {
    q: "How much does iPad repair cost in Dubai?",
    a: "It depends on the model and the fault: glass on an iPad (A16) and a tandem OLED panel on an iPad Pro (M5) are very different parts. Send your model and a photo on WhatsApp for a quote, confirmed in writing after a free diagnosis. For comparison, Apple's UAE battery fees for current models are listed on our iPad battery page.",
  },
  {
    q: "How long does an iPad repair take?",
    a: "Screen, battery and charging-port jobs are often finished the same day when the part is on the shelf. Parts for the newest iPad Pro and iPad Air are usually ordered for your model, which adds a few working days. Board and liquid-damage work takes longer. We confirm timing before you bring it in.",
  },
  {
    q: "Will I lose my data during an iPad repair?",
    a: "Not for a screen, battery, port, camera or button repair: those parts hold no data and we do not erase the iPad. Board and liquid-damage repairs carry more risk, so back up first if the iPad still turns on. If it doesn't and the data matters most, tell us before we start.",
  },
  {
    q: "Are you an Apple Authorised Service Provider?",
    a: "No. We are an independent repair workshop, not Apple Authorised. We use genuine parts where they are available and quality-tested parts otherwise, and your quote says which. If your iPad is still under Apple warranty or AppleCare+, we tell you, because Apple may be the better route for a covered fault.",
  },
  {
    q: "Do you repair older iPads?",
    a: "Yes. Alongside the current line-up we work on older generations, from recent iPad Pro, Air and mini models back to the iPad 2. Parts for the oldest models are sourced per job, so we confirm availability on WhatsApp before you bring the iPad in.",
  },
  {
    q: "Can I send my iPad in if I can't come to the workshop?",
    a: "Yes. Book any same-day courier app yourself, hand the iPad to the driver and WhatsApp us the tracking link - it reaches us within the day, from elsewhere in Dubai or from Sharjah. Once it's fixed, collect it from the workshop, or we book a courier to bring it back.",
  },
];

// iPad-specific, honest comparison. Apple's figures are on the battery page, attributed.
const VS_APPLE_ROWS = [
  { label: "Who does the work", us: "Independent workshop in Dubai Media City, not Apple Authorised", them: "Apple or an Apple Authorised Service Provider" },
  { label: "Screen damage", us: "Display assembly (or glass only on a standard iPad) fitted to your own iPad", them: "Apple's UAE list has no separate iPad screen fee, only battery service and 'other damage'" },
  { label: "Parts", us: "Genuine where available, quality-tested otherwise, named on your quote", them: "Genuine Apple parts" },
  { label: "Your data", us: "Stays on the iPad for screen, battery and port jobs", them: "Apple asks you to back up before service" },
  { label: "Quote", us: "Free diagnosis, written quote on WhatsApp before any work", them: "Apple's published fees, excluding VAT" },
];

function SectionHeading({ label, title, sub }: { label?: string; title: string; sub?: ReactNode }) {
  return (
    <div className="text-center mb-[56px]">
      {label && (
        <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4 max-w-none w-full">
          {label}
        </p>
      )}
      <h2 className="text-center text-[36px] md:text-[52px] font-bold tracking-tight text-text leading-[1.1]">{title}</h2>
      {sub && <p className="text-center mt-5 text-[17px] text-text-muted max-w-[56ch] mx-auto leading-relaxed">{sub}</p>}
    </div>
  );
}

function IconCard({ Icon, title, body, href }: { Icon: LucideIcon; title: string; body: string; href?: string }) {
  const inner = (
    <div className="flex flex-col gap-sm group">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 mb-xs">
        <Icon size={22} className="text-accent" strokeWidth={1.75} />
      </div>
      <h3 className="text-[17px] font-semibold text-text flex items-center gap-1">
        {title}
        {href && <span className="text-accent text-[13px] opacity-0 group-hover:opacity-100 transition-opacity">→</span>}
      </h3>
      <p className="text-[15px] text-text-muted leading-relaxed">{body}</p>
    </div>
  );
  return href ? <Link to={href} className="block">{inner}</Link> : inner;
}

function CallButtons({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-sm">
      <Button asChild variant="whatsapp" size="lg">
        <a href={withSlash(ipadWa(PREFILL))} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> WhatsApp Us</a>
      </Button>
      <Button asChild variant={dark ? "secondary" : "outline"} size="lg" className={dark ? "bg-white/10 text-white border-white/30 hover:bg-white/20" : ""}>
        <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call Now</a>
      </Button>
    </div>
  );
}

export default function IPadRepairHub() {
  const reviews = pickReviews([], { devices: reviewDevicesForPath(PATH), min: 3, seed: PATH });
  useSeo(
    { title: "iPad Repair Dubai", description: "", path: PATH },
    [pageWithSpeakable({ url: SITE.url + PATH, name: "iPad Repair Dubai" })],
  );
  const weekdayHours = HOURS[0].open;
  const sunday = HOURS.find((h) => h.day === "Sunday")?.open ?? "";

  return (
    <PageShell>
      <div className="-mb-[4rem] bg-bg text-text">

        {/* ── BREADCRUMB ── */}
        <div className="pt-[64px]" style={{ borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 py-[6px]">
            <BreadcrumbTrail tone="dark" trail={[
              { name: "Home", path: "/" },
              { name: "Apple Repair", path: "/apple-repair-dubai" },
              { name: "iPad Repair", path: PATH },
            ]} />
          </div>
        </div>

        {/* ── HERO ── */}
        <Hero
          image="/images/topics/ipad-repair-hub-dubai.jpg"
          imageAlt="iPad repair Dubai - iPad Pro M5 full teardown exploded-view engineering infographic"
          variant="device"
          tone="dark"
          eyebrow="Independent iPad specialist · Dubai Media City"
          title="iPad Repair Dubai"
          subtitle="Screens, batteries, charging ports, liquid damage and board faults on every iPad, from the current iPad Pro (M5) back to older generations. Free diagnosis and a written quote on WhatsApp before any work."
          ctaLabel="WhatsApp your iPad model"
        >
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> {REVIEW_COUNT}+ Google reviews</span>
            <span>·</span><span>Genuine or quality-tested parts</span>
            <span>·</span><span>Walk in, Dubai Media City</span>
          </p>
        </Hero>

        <QuickAnswer
          question="Where can I get an iPad repaired in Dubai?"
          answer="MacBook Repair Dubai is an independent workshop at Concord Tower, Dubai Media City, repairing every iPad from the current iPad Pro (M5), iPad Air (M4), iPad mini (A17 Pro) and iPad (A16) back to older generations. Diagnosis is free, the quote comes in writing on WhatsApp before any work, and you can walk in without an appointment."
        />

        <TakeawaysByline
          updated="September 2026"
          reviewer={`${TECH.name}, ${TECH.specialisation}`}
          years={TECH.years}
          items={[
            "Current models covered: iPad Pro 11- and 13-inch (M5), iPad Air 11- and 13-inch (M4), iPad mini (A17 Pro) and iPad (A16), plus older generations.",
            "iPad Pro (M4 and M5) uses a tandem OLED panel; Air, mini and the standard iPad use an LCD. The panel type sets the screen part.",
            "Air, mini and Pro screens are fully laminated, so a crack means a full display assembly; the standard iPad's glass can often be replaced on its own.",
            "Screen, battery and charging-port repairs leave your data in place; we do not erase an iPad for those jobs.",
            "Warranty depends on the repair: up to 12 months on hardware, 3 months on batteries, 90 days on screens, 15 days on board, liquid and data work.",
            "Free diagnosis and a written WhatsApp quote before any work; walk in, or send it with a same-day courier you book.",
          ]}
        />

        {/* ── USP STRIP ── */}
        <div className="mt-xl" style={{ borderBottom: "1px solid var(--color-border)", borderTop: "1px solid var(--color-border)" }}>
          <ul className="mx-auto max-w-content px-5 md:px-6 py-md flex flex-wrap justify-center gap-x-xl gap-y-sm">
            {[
              { Icon: Search,     label: "Free iPad diagnosis" },
              { Icon: BadgeCheck, label: "No fix, no charge" },
              { Icon: MapPin,     label: "Walk in, Dubai Media City" },
              { Icon: ShieldCheck,label: "Genuine or quality-tested parts" },
              { Icon: Clock,      label: "Written quote first" },
              { Icon: Star,       label: "Trusted since 2004" },
            ].map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-xs text-[14px] font-medium text-text">
                <Icon size={15} className="text-accent shrink-0" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <StatBand
          className=""
          stats={[
            { stat: `${NAP.yearsInBusiness}+`, label: "Years in Dubai" },
            { stat: `${REVIEW_COUNT}+`, label: "Google reviews" },
            { stat: "Free", label: "Diagnosis" },
            { stat: "Up to 12 mo", label: "Written warranty" },
          ]}
        />

        {/* ── CURRENT MODELS ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <SectionHeading
            label="Current models first"
            title="Which iPad do you have?"
            sub={<>Find it in Settings → General → About → Model Name. These are the iPads Apple sells today (September 2026).</>}
          />
          <div className="grid gap-md sm:grid-cols-2">
            {CURRENT_IPADS.map((m) => (
              <article key={m.name} className="rounded-xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-6 flex flex-col gap-sm">
                <h3 className="text-[18px] font-semibold text-text">{m.name}</h3>
                <p className="text-[14px] text-text-muted leading-relaxed">
                  {m.display}. {m.laminated ? "Fully laminated, so a crack means a full display assembly." : "Not laminated, so a cracked glass can usually be replaced without the LCD."}
                </p>
                <p className="text-[14px] flex flex-wrap gap-x-md gap-y-1 mt-auto">
                  {m.pages.map((p) => <Link key={p.href} to={p.href} className="text-accent font-semibold hover:underline">{p.label} repair ›</Link>)}
                  <a href={ipadWa(`Hi, I need a repair on my ${m.name}. Fault:`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent font-semibold hover:underline">
                    <MessageCircle size={14} aria-hidden /> WhatsApp
                  </a>
                </p>
              </article>
            ))}
          </div>
          <p className="mt-md text-[14px] text-text-muted text-center max-w-[70ch] mx-auto">
            The iPad Air (M4) went on sale in March 2026, so we confirm part availability on WhatsApp before you book. Deciding between the two? Read{" "}
            <Link to="/blog/ipad-air-m4-vs-pro-m5-2026/" className={inlineLink}>iPad Air M4 vs iPad Pro M5</Link>.
          </p>

          <h3 className="text-[18px] font-semibold text-text mt-[56px] mb-md text-center">Older generations</h3>
          <ul className="flex flex-wrap justify-center gap-2">
            {OLDER_IPAD_PAGES.map((p) => (
              <li key={p.href}>
                <Link to={p.href} className="inline-flex items-center px-3 py-2 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[13px] text-accent hover:border-accent/40 hover:bg-accent/5 transition-colors">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ── SERVICES ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <SectionHeading
            label="What we fix"
            title="iPad repair services"
            sub="Every repair below is done in our Dubai Media City workshop."
          />
          <div className="grid gap-x-xl gap-y-[56px] sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <IconCard key={s.title} Icon={s.Icon} title={s.title} body={s.body} href={s.href} />
            ))}
          </div>
          <ul className="mt-[56px] flex flex-wrap justify-center gap-2">
            {SERVICE_PAGES.map(([label, href]) => (
              <li key={href}>
                <Link to={href} className="inline-flex px-3 py-2 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[14px] text-accent hover:border-accent/40 hover:bg-accent/5 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-xl flex justify-center"><CallButtons /></div>
        </section>

        {/* ── WHAT FAILS ── */}
        <section className="bg-bg-alt mt-[96px] py-[80px]" style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <SectionHeading label="From the bench" title="What usually fails on an iPad" sub="And what each fault means for the repair." />
            <div className="grid gap-md md:grid-cols-2">
              {FAULTS.map((f) => (
                <article key={f.title} className="rounded-xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-6">
                  <h3 className="text-[17px] font-semibold text-text mb-sm">{f.title}</h3>
                  <p className="text-[15px] text-text-muted leading-relaxed">{f.body}</p>
                </article>
              ))}
            </div>
            <div className="mt-xl max-w-[72ch] mx-auto">
              <h3 className="text-[19px] font-semibold text-text mb-sm">iPad Pro repair</h3>
              <p className="text-[15px] text-text-muted leading-relaxed">
                iPad Pro is the costliest iPad to repair because of its panel: tandem OLED on the M4 and M5, mini-LED Liquid Retina XDR on the 12.9-inch M1 and M2, and a standard LCD on the 11-inch M1 and M2. Each needs its own part, and M5 parts are ordered for your model. See the{" "}
                <Link to="/ipad-pro-11-m5-repair-dubai/" className={inlineLink}>iPad Pro 11" M5</Link> and{" "}
                <Link to="/ipad-pro-13-m5-repair-dubai/" className={inlineLink}>iPad Pro 13" M5</Link> pages.
              </p>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <SectionHeading label="How it works" title="Our iPad repair process" />
          <div className="grid gap-x-[48px] gap-y-[56px] md:grid-cols-3">
            {PROCESS.map((step, i) => (
              <div key={step.title} className="flex flex-col">
                <p aria-hidden="true" data-step={`0${i + 1}`} className="text-[72px] font-bold leading-none text-accent/15 mb-md select-none before:content-[attr(data-step)]" />
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-accent/10 mb-md">
                  <step.Icon size={20} className="text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="text-[19px] font-semibold text-text mb-sm">{step.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── WARRANTY + NEAR ME ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px] grid gap-lg md:grid-cols-2">
          <div className="rounded-xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-6">
            <h2 className="text-[24px] font-bold tracking-tight text-text mb-md">What warranty comes with an iPad repair?</h2>
            <ul className="text-[15px] text-text-muted leading-relaxed space-y-2 list-disc pl-5">
              <li><strong className="text-text">Hardware</strong> (charging port, cameras, buttons, speakers): up to 12 months.</li>
              <li><strong className="text-text">Battery:</strong> 3 months.</li>
              <li><strong className="text-text">Screens:</strong> 90 days.</li>
              <li><strong className="text-text">Board, liquid, software and data work:</strong> 15 days.</li>
            </ul>
            <p className="mt-md text-[14px] text-text-muted">A new crack or spill after the repair is not covered. Full terms: <Link to="/warranty/" className={inlineLink}>warranty</Link>.</p>
          </div>
          <div className="rounded-xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-6">
            <h2 className="text-[24px] font-bold tracking-tight text-text mb-md">iPad repair near me: where we are</h2>
            <p className="text-[15px] text-text-muted leading-relaxed mb-sm">
              One workshop, not a chain: {NAP.street}, {NAP.area}. Open Monday to Saturday, {weekdayHours}; Sunday {sunday.toLowerCase()}.
            </p>
            <p className="text-[15px] text-text-muted leading-relaxed">
              From Media City, JLT, Marina or Al Barsha, walking in is quickest; message first so we can check the part. From further away, book a same-day courier yourself and WhatsApp us the tracking link. More on our{" "}
              <Link to="/apple-repair-near-me-dubai/" className={inlineLink}>Apple repair near me</Link> page.
            </p>
          </div>
        </section>

        {/* ── VS APPLE ── */}
        <VsAppleStore
          tone="dark"
          heading="Independent iPad repair or Apple?"
          intro="An honest comparison. Apple's own UAE iPad fees are on our battery replacement page, attributed and dated."
          rows={VS_APPLE_ROWS}
        />

        {/* ── REVIEWS ── */}
        {reviews.length > 0 && (
          <section className="mt-[96px] py-[80px]" style={{ background: "#2C3137" }}>
            <div className="mx-auto max-w-content px-5 md:px-6">
              <div className="text-center mb-[56px]">
                <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent-bright font-semibold mb-4 max-w-none w-full">What customers say</p>
                <h2 className="text-center text-[36px] md:text-[52px] font-bold tracking-tight text-white leading-[1.1]">iPad repair reviews from Google</h2>
              </div>
              <ReviewGrid reviews={reviews} tone="dark" />
            </div>
          </section>
        )}

        {/* ── FAQ ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
            <div className="lg:sticky lg:top-24 rounded-xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">FAQ</p>
              <h2 className="text-[22px] font-bold tracking-tight text-text leading-snug mb-3">iPad repair questions</h2>
              <div className="mt-5 pt-5 border-t border-border flex flex-col gap-2 text-[13px] text-text-muted">
                <span>✓ Free diagnosis</span>
                <span>✓ No fix, no charge</span>
                <span>✓ Warranty up to 12 months</span>
                <span>✓ Walk in, no appointment</span>
              </div>
            </div>
            <FAQAccordion items={FAQS} injectSchema />
          </div>
        </section>

        {/* ── LOCATION ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-6">Find us</p>
          <LocationBlock tone="dark" compact />
        </section>

        {/* ── RELATED ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4 max-w-none w-full">Related</p>
          <div className="flex flex-wrap justify-center gap-x-lg gap-y-sm text-[15px]">
            {[
              { label: "iPad Screen Repair Dubai",      href: "/ipad-screen-repair-dubai" },
              { label: "iPad Battery Replacement",      href: "/ipad-battery-replacement-dubai" },
              { label: "iPad Charging Port Repair",     href: "/ipad-charging-port-repair-dubai" },
              { label: "iPad battery drain guide",      href: "/blog/ipad-battery-drain-dubai" },
              { label: "iPhone Repair Dubai",           href: "/iphone-repair-dubai" },
              { label: "MacBook Repair Dubai",          href: "/macbook-repair-dubai" },
              { label: "Apple Repair Dubai",            href: "/apple-repair-dubai" },
            ].map((l) => <Link key={l.href} to={withSlash(l.href)} className="text-accent underline underline-offset-2 hover:no-underline">{l.label} ›</Link>)}
          </div>
        </section>

        {/* ── CTA ── */}
        <CtaBand
          eyebrow="Ready to fix your iPad?"
          headline="Free diagnosis · No fix, no charge · Warranty up to 12 months"
          description="Send your iPad model and a photo of the fault. We reply with a quote, then you walk in or send it by courier."
          whatsappHref={ipadWa(PREFILL)}
        />

      </div>

      {/* On-page capture, the standard's form with the shared repair preset. */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]" aria-labelledby="ipad-lead">
        <h2 id="ipad-lead" className="text-[26px] md:text-[32px] font-bold mb-md">Get your iPad repair quote</h2>
        <LeadForm preset={PRESETS.repair} sourcePath={PATH} defaultDeviceType="iPad" />
      </section>

      <RelatedArticles path={PATH} />
    </PageShell>
  );
}
