"use client";
import { Star, MessageCircle, Phone, Settings, Check, Mail, RefreshCw, UserPlus } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { Hero } from "@/components/blocks/Hero";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/router-compat";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema, breadcrumbs, itemList } from "@/lib/schema";
import { NAP } from "@/content/site";

const SERVICES = [
  { title: "New Mac setup", body: "Out-of-box setup, macOS configured, system preferences and security tuned, ready to work the moment you switch on.", icon: Settings },
  { title: "Email, Wi-Fi & VPN", body: "Mail, Exchange, Wi-Fi networks and company VPN configured on Mac, iPhone and iPad so everything syncs.", icon: Mail },
  { title: "User accounts & security", body: "Standard and admin accounts, FileVault encryption, Touch ID, Find My and screen-lock policies set up.", icon: UserPlus },
  { title: "Office, Outlook & apps", body: "Microsoft Office, Outlook, Teams, Adobe and your everyday apps installed, licensed and signed in.", icon: Check },
  { title: "iCloud & Apple ID", body: "Apple ID, iCloud, iMessage, FaceTime and Continuity set up across all your Apple devices.", icon: RefreshCw },
  { title: "Data migration", body: "Full transfer from your old Mac or PC via Time Machine or Migration Assistant - files, apps, mail and settings.", icon: RefreshCw },
];

const FAQS = [
  { q: "Can you set up a brand-new MacBook for me?",
    a: "Yes. We do complete out-of-box setup - macOS configuration, Apple ID and iCloud, email, Wi-Fi, VPN, your apps and security settings - so you can start working straight away. Available in-shop, on-site at your office, or with free pickup and delivery." },
  { q: "Can you move everything from my old Mac or PC?",
    a: "Yes. We migrate your files, applications, mail, photos and settings from an old Mac using Time Machine or Migration Assistant, and from a Windows PC using a guided transfer. Your data is handled confidentially and verified on the new machine before handover." },
  { q: "Do you install Microsoft Office and Outlook?",
    a: "Yes - Microsoft Office, Outlook, Teams, OneDrive, Adobe apps and any other software you use can be installed, licensed and signed in. Bring your licence details or we'll advise on the right subscription." },
  { q: "Can you configure our company email and VPN?",
    a: "Yes. We set up Exchange/Microsoft 365, IMAP/POP mail, company Wi-Fi and VPN profiles on Mac, iPhone and iPad, and confirm send/receive and secure connection before we finish." },
  { q: "How much does setup and migration cost?",
    a: "Pricing depends on the number of devices and how much data is being moved. Single-device setup is a flat fee; multi-device and business roll-outs are quoted after a quick chat. WhatsApp us your requirement for a same-day quote." },
  { q: "Do you offer this for businesses rolling out multiple Macs?",
    a: "Yes. We handle multi-device roll-outs with consistent configuration, user accounts and security across the fleet - and you can fold ongoing support into an Annual Maintenance Contract." },
];

