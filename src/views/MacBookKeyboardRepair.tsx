"use client";
import { withSlash } from "@/lib/utils";
// MacBook Keyboard Repair - re-skinned in the dark theme to match the battery /
// screen repair pages (the canonical dark design). All content, pricing, problems,
// process, parts, warranty, comparison, reviews and FAQs are preserved verbatim;
// only the presentation moved to the dark design system (bg-bg-alt band, glass
// cards, accent). SEO/schema kept identical so rankings transfer.
import { type ReactNode } from "react";
import {
  Keyboard, MessageCircle, Phone, ShieldCheck, AlertTriangle, Wrench, Star,
  Check, Clock, MapPin, ExternalLink, ParkingCircle, ArrowRight,
} from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { QuickAnswer, deriveServiceQuickAnswer } from "@/components/blocks/QuickAnswer";
import { LeadForm } from "@/components/blocks/LeadForm";
import { LinkifyProse } from "@/lib/linkify";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { PriceCTA } from "@/components/blocks/PriceCTA";
import { Reveal } from "@/components/blocks/Reveal";
import { ResponsiveImage } from "@/components/blocks/ResponsiveImage";
import { FAQAccordion, type FAQ } from "@/components/blocks/FAQAccordion";
import { Button } from "@/components/ui/button";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema } from "@/lib/schema";
import { pickReviews } from "@/lib/find-reviews";
import { NAP, REVIEW_COUNT } from "@/content/site";

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
    body: "Classic butterfly failure - a single dust particle under the dome triggers double-presses or no-press. Apple's Keyboard Service Program for these models has ended. The workshop replaces the entire top case (keyboard + battery + speakers as one bonded unit) because Apple designed the butterfly to be unrepairable per-key." },
  { title: "Dead key - letter, number, or modifier won't register",
    body: "On Magic Keyboard (2019+) a single key cap and scissor switch can be swapped individually. On butterfly models (2016-2019) the entire top case must go. On 2012-2015 Retina the keyboard alone can be replaced without the battery." },
  { title: "Worn key letter - print rubbed off the cap",
    body: "Common on the E, A, S, N, T, space, and right shift after 2-3 years. Individual caps are replaceable on Magic Keyboard. On butterfly the cap pops off easily but the silicone membrane underneath is the bigger failure point - top case swap recommended." },
  { title: "Backlight stopped working - keys still work",
    body: "Failed backlight chip on the keyboard PCB. Chip-level repair on Magic Keyboard, no full-keyboard swap needed. On butterfly the LED strip is bonded into the top case, so the full case goes." },
  { title: "Liquid spill - multiple keys dead",
    body: "Coffee, juice, water, or beer through the keyboard. Liquid corrodes the membrane and contacts within hours, so power off and bring it in the same day. An ultrasonic clean can save the keyboard; if the membrane is gone, the keyboard or top case is replaced." },
  { title: "Caps lock or function keys stuck on",
    body: "Sometimes a remapping app such as Karabiner-Elements or a paired Bluetooth keyboard is the cause, which is a free fix. Otherwise it is mechanical, usually a single key swap on a Magic Keyboard." },
  { title: "Touch ID won't read fingerprint after a knock",
    body: "Touch ID is part of the top case on every modern MacBook. After a drop the sensor flex disconnects. A top case swap re-pairs Touch ID with the T2/M-series secure enclave on the bench." },
  { title: "Force-touch trackpad clicks, keys feel mushy",
    body: "Battery swelling under the keyboard pushes the membrane up. Stop charging it: the battery is replaced first, and on butterfly models battery and keyboard come as one top-case job." },
  { title: "Wrong layout - UK keyboard on US software (or vice versa)",
    body: "Karabiner Elements remap is free and reversible. If you want a physical Russian, Arabic, or French AZERTY layout, the workshop sources OEM-spec keyboards in 1-2 days." },
  { title: "Top row function keys don't work (Touch Bar dead)",
    body: "A software glitch is sometimes cleared by a restart or an SMC/NVRAM reset, at no charge. When the Touch Bar hardware has failed, the workshop fits a replacement Touch Bar assembly, separate from a full top case swap." },
];

