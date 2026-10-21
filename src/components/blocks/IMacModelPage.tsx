"use client";
// Data-driven iMac device-model page.
// Reads from src/content/imac-models.json.
// Single component renders SubServicePageTemplate-based page for any iMac model.
//
// Usage: <IMacModelPage slug="imac-24-m1-2021-repair-dubai" />
import { Link } from "@/lib/router-compat";
import { ScrollHintTable } from "@/components/blocks/ScrollHintTable";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { relatedModels } from "@/lib/model-siblings";
import imacModels from "@/content/imac-models.json";

type Pricing = {
  screen: number;
  logicBoard: number;
  powerSupply?: number;
  ramUpgrade?: number;
  ssdUpgrade?: number;
  fusionToSsd?: number;
  ssdRecovery?: number;
  gpuModule?: number;
  fanCleaning?: number;
  thermalPaste?: number;
  diagnostic?: number;
};

// One turnaround per repair type, set per model in the JSON (t20). Every timeline this page
// states for a repair - service table, FAQ, parts paragraph, hero/QuickAnswer summary - reads
// from here, so the page cannot quote two different times for the same job.
type Turnaround = {
  screen?: string;
  logicBoard?: string;
  psu?: string;
  ram?: string;
  ssd?: string;
  gpu?: string;
  cpu?: string;
  ssdRecovery?: string;
  fanCleaning?: string;
};

type IMacModel = {
  slug: string;
  name: string;
  shortName: string;
  releaseYear: number;
  family: "imac-as" | "imac-intel" | "imac-pro";
  size: number;
  era: "intel" | "apple-silicon";
  chip: string;
  display: string;
  maxRAM: string;
  maxStorage: string;
  baseStorage: string;
  ports: string;
  wirelessChip: string;
  currentInLineup: boolean;
  discontinued?: string;
  lastMacOS?: string;
  colours?: string;
  commonIssues: string[];
  pricing: Pricing;
  timelineNotes: string;
  turnaround?: Turnaround;
  honestyNote: string;
  heroTagline: string;
};

const ALL_MODELS: IMacModel[] = imacModels as IMacModel[];

// Fallbacks are the per-row values this template hard-coded before t20. Every model in the
// JSON sets its own; these only cover a new entry added without a turnaround object.
function turnaroundFor(m: IMacModel): Required<Turnaround> {
  return {
    screen: "2-3 days",
    logicBoard: "3-5 days",
    psu: "1-2 days",
    ram: "Same-day",
    ssd: "1-2 days",
    gpu: "3-7 days (parts sourcing)",
    cpu: "3-7 days (parts sourcing)",
    ssdRecovery: "Quoted after assessment",
    fanCleaning: "Same-day",
    ...m.turnaround,
  };
}

const TURNAROUND_LABEL: Record<keyof Turnaround, string> = {
  screen: "screen",
  logicBoard: "logic board",
  psu: "PSU",
  ram: "RAM upgrade",
  ssd: "SSD upgrade",
  gpu: "GPU module",
  cpu: "Xeon CPU",
  ssdRecovery: "data recovery",
  fanCleaning: "fan cleaning",
};

// "Same-day to 2 days" -> "same-day to 2 days" for use mid-sentence.
const lc = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);
// "3-7 days (parts sourcing)" -> "3-7 days" for short summaries.
const bare = (s: string) => s.replace(/\s*\([^)]*\)\s*$/, "");

const FAMILY_LABEL: Record<IMacModel["family"], string> = {
  "imac-as":    "iMac (Apple Silicon)",
  "imac-intel": "iMac (Intel)",
  "imac-pro":   "iMac Pro",
};

const IMAC_REVIEWERS = [
  "David Boulos",
  "Linda Banannou",
  "June Arevalo",
  "Phill Balcon",
  "Janna Nurahmetova",
  "Mariia Chymyrysova",
  "Daniel Layzell",
  "Polycarp",
];

function pickIMacReviewers(slug: string): string[] {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  const a = IMAC_REVIEWERS[Math.abs(h) % IMAC_REVIEWERS.length];
  const b = IMAC_REVIEWERS[Math.abs(h >> 3) % IMAC_REVIEWERS.length];
  return a === b ? [a] : [a, b];
}

