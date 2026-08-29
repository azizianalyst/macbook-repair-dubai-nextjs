"use client";
import MacBookAirGenerationPage from "@/components/blocks/MacBookAirGenerationPage";

export default function MacBookAirM2Repair() {
  return (
    <MacBookAirGenerationPage
      path="/macbook-air-m2-repair-dubai"
      chip="M2"
      years="2022 – 2023"
      seoTitle="MacBook Air M2 Repair Dubai: 13-inch & 15-inch Screen, Battery & Board"
      seoDescription="MacBook Air M2 repair Dubai. 13-inch and 15-inch screen, battery and board repairs. Free diagnosis, same-day service, free pickup. Message us for a quote."
      eyebrow="MacBook Air M2 specialist · Dubai Media City · Same-day service"
      h1="MacBook Air M2 Repair Dubai"
      heroDescription="MacBook Air M2 introduced in 2022 brought a completely redesigned chassis, MagSafe 3 charging, and the first 15-inch MacBook Air. We repair both the 13-inch M2 (A2681) and 15-inch M2 (A2941) for screen damage, battery swelling, charging port issues, and logic board faults at our Media City workshop."
      heroMeta={[
        "Screen & battery repairs",
        "Price on request",
        "Free diagnosis",
        "Same-day most repairs",
      ]}
      models={[
        { label: '15" MacBook Air M2 (2023)', href: "/macbook-air-15-m2-2023-repair-dubai", aNum: "A2941" },
        { label: '13" MacBook Air M2 (2022)', href: "/macbook-air-13-m2-2022-repair-dubai", aNum: "A2681" },
      ]}
      faqs={[
        {
          q: "How much does MacBook Air M2 screen repair cost in Dubai?",
          a: "We replace both the 13-inch (A2681) and 15-inch (A2941) M2 Air screens at our workshop, and we come in well below what Apple charges. We use OEM-grade Liquid Retina panels. The M2 screen is glued to the chassis: removal requires a heat gun and suction tools that damage the machine if done incorrectly, so always choose professional repair. Message us on WhatsApp for today's exact price on your model.",
        },
        {
          q: "How much does MacBook Air M2 battery replacement cost in Dubai?",
          a: "We replace both the 13-inch (52.6 Wh) and 15-inch (66.5 Wh) M2 Air batteries. We have seen M2 batteries swell earlier than expected in Dubai due to sustained 40°C+ temperatures. If the trackpad is lifting or the bottom case bulging, replace the battery immediately. Message us on WhatsApp for today's exact price on your model.",
        },
        {
          q: "MacBook Air M2 overheating under load in Dubai, is this normal?",
          a: "More common on M2 than M3 or M4. The M2 chip has a higher TDP than M3 in the same fanless chassis. Under sustained CPU load in Dubai's 35°C ambient, throttling to 600 MHz is a known behaviour. For everyday use it is fine. If throttling occurs at idle or on light tasks, there is a board or thermal pad issue. Free diagnosis to confirm.",
        },
        {
          q: "MacBook Air M2 MagSafe 3 port not charging, what to do?",
          a: "MacBook Air M2 has both MagSafe 3 and USB-C charging. First test USB-C charging with a 30W+ adapter. If USB-C charges but MagSafe does not, the MagSafe port or its board connector is at fault. If neither charges, it is the charging IC. Free diagnosis is included, and we confirm whether it is a MagSafe port or charging IC repair — message us on WhatsApp for the exact price on your model.",
        },
        {
          q: "Does MacBook Air M2 have a hinge crack problem?",
          a: "We have seen hinge cracking on the 13-inch M2 Air (A2681) where the lid-to-body connection weakens after 1-2 years, particularly if the machine is opened one-handed regularly. The M2 chassis is thinner than M1 and more prone to this. Hinge repair pricing depends on severity — message us on WhatsApp for the exact price on your model. Always open the lid with both hands.",
        },
        {
          q: "Is MacBook Air M2 still worth repairing in 2026?",
          a: "Yes. The M2 Air will receive macOS updates until at least 2028 and still handles all daily tasks quickly. A screen or battery repair is far cheaper than replacing it with a brand-new M4 Air. Board repair is case-by-case; we give a free estimate first, so message us on WhatsApp for the exact price on your model.",
        },
      ]}
    />
  );
}
