"use client";
// Data-driven Mac desktop device-model page (Mac Mini + Mac Studio + Mac Pro).
// Reads from src/content/mac-desktop-models.json.
// Single component renders SubServicePageTemplate-based page for any model.
//
// Usage: <MacDesktopModelPage slug="mac-mini-m4-2024-repair-dubai" />
import { Link } from "@/lib/router-compat";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
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
  honestyNote: string;
  heroTagline: string;
};

const ALL_MODELS: DesktopModel[] = desktopModels as DesktopModel[];

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
      body: `Mac Studios are built for sustained creative workloads, which means dust and thermal paste degradation are the #1 things we see. ${age} years old or not, a fan clean + thermal refresh (AED ${m.pricing.thermalPaste ?? m.pricing.fanCleaning ?? 300}) every 12-18 months keeps these performing like new.`,
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
  const me = ALL_MODELS.find((m) => m.slug === slug);
  if (!me) return [];
  // Circular window over the same family so inbound links distribute evenly and
  // no model (incl. the newest at the tail) is orphaned.
  const fam = ALL_MODELS.filter((m) => m.family === me.family);
  const idx = fam.findIndex((m) => m.slug === slug);
  const picks: DesktopModel[] = [];
  for (let k = 1; k <= 4 && k < fam.length; k++) picks.push(fam[(idx + k) % fam.length]);
  if (picks.length < 4) {
    const others = ALL_MODELS.filter((m) => m.family !== me.family && m.slug !== slug);
    picks.push(...others.slice(0, 4 - picks.length));
  }
  return picks;
}

type ServiceRow = { service: string; price: number | string; href: string; timeline: string };