function worthRepairingVerdict(m: IMacModel): { headline: string; body: string } {
  const age = 2026 - m.releaseYear;
  if (m.currentInLineup) {
    return {
      headline: "Yes - and check Apple's warranty first",
      body: `The ${m.shortName} is in Apple's current lineup. Most units are still under the standard 1-year warranty or AppleCare+. Start there. We handle accidental damage Apple won't cover (cracked panel, liquid spill, dropped power brick) and out-of-warranty work.`,
    };
  }
  if (m.family === "imac-intel" && (m.pricing.ramUpgrade || m.pricing.fusionToSsd)) {
    return {
      headline: "Yes - and upgrade it while we're in there",
      body: `The Intel 27" iMac is one of the best upgrade targets in the Apple lineup. RAM goes to ${m.maxRAM.split(" ")[0]} (user-upgradeable), and a Fusion → SSD swap (where applicable) is the single biggest speed boost we can give you. Customers tell us their iMac feels brand new after these upgrades.`,
    };
  }
  if (m.family === "imac-pro") {
    return {
      headline: "Case-by-case - parts scarcity matters now",
      body: `The iMac Pro is ${age} years old in 2026 and parts (Xeon CPUs, Vega Pro GPU modules) are getting rare. PSU, thermal paste, RAM and screen jobs are still very worthwhile. GPU module failure is where we're honest with you - sometimes the parts exceed the resale value. We'll quote both sides at intake.`,
    };
  }
  if (m.era === "apple-silicon" && age <= 4) {
    return {
      headline: "Absolutely - easy decision",
      body: `Released ${age} year${age === 1 ? "" : "s"} ago. Apple Silicon performance is still elite, the 4.5K Retina is gorgeous, and parts are widely available. Repairs pay for themselves quickly.`,
    };
  }
  return {
    headline: "Usually yes - depends on what's broken",
    body: `${age} years old. Most repairs are worthwhile. Logic-board jobs we'll weigh against current value at intake - no pressure either way.`,
  };
}

function pickRelatedModels(slug: string): IMacModel[] {
  return relatedModels(slug, ALL_MODELS, (m) => m.family);
}

type ServiceRow = { service: string; price: number | string; href: string; timeline: string; key?: keyof Turnaround };

function buildServiceRows(m: IMacModel, t: Required<Turnaround>): ServiceRow[] {
  const rows: ServiceRow[] = [
    {
      service: `${m.size}" Retina display / glass replacement`,
      price: "Price on request",
      href: "/imac-screen-repair-dubai",
      timeline: t.screen,
      key: "screen",
    },
    {
      service: "Logic board repair (component-level)",
      price: "Price on request",
      href: "/imac-logic-board-repair-dubai",
      timeline: t.logicBoard,
      key: "logicBoard",
    },
  ];
  if (m.pricing.powerSupply) {
    rows.push({
      service: "Power supply replacement",
      price: "Price on request",
      href: "/imac-power-supply-repair-dubai",
      timeline: t.psu,
      key: "psu",
    });
  }
  if (m.pricing.ramUpgrade) {
    rows.push({
      service: `RAM upgrade (up to ${m.maxRAM.split(" ")[0]})`,
      price: "Price on request",
      href: "/imac-ram-upgrade-dubai",
      timeline: t.ram,
      key: "ram",
    });
  }
  if (m.pricing.fusionToSsd) {
    rows.push({
      service: "Fusion Drive → SSD upgrade (huge speed boost)",
      price: "Price on request",
      href: "/imac-ssd-upgrade-dubai",
      timeline: t.ssd,
      key: "ssd",
    });
  } else if (m.pricing.ssdUpgrade) {
    rows.push({
      service: "SSD upgrade",
      price: "Price on request",
      href: "/imac-ssd-upgrade-dubai",
      timeline: t.ssd,
      key: "ssd",
    });
  }
  if (m.pricing.gpuModule) {
    rows.push({
      service: "GPU module replacement (Radeon Pro Vega)",
      price: "Price on request",
      href: "/imac-gpu-repair-dubai",
      timeline: t.gpu,
      key: "gpu",
    });
  }
  if (m.pricing.ssdRecovery) {
    rows.push({
      service: "Data recovery (failed drive or dead board)",
      price: "Price on request",
      href: "/imac-data-recovery-dubai",
      timeline: t.ssdRecovery,
      key: "ssdRecovery",
    });
  }
  if (m.pricing.fanCleaning) {
    rows.push({
      service: "Fan cleaning + thermal paste",
      price: "Price on request",
      href: "/imac-fan-cleaning-dubai",
      timeline: t.fanCleaning,
      key: "fanCleaning",
    });
  }
  rows.push({
    service: "Free diagnostic",
    price: "Free",
    href: "/imac-full-diagnostic-dubai",
    timeline: "30 minutes",
  });
  return rows;
}

