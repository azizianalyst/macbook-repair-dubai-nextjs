"use client";
import {
  Star, MessageCircle, Phone,
  Monitor, ShieldCheck, Clock, Award,
  Search, BadgeCheck, Truck, Check,
  Wrench, AlertTriangle, Cpu, BatteryCharging,
  HardDrive, Droplets,
} from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { VsAppleStore } from "@/components/blocks/VsAppleStore";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { LeadForm } from "@/components/blocks/LeadForm";
import { Button } from "@/components/ui/button";
import { useSeo, preloadFromHero } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema } from "@/lib/schema";
import { pickReviews } from "@/lib/find-reviews";
import { NAP } from "@/content/site";
import type { LucideIcon } from "lucide-react";

const IMG = {
  hero: {
    src: "/images/real/lab/macbook-air-lid-dubai.jpg",
    alt: "MacBook Air open on the workbench at MacBook Repair Dubai, Media City - battery replacement in progress",
  },
};

/* ── DATA ─────────────────────────────────────────────────────────── */

type PricingRow = { model: string; price: number; timeline: string; l6href?: string };

const PRICING: PricingRow[] = [
  { model: 'MacBook Air 13" Intel (2018–2020)', price: 450, timeline: "Same day · 2 hours", l6href: "/macbook-air-intel-battery-replacement-dubai" },
  { model: 'MacBook Air 13" M1 (2020–2023)',    price: 450, timeline: "Same day · 2 hours", l6href: "/macbook-air-m1-battery-replacement-dubai"   },
  { model: 'MacBook Air 13" M2 (2022–2024)',    price: 450, timeline: "Same day · 2 hours", l6href: "/macbook-air-m2-battery-replacement-dubai"   },
  { model: 'MacBook Air 15" M2 (2023–2024)',    price: 500, timeline: "Same day · 2 hours", l6href: "/macbook-air-m2-battery-replacement-dubai"   },
  { model: 'MacBook Air 13" M3 (2024)',         price: 450, timeline: "Same day · 2 hours", l6href: "/macbook-air-m3-battery-replacement-dubai"   },
  { model: 'MacBook Air 15" M3 (2024)',         price: 500, timeline: "Same day · 2 hours", l6href: "/macbook-air-m3-battery-replacement-dubai"   },
  { model: 'MacBook Air 13" M4 (2025)',         price: 500, timeline: "1–2 days",           l6href: "/macbook-air-m4-battery-replacement-dubai"   },
  { model: 'MacBook Air 15" M4 (2025)',         price: 550, timeline: "1–2 days",           l6href: "/macbook-air-m4-battery-replacement-dubai"   },
];

type BatterySpec = {
  chip: string;
  capacity: string;
  cycleLimit: string;
  chargingPort: string;
  appleService: string;
  l3href: string;
};

const BATTERY_SPECS: BatterySpec[] = [
  { chip: "Intel (2018–2020)", capacity: "49.9 Wh", cycleLimit: "1,000 cycles", chargingPort: "MagSafe 2 + USB-C", appleService: "Not serviced (vintage)", l3href: "/macbook-air-intel-repair-dubai" },
  { chip: "M1 (2020–2023)",   capacity: "49.9 Wh", cycleLimit: "1,000 cycles", chargingPort: "USB-C",             appleService: "AED 549",               l3href: "/macbook-air-m1-repair-dubai"   },
  { chip: 'M2 13" (2022)',    capacity: "52.6 Wh", cycleLimit: "1,000 cycles", chargingPort: "MagSafe 3 + USB-C", appleService: "AED 549",               l3href: "/macbook-air-m2-repair-dubai"  },
  { chip: 'M2 15" (2023)',    capacity: "66.5 Wh", cycleLimit: "1,000 cycles", chargingPort: "MagSafe 3 + USB-C", appleService: "AED 649",               l3href: "/macbook-air-m2-repair-dubai"  },
  { chip: 'M3 13" (2024)',    capacity: "52.6 Wh", cycleLimit: "1,000 cycles", chargingPort: "MagSafe 3 + USB-C", appleService: "AED 549",               l3href: "/macbook-air-m3-repair-dubai"  },
  { chip: 'M3 15" (2024)',    capacity: "66.5 Wh", cycleLimit: "1,000 cycles", chargingPort: "MagSafe 3 + USB-C", appleService: "AED 649",               l3href: "/macbook-air-m3-repair-dubai"  },
  { chip: 'M4 13" (2025)',    capacity: "52.6 Wh", cycleLimit: "1,000 cycles", chargingPort: "MagSafe 3 + USB-C", appleService: "AED 599",               l3href: "/macbook-air-m4-repair-dubai"  },
  { chip: 'M4 15" (2025)',    capacity: "66.5 Wh", cycleLimit: "1,000 cycles", chargingPort: "MagSafe 3 + USB-C", appleService: "AED 699",               l3href: "/macbook-air-m4-repair-dubai"  },
];

