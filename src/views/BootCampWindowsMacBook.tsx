"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function BootCampWindowsMacBook() {
  return (
    <SubServicePageTemplate
      seoTitle="Boot Camp Windows on MacBook Dubai - Intel Macs AED 400 · Parallels M-Series AED 600"
      seoDescription="Boot Camp Windows install Dubai. Intel Macs only - Apple Silicon needs Parallels or VMware Fusion. AED 400 Intel · AED 600 Parallels M-series. Same day."
      path="/boot-camp-windows-macbook-dubai"
      eyebrow="Boot Camp / Windows on Mac"
      h1="Boot Camp Windows Setup on MacBook Dubai"
      subtitle="Native Windows on Intel Macs via Boot Camp, or Parallels / VMware on Apple Silicon. We pick the right path for your hardware and install it properly. From AED 400."
      startingPrice={400}
      timeline="Same day"
      whatsappPrefill="Hi, I want to run Windows on my Mac - model and year:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "MacBook Repair",  path: "/" },
        { name: "Boot Camp Setup", path: "/boot-camp-windows-macbook-dubai" },
      ]}
      technician={{ name: "Shafeeq", years: 12, specialisation: "Mac OS / Windows dual-boot & virtualisation" }}
      serviceName="Boot Camp / Windows on Mac Setup"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Boot Camp Windows on MacBook in Dubai</strong> means two very different services depending on your hardware. <strong>Intel Macs</strong> (any MacBook from 2013 to early 2020) use Apple's Boot Camp Assistant for native dual-boot - full Windows 10 or 11 with native performance, AED 400 including driver setup. <strong>Apple Silicon Macs</strong> (M1 onwards) cannot run Boot Camp at all - Apple removed it. Your only path is virtualisation: Parallels Desktop or VMware Fusion running Windows 11 ARM. AED 600, includes Parallels licence guidance.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Honest framing: on Apple Silicon you get Windows for ARM (not Intel Windows). Most x86 apps run via emulation but with a performance hit. Office, browsers, AutoCAD LT, Visual Studio - all fine. Heavy Adobe + games less so. We discuss your actual workload before recommending.
          </p>
        </>
      }
      whatWeFix={[
        "Boot Camp install on Intel MacBook (2013-2020)",
        "Windows 10 / 11 ISO download and partition setup",
        "Apple driver pack install (trackpad, keyboard, Wi-Fi, sound)",
        "Parallels Desktop install on Apple Silicon (M1/M2/M3/M4/M5)",
        "VMware Fusion install on Apple Silicon (free for personal)",
        "Windows 11 ARM ISO setup with TPM and Secure Boot",
        "Office / Visual Studio / engineering apps install",
        "Performance tuning for the chosen path",
      ]}
      steps={[
        { title: "Confirm hardware path", body: "Intel = Boot Camp. Apple Silicon = Parallels or VMware Fusion. We tell you which and why." },
        { title: "Backup", body: "Time Machine before partitioning anything. Mandatory safety step on Boot Camp installs." },
        { title: "Install", body: "Boot Camp Assistant on Intel; Parallels / VMware on Apple Silicon. Windows ISO downloaded direct from Microsoft." },
        { title: "Drivers + workload check", body: "Apple driver pack on Intel. Performance tune on virtualisation path. Verify your specific apps run." },
      ]}
      warrantyDays={15}
      warrantyBullets={[
        "Covers the install and initial driver / virtualisation setup.",
        "Excludes future Windows updates breaking things.",
        "Free fix within 30 days if the install itself fails.",
      ]}
      faqs={[
        { q: "Can my M3 MacBook Pro run Boot Camp?", a: "No. Apple removed Boot Camp from Apple Silicon. Your options are Parallels Desktop (paid, polished) or VMware Fusion (free for personal use, almost as good). Both run Windows 11 ARM. Most x86 Windows apps work via the built-in emulation - slower than native but functional." },
        { q: "What's the difference between Parallels and VMware Fusion?", a: "Parallels is more polished and integrates better with macOS (Coherence Mode that hides the Windows desktop). VMware Fusion is free for personal use and runs nearly as well. For business, Parallels is the safer bet. We help you pick based on your usage." },
        { q: "Will Office work?", a: "Yes - Microsoft Office for Windows runs natively on Windows 11 ARM. No emulation hit. Full feature parity with x86 Office." },
        { q: "Will games work?", a: "On Intel Boot Camp: yes, full Windows games. On Apple Silicon Parallels: most modern games don't work or run poorly because of the ARM emulation hit + lack of GPU passthrough. If gaming matters, Apple Silicon with Parallels is not the right choice - get a Windows machine or use Steam Link to a real PC." },
        { q: "Do I need a Windows licence?", a: "Yes. We don't provide one - you need a legitimate Windows 10 or 11 licence (around AED 600 from Microsoft Store). Windows runs unactivated for evaluation but you need a key for full activation. We help you activate after install." },
        { q: "Can I dual-boot macOS Sonoma and Windows 11 on my 2018 MacBook Pro?", a: "Yes - Boot Camp on a 2018 Intel MacBook Pro supports Windows 10 and Windows 11 (Windows 11 needs a registry tweak to bypass TPM checks). We do this regularly. AED 400 includes the bypass setup." },
        { q: "How much disk space does Windows need?", a: "60 GB minimum recommended for the partition (Windows itself + apps + room to update). 100 GB more comfortable. We discuss free space on your SSD before installing." },
      ]}
      reviewNames={["Anatoliy Tarasenko", "Wellington Academy", "Mariia Chymyrysova"]}
      related={[
        { label: "MacBook Repair Hub",   href: "/",      description: "All MacBook services in one place." },
        { label: "macOS Reinstall",      href: "/macos-reinstall-dubai",      description: "Fresh macOS before adding Windows. AED 300." },
        { label: "MacBook SSD Upgrade",  href: "/macbook-ssd-upgrade-dubai",  description: "More space for the dual-boot. From AED 600." },
      ]}
      blogLink={{ label: "Windows on Apple Silicon: Parallels vs VMware in 2026", href: "/blog/apple-silicon-vs-intel-repair-difference" }}
    />
  );
}
