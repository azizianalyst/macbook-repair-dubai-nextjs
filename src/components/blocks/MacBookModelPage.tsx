"use client";
// Data-driven MacBook device-model page (Air + Pro).
// Reads from src/content/macbook-air-models.json and (later) macbook-pro-models.json.
// Single component renders SubServicePageTemplate-based page for any MacBook model.
//
// Usage: <MacBookModelPage slug="macbook-air-13-m1-2020-repair-dubai" />
import { Link } from "@/lib/router-compat";
import { ScrollHintTable } from "@/components/blocks/ScrollHintTable";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { relatedModels } from "@/lib/model-siblings";
import airModels from "@/content/macbook-air-models.json";
import proModels from "@/content/macbook-pro-models.json";

type Pricing = {
  screen: number;
  battery: number;
  keyboard: number;
  topCase: number;
  trackpad: number;
  logicBoard: number;
  port: number;
  speaker: number;
  fanCleaning: number;
  diagnostic: number;
};

type MacBookModel = {
  slug: string;
  name: string;
  shortName: string;
  releaseYear: number;
  family: "air" | "pro";
  size: number;             // 13, 14, 15, 16
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
  commonIssues: string[];
  pricing: Pricing;
  timelineNotes: string;
  honestyNote: string;
  heroTagline: string;
};

// Combine all MacBook model sources (Air + Pro)
const ALL_MODELS: MacBookModel[] = [
  ...(airModels as MacBookModel[]),
  ...(proModels as MacBookModel[]),
];

const FAMILY_LABEL: Record<MacBookModel["family"], string> = {
  air: "MacBook Air",
  pro: "MacBook Pro",
};

const MACBOOK_REVIEWERS = [
  "Polycarp",
  "Mariia Chymyrysova",
  "Daniel Layzell",
  "Linda Banannou",
  "David Boulos",
  "June Arevalo",
  "Saeed Alam",
  "Janna Nurahmetova",
  "Yuki Koga",
  "Phill Balcon",
];

function pickMacBookReviewers(slug: string): string[] {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  const a = MACBOOK_REVIEWERS[Math.abs(h) % MACBOOK_REVIEWERS.length];
  const b = MACBOOK_REVIEWERS[Math.abs(h >> 3) % MACBOOK_REVIEWERS.length];
  return a === b ? [a] : [a, b];
}

function worthRepairingVerdict(m: MacBookModel): { headline: string; body: string } {
  const age = 2026 - m.releaseYear;
  if (m.currentInLineup) {
    return {
      headline: "Yes - and check Apple's warranty first",
      body: `The ${m.shortName} is in Apple's current lineup. Most units are still under the standard 1-year warranty or AppleCare+. Start there. We handle accidental damage Apple won't cover and out-of-warranty work.`,
    };
  }
  if (m.era === "intel" && age >= 6) {
    return {
      headline: "Be selective - battery yes, big jobs probably no",
      body: `${age} years old, Intel chip, no Apple Silicon performance. A AED ${m.pricing.battery} battery is almost always worth it. A AED ${m.pricing.screen}+ screen + AED ${m.pricing.keyboard}+ keyboard combined is usually more than a clean used M1 Air. We'll show you the math at intake.`,
    };
  }
  if (m.era === "apple-silicon" && age <= 3) {
    return {
      headline: "Absolutely - easy decision",
      body: `Released ${age} year${age === 1 ? "" : "s"} ago. Apple Silicon performance is still elite, parts are abundant, and the ${m.shortName} runs the latest macOS perfectly. Repairs pay for themselves quickly.`,
    };
  }
  if (age <= 5) {
    return {
      headline: "Usually yes - depends on what's broken",
      body: `${age} years old in 2026. Battery and small repairs are no-brainers. Screen and logic-board jobs you should weigh against a newer model - we'll be straight at intake.`,
    };
  }
  return {
    headline: "Battery yes, big repairs case-by-case",
    body: `${age} years old. AED ${m.pricing.battery} battery service is almost always worth it. Larger repairs need a frank conversation about value - we'll have it with you.`,
  };
}

function pickRelatedModels(slug: string): MacBookModel[] {
  return relatedModels(slug, ALL_MODELS, (m) => m.family);
}

type ServiceRow = { service: string; price: number | string; href: string; timeline: string };

