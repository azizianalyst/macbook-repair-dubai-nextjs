"use client";
import {
  Star, MessageCircle, Phone,
  Monitor, BatteryCharging, Droplets, PlugZap, Code2, Database,
  Cpu, Camera, Volume2, Shield, Lock, Wifi,
  Wrench, ShieldCheck, Clock, Award, Search, BadgeCheck, Truck,
  CheckCircle2,
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
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization } from "@/lib/schema";
import { NAP } from "@/content/site";
import type { LucideIcon } from "lucide-react";

const MODEL_PAGES = [
  ["iPhone 17 Pro Max", "/iphone-17-pro-max-repair-dubai"], ["iPhone 17 Pro", "/iphone-17-pro-repair-dubai"], ["iPhone 17", "/iphone-17-repair-dubai"], ["iPhone 17e", "/iphone-17e-repair-dubai"], ["iPhone Air", "/iphone-air-repair-dubai"],
  ["iPhone 16 Pro Max", "/iphone-16-pro-max-repair-dubai"], ["iPhone 16 Pro", "/iphone-16-pro-repair-dubai"], ["iPhone 16 Plus", "/iphone-16-plus-repair-dubai"], ["iPhone 16", "/iphone-16-repair-dubai"], ["iPhone 16e", "/iphone-16e-repair-dubai"],
  ["iPhone 15 Pro Max", "/iphone-15-pro-max-repair-dubai"], ["iPhone 15 Pro", "/iphone-15-pro-repair-dubai"], ["iPhone 15 Plus", "/iphone-15-plus-repair-dubai"], ["iPhone 15", "/iphone-15-repair-dubai"],
  ["iPhone 14 Pro Max", "/iphone-14-pro-max-repair-dubai"], ["iPhone 14 Pro", "/iphone-14-pro-repair-dubai"], ["iPhone 14 Plus", "/iphone-14-plus-repair-dubai"], ["iPhone 14", "/iphone-14-repair-dubai"],
  ["iPhone 13 Pro Max", "/iphone-13-pro-max-repair-dubai"], ["iPhone 13 Pro", "/iphone-13-pro-repair-dubai"], ["iPhone 13", "/iphone-13-repair-dubai"], ["iPhone 13 mini", "/iphone-13-mini-repair-dubai"],
  ["iPhone SE (3rd gen)", "/iphone-se-3rd-gen-repair-dubai"],
  ["iPod touch (7th gen)", "/ipod-touch-7-repair-dubai"],
];

const SERVICE_PAGES = [
  ["Screen Repair", "/iphone-screen-repair-dubai"], ["Back Glass", "/iphone-back-glass-repair-dubai"], ["Battery Replacement", "/iphone-battery-replacement-dubai"], ["Camera Repair", "/iphone-camera-repair-dubai"], ["Charging Port", "/iphone-charging-port-repair-dubai"], ["Lightning Port", "/iphone-lightning-port-repair-dubai"], ["USB-C Port", "/iphone-usb-c-port-repair-dubai"], ["Speaker", "/iphone-speaker-repair-dubai"], ["Earpiece", "/iphone-earpiece-repair-dubai"], ["Microphone", "/iphone-microphone-repair-dubai"], ["Headphone Jack", "/iphone-headphone-jack-repair-dubai"], ["Face ID", "/iphone-face-id-repair-dubai"], ["Home Button", "/iphone-home-button-repair-dubai"], ["Power Button", "/iphone-power-button-repair-dubai"], ["Volume Button", "/iphone-volume-button-repair-dubai"], ["Vibration Motor", "/iphone-vibration-motor-repair-dubai"], ["SIM Tray", "/iphone-sim-tray-repair-dubai"], ["NFC Repair", "/iphone-nfc-repair-dubai"], ["Wi-Fi & Bluetooth", "/iphone-wifi-bluetooth-repair-dubai"], ["Water Damage", "/iphone-water-damage-repair-dubai"], ["Logic Board Repair", "/iphone-logic-board-repair-dubai"], ["Data Recovery", "/iphone-data-recovery-dubai"], ["Software Fix", "/iphone-software-fix-dubai"], ["Full Diagnostic", "/iphone-full-diagnostic-dubai"], ["iCloud Unlock", "/iphone-icloud-unlock-dubai"], ["Network Unlock", "/iphone-network-unlock-dubai"],
];

