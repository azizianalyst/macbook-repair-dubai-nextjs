"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookThermalPasteReplacement() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Thermal Paste Replacement Dubai"
      seoDescription="MacBook overheating, fans roaring, throttling and shutdowns? We strip old paste, reapply premium compound and clean fans in Dubai. Free diagnosis, 90-day warranty."
      path="/macbook-thermal-paste-replacement-dubai"
      eyebrow="Overheating & thermal paste"
      h1="MacBook Thermal Paste Replacement in Dubai"
      subtitle="Loud fans, a hot chassis, and a MacBook that throttles the moment you push it. Dried thermal paste is usually the cause. We reapply premium compound and clean the fans, same day, from AED 280."
      startingPrice={280}
      timeline="Same day"
      whatsappPrefill="Hi, my MacBook is overheating - model and what it does:"
      breadcrumb={[
        { name: "Home",                       path: "/" },
        { name: "MacBook Repair",              path: "/apple-repair-dubai" },
        { name: "Thermal Paste Replacement",   path: "/macbook-thermal-paste-replacement-dubai" },
      ]}
      technician={{ name: "Abdul Aziz", years: 21, specialisation: "board-level Mac repair" }}
      serviceName="MacBook Thermal Paste Replacement"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>MacBook Repair Dubai</strong> sees this every week. Thermal paste sits between the CPU/GPU and the heatsink, and after two or three years it dries out and cracks. Heat stops moving, so the fans scream, the chassis runs hot, the Mac throttles to a crawl, and on bad days it shuts down to protect itself. In Dubai's heat the dried compound gives up faster than it would in a cooler climate.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed">
            We strip the old paste off the chips, clean the heatsink, and reapply a high-grade compound, then clean the fans while the machine is open. That brings temperatures back down and lets the Mac run at full speed again. Diagnosis is free, and you only pay if there's a fix worth doing - from AED 280, same day.
          </p>
        </>
      }
      whatWeFix={[
        "Overheating - chassis too hot to keep on your lap",
        "Thermal throttling that drops you to a fraction of normal speed",
        "Fans running loud and constant, even on light tasks",
        "Random shutdowns or freezes under load (video, exports, gaming)",
        "CPU/GPU temperature spikes flagged in monitoring apps",
        "Performance that tanks after 10 minutes of heavy work",
        "Paired fan cleaning when dust is choking the airflow too",
      ]}
      steps={[
        { title: "WhatsApp or free pickup", body: "Send the model and what it's doing. We arrange free pickup across Dubai mainland, or bring it to Concord Tower in Media City." },
        { title: "Free thermal diagnosis", body: "We log idle and load temperatures, check for throttling, and confirm whether it's the paste, blocked fans, or a board-level heat fault. No charge to find out." },
        { title: "Strip, reapply, clean", body: "Old compound removed from the CPU/GPU and heatsink, surfaces cleaned, premium paste reapplied at the correct spread, and both fans cleared of dust." },
        { title: "Stress test temperatures", body: "We run the Mac under sustained load and watch the temps drop and hold. No throttling, fans calm, before it leaves the bench." },
        { title: "Same-day return", body: "Most jobs are back to you the same day, delivered across Dubai mainland or ready for collection from the workshop." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers the paste application and fan cleaning for 90 days.",
        "Free re-do if temperatures climb back inside the warranty window.",
        "Excludes faults from new liquid damage or physical impact after delivery.",
      ]}
      faqs={[
        { q: "How much is MacBook thermal paste replacement in Dubai?", a: "It starts at AED 280, VAT-inclusive, and that covers stripping the old compound, reapplying premium paste, and cleaning both fans while we're inside. Diagnosis is free, so you'll know the temperatures and the fix before you pay. Most jobs are done the same day in Media City." },
        { q: "What are the signs my MacBook needs new thermal paste?", a: "Loud fans on light tasks, a chassis that runs hot to the touch, big speed drops after a few minutes of work, and random shutdowns under load. Monitoring apps showing the CPU above 95C at load is the clearest tell. Bring it to Dubai Media City for a free temperature check from AED 280." },
        { q: "How often should thermal paste be replaced?", a: "Roughly every two to three years on Intel MacBooks, sometimes sooner in Dubai's heat. If the machine is older than that and the fans have got noticeably louder, it's due. We've redone plenty that hadn't been touched since new. Free diagnosis confirms it, fix from AED 280, same day." },
        { q: "Will new thermal paste fix throttling and slow performance?", a: "If the throttling comes from heat, yes. Once temperatures sit in a safe range the Mac stops protecting itself and runs at full clock again. We prove it on the bench with a stress test before return. If the slowdown is software or storage instead, the free diagnosis catches that. From AED 280 in Dubai." },
        { q: "Do you clean the fans at the same time?", a: "Yes, it's included. The Mac is already open, so we clear dust off both fans and the heatsink fins while we reapply the paste. Dust and dried compound usually go together, and tackling both at once is why temperatures drop properly. AED 280, same day at our Media City workshop." },
        { q: "Which MacBook models do you do this on, Intel or Apple Silicon?", a: "Both, though Intel MacBooks need it far more often because they run hotter. M1, M2, M3 and M4 Macs run cooler and rarely need a repaste - if yours is Apple Silicon and overheating, it's more likely dust or a fan fault, which the free diagnosis sorts out. We service every model in Dubai from AED 280." },
        { q: "How long does it take?", a: "Most thermal paste jobs are same day, often within a few hours once it's on the bench. Older MacBook Pros with more disassembly take a little longer. We'll confirm the turnaround after the free diagnosis. Free pickup across Dubai mainland, fix from AED 280." },
        { q: "Is replacing the thermal paste safe for my MacBook?", a: "It is when done properly. The risk is using too much paste or damaging the heatsink mounting, which is why a careful job matters. Abdul Aziz has 21 years on Apple boards and we torque the heatsink back to spec. Your data stays untouched. 90-day warranty, from AED 280 in Dubai." },
        { q: "Why does my MacBook overheat more in Dubai?", a: "Ambient heat is the difference. A Mac that idles fine in a cold climate has far less thermal headroom in a Dubai summer, so dried paste shows up as fans roaring and throttling much faster here. Reapplying fresh compound buys back that margin. Free check, fix from AED 280 at Concord Tower, Media City." },
      ]}
      reviewNames={["Latifa", "Neil Morecraft", "Anatolii Monich"]}
      related={[
        { label: "MacBook Fan Cleaning",          href: "/mac-fan-cleaning-dubai",                description: "Dust-choked fans cause the same overheating. Often done together." },
        { label: "MacBook Logic Board Repair",    href: "/macbook-logic-board-repair-dubai",      description: "When the heat fault is board-level, not paste." },
        { label: "MacBook Battery Replacement",   href: "/macbook-battery-replacement-dubai",     description: "Heat shortens battery life. Genuine-capacity cells from AED 280." },
      ]}
      quickAnswer={{
        question: "How much does MacBook thermal paste replacement cost in Dubai?",
        answer: "MacBook thermal paste replacement starts at AED 280 at MacBook Repair Dubai in Concord Tower, Media City. It includes stripping the dried compound, reapplying premium paste, and cleaning both fans, with a free diagnosis and 90-day warranty. Most jobs are done the same day.",
      }}
    />
  );
}