export default function MacSetupConfiguration() {
  useSeo(
    {
      title: "Mac Setup, Configuration & Data Migration Dubai - Same Day",
      description:
        "Apple device setup & data migration in Dubai. New Mac setup, email/Wi-Fi/VPN, Office & Outlook, iCloud, and full migration from old Mac or PC. On-site or free pickup. Call 055 741 3706.",
      path: "/mac-setup-data-migration-dubai",
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "Mac Setup, Configuration & Data Migration Dubai",
        price: 150,
        timeline: "Same day",
        warranty: "P15D",
        url: "/mac-setup-data-migration-dubai",
        description: "Apple device setup, configuration and data migration in Dubai - new Mac setup, email/Wi-Fi/VPN, Office & Outlook, iCloud and full migration from an old Mac or PC.",
      }),
      itemList({
        name: "Setup & configuration services",
        items: SERVICES.map((i) => ({ name: i.title, url: "/mac-setup-data-migration-dubai", description: i.body })),
      }),
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "Apple Repair", path: "/apple-repair-dubai" },
        { name: "Setup & Data Migration", path: "/mac-setup-data-migration-dubai" },
      ]),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image="/images/topics/mac-data-migration-dubai.jpg"
        imageAlt="Mac setup and data migration service Dubai - transfer workflow infographic"
        variant="service"
        tone="dark"
        eyebrow="Setup, configuration & migration · Dubai"
        title="Mac Setup, Configuration & Data Migration in Dubai"
        subtitle="New Mac to set up, or moving from an old Mac or PC? We configure macOS, email, Wi-Fi, VPN, Office, iCloud and migrate all your data - in-shop, on-site, or with free pickup and delivery."
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> 5.0 · 216+ reviews</span>
          <span>·</span>
          <span>Same-day service</span>
          <span>·</span>
          <span>On-site across Dubai</span>
        </p>
      </Hero>

      {/* Answer-first capsule (AEO/BLUF) */}
      <QuickAnswer
        tone="dark"
        question="Do you offer Mac setup and data migration in Dubai?"
        answer="Yes. MacBook Repair Dubai provides Mac setup, configuration and data migration in Dubai, new-Mac setup, account and email configuration, Time Machine backups, and transferring data from an old Mac or PC. Service is available at the Concord Tower workshop in Dubai Media City or on-site, with free pickup across Dubai mainland."
      />

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "Apple Repair", path: "/apple-repair-dubai" },
          { name: "Setup & Data Migration", path: "/mac-setup-data-migration-dubai" },
        ]} />
      </section>

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <p className="text-[18px] leading-relaxed max-w-[75ch] mb-md text-text">
          A new Mac is only useful once it's set up the way you work. We handle the whole thing - <strong>macOS configuration, Apple ID and iCloud, email, Wi-Fi and VPN, your apps, and a complete data migration</strong> from your old Mac or PC. Hand over the old and new machines and collect one that's ready to go, with nothing left behind.
        </p>
      </section>

      {/* Services */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <Settings size={28} className="text-accent" aria-hidden /> What we set up
          </h2>
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((i) => {
              const Icon = i.icon;
              return (
                <article key={i.title} className="border border-border bg-bg-card rounded-md p-lg">
                  <h3 className="text-[17px] font-bold mb-sm flex items-center gap-2"><Icon size={18} className="text-accent" aria-hidden /> {i.title}</h3>
                  <p className="text-[14px] text-text-muted leading-relaxed m-0">{i.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
          <RefreshCw size={28} className="text-accent" aria-hidden /> How migration works
        </h2>
        <div className="grid gap-md md:grid-cols-3">
          {[
            { title: "1 · Tell us your setup", body: "Your new device, your old Mac or PC, the email and apps you use, and any company network or VPN." },
            { title: "2 · We configure & migrate", body: "macOS, accounts, security, apps and a full data transfer - verified on the new machine before handover." },
            { title: "3 · Collect ready-to-work", body: "In-shop, on-site at your office, or via free pickup and delivery. We walk you through anything new." },
          ].map((c) => (
            <article key={c.title} className="border border-border bg-bg-card rounded-md p-lg">
              <h3 className="text-[18px] font-bold mb-sm">{c.title}</h3>
              <p className="text-[15px] text-text-muted leading-relaxed m-0">{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Setup & migration FAQ</h2>
        <FAQAccordion items={FAQS} injectSchema tone="dark" />
      </section>

      {/* Related guides */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[20px] font-semibold mb-md text-text">Related guides</h2>
        <ul className="flex flex-col gap-sm">
          <li><Link to="/migrating-data-from-old-macbook-to-new-macbook-without-icloud" className="text-accent underline underline-offset-2">Migrate MacBook without iCloud</Link><span className="text-text-muted text-[14px] ml-2">How to transfer data from an old MacBook to a new one without iCloud.</span></li>
        </ul>
      </section>

      {/* Location */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg">Visit us or book a pickup</h2>
        <LocationBlock tone="dark" />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl mb-3xl">
        <div className="relative overflow-hidden border border-border bg-bg-card rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <div className="relative flex flex-col items-start gap-md">
          <h2 className="text-text text-[28px] md:text-[32px] max-w-[30ch]">New Mac to set up? Get a quote in 4 minutes</h2>
          <p className="text-text-muted text-[16px] max-w-[60ch]">
            Tell us your new device, your old one, and what you need configured. Same-day service, on-site or free pickup across Dubai.
          </p>
          <div className="flex flex-wrap gap-sm">
            <Button asChild variant="whatsapp" size="lg">
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden /> Message on WhatsApp
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={`tel:${NAP.phoneE164}`}>
                <Phone aria-hidden /> {NAP.phoneDisplay}
              </a>
            </Button>
          </div>
          </div>
        </div>
      </section>
      </div>
      <RelatedArticles path="/mac-setup-data-migration-dubai" />
    </PageShell>
  );
}