const PRICING = [
  ["iPhone Screen Repair", "149–399"], ["iPhone Screen Replacement", "199–1,599"], ["iPhone Battery Replacement", "99–399"], ["iPhone Back Glass Replacement", "149–549"], ["iPhone Camera Repair", "299–649"], ["iPhone Charging Port Repair", "149–449"], ["iPhone Speaker Repair", "99–349"], ["iPhone Microphone Repair", "149–449"], ["iPhone Water Damage Repair", "249–699"], ["iPhone Logic Board Repair", "200–849"], ["iPhone Data Recovery", "350–1,499"], ["iPhone Software Troubleshooting", "99–299"], ["iPhone Button Repair", "99–249"], ["iPhone Face ID Repair", "299–599"],
];

const SERVICES: { title: string; body: string; Icon: LucideIcon; href?: string }[] = [
  { Icon: Monitor,         title: "Screen Repair",          href: "/iphone-screen-repair-dubai",         body: "Cracked or shattered display? We repair OLED and LCD screens on all iPhone models from iPhone 8 through iPhone 17 series." },
  { Icon: BatteryCharging, title: "Battery Replacement",    href: "/iphone-battery-replacement-dubai",   body: "Battery draining too fast or swelling? We replace genuine-grade batteries on all models and calibrate for accurate capacity reporting." },
  { Icon: Camera,          title: "Camera Repair",          href: "/iphone-camera-repair-dubai",         body: "Blurry, dark, or non-focusing camera? We repair front and rear camera modules, OIS, and macro lens assemblies." },
  { Icon: Droplets,        title: "Water Damage Repair",    href: "/iphone-water-damage-repair-dubai",   body: "Liquid spill or pool drop? Power off immediately and bring it in. Ultrasonic board clean and component repair." },
  { Icon: PlugZap,         title: "Charging Port Repair",   href: "/iphone-charging-port-repair-dubai",  body: "iPhone not charging? We repair USB-C, Lightning, and charging IC faults on all models. Same-day turnaround." },
  { Icon: Shield,          title: "Face ID Repair",         href: "/iphone-face-id-repair-dubai",        body: "Face ID not working? Sensor cluster replacement and TrueDepth camera calibration. Genuine Apple components only." },
  { Icon: Volume2,         title: "Speaker Repair",         href: "/iphone-speaker-repair-dubai",        body: "Distorted, muffled, or silent speaker? We repair loudspeaker, earpiece, and microphone assemblies with same-day service." },
  { Icon: Cpu,             title: "Logic Board Repair",     href: "/iphone-logic-board-repair-dubai",    body: "Component-level board repair: chip replacement, micro-solder, BGA reball. Apple replaces boards; we fix the component." },
  { Icon: Database,        title: "Data Recovery",          href: "/iphone-data-recovery-dubai",         body: "Lost contacts, photos, or messages? We recover data from water-damaged, dead-screen, and broken-connector iPhones." },
  { Icon: Code2,           title: "Software Fix",           href: "/iphone-software-fix-dubai",          body: "Boot loops, iOS corruption, or stuck activation? We diagnose and fix software issues without erasing your data." },
  { Icon: Lock,            title: "iCloud Unlock",          href: "/iphone-icloud-unlock-dubai",         body: "Locked iPhone with a previous owner's Apple ID? We handle activation lock removal and iCloud account unlock." },
  { Icon: Wifi,            title: "Wi-Fi & Bluetooth",      href: "/iphone-wifi-bluetooth-repair-dubai", body: "Connectivity dropping or not working? We repair Wi-Fi modules, Bluetooth chips, and antenna connectors." },
];

const PROCESS: { title: string; body: string; Icon: LucideIcon }[] = [
  { Icon: Wrench,      title: "Free Diagnosis",               body: "Walk in or WhatsApp us. Our technician checks your iPhone, identifies the exact fault, and explains the options, free of charge." },
  { Icon: Clock,       title: "Quote Before Repair",          body: "Final written price on WhatsApp before we start. Approve, decline, or take your phone back, no charge either way." },
  { Icon: ShieldCheck, title: "Quality Check & Warranty",     body: "After repair we run a full function test. Every iPhone repair carries a written warranty of up to 12 months: same fault back, repaired free." },
];