// Hero / QuickAnswer / price-card summary: the 2-3 most common jobs for the family, read off
// the rows the table actually shows, so the summary cannot contradict the table.
function headerTimeline(m: IMacModel, rows: ServiceRow[]): string {
  const prefer: (keyof Turnaround)[] =
    m.family === "imac-intel" ? ["psu", "screen", "logicBoard"]
    : m.family === "imac-pro" ? ["screen", "psu", "gpu"]
    : ["screen", "psu", "logicBoard"];
  const s = prefer
    .map((k) => rows.find((r) => r.key === k))
    .filter((r): r is ServiceRow & { key: keyof Turnaround } => !!r?.key)
    .slice(0, 3)
    .map((r) => `${TURNAROUND_LABEL[r.key]} ${lc(bare(r.timeline))}`)
    .join(" · ");
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// iMac Pro rare parts: one sourcing figure when CPU and GPU match, both when they differ.
function rarePartsSourcing(t: Required<Turnaround>): string {
  const cpu = bare(t.cpu);
  const gpu = bare(t.gpu);
  return cpu === gpu ? cpu : `${cpu} for a CPU, ${gpu} for a GPU module`;
}

export default function IMacModelPage({ slug }: { slug: string }) {
  const model = ALL_MODELS.find((m) => m.slug === slug);
  if (!model) {
    return (
      <div className="mx-auto max-w-content px-5 md:px-6 py-3xl">
        <h1 className="text-[28px]">iMac model not found</h1>
        <p className="mt-md">
          We don&apos;t have a page for <code>{slug}</code> yet.{" "}
          <Link to="/imac-screen-repair-dubai" className="text-primary font-semibold hover:underline">
            Browse all iMac services →
          </Link>
        </p>
      </div>
    );
  }

  const verdict = worthRepairingVerdict(model);
  const turnaround = turnaroundFor(model);
  const serviceRows = buildServiceRows(model, turnaround);
  const related = pickRelatedModels(slug);

  const isAppleSilicon = model.era === "apple-silicon";
  const isIntel27 = model.family === "imac-intel";
  const isPro = model.family === "imac-pro";

  const faqs = [
    {
      q: `How much does an ${model.name} screen replacement cost in Dubai?`,
      a: `${model.size}" Retina display / glass replacement on the ${model.name} has a typical turnaround of ${lc(turnaround.screen)} and includes a 3-month written warranty on the panel and the labour, plus proper adhesive strips on reseal (not glue). WhatsApp us your model for today's exact price.`,
    },
    {
      q: isAppleSilicon
        ? `Can I upgrade the RAM or SSD on the ${model.shortName}?`
        : `Can I upgrade the RAM and SSD on my ${model.shortName}?`,
      a: isAppleSilicon
        ? `No. Apple Silicon iMacs (M1, M3, M4) have RAM unified into the SoC and the SSD soldered to the logic board. The chip, RAM, and storage are one package. Buy enough at order time - upgrading later is impossible. The storage is encrypted and tied to the chip, so chip-off recovery is not possible: getting data back from a failed iMac means getting the original logic board running again - message us for a quote.`
        : model.family === "imac-intel" && model.releaseYear >= 2020
          ? `RAM yes - up to ${model.maxRAM.split(" ")[0]} (DDR4, user-upgradeable). SSD no - the T2 chip on the 2020 iMac soldered the SSD to the board, so SSD upgrades are impossible. Because the T2 also encrypts it, data recovery after a failure means getting the original logic board running again (chip-off does not work) - message us for a quote.`
          : `Yes - both. RAM is socketed and goes to ${model.maxRAM.split(" ")[0]} (DDR4). SSD upgrade or Fusion Drive → SSD swap is one of our most-requested jobs and the single biggest speed boost we can give an Intel iMac.`,
    },
    {
      q: isPro
        ? `Are parts still available for the iMac Pro in 2026?`
        : isIntel27
          ? `What's the most common ${model.shortName} repair you see?`
          : `Where is the power supply located on the ${model.shortName}?`,
      a: isPro
        ? `Standard parts (PSU, RAM, screens, SSDs) are fine. Xeon CPUs and Vega Pro GPU modules are getting rare - sourcing can take ${rarePartsSourcing(turnaround)} and prices fluctuate. We're honest at intake: if it's a GPU module failure, sometimes the part exceeds the iMac Pro's current resale value. Other repairs (PSU, thermal paste, RAM, screen) are still very worthwhile.`
        : isIntel27
          ? `Power supply failure. The 2017-2020 27" iMac PSU is a known weak point. Typical PSU turnaround is ${lc(turnaround.psu)}, with a warranty of 15 days to 2 years - WhatsApp us for the exact price. After PSU, the next most common are Fusion Drive → SSD upgrades and thermal paste refreshes.`
          : `Outside the iMac. Every 24-inch Apple silicon iMac (M1, M3 and M4, two-port or four-port) ships with an external 143W power adapter that plugs into the power connector on the back. On four-port models that adapter also carries the Gigabit Ethernet port; two-port models were ordered with or without it. So a no-power fault starts with testing the adapter and its cable before anyone opens the case. Typical power supply turnaround on the ${model.shortName} is ${lc(turnaround.psu)}.`,
    },
    {
      q: `Is the ${model.shortName} still worth repairing in 2026?`,
      a: `${verdict.headline}. ${verdict.body}`,
    },
    {
      q: `My ${model.shortName} won't turn on - what should I check first?`,
      a: isAppleSilicon
        ? `Check that the external power adapter is firmly plugged into the back of the iMac and into a working wall socket. If there is still no chime or picture, the adapter, the power connector or the logic board is the likely cause, and we diagnose it free.`
        : `Check the power cable at both ends and try another wall socket. The ${model.shortName} has its power supply built in, so if there is still no chime or fan noise, the power supply or the logic board is the likely cause - we diagnose it free.`,
    },
    {
      q: `Can you recover the data from an ${model.shortName} that won't start?`,
      a: isAppleSilicon
        ? `Yes in most cases, by repairing the board. The SSD is soldered to the logic board and encrypted by the chip, so the files come back by getting that board running again - which is why we repair at component level instead of swapping the board.`
        : isPro || model.releaseYear >= 2020
          ? `Usually, but only by repairing it. The storage is encrypted by the T2 security chip, so the files come back by getting the original logic board running again, not by moving the drive to another Mac.`
          : `Often, yes. The drive in the ${model.shortName} can be removed and read on the bench; if FileVault was turned on, we will need your password to open it.`,
    },
    {
      q: `What warranty do I get on an ${model.shortName} repair?`,
      a: `Each repair type has its own period: ${isAppleSilicon ? "ports and other hardware" : "the power supply, ports, fan replacement and other hardware"} 15 days to 2 years, and logic-board, liquid-damage and data work 15 days. The screen warranty is confirmed on your written quote, and the exact period is printed on your invoice.`,
    },
    {
      q: `Where can I get my ${model.name} repaired in Dubai?`,
      a: `Walk in to our workshop in Concord Tower, Dubai Media City, a 3-minute walk from the Palm Jumeirah tram stop, with parking on site. If you send it by a courier you book, pack the iMac in its original box or a padded case; a paid onsite visit is also possible, subject to technician availability. WhatsApp us a photo and we'll quote within 4 minutes. Written warranty of 15 days to 2 years, depending on the repair.`,
    },
  ];

  return (
    <SubServicePageTemplate
      seoTitle={`${model.name} Repair Dubai - Free Diagnosis`}
      seoDescription={`${model.name} repair Dubai - screen, logic board${model.pricing.powerSupply ? ", PSU" : ""} and upgrades. Free diagnosis, warranty of 15 days to 2 years. WhatsApp us for a quote.`}
      path={`/${model.slug}`}
      eyebrow={`${FAMILY_LABEL[model.family]} ${model.size}" · ${model.releaseYear}${model.currentInLineup ? " · current Apple lineup" : model.discontinued ? ` · discontinued ${model.discontinued}` : ""}`}
      h1={`${model.name} Repair Dubai - Screen, Logic Board, Power Supply & Upgrades`}
      subtitle={`${model.heroTagline} Message us on WhatsApp for today's exact price. Written warranty of 15 days to 2 years. Walk in at Media City, parking on site.`}
      startingPrice={0}
      timeline={headerTimeline(model, serviceRows)}
      whatsappPrefill={`Hi, I have an ${model.name} and I need help with:`}
      breadcrumb={[
        { name: "Home",        path: "/" },
        { name: "iMac Repair", path: "/imac-repair-dubai" },
        { name: model.name,    path: `/${model.slug}` },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "iMac board-level repair, Retina display & PSU replacement" }}
      serviceName={`${model.name} Repair`}
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>{model.name} owner - let&apos;s sort it.</strong> The {model.name} runs the {model.chip} with a {model.display}.{" "}
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
            <li>• <strong>Display:</strong> {model.display}</li>
            <li>• <strong>Max RAM:</strong> {model.maxRAM}</li>
            <li>• <strong>Storage:</strong> {model.baseStorage} base · up to {model.maxStorage}</li>
            <li>• <strong>Ports:</strong> {model.ports}</li>
            <li>• <strong>Wireless:</strong> {model.wirelessChip}</li>
            {model.colours && <li>• <strong>Colours:</strong> {model.colours}</li>}
            {model.lastMacOS && <li>• <strong>Latest macOS supported:</strong> {model.lastMacOS}</li>}
          </ul>

          <h2 className="text-[28px] md:text-[32px] mb-md">What are the most common {model.shortName} problems?</h2>
          <ul className="space-y-2 text-[15px] mb-lg">
            {model.commonIssues.map((issue, i) => (
              <li key={i}>• {issue}</li>
            ))}
          </ul>

          <h2 className="text-[28px] md:text-[32px] mb-md">What {model.shortName} repair services are available in Dubai?</h2>
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

          {isAppleSilicon && (
            <div className="bg-bg-alt border-l-4 border-accent rounded-md p-lg mb-lg">
              <h3 className="text-[18px] font-bold mb-sm">Can we upgrade RAM or SSD on the {model.shortName}?</h3>
              <p className="text-[15px] mb-sm">
                <strong>No.</strong> Apple Silicon iMacs (M1, M3, M4) have soldered memory and SoC-integrated SSD. What you buy is what you have for the life of the device.
              </p>
              <p className="text-[15px]">
                Buy at least <strong>16GB RAM</strong> (not 8GB base) and <strong>512GB SSD</strong> (not 256GB) when ordering. This is the #1 advice we give iMac buyers in Dubai. The storage is encrypted and tied to the chip, so data recovery from a failed iMac means repairing the original logic board until it runs (chip-off does not work) - message us for a quote.
              </p>
            </div>
          )}

          {isIntel27 && (
            <div className="bg-bg-alt border-l-4 border-primary rounded-md p-lg mb-lg">
              <h3 className="text-[18px] font-bold mb-sm">Is upgrading this iMac worth it in 2026?</h3>
              <p className="text-[15px] mb-sm">
                The iMac 27" Intel 2017-2020 is one of the best upgrade targets in the Apple lineup:
              </p>
              <ul className="text-[15px] space-y-1 mb-sm pl-md">
                <li>• RAM goes to <strong>{model.maxRAM.split(" ")[0]}</strong> (user-upgradeable, DDR4)</li>
                {model.pricing.fusionToSsd ? <li>• <strong>Fusion Drive → SSD</strong> = the single biggest speed boost possible</li> : null}
                <li>• Supported up to {model.lastMacOS} - check your apps run on it before you spend</li>
                <li>• 5K Retina display still looks gorgeous</li>
              </ul>
              <p className="text-[15px]">
                A fully upgraded {model.releaseYear} iMac (max RAM + 2TB SSD where possible) beats a base M4 Mac mini for display and total RAM - message us for the exact upgrade price. <strong>If you already own one, upgrade it before buying new.</strong>
              </p>
            </div>
          )}

          {isPro && (
            <div className="bg-bg-alt border-l-4 border-accent rounded-md p-lg mb-lg">
              <h3 className="text-[18px] font-bold mb-sm">iMac Pro parts scarcity - our honest position</h3>
              <p className="text-[15px] mb-sm">
                Discontinued in March 2021. Standard parts (PSU, screens, RAM) are still routine. Xeon CPUs and Vega Pro GPU modules are getting rare - sourcing can take {rarePartsSourcing(turnaround)} and prices fluctuate week to week.
              </p>
              <p className="text-[15px]">
                We&apos;re honest at intake: if it&apos;s a GPU module failure, sometimes the part exceeds the iMac Pro&apos;s current resale value. Other repairs are still very worthwhile.
              </p>
            </div>
          )}

          <h2 className="text-[28px] md:text-[32px] mb-md">Are parts available for the {model.shortName} in 2026?</h2>
          <p className="text-[15px] mb-lg">
            {model.currentInLineup
              ? model.timelineNotes
              : isPro
                ? `${model.timelineNotes}`
                : isIntel27
                  ? `Intel-era 27" parts are well-stocked in Dubai. RAM, SSDs, PSUs are routine. ${model.timelineNotes}`
                  : `Parts for the ${model.shortName} are widely available. ${model.timelineNotes}`}
          </p>

          <h2 className="text-[28px] md:text-[32px] mb-md">Is the {model.shortName} still worth repairing in 2026?</h2>
          <div className="bg-bg-alt border-l-4 border-primary rounded-md p-lg mb-lg">
            <p className="text-[16px] font-semibold mb-sm">{verdict.headline}</p>
            <p className="text-[15px]">{verdict.body}</p>
          </div>

          <h2 className="text-[28px] md:text-[32px] mb-md">Our honest take on the {model.shortName}</h2>
          <p className="text-[15px] mb-lg">{model.honestyNote}</p>

          <h2 className="text-[28px] md:text-[32px] mb-md">Other iMac models we repair</h2>
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
        `Cracked or unresponsive ${model.size}" ${model.shortName} display`,
        `Power supply failure - fans spin but no boot`,
        `Logic board faults - component-level repair where economical`,
        isAppleSilicon ? "Data recovery from a dead board - board-level repair so the original chip runs again (no chip-off on Apple silicon)" : "RAM upgrade and SSD / Fusion → SSD swaps",
        isPro ? "Vega Pro GPU module replacement (parts permitting)" : "Thermal paste refresh, fan cleaning, overheating fixes",
        "Liquid damage - ultrasonic clean, board-level recovery",
        "macOS reinstall, slow performance, boot loops",
        "T2 chip activation lock issues (2020 27\" + iMac Pro)",
      ]}
      steps={[
        { title: "WhatsApp the model and issue", body: `Send "${model.name}" plus a photo of the problem. Quote in 4 minutes.` },
        { title: "Walk in to our Media City workshop", body: "Open Mon-Sat 9am-7pm, Friday break 12-2pm, parking on site. Paid onsite visits subject to technician availability." },
        { title: "Free diagnostic, fixed price",  body: "We diagnose for free and confirm the price before any work starts." },
        { title: "Repair + written warranty",      body: `${model.timelineNotes} You walk out (or we deliver back) with a written warranty of 15 days to 2 years, depending on the repair.` },
      ]}
      warrantyDays={730}
      warrantyHeadline
      warrantyBullets={[
        "Screens 90 days; logic board, liquid and thermal work 15 days; power supply, SSD and other parts 15 days to 2 years",
        "Covers the replaced part and the labour",
        "Same fault returns inside the period? We re-repair free",
        "Issued in writing on your invoice",
      ]}
      faqs={faqs}
      reviewNames={pickIMacReviewers(slug)}
      related={[
        { label: "iMac repair Dubai (all models)",   href: "/imac-repair-dubai",               description: "Every iMac we service - 24\" M-series and 27\" 5K. Free diagnosis, warranty of 15 days to 2 years." },
        { label: "iMac screen repair Dubai",         href: "/imac-screen-repair-dubai",        description: "Cracked Retina, dead pixels, backlight issues - proper adhesive reseal." },
        { label: "iMac power supply repair",         href: "/imac-power-supply-repair-dubai",  description: "Most common 27\" Intel issue. WhatsApp us for a quote." },
        { label: "iMac full diagnostic",             href: "/imac-full-diagnostic-dubai",      description: "Free 30-minute diagnostic - we tell you what's wrong and what it costs." },
      ]}
    />
  );
}
