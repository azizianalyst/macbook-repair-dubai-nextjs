"use client";
// Data-driven Mac desktop device-model page (Mac Mini + Mac Studio + Mac Pro).
// Reads from src/content/mac-desktop-models.json.
// Single component renders SubServicePageTemplate-based page for any model.
//
// Usage: <MacDesktopModelPage slug="mac-mini-m4-2024-repair-dubai" />
import { Link } from "@/lib/router-compat";
import { ScrollHintTable } from "@/components/blocks/ScrollHintTable";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { relatedModels } from "@/lib/model-siblings";
import desktopModels from "@/content/mac-desktop-models.json";

type Pricing = {
  logicBoard: number;
  psu?: number;
  port?: number;
  ssdRecovery?: number;
  ramUpgrade?: number;
  mpxModule?: number;
  fanCleaning?: number;
  thermalPaste?: number;
  diagnostic?: number;
};

// One turnaround per repair type, set per model in the JSON (t20). Every timeline this page
// states for a repair - service table, FAQ, parts paragraph, hero/QuickAnswer summary - reads
// from here, so the page cannot quote two different times for the same job.
type Turnaround = {
  logicBoard?: string;
  psu?: string;
  port?: string;
  ram?: string;
  mpxModule?: string;
  ssdRecovery?: string;
  fanCleaning?: string;
  thermalPaste?: string;
};

type DesktopModel = {
  slug: string;
  name: string;
  shortName: string;
  releaseYear: number;
  family: "mini" | "studio" | "pro";
  chassisGen: "old" | "new" | "studio" | "tower";
  era: "intel" | "apple-silicon";
  chip: string;
  maxRAM: string;
  maxStorage: string;
  baseStorage: string;
  ports: string;
  wirelessChip: string;
  currentInLineup: boolean;
  discontinued?: string;
  commonIssues: string[];
  pricing: Pricing;
  timelineNotes: string;
  turnaround?: Turnaround;
  honestyNote: string;
  heroTagline: string;
};

const ALL_MODELS: DesktopModel[] = desktopModels as DesktopModel[];

// Fallbacks are the per-row values this template hard-coded before t20. Every model in the
// JSON sets its own; these only cover a new entry added without a turnaround object.
function turnaroundFor(m: DesktopModel): Required<Turnaround> {
  return {
    logicBoard: m.family === "studio" || m.family === "pro" ? "4-6 days" : "3-5 days",
    psu: "1-2 days",
    port: "1-2 days",
    ram: "Same-day",
    mpxModule: "2-4 days (parts vary)",
    ssdRecovery: "5-10 days",
    fanCleaning: "Same-day",
    thermalPaste: "Same-day",
    ...m.turnaround,
  };
}

const TURNAROUND_LABEL: Record<keyof Turnaround, string> = {
  logicBoard: "logic board",
  psu: "PSU",
  port: "ports",
  ram: "RAM upgrade",
  mpxModule: "MPX module",
  ssdRecovery: "data recovery",
  fanCleaning: "fan cleaning",
  thermalPaste: "thermal paste",
};

// "Same-day to 2 days" -> "same-day to 2 days" for use mid-sentence.
const lc = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
// "3-7 days (parts sourcing)" -> "3-7 days" for the short hero summary.
const bare = (s: string) => s.replace(/\s*\([^)]*\)\s*$/, "");

const FAMILY_LABEL: Record<DesktopModel["family"], string> = {
  mini:   "Mac Mini",
  studio: "Mac Studio",
  pro:    "Mac Pro",
};

const FAMILY_HUB: Record<DesktopModel["family"], string> = {
  mini:   "/mac-mini-repair-dubai",
  studio: "/mac-studio-repair-dubai",
  pro:    "/mac-pro-repair-dubai",
};

const DESKTOP_REVIEWERS = [
  "David Boulos",
  "Phill Balcon",
  "June Arevalo",
  "Janna Nurahmetova",
  "Daniel Layzell",
  "Polycarp",
  "Mariia Chymyrysova",
  "Linda Banannou",
];

function pickReviewers(slug: string): string[] {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  const a = DESKTOP_REVIEWERS[Math.abs(h) % DESKTOP_REVIEWERS.length];
  const b = DESKTOP_REVIEWERS[Math.abs(h >> 3) % DESKTOP_REVIEWERS.length];
  return a === b ? [a] : [a, b];
}

