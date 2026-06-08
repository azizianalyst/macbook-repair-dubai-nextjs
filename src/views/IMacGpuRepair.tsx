"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IMacGpuRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iMac GPU Repair Dubai - Discrete AMD Radeon Pro Fix | 055 741 3706"
      seoDescription="iMac 27-inch GPU repair Dubai. AMD Radeon Pro failure - artifacts, lines, no display. Reflow vs replacement assessed honestly. From AED 800. 3-5 days."
      path="/imac-gpu-repair-dubai"
      eyebrow="iMac GPU repair"
      h1="iMac GPU Repair Dubai - Discrete AMD Radeon Pro Fix"
      subtitle="27-inch iMacs with discrete AMD Radeon Pro graphics suffer from a known GPU failure pattern - coloured lines, artifacts, banding, or 'no display' that fools owners into thinking the screen has died. We diagnose honestly: reflow if it's a fit, full GPU replacement if not."
      startingPrice={800}
      timeline="3-5 days"
      whatsappPrefill="Hi, my iMac has display artifacts / lines / no display - model and year:"
      breadcrumb={[
        { name: "Home",                path: "/" },
        { name: "iMac Repair",         path: "/imac-screen-repair-dubai" },
        { name: "GPU Repair",          path: "/imac-gpu-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "iMac board-level and GPU repair" }}
      serviceName="iMac GPU Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>If your 27" iMac is showing coloured lines, banding, square artifacts, or refuses to display anything at all (but the fan and chime work) - the cause is usually the discrete AMD Radeon Pro GPU on the logic board.</strong> Apple soldered these GPUs directly to the board and they have a known failure rate, especially on heavily-used 2015 and 2017 iMacs.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            We approach GPU repair honestly. Some failures are recoverable with a professional reflow on our infrared rework station - usually buying 6-18 months of life. Others need full GPU chip replacement, which is significantly more involved and expensive. Some are simply uneconomic to fix and the right answer is to redirect you to a Mac Studio or used 24" iMac instead. We assess for free, quote in writing, and never start work you don't approve.
          </p>
        </>
      }
      whatWeFix={[
        "Vertical or horizontal coloured lines across display",
        "Square or block-pattern artifacts",
        "Display works on external monitor but iMac screen dead",
        "Random GPU-driven kernel panics under Final Cut / games",
        "iMac 27-inch 2015 / 2017 / 2019 with Radeon Pro 575 / 580 / 5300 / 5500",
        "Honest 'don't fix this' advice when the economics don't work",
      ]}
      steps={[
        { title: "Free GPU diagnostic",         body: "We confirm the fault is GPU (not display, not cable, not main logic): test on external monitor, swap in a known-good display, run thermal imaging on the GPU under load." },
        { title: "Reflow or replace decision",   body: "Cracked solder joints under the GPU package can sometimes be re-flowed. Worn-out silicon needs a chip swap. We tell you honestly which yours needs and what each costs." },
        { title: "Infrared rework",              body: "If reflow is appropriate, we use a controlled IR profile to re-flow the BGA joints. Followed by 24-hour stress test before reassembly." },
        { title: "Full chip replacement",        body: "If the silicon itself has failed, we de-solder the old GPU and re-ball with a tested replacement chip. Specialist work - done in-house, not outsourced." },
        { title: "Display refit and verify",     body: "Display reassembled with fresh adhesive, GPU stress-tested in Final Cut and 3D benchmarks for 24 hours before you collect." },
      ]}
      warrantyDays={180}
      warrantyBullets={[
        "6-month warranty on GPU replacement work.",
        "90-day warranty on reflow work (honest about its shorter life).",
        "Free re-attempt if reflow fails inside warranty - we'll move you to full replacement at the difference in price only.",
      ]}
      faqs={[
        { q: "Will reflow really fix it permanently?", a: "Sometimes for years, sometimes for months. The truthful answer: reflow buys you time and is usually 60-80% of the cost of full replacement. We'll tell you which option suits your iMac and your budget - and we won't pretend reflow is permanent when it isn't." },
        { q: "How do I know it's the GPU and not the display?", a: "Plug an external monitor into the iMac via Thunderbolt. If the external display shows artifacts too, the GPU is the cause. If the external is clean, the iMac display or its cable is the issue. Free diagnostic if you're unsure." },
        { q: "Is this worth fixing on a 2015 iMac?", a: "Honest answer: usually no. A 2015 iMac is at end-of-software-support and a GPU repair costs a meaningful chunk of a used Mac mini M2's price. We'll tell you that face to face. Worth fixing on 2017-2020 27-inch models with otherwise good condition." },
        { q: "Can you fix the GPU on a 24-inch M1/M2/M3/M4 iMac?", a: "GPU is integrated into the M-series chip - same chip as CPU. Failure of GPU = failure of whole chip = full logic board replacement, which costs more than the iMac is worth. We'll tell you up front." },
        { q: "Why does this take 3-5 days?", a: "Diagnostic, reflow or chip work, 24-hour stress test, reassembly with adhesive cure. Rushing this work is how the fault comes back in a month. We don't rush GPU work." },
        { q: "What about a 4-day-a-week home visit option?", a: "For diagnosis yes - we can come and confirm GPU vs display in your home so you don't transport a heavy iMac for nothing. The actual repair has to come to the bench." },
      ]}
      reviewNames={["Marianne Chehade El Dfouni", "Ali Hassan", "Binod Shrestha"]}
      related={[
        { label: "iMac Logic Board Repair", href: "/imac-logic-board-repair-dubai", description: "GPU is part of the logic board - wider board services here." },
        { label: "iMac Screen Repair",      href: "/imac-screen-repair-dubai",      description: "If diagnostic shows it's the display, not the GPU." },
        { label: "iMac Full Diagnostic",    href: "/imac-full-diagnostic-dubai",    description: "Free check first - confirm the fault is GPU." },
      ]}
      blogLink={{ label: "iMac Radeon Pro failure - symptoms, causes and what's fixable", href: "/blog/imac-not-turning-on-power-supply-issues" }}
    />
  );
}