const STEPS = [
  { title: "WhatsApp the model + which keys",
    body: "Send the serial number from About This Mac and a video of which keys fail. We reply during opening hours with what the job involves and a timeline." },
  { title: "Walk in or send it by courier",
    body: "Walk in to Office #45, Concord Tower, Media City, or book any same-day courier app and WhatsApp us the tracking link. Diagnosis is on the spot - about 10 minutes." },
  { title: "Diagnosis: software vs mechanical vs liquid",
    body: "Remapping apps and an NVRAM reset are checked first, then every key is tested under the microscope. When the fault turns out to be software, the fix is free." },
  { title: "Repair on the bench",
    body: "Magic Keyboard single key: 30-60 minutes. Magic Keyboard full swap: 4 hours. Butterfly top case: 1 to 2 days (battery, speakers, keyboard come as one bonded unit - Apple's design)." },
  { title: "Touch ID re-pair and key-by-key test",
    body: "On Touch ID models the new top case is paired with the secure enclave at the bench. Every key is tested, the backlight checked and the function keys verified." },
  { title: "Collection + 15-day warranty card",
    body: "Same-day on Magic Keyboard single-key jobs. Next-day on top case swaps. Warranty card lists the part batch number - 15 days written, transferable once free of charge." },
];

const FAQS: FAQ[] = [
  { q: "How much does MacBook keyboard repair cost in Dubai?",
    a: "It depends on the keyboard generation: a single key cap on a Magic Keyboard, a full Magic Keyboard swap on Apple Silicon, a butterfly top case on 2016-2019 Pros, or a 2012-2015 Retina keyboard are four different jobs. Free diagnosis first, then a firm quote. Send us the model on WhatsApp." },
  { q: "How long does MacBook keyboard repair take?",
    a: "Single Magic Keyboard key: 30 minutes same day. Full Magic Keyboard swap on Apple Silicon: 4 hours, same day to next day. Butterfly top case (with battery and speakers): 1 to 2 days, because the whole top case is replaced and re-paired." },
  { q: "Why are only some keys on my MacBook not working?",
    a: "On a butterfly keyboard (2016-2019) it is usually dust or crumbs under the affected keys. On a Magic Keyboard it can be one damaged switch, and a row of dead keys often points to liquid. First rule out software: remove remapping apps, try another user account, and check an external keyboard works. Then send a short video of the keys on WhatsApp." },
  { q: "Why can't you replace just one butterfly key?",
    a: "Apple designed the 2016-2019 butterfly keyboard with the keys glued into a single membrane that's bonded to the top case (which also holds the battery, speakers, and Touch ID). There is no way to remove or replace an individual butterfly key cap without destroying the membrane. This is why Apple's Keyboard Service Program, now ended for these models, replaced the entire top case - same approach here. Contact Apple for its current top-case replacement price." },
  { q: "What's the difference between butterfly and Magic Keyboard?",
    a: "Butterfly (2015-2019): low-profile, thin, prone to dust failures, individual keys can't be replaced. Magic Keyboard (2019+ on Pro 16\", 2020+ on all other models): scissor switch, taller travel, individually replaceable key caps and scissor mechanisms. Apple Silicon MacBooks all use Magic Keyboard, which can be repaired key by key." },
  { q: "Can you replace the keyboard layout from Arabic to English (or vice versa)?",
    a: "Yes - physical layout swaps take 1 to 2 days. Common requests: UK to US (or vice versa), Arabic to English, English to Russian, English to French AZERTY. The workshop sources the OEM-spec keyboard for the exact MacBook model - same backlight, same Touch ID compatibility." },
  { q: "Will Touch ID still work after the keyboard is replaced?",
    a: "Yes - the workshop pairs the new Touch ID sensor with the T2/M-series secure enclave on the bench. Takes about 15 minutes after the top case is fitted. If the secure enclave is locked (very rare), Touch ID is reset and you re-enrol your fingerprint at first login." },
  { q: "Do you use genuine Apple keyboards?",
    a: "Genuine Apple parts where supply allows and quality-tested parts otherwise, and the WhatsApp quote says which one you are getting before we fit it. Either way the repair carries the 15-day written warranty." },
  { q: "What's the warranty on the new keyboard?",
    a: "15 days written warranty on parts and labour. Covers manufacturing defects, premature key failure, backlight failure, Touch ID failure. Does not cover new physical damage or liquid damage after the repair. Transferable once free of charge if the MacBook is sold." },
  { q: "Can I use my MacBook with one dead key while I wait for repair?",
    a: "Short term yes - Karabiner Elements (free) lets you remap the dead key to an unused one (e.g. caps lock to letter \"A\"). Long term no - dead keys typically multiply on butterfly keyboards and the eventual top-case swap is the same price whether 1 key or 10 are dead." },
];

