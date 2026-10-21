"use client";
// MacBook Neo A18 Pro board-level spoke under /macbook-neo-repair-dubai: no power, liquid damage,
// charging faults, data recovery. Facts only from docs/apple-lineup-2026-09-26.md (Apple launch
// dates/price, iFixit teardown findings, Apple UAE AppleCare+ fees, M5 MacBook comparisons).
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function MacBookNeoA18RepairHub() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Neo Logic Board Repair Dubai - No Power & Liquid"
      seoDescription="MacBook Neo A18 Pro logic board repair in Dubai: no power, liquid damage, charging faults and data recovery. Free diagnosis. WhatsApp 055 741 3706."
      path="/macbook-neo-a18-repair-dubai"
      eyebrow="MacBook Neo · A18 Pro logic board · board-level repair"
      h1="MacBook Neo Logic Board Repair in Dubai (A18 Pro)"
      subtitle="Board-level repair for the MacBook Neo's A18 Pro logic board: no power, liquid damage, charging faults and data recovery. Free diagnosis, and an Apple warranty check before any paid work."
      startingPrice={0}
      timeline="Free diagnosis same day · board work quoted after testing"
      whatsappPrefill="Hi, my MacBook Neo (A18 Pro) has a board problem:"
      breadcrumb={[
        { name: "Home",               path: "/" },
        { name: "MacBook Repair",     path: "/macbook-repair-dubai" },
        { name: "MacBook Neo Repair", path: "/macbook-neo-repair-dubai" },
        { name: "Logic Board Repair", path: "/macbook-neo-a18-repair-dubai" },
      ]}
      technician={{ name: "Usman", years: 11, specialisation: "board-level repair on Apple silicon logic boards" }}
      serviceName="MacBook Neo A18 Pro Logic Board Repair Dubai"
      quickAnswer={{
        question: "Can you repair a MacBook Neo logic board in Dubai?",
        answer:
          "Yes. We diagnose and repair MacBook Neo A18 Pro logic boards at component level in Dubai Media City: no power, liquid damage, charging faults and data recovery. The 8GB memory and storage are soldered to the board, so data recovery is board work. Diagnosis is free and we check Apple warranty first.",
      }}
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>The MacBook Neo runs an A18 Pro, an iPhone-class A-series chip, where every other MacBook Apple
            sells today uses an M5-family chip.</strong> For board repair that matters in two ways. First, the logic
            board carries the chip, the 8GB of memory and the storage, all soldered, so a board fault is also a data
            problem. Second, iFixit found that the display, trackpad, battery and Touch ID can be swapped without
            parts-pairing warnings, which lets us test with known-good parts and separate a genuine board fault from a
            peripheral one before you pay for board work. For screens, batteries and keyboards, start at the{" "}
            <Link to="/macbook-neo-repair-dubai" className="text-accent font-semibold hover:underline">MacBook Neo repair</Link>{" "}
            hub.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">Board faults we diagnose on the MacBook Neo</h2>
          <ul className="space-y-2 text-[15px] mb-lg">
            <li>• <strong>No power, no charge:</strong> we check the charger, the cable and the charging path on the
              board before anything is condemned. A dead MacBook is often one failed component, not a dead chip.</li>
            <li>• <strong>Liquid damage:</strong> corrosion keeps spreading while the machine has power, so switch it
              off, do not charge it and bring it in. We clean the board and replace corroded parts; see{" "}
              <Link to="/macbook-water-damage-repair-dubai" className="text-accent underline underline-offset-2 hover:no-underline">MacBook water damage repair</Link>.</li>
            <li>• <strong>Boot loops and restarts:</strong> software is ruled out first with macOS recovery checks, so
              you do not pay for board work that a reinstall would fix.</li>
            <li>• <strong>Port and charging faults:</strong> we separate a damaged port from a board-side fault before
              quoting either.</li>
            <li>• <strong>Data at risk:</strong> because storage is soldered, recovering data means getting the
              original board working again, not moving a drive into another machine.</li>
          </ul>

          <h2 className="text-[24px] md:text-[28px] mb-md">Warranty and AppleCare+ before you pay</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            Apple put the MacBook Neo on sale on 11 March 2026, so most machines are still inside Apple&apos;s
            one-year limited warranty. A board that fails on its own is a manufacturing defect and belongs with Apple;
            we will tell you that after a free serial-number check. Liquid and drop damage are accidental damage, which
            the standard warranty does not cover. With AppleCare+, Apple lists other accidental damage on the Neo at AED 579, excluding VAT.
            Without it, our free diagnosis tells you whether a component-level repair makes sense on a machine that
            Apple lists at AED 2,599 new.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">How the Neo compares with other current MacBooks</h2>
          <p className="text-[15px] leading-relaxed mb-md">
            iFixit scored the MacBook Neo 6 out of 10. For comparison, it scored the 14-inch MacBook Pro M5 4 out of
            10 and described its battery replacement as &quot;absurdly complex&quot;. On the MacBook Air M5, the logic
            board has to come out before the battery can be reached, and its RAM and SSD are soldered too. On the
            Neo, the battery sits in its own tray held by 18 screws.
          </p>
          <p className="text-[15px] leading-relaxed mb-lg">
            What the Neo shares with the MacBook Air M5 is soldered memory and storage, which cannot be upgraded or
            moved. If your data matters, back it up now; if the board has already failed, see{" "}
            <Link to="/macbook-data-recovery-dubai" className="text-accent underline underline-offset-2 hover:no-underline">MacBook data recovery</Link>{" "}
            and message us before anyone else opens the machine.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Turnaround, and when a board cannot be saved</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            Board work takes longer than a part swap. Liquid damage in particular needs cleaning, drying and testing
            in stages, and a fault that looked like one failed component can turn out to be several. We give you a
            realistic time with the written quote and update you on WhatsApp if the picture changes. If the
            diagnosis shows the board is not worth repairing on a machine at the Neo&apos;s price, we say so before
            any paid work, and we tell you plainly whether your data can still be recovered. Board and liquid-damage
            repairs carry a 15-day written warranty.
          </p>
        </>
      }
      whatWeFix={[
        "No power or no charging on the A18 Pro logic board",
        "Liquid damage: board cleaning and corroded component replacement",
        "Boot loops and random restarts (software ruled out first)",
        "Charging-path and port faults",
        "Short circuits after a spill or a faulty charger",
        "Data recovery by repairing the original board",
      ]}
      steps={[
        { title: "Free diagnosis and warranty check", body: "We test the Neo and check Apple warranty and AppleCare+ status. If Apple should cover it, we tell you and charge nothing." },
        { title: "Isolate the fault",                 body: "Known-good display, trackpad and battery let us prove whether the board is really at fault before you pay for board work." },
        { title: "Component-level repair",            body: "Written quote first. Corroded or failed components are replaced on the original board, so your data stays where it is." },
        { title: "Test and return",                   body: "Charging, boot, ports, keyboard, trackpad and battery health checked under load before collection." },
      ]}
      warrantyDays={15}
      warrantyBullets={[
        "15 days on logic-board, liquid-damage and data-recovery work.",
        "Up to 2 years on hardware parts we replace, such as ports.",
        "Free re-diagnosis if the same fault returns within the warranty period.",
        "Written on your invoice.",
      ]}
      faqs={[
        {
          q: "Can you repair a MacBook Neo that won't turn on?",
          a: "Usually, yes. We check the charger, cable and charging path first, then test the board. Because the display, trackpad and battery swap without parts-pairing warnings, we can rule them out with known-good parts. Diagnosis is free, and if the machine is under Apple's warranty we send you to Apple.",
        },
        {
          q: "Is MacBook Neo liquid damage covered by Apple?",
          a: "Not by the standard one-year warranty, which covers manufacturing defects only. With AppleCare+, Apple lists other accidental damage on the MacBook Neo at AED 579, excluding VAT. Without it, switch the machine off, do not charge it, and bring it in for a free board assessment.",
        },
        {
          q: "Can data be recovered from a dead MacBook Neo?",
          a: "Often, but only through the original logic board. The storage is soldered, so there is no drive to move into another computer. We repair the board enough to start it and copy your files. The sooner a liquid-damaged Neo reaches us, the better the odds.",
        },
        {
          q: "Can the MacBook Neo's memory be upgraded?",
          a: "No. iFixit's teardown confirmed the 8GB of RAM is soldered, as is the storage. What you bought is what the machine keeps. If you need more memory or storage, the upgrade is a different Mac, not a repair.",
        },
        {
          q: "Is the A18 Pro harder to repair than an M-series chip?",
          a: "The principles are the same: memory and storage are soldered on the board, so we repair the board rather than swap parts off it. The difference on the Neo is everything around the board, which is more modular than on the M5 MacBook Air or MacBook Pro.",
        },
      ]}
      reviewNames={["Nab", "Janna Nurahmetova"]}
      related={[
        { label: "MacBook Neo Repair Dubai",      href: "/macbook-neo-repair-dubai",           description: "Screen, battery, keyboard and trackpad on the Neo." },
        { label: "MacBook Logic Board Repair",    href: "/macbook-logic-board-repair-dubai",   description: "Component-level board repair on every MacBook." },
        { label: "MacBook Neo Battery Replacement", href: "/macbook-neo-battery-replacement-dubai", description: "18-screw battery tray, no pairing warnings." },
      ]}
      blogLink={{ label: "MacBook Neo: worth buying in 2026?", href: "/blog/macbook-neo-worth-buying-2026" }}
    />
  );
}
