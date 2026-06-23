"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function IMacIntelRepairHub() {
  const intro = (
    <>
      <p>
        The Intel iMac lineup spans three distinct screen sizes and several chip tiers. The{" "}
        <Link to="/imac-27-intel-2017-repair-dubai">iMac 27-inch 5K Intel 2017 to 2019</Link>{" "}
        runs Core i5, i7, and i9 processors with AMD Radeon Pro graphics, and was the last series
        to be built with user-upgradeable RAM slots. The{" "}
        <Link to="/imac-27-intel-2020-repair-dubai">iMac 27-inch 5K Intel 2020</Link> added a
        nano-texture glass option and was the final 27-inch before Apple Silicon. The 21.5-inch
        models from this era are covered under{" "}
        <Link to="/imac-27-intel-2019-repair-dubai">iMac 27-inch 5K Intel 2019 repair</Link>.
        Finally, the{" "}
        <Link to="/imac-27-pro-2017-repair-dubai">iMac Pro 27-inch 2017</Link> brought Xeon W
        processors and the Space Grey chassis, and remains unique as the only iMac Pro Apple
        ever released.
      </p>
      <p>
        These machines are still worth repairing. The 27-inch 5K Retina panel is one of the
        finest desktop displays ever made, and the 10-core Core i9 configuration handles video
        editing, 3D rendering, and software development without bottleneck. RAM is upgradeable on
        the 27-inch models to 128 GB, which gives them years more life. The single highest-impact
        upgrade is replacing the spinning hard drive with an NVMe SSD: a 2017 iMac that boots in
        45 seconds today can boot in 8 seconds after the upgrade. GPU failure is the most common
        board-level fault on 2017 models. The AMD Radeon Pro 570, 575, and 580 GPUs fitted to the
        27-inch 5K models develop solder micro-fractures under sustained load, causing artefacts,
        kernel panics, and eventually no video output. The 21.5-inch 4K models used the lower-power
        Radeon Pro 555, 560, and 560X. Component-level GPU rework costs
        significantly less than a full logic board replacement and has a high success rate. PSU
        failure is the second most common fault, typically seen as a machine that powers on briefly
        then shuts off, or does not power on at all.
      </p>
    </>
  );

  return (
    <SubServicePageTemplate
      seoTitle="iMac Intel Repair Dubai - 21.5-inch & 27-inch 5K 2017-2020"
      seoDescription="iMac Intel repair Dubai. 21.5-inch Retina 4K (2017-2019), 27-inch 5K Retina (2017-2020), iMac Pro 27-inch (2017). Screen, logic board, PSU, GPU, SSD upgrade. From AED 300. Call 055 741 3706."
      path="/imac-intel-repair-dubai"
      eyebrow="Intel Core i5/i7/i9 · 2017-2020 · Dubai Media City"
      h1="iMac Intel Repair Dubai - 21.5-inch & 27-inch 5K"
      subtitle="The last Intel iMacs - 21.5-inch Retina 4K and 27-inch 5K Retina - are still powerful machines worth repairing. Screen from AED 850, logic board from AED 1,200, PSU from AED 600. GPU failure is the most common board-level fault."
      startingPrice={300}
      timeline="Same day (thermal) · 2-3 days (screen) · 5-10 days (logic board)"
      whatsappPrefill="Hi, I have an iMac Intel and need help with:"
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "iMac Repair", path: "/imac-repair-dubai" },
        { name: "iMac Intel Repair", path: "/imac-intel-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 12, specialisation: "iMac and Mac desktop lead technician" }}
      serviceName="iMac Intel Repair Dubai"
      intro={intro}
      whatWeFix={[
        "Screen repair and replacement - 5K 27-inch and 4K 21.5-inch panels from AED 850 to AED 1,200",
        "Logic board repair - component-level from AED 1,200",
        "PSU (power supply unit) replacement - from AED 600",
        "GPU failure - AMD Radeon Pro 570/575/580 rework on 2017 27-inch models",
        "HDD to NVMe SSD upgrade - from AED 500, dramatically improves boot speed",
        "RAM upgrade - 16 GB to 128 GB on 27-inch models",
        "Fan and thermal paste service - from AED 300",
        "macOS reinstall and data migration",
      ]}
      steps={[
        {
          title: "Free diagnosis",
          body: "We inspect the iMac at no charge. For GPU faults we run a stress test to confirm; for PSU faults we measure voltages on each rail. You receive a written quote before any work begins.",
        },
        {
          title: "Component repair or replacement",
          body: "Screen swaps and PSU replacements are completed in 2 to 3 days. GPU rework requires specialised BGA reflow equipment and takes 5 to 10 days. SSD upgrades are same-day. We use quality-graded panels with colour calibration to match the 5K Retina standard.",
        },
        {
          title: "Final quality test and cleanup",
          body: "Every iMac leaves fully tested: display calibration, thermal sensor check, SSD benchmark, and a full boot cycle. We wipe the chassis and return the machine in better condition than we received it.",
        },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Up to 12 months on most hardware repairs (keyboard, ports, hinge, fan, speaker, SSD/RAM).",
        "3 months on screen and battery replacements.",
        "15 days on logic-board, liquid-damage, software and data-recovery work.",
        "Free re-diagnosis if the same fault recurs within the warranty period.",
      ]}
      faqs={[
        {
          q: "Is my Intel iMac worth repairing?",
          a: "Yes, in most cases. If the display and chassis are in good condition, a logic board repair or SSD upgrade extends the machine's useful life by several years at a fraction of replacement cost. The 27-inch 5K panel alone would cost over AED 2,000 as a standalone purchase. We will tell you honestly if the repair cost exceeds the machine's value.",
        },
        {
          q: "How long do iMac Intel repairs take?",
          a: "Thermal service and SSD upgrades are same-day. Screen replacements take 2 to 3 days. Logic board and GPU repairs take 5 to 10 days because component-level rework requires careful preparation and cure time. We provide a realistic timeline at the diagnosis stage.",
        },
        {
          q: "What is the GPU failure symptom on a 2017 iMac?",
          a: "Early symptoms are graphical artefacts (coloured blocks or lines during GPU-intensive tasks) and unexpected restarts under load. As the fault progresses, the machine may boot to a corrupted or pink screen, then eventually fail to produce any video output. The AMD Radeon Pro 570/575/580 fitted to the 2017 27-inch 5K models are particularly prone to this due to lead-free solder micro-cracking under heat cycling.",
        },
        {
          q: "Can I upgrade the RAM on my Intel iMac?",
          a: "Yes - on 27-inch iMac models from 2017 to 2020 there is a user-accessible RAM door at the back. These machines support up to 128 GB of DDR4 SO-DIMM. The 21.5-inch models have RAM soldered to the logic board and cannot be upgraded. We supply and fit RAM at competitive prices.",
        },
      ]}
      reviewNames={["Marianne Chehade El Dfouni", "Ali Hassan"]}
      related={[
        {
          label: "iMac Screen Repair Dubai",
          href: "/imac-screen-repair-dubai",
          description: "Bonded display repair for all iMac models.",
        },
        {
          label: "iMac Logic Board Repair Dubai",
          href: "/imac-logic-board-repair-dubai",
          description: "Component-level board repair from AED 1,200.",
        },
        {
          label: "iMac SSD Upgrade Dubai",
          href: "/imac-ssd-upgrade-dubai",
          description: "HDD to SSD speed upgrade, same day.",
        },
      ]}
      blogLink={{ label: "iMac No Display or Black Screen in Dubai? 6 Fixes", href: "/blog/imac-no-display-black-screen-dubai" }}
    />
  );
}
