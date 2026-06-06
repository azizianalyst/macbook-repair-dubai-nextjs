"use client";
// Data-driven iMac device-model page.
// Reads from src/content/imac-models.json.
// Single component renders SubServicePageTemplate-based page for any iMac model.
//
// Usage: <IMacModelPage slug="imac-24-m1-2021-repair-dubai" />
import { Link } from "@/lib/router-compat";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
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
  honestyNote: string;
  heroTagline: string;
};

const ALL_MODELS: IMacModel[] = imacModels as IMacModel[];

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
  const me = ALL_MODELS.find((m) => m.slug === slug);
  if (!me) return [];
  // Circular window over the same family so inbound links distribute evenly and
  // no model (incl. the newest at the tail) is orphaned.
  const fam = ALL_MODELS.filter((m) => m.family === me.family);
  const idx = fam.findIndex((m) => m.slug === slug);
  const picks: IMacModel[] = [];
  for (let k = 1; k <= 4 && k < fam.length; k++) picks.push(fam[(idx + k) % fam.length]);
  if (picks.length < 4) {
    const others = ALL_MODELS.filter((m) => m.family !== me.family && m.slug !== slug);
    picks.push(...others.slice(0, 4 - picks.length));
  }
  return picks;
}

type ServiceRow = { service: string; price: number | string; href: string; timeline: string };

