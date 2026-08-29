"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { PriceCTA } from "@/components/blocks/PriceCTA";
import { Link } from "@/lib/router-compat";

export default function IPhone13ProRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone 13 Pro Repair Dubai - 120Hz ProMotion Screen & Battery | 055 741 3706"
      seoDescription="iPhone 13 Pro (2021) repair Dubai. A15, first ProMotion 120Hz, LiDAR, stainless steel. Screen, battery, camera and Face ID. Same-day, warranty up to 12 months. WhatsApp us."
      path="/iphone-13-pro-repair-dubai"
      eyebrow="iPhone 13 Pro (2021)"
      h1="iPhone 13 Pro Repair Dubai - ProMotion OLED, Battery, LiDAR"
      subtitle="The first ProMotion iPhone - A15, 120Hz OLED, triple-camera + LiDAR, stainless steel. iOS 18 supported. Message us for today's price."
      startingPrice={300}
      timeline="Same day"
      whatsappPrefill="Hi, I have an iPhone 13 Pro (2021) and need help with:"
      breadcrumb={[
        { name: "Home",          path: "/" },
        { name: "iPhone Repair", path: "/iphone-repair-dubai" },
        { name: "iPhone 13 Pro", path: "/iphone-13-pro-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "iPhone board-level repair" }}
      serviceName="iPhone 13 Pro Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Quick answer:</strong> The iPhone 13 Pro (Sept 2021) introduced ProMotion 120Hz to iPhone - A15 Bionic, 6.1-inch LTPO OLED, triple camera (wide + 3× telephoto + ultra-wide) + LiDAR, stainless-steel frame, MagSafe, IP68. iOS 18 supported. The 120Hz panel is more expensive to replace than the standard 13 - message us on WhatsApp for today's exact screen and battery price on your unit.
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
              <thead className="bg-bg-card"><tr className="text-left"><th className="px-md py-sm font-semibold">Service</th><th className="px-md py-sm font-semibold">Price</th><th className="px-md py-sm font-semibold">Timeline</th><th className="px-md py-sm font-semibold">Book</th></tr></thead>
              <tbody>
                <tr><td className="px-md py-sm">ProMotion 120Hz OLED replacement</td><td className="px-md py-sm"><PriceCTA compact message="Hi, price for iPhone 13 Pro ProMotion 120Hz OLED screen replacement in Dubai?" /></td><td className="px-md py-sm">Same day</td><td className="px-md py-sm"><Link to="/iphone-screen-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">Battery replacement</td><td className="px-md py-sm"><PriceCTA compact message="Hi, price for iPhone 13 Pro battery replacement in Dubai?" /></td><td className="px-md py-sm">45 min</td><td className="px-md py-sm"><Link to="/iphone-battery-replacement-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">Triple camera + LiDAR module</td><td className="px-md py-sm"><PriceCTA compact message="Hi, price for iPhone 13 Pro triple camera + LiDAR module repair in Dubai?" /></td><td className="px-md py-sm">Same day</td><td className="px-md py-sm"><Link to="/iphone-camera-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">Face ID repair</td><td className="px-md py-sm"><PriceCTA compact message="Hi, price for iPhone 13 Pro Face ID repair in Dubai?" /></td><td className="px-md py-sm">1-3 days</td><td className="px-md py-sm"><Link to="/iphone-face-id-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">MagSafe coil + back glass</td><td className="px-md py-sm"><PriceCTA compact message="Hi, price for iPhone 13 Pro MagSafe coil + back glass repair in Dubai?" /></td><td className="px-md py-sm">1-2 days</td><td className="px-md py-sm"><Link to="/iphone-back-glass-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">Lightning port repair</td><td className="px-md py-sm"><PriceCTA compact message="Hi, price for iPhone 13 Pro Lightning port repair in Dubai?" /></td><td className="px-md py-sm">Same day</td><td className="px-md py-sm"><Link to="/iphone-lightning-port-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">Water damage</td><td className="px-md py-sm"><PriceCTA compact message="Hi, price for iPhone 13 Pro water damage repair in Dubai?" /></td><td className="px-md py-sm">2-3 days</td><td className="px-md py-sm"><Link to="/iphone-water-damage-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-[24px] md:text-[28px] mb-md">Parts availability in 2026</h2>
          <p className="text-[15px] text-text-muted leading-relaxed mb-lg">
            ProMotion 120Hz OLED in stock - note 120Hz costs more than the standard 13 panel. Genuine Apple-pull panels are also available on request. Triple-camera + LiDAR is a single sealed module. MagSafe-equipped back glass in stock. Message us on WhatsApp for current pricing.
          </p>
          <h2 className="text-[24px] md:text-[28px] mb-md">Is the 13 Pro still worth repairing in 2026?</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            <strong>Yes.</strong> A15, ProMotion and strong used resale make it well worth keeping. A battery + screen refresh is reasonable for a 6 GB RAM Pro phone, and we'll always tell you honestly if a repair is close to the point where upgrading makes more sense. Message us for the exact figure on your unit.
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
      warrantyDays={365}
      warrantyBullets={[
        "12 months on parts and labour.",
        "Screen: dead pixels, ghost touch, 120Hz refresh covered.",
        "Battery: capacity-drop coverage.",
        "Face ID: full functionality verified before return.",
      ]}
      faqs={[
        { q: "Why is the 13 Pro screen more expensive than 13?", a: "ProMotion 120Hz LTPO panels cost more to manufacture - they switch refresh rate dynamically (10-120Hz), so the 13 Pro screen is a little more than the standard 13. Message us on WhatsApp for both prices." },
        { q: "Do you offer bundle pricing?", a: "Yes - screen + battery and battery + back glass are cheaper booked together than separately. Message us on WhatsApp and we'll quote the bundle for your model." },
        { q: "Genuine Apple OLED?", a: "Yes - we stock both genuine Apple-pull and OEM-grade hard-OLED panels. WhatsApp us and we'll quote both options so you can choose." },
        { q: "Why is Face ID a known issue on 13 Pro?", a: "The dot-projector flex on early 13 Pro units develops cold-solder failures. Diagnosis is free, and we'll message you the exact repair price before we start." },
        { q: "Will the 13 Pro get iOS 19?", a: "Almost certainly - A15 chip is still in active production." },
      ]}
      reviewNames={["Saeed Alam", "Seyed Moulana"]}
      related={[
        { label: "iPhone Screen Repair Dubai",       href: "/iphone-screen-repair-dubai",       description: "ProMotion 120Hz OLED replacement." },
        { label: "iPhone Face ID Repair",            href: "/iphone-face-id-repair-dubai",      description: "Dot-projector and IR camera." },
        { label: "iPhone Camera Repair Dubai",       href: "/iphone-camera-repair-dubai",       description: "Triple camera + LiDAR module." },
      ]}
    />
  );
}
