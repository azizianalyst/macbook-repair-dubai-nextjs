"use client";
import MacBookProGenerationPage from "@/components/blocks/MacBookProGenerationPage";

export default function MacBookProM4Repair() {
  return (
    <MacBookProGenerationPage
      path="/macbook-pro-m4-repair-dubai"
      chip="M4"
      years="2024"
      seoTitle="MacBook Pro M4 Repair Dubai - 14&quot; &amp; 16&quot; All M4 Models | AED 200"
      seoDescription="MacBook Pro M4 repair Dubai. All variants: 14&quot; M4 (A3112), M4 Pro (A3401), 16&quot; M4 Pro (A3403), M4 Max (A3186). Thunderbolt 5 specialists. From AED 200. Call 055 741 3706."
      eyebrow="MacBook Pro M4 specialist"
      h1="MacBook Pro M4 Repair Dubai"
      heroDescription="The M4 MacBook Pro (2024) introduced OLED Liquid Retina XDR and Thunderbolt 5. We repair all four M4 variants, 14&quot; M4, M4 Pro, 16&quot; M4 Pro, and 16&quot; M4 Max, with same-day turnaround."
      heroMeta={["All M4 variants", "OLED screen specialists", "Thunderbolt 5 port repair"]}
      models={[
        { label: `16" M4 Max`, href: "/macbook-pro-16-m4-2024-repair-dubai", aNum: "A3186" },
        { label: `16" M4 Pro`, href: "/macbook-pro-16-m4-2024-repair-dubai", aNum: "A3403" },
        { label: `14" M4 Pro`, href: "/macbook-pro-14-m4-2024-repair-dubai", aNum: "A3401" },
        { label: `14" M4`, href: "/macbook-pro-14-m4-2024-repair-dubai", aNum: "A3112" },
      ]}
      faqs={[
        { q: "Which M4 MacBook Pro models do you repair?", a: "We repair all M4 variants: 14&quot; M4 (A3112), 14&quot; M4 Pro (A3401), 16&quot; M4 Pro (A3403), and 16&quot; M4 Max (A3186)." },
        { q: "How much does MacBook Pro M4 screen repair cost in Dubai?", a: "M4 MacBook Pro OLED screen replacement starts from AED 700 for the 14&quot; and AED 800 for the 16&quot;. Quote given before any work starts." },
        { q: "Do you offer a warranty on M4 MacBook Pro repairs?", a: "Yes. Screen and battery replacements carry a 12-month warranty. All other hardware repairs carry a 90-day warranty." },
        { q: "Can you repair the Thunderbolt 5 port on the M4 MacBook Pro?", a: "Yes. We repair USB-C and Thunderbolt 5 port faults on M4 MacBook Pro models, including no-charge and no-display issues caused by port damage." },
      ]}
    />
  );
}
