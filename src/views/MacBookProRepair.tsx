"use client";
import {
  Star, MessageCircle, Phone,
  Keyboard, Monitor, BatteryCharging, Droplets, PlugZap,
  MousePointer2, Code2, HardDrive, Cpu, Thermometer,
  Power, Gauge, AlertTriangle, Snowflake, Wifi, Bluetooth, Volume2,
  Link2, Wrench, ShieldCheck, Clock, Award,
  Search, BadgeCheck, Truck, Laptop, Flame,
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
import { ResponsiveImage } from "@/components/blocks/ResponsiveImage";
import { useSeo, preloadFromHero } from "@/hooks/use-seo";
import { localBusiness, organization } from "@/lib/schema";
import { NAP } from "@/content/site";
import type { LucideIcon } from "lucide-react";

const IMG = {
  hero: {
    src: "/images/real/lab/macbook-pro-internal-layout-dubai.jpg",
    alt: "MacBook Pro internal layout, logic board, dual fans and battery open on the workshop bench at MacBook Repair Dubai",
  },
  services: {
    src: "/images/topics/macbook-pro-common-repairs-dubai.jpg",
    alt: "MacBook Pro repair services Dubai - screen, battery, keyboard and logic board infographic",
    caption: "The four MacBook Pro repairs we do most, screen, battery, keyboard and logic board.",
  },
  process: {
    src: "/images/topics/macbook-pro-repair-process-dubai.jpg",
    alt: "MacBook Pro repair process Dubai - diagnosis to quality check four-step infographic",
    caption: "From free diagnosis to final quality check, how your MacBook Pro repair runs.",
  },
};

function TopicFigure({ img }: { img: { src: string; alt: string; caption: string } }) {
  return (
    <figure className="mt-xl mx-auto max-w-[860px] overflow-hidden rounded-2xl border border-border bg-bg-card">
      <ResponsiveImage
        src={img.src}
        alt={img.alt}
        width={1600}
        height={1200}
        sizes="(max-width: 414px) 360px, (max-width: 1068px) 800px, 860px"
        imgClassName="w-full h-auto"
      />
      <figcaption className="border-t border-border px-lg py-3 text-center text-[13px] text-text-muted">
        {img.caption}
      </figcaption>
    </figure>
  );
}

const SIBLINGS = [
  { label: "MacBook Air", href: "/macbook-air-repair-dubai" },
  { label: "iMac", href: "/imac-repair-dubai" },
  { label: "Mac Pro", href: "/mac-pro-repair-dubai" },
  { label: "Mac mini", href: "/mac-mini-repair-dubai" },
  { label: "Mac Studio", href: "/mac-studio-repair-dubai" },
];

type Model = { label: string; href?: string; aNum?: string };
type ModelGroup = { chip: string; years: string; chipHref: string; models: Model[] };
const MODEL_GROUPS: ModelGroup[] = [
  {
    chip: "M5", years: "2025 - 2026", chipHref: "/macbook-pro-m5-repair-dubai",
    models: [
      { label: `16" M5 Max`, href: "/macbook-pro-16-m5-max-2026-repair-dubai", aNum: "A3429" },
      { label: `16" M5 Pro`, href: "/macbook-pro-16-m5-pro-2026-repair-dubai", aNum: "A3428" },
      { label: `14" M5 Max`, href: "/macbook-pro-14-m5-max-2026-repair-dubai", aNum: "A3427" },
      { label: `14" M5 Pro`, href: "/macbook-pro-14-m5-pro-2026-repair-dubai", aNum: "A3426" },
      { label: `14" M5`, href: "/macbook-pro-14-m5-2025-repair-dubai", aNum: "A3434" },
    ],
  },
  {
    chip: "M4", years: "2024", chipHref: "/macbook-pro-m4-repair-dubai",
    models: [
      { label: `16" M4 Max`, href: "/macbook-pro-16-m4-2024-repair-dubai", aNum: "A3186" },
      { label: `16" M4 Pro`, href: "/macbook-pro-16-m4-2024-repair-dubai", aNum: "A3403" },
      { label: `14" M4 Pro`, href: "/macbook-pro-14-m4-2024-repair-dubai", aNum: "A3401" },
      { label: `14" M4`, href: "/macbook-pro-14-m4-2024-repair-dubai", aNum: "A3112" },
    ],
  },
  {
    chip: "M3", years: "2023 - 2024", chipHref: "/macbook-pro-m3-repair-dubai",
    models: [
      { label: `16" M3 Max`, href: "/macbook-pro-16-m3-2023-repair-dubai", aNum: "A2991" },
      { label: `16" M3 Pro`, href: "/macbook-pro-16-m3-2023-repair-dubai", aNum: "A2991" },
      { label: `14" M3 Pro`, href: "/macbook-pro-14-m3-2023-repair-dubai", aNum: "A2992" },
      { label: `14" M3`, href: "/macbook-pro-14-m3-2023-repair-dubai", aNum: "A2918" },
    ],
  },
  {
    chip: "M2", years: "2022 - 2023", chipHref: "/macbook-pro-m2-repair-dubai",
    models: [
      { label: `16" M2 Max`, href: "/macbook-pro-16-m2-pro-2023-repair-dubai", aNum: "A2780" },
      { label: `16" M2 Pro`, href: "/macbook-pro-16-m2-pro-2023-repair-dubai", aNum: "A2780" },
      { label: `14" M2 Max`, href: "/macbook-pro-14-m2-pro-2023-repair-dubai", aNum: "A2779" },
      { label: `14" M2 Pro`, href: "/macbook-pro-14-m2-pro-2023-repair-dubai", aNum: "A2779" },
      { label: `13" M2`, href: "/macbook-pro-13-m2-2022-repair-dubai", aNum: "A2338" },
    ],
  },
  {
    chip: "M1", years: "2020 - 2021", chipHref: "/macbook-pro-m1-repair-dubai",
    models: [
      { label: `16" M1 Max`, href: "/macbook-pro-16-m1-pro-2021-repair-dubai", aNum: "A2485" },
      { label: `14" M1 Pro`, href: "/macbook-pro-14-m1-pro-2021-repair-dubai", aNum: "A2442" },
      { label: `13" M1`, href: "/macbook-pro-13-m1-2020-repair-dubai", aNum: "A2338" },
    ],
  },
  {
    chip: "Intel", years: "2017 - 2020", chipHref: "/macbook-pro-intel-repair-dubai",
    models: [
      { label: `16" (2019)`, href: "/macbook-pro-intel-repair-dubai", aNum: "A2141" },
      { label: `15" (2019)`, href: "/macbook-pro-intel-repair-dubai", aNum: "A1990" },
      { label: `15" (2018)`, href: "/macbook-pro-intel-repair-dubai", aNum: "A1990" },
      { label: `13" (2020)`, href: "/macbook-pro-13-intel-2020-repair-dubai", aNum: "A2251/A2289" },
      { label: `13" (2019)`, href: "/macbook-pro-13-intel-2019-repair-dubai", aNum: "A2159" },
      { label: `13" (2018)`, href: "/macbook-pro-13-intel-2019-repair-dubai", aNum: "A1989" },
      { label: `15" (2017)`, href: "/macbook-pro-intel-repair-dubai", aNum: "A1707" },
      { label: `13" (2017)`, href: "/macbook-pro-13-intel-2019-repair-dubai", aNum: "A1706/A1708" },
    ],
  },
];

const SERVICES: { title: string; body: string; Icon: LucideIcon; href?: string }[] = [
  { Icon: Keyboard,       title: "Keyboard Repair",             href: "/macbook-keyboard-repair-dubai",       body: "Keys loose, sticking, or unresponsive? We clean, fix, or replace individual keys and full keyboard assemblies on every MacBook Pro model." },
  { Icon: Monitor,        title: "Screen Repair & Replacement", href: "/macbook-screen-repair-dubai",         body: "Cracked, flickering, or dead display? We replace LCD, LED, and Liquid Retina XDR panels, same day for most models." },
  { Icon: BatteryCharging,title: "Battery Replacement",         href: "/macbook-battery-replacement-dubai",   body: "Swollen battery, rapid drain, or heat issues? We swap genuine-grade batteries and restore full capacity on M1–M5 and Intel models." },
  { Icon: Droplets,       title: "Water Damage Repair",         href: "/macbook-water-damage-repair-dubai",   body: "Liquid spill? Power off immediately and bring it in. Our board-level technicians dry, clean, and restore water-damaged MacBook Pros." },
  { Icon: PlugZap,        title: "Not Charging Fix",            href: "/macbook-charging-port-repair-dubai",  body: "MagSafe or USB-C not charging? We diagnose the port, cable, or charging IC and get your MacBook powering up again." },
  { Icon: MousePointer2,  title: "Trackpad Repair",             href: "/macbook-trackpad-repair-dubai",       body: "Trackpad not clicking or responding? We recalibrate, repair, or replace Force Touch trackpads to restore precise control." },
  { Icon: Link2,          title: "Hinge Repair",                href: "/macbook-hinge-repair-dubai",          body: "Loose or broken lid hinge? We repair or replace MacBook Pro hinges so the screen opens and closes smoothly again." },
  { Icon: Code2,          title: "Software Issues",             href: "/macos-reinstall-dubai",               body: "macOS crashes, kernel panics, or boot failures? We diagnose and fix software problems without erasing your data." },
  { Icon: HardDrive,      title: "Data Recovery",               href: "/macbook-data-recovery-dubai",         body: "Lost files after a failed drive or liquid damage? Our recovery process retrieves data from faulty SSDs and logic boards." },
  { Icon: Cpu,            title: "Hardware Upgrade",            href: "/macbook-ssd-upgrade-dubai",           body: "Slow and cramped? We upgrade RAM and storage on eligible Intel models, dramatically improving speed and capacity." },
  { Icon: Thermometer,    title: "Overheating Fix",             href: "/macbook-overheating-fix-dubai",       body: "Fans running loud or throttling under load? We reclean thermal paste, replace heatsinks, and clear clogged fan vents." },
  { Icon: Power,          title: "Won't Turn On",               href: "/mac-not-turning-on-dubai",            body: "Dead MacBook? We diagnose power rail failures, SMC issues, and logic board faults to bring it back to life." },
  { Icon: Gauge,          title: "Running Slow",                href: "/mac-performance-tune-dubai",          body: "Slow startup or sluggish apps? We clear software bloat, upgrade storage, and tune macOS settings for peak performance." },
  { Icon: AlertTriangle,  title: "System Crashing",             href: "/macbook-system-crashing-repair-dubai", body: "Frequent beach balls or kernel panics? We find the root cause, failing RAM, SSD, or software and fix it properly." },
  { Icon: Snowflake,      title: "Freezing Trouble",            href: "/macbook-freezing-repair-dubai",       body: "MacBook locking up mid-task? We diagnose hardware or software freeze causes and restore smooth, reliable operation." },
  { Icon: Wifi,           title: "Wi-Fi Problems",              href: "/macbook-wifi-bluetooth-repair-dubai", body: "Dropping connection or unable to connect? We repair Wi-Fi antenna cables and replace AirPort cards to restore reliable networking." },
  { Icon: Bluetooth,      title: "Bluetooth Issue",             href: "/macbook-wifi-bluetooth-repair-dubai", body: "Peripherals not pairing or dropping? We fix Bluetooth module faults and restore clean device connectivity." },
  { Icon: Volume2,        title: "Sound Not Working",           href: "/macbook-speaker-repair-dubai",        body: "No audio output or microphone issues? We repair speaker assemblies, audio ICs, and jack connectors." },
];

const PROCESS: { title: string; body: string; Icon: LucideIcon }[] = [
  { Icon: Wrench,      title: "Transparent Quote",              body: "As soon as we diagnose the problem, we give you a clear breakdown and price. Parts and labour included. No surprise charges, you decide whether to proceed." },
  { Icon: Clock,       title: "30-Minute Appointment Repair",   body: "Pre-book a slot and confirm the part for your exact MacBook Pro model. Screen, battery, or keyboard done in 30 minutes guaranteed or the repair is free." },
  { Icon: ShieldCheck, title: "Quality Check & Data Safety",    body: "After the repair our technicians run a full diagnostic to confirm everything works. Your data stays private throughout, we never access personal files." },
];

const WHY: { title: string; body: string; Icon: LucideIcon }[] = [
  { Icon: Award,       title: "Skilled Technicians",      body: "Every technician has years of MacBook experience. We train monthly on each new model release, from Intel Touch Bar to the latest M5 chips." },
  { Icon: ShieldCheck, title: "Customer Satisfaction",    body: "You approve the price before we start and inspect the repair before you pay. No fix, no charge, that's our promise." },
  { Icon: Wrench,      title: "Everything In One Place",  body: "Screen, keyboard, trackpad, logic board, water damage, we handle it all in one workshop, with parts on the shelf for same-day repairs." },
  { Icon: Cpu,         title: "Quality Parts",            body: "Genuine Apple parts or OEM-grade equivalents, you choose. No hidden costs. You only pay for work completed." },
  { Icon: HardDrive,   title: "Data Privacy",             body: "Your MacBook is your business. We follow strict confidentiality procedures and never access personal data during repairs." },
];

const SIGNS: { Icon: LucideIcon; label: string; body: string }[] = [
  { Icon: Gauge,        label: "Running slowly",       body: "Long startup times, lag on simple tasks, or persistent spinning wheel." },
  { Icon: Thermometer,  label: "Overheating",          body: "Gets very hot even when idle, a fan, vent, or cooling issue." },
  { Icon: Volume2,      label: "Unusual noises",       body: "Clicking, whirring, or grinding sounds from internal components." },
  { Icon: BatteryCharging, label: "Battery problems",  body: "Drains too quickly, won't charge properly, or shows signs of swelling." },
  { Icon: Monitor,      label: "Screen issues",        body: "Cracked display, flickering, colour shifts, or brightness problems." },
  { Icon: Keyboard,     label: "Keyboard / trackpad",  body: "Keys aren't responding, keyboard sticks, or trackpad stops working." },
  { Icon: Wifi,         label: "Connectivity",         body: "Ports not working, or trouble connecting to Wi-Fi or Bluetooth." },
  { Icon: AlertTriangle, label: "Frequent crashes",   body: "Random shutdowns or crashes, could be software or failing hardware." },
  { Icon: Droplets,     label: "Liquid damage",        body: "You spilled liquid, power off immediately and bring it in." },
  { Icon: Flame,        label: "Burning smell",        body: "Strange burning or melting smell, needs urgent attention." },
];

const TESTIMONIALS = [
  { name: "Alina", body: "The best place to get your MacBook fixed. I thought it wouldn't work again after spilling coffee on it. When I contacted the repair team, they assured me they would fix the issue and they did. Highly recommend." },
  { name: "Green Light", body: "Another great job by the repair service. They saved me money because I didn't have to replace the whole MacBook Pro like Apple Support told me." },
  { name: "Maxwell", body: "Quick and cheap home service. Email and WhatsApp make it easy to reach the team. Honest and hard-working people. I would recommend to anyone." },
];

const FAQ_GROUPS = [
  {
    category: "Pricing & booking",
    items: [
      { q: "How much does MacBook Pro repair cost in Dubai?", a: "Prices depend on the model and repair type. Screen replacement starts from AED 450, battery replacement from AED 350, keyboard repair from AED 300, and water damage diagnosis from AED 200. We give you a full, fixed quote before any work begins, no hidden charges." },
      { q: "Can I get a quote before the repair?", a: "Yes. We diagnose your MacBook Pro first (free of charge), then give you a written quote covering parts and labour. No repair starts until you approve the price. If you decline, you pay nothing." },
      { q: "Do you offer same-day repair?", a: "Yes, most common repairs (screen, battery, keyboard, charging port, trackpad) are completed same day, often within 2–3 hours. Logic board and water damage repairs may take 24–48 hours. We confirm the timeline at diagnosis." },
      { q: "Do you offer free pickup and delivery in Dubai?", a: "Yes. We offer free pickup and return delivery across Dubai. WhatsApp us your location and we arrange collection the same day." },
    ],
  },
  {
    category: "Parts & warranty",
    items: [
      { q: "Do you use genuine Apple parts?", a: "We use 100% genuine Apple parts or certified OEM-grade replacements, depending on your preference and budget. We tell you exactly which type of part we're using before we start, and the choice is yours." },
      { q: "What warranty do you provide?", a: "We offer a written warranty of up to 12 months on parts and labour, depending on the repair type. Battery replacements carry a 3-month capacity warranty. Logic board repairs carry a 90-day warranty. All warranties are documented and honoured, no questions asked." },
      { q: "What if my MacBook Pro has the same problem after repair?", a: "If the same fault returns within the warranty period, we re-diagnose and re-repair at no cost. We stand behind our work fully." },
    ],
  },
  {
    category: "Data & privacy",
    items: [
      { q: "Will my data be safe during the repair?", a: "Your data stays private throughout. Our technicians follow strict confidentiality procedures and never access personal files. We recommend backing up before any repair as a precaution, especially for logic board or SSD work." },
      { q: "Can you recover data from a broken MacBook Pro?", a: "In most cases, yes. We clone the drive before any work begins. If the SSD has failed, we use professional data recovery tools to retrieve your files before replacing the drive. Success rates depend on the extent of the damage." },
      { q: "Will you erase my MacBook during the repair?", a: "No, we never erase your data as part of a hardware repair. For software reinstall jobs, we discuss data backup with you first and restore your files after the reinstall." },
    ],
  },
  {
    category: "Specific repairs",
    items: [
      { q: "Can you repair M1, M2, M3, M4, and M5 MacBook Pros?", a: "Yes. We service every Apple Silicon MacBook Pro from M1 (2020) through M5 (2025–2026), as well as all Intel models from 2017–2020. Our technicians train on each new model release." },
      { q: "Can you fix a MacBook Pro with water damage?", a: "Yes. Liquid damage is one of our most common repairs. Power off immediately and bring it in, the sooner the better. We disassemble, clean the board with ultrasonic equipment, and repair or replace damaged components. Success rate is high when the MacBook is brought in quickly." },
      { q: "My MacBook Pro is really slow, should I get a new one?", a: "Almost always no. For Intel MacBook Pros, an SSD or RAM upgrade dramatically improves performance. For Apple Silicon models, a clean macOS reinstall and clearing software bloat often restores original speed. We diagnose the root cause and recommend the most cost-effective fix." },
      { q: "Can you fix a MacBook Pro that won't turn on?", a: "Yes. 'Won't turn on' has many causes, dead battery, failed charging IC, SMC fault, or logic board power-rail failure. We run a systematic board-level diagnosis to find the exact cause and provide a transparent quote before any repair." },
      { q: "Can you repair Touch Bar and Touch ID?", a: "Yes. We repair faulty Touch Bar displays, Touch ID sensors, and the T1/T2 security chip connections on Intel MacBook Pros. For M-series models, Touch ID button repair is also covered." },
      { q: "Do you fix MacBook Pro hinges?", a: "Yes, loose, stiff, or broken lid hinges are a common repair. We replace the hinge bracket and flex cable assembly so the screen opens and closes smoothly. Most hinge repairs are completed same day." },
    ],
  },
];

/* ── Section heading, always centered ── */
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

/* ── Icon card ── */
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

export default function MacBookProRepair() {
  useSeo(
    {
      title: "MacBook Pro Repair Dubai - M1-M5 Screen, Battery & Logic Fix",
      description:
        "Expert MacBook Pro repair in Dubai for M1-M5 and Intel models. Screen, battery, keyboard & logic board services by experienced Apple technicians. Genuine parts, same-day service.",
      path: "/macbook-pro-repair-dubai",
      preloadImage: preloadFromHero(IMG.hero.src),
    },
    [localBusiness(), organization()],
  );

  return (
    <PageShell>
      <div className="-mb-[4rem] bg-bg text-text">

        {/* ── BREADCRUMB ── floats in the nav-clearance gap above the hero */}
        <div className="pt-[64px]" style={{ borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 py-[6px]">
            <BreadcrumbTrail tone="dark" trail={[
              { name: "Home", path: "/" },
              { name: "Apple Repair", path: "/apple-repair-dubai" },
              { name: "MacBook Repair", path: "/" },
              { name: "MacBook Pro Repair", path: "/macbook-pro-repair-dubai" },
            ]} />
          </div>
        </div>

        {/* ── HERO ── */}
        <Hero
          variant="device"
          tone="dark"
          eyebrow="MacBook Pro specialist"
          title="Best Quality MacBook Pro Repair Dubai"
          image={IMG.hero.src}
          imageAlt={IMG.hero.alt}
        >
          {/* Q&A lives under H1, schema microdata + meta description context */}
          <div
            className="mt-md"
            itemScope
            itemType="https://schema.org/Question"
          >
            <p className="text-[15px] font-semibold text-text mb-2" itemProp="name">
              Where can I get my MacBook Pro repaired in Dubai?
            </p>
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p className="text-[15px] text-text-muted leading-relaxed" itemProp="text">
                MacBook Repair Dubai repairs every MacBook Pro, 13″, 14″ and 16″, Intel through M5, at its Concord Tower workshop in Dubai Media City. Same-day screen, battery, keyboard, logic-board and water-damage service, with free diagnosis, free citywide pickup, genuine or OEM-grade parts and a written warranty up to 12 months, in business since 2004.
              </p>
            </div>
          </div>
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> M1–M5 &amp; all Intel models</span>
            <span>·</span><span>Logic board repair</span>
            <span>·</span><span>Retina XDR screen specialist</span>
          </p>
        </Hero>

        {/* ── USP STRIP ── */}
        <div style={{ borderBottom: "1px solid var(--color-border)" }}>
          <ul className="mx-auto max-w-content px-5 md:px-6 py-md flex flex-wrap justify-center gap-x-xl gap-y-sm">
            {[
              { Icon: Search, label: "Free MacBook Pro diagnosis" },
              { Icon: BadgeCheck, label: "No fix, no charge" },
              { Icon: Truck, label: "Free pickup Dubai-wide" },
              { Icon: ShieldCheck, label: "Genuine & OEM-grade parts" },
              { Icon: Clock, label: "Same-day service" },
              { Icon: Star, label: "Trusted since 2004" },
            ].map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-xs text-[14px] font-medium text-text">
                <Icon size={15} className="text-accent shrink-0" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* ── STATS ── */}
        <section
          className="mt-xl"
          style={{
            background: "#2C3137",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.15)",
          }}
        >
          <div className="mx-auto max-w-content px-5 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { stat: "20+", label: "Years in Dubai" },
                { stat: "215+", label: "Google reviews" },
                { stat: "30 min", label: "Appointment repair" },
                { stat: "12 mo", label: "Written warranty" },
              ].map(({ stat, label }, i) => (
                <div
                  key={label}
                  className="py-lg px-xl flex flex-col justify-center"
                  style={{
                    borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : undefined,
                    textShadow: "0 2px 12px rgba(0,0,0,0.6)",
                  }}
                >
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
            title="MacBook Pro models we repair"
            sub="Every generation from Intel to M5. Tap a model for its dedicated repair page."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border rounded-2xl overflow-hidden">
            {MODEL_GROUPS.map((g, gi) => {
              const isSilicon = gi < 5;
              return (
                <div key={g.chip} className="bg-bg-card p-lg flex flex-col gap-sm">
                  {/* header */}
                  <div className="flex items-center gap-xs">
                    <Link
                      to={g.chipHref}
                      className="inline-flex items-center px-[7px] py-[2px] rounded text-[10px] font-bold tracking-widest uppercase transition-opacity hover:opacity-75"
                      style={{
                        background: isSilicon ? "rgba(10,122,64,0.12)" : "rgba(0,0,0,0.06)",
                        color: isSilicon ? "var(--color-accent)" : "var(--color-text-muted)",
                      }}
                    >
                      MacBook Pro {g.chip}
                    </Link>
                    <span className="text-[11px] text-text-faint">{g.years}</span>
                  </div>
                  {/* pills */}
                  <div className="flex flex-wrap gap-[5px]">
                    {g.models.map((m) => (
                      m.href ? (
                        <Link
                          key={m.label}
                          to={m.href}
                          className="inline-flex items-center gap-[5px] px-[9px] py-[4px] rounded-md border border-border bg-bg text-[12px] text-accent font-medium hover:border-accent hover:bg-accent/5 transition-colors"
                        >
                          {m.label}
                          {m.aNum && <span className="text-[9px] text-text-faint font-normal opacity-70">{m.aNum}</span>}
                        </Link>
                      ) : (
                        <span
                          key={m.label}
                          className="inline-flex items-center gap-[5px] px-[9px] py-[4px] rounded-md border border-border bg-bg-alt text-[12px] text-text-faint font-medium"
                        >
                          {m.label}
                          {m.aNum && <span className="text-[9px] font-normal opacity-70">{m.aNum}</span>}
                        </span>
                      )
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <SectionHeading
            label="What we fix"
            title="MacBook Pro repair services"
            sub="From a cracked screen to a dead logic board, our technicians handle every repair in our Dubai Media City workshop."
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
            <SectionHeading
              label="How it works"
              title="Our repair process"
              sub="Simple, transparent, and fast. Here's what happens when you bring in your MacBook Pro."
            />
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
          <SectionHeading
            label="Warning signs"
            title="Signs your MacBook Pro needs repair"
          />
          {/* Left/right split: image on left, cards on right */}
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="w-full lg:w-[42%] shrink-0">
              <figure className="overflow-hidden rounded-2xl border border-border bg-bg-card">
                <ResponsiveImage
                  src={IMG.services.src}
                  alt={IMG.services.alt}
                  width={1600}
                  height={1200}
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  imgClassName="w-full h-auto"
                />
              </figure>
            </div>
            <ul className="flex-1 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {SIGNS.map(({ Icon, label, body }) => (
                <li
                  key={label}
                  className="flex items-start gap-4 rounded-xl border border-border bg-bg-card p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Icon size={19} className="text-accent" strokeWidth={1.75} aria-hidden />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-text mb-0.5">{label}</p>
                    <p className="text-[14px] text-text-muted leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="bg-bg-alt mt-[96px] py-[80px]" style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <SectionHeading
              label="Why us"
              title="The independent Apple specialists in Dubai"
              sub="Not an Apple Authorised Service Centre, we're the faster, fairer-priced alternative with 20 years of experience."
            />
            <div className="grid gap-x-xl gap-y-[48px] sm:grid-cols-2 lg:grid-cols-3">
              {WHY.map((w) => (
                <IconCard key={w.title} Icon={w.Icon} title={w.title} body={w.body} />
              ))}
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
            <div>
              <p className="font-semibold text-white">Mon - Sat</p>
              <p>9:00 AM - 10:00 PM</p>
            </div>
            <div>
              <p className="font-semibold text-white">Sunday</p>
              <p>Onsite service available</p>
            </div>
          </div>
        </div>
        </section>

        {/* ── VS APPLE + FAQ ── */}
        <VsAppleStore tone="dark" />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
            {/* sticky sidebar */}
            <div className="lg:sticky lg:top-24 rounded-xl border border-border bg-bg-card p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">FAQ</p>
              <h2 className="text-[22px] font-bold tracking-tight text-text leading-snug mb-3">
                Frequently asked questions
              </h2>
              <p className="text-[14px] text-text-muted leading-relaxed">
                Everything you need to know before booking your MacBook Pro repair.
              </p>
              <div className="mt-5 pt-5 border-t border-border flex flex-col gap-2 text-[13px] text-text-muted">
                <span>✓ Free diagnosis</span>
                <span>✓ No fix, no charge</span>
                <span>✓ Warranty up to 12 months</span>
                <span>✓ Free pickup Dubai-wide</span>
              </div>
              {/* category quick-links */}
              <div className="mt-5 pt-5 border-t border-border flex flex-col gap-2">
                {FAQ_GROUPS.map((g) => (
                  <a key={g.category} href={`#faq-${g.category.replace(/\s+/g, "-").toLowerCase()}`}
                    className="text-[13px] text-accent hover:underline capitalize">
                    {g.category}
                  </a>
                ))}
              </div>
            </div>
            {/* grouped accordions */}
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
              { label: "MacBook Repair Dubai", href: "/macbook-repair-dubai" },
              { label: "MacBook Air Repair Dubai", href: "/macbook-air-repair-dubai" },
              { label: "MacBook Screen Repair Dubai", href: "/macbook-screen-repair-dubai" },
              { label: "MacBook Battery Replacement Dubai", href: "/macbook-battery-replacement-dubai" },
              { label: "MacBook Water Damage Repair Dubai", href: "/macbook-water-damage-repair-dubai" },
              { label: "Mac Repair Dubai", href: "/mac-repair-dubai" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-accent hover:underline">{l.label} ›</a>
            ))}
          </div>
        </section>

        {/* ── BLOG LINKS ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-1">From our blog</p>
          <h2 className="text-[22px] md:text-[26px] font-bold tracking-tight text-text mb-5">MacBook Pro guides &amp; repair advice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {([
              ["MacBook Pro battery draining fast? Causes & fixes", "/blog/macbook-pro-battery-draining-fast"],
              ["MacBook Pro overheating fix Dubai: M1 to M5", "/blog/macbook-pro-overheating-fix-dubai"],
              ["MacBook Pro not charging? Fix guide Dubai", "/blog/macbook-pro-not-charging-fix-dubai"],
              ["MacBook Pro screen replacement cost Dubai", "/blog/macbook-pro-screen-replacement-cost-dubai"],
              ["MacBook Pro M4 & M5 common problems", "/blog/macbook-pro-m4-m5-common-problems-dubai"],
              ["MacBook Pro M4 vs M5: worth upgrading?", "/blog/macbook-pro-m4-vs-m5-worth-upgrade"],
              ["MacBook Pro M5 repair: us vs Apple Store cost", "/blog/macbook-pro-m5-vs-apple-store-repair-cost"],
              ["MacBook Air vs MacBook Pro M5: 2026 buyer's guide", "/blog/macbook-air-vs-macbook-pro-2026"],
            ] as [string, string][]).map(([label, href]) => (
              <Link
                key={href}
                to={href}
                className="flex items-start rounded-xl border border-border bg-bg-card p-4 hover:border-accent/50 transition-colors group"
              >
                <span className="text-[14px] font-medium text-text leading-snug group-hover:text-accent">{label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mt-[80px]" style={{ background: "#2C3137" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 py-[48px] flex flex-col sm:flex-row items-center justify-between gap-md">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-on-primary-muted mb-1">Ready to fix your Mac?</p>
              <h2 className="text-[22px] md:text-[26px] font-bold text-white leading-tight">
                Free diagnosis · No fix, no charge · Warranty up to 12 months
              </h2>
            </div>
            <div className="flex flex-wrap gap-sm shrink-0">
              <CallButtons dark />
            </div>
          </div>
        </section>

      </div>
      <RelatedArticles path="/macbook-pro-repair-dubai" />
    </PageShell>
  );
}
