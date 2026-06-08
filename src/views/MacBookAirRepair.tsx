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
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization } from "@/lib/schema";
import { NAP } from "@/content/site";
import AIR_MODELS from "@/content/macbook-air-models.json";

const SIBLINGS = [
  { label: "MacBook Pro", href: "/macbook-pro-repair-dubai" },
  { label: "iMac", href: "/imac-repair-dubai" },
  { label: "Mac Pro", href: "/mac-pro-repair-dubai" },
  { label: "Mac mini", href: "/mac-mini-repair-dubai" },
  { label: "Mac Studio", href: "/mac-studio-repair-dubai" },
];

const MODELS = [
  `A3090 13" M3 (2024)`, `A2941 15" M2 (2023)`, `A2681 13" M2 (2022)`, `A2337 13" M1 (2020)`,
  `A1932 13" Retina (2018)`, `A1466 13" (2017)`, `A1466 13" (Early 2015)`, `A1465 11" (Early 2015)`,
  `A1466 13" (Early 2014)`, `A1465 11" (Early 2014)`, `A1369 13" (Mid 2013)`, `A1465 11" (Mid 2013)`,
  `A1369 13" (Mid 2012)`, `A1465 11" (Mid 2012)`, `A1369 13" (Mid 2011)`,
];

const SERVICES = [
  { title: "Screen Repair / Replacement", body: "Apple products, such as the MacBook Air, are noted for their gorgeous screens and high graphics quality. They use modern screen technologies to deliver crisp visuals, rich colours, and smooth performance. However, as with most electronic equipment, MacBook Airs are susceptible to damage if dropped or subjected to heavy impact. We provide the fastest and most economical MacBook screen repair in Dubai." },
  { title: "Battery Replacement", body: "Streaming videos may drain the MacBook Air's battery. Furthermore, battery drain can occur when running power-intensive apps. However, you may encounter this issue even when not using these tools. Don't stress! Help is on the way from MacBook Repair Dubai to fix your MacBook Air issue within a certain time frame." },
  { title: "Water Damage Repair", body: "Our skilled techs can fix your MacBook Air that was damaged by water and save your important data. Our advanced methods clean and repair your device's parts so it works just like it did when you first bought it." },
  { title: "Not Charging Fix", body: "If your MacBook Air won't charge, our experts will figure out what the issue is and fix it. We'll fix any charging ports, batteries, or other parts that aren't working right so that your device can charge again." },
  { title: "Keyboard Repair", body: "We can fix keys on your MacBook Air keyboard that are stuck, won't work, or are broken. To get the keyboard working properly again, our techs will either replace individual keys or the whole assembly." },
  { title: "Trackpad Repair", body: "Let us help if the trackpad on your MacBook Air won't work or is acting strangely. We'll fix or replace the trackpad so that the cursor moves smoothly and correctly." },
  { title: "Hinge Repair", body: "Fixing hinges that are broken or not tight enough is our speciality. We'll fix or replace the hinges to make sure the screen on your MacBook Air opens and closes easily." },
  { title: "Software Issues", body: "The team can help you figure out and fix a number of program problems on your MacBook Air. We'll figure out what's wrong and give you ways to fix it so your device keeps working well." },
  { title: "Data Recovery", body: "Our experts can help you get back lost files or data on your MacBook Air if you've lost them. We get your important information back using cutting-edge tools and methods." },
  { title: "Hardware Upgrade", body: "Speed up your MacBook Air with our upgrade services. From RAM to SSDs, we boost performance using top-quality MacBook hardware and accessories." },
  { title: "Overheating Fix", body: "If your MacBook Air is getting too hot, our experts will figure out why and fix it. To keep it from getting too hot, we'll clean the cooling system, replace the thermal paste, or do any other fixes that are needed." },
  { title: "Won't Turn On", body: "When your MacBook Air won't turn on, our pros will figure out what's wrong and fix it. We'll fix or replace any broken parts on your device so it works again." },
  { title: "Running Slow", body: "Our experts can help speed up your MacBook Air if it's running slowly. We'll find and get rid of slow spots, update your software, and do other things to make your device faster." },
  { title: "Crashing & Freezing Issue", body: "Crashes that happen a lot can be annoying, but our team can help fix the problem. We'll figure out why your MacBook Air keeps crashing and give you ways to keep it stable." },
  { title: "Sound Not Working", body: "Our team can help if the sound on your MacBook Air doesn't work. We'll fix or replace any speakers, audio jacks, or other parts that aren't working right so you can hear clear sound again." },
  { title: "WiFi & Bluetooth Connectivity Issues", body: "Our techs can fix problems with your MacBook Air's WiFi and Bluetooth connections. We'll figure out what's wrong and fix it so that your device can safely connect to peripherals and networks." },
];

