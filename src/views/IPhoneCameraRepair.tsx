"use client";
import IPhonePageTemplate from "@/components/blocks/IPhonePageTemplate";
import { Link } from "@/lib/router-compat";
import { ProseSection, ModelNotes } from "@/components/blocks/ServiceExtraSections";
import { TEAM } from "@/content/site";

// Technician byline comes from the TEAM roster (TRUST-CLAIMS.md), never typed per page.
const TECH = TEAM.find((t) => t.name === "Shafiq")!;

export default function IPhoneCameraRepair() {
  return (
    <IPhonePageTemplate
      seoTitle="iPhone Camera Repair Dubai: Blurry, Black or Cracked Lens"
      seoDescription="iPhone camera not working, won't focus or lens cracked? Free diagnosis in Dubai Media City, lens-glass or module repair, warranty up to 12 months. WhatsApp us."
      path="/iphone-camera-repair-dubai"
      eyebrow="iPhone Camera Repair"
      h1="iPhone Camera Repair Dubai"
      subtitle="Camera not working, stuck on a black screen, won't focus or the lens is cracked. Rear, front, telephoto and LiDAR, from the iPhone 7 to the iPhone 18 Pro. Free diagnosis first."
      startingPrice={350}
      timeline="Same day · 1 day"
      whatsappPrefill="Hi, iPhone camera repair quote please. Model + which camera: "
      technician={{ name: TECH.name, years: TECH.years, specialisation: TECH.specialisation }}
      serviceName="iPhone Camera Repair Dubai"
      quickAnswer={{
        question: "iPhone camera not working: can it be repaired?",
        answer:
          "Usually, yes. After a free diagnosis at our Dubai Media City workshop, a black camera screen, photos that won't focus, a rattling lens or cracked lens glass is fixed by replacing the faulty camera module or just the lens cover. Software causes are ruled out first. Camera parts carry a written warranty of up to 12 months.",
      }}
      takeaways={[
        "Rule out software first: force restart, update iOS, and check Screen Time hasn't switched the Camera app off.",
        "Cracked lens glass over a camera that still takes sharp photos is a glass-only repair.",
        "Focus that keeps hunting or a shaking preview usually means the autofocus or stabiliser inside the module has failed.",
        "On the iPhone 18 Pro and 18 Pro Max, a stuck variable aperture can't be repaired on its own: the whole main camera is replaced.",
      ]}
      pricingRows={[
        { model: "iPhone 7 / 7 Plus / 8 / 8 Plus - rear camera", price: 350, timeline: "Same day" },
        { model: "iPhone X / XR / XS / XS Max - rear camera",   price: 400, timeline: "Same day" },
        { model: "iPhone 11 / 11 Pro - rear module",            price: 500, timeline: "Same day" },
        { model: "iPhone 12 / 13 - rear module",                price: 600, timeline: "Same day · 1 day" },
        { model: "iPhone 14 / 14 Pro - rear module",            price: 700, timeline: "Same day · 1 day" },
        { model: "iPhone 15 / 16 / 17 line - rear module",      price: 850, timeline: "1 day" },
        { model: "iPhone 18 Pro / 18 Pro Max - rear module",    price: 0,   timeline: "Confirmed on WhatsApp" },
        { model: "Front camera (any model)",                    price: 450, timeline: "Same day · 1 day" },
        { model: "Camera lens glass only (any model)",          price: 150, timeline: "Same day" },
      ]}
      pricingCaption="Part availability for the newest models is confirmed on WhatsApp before you book. Every price is quoted in writing after the free diagnosis."
      intro={
        <>
          <p className="text-[17px] text-text leading-relaxed">
            iPhone camera repair in Dubai starts with finding which camera has failed. Many iPhones carry two or three rear cameras, a front camera at the top of the display and, on Pro models from the iPhone 12 Pro, a LiDAR scanner. The Camera app already tells you a lot: a black viewfinder on one lens only, a zoom button that does nothing, or Portrait mode that never appears.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mt-md">
            We test every lens at Concord Tower, Dubai Media City, free, before any quote. Broken lens glass gets new glass; a failed sensor, autofocus or stabiliser gets a new module; and if the circuit feeding the camera is damaged we say so, because <Link to="/iphone-logic-board-repair-dubai" className="text-accent font-semibold hover:underline">board-level repair</Link> is a different job with a different warranty.
          </p>
        </>
      }
      problems={[
        { title: "Black screen in the Camera app", body: "Force restart first. If one lens stays black while the others work, that module or its connector is faulty, usually after a drop." },
        { title: "Blurry photos, camera won't focus", body: "Clean the lens and remove the case or any clip-on lens. If focus still hunts or stays soft, the autofocus or stabiliser in the module has failed." },
        { title: "Cracked camera lens cover", body: "Flare, haze or starbursts around lights. If the camera underneath tests fine, only the lens glass is replaced." },
        { title: "Black spot in every photo", body: "Dust under the lens cover is cleaned when the cover is opened; a spot on the sensor means a new module. A spot on the display itself is a screen fault." },
        { title: "Front camera not working", body: "Selfies and FaceTime show black or blur. On Face ID iPhones we replace the front camera only and test Face ID afterwards." },
        { title: "Fog or water inside the lens", body: "Switch the phone off, don't heat it, and bring it in so the lens cover can be opened and dried before the lens corrodes." },
      ]}
      sections={
        <>
          <ProseSection
            eyebrow="Before you book"
            title="iPhone camera stopped working? Five checks first"
            sub="If the fault survives all five, it is hardware."
          >
            <ol>
              <li><strong>Force restart.</strong> iPhone 8 and later: volume up, volume down, then hold the side button until the Apple logo. iPhone 7 and 7 Plus: hold volume down and the side button together.</li>
              <li><strong>Update iOS</strong> in Settings &gt; General &gt; Software Update.</li>
              <li><strong>Check restrictions:</strong> Settings &gt; Screen Time &gt; Content &amp; Privacy Restrictions must allow Camera, or the app disappears and looks broken.</li>
              <li><strong>Clear the lens:</strong> remove the case, magnetic mount or clip-on lens and wipe the glass with microfibre.</li>
              <li><strong>Test each lens:</strong> tap 0.5x, 1x and the zoom button, then the front camera. If close-ups keep jumping, turn on Macro Control in Settings &gt; Camera. One lens failing while others work is hardware.</li>
            </ol>
            <p>
              <strong>Ride a motorbike?</strong> Apple&apos;s support guidance warns that vibration from high-power motorcycle engines can degrade iPhone camera stabilisation and autofocus. Soft or jittery photos from a phone on a bike mount usually mean a damaged stabiliser.
            </p>
          </ProseSection>

          <ProseSection eyebrow="Camera lens repair" title="Cracked camera lens: glass only, or the whole camera?">
            <p>
              Each rear camera sits behind its own sapphire lens cover. If that glass cracks but the camera behind it is intact, you see flare or haze around bright lights, and only the <strong>lens glass</strong> needs replacing. Replace it anyway, because a cracked cover lets dust and moisture reach the lens. If the knock also hit the camera, test photos show it and we quote the module instead.
            </p>
          </ProseSection>

          <ModelNotes
            title="iPhone camera repair by model"
            sub="What typically fails on each generation."
            items={[
              {
                title: "iPhone 7 and 7 Plus camera not working",
                body: "The 7 Plus pairs a stabilised 12MP wide camera with a 2x telephoto in one dual module. Black only at 2x, or Portrait mode missing, means a failed telephoto, and the dual module is replaced as one part. Back and front both black at once is more often software or a connector.",
                prefill: "Hi, iPhone 7 / 7 Plus camera not working. Back or front camera: ",
              },
              {
                title: "iPhone 8, X and XS camera not working",
                body: "The X and XS stabilise both rear cameras, and the front camera shares the TrueDepth housing with Face ID. A rear camera that went black after a drop is usually the module or its connector.",
                prefill: "Hi, iPhone 8 / X / XS camera not working. Which camera: ",
              },
              {
                title: "iPhone 11 to 14",
                body: "From the iPhone 12, iOS lists a replaced camera under Settings > General > About > Parts and Service History, and may flag a part not configured by Apple. We explain what your phone will show before starting. Pro models add LiDAR, checked with the Measure app.",
                prefill: "Hi, iPhone 11-14 camera repair quote please. Model + which lens: ",
              },
              {
                title: "iPhone 15, 16 and 17",
                body: "48MP main cameras, with a folded 5x telephoto on the 15 Pro Max and both 16 Pro models. Each lens can fail on its own, so we test every zoom step and replace only the failed module.",
                prefill: "Hi, iPhone 15 / 16 / 17 camera repair quote please. Model + which lens: ",
              },
              {
                title: "iPhone 18 Pro and 18 Pro Max",
                body: "A six-blade variable aperture (f/1.48 to f/4). iFixit found the camera modules removable but the aperture unrepairable: a stuck aperture means a new main camera. The display is the way in, so work starts with careful screen removal. Part availability is confirmed on WhatsApp.",
                prefill: "Hi, iPhone 18 Pro camera problem. Model (Pro / Pro Max) + symptom: ",
              },
            ]}
            footnote="For reference, Apple lists its UAE out-of-warranty rear-camera service at AED 989 for iPhone 18 Pro, 18 Pro Max, 17 Pro and 17 Pro Max, AED 659 for iPhone 17, 16 and Air, and AED 499 for iPhone 17e and 16e (support.apple.com/en-ae, excluding VAT, checked 26 September 2026)."
          />
        </>
      }
      steps={[
        { title: "WhatsApp model and a sample photo", body: "Tell us which camera is affected and send a photo that shows the fault." },
        { title: "Free diagnosis", body: "Walk in to Concord Tower, Dubai Media City, or send it with a same-day courier you book. Every lens, the flash and the front camera are tested." },
        { title: "Written quote, your approval", body: "You approve the price and part grade first. Parts are genuine where available, quality-tested otherwise, and disclosed before work." },
        { title: "Module or lens-glass replacement", body: "Battery disconnected, only the faulty camera or glass replaced, new adhesive where the phone was sealed." },
        { title: "Every lens tested", body: "Focus near and far, stabilisation, flash, Portrait mode, LiDAR on Pro models, and Face ID after front-camera work." },
        { title: "Collect with a written warranty", body: "Up to 12 months on the replaced camera part." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Covered: a defect in the replaced camera module or lens glass, including focus or stabiliser failure caused by the part.",
        "Not covered: new drops or cracks, liquid exposure after the repair, and unrelated faults.",
        "Water resistance can't be re-certified outside Apple after any opening; treat the phone as splash-resistant, not swim-proof.",
      ]}
      comparisonRows={[
        ["Diagnosis",                            "Free, every lens tested before a quote",      "Inspection after booking an appointment"],
        ["Rear camera, iPhone 18 Pro / 17 Pro",  "Quote on WhatsApp",                           "Apple lists AED 989, excl. VAT (Sep 2026)"],
        ["Rear camera, iPhone 17 / 16 / Air",    "Quote on WhatsApp",                           "Apple lists AED 659, excl. VAT (Sep 2026)"],
        ["Rear camera, iPhone 17e / 16e",        "Quote on WhatsApp",                           "Apple lists AED 499, excl. VAT (Sep 2026)"],
        ["Lens glass only",                      "Yes, when the camera behind it tests fine",   "Quoted by Apple after inspection"],
        ["Walk in, no appointment",              "Yes, Dubai Media City",                       "Usually by appointment"],
        ["Warranty",                             "Up to 12 months written on the part",         "Apple's service warranty"],
      ]}
      faqs={[
        { q: "Why did my iPhone camera stop working suddenly?", a: "Usually a knock has damaged one camera module or its connector, or iOS has frozen the camera process. Force restart and update iOS first. If one lens stays black or blurry while the others work, it is hardware, and a free diagnosis confirms which part before any quote." },
        { q: "Why won't my iPhone camera focus?", a: "Check the lens is clean and nothing covers it. On models that switch to macro automatically, close subjects make the view jump, so turn on Macro Control. If focus still hunts on distant objects, the autofocus or stabiliser in the module has failed and the module is replaced." },
        { q: "Can you replace just the iPhone camera lens glass?", a: "Yes, when the camera behind it still works, which avoids paying for a whole module. If the same impact damaged the camera, test photos show it and we quote the module instead, naming the lens affected." },
        { q: "Will Portrait mode and Face ID still work after a camera repair?", a: "They should, and we check before handover: every lens, Portrait and Night mode, and LiDAR on Pro models after rear-camera work, and Face ID after front-camera work, because the front camera sits beside the Face ID sensors." },
        { q: "How much does iPhone camera repair cost in Dubai?", a: "It depends on the model and which camera failed: lens glass is the smallest job, a rear module costs more, and Pro models with LiDAR and telephoto cameras cost the most. On older phones like the 7 Plus or X, a camera module still costs far less than a new phone. Diagnosis is free; WhatsApp your model for a written quote." },
      ]}
      reviewNames={["Saeed Alam", "Tim Quick", "Wellington Academy"]}
      relatedSlugs={["/iphone-face-id-repair-dubai", "/iphone-back-glass-repair-dubai", "/iphone-water-damage-repair-dubai"]}
      relatedExtra={[
        { label: "iPhone 18 Pro repair", href: "/iphone-18-pro-repair-dubai", description: "Variable-aperture camera and under-display Face ID: what changes for repairs." },
        { label: "iPhone screen repair", href: "/iphone-screen-repair-dubai", description: "Black spot on the display rather than in photos? That's the screen." },
      ]}
    />
  );
}
