"use client";
// Data-driven iPad device-model page.
// Single template that reads from src/content/ipad-models.json and renders a
// SubServicePageTemplate-based page for any iPad model. ~700 words/page.
//
// Usage:  <IpadModelPage slug="ipad-pro-13-m5-repair-dubai" />
import { Link } from "@/lib/router-compat";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import iPadModels from "@/content/ipad-models.json";

type Pricing = {
  screen: number;
  battery: number;
  port: number;
  cameraRepair: number;
  homeButton?: number;
  faceId?: number;
  waterDamage: number;
  diagnostic: number;
};

type IpadModel = {
  slug: string;
  name: string;
  shortName: string;
  releaseYear: number;
  category: "basic" | "mini" | "air" | "pro" | "older";
  chip: string;
  display: string;
  connector: string;
  storageOptions: string[];
  currentInLineup: boolean;
  discontinued?: string;
  commonIssues: string[];
  pricing: Pricing;
  timelineNotes: string;
  honestyNote: string;
  heroTagline: string;
};

const MODELS = iPadModels as IpadModel[];

const CATEGORY_LABEL: Record<IpadModel["category"], string> = {
  basic: "Basic iPad",
  mini:  "iPad Mini",
  air:   "iPad Air",
  pro:   "iPad Pro",
  older: "Older iPad",
};

// reviewer pool - all confirmed iPad reviewers from REVIEWS_LIBRARY
const IPAD_REVIEWERS = [
  "Anatoliy Tarasenko",
  "Anastasiia Goncia",
  "Ana Undricova",
  "Shah nawaz",
  "David Boulos",
  "vinay menon",
  "Ahsan Shahbaz",
];

// stable per-slug reviewer pick (2 names) so pages don't shuffle on each render
function pickIpadReviewers(slug: string): string[] {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  const a = IPAD_REVIEWERS[Math.abs(h) % IPAD_REVIEWERS.length];
  const b = IPAD_REVIEWERS[Math.abs(h >> 3) % IPAD_REVIEWERS.length];
  return a === b ? [a] : [a, b];
}

// "is it still worth repairing?" decision based on age + lineup status
function worthRepairingVerdict(m: IpadModel): { headline: string; body: string } {
  const age = 2026 - m.releaseYear;
  if (m.category === "older") {
    return {
      headline: "Be honest with yourself: probably borderline",
      body: "Older iPads are case-by-case. We diagnose for free and tell you straight whether the repair makes financial sense or whether the money is better spent on a newer model. No pressure either way.",
    };
  }
  if (m.currentInLineup) {
    return {
      headline: "Yes - and check Apple's warranty first",
      body: `The ${m.shortName} is in Apple's current lineup. Many units are still under the standard 1-year warranty or AppleCare+. Always check there first. We're here for accidental damage Apple won't cover and out-of-warranty work.`,
    };
  }
  if (age <= 3) {
    return {
      headline: "Absolutely - easy decision",
      body: `Released ${age} year${age === 1 ? "" : "s"} ago, parts are abundant, and the ${m.shortName} still runs the latest iPadOS smoothly. Repair pays for itself in the first year of continued use.`,
    };
  }
  if (age <= 5) {
    return {
      headline: "Usually yes - depends on what's broken",
      body: `${age} years old in 2026. Battery and port repairs (under AED 500) are no-brainers. Screen repairs need a bit more thought - we'll show you the price first and you decide.`,
    };
  }
  return {
    headline: "Be selective - we'll be honest at intake",
    body: `${age} years old. Battery (AED ${m.pricing.battery}) is almost always worth it. Screen repair (AED ${m.pricing.screen}) you should weigh against a newer used unit. We'll tell you straight.`,
  };
}

// pick 4 related iPad models (same category preferred, then adjacent)
function pickRelatedModels(slug: string): IpadModel[] {
  const me = MODELS.find((m) => m.slug === slug);
  if (!me) return [];
  // Circular window over the same category so inbound links distribute evenly.
  const cat = MODELS.filter((m) => m.category === me.category);
  const idx = cat.findIndex((m) => m.slug === slug);
  const picks: IpadModel[] = [];
  for (let k = 1; k <= 4 && k < cat.length; k++) picks.push(cat[(idx + k) % cat.length]);
  if (picks.length < 4) {
    const others = MODELS.filter((m) => m.category !== me.category && m.slug !== slug);
    picks.push(...others.slice(0, 4 - picks.length));
  }
  return picks;
}

// build a service pricing table row
type ServiceRow = { service: string; price: number | string; href: string; timeline: string };

