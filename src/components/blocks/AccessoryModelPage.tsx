"use client";
// Data-driven device-model page for iPod Touch.
// Reads from src/content/ipod-models.json.
//
// Usage: <AccessoryModelPage slug="ipod-touch-7-repair-dubai" />
import { Link } from "@/lib/router-compat";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import accessoryModels from "@/content/ipod-models.json";

type Pricing = {
  // iPod
  battery?: number;
  screen?: number;
  homeButton?: number;
  port?: number;
  diagnostic?: number;
};

type Model = {
  slug: string;
  name: string;
  shortName: string;
  releaseYear: number;
  category: "ipod";
  family: "ipod";
  chip: string;
  headlineFeatures: string[];
  currentInLineup: boolean;
  discontinued?: string;
  sealed: boolean;
  commonIssues: string[];
  pricing: Pricing;
  honestyTier: "ipod";
  appleServiceProgram?: string;
};

const ALL_MODELS: Model[] = accessoryModels as Model[];

const CATEGORY_LABEL: Record<Model["category"], string> = {
  ipod: "iPod",
};

const CATEGORY_HUB: Record<Model["category"], string> = {
  ipod: "/", // no dedicated iPod hub - link home
};

const REVIEWERS = [
  "June Arevalo",
  "Janna Nurahmetova",
  "Linda Banannou",
  "Mariia Chymyrysova",
  "Phill Balcon",
  "Daniel Layzell",
  "David Boulos",
  "Polycarp",
];

function pickReviewers(slug: string): string[] {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  const a = REVIEWERS[Math.abs(h) % REVIEWERS.length];
  const b = REVIEWERS[Math.abs(h >> 3) % REVIEWERS.length];
  return a === b ? [a] : [a, b];
}

function pickRelated(slug: string): Model[] {
  const me = ALL_MODELS.find((m) => m.slug === slug);
  if (!me) return [];
  return ALL_MODELS.filter((m) => m.slug !== slug).slice(0, 4);
}

type ServiceRow = { service: string; price: number | string; href: string; timeline: string };

function buildServiceRows(m: Model): ServiceRow[] {
  const p = m.pricing;
  const rows: ServiceRow[] = [];

  if (p.battery)    rows.push({ service: "Battery replacement", price: p.battery, href: "/", timeline: "Same-day" });
  if (p.screen)     rows.push({ service: "Screen / digitiser replacement", price: p.screen, href: "/", timeline: "1-2 days" });
  if (p.homeButton) rows.push({ service: "Home button repair", price: p.homeButton, href: "/", timeline: "Same-day" });
  if (p.port)       rows.push({ service: "Lightning port repair", price: p.port, href: "/", timeline: "Same-day" });

  rows.push({
    service: "Free diagnostic",
    price: "Free",
    href: CATEGORY_HUB[m.category],
    timeline: "30 minutes",
  });
  return rows;
}

function startingPriceFor(m: Model): number {
  const candidates = [
    m.pricing.homeButton,
    m.pricing.port,
    m.pricing.battery,
    m.pricing.screen,
  ].filter((v): v is number => typeof v === "number" && v > 0);
  return candidates.length ? Math.min(...candidates) : 200;
}

function verdictFor(m: Model): { headline: string; body: string } {
  return {
    headline: "Yes - for sentimental, kids, or music-only use",
    body: `Discontinued in 2022, stuck on iOS 15, no app updates. But for kids' first device, a music-only player, or a beloved old gadget you want kept alive - battery (AED ${m.pricing.battery ?? 250}) and screen (AED ${m.pricing.screen ?? 300}) repairs absolutely make sense.`,
  };
}

