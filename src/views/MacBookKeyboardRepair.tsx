"use client";
// MacBook Keyboard Repair - re-skinned in the dark theme to match the battery /
// screen repair pages (the canonical dark design). All content, pricing, problems,
// process, parts, warranty, comparison, reviews and FAQs are preserved verbatim;
// only the presentation moved to the dark design system (bg-primary band, glass
// cards, accent-bright). SEO/schema kept identical so rankings transfer.
import { type ReactNode } from "react";
import {
  Keyboard, MessageCircle, Phone, ShieldCheck, AlertTriangle, Wrench, Star,
  Check, Clock, MapPin, ExternalLink, ParkingCircle, ArrowRight,
} from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { LeadForm } from "@/components/blocks/LeadForm";
import { LinkifyProse } from "@/lib/linkify";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Reveal } from "@/components/blocks/Reveal";
import { FAQAccordion, type FAQ } from "@/components/blocks/FAQAccordion";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema } from "@/lib/schema";
import { pickReviews } from "@/lib/find-reviews";
import { NAP } from "@/content/site";

type PricingRow = { model: string; price: number; timeline: string };

const PRICING: PricingRow[] = [
  { model: "Single key cap (Magic Keyboard 2019+)",   price: 150, timeline: "Same day · 30 min" },
  { model: "Single key cap + scissor mechanism",      price: 250, timeline: "Same day · 1 hour" },
  { model: "Magic Keyboard full swap (M1+/2019+)",    price: 350, timeline: "1 day"            },
  { model: "Butterfly top case (2016-2019, all models)", price: 700, timeline: "1-2 days"      },
  { model: "Pre-2015 Retina keyboard (just keyboard)",   price: 450, timeline: "1 day"         },
  { model: "Liquid-damaged keyboard (clean + swap)",     price: 550, timeline: "1-2 days"      },
  { model: "Backlight repair (no key replacement)",      price: 250, timeline: "Same day"      },
  { model: "Russian / Arabic keyboard layout swap",      price: 450, timeline: "1-2 days"      },
];

const PROBLEMS = [
  { title: "Sticky or repeating keys (butterfly 2016-2019)",
    body: "Classic butterfly failure - a single dust particle under the dome triggers double-presses or no-press. Apple's own service program ended December 2022. The workshop replaces the entire top case (keyboard + battery + speakers as one bonded unit) for AED 700 because Apple designed the butterfly to be unrepairable per-key." },
  { title: "Dead key - letter, number, or modifier won't register",
    body: "On Magic Keyboard (2019+) a single key cap and scissor switch can be swapped for AED 250. On butterfly models (2016-2019) the entire top case must go. On 2012-2015 Retina the keyboard alone (without battery) costs AED 450." },
  { title: "Worn key letter - print rubbed off the cap",
    body: "Common on the E, A, S, N, T, space, and right shift after 2-3 years. AED 150 per cap on Magic Keyboard. On butterfly the cap pops off easily but the silicone membrane underneath is the bigger failure point - top case swap recommended." },
  { title: "Backlight stopped working - keys still work",
    body: "Failed backlight chip on the keyboard PCB. AED 250 chip-level repair on Magic Keyboard, no full-keyboard swap needed. On butterfly the LED strip is bonded into the top case - full case at AED 700." },
  { title: "Liquid spill - multiple keys dead",
    body: "Coffee, juice, water, or beer through the keyboard. The membrane corrodes within 6-12 hours. Same-day ultrasonic clean (AED 350) saves the keyboard in 60% of cases. If the membrane is gone, keyboard or top case replacement at AED 450 to AED 700." },
  { title: "Caps lock or function keys stuck on",
    body: "Karabiner Elements or a Bluetooth keyboard pairing conflict in 30% of cases (free fix). Mechanical fault on the remaining 70% - single key swap on Magic Keyboard for AED 150 to AED 250." },
  { title: "Touch ID won't read fingerprint after a knock",
    body: "Touch ID is part of the top case on every modern MacBook. After a drop the sensor flex disconnects. AED 350 to AED 700 top case swap re-pairs Touch ID with the T2/M-series secure enclave on the bench." },
  { title: "Force-touch trackpad clicks, keys feel mushy",
    body: "Battery swelling under the keyboard pushes the membrane up. Battery + keyboard combo job - AED 1,050 (battery 450 + top case 700) on butterfly. AED 800 (battery 450 + Magic Keyboard 350) on Apple Silicon." },
  { title: "Wrong layout - UK keyboard on US software (or vice versa)",
    body: "Karabiner Elements remap is free and reversible. If you want a physical Russian, Arabic, or French AZERTY layout, the workshop sources OEM-spec keyboards in 1-2 days at AED 450." },
  { title: "Top row function keys don't work (Touch Bar dead)",
    body: "Touch Bar driver crash (free fix via SMC/NVRAM reset) on 25% of cases. Touch Bar IC failure on 75% - the workshop fits a replacement Touch Bar assembly for AED 600, separate from a full top case swap." },
];

