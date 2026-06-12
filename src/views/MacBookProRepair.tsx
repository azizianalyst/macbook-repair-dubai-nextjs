"use client";
import { Star, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Hero } from "@/components/blocks/Hero";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { VsAppleStore } from "@/components/blocks/VsAppleStore";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { Button } from "@/components/ui/button";
import { ResponsiveImage } from "@/components/blocks/ResponsiveImage";
import { useSeo, preloadFromHero } from "@/hooks/use-seo";
import { localBusiness, organization } from "@/lib/schema";
import { NAP } from "@/content/site";

// Per-section blueprint infographics (scripts/topic-images, cluster "device-hubs").
// This page is the template: every device hub gets the same five slots —
// hero, models timeline, common repairs, process, failure signs.
const IMG = {
  hero: {
    src: "/images/topics/macbook-pro-repair-hub-dubai.jpg",
    alt: "MacBook Pro repair Dubai - M5 full teardown exploded-view engineering infographic",
  },
  models: {
    src: "/images/topics/macbook-pro-models-timeline-dubai.jpg",
    alt: "MacBook Pro models we repair in Dubai - Intel to M5 generation evolution infographic",
    caption: "Every MacBook Pro generation we service - Intel Touch Bar models through the M5 lineup.",
  },
  services: {
    src: "/images/topics/macbook-pro-common-repairs-dubai.jpg",
    alt: "MacBook Pro repair services Dubai - screen, battery, keyboard and logic board infographic",
    caption: "The four MacBook Pro repairs we do most - screen, battery, keyboard and logic board.",
  },
  process: {
    src: "/images/topics/macbook-pro-repair-process-dubai.jpg",
    alt: "MacBook Pro repair process Dubai - diagnosis to quality check four-step infographic",
    caption: "From free diagnosis to final quality check - how your MacBook Pro repair runs.",
  },
  signs: {
    src: "/images/topics/macbook-pro-failure-signs-dubai.jpg",
    alt: "Signs your MacBook Pro needs repair - overheating, battery and screen failure infographic",
    caption: "Overheating, swollen battery, screen faults and no-power - the failure signs we diagnose daily.",
  },
};

function TopicFigure({ img }: { img: { src: string; alt: string; caption: string } }) {
  return (
    <figure className="mt-xl mx-auto max-w-[860px] overflow-hidden rounded-2xl border border-border bg-bg-card">
      <ResponsiveImage
        src={img.src}
        alt={img.alt}
        width={1600}
        height={1200}
        sizes="(max-width: 414px) 360px, (max-width: 1068px) 800px, 860px"
        imgClassName="w-full h-auto"
      />
      <figcaption className="border-t border-border px-lg py-3 text-center text-[13px] text-text-muted">
        {img.caption}
      </figcaption>
    </figure>
  );
}

const SIBLINGS = [
  { label: "MacBook Air", href: "/macbook-air-repair-dubai" },
  { label: "iMac", href: "/imac-repair-dubai" },
  { label: "Mac Pro", href: "/mac-pro-repair-dubai" },
  { label: "Mac mini", href: "/mac-mini-repair-dubai" },
  { label: "Mac Studio", href: "/mac-studio-repair-dubai" },
];

