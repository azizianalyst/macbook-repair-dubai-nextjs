"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookFreezingRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Freezing Repair Dubai - Locks Up & Hangs Fixed | AED 200"
      seoDescription="MacBook freezing or locking up in Dubai? We diagnose hardware and software freeze causes and restore smooth operation. Free diagnosis, same day. Call 055 741 3706."
      path="/macbook-freezing-repair-dubai"
      eyebrow="MacBook freezing repair"
      h1="MacBook Freezing Repair Dubai"
      subtitle="MacBook locking up mid-task, cursor stuck, or trackpad unresponsive? We diagnose and fix the root cause, hardware or software, same day in Dubai."
      startingPrice={200}
      timeline="Same day"
      whatsappPrefill="Hi, my MacBook keeps freezing - model and year:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "MacBook Repair",  path: "/macbook-repair-dubai" },
        { name: "Freezing Repair", path: "/macbook-freezing-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "MacBook diagnostics & logic board repair" }}
      serviceName="MacBook Freezing Repair Dubai"
      reviewNames={["Saeed Alam", "Anatoliy Tarasenko", "Daniel Vyskoc"]}
      intro={
        <p className="text-[18px] leading-relaxed mb-md">
          A <strong>MacBook that freezes</strong>: cursor stuck, keyboard dead, only a hard reboot recovers it, disrupts work instantly. Freezing is distinct from crashing: the machine is still powered but completely unresponsive. Common causes are a failing SSD that stalls on a read operation, overheating that triggers a thermal lockout, corrupted system files, or in older Intel models, a GPU fault that hangs the display pipeline. We isolate the exact cause with hardware diagnostics before touching anything.
        </p>
      }
      whatWeFix={[
        "Complete freeze, cursor stops moving, keyboard dead",
        "Trackpad unresponsive, only hard reboot recovers",
        "Freezing on wake from sleep",
        "Hangs when opening specific apps or large files",
        "Freeze during video playback or gaming",
        "Freezing under load (video export, compilation)",
        "Intermittent freezing, hard to reproduce",
        "Freeze followed by black screen or loud fan",
      ]}
      steps={[
        { title: "Reproduce and log", body: "Identify the trigger, cold boot, sleep wake, specific app, load spike. Pull system logs for EthernetController/IOStorage stalls that indicate SSD or GPU hang." },
        { title: "Hardware diagnostics", body: "Apple Diagnostics, SSD health check, thermal sensor readings. On Intel models, also GPU stress test for graphics-pipeline freezes." },
        { title: "Target the fix", body: "SSD stall: replace drive and restore. Thermal freeze: full thermal service (paste + fan clean). Software hang: clean macOS reinstall. GPU fault: component-level logic board repair." },
        { title: "Soak test", body: "Stress the specific trigger for 2+ hours before return. Confirmed freeze-free before it leaves the workshop." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "90-day warranty on replaced hardware.",
        "30-day warranty on software reinstall.",
        "Free re-diagnosis if the freeze pattern returns.",
      ]}
      faqs={[
        { q: "What's the difference between freezing and crashing?", a: "A crash restarts the machine, you see the 'Your computer restarted because of a problem' screen. A freeze leaves it powered but completely unresponsive. Both need diagnosis but often have different root causes." },
        { q: "My MacBook only freezes on wake from sleep, is that fixable?", a: "Yes, and it's one of the most common patterns. Sleep-wake freezes on Intel MacBooks are often a GPU power-state bug, a failing SSD, or a corrupted sleep image. We address all three systematically." },
        { q: "Can freezing damage my data?", a: "Repeated forced reboots can corrupt the filesystem over time, especially on macOS Ventura and earlier. We run filesystem checks as part of our diagnostics and repair any directory errors found." },
        { q: "How much does MacBook freezing repair cost in Dubai?", a: "Diagnosis is AED 200, applied toward the repair. Software fixes from AED 300. SSD replacement from AED 500. Thermal service AED 300. Logic board GPU repair is quoted after diagnosis." },
      ]}
    />
  );
}
