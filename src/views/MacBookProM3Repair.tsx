"use client";
import MacBookProGenerationPage from "@/components/blocks/MacBookProGenerationPage";

export default function MacBookProM3Repair() {
  return (
    <MacBookProGenerationPage
      path="/macbook-pro-m3-repair-dubai"
      chip="M3"
      years="2023 – 2024"
      seoTitle="MacBook Pro M3 Repair Dubai - 14&quot; &amp; 16&quot; All M3 Models | AED 200"
      seoDescription="MacBook Pro M3 repair Dubai. All variants: 14&quot; M3 (A2918), M3 Pro (A2992), 16&quot; M3 Pro/Max (A2991). Same-day screen, battery &amp; logic board. From AED 200. Call 055 741 3706."
      eyebrow="MacBook Pro M3 specialist"
      h1="MacBook Pro M3 Repair Dubai"
      heroDescription="The M3 MacBook Pro (2023–2024) brought hardware ray tracing and a 3nm chip. We service all four M3 variants, 14&quot; M3, M3 Pro, 16&quot; M3 Pro, and 16&quot; M3 Max, with same-day turnaround."
      heroMeta={["All M3 variants", "Same-day screen & battery", "Logic board specialists"]}
      models={[
        { label: `16" M3 Max`, href: "/macbook-pro-16-m3-2023-repair-dubai", aNum: "A2991" },
        { label: `16" M3 Pro`, href: "/macbook-pro-16-m3-2023-repair-dubai", aNum: "A2991" },
        { label: `14" M3 Pro`, href: "/macbook-pro-14-m3-2023-repair-dubai", aNum: "A2992" },
        { label: `14" M3`, href: "/macbook-pro-14-m3-2023-repair-dubai", aNum: "A2918" },
      ]}
      faqs={[
        { q: "Which M3 MacBook Pro models do you repair?", a: "We repair all M3 variants: 14&quot; M3 (A2918), 14&quot; M3 Pro (A2992), 16&quot; M3 Pro (A2991), and 16&quot; M3 Max (A2991)." },
        { q: "How much does MacBook Pro M3 screen repair cost in Dubai?", a: "M3 MacBook Pro screen replacement starts from AED 600 for the 14&quot; and AED 700 for the 16&quot;. Same-day service for most models." },
        { q: "Do you offer a warranty on M3 MacBook Pro repairs?", a: "Yes. Screen and battery replacements carry a 12-month warranty. All other hardware repairs carry a 90-day warranty." },
        { q: "Can you repair M3 MacBook Pro battery swelling?", a: "Yes. A swollen battery is a safety issue. Bring it in immediately. We replace the battery and inspect the chassis for any deformation caused by the swelling." },
      ]}
    />
  );
}
