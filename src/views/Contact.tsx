"use client";
import { useState } from "react";
import { Copy, Check, Phone, MessageCircle, MapPin, ParkingCircle, Languages } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { LeadForm } from "@/components/blocks/LeadForm";
import { Button } from "@/components/ui/button";
import { NAP, HOURS } from "@/content/site";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization } from "@/lib/schema";

const FULL_ADDRESS = `${NAP.street}, ${NAP.area}, ${NAP.city}, UAE`;

const DIRECTIONS = [
  { from: "Palm Jumeirah",   minutes: 12, text: "Cross the monorail bridge, head toward Media City. We're in Concord Tower, 10th floor, office 45." },
  { from: "Downtown Dubai",  minutes: 18, text: "Sheikh Zayed Road westbound. Exit at Media City. Park at Concord Tower." },
  { from: "JLT",             minutes: 8,  text: "Al Sufouh Road northbound, 2 minutes past Knowledge Village. Concord Tower on the right." },
  { from: "Business Bay",    minutes: 20, text: "Sheikh Zayed Road westbound to Media City exit. Free pickup also available." },
];

const FAQS = [
  { q: "Do I need an appointment?",
    a: "No. Walk in any day except Sunday between 9 am and 10 pm. The diagnosis is free." },
  { q: "Where do I park?",
    a: "Paid parking on-site at Concord Tower and on the surrounding streets. Free spots usually open up after 8 pm." },
  { q: "Which languages do you speak?",
    a: "English, Arabic, Hindi, Urdu, and basic Russian. Shafiq handles most English and Urdu queries; Ali speaks Arabic." },
  { q: "Can someone collect my MacBook from home?",
    a: "Yes. Free pickup and delivery anywhere in Dubai, Monday to Saturday, 9 am to 5 pm. Send your address on WhatsApp." },
  { q: "What payment methods do you accept?",
    a: "Cash, VISA, Mastercard, American Express, and credit/debit cards. No bank transfers required." },
];

