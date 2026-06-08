"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookGpuRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook GPU Repair Dubai - AED 800 | Reballed AMD Radeon | 3-5 Days"
      seoDescription="MacBook GPU repair Dubai. AMD Radeon Pro 555/560/5500M failures on 2016-2019 MacBook Pro. Reballed chip replacement, not reflow. AED 800. Call 055 741 3706."
      path="/macbook-gpu-repair-dubai"
      eyebrow="MacBook GPU repair"
      h1="MacBook GPU Repair Dubai"
      subtitle="2016-2019 MacBook Pros with AMD Radeon failure - black screens, kernel panics, garbled graphics. We replace the GPU with a reballed chip, not a temporary reflow. AED 800."
      startingPrice={800}
      timeline="3-5 days"
      whatsappPrefill="Hi, my MacBook Pro has a GPU fault - model and year:"
      breadcrumb={[
        { name: "Home",           path: "/" },
        { name: "MacBook Repair", path: "/" },
        { name: "GPU Repair",     path: "/macbook-gpu-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "GPU rework & BGA reballing" }}
      serviceName="MacBook GPU Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>MacBook GPU repair in Dubai</strong> mostly means one thing: 2016-2019 MacBook Pros with discrete AMD Radeon Pro 555 / 560 / 5300M / 5500M chips that develop solder-bond cracks under thermal cycling. Symptoms: kernel panics during 4K video playback, garbled lines on the display, random black screens, machine boots fine then dies under GPU load.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            We replace the GPU die with reballed Apple-spec stock - not a reflow (which buys weeks at most). Done with controlled hot-air profile and fresh BGA balls. Lasts as long as the original. Apple Silicon MacBooks (M1+) have integrated GPUs on the SoC and are not separately repairable.
          </p>
        </>
      }
      whatWeFix={[
        "Black screen on boot but chime plays",
        "Vertical lines or pixel garbage on display",
        "Kernel panics specifically during graphics work",
        "Boots to internal display but external monitor dead",
        "Machine works on integrated graphics but crashes on discrete",
        "GPU shows in System Report but glitches under load",
        "Thermal shutdown specifically during GPU-heavy tasks",
        "Display ribbon ok but image distorted at high refresh",
      ]}
      steps={[
        { title: "Confirm GPU vs display vs cable", body: "Boot in safe mode (forces integrated graphics on Intel), test external display, scope GPU rails. Diagnosis 24 hours." },
        { title: "Quote", body: "Reballed GPU stock confirmed against your model. Voice-note quote with success-rate honest assessment." },
        { title: "GPU desolder + reballed install", body: "Old GPU lifted under microscope, BGA pads cleaned, new reballed chip placed with controlled thermal profile." },
        { title: "72 hr burn-in", body: "Sustained graphics load (Cinebench GPU, Final Cut export, 4K playback). Catches any retained issues." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers the GPU chip and the immediate solder bond.",
        "Excludes new physical impact or liquid damage.",
        "Free re-work if the same GPU fault returns inside 90 days.",
      ]}
      faqs={[
        { q: "Why do AMD Radeon GPUs fail in 2016-2019 MacBook Pros specifically?", a: "Apple ran these GPUs at the edge of their thermal envelope to fit them in the slim chassis. After 3-4 years of thermal cycling, the BGA solder bonds develop micro-cracks. Apple even ran a service programme for some 15\" MacBook Pro 2018/2019 serials. We see this fault every week." },
        { q: "Why don't you just reflow the GPU?", a: "Because reflow is a temporary fix - it re-melts the existing solder bonds to bridge the cracks. The cracks come back within weeks because the underlying thermal fatigue is unchanged. Reballing replaces the entire BGA bond with fresh balls, restoring original durability." },
        { q: "Can you repair Apple Silicon GPUs (M1, M2, M3, M4, M5)?", a: "No, honestly. The GPU is fused into the SoC die alongside the CPU and unified memory. If the GPU fails, the entire SoC has failed, and SoC failure means board swap - no chip-level rework is possible. We diagnose for free and tell you." },
        { q: "How long does a reballed GPU last?", a: "When done correctly: as long as the original Apple solder bond, often longer because we use higher-melt-point lead-free balls. The 90-day warranty is paperwork - actual lifespan is 4-6 years." },
        { q: "Will I lose my data?", a: "No. The GPU is on the logic board but separate from the SSD circuit. We don't touch your storage." },
        { q: "What if it's not the GPU but the display itself?", a: "Free diagnosis confirms which. If it's the display panel, that's a different fix (AED 1,200-1,800) and we tell you upfront. We don't charge for GPU work that wasn't needed." },
      ]}
      reviewNames={["Daniel Vyskoc", "joseph manalili", "Anatoliy Tarasenko"]}
      related={[
        { label: "MacBook Repair Hub",         href: "/",            description: "All MacBook services in one place." },
        { label: "MacBook Logic Board Repair", href: "/macbook-logic-board-repair-dubai", description: "Sister board-level service. From AED 800." },
        { label: "MacBook Screen Repair",      href: "/macbook-screen-repair-dubai",     description: "If it's not the GPU, it's the panel. From AED 1,200." },
      ]}
      blogLink={{ label: "Why your 2016-2019 MacBook Pro GPU is failing", href: "/blog/macbook-flexgate-explained" }}
    />
  );
}