const PROCESS: { title: string; body: string; Icon: LucideIcon }[] = [
  { Icon: Search,      title: "Free health check and quote",   body: "Check battery health in System Settings, cycle count, capacity, swelling test. WhatsApp the model for instant pricing. Free bench diagnosis too: drop in or we collect." },
  { Icon: Clock,       title: "Same-day 2-hour replacement",  body: "Drop off before 11am, collect by 2pm. Apple Silicon requires BMS firmware re-pair after battery swap. We do this on the bench, included in the price." },
  { Icon: ShieldCheck, title: "Capacity test and calibration", body: "After replacement we charge to 100%, run a calibration cycle, and verify 100% maximum capacity reading. 3-month written warranty on the new cell." },
];

const SIGNS: { Icon: LucideIcon; label: string; body: string }[] = [
  { Icon: AlertTriangle,   label: "Service Recommended",           body: "macOS shows this when battery health drops below 80% or after 1,000 cycles. Do not ignore - degraded cells can swell." },
  { Icon: BatteryCharging, label: "Below 80% capacity",            body: "System Settings shows maximum capacity. Below 80% means you have lost 20%+ of rated battery life. Replacement restores full capacity." },
  { Icon: AlertTriangle,   label: "Trackpad won't click",          body: "A spongy or unresponsive trackpad is the clearest sign of battery swelling. The cell is pushing up against the trackpad from below. Replace immediately." },
  { Icon: Monitor,         label: "Won't last a full day",         body: "A MacBook Air M1–M4 rated for 12–18 hours lasting only 4–6 hours in Dubai has lost at least 50% capacity, beyond the threshold for replacement." },
  { Icon: Droplets,        label: "Sudden shutdowns at 30–50%",   body: "The protection circuit cuts power when voltage drops too fast on a worn cell. macOS reports incorrect charge levels, then shuts off suddenly." },
  { Icon: Clock,           label: "Charges very slowly in summer", body: "Normal behaviour - the MacBook Air throttles charging above 35°C to protect the cell. If slow-charge persists in air conditioning, the cell itself is failing." },
  { Icon: ShieldCheck,     label: "Cycle count above 900",         body: "Apple rates MacBook Air batteries for 1,000 cycles to 80%. Above 900 cycles, monitor monthly. Above 1,000 cycles, replace before capacity drops further." },
  { Icon: HardDrive,       label: "Bottom case bulging",           body: "A bulging bottom cover means the cell has physically expanded from gas buildup. Stop using immediately. Free same-day pickup - do not leave in a car." },
];

const PROBLEMS = [
  { title: "Battery swelling on M1 and M2 MacBook Air",
    body: "Lithium-ion pouch cells swell when they degrade in Dubai's heat. Most common on M1 Air used heavily in the first 2–3 years. Signs: trackpad won't click, bottom cover bows. Replace immediately, AED 450." },
  { title: "MacBook Air won't turn on without the charger",
    body: "Cell has reached 0V and the BMS protection latch opened. Common on Intel 2018–2020 after 5+ years. Full battery replacement plus BMS re-pair, AED 450 same-day." },
  { title: "Battery drains overnight even in sleep",
    body: "On Apple Silicon Air, standby draw is under 1% per hour. 10%+ overnight means an app is preventing proper sleep. Activity Monitor shows the culprit. If capacity is above 80%, it is software not battery." },
  { title: "macOS shows battery health at 100% but life is short",
    body: "Firmware quirk on Sonoma/Sequoia. Run a manual calibration (charge to 100%, drain fully under load, recharge). If cycle count is above 800 and life is still short, replace." },
  { title: "M2 Air battery draining fast after SSD upgrade or heavy write use",
    body: "The M2 Air's 256GB SSD variant (A2681) uses a single NAND chip that causes the SSD controller to wake constantly, increasing background power draw by 25–30%. Worst on M2 256GB. Replace SSD with A-grade 512GB or accept the drain. The battery itself is not at fault." },
  { title: "Intel Air battery degraded from Dubai heat",
    body: "Lithium-ion cells permanently lose capacity when stored above 35°C. Intel Airs left in cars, direct sunlight on desks, or in non-air-conditioned storage in UAE summers degrade 2–3x faster. AED 450 replacement restores capacity." },
  { title: "MacBook Air M3 or M4 draining fast on new setup",
    body: "Normal behaviour. Spotlight indexing, iCloud sync, Photos library rebuild, and Siri training run for 24–72 hours on a new or freshly reset machine. Activity Monitor will show these processes. Wait 3 days before assuming battery fault." },
  { title: "Battery shows correct percentage but shuts off suddenly",
    body: "PMU/PMIC misread on worn cells. The cell voltage drops too fast at low capacity and triggers emergency shutdown. Not a logic board fault in most cases, battery replacement clears it. AED 450." },
];

