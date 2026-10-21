"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { TEAM } from "@/content/site";

const USMAN = TEAM.find((t) => t.name === "Usman")!;

export default function MacBookFreezingRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Freezing Repair Dubai - Locks Up & Hangs Fixed"
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
      technician={{ name: USMAN.name, years: USMAN.years, specialisation: "Board-level repair and diagnostics" }}
      serviceName="MacBook Freezing Repair Dubai"
      reviewNames={["Saeed Alam", "Anatoliy Tarasenko", "Daniel Vyskoc"]}
      intro={
        <>
        <p className="text-[18px] leading-relaxed mb-md">
          A <strong>MacBook that freezes</strong>: cursor stuck, keyboard dead, only a hard reboot recovers it, disrupts work instantly. Freezing is distinct from crashing: the machine is still powered but completely unresponsive. Common causes are a failing SSD that stalls on a read operation, overheating that triggers a thermal lockout, corrupted system files, or in older Intel models, a GPU fault that hangs the display pipeline. We isolate the exact cause with hardware diagnostics before touching anything.
        </p>
        <p className="text-[16px] leading-relaxed mb-md">
          <strong>MacBook Pro frozen right now?</strong> Press Option-Command-Esc to force quit the stuck
          app. If nothing responds, hold the power key for about 10 seconds until it shuts down, then
          start it again. If it freezes again soon after, start up in Safe Mode to rule out third-party
          software, back up while it lets you, and bring it in for a free diagnosis.
        </p>
        </>
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
        { title: "Reproduce and log", body: "Identify the trigger, cold boot, sleep wake, specific app, load spike. Pull system logs for IOStorage/APFS and GPU-restart entries that point to an SSD or GPU hang." },
        { title: "Hardware diagnostics", body: "Apple Diagnostics, SSD health check, thermal sensor readings. On Intel models, also GPU stress test for graphics-pipeline freezes." },
        { title: "Target the fix", body: "SSD stall: drive replacement where the SSD is removable, board-level repair where it is soldered. Thermal freeze: full thermal service (paste + fan clean). Software hang: clean macOS reinstall. GPU fault: component-level logic board repair." },
        { title: "Soak test", body: "Stress the specific trigger before return. Confirmed freeze-free before it leaves the workshop." },
      ]}
      warrantyDays={15}
      warrantyBullets={[
        "15 days to 2 years on replaced hardware.",
        "15-day warranty on software reinstall.",
        "Free re-diagnosis if the freeze pattern returns.",
      ]}
      faqs={[
        { q: "My MacBook Pro is frozen - how do I unfreeze it?", a: "First check whether the pointer still moves. If it does, one app is hung: open the Apple menu, choose Force Quit and close it. If nothing moves, a forced shut-down is the only way out, and unsaved work is lost. If freezes keep coming back, message us on WhatsApp for a free diagnosis." },
        { q: "Why does my MacBook Pro keep freezing?", a: "Note when it happens. Freezes only when hot or under load point to cooling; freezes on wake or when opening large files often point to the SSD; if it never freezes in Safe Mode, a third-party app or driver is likely. Send us the pattern and your model on WhatsApp." },
        { q: "What's the difference between freezing and crashing?", a: "A crash restarts the machine, you see the 'Your computer restarted because of a problem' screen. A freeze leaves it powered but completely unresponsive. Both need diagnosis but often have different root causes." },
        { q: "My MacBook only freezes on wake from sleep, is that fixable?", a: "Yes. Sleep-wake freezes on Intel MacBooks are often a GPU power-state bug, a failing SSD, or a corrupted sleep image. We address all three systematically." },
        { q: "Can freezing damage my data?", a: "Repeated forced reboots can corrupt the filesystem over time. We run filesystem checks as part of our diagnostics and repair any directory errors found." },
        { q: "How much does MacBook freezing repair cost in Dubai?", a: "Diagnosis is free. From there it depends on the cause: a software fix is the cheapest, then a thermal service, then an SSD replacement, with a logic board GPU repair the most involved. Each is quoted after diagnosis." },
      ]}
    />
  );
}
