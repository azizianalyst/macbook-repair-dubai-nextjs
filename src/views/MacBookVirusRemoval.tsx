"use client";
import { ShieldAlert, MessageCircle, Phone, ShieldCheck, AlertTriangle, Wrench, Star, Bug } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { QuickAnswer, deriveServiceQuickAnswer } from "@/components/blocks/QuickAnswer";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { PageMeta } from "@/components/blocks/PageMeta";
import { PricingTable, type PricingRow } from "@/components/blocks/PricingTable";
import { StepList } from "@/components/blocks/StepList";
import { FAQAccordion, type FAQ } from "@/components/blocks/FAQAccordion";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { TechnicianBadge } from "@/components/blocks/TechnicianBadge";
import { RelatedServices } from "@/components/blocks/RelatedServices";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { WarrantyBar } from "@/components/blocks/WarrantyBar";
import { QuoteBand } from "@/components/blocks/QuoteBand";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema } from "@/lib/schema";
import { pickReviews } from "@/lib/find-reviews";
import { NAP } from "@/content/site";

const PRICING: PricingRow[] = [
  { model: "Standard scan + clean (adware, hijacker, profiles)",     price: 250, timeline: "Same day · 2 hours" },
  { model: "Deep clean (cryptominer, persistent malware)",           price: 350, timeline: "Same day · 4 hours" },
  { model: "Full clean + macOS reinstall (preserves files)",         price: 400, timeline: "Same day · 6 hours" },
  { model: "Ransomware analysis (no decryption guarantee)",          price: 500, timeline: "1-2 days"           },
  { model: "Browser hijacker only (Safari/Chrome/Firefox)",          price: 200, timeline: "Same day · 1 hour"  },
  { model: "Suspicious profile removal (MDM / config profiles)",     price: 200, timeline: "Same day · 1 hour"  },
  { model: "Hardening + setup (firewall, FileVault, password mgr.)",  price: 250, timeline: "Same day"          },
  { model: "Family pack (3 Macs same household, scan + clean)",      price: 600, timeline: "1 day"              },
];

const COMMON_THREATS = [
  { title: "Adware - pop-ups in browser, fake \"system warnings\"",
    body: "By far the most common Mac infection in 2024-2025. Loaded via fake Flash updaters, pirated software, or compromised ads. Symptoms: pop-ups for VPNs, antivirus, or \"your Mac is at risk\". AED 250 standard clean removes the launch agents and login items same day." },
  { title: "Browser hijackers - search engine changed, weird homepage",
    body: "Replaces Google with Bing-clone or Yahoo-clone search that funnels through ad networks. Often installs a Safari extension you didn't approve. AED 200 browser-only clean restores Google search and removes the malicious extension across Safari, Chrome, and Firefox." },
  { title: "Cryptominers - fans run constantly, MacBook hot in idle",
    body: "Hidden process uses your CPU/GPU to mine Monero or other privacy coins. Symptoms: 100% CPU in idle, fans loud, battery drains in 90 minutes instead of 8 hours. AED 350 deep clean - Activity Monitor inspection, launchctl audit, /Library/LaunchDaemons review." },
  { title: "Suspicious config profiles installed without permission",
    body: "MDM profiles can override DNS, install root certificates, monitor screen activity, and block app installation. Often arrive bundled with \"free VPN\" apps. AED 200 profile removal - System Settings &gt; Privacy &gt; Profiles, plus a check for hidden mobileconfig files in /Library/Managed Preferences." },
  { title: "Fake antivirus / fake \"Mac Cleaner\" apps",
    body: "MacKeeper, Advanced Mac Cleaner, MacShield, Mac Speedup Pro - all fake utilities that pop up warnings to push subscriptions. They are not real antivirus, they are the malware. AED 250 standard clean removes them and the receipts they leave behind in macOS payload." },
  { title: "Phishing certificate installed in Keychain",
    body: "Some malware installs root certificates so it can intercept HTTPS traffic. AED 250 standard clean removes any custom roots from System and Login keychains, reverting to the Apple-shipped trust store only." },
  { title: "Ransomware (rare on Mac, but real)",
    body: "Most reported Mac ransomware (KeRanger, ThiefQuest) uses asymmetric encryption - recovery without the attacker's key is impossible. The workshop's AED 500 ransomware analysis identifies the strain and confirms whether decryption is possible (rare). Time Machine backup is the actual recovery path - AED 400 restore service." },
  { title: "Login items running unknown background processes",
    body: "Apps that launch at login without you adding them. Often signs of bundleware from pirated software or fake updaters. Free part of every clean - System Settings &gt; General &gt; Login Items audit + launchctl print check." },
  { title: "Safari extensions you don't recognise",
    body: "\"Search Master\", \"Helper Tool\", \"PDF Converter Pro\" - vague names indicating ad-injection or data harvesting. AED 200 browser clean removes them and resets the extension trust list." },
  { title: "Mac slow / freezing after installing a \"free\" app",
    body: "Often a real piece of malware bundled with the free download. Free 15-minute diagnosis confirms whether it's malware or just a normal slow-Mac issue (full disk, low RAM). About 30% of \"my Mac is slow\" tickets turn out to be hygiene rather than infection - those are fixed during diagnosis at no charge." },
];