export default function AccessoryModelPage({ slug }: { slug: string }) {
  const model = ALL_MODELS.find((m) => m.slug === slug);
  if (!model) {
    return (
      <div className="mx-auto max-w-content px-5 md:px-6 py-3xl">
        <h1 className="text-[28px]">Model not found</h1>
        <p className="mt-md">
          We don&apos;t have a page for <code>{slug}</code> yet.{" "}
          <Link to="/" className="text-accent-bright font-semibold hover:underline">Back to home →</Link>
        </p>
      </div>
    );
  }

  const verdict = verdictFor(model);
  const serviceRows = buildServiceRows(model);
  const related = pickRelated(slug);
  const startingPrice = startingPriceFor(model);

  const faqs: { q: string; a: string }[] = [
    {
      q: `How much does ${model.name} repair cost in Dubai?`,
      a: `Most ${model.name} repairs start at AED ${startingPrice}. Battery AED ${model.pricing.battery}, screen AED ${model.pricing.screen}, home button AED ${model.pricing.homeButton}. 90-day written warranty on every repair.`,
    },
    {
      q: `Will iOS 15 keep my iPod Touch 7 useful?`,
      a: `Yes for music, kids, or anything that doesn't need new apps. iOS 15 still runs Apple Music, Safari, YouTube, Netflix and any pre-2022 app you already have installed. New App Store updates have stopped, but it's a fantastic music player and a safe first device for kids.`,
    },
    ...(model.appleServiceProgram ? [{
      q: `Is there an Apple Service Program for the ${model.shortName}?`,
      a: model.appleServiceProgram,
    }] : []),
    {
      q: `Is the ${model.shortName} still worth repairing in 2026?`,
      a: `${verdict.headline}. ${verdict.body}`,
    },
    {
      q: `Where can I get my ${model.name} repaired in Dubai?`,
      a: `Bring it to our workshop in Dubai Media City, or use our free pickup service across Dubai mainland. WhatsApp the model and a photo of the issue and we'll quote you within 4 minutes. 90-day written warranty on every job.`,
    },
  ];

  return (
    <SubServicePageTemplate
      seoTitle={`${model.name} Repair Dubai - From AED ${startingPrice}`}
      seoDescription={`${model.name} repair Dubai. Battery, screen, home button, port. From AED ${startingPrice}. Free pickup, free diagnostic, 90-day warranty.`}
      path={`/${model.slug}`}
      eyebrow={`${CATEGORY_LABEL[model.category]} · ${model.releaseYear}${model.currentInLineup ? " · current Apple lineup" : model.discontinued ? ` · discontinued ${model.discontinued}` : ""}`}
      h1={`${model.name} Repair Dubai - Honest Diagnostic, Fixed Prices, 90-Day Warranty`}
      subtitle={`From AED ${startingPrice}. Free diagnostic. We'll tell you honestly when repair makes sense - and when it doesn't.`}
      startingPrice={startingPrice}
      timeline="Same-day to 5 days depending on the job"
      whatsappPrefill={`Hi, I have a ${model.name} and I need help with:`}
      breadcrumb={[
        { name: "Home",                                       path: "/" },
        { name: `${CATEGORY_LABEL[model.category]} Repair`,    path: CATEGORY_HUB[model.category] },
        { name: model.name,                                   path: `/${model.slug}` },
      ]}
      technician={{ name: "Shafeez", years: 12, specialisation: `${CATEGORY_LABEL[model.category]} board-level repair, battery service & sealed-device reassembly` }}
      serviceName={`${model.name} Repair`}
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>{model.name} owner - let&apos;s sort it.</strong> The {model.name} runs the {model.chip}.{" "}
            {model.currentInLineup
              ? `It's still in Apple's current lineup - most units are under warranty, so always check Apple first.`
              : model.discontinued
                ? `Apple discontinued it in ${model.discontinued} but it's serviceable.`
                : `It's no longer sold by Apple but parts and expertise are still available.`}
            {" "}From AED {startingPrice} for the most common service. Free pickup, 90-day written warranty.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">About the {model.name}</h2>
          <ul className="space-y-1 text-[15px] mb-lg">
            <li>• <strong>Released:</strong> {model.releaseYear}{model.currentInLineup ? " · current Apple lineup" : model.discontinued ? ` · discontinued ${model.discontinued}` : ""}</li>
            <li>• <strong>Chip:</strong> {model.chip}</li>
          </ul>

          <h2 className="text-[24px] md:text-[28px] mb-md">Headline features</h2>
          <ul className="space-y-2 text-[15px] mb-lg">
            {model.headlineFeatures.map((f, i) => (
              <li key={i}>• {f}</li>
            ))}
          </ul>

          <h2 className="text-[24px] md:text-[28px] mb-md">Common problems we see on the {model.shortName}</h2>
          <ul className="space-y-2 text-[15px] mb-lg">
            {model.commonIssues.map((issue, i) => (
              <li key={i}>• {issue}</li>
            ))}
          </ul>

          <h2 className="text-[24px] md:text-[28px] mb-md">Services available for the {model.shortName}</h2>
          <div className="overflow-x-auto border border-white/10 rounded-md bg-white/[0.04] mb-lg">
            <table className="w-full text-[14px] min-w-[560px]">
              <thead className="bg-white/[0.04]">
                <tr className="text-left">
                  <th className="px-md py-sm font-semibold">Service</th>
                  <th className="px-md py-sm font-semibold">Price (AED)</th>
                  <th className="px-md py-sm font-semibold">Timeline</th>
                  <th className="px-md py-sm font-semibold">Book</th>
                </tr>
              </thead>
              <tbody>
                {serviceRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-white/[0.02]" : ""}>
                    <td className="px-md py-sm">{row.service}</td>
                    <td className="px-md py-sm">{row.price}</td>
                    <td className="px-md py-sm">{row.timeline}</td>
                    <td className="px-md py-sm">
                      <Link to={row.href} className="text-accent-bright font-semibold hover:underline">Book →</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {model.appleServiceProgram && (
            <div className="bg-white/[0.04] border-l-4 border-primary rounded-md p-lg mb-lg">
              <h3 className="text-[18px] font-bold mb-sm">Apple Service Program - check eligibility first</h3>
              <p className="text-[15px]">
                {model.appleServiceProgram} <strong>If yours qualifies, Apple does the repair for free.</strong> We&apos;ll check eligibility for you free of charge - if you qualify, we send you straight to Apple. If you don&apos;t, we do the repair.
              </p>
            </div>
          )}

          <h2 className="text-[24px] md:text-[28px] mb-md">Is the {model.shortName} still worth repairing in 2026?</h2>
          <div className="bg-white/[0.04] border-l-4 border-primary rounded-md p-lg mb-lg">
            <p className="text-[16px] font-semibold mb-sm">{verdict.headline}</p>
            <p className="text-[15px]">{verdict.body}</p>
          </div>

          {related.length > 0 && (
            <>
              <h2 className="text-[24px] md:text-[28px] mb-md">Other {CATEGORY_LABEL[model.category]} models we repair</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-sm mb-lg">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/${r.slug}`}
                    className="border border-white/10 rounded-md p-sm bg-white/[0.04] hover:border-primary text-[13px] transition-colors"
                  >
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-on-primary-muted text-[12px] mt-[2px]">{r.releaseYear} · {r.chip}</div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </>
      }
      whatWeFix={[
        "Battery degraded - universal at 7 years old",
        "Cracked screen from drops",
        "Home button unresponsive",
        "Lightning port wear - won't charge or transfer",
        "Stuck on iOS 15 - last supported version",
        "Won't sync with Mac / iTunes Match",
        "Speaker / headphone jack damage",
        "Liquid damage - ultrasonic clean",
      ]}
      steps={[
        { title: "WhatsApp the model and issue", body: `Send "${model.name}" plus a photo of the problem. Quote in 4 minutes.` },
        { title: "Free pickup or visit our Media City workshop", body: "Free pickup across Dubai mainland. Or drop in 9am-10pm." },
        { title: "Free diagnostic, fixed price",  body: "We diagnose for free and confirm the price before any work starts. We'll also tell you when replacement is the smarter call." },
        { title: "Repair + 90-day warranty",      body: "Same-day to 5 days for most repairs. You walk out with a written 90-day warranty." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers the replaced part and the labour",
        "Same fault returns? We re-repair free",
        "Issued in writing on your invoice",
        "We tell you when replacement beats repair - no upsell pressure",
      ]}
      faqs={faqs}
      reviewNames={pickReviewers(slug)}
      related={[
        { label: "iPhone repair Dubai",           href: "/iphone-repair-dubai",                description: "iPod Touch shares parts and procedures with old iPhones." },
        { label: "Apple repair hub",              href: "/apple-repair-dubai",                 description: "All Apple devices, all in one place." },
        { label: "Battery replacement guide",     href: "/iphone-battery-replacement-dubai",   description: "Battery service principles apply to all Apple Lithium devices." },
      ]}
    />
  );
}
