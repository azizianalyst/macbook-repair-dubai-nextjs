"use client";
import MacBookAirGenerationPage from "@/components/blocks/MacBookAirGenerationPage";

export default function MacBookAirM5Repair() {
  return (
    <MacBookAirGenerationPage
      path="/macbook-air-m5-repair-dubai"
      chip="M5"
      years="2026"
      seoTitle="MacBook Air M5 Repair Dubai 2026: Screen, Battery & Logic Board"
      seoDescription="MacBook Air M5 repair Dubai. Screen from AED 650, battery from AED 450. Free diagnosis, same-day service, free pickup. 21 years Apple repair experience."
      eyebrow="MacBook Air M5 specialist · Dubai Media City · Same-day service"
      h1="MacBook Air M5 Repair Dubai"
      heroDescription="MacBook Air M5 launched in 2026 with the most power-efficient chip in the Air line, 30-hour rated battery life, and the same fanless aluminium chassis. When something goes wrong, our Media City workshop handles screen, battery, charging, and board repair for both the 13-inch and 15-inch M5 Air."
      heroMeta={[
        "Screen from AED 650",
        "Battery from AED 450",
        "Free diagnosis",
        "Same-day most repairs",
      ]}
      models={[
        { label: '15" MacBook Air M5 (2026)', href: "/macbook-air-15-m5-2026-repair-dubai" },
        { label: '13" MacBook Air M5 (2026)', href: "/macbook-air-13-m5-2026-repair-dubai" },
      ]}
      faqs={[
        {
          q: "How much does MacBook Air M5 screen repair cost in Dubai?",
          a: "MacBook Air M5 screen replacement costs AED 650 for both the 13-inch and 15-inch models at our workshop, versus AED 1,099 at the Apple Store. We use OEM-grade Liquid Retina panels. Same-day service if you drop off before 11am.",
        },
        {
          q: "How much does MacBook Air M5 battery replacement cost in Dubai?",
          a: "MacBook Air M5 battery replacement costs AED 450 for the 13-inch and AED 500 for the 15-inch at our workshop. The M5 Air has a rated 30-hour battery life and a 52.6 Wh cell. We use OEM-grade cells with the same Wh rating. Turnaround is 45-60 minutes.",
        },
        {
          q: "Does MacBook Air M5 overheat in Dubai?",
          a: "The M5 chip is Apple's most power-efficient Air chip yet, with a lower TDP than M4. However, fanless design still means sustained 100% CPU load in Dubai's 35-40°C ambient can cause thermal throttling. Under normal use: documents, web, light video, the M5 Air runs cool. Under heavy sustained load: export, compilation, use Low Power Mode in summer.",
        },
        {
          q: "Can MacBook Air M5 firmware be recovered if it bricks?",
          a: "Yes. M5 MacBook Air uses the same Apple Silicon recovery process as M4 and M3: connect via USB-C to another Mac running Apple Configurator 2, put it into DFU mode (hold Power + Volume Down 10 sec), and restore. This recovers most firmware bricks without board repair.",
        },
        {
          q: "Does MacBook Air M5 support 140W USB-C charging?",
          a: "Yes. MacBook Air M5 supports USB Power Delivery 3.1 at up to 140W via USB-C, enabling faster charging than previous models. The included 35W dual USB-C adapter is adequate for most use. If you want to charge from 0 to 80% quickly, a 140W PD 3.1 adapter (Apple 140W or compatible) does it in under 90 minutes.",
        },
        {
          q: "Is it worth repairing a MacBook Air M5 with a cracked screen?",
          a: "Yes. A cracked MacBook Air M5 screen repair at AED 650 is far cheaper than a new M5 Air starting at AED 4,999. The M5 is also a current model with at least 5-6 years of software support ahead. Board damage and severe liquid damage are the cases where we recommend against repair.",
        },
      ]}
    />
  );
}