const PROCESS = [
  "When you bring us your MacBook Air, our skilled techs will do a full diagnostic check to figure out why it's not working.",
  "We will give you a clear quote for the fix and fully explain what's wrong. We'll also let you know when we think it'll be done.",
  "Our skilled techs will use original Apple parts and the best tools in the business to fix your device once you agree to it.",
  "Before we send your MacBook Air back, we'll make sure it works properly and that all of the problems have been fixed.",
  "Finally, we'll let you know when your MacBook Air is ready to be picked up. You can also use our simple delivery service to get your device back to you quickly.",
];

const SIGNS = [
  "The MacBook Air won't start or turn on.",
  "There are cracks, breaks, or spots on the screen.",
  "Some keys on the keyboard are broken, stuck, or don't work.",
  "It won't charge, or the battery goes out very quickly.",
  "It sounds funny or gets too hot.",
  "A lot of programs and apps crash or freeze.",
  "The trackpad feels weird or doesn't work right.",
  "You spilt some liquid on your MacBook Air.",
  "It takes a long time to do things, or it runs very slowly.",
];

const CARE = [
  "Clean the screen and base with a soft, dry cloth. Don't use water or cleaning products - they can damage it.",
  "Don't drop or scratch your MacBook Air; buy a case or cover to protect it.",
  "Take your MacBook Air off the charger once it's full. Leaving it plugged in all the time may shorten battery life.",
  "Allow enough space for airflow. Using it on pillows or blankets can block airflow and cause overheating.",
  "Install macOS and app updates when they come out - they fix bugs and help your MacBook Air run better.",
  "Remove files and programs you don't need if storage is low - this can help improve its speed.",
  "Only download files and programs from sources you trust; some files can carry viruses that harm your MacBook Air.",
  "Use tools to back up your important files, so you won't lose everything if something goes wrong.",
  "If you're unsure or think your MacBook Air is broken, get professional help rather than fixing it yourself - DIY can make it worse.",
];

const WHY = [
  "Reasonable, pocket-friendly repair service.",
  "We carry out repairs of any complexity.",
  "Our technicians are qualified to fix Apple products.",
  "We provide free MacBook diagnosis.",
  "We only use original replacement parts for MacBook Air models.",
  "Our booking process is straightforward.",
  "The majority of the repair work is accomplished within a day.",
];

const QUALITY = [
  { title: "Rapid Repair Service", body: "We can fix all problems with your MacBook Air on the same day, so you won't have to wait long to get it back in working order." },
  { title: "Minimal Downtime", body: "We know how important your MacBook Air is to you, so we work hard to fix it quickly so you don't have to be without it for too long." },
  { title: "Budget Friendly", body: "Get expert, quality help without breaking the bank with our affordable MacBook Air repair services." },
  { title: "Lasting Solutions", body: "We focus on fixing MacBook Airs in a way that works well and lasts, so your device will continue to work well after you leave our shop." },
  { title: "Certified Technicians", body: "Our certified MacBook Air repair experts can fix any problem, and we offer warranty choices to give you extra peace of mind." },
  { title: "Professional Service", body: "Our professional techs have years of experience fixing MacBook Airs, so you can be sure that your device is in good hands." },
];