const WHY: { title: string; body: string; Icon: LucideIcon }[] = [
  { Icon: Award,       title: "Experienced Technicians",  body: "Our highly trained technicians deal with all types of iPhone repairs, keeping up with the newest Apple models and methods." },
  { Icon: ShieldCheck, title: "Genuine Parts",            body: "We use original Apple or OEM-grade replacement parts to ensure your iPhone performs like new after the repair." },
  { Icon: Clock,       title: "Same-Day Service",         body: "Most iPhone issues are fixed the same day. Screen, battery, and camera repairs finish in 30–90 minutes for walk-in appointments." },
  { Icon: Truck,       title: "Free Pickup Dubai-wide",   body: "Free door-to-door pickup and return delivery anywhere in Dubai. WhatsApp your address and we arrange same-day collection." },
  { Icon: Wrench,      title: "Transparent Pricing",      body: "Upfront pricing confirmed in writing before we touch the phone. No surprises, no hidden fees." },
];

const TESTIMONIALS = [
  { name: "Nathan Brown", body: "I want to thank the repair team for their excellent service. They changed the battery and front camera on my son's iPhone 13. I highly recommend this service center and thank the team for their amazing service." },
  { name: "Sarah Omer",  body: "I wasn't sure what was wrong with my iPhone, but the repair center swiftly detected the problem and quoted a reasonable fee. They didn't try to upsell me on anything needless, which I greatly appreciated. They've won my trust." },
  { name: "Ali Hassan",  body: "Dropped my iPhone 15 Pro and completely shattered the screen. They fixed it same day with an OLED panel that looks exactly like the original. Professional service and fair pricing." },
];

const FAQ_GROUPS = [
  {
    category: "Pricing & booking",
    items: [
      { q: "How much does iPhone repair cost in Dubai?", a: "Screen repair starts from AED 149, battery replacement from AED 99, camera repair from AED 299, and water damage treatment from AED 249. Your exact price is confirmed in writing after a free diagnosis, no obligation to proceed." },
      { q: "Do you offer same-day iPhone repair?", a: "Yes, most iPhone repairs (screen, battery, camera, charging port, buttons) finish the same day, often in 30–90 minutes for walk-in appointments. Logic board and water damage work may take 24–48 hours." },
      { q: "Do you offer free pickup in Dubai?", a: "Yes. Free door-to-door pickup and return delivery across Dubai. WhatsApp us your location and a courier comes to you within hours during business hours." },
    ],
  },
  {
    category: "Parts & warranty",
    items: [
      { q: "Do you use genuine Apple parts?", a: "We use original Apple or OEM-grade parts, depending on your preference. We label which type your repair uses on the quote before work starts. Every repair carries a written warranty up to 12 months." },
      { q: "What warranty comes with iPhone screen replacement?", a: "12-month warranty on OLED screen panels. If the same fault returns inside the period, we re-repair free of charge. Note: warranty does not cover new physical damage after the repair." },
    ],
  },
  {
    category: "Specific repairs",
    items: [
      { q: "Can you fix Face ID on iPhone?", a: "Yes. Face ID relies on the TrueDepth camera cluster and dot projector. We replace the sensor assembly with genuine Apple components and recalibrate Face ID. Third-party screens often break Face ID. We use panels that preserve it." },
      { q: "My iPhone won't turn on, can you fix it?", a: "Yes. 'Won't turn on' has many causes: dead battery, failed charging IC, software boot-loop, or board fault. We run a systematic diagnosis to find the exact cause and give you a transparent quote before any repair." },
      { q: "Can you recover data from a broken iPhone?", a: "In most cases, yes. If the screen is broken but the board works, we connect via DFU mode or a forensic cable to pull the data. For water-damaged boards, recovery success depends on damage extent. We assess free of charge." },
    ],
  },
];

