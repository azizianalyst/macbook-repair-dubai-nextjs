"use client";
import {
  Star, MessageCircle, Phone,
  Monitor, BatteryCharging, Droplets, PlugZap, Code2, Database,
  Cpu, Camera, Volume2, Home, Wifi,
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
  ["iPad Pro 13\" M5", "/ipad-pro-13-m5-repair-dubai"], ["iPad Pro 13\" M4", "/ipad-pro-13-m4-repair-dubai"], ["iPad Pro 12.9\" M2", "/ipad-pro-12.9-m2-repair-dubai"], ["iPad Pro 12.9\" M1", "/ipad-pro-12.9-m1-repair-dubai"], ["iPad Pro 11\" M5", "/ipad-pro-11-m5-repair-dubai"], ["iPad Pro 11\" M4", "/ipad-pro-11-m4-repair-dubai"], ["iPad Pro 11\" M2", "/ipad-pro-11-m2-repair-dubai"], ["iPad Pro 11\" M1", "/ipad-pro-11-m1-repair-dubai"],
  ["iPad Air M4 13\"", "/ipad-air-m4-13-repair-dubai"], ["iPad Air M4 11\"", "/ipad-air-m4-11-repair-dubai"], ["iPad Air M3 13\"", "/ipad-air-m3-13-repair-dubai"], ["iPad Air M3 11\"", "/ipad-air-m3-11-repair-dubai"], ["iPad Air M2 13\"", "/ipad-air-m2-13-repair-dubai"], ["iPad Air M2 11\"", "/ipad-air-m2-11-repair-dubai"], ["iPad Air 5", "/ipad-air-5-repair-dubai"], ["iPad Air 4", "/ipad-air-4-repair-dubai"],
  ["iPad 11th gen", "/ipad-11th-gen-repair-dubai"], ["iPad 10th gen", "/ipad-10th-gen-repair-dubai"], ["iPad 9th gen", "/ipad-9th-gen-repair-dubai"], ["iPad (older gen)", "/ipad-older-gen-repair-dubai"],
  ["iPad mini 7", "/ipad-mini-7-repair-dubai"], ["iPad mini 6", "/ipad-mini-6-repair-dubai"], ["iPad mini 5", "/ipad-mini-5-repair-dubai"],
];

const SERVICE_PAGES = [
  ["Screen Repair", "/ipad-screen-repair-dubai"], ["Battery Replacement", "/ipad-battery-replacement-dubai"], ["Charging Port", "/ipad-charging-port-repair-dubai"], ["Back Glass", "/ipad-back-glass-repair-dubai"], ["Camera Repair", "/ipad-camera-repair-dubai"], ["Speaker", "/ipad-speaker-repair-dubai"], ["Home Button", "/ipad-home-button-repair-dubai"], ["Power Button", "/ipad-power-button-repair-dubai"], ["Smart Connector", "/ipad-smart-connector-repair-dubai"], ["Water Damage", "/ipad-water-damage-repair-dubai"], ["Software Reset", "/ipad-software-reset-dubai"], ["Full Diagnostic", "/ipad-full-diagnostic-dubai"], ["iCloud Unlock", "/ipad-icloud-unlock-dubai"], ["Pencil Compatibility", "/ipad-pencil-compatibility-dubai"],
];

const SERVICES: { title: string; body: string; Icon: LucideIcon; href?: string }[] = [
  { Icon: Monitor,         title: "Screen Repair",          href: "/ipad-screen-repair-dubai",          body: "Cracked or shattered display? We replace iPad Pro OLED panels, Air LCD panels, and standard iPad glass with same-day service on most models." },
  { Icon: BatteryCharging, title: "Battery Replacement",    href: "/ipad-battery-replacement-dubai",    body: "Battery draining fast or swelling? We fit genuine-grade cells on all iPad models and recalibrate for accurate charge reporting." },
  { Icon: PlugZap,         title: "Charging Port Repair",   href: "/ipad-charging-port-repair-dubai",   body: "iPad not charging? We repair USB-C and Lightning charging ports, smart connectors, and charging IC faults on all models." },
  { Icon: Camera,          title: "Camera Repair",          href: "/ipad-camera-repair-dubai",          body: "Blurry or non-functioning camera? We replace front and rear camera modules and restore Face ID / Touch ID to full function." },
  { Icon: Cpu,             title: "Logic Board Repair",     href: undefined,                             body: "Component-level board repair: chip replacement, micro-solder, power-rail faults. We fix what Apple would replace at full-board cost." },
  { Icon: Droplets,        title: "Water Damage Repair",    href: "/ipad-water-damage-repair-dubai",    body: "Liquid spill? Stop using it right away and contact us. Ultrasonic board clean and component repair restore most water-damaged iPads." },
  { Icon: Volume2,         title: "Speaker Repair",         href: "/ipad-speaker-repair-dubai",         body: "Crackling, muffled, or silent audio? We repair loudspeaker assemblies and microphone modules on all iPad generations." },
  { Icon: Home,            title: "Home Button Repair",     href: "/ipad-home-button-repair-dubai",     body: "Home button or Touch ID not responding? We replace the button assembly and pair a new Touch ID sensor for full function." },
  { Icon: Database,        title: "Data Recovery",          href: undefined,                             body: "Lost files or contacts? We recover data from broken-screen iPads, water-damaged boards, and failed SSDs." },
  { Icon: Code2,           title: "Software Reset",         href: "/ipad-software-reset-dubai",         body: "Boot loops, frozen OS, or activation issues? We diagnose and fix software problems without erasing your data where possible." },
  { Icon: Wifi,            title: "Wi-Fi & Connectivity",   href: undefined,                             body: "Can't connect or dropping Wi-Fi? We repair antenna cables, Wi-Fi modules, and Bluetooth chips on all iPad models." },
  { Icon: Monitor,         title: "Back Glass Repair",      href: "/ipad-back-glass-repair-dubai",      body: "Cracked rear glass? We replace the back panel on iPad Pro models and restore the original finish." },
];

