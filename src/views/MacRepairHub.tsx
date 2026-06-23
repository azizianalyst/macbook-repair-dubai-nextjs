"use client";
import {
  Star, MessageCircle, Phone,
  Monitor, Laptop, HardDrive, Server,
  BatteryCharging, Droplets, PlugZap, Code2, Database,
  Cpu, Thermometer, Power, Gauge, AlertTriangle, Wifi,
  Wrench, ShieldCheck, Clock, Award, Search, BadgeCheck, Truck,
  MapPin,
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

const DEVICES = [
  { label: "MacBook Air Repair",  href: "/macbook-air-repair-dubai",   Icon: Laptop,    sub: "M1 · M2 · M3 · M4 · M5 · Intel" },
  { label: "MacBook Pro Repair",  href: "/macbook-pro-repair-dubai",   Icon: Laptop,    sub: "M1–M5 · all Intel models" },
  { label: "iMac Repair",        href: "/imac-repair-dubai",          Icon: Monitor,   sub: "24\" M-series · 27\" Intel · 21.5\"" },
  { label: "Mac mini Repair",    href: "/mac-mini-repair-dubai",      Icon: HardDrive, sub: "M4 · M2 · M1 · Intel" },
  { label: "Mac Studio Repair",  href: "/mac-studio-repair-dubai",    Icon: HardDrive, sub: "M4 Max · M2 Ultra/Max" },
  { label: "Mac Pro Repair",     href: "/mac-pro-repair-dubai",       Icon: Server,    sub: "M2 Ultra · Intel tower/rack" },
];

const SERVICES: { title: string; body: string; Icon: LucideIcon; href?: string }[] = [
  { Icon: Monitor,         title: "Screen Repair",          href: "/macbook-screen-repair-dubai",         body: "Cracked, flickering, or dead display? We replace LCD, LED and Retina XDR panels on every Mac model, same day for most." },
  { Icon: BatteryCharging, title: "Battery Replacement",    href: "/macbook-battery-replacement-dubai",   body: "Swollen battery, fast drain, or heat issues? We replace genuine-grade batteries and restore full capacity on M1–M5 and Intel." },
  { Icon: Droplets,        title: "Water Damage Repair",    href: "/macbook-water-damage-repair-dubai",   body: "Liquid spill? Power off immediately and bring it in. Board-level ultrasonic clean and component repair." },
  { Icon: PlugZap,         title: "Not Charging Fix",       href: "/macbook-charging-port-repair-dubai",  body: "MagSafe or USB-C not charging? We diagnose the port, cable, or charging IC and get your Mac powering up again." },
  { Icon: Cpu,             title: "Logic Board Repair",     href: "/macbook-logic-board-repair-dubai",    body: "Component-level board repair: chip replacement, BGA reball, power-rail faults. Apple does full swaps; we fix the component." },
  { Icon: Database,        title: "Data Recovery",          href: "/macbook-data-recovery-dubai",         body: "Lost files after a failed drive or liquid damage? Our recovery process retrieves data from faulty SSDs and logic boards." },
  { Icon: HardDrive,       title: "Storage Upgrade",        href: "/macbook-ssd-upgrade-dubai",           body: "Slow and cramped? We upgrade SSDs and RAM on eligible Intel Macs for dramatically faster speed and more space." },
  { Icon: Thermometer,     title: "Overheating Fix",        href: "/macbook-overheating-fix-dubai",       body: "Fans running loud or throttling under load? We reclean thermal paste, replace heatsinks, and clear clogged fan vents." },
  { Icon: Power,           title: "Won't Turn On",          href: "/mac-not-turning-on-dubai",            body: "Dead Mac? We diagnose power rail failures, SMC issues, and logic board faults to bring it back to life." },
  { Icon: Gauge,           title: "Running Slow",           href: "/mac-performance-tune-dubai",          body: "Slow startup or sluggish apps? We clear software bloat, upgrade storage, and tune macOS for peak performance." },
  { Icon: AlertTriangle,   title: "System Crashing",        href: "/macbook-system-crashing-repair-dubai", body: "Frequent kernel panics? We find the root cause, failing RAM, SSD, or software, and fix it properly." },
  { Icon: Wifi,            title: "Wi-Fi & Bluetooth",      href: "/macbook-wifi-bluetooth-repair-dubai", body: "Dropping connection or unable to connect? We repair antenna cables and AirPort cards to restore reliable networking." },
];

const PROCESS: { title: string; body: string; Icon: LucideIcon }[] = [
  { Icon: Wrench,      title: "Transparent Quote",            body: "As soon as we diagnose the problem we give you a clear breakdown and price. Parts and labour included. No surprise charges. You decide whether to proceed." },
  { Icon: Clock,       title: "30-Minute Appointment Repair", body: "Pre-book a slot and confirm the part for your Mac model. Screen, battery, or keyboard done in 30 minutes guaranteed or the repair is free." },
  { Icon: ShieldCheck, title: "Quality Check & Data Safety",  body: "After the repair our technicians run a full diagnostic. Your data stays private throughout. We never access personal files." },
];

const WHY: { title: string; body: string; Icon: LucideIcon }[] = [
  { Icon: Award,       title: "Skilled Technicians",     body: "Every technician has years of Mac experience. We train monthly on each new model release, from Intel to the latest M5 chips." },
  { Icon: ShieldCheck, title: "Customer Satisfaction",   body: "You approve the price before we start and inspect the repair before you pay. No fix, no charge: that is our promise." },
  { Icon: Wrench,      title: "Everything In One Place", body: "Screen, keyboard, logic board, water damage. We handle it all in one workshop, with parts on the shelf for same-day repairs." },
  { Icon: Cpu,         title: "Quality Parts",           body: "Genuine Apple parts or OEM-grade equivalents, your choice. No hidden costs. You only pay for work completed." },
  { Icon: HardDrive,   title: "Data Privacy",            body: "Your Mac is your business. We follow strict confidentiality procedures and never access personal data during repairs." },
];

const TESTIMONIALS = [
  { name: "Alina",        body: "The best place to get your MacBook fixed. I thought it wouldn't work again after spilling coffee on it. When I contacted the repair team, they assured me they would fix the issue and they did. Highly recommend." },
  { name: "Green Light",  body: "Another great job by the repair service. They saved me money because I didn't have to replace the whole MacBook Pro like Apple Support told me." },
  { name: "Maxwell",      body: "Quick and cheap home service. Email and WhatsApp make it easy to reach the team. Honest and hard-working people. I would recommend to anyone." },
];

const FAQ_GROUPS = [
  {
    category: "Pricing & booking",
    items: [
      { q: "How much does Mac repair cost in Dubai?", a: "Mac repair is priced by the fault and model, after a free diagnosis. Screen replacement starts from AED 600, battery replacement from AED 450, keyboard repair from AED 300, and water damage diagnosis from AED 200. We give you a full written quote before any work begins, no hidden charges." },
      { q: "Can I get a quote before the repair?", a: "Yes. We diagnose your Mac first (free of charge) then give you a written quote covering parts and labour. No repair starts until you approve the price. If you decline, you pay nothing." },
      { q: "Do you offer same-day repair?", a: "Yes, most common repairs (screen, battery, keyboard, charging port) are completed same day. Logic board and water damage repairs may take 24–48 hours. We confirm the timeline at diagnosis." },
      { q: "Do you offer free pickup and delivery in Dubai?", a: "Yes. We offer free pickup and return delivery across Dubai. WhatsApp us your location and we arrange collection the same day." },
    ],
  },
  {
    category: "Models & compatibility",
    items: [
      { q: "Which Mac models do you repair?", a: "Every Mac: MacBook Air and MacBook Pro (11\", 13\", 14\", 15\", 16\"), iMac, Mac mini, Mac Studio and Mac Pro. This covers Intel, M1, M2, M3, M4 and M5 chips, plus models Apple lists as vintage or obsolete." },
      { q: "Can you repair out-of-warranty or internationally purchased Macs?", a: "Yes. We are an independent Apple specialist and repair out-of-warranty Macs and units bought anywhere in the world at the same prices. The repair does not depend on local Apple warranty status." },
      { q: "Do you fix iMac and Mac Pro as well as MacBooks?", a: "Yes. iMac screen and backlight replacement, Mac mini SSD upgrade, Mac Pro GPU and storage swap, Mac Studio board repair, all handled in our Dubai Media City workshop." },
    ],
  },
  {
    category: "Parts & warranty",
    items: [
      { q: "Do you use genuine Apple parts?", a: "We use 100% genuine Apple parts or certified OEM-grade replacements, depending on your preference and budget. We tell you exactly which type before we start. The choice is yours." },
      { q: "What warranty do you provide?", a: "Written warranty up to 12 months on parts and labour, depending on the repair type. Battery replacements carry a 3-month capacity warranty. Logic board repairs carry a 90-day warranty. All warranties are documented and honoured, no questions asked." },
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

export default function MacRepairHub() {
  useSeo(
    {
      title: "Mac Repair Dubai - Expert MacBook, iMac & Mac Studio Fix",
      description:
        "Reliable Mac repair in Dubai for MacBook, iMac & Mac Studio. Expert Apple technicians provide screen, battery, SSD & logic board repairs with genuine parts and same-day service.",
      path: "/mac-repair-dubai",
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
              { name: "Mac Repair", path: "/mac-repair-dubai" },
            ]} />
          </div>
        </div>

        {/* ── HERO ── */}
        <Hero
          variant="device"
          tone="dark"
          eyebrow="Apple Mac specialist"
          title="Apple Mac Repair Dubai"
          image="/images/topics/mac-repair-hub-dubai.jpg"
          imageAlt="Mac repair Dubai - complete Apple Mac family lineup engineering infographic"
        >
          <div className="mt-md" itemScope itemType="https://schema.org/Question">
            <p className="text-[15px] font-semibold text-text mb-2" itemProp="name">
              Where can I get my Mac repaired in Dubai?
            </p>
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p className="text-[15px] text-text-muted leading-relaxed" itemProp="text">
                MacBook Repair Dubai repairs every Mac: MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio and Mac Pro, from Intel through M5, at its Concord Tower workshop in Dubai Media City. Free diagnosis, free citywide pickup, genuine or OEM-grade parts and written warranty up to 12 months, in business since 2004.
              </p>
            </div>
          </div>
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> Every Mac model</span>
            <span>·</span><span>Intel through M5</span>
            <span>·</span><span>Free pickup Dubai-wide</span>
          </p>
        </Hero>

        {/* ── USP STRIP ── */}
        <div style={{ borderBottom: "1px solid var(--color-border)" }}>
          <ul className="mx-auto max-w-content px-5 md:px-6 py-md flex flex-wrap justify-center gap-x-xl gap-y-sm">
            {[
              { Icon: Search,     label: "Free Mac diagnosis" },
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
                { stat: "30 min",label: "Appointment repair" },
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

        {/* ── DEVICES ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <SectionHeading
            label="Choose your Mac"
            title="Which Mac do you need repaired?"
            sub="Every Apple Mac serviced at our Dubai Media City workshop. Tap a product for its dedicated repair page."
          />
          <div className="grid gap-[1px] bg-border rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {DEVICES.map((d) => (
              <Link key={d.href} to={d.href}
                className="bg-bg-card p-lg flex items-center gap-md hover:bg-accent/5 transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 shrink-0">
                  <d.Icon size={24} className="text-accent" strokeWidth={1.75} aria-hidden />
                </div>
                <div>
                  <p className="text-[17px] font-semibold text-text group-hover:text-accent transition-colors">{d.label}</p>
                  <p className="text-[13px] text-text-faint mt-0.5">{d.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <SectionHeading
            label="What we fix"
            title="Mac repair services"
            sub="From a cracked iMac screen to a dead Mac mini board, our technicians handle every repair in our Dubai Media City workshop."
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
            <SectionHeading label="How it works" title="Our repair process" sub="Simple, transparent, and fast. Here is what happens when you bring in your Mac." />
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

        {/* ── POPULAR SERVICES ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">Popular upgrades</p>
          <div className="flex flex-wrap gap-sm">
            {[
              { label: "SSD upgrade", href: "/mac-ssd-upgrade-dubai" },
              { label: "Mac mini RAM upgrade", href: "/mac-mini-ram-upgrade-dubai" },
              { label: "Mac Pro GPU repair", href: "/mac-pro-gpu-repair-dubai" },
              { label: "Setup & data migration", href: "/mac-setup-data-migration-dubai" },
              { label: "Activation lock unlock", href: "/mac-activation-lock-unlock-dubai" },
            ].map((s) => (
              <Link key={s.href} to={s.href}
                className="rounded-full border border-border bg-bg-card px-4 py-2 text-[14px] text-text-muted transition-colors hover:border-accent/40 hover:text-text">
                {s.label}
              </Link>
            ))}
          </div>
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
              <p className="text-center mt-5 text-[17px] text-on-primary-muted max-w-[50ch] mx-auto leading-relaxed">215+ verified Google reviews. Here are three.</p>
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
              <p className="text-[14px] text-text-muted leading-relaxed">Everything you need to know before booking your Mac repair.</p>
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

        {/* ── PICKUP AREAS ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[48px]">
          <p className="text-[14px] font-semibold text-text mb-3 flex items-center gap-2"><MapPin size={16} className="text-accent" /> Free pickup across Dubai</p>
          <div className="flex flex-wrap gap-2">
            {["Palm Jumeirah","JVC","JLT","Umm Suqeim","Arabian Ranches","Dubailand","Greens","Internet City","Silicon Oasis","Business Bay","Downtown Dubai","DIFC","Dubai Marina","JBR"].map((a) => (
              <span key={a} className="px-3 py-1.5 border border-border bg-bg-card rounded-md text-[13px] text-text-muted">{a}</span>
            ))}
          </div>
        </section>

        {/* ── RELATED SERVICES ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4 max-w-none w-full">Related services</p>
          <div className="flex flex-wrap justify-center gap-sm text-[15px]">
            {[
              { label: "MacBook Repair Dubai",       href: "/macbook-repair-dubai" },
              { label: "MacBook Air Repair Dubai",   href: "/macbook-air-repair-dubai" },
              { label: "MacBook Pro Repair Dubai",   href: "/macbook-pro-repair-dubai" },
              { label: "iMac Repair Dubai",          href: "/imac-repair-dubai" },
              { label: "Mac mini Repair Dubai",      href: "/mac-mini-repair-dubai" },
              { label: "iPhone Repair Dubai",        href: "/iphone-repair-dubai" },
              { label: "Apple Repair Dubai",         href: "/apple-repair-dubai" },
            ].map((l) => <a key={l.href} href={l.href} className="text-accent hover:underline">{l.label} ›</a>)}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mt-[80px]" style={{ background: "#2C3137" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 py-[48px] flex flex-col sm:flex-row items-center justify-between gap-md">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-on-primary-muted mb-1">Need your Mac repaired?</p>
              <h2 className="text-[22px] md:text-[26px] font-bold text-white leading-tight">
                Free diagnosis · No fix, no charge · Warranty up to 12 months
              </h2>
            </div>
            <div className="flex flex-wrap gap-sm shrink-0"><CallButtons dark /></div>
          </div>
        </section>

      </div>
      <RelatedArticles path="/mac-repair-dubai" />
    </PageShell>
  );
}