function worthRepairingVerdict(m: DesktopModel): { headline: string; body: string } {
  const age = 2026 - m.releaseYear;
  if (m.currentInLineup) {
    return {
      headline: "Yes - and check Apple's warranty first",
      body: `The ${m.shortName} is in Apple's current lineup. Most units are still under the standard 1-year warranty or AppleCare+. Start there. We handle accidental damage Apple won't cover and out-of-warranty work.`,
    };
  }
  if (m.family === "pro" && m.era === "intel") {
    return {
      headline: "Yes - keep it running",
      body: `Apple has not released a true Mac Pro 2019 successor. The M2 Ultra Mac Pro lost MPX GPU support. For workloads needing PCIe GPU expansion or 1.5TB ECC RAM, your 2019 Intel Mac Pro is still the tool - we recommend keeping it running with proper service.`,
    };
  }
  if (m.family === "studio") {
    return {
      headline: "Yes - and book preventive fan/thermal service while it's open",
      body: `Mac Studios are built for sustained creative workloads, which means dust and thermal paste degradation are the #1 things we see. ${age} years old or not, a fan clean + thermal refresh every 12-18 months keeps these performing like new - message us on WhatsApp for today's exact price.`,
    };
  }
  if (m.era === "apple-silicon" && age <= 4) {
    return {
      headline: "Absolutely - easy decision",
      body: `Released ${age} year${age === 1 ? "" : "s"} ago. Apple Silicon performance is still elite, parts are widely available, and these run the latest macOS perfectly. Repairs pay for themselves quickly.`,
    };
  }
  return {
    headline: "Usually yes - depends on what's broken",
    body: `${age} years old in 2026. Most repairs are worthwhile. Logic-board jobs we'll weigh against current value at intake - no pressure either way.`,
  };
}

function pickRelatedModels(slug: string): DesktopModel[] {
  return relatedModels(slug, ALL_MODELS, (m) => m.family);
}

type ServiceRow = { service: string; price: number | string; href: string; timeline: string; key?: keyof Turnaround };

function buildServiceRows(m: DesktopModel, t: Required<Turnaround>): ServiceRow[] {
  const hub = FAMILY_HUB[m.family];
  const rows: ServiceRow[] = [
    {
      service: "Logic board repair (component-level)",
      price: "Price on request",
      href: m.family === "mini" ? "/mac-logic-board-repair-dubai" : hub,
      timeline: t.logicBoard,
      key: "logicBoard",
    },
  ];
  if (m.pricing.psu) {
    rows.push({
      service: "Power supply replacement",
      price: "Price on request",
      href: hub,
      timeline: t.psu,
      key: "psu",
    });
  }
  if (m.pricing.port) {
    rows.push({
      service: "Thunderbolt / USB-C port repair",
      price: "Price on request",
      href: "/mac-port-repair-dubai",
      timeline: t.port,
      key: "port",
    });
  }
  if (m.pricing.ramUpgrade) {
    rows.push({
      service: `RAM upgrade (DDR4 ECC, up to ${m.maxRAM.split(" ")[0]})`,
      price: "Price on request",
      href: hub,
      timeline: t.ram,
      key: "ram",
    });
  }
  if (m.pricing.mpxModule) {
    rows.push({
      service: "MPX GPU module replacement (labour)",
      price: "Price on request",
      href: "/mac-pro-gpu-repair-dubai",
      timeline: t.mpxModule,
      key: "mpxModule",
    });
  }
  if (m.pricing.ssdRecovery) {
    rows.push({
      service: "SSD data recovery (board-level repair)",
      price: "Price on request",
      href: "/mac-data-recovery-dubai",
      timeline: t.ssdRecovery,
      key: "ssdRecovery",
    });
  }
  if (m.pricing.fanCleaning) {
    rows.push({
      service: "Fan cleaning + dust removal",
      price: "Price on request",
      href: "/mac-fan-cleaning-dubai",
      timeline: t.fanCleaning,
      key: "fanCleaning",
    });
  }
  if (m.pricing.thermalPaste) {
    rows.push({
      service: "Thermal paste refresh",
      price: "Price on request",
      href: "/mac-fan-cleaning-dubai",
      timeline: t.thermalPaste,
      key: "thermalPaste",
    });
  }
  rows.push({
    service: "Free diagnostic",
    price: "Free",
    href: "/mac-full-diagnostic-dubai",
    timeline: "30 minutes",
  });
  return rows;
}