const STEPS = [
  { title: "WhatsApp the model + which keys",
    body: "Send the serial number from About This Mac and a video of which keys fail. Reply within 4-8 minutes during business hours with confirmed price and timeline." },
  { title: "Free pickup or walk in",
    body: "Walk in to Office #45, Concord Tower, Media City, or book a free pickup from anywhere in Dubai mainland. Diagnosis is on the spot - about 10 minutes." },
  { title: "Diagnosis: software vs mechanical vs liquid",
    body: "Karabiner Elements check, NVRAM reset, then a physical key-by-key test under the microscope. About 15% of \"keyboard\" tickets turn out to be software - fixed free of charge." },
  { title: "Repair on the bench",
    body: "Magic Keyboard single key: 30-60 minutes. Magic Keyboard full swap: 4 hours. Butterfly top case: 1 day (battery, speakers, keyboard come as one bonded unit - Apple's design)." },
  { title: "Touch ID re-pair + 38-point QC",
    body: "On Touch ID models the new top case is paired with the secure enclave at the bench. Every key tested at three force levels, backlight evenness checked, function keys verified." },
  { title: "Free delivery + 90-day warranty card",
    body: "Same-day on Magic Keyboard single-key jobs. Next-day on top case swaps. Warranty card lists the part batch number - 90 days written, transferable once free of charge." },
];

const FAQS: FAQ[] = [
  { q: "How much does MacBook keyboard repair cost in Dubai?",
    a: "From AED 150 for a single key cap on Magic Keyboard. AED 350 for a full Magic Keyboard swap on Apple Silicon and 2019+ models. AED 700 for a butterfly top case on the 2016-2019 MacBook Pro and 12\" Retina (the butterfly design forces the keyboard, battery, and speakers to be replaced as one unit). AED 450 for a 2012-2015 Retina keyboard." },
  { q: "How long does MacBook keyboard repair take?",
    a: "Single Magic Keyboard key: 30 minutes same day. Full Magic Keyboard swap on Apple Silicon: 4 hours, same day to next day. Butterfly top case (with battery and speakers): 1 to 2 days because the top case must come from local distributor stock and the trackpad re-pairing takes 90 minutes." },
  { q: "Why can't you replace just one butterfly key?",
    a: "Apple designed the 2016-2019 butterfly keyboard with the keys glued into a single membrane that's bonded to the top case (which also holds the battery, speakers, and Touch ID). There is no way to remove or replace an individual butterfly key cap without destroying the membrane. This is why Apple's own butterfly service program (ended December 2022) replaced the entire top case - same approach here for AED 700, vs Apple's typical AED 1,800 to AED 2,400 charge." },
  { q: "What's the difference between butterfly and Magic Keyboard?",
    a: "Butterfly (2015-2019): low-profile, thin, prone to dust failures, individual keys can't be replaced. Magic Keyboard (2019+ on Pro 16\", 2020+ on all other models): scissor switch, taller travel, individually replaceable key caps and scissor mechanisms. Apple Silicon MacBooks all use Magic Keyboard - much easier and cheaper to repair." },
  { q: "Can you replace the keyboard layout from Arabic to English (or vice versa)?",
    a: "Yes - physical layout swaps are AED 450 and take 1 to 2 days. Common requests: UK to US (or vice versa), Arabic to English, English to Russian, English to French AZERTY. The workshop sources the OEM-spec keyboard for the exact MacBook model - same backlight, same Touch ID compatibility." },
  { q: "What if I just spilled liquid on the keyboard right now?",
    a: "Power off immediately. Turn the MacBook upside down on a towel. Do NOT power it on to test. Do NOT use rice. WhatsApp 055 741 3706 same hour - free emergency pickup across Dubai mainland. Same-day ultrasonic clean for AED 350 saves the keyboard in 60% of cases if it arrives within 24 hours." },
  { q: "Will Touch ID still work after the keyboard is replaced?",
    a: "Yes - the workshop pairs the new Touch ID sensor with the T2/M-series secure enclave on the bench. Takes about 15 minutes after the top case is fitted. If the secure enclave is locked (very rare), Touch ID is reset and you re-enrol your fingerprint at first login." },
  { q: "Do you use genuine Apple keyboards?",
    a: "Genuine Apple Magic Keyboards on M3, M4, and M5 models - sourced from the local Apple-authorised distributor with traceable part numbers. For 2016-2019 butterfly top cases the workshop fits OEM-spec parts from the original Foxconn factory that built Apple's part. Both labelled clearly on the WhatsApp quote, both 90-day warranty." },
  { q: "What's the warranty on the new keyboard?",
    a: "90 days written warranty on parts and labour. Covers manufacturing defects, premature key failure, backlight failure, Touch ID failure. Does not cover new physical damage or liquid damage after the repair. Transferable once free of charge if the MacBook is sold." },
  { q: "Can I use my MacBook with one dead key while I wait for repair?",
    a: "Short term yes - Karabiner Elements (free) lets you remap the dead key to an unused one (e.g. caps lock to letter \"A\"). Long term no - dead keys typically multiply on butterfly keyboards and the eventual top-case swap is the same price whether 1 key or 10 are dead." },
  { q: "Why are butterfly keyboards on the 2016-2019 MacBook Pro so unreliable?",
    a: "Apple's first-generation butterfly switch (2015 12\" MacBook) had no dust ingress protection. The second-gen (2016-2017 Pro) added a silicone membrane but dust still entered. The third-gen (2018-2019) added a slightly improved seal but failure rates remained at 5-10x scissor switches. Apple ran a 4-year service program (ended December 2022). The workshop still services these for AED 700 vs Apple's AED 1,800 to AED 2,400." },
  { q: "Do you offer free pickup for keyboard repair?",
    a: "Yes, free pickup and delivery anywhere in Dubai mainland. Same-hour pickup from Internet City, Knowledge Village, JLT, Al Barsha. Same-day from Marina, Downtown, JBR, Palm. Sharjah and Abu Dhabi pickup AED 100 each way." },
];

