"use client";
import { MapPin, Clock, Star, Phone, MessageCircle, Truck, Laptop, Smartphone, Tablet, Monitor } from "lucide-react";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { PageShell } from "@/components/layout/PageShell";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Hero } from "@/components/blocks/Hero";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { useSeo } from "@/hooks/use-seo";
import { REVIEWS } from "@/content/reviews";
import { NAP } from "@/content/site";

const DEVICES = [
  { icon: Laptop,     label: "MacBook",          price: "From AED 450",  link: "/",                     note: "Air, Pro 13–16\", Intel & M1–M5" },
  { icon: Monitor,    label: "iMac",              price: "From AED 600",  link: "/imac-repair-dubai",    note: "21.5\", 24\", 27\" Retina 5K" },
  { icon: Monitor,    label: "Mac mini & Studio", price: "From AED 400",  link: "/mac-mini-repair-dubai",note: "M1–M4 Mac mini, Mac Studio" },
  { icon: Smartphone, label: "iPhone",            price: "From AED 179",  link: "/iphone-repair-dubai",  note: "iPhone 6 through 17 Pro Max" },
  { icon: Tablet,     label: "iPad",              price: "From AED 350",  link: "/ipad-repair-dubai",    note: "mini, Air, standard, Pro 11/13\"" },
  { icon: Clock,      label: "Apple Watch",       price: "From AED 250",  link: "/apple-watch-repair-dubai", note: "Series 3 through Ultra 2" },
];

const AREAS = [
  { area: "Dubai Media City / JLT / JBR",    time: "Free pickup · 2–4 hrs" },
  { area: "Downtown / DIFC / Business Bay",   time: "Free pickup · 2–4 hrs" },
  { area: "Jumeirah / Al Quoz / Umm Suqeim", time: "Free pickup · 2–4 hrs" },
  { area: "Deira / Bur Dubai / Karama",       time: "Free pickup · 2–4 hrs" },
  { area: "Dubai Hills / Al Barsha / Mirdif", time: "Free pickup · 2–4 hrs" },
  { area: "Sharjah / Abu Dhabi",              time: "AED 100 each way" },
];

const FAQS = [
  { q: "Where is the nearest Apple repair shop to me in Dubai?",
    a: "The nearest Apple specialist in Dubai is at Concord Tower, Office #45, 10th Floor, Al Sufouh, Dubai Media City, near Media City Metro. We repair every Apple device: MacBook, iMac, Mac mini, Mac Studio, iPhone, iPad, and Apple Watch. Free pickup from your home or office across Dubai Mainland. WhatsApp 055 741 3706." },
  { q: "Do you repair all Apple devices near me in Dubai?",
    a: "Yes. MacBook (Air, Pro, Intel through M5), iMac (21.5\", 24\", 27\"), Mac mini, Mac Studio, Mac Pro, iPhone (6 through 17 Pro Max), iPad (all generations), and Apple Watch (Series 3 through Ultra 2). One specialist, every Apple product, at Concord Tower Dubai Media City since 2004." },
  { q: "How quickly can you repair my Apple device near me?",
    a: "iPhone screen: 40 minutes. iPhone battery: 30 minutes. MacBook battery or keyboard: 1–3 hours. MacBook screen: same day. Logic board and water damage: 2–5 days. All same-day jobs available same day you contact us, drop in or request free pickup from anywhere in Dubai." },
  { q: "Can I get free Apple device pickup near me in Dubai?",
    a: "Yes, free courier pickup and delivery across all Dubai Mainland areas for every Apple device. WhatsApp 055 741 3706 with your device, location, and fault. A courier arrives within 2–4 hours. Most repairs are completed and returned the same day." },
  { q: "How much does Apple repair cost near me in Dubai?",
    a: "MacBook screen from AED 499, battery from AED 450. iPhone screen from AED 179, battery from AED 250. iPad screen from AED 350. Apple Watch battery from AED 250. Diagnosis is free. WhatsApp 055 741 3706 with your exact model for a fixed written quote in under 4 minutes." },
  { q: "Are you an Apple Authorised Service Provider near me in Dubai?",
    a: "No, we are an independent Apple specialist, which means lower prices (typically 40–60% less than Apple Store rates) and more repair options: component-level logic board repair, out-of-warranty fixes, and repairs on devices Apple no longer services. Independent since 2004. Office #45, Concord Tower, Dubai Media City." },
  { q: "Is there a warranty on Apple repair near me in Dubai?",
    a: "Every repair carries a written warranty of up to 12 months, regardless of device. Battery warranty is 3 months with an 80% capacity guarantee. The warranty card is issued with every paid repair and covers the device serial number, repair type, and parts." },
];