const PROCESS: { title: string; body: string; Icon: LucideIcon }[] = [
  { Icon: Search,      title: "Free Diagnosis",           body: "Walk in or WhatsApp. Our technician inspects your iPad, identifies the fault, and explains the options, free of charge, even if you walk away." },
  { Icon: Clock,       title: "Quote Before Repair",      body: "Final written price on WhatsApp before any repair starts. Approve, decline, or collect your device, your choice, zero obligation." },
  { Icon: ShieldCheck, title: "Quality Check & Warranty", body: "After repair we run a full function test covering screen, touch, cameras, and connectivity. Written warranty up to 12 months included." },
];

const WHY: { title: string; body: string; Icon: LucideIcon }[] = [
  { Icon: Award,       title: "Experienced Technicians", body: "Our technicians handle every iPad model from the entry-level standard iPad to the iPad Pro M5, with chip-level board repair experience." },
  { Icon: ShieldCheck, title: "Genuine Parts",           body: "We use original Apple or OEM-grade replacement parts to ensure your iPad performs like new; and we label which you're getting before work starts." },
  { Icon: Clock,       title: "Same-Day Delivery",       body: "Most iPad screen and battery jobs finish the same day. Free door-to-door pickup and return delivery across Dubai." },
  { Icon: Truck,       title: "Free Pickup Dubai-wide",  body: "Free courier pickup and return delivery from any Dubai address. WhatsApp your model and area. We confirm collection within minutes." },
  { Icon: Cpu,         title: "Chip-Level Repairs",      body: "We repair at component level, not just module-swap. Board repairs Apple would quote as 'unrepairable' are handled in our Dubai Media City workshop." },
];

const TESTIMONIALS = [
  { name: "Leilla Manic", body: "My iPad's charging port was faulty and I had trouble finding a place that could fix it quickly. The service provider addressed the issue promptly, ensuring a smooth, hassle-free process. The repair was efficient and affordable, highly recommended." },
  { name: "Sarah Ahmad",  body: "I couldn't find anyone to fix my iPad near me. Luckily, the repair service offered a mail-in option. I sent it in, got it fixed, and had it back in a few days. Very convenient." },
  { name: "Vinketish",    body: "My iPad had suffered water damage and I was worried about losing all my data. The experts not only restored my iPad but also saved all my important files. Their attention to detail and customer service is top-notch." },
];