export default function Contact() {
  useSeo(
    {
      title: "Contact MacBook Repair Dubai - Concord Tower, Media City",
      description:
        "Visit MacBook Repair Dubai at Office #45, Concord Tower, Dubai Media City. Call 055 741 3706 or WhatsApp 24/7. Free diagnosis, walk-ins welcome, paid parking on-site.",
      path: "/contact",
    },
    [organization(), localBusiness()],
  );

  return (
    <PageShell>
      <div className="bg-primary text-on-primary -mb-[4rem]">
      <div className="pt-[96px] mx-auto max-w-content px-5 md:px-6">
        <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      </div>

      <Hero
        variant="service"
        tone="dark"
        eyebrow="Visit · call · WhatsApp"
        title="Contact MacBook Repair Dubai"
        subtitle="Office #45, 10th Floor, Concord Tower - Al Sufouh, Dubai Media City. Walk in any day except Sunday between 9 am and 10 pm."
      />

      {/* 2-col contact + form */}
      <section className="mx-auto max-w-content px-5 md:px-6 py-3xl grid gap-2xl md:grid-cols-12">
        {/* left: info */}
        <div className="md:col-span-5 flex flex-col gap-lg">
          <AddressBlock />

          <div className="flex flex-col gap-sm">
            <Button asChild variant="primary" size="lg">
              <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> {NAP.phoneDisplay}</a>
            </Button>
            <Button asChild variant="whatsapp" size="lg">
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden /> WhatsApp 24/7
              </a>
            </Button>
          </div>

          <div className="border border-white/10 bg-white/[0.04] rounded-md p-lg">
            <p className="font-heading font-semibold text-[14px] uppercase tracking-wider text-on-primary-muted mb-md">Hours</p>
            <ul className="text-[14px] space-y-1">
              {HOURS.map((h) => (
                <li key={h.day} className="flex justify-between">
                  <span>{h.day}</span>
                  <span className={"mono " + (h.open === "Closed" ? "text-danger" : "text-on-primary")}>{h.open}</span>
                </li>
              ))}
            </ul>
            <p className="text-[12px] text-on-primary-faint mt-md">WhatsApp is answered 24/7 - including Sundays.</p>
          </div>

          <div className="border border-white/10 bg-white/[0.04] rounded-md p-lg">
            <p className="font-heading font-semibold text-[14px] uppercase tracking-wider text-on-primary-muted mb-md">Payment &amp; parking</p>
            <p className="text-[14px] text-on-primary mb-2">Cash · VISA · Mastercard · American Express</p>
            <p className="text-[13px] text-on-primary-muted flex items-start gap-2">
              <ParkingCircle size={14} className="text-accent-bright mt-1 shrink-0" aria-hidden />
              Paid parking on-site at Concord Tower and on Al Sufouh Road.
            </p>
          </div>
        </div>

        {/* right: form */}
        <div className="md:col-span-7">
          <h2 className="m-0 mb-2">Tell us about your device</h2>
          <p className="text-[14px] text-on-primary-muted mb-lg">
            Two quick steps — your device, then how to reach you. We reply with a quote on your preferred channel, fast.
          </p>
          <LeadForm variant="full" sourcePath="/contact" />
        </div>
      </section>

      {/* maps full width */}
      <section className="bg-white/[0.02] border-y border-white/10">
        <div className="mx-auto max-w-content px-5 md:px-6 py-2xl">
          <iframe
            src="https://www.google.com/maps?q=Concord+Tower+Dubai+Media+City&output=embed"
            title="Map to MacBook Repair Dubai"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[420px] border-0 rounded-md"
          />
        </div>
      </section>

      {/* directions */}
      <section className="mx-auto max-w-content px-5 md:px-6 py-3xl">
        <p className="mono text-[12px] uppercase tracking-wider text-on-primary-faint mb-2">Drive times from Dubai landmarks</p>
        <h2 className="m-0 mb-xl">How to reach us</h2>
        <div className="grid gap-md md:grid-cols-2">
          {DIRECTIONS.map((d) => (
            <article key={d.from} className="border border-white/10 bg-white/[0.04] rounded-md p-lg">
              <div className="flex items-baseline justify-between gap-md mb-2">
                <h3 className="m-0 text-[18px]">{d.from}</h3>
                <span className="mono text-[14px] text-accent-bright">~{d.minutes} min</span>
              </div>
              <p className="text-[14px] text-on-primary-muted m-0">{d.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* faq */}
      <section className="bg-white/[0.02] border-y border-white/10">
        <div className="mx-auto max-w-content px-5 md:px-6 py-3xl">
          <h2 className="m-0 mb-xl">Visiting us - common questions</h2>
          <FAQAccordion items={FAQS} tone="dark" />
          <p className="text-[14px] text-on-primary-muted mt-lg flex items-center gap-2">
            <Languages size={16} className="text-accent-bright" aria-hidden />
            Multilingual reception · English · Arabic · Hindi · Urdu · basic Russian.
          </p>
        </div>
      </section>
      </div>
    </PageShell>
  );
}

function AddressBlock() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(FULL_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* clipboard not available - silent */ }
  };
  return (
    <div className="border border-white/10 bg-white/[0.04] rounded-md p-lg">
      <p className="font-heading font-semibold text-[14px] uppercase tracking-wider text-on-primary-muted mb-md flex items-center gap-2">
        <MapPin size={14} className="text-accent-bright" aria-hidden /> Address
      </p>
      <address className="not-italic text-[15px] leading-relaxed text-on-primary">
        {NAP.street}<br />
        {NAP.area}<br />
        {NAP.city}, UAE
      </address>
      <button
        type="button"
        onClick={copy}
        className="mt-md inline-flex items-center gap-2 text-[13px] font-semibold text-accent-bright hover:underline"
        aria-label="Copy full address"
      >
        {copied ? <><Check size={14} aria-hidden /> Copied</> : <><Copy size={14} aria-hidden /> Copy address</>}
      </button>
    </div>
  );
}