// Faithful model labels from the old page; href links to the dedicated model page where one exists.
type Model = { label: string; href?: string };
const MODELS: Model[] = [
  { label: `16" M5 Max (2026)`, href: "/macbook-pro-16-m5-max-2026-repair-dubai" },
  { label: `16" M5 Pro (2026)`, href: "/macbook-pro-16-m5-pro-2026-repair-dubai" },
  { label: `14" M5 Max (2026)`, href: "/macbook-pro-14-m5-max-2026-repair-dubai" },
  { label: `14" M5 Pro (2026)`, href: "/macbook-pro-14-m5-pro-2026-repair-dubai" },
  { label: `14" M5 (2025)`, href: "/macbook-pro-14-m5-2025-repair-dubai" },
  { label: `A8624 16" M4 Max (2024)`, href: "/macbook-pro-16-m4-2024-repair-dubai" },
  { label: `A8895 16" M4 Pro (2024)`, href: "/macbook-pro-16-m4-2024-repair-dubai" },
  { label: `A8894 14" M4 Pro (2024)`, href: "/macbook-pro-14-m4-2024-repair-dubai" },
  { label: `A8623 14" M4 (2024)`, href: "/macbook-pro-14-m4-2024-repair-dubai" },
  { label: `A2991 16" M3 Max (2024)`, href: "/macbook-pro-16-m3-2023-repair-dubai" },
  { label: `A2991 16" M3 Pro (2024)`, href: "/macbook-pro-16-m3-2023-repair-dubai" },
  { label: `A2992 14" M3 Pro (2024)`, href: "/macbook-pro-14-m3-2023-repair-dubai" },
  { label: `A2992 14" M3 (2024)`, href: "/macbook-pro-14-m3-2023-repair-dubai" },
  { label: `A2780 16" M2 Max (2023)`, href: "/macbook-pro-16-m2-pro-2023-repair-dubai" },
  { label: `A2780 16" M2 Pro (2023)`, href: "/macbook-pro-16-m2-pro-2023-repair-dubai" },
  { label: `A2779 14" M2 Max (2023)`, href: "/macbook-pro-14-m2-pro-2023-repair-dubai" },
  { label: `A2779 14" M2 Pro (2023)`, href: "/macbook-pro-14-m2-pro-2023-repair-dubai" },
  { label: `A2338 13" M2 (2022)`, href: "/macbook-pro-13-m2-2022-repair-dubai" },
  { label: `A2442 14" M1 Pro (2021)`, href: "/macbook-pro-14-m1-pro-2021-repair-dubai" },
  { label: `A2485 16" M1 Max (2021)`, href: "/macbook-pro-16-m1-pro-2021-repair-dubai" },
  { label: `A2338 13" M1 (2020)`, href: "/macbook-pro-13-m1-2020-repair-dubai" },
  { label: `A2289 13" (2020) - 2 ports Thunderbolt 3`, href: "/macbook-pro-13-intel-2020-repair-dubai" },
  { label: `A2141 16" (2019)` },
  { label: `A1990 15" (2019)` },
  { label: `A1990 15" (2018)` },
  { label: `A1989 13" (2018) - 4 ports Thunderbolt 3`, href: "/macbook-pro-13-intel-2019-repair-dubai" },
  { label: `A1707 15" (2017)` },
  { label: `A1706 13" (2017) - 4 ports Thunderbolt 3`, href: "/macbook-pro-13-intel-2019-repair-dubai" },
  { label: `A1708 13" (2017) - 2 ports Thunderbolt 3`, href: "/macbook-pro-13-intel-2019-repair-dubai" },
];

const SERVICES = [
  { title: "Keyboard Repair", body: "As a result of constant use, the keys on your MacBook can become loose over time. It is also possible for them to stick due to dirt and other factors. Our repair service can fix any problem with your keyboard. We can clean up and fix or replace the keys on your MacBook." },
  { title: "Screen Repair and Replacement", body: "An incident or a technology glitch could affect the screen on your MacBook Pro. We repair or replace the screen on your MacBook - LCD, LED, or Retina." },
  { title: "Battery Replacement", body: "Have you noticed a recent rise in your MacBook Pro's temperature? A few adjustments to the system settings often resolve this issue. If you have an older battery that has gone through many charge cycles, consider getting a new one for your MacBook." },
  { title: "Water Damage Repair", body: "We can help you if you knocked something over and got water on your MacBook Pro. Our professionals can fix the damage, and your laptop will work again." },
  { title: "Not Charging Fix", body: "It can be frustrating when your MacBook Pro doesn't charge. Rest assured, we can diagnose the issue and get it charged again for you." },
  { title: "Trackpad Repair", body: "We can help if the trackpad on your MacBook Pro doesn't respond or work right. If it breaks, we can fix it or get a new one." },
  { title: "Hinge Repair", body: "Is the joint on your MacBook Pro broken or loose? If the hinge on your laptop doesn't work right, we can fix it or replace it." },
  { title: "Software Issues", body: "If the software on your MacBook Pro is broken, it's tough to use. We can help you figure out what's wrong and fix it." },
  { title: "Data Recovery", body: "Don't worry if you lose important info or files on your MacBook Pro. We can get back the information you lost and help you recover it." },
  { title: "Hardware Upgrade", body: "Want to speed up or add more space to your MacBook Pro? We can improve the tech on your laptop so that it works better." },
  { title: "Overheating Fix", body: "Is the inside of your MacBook Pro getting too hot? To help cool it down, we can clean the fans and apply new thermal paste." },
  { title: "Won't Turn On", body: "It can be alarming when your MacBook Pro won't turn on. We can figure out what's wrong with your laptop and get it back in working order." },
  { title: "Running Slow", body: "Are you noticing a slower start-up time on your MacBook Pro? To improve performance and enhance network speed, we'll address these issues promptly." },
  { title: "System Crashing", body: "Having your MacBook Pro crash all the time can be annoying. We can figure out what makes the crashes happen and stop them." },
  { title: "Freezing Trouble", body: "Is your MacBook Pro freezing up or not working at all? We can figure out what's wrong and fix it so it doesn't freeze again." },
  { title: "Wi-Fi Problems", body: "Sometimes your MacBook Pro has trouble connecting to Wi-Fi, which can be a pain. We can figure out what's wrong and get you online again." },
  { title: "Bluetooth Issue", body: "Is it hard for your MacBook Pro to connect to Bluetooth devices? We can find and fix any Bluetooth problems so that everything works properly." },
  { title: "Sound Not Working", body: "Having trouble with your MacBook Pro's sound can be annoying. You can get your sound back up and running after we figure out what's wrong." },
];

