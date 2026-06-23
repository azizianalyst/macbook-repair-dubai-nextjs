"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookSafeModeRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Safe Mode Repair Dubai | MacBook Repair Dubai"
      seoDescription="MacBook won't start in safe mode? We run safe mode boot diagnostics in Dubai to isolate software from hardware faults. From AED 150, same day. Free diagnosis."
      path="/macbook-safe-mode-repair-dubai"
      eyebrow="Safe mode diagnostics"
      h1="MacBook Safe Mode Diagnostics and Repair in Dubai"
      subtitle="Crashes, boot loops, a Mac that won't behave. Safe mode strips macOS back to the essentials so we can see what's really wrong, then fix it. Same day, from AED 150, free diagnosis."
      startingPrice={150}
      timeline="Same day"
      whatsappPrefill="Hi, my MacBook is crashing / won't boot properly - model and what happens:"
      breadcrumb={[
        { name: "Home",                 path: "/" },
        { name: "MacBook Repair",       path: "/apple-repair-dubai" },
        { name: "Safe Mode Diagnostics", path: "/macbook-safe-mode-repair-dubai" },
      ]}
      technician={{ name: "Abdul Aziz", years: 21, specialisation: "macOS diagnostics and repair" }}
      serviceName="MacBook Safe Mode Diagnostics and Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            Safe mode boots macOS with only the parts Apple ships and nothing else - no third-party kernel extensions, no startup items, no extra fonts or caches. At <strong>MacBook Repair Dubai</strong> we use it as the first cut on any crashing, looping or unstable Mac, because it tells us in minutes whether the fault sits in software or in the hardware underneath. Diagnosis is free.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            If your Mac runs fine in safe mode, the problem is almost always software, and we clean it up the same day. If it still misbehaves - or won't enter safe mode at all - that points to deeper issues like a failing drive, RAM or a logic-board fault, which we can repair on the bench.
          </p>
        </>
      }
      whatWeFix={[
        "MacBook won't boot into safe mode (stuck on the logo, progress bar or a black screen)",
        "Kernel panics and random crashes back to a grey restart screen",
        "Boot loops - the Mac keeps restarting before it reaches the desktop",
        "macOS slow, freezing or unstable after waking from sleep",
        "Login loop - it logs you in then kicks you straight back to the login screen",
        "Third-party extension or kext conflicts after installing antivirus, VPN or driver software",
        "New crashes, beachballs or won't-start behaviour right after a macOS update",
      ]}
      steps={[
        { title: "WhatsApp or free pickup", body: "Send the model and what you see when it fails. We arrange free pickup across Dubai mainland, or you drop it at Concord Tower, Dubai Media City." },
        { title: "Free safe-mode and hardware check", body: "We boot into safe mode (Intel and Apple Silicon use different methods) and run a hardware pass on the drive, RAM and board. No charge for the diagnosis." },
        { title: "Isolate software from hardware", body: "If it's stable in safe mode, the fault is software - an extension, cache or login item. If it's not, we trace it to the drive, memory or logic board." },
        { title: "Repair, reinstall or clean up", body: "We remove the conflicting software, rebuild caches, reset login items, reinstall macOS where needed, or quote any hardware repair before we touch it." },
        { title: "Same-day return", body: "Most software jobs go back the same day, fully tested through a normal boot and a few sleep-wake cycles, with your data intact." },
      ]}
      warrantyDays={15}
      warrantyBullets={[
        "12 months on the software work we carried out - the same fault won't come back on us.",
        "Your files stay put. Software diagnosis and clean-up don't wipe data.",
        "If safe mode points to hardware, we quote the part in writing before any repair starts.",
      ]}
      faqs={[
        { q: "How much does safe mode diagnosis and repair cost in Dubai?", a: "Software-level safe mode work starts at AED 150, VAT included, with same-day turnaround on most jobs. The diagnosis itself is free - you only pay if we fix something and you approve it first. If safe mode shows the fault is hardware, we quote that part separately before we start. WhatsApp the model to get a number in a few minutes." },
        { q: "What is safe mode and what does it actually do?", a: "Safe mode is a stripped-back way to start macOS. It loads only Apple's own software, skips third-party kernel extensions and startup items, and clears certain system caches on the way up. That gives a clean baseline. If the Mac behaves in safe mode but not normally, something you installed is the cause - which is exactly what we want to know on day one in the workshop." },
        { q: "My Mac won't enter safe mode at all - what does that mean?", a: "A Mac that won't reach safe mode has usually moved past a software problem. We see this with a failing SSD, bad RAM, a corrupt system volume or a logic-board fault. It's not a dead end. We run a full hardware pass on the bench at our Media City workshop, find the failing part, and quote the repair before touching it. Diagnosis stays free." },
        { q: "How do I enter safe mode on an Intel versus an Apple Silicon MacBook?", a: "On Intel Macs you hold Shift right after the startup chime until the login window appears. On Apple Silicon (M1, M2, M3, M4) you shut down, hold the power button until you see startup options, pick your disk, then hold Shift and choose Continue in Safe Mode. We handle both daily in Dubai, so if you're not sure which yours is, send the model on WhatsApp." },
        { q: "Will I lose my data during safe mode diagnosis?", a: "No. Safe mode diagnosis and software clean-up are non-destructive - we're removing conflicting extensions and rebuilding caches, not wiping the drive. Your files, apps and settings stay where they are. If a repair ever needs a full macOS reinstall, we tell you first and back up your data before anything is erased." },
        { q: "Is the diagnosis really free?", a: "Yes. We boot into safe mode, run the hardware checks and tell you what's wrong at no charge. You only pay if you approve a fix, and software work starts at AED 150. There's no fix-no-charge on the diagnostic, so you're never out of pocket just for finding out what's going on with your Mac." },
        { q: "How long does it take to turn around?", a: "Most software faults found through safe mode are sorted the same day at our Dubai workshop - removing a bad kext, clearing caches or resetting login items takes a few hours. A full macOS reinstall is usually same day too. If safe mode uncovers a hardware fault, the timeline depends on the part, and we give you a clear estimate up front." },
        { q: "When does safe mode tell you it's a hardware problem?", a: "When the Mac still crashes, loops or freezes in safe mode, or refuses to enter it, the software has been ruled out. From there we test the SSD for read errors, run a memory check, and inspect the logic board for the usual failure points. Common culprits are a dying drive, faulty RAM or a board fault - all of which we repair in Dubai." },
        { q: "Can a macOS update cause these crashes?", a: "Often, yes. After a major update we see Macs that boot-loop or panic because an old driver, antivirus tool or VPN kext no longer matches the new system. Safe mode skips those, so if the Mac is stable in safe mode after an update, we know exactly what to remove or update. Same-day fix in most cases." },
      ]}
      reviewNames={["David Boulos", "Anatolii Monich", "Daniel Vyskoc"]}
      related={[
        { label: "macOS Reinstall",            href: "/macos-reinstall-dubai",            description: "Clean macOS reinstall when software is past repair. Same day." },
        { label: "MacBook Logic Board Repair", href: "/macbook-logic-board-repair-dubai", description: "Board-level fix when safe mode points to hardware." },
        { label: "MacBook Data Recovery",      href: "/macbook-data-recovery-dubai",      description: "Pull your files off a Mac that won't boot." },
      ]}
      quickAnswer={{
        question: "What does MacBook safe mode repair cost in Dubai and how does it work?",
        answer: "Safe mode diagnosis is free at MacBook Repair Dubai, and software repair starts at AED 150 with same-day turnaround. Safe mode boots macOS with only Apple's own software, so we can tell within minutes whether your crashes, boot loops or instability are software or hardware - then fix the cause. If the Mac won't enter safe mode at all, that points to a drive, RAM or logic-board fault, which we repair on the bench in Dubai Media City.",
      }}
    />
  );
}