const TIMELINE = [
  { tone: "good" as const, head: "2 hours (dropped off before 11am)",
    body: "Intel, M1, M2, M3 models with cells in stock. Drop off, wait 2 hours, collect. BMS re-pair included." },
  { tone: "good" as const, head: "Same day (any time drop-off)",
    body: "All Intel, M1, M2, M3 models. WhatsApp the model to confirm cell stock before you travel." },
  { tone: "mid" as const, head: "1–2 days (M4 models)",
    body: "M4 cells sourced from the local Apple-authorised distributor. Ordered same-day you drop off, arrives next morning." },
  { tone: "mid" as const, head: "Call first (swollen cell)",
    body: "Swollen batteries need a careful extraction that adds 30–45 minutes. Same-day service but book the slot so we have the right tools ready." },
];

const WHY: { title: string; body: string; Icon: LucideIcon }[] = [
  { Icon: Award,       title: "Skilled Technicians",     body: "Every technician has years of MacBook experience. We train monthly on each new model release, from Intel BMS faults to Apple Silicon battery calibration on M4." },
  { Icon: ShieldCheck, title: "Customer Satisfaction",   body: "You approve the price before we start and inspect the repair before you pay. No fix, no charge - that is our promise on every battery job." },
  { Icon: Wrench,      title: "Everything In One Place", body: "Battery, BMS re-pair, swelling extraction, calibration - we handle every battery fault in one workshop, with cells on the shelf for same-day repairs." },
  { Icon: Cpu,         title: "Quality Parts",           body: "Tier-1 cells from Samsung SDI, LG Chem, and ATL - the same manufacturers Apple uses. Genuine Apple cells available on request. Every grade is stated on the WhatsApp quote." },
  { Icon: HardDrive,   title: "Data Privacy",            body: "Your MacBook is your business. We follow strict confidentiality procedures and never access personal data during battery replacements." },
];

const TESTIMONIALS = [
  { name: "Laila K.",  body: "M3 MacBook Air battery was down to 4 hours on a full charge. New cell from MacBook Repair Dubai and I'm back to 15 hours. Same-day, AED 450, done." },
  { name: "Omar F.",   body: "Intel Air trackpad stopped clicking, turned out to be a swollen battery. Fixed same day with free pickup from Jumeirah. Excellent service." },
  { name: "Priya N.",  body: "M2 Air was losing 40% overnight. Technician found it was the SSD power issue, not the battery, saved me the repair cost. Honest and knowledgeable." },
];