const STEPS = [
  { title: "WhatsApp the symptoms",
    body: "Pop-ups? Fans loud? Search engine changed? Send a description and a screenshot if you have one. Reply within 4-8 minutes during business hours." },
  { title: "Drop off or free pickup",
    body: "Walk in to Office #45, Concord Tower, Media City, or book a free pickup. Bring your Apple ID password - needed to remove some configuration profiles." },
  { title: "Free 15-minute diagnosis",
    body: "Activity Monitor scan, launchctl audit, /Library/LaunchAgents and /Library/LaunchDaemons review, browser extensions audit. Tells the technician within 15 minutes whether it's malware (paid clean) or hygiene (free fix)." },
  { title: "Clean - surgical not nuclear",
    body: "The workshop removes the specific malicious processes, profiles, agents, and extensions identified in diagnosis. Your data, apps, settings, and browser bookmarks all stay intact. Reinstall is reserved for cases where clean isn't enough." },
  { title: "Verify + harden",
    body: "After clean, the Mac runs for 60 minutes monitored. Activity Monitor checked again, launchctl re-verified, browser extensions re-audited. Then optional hardening: firewall on, FileVault on, Gatekeeper at App Store + identified developers, automatic updates verified." },
  { title: "Handover + 30-day re-clean guarantee",
    body: "Written report listing every malicious item removed and where it lived. If the same infection returns within 30 days, free re-clean. Different infection within 30 days is a new ticket." },
];

