"use client";
import DevicePageTemplate from "@/components/blocks/DevicePageTemplate";

export default function IMacNotTurningOn() {
  return (
    <DevicePageTemplate
      family="imac"
      seoTitle="iMac Not Turning On - Dubai Repair | Free Diagnosis | From AED 400"
      seoDescription="iMac won't turn on? Free diagnosis in Dubai. PSU failures, SMC reset, T2 lockup, fan-only boots, GPU faults. Pickup across the city. From AED 400. Call 055 741 3706."
      path="/imac-not-turning-on-dubai"
      eyebrow="iMac not turning on"
      h1="iMac Not Turning On - Dubai Repair"
      subtitle="From a fan that spins with no chime to a totally dead chassis - we've seen every variant. Free pickup, free diagnosis, honest answer in 24 hours. Fixes from AED 400."
      startingPrice={400}
      timeline="1-3 days"
      whatsappPrefill="Hi, my iMac won't turn on - what happens when I press power:"
      technician={{ name: "Mohammed", years: 14, specialisation: "iMac board-level diagnosis" }}
      serviceName="iMac Not Turning On - Diagnosis & Repair"
      pricingRows={[
        { model: `Diagnosis (any iMac)`,                     price: 0,    timeline: "Same day" },
        { model: `Power supply replacement (27" Intel)`,     price: 520,  timeline: "1 day" },
        { model: `Power supply replacement (21.5" Intel)`,    price: 590,  timeline: "1 day" },
        { model: `SMC / PRAM service + cable reseat`,         price: 460,  timeline: "Same day" },
        { model: `Backup battery + RTC service (Intel)`,       price: 390,  timeline: "Same day" },
        { model: `T2 chip recovery (Intel 2018+)`,              price: 1950, timeline: "3 days" },
        { model: `Logic board work (full repair)`,              price: 1950, timeline: "3 days" },
      ]}
      pricingCaption="Diagnosis is free with no obligation. We confirm the actual fault before quoting the fix."
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            "iMac won't turn on" describes at least eight different faults. Pressing the power button and getting <strong>nothing at all</strong> is different from getting a chime and a black screen, which is different from getting a fan and no chime. The fix - and the price - depend on which one you have.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed mb-md">
            The single most common cause on 2017-2020 27" iMacs is a failed power supply. Apple's PSU module in those years uses a high-voltage capacitor that dries out after 5-7 years of Dubai heat. Symptom: dead silent, no LED on the back. Replacement is AED 520 and takes a day. We see it weekly.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed">
            The second most common is a startup-disk problem: iMac powers on, chimes, then loops on the Apple logo or shows a folder with a question mark. That's not hardware in most cases - APFS corruption, T2 SSD pairing, or a failed firmware update. AED 460 to recover, often same day.
          </p>
        </>
      }
      problems={[
        { title: "Totally dead - no LED, no fan, no chime", body: "Power supply failure (most common on 2017-2020 27\" Intel) or input fuse blown after a surge. PSU replacement AED 520. We test the input rail in 5 minutes." },
        { title: "Fan spins, no chime, black screen", body: "GPU initialisation fault on Intel iMacs, or display handoff fault on M-series. Diagnosed in 1 hour. GPU rework AED 1,950 if Intel; M-series usually needs board work." },
        { title: "Chime, then black screen", body: "Display, backlight or T2 handoff fault. Backlight rework AED 1,040, T2 service AED 1,950, panel swap AED 1,040-1,300 depending on size." },
        { title: "Apple logo loop", body: "APFS file system corruption, failed macOS update, or T2 SSD pairing fault. Recovery in macOS recovery mode, sometimes a full reformat with data preserved. AED 460." },
        { title: `Folder with "?" - startup disk not found`, body: "On Intel iMacs: SSD or fusion drive failure. On T2 Intel: SSD-T2 pairing lost (must be repaired with the original board). Diagnosed and quoted." },
        { title: "Sleeps and won't wake", body: "SMC fault, sleep-image corruption, or display flex issue. SMC reset + diagnostic AED 460; deeper faults priced after diagnosis." },
      ]}
      steps={[
        { title: "WhatsApp what happens", body: "Describe exactly: do you hear a chime? Do fans spin? Is there any LED on the back? We narrow the cause to two or three possibilities before pickup." },
        { title: "Free pickup", body: "Driver collects in soft-padded transport. Free across Dubai mainland, all areas." },
        { title: "Free bench diagnosis", body: "Power-rail probe, PSU output check, T2 status read, startup-disk scan. Done in under an hour. Open quote, no obligation." },
        { title: "Approval", body: "We send a short voice note explaining what's wrong, what the fix costs, and how long it takes. You decide." },
        { title: "Repair", body: "PSU swap, board work, SSD recovery - whichever applies. Same-day for PSU and SMC, 1-3 days for board work." },
        { title: "Free delivery + dated warranty", body: "Back to you in soft-padded transport with a 90-day written warranty card and a description of what was fixed." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers the specific fault we repaired.",
        "Excludes new unrelated failures elsewhere in the iMac.",
        "Free re-diagnosis if the same symptom comes back inside 90 days.",
      ]}
      comparisonRows={[
        ["Diagnosis fee",         "Free, refundable if no work",      "AED 250-400 deposit"],
        ["PSU swap (27\" Intel)", "AED 520 with the part",            "Often quoted board-swap (AED 4,500+)"],
        ["Same-day fixes",        "Yes - PSU and SMC jobs",            "No - minimum 1 week typical"],
        ["Pickup & delivery",     "Free, Dubai mainland",              "Drop-in only"],
        ["T2 SSD preservation",   "Yes - original board paired",       "Often unit-replaced, full restore"],
        ["Warranty",              "90 days written, dated",            "90 days"],
      ]}
      faqs={[
        { q: `What does the LED on the back of my iMac mean?`, a: `Older Intel iMacs (2009-2015) have a small diagnostic LED behind the rear vent. One steady light = power supply alive but no boot signal. No light = PSU or input fuse fault. We use this within 30 seconds of the iMac arriving at the bench.` },
        { q: "Can you fix it the same day?", a: "If it's a power supply, SMC reset, cable reseat or backup battery - yes, same day. Board-level work takes 3 days. We tell you which category your iMac falls into within an hour of arrival." },
        { q: `My 27" iMac (2019) was fine yesterday and today won't turn on. What's the most likely cause?`, a: "Power supply, by a mile. Those PSUs fail at 5-7 years and Dubai heat accelerates it. AED 400 to replace, 1 day turnaround. We have the part in stock." },
        { q: "Will I lose my data?", a: "No, in almost every case. Power supply, SMC, sensor, port - none of those touch the SSD. Even on logic-board work we keep your original SSD paired to your original board. The only exception is a failed SSD itself, where we attempt data recovery first." },
        { q: "What's a T2 chip and why does it complicate things?", a: "T2 is Apple's secure subsystem on 2018+ Intel Macs. It encrypts the SSD with a key that lives on the T2 itself. If we replace the logic board, the T2 changes and the SSD becomes unreadable forever. Our process keeps the original board and only repairs the failed component on it." },
        { q: "Do you charge if you can't fix it?", a: "No. Free diagnosis, free pickup, free delivery if you decide not to proceed. The only thing we ask is a short WhatsApp confirmation either way." },
        { q: `My iMac chimes but the screen stays black. Is this a screen problem?`, a: "Sometimes - backlight failure on 27\" Retina shows exactly this. But it can also be GPU initialisation. Free diagnosis tells you which. Backlight repair AED 800, GPU rework AED 1,500." },
        { q: "Should I try anything before sending it in?", a: "Two things: (1) hard reboot - hold the power button for 10 seconds, release, wait 10, press once. (2) SMC reset on Intel iMacs - unplug, wait 15 seconds, plug back in, then press power. Fixes maybe 5% of cases. If those don't work, send it in." },
      ]}
      reviewNames={["joseph manalili", "Shah nawaz", "Ali Hassan"]}
      relatedSlugs={[
        "/imac-screen-repair-dubai",
        "/imac-logic-board-repair-dubai",
      ]}
    />
  );
}