const PROCESS = [
  { title: "Transparent Quote", body: "As soon as we find out the problem, we'll give you a clear breakdown of the issue and a price quote for fixing it. Parts and labour costs will be part of this price. The repair is completely transparent, and you decide whether to proceed." },
  { title: "30-Minute Appointment Repair", body: "Pre-book a slot and confirm the part for your exact MacBook Pro model. Screen, battery, or keyboard done in 30 minutes guaranteed — or the repair is free. Walk-ins are same-day, booked appointments are 30 minutes." },
  { title: "Quality Check and Safeguarding of Data", body: "After fixing your MacBook Pro, our techs will test it carefully to make sure everything is working right. We care about keeping your personal information safe and private throughout the process." },
];

const SIGNS = [
  "Running more slowly than normal, long startup times, or trouble with simple tasks.",
  "Gets very hot even when it isn't running any heavy programs - a fan, vent, or cooling issue.",
  "Clicking, whirring, or grinding sounds, which can mean the hard drive, fan, or other internal parts are failing.",
  "The battery drains too quickly, doesn't charge right, or shows signs of swelling.",
  "The screen is cracked or has problems with brightness or sharpness.",
  "Keys aren't responding, the keyboard sticks, or the trackpad doesn't work.",
  "The ports aren't working right, or you're having trouble connecting to Wi-Fi or Bluetooth.",
  "Frequent crashes, which could be a software or hardware issue.",
  "You spilled something - turn it off right away and bring it in so the damage doesn't get worse.",
  "Strange smells like burning or melting, which can signal serious problems that need help right away.",
];

const WHY = [
  { title: "Skilled Technicians", body: "Every technician here has been fixing MacBooks for years and is skilled at fixing all kinds of MacBook models. With each new product release, training is done monthly to keep our people up to date." },
  { title: "Customer Satisfaction First", body: "We believe in being honest and making sure our customers are happy. You won't go ahead with the repair until you agree to the price, and you don't pay until you've thoroughly checked how well the laptop works." },
  { title: "Everything In One Place", body: "We can fix all kinds of hardware problems with MacBook Pros - from broken screens, keyboards, and trackpads to internal parts. Our techs keep extra parts on hand so they can fix most hardware problems right away." },
  { title: "Choosing the Best Parts", body: "We use the same original spare parts that the maker of your MacBook Pro recommends. We can fix your MacBook Pro in Dubai with no hidden costs - you only pay for the work done." },
  { title: "Protecting Your Privacy", body: "Whatever you use your MacBook Pro for - work, study, entertainment - we can recover your sensitive information, and we strictly keep your data private." },
];

const PERFORMANCE = [
  "To free up space on your hard drive, get rid of files, apps, and downloads you don't use.",
  "Upgrade the RAM to make your MacBook Pro run much faster - especially with large files or many apps at once.",
  "On older models, speed things up by lowering or turning off visual features like motion and transparency.",
  "Always keep macOS and your apps up to date for the best speed, bug fixes, and security patches.",
  "Use Activity Monitor to find apps that take up too many resources, and close them when you're done.",
  "Clear your browser's cache and remove add-ons you don't use for a faster, cleaner experience.",
];

