"use client";
import IPhonePageTemplate from "@/components/blocks/IPhonePageTemplate";

export default function IPhoneCameraRepair() {
  return (
    <IPhonePageTemplate
      seoTitle="iPhone Camera Repair Dubai - Rear, Ultra-Wide, LiDAR | Price on Request"
      seoDescription="iPhone camera repair Dubai - rear wide, ultra-wide, telephoto, LiDAR, TrueDepth. iPhone 6 to 17. Same-day. Warranty up to 12 months. WhatsApp 055 741 3706 for a quote."
      path="/iphone-camera-repair-dubai"
      eyebrow="iPhone Camera Repair"
      h1="iPhone Camera Repair Dubai"
      subtitle="Blurry photos, black camera screen, OIS rattle, broken lens cover. Rear, ultra-wide, telephoto, LiDAR, TrueDepth front. Same-day on most models."
      startingPrice={350}
      timeline="Same day · 1 day"
      whatsappPrefill="Hi, iPhone camera repair quote please. Model + which camera: "
      technician={{ name: "Shafiq Ahmed", years: 21, specialisation: "Camera, Face ID & ISP calibration" }}
      serviceName="iPhone Camera Repair Dubai"
      pricingRows={[
        { model: "iPhone 6 / 7 / 8 - rear camera",            price: 350, timeline: "Same day" },
        { model: "iPhone X / XR / XS - rear camera",          price: 400, timeline: "Same day" },
        { model: "iPhone 11 / 11 Pro - rear module",          price: 500, timeline: "Same day" },
        { model: "iPhone 12 / 13 - rear module",              price: 600, timeline: "Same day · 1 day" },
        { model: "iPhone 14 / 14 Pro - rear module",          price: 700, timeline: "Same day · 1 day" },
        { model: "iPhone 15 Pro - rear (incl. 5x tetraprism)",price: 850, timeline: "1 day" },
        { model: "iPhone 16 Pro / 17 Pro - rear module",      price: 950, timeline: "1 day" },
        { model: "Front TrueDepth camera (any model)",        price: 450, timeline: "Same day · 1 day" },
        { model: "Camera lens cover only (any model)",        price: 150, timeline: "Same day" },
      ]}
      pricingCaption="Standalone LiDAR sensor swaps on Pro models and Pro Max sizing are quoted separately - message us on WhatsApp for the exact price on your model."
      intro={
        <>
          <p className="text-[17px] text-text leading-relaxed">
            iPhone camera repair in Dubai covers everything from a single rear-camera swap to a lens-cover-only replacement - message us on WhatsApp for today's exact price on your model. The iPhone camera is one of the most complex assemblies on the device - a single iPhone 16 Pro module contains 12 lens elements across three cameras, three OIS (optical image stabilisation) actuators, a LiDAR scanner, and a custom flash array. The workshop has fitted more than 1,200 iPhone camera modules since 2018, when triple-camera systems first arrived on the iPhone 11 Pro. Every replacement is calibrated to the original ISP (image signal processor) on the logic board so colour science and HDR rendering match the phone's original output.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mt-md">
            On Pro models from the iPhone 12 onward, the LiDAR scanner is integrated into the rear camera bump. LiDAR powers Night mode portraits, AR apps, and (on iPhone 14 Pro and later) cinematic-mode focus tracking. A camera-module swap that ignores LiDAR will leave these features broken even if the photos look fine. The workshop's bench includes a dedicated LiDAR alignment jig - the sensor is positioned within 0.1mm of the original mounting and tested with the official Measure app before the phone leaves.
          </p>
        </>
      }
      problems={[
        { title: "Black screen when opening Camera app", body: "Module flex disconnected, ISP fuse blown, or rear-camera connector damaged from a drop. Free diagnosis confirms - 60% are module swaps, 40% are connector reseats (no charge)." },
        { title: "Blurry photos despite cleaning the lens", body: "OIS actuator stuck or autofocus motor failed. Module replacement - message us for the exact price on your model." },
        { title: "Rattle inside the phone when shaken", body: "OIS actuator springs broken - common on iPhone 6 Plus, 7 Plus after 2+ years. Phone still takes photos but they're soft. Module replacement restores sharpness." },
        { title: "Cracked lens cover, photos with starbursts", body: "External glass over the lens is shattered. Lens cover swap only - no need to replace the camera module if the lens itself isn't damaged. Same day, message us for the price." },
        { title: "Ultra-wide camera shows green tint", body: "Sensor failure on the 0.5x camera. Replacement of the ultra-wide module only on iPhone 12, 13, 14 (modules are individually serviceable). On iPhone 15+ the cameras are bonded as one assembly - full module swap." },
        { title: "Front camera blurry but rear is fine", body: "Front TrueDepth module failure. On iPhone X+, the front camera shares the flex with Face ID - replacement keeps Face ID working only if done with the original sensor stack transferred. Message us for the price." },
        { title: "Camera works but Portrait Mode unavailable", body: "Depth sensor (LiDAR on Pro models, dual-camera depth-mapping on others) isn't reporting. Module test confirms which sensor is at fault." },
        { title: "Camera flash doesn't fire", body: "Flash module on a separate sub-board on iPhone 11+. Standalone replacement - message us for the price. Sometimes a software issue - DFU restore tried first at no charge." },
        { title: "Cinematic Mode focus jumps around", body: "AI focus depends on LiDAR + camera + ISP working as one. Even a small misalignment of the LiDAR ruins it. Re-alignment on the bench - message us for the price if the module is otherwise fine." },
        { title: "Telephoto camera (3x / 5x) softer than wide", body: "Common after a drop - the small telephoto sensor is most fragile. Tetraprism on iPhone 15 Pro and 16 Pro adds another moving optical element. Replacement - message us for the exact price on your model." },
      ]}
      steps={[
        { title: "WhatsApp model + sample photo", body: "Send the iPhone model and a sample photo showing the issue (blur, black, tint). Quote back in 4 to 8 minutes." },
        { title: "Free pickup or walk in", body: "Pickup anywhere on Dubai mainland. Diagnosis includes a 5-minute test photoshoot in the workshop's calibrated light box." },
        { title: "Module replacement on the bench", body: "Screen lifted, battery disconnected, camera module screws removed, flex disconnected, replacement seated. Anti-static workspace throughout." },
        { title: "ISP calibration via Apple Configurator", body: "On iPhone 12+, the new module needs ISP-side calibration to match colour, exposure, and HDR rendering. Done with iMazing/Configurator and an Apple-supplied calibration profile." },
        { title: "LiDAR alignment + Portrait test", body: "On Pro models, LiDAR aligned in the bench jig. Portrait mode and Night mode tested in the light box. Cinematic mode focus pull verified on iPhone 14 Pro and later." },
        { title: "Free delivery + warranty of up to 12 months", body: "Same day on iPhone 6 to 13. Same/next day on 14, 15, 16. Next day on 17 line. Warranty card includes ISP calibration log." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Covered: module defects, OIS failure, LiDAR misalignment, autofocus failure caused by the part.",
        "Not covered: new physical damage, water damage post-repair, software bugs unrelated to the module.",
        "Lens cover swaps carry a 30-day cosmetic warranty (covers bond failure, not new cracks).",
      ]}
      comparisonRows={[
        ["iPhone 11 rear camera",        "Price on request",                        "Full Apple list price, AE"],
        ["iPhone 14 Pro rear module",    "Price on request",                        "Full Apple list price, AE"],
        ["iPhone 16 Pro rear module",    "Price on request",                        "Full Apple list price, AE"],
        ["Lens cover only",              "Price on request (standalone)",           "Not offered, full module only"],
        ["LiDAR alignment",              "Yes - bench jig + test",                  "Yes"],
        ["Front TrueDepth camera",       "Price on request (Face ID preserved)",    "Full Apple list price, AE"],
        ["Same-day repair",              "Most models",                             "5 to 10 business days, mail-in"],
        ["Free pickup in Dubai",         "Yes",                                     "No"],
        ["Warranty",                     "12 months written",                         "12 months"],
      ]}
      faqs={[
        { q: "How much does iPhone camera repair cost in Dubai?", a: "Pricing depends on your exact model and which camera - rear wide, ultra-wide, telephoto, front TrueDepth, or lens cover only. Pro and Pro Max models with tetraprism telephoto and LiDAR cost more than older single-camera iPhones. Diagnosis is free, and we confirm the exact price before any work - message us on WhatsApp with your model and we'll quote back in minutes." },
        { q: "What's the difference between a lens cover and a camera module?", a: "The lens cover is the external glass protecting the camera. If only the cover is cracked but photos look normal, a lens-cover swap is enough - the cheaper of the two fixes. The module is the camera itself - sensor, lens stack, OIS, motor. If photos are blurry, dark, or the module rattles, the full module needs replacing. Message us for the exact price on each." },
        { q: "Will Portrait Mode and Night Mode still work after a camera repair?", a: "Yes - provided the LiDAR sensor (Pro models) is correctly aligned and the ISP calibration is run. The workshop uses a dedicated LiDAR alignment jig and runs ISP calibration on every iPhone 12+ camera repair. Both modes tested in the calibrated light box before handover." },
        { q: "Why are Pro model cameras so much more expensive?", a: "iPhone 14 Pro onward uses a 48MP main sensor with quad-pixel binning, plus an integrated LiDAR scanner. iPhone 15 Pro added the tetraprism telephoto (5x optical zoom on Pro Max, 3x on Pro). The module costs more from Apple's distributor and has more components. Pro Max sizes also use a larger main sensor (1/1.14\")." },
        { q: "Can you fix the front camera without breaking Face ID?", a: "Yes - the front camera on iPhone X+ shares a flex with Face ID. The workshop transfers the IR camera, dot projector, flood illuminator, and proximity sensor from the original assembly to the replacement. Done correctly Face ID stays active. Tested before handover." },
        { q: "My camera works but the autofocus doesn't lock - is that a software issue?", a: "Sometimes - DFU restore fixes 20% of autofocus issues. If the camera still hunts after a clean restore, the autofocus VCM (voice coil motor) inside the module has failed. Module replacement - message us for the exact price on your model." },
        { q: "What's LiDAR and do I need it?", a: "LiDAR is a time-of-flight depth scanner on iPhone 12 Pro and later Pro models. It powers Night-mode portraits, AR apps (Measure, IKEA Place, etc.), and on iPhone 14 Pro+ it improves Cinematic-mode focus pulls. If you don't use these features, LiDAR misalignment after a repair won't bother you in daily use." },
        { q: "How long does iPhone camera repair take?", a: "Same day on iPhone 6 to 13. Same or next day on 14 and 15. Next day on 16 and 17 because the modules are special-ordered. Bench time is 60 to 90 minutes; ISP calibration adds 30 minutes; LiDAR jig adds 15 minutes." },
        { q: "Will my new camera produce the same colour as before?", a: "Yes - that's what ISP calibration is for. Each Apple iPhone has a colour profile burned into the logic board's image signal processor; a swapped module needs to be paired so HDR, Smart HDR, and ProRAW render correctly. Without calibration, photos look slightly different. The workshop calibrates every camera repair on iPhone 12+." },
        { q: "Can you fix a smashed camera flash module?", a: "Yes - flash module replacement on iPhone 11+ is a standalone job; message us for the exact price. Sometimes a non-firing flash is just an iOS bug - DFU restore tried first at no charge." },
      ]}
      reviewNames={["Saeed Alam", "Tim Quick", "Wellington Academy"]}
      relatedSlugs={["/iphone-back-glass-repair-dubai", "/iphone-face-id-repair-dubai", "/iphone-screen-repair-dubai"]}
    />
  );
}