// Hero / QuickAnswer / price-card summary: the 2-3 most common jobs for the family, read off
// the rows the table actually shows, so the summary cannot contradict the table.
function headerTimeline(m: DesktopModel, rows: ServiceRow[]): string {
  const prefer: (keyof Turnaround)[] =
    m.family === "mini" ? ["psu", "port", "logicBoard"]
    : m.family === "pro" && m.era === "intel" ? ["ram", "psu", "logicBoard"]
    : ["fanCleaning", "psu", "logicBoard"];
  const s = prefer
    .map((k) => rows.find((r) => r.key === k))
    .filter((r): r is ServiceRow & { key: keyof Turnaround } => !!r?.key)
    .slice(0, 3)
    .map((r) => `${TURNAROUND_LABEL[r.key]} ${lc(bare(r.timeline))}`)
    .join(" · ");
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function MacDesktopModelPage({ slug }: { slug: string }) {
  const model = ALL_MODELS.find((m) => m.slug === slug);
  if (!model) {
    return (
      <div className="mx-auto max-w-content px-5 md:px-6 py-3xl">
        <h1 className="text-[28px]">Mac desktop model not found</h1>
        <p className="mt-md">
          We don&apos;t have a page for <code>{slug}</code> yet.{" "}
          <Link to="/mac-mini-repair-dubai" className="text-primary font-semibold hover:underline">
            Browse Mac desktop services →
          </Link>
        </p>
      </div>
    );
  }

  const verdict = worthRepairingVerdict(model);
  const turnaround = turnaroundFor(model);
  const serviceRows = buildServiceRows(model, turnaround);
  // Variants merged into a family page (2026-10-21) link to that page; keep one card per page.
  const related = pickRelatedModels(slug)
    .map((r) => ({ ...r, href: ("mergedInto" in r && (r as { mergedInto?: string }).mergedInto) || `/${r.slug}` }))
    .filter((r, i, all) => all.findIndex((x) => x.href === r.href) === i);

  const isAppleSilicon = model.era === "apple-silicon";
  const isStudio = model.family === "studio";
  const isPro = model.family === "pro";
  const isMacPro2019 = model.family === "pro" && model.era === "intel";
  const isM3UltraStudio = model.slug === "mac-studio-m3-ultra-2025-repair-dubai";
  const isNewMiniChassis = model.family === "mini" && model.chassisGen === "new";
  // A mini still on sale has no repair track record yet (and its chassis details are not in
  // docs/apple-lineup-*), so it gets an honest "brand new" answer instead of M4-era specifics.
  const isCurrentMini = model.family === "mini" && model.currentInLineup;
  // Apple silicon storage is encrypted with keys held by the SoC: recovery means getting the
  // original board running again. Chip-off does not work, so never promise it.
  const ssdRecoveryNote = `The SSD is encrypted and tied to the chip, so recovering data from a failed board means repairing the board until it runs again - chip-off recovery does not work on Apple silicon.`;

  const faqs = [
    {
      q: `How much does a ${model.name} logic board repair cost in Dubai?`,
      a: `Component-level logic board repair on the ${model.name} is priced per fault - message us on WhatsApp for today's exact price on your model. Timeline ${lc(turnaround.logicBoard)}. Includes a 15-day written warranty on the work, extendable to 6 months for a small flat fee. Where component-level isn't economical, we'll quote a full-board swap and let you choose.`,
    },
    {
      q: isAppleSilicon
        ? `Can I upgrade RAM or SSD on the ${model.shortName}?`
        : `Can I upgrade the ${model.shortName}?`,
      a: isMacPro2019
        ? `Yes - the Mac Pro 2019 is one of the last truly upgradeable Macs. RAM goes to 1.5TB across 12 DDR4 ECC R-DIMM slots (labour plus the modules). MPX GPU modules are swappable (Vega II, W6800X, W6900X - labour plus part). PCIe storage and accelerator cards are supported. SSD modules are Apple-keyed but swappable. This is the most repair-friendly Mac Apple ever made - message us on WhatsApp for today's exact upgrade price.`
        : isAppleSilicon
          ? `Not officially. On Apple silicon Macs (M1 onward) the RAM is part of the chip package, and the SSD is paired to that chip and only works with this logic board. Apple doesn't support upgrading either, so buy enough at order time. ${model.pricing.ssdRecovery ? `${ssdRecoveryNote} Message us for the exact price.` : ""}`
          : `Limited. Standard service (PSU, ports, fans) is straightforward. Major changes are not supported.`,
    },
    {
      q: isStudio
        ? `How often should I service a Mac Studio?`
        : isPro
          ? `Is the Mac Pro 2019 still the right tool for PCIe GPU work in 2026?`
          : isCurrentMini
            ? `What goes wrong on a brand-new ${model.shortName}?`
          : isNewMiniChassis
            ? `Where is the power button on the new Mac mini?`
            : `What's the most common Mac Mini issue you see?`,
      a: isStudio
        ? `Heavy creative users - every 12 months for fan cleaning + thermal paste refresh (message us on WhatsApp for today's exact price). Light users - every 18-24 months. Dubai dust gets drawn into the chassis fast and thermal paste degrades under sustained Ultra-class workloads. Prevention is much cheaper than logic-board repair.`
        : isPro
          ? `Yes - for now. The M2 Ultra Mac Pro (2023) dropped PCIe GPU support entirely (an Apple Silicon limitation), and Apple discontinued the Mac Pro line in March 2026 with no successor. If you need MPX modules or third-party GPU expansion, the 2019 Intel Mac Pro is still the only option. We recommend keeping yours running - we have access to MPX modules and genuine Apple parts that are still available.`
          : isCurrentMini
            ? `Not much yet - it is in Apple's current lineup, so there is no repair track record. What we see first on any new desktop is accidental damage Apple's warranty excludes (liquid, drops, power surges), port damage from docks and cables, and setup problems that look like hardware. Factory faults go to Apple under warranty - we check your serial number for free.`
          : isNewMiniChassis
            ? `The power button is on the bottom of the chassis (you reach UNDER the Mac Mini to press it). It's awkward but you almost never use it once the Mac is set up. Not a defect, just an unusual design choice. We don't see failures on the button itself.`
            : `Internal PSU thermal stress and HDMI port wear. The PSU is integrated (not an external brick) and works hard in the small chassis. Typical PSU turnaround is ${lc(turnaround.psu)}, with a warranty of 15 days to 2 years - message us on WhatsApp for today's exact price.`,
    },
    {
      q: `Is the ${model.shortName} still worth repairing in 2026?`,
      a: `${verdict.headline}. ${verdict.body}`,
    },
    {
      q: `My ${model.shortName} won't turn on - what should I check first?`,
      a: `Check the power cable at both ends and try another wall socket${isNewMiniChassis && model.releaseYear === 2024 ? ", then press the power button firmly - on this Mac mini it sits on the underside" : ""}. The ${model.shortName} has its power supply built in, so if there is still no light or fan, the power supply or the logic board is the likely cause - we diagnose it free.`,
    },
    {
      q: `Can you recover the data from a ${model.shortName} that won't start?`,
      a: isAppleSilicon
        ? `In most cases, yes - by repairing the board. The SSD is encrypted by the chip and only works with this logic board, so the files come back by getting that board running again - we repair it at component level rather than swapping it.`
        : `Usually, by repairing it. The Mac Pro's SSD modules are paired to its T2 security chip and encrypted, so the files come back by getting the original logic board running, not by moving the modules to another Mac.`,
    },
    {
      q: `What warranty do I get on a ${model.shortName} repair?`,
      a: `It depends on the job: the power supply, ports, fan replacement and other hardware 15 days to 2 years, and logic-board, liquid-damage and data work 15 days. The exact period is printed on your invoice.`,
    },
    {
      q: `Where can I get my ${model.name} repaired in Dubai?`,
      a: `Walk in to our workshop in Concord Tower, Dubai Media City, a 3-minute walk from the Palm Jumeirah tram stop, with parking on site. ${isPro ? "A Mac Pro tower is heavy: carry it up from the parking, or ask for a paid onsite visit, subject to technician availability and quoted on WhatsApp." : "Can't come in? Send it by a same-day courier you book."} WhatsApp the model and a photo of the problem and we'll quote within 4 minutes. Written warranty of 15 days to 2 years, depending on the repair.`,
    },
  ];

  return (
    <SubServicePageTemplate
      seoTitle={`${model.name} Repair Dubai - Free Diagnosis`}
      seoDescription={`${model.name} repair Dubai - logic board, PSU${model.pricing.port ? ", ports" : ""} and preventive service. Free diagnosis, warranty of 15 days to 2 years. WhatsApp us for a quote.`}
      path={`/${model.slug}`}
      eyebrow={`${FAMILY_LABEL[model.family]} · ${model.releaseYear}${model.currentInLineup ? " · current Apple lineup" : model.discontinued ? ` · discontinued ${model.discontinued}` : ""}`}
      h1={`${model.name} Repair Dubai - Logic Board, PSU, Ports & Preventive Service`}
      subtitle={`${model.heroTagline} Message us on WhatsApp for today's exact price. Written warranty of 15 days to 2 years. Walk in at Media City.`}
      startingPrice={0}
      timeline={headerTimeline(model, serviceRows)}
      whatsappPrefill={`Hi, I have a ${model.name} and I need help with:`}
      breadcrumb={[
        { name: "Home",                          path: "/" },
        { name: `${FAMILY_LABEL[model.family]} Repair`, path: hubFor(model) },
        { name: model.name,                      path: `/${model.slug}` },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: `${FAMILY_LABEL[model.family]} board-level repair, thermal service & port replacement` }}
      serviceName={`${model.name} Repair`}
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>{model.name} owner - let&apos;s sort it.</strong> The {model.name} runs the {model.chip}.{" "}
            {model.currentInLineup
              ? `It's still in Apple's current lineup - most units are under warranty, so always check Apple first.`
              : model.discontinued
                ? `Apple discontinued it in ${model.discontinued} but it's fully serviceable.`
                : `It's no longer sold by Apple but parts and expertise are widely available.`}
            {" "}Message us on WhatsApp for today&apos;s exact price on your model. Walk in at Media City, written warranty of 15 days to 2 years.
          </p>

          <h2 className="text-[28px] md:text-[32px] mb-md mt-lg">About the {model.name}</h2>
          <ul className="space-y-1 text-[15px] mb-lg">
            <li>• <strong>Released:</strong> {model.releaseYear}{model.currentInLineup ? " · current Apple lineup" : model.discontinued ? ` · discontinued ${model.discontinued}` : ""}</li>
            <li>• <strong>Chip:</strong> {model.chip}</li>
            {/* Spec fields left empty in the JSON are ones we cannot source (brand-new models):
                skip the line rather than print a guess. */}
            {model.maxRAM && <li>• <strong>Max RAM:</strong> {model.maxRAM}</li>}
            {model.baseStorage && model.maxStorage && <li>• <strong>Storage:</strong> {model.baseStorage} base · up to {model.maxStorage}</li>}
            {model.ports && <li>• <strong>Ports:</strong> {model.ports}</li>}
            {model.wirelessChip && <li>• <strong>Wireless:</strong> {model.wirelessChip}</li>}
            {model.currentInLineup && !model.ports && <li>• <strong>Full specifications:</strong> Apple&apos;s spec page for your exact configuration - we work from your serial number.</li>}
          </ul>

          <h2 className="text-[28px] md:text-[32px] mb-md">What are the most common {model.shortName} problems?</h2>
          <ul className="space-y-2 text-[15px] mb-lg">
            {model.commonIssues.map((issue, i) => (
              <li key={i}>• {issue}</li>
            ))}
          </ul>

          <h2 className="text-[28px] md:text-[32px] mb-md">What {model.shortName} repair services are available?</h2>
          <ScrollHintTable className="border border-border rounded-md bg-bg-card mb-lg" fadeClass="from-bg-card">
            <table className="w-full text-[14px] min-w-[560px]">
              <thead className="bg-bg-alt">
                <tr className="text-left">
                  <th className="px-md py-sm font-semibold">Service</th>
                  <th className="px-md py-sm font-semibold">Price</th>
                  <th className="px-md py-sm font-semibold">Timeline</th>
                  <th className="px-md py-sm font-semibold">Book</th>
                </tr>
              </thead>
              <tbody>
                {serviceRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-bg-alt/40" : ""}>
                    <td className="px-md py-sm">{row.service}</td>
                    <td className="px-md py-sm">{row.price}</td>
                    <td className="px-md py-sm">{row.timeline}</td>
                    <td className="px-md py-sm">
                      <Link to={row.href} className="text-primary font-semibold hover:underline">Book →</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollHintTable>

          {isAppleSilicon && !isPro && (
            <div className="bg-bg-alt border-l-4 border-accent rounded-md p-lg mb-lg">
              <h3 className="text-[18px] font-bold mb-sm">Can we upgrade RAM or SSD on the {model.shortName}?</h3>
              <p className="text-[15px] mb-sm">
                <strong>No.</strong> Apple Silicon Macs have soldered memory and SoC-integrated SSD. What you buy is what you have for the life of the device.
              </p>
              <p className="text-[15px]">
                Buy enough RAM and storage at order time. {model.pricing.ssdRecovery && <>{ssdRecoveryNote} Message us for the exact price. <Link to="/mac-data-recovery-dubai" className="text-primary font-semibold hover:underline">More on data recovery →</Link></>}
              </p>
            </div>
          )}

          {isStudio && (
            <div className="bg-bg-alt border-l-4 border-primary rounded-md p-lg mb-lg">
              <h3 className="text-[18px] font-bold mb-sm">Mac Studio preventive service - book it before something breaks</h3>
              <p className="text-[15px] mb-sm">
                Mac Studios run sustained heavy workloads (DaVinci Resolve, Logic Pro, Xcode, Blender). The fans pull dust through the chassis fast - Dubai air doesn&apos;t help - and thermal paste degrades under Ultra-class loads.
              </p>
              <p className="text-[15px]">
                <strong>Heavy users:</strong> fan cleaning + thermal paste every 12 months (message us on WhatsApp for today&apos;s exact price). <strong>Light users:</strong> every 18-24 months. Prevention is much cheaper than logic-board repair.
              </p>
            </div>
          )}

          {isM3UltraStudio && (
            <div className="bg-bg-alt border-l-4 border-accent rounded-md p-lg mb-lg">
              <h3 className="text-[18px] font-bold mb-sm">Why M3 Ultra and M4 Max in the same event?</h3>
              <p className="text-[15px] mb-sm">
                In March 2025, Apple released the Mac Studio with both the new M4 Max chip <em>and</em> an M3 Ultra. Unusual - but here&apos;s why: <strong>M3 Ultra has 32 CPU cores</strong> vs M4 Max&apos;s 16 cores. For heavy multi-core workloads (3D rendering, scientific computing, large compiles), the M3 Ultra is faster than the M4 Max despite being &quot;older&quot; generation.
              </p>
              <p className="text-[15px]">
                Creative pros in Dubai running DaVinci Resolve or After Effects tend to choose M3 Ultra. Single-threaded tasks (audio production, some coding) favour M4 Max. Choose by workload, not chip number.
              </p>
            </div>
          )}

          {isPro && (
            <div className="bg-bg-alt border-l-4 border-primary rounded-md p-lg mb-lg">
              <h3 className="text-[18px] font-bold mb-sm">Mac Pro status in 2026</h3>
              <p className="text-[15px] mb-sm">
                Apple has not released a new Mac Pro since the M2 Ultra in June 2023 - no M3, M4 or M5 Mac Pro as of April 2026. For workloads that need Mac Pro (extreme RAM, MPX GPU modules, PCIe expansion), most professionals are sticking with the 2019 Intel Mac Pro because the M2 Ultra Mac Pro <strong>lost PCIe GPU support entirely</strong>.
              </p>
              <p className="text-[15px]">
                If your Mac Pro 2019 is working, we recommend keeping it running. We service these professionally - genuine Apple parts and MPX modules that are still available.
              </p>
            </div>
          )}

          <h2 className="text-[28px] md:text-[32px] mb-md">Are {model.shortName} parts available in Dubai?</h2>
          <p className="text-[15px] mb-lg">
            {model.currentInLineup
              ? model.timelineNotes
              : isMacPro2019
                ? `MPX GPU modules (Vega II, W6800X, W6900X) are still available but increasingly scarce - a module swap takes ${lc(turnaround.mpxModule)}. RAM, PSU and Thunderbolt parts are routine. ${model.timelineNotes}`
                : `Parts for the ${model.shortName} are widely available. ${model.timelineNotes}`}
          </p>

          <h2 className="text-[28px] md:text-[32px] mb-md">Is the {model.shortName} still worth repairing in 2026?</h2>
          <div className="bg-bg-alt border-l-4 border-primary rounded-md p-lg mb-lg">
            <p className="text-[16px] font-semibold mb-sm">{verdict.headline}</p>
            <p className="text-[15px]">{verdict.body}</p>
          </div>

          <h2 className="text-[28px] md:text-[32px] mb-md">Our honest take on the {model.shortName}</h2>
          <p className="text-[15px] mb-lg">{model.honestyNote}</p>

          <h2 className="text-[28px] md:text-[32px] mb-md">Other Mac desktops we repair</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-sm mb-lg">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={r.href}
                className="border border-border rounded-md p-sm bg-bg-card hover:border-primary text-[13px] transition-colors"
              >
                <div className="font-semibold">{r.name}</div>
                <div className="text-text-muted text-[12px] mt-[2px]">{r.releaseYear} · {r.chip.split(/[ (]/)[0]} {r.chip.split(/[ (]/)[1] || ""}</div>
              </Link>
            ))}
          </div>
        </>
      }
      whatWeFix={[
        `${FAMILY_LABEL[model.family]} won't power on - PSU, board fault, or display detection`,
        `Logic board faults - component-level repair where economical`,
        isAppleSilicon ? "Data recovery from a dead board - board-level repair so the original chip runs again (no chip-off on Apple silicon)" : "RAM upgrades, MPX GPU module swaps, PCIe storage",
        `Thunderbolt / USB-C port damage from heavy dock use`,
        isStudio || isPro ? "Fan dust buildup & thermal paste refresh - preventive service" : "Internal PSU thermal stress, fan cleaning",
        "macOS reinstall, slow performance, kernel panics",
        "Liquid damage - ultrasonic clean, board-level recovery",
        "Wi-Fi / Bluetooth module faults",
      ]}
      steps={[
        { title: "WhatsApp the model and issue", body: `Send "${model.name}" plus a photo of the problem. Quote in 4 minutes.` },
        { title: "Walk in to our Media City workshop", body: `Open Mon-Sat 9am-7pm, Friday break 12-2pm.${isPro ? " Paid onsite visits for Mac Pro towers, subject to technician availability." : " Can't come in? Send it by a same-day courier you book."}` },
        { title: "Free diagnostic, fixed price",  body: "We diagnose for free and confirm the price before any work starts." },
        { title: "Repair + written warranty",      body: `${model.timelineNotes} You walk out (or we deliver back) with a written warranty of 15 days to 2 years, depending on the repair.` },
      ]}
      warrantyDays={730}
      warrantyHeadline
      warrantyBullets={[
        "Logic board, liquid and thermal work 15 days; power supply, SSD and other parts 15 days to 2 years",
        "Covers the replaced part and the labour",
        "Same fault returns inside the period? We re-repair free",
        "Issued in writing on your invoice",
      ]}
      faqs={faqs}
      reviewNames={pickReviewers(slug)}
      related={[
        { label: `${FAMILY_LABEL[model.family]} repair hub`, href: hubFor(model),                description: `All ${FAMILY_LABEL[model.family]} services and pricing in one place.` },
        { label: "Mac data recovery",                        href: "/mac-data-recovery-dubai",   description: "Apple Silicon data recovery by board-level repair - the SSD only unlocks with its original chip. WhatsApp us for a quote." },
        { label: "Mac full diagnostic",                      href: "/mac-full-diagnostic-dubai", description: "Free 30-minute diagnostic - we tell you what's wrong and what it costs." },
      ]}
    />
  );
}

function hubFor(m: DesktopModel): string {
  return FAMILY_HUB[m.family];
}