const FAQS: FAQ[] = [
  { q: "Can a Mac actually get a virus?",
    a: "Yes - the \"Macs don't get viruses\" line is a 2005 myth. macOS faces real malware: adware, browser hijackers, cryptominers, fake utilities, and even the occasional ransomware. Apple's built-in XProtect catches some, but it lags behind new threats by weeks. The workshop sees Mac infection tickets every week - it's roughly 8% of total volume." },
  { q: "How much does Mac virus removal cost in Dubai?",
    a: "Standard scan + clean: AED 250 same day, covers 80% of cases. Deep clean for cryptominer or persistent malware: AED 350. Full clean + macOS reinstall preserving your files: AED 400. Browser hijacker only: AED 200. Suspicious profile removal only: AED 200. Free 15-minute diagnosis confirms which category before any payment." },
  { q: "How long does virus removal take?",
    a: "Standard clean: 2 hours same day. Deep clean (cryptominer, persistent malware): 4 hours same day. Full clean + macOS reinstall: 6 hours, usually still same day for a morning drop-off. Ransomware analysis: 1-2 days because it requires deeper forensic work." },
  { q: "Will I lose my files during virus removal?",
    a: "No. Standard and deep clean leave files, apps, and settings intact - the workshop removes the specific malicious components only. Even macOS reinstall preserves your user folder using the Apple-supported \"reinstall over existing\" option. The workshop still recommends a Time Machine backup before any service." },
  { q: "When do you recommend reinstalling macOS instead of cleaning?",
    a: "Three scenarios: (1) the malware has installed kernel extensions or modified system files (Apple Silicon makes this rare); (2) cryptominer is using rootkit techniques to hide; (3) the customer wants a clean baseline for peace of mind. AED 400 reinstall preserves your files. Without files preserved, the same job is AED 300." },
  { q: "What about ransomware - can you decrypt my files?",
    a: "Honestly: usually no. Modern ransomware uses asymmetric encryption - only the attacker's private key can decrypt. The workshop's AED 500 ransomware analysis identifies the strain (KeRanger, ThiefQuest, EvilQuest, others) and confirms whether free decryptors exist (No More Ransom project). If a Time Machine or iCloud backup exists from before the infection, AED 400 restore is the actual recovery path." },
  { q: "Should I install antivirus on my Mac?",
    a: "macOS has XProtect built in, which catches the major threats. If you want extra coverage, the workshop recommends Malwarebytes for Mac (free version) for periodic on-demand scans, plus uBlock Origin in your browser to block 95% of malicious ad-network entry points. The workshop does NOT recommend the all-in-one suites that themselves slow the Mac down." },
  { q: "How did my Mac get infected?",
    a: "Most common entry points in 2024-2025 tickets: (1) fake Flash or codec updaters from pirated streaming sites; (2) cracked software downloaded from torrent sites; (3) fake VPN apps from non-App-Store sources; (4) compromised ad networks delivering drive-by adware; (5) phishing emails with malicious attachments. The workshop's free hardening session covers prevention." },
  { q: "What's the warranty on virus removal?",
    a: "30-day re-clean guarantee. If the same infection returns within 30 days of the clean, the workshop re-cleans free of charge. A different infection within 30 days is treated as a new ticket because it indicates the customer's habits, not a missed clean." },
  { q: "Will Touch ID, Apple Pay, and iCloud still work after the clean?",
    a: "Yes - the clean removes malicious launch agents and profiles, not anything Apple installed. Touch ID, Apple Pay, iCloud, Find My, FileVault all continue to work with no re-setup needed. Custom certificates added by malware are removed; legitimate Apple certificates are preserved." },
  { q: "Can you check my Mac for spyware (e.g. installed by an ex)?",
    a: "Yes - this is a serious request and handled discreetly. AED 350 deep scan looks for screen-recording profiles, keyloggers, hidden launch agents, screen-sharing settings turned on without your knowledge, and Family Sharing surveillance setups. Written report at the end. NDA available on request." },
  { q: "Do you offer free pickup for virus removal?",
    a: "Yes, free pickup and delivery across Dubai mainland. Same-hour pickup from Internet City, Knowledge Village, JLT, Al Barsha. Same-day from Marina, Downtown, JBR, Palm. Sharjah and Abu Dhabi pickup AED 100 each way." },
];

const PREVENTION = [
  { title: "Use the App Store for software whenever possible",
    body: "Apple reviews every App Store submission. Outside the store, only download from verified developer websites - never from \"free download\" aggregator sites." },
  { title: "Keep macOS updated",
    body: "System Settings &gt; General &gt; Software Update - turn on \"Automatic Updates\" and \"Install Security Responses & system files\". Apple ships XProtect updates silently every few weeks." },
  { title: "Run an ad-blocker",
    body: "uBlock Origin (Safari, Chrome, Firefox) blocks 95% of malicious ad-network deliveries. Free, open-source, and the workshop installs it as part of every clean." },
  { title: "Be sceptical of \"system warning\" pop-ups in browser",
    body: "Real macOS warnings never appear inside a browser tab. If a website says your Mac is infected and tells you to call a number - close the tab, the warning is the malware." },
  { title: "Audit Login Items quarterly",
    body: "System Settings &gt; General &gt; Login Items. Anything unfamiliar - uninstall the parent app or remove the login item directly." },
];

