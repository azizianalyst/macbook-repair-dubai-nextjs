"use client";
import MacBookProGenerationPage from "@/components/blocks/MacBookProGenerationPage";

export default function MacBookProM2Repair() {
  return (
    <MacBookProGenerationPage
      path="/macbook-pro-m2-repair-dubai"
      chip="M2"
      years="2022 – 2023"
      seoTitle="MacBook Pro M2 Repair Dubai - 13&quot;, 14&quot; &amp; 16&quot; All M2 Models | AED 200"
      seoDescription="MacBook Pro M2 repair Dubai. All variants: 13&quot; M2 (A2338), 14&quot; M2 Pro/Max (A2779), 16&quot; M2 Pro/Max (A2780). Same-day service from AED 200. Call 055 741 3706."
      eyebrow="MacBook Pro M2 specialist"
      h1="MacBook Pro M2 Repair Dubai"
      heroDescription="The M2 MacBook Pro (2022–2023) added the 14&quot; and 16&quot; Pro models alongside the updated 13&quot;. We service all five M2 variants with the same same-day turnaround and free diagnosis."
      heroMeta={["All M2 variants", "13&quot; · 14&quot; · 16&quot;", "Screen, battery & logic board"]}
      models={[
        { label: `16" M2 Max`, href: "/macbook-pro-16-m2-pro-2023-repair-dubai", aNum: "A2780" },
        { label: `16" M2 Pro`, href: "/macbook-pro-16-m2-pro-2023-repair-dubai", aNum: "A2780" },
        { label: `14" M2 Max`, href: "/macbook-pro-14-m2-pro-2023-repair-dubai", aNum: "A2779" },
        { label: `14" M2 Pro`, href: "/macbook-pro-14-m2-pro-2023-repair-dubai", aNum: "A2779" },
        { label: `13" M2`, href: "/macbook-pro-13-m2-2022-repair-dubai", aNum: "A2338" },
      ]}
      faqs={[
        { q: "Which M2 MacBook Pro models do you repair?", a: "We repair all M2 variants: 13&quot; M2 (A2338), 14&quot; M2 Pro/Max (A2779), and 16&quot; M2 Pro/Max (A2780)." },
        { q: "How much does MacBook Pro M2 screen repair cost in Dubai?", a: "M2 MacBook Pro screen replacement starts from AED 350 for the 13&quot;, AED 600 for the 14&quot;, and AED 700 for the 16&quot;." },
        { q: "Do you offer a warranty on M2 MacBook Pro repairs?", a: "Yes. Screen and battery replacements carry a 12-month warranty. All other hardware repairs carry a 90-day warranty." },
        { q: "Can you repair a MacBook Pro M2 that won't turn on?", a: "Yes. We diagnose power rail failures, SMC faults, and logic board issues on all M2 MacBook Pro models. Free diagnosis, same-day in most cases." },
      ]}
    />
  );
}
