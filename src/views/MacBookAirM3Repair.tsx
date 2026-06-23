"use client";
import MacBookAirGenerationPage from "@/components/blocks/MacBookAirGenerationPage";

export default function MacBookAirM3Repair() {
  return (
    <MacBookAirGenerationPage
      path="/macbook-air-m3-repair-dubai"
      chip="M3"
      years="2024"
      seoTitle="MacBook Air M3 Repair Dubai 2024: Screen, Battery & Logic Board"
      seoDescription="MacBook Air M3 repair Dubai. Screen from AED 600, battery from AED 450. Free diagnosis, same-day service, free pickup. 21 years Apple repair experience."
      eyebrow="MacBook Air M3 specialist · Dubai Media City · Same-day service"
      h1="MacBook Air M3 Repair Dubai"
      heroDescription="MacBook Air M3 launched in 2024: the first Air to support two external displays simultaneously when the lid is closed. We repair both the 13-inch and 15-inch M3 Air for screen damage, battery degradation, charging issues, and board faults at our Dubai Media City workshop."
      heroMeta={[
        "Screen from AED 600",
        "Battery from AED 450",
        "Free diagnosis",
        "Same-day most repairs",
      ]}
      models={[
        { label: '15" MacBook Air M3 (2024)', href: "/macbook-air-15-m3-2024-repair-dubai" },
        { label: '13" MacBook Air M3 (2024)', href: "/macbook-air-13-m3-2024-repair-dubai" },
      ]}
      faqs={[
        {
          q: "How much does MacBook Air M3 screen repair cost in Dubai?",
          a: "MacBook Air M3 screen replacement costs AED 600 for the 13-inch and AED 700 for the 15-inch at our workshop. Apple Store charges AED 1,099-1,199. We use OEM-grade Liquid Retina panels with the same 2560x1600 or 2880x1864 resolution. Same-day service available.",
        },
        {
          q: "How much does MacBook Air M3 battery replacement cost in Dubai?",
          a: "MacBook Air M3 battery replacement costs AED 450 for the 13-inch (52.6 Wh) and AED 500 for the 15-inch (66.5 Wh). Apple charges AED 899-999. We use OEM-grade cells and complete the job in 45-60 minutes. 12-month warranty on the replacement.",
        },
        {
          q: "MacBook Air M3 not recognising second external display in Dubai?",
          a: "MacBook Air M3 supports two external displays only when the lid is closed. With the lid open, it supports one external display. If your second monitor is not showing after closing the lid, check Display Settings in System Settings and ensure both monitors are detected. If the issue persists, check the USB-C dock firmware. We diagnose display faults for free.",
        },
        {
          q: "Does MacBook Air M3 suffer from display issues?",
          a: "We have seen some MacBook Air M3 units with backlight inconsistency at low brightness levels on the 13-inch (uniform glow issue visible in dark rooms). This is a panel manufacturing variance, not a logic board fault. Screen replacement resolves it. Free diagnosis confirms whether it is panel or board related.",
        },
        {
          q: "How long does MacBook Air M3 repair take in Dubai?",
          a: "Screen replacement: 45-90 minutes. Battery replacement: 45-60 minutes. Top-case (keyboard): 2-3 hours. Board repair: 24-48 hours. Same-day service for screen and battery with morning drop-off.",
        },
        {
          q: "Is MacBook Air M3 worth repairing vs upgrading to M4?",
          a: "MacBook Air M3 is still a current-generation machine and will receive macOS updates until at least 2029. Screen repair at AED 600 or battery at AED 450 costs far less than upgrading to M4 at AED 4,499+. Unless you specifically need the M4's efficiency gains or Sky Blue colour, repair is the better value.",
        },
      ]}
    />
  );
}