const COMPARISON = [
  ["Repair window",                "Same day to 2 days",                          "5 to 14 business days, mail-in"],
  ["Single key cap (Magic)",       "AED 150",                                      "Refused - full keyboard only"],
  ["Magic Keyboard full swap",     "AED 350",                                      "AED 1,449 (Apple list)"],
  ["Butterfly top case (out of program)", "AED 700",                              "AED 1,829 to AED 2,449"],
  ["Layout change (Arabic / Russian)", "AED 450",                                 "Refused"],
  ["Free pickup in Dubai",         "Yes",                                          "No, customer must courier"],
  ["Warranty",                     "90 days written",                              "90 days"],
  ["Vintage/obsolete (pre-2017)",  "Yes",                                          "Refused"],
];

const TRUST = [
  { value: "2,100+", label: "Keyboards fitted since 2004" },
  { value: "From AED 150", label: "Single key cap" },
  { value: "Same day", label: "Magic Keyboard swaps" },
  { value: "90 days", label: "Written warranty" },
];

const MAPS_EMBED = "https://www.google.com/maps?q=Concord+Tower+Dubai+Media+City&output=embed";
const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=Concord+Tower+Dubai+Media+City";

const aed = (n: number) => `AED ${n.toLocaleString()}`;

export default function MacBookKeyboardRepair() {
  const reviews = pickReviews([
    "Saeed Alam",
    "Linda Banannou",
    "E. Saey Debrus",
    "Роман Ефимченко",
    "Knight A. Shakir",
    "Mariia Chymyrysova",
  ]);

  useSeo(
    {
      title: "MacBook Keyboard Repair Dubai - From AED 150",
      description:
        "MacBook keyboard repair Dubai from AED 150. Magic Keyboard, butterfly top case, key caps, layout swaps. Same-day. 90-day warranty. 055 741 3706.",
      path: "/macbook-keyboard-repair-dubai",
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "MacBook Keyboard Repair Dubai",
        price: 150,
        timeline: "Same day to 2 days",
        warranty: "P90D",
        url: "/macbook-keyboard-repair-dubai",
        description:
          "MacBook keyboard repair in Dubai. Single key cap, full Magic Keyboard, butterfly top case, layout swaps. Air, Pro 13/14/16, Intel and Apple Silicon.",
      }),
    ],
  );

  return (
    <PageShell>
      <div className="bg-primary text-on-primary -mb-[4rem]">

        {/* ── Hero ───────────────────────────────────────────────── */}
        <section data-hero-tone="dark" className="relative overflow-hidden pt-[120px] pb-3xl md:pb-4xl">
          <div aria-hidden className="pointer-events-none absolute -top-32 -left-24 h-[34rem] w-[34rem] rounded-full bg-accent/15 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute top-1/3 -right-16 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-3xl" />
          <div className="relative mx-auto max-w-content px-5 md:px-6">
            <nav aria-label="Breadcrumb" className="mb-lg text-[13px] text-on-primary-faint">
              <ol className="flex flex-wrap items-center gap-2 list-none p-0 m-0">
                <li><Link to="/" className="hover:text-accent-bright">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link to="/" className="hover:text-accent-bright">MacBook Repair</Link></li>
                <li aria-hidden>/</li>
                <li className="text-on-primary-muted">Keyboard Repair</li>
              </ol>
            </nav>

            <div className="grid gap-2xl md:grid-cols-12 items-start">
              <div className="md:col-span-7">
                <p className="m-0 inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-3.5 py-1.5 text-[13px] font-medium text-on-primary-muted">
                  <Keyboard size={14} className="text-accent-bright" aria-hidden /> MacBook keyboard repair · Media City
                </p>
                <h1 className="mt-lg text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.01em] text-on-primary">
                  MacBook Keyboard Repair Dubai
                </h1>
                <p className="mt-lg max-w-[64ch] text-[17px] leading-relaxed text-on-primary-muted">
                  Sticky keys, dead keys, butterfly failures, layout swaps. Magic Keyboard from AED 150 same day. Butterfly top case from AED 700, 1-2 days.
                </p>
                <div className="mt-xl flex flex-wrap gap-sm">
                  <Button asChild variant="whatsapp" size="lg">
                    <a href={`${NAP.whatsappUrl}?text=${encodeURIComponent("Hi Usman, MacBook keyboard repair quote please. Model + which keys: ")}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle aria-hidden /> Get a quote on WhatsApp
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="border border-white/20 bg-white/[0.06] text-on-primary hover:bg-white/10">
                    <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call {NAP.phoneDisplay}</a>
                  </Button>
                </div>
                <p className="mt-lg text-[12.5px] text-on-primary-faint">
                  Reviewed by Usman, Lead MacBook Technician
                </p>
              </div>

              {/* glass info card */}
              <div className="md:col-span-5">
                <Reveal delay={120} className="rounded-2xl border border-white/10 bg-white/[0.05] p-lg shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-bright"><Keyboard size={22} aria-hidden /></span>
                      <div>
                        <p className="m-0 font-semibold leading-tight text-on-primary">Keyboard Repair</p>
                        <p className="m-0 text-[12px] text-on-primary-faint">Magic &amp; butterfly · Touch ID re-pair</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-bright/30 bg-accent-bright/10 px-2.5 py-1 text-[12px] font-medium text-accent-bright">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" aria-hidden /> Online
                    </span>
                  </div>
                  <ul className="mt-lg space-y-2.5 list-none p-0 border-t border-white/10 pt-md">
                    {[["Starting price", "AED 150"], ["Turnaround", "Same day · 1-2 days"], ["Warranty", "90 days"], ["Diagnosis", "FREE"]].map(([k, v]) => (
                      <li key={k} className="flex items-center justify-between gap-2 text-[14px]">
                        <span className="text-on-primary-faint">{k}</span>
                        <span className="font-semibold text-on-primary">{v}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-md flex items-center justify-between gap-2 border-t border-white/10 pt-md text-[12.5px]">
                    <span className="inline-flex items-center gap-1.5 text-on-primary-faint"><Clock size={13} aria-hidden /> Mon-Sat · 9 am - 10 pm</span>
                    <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-accent-bright hover:underline"><MessageCircle size={13} aria-hidden /> WhatsApp now</a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust strip ────────────────────────────────────────── */}
        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-content px-5 md:px-6 py-2xl grid gap-xl grid-cols-2 lg:grid-cols-4 text-center">
            {TRUST.map((s) => (
              <Reveal key={s.label}>
                <p className="mono text-[22px] md:text-[26px] font-bold text-on-primary leading-none mb-1">{s.value}</p>
                <p className="text-[13px] text-on-primary-muted m-0">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Intro ──────────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-3xl">
          <LinkifyProse selfHref="/macbook-keyboard-repair-dubai"><p className="max-w-[78ch] text-[17px] leading-relaxed text-on-primary-muted m-0">
            MacBook keyboard repair in Dubai starts at AED 150 for a single key cap on Magic Keyboard, AED 350 for a full Magic Keyboard swap on Apple Silicon, and AED 700 for a butterfly top case on the 2016-2019 MacBook Pro. The workshop has fitted 2,100+ MacBook keyboards since 2004 - every Magic Keyboard since 2019, every butterfly top case since 2016, every scissor keyboard back to 2008. The butterfly mechanism is unique: Apple designed the keys, battery, and speakers to be replaced as one bonded unit, which is why Apple's own service program (ended December 2022) and the workshop both swap the entire top case rather than individual keys. Magic Keyboard (2019+) is far easier to service - single keys and scissor switches replaceable for AED 150 to AED 250.
          </p></LinkifyProse>
        </section>

        {/* ── Models + pricing ───────────────────────────────────── */}
        <section className="bg-white/[0.02] border-y border-white/10">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead title="MacBook keyboards we repair" intro="Every MacBook keyboard from the 2008 unibody through the 2025 M5 Pro 16″. Layout swaps to Russian, Arabic, French AZERTY available on every model." />
            <PriceTable rows={PRICING} />
          </div>
        </section>

        {/* ── Common problems ────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead
            title="Common keyboard problems we fix"
            intro="The 10 highest-volume keyboard tickets at the workshop. Liquid spills are urgent - bring it in within 24 hours for the best recovery rate."
            icon={<AlertTriangle size={26} className="text-accent-bright" aria-hidden />}
          />
          <div className="grid gap-lg md:grid-cols-2">
            {PROBLEMS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 60}>
                <Card className="h-full">
                  <h3 className="m-0 mb-2 text-on-primary text-[16px] font-bold">{p.title}</h3>
                  <p className="m-0 text-[14px] text-on-primary-muted leading-relaxed">{p.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Process ────────────────────────────────────────────── */}
        <section className="bg-white/[0.02] border-y border-white/10">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead
              title="Our keyboard repair process"
              intro="Six steps. The diagnosis stage filters out the 15% of keyboard tickets that are software issues - fixed free of charge."
              icon={<Wrench size={26} className="text-accent-bright" aria-hidden />}
            />
            <ol className="grid gap-lg md:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
              {STEPS.map((s, i) => (
                <Reveal as="li" key={s.title} delay={(i % 3) * 70} className="rounded-2xl border border-white/10 bg-white/[0.04] p-lg">
                  <span aria-hidden className="mb-md flex h-11 w-11 items-center justify-center rounded-xl bg-accent-bright/15 font-heading text-[18px] font-bold text-accent-bright">{i + 1}</span>
                  <p className="font-semibold text-[16px] m-0 mb-1 text-on-primary">{s.title}</p>
                  <p className="text-[13.5px] text-on-primary-muted leading-relaxed m-0">{s.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Timeline ───────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead title="How long does MacBook keyboard repair take?" />
          <div className="grid gap-lg md:grid-cols-3">
            <Card className="border-accent-bright/30 bg-accent-bright/[0.06]">
              <h3 className="m-0 mb-2 text-on-primary text-[18px] font-bold">Same day (30 min - 4 hours)</h3>
              <p className="m-0 text-[14px] text-on-primary-muted leading-relaxed">Single key cap on Magic Keyboard (30 min). Backlight chip swap (1 hour). Full Magic Keyboard swap on Apple Silicon (4 hours including Touch ID re-pair).</p>
            </Card>
            <Card>
              <h3 className="m-0 mb-2 text-on-primary text-[18px] font-bold">1 day</h3>
              <p className="m-0 text-[14px] text-on-primary-muted leading-relaxed">Magic Keyboard full swap on Pro 14″ and 16″. 2012-2015 Retina keyboard swap. Layout change to Russian or Arabic when stock is local.</p>
            </Card>
            <Card>
              <h3 className="m-0 mb-2 text-on-primary text-[18px] font-bold">2 days</h3>
              <p className="m-0 text-[14px] text-on-primary-muted leading-relaxed">Butterfly top case swap on the 2016-2019 MacBook Pro - the top case must be ordered in, trackpad re-pairing adds 90 minutes. Liquid-damaged keyboard with corrosion needing 24-hour ultrasonic cycle.</p>
            </Card>
          </div>
        </section>

        {/* ── Parts ──────────────────────────────────────────────── */}
        <section className="bg-white/[0.02] border-y border-white/10">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead title="What parts we use" />
            <div className="grid gap-lg md:grid-cols-2">
              <Card>
                <h3 className="m-0 mb-2 text-on-primary text-[18px] font-bold">Genuine Apple Magic Keyboards</h3>
                <p className="m-0 mb-sm text-[14px] text-on-primary-muted leading-relaxed">Stocked for M3, M4, M5 Pro 14″ and 16″. Sourced from the local Apple-authorised distributor with traceable part numbers. Touch ID and backlight pre-calibrated.</p>
                <p className="m-0 mono text-[13px] text-accent-bright">Standard pricing - included</p>
              </Card>
              <Card>
                <h3 className="m-0 mb-2 text-on-primary text-[18px] font-bold">OEM-spec butterfly top cases</h3>
                <p className="m-0 mb-sm text-[14px] text-on-primary-muted leading-relaxed">For 2016-2019 MacBook Pro the top case comes from the original Foxconn assembly line. Same battery, same Touch ID flex, same speaker assembly as Apple's part. AED 700 vs Apple's AED 1,800 to AED 2,400.</p>
                <p className="m-0 mono text-[13px] text-accent-bright">AED 700 - same 90-day warranty</p>
              </Card>
            </div>
            <p className="mt-md text-[14px] text-on-primary-muted leading-relaxed max-w-[78ch]">
              The workshop refuses unbranded sub-AED-200 Magic Keyboard "OEM" parts - these are typically pulls from water-damaged donor units with shortened scissor mechanism life.
            </p>
          </div>
        </section>

        {/* ── Warranty ───────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead title="Warranty" icon={<ShieldCheck size={26} className="text-accent-bright" aria-hidden />} />
          <Card>
            <ul className="space-y-2.5 text-[15px] text-on-primary-muted list-none p-0 m-0">
              <li className="flex items-start gap-2"><Check size={16} className="text-accent-bright mt-1 shrink-0" aria-hidden /> <span><strong className="text-on-primary">90 days</strong> - written warranty on parts and labour, dated and signed.</span></li>
              <li className="flex items-start gap-2"><Check size={16} className="text-accent-bright mt-1 shrink-0" aria-hidden /> <span><strong className="text-on-primary">Covered:</strong> manufacturing defects, premature key failure, backlight failure, Touch ID issues, scissor mechanism failure.</span></li>
              <li className="flex items-start gap-2"><Check size={16} className="text-accent-bright mt-1 shrink-0" aria-hidden /> <span><strong className="text-on-primary">Not covered:</strong> new liquid damage, new physical damage, software remap conflicts (free to fix anyway).</span></li>
              <li className="flex items-start gap-2"><Check size={16} className="text-accent-bright mt-1 shrink-0" aria-hidden /> <span><strong className="text-on-primary">How to claim:</strong> WhatsApp the warranty card photo. Same-day collection. Replacement fitted within 48 hours.</span></li>
              <li className="flex items-start gap-2"><Check size={16} className="text-accent-bright mt-1 shrink-0" aria-hidden /> <span><strong className="text-on-primary">Transferable:</strong> once, free of charge, to a new owner if the MacBook is sold within 90 days.</span></li>
            </ul>
          </Card>
        </section>

        {/* ── Pricing recap + CTA ────────────────────────────────── */}
        <section className="bg-white/[0.02] border-y border-white/10">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead title="MacBook keyboard repair cost in Dubai - transparent pricing" intro="No hidden fees. The price quoted on WhatsApp is the price paid on collection. No diagnostic fee, no Touch ID re-pair surcharge, no VAT add-on." />
            <PriceTable rows={PRICING} />

            <div className="mt-2xl relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-xl md:p-2xl">
              <div aria-hidden className="pointer-events-none absolute -top-16 -right-10 h-[20rem] w-[20rem] rounded-full bg-accent/15 blur-3xl" />
              <div className="relative flex flex-col gap-md md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="m-0 mono text-[12px] uppercase tracking-wider text-accent-bright mb-2">MacBook Keyboard Repair · Same day · 1-2 days</p>
                  <h3 className="m-0 text-on-primary text-[24px] md:text-[26px]">Get your keyboard quote in 4 minutes</h3>
                  <p className="m-0 mt-2 text-on-primary-muted text-[15px]">Starting from <strong className="text-on-primary">AED 150</strong>. WhatsApp the model + a short video of which keys fail.</p>
                </div>
                <CtaRow whatsappMessage="Hi Usman, MacBook keyboard repair quote please. Model + which keys: " />
              </div>
            </div>
          </div>
        </section>

        {/* ── Technician ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead title="Lead technician on keyboard jobs" />
          <Card>
            <div className="flex flex-wrap items-center gap-lg">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-bright/15 font-heading text-[20px] font-bold text-accent-bright">U</span>
              <div>
                <p className="m-0 font-semibold text-on-primary text-[18px]">Usman</p>
                <p className="m-0 text-[13.5px] text-on-primary-faint">9 years experience · Battery, keyboard &amp; trackpad</p>
              </div>
            </div>
            <p className="mt-md text-[14px] text-on-primary-muted leading-relaxed max-w-[78ch]">
              Usman has fitted 2,000+ MacBook keyboards and top cases since 2017. Personally handles every butterfly top case swap because the trackpad re-pair is fiddly.
            </p>
          </Card>
        </section>

        {/* ── DIY ────────────────────────────────────────────────── */}
        <section className="bg-white/[0.02] border-y border-white/10">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead title="When DIY makes sense - and when it doesn't" />
            <div className="grid gap-lg md:grid-cols-2">
              <Card className="border-accent-bright/30 bg-accent-bright/[0.06]">
                <h3 className="m-0 mb-md text-on-primary text-[18px] font-bold">Try it yourself first</h3>
                <ul className="space-y-2.5 text-[14px] text-on-primary-muted list-none p-0 m-0">
                  <li className="flex items-start gap-2"><Check size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> SMC + NVRAM reset - clears 25% of "modifier key stuck" tickets.</li>
                  <li className="flex items-start gap-2"><Check size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> Disconnect Bluetooth keyboards and trackpads - 10% of phantom key presses are pairing conflicts.</li>
                  <li className="flex items-start gap-2"><Check size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> Karabiner Elements - free, remaps a dead key to caps lock as a stop-gap.</li>
                  <li className="flex items-start gap-2"><Check size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> Compressed air at 90° angle on a sticky butterfly key - fixes ~5% temporarily, doesn't last but useful before a flight.</li>
                </ul>
              </Card>
              <Card>
                <h3 className="m-0 mb-md text-on-primary text-[18px] font-bold">Stop and bring it in</h3>
                <ul className="space-y-2.5 text-[14px] text-on-primary-muted list-none p-0 m-0">
                  <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> Liquid spill - every minute of corrosion compounds. Power off, flip upside down, WhatsApp.</li>
                  <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> Multiple keys failing on butterfly (2016-2019) - replacing one fixes nothing; the membrane is gone.</li>
                  <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> Trying to pry off a butterfly key cap - the clips snap and you lose a working key on top of the broken one.</li>
                  <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-accent-bright mt-1 shrink-0" aria-hidden /> Touch ID failure after a key swap - secure enclave re-pair needs the specific bench tooling.</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* ── Comparison ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead title="MacBook Keyboard Repair vs Apple Store Dubai" />
          <Reveal className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03]">
            <table className="w-full border-collapse text-left text-[14px] min-w-[640px]">
              <thead>
                <tr className="border-b border-white/10 text-accent-bright">
                  <th className="px-md py-md font-semibold">Factor</th>
                  <th className="px-md py-md font-semibold">MacBook Repair Dubai</th>
                  <th className="px-md py-md font-semibold">Apple Store / AASP</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row[0]} className="border-b border-white/10 last:border-0 align-top">
                    <td className="px-md py-sm font-semibold text-on-primary">{row[0]}</td>
                    <td className="px-md py-sm text-on-primary">{row[1]}</td>
                    <td className="px-md py-sm text-on-primary-muted">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <p className="mt-md text-[13px] text-on-primary-faint mono max-w-[80ch]">
            Apple list pricing from apple.com/ae/shop/mac/repair, retrieved April 2026. Apple's butterfly service program (free top-case swap) closed December 2022 - devices outside warranty pay full list.
          </p>
        </section>

        {/* ── Reviews ────────────────────────────────────────────── */}
        <section className="bg-white/[0.02] border-y border-white/10">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <div className="mb-2xl flex items-end justify-between gap-md flex-wrap">
              <div>
                <p className="mono text-[12px] uppercase tracking-wider text-accent-bright mb-3">All six reviews are verbatim from Google</p>
                <h2 className="m-0 text-on-primary">Real keyboard-repair reviews</h2>
              </div>
              <Link to="/reviews" className="text-[15px] font-semibold text-accent-bright hover:underline inline-flex items-center gap-1">Read all 215+ <ArrowRight size={15} aria-hidden /></Link>
            </div>
            <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <Reveal key={r.name} className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-lg">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-on-primary">{r.name}</span>
                    <span className="flex" aria-hidden>{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} className="fill-star text-star" />)}</span>
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-on-primary-muted m-0 flex-1">“{r.text}”</p>
                  <p className="mt-md mb-0 text-[12px] text-on-primary-faint">{r.date} · Google review</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead title="MacBook keyboard repair FAQ" />
          <FAQAccordion items={FAQS} injectSchema tone="dark" />
        </section>

        {/* ── Related ────────────────────────────────────────────── */}
        <section className="bg-white/[0.02] border-y border-white/10">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead title="Related MacBook repairs" />
            <div className="grid gap-lg md:grid-cols-3">
              {[
                { label: "MacBook Battery Replacement", href: "/macbook-battery-replacement-dubai", description: "From AED 450, 2 hours. Often paired with butterfly top case swap." },
                { label: "MacBook Trackpad Repair",     href: "/macbook-trackpad-repair-dubai",     description: "Trackpad swap from AED 350. Touch ID re-pair included on supported models." },
                { label: "MacBook Water Damage Repair", href: "/macbook-water-damage-repair-dubai", description: "Liquid spilled on the keyboard? AED 700 ultrasonic clean - bring it in within 24 hours." },
              ].map((r) => (
                <Link key={r.href} to={r.href} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-lg transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent-bright/40 hover:bg-white/[0.07]">
                  <h3 className="m-0 mb-1 text-on-primary text-[17px] group-hover:text-accent-bright">{r.label}</h3>
                  <p className="m-0 text-[14px] text-on-primary-muted leading-relaxed">{r.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Location ───────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead title="Where to bring your MacBook" />
          <div className="grid gap-lg md:grid-cols-2 items-stretch">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe src={MAPS_EMBED} title={`Map to ${NAP.name}`} width="100%" height="320" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block w-full h-[320px] border-0" />
            </div>
            <div className="flex flex-col gap-md">
              <h3 className="m-0 text-on-primary">Find us in Media City</h3>
              <p className="flex items-start gap-sm text-[15px] text-on-primary-muted m-0"><MapPin size={18} className="text-accent-bright mt-1 shrink-0" aria-hidden /><span>{NAP.street}<br />{NAP.area}<br />{NAP.city}, UAE</span></p>
              <p className="flex items-start gap-sm text-[14px] text-on-primary-faint m-0"><ParkingCircle size={18} className="text-accent-bright mt-1 shrink-0" aria-hidden /> Paid parking on-site and nearby. Across from Media City Metro.</p>
              <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-accent-bright hover:underline">Get directions <ExternalLink size={14} aria-hidden /></a>
            </div>
          </div>
        </section>

        {/* ── Final CTA ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-t border-white/10">
          <div aria-hidden className="pointer-events-none absolute -bottom-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/18 blur-3xl" />
          <div className="relative mx-auto max-w-content px-5 md:px-6 py-4xl text-center">
            <h2 className="text-on-primary m-0 mb-md max-w-[28ch] mx-auto">Sticky key? Butterfly failure? WhatsApp a video - quote in 4 minutes</h2>
            <p className="text-on-primary-muted max-w-[60ch] mx-auto mb-xl text-[17px]">
              Send the model, year, and a short video of the keys that fail. Free pickup across Dubai mainland. 90-day written warranty on every keyboard fitted.
            </p>
            <div className="flex flex-wrap justify-center gap-sm">
              <Button asChild variant="whatsapp" size="lg"><a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> Message on WhatsApp</a></Button>
              <Button asChild size="lg" variant="secondary" className="bg-white"><a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> {NAP.phoneDisplay}</a></Button>
            </div>
          </div>
        </section>
      </div>
        <section id="quote" className="mx-auto max-w-content px-5 md:px-6 mt-3xl scroll-mt-24">
      <h2 className="text-[28px] md:text-[32px] mb-md text-on-primary">Get your free repair quote</h2>
      <p className="text-[15px] text-on-primary-muted mb-lg max-w-[60ch]">Two quick steps — your device, then how to reach you. Free diagnosis, written quote, 90-day warranty.</p>
      <LeadForm variant="compact" defaultDeviceType="MacBook" sourcePath="/macbook-keyboard-repair-dubai" />
    </section>
    <RelatedArticles path="/macbook-keyboard-repair-dubai" />
    </PageShell>
  );
}

/* ── local helpers (dark) ──────────────────────────────────── */
function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-white/10 bg-white/[0.04] p-lg ${className}`}>{children}</div>;
}