const FAQ_GROUPS = [
  {
    category: "Pricing & booking",
    items: [
      { q: "How much does MacBook Air battery replacement cost in Dubai?", a: "From AED 450 for Intel 2018–2020 and M1, AED 450 for M2/M3 13\", AED 500 for M2/M3 15\", AED 500–550 for M4. Includes cell, labour, BMS re-pair, and calibration. No diagnostic fee. WhatsApp the model for exact quote." },
      { q: "How long does MacBook Air battery replacement take in Dubai?", a: "Same-day 2 hours for Intel, M1, M2, M3 when the cell is in stock. M4 is 1–2 days. WhatsApp the model to confirm stock before you travel." },
      { q: "Do you offer free pickup for MacBook Air battery replacement?", a: "Yes. Free pickup Dubai-wide. Do NOT leave a swollen battery in a hot car while waiting for pickup - keep it in a cool indoor location." },
      { q: "How does MacBook Air battery replacement cost compare to Apple Store?", a: "Apple charges AED 549–699 depending on model and requires 5–14 business days. MacBook Repair Dubai charges AED 450–550 and completes same-day." },
    ],
  },
  {
    category: "Battery health",
    items: [
      { q: "How do I check MacBook Air battery health?", a: "Apple menu > System Settings > Battery > Battery Health (click the \"i\" icon on macOS Ventura+). Note Maximum Capacity and Cycle Count. Below 80% capacity or above 900 cycles means replacement time." },
      { q: "What is a good cycle count for MacBook Air?", a: "Apple rates MacBook Air batteries (Intel and Apple Silicon) for 1,000 cycles to 80% capacity. Below 500 cycles: healthy. 500–800: normal degradation. 800–1,000: monitor monthly. Above 1,000: replace before swelling risk increases." },
      { q: "Does MacBook Air battery replacement restore original battery life?", a: "Yes. A new OEM-equivalent cell has 100% capacity. macOS shows \"Maximum Capacity: 100%\" immediately after calibration. You get the full rated 12–18 hours (depending on model and task) back from day one." },
    ],
  },
  {
    category: "Apple Silicon specifics",
    items: [
      { q: "Does MacBook Air M1/M2/M3/M4 battery replacement require special tools?", a: "Yes. Apple Silicon MacBook Air batteries require BMS (Battery Management System) firmware re-pair after replacement. Without this step, macOS shows incorrect capacity or the battery does not charge properly. MacBook Repair Dubai does the BMS re-pair on the bench using Apple's own diagnostic tools, included in the price." },
      { q: "Will battery replacement affect MacBook Air performance?", a: "No. A new cell with 100% capacity means the M-series chip is never forced into thermal throttling from low voltage. Performance may actually improve if the old degraded cell was causing the PMU to limit CPU/GPU power draw." },
      { q: "Is MacBook Air M4 battery replacement different from M3?", a: "The M4 Air uses a different physical cell (new form factor for the 2025 redesign) and a different part number than M3. The BMS re-pair process is the same. Turnaround is 1–2 days for M4 (versus same-day for M3) while M4 cell supply normalises." },
    ],
  },
  {
    category: "Safety & swelling",
    items: [
      { q: "Is a swollen MacBook Air battery dangerous?", a: "Yes. A swollen lithium-ion cell is venting flammable electrolyte and can ignite. Stop using the MacBook Air immediately. Do not leave it in a car, in direct sunlight, or near flammable materials. WhatsApp MacBook Repair Dubai for free same-day pickup and we handle the safe removal." },
      { q: "Can I use my MacBook Air with a swollen battery while waiting for repair?", a: "No. A swollen battery that is still being charged and discharged increases the risk of thermal runaway. Unplug the charger, power off if possible, and arrange pickup. If the MacBook Air cannot be powered off, leave it on a non-flammable surface away from heat." },
    ],
  },
];

const aed = (n: number) => `AED ${n.toLocaleString()}`;

/* ── Section heading ── */
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
        <a href={`${NAP.whatsappUrl}?text=${encodeURIComponent("Hi Shafiq, MacBook Air battery replacement quote please. Model: ")}`} target="_blank" rel="noopener noreferrer">
          <MessageCircle aria-hidden /> WhatsApp Us
        </a>
      </Button>
      <Button asChild variant={dark ? "secondary" : "outline"} size="lg" className={dark ? "bg-white/10 text-white border-white/30 hover:bg-white/20" : ""}>
        <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call Now</a>
      </Button>
    </div>
  );
}

/* ── MAIN COMPONENT ─────────────────────────────────────────────── */