function buildServiceRows(m: DesktopModel): ServiceRow[] {
  const hub = FAMILY_HUB[m.family];
  const rows: ServiceRow[] = [
    {
      service: "Logic board repair (component-level)",
      price: m.pricing.logicBoard,
      href: m.family === "mini" ? "/mac-logic-board-repair-dubai" : hub,
      timeline: m.family === "studio" || m.family === "pro" ? "4-6 days" : "3-5 days",
    },
  ];
  if (m.pricing.psu) {
    rows.push({
      service: "Power supply replacement",
      price: m.pricing.psu,
      href: hub,
      timeline: "1-2 days",
    });
  }
  if (m.pricing.port) {
    rows.push({
      service: "Thunderbolt / USB-C port repair",
      price: m.pricing.port,
      href: "/mac-port-repair-dubai",
      timeline: "1-2 days",
    });
  }
  if (m.pricing.ramUpgrade) {
    rows.push({
      service: `RAM upgrade (DDR4 ECC, up to ${m.maxRAM.split(" ")[0]})`,
      price: m.pricing.ramUpgrade,
      href: hub,
      timeline: "Same-day",
    });
  }
  if (m.pricing.mpxModule) {
    rows.push({
      service: "MPX GPU module replacement (labour)",
      price: `${m.pricing.mpxModule}+`,
      href: "/mac-pro-gpu-repair-dubai",
      timeline: "2-4 days (parts vary)",
    });
  }
  if (m.pricing.ssdRecovery) {
    rows.push({
      service: "Soldered SSD chip-off data recovery",
      price: `${m.pricing.ssdRecovery}+`,
      href: "/mac-data-recovery-dubai",
      timeline: "5-10 days",
    });
  }
  if (m.pricing.fanCleaning) {
    rows.push({
      service: "Fan cleaning + dust removal",
      price: m.pricing.fanCleaning,
      href: "/mac-fan-cleaning-dubai",
      timeline: "Same-day",
    });
  }
  if (m.pricing.thermalPaste) {
    rows.push({
      service: "Thermal paste refresh",
      price: m.pricing.thermalPaste,
      href: "/mac-fan-cleaning-dubai",
      timeline: "Same-day",
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
  const serviceRows = buildServiceRows(model);
  const related = pickRelatedModels(slug);

  const candidates = [
    model.pricing.fanCleaning,
    model.pricing.thermalPaste,
    model.pricing.port,
    model.pricing.psu,
  ].filter((v): v is number => typeof v === "number" && v > 0);
  const startingPrice = candidates.length ? Math.min(...candidates) : model.pricing.logicBoard;

  const isAppleSilicon = model.era === "apple-silicon";
  const isStudio = model.family === "studio";
  const isPro = model.family === "pro";
  const isMacPro2019 = model.family === "pro" && model.era === "intel";
  const isM3UltraStudio = model.slug === "mac-studio-m3-ultra-2025-repair-dubai";
  const isNewMiniChassis = model.family === "mini" && model.chassisGen === "new";

  const faqs = [
    {
      q: `How much does a ${model.name} logic board repair cost in Dubai?`,
      a: `Component-level logic board repair on the ${model.name} starts at AED ${model.pricing.logicBoard}. Timeline ${isStudio || isPro ? "4-6 days" : "3-5 days"}. Includes a 12-month written warranty on the work and the part. Where component-level isn't economical, we'll quote a full-board swap and let you choose.`,
    },
    {
      q: isAppleSilicon
        ? `Can I upgrade RAM or SSD on the ${model.shortName}?`
        : `Can I upgrade the ${model.shortName}?`,
      a: isMacPro2019
        ? `Yes - the Mac Pro 2019 is one of the last truly upgradeable Macs. RAM goes to 1.5TB across 12 DDR4 ECC R-DIMM slots (AED 600 labour, plus the modules). MPX GPU modules are swappable (Vega II, W6800X, W6900X - labour AED 1,500 + part). PCIe storage and accelerator cards are supported. SSD modules are Apple-keyed but swappable. This is the most repair-friendly Mac Apple ever made.`
        : isAppleSilicon
          ? `No. Apple Silicon Macs (M1 through M5) have RAM unified into the SoC and the SSD soldered to the logic board. The chip, RAM, and storage are one package. Buy enough at order time - upgrading later is impossible. ${model.pricing.ssdRecovery ? `For data on a failed SSD, we offer chip-off recovery (AED ${model.pricing.ssdRecovery}+).` : ""}`
          : `Limited. Standard service (PSU, ports, fans) is straightforward. Major changes are not supported.`,
    },
    {
      q: isStudio
        ? `How often should I service a Mac Studio?`
        : isPro
          ? `Is the Mac Pro 2019 still the right tool for PCIe GPU work in 2026?`
          : isNewMiniChassis
            ? `What's the deal with the top power button on the new Mac Mini?`
            : `What's the most common Mac Mini issue you see?`,
      a: isStudio
        ? `Heavy creative users - every 12 months for fan cleaning + thermal paste refresh (AED ${(model.pricing.fanCleaning ?? 300) + (model.pricing.thermalPaste ?? 300)} together). Light users - every 18-24 months. Dubai dust gets drawn into the chassis fast and thermal paste degrades under sustained Ultra-class workloads. Prevention is much cheaper than logic-board repair.`
        : isPro
          ? `Yes - for now. Apple's current Mac Pro M2 Ultra removed PCIe GPU support entirely (Apple Silicon limitation). If you need MPX modules or third-party GPU expansion, the 2019 Intel Mac Pro is still the only option. We recommend keeping yours running - we have access to MPX modules and genuine Apple parts that are still available.`
          : isNewMiniChassis
            ? `The power button is on the bottom of the chassis (you reach UNDER the Mac Mini to press it). It's awkward but you almost never use it once the Mac is set up. Not a defect, just an unusual design choice. We don't see failures on the button itself.`
            : `Internal PSU thermal stress and HDMI port wear. The PSU is integrated (not an external brick) and works hard in the small chassis. We replace it for AED ${model.pricing.psu ?? 450}, typically 1-2 days, with a 12-month warranty.`,
    },
    {
      q: `Is the ${model.shortName} still worth repairing in 2026?`,
      a: `${verdict.headline}. ${verdict.body}`,
    },
    {
      q: `Where can I get my ${model.name} repaired in Dubai?`,
      a: `Bring it to our workshop in Dubai Media City, or use our free pickup service across Dubai mainland. ${isPro ? "We have proper transport for the Mac Pro tower - never trust a regular courier with a Mac Pro." : ""} WhatsApp the model and a photo of the problem and we'll quote within 4 minutes. Written warranty of up to 12 months, depending on the repair.`,
    },
  ];

  return (
    <SubServicePageTemplate
      seoTitle={`${model.name} Repair Dubai - From AED ${startingPrice}`}
      seoDescription={`${model.name} repair Dubai. Logic board AED ${model.pricing.logicBoard}${model.pricing.psu ? `, PSU AED ${model.pricing.psu}` : ""}${model.pricing.port ? `, port AED ${model.pricing.port}` : ""}. 12-month warranty.`}
      path={`/${model.slug}`}
      eyebrow={`${FAMILY_LABEL[model.family]} · ${model.releaseYear}${model.currentInLineup ? " · current Apple lineup" : model.discontinued ? ` · discontinued ${model.discontinued}` : ""}`}
      h1={`${model.name} Repair Dubai - Logic Board, PSU, Ports & Preventive Service`}
      subtitle={`${model.heroTagline} From AED ${startingPrice}. 12-month written warranty. Free pickup across Dubai.`}
      startingPrice={startingPrice}
      timeline={isStudio || isPro ? "Standard service same-day to 3 days · Logic board 4-6 days" : "Same-day to 5 days depending on the job"}
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
            {" "}From AED {startingPrice} for the most common service. Free pickup, 12-month written warranty.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">About the {model.name}</h2>
          <ul className="space-y-1 text-[15px] mb-lg">
            <li>• <strong>Released:</strong> {model.releaseYear}{model.currentInLineup ? " · current Apple lineup" : model.discontinued ? ` · discontinued ${model.discontinued}` : ""}</li>
            <li>• <strong>Chip:</strong> {model.chip}</li>
            <li>• <strong>Max RAM:</strong> {model.maxRAM}</li>
            <li>• <strong>Storage:</strong> {model.baseStorage} base · up to {model.maxStorage}</li>
            <li>• <strong>Ports:</strong> {model.ports}</li>
            <li>• <strong>Wireless:</strong> {model.wirelessChip}</li>
          </ul>

          <h2 className="text-[24px] md:text-[28px] mb-md">Common problems we see on the {model.shortName}</h2>
          <ul className="space-y-2 text-[15px] mb-lg">
            {model.commonIssues.map((issue, i) => (
              <li key={i}>• {issue}</li>
            ))}
          </ul>

          <h2 className="text-[24px] md:text-[28px] mb-md">Services available for the {model.shortName}</h2>
          <div className="overflow-x-auto border border-border rounded-md bg-bg-card mb-lg">
            <table className="w-full text-[14px] min-w-[560px]">
              <thead className="bg-bg-alt">
                <tr className="text-left">
                  <th className="px-md py-sm font-semibold">Service</th>
                  <th className="px-md py-sm font-semibold">Price (AED)</th>
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
          </div>

          {isAppleSilicon && !isPro && (
            <div className="bg-bg-alt border-l-4 border-accent rounded-md p-lg mb-lg">
              <h3 className="text-[18px] font-bold mb-sm">Can we upgrade RAM or SSD on the {model.shortName}?</h3>
              <p className="text-[15px] mb-sm">
                <strong>No.</strong> Apple Silicon Macs have soldered memory and SoC-integrated SSD. What you buy is what you have for the life of the device.
              </p>
              <p className="text-[15px]">
                Buy enough RAM and storage at order time. {model.pricing.ssdRecovery && <>For data recovery on a failed SSD, we offer chip-off recovery (AED {model.pricing.ssdRecovery}+, complex but possible). <Link to="/mac-data-recovery-dubai" className="text-primary font-semibold hover:underline">More on data recovery →</Link></>}
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
                <strong>Heavy users:</strong> fan cleaning + thermal paste every 12 months (AED {(model.pricing.fanCleaning ?? 300) + (model.pricing.thermalPaste ?? 300)} together). <strong>Light users:</strong> every 18-24 months. Prevention is much cheaper than logic-board repair.
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

          <h2 className="text-[24px] md:text-[28px] mb-md">Parts availability for the {model.shortName}</h2>
          <p className="text-[15px] mb-lg">
            {model.currentInLineup
              ? `As Apple's current ${FAMILY_LABEL[model.family]}, parts come through authorised channels. ${model.timelineNotes}`
              : isMacPro2019
                ? `MPX GPU modules (Vega II, W6800X, W6900X) are still available but increasingly scarce - sourcing 3-7 days. RAM, PSU and Thunderbolt parts are routine. ${model.timelineNotes}`
                : `Parts for the ${model.shortName} are widely available. ${model.timelineNotes}`}
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Is the {model.shortName} still worth repairing in 2026?</h2>
          <div className="bg-bg-alt border-l-4 border-primary rounded-md p-lg mb-lg">
            <p className="text-[16px] font-semibold mb-sm">{verdict.headline}</p>
            <p className="text-[15px]">{verdict.body}</p>
          </div>

          <h2 className="text-[24px] md:text-[28px] mb-md">Our honest take on the {model.shortName}</h2>
          <p className="text-[15px] mb-lg">{model.honestyNote}</p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Other Mac desktops we repair</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-sm mb-lg">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/${r.slug}`}
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
        isAppleSilicon ? "Soldered SSD failure - chip-off data recovery" : "RAM upgrades, MPX GPU module swaps, PCIe storage",
        `Thunderbolt / USB-C port damage from heavy dock use`,
        isStudio || isPro ? "Fan dust buildup & thermal paste refresh - preventive service" : "Internal PSU thermal stress, fan cleaning",
        "macOS reinstall, slow performance, kernel panics",
        "Liquid damage - ultrasonic clean, board-level recovery",
        "Wi-Fi / Bluetooth module faults",
      ]}
      steps={[
        { title: "WhatsApp the model and issue", body: `Send "${model.name}" plus a photo of the problem. Quote in 4 minutes.` },
        { title: "Free pickup or visit our Media City workshop", body: `Free pickup across Dubai mainland${isPro ? " - proper Mac Pro tower transport, never a regular courier" : ""}. Or drop in 9am-10pm.` },
        { title: "Free diagnostic, fixed price",  body: "We diagnose for free and confirm the price before any work starts." },
        { title: "Repair + written warranty",      body: `${model.timelineNotes} You walk out (or we deliver back) with a written warranty of up to 12 months, depending on the repair.` },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Covers the replaced part and the labour",
        "Same fault returns? We re-repair free",
        "Issued in writing on your invoice",
        "No quibbling, no fine print",
      ]}
      faqs={faqs}
      reviewNames={pickReviewers(slug)}
      related={[
        { label: `${FAMILY_LABEL[model.family]} repair hub`, href: hubFor(model),                description: `All ${FAMILY_LABEL[model.family]} services and pricing in one place.` },
        { label: "Mac data recovery",                        href: "/mac-data-recovery-dubai",   description: "Soldered-SSD chip-off recovery for Apple Silicon Macs. AED 2,000+." },
        { label: "Mac full diagnostic",                      href: "/mac-full-diagnostic-dubai", description: "Free 30-minute diagnostic - we tell you what's wrong and what it costs." },
      ]}
    />
  );
}

function hubFor(m: DesktopModel): string {
  return FAMILY_HUB[m.family];
}