const COMPARISON = [
  ["Repair window",                "Same day to 2 days",                          "Varies; book at an Apple Store or Authorised Service Provider"],
  ["Single key cap (Magic)",       "Free diagnosis, then a quote",                 "Refused - full keyboard only"],
  ["Magic Keyboard full swap",     "Free diagnosis, then a quote",                 "No published price - quoted after inspection"],
  ["Butterfly top case (out of program)", "Free diagnosis, then a quote",         "No published price - quoted after inspection"],
  ["Layout change (Arabic / Russian)", "Free diagnosis, then a quote",            "Refused"],
  ["Walk in without appointment",  "Yes",                                          "Check with the store"],
  ["Warranty",                     "15 days written",                              "12 months"],
  ["Vintage/obsolete (pre-2017)",  "Yes",                                          "Refused"],
];

const TRUST = [
  { value: "2,100+", label: "Keyboards fitted since 2004" },
  { value: "Free", label: "Diagnosis on every model" },
  { value: "Same day", label: "Magic Keyboard swaps" },
  { value: "15 days", label: "Written warranty" },
];

const MAPS_EMBED = "https://www.google.com/maps?q=Concord+Tower+Dubai+Media+City&output=embed";
const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=Concord+Tower+Dubai+Media+City";


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
      title: "MacBook Keyboard Repair Dubai - Same-Day Key Caps",
      description:
        "MacBook keyboard repair Dubai. Magic Keyboard, butterfly top case, key caps, layout swaps. Free diagnosis, same-day. 15-day warranty. 055 741 3706.",
      path: "/macbook-keyboard-repair-dubai",
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "MacBook Keyboard Repair Dubai",
        timeline: "Same day to 2 days",
        warranty: "P15D",
        url: "/macbook-keyboard-repair-dubai",
        description:
          "MacBook keyboard repair in Dubai. Single key cap, full Magic Keyboard, butterfly top case, layout swaps. Air, Pro 13/14/16, Intel and Apple Silicon.",
      }),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">

        {/* ── Hero ───────────────────────────────────────────────── */}
        <section data-hero-tone="light" className="relative overflow-hidden pt-[120px] pb-3xl md:pb-4xl">
          <div className="relative mx-auto max-w-content px-5 md:px-6">
            <BreadcrumbTrail trail={[{ name: "Home", path: "/" }, { name: "MacBook Repair", path: "/macbook-repair-dubai" }, { name: "Keyboard Repair", path: "/macbook-keyboard-repair-dubai" }]} />

            <div className="grid gap-2xl md:grid-cols-12 items-start">
              <div className="md:col-span-7">
                <p className="m-0 inline-flex items-center gap-2 rounded-full border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3.5 py-1.5 text-[13px] font-medium text-text-muted">
                  <Keyboard size={14} className="text-accent" aria-hidden /> MacBook keyboard repair · Media City
                </p>
                <h1 className="mt-lg text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.01em] text-text">
                  MacBook Keyboard Repair in Dubai Media City
                </h1>
                <p className="mt-lg max-w-[64ch] text-[17px] leading-relaxed text-text-muted">
                  Sticky keys, dead keys, butterfly failures, layout swaps. Magic Keyboard work same day. Butterfly top case in 1-2 days.
                </p>
                <div className="mt-xl flex flex-wrap gap-sm">
                  <Button asChild variant="whatsapp" size="lg">
                    <a href={withSlash(`${NAP.whatsappUrl}?text=${encodeURIComponent("Hi Usman, MacBook keyboard repair quote please. Model + which keys: ")}`)} target="_blank" rel="noopener noreferrer">
                      <MessageCircle aria-hidden /> Get a quote on WhatsApp
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="border border-border-strong bg-bg-card text-text hover:bg-bg-alt">
                    <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call {NAP.phoneDisplay}</a>
                  </Button>
                </div>
                <p className="mt-lg text-[12.5px] text-text-faint">
                  By Usman, board-level repair technician · Updated October 2026
                </p>
              </div>

              {/* glass info card */}
              <div className="md:col-span-5">
                
                <Reveal delay={120} className="overflow-hidden rounded-2xl border border-border shadow-lg">
                  <ResponsiveImage
                    src="/images/real/lab/macbook-keyboard-repair-dubai.jpg"
                    alt="MacBook keyboard repair in Dubai - top case and keyboard assembly during replacement at our workshop"
                    width={800}
                    height={600}
                    sizes="(max-width: 768px) 92vw, 420px"
                    imgClassName="w-full h-auto"
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Answer-first capsule (AEO/BLUF) */}
        <div className="mx-auto max-w-content px-5 md:px-6 grid gap-xl md:grid-cols-12 items-stretch">
          <QuickAnswer tone="dark" className="max-w-none px-0 md:px-0 mt-0 md:col-span-7 h-full" {...deriveServiceQuickAnswer({ serviceName: "MacBook keyboard repair", startingPrice: 150, timeline: "same-day for most; 1-2 days for a full top-case" })} />
          <Reveal delay={120} className="md:col-span-5 h-full rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent"><Keyboard size={22} aria-hidden /></span>
                <div>
                  <p className="m-0 font-semibold leading-tight text-text">Keyboard Repair</p>
                  <p className="m-0 text-[12px] text-text-faint">Magic &amp; butterfly · Touch ID re-pair</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[12px] font-medium text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden /> Online
              </span>
            </div>
            <ul className="mt-lg space-y-2.5 list-none p-0 border-t border-border pt-md">
              {[["Diagnosis", "Free"], ["Turnaround", "Same day · 1-2 days"], ["Warranty", "15 days"], ["Diagnosis", "FREE"]].map(([k, v]) => (
                <li key={k} className="flex items-center justify-between gap-2 text-[14px]">
                  <span className="text-text-faint">{k}</span>
                  <span className="font-semibold text-text">{v}</span>
                </li>
              ))}
            </ul>
            <div className="mt-md flex items-center justify-between gap-2 border-t border-border pt-md text-[12.5px]">
              <span className="inline-flex items-center gap-1.5 text-text-faint"><Clock size={13} aria-hidden /> Mon-Sat · 9 am - 7 pm</span>
              <a href={withSlash(NAP.whatsappUrl)} target="_blank" rel="noopener noreferrer" className="min-h-[44px] inline-flex items-center gap-1.5 font-semibold text-accent hover:underline"><MessageCircle size={13} aria-hidden /> WhatsApp now</a>
            </div>
          </Reveal>
        </div>

        {/* ── Trust strip ────────────────────────────────────────── */}
        <section className="border-y border-border bg-bg-alt">
          <div className="mx-auto max-w-content px-5 md:px-6 py-2xl grid gap-xl grid-cols-2 lg:grid-cols-4 text-center">
            {TRUST.map((s) => (
              <Reveal key={s.label}>
                <p className="mono text-[22px] md:text-[26px] font-bold text-text leading-none mb-1">{s.value}</p>
                <p className="text-[13px] text-text-muted m-0">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Intro ──────────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-3xl">
          <LinkifyProse selfHref="/macbook-keyboard-repair-dubai"><p className="max-w-[78ch] text-[17px] leading-relaxed text-text-muted m-0">
            MacBook keyboard repair in Dubai covers a single key cap on Magic Keyboard, a full Magic Keyboard swap on Apple Silicon, and a butterfly top case on the 2016-2019 MacBook Pro. The workshop has fitted 2,100+ MacBook keyboards since 2004 - every Magic Keyboard since 2019, every butterfly top case since 2016, every scissor keyboard back to 2008. The butterfly mechanism is unique: Apple designed the keys, battery, and speakers to be replaced as one bonded unit, which is why Apple's Keyboard Service Program, now ended for these models, and the workshop both swap the entire top case rather than individual keys. Magic Keyboard (2019+) is far easier to service - single keys and scissor switches are individually replaceable.
          </p></LinkifyProse>
        </section>

        {/* ── Models + pricing ───────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead title="Which MacBook keyboards do you repair?" intro="Every MacBook keyboard from the 2008 unibody through the 2025 M5 Pro 16″. Layout swaps to Russian, Arabic, French AZERTY available on every model." />
            <PriceTable rows={PRICING} />
          </div>
        </section>

        {/* ── Common problems ────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead
            title="What keyboard faults do you fix?"
            intro="The keyboard faults we see most at the workshop. Liquid spills are urgent: the sooner it reaches the bench, the better the chance of saving the keyboard."
            icon={<AlertTriangle size={26} className="text-accent" aria-hidden />}
          />
          <div className="grid gap-lg md:grid-cols-2">
            {PROBLEMS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 60}>
                <Card className="h-full">
                  <h3 className="m-0 mb-2 text-text text-[16px] font-bold">{p.title}</h3>
                  <p className="m-0 text-[14px] text-text-muted leading-relaxed">{p.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Process ────────────────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead
              title="How does a MacBook keyboard repair work?"
              intro="Six steps. The diagnosis stage catches faults that turn out to be software, and those are fixed free of charge."
              icon={<Wrench size={26} className="text-accent" aria-hidden />}
            />
            <ol className="grid gap-lg md:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
              {STEPS.map((s, i) => (
                <Reveal as="li" key={s.title} delay={(i % 3) * 70} className="rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg">
                  <span aria-hidden className="mb-md flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 font-heading text-[18px] font-bold text-accent">{i + 1}</span>
                  <p className="font-semibold text-[16px] m-0 mb-1 text-text">{s.title}</p>
                  <p className="text-[13.5px] text-text-muted leading-relaxed m-0">{s.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Timeline ───────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead title="How long does MacBook keyboard repair take?" />
          <div className="grid gap-lg md:grid-cols-3">
            <Card className="border-accent/30 bg-accent/[0.06]">
              <h3 className="m-0 mb-2 text-text text-[18px] font-bold">Same day (30 min - 4 hours)</h3>
              <p className="m-0 text-[14px] text-text-muted leading-relaxed">Single key cap on Magic Keyboard (30 min). Backlight chip swap (1 hour). Full Magic Keyboard swap on Apple Silicon (4 hours including Touch ID re-pair).</p>
            </Card>
            <Card>
              <h3 className="m-0 mb-2 text-text text-[18px] font-bold">1 day</h3>
              <p className="m-0 text-[14px] text-text-muted leading-relaxed">Magic Keyboard full swap on Pro 14″ and 16″. 2012-2015 Retina keyboard swap. Layout change to Russian or Arabic when stock is local.</p>
            </Card>
            <Card>
              <h3 className="m-0 mb-2 text-text text-[18px] font-bold">2 days</h3>
              <p className="m-0 text-[14px] text-text-muted leading-relaxed">Butterfly top case swap on the 2016-2019 MacBook Pro, when the top case has to be ordered in, and liquid-damaged keyboards that need a long ultrasonic clean.</p>
            </Card>
          </div>
        </section>

        {/* ── Parts ──────────────────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead title="Which keyboard parts do you fit?" />
            <div className="grid gap-lg md:grid-cols-2">
              <Card>
                <h3 className="m-0 mb-2 text-text text-[18px] font-bold">Genuine Apple Magic Keyboards</h3>
                <p className="m-0 mb-sm text-[14px] text-text-muted leading-relaxed">Fitted where supply allows, with Touch ID re-paired and the backlight checked on the bench. The quote says when a part is genuine.</p>
                <p className="m-0 mono text-[13px] text-accent">Standard pricing - included</p>
              </Card>
              <Card>
                <h3 className="m-0 mb-2 text-text text-[18px] font-bold">Quality-tested butterfly top cases</h3>
                <p className="m-0 mb-sm text-[14px] text-text-muted leading-relaxed">For the 2016-2019 MacBook Pro the whole top case is replaced, with its battery, keyboard and speakers, because that is how the part is built. Apple replaces the whole top case for the same job.</p>
                <p className="m-0 mono text-[13px] text-accent">Same 15-day warranty</p>
              </Card>
            </div>
            <p className="mt-md text-[14px] text-text-muted leading-relaxed max-w-[78ch]">
              We do not fit unbranded keyboard parts that cannot be tested before fitting.
            </p>
          </div>
        </section>

        {/* ── Warranty ───────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead title="What warranty comes with a keyboard repair?" icon={<ShieldCheck size={26} className="text-accent" aria-hidden />} />
          <Card>
            <ul className="space-y-2.5 text-[15px] text-text-muted list-none p-0 m-0">
              <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-1 shrink-0" aria-hidden /> <span><strong className="text-text">15 days</strong> - written warranty on parts and labour, dated and signed.</span></li>
              <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-1 shrink-0" aria-hidden /> <span><strong className="text-text">Covered:</strong> manufacturing defects, premature key failure, backlight failure, Touch ID issues, scissor mechanism failure.</span></li>
              <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-1 shrink-0" aria-hidden /> <span><strong className="text-text">Not covered:</strong> new liquid damage, new physical damage, software remap conflicts (free to fix anyway).</span></li>
              <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-1 shrink-0" aria-hidden /> <span><strong className="text-text">How to claim:</strong> WhatsApp the warranty card photo. We confirm a collection time when you message.</span></li>
              <li className="flex items-start gap-2"><Check size={16} className="text-accent mt-1 shrink-0" aria-hidden /> <span><strong className="text-text">Transferable:</strong> once, free of charge, to a new owner if the MacBook is sold within the warranty period.</span></li>
            </ul>
          </Card>
        </section>

        {/* ── Pricing recap + CTA ────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead title="How is a keyboard repair quoted?" intro="Diagnosis is free, and the quote on WhatsApp is confirmed before any work starts." />
            <PriceTable rows={PRICING} />

            <div className="mt-2xl relative overflow-hidden rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-xl md:p-2xl">
              <div className="relative flex flex-col gap-md md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="m-0 mono text-[12px] uppercase tracking-wider text-accent mb-2">MacBook Keyboard Repair · Same day · 1-2 days</p>
                  <h3 className="m-0 text-text text-[24px] md:text-[26px]">Get your keyboard quote in 4 minutes</h3>
                  <p className="m-0 mt-2 text-text-muted text-[15px]">Free diagnosis, then a firm quote. WhatsApp the model + a short video of which keys fail.</p>
                </div>
                <CtaRow whatsappMessage="Hi Usman, MacBook keyboard repair quote please. Model + which keys: " />
              </div>
            </div>
          </div>
        </section>

        {/* ── Technician ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead title="Who repairs the keyboard?" />
          <Card>
            <div className="flex flex-wrap items-center gap-lg">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 font-heading text-[20px] font-bold text-accent">U</span>
              <div>
                <p className="m-0 font-semibold text-text text-[18px]">Usman</p>
                <p className="m-0 text-[13.5px] text-text-faint">11 years experience · Battery, keyboard &amp; trackpad</p>
              </div>
            </div>
            <p className="mt-md text-[14px] text-text-muted leading-relaxed max-w-[78ch]">
              Usman has fitted 2,000+ MacBook keyboards and top cases since 2015. Personally handles every butterfly top case swap because the trackpad re-pair is fiddly.
            </p>
          </Card>
        </section>

        {/* ── DIY ────────────────────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead title="Should I try to fix this myself?" />
            <div className="grid gap-lg md:grid-cols-2">
              <Card className="border-accent/30 bg-accent/[0.06]">
                <h3 className="m-0 mb-md text-text text-[18px] font-bold">Try it yourself first</h3>
                <ul className="space-y-2.5 text-[14px] text-text-muted list-none p-0 m-0">
                  <li className="flex items-start gap-2"><Check size={15} className="text-accent mt-1 shrink-0" aria-hidden /> SMC and NVRAM reset - sometimes clears a stuck modifier key.</li>
                  <li className="flex items-start gap-2"><Check size={15} className="text-accent mt-1 shrink-0" aria-hidden /> Disconnect Bluetooth keyboards and trackpads - a pairing conflict can cause phantom key presses.</li>
                  <li className="flex items-start gap-2"><Check size={15} className="text-accent mt-1 shrink-0" aria-hidden /> Karabiner Elements - free, remaps a dead key to caps lock as a stop-gap.</li>
                  <li className="flex items-start gap-2"><Check size={15} className="text-accent mt-1 shrink-0" aria-hidden /> Compressed air at a 75° angle on a sticky butterfly key, as Apple suggests - sometimes a temporary fix, useful before a flight.</li>
                </ul>
              </Card>
              <Card>
                <h3 className="m-0 mb-md text-text text-[18px] font-bold">Stop and bring it in</h3>
                <ul className="space-y-2.5 text-[14px] text-text-muted list-none p-0 m-0">
                  <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-accent mt-1 shrink-0" aria-hidden /> Liquid spill - every minute of corrosion compounds. Power off, flip upside down, WhatsApp.</li>
                  <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-accent mt-1 shrink-0" aria-hidden /> Multiple keys failing on butterfly (2016-2019) - replacing one fixes nothing; the membrane is gone.</li>
                  <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-accent mt-1 shrink-0" aria-hidden /> Trying to pry off a butterfly key cap - the clips snap and you lose a working key on top of the broken one.</li>
                  <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-accent mt-1 shrink-0" aria-hidden /> Touch ID failure after a key swap - secure enclave re-pair needs the specific bench tooling.</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* ── Comparison ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead title="Should I repair my MacBook keyboard here or at the Apple Store?" />
          <Reveal className="overflow-x-auto rounded-2xl border border-border bg-bg-alt">
            <table className="w-full border-collapse text-left text-[14px] min-w-[640px]">
              <thead>
                <tr className="border-b border-border text-accent">
                  <th className="px-md py-md font-semibold">Factor</th>
                  <th className="px-md py-md font-semibold">MacBook Repair Dubai</th>
                  <th className="px-md py-md font-semibold">Apple Store / AASP</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row[0]} className="border-b border-border last:border-0 align-top">
                    <td className="px-md py-sm font-semibold text-text">{row[0]}</td>
                    <td className="px-md py-sm text-text">{row[1]}</td>
                    <td className="px-md py-sm text-text-muted">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <p className="mt-md text-[13px] text-text-faint mono max-w-[80ch]">
            Apple's Keyboard Service Program for butterfly models has ended; Apple quotes out-of-warranty top-case repairs after inspection.
          </p>
        </section>

        {/* ── Reviews ────────────────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <div className="mb-2xl flex items-end justify-between gap-md flex-wrap">
              <div>
                <p className="mono text-[12px] uppercase tracking-wider text-accent mb-3">All six reviews are verbatim from Google</p>
                <h2 className="m-0 text-text">Real keyboard-repair reviews</h2>
              </div>
              <Link to="/reviews" className="text-[15px] font-semibold text-accent hover:underline inline-flex items-center gap-1">Read all {REVIEW_COUNT}+ <ArrowRight size={15} aria-hidden /></Link>
            </div>
            <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <Reveal key={r.name} className="flex h-full flex-col rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-text">{r.name}</span>
                    <span className="flex" aria-hidden>{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} className="fill-star text-star" />)}</span>
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-text-muted m-0 flex-1">“{r.text}”</p>
                  <p className="mt-md mb-0 text-[12px] text-text-faint">{r.date ? `${r.date} · ` : ""}Google review</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead title="MacBook keyboard repair FAQ" />
          <FAQAccordion items={FAQS} injectSchema />
        </section>

        {/* ── Related ────────────────────────────────────────────── */}
        <section className="bg-bg-alt border-y border-border">
          <div className="mx-auto max-w-content px-5 md:px-6 py-4xl">
            <SectionHead title="Related MacBook repairs" />
            <div className="grid gap-lg md:grid-cols-3">
              {[
                { label: "MacBook Battery Replacement", href: "/macbook-battery-replacement-dubai", description: "Around 2 hours. Often paired with a butterfly top case swap." },
                { label: "MacBook Trackpad Repair",     href: "/macbook-trackpad-repair-dubai",     description: "Trackpad swap with Touch ID re-pair on supported models." },
                { label: "MacBook Water Damage Repair", href: "/macbook-water-damage-repair-dubai", description: "Liquid spilled on the keyboard? Ultrasonic clean - bring it in within 24 hours." },
              ].map((r) => (
                <Link key={r.href} to={r.href} className="group rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40 hover:bg-bg-alt">
                  <h3 className="m-0 mb-1 text-text text-[17px] group-hover:text-accent">{r.label}</h3>
                  <p className="m-0 text-[14px] text-text-muted leading-relaxed">{r.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Location ───────────────────────────────────────────── */}
        <section className="mx-auto max-w-content px-5 md:px-6 py-4xl">
          <SectionHead title="Where do I bring my MacBook in Dubai?" />
          <div className="grid gap-lg md:grid-cols-2 items-stretch">
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe src={MAPS_EMBED} title={`Map to ${NAP.name}`} width="100%" height="320" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block w-full h-[320px] border-0" />
            </div>
            <div className="flex flex-col gap-md">
              <h3 className="m-0 text-text">Find us in Media City</h3>
              <p className="flex items-start gap-sm text-[15px] text-text-muted m-0"><MapPin size={18} className="text-accent mt-1 shrink-0" aria-hidden /><span>{NAP.street}<br />{NAP.area}<br />{NAP.city}, UAE</span></p>
              <p className="flex items-start gap-sm text-[14px] text-text-faint m-0"><ParkingCircle size={18} className="text-accent mt-1 shrink-0" aria-hidden /> Paid parking on-site and nearby. Across from Media City Metro.</p>
              <a href={withSlash(DIRECTIONS)} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-accent hover:underline">Get directions <ExternalLink size={14} aria-hidden /></a>
            </div>
          </div>
        </section>

        {/* ── Final CTA ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-t border-border">
          <div className="relative mx-auto max-w-content px-5 md:px-6 py-4xl text-center">
            <h2 className="text-text m-0 mb-md max-w-[28ch] mx-auto">Sticky key? Butterfly failure? WhatsApp a video - quote in 4 minutes</h2>
            <p className="text-text-muted max-w-[60ch] mx-auto mb-xl text-[17px]">
              Send the model, year, and a short video of the keys that fail. Walk in to Media City or send it by courier. 15-day written warranty on every keyboard fitted.
            </p>
            <div className="flex flex-wrap justify-center gap-sm">
              <Button asChild variant="whatsapp" size="lg"><a href={withSlash(NAP.whatsappUrl)} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> Message on WhatsApp</a></Button>
              <Button asChild size="lg" variant="secondary" className="bg-white"><a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> {NAP.phoneDisplay}</a></Button>
            </div>
          </div>
        </section>
      </div>
        <section id="quote" className="mx-auto max-w-content px-5 md:px-6 mt-3xl scroll-mt-24">
      <h2 className="text-[28px] md:text-[32px] mb-md text-text">Get your free repair quote</h2>
      <p className="text-[15px] text-text-muted mb-lg max-w-[60ch]">Two quick steps, your device, then how to reach you. Free diagnosis, written quote, 15-day warranty.</p>
      <LeadForm variant="compact" defaultDeviceType="MacBook" sourcePath="/macbook-keyboard-repair-dubai" />
    </section>
    <RelatedArticles path="/macbook-keyboard-repair-dubai" />
    </PageShell>
  );
}

/* ── local helpers (dark) ──────────────────────────────────── */
function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg ${className}`}>{children}</div>;
}

function SectionHead({ title, intro, icon }: { title: string; intro?: string; icon?: ReactNode }) {
  return (
    <div className="mb-2xl max-w-[64ch]">
      <Reveal as="h2" className="m-0 text-text flex items-center gap-sm">{icon}{title}</Reveal>
      {intro && <Reveal as="p" className="mt-md text-[17px] text-text-muted leading-relaxed">{intro}</Reveal>}
    </div>
  );
}

function CtaRow({ whatsappMessage }: { whatsappMessage?: string }) {
  const href = whatsappMessage ? `${NAP.whatsappUrl}?text=${encodeURIComponent(whatsappMessage)}` : NAP.whatsappUrl;
  return (
    <div className="flex flex-wrap gap-sm shrink-0">
      <Button asChild variant="whatsapp" size="lg"><a href={withSlash(href)} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> WhatsApp Us</a></Button>
      <Button asChild size="lg" variant="secondary" className="border border-border-strong bg-bg-card text-text hover:bg-bg-alt"><a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call Now</a></Button>
    </div>
  );
}

function PriceTable({ rows }: { rows: PricingRow[] }) {
  return (
    <Reveal className="overflow-x-auto rounded-2xl border border-border bg-bg-alt">
      <table className="w-full border-collapse text-left text-[14px] min-w-[520px]">
        <thead>
          <tr className="border-b border-border text-accent">
            <th className="px-lg py-md font-semibold">MacBook model</th>
            <th className="px-lg py-md font-semibold whitespace-nowrap">Keyboard repair</th>
            <th className="px-lg py-md font-semibold">Turnaround</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.model} className="border-b border-border last:border-0">
              <td className="px-lg py-sm font-medium text-text">{r.model}</td>
              <td className="px-lg py-sm whitespace-nowrap">
                <PriceCTA compact message={`Hi, keyboard repair price for ${r.model}?`} />
              </td>
              <td className="px-lg py-sm text-text-muted">{r.timeline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}