const TESTIMONIALS = [
  { name: "Rishabh", body: "The best company to choose for MacBook repairs. My laptop will never work again after it spilt coffee. But when I called the repair service, they assured me that the issue would be rectified and the system would be fixed. Bravo to the team, and I heartily endorse using their services." },
  { name: "Shehzad Ahmad", body: "Outstanding service beyond description. Water damage to my MacBook Air scared me because I couldn't afford the repairs. Nevertheless, the team mended my laptop expertly and gave me a fair estimate. The turnaround time was remarkable, and my MacBook Air is now operating at peak performance. I'm incredibly pleased with the service and wholeheartedly recommend it for any repairs." },
];

const FAQS = [
  { q: "Can you fix a MacBook Air?", a: "Yes, absolutely! As an Apple Authorized Service Provider, our expert technicians can repair all MacBook Air models - from older Intel versions to the latest M3 models. Whether it's a screen issue, battery problem, or software malfunction, we use Apple-approved tools and genuine parts to restore your device to perfect working condition." },
  { q: "Is it worthwhile to fix my MacBook Air screen?", a: "In most cases, yes. Replacing your MacBook Air screen is far more affordable than buying a new laptop. If the device is still performing well and other components are in good condition, a screen replacement is a smart and cost-effective solution. Repair costs also typically drop over time, so older MacBook Airs are less expensive to fix." },
  { q: "My MacBook Air has gotten wet but is still functional - should I keep using it or consult a professional?", a: "The device may continue to function for a while, but eventually some difficulties may arise. To avoid further harm, we recommend that you stop using it and talk with a technical professional." },
  { q: "Which replacement components do you use?", a: "We only use genuine Apple parts in all repairs." },
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

export default function MacBookAirRepair() {
  useSeo(
    {
      title: "MacBook Air Repair Dubai - Screen, Battery & Logic Board Fix",
      description:
        "Get your MacBook Air repaired quickly and affordably in Dubai. Certified technicians fix screen, battery, keyboard & more on M1, M2, M3 & Intel models using genuine Apple parts. Rated 5.0 stars.",
      path: "/macbook-air-repair-dubai",
    },
    [localBusiness(), organization()],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        variant="device"
        tone="dark"
        eyebrow="MacBook Air specialist"
        title="MacBook Air Repair Dubai"
        subtitle="Get your MacBook Air repaired quickly and affordably in Dubai. Our expert technicians handle screen repairs, battery replacements, and keyboard issues using genuine Apple parts. Rated 5.0 stars by hundreds of satisfied customers. Contact us today."
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> 5.0 stars · hundreds of customers</span>
          <span>·</span>
          <span>Genuine Apple parts</span>
          <span>·</span>
          <span>Free pickup across Dubai</span>
        </p>
      </Hero>

      {/* Answer-first capsule (AEO/BLUF) */}
      <QuickAnswer
        tone="dark"
        question="Where can I get my MacBook Air repaired in Dubai?"
        answer="MacBook Repair Dubai repairs every MacBook Air — 11-inch, 13-inch and 15-inch, Intel through M5 — at its Concord Tower workshop in Dubai Media City. Same-day screen, battery and keyboard service plus logic-board and water-damage repair, with free diagnosis, free citywide pickup, genuine or OEM-grade parts and a 90-day written warranty."
      />

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "Apple Repair", path: "/apple-repair-dubai" },
          { name: "MacBook Repair", path: "/" },
          { name: "MacBook Air Repair", path: "/macbook-air-repair-dubai" },
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
        <h2 className="text-[28px] md:text-[32px] mb-md text-text">MacBook Air models we repair</h2>
        <p className="text-[15px] text-text-muted max-w-[70ch] mb-md">Tap a model for its dedicated repair page with pricing, common faults and turnaround.</p>
        <div className="flex flex-wrap gap-2 mb-lg">
          {AIR_MODELS.map((m) => (
            <Link key={m.slug} to={`/${m.slug}`} className="px-3 py-1.5 border border-border bg-bg-card rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">{m.name} →</Link>
          ))}
        </div>
        <p className="text-[13px] text-text-muted mb-sm">Full hardware coverage, including older Intel and discontinued models:</p>
        <ul className="flex flex-wrap gap-2">
          {MODELS.map((m) => (
            <li key={m} className="px-3 py-1 border border-border bg-bg-card rounded-md text-[13px] text-text mono">{m}</li>
          ))}
        </ul>
      </section>

      {/* Common problems */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md text-text">Common MacBook Air Problems We Deal With</h2>
          <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.title} className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm text-text">{s.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-lg"><CallButtons /></div>
        </div>
      </section>

      {/* Book your slot */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-sm text-text">Book Your Slot Now</h2>
        <p className="text-[16px] text-text-muted max-w-[75ch] mb-lg">
          Your time is very valuable to us. That's why we have an easy and quick appointment system that lets you reserve a time for repair ahead of time. We'll hold your spot in our service line as soon as you pick a date and time that work best for you. By making an appointment, you can cut down on wait times and make sure our skilled experts can fix your MacBook Air right away.
        </p>
        <CallButtons />
      </section>

      {/* Repair process */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-lg text-text">Our Repair Process</h2>
          <ol className="space-y-md max-w-[80ch]">
            {PROCESS.map((step, i) => (
              <li key={i} className="flex gap-md">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/15 text-accent font-bold flex items-center justify-center">{i + 1}</span>
                <p className="text-[15px] text-text-muted leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Signs */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-sm text-text">Signs Your MacBook Air Needs Repair</h2>
        <p className="text-[16px] text-text-muted max-w-[70ch] mb-md">If you see any of these things, it's time to bring your MacBook Air to us for repair:</p>
        <ul className="grid gap-sm sm:grid-cols-2 max-w-[80ch]">
          {SIGNS.map((s) => (
            <li key={s} className="flex gap-sm text-[15px] text-text-muted"><CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-1" aria-hidden /> {s}</li>
          ))}
        </ul>
      </section>

      {/* Care */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md text-text">How to Take Care of Your MacBook Air</h2>
          <ul className="space-y-sm max-w-[80ch]">
            {CARE.map((c) => (
              <li key={c} className="flex gap-sm text-[15px] text-text-muted"><CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-1" aria-hidden /> {c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-sm text-text">Why Customers Choose Us</h2>
        <p className="text-[16px] text-text-muted max-w-[75ch] mb-md">
          We are a specialised centre for Apple MacBook and gadget repair in Dubai, with an experienced staff of engineers who are experts in their field. We have several advantages over other services in the city:
        </p>
        <ul className="grid gap-sm sm:grid-cols-2 max-w-[80ch]">
          {WHY.map((w) => (
            <li key={w} className="flex gap-sm text-[15px] text-text-muted"><CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-1" aria-hidden /> {w}</li>
          ))}
        </ul>
      </section>

      {/* Quality and speed */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md text-text">Get Quality and Speed at Our MacBook Air Repair Shop</h2>
          <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
            {QUALITY.map((q) => (
              <article key={q.title} className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm text-text">{q.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed">{q.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md text-text">Testimonials</h2>
        <div className="grid gap-md md:grid-cols-2">
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
          <h2 className="relative text-text text-[28px] md:text-[32px] max-w-[30ch]">Ready to get your MacBook Air repaired?</h2>
          <p className="relative text-text-muted text-[16px] max-w-[60ch]">
            Our experienced technicians are here to help. Book your repair appointment today, and we'll have your device running like new in no time.
          </p>
          <div className="relative"><CallButtons /></div>
        </div>
      </section>
      </div>
    <RelatedArticles path="/macbook-air-repair-dubai" />
    </PageShell>
  );
}