const FEATURED_REVIEW_INDEXES = [0, 4, 9, 15, 20, 26];

export default function AppleRepairNearMe() {
  const reviews = FEATURED_REVIEW_INDEXES.map((i) => REVIEWS[i % REVIEWS.length]).filter(Boolean);

  useSeo({
    title: "Apple Repair Near Me Dubai. All Devices, From AED 179 | Free Pickup",
    description:
      "Apple repair near you in Dubai. MacBook, iPhone, iPad, iMac, Apple Watch. From AED 179. Free pickup across Dubai. Same-day. Concord Tower, Media City. Call 055 741 3706.",
    path: "/apple-repair-near-me-dubai",
  });

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
        <Hero
          image={undefined}
          imageAlt="Apple repair near me Dubai, all Apple devices"
          variant="device"
          tone="dark"
          eyebrow="Apple repair near you · Dubai Media City · Since 2004"
          title="Apple Repair Near Me. Dubai"
          subtitle="Every Apple device repaired. MacBook, iPhone, iPad, iMac, Apple Watch. Free pickup from your door. Same-day at Concord Tower."
        >
          <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
            <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> 5.0 · 216+ reviews</span>
            <span>·</span>
            <span className="flex items-center gap-1"><MapPin size={14} aria-hidden /> Concord Tower, Dubai Media City</span>
            <span>·</span>
            <span>6 Apple device families · Since 2004</span>
          </p>
        </Hero>

        <USPStrip tone="dark" />

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <BreadcrumbTrail
            tone="dark"
            trail={[
              { name: "Home", path: "/" },
              { name: "Apple Repair Dubai", path: "/apple-repair-dubai" },
              { name: "Apple Repair Near Me", path: "/apple-repair-near-me-dubai" },
            ]}
          />
        </section>

        <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
          <QuickAnswer
            tone="dark"
            question="Where can I get my Apple device repaired near me in Dubai?"
            answer="The nearest Apple repair specialist in Dubai is at Concord Tower, Office #45, 10th Floor, Dubai Media City, near Media City Metro. Every Apple device repaired: MacBook, iMac, iPhone, iPad, Apple Watch. From AED 179. Free pickup across Dubai Mainland. Same-day for most repairs. WhatsApp 055 741 3706."
          />
        </section>

        {/* Device cards */}
        <section aria-labelledby="devices" className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 id="devices" className="text-[28px] md:text-[32px] mb-sm">Every Apple device repaired near you in Dubai</h2>
          <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">One workshop since 2004, the full Apple ecosystem, not a pick-and-choose list.</p>
          <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
            {DEVICES.map(({ icon: Icon, label, price, link, note }) => (
              <a key={label} href={link} className="border border-border bg-bg-card rounded-md p-lg flex flex-col gap-sm hover:border-accent transition-colors">
                <div className="flex items-center gap-sm">
                  <Icon size={22} className="text-accent shrink-0" aria-hidden />
                  <h3 className="text-[17px] font-bold">{label}</h3>
                </div>
                <p className="text-[22px] font-bold text-accent">{price}</p>
                <p className="text-[13px] text-text-muted">{note}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Two options */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-md">Two ways to get your Apple device fixed near you</h2>
            <div className="grid gap-md md:grid-cols-2">
              <article className="border border-border bg-bg-card rounded-md p-xl">
                <MapPin size={28} className="text-accent mb-sm" aria-hidden />
                <h3 className="text-[20px] font-bold mb-sm">Drop in to the workshop</h3>
                <p className="text-[15px] text-text-muted leading-relaxed mb-md">
                  Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City. Near Media City Metro. Open Mon-Sat 9 am–10 pm. iPhone screen done in 40 minutes.
                </p>
                <a href="https://maps.google.com/?q=Concord+Tower+Dubai+Media+City" className="text-accent text-[14px] font-semibold hover:underline">Get directions →</a>
              </article>
              <article className="border border-border bg-bg-card rounded-md p-xl">
                <Truck size={28} className="text-accent mb-sm" aria-hidden />
                <h3 className="text-[20px] font-bold mb-sm">Free pickup from anywhere in Dubai</h3>
                <p className="text-[15px] text-text-muted leading-relaxed mb-md">
                  WhatsApp 055 741 3706. A courier collects from your home or office, no charge across Dubai Mainland. Device repaired and returned same day for most jobs.
                </p>
                <a href={NAP.whatsappUrl} className="text-accent text-[14px] font-semibold hover:underline">Book free pickup →</a>
              </article>
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Apple repair pickup, near you across Dubai</h2>
          <div className="grid gap-sm sm:grid-cols-2 lg:grid-cols-3 mt-lg">
            {AREAS.map(({ area, time }) => (
              <div key={area} className="border border-border bg-bg-card rounded-md p-md flex items-start gap-sm">
                <MapPin size={16} className="text-accent shrink-0 mt-[2px]" aria-hidden />
                <div>
                  <p className="text-[14px] font-semibold">{area}</p>
                  <p className="text-[13px] text-text-muted">{time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <div className="border border-border bg-bg-card rounded-md p-xl flex flex-col md:flex-row md:items-center gap-lg">
            <div className="flex-1">
              <h2 className="text-[22px] font-bold mb-sm">Get your Apple device repaired near you today</h2>
              <p className="text-[15px] text-text-muted">Free diagnosis · Fixed price · Free pickup · Same-day return for most repairs.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-sm shrink-0">
              <a href={NAP.whatsappUrl} className="inline-flex items-center gap-sm bg-accent text-white font-semibold px-lg py-sm rounded-md text-[15px] hover:bg-accent/90">
                <MessageCircle size={18} aria-hidden /> WhatsApp Now
              </a>
              <a href={`tel:${NAP.phoneE164}`} className="inline-flex items-center gap-sm border border-border bg-bg font-semibold px-lg py-sm rounded-md text-[15px] hover:bg-bg-card">
                <Phone size={18} aria-hidden /> {NAP.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
          <div className="mx-auto max-w-content px-5 md:px-6">
            <h2 className="text-[28px] md:text-[32px] mb-md">What customers near you say</h2>
            <ReviewGrid reviews={reviews} tone="dark" />
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-md">Apple repair near me. FAQ</h2>
          <FAQAccordion items={FAQS} injectSchema tone="dark" />
        </section>

        {/* Related */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[22px] font-bold mb-md">Specific device repair near you</h2>
          <div className="flex flex-wrap gap-sm">
            {[
              { label: "iPhone Repair Near Me Dubai", href: "/iphone-repair-near-me-dubai" },
              { label: "Mac Repair Near Me Dubai", href: "/mac-repair-near-me-dubai" },
              { label: "Apple Repair Dubai", href: "/apple-repair-dubai" },
              { label: "iPhone Repair Dubai", href: "/iphone-repair-dubai" },
              { label: "MacBook Repair Dubai", href: "/" },
              { label: "Apple Watch Repair Dubai", href: "/apple-watch-repair-dubai" },
            ].map(({ label, href }) => (
              <a key={href} href={href} className="border border-border rounded-md px-md py-xs text-[14px] hover:bg-bg-card transition-colors">
                {label}
              </a>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
          <h2 className="text-[28px] md:text-[32px] mb-lg">Find us. Concord Tower, Dubai Media City</h2>
          <LocationBlock tone="dark" />
        </section>
      </div>
      <RelatedArticles path="/apple-repair-near-me-dubai" />
    </PageShell>
  );
}
