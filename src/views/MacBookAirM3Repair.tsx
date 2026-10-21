"use client";
import MacBookAirGenerationPage from "@/components/blocks/MacBookAirGenerationPage";

export default function MacBookAirM3Repair() {
  return (
    <MacBookAirGenerationPage
      path="/macbook-air-m3-repair-dubai"
      chip="M3"
      years="2024"
      seoTitle="MacBook Air M3 Repair Dubai 2026: Screen, Battery & Logic Board"
      seoDescription="MacBook Air M3 repair Dubai. Screen, battery, keyboard and board-level work. Free diagnosis, same-day service at our Media City workshop. Apple repair since 2004."
      eyebrow="MacBook Air M3 specialist · Dubai Media City · Same-day service"
      h1="MacBook Air M3 Repair Dubai"
      heroDescription="MacBook Air M3 launched in 2024: the first Air to support two external displays simultaneously when the lid is closed. We repair both the 13-inch and 15-inch M3 Air for screen damage, battery degradation, charging issues, and board faults at our Dubai Media City workshop."
      heroMeta={[
        "Screen replacement",
        "Battery replacement",
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
          a: "The 13-inch and 15-inch take different Liquid Retina panels, so they are quoted separately after a free diagnosis. Apple does not publish a Mac screen price (it inspects first), so we quote before any work and you can compare. We use OEM-grade Liquid Retina panels with the same 2560x1600 or 2880x1864 resolution. Same-day service available.",
        },
        {
          q: "How much does MacBook Air M3 battery replacement cost in Dubai?",
          a: "The 13-inch (52.6 Wh) and 15-inch (66.5 Wh) use different cells, each quoted after a free diagnosis, before any work, so you can compare with Apple's quote. We use OEM-grade cells and complete the job in 45-60 minutes. 3-month warranty on the replacement, with an 80% capacity guarantee.",
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
          a: "The MacBook Air M3 is no longer sold new, but it is still a capable, supported machine. A screen or battery repair costs far less than a new MacBook Air M5, which Apple lists from AED 4,599. Unless you specifically need the newer chip, repair is usually the better value.",
        },
      ]}
    />
  );
}
