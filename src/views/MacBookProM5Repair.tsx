"use client";
import proModels from "@/content/macbook-pro-models.json";
import type { VariantRow } from "@/components/blocks/VariantSpecTable";
import MacBookProGenerationPage from "@/components/blocks/MacBookProGenerationPage";

type ModelSpec = { slug: string; name: string; chip?: string; display?: string; maxRAM?: string; baseStorage?: string; maxStorage?: string; ports?: string };
// The per-variant pages were merged into this page on 2026-10-21 (301s in next.config.mjs).
// Their Apple spec facts live on here as one comparison table.
const A_NUM: Record<string, string> = {
  "macbook-pro-14-m5-2025-repair-dubai": "A3434",
  "macbook-pro-14-m5-pro-2026-repair-dubai": "A3426",
  "macbook-pro-14-m5-max-2026-repair-dubai": "A3427",
  "macbook-pro-16-m5-pro-2026-repair-dubai": "A3428",
  "macbook-pro-16-m5-max-2026-repair-dubai": "A3429",
};
const VARIANTS: VariantRow[] = (proModels as ModelSpec[])
  .filter((m) => A_NUM[m.slug] !== undefined)
  .sort((a, b) => Object.keys(A_NUM).indexOf(a.slug) - Object.keys(A_NUM).indexOf(b.slug))
  .map((m) => ({
    name: m.name,
    aNum: A_NUM[m.slug] || undefined,
    chip: m.chip?.split(" - ")[0],
    display: m.display,
    memory: m.maxRAM,
    storage: m.baseStorage && m.maxStorage ? `${m.baseStorage} to ${m.maxStorage}` : m.maxStorage,
    ports: m.ports,
  }));

export default function MacBookProM5Repair() {
  return (
    <MacBookProGenerationPage
      path="/macbook-pro-m5-repair-dubai"
      chip="M5"
      years="2025 – 2026"
      seoTitle="MacBook Pro M5 Repair Dubai - 14&quot; &amp; 16&quot; All M5 Models"
      seoDescription="MacBook Pro M5 repair Dubai. All variants: 14&quot; M5, M5 Pro (A3426), M5 Max (A3427), 16&quot; M5 Pro (A3428), M5 Max (A3429). Same-day service. Call 055 741 3706."
      eyebrow="MacBook Pro M5 specialist"
      h1="MacBook Pro M5 Repair Dubai"
      heroDescription="Apple's most powerful laptop chip. Whether you have the 14&quot; M5, M5 Pro, M5 Max, or the 16&quot; M5 Pro and M5 Max, our Dubai technicians service every variant. M5 parts are newer supply, so screen and battery jobs usually take 2–3 days."
      heroMeta={["All M5 variants", "Free diagnosis same day", "Logic board specialists"]}
      models={[
        { label: `16" M5 Max`, aNum: "A3429" },
        { label: `16" M5 Pro`, aNum: "A3428" },
        { label: `14" M5 Max`, aNum: "A3427" },
        { label: `14" M5 Pro`, aNum: "A3426" },
        { label: `14" M5`, aNum: "A3434" },
      ]}
      variants={VARIANTS}
      faqs={[
        { q: "Which M5 MacBook Pro models do you repair?", a: "We repair all M5 variants: 14&quot; M5 (A3434), 14&quot; M5 Pro (A3426), 14&quot; M5 Max (A3427), 16&quot; M5 Pro (A3428), and 16&quot; M5 Max (A3429)." },
        { q: "How much does MacBook Pro M5 screen repair cost in Dubai?", a: "It is quoted per size in writing - the 16&quot; mini-LED Liquid Retina XDR assembly costs more than the 14&quot;. M5 display assemblies are newer supply, so turnaround is usually 2-3 days." },
        { q: "Do you offer a warranty on M5 MacBook Pro repairs?", a: "Yes. Screen replacements carry a 90-day (3-month) warranty, battery replacements 3 months with an 80% capacity guarantee, and other hardware repairs 15 days to 2 years. Keyboard, logic board and liquid-damage work carry 15 days." },
        { q: "Can you repair M5 MacBook Pro liquid damage?", a: "Yes. Power off immediately and bring it in. Our board-level technicians clean, dry, and restore water-damaged M5 MacBook Pro units." },
      ]}
    />
  );
}