function buildServiceRows(m: IMacModel): ServiceRow[] {
  const rows: ServiceRow[] = [
    {
      service: `${m.size}" Retina display / glass replacement`,
      price: m.pricing.screen,
      href: "/imac-screen-repair-dubai",
      timeline: "2-3 days",
    },
    {
      service: "Logic board repair (component-level)",
      price: m.pricing.logicBoard,
      href: "/imac-logic-board-repair-dubai",
      timeline: "3-5 days",
    },
  ];
  if (m.pricing.powerSupply) {
    rows.push({
      service: "Power supply replacement",
      price: m.pricing.powerSupply,
      href: "/imac-power-supply-repair-dubai",
      timeline: "1-2 days",
    });
  }
  if (m.pricing.ramUpgrade) {
    rows.push({
      service: `RAM upgrade (up to ${m.maxRAM.split(" ")[0]})`,
      price: m.pricing.ramUpgrade,
      href: "/imac-ram-upgrade-dubai",
      timeline: "Same-day",
    });
  }
  if (m.pricing.fusionToSsd) {
    rows.push({
      service: "Fusion Drive → SSD upgrade (huge speed boost)",
      price: m.pricing.fusionToSsd,
      href: "/imac-ssd-upgrade-dubai",
      timeline: "1-2 days",
    });
  } else if (m.pricing.ssdUpgrade) {
    rows.push({
      service: "SSD upgrade",
      price: m.pricing.ssdUpgrade,
      href: "/imac-ssd-upgrade-dubai",
      timeline: "1-2 days",
    });
  }
  if (m.pricing.gpuModule) {
    rows.push({
      service: "GPU module replacement (Radeon Pro Vega)",
      price: m.pricing.gpuModule,
      href: "/imac-gpu-repair-dubai",
      timeline: "3-7 days (parts sourcing)",
    });
  }
  if (m.pricing.ssdRecovery) {
    rows.push({
      service: "Soldered SSD chip-off data recovery",
      price: `${m.pricing.ssdRecovery}+`,
      href: "/imac-data-recovery-dubai",
      timeline: "5-10 days",
    });
  }
  if (m.pricing.fanCleaning) {
    rows.push({
      service: "Fan cleaning + thermal paste",
      price: m.pricing.fanCleaning,
      href: "/imac-fan-cleaning-dubai",
      timeline: "Same-day",
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
  const serviceRows = buildServiceRows(model);
  const related = pickRelatedModels(slug);

  const candidates = [
    model.pricing.powerSupply,
    model.pricing.ramUpgrade,
    model.pricing.fanCleaning,
    model.pricing.thermalPaste,
  ].filter((v): v is number => typeof v === "number" && v > 0);
  const startingPrice = candidates.length ? Math.min(...candidates) : model.pricing.screen;

  const isAppleSilicon = model.era === "apple-silicon";
  const isIntel27 = model.family === "imac-intel";
  const isPro = model.family === "imac-pro";

  const faqs = [
    {
      q: `How much does an ${model.name} screen replacement cost in Dubai?`,
      a: `${model.size}" Retina display / glass replacement on the ${model.name} is AED ${model.pricing.screen}. Typical timeline 2-3 days. Includes a 90-day written warranty on the panel and the labour, plus proper adhesive strips on reseal (not glue).`,
    },
    {
      q: isAppleSilicon
        ? `Can I upgrade the RAM or SSD on the ${model.shortName}?`
        : `Can I upgrade the RAM and SSD on my ${model.shortName}?`,
      a: isAppleSilicon
        ? `No. Apple Silicon iMacs (M1, M3, M4) have RAM unified into the SoC and the SSD soldered to the logic board. The chip, RAM, and storage are one package. Buy enough at order time - upgrading later is impossible. For data on a failed SSD, we offer chip-off recovery (AED ${model.pricing.ssdRecovery ?? 2000}+).`
        : model.family === "imac-intel" && model.releaseYear >= 2020
          ? `RAM yes - up to ${model.maxRAM.split(" ")[0]} (DDR4, user-upgradeable). SSD no - the T2 chip on the 2020 iMac soldered the SSD to the board, so SSD upgrades are impossible. For SSD failure we offer chip-off recovery (AED ${model.pricing.ssdRecovery ?? 2000}+).`
          : `Yes - both. RAM is socketed and goes to ${model.maxRAM.split(" ")[0]} (DDR4). SSD upgrade or Fusion Drive → SSD swap is one of our most-requested jobs and the single biggest speed boost we can give an Intel iMac.`,
    },
    {
      q: isPro
        ? `Are parts still available for the iMac Pro in 2026?`
        : isIntel27
          ? `What's the most common ${model.shortName} repair you see?`
          : `Where is the power supply located on the ${model.shortName}?`,
      a: isPro
        ? `Standard parts (PSU, RAM, screens, SSDs) are fine. Xeon CPUs and Vega Pro GPU modules are getting rare - sourcing can take 5-7 days and prices fluctuate. We're honest at intake: if it's a GPU module failure, sometimes the part exceeds the iMac Pro's current resale value. Other repairs (PSU, thermal paste, RAM, screen) are still very worthwhile.`
        : isIntel27
          ? `Power supply failure. The 2017-2020 27" iMac PSU is a known weak point. We replace it for AED ${model.pricing.powerSupply ?? 500}, typically same-day to 2 days, with a 90-day warranty. After PSU, the next most common are Fusion Drive → SSD upgrades and thermal paste refreshes.`
          : `It's in the external power brick (4-port models) or in the chassis (2-port M1). Brick replacement same-day; in-chassis PSU is a 1-2 day job.`,
    },
    {
      q: `Is the ${model.shortName} still worth repairing in 2026?`,
      a: `${verdict.headline}. ${verdict.body}`,
    },
    {
      q: `Where can I get my ${model.name} repaired in Dubai?`,
      a: `Bring it to our workshop in Dubai Media City, or use our free pickup service across Dubai mainland (we have proper iMac transport cases - never bring a bare iMac to a courier). WhatsApp us a photo and we'll quote within 4 minutes. 90-day written warranty on every job.`,
    },
  ];

  return (
    <SubServicePageTemplate
      seoTitle={`${model.name} Repair Dubai - From AED ${startingPrice}`}
      seoDescription={`${model.name} repair Dubai. Screen AED ${model.pricing.screen}, logic board AED ${model.pricing.logicBoard}${model.pricing.powerSupply ? `, PSU AED ${model.pricing.powerSupply}` : ""}. 90-day warranty.`}
      path={`/${model.slug}`}
      eyebrow={`${FAMILY_LABEL[model.family]} ${model.size}" · ${model.releaseYear}${model.currentInLineup ? " · current Apple lineup" : model.discontinued ? ` · discontinued ${model.discontinued}` : ""}`}
      h1={`${model.name} Repair Dubai - Screen, Logic Board, Power Supply & Upgrades`}
      subtitle={`${model.heroTagline} From AED ${startingPrice}. 90-day written warranty. Free pickup with proper iMac transport across Dubai.`}
      startingPrice={startingPrice}
      timeline={isPro ? "Standard repairs 2-3 days · GPU/CPU 5-7 days (parts)" : "Same-day to 5 days depending on the job"}
      whatsappPrefill={`Hi, I have an ${model.name} and I need help with:`}
      breadcrumb={[
        { name: "Home",        path: "/" },
        { name: "iMac Repair", path: "/imac-screen-repair-dubai" },
        { name: model.name,    path: `/${model.slug}` },
      ]}
      technician={{ name: "Shafeez", years: 12, specialisation: "iMac board-level repair, Retina display & PSU replacement" }}
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
            {" "}From AED {startingPrice} for the most common service. Free pickup with proper transport, 90-day written warranty.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">About the {model.name}</h2>
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

          {isAppleSilicon && (
            <div className="bg-bg-alt border-l-4 border-accent rounded-md p-lg mb-lg">
              <h3 className="text-[18px] font-bold mb-sm">Can we upgrade RAM or SSD on the {model.shortName}?</h3>
              <p className="text-[15px] mb-sm">
                <strong>No.</strong> Apple Silicon iMacs (M1, M3, M4) have soldered memory and SoC-integrated SSD. What you buy is what you have for the life of the device.
              </p>
              <p className="text-[15px]">
                Buy at least <strong>16GB RAM</strong> (not 8GB base) and <strong>512GB SSD</strong> (not 256GB) when ordering. This is the #1 advice we give iMac buyers in Dubai. For data on a failed SSD, we offer chip-off recovery (AED {model.pricing.ssdRecovery ?? 2000}+).
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
                <li>• Still runs current macOS ({model.lastMacOS})</li>
                <li>• 5K Retina display still looks gorgeous</li>
              </ul>
              <p className="text-[15px]">
                A fully upgraded {model.releaseYear} iMac (max RAM + 2TB SSD where possible) costs roughly AED 2,000-2,500 in upgrades and beats a base M4 Mac mini for display and total RAM. <strong>If you already own one, upgrade it before buying new.</strong>
              </p>
            </div>
          )}

          {isPro && (
            <div className="bg-bg-alt border-l-4 border-accent rounded-md p-lg mb-lg">
              <h3 className="text-[18px] font-bold mb-sm">iMac Pro parts scarcity - our honest position</h3>
              <p className="text-[15px] mb-sm">
                Discontinued in March 2021. Standard parts (PSU, screens, RAM) are still routine. Xeon CPUs and Vega Pro GPU modules are getting rare - sourcing can take 5-7 days and prices fluctuate week to week.
              </p>
              <p className="text-[15px]">
                We&apos;re honest at intake: if it&apos;s a GPU module failure, sometimes the part exceeds the iMac Pro&apos;s current resale value. Other repairs are still very worthwhile.
              </p>
            </div>
          )}

          <h2 className="text-[24px] md:text-[28px] mb-md">Parts availability for the {model.shortName}</h2>
          <p className="text-[15px] mb-lg">
            {model.currentInLineup
              ? `As Apple's current iMac, parts come through authorised channels. Power brick is same-day; logic board takes 3-5 days. ${model.timelineNotes}`
              : isPro
                ? `${model.timelineNotes}`
                : isIntel27
                  ? `Intel-era 27" parts are well-stocked in Dubai. RAM, SSDs, PSUs are routine. ${model.timelineNotes}`
                  : `Parts for the ${model.shortName} are widely available. ${model.timelineNotes}`}
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Is the {model.shortName} still worth repairing in 2026?</h2>
          <div className="bg-bg-alt border-l-4 border-primary rounded-md p-lg mb-lg">
            <p className="text-[16px] font-semibold mb-sm">{verdict.headline}</p>
            <p className="text-[15px]">{verdict.body}</p>
          </div>

          <h2 className="text-[24px] md:text-[28px] mb-md">Our honest take on the {model.shortName}</h2>
          <p className="text-[15px] mb-lg">{model.honestyNote}</p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Other iMac models we repair</h2>
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
        isAppleSilicon ? "Soldered SSD failure - chip-off data recovery" : "RAM upgrade and SSD / Fusion → SSD swaps",
        isPro ? "Vega Pro GPU module replacement (parts permitting)" : "Thermal paste refresh, fan cleaning, overheating fixes",
        "Liquid damage - ultrasonic clean, board-level recovery",
        "macOS reinstall, slow performance, boot loops",
        "T2 chip activation lock issues (2020 27\" + iMac Pro)",
      ]}
      steps={[
        { title: "WhatsApp the model and issue", body: `Send "${model.name}" plus a photo of the problem. Quote in 4 minutes.` },
        { title: "Free pickup or visit our Media City workshop", body: "Free pickup across Dubai mainland with a proper iMac transport case. Or drop in 9am-10pm." },
        { title: "Free diagnostic, fixed price",  body: "We diagnose for free and confirm the price before any work starts." },
        { title: "Repair + 90-day warranty",      body: `${model.timelineNotes} You walk out (or we deliver back) with a written 90-day warranty.` },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers the replaced part and the labour",
        "Same fault returns? We re-repair free",
        "Issued in writing on your invoice",
        "No quibbling, no fine print",
      ]}
      faqs={faqs}
      reviewNames={pickIMacReviewers(slug)}
      related={[
        { label: "iMac screen repair Dubai",         href: "/imac-screen-repair-dubai",        description: "Cracked Retina, dead pixels, backlight issues - proper adhesive reseal." },
        { label: "iMac power supply repair",         href: "/imac-power-supply-repair-dubai",  description: "Most common 27\" Intel issue. Same-day to 2 days. AED 500." },
        { label: "iMac full diagnostic",             href: "/imac-full-diagnostic-dubai",      description: "Free 30-minute diagnostic - we tell you what's wrong and what it costs." },
      ]}
    />
  );
}
