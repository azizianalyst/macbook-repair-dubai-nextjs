"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookSystemCrashing() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook System Crashing Repair Dubai - Kernel Panics & Crashes Fixed | AED 200"
      seoDescription="MacBook crashing, kernel panics, or beach balls in Dubai? We diagnose RAM, SSD, logic board faults and fix the root cause. AED 200 diagnosis, same day. Call 055 741 3706."
      path="/macbook-system-crashing-repair-dubai"
      eyebrow="MacBook system crashing repair"
      h1="MacBook System Crashing Repair Dubai"
      subtitle="Kernel panics, random restarts, or spinning beach balls? We find the root cause, failing RAM, SSD, or software and fix it properly. Free diagnosis, same day."
      startingPrice={200}
      timeline="Same day"
      whatsappPrefill="Hi, my MacBook keeps crashing - model and year:"
      breadcrumb={[
        { name: "Home",             path: "/" },
        { name: "MacBook Repair",   path: "/macbook-repair-dubai" },
        { name: "System Crashing",  path: "/macbook-system-crashing-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "MacBook logic board & diagnostics" }}
      serviceName="MacBook System Crashing Repair Dubai"
      reviewNames={["Saeed Alam", "Anatoliy Tarasenko", "Daniel Vyskoc"]}
      intro={
        <p className="text-[18px] leading-relaxed mb-md">
          A <strong>MacBook that keeps crashing</strong> is one of the most disruptive problems, mid-document, mid-call, or mid-render. The culprit is almost always one of three things: failing RAM causing memory errors, a degrading SSD throwing read/write errors under load, or a corrupted macOS install. In rarer cases it's a logic board power-rail fault or overheating. Our diagnostics process isolates the exact cause so you only pay for what actually needs fixing.
        </p>
      }
      whatWeFix={[
        "Kernel panic crashes with restart prompt",
        "Random restarts, no warning, no error message",
        "Spinning beach ball that never resolves",
        "Apps freezing and forcing a hard reboot",
        "Crashes only under load (video export, compiling)",
        "Crashes after macOS update",
        "Intermittent crashes, hard to reproduce",
        "Grey or black screen followed by restart",
      ]}
      steps={[
        { title: "Read the crash logs", body: "Pull kernel panic logs from /Library/Logs/DiagnosticReports, pinpoints RAM, SSD, kernel extension, or driver as the origin in most cases." },
        { title: "Hardware stress test", body: "Run Apple Diagnostics, Memtest86, and CrystalDiskInfo equivalent. Identify failing RAM slots, SSD bad sectors, or thermal throttle." },
        { title: "Target the fix", body: "If RAM: replace the affected module. If SSD: clone, replace, restore. If software: clean reinstall preserving your data. If logic board: component-level repair." },
        { title: "48-hour soak test", body: "Leave the MacBook running stress workloads for 48 hours before return. Zero crashes = confirmed fix." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "90-day warranty on any replaced hardware component.",
        "30-day warranty on software reinstall work.",
        "Free re-diagnosis if the same crash pattern returns.",
      ]}
      faqs={[
        { q: "How do I know if it's RAM or SSD causing crashes?", a: "RAM failures usually produce kernel panics with memory-related error codes (com.apple.kernel). SSD failures show up as filesystem errors or crashes only when reading large files. Our diagnostics tell you within the hour." },
        { q: "Can you fix it without losing my data?", a: "In most cases yes. We clone the drive before any work begins. If the SSD is failing we recover your data first, then replace the drive and restore." },
        { q: "My MacBook only crashes after a macOS update, is that different?", a: "Often yes, a bad kernel extension or incompatible system extension introduced by the update. We can roll back or do a clean install targeting the stable version for your hardware." },
        { q: "How much does MacBook crash repair cost in Dubai?", a: "Diagnosis is AED 200 and is applied toward the repair. Software fixes start at AED 300. RAM replacement from AED 400. SSD replacement from AED 500. Logic board faults are quoted after diagnosis." },
      ]}
    />
  );
}
