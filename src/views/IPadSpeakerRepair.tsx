"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPadSpeakerRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPad Speaker Repair Dubai - Stereo and Quad | AED 350"
      seoDescription="iPad speaker repair Dubai. 2-speaker iPad / mini, 4-speaker Air / Pro. Mesh clean often free. AED 350 if replacement needed. Same day."
      path="/ipad-speaker-repair-dubai"
      eyebrow="iPad speaker repair"
      h1="iPad Speaker Repair Dubai"
      subtitle="Crackling, muffled or one-side-dead audio. iPad and mini have 2 speakers; Air and Pro have 4. Mesh clean often free. AED 350 for replacement, 1 day."
      startingPrice={350}
      timeline="1 day"
      whatsappPrefill="Hi, my iPad speakers are faulty - model and which side:"
      breadcrumb={[
        { name: "Home",         path: "/" },
        { name: "iPad Repair",  path: "/ipad-screen-repair-dubai" },
        { name: "Speaker Repair",path: "/ipad-speaker-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "iPad audio and chassis repair" }}
      serviceName="iPad Speaker Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>iPad audio comes in two configurations</strong>: standard iPad and iPad mini have two speakers (one each end), while iPad Air and iPad Pro have four-speaker landscape stereo (two each end, with iPadOS routing bass and treble dynamically depending on orientation). When one channel goes muddy or silent, the imbalance is immediately obvious. AED 350 covers any single speaker module replacement.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            First step is always free: microscope mesh inspection. Sand and dust from beach trips and dusty rooms work into the speaker grilles and dampen output. About 35% of "broken" iPad speakers in Dubai are restored by a careful clean alone - no charge.
          </p>
        </>
      }
      whatWeFix={[
        "One speaker silent on landscape stereo",
        "Crackling or distortion at high volume",
        "Muffled output (often dust)",
        "Speaker mesh visibly clogged",
        "Stereo imbalance during video playback",
        "Bass distortion on iPad Pro four-speaker",
        "After-water-exposure speaker damage",
        "Speaker grille cosmetic restoration",
      ]}
      steps={[
        { title: "Free mesh inspection + clean", body: "Microscope at 40\u00d7. Sand, lint and pet hair extracted with a fine pick. Re-test audio. Often resolves the issue with no bill." },
        { title: "Channel test",                  body: "If clean and still faulty, we play a stereo sweep tone to isolate which speaker is dead - front-left, front-right, rear-left, rear-right." },
        { title: "Speaker module replacement",   body: "OEM-grade speaker module installed. On Air / Pro four-speaker iPads we test all four after the swap so the dynamic-routing algorithm calibrates." },
        { title: "Audio verification",            body: "Stereo music, speaker test from Settings, FaceTime call. 90-day warranty card with the iPad." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers the new speaker module and seal.",
        "Excludes new water or sand ingress.",
        "Free re-clean within 90 days if mesh re-clogs.",
      ]}
      faqs={[
        { q: "Why does iPad Pro\u2019s four-speaker setup sound different from iPad?", a: "Apple uses dynamic audio routing - when you flip the iPad Pro into landscape, the iPad detects orientation and assigns left and right channels accordingly. Bass and treble are also dynamically split between top and bottom speakers. Replacing one speaker requires the algorithm to re-balance, which happens automatically after reboot." },
        { q: "Can a software update fix poor speaker sound?", a: "Sometimes - iPadOS updates have included speaker tuning changes. We always update to the latest iPadOS before opening the iPad. About 5% of cases are software-only and don't need a repair." },
        { q: "Will the new speaker sound identical to original?", a: "On a clean replacement, 95% identical. The 5% gap is the factory tuning Apple does on the entire speaker assembly during manufacture; aftermarket replacements lack that final tuning pass. Most users can't tell on side-by-side." },
        { q: "What if the speaker dies again in a year?", a: "Speakers shouldn't fail in normal use. If yours died from water or sand, the same exposure can kill the new one - we recommend a case with closed grille flaps at the beach or pool." },
        { q: "Same day possible?", a: "We schedule for next-day to ensure stock of your model's speaker and a calm bench. Most iPads are ready within 24 hours of drop-off." },
      ]}
      reviewNames={["Anatoliy Tarasenko", "Anastasiia Goncia", "Ana Undricova"]}
      related={[
        { label: "iPad Charging Port Repair",   href: "/ipad-charging-port-repair-dubai", description: "Often combined repair on Pro." },
        { label: "iPad Water Damage Repair",    href: "/ipad-water-damage-repair-dubai",  description: "Common cause of speaker failure." },
        { label: "iPad Full Diagnostic",        href: "/ipad-full-diagnostic-dubai",      description: "Free 25-point check." },
      ]}
      blogLink={{ label: "iPad four-speaker explained: how dynamic routing actually works", href: "/blog" }}
    />
  );
}
