"use client";
import IPhonePageTemplate from "@/components/blocks/IPhonePageTemplate";

export default function IPhoneICloudUnlock() {
  return (
    <IPhonePageTemplate
      seoTitle="iPhone iCloud Unlock Dubai - Honest Help | Apple Liaison Service"
      seoDescription="iPhone iCloud unlock Dubai - honest help, not a bypass scam. We assist legitimate owners with Apple support, ownership documentation. WhatsApp 055 741 3706."
      path="/iphone-icloud-unlock-dubai"
      eyebrow="iPhone iCloud Unlock"
      h1="iPhone iCloud Unlock Dubai - Honest Help, Not a Bypass"
      subtitle="iCloud Activation Lock cannot be legitimately bypassed. We help legitimate owners contact Apple, prepare ownership documents, and recover access through Apple's support channels."
      startingPrice={250}
      timeline="3 days - 4 weeks (Apple-side)"
      whatsappPrefill="iCloud unlock help - model, IMEI, and what happened (forgotten Apple ID / inherited / second-hand): "
      technician={{ name: "Usman", years: 12, specialisation: "Apple liaison & ownership recovery" }}
      serviceName="iPhone iCloud Unlock Help"
      pricingRows={[
        { model: "Forgotten Apple ID - recovery via Apple",      price: 250, timeline: "1-7 days" },
        { model: "Inherited device - Digital Legacy / Apple Estate", price: 350, timeline: "2-4 weeks" },
        { model: "Original receipt available - Apple liaison",   price: 450, timeline: "1-4 weeks" },
        { model: "Documentation prep + submission only",         price: 250, timeline: "Same day" },
        { model: "Bypass services - refused",                    price: 0,   timeline: "Not available" },
      ]}
      pricingCaption="The workshop charges only for service time and Apple liaison work. Apple ultimately decides the unlock - no guarantee. Refund if Apple refuses despite valid documentation."
      intro={
        <>
          <p className="text-[17px] text-text leading-relaxed">
            iPhone iCloud unlock in Dubai is the most over-promised service in the repair industry. The honest reality: iCloud Activation Lock is enforced by Apple's servers. There is no current, sustainable, legitimate bypass for iPhones running iOS 13 or later. Anyone in Dubai or online claiming a permanent iCloud bypass for iPhone XS or newer is selling a temporary trick (often a passcode bypass that re-locks on reboot or update) or an outright scam. The workshop refuses bypass jobs. What the workshop does instead: help legitimate owners recover access through Apple's official channels.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mt-md">
            Three legitimate paths exist. First - Apple ID recovery: forgotten password but the phone is yours, with proof. Apple's account recovery process takes 3 to 14 days but works. Second - Digital Legacy: inherited iPhone where the deceased designated you as a Legacy Contact. Apple unlocks the iCloud account with a death certificate and Legacy Access Key. Third - proof of purchase: original Apple receipt or Carrefour / Sharaf DG receipt with matching serial number can convince Apple to unlock for legitimate buyers of second-hand devices the seller forgot to remove. The workshop prepares the documentation, submits to Apple, and follows up - the customer pays for service time, not for a guaranteed unlock.
          </p>
        </>
      }
      honestyCallout={
        <div className="text-[15px] text-text leading-relaxed space-y-md">
          <p>
            <strong>What is iCloud Activation Lock?</strong> When Find My iPhone is enabled, the iPhone is tied to the owner's Apple ID at the Apple-server level. After a factory erase, the iPhone refuses to activate without the original Apple ID and password. This is intentional - it makes stolen iPhones useless to thieves. It cannot be legitimately bypassed.
          </p>
          <p>
            <strong>Things that don't work (don't pay for them):</strong> iRemoval Pro, iCloud Bypass Tool, checkra1n bypass (only works on iPhone X and older, and re-locks on reboot), DNS bypass (last worked on iOS 9), iCloud Activation Lock removal services advertised on social media for AED 200 (scams or temporary bypasses).
          </p>
          <p>
            <strong>What works (workshop helps with these):</strong> (1) Apple ID password reset via iforgot.apple.com if you have your recovery email or trusted phone number. (2) Account recovery via Apple Support if you've lost both - takes 3 to 14 days. (3) Apple Estate / Digital Legacy if you inherited the device - requires death certificate. (4) Apple in-store unlock with original purchase receipt (proof of original ownership) for second-hand purchases.
          </p>
          <p>
            <strong>If you bought a second-hand iPhone that's iCloud-locked:</strong> contact the seller and ask them to remove it remotely (on their other Apple device, go to Settings → [Their Name] → Find My → [iPhone] → Remove from Account). If the seller is unreachable or refuses, the device is essentially unusable as an iPhone. The workshop will help submit ownership documentation to Apple but cannot guarantee Apple will unlock without seller cooperation.
          </p>
        </div>
      }
      problems={[
        { title: "Forgot Apple ID password - phone is yours", body: "Easiest case. Use iforgot.apple.com on another device. Account recovery via SMS, recovery email, or trusted device. Workshop helps with the process - AED 250, 1-7 days." },
        { title: "Forgot Apple ID email entirely", body: "Apple Account Recovery (3-14 day waiting period). Workshop submits the request and follows up. AED 350, 2-4 weeks Apple-side." },
        { title: "Inherited iPhone from deceased family member", body: "Apple Estate process. Requires death certificate, court order naming you executor, and the device. Apple unlocks the iCloud account on case-by-case basis. Workshop prepares the submission. AED 350." },
        { title: "Bought second-hand, seller forgot to remove iCloud", body: "First step: contact seller, ask them to remove via icloud.com/find. If unreachable: workshop submits Apple liaison request with bill of sale, ID copies, and any communication with seller. AED 450. Apple decides - no guarantee." },
        { title: "iPhone showing 'Activation Lock' but I have the Apple ID and password", body: "Just enter them on the activation screen. If iOS rejects them, account may be locked or the password may be slightly different - try iforgot.apple.com first. Free 5-minute walk-in test." },
        { title: "Bypass services advertised online - scammed already", body: "Common in Dubai. Customer paid AED 200-500 to a Telegram/Instagram seller. Bypass either never works, or re-locks on reboot. The workshop will not take additional payment to 'fix' a failed bypass - refund the original scam, then submit Apple liaison request properly. AED 250 documentation help." },
        { title: "Carrier-locked AND iCloud-locked from second-hand purchase", body: "Two separate locks. Carrier unlock is sometimes possible (see /iphone-network-unlock-dubai). iCloud unlock requires the original Apple ID - workshop helps with both processes if the customer has documentation." },
        { title: "Lost iPhone, found on the street", body: "The workshop will not help unlock found iPhones. Hand them to Dubai Police or take them to an Apple Store - the rightful owner can be contacted via Find My. Returning a found iPhone is the right thing to do." },
        { title: "Activation Lock on iPad - same process applies", body: "iPad iCloud unlock follows the same Apple liaison process. Same pricing - AED 250 to AED 450 depending on documentation complexity." },
        { title: "Want a refurbished iPhone but worried about Activation Lock", body: "Buy from authorised resellers (Apple Refurbished, Carrefour, Sharaf DG) only. Always check Activation Lock status before purchase - Settings > General > Activation Lock, or visit icloud.com/activationlock. Workshop offers free pre-purchase checks for AED 0." },
      ]}
      steps={[
        { title: "WhatsApp the situation honestly", body: "Tell us what happened: forgotten password, inherited, bought second-hand, etc. The workshop will tell you straight if there's a legitimate path or not. Free advice." },
        { title: "Free walk-in or remote eligibility check", body: "Workshop verifies the IMEI status and Activation Lock state. If a legitimate path exists, documentation list and timeline given. If not, no payment taken." },
        { title: "Document preparation", body: "Workshop helps gather: original purchase receipt, ID copies, bill of sale (for second-hand purchases), death certificate + court order (for inherited), Apple ID account recovery confirmation." },
        { title: "Apple liaison submission", body: "Documents submitted via Apple's relevant channel: appleid.apple.com for account recovery, Apple Support for ownership disputes, Apple Estate for inherited devices." },
        { title: "Apple-side processing window", body: "Apple controls the timeline: 3 to 14 days for account recovery, 1 to 4 weeks for ownership disputes, 2 to 4 weeks for Apple Estate. Workshop tracks and chases on the customer's behalf." },
        { title: "Activation + verification", body: "When Apple approves the unlock, the device is activated on the bench with the new Apple ID. Find My disabled. Customer takes the iPhone home with a fresh Apple ID set up." },
      ]}
      warrantyDays={30}
      warrantyBullets={[
        "Refund of the workshop's service fee if Apple refuses the unlock despite the documentation being legitimate.",
        "No-fix-no-charge applies to Apple ID recovery attempts where eligibility was misjudged.",
        "Not covered: Apple's decision itself (the workshop is not Apple), failed bypass services from third parties, devices that turn out to be reported lost or stolen.",
      ]}
      comparisonRows={[
        ["Approach",                "Apple liaison + documentation",                  "Bypass tools (don't work on modern iPhones)"],
        ["Permanence",              "Permanent if Apple approves",                    "Temporary or scam"],
        ["Apple-warranty safe",     "Yes",                                            "No - bypass voids warranty"],
        ["Forgotten Apple ID",      "AED 250 + Apple recovery 3-14 days",            "Not applicable"],
        ["Inherited iPhone",        "AED 350 + Apple Estate 2-4 weeks",              "Not applicable - needs documentation"],
        ["Second-hand seller forgot to remove", "AED 450 + Apple liaison 1-4 weeks", "Bypass scams charge AED 200, don't work"],
        ["Refund if Apple refuses",  "Yes - service fee returned",                    "No refunds typical"],
        ["Free pre-check",           "Yes",                                           "No"],
        ["Warranty",                 "30-day money-back",                             "None"],
      ]}
      faqs={[
        { q: "Can you unlock my iCloud-locked iPhone?", a: "Honestly: only if you can prove ownership. iCloud Activation Lock is enforced by Apple servers and cannot be legitimately bypassed. The workshop helps legitimate owners recover access through Apple's support channels - Apple ID recovery, Apple Estate, or proof-of-purchase liaison. We refuse bypass jobs because they don't work on modern iPhones." },
        { q: "I forgot my Apple ID password - what do I do?", a: "Easiest case. Visit iforgot.apple.com on another device or computer. Use account recovery via SMS to your trusted phone number, your recovery email, or another trusted Apple device. The workshop helps with the process - AED 250, takes 1 to 7 days depending on which recovery method works." },
        { q: "I bought a second-hand iPhone that's still locked to the seller - help?", a: "First, contact the seller and ask them to remove the device remotely from icloud.com/find. This is the easiest path. If the seller is unreachable, the workshop can submit ownership documentation to Apple (bill of sale, ID copies, communication with the seller). AED 450. Apple decides - no guarantee. We're upfront about that." },
        { q: "Do those iCloud bypass services on Telegram and Instagram work?", a: "No, not on modern iPhones (iPhone XS or later running iOS 13+). They either don't work at all (scam) or use a passcode bypass that re-locks the moment the iPhone reboots or updates. Apple has been closing these exploits as fast as they appear. The workshop refuses to take payment for bypass work." },
        { q: "What about the checkra1n / iRemoval Pro bypass?", a: "checkra1n only works on iPhone X and earlier - those models share a hardware exploit (checkm8) that Apple cannot patch in software. Even on these older models, the bypass re-locks on reboot, breaks iMessage and iCloud entirely, and voids any warranty. Not a real solution." },
        { q: "I inherited my parent's iPhone - can you unlock it?", a: "Yes, through Apple Estate. Required documents: death certificate, court order naming you as executor of the estate, and the device itself. Apple processes inheritance unlocks case-by-case, typically 2 to 4 weeks. Workshop fee AED 350 for documentation help and submission." },
        { q: "How much does iCloud unlock cost in Dubai?", a: "Workshop service fees: AED 250 for forgotten Apple ID help. AED 350 for inherited devices (Apple Estate). AED 450 for second-hand ownership disputes (Apple liaison). AED 250 for documentation-prep only. The workshop charges for service time, not for guaranteed unlocks - Apple ultimately decides." },
        { q: "How long does the process take?", a: "Apple controls the timeline. Apple ID password reset via SMS/email: same day. Account recovery: 3 to 14 days. Apple Estate: 2 to 4 weeks. Ownership dispute liaison: 1 to 4 weeks. The workshop tracks and chases on the customer's behalf throughout." },
        { q: "Will Apple definitely unlock if I have the original receipt?", a: "Almost always for legitimate cases. Apple's policy favours legitimate owners with proof of purchase. Cases where Apple refuses: receipt doesn't match the serial number, evidence the device was reported lost or stolen, suspicion of fraud. The workshop screens these upfront before taking payment." },
        { q: "I lost an iPhone and someone returned it to me - Activation Lock is on. What now?", a: "If you're the original owner: enter your Apple ID and password on the activation screen, or use iforgot.apple.com if you've forgotten. If you bought it second-hand and the seller turned out to be the original owner who lost it, contact them directly. If you found it on the street: please return it to Dubai Police or an Apple Store - the rightful owner can be contacted via Find My." },
      ]}
      reviewNames={["Wellington Academy", "Tim Quick", "Saeed Alam"]}
      relatedSlugs={["/iphone-network-unlock-dubai", "/iphone-data-recovery-dubai", "/iphone-software-fix-dubai"]}
    />
  );
}