export default function MacBookAirBatteryReplacement() {
  const reviews = pickReviews(["Laila Khalil", "Omar Farhat", "Priya Nair"]);

  useSeo(
    {
      title: "MacBook Air Battery Replacement Dubai - From AED 450",
      description:
        "MacBook Air battery replacement Dubai from AED 450. M1 through M4, Intel, swelling, same-day 2-hour service, 3-month warranty. Free pickup Dubai-wide. Call 055 741 3706.",
      path: "/macbook-air-battery-replacement-dubai",
      preloadImage: preloadFromHero(IMG.hero.src),
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "MacBook Air Battery Replacement Dubai",
        price: 450,
        timeline: "Same day · 2 hours",
        warranty: "P3M",
        url: "/macbook-air-battery-replacement-dubai",
      }),
    ],
  );

  return (
    <PageShell>
      <div className="-mb-[4rem] bg-bg text-text">

        {/* ── BREADCRUMB ── */}
        <div className="pt-[64px]" style={{ borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 py-[6px]">
            <BreadcrumbTrail tone="dark" trail={[
              { name: "Home", path: "/" },
              { name: "MacBook Repair", path: "/macbook-repair-dubai" },
              { name: "MacBook Air Repair", path: "/macbook-air-repair-dubai" },
              { name: "Battery Replacement", path: "/macbook-air-battery-replacement-dubai" },
            ]} />
          </div>
        </div>

        {/* ── HERO ── */}
        <Hero
          variant="device"
          tone="dark"
          eyebrow="MacBook Air battery specialist"
          title="MacBook Air Battery Replacement Dubai"
          image={IMG.hero.src}
          imageAlt={IMG.hero.alt}
        >
          <div
            className="mt-md"
            itemScope
            itemType="https://schema.org/Question"
          >
            <p className="text-[15px] font-semibold text-text mb-2" itemProp="name">
              Where can I get my MacBook Air battery replaced in Dubai?
            </p>
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p className="text-[15px] text-text-muted leading-relaxed" itemProp="text">
                MacBook Repair Dubai replaces MacBook Air batteries from AED 450 at its Concord Tower workshop in Dubai Media City. Intel 2018–2020, M1, M2, M3, and M4 cells in stock, same-day 2-hour service on most models. BMS firmware re-pair on Apple Silicon included, free pickup citywide, 3-month written warranty.
              </p>
            </div>
          </div>
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> M1–M4 &amp; all Intel models</span>
            <span>·</span><span>BMS re-pair included</span>
            <span>·</span><span>Swelling specialist</span>
          </p>
        </Hero>

        {/* ── USP STRIP ── */}
        <div style={{ borderBottom: "1px solid var(--color-border)" }}>
          <ul className="mx-auto max-w-content px-5 md:px-6 py-md flex flex-wrap justify-center gap-x-xl gap-y-sm">
            {[
              { Icon: Search,      label: "Free battery health check" },
              { Icon: BadgeCheck,  label: "No fix, no charge" },
              { Icon: Truck,       label: "Free pickup Dubai-wide" },
              { Icon: ShieldCheck, label: "BMS re-pair included" },
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
                { stat: "3,200+", label: "Air batteries replaced" },
                { stat: "AED 450", label: "Starting price" },
                { stat: "2 hours", label: "Same-day turnaround" },
                { stat: "3 mo", label: "Written warranty" },
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

        {/* ── PRICING ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <SectionHeading
            label="Every Air model, one place"
            title="MacBook Air battery replacement prices Dubai"
            sub="Intel through M4, cell + labour + BMS re-pair + calibration all-in. No diagnostic fee. Tap the chip column for a model-specific page."
          />
          <div className="overflow-x-auto rounded-2xl border border-border bg-bg-card">
            <table className="w-full border-collapse text-left text-[14px] min-w-[520px]">
              <thead>
                <tr className="border-b border-border text-accent">
                  <th className="px-lg py-md font-semibold">MacBook Air model</th>
                  <th className="px-lg py-md font-semibold whitespace-nowrap">Battery replacement</th>
                  <th className="px-lg py-md font-semibold">Turnaround</th>
                  <th className="px-lg py-md font-semibold">Chip page</th>
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
            All prices include the cell, labour, BMS firmware re-pair (Apple Silicon models), and a post-replacement calibration cycle. No hidden fees.
          </p>
        </section>

        {/* ── BATTERY SPECS ── */}
        <section className="bg-bg-alt mt-[96px] py-[80px]" style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <SectionHeading
              label="Know your battery before you book"
              title="Which battery does your MacBook Air have?"
              sub="Battery capacity, cycle rating, and charging port differ by chip generation. This affects pricing, BMS requirements, and turnaround time."
            />
            <div className="overflow-x-auto rounded-2xl border border-border bg-bg">
              <table className="w-full border-collapse text-left text-[14px] min-w-[620px]">
                <thead>
                  <tr className="border-b border-border text-accent">
                    <th className="px-lg py-md font-semibold">Chip</th>
                    <th className="px-lg py-md font-semibold">Capacity</th>
                    <th className="px-lg py-md font-semibold">Cycle limit</th>
                    <th className="px-lg py-md font-semibold">Charging port</th>
                    <th className="px-lg py-md font-semibold">Apple service</th>
                  </tr>
                </thead>
                <tbody>
                  {BATTERY_SPECS.map((s) => (
                    <tr key={s.chip} className="border-b border-border last:border-0">
                      <td className="px-lg py-sm font-medium text-text">
                        <Link to={s.l3href} className="text-accent hover:underline">{s.chip}</Link>
                      </td>
                      <td className="px-lg py-sm text-text">{s.capacity}</td>
                      <td className="px-lg py-sm text-text-muted">{s.cycleLimit}</td>
                      <td className="px-lg py-sm text-text-muted text-[13px]">{s.chargingPort}</td>
                      <td className="px-lg py-sm text-text-muted">{s.appleService}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <SectionHeading
            label="How it works"
            title="Our battery replacement process"
            sub="Simple, transparent, and fast. Here is what happens when you book your MacBook Air battery replacement."
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
          <div className="mt-xl flex justify-center"><CallButtons /></div>
        </section>

        {/* ── WARNING SIGNS ── */}
        <section className="bg-bg-alt mt-[96px] py-[80px]" style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <SectionHeading
              label="Warning signs"
              title="Signs your MacBook Air battery needs replacing"
            />
            <ul className="grid gap-3 sm:grid-cols-2 max-w-[880px] mx-auto">
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

        {/* ── COMMON PROBLEMS ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <SectionHeading
            label="Match the symptom"
            title="Common MacBook Air battery problems"
            sub="The highest-volume Air battery issues at the workshop. Match your symptom to the typical fix and cost."
          />
          <div className="grid gap-x-xl gap-y-[56px] sm:grid-cols-2 lg:grid-cols-2">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="flex flex-col gap-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 mb-xs">
                  <AlertTriangle size={22} className="text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="text-[17px] font-semibold text-text">{p.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-xl flex justify-center"><CallButtons /></div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="bg-bg-alt mt-[96px] py-[80px]" style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <SectionHeading
              label="Turnaround"
              title="How long does MacBook Air battery replacement take?"
            />
            <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-4">
              {TIMELINE.map((t) => (
                <div
                  key={t.head}
                  className={`rounded-2xl border p-lg flex flex-col gap-sm ${t.tone === "good" ? "border-accent/30 bg-accent/[0.06]" : "border-border bg-bg-card"}`}
                >
                  <h3 className="text-[18px] font-semibold text-text">{t.head}</h3>
                  <p className="text-[15px] text-text-muted leading-relaxed">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARTS GRADES ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <SectionHeading
            label="What goes in your MacBook Air"
            title="OEM-equivalent, genuine Apple, or BMS re-pair only"
            sub="Every battery job includes the cell, labour, BMS firmware re-pair on Apple Silicon, and a calibration cycle. Choose the cell grade below."
          />
          <div className="grid gap-x-xl gap-y-[48px] sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "OEM-equivalent cell (Samsung SDI / LG Chem / ATL)", sub: "Standard pricing", body: "Same chemistry and capacity as the original. These are tier-1 cells from the manufacturers Apple uses, supplied through our Apple-authorised distributor. Same 1,000-cycle rating. Available for all Air models." },
              { title: "Apple Genuine (genuine Apple replacement)",           sub: "Available on request", body: "Apple's own replacement cells, ordered through the Apple repair channel. More expensive but includes Apple's own BMS firmware matching. Ask on WhatsApp for pricing." },
              { title: "BMS re-pair (Apple Silicon only)",                    sub: "Included in every price", body: "After any MacBook Air M1–M4 battery replacement, the Battery Management System must be re-paired to the logic board via AST2 diagnostics. We do this on the bench as part of every M-series Air battery job." },
            ].map(({ title, sub, body }) => (
              <div key={title} className="flex flex-col gap-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 mb-xs">
                  <Check size={22} className="text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="text-[17px] font-semibold text-text">{title}</h3>
                <p className="text-[13px] text-accent font-medium">{sub}</p>
                <p className="text-[15px] text-text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="bg-bg-alt mt-[96px] py-[80px]" style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <SectionHeading
              label="Why us"
              title="The independent Apple battery specialists in Dubai"
              sub="Not an Apple Authorised Service Centre - the faster, fairer-priced alternative with 20 years of experience replacing MacBook batteries."
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
              <p className="text-center mt-5 text-[17px] text-on-primary-muted max-w-[50ch] mx-auto leading-relaxed">216+ verified Google reviews. Here are three.</p>
            </div>
            <div className="grid gap-lg md:grid-cols-3">
              {(reviews.length ? reviews.map(r => ({ name: r.name, body: r.text })) : TESTIMONIALS).map((t) => (
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

        {/* ── VS APPLE STORE ── */}
        <VsAppleStore tone="dark" />

        {/* ── FAQ ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[96px]">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
            {/* sticky sidebar */}
            <div className="lg:sticky lg:top-24 rounded-xl border border-border bg-bg-card p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">FAQ</p>
              <h2 className="text-[22px] font-bold tracking-tight text-text leading-snug mb-3">
                Frequently asked questions
              </h2>
              <p className="text-[14px] text-text-muted leading-relaxed">
                Everything you need to know before booking your MacBook Air battery replacement.
              </p>
              <div className="mt-5 pt-5 border-t border-border flex flex-col gap-2 text-[13px] text-text-muted">
                <span>✓ Free battery health check</span>
                <span>✓ No fix, no charge</span>
                <span>✓ 3-month written warranty</span>
                <span>✓ Free pickup Dubai-wide</span>
              </div>
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
              { label: "MacBook Air Repair Dubai",              href: "/macbook-air-repair-dubai" },
              { label: "MacBook Battery Replacement Dubai",     href: "/macbook-battery-replacement-dubai" },
              { label: "MacBook Air Screen Repair Dubai",       href: "/macbook-air-screen-repair-dubai" },
              { label: "MacBook Pro Battery Replacement Dubai", href: "/macbook-pro-battery-replacement-dubai" },
              { label: "MacBook Water Damage Repair Dubai",     href: "/macbook-water-damage-repair-dubai" },
              { label: "Mac Repair Dubai",                      href: "/mac-repair-dubai" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-accent hover:underline">{l.label} ›</a>
            ))}
          </div>
        </section>

        {/* ── BLOG LINKS ── */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-1">From our blog</p>
          <h2 className="text-[22px] md:text-[26px] font-bold tracking-tight text-text mb-5">MacBook Air battery guides &amp; repair advice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {([
              ["MacBook Air battery draining fast Dubai",     "/blog/macbook-air-battery-drain-dubai"],
              ["MacBook battery replacement cost Dubai 2026", "/blog/macbook-battery-replacement-cost-2026"],
              ["MacBook battery health check guide",          "/blog/macbook-battery-health-check-guide"],
              ["MacBook Air M3 common problems Dubai",        "/blog/macbook-air-m3-common-problems-dubai"],
              ["MacBook Air M2 common problems Dubai",        "/blog/macbook-air-m2-common-problems-dubai"],
              ["How long do MacBooks last?",                  "/do-macbooks-last-over-a-decade"],
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
              <p className="text-[11px] uppercase tracking-widest text-on-primary-muted mb-1">Swollen Air battery?</p>
              <h2 className="text-[22px] md:text-[26px] font-bold text-white leading-tight">
                Replace it today · From AED 450 · Free pickup Dubai-wide
              </h2>
            </div>
            <div className="flex flex-wrap gap-sm shrink-0">
              <CallButtons dark />
            </div>
          </div>
        </section>

      </div>

      {/* ── LEAD FORM ── */}
      <section id="quote" className="mx-auto max-w-content px-5 md:px-6 mt-3xl scroll-mt-24">
        <h2 className="text-[28px] md:text-[32px] mb-md text-text">Get your free battery replacement quote</h2>
        <p className="text-[15px] text-text-muted mb-lg max-w-[60ch]">Two quick steps: your device, then how to reach you. Free diagnosis, written quote, 3-month warranty.</p>
        <LeadForm variant="compact" defaultDeviceType="MacBook" sourcePath="/macbook-air-battery-replacement-dubai" />
      </section>

      <RelatedArticles path="/macbook-air-battery-replacement-dubai" />
    </PageShell>
  );
}