function buildServiceRows(m: IpadModel): ServiceRow[] {
  const rows: ServiceRow[] = [
    {
      service: "Screen replacement",
      price: m.pricing.screen,
      href: "/ipad-screen-repair-dubai",
      timeline: m.category === "pro" && m.releaseYear >= 2024 ? "3-5 days (Tandem OLED)" : "1-2 days",
    },
    {
      service: "Battery replacement",
      price: m.pricing.battery,
      href: "/ipad-battery-replacement-dubai",
      timeline: "Same-day",
    },
    {
      service: m.connector.toLowerCase().includes("usb-c") ? "USB-C port replacement" : "Lightning port replacement",
      price: m.pricing.port,
      href: "/ipad-charging-port-repair-dubai",
      timeline: "Same-day",
    },
    {
      service: "Water damage diagnostic + repair",
      price: m.pricing.waterDamage,
      href: "/ipad-water-damage-repair-dubai",
      timeline: "2-4 days",
    },
  ];
  if (m.pricing.cameraRepair > 0) {
    rows.push({
      service: "Rear / FaceTime camera repair",
      price: m.pricing.cameraRepair,
      href: "/ipad-camera-repair-dubai",
      timeline: "1-2 days",
    });
  }
  if (m.pricing.homeButton && m.pricing.homeButton > 0) {
    rows.push({
      service: "Home / Touch ID button repair",
      price: m.pricing.homeButton,
      href: "/ipad-home-button-repair-dubai",
      timeline: "1-2 days",
    });
  }
  if (m.pricing.faceId && m.pricing.faceId > 0) {
    rows.push({
      service: "Face ID module repair",
      price: m.pricing.faceId,
      href: "/ipad-full-diagnostic-dubai",
      timeline: "2-3 days (sometimes not 100%)",
    });
  }
  rows.push({
    service: "Free diagnostic",
    price: "Free",
    href: "/ipad-full-diagnostic-dubai",
    timeline: "30 minutes",
  });
  return rows;
}

