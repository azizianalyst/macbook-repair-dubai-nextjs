"use client";
import MacBookProGenerationPage from "@/components/blocks/MacBookProGenerationPage";

export default function MacBookProM5Repair() {
  return (
    <MacBookProGenerationPage
      path="/macbook-pro-m5-repair-dubai"
      chip="M5"
      years="2025 – 2026"
      seoTitle="MacBook Pro M5 Repair Dubai - 14&quot; &amp; 16&quot; All M5 Models | AED 200"
      seoDescription="MacBook Pro M5 repair Dubai. All variants: 14&quot; M5, M5 Pro (A3426), M5 Max (A3427), 16&quot; M5 Pro (A3428), M5 Max (A3429). Same-day service from AED 200. Call 055 741 3706."
      eyebrow="MacBook Pro M5 specialist"
      h1="MacBook Pro M5 Repair Dubai"
      heroDescription="Apple's most powerful laptop chip. Whether you have the 14&quot; M5, M5 Pro, M5 Max, or the 16&quot; M5 Pro and M5 Max, our Dubai technicians service every variant with same-day turnaround."
      heroMeta={["All M5 variants", "Same-day screen & battery", "Logic board specialists"]}
      models={[
        { label: `16" M5 Max`, href: "/macbook-pro-16-m5-max-2026-repair-dubai", aNum: "A3429" },
        { label: `16" M5 Pro`, href: "/macbook-pro-16-m5-pro-2026-repair-dubai", aNum: "A3428" },
        { label: `14" M5 Max`, href: "/macbook-pro-14-m5-max-2026-repair-dubai", aNum: "A3427" },
        { label: `14" M5 Pro`, href: "/macbook-pro-14-m5-pro-2026-repair-dubai", aNum: "A3426" },
        { label: `14" M5`, href: "/macbook-pro-14-m5-2025-repair-dubai", aNum: "A3434" },
      ]}
      faqs={[
        { q: "Which M5 MacBook Pro models do you repair?", a: "We repair all M5 variants: 14&quot; M5 (A3434), 14&quot; M5 Pro (A3426), 14&quot; M5 Max (A3427), 16&quot; M5 Pro (A3428), and 16&quot; M5 Max (A3429)." },
        { q: "How much does MacBook Pro M5 screen repair cost in Dubai?", a: "MacBook Pro M5 screen replacement starts from AED 650 for the 14&quot; and AED 750 for the 16&quot;. Same-day service available for most models." },
        { q: "Do you offer a warranty on M5 MacBook Pro repairs?", a: "Yes. All parts and labour carry a warranty: up to 12 months on screen and battery replacements, 90 days on other hardware repairs." },
        { q: "Can you repair M5 MacBook Pro liquid damage?", a: "Yes. Power off immediately and bring it in. Our board-level technicians clean, dry, and restore water-damaged M5 MacBook Pro units." },
      ]}
    />
  );
}
