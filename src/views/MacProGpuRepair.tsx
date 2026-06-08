"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacProGpuRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac Pro GPU Repair Dubai - MPX Modules & W6800X | 055 741 3706"
      seoDescription="Mac Pro 2019 GPU repair Dubai. AMD Radeon Pro W6800X / W5700X / Vega II MPX modules. M2 Ultra integrated GPU limits explained. From AED 1,200. 3-7 days."
      path="/mac-pro-gpu-repair-dubai"
      eyebrow="Mac Pro GPU repair"
      h1="Mac Pro GPU Repair Dubai - MPX Modules"
      subtitle="Mac Pro 2019 Intel uses Apple's MPX module GPU architecture - proprietary cards combining a Radeon Pro GPU with Mac Pro's internal Thunderbolt 3 routing. We diagnose, repair where possible, source replacements where not. M2 Ultra Mac Pro is a different story - the GPU is part of the SoC."
      startingPrice={1200}
      timeline="3-7 days (parts often ordered)"
      whatsappPrefill="Hi, I have a Mac Pro GPU issue - model, year and which GPU module:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "Mac Pro Repair",  path: "/mac-pro-repair-dubai" },
        { name: "GPU Repair",      path: "/mac-pro-gpu-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Mac Pro and high-end Mac repair" }}
      serviceName="Mac Pro GPU Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Mac Pro 2019 Intel is the only modern Mac with truly modular GPUs.</strong> Apple's MPX modules slot into the chassis and combine an AMD Radeon Pro GPU with the internal Thunderbolt 3 routing that feeds the front and rear ports. The cards themselves can be repaired at component level: VRM failures, fan bearings, capacitor leaks, occasionally the GPU silicon itself for reflow.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Honest about the M2 Ultra Mac Pro: there are no MPX slots, no discrete GPU, nothing to swap. The GPU is integrated into the M2 Ultra SoC and shares the same fate as the chip. If GPU performance is the issue, we diagnose for free and tell you whether it's a software cause (driver issue, runaway process) or a hardware issue requiring whole-board replacement. We don't sell repairs that aren't possible.
          </p>
        </>
      }
      whatWeFix={[
        "Mac Pro 2019 - AMD Radeon Pro 580X / W5500X / W5700X / W6800X MPX module faults",
        "Mac Pro 2019 - Vega II and Vega II Duo MPX modules",
        "MPX module fan failure (loud, grinding, or stopped)",
        "GPU artifacts (lines, blocks, banding) on MPX cards",
        "VRM or capacitor failure on the MPX board",
        "Honest M2 Ultra Mac Pro GPU diagnostic (free)",
      ]}
      steps={[
        { title: "Free GPU diagnostic",          body: "We confirm the fault is the GPU module (not display, not software, not Thunderbolt routing): test on different display, run GPU stress test, thermal-image the module under load." },
        { title: "Module out, bench test",        body: "MPX module pulled, tested on our bench rig outside the Mac Pro chassis. Confirms whether the card or the chassis routing is the issue." },
        { title: "Repair or replace decision",    body: "Fan bearing or VRM failure: we repair at component level. GPU silicon failure: usually whole-module replacement, sometimes a careful reflow can recover it. We tell you the honest path and price." },
        { title: "Source genuine MPX or refurb",  body: "Apple MPX modules are scarce. We have refurbished W5700X and W5500X in stock most of the time. W6800X and Vega II Duo are special-order, 5-10 working days." },
        { title: "Install + 24-hour burn-in",     body: "Module fitted, Mac Pro stress-tested under sustained GPU load (Final Cut render or DaVinci Resolve render) for 24 hours before pickup." },
      ]}
      warrantyDays={180}
      warrantyBullets={[
        "6-month warranty on MPX module replacements.",
        "90-day warranty on component-level repairs (fan, VRM, caps).",
        "Honest 'no, we can't' verdict for M2 Ultra GPU faults - free diagnosis only.",
      ]}
      faqs={[
        { q: "How do I know if it's the GPU or the display?", a: "Plug a different display into the Mac Pro. If it shows the same artifacts, the GPU is the cause. If it's clean, the display or its cable is the issue. Free diagnostic if you're unsure." },
        { q: "Can you fix the W6800X Duo?", a: "Yes - we've serviced fan failures and one VRM failure on the W6800X Duo. The Duo's high price means component-level repair is usually the right answer over a whole-card replacement." },
        { q: "Are MPX modules still available from Apple?", a: "Officially no - Apple has retired the supply chain. We source from grey market, refurb specialists and pulled-from-donor modules. Stock varies - we quote per case after checking availability." },
        { q: "What about installing a non-Apple GPU in a Mac Pro 2019?", a: "Standard PCIe GPUs work in PCIe slots but lose internal Thunderbolt routing and Boot Camp video. We'll discuss the trade-offs honestly if you're considering it." },
        { q: "Why does the M2 Ultra Mac Pro have no GPU upgrade option?", a: "Apple's design choice - the M2 Ultra integrates GPU into the SoC. No PCIe GPU support, no MPX. If you bought one and need more GPU, the only options are external eGPU (limited macOS support) or a different Mac." },
        { q: "Is the 3-7 day timeline mostly parts?", a: "Often yes - the actual install and test is one or two days. The bottleneck is sourcing the right MPX module if yours needs replacement. Common modules: 1-2 days. W6800X / Vega Duo: 5-10 days." },
      ]}
      reviewNames={["Marianne Chehade El Dfouni", "Ali Hassan", "Binod Shrestha"]}
      related={[
        { label: "Mac Pro Repair Hub",      href: "/mac-pro-repair-dubai",          description: "All Mac Pro services in one place." },
        { label: "Mac Logic Board Repair",  href: "/mac-logic-board-repair-dubai",  description: "If the chassis itself has board-level issues." },
        { label: "Mac Full Diagnostic",     href: "/mac-full-diagnostic-dubai",     description: "Free check first - confirm the fault is GPU." },
      ]}
      blogLink={{ label: "Mac Pro 2019 MPX modules - what's still serviceable in 2026", href: "/blog/mac-pro-2019-still-worth-it" }}
    />
  );
}