const COMPARISON = [
  ["Repair window",                      "Same day to 2 days",                "5 to 10 business days, mail-in"],
  ["Standard scan + clean",              "AED 250",                            "Refused - refers to third party"],
  ["Deep clean / cryptominer",           "AED 350",                            "Refused - refers to third party"],
  ["Reinstall + file preservation",      "AED 400",                            "AED 749 list (genius bar)"],
  ["Free 15-min diagnosis",              "Yes",                                 "AED 379 evaluation fee"],
  ["Free pickup in Dubai",               "Yes",                                 "No, customer must courier"],
  ["30-day re-clean guarantee",          "Yes",                                 "Not offered"],
  ["Spyware / stalkerware audit",        "AED 350 with NDA",                   "Not offered"],
];

export default function MacBookVirusRemoval() {
  const reviews = pickReviews([
    "Linda Banannou",
    "Stephen Quinn",
    "Polycarp",
    "Faizal Hussain",
    "Aleksandra Ładna",
    "Tanja Lykke Sørensen",
  ]);

  useSeo(
    {
      title: "MacBook Virus & Malware Removal Dubai - From AED 250",
      description:
        "MacBook virus, adware, cryptominer, hijacker removal in Dubai from AED 250. Same-day. Free diagnosis, 30-day re-clean guarantee. M1-M5 + Intel. 055 741 3706.",
      path: "/macbook-virus-removal-dubai",
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "MacBook Virus & Malware Removal Dubai",
        price: 250,
        timeline: "Same day to 2 days",
        warranty: "P15D",
        url: "/macbook-virus-removal-dubai",
        description:
          "MacBook virus, adware, cryptominer, browser hijacker, suspicious profile, and spyware removal in Dubai. Same-day clean. 30-day re-clean guarantee.",
      }),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image="/images/topics/macbook-virus-removal-dubai.jpg"
        imageAlt="Mac virus and malware removal Dubai - security cleanup infographic"
        variant="service"
        tone="dark"
        eyebrow="MacBook virus & malware removal"
        title="MacBook Virus & Malware Removal Dubai"
        subtitle="Pop-ups, hijacked search, fans loud in idle, fake antivirus warnings. Free 15-minute diagnosis, AED 250 standard clean, 30-day re-clean guarantee."
        startingPrice={250}
        timeline="Same day · 1-2 days"
      >
        <PageMeta author="Usman, MacBook Software Specialist" />
      </Hero>

      {/* Answer-first capsule (AEO/BLUF) */}
      <QuickAnswer tone="dark" {...deriveServiceQuickAnswer({ serviceName: "MacBook virus and malware removal", startingPrice: 250, timeline: "same-day" })} />

      <WarrantyBar tone="dark" warrantyDays={15} />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home",                  path: "/" },
          { name: "MacBook Repair",        path: "/" },
          { name: "Virus & Malware Removal", path: "/macbook-virus-removal-dubai" },
        ]} />
      </section>

      <div className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <div className="max-w-[820px] flex flex-col gap-3xl">
          {/* Intro */}
          <section>
            <p className="text-[17px] text-text leading-relaxed">
              MacBook virus and malware removal in Dubai starts at AED 250 for a standard clean and finishes the same day on most tickets. The workshop has cleaned 980+ infected MacBooks since the rise of Mac adware around 2018 - adware pop-ups, browser hijackers swapping Google for fake search engines, cryptominers running fans at 100% in idle, suspicious MDM profiles installed by free VPN apps, and the occasional ransomware case. The "Macs don't get viruses" line is a 2005 myth; in 2024-2025 macOS infections account for roughly 8% of total workshop volume. Free 15-minute diagnosis filters out the 30% of "my Mac is slow" tickets that turn out to be hygiene rather than infection - those get fixed during diagnosis at no charge.
            </p>
          </section>

          {/* Mac malware myth */}
          <section className="bg-bg-alt rounded-md p-lg border border-border">
            <h2 className="text-[22px] mb-md flex items-center gap-sm text-text">
              <Bug size={24} className="text-accent" aria-hidden /> Yes, Macs really do get malware
            </h2>
            <p className="text-[15px] text-text-muted leading-relaxed mb-md">
              Apple's own security report flags adware, trojans, and ransomware as active macOS threats. XProtect (built into macOS) blocks the well-known strains, but lags 2-6 weeks behind new threats. The workshop's 2024-2025 logbook by category:
            </p>
            <ul className="space-y-2 text-[14px] text-text-muted">
              <li><strong className="text-text">Adware (pop-ups, fake updaters):</strong> 60% of infection tickets.</li>
              <li><strong className="text-text">Browser hijackers (search engine changed):</strong> 18%.</li>
              <li><strong className="text-text">Suspicious MDM / config profiles:</strong> 9%.</li>
              <li><strong className="text-text">Cryptominers (CPU/GPU stolen for mining):</strong> 7%.</li>
              <li><strong className="text-text">Ransomware:</strong> 2% - rare but real.</li>
              <li><strong className="text-text">Spyware / stalkerware audits:</strong> 4%.</li>
            </ul>
          </section>

          {/* Models + pricing */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md text-text">Service tiers + pricing</h2>
            <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
              Every macOS version from El Capitan (10.11) through Sequoia (15) and Tahoe (16). Apple Silicon and Intel both supported.
            </p>
            <PricingTable service="Virus & malware removal" rows={PRICING} tone="dark" />
          </section>

          {/* Common threats */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm text-text">
              <AlertTriangle size={28} className="text-accent" aria-hidden /> Common threats we remove
            </h2>
            <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
              The 10 highest-volume malware categories at the workshop in 2024-2025.
            </p>
            <div className="grid gap-md md:grid-cols-2">
              {COMMON_THREATS.map((p) => (
                <article key={p.title} className="border border-border bg-bg-card rounded-md p-lg">
                  <h3 className="text-[16px] font-bold mb-sm text-text">{p.title}</h3>
                  <p className="text-[14px] text-text-muted leading-relaxed">{p.body}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Process */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm text-text">
              <Wrench size={28} className="text-accent" aria-hidden /> Our virus removal process
            </h2>
            <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
              Six steps. Surgical clean, not nuclear - files, apps, and settings stay intact.
            </p>
            <StepList steps={STEPS} tone="dark" />
          </section>

          <QuoteBand
            service="MacBook Virus & Malware Removal"
            startingPrice={250}
            timeline="Same day · 1-2 days"
            whatsappMessage="Hi Usman, MacBook virus / malware removal please. Symptoms: "
          />

          {/* Clean vs reinstall decision */}
          <section className="bg-bg-alt rounded-md p-lg border border-border">
            <h2 className="text-[22px] mb-md flex items-center gap-sm text-text">
              <ShieldAlert size={24} className="text-accent" aria-hidden /> Clean vs reinstall macOS - when each is right
            </h2>
            <div className="grid gap-md md:grid-cols-2">
              <div>
                <h3 className="text-[16px] font-bold mb-sm text-text">Standard / deep clean (AED 250-350)</h3>
                <p className="text-[14px] text-text-muted leading-relaxed">Right for: adware, hijackers, profiles, fake utilities, cryptominers without rootkit techniques. About 90% of infection tickets. Files, apps, settings all stay intact.</p>
              </div>
              <div>
                <h3 className="text-[16px] font-bold mb-sm text-text">Reinstall macOS (AED 400)</h3>
                <p className="text-[14px] text-text-muted leading-relaxed">Right for: rootkit suspicion, customer wants clean baseline, or 2nd infection within 60 days. Apple-supported reinstall over existing install preserves your files. Adds 4 hours of work to the clean.</p>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md text-text">How long does virus removal take?</h2>
            <div className="grid gap-md md:grid-cols-3">
              <article className="bg-accent/5 border border-accent/30 rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm text-text">Same day (1-2 hours)</h3>
                <p className="text-[14px] text-text-muted leading-relaxed">Standard clean for adware, hijackers, profiles, fake utilities. Browser-only clean. About 70% of tickets.</p>
              </article>
              <article className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm text-text">Same day (4-6 hours)</h3>
                <p className="text-[14px] text-text-muted leading-relaxed">Deep clean for cryptominer or persistent malware. Full clean + macOS reinstall preserving files. Morning drop-off ready by 7 pm.</p>
              </article>
              <article className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm text-text">1-2 days</h3>
                <p className="text-[14px] text-text-muted leading-relaxed">Ransomware analysis with strain identification. Spyware / stalkerware audit with full NDA report. Family pack (3 Macs same household).</p>
              </article>
            </div>
          </section>

          {/* Prevention */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md text-text">Prevention - staying clean after the clean</h2>
            <div className="grid gap-md md:grid-cols-2">
              {PREVENTION.map((p) => (
                <article key={p.title} className="border border-border bg-bg-card rounded-md p-lg">
                  <h3 className="text-[16px] font-bold mb-sm text-text">{p.title}</h3>
                  <p className="text-[14px] text-text-muted leading-relaxed">{p.body}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Warranty */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm text-text">
              <ShieldCheck size={28} className="text-accent" aria-hidden /> 30-day re-clean guarantee
            </h2>
            <div className="border border-border bg-bg-card rounded-md p-lg">
              <ul className="space-y-2 text-[15px] text-text">
                <li><strong>30 days</strong> - re-clean free of charge if the same infection returns.</li>
                <li><strong>Covered:</strong> the specific strain identified and removed in the clean report.</li>
                <li><strong>Not covered:</strong> a different infection within 30 days (treated as a new ticket - this points to the customer's habits, not a missed clean).</li>
                <li><strong>Hardening session</strong> on first clean is free - firewall, FileVault, automatic updates, ad-blocker installed.</li>
                <li><strong>Written report</strong> lists every malicious item removed and where it lived.</li>
              </ul>
            </div>
          </section>

          {/* Pricing recap */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md text-text">MacBook Virus Removal Dubai. Transparent Pricing</h2>
            <PricingTable service="Virus & malware removal" rows={PRICING} tone="dark" />
          </section>

          {/* Technician */}
          <section className="bg-bg-alt rounded-md p-lg border border-border">
            <h2 className="text-[22px] mb-md text-text">Lead technician on virus removal jobs</h2>
            <TechnicianBadge name="Usman" years={9} specialisation="macOS software & malware" tone="dark" />
            <p className="text-[14px] text-text-muted mt-md max-w-[70ch]">
              Usman has cleaned 900+ MacBooks since 2017 and runs every spyware audit personally with NDA on file. Background in macOS internals - launchctl, dtrace, and the Apple security framework.
            </p>
          </section>

          {/* DIY */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md text-text">When DIY makes sense - and when it doesn't</h2>
            <div className="grid gap-md md:grid-cols-2">
              <article className="bg-accent/5 border border-accent/30 rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm text-text">Try it yourself first</h3>
                <ul className="space-y-2 text-[14px] text-text-muted">
                  <li>Run Malwarebytes for Mac (free version) - catches 80% of common adware.</li>
                  <li>Remove unknown Login Items in System Settings &gt; General &gt; Login Items.</li>
                  <li>Reset browser settings: Safari &gt; Develop &gt; Empty Caches; Chrome chrome://settings/reset.</li>
                  <li>Check System Settings &gt; Privacy &gt; Profiles - uninstall any profile you didn't intentionally add.</li>
                </ul>
              </article>
              <article className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm text-text">Stop and bring it in</h3>
                <ul className="space-y-2 text-[14px] text-text-muted">
                  <li>Cryptominer suspected (fans loud in idle) - needs launchctl audit beyond free tools.</li>
                  <li>Ransomware - files renamed with weird extensions. Don't pay; bring it in for analysis.</li>
                  <li>Stalkerware suspicion - needs experienced audit, not a generic scan.</li>
                  <li>Pop-ups returning after every Malwarebytes run - points to persistent agent that needs deeper removal.</li>
                </ul>
              </article>
            </div>
          </section>

          {/* Comparison */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md text-text">Virus Removal vs Apple Store Dubai</h2>
            <div className="overflow-x-auto border border-border rounded-md bg-bg-card">
              <table className="w-full text-[14px] min-w-[640px]">
                <thead className="bg-bg-alt">
                  <tr className="text-left">
                    <th className="px-md py-sm font-semibold text-text">Factor</th>
                    <th className="px-md py-sm font-semibold text-text">MacBook Repair Dubai</th>
                    <th className="px-md py-sm font-semibold text-text">Apple Store / AASP</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={row[0]} className={i % 2 ? "bg-bg-alt" : ""}>
                      <td className="px-md py-sm font-semibold text-text">{row[0]}</td>
                      <td className="px-md py-sm text-text">{row[1]}</td>
                      <td className="px-md py-sm text-text-muted">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-text-faint mt-sm mono">
              Apple's UAE policy on malware removal is to recommend reinstalling macOS - they don't perform surgical cleans. The workshop is the right call for a clean that preserves your files and settings.
            </p>
          </section>

          {/* Reviews */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm text-text">
              <Star size={28} className="text-star fill-star" aria-hidden /> Real customer reviews
            </h2>
            <p className="text-[14px] text-text-muted mb-lg">
              All six reviews verbatim from Google. <a href="/reviews/" className="text-accent font-semibold hover:underline">Read all 215+ →</a>
            </p>
            <ReviewGrid reviews={reviews} tone="dark" />
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md text-text">MacBook virus removal FAQ</h2>
            <FAQAccordion items={FAQS} injectSchema tone="dark" />
          </section>

          {/* Related */}
          <section>
            <RelatedServices tone="dark" items={[
              { label: "MacBook Data Recovery",       href: "/macbook-data-recovery-dubai",       description: "Files locked by ransomware? Recovery from Time Machine from AED 400." },
              { label: "MacBook Logic Board Repair",  href: "/macbook-logic-board-repair-dubai",  description: "When malware turns out to be a hardware fault - board diagnostics from AED 800." },
              { label: "MacBook Repair (Hub)",        href: "/",              description: "All MacBook services in one place - screen, battery, keyboard, board, water." },
            ]} />
          </section>

          {/* Sub-link block */}
          <section>
            <h2 className="text-[22px] mb-md text-text">More on Mac security</h2>
            <ul className="grid gap-2 md:grid-cols-2 text-[14px]">
              <li><a className="text-accent font-semibold hover:underline" href="/blog/macbook-running-slow-10-fixes/">Blog: MacBook running slow? 10 fixes that actually work</a></li>
              <li><a className="text-accent font-semibold hover:underline" href="/blog/macbook-battery-health-check-guide/">Blog: MacBook battery &amp; health-check guide</a></li>
            </ul>
          </section>

          {/* Location */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-lg text-text">Where to bring your MacBook</h2>
            <LocationBlock tone="dark" />
          </section>
        </div>
      </div>

      {/* Final CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-card p-xl md:p-2xl flex flex-col items-start gap-md">
          <h2 className="relative text-text text-[28px] md:text-[32px] max-w-[28ch]">Pop-ups? Fans loud? WhatsApp the symptoms - quote in 4 minutes</h2>
          <p className="relative text-text-muted text-[16px] max-w-[60ch]">
            Send a screenshot of the pop-up or a description of what changed. Free 15-minute diagnosis, AED 250 standard clean, 30-day re-clean guarantee.
          </p>
          <div className="relative flex flex-wrap gap-sm">
            <Button asChild variant="whatsapp" size="lg">
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden /> Message on WhatsApp
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="border border-border-strong bg-bg-card text-text hover:bg-bg-alt">
              <a href={`tel:${NAP.phoneE164}`}>
                <Phone aria-hidden /> {NAP.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>
      </div>
    <RelatedArticles path="/macbook-virus-removal-dubai" />
    </PageShell>
  );
}