const TESTIMONIALS = [
  { name: "Alina", body: "The best place to get your MacBook fixed. I thought it wouldn't work again after spilling coffee on it. When I contacted the repair team, they assured me they would fix the issue - and they did. Thanks to the team, I highly recommend their services." },
  { name: "Green Light", body: "Another great job by the repair service. They saved me money because I didn't have to replace the whole MacBook Pro like Apple Support told me." },
  { name: "Maxwell", body: "This morning, I fixed my MacBook Pro! Quick and cheap home service. Email and WhatsApp make it easy to talk to people. People you can trust - honest and hard-working. Thanks a lot! I would recommend it to anyone." },
];

const FAQS = [
  { q: "How long will it take to fix my Mac?", a: "Most Mac repairs are completed on the same day. However, in some cases the damage may be more complex and require more time." },
  { q: "Will my Mac's data be safe during the repair?", a: "Absolutely. We respect our customers' data privacy and take it very seriously. Our technicians follow strict confidentiality and safety procedures, and a quality test ensures your Mac has no unreported issues both before and after the repair. We always recommend backing up your data beforehand as a precaution." },
  { q: "My MacBook Pro is really slow - should I get a new one?", a: "No. Almost all MacBooks are upgradeable. Faster RAM and newer storage devices significantly improve the speed and performance of your MacBook. Our repair specialists can upgrade components and enhance the functionality of your device." },
  { q: "Do you use original Apple parts for repairs?", a: "Yes. We use 100% genuine Apple parts or high-quality OEM replacements, depending on your preference and budget. This ensures your MacBook Pro maintains its original performance and reliability." },
  { q: "Can I get a quote before the repair?", a: "Of course! We provide a transparent, no-obligation quote after diagnosing your MacBook Pro. The quote includes both parts and labour costs, and no repair work begins until you approve the price." },
];

function CallButtons() {
  return (
    <div className="flex flex-wrap gap-sm">
      <Button asChild variant="whatsapp" size="lg">
        <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> WhatsApp Us</a>
      </Button>
      <Button asChild variant="secondary" size="lg">
        <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call Now</a>
      </Button>
    </div>
  );
}

