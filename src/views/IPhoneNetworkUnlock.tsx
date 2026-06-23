"use client";
import IPhonePageTemplate from "@/components/blocks/IPhonePageTemplate";

export default function IPhoneNetworkUnlock() {
  return (
    <IPhonePageTemplate
      seoTitle="iPhone Network Unlock Dubai - Carrier Unlock | From AED 350"
      seoDescription="iPhone network unlock Dubai from AED 350. Legitimate carrier unlock via IMEI. UAE, US, UK carriers supported. No jailbreak. Permanent. WhatsApp 055 741 3706."
      path="/iphone-network-unlock-dubai"
      eyebrow="iPhone Network Unlock"
      h1="iPhone Network Unlock Dubai"
      subtitle="Locked to Etisalat, du, AT&T, Verizon, EE, O2? Legitimate IMEI-based carrier unlock. Permanent. No jailbreak. Survives iOS updates and erases."
      startingPrice={350}
      timeline="1-7 days"
      whatsappPrefill="iPhone network unlock - model, IMEI (Settings > General > About), and current carrier: "
      technician={{ name: "Usman", years: 12, specialisation: "Carrier unlock & IMEI services" }}
      serviceName="iPhone Network Unlock Dubai"
      pricingRows={[
        { model: "Etisalat / du UAE - clean ESN",         price: 350, timeline: "1-3 days" },
        { model: "AT&T USA - out of contract",            price: 450, timeline: "1-5 days" },
        { model: "T-Mobile USA - premium IMEI",           price: 550, timeline: "2-5 days" },
        { model: "Verizon USA - clean",                   price: 350, timeline: "1-3 days" },
        { model: "EE / O2 / Vodafone / Three UK",         price: 450, timeline: "2-7 days" },
        { model: "Sprint / Boost USA",                    price: 650, timeline: "3-7 days" },
        { model: "Japan / Korea carriers",                price: 750, timeline: "3-7 days" },
        { model: "Blacklisted IMEI - refused",            price: 0,   timeline: "Not available" },
      ]}
      pricingCaption="Price varies by carrier policy. Free IMEI status check before any payment. Refund if unlock fails (rare - workshop confirms feasibility before quoting)."
      intro={
        <>
          <p className="text-[17px] text-text leading-relaxed">
            iPhone network unlock in Dubai starts at AED 350 for a clean Etisalat or du IMEI. The unlock is legitimate, IMEI-based, and registered in Apple's GSX database - meaning the iPhone shows as "Unlocked" in Apple's records permanently. It survives iOS updates, factory erases, and SIM swaps. There's no jailbreak involved, no fake unlock app, no R-SIM hardware bypass. The workshop has been processing IMEI unlocks since 2014, working through Apple-authorised partners and carrier portals in the UAE, US, UK, EU, Japan, and Korea.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mt-md">
            The first step is always a free IMEI status check. Etisalat and du let customers unlock their own iPhones for free if the device is fully paid off - the workshop will tell you this before charging anything. AT&T's policy requires the contract to be fully paid (or 60+ days of service for prepaid). Verizon ships most newer iPhones already unlocked. T-Mobile is straightforward but requires the SIM in the device for activation. Sprint (now T-Mobile) is the hardest - and Sprint-branded iPhones with prepaid Boost lines often need premium pricing. Blacklisted IMEIs (reported lost or stolen) cannot be unlocked at any price - the workshop refuses these jobs.
          </p>
        </>
      }
      honestyCallout={
        <div className="text-[15px] text-text leading-relaxed space-y-md">
          <p>
            <strong>What we don't do:</strong> jailbreak unlocks, R-SIM hardware unlocks, fake software unlocks. These are temporary, illegal in many jurisdictions, void Apple's warranty, can brick the phone after an iOS update, and often resurface as locked again. If a Dubai shop offers an "unlock" for AED 50 with no IMEI involved, walk away - it's a software or SIM-tray trick that will fail.
          </p>
          <p>
            <strong>What we do:</strong> submit your IMEI through carrier-authorised channels (or Apple-authorised partner portals) so the iPhone is registered as Unlocked in Apple's GSX database. Permanent. Survives every iOS update and Erase All Content. Verifiable on Apple's <em>checkcoverage.apple.com</em> page after completion.
          </p>
          <p>
            <strong>Blacklist warning:</strong> if the iPhone was reported lost, stolen, or has unpaid contract balance, the IMEI is blacklisted. Carriers will refuse to unlock blacklisted IMEIs, and the workshop refuses to take payment for these jobs. Free IMEI check identifies blacklist status in 5 minutes - bring the phone or send the IMEI on WhatsApp.
          </p>
        </div>
      }
      problems={[
        { title: "Bought iPhone in the US, locked to AT&T, want to use du SIM", body: "Most common ticket. AT&T unlock if the contract is paid off - AED 450, 1-5 days, permanent. Free IMEI check first to confirm contract status." },
        { title: "Locked to Etisalat from a postpaid contract", body: "Etisalat lets postpaid customers unlock their own device for free after the contract ends. The workshop helps with the application if you don't want to deal with the call centre. AED 350, 1-3 days." },
        { title: "T-Mobile USA unlock for travelling abroad", body: "T-Mobile unlocks once the device is paid off and the line has been active for 40+ days. Workshop processes the request via official channels. AED 550, 2-5 days." },
        { title: "Sprint / Boost iPhone - hard to unlock", body: "Sprint policy is the strictest. Workshop has access to premium IMEI unlock channels but pricing is higher (AED 650, 3-7 days). Not all Sprint IMEIs are eligible - free check first." },
        { title: "iPhone bought from Carrefour or Sharaf DG, unlocked from new", body: "UAE retail iPhones are factory unlocked - no service needed. Free check confirms in 30 seconds." },
        { title: "Blacklisted IMEI (reported lost or stolen)", body: "Cannot be unlocked. Carriers maintain global blacklists shared via the GSMA database. Workshop refuses these jobs and recommends not buying the device." },
        { title: "No SIM available message", body: "Not always a network lock - sometimes a SIM tray issue (AED 100 swap) or Lightning/USB-C port damage near the modem antenna. Free diagnosis confirms hardware vs lock." },
        { title: "Phone unlocked on iOS 16 but re-locked after iOS 17 update", body: "That was a fake unlock (R-SIM or jailbreak). The workshop's IMEI unlock cannot re-lock - it's stored in Apple's GSX database, not the iPhone. Permanent." },
        { title: "Want to use a foreign SIM while travelling temporarily", body: "If only travelling 1-2 weeks, eSIM with an international roaming plan (Airalo, Holafly) costs less than unlocking and works on locked iPhones. Free advice before any payment." },
        { title: "Japan SoftBank / KDDI / NTT Docomo iPhone", body: "Japanese carriers unlock for free for the original owner via their app. Workshop helps with the process for non-Japanese-speaking customers. AED 750, 3-7 days when the workshop submits on the customer's behalf." },
      ]}
      steps={[
        { title: "WhatsApp the IMEI (Settings > General > About)", body: "IMEI is 15 digits. Send it with the current carrier name. Free status check returns in 10 to 30 minutes during business hours." },
        { title: "Status check confirms eligibility", body: "Workshop runs the IMEI through the carrier's eligibility database. If clean and unlockable, quote and timeline given. If blacklisted or ineligible, refunded immediately." },
        { title: "Payment + IMEI submission", body: "Payment on confirmation of eligibility. IMEI submitted through carrier-authorised channel or Apple partner portal." },
        { title: "Carrier processing window", body: "Most unlocks complete within 1 to 5 days. Carrier-side processing - the workshop tracks and chases on the customer's behalf." },
        { title: "Activation on the iPhone", body: "Once the carrier confirms unlock, the iPhone is updated automatically when connected to Wi-Fi or via SIM swap. Some require an iTunes/Finder restore - the workshop runs this on the bench at no extra charge." },
        { title: "Verification + receipt", body: "Apple's checkcoverage.apple.com page is checked to confirm the iPhone shows as 'Unlocked'. Customer receives written confirmation. Permanent - survives all future iOS updates and erases." },
      ]}
      warrantyDays={0}
      warrantyBullets={[
        "Money-back guarantee if the unlock fails after eligibility was confirmed (rare - eligibility check filters most failures upfront).",
        "Covered: re-lock issues caused by carrier-side processing errors within 30 days.",
        "Not covered: re-lock from rolling back to iOS via DFU + downgrade exploit (which only works on very old iPhones), or post-unlock blacklisting if the customer reports the device lost.",
      ]}
      comparisonRows={[
        ["Method",                       "IMEI registered in Apple GSX database",          "Carrier app or call centre"],
        ["Permanence",                   "Permanent - survives updates & erase",           "Permanent (when done by carrier)"],
        ["Etisalat UAE - paid postpaid", "AED 350 with paperwork help",                    "Free if you call carrier directly"],
        ["AT&T USA",                     "AED 450, 1-5 days",                              "Free if you're the AT&T account holder"],
        ["Sprint USA",                   "AED 650, 3-7 days",                              "Often refused for non-account-holder"],
        ["Blacklisted IMEI",             "Refused (no payment taken)",                     "Refused"],
        ["Verification on Apple checkcoverage.apple.com", "Yes",                            "Yes (when carrier confirms)"],
        ["Free IMEI status check",       "Yes",                                            "Carrier app required"],
        ["Warranty",                     "30 days money-back if unlock fails",             "Carrier policy varies"],
      ]}
      faqs={[
        { q: "How much does iPhone network unlock cost in Dubai?", a: "From AED 350 for clean Etisalat, du, or Verizon IMEIs. AED 450 for AT&T and most UK carriers. AED 550 for T-Mobile. AED 650 for Sprint. AED 750 for Japan and Korea. Blacklisted IMEIs cannot be unlocked at any price. Free IMEI status check before any payment." },
        { q: "Is the unlock permanent?", a: "Yes - the unlock is registered in Apple's GSX database against the IMEI, not stored on the device. It survives iOS updates, factory resets, and SIM swaps. You can verify on checkcoverage.apple.com after the unlock completes." },
        { q: "Will the unlock void my warranty?", a: "No - IMEI-based carrier unlocks are an officially recognised process. Apple's warranty (and AppleCare+ if active) remains valid. Jailbreak unlocks would void the warranty, but the workshop does not offer those." },
        { q: "Why not just jailbreak and use an R-SIM?", a: "Three reasons: it's temporary (re-locks after iOS updates), it can brick the phone, and it voids Apple's warranty. R-SIM hardware bypass is also blocked from iPhone XS onward by Apple's modem firmware. The workshop refuses jailbreak-based unlock work." },
        { q: "What's an IMEI and where do I find it?", a: "International Mobile Equipment Identity - a 15-digit serial number unique to your iPhone. Find it in Settings > General > About > IMEI, or by dialling *#06# from the Phone app, or printed inside the SIM tray. Send it on WhatsApp for the free eligibility check." },
        { q: "Can you unlock a stolen iPhone?", a: "No. The workshop checks the IMEI against the global GSMA blacklist database before accepting any job. Blacklisted IMEIs (reported lost or stolen) are refused - no payment taken. The workshop will not help with devices that cannot be proven to belong to the customer." },
        { q: "How long does the unlock take?", a: "Etisalat, du, Verizon: 1 to 3 days. AT&T, T-Mobile: 1 to 5 days. UK carriers: 2 to 7 days. Sprint, Japan, Korea: 3 to 7 days. The workshop tracks the carrier-side processing and updates the customer daily." },
        { q: "Will my iPhone work with a UAE SIM after unlock?", a: "Yes - once unlocked, the iPhone accepts any GSM carrier worldwide. Etisalat, du, Virgin Mobile UAE, and any international SIM. eSIM activation also works post-unlock if the iPhone supports eSIM." },
        { q: "Can you unlock if I bought the iPhone second-hand?", a: "Only if the original carrier contract is paid off and the IMEI isn't blacklisted. The workshop's free IMEI check identifies both conditions in minutes. Many second-hand iPhones from the US are still under contract or have unpaid balances - these cannot be unlocked." },
        { q: "What if my iPhone is from Japan or Korea?", a: "Japan SoftBank, KDDI, and NTT Docomo can be unlocked for free directly through the carrier's app - the workshop helps with the process for non-Japanese-speaking customers. AED 750, 3-7 days. Korean carriers are similar." },
      ]}
      reviewNames={["Saeed Alam", "Wellington Academy", "Tim Quick"]}
      relatedSlugs={["/iphone-icloud-unlock-dubai", "/iphone-software-fix-dubai", "/iphone-screen-repair-dubai"]}
    />
  );
}