function buildServiceRows(m: MacBookModel): ServiceRow[] {
  const rows: ServiceRow[] = [
    {
      service: "Screen / display assembly replacement",
      price: m.pricing.screen,
      href: "/macbook-screen-repair-dubai",
      timeline: "2-3 days",
    },
    {
      service: "Battery replacement",
      price: m.pricing.battery,
      href: "/macbook-battery-replacement-dubai",
      timeline: "Same-day",
    },
    {
      service: m.era === "intel" && m.releaseYear <= 2019
        ? "Butterfly keyboard repair (top-case swap)"
        : "Magic Keyboard repair (top-case)",
      price: m.era === "intel" && m.releaseYear <= 2019 ? m.pricing.topCase : m.pricing.keyboard,
      href: "/macbook-keyboard-repair-dubai",
      timeline: "1-2 days",
    },
    {
      service: "Trackpad repair / replacement",
      price: m.pricing.trackpad,
      href: "/macbook-trackpad-repair-dubai",
      timeline: "1 day",
    },
    {
      service: "USB-C / Thunderbolt port repair",
      price: m.pricing.port,
      href: "/macbook-charging-port-repair-dubai",
      timeline: "1-2 days",
    },
    {
      service: "Logic board repair (component-level)",
      price: m.pricing.logicBoard,
      href: "/macbook-logic-board-repair-dubai",
      timeline: "3-5 days",
    },
    {
      service: "Speaker repair",
      price: m.pricing.speaker,
      href: "/macbook-speaker-repair-dubai",
      timeline: "1 day",
    },
    {
      service: "Liquid damage diagnostic + clean",
      price: 600,
      href: "/macbook-water-damage-repair-dubai",
      timeline: "2-4 days",
    },
    {
      service: "Free diagnostic",
      price: "Free",
      href: "/macbook-full-diagnostic-dubai",
      timeline: "30 minutes",
    },
  ];
  if (m.era === "intel" && m.pricing.fanCleaning > 0) {
    rows.splice(7, 0, {
      service: "Fan cleaning + thermal paste",
      price: m.pricing.fanCleaning,
      href: "/macbook-overheating-fix-dubai",
      timeline: "Same-day",
    });
  }
  return rows;
}

