"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IMacFanCleaning() {
  return (
    <SubServicePageTemplate
      seoTitle="iMac Fan Cleaning Dubai - Quiet Down a Loud iMac | 055 741 3706"
      seoDescription="iMac fan cleaning Dubai. Loud fan? Dubai dust buildup is the cause. Deep clean, quiet again. AED 250. Same day. Home visit very popular."
      path="/imac-fan-cleaning-dubai"
      eyebrow="iMac fan cleaning"
      h1="iMac Fan Cleaning Dubai - Quiet Down a Loud iMac"
      subtitle="Loud fan, hot casing, no other symptoms? Almost always Dubai dust packed across the cooling fins. We open, deep clean and refit - same day. This is the lighter version of our overheating service: clean only, no paste swap."
      startingPrice={250}
      timeline="Same day"
      whatsappPrefill="Hi, my iMac fan is loud - model and year:"
      breadcrumb={[
        { name: "Home",                path: "/" },
        { name: "iMac Repair",         path: "/imac-repair-dubai" },
        { name: "Fan Cleaning",        path: "/imac-fan-cleaning-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "iMac thermal restoration" }}
      serviceName="iMac Fan Cleaning Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>If your iMac fan is suddenly loud but the machine still runs at normal speed, you usually don't need new thermal paste - you just need the dust out.</strong> This is the cheaper, faster service: open, vacuum, brush clean every cooling surface, refit, done. Most iMacs that come in for this leave the same afternoon.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Dubai is unusually hard on iMac cooling. The combination of fine outdoor dust pulled in through air conditioning, and 24/7 indoor cooling that keeps air circulating, deposits a fine carpet of dust across the heatsink fins. After two to three years it starts choking airflow; after five years the fan has to spin at maximum just to move any air at all. The fix is mechanical, not electronic - we just need to open the iMac in a clean area and clean every cooling surface properly.
          </p>
        </>
      }
      whatWeFix={[
        "Suddenly loud fan at idle or under light load",
        "Fan ramping up during simple Safari or video calls",
        "Slight grinding or rattle from the fan area",
        "Casing warmer than it used to be",
        "First-line thermal service before considering full paste refresh",
        "Pre-emptive clean every 3-4 years on heavy-use iMacs",
      ]}
      steps={[
        { title: "Listening + thermal check", body: "We confirm the fan is the issue (not a software runaway process) by checking activity monitor and listening to the fan signature." },
        { title: "Display off",                body: "Adhesive cut, display lifted, parked safely on a clean stand for the duration of the clean." },
        { title: "Deep clean",                 body: "Vacuum, soft brush, then targeted compressed air through cleared fins. Fan blades cleaned individually. Intake and exhaust paths cleared." },
        { title: "Reseal + verify",            body: "Fresh adhesive, display refit, fan-noise verify under load. You hear the difference immediately." },
      ]}
      warrantyDays={15}
      warrantyBullets={[
        "warranty of up to 12 months on the seal and the workmanship.",
        "If fan noise returns inside 6 months we re-clean for free.",
        "Free home pickup and drop-off across Dubai mainland.",
      ]}
      faqs={[
        { q: "What's the difference between fan cleaning and overheating fix?", a: "Fan cleaning is just dust removal - AED 250. The overheating service includes everything plus thermal paste and pad replacement (AED 350). If your iMac is throttling and slow, you need the full service. If it's just noisy, fan cleaning is enough." },
        { q: "How often should I have this done?", a: "In Dubai, every 3-4 years for an iMac in normal home use. Sooner if you're near the JLR / Marsa area or in a high-dust office. M-series 24-inch iMacs almost never need it - they barely use the fan." },
        { q: "Can I just clean it myself?", a: "External vents, sure - quarterly soft brushing won't hurt. The internal heatsink needs the display off, which means adhesive cutting and re-laminating. Not a DIY job unless you're experienced." },
        { q: "Why is my fan loud after macOS update?", a: "Different cause - usually a runaway background process (Spotlight reindex, Photos analysis, mds). Check Activity Monitor first. If CPU is idle but fan is loud, it's mechanical and needs cleaning." },
        { q: "Will the home visit option include the cleaning?", a: "Free pickup yes, but the actual cleaning needs our dust-free bench for display reassembly. We collect, clean at the workshop, return same evening or next morning." },
        { q: "Can you clean the 24-inch M1/M2/M3/M4 iMac?", a: "Yes but rarely needed - M-series fans almost never run hard enough to pull dust in. We'll diagnose for free first and refuse the job if it's not needed." },
      ]}
      reviewNames={["Binod Shrestha", "Shah nawaz", "Marianne Chehade El Dfouni"]}
      related={[
        { label: "iMac Overheating Fix",   href: "/imac-overheating-fix-dubai",   description: "Full service including thermal paste - for throttling cases." },
        { label: "iMac Full Diagnostic",   href: "/imac-full-diagnostic-dubai",   description: "Free check first if you're not sure what's wrong." },
        { label: "iMac Repair Hub",        href: "/imac-screen-repair-dubai",     description: "All iMac services in one place." },
      ]}
      blogLink={{ label: "How loud is too loud - when iMac fan noise means something", href: "/blog/imac-not-turning-on-power-supply-issues" }}
    />
  );
}