function SectionHead({ title, intro, icon }: { title: string; intro?: string; icon?: ReactNode }) {
  return (
    <div className="mb-2xl max-w-[64ch]">
      <Reveal as="h2" className="m-0 text-on-primary flex items-center gap-sm">{icon}{title}</Reveal>
      {intro && <Reveal as="p" className="mt-md text-[17px] text-on-primary-muted leading-relaxed">{intro}</Reveal>}
    </div>
  );
}

function CtaRow({ whatsappMessage }: { whatsappMessage?: string }) {
  const href = whatsappMessage ? `${NAP.whatsappUrl}?text=${encodeURIComponent(whatsappMessage)}` : NAP.whatsappUrl;
  return (
    <div className="flex flex-wrap gap-sm shrink-0">
      <Button asChild variant="whatsapp" size="lg"><a href={href} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> WhatsApp Us</a></Button>
      <Button asChild size="lg" variant="secondary" className="border border-white/20 bg-white/[0.06] text-on-primary hover:bg-white/10"><a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call Now</a></Button>
    </div>
  );
}

function PriceTable({ rows }: { rows: PricingRow[] }) {
  return (
    <Reveal className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03]">
      <table className="w-full border-collapse text-left text-[14px] min-w-[520px]">
        <thead>
          <tr className="border-b border-white/10 text-accent-bright">
            <th className="px-lg py-md font-semibold">MacBook model</th>
            <th className="px-lg py-md font-semibold whitespace-nowrap">Keyboard repair</th>
            <th className="px-lg py-md font-semibold">Turnaround</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.model} className="border-b border-white/10 last:border-0">
              <td className="px-lg py-sm font-medium text-on-primary">{r.model}</td>
              <td className="px-lg py-sm mono whitespace-nowrap text-accent-bright font-semibold">{aed(r.price)}</td>
              <td className="px-lg py-sm text-on-primary-muted">{r.timeline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}
