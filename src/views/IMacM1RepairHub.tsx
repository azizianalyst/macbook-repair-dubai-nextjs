"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function IMacM1RepairHub() {
  const intro = (
    <>
      <p>
        iMac M1 (24-inch, 2021) repair in Dubai starts at AED 400, with screen replacement from
        AED 850 and same-day diagnosis. The{" "}
        <Link to="/imac-24-m1-2021-repair-dubai">iMac 24-inch M1 (2021)</Link> was Apple's
        first iMac built on Apple Silicon. The M1 chip replaced the entire Intel logic board and
        discrete GPU with a single system-on-chip, making the 24-inch chassis radically thinner
        at 11.5 mm. It launched in seven colours - blue, green, pink, silver, orange, purple, and
        yellow - and the colour extends to the power cable and Magic accessories.
      </p>
      <p>
        The architecture change has real repair implications. Unlike the Intel 27-inch, neither
        RAM nor SSD is upgradeable after purchase. Everything is unified memory on the M1 die.
        This means a logic board replacement carries higher cost than on Intel models because the
        board contains both the CPU and all storage. The most common faults we see on M1 iMacs
        are display connection issues (a ribbon cable that can loosen over time on a machine that
        is moved or knocked), USB hub board failure (the secondary board that controls the USB
        and Thunderbolt ports on the back), and speaker degradation from Dubai humidity. The
        dual-driver speakers in the 24-inch are high quality but the woofer cones are susceptible
        to corrosion in humid environments, producing a rattling or distorted bass at moderate
        volumes. If your M1 iMac is still within its original one-year warranty or an AppleCare+
        plan, check that first before booking with us.
      </p>
    </>
  );

  return (
    <SubServicePageTemplate
      seoTitle="iMac M1 Repair Dubai - 24-inch 2021 A2438/A2439"
      seoDescription="iMac M1 repair Dubai. 24-inch 7-colour iMac with M1 chip (2021), model A2438/A2439. Screen from AED 850, USB hub board from AED 400. Free diagnosis. Call 055 741 3706."
      path="/imac-m1-repair-dubai"
      eyebrow="Apple M1 · 24-inch · 7 colours · 2021 · first Apple Silicon iMac"
      h1="iMac M1 Repair Dubai - 24-inch 2021"
      subtitle="The first Apple Silicon iMac - 24-inch, 4.5K Retina, available in 7 colours. At 4 to 5 years old, common faults include display cable issues, USB hub board failure, and speaker degradation from Dubai humidity. Screen from AED 850, USB hub board from AED 400."
      startingPrice={400}
      timeline="Same day (diagnosis) · 2-3 days (screen)"
      whatsappPrefill="Hi, I have an iMac M1 (24-inch 2021) and need help with:"
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "iMac Repair", path: "/imac-repair-dubai" },
        { name: "iMac M1 Repair", path: "/imac-m1-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 12, specialisation: "iMac and Mac desktop lead technician" }}
      serviceName="iMac M1 Repair Dubai"
      intro={intro}
      whatWeFix={[
        "Screen and display repair - 4.5K Retina 24-inch from AED 850",
        "USB hub board replacement - controls all rear ports, from AED 400",
        "Speaker replacement - humidity-damaged woofers and tweeters from AED 500",
        "Logic board repair and replacement - from AED 1,000",
        "Power supply board replacement - from AED 600",
        "Full diagnostic - identify faults before committing to repair",
        "Colour-matched display replacement - we source panels that match your chassis colour",
      ]}
      steps={[
        {
          title: "Free diagnosis",
          body: "We inspect the iMac at no charge, testing the display connection, USB hub board, speakers, and logic board. You receive a written quote before any work starts.",
        },
        {
          title: "Component repair or replacement",
          body: "USB hub board and speaker replacements are typically completed in 1 to 2 days. Screen repairs take 2 to 3 days to source a colour-matched panel. Logic board repairs are assessed case by case.",
        },
        {
          title: "Final quality test and cleanup",
          body: "All ports are tested, audio output verified across the frequency range, and the display checked for dead pixels and colour accuracy. We return the iMac clean and fully functional.",
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
          q: "Is the iMac M1 still worth repairing in 2026?",
          a: "Yes. The M1 chip is capable and still runs the latest macOS. A display or USB hub board repair makes economic sense versus replacing the machine, which would cost AED 4,000 to 6,000 new. Logic board replacement is a larger investment but still worthwhile for the 16 GB RAM configurations.",
        },
        {
          q: "Can the SSD or RAM be upgraded in an iMac M1?",
          a: "No. Both are unified memory soldered directly to the M1 chip die. There is no upgrade path once purchased. This makes choosing the right configuration at purchase important. If your current machine is too slow, a RAM upgrade is not possible - but we can diagnose whether the slowdown is software-related first.",
        },
        {
          q: "What is USB hub board failure on the iMac M1?",
          a: "The M1 iMac has a secondary PCB that hosts the rear Thunderbolt / USB 4 and USB 3 (USB-C) ports. When this board fails, some or all rear ports stop working. The board is a discrete component separate from the main logic board and can be replaced without touching the M1 SoC. Cost is from AED 400.",
        },
        {
          q: "How long does iMac M1 screen repair take?",
          a: "Screen replacements on the M1 iMac take 2 to 3 days. The 4.5K Retina panel must be colour-matched to the chassis colour - blue, green, or silver panels, for example, have a slightly different bezel treatment. We confirm parts availability before booking your repair.",
        },
      ]}
      reviewNames={["David Chen", "Sarah Johnson"]}
      related={[
        {
          label: "iMac Screen Repair Dubai",
          href: "/imac-screen-repair-dubai",
          description: "4.5K Retina display repair for all iMac sizes.",
        },
        {
          label: "iMac Logic Board Repair Dubai",
          href: "/imac-logic-board-repair-dubai",
          description: "Component-level board diagnosis and repair.",
        },
        {
          label: "iMac Power Supply Repair Dubai",
          href: "/imac-power-supply-repair-dubai",
          description: "PSU replacement - machine not turning on.",
        },
      ]}
      blogLink={{ label: "iMac Screen Repair Cost Dubai 2026", href: "/blog/imac-screen-repair-cost-dubai" }}
    />
  );
}