const FAQ_GROUPS = [
  {
    category: "Pricing & booking",
    items: [
      { q: "How much does iPad repair cost in Dubai?", a: "Screen repair starts from AED 250, battery replacement from AED 200, charging port repair from AED 150, and water damage from AED 249. Your exact price is confirmed in writing after a free diagnosis, no obligation to proceed." },
      { q: "How long does iPad repair take?", a: "Most common repairs (screen, battery, charging port) are completed the same day, often in 2–4 hours. Logic board and water damage repairs take 24–72 hours depending on severity. We confirm the timeline at diagnosis." },
      { q: "Do you offer free pickup in Dubai?", a: "Yes. Free door-to-door pickup and return delivery anywhere in Dubai. WhatsApp us your address and we arrange collection same day." },
    ],
  },
  {
    category: "Parts & warranty",
    items: [
      { q: "Do you use genuine Apple parts?", a: "We use original Apple parts where available and OEM-grade alternatives otherwise; and we tell you which before work starts. Every iPad repair carries a written warranty up to 12 months." },
      { q: "Is it worth replacing an iPad screen?", a: "Almost always yes. A screen replacement extends iPad life by years at a fraction of the cost of a new device. For older iPads (iPad 9, iPad Air 4), repair often costs less than AED 350, vs AED 1,500+ for a new device." },
    ],
  },
  {
    category: "Specific repairs",
    items: [
      { q: "Will replacing the screen erase my data?", a: "No. Screen replacement is entirely separate from data storage. Your files, apps, and settings remain completely intact unless the board itself is damaged." },
      { q: "Can you fix iPad Pro OLED display?", a: "Yes. iPad Pro M4 and newer use OLED panels. We source genuine Apple OLED displays and replace them with full ProMotion and True Tone calibration restored. Repair costs are higher than LCD models due to panel cost." },
      { q: "Can you repair iPad that won't charge or turn on?", a: "Yes. We diagnose the fault, dead battery, failed charging IC, port damage, or board fault, and quote for the specific component. Most won't-charge faults are fixed same day." },
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

export default function IPadRepairHub() {
  useSeo(
    {
      title: "iPad Repair Dubai - Screen, Battery & Logic Board Experts",
      description:
        "Professional iPad repair in Dubai for all models. Certified technicians fix screens, batteries, charging ports, and logic boards with genuine Apple parts.",
      path: "/ipad-repair-dubai",
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
              { name: "iPad Repair", path: "/ipad-repair-dubai" },
            ]} />
          </div>
        </div>

        {/* ── HERO ── */}
        <Hero
          image="/images/topics/ipad-repair-hub-dubai.jpg"
          imageAlt="iPad repair Dubai - iPad Pro M5 full teardown exploded-view engineering infographic"
          variant="device"
          tone="dark"
          eyebrow="iPad specialist"
          title="Cost-Effective iPad Repair Dubai"
        >
          <div className="mt-md" itemScope itemType="https://schema.org/Question">
            <p className="text-[15px] font-semibold text-text mb-2" itemProp="name">
              Where can I get my iPad repaired in Dubai?
            </p>
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p className="text-[15px] text-text-muted leading-relaxed" itemProp="text">
                MacBook Repair Dubai repairs every iPad, from the standard iPad through iPad Pro M5, at Concord Tower, Dubai Media City. Screen, battery, charging port, water damage, and board-level repair with free diagnosis, free citywide pickup, genuine or OEM-grade parts, and written warranty up to 12 months.
              </p>
            </div>
          </div>
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> Expert Apple technicians</span>
            <span>·</span><span>Genuine / OEM parts</span>
            <span>·</span><span>Same-day delivery</span>
          </p>
        </Hero>

        {/* ── USP STRIP ── */}
        <div style={{ borderBottom: "1px solid var(--color-border)" }}>
          <ul className="mx-auto max-w-content px-5 md:px-6 py-md flex flex-wrap justify-center gap-x-xl gap-y-sm">
            {[
              { Icon: Search,     label: "Free iPad diagnosis" },
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
                { stat: "216+",  label: "Google reviews" },
                { stat: "2–4 h", label: "Screen repair" },
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
            title="iPad models we repair"
            sub="Every iPad from the standard iPad through iPad Pro M5. Tap a model for its dedicated repair page."
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
            title="iPad repair services"
            sub="From a cracked iPad Pro screen to a dead charging IC, our technicians handle every repair in our Dubai Media City workshop."
          />
          <div className="grid gap-x-xl gap-y-[56px] sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <IconCard key={s.title} Icon={s.Icon} title={s.title} body={s.body} href={s.href} />
            ))}
          </div>
          <div className="mt-xl flex justify-center"><CallButtons /></div>
        </section>

        {/* ── PROCESS ── */}
        <section className="bg-bg-alt mt-[96px] py-[80px]" style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <SectionHeading label="How it works" title="Our iPad repair process" sub="Simple, transparent, and fast." />
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
          </div>
        </section>

        {/* ── SIGNS ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <SectionHeading label="Warning signs" title="Signs your iPad needs service" />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-[900px] mx-auto">
            {[
              "Cracked or shattered screen",
              "Exposure to liquid or water damage",
              "Unresponsive or inconsistent touchscreen",
              "Battery draining unusually quickly",
              "Won't charge or charges intermittently",
              "Malfunctioning cameras or flashlight",
              "Distorted, crackling, or no speaker sound",
              "Inability to connect to Wi-Fi or cellular",
              "Frequent overheating, even when not in use",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3 rounded-xl border border-border bg-bg-card p-4">
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" aria-hidden />
                <span className="text-[14px] text-text-muted leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── ALL REPAIRS ── */}
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
              { label: "iPad Screen Repair Dubai",     href: "/ipad-screen-repair-dubai" },
              { label: "iPad Battery Replacement",     href: "/ipad-battery-replacement-dubai" },
              { label: "iPhone Repair Dubai",          href: "/iphone-repair-dubai" },
              { label: "MacBook Repair Dubai",         href: "/macbook-repair-dubai" },
              { label: "Apple Repair Dubai",           href: "/apple-repair-dubai" },
            ].map((l) => <a key={l.href} href={l.href} className="text-accent hover:underline">{l.label} ›</a>)}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mt-[80px]" style={{ background: "#2C3137" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 py-[48px] flex flex-col sm:flex-row items-center justify-between gap-md">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-on-primary-muted mb-1">Ready to fix your iPad?</p>
              <h2 className="text-[22px] md:text-[26px] font-bold text-white leading-tight">
                Free diagnosis · No fix, no charge · Warranty up to 12 months
              </h2>
            </div>
            <div className="flex flex-wrap gap-sm shrink-0"><CallButtons dark /></div>
          </div>
        </section>

      </div>
      <RelatedArticles path="/ipad-repair-dubai" />
    </PageShell>
  );
}
