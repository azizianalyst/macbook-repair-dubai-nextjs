"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function IPhone13ProRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone 13 Pro Repair Dubai - 120Hz ProMotion from AED 300 | 055 741 3706"
      seoDescription="iPhone 13 Pro (2021) repair Dubai. A15, first ProMotion 120Hz, LiDAR, stainless steel. Screen AED 750, battery AED 300. Same-day, 90-day warranty."
      path="/iphone-13-pro-repair-dubai"
      eyebrow="iPhone 13 Pro (2021)"
      h1="iPhone 13 Pro Repair Dubai - ProMotion OLED, Battery, LiDAR"
      subtitle="The first ProMotion iPhone - A15, 120Hz OLED, triple-camera + LiDAR, stainless steel. iOS 18 supported. From AED 300."
      startingPrice={300}
      timeline="Same day"
      whatsappPrefill="Hi, I have an iPhone 13 Pro (2021) and need help with:"
      breadcrumb={[
        { name: "Home",          path: "/" },
        { name: "iPhone Repair", path: "/iphone-screen-repair-dubai" },
        { name: "iPhone 13 Pro", path: "/iphone-13-pro-repair-dubai" },
      ]}
      technician={{ name: "Shafeez", years: 12, specialisation: "iPhone board-level repair" }}
      serviceName="iPhone 13 Pro Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Quick answer:</strong> The iPhone 13 Pro (Sept 2021) introduced ProMotion 120Hz to iPhone - A15 Bionic, 6.1-inch LTPO OLED, triple camera (wide + 3× telephoto + ultra-wide) + LiDAR, stainless-steel frame, MagSafe, IP68. iOS 18 supported. The 120Hz panel is more expensive to replace than the standard 13. AED 750 screen, AED 300 battery.
          </p>
          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">About the iPhone 13 Pro</h2>
          <ul className="space-y-1 text-[15px] mb-lg">
            <li>• <strong>Released:</strong> September 2021</li>
            <li>• <strong>Chip:</strong> Apple A15 Bionic (6 GB RAM)</li>
            <li>• <strong>Display:</strong> 6.1-inch Super Retina XDR OLED with ProMotion 120Hz, 2532 × 1170</li>
            <li>• <strong>Camera:</strong> Triple 12 MP (wide w/ sensor-shift OIS + 3× telephoto + ultra-wide) + LiDAR</li>
            <li>• <strong>Connector:</strong> Lightning · MagSafe + Qi · 5G sub-6 · IP68</li>
            <li>• <strong>Frame:</strong> Stainless steel</li>
            <li>• <strong>iOS support:</strong> iOS 18 supported · iOS 19 likely</li>
          </ul>
          <h2 className="text-[24px] md:text-[28px] mb-md">Common problems we see on the 13 Pro</h2>
          <ul className="space-y-2 text-[15px] mb-lg">
            <li>• <strong>Cracked ProMotion OLED</strong></li>
            <li>• <strong>Battery degradation</strong> after 3-4 years</li>
            <li>• <strong>Face ID intermittent</strong> (known issue on 13 Pro)</li>
            <li>• <strong>Sensor-shift OIS click</strong> on main camera</li>
            <li>• <strong>Telephoto camera failure</strong></li>
            <li>• <strong>Cracked back glass + MagSafe coil damage</strong></li>
            <li>• <strong>Lightning port wear</strong></li>
          </ul>
          <h2 className="text-[24px] md:text-[28px] mb-md">Services available for the 13 Pro</h2>
          <div className="overflow-x-auto border border-border rounded-md bg-bg-card mb-lg">
            <table className="w-full text-[14px] min-w-[560px]">
              <thead className="bg-bg-card"><tr className="text-left"><th className="px-md py-sm font-semibold">Service</th><th className="px-md py-sm font-semibold">Price (AED)</th><th className="px-md py-sm font-semibold">Timeline</th><th className="px-md py-sm font-semibold">Book</th></tr></thead>
              <tbody>
                <tr><td className="px-md py-sm">ProMotion 120Hz OLED replacement</td><td className="px-md py-sm">750</td><td className="px-md py-sm">Same day</td><td className="px-md py-sm"><Link to="/iphone-screen-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">Battery replacement</td><td className="px-md py-sm">300</td><td className="px-md py-sm">45 min</td><td className="px-md py-sm"><Link to="/iphone-battery-replacement-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">Triple camera + LiDAR module</td><td className="px-md py-sm">650</td><td className="px-md py-sm">Same day</td><td className="px-md py-sm"><Link to="/iphone-camera-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">Face ID repair</td><td className="px-md py-sm">From 600</td><td className="px-md py-sm">1-3 days</td><td className="px-md py-sm"><Link to="/iphone-face-id-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">MagSafe coil + back glass</td><td className="px-md py-sm">600</td><td className="px-md py-sm">1-2 days</td><td className="px-md py-sm"><Link to="/iphone-back-glass-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">Lightning port repair</td><td className="px-md py-sm">300</td><td className="px-md py-sm">Same day</td><td className="px-md py-sm"><Link to="/iphone-lightning-port-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">Water damage</td><td className="px-md py-sm">From 450</td><td className="px-md py-sm">2-3 days</td><td className="px-md py-sm"><Link to="/iphone-water-damage-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-[24px] md:text-[28px] mb-md">Parts availability in 2026</h2>
          <p className="text-[15px] text-text-muted leading-relaxed mb-lg">
            ProMotion 120Hz OLED in stock - note 120Hz costs more than the standard 13 panel. Genuine Apple-pull AED 1,100. Triple-camera + LiDAR is a single sealed module. MagSafe-equipped back glass in stock.
          </p>
          <h2 className="text-[24px] md:text-[28px] mb-md">Is the 13 Pro still worth repairing in 2026?</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            <strong>Yes.</strong> A15, ProMotion, used resale ~AED 2,200-2,800. Battery + screen at AED 1,050 is reasonable for a 6 GB RAM Pro phone. Above AED 1,800 in repairs we recommend stepping up.
          </p>
        </>
      }
      whatWeFix={[
        "Cracked ProMotion 120Hz OLED",
        "Battery degraded below 80%",
        "Face ID intermittent (13 Pro known issue)",
        "Sensor-shift OIS click / blur",
        "Telephoto / LiDAR failure",
        "Cracked back glass + MagSafe coil",
        "Lightning port wear",
      ]}
      steps={[
        { title: "WhatsApp the fault",   body: "Photo or short clip. Quote in 4 minutes." },
        { title: "Free pickup",          body: "Across Dubai mainland." },
        { title: "Diagnose + repair",    body: "Standard same day; Face ID + back glass 1-3 days." },
        { title: "QC + return",          body: "ProMotion, MagSafe, telephoto, LiDAR and Face ID tested, signed warranty, free delivery." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "90 days on parts and labour.",
        "Screen: dead pixels, ghost touch, 120Hz refresh covered.",
        "Battery: capacity-drop coverage.",
        "Face ID: full functionality verified before return.",
      ]}
      faqs={[
        { q: "Why is the 13 Pro screen more expensive than 13?", a: "ProMotion 120Hz LTPO panels cost more to manufacture - they switch refresh rate dynamically (10-120Hz). AED 750 vs AED 650 for the standard 13." },
        { q: "Bundle pricing?", a: "Screen + battery: AED 1,020 (saves AED 30). Battery + back glass: AED 870 (saves AED 30)." },
        { q: "Genuine Apple OLED?", a: "Yes - AED 1,100 vs AED 750 OEM-grade hard-OLED." },
        { q: "Why is Face ID a known issue on 13 Pro?", a: "The dot-projector flex on early 13 Pro units develops cold-solder failures. We diagnose for AED 0 and fix from AED 600." },
        { q: "Will the 13 Pro get iOS 19?", a: "Almost certainly - A15 chip is still in active production." },
      ]}
      reviewNames={["Saeed Alam", "Seyed Moulana"]}
      related={[
        { label: "iPhone Screen Repair Dubai",       href: "/iphone-screen-repair-dubai",       description: "ProMotion 120Hz OLED AED 750." },
        { label: "iPhone Face ID Repair",            href: "/iphone-face-id-repair-dubai",      description: "Dot-projector and IR camera." },
        { label: "iPhone Camera Repair Dubai",       href: "/iphone-camera-repair-dubai",       description: "Triple + LiDAR AED 650." },
      ]}
    />
  );
}
