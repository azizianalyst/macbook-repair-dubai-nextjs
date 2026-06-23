"use client";
import MacBookAirGenerationPage from "@/components/blocks/MacBookAirGenerationPage";

export default function MacBookAirIntelRepair() {
  return (
    <MacBookAirGenerationPage
      path="/macbook-air-intel-repair-dubai"
      chip="Intel"
      years="2017 – 2020"
      seoTitle="MacBook Air Intel Repair Dubai: 2017 to 2020 Screen, Battery & Board"
      seoDescription="MacBook Air Intel repair Dubai. 2017 to 2020 models (A1466, A1932, A2179). Screen from AED 500, battery from AED 450. Free diagnosis, same-day service."
      eyebrow="MacBook Air Intel specialist · Dubai Media City · 2017 to 2020 models"
      h1="MacBook Air Intel Repair Dubai"
      heroDescription="MacBook Air Intel covers four generations: the 2017 fanless redesign (A1466), the 2018 Retina display debut (A1932), the 2019 update, and the 2020 model (A2179) with scissor keyboard. We repair all four at our Media City workshop: butterfly keyboard cleaning, battery replacement, screen repair, and board-level faults."
      heroMeta={[
        "Screen from AED 500",
        "Battery from AED 450",
        "Free diagnosis",
        "Same-day most repairs",
      ]}
      models={[
        { label: '13" MacBook Air Intel 2020', href: "/macbook-air-13-intel-2020-repair-dubai", aNum: "A2179" },
        { label: '13" MacBook Air Intel 2019', href: "/macbook-air-13-intel-2019-repair-dubai", aNum: "A1932" },
        { label: '13" MacBook Air Intel 2018', href: "/macbook-air-13-intel-2018-repair-dubai", aNum: "A1932" },
      ]}
      faqs={[
        {
          q: "How much does MacBook Air Intel screen repair cost in Dubai?",
          a: "MacBook Air Intel screen replacement costs AED 500 for 2018-2020 models (A1932, A2179) at our workshop, versus AED 899 at Apple. The 2017 model (A1466) screen costs AED 450. All OEM-grade panels. Same-day service available for stock models.",
        },
        {
          q: "MacBook Air Intel butterfly keyboard not working in Dubai, what to do?",
          a: "The 2018 and 2019 Intel MacBook Air (A1932) uses the 4th-generation butterfly keyboard, which Apple replaced for free under its repair programme (now ended). We clean butterfly keyboards for AED 200 (blowing compressed air at 45 degrees, not straight down). If cleaning fails, top-case replacement costs AED 900. Dubai desert dust is particularly damaging to butterfly mechanisms.",
        },
        {
          q: "Is it worth repairing a 2018 or 2019 MacBook Air Intel?",
          a: "For battery and screen yes, the cost is low and the machine still runs macOS Ventura well for everyday tasks. For butterfly keyboard, weigh AED 900 top-case replacement against a used M1 Air (AED 2,500-3,000). For board repair on a 2017 model, we give a free estimate and honest advice on value vs cost.",
        },
        {
          q: "MacBook Air Intel 2020 (A2179) USB-C charging not working?",
          a: "MacBook Air 2020 (A2179) uses USB-C only, dropping MagSafe. Both ports charge. If neither works: test with a different 30W+ USB-C adapter, clean the ports, do an SMC reset (Ctrl+Option+Shift+Power 7 sec). If still not charging, it is the charging IC or USB-C board. Repair from AED 350.",
        },
        {
          q: "How long does MacBook Air Intel battery last in Dubai?",
          a: "MacBook Air Intel 2020 is rated 11 hours. In Dubai conditions (35°C ambient, max brightness from glare), real-world is 6-7 hours on a new battery. After 500 cycles or 3-4 years in Dubai heat, capacity drops to 60-70% and runtime falls to 3-4 hours. Battery replacement restores full 11-hour capability.",
        },
        {
          q: "Can MacBook Air Intel T2 chip be repaired?",
          a: "MacBook Air 2020 Intel (A2179) does not have a T2 chip (that is MacBook Pro 2018-2020 and MacBook Air 2018-2019). The A2179 has an embedded T2-like security chip integrated differently. Board-level repair for the 2018-2019 A1932 T2 chip faults is possible at component level. Free diagnosis at our workshop.",
        },
      ]}
    />
  );
}
