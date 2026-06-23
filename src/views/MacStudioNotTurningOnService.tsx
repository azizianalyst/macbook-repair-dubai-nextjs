"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacStudioNotTurningOnService() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac Studio Not Turning On Dubai? Dead Mac Studio Fixed - From AED 600"
      seoDescription="Mac Studio not turning on in Dubai? LED ring off, no fan, fans spin and stop. Power supply, SMC, board fault. All M1/M2/M3/M4 models. Free diagnosis. From AED 600. Call 055 741 3706."
      path="/mac-studio-not-turning-on-dubai"
      eyebrow="Mac Studio · All Models · No Power Fix"
      h1="Mac Studio Not Turning On Dubai?"
      subtitle="LED ring not lighting. Fan spins then stops. Dead on power button press. We diagnose and fix all Mac Studio no-power faults across M1, M2, M3, and M4 models. Free diagnosis. From AED 600."
      startingPrice={600}
      timeline="Same day (SMC/diagnosis) · 3-7 days (board repair)"
      whatsappPrefill="Hi, my Mac Studio is not turning on. Model:"
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Mac Studio Repair", path: "/mac-studio-repair-dubai" },
        { name: "Mac Studio Not Turning On", path: "/mac-studio-not-turning-on-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Mac mini and Mac Studio upgrades and repair" }}
      serviceName="Mac Studio Not Turning On Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            When a Mac Studio will not turn on, the first thing to check is the LED ring on the front panel. If the ring is completely dark, the machine is receiving no power at all - or the power is failing before the boot process begins. If the ring lights briefly then goes out, or fans spin for a second and stop, the machine is attempting to start but hitting a fault before it can complete POST (Power-On Self Test).
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            Unlike the Mac mini, the Mac Studio has its internal power supply built into the chassis - there is no external power brick. Power enters directly via the IEC C14 (3-pin grounded) port on the rear. The most common causes of a Mac Studio not turning on are: a faulty power cable or socket (always try a different outlet and cable first), an SMC or firmware fault that prevents the M-chip from initialising, internal power board failure, or a logic board fault. SMC resets on M-chip Mac Studios work differently from Intel machines - there is no physical reset procedure; instead, the chip resets automatically after a 30-second power disconnection.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            We cover all Mac Studio models - M1 Max, M1 Ultra, M2 Max, M2 Ultra, M3 Ultra, and M4 Max. Free diagnosis always. Do not attempt to open the Mac Studio yourself - the chassis requires a specific procedure and the internal power capacitors can hold charge for several minutes after disconnection.
          </p>
        </>
      }
      whatWeFix={[
        "LED ring not lighting - complete no-power diagnosis",
        "Fans spin and stop - POST failure, power fault diagnosis",
        "SMC firmware - M-chip SMC reset and re-initialisation",
        "Internal power board repair or replacement",
        "Board-level power fault - fuse, MOSFET, power rail diagnosis",
        "Full diagnostic - Apple Diagnostics, hardware scan",
      ]}
      steps={[
        { title: "Free diagnosis", body: "We confirm the exact model by serial number and perform a full power-path trace. LED ring behaviour, fan spin pattern, and board voltage readings all guide the diagnosis. No charge." },
        { title: "Clear quote", body: "We identify the fault - SMC, power board, or logic board level - and give you the cost and timeline before any work starts. You approve it or take the machine back, no fee." },
        { title: "Repair and test", body: "Power board or logic board work completed in our Dubai Media City workshop. Multiple full boot and stress cycles before collection to confirm the fix is stable." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "90-day written warranty on all repairs.",
        "Covers the part and the workmanship - not accidental damage.",
        "Free re-diagnosis if the same fault recurs within warranty.",
      ]}
      faqs={[
        { q: "Mac Studio LED ring not lighting at all - what does this mean?", a: "A completely dark LED ring means the machine is receiving no power, or the power stage is failing before anything can initialise. First check the power cable and try a different wall outlet. If the ring stays dark with a known-good cable and socket, the internal power board or the logic board power stage has failed and needs a workshop diagnosis." },
        { q: "Is it the power supply or the logic board?", a: "The Mac Studio integrates its power supply onto a dedicated board inside the chassis, separate from the main logic board. We measure voltage at key test points to determine which board is failing. Power board faults (typically around AED 600 to 800 to repair) are more common and cheaper than full logic board faults (from AED 1,000). Diagnosis will tell you which it is before you commit to repair." },
        { q: "Do Mac Studios have an external power brick?", a: "No. All Mac Studio models from M1 through M4 Max use an internal power supply - power enters through a standard IEC C14 (3-pin grounded) connector on the rear of the machine. There is no external brick to replace. This means power supply faults require opening the machine to access the internal board." },
        { q: "SMC reset on Mac Studio - how does it work?", a: "On M-chip Mac Studios (all current models), there is no physical SMC reset button or key combination. The SMC resets automatically when you disconnect power completely for 30 seconds. Unplug the power cable, wait 30 seconds, then reconnect and press the power button. If the machine still will not start after this, the fault is hardware-level and needs a workshop diagnosis." },
      ]}
      reviewNames={["Marianne Chehade El Dfouni", "Ali Hassan"]}
      blogLink={{ label: "Mac Studio Not Turning On in Dubai? 6 Fixes 2026", href: "/blog/mac-studio-not-turning-on-dubai" }}
    />
  );
}
