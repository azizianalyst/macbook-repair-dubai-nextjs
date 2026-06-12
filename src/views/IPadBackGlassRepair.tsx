"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPadBackGlassRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPad Back Repair Dubai - Aluminium Dent Rework | From AED 500"
      seoDescription="iPad back panel dent repair Dubai. Aluminium chassis straightening, Smart Connector preserved, cosmetic restoration. From AED 500, 2-3 days."
      path="/ipad-back-glass-repair-dubai"
      eyebrow="iPad back repair"
      h1="iPad Back Glass Repair Dubai"
      subtitle="Most iPads have an aluminium back, not glass - so 'back glass repair' really means dent rework, scratch polishing and Smart Connector preservation. From AED 500, 2-3 days."
      startingPrice={500}
      timeline="2-3 days"
      whatsappPrefill="Hi, my iPad back is dented / damaged - model and area:"
      breadcrumb={[
        { name: "Home",          path: "/" },
        { name: "iPad Repair",   path: "/ipad-repair-dubai" },
        { name: "Back Repair",   path: "/ipad-back-glass-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "iPad chassis and Smart Connector repair" }}
      serviceName="iPad Back Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>An honest naming note</strong>: iPads don't have a glass back like iPhones do (no MagSafe charging coil to protect). The back is aluminium on every model from iPad mini to iPad Pro. So when customers ask for "iPad back glass repair", what they usually need is one of three things: dent rework on the aluminium, anodised-finish scratch polishing, or - most importantly - Smart Connector preservation when the dent is near the rear three-pin contact.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            From AED 500. Major dents that distort the chassis enough to push on the battery or LCD usually need a full chassis transfer (more expensive - we quote case-by-case). We tell you up front what's possible and what isn't.
          </p>
        </>
      }
      whatWeFix={[
        "Dents in the aluminium back from drops",
        "Deep scratches on the rear finish",
        "Bent corner from a fall on tile",
        "Smart Connector contact area damage",
        "Slightly bowed chassis pushing on battery",
        "Camera bump scratches and chips",
        "Cosmetic refurbishment for resale",
        "Apple logo area refinishing",
      ]}
      steps={[
        { title: "Chassis assessment",        body: "We measure the dent depth and check whether internal components (battery, LCD, Smart Connector) are stressed." },
        { title: "Quote: rework vs transfer", body: "Surface dents - rework on the bench. Severe dents touching internals - full chassis swap (much more expensive, we quote separately)." },
        { title: "Aluminium rework",          body: "Heat + precision tooling to push the dent out from the inside without cracking anodisation. Smart Connector pads protected." },
        { title: "Polish + reassemble",       body: "Anodised-finish polish where possible, full reassembly, function test of every port, button and Smart Connector pin. 12-month cosmetic warranty." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Covers the rework area against re-deformation under normal use.",
        "Smart Connector function guaranteed if it worked before the repair.",
        "Cosmetic-only - does not include screen or internal parts.",
      ]}
      faqs={[
        { q: "Will the back look factory-new after a dent repair?", a: "Honestly, no. Aluminium rework removes the dent and restores function, but a faint shadow at the deformation site usually remains visible at certain angles. We tell you what to expect with photos before you commit. For factory-fresh appearance, full chassis transfer is the only option." },
        { q: "What does Smart Connector preservation mean?", a: "On iPad Pro and Air models there's a 3-pin magnetic contact on the back for the Magic Keyboard and Smart Keyboard. Dent rework near that area can shear the contact pads. We isolate and protect the Smart Connector before any rework." },
        { q: "Why do iPads not have glass backs like iPhones?", a: "iPhones have glass for MagSafe wireless charging - radio waves can't pass through metal. iPads don't have wireless charging (yet), so Apple uses aluminium for strength and lightness." },
        { q: "Can you do this same day?", a: "No - aluminium rework needs cooling time between heat cycles, and Smart Connector verification takes overnight. 2-3 days is the realistic minimum for a quality result." },
        { q: "Is it worth it for resale?", a: "Often yes - a clean back can add AED 200-500 to the resale value of an iPad Pro or Air. We've seen the trade math work for our customers." },
      ]}
      reviewNames={["Anatoliy Tarasenko", "Anastasiia Goncia", "Ana Undricova"]}
      related={[
        { label: "iPad Screen Repair Dubai",   href: "/ipad-screen-repair-dubai",   description: "Most common companion repair." },
        { label: "iPad Smart Connector Repair",href: "/ipad-smart-connector-repair-dubai", description: "Three-pin magnetic contact issues." },
        { label: "iPad Full Diagnostic",       href: "/ipad-full-diagnostic-dubai", description: "Free 25-point check first." },
      ]}
      blogLink={{ label: "Why iPad backs are aluminium and what it means for repair", href: "/blog" }}
    />
  );
}
