"use client";
import MacBookProGenerationPage from "@/components/blocks/MacBookProGenerationPage";

export default function MacBookProM1Repair() {
  return (
    <MacBookProGenerationPage
      path="/macbook-pro-m1-repair-dubai"
      chip="M1"
      years="2020 – 2021"
      seoTitle="MacBook Pro M1 Repair Dubai - 13&quot;, 14&quot; &amp; 16&quot; All M1 Models | AED 200"
      seoDescription="MacBook Pro M1 repair Dubai. All variants: 13&quot; M1 (A2338), 14&quot; M1 Pro (A2442), 16&quot; M1 Pro/Max (A2485). First Apple Silicon. From AED 200. Call 055 741 3706."
      eyebrow="MacBook Pro M1 specialist"
      h1="MacBook Pro M1 Repair Dubai"
      heroDescription="The original Apple Silicon MacBook Pro. Whether you have the 13&quot; M1, 14&quot; M1 Pro, or 16&quot; M1 Pro/Max, our technicians have been servicing first-gen Apple Silicon since day one."
      heroMeta={["All M1 variants", "13&quot; · 14&quot; · 16&quot;", "First Apple Silicon experts"]}
      models={[
        { label: `16" M1 Max`, href: "/macbook-pro-16-m1-pro-2021-repair-dubai", aNum: "A2485" },
        { label: `14" M1 Pro`, href: "/macbook-pro-14-m1-pro-2021-repair-dubai", aNum: "A2442" },
        { label: `13" M1`, href: "/macbook-pro-13-m1-2020-repair-dubai", aNum: "A2338" },
      ]}
      faqs={[
        { q: "Which M1 MacBook Pro models do you repair?", a: "We repair all M1 variants: 13&quot; M1 (A2338), 14&quot; M1 Pro (A2442), 16&quot; M1 Pro (A2485), and 16&quot; M1 Max (A2485)." },
        { q: "How much does MacBook Pro M1 screen repair cost in Dubai?", a: "M1 MacBook Pro screen replacement starts from AED 300 for the 13&quot;, AED 550 for the 14&quot;, and AED 650 for the 16&quot;." },
        { q: "Do you offer a warranty on M1 MacBook Pro repairs?", a: "Yes. Screen and battery replacements carry a 12-month warranty. All other hardware repairs carry a 90-day warranty." },
        { q: "Can you repair MacBook Pro M1 Touch Bar issues?", a: "Yes. We repair and replace Touch Bar assemblies on the 13&quot; M1 MacBook Pro, including unresponsive Touch Bar and Touch ID failures." },
      ]}
    />
  );
}
