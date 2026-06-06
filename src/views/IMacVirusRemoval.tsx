"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IMacVirusRemoval() {
  return (
    <SubServicePageTemplate
      seoTitle="iMac Virus & Malware Removal Dubai - Home Visit | 055 741 3706"
      seoDescription="iMac virus and malware removal Dubai. Browser hijackers, suspicious profiles, deep clean. AED 300. Same day. Free home visit available."
      path="/imac-virus-removal-dubai"
      eyebrow="iMac malware removal"
      h1="iMac Virus & Malware Removal Dubai"
      subtitle="Macs do get malware - usually adware, browser hijackers, fake 'system cleaners' or rogue MDM profiles installed by a misleading download. We do a deep clean across user library, launch agents, profiles and browsers, then verify with three independent scanners."
      startingPrice={300}
      timeline="Same day"
      whatsappPrefill="Hi, my iMac may have malware - what's happening:"
      breadcrumb={[
        { name: "Home",                path: "/" },
        { name: "iMac Repair",         path: "/imac-screen-repair-dubai" },
        { name: "Virus Removal",       path: "/imac-virus-removal-dubai" },
      ]}
      technician={{ name: "Sayed", years: 12, specialisation: "macOS deep cleaning and security" }}
      serviceName="iMac Virus and Malware Removal"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>If Safari keeps opening to a different search engine, pop-ups appear over websites, or you can't change the homepage - that's malware, not a broken Mac.</strong> macOS adware and browser hijackers are common, especially after downloading a 'free' converter or codec from a Google Ad result.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed">
            We clean it all out: malicious launch agents, configuration profiles installed without you realising, browser extensions you didn't add, modified DNS settings, and rogue applications hiding in /Library and ~/Library. After cleaning we run three different scanners - Malwarebytes, KnockKnock and our own checklist - to confirm a clean machine. We also walk you through how it got in so it doesn't happen again.
          </p>
        </>
      }
      whatWeFix={[
        "Browser hijackers (Bing redirects, fake search engines)",
        "Pop-up adware that appears over normal websites",
        "'Mac Cleaner' / 'Advanced Mac Cleaner' style scareware",
        "Rogue configuration profiles installed by malicious apps",
        "Suspicious launch agents and login items",
        "Modified hosts file or DNS hijacking",
      ]}
      steps={[
        { title: "Symptom interview",         body: "We ask what you've been seeing, when it started and what you may have downloaded recently. Often points straight at the culprit." },
        { title: "Launch agents and profiles", body: "We audit /Library/LaunchAgents, /Library/LaunchDaemons, ~/Library and System Settings → Privacy & Security → Profiles for anything you didn't install." },
        { title: "Browser deep clean",         body: "Safari, Chrome and Firefox: extensions, search engines, homepage, notifications, opened-tab persistence, all reset. Bookmarks and passwords preserved." },
        { title: "Triple scan and verify",     body: "Malwarebytes, KnockKnock and a manual file system check confirm zero remaining threats. You leave with a written all-clear." },
      ]}
      warrantyDays={30}
      warrantyBullets={[
        "30-day re-clean if the same malware comes back from the same source.",
        "We show you what we removed and how to avoid it.",
        "No 'subscription antivirus' upsell - macOS doesn't need one.",
      ]}
      faqs={[
        { q: "Do Macs really get viruses?", a: "True self-replicating viruses are rare on macOS. What's common is adware, browser hijackers, scareware and unwanted profiles - all of which can be just as disruptive. Yes, your iMac can be 'infected' in the practical sense." },
        { q: "Will I lose my files or photos?", a: "No. Cleaning is targeted at malware files only. Documents, Photos library, iCloud and bookmarks are never touched." },
        { q: "Can you come to my home or office?", a: "Yes. iMacs are heavy and awkward to transport - free home visit anywhere in Dubai mainland for virus removal jobs." },
        { q: "Do I need to buy antivirus afterwards?", a: "Almost never. Built-in macOS protections (XProtect, Gatekeeper, MRT) plus careful download habits are enough for most users. We don't sell antivirus subscriptions." },
        { q: "How did this happen?", a: "Usually a download from a search-ad result that pretended to be a real app installer (VLC, Flash Player, video converters). We'll show you the install date and the source so you can avoid it next time." },
        { q: "Is my online banking safe now?", a: "Once we've fully cleaned and verified, yes. We still recommend changing important passwords from a different trusted device after any malware infection - better safe than sorry." },
      ]}
      reviewNames={["Marianne Chehade El Dfouni", "Shah nawaz", "Ali Hassan"]}
      related={[
        { label: "iMac macOS Reinstall",   href: "/imac-os-reinstall-dubai",      description: "If the infection is severe, a clean install is the most certain fix." },
        { label: "iMac Full Diagnostic",   href: "/imac-full-diagnostic-dubai",   description: "Free check across hardware and software." },
        { label: "iMac Repair Hub",        href: "/imac-screen-repair-dubai",     description: "All iMac services in one place." },
      ]}
      blogLink={{ label: "Mac malware in 2026 - what's actually out there and how it gets in", href: "/blog/macbook-running-slow-10-fixes" }}
    />
  );
}
