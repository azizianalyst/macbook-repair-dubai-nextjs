"use client";
import MacBookAirGenerationPage from "@/components/blocks/MacBookAirGenerationPage";

export default function MacBookAirM1Repair() {
  return (
    <MacBookAirGenerationPage
      path="/macbook-air-m1-repair-dubai"
      chip="M1"
      years="2020"
      seoTitle="MacBook Air M1 Repair Dubai: Screen, Battery & Logic Board Fix"
      seoDescription="MacBook Air M1 (A2337) repair Dubai. Screen, battery & logic board. Free diagnosis, same-day service, free pickup. WhatsApp us for today's price."
      eyebrow="MacBook Air M1 specialist · Dubai Media City · Same-day service"
      h1="MacBook Air M1 Repair Dubai"
      heroDescription="MacBook Air M1 (A2337, late 2020) was Apple's first Apple Silicon laptop. Despite being over 4 years old, it remains fast, fully supported, and worth repairing. We handle screen replacement, battery swelling, charging port repair, and board-level faults for the M1 Air at our Media City workshop."
      heroMeta={[
        "Screen replacement",
        "Battery replacement",
        "Free diagnosis",
        "Same-day most repairs",
      ]}
      models={[
        { label: '13" MacBook Air M1 (2020)', href: "/macbook-air-13-m1-2020-repair-dubai", aNum: "A2337" },
      ]}
      faqs={[
        {
          q: "How much does MacBook Air M1 screen repair cost in Dubai?",
          a: "MacBook Air M1 screen replacement at our workshop costs far less than the Apple Store — message us on WhatsApp for today's exact price on your A2337. The M1 Air uses the same display size as M2 (13-inch, 2560x1600) with 400 nits brightness. Same-day service available.",
        },
        {
          q: "How much does MacBook Air M1 battery replacement cost in Dubai?",
          a: "Message us on WhatsApp for today's exact price on MacBook Air M1 battery replacement. The M1 Air has a 49.9 Wh cell rated for 15 hours of web browsing. Batteries in Dubai often degrade faster due to sustained heat. If capacity is below 80% or cycle count above 800, replacement is recommended.",
        },
        {
          q: "Is MacBook Air M1 still worth repairing in 2026?",
          a: "Yes, for most repairs. The M1 Air will receive macOS updates until at least 2027 and handles everyday tasks, documents, web browsing, video calls, quickly. A screen or battery replacement almost always makes strong financial sense — message us on WhatsApp for the exact price. Board repair is worth assessing: we give a free estimate and tell you honestly if the cost exceeds the machine's value.",
        },
        {
          q: "MacBook Air M1 fan noise: does it have a fan?",
          a: "No. MacBook Air M1 is completely fanless. Any sound you hear is not a fan. It could be: the SSD clicking (rare, degradation), keyboard key clicking, or a loose screw inside the chassis rattling. We diagnose for free. There is no fan to fail or replace.",
        },
        {
          q: "MacBook Air M1 charging port: USB-C or MagSafe?",
          a: "MacBook Air M1 uses USB-C only. There is no MagSafe on the M1 Air (MagSafe returned with M2 in 2022). Both left-side USB-C ports charge the machine. If neither port charges, it is the charging IC or board power rail. Message us on WhatsApp for today's charging-repair price. Free diagnosis first.",
        },
        {
          q: "Can MacBook Air M1 be bricked and recovered?",
          a: "Rarely, but yes. macOS update failures or interrupted firmware updates can cause the M1 Air to enter a non-bootable state. Recovery: connect via USB-C to another Apple Silicon Mac running Apple Configurator 2, enter DFU mode (hold Power + Volume Down 10 sec), and restore. This recovers most brick scenarios without board repair.",
        },
      ]}
    />
  );
}