export default function MacBookModelPage({ slug }: { slug: string }) {
  const model = ALL_MODELS.find((m) => m.slug === slug);
  if (!model) {
    return (
      <div className="mx-auto max-w-content px-5 md:px-6 py-3xl">
        <h1 className="text-[28px]">MacBook model not found</h1>
        <p className="mt-md">
          We don&apos;t have a page for <code>{slug}</code> yet.{" "}
          <Link to="/" className="text-primary font-semibold hover:underline">
            Browse all MacBook services →
          </Link>
        </p>
      </div>
    );
  }

  const verdict = worthRepairingVerdict(model);
  const serviceRows = buildServiceRows(model);
  const related = pickRelatedModels(slug);
  const startingPrice = Math.min(model.pricing.battery, model.pricing.port, model.pricing.fanCleaning || 9999);

  const isButterfly = model.era === "intel" && model.releaseYear <= 2019;
  const isAppleSilicon = model.era === "apple-silicon";

  const faqs = [
    {
      q: `How much does a ${model.name} screen replacement cost in Dubai?`,
      a: `Screen / display assembly replacement on the ${model.name} is AED ${model.pricing.screen}. Typical timeline 2-3 days. Includes a 3-month written warranty on the panel and the labour.`,
    },
    {
      q: `Can I upgrade the RAM or SSD on the ${model.name}?`,
      a: isAppleSilicon
        ? `No. Apple Silicon MacBooks (M1 through M5) have RAM unified into the SoC and the SSD soldered to the logic board. The chip, RAM and storage are one package. Buy enough storage and RAM at order time - upgrade later is impossible. For data on a failed SSD, we offer chip-off recovery (AED 2,000+, complex but possible).`
        : `RAM is soldered on the ${model.name} (Intel Air / Pro retina-era). SSD is also soldered on these models. The original spec is what you keep - neither is upgradeable. We can recover data from a failed SSD via chip-off recovery (AED 2,000+).`,
    },
    {
      q: isButterfly
        ? `Is the butterfly keyboard on my ${model.name} covered by an Apple repair program?`
        : `How long does battery replacement on the ${model.name} take?`,
      a: isButterfly
        ? `Yes - Apple's Keyboard Service Program covers 2015-2019 MacBook models with butterfly keyboards for 4 years from the original purchase date. We'll check eligibility for you free of charge. If you qualify, Apple does the repair for free and we send you to them. If you don't, we do the top-case swap for AED ${model.pricing.topCase}.`
        : `Battery replacement on the ${model.name} is AED ${model.pricing.battery} and we typically complete it the same day. We use cells with verified cycle counts and reseal the chassis properly.`,
    },
    {
      q: `Is the ${model.name} still worth repairing in 2026?`,
      a: `${verdict.headline}. ${verdict.body}`,
    },
    {
      q: `Where can I get my ${model.name} repaired in Dubai?`,
      a: `Bring it to our workshop in Dubai Media City, or use our free pickup service across Dubai mainland. WhatsApp the model and a photo of the issue and we'll quote you within 4 minutes. Written warranty of up to 12 months, depending on the repair.`,
    },
  ];

  return (
    <SubServicePageTemplate
      seoTitle={`${model.name} Repair Dubai - From AED ${startingPrice}`}
      seoDescription={`${model.name} (${model.releaseYear}) repair Dubai. Screen AED ${model.pricing.screen}, battery AED ${model.pricing.battery}, keyboard AED ${model.pricing.keyboard}. Up to 12-month warranty.`}
      path={`/${model.slug}`}
      eyebrow={`${FAMILY_LABEL[model.family]} ${model.size}" · ${model.releaseYear}${model.currentInLineup ? " · current Apple lineup" : model.discontinued ? ` · discontinued ${model.discontinued}` : ""}`}
      h1={`${model.name} Repair Dubai - Screen, Battery, Keyboard & Logic Board`}
      subtitle={`${model.heroTagline} From AED ${startingPrice}. Up to written warranty up to 12 months. Free pickup across Dubai.`}
      startingPrice={startingPrice}
      timeline={isAppleSilicon && model.currentInLineup ? "Same-day battery · 2-5 days specialty parts" : "Same-day to 3 days"}
      whatsappPrefill={`Hi, I have a ${model.name} (${model.releaseYear}) and I need help with:`}
      breadcrumb={[
        { name: "Home",           path: "/" },
        { name: "MacBook Repair", path: "/" },
        { name: model.name,       path: `/${model.slug}` },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "MacBook board-level repair & screen replacement" }}
      serviceName={`${model.name} Repair`}
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>{model.name} owner - let&apos;s sort it.</strong> The {model.name} ({model.releaseYear}) runs the {model.chip} with a {model.display} display.{" "}
            {model.currentInLineup
              ? `It's still in Apple's current lineup - most units are under warranty, so always check Apple first.`
              : model.discontinued
                ? `Apple discontinued it in ${model.discontinued} but it's fully serviceable.`
                : `It's no longer sold by Apple but parts and expertise are widely available.`}
            {" "}From AED {startingPrice} for the most common service. Free pickup, written warranty up to 12 months.
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
          </ul>

          <h2 className="text-[28px] md:text-[32px] mb-md">Common problems we see on the {model.shortName}</h2>
          <ul className="space-y-2 text-[15px] mb-lg">
            {model.commonIssues.map((issue, i) => (
              <li key={i}>• {issue}</li>
            ))}
          </ul>

          <h2 className="text-[28px] md:text-[32px] mb-md">Services available for the {model.shortName}</h2>
          <ScrollHintTable className="border border-border rounded-md bg-bg-card mb-lg" fadeClass="from-bg-card">
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
          </ScrollHintTable>

          {isAppleSilicon && (
            <div className="bg-bg-alt border-l-4 border-accent rounded-md p-lg mb-lg">
              <h3 className="text-[18px] font-bold mb-sm">Can we upgrade the RAM or SSD?</h3>
              <p className="text-[15px] mb-sm">
                <strong>No.</strong> Apple Silicon MacBooks (M1 through M5) have SoC-integrated RAM and a soldered SSD. The chip, RAM, and storage are one package on the logic board. Buy enough when you order - upgrading later is impossible.
              </p>
              <p className="text-[15px]">
                For data recovery on a failed SSD, we offer chip-off recovery. Complex, expensive (AED 2,000+), but possible. <Link to="/macbook-data-recovery-dubai" className="text-primary font-semibold hover:underline">More on data recovery →</Link>
              </p>
            </div>
          )}

          {isButterfly && (
            <div className="bg-bg-alt border-l-4 border-accent rounded-md p-lg mb-lg">
              <h3 className="text-[18px] font-bold mb-sm">Intel {FAMILY_LABEL[model.family]} - Apple's Keyboard Service Program</h3>
              <p className="text-[15px] mb-sm">
                Apple ran a Keyboard Service Program covering 2015-2019 MacBook models with butterfly keyboards for <strong>4 years from the original purchase date</strong>. If your keyboard fails and you're inside that window, Apple may still fix it free.
              </p>
              <p className="text-[15px]">
                We'll check eligibility for you - no cost if you qualify with Apple. If you don't, we do the top-case swap (AED {model.pricing.topCase}, 1 day).
              </p>
            </div>
          )}

          <h2 className="text-[28px] md:text-[32px] mb-md">Parts availability for the {model.shortName}</h2>
          <p className="text-[15px] mb-lg">
            {model.currentInLineup
              ? `As Apple's current ${FAMILY_LABEL[model.family]}, parts come through authorised channels. Battery, MagSafe boards and ports are usually in stock same-day. Specialty items (logic board, full screen assembly) take 2-5 days. ${model.timelineNotes}`
              : model.era === "intel"
                ? `Intel-era parts are still well-stocked in Dubai - screens, batteries, top-cases and ports are routine. Logic boards are sourced board-by-board. ${model.timelineNotes}`
                : `Parts for the ${model.shortName} are widely available. Screens, batteries, top-cases and ports are usually same-day to 2 days. ${model.timelineNotes}`}
          </p>

          <h2 className="text-[28px] md:text-[32px] mb-md">Is the {model.shortName} still worth repairing in 2026?</h2>
          <div className="bg-bg-alt border-l-4 border-primary rounded-md p-lg mb-lg">
            <p className="text-[16px] font-semibold mb-sm">{verdict.headline}</p>
            <p className="text-[15px]">{verdict.body}</p>
          </div>

          <h2 className="text-[28px] md:text-[32px] mb-md">Our honest take on the {model.shortName}</h2>
          <p className="text-[15px] mb-lg">{model.honestyNote}</p>

          <h2 className="text-[28px] md:text-[32px] mb-md">Other {FAMILY_LABEL[model.family]} models we repair</h2>
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
        `Cracked or unresponsive ${model.shortName} display assembly`,
        `Worn-out battery - fresh cells, verified cycle count, properly resealed`,
        isButterfly ? "Failing butterfly keys - top-case swap (Apple program eligibility checked first)" : "Magic Keyboard key failures - repair or top-case swap",
        `Trackpad cable failures, dead trackpad after spills`,
        `USB-C / Thunderbolt port damage from cheap docks and dropped cables`,
        `Logic board faults - component-level repair where economical`,
        `Liquid damage - ultrasonic clean, board-level recovery`,
        `Slow performance, fan noise, macOS reinstalls`,
      ]}
      steps={[
        { title: "WhatsApp the model and issue",   body: `Send "${model.name}" plus a photo. Quote in 4 minutes.` },
        { title: "Free pickup or visit our Media City workshop",   body: "Free pickup across Dubai mainland or drop in 9am-10pm." },
        { title: "Free diagnostic, fixed price",   body: "We diagnose for free and confirm the price before any work starts." },
        { title: "Repair + written warranty",       body: `${model.timelineNotes} You walk out with a written warranty of up to 12 months, depending on the repair.` },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Covers the replaced part and the labour",
        "Same fault returns? We re-repair free",
        "Issued in writing on your invoice",
        "No quibbling, no fine print",
      ]}
      faqs={faqs}
      reviewNames={pickMacBookReviewers(slug)}
      related={[
        { label: "MacBook screen repair Dubai",          href: "/macbook-screen-repair-dubai",         description: "Cracked panel, dead pixels, backlight issues - 2-3 days." },
        { label: "MacBook battery replacement Dubai",    href: "/macbook-battery-replacement-dubai",   description: "Fresh cells, verified cycle count, sealed properly. Same-day." },
        { label: "MacBook full diagnostic",              href: "/macbook-full-diagnostic-dubai",       description: "Free 30-minute diagnostic - we tell you what's wrong and what it costs." },
      ]}
    />
  );
}