function SectionHeading({ label, title, sub }: { label?: string; title: string; sub?: string }) {
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
        <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> WhatsApp Us</a>
      </Button>
      <Button asChild variant={dark ? "secondary" : "outline"} size="lg" className={dark ? "bg-white/10 text-white border-white/30 hover:bg-white/20" : ""}>
        <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call Now</a>
      </Button>
    </div>
  );
}

export default function IPhoneRepairHub() {
  useSeo(
    {
      title: "iPhone Repair Dubai - Independent Apple Repair Specialists",
      description:
        "Trusted iPhone repair in Dubai for screen, battery, water damage & logic board issues. Independent Apple specialists. Fast service with original Apple parts.",
      path: "/iphone-repair-dubai",
    },
    [localBusiness(), organization()],
  );

  return (
    <PageShell>
      <div className="-mb-[4rem] bg-bg text-text">

        {/* ── BREADCRUMB ── */}
        <div className="pt-[64px]" style={{ borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 py-[6px]">
            <BreadcrumbTrail tone="dark" trail={[
              { name: "Home", path: "/" },
              { name: "Apple Repair", path: "/apple-repair-dubai" },
              { name: "iPhone Repair", path: "/iphone-repair-dubai" },
            ]} />
          </div>
        </div>

        {/* ── HERO ── */}
        <Hero
          image="/images/topics/iphone-repair-hub-dubai.jpg"
          imageAlt="iPhone repair Dubai - iPhone 17 Pro full teardown exploded-view engineering infographic"
          variant="device"
          tone="dark"
          eyebrow="iPhone specialist"
          title="Top Rated iPhone Repair Dubai"
        >
          <div className="mt-md" itemScope itemType="https://schema.org/Question">
            <p className="text-[15px] font-semibold text-text mb-2" itemProp="name">
              Where can I get my iPhone repaired in Dubai?
            </p>
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p className="text-[15px] text-text-muted leading-relaxed" itemProp="text">
                MacBook Repair Dubai repairs every iPhone, from iPhone 8 through the iPhone 17 series, at Concord Tower, Dubai Media City. Screen, battery, camera, Face ID, water damage, and board-level repair with free diagnosis, free citywide pickup, and written warranty up to 12 months.
              </p>
            </div>
          </div>
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> Certified technicians</span>
            <span>·</span><span>Genuine / OEM parts</span>
            <span>·</span><span>Same-day service</span>
          </p>
        </Hero>

        {/* ── USP STRIP ── */}
        <div style={{ borderBottom: "1px solid var(--color-border)" }}>
          <ul className="mx-auto max-w-content px-5 md:px-6 py-md flex flex-wrap justify-center gap-x-xl gap-y-sm">
            {[
              { Icon: Search,     label: "Free iPhone diagnosis" },
              { Icon: BadgeCheck, label: "No fix, no charge" },
              { Icon: Truck,      label: "Free pickup Dubai-wide" },
              { Icon: ShieldCheck,label: "Genuine & OEM-grade parts" },
              { Icon: Clock,      label: "Same-day service" },
              { Icon: Star,       label: "Trusted since 2004" },
            ].map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-xs text-[14px] font-medium text-text">
                <Icon size={15} className="text-accent shrink-0" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* ── STATS ── */}
        <section style={{ background: "#2C3137", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.15)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { stat: "20+",   label: "Years in Dubai" },
                { stat: "215+",  label: "Google reviews" },
                { stat: "30 min",label: "Screen repair" },
                { stat: "12 mo", label: "Written warranty" },
              ].map(({ stat, label }, i) => (
                <div key={label} className="py-lg px-xl flex flex-col justify-center"
                  style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : undefined, textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}>
                  <p className="text-[32px] md:text-[40px] font-bold leading-none tracking-tight text-white">{stat}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-on-primary-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MODELS ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <SectionHeading
            label="Supported models"
            title="iPhone models we repair"
            sub="Every iPhone from the SE through iPhone 17 Pro Max. Tap a model for its dedicated repair page."
          />
          <ul className="flex flex-wrap gap-2">
            {MODEL_PAGES.map(([label, href]) => (
              <li key={href}>
                <Link to={href} className="inline-flex items-center px-3 py-2 border border-border bg-bg-card rounded-md text-[13px] text-accent hover:border-accent/40 hover:bg-accent/5 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ── SERVICES ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <SectionHeading
            label="What we fix"
            title="iPhone repair services"
            sub="From a cracked OLED screen to a dead logic board, our technicians handle every iPhone repair in our Dubai Media City workshop."
          />
          <div className="grid gap-x-xl gap-y-[56px] sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <IconCard key={s.title} Icon={s.Icon} title={s.title} body={s.body} href={s.href} />
            ))}
          </div>
          <div className="mt-xl flex justify-center"><CallButtons /></div>
        </section>

        {/* ── PRICING TABLE ── */}
        <section className="bg-bg-alt mt-[96px] py-[80px]" style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <SectionHeading label="Estimated prices" title="Services & starting prices" sub="All prices confirmed in writing after free diagnosis. Final price may vary by model." />
            <div className="overflow-x-auto border border-border rounded-xl bg-bg max-w-[640px] mx-auto">
              <table className="w-full text-[14px]">
                <thead className="bg-bg-card">
                  <tr className="text-left">
                    <th className="px-md py-sm font-semibold">Service</th>
                    <th className="px-md py-sm font-semibold">Starting price (AED)</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICING.map(([s, p], i) => (
                    <tr key={s} className={i % 2 ? "bg-bg-alt" : ""}>
                      <td className="px-md py-sm font-semibold">{s}</td>
                      <td className="px-md py-sm mono text-accent whitespace-nowrap">{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-text-muted mt-sm text-center">Estimated ranges only. Final price confirmed after a free diagnosis.</p>
            <div className="mt-lg flex justify-center"><CallButtons /></div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <SectionHeading label="How it works" title="Our iPhone repair process" sub="Simple, transparent, and fast." />
          <div className="grid gap-x-[48px] gap-y-[56px] md:grid-cols-3">
            {PROCESS.map((step, i) => (
              <div key={step.title} className="flex flex-col">
                <p className="text-[72px] font-bold leading-none text-accent/15 mb-md select-none">0{i + 1}</p>
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-accent/10 mb-md">
                  <step.Icon size={20} className="text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="text-[19px] font-semibold text-text mb-sm">{step.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SPECIALISED REPAIRS ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">All repair types</p>
          <ul className="flex flex-wrap gap-2">
            {SERVICE_PAGES.map(([label, href]) => (
              <li key={href}>
                <Link to={href} className="px-3 py-2 border border-border bg-bg-card rounded-md text-[14px] text-accent hover:border-accent/40 hover:bg-accent/5 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ── WHY ── */}
        <section className="bg-bg-alt mt-[96px] py-[80px]" style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <SectionHeading
              label="Why us"
              title="The independent Apple specialists in Dubai"
              sub="Not an Apple Authorised Service Centre. We're the faster, fairer-priced alternative with 20 years of experience."
            />
            <div className="grid gap-x-xl gap-y-[48px] sm:grid-cols-2 lg:grid-cols-3">
              {WHY.map((w) => <IconCard key={w.title} Icon={w.Icon} title={w.title} body={w.body} />)}
            </div>
          </div>
        </section>

        {/* ── SIGNS ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <SectionHeading label="Warning signs" title="Signs your iPhone needs repair" />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-[900px] mx-auto">
            {[
              "Water damage or liquid exposure",
              "Battery draining unusually quickly",
              "Cracked or shattered screen",
              "Overheating during normal usage",
              "Unresponsive or sluggish performance",
              "Camera producing blurry or dark images",
              "Sound problems: distorted or no audio",
              "Charging issues: won't charge or intermittent",
              "Buttons not working: power, volume, Home",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3 rounded-xl border border-border bg-bg-card p-4">
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" aria-hidden />
                <span className="text-[14px] text-text-muted leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="mt-[96px] py-[80px]" style={{ background: "#2C3137" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <div className="text-center mb-[56px]">
              <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent-bright font-semibold mb-4 max-w-none w-full">What customers say</p>
              <h2 className="text-center text-[36px] md:text-[52px] font-bold tracking-tight text-white leading-[1.1]">Real results from real people</h2>
            </div>
            <div className="grid gap-lg md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure key={t.name} className="flex flex-col gap-md p-xl rounded-2xl" style={{ background: "#242a30" }}>
                  <div className="flex gap-1" role="img" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} className="fill-star text-star" aria-hidden />)}
                  </div>
                  <blockquote className="text-[15px] text-on-primary-muted leading-relaxed flex-1">&ldquo;{t.body}&rdquo;</blockquote>
                  <figcaption className="font-semibold text-[14px] text-white">- {t.name}</figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-xl flex flex-wrap justify-center gap-xl text-[15px] text-on-primary-muted">
              <div><p className="font-semibold text-white">Mon - Sat</p><p>9:00 AM - 10:00 PM</p></div>
              <div><p className="font-semibold text-white">Sunday</p><p>Onsite service available</p></div>
            </div>
          </div>
        </section>

        {/* ── VS APPLE + FAQ ── */}
        <VsAppleStore tone="dark" />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
            <div className="lg:sticky lg:top-24 rounded-xl border border-border bg-bg-card p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">FAQ</p>
              <h2 className="text-[22px] font-bold tracking-tight text-text leading-snug mb-3">Frequently asked questions</h2>
              <div className="mt-5 pt-5 border-t border-border flex flex-col gap-2 text-[13px] text-text-muted">
                <span>✓ Free diagnosis</span>
                <span>✓ No fix, no charge</span>
                <span>✓ Warranty up to 12 months</span>
                <span>✓ Free pickup Dubai-wide</span>
              </div>
              <div className="mt-5 pt-5 border-t border-border flex flex-col gap-2">
                {FAQ_GROUPS.map((g) => (
                  <a key={g.category} href={`#faq-${g.category.replace(/\s+/g, "-").toLowerCase()}`}
                    className="text-[13px] text-accent hover:underline capitalize">{g.category}</a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[48px]">
              {FAQ_GROUPS.map((g, gi) => (
                <div key={g.category} id={`faq-${g.category.replace(/\s+/g, "-").toLowerCase()}`}>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">{g.category}</p>
                  <FAQAccordion items={g.items} injectSchema={gi === 0} tone="dark" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOCATION ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-6">Find us</p>
          <LocationBlock tone="dark" compact />
        </section>

        {/* ── RELATED SERVICES ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4 max-w-none w-full">Related services</p>
          <div className="flex flex-wrap justify-center gap-sm text-[15px]">
            {[
              { label: "iPhone Screen Repair Dubai",    href: "/iphone-screen-repair-dubai" },
              { label: "iPhone Battery Replacement",    href: "/iphone-battery-replacement-dubai" },
              { label: "iPad Repair Dubai",             href: "/ipad-repair-dubai" },
              { label: "MacBook Repair Dubai",          href: "/macbook-repair-dubai" },
              { label: "Apple Repair Dubai",            href: "/apple-repair-dubai" },
            ].map((l) => <a key={l.href} href={l.href} className="text-accent hover:underline">{l.label} ›</a>)}
          </div>
        </section>

        {/* ── RELATED GUIDES ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[48px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-1">Related guides</p>
          <ul className="flex flex-col gap-sm">
            <li><Link to="/can-iphone-motherboard-be-repaired" className="text-accent hover:underline">Can iPhone motherboard be repaired?</Link><span className="text-text-muted text-[14px] ml-2">A full guide to iPhone logic board repair options.</span></li>
            <li><Link to="/iphone-16-shocks-while-charging" className="text-accent hover:underline">iPhone shocking while charging</Link><span className="text-text-muted text-[14px] ml-2">Why your iPhone gives electric shocks when charging and how to fix it.</span></li>
          </ul>
        </section>

        {/* ── CTA ── */}
        <section className="mt-[80px]" style={{ background: "#2C3137" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 py-[48px] flex flex-col sm:flex-row items-center justify-between gap-md">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-on-primary-muted mb-1">Ready to fix your iPhone?</p>
              <h2 className="text-[22px] md:text-[26px] font-bold text-white leading-tight">
                Free diagnosis · No fix, no charge · Warranty up to 12 months
              </h2>
            </div>
            <div className="flex flex-wrap gap-sm shrink-0"><CallButtons dark /></div>
          </div>
        </section>

      </div>
      <RelatedArticles path="/iphone-repair-dubai" />
    </PageShell>
  );
}
