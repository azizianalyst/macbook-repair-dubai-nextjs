"use client";
import MacBookAirGenerationPage from "@/components/blocks/MacBookAirGenerationPage";

export default function MacBookAirM4Repair() {
  return (
    <MacBookAirGenerationPage
      path="/macbook-air-m4-repair-dubai"
      chip="M4"
      years="2025"
      seoTitle="MacBook Air M4 Repair Dubai 2025: Screen, Battery & Logic Board"
      seoDescription="MacBook Air M4 repair Dubai. Screen from AED 600, battery from AED 450. Free diagnosis, same-day service, free pickup. 21 years Apple repair experience."
      eyebrow="MacBook Air M4 specialist · Dubai Media City · Same-day service"
      h1="MacBook Air M4 Repair Dubai"
      heroDescription="MacBook Air M4 launched in 2025 with a redesigned chip, 18-hour battery, and the same fanless wedge chassis in a new Sky Blue colourway. We repair both the 13-inch and 15-inch M4 Air for screen cracks, battery degradation, charging faults, and board-level issues at our Media City workshop."
      heroMeta={[
        "Screen from AED 600",
        "Battery from AED 450",
        "Free diagnosis",
        "Same-day most repairs",
      ]}
      models={[
        { label: '15" MacBook Air M4 (2025)', href: "/macbook-air-15-m4-2025-repair-dubai" },
        { label: '13" MacBook Air M4 (2025)', href: "/macbook-air-13-m4-2025-repair-dubai" },
      ]}
      faqs={[
        {
          q: "How much does MacBook Air M4 screen repair cost in Dubai?",
          a: "MacBook Air M4 screen replacement costs AED 600 for the 13-inch and AED 700 for the 15-inch at our workshop, versus AED 1,099-1,199 at the Apple Store. We use OEM-grade Liquid Retina panels with the same resolution and brightness rating. Same-day service available.",
        },
        {
          q: "How much does MacBook Air M4 battery replacement cost in Dubai?",
          a: "MacBook Air M4 battery replacement costs AED 450 (13-inch) or AED 500 (15-inch) at our workshop, versus AED 899-999 at Apple. The M4 Air 13-inch has a 52.6 Wh cell, 15-inch has 66.5 Wh. Both replaced using OEM-grade cells with the same Wh rating. Turnaround: 45-60 minutes.",
        },
        {
          q: "Does MacBook Air M4 overheat in Dubai summer?",
          a: "The M4 chip is more efficient than M3 but the fanless chassis still relies on the aluminium body to dissipate heat. In Dubai summer with 35-40°C ambient, sustained CPU-heavy tasks (video export, Xcode builds) can trigger thermal throttling. For everyday tasks, documents, web, and Zoom, the M4 Air runs cool even in Dubai. Check Activity Monitor if the chassis feels very hot at idle.",
        },
        {
          q: "Does MacBook Air M4 support the Sky Blue colour repair?",
          a: "Yes, we repair MacBook Air M4 in all colours: Sky Blue, Starlight, Midnight, and Space Grey. Screen replacement and battery replacement are internal repairs. Top-case replacement (keyboard damage) restores the original colour on the exterior. Parts are OEM-grade matched to your original colour.",
        },
        {
          q: "How long does MacBook Air M4 repair take in Dubai?",
          a: "Screen replacement: 45-90 minutes. Battery replacement: 45-60 minutes. Keyboard or top-case: 2-3 hours. Logic board component repair: 24-48 hours. Free diagnosis is always included. Same-day completion for screen and battery if dropped off before 11am.",
        },
        {
          q: "Is it worth repairing MacBook Air M4 after liquid damage?",
          a: "Depends on the damage. For minor spills caught quickly, board cleaning and thermal service (AED 350-450) restores most MacBook Air M4s. For heavy liquid with multiple board faults, we give you an honest assessment. If repair cost exceeds 60% of the machine's value, we'll tell you.",
        },
      ]}
    />
  );
}
