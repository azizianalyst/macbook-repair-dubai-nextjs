"use client";
import MacBookAirGenerationPage from "@/components/blocks/MacBookAirGenerationPage";

export default function MacBookAirM2Repair() {
  return (
    <MacBookAirGenerationPage
      path="/macbook-air-m2-repair-dubai"
      chip="M2"
      years="2022 – 2023"
      seoTitle="MacBook Air M2 Repair Dubai: 13-inch & 15-inch Screen, Battery & Board"
      seoDescription="MacBook Air M2 repair Dubai. 13-inch and 15-inch. Screen from AED 600, battery from AED 450. Free diagnosis, same-day service, free pickup across Dubai."
      eyebrow="MacBook Air M2 specialist · Dubai Media City · Same-day service"
      h1="MacBook Air M2 Repair Dubai"
      heroDescription="MacBook Air M2 introduced in 2022 brought a completely redesigned chassis, MagSafe 3 charging, and the first 15-inch MacBook Air. We repair both the 13-inch M2 (A2681) and 15-inch M2 (A2941) for screen damage, battery swelling, charging port issues, and logic board faults at our Media City workshop."
      heroMeta={[
        "Screen from AED 600",
        "Battery from AED 450",
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
          a: "MacBook Air M2 screen replacement costs AED 600 for the 13-inch (A2681) and AED 700 for the 15-inch (A2941) at our workshop. Apple charges AED 1,099-1,199. We use OEM-grade Liquid Retina panels. The M2 screen is glued to the chassis: removal requires a heat gun and suction tools that damage the machine if done incorrectly. Always professional repair.",
        },
        {
          q: "How much does MacBook Air M2 battery replacement cost in Dubai?",
          a: "MacBook Air M2 battery replacement costs AED 450 for the 13-inch (52.6 Wh) and AED 500 for the 15-inch (66.5 Wh). We have seen M2 batteries swell earlier than expected in Dubai due to sustained 40°C+ temperatures. If the trackpad is lifting or the bottom case bulging, replace the battery immediately.",
        },
        {
          q: "MacBook Air M2 overheating under load in Dubai, is this normal?",
          a: "More common on M2 than M3 or M4. The M2 chip has a higher TDP than M3 in the same fanless chassis. Under sustained CPU load in Dubai's 35°C ambient, throttling to 600 MHz is a known behaviour. For everyday use it is fine. If throttling occurs at idle or on light tasks, there is a board or thermal pad issue. Free diagnosis to confirm.",
        },
        {
          q: "MacBook Air M2 MagSafe 3 port not charging, what to do?",
          a: "MacBook Air M2 has both MagSafe 3 and USB-C charging. First test USB-C charging with a 30W+ adapter. If USB-C charges but MagSafe does not, the MagSafe port or its board connector is at fault. If neither charges, it is the charging IC. MagSafe port replacement: AED 350. Charging IC repair: AED 450-600. Free diagnosis included.",
        },
        {
          q: "Does MacBook Air M2 have a hinge crack problem?",
          a: "We have seen hinge cracking on the 13-inch M2 Air (A2681) where the lid-to-body connection weakens after 1-2 years, particularly if the machine is opened one-handed regularly. The M2 chassis is thinner than M1 and more prone to this. Hinge repair: AED 350-500 depending on severity. Always open the lid with both hands.",
        },
        {
          q: "Is MacBook Air M2 still worth repairing in 2026?",
          a: "Yes. The M2 Air will receive macOS updates until at least 2028 and still handles all daily tasks quickly. Screen repair at AED 600 or battery at AED 450 is far cheaper than replacing with a M4 Air at AED 4,499+. Board repair is case-by-case; we give a free estimate first.",
        },
      ]}
    />
  );
}