export default function IpadModelPage({ slug }: { slug: string }) {
  const model = MODELS.find((m) => m.slug === slug);
  if (!model) {
    return (
      <div className="mx-auto max-w-content px-5 md:px-6 py-3xl">
        <h1 className="text-[28px]">iPad model not found</h1>
        <p className="mt-md">
          We don&apos;t have a page for <code>{slug}</code> yet.{" "}
          <Link to="/ipad-screen-repair-dubai" className="text-primary font-semibold hover:underline">
            Browse all iPad services →
          </Link>
        </p>
      </div>
    );
  }

  const verdict = worthRepairingVerdict(model);
  const serviceRows = buildServiceRows(model);
  const related = pickRelatedModels(slug);
  const startingPrice = Math.min(model.pricing.battery, model.pricing.port);

  // 5 auto-generated FAQs from data
  const faqs = [
    {
      q: `How much does it cost to repair the ${model.name} screen in Dubai?`,
      a: `Screen replacement on the ${model.name} is AED ${model.pricing.screen}. Timeline: ${model.timelineNotes.split(".")[0]}. Includes a 3-month written warranty on the new panel and the labour.`,
    },
    {
      q: `Can you replace the ${model.name} battery the same day?`,
      a: `Yes - battery service on the ${model.name} is AED ${model.pricing.battery} and we typically complete it the same day. We use cells with a verified cycle count and seal the back properly.`,
    },
    {
      q: `Is the ${model.name} still worth repairing in 2026?`,
      a: `${verdict.headline}. ${verdict.body}`,
    },
    {
      q: `Do you offer a warranty on ${model.name} repairs?`,
      a: `Every ${model.name} repair comes with a written warranty of up to 12 months, depending on the repair, covering the part we replaced and the labour. If the same fault returns we re-repair free, no questions asked.`,
    },
    {
      q: `Where can I get my ${model.name} repaired in Dubai?`,
      a: `Bring it to our workshop in Dubai Media City, or use our free pickup service across Dubai mainland. WhatsApp the model and a photo of the issue and we'll quote you within 4 minutes.`,
    },
  ];

  return (
    <SubServicePageTemplate
      seoTitle={`${model.name} Repair Dubai - From AED ${startingPrice}`}
      seoDescription={`${model.name} (${model.releaseYear}) repair Dubai. Screen AED ${model.pricing.screen}, battery AED ${model.pricing.battery}, port AED ${model.pricing.port}. 12-month warranty. Free pickup.`}
      path={`/${model.slug}`}
      eyebrow={`${CATEGORY_LABEL[model.category]} · ${model.releaseYear}${model.currentInLineup ? " · current Apple lineup" : model.discontinued ? ` · discontinued ${model.discontinued}` : ""}`}
      h1={`${model.name} Repair Dubai - Screen, Battery, Port & More`}
      subtitle={`${model.heroTagline} From AED ${startingPrice}. 12-month written warranty. Free pickup across Dubai.`}
      startingPrice={startingPrice}
      timeline={model.category === "pro" && model.releaseYear >= 2024 ? "3-5 days (screen) · same-day (battery)" : "Same-day to 2 days"}
      whatsappPrefill={`Hi, I have a ${model.name} (${model.releaseYear}) and I need help with:`}
      breadcrumb={[
        { name: "Home",        path: "/" },
        { name: "iPad Repair", path: "/ipad-repair-dubai" },
        { name: model.name,    path: `/${model.slug}` },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "iPad board-level repair & screen replacement" }}
      serviceName={`${model.name} Repair`}
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>{model.name} owner - let&apos;s get it sorted.</strong> The {model.name} ({model.releaseYear}) runs the {model.chip} chip with a {model.display}. {model.currentInLineup
              ? `It's still in Apple's current lineup - many units are under warranty, so always check Apple first. We're here for accidental damage and out-of-warranty work.`
              : model.discontinued
                ? `Apple discontinued it in ${model.discontinued} but it remains fully serviceable.`
                : `It's no longer sold by Apple but parts and expertise are widely available.`}
          </p>
          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">About the {model.name}</h2>
          <ul className="space-y-1 text-[15px] mb-lg">
            <li>• <strong>Released:</strong> {model.releaseYear}{model.currentInLineup ? " · current Apple lineup" : model.discontinued ? ` · discontinued ${model.discontinued}` : ""}</li>
            <li>• <strong>Chip:</strong> {model.chip}</li>
            <li>• <strong>Display:</strong> {model.display}</li>
            <li>• <strong>Connector:</strong> {model.connector}</li>
            <li>• <strong>Storage options:</strong> {model.storageOptions.join(" · ")}</li>
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

          <h2 className="text-[24px] md:text-[28px] mb-md">Parts availability for the {model.shortName}</h2>
          <p className="text-[15px] mb-lg">
            {model.currentInLineup
              ? `As Apple's current ${CATEGORY_LABEL[model.category]}, parts are sourced from authorised channels. Some specialist panels (Tandem OLED especially) take 3-5 days. Batteries and ports are usually in stock same-day.`
              : model.category === "older"
                ? `Parts availability for older iPads is mixed. Batteries, screens and ports for iPad 5th-8th gen are still obtainable in Dubai. Earlier generations (1st-4th) are increasingly hard to source - we'll be honest at intake about lead times and whether the repair is economically sensible.`
                : `Parts for the ${model.shortName} are widely available in Dubai - screens, batteries, ports and small components are usually in stock or arrive within 1-2 days. ${model.timelineNotes}`}
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Is the {model.shortName} still worth repairing in 2026?</h2>
          <div className="bg-bg-alt border-l-4 border-primary rounded-md p-lg mb-lg">
            <p className="text-[16px] font-semibold mb-sm">{verdict.headline}</p>
            <p className="text-[15px]">{verdict.body}</p>
          </div>

          <h2 className="text-[24px] md:text-[28px] mb-md">Our honest take on the {model.shortName}</h2>
          <p className="text-[15px] mb-lg">{model.honestyNote}</p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Other {CATEGORY_LABEL[model.category]} models we repair</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-sm mb-lg">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/${r.slug}`}
                className="border border-border rounded-md p-sm bg-bg-card hover:border-primary text-[13px] transition-colors"
              >
                <div className="font-semibold">{r.name}</div>
                <div className="text-text-muted text-[12px] mt-[2px]">{r.releaseYear} · {r.chip.split(" ")[0]}</div>
              </Link>
            ))}
          </div>
        </>
      }
      whatWeFix={[
        `Cracked or unresponsive ${model.shortName} screen - replaced with quality panels`,
        `Worn-out battery - fresh cells with verified cycle count`,
        `Damaged ${model.connector.toLowerCase().includes("usb-c") ? "USB-C" : "Lightning"} port - full module replacement`,
        `Water-damaged ${model.shortName} - board cleaned in ultrasonic bath`,
        `Camera failure (front and rear) - module-level replacement`,
        `Software issues, restore loops, iPadOS reinstall and data preservation`,
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
      reviewNames={pickIpadReviewers(slug)}
      related={[
        { label: "iPad screen repair Dubai",            href: "/ipad-screen-repair-dubai",            description: "Cracked Retina, Liquid Retina or Tandem OLED - same-day to 5 days." },
        { label: "iPad battery replacement Dubai",      href: "/ipad-battery-replacement-dubai",      description: "Fresh cells, verified cycle count, sealed properly. Same-day." },
        { label: "iPad full diagnostic",                href: "/ipad-full-diagnostic-dubai",          description: "Free 30-minute diagnostic - we tell you what's wrong and what it costs." },
      ]}
    />
  );
}