export default function MacBookProRepair() {
  useSeo(
    {
      title: "MacBook Pro Repair Dubai - M1-M5 Screen, Battery & Logic Fix",
      description:
        "Expert MacBook Pro repair in Dubai for M1-M5 and Intel models. Screen, battery, keyboard & logic board services by experienced Apple technicians. Genuine parts, same-day service.",
      path: "/macbook-pro-repair-dubai",
      preloadImage: preloadFromHero(IMG.hero.src),
    },
    [localBusiness(), organization()],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        variant="device"
        tone="dark"
        eyebrow="MacBook Pro specialist"
        title="Best Quality MacBook Pro Repair Dubai"
        subtitle="Apple has dominated the market with the MacBook series. Like other Apple devices, the MacBook Pro is known for its high quality, elegant design, and portability. Even the best technology can malfunction from time to time - that's when our independent Apple specialists step in. We're not an Apple Authorised Service Centre - we're the faster, fairer-priced alternative, in Dubai since 2004. Contact us today."
        image={IMG.hero.src}
        imageAlt={IMG.hero.alt}
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> Independent Apple specialists</span>
          <span>·</span>
          <span>Genuine Apple parts</span>
          <span>·</span>
          <span>Free pickup across Dubai</span>
        </p>
      </Hero>

      {/* Answer-first capsule (AEO/BLUF) */}
      <QuickAnswer
        tone="dark"
        question="Where can I get my MacBook Pro repaired in Dubai?"
        answer="MacBook Repair Dubai repairs every MacBook Pro — 13-inch, 14-inch and 16-inch, Intel through M5 — at its Concord Tower workshop in Dubai Media City. Same-day screen, battery, keyboard, logic-board and water-damage service, with free diagnosis, free citywide pickup, genuine or OEM-grade parts and a 12-month written warranty, in business since 2004."
      />

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "Apple Repair", path: "/apple-repair-dubai" },
          { name: "MacBook Repair", path: "/" },
          { name: "MacBook Pro Repair", path: "/macbook-pro-repair-dubai" },
        ]} />
      </section>

      {/* Other devices */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-lg">
        <p className="flex flex-wrap items-center gap-2 text-[14px] text-text-muted">
          <span className="font-semibold text-text">We also repair:</span>
          {SIBLINGS.map((s) => (
            <Link key={s.href} to={s.href} className="px-3 py-1 border border-border bg-bg-card rounded-md text-accent hover:bg-bg-alt transition-colors">{s.label}</Link>
          ))}
        </p>
      </section>

      {/* Models */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <h2 className="text-[28px] md:text-[32px] mb-md text-text">MacBook Pro models we repair</h2>
        <p className="text-[15px] text-text-muted max-w-[70ch] mb-md">Tap a linked model for its dedicated repair page.</p>
        <ul className="flex flex-wrap gap-2">
          {MODELS.map((m) => (
            <li key={m.label}>
              {m.href ? (
                <Link to={m.href} className="block px-3 py-1 border border-border bg-bg-card rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors mono">{m.label}</Link>
              ) : (
                <span className="block px-3 py-1 border border-border bg-bg-card rounded-md text-[13px] text-text mono">{m.label}</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md text-text">Our MacBook Pro Repair Dubai Services</h2>
          <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.title} className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm text-text">{s.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
          <TopicFigure img={IMG.services} />
          <div className="mt-lg"><CallButtons /></div>
        </div>
      </section>

      {/* Book appointment */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-sm text-text">Book Your MacBook Pro Repair Appointment</h2>
        <p className="text-[16px] text-text-muted max-w-[75ch] mb-lg">
          Ready to get your MacBook Pro repaired? Our experienced technicians are here to help. Book your repair appointment today, and we'll have your device running like new in no time.
        </p>
        <CallButtons />
      </section>

      {/* Process */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-lg text-text">Our Process</h2>
          <ol className="space-y-md max-w-[80ch]">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="flex gap-md">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/15 text-accent font-bold flex items-center justify-center">{i + 1}</span>
                <div>
                  <h3 className="text-[17px] font-bold mb-1 text-text">{step.title}</h3>
                  <p className="text-[15px] text-text-muted leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Signs */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-sm text-text">Signs Your MacBook Pro Needs Expert Attention</h2>
        <ul className="grid gap-sm sm:grid-cols-2 max-w-[90ch]">
          {SIGNS.map((s) => (
            <li key={s} className="flex gap-sm text-[15px] text-text-muted"><CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-1" aria-hidden /> {s}</li>
          ))}
        </ul>
      </section>

      {/* Why choose us */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md text-text">Why Choose Us?</h2>
          <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w) => (
              <article key={w.title} className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm text-text">{w.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed">{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Performance tips */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md text-text">How to Improve the Performance of Your MacBook Pro</h2>
        <ul className="space-y-sm max-w-[85ch]">
          {PERFORMANCE.map((p) => (
            <li key={p} className="flex gap-sm text-[15px] text-text-muted"><CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-1" aria-hidden /> {p}</li>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md text-text">Testimonials</h2>
          <div className="grid gap-md md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="border border-border bg-bg-card rounded-md p-lg">
                <div className="flex gap-1 mb-sm" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} className="fill-star text-star" aria-hidden />)}
                </div>
                <blockquote className="text-[15px] text-text-muted leading-relaxed">{t.body}</blockquote>
                <figcaption className="mt-sm font-semibold text-text">- {t.name}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-lg border border-border bg-bg-card rounded-md p-lg max-w-[60ch]">
            <h3 className="text-[18px] font-bold mb-sm text-text">Business Hours</h3>
            <p className="text-[15px] text-text-muted">Monday - Saturday: 9:00 AM - 10:00 PM</p>
            <p className="text-[15px] text-text-muted">Sunday: our technicians are resting, but onsite service is available.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <VsAppleStore tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md text-text">Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS} injectSchema tone="dark" />
      </section>

      {/* Location */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg text-text">Where to Find Us</h2>
        <LocationBlock tone="dark" />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-card p-xl md:p-2xl flex flex-col items-start gap-md">
          <div aria-hidden className="pointer-events-none absolute -top-16 -right-10 h-[20rem] w-[20rem] rounded-full bg-accent/15 blur-3xl" />
          <h2 className="relative text-text text-[28px] md:text-[32px] max-w-[30ch]">Ready to get your MacBook Pro repaired?</h2>
          <p className="relative text-text-muted text-[16px] max-w-[60ch]">
            Our experienced technicians are here to help. Book your repair appointment today, and we'll have your device running like new in no time.
          </p>
          <div className="relative"><CallButtons /></div>
        </div>
      </section>
      </div>
    <RelatedArticles path="/macbook-pro-repair-dubai" />
    </PageShell>
  );
}
