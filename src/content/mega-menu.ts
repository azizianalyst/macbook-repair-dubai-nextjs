// Mega-menu navigation data - curated for SEO internal linking.
// Update here, propagates to NavBar (desktop mega menu + mobile drawer) and Footer sitemap.
// `icon` is a Lucide icon name resolved by NavBar's MEGA_ICONS map.
//
// 2026-06 rebuild: 6 panels mirroring the customer journey — Mac Repair ·
// iPhone & iPad · Locations · Pricing & Warranty · Guides · Contact.
// Rules baked in: no hardcoded AED prices in descs (they went stale against
// site.ts PRICING — descs sell symptoms + the 30-min appointment offer instead);
// warranty is always "up to 12 months", never flat "12-month"; one featured card
// per panel sells exactly ONE offer; no sell/trade-in links (owner removed them
// from all navigation); truth constraints honoured: single location (no
// "branches"), independent specialists (never "Apple Authorized"). Every href
// verified against src/lib/routes.generated.ts.

import { REVIEW_COUNT } from "@/content/site";

export type MegaLink = { label: string; href: string; desc?: string; icon?: string };
export type MegaColumn = { heading: string; icon?: string; links: MegaLink[] };
export type MegaPanel = {
  key: string;
  label: string;             // top-level nav label
  href: string;              // top-level link (hub page)
  intro?: string;            // short SEO intro inside panel
  columns: MegaColumn[];
  featured?: { title: string; desc: string; href: string; cta: string };
};

export const MEGA_MENU: MegaPanel[] = [
  {
    key: "mac-repair",
    label: "Mac Repair",
    href: "/mac-repair-dubai",
    intro: "Every Mac we repair in Dubai - free diagnosis, no-fix-no-charge, written warranty up to 12 months.",
    columns: [
      {
        heading: "Mac models",
        icon: "Laptop",
        links: [
          { label: "MacBook Pro Repair", href: "/macbook-pro-repair-dubai", desc: "M1-M5 · Intel · 13/14/16\"", icon: "Laptop" },
          { label: "MacBook Air Repair", href: "/macbook-air-repair-dubai", desc: "M1-M5 · 13\" & 15\"",        icon: "Laptop" },
          { label: "iMac Repair",        href: "/imac-repair-dubai",        desc: "24\" M-series & 27\" 5K",     icon: "Monitor" },
          { label: "Mac mini Repair",    href: "/mac-mini-repair-dubai",    desc: "M1 / M2 / M4 & Intel",       icon: "HardDrive" },
          { label: "Mac Studio Repair",  href: "/mac-studio-repair-dubai",  desc: "Max & Ultra",                icon: "Box" },
          { label: "Mac Pro Repair",     href: "/mac-pro-repair-dubai",     desc: "M2 Ultra & 2019 tower",      icon: "Server" },
        ],
      },
      {
        heading: "Common MacBook repairs",
        icon: "Wrench",
        links: [
          { label: "MacBook Screen Repair",        href: "/macbook-screen-repair-dubai",       desc: "Cracked, lines, Flexgate · 30 min by appt", icon: "Monitor" },
          { label: "MacBook Battery Replacement",  href: "/macbook-battery-replacement-dubai", desc: "Swollen or draining · 30 min by appt",      icon: "BatteryCharging" },
          { label: "MacBook Keyboard Replacement", href: "/macbook-keyboard-repair-dubai",     desc: "Key caps to top case · 30 min by appt",     icon: "Keyboard" },
          { label: "MacBook Logic Board Repair",   href: "/macbook-logic-board-repair-dubai",  desc: "Component-level, not board swap",           icon: "Cpu" },
          { label: "MacBook Water Damage Repair",  href: "/macbook-water-damage-repair-dubai", desc: "Ultrasonic clean - act fast",               icon: "Droplets" },
          { label: "MacBook Trackpad Repair",      href: "/macbook-trackpad-repair-dubai",     desc: "No click, erratic cursor",                  icon: "SquareMousePointer" },
        ],
      },
      {
        heading: "Desktops, data & upgrades",
        icon: "Monitor",
        links: [
          { label: "iMac Screen Repair",       href: "/imac-screen-repair-dubai",      desc: "5K & 24\" Retina panels",     icon: "Monitor" },
          { label: "iMac Logic Board Repair",  href: "/imac-logic-board-repair-dubai", desc: "Board-level repair",          icon: "Cpu" },
          { label: "Apple Display Repair",     href: "/apple-display-repair-dubai",    desc: "Studio & Pro Display XDR",    icon: "Monitor" },
          { label: "Mac Data Recovery",        href: "/mac-data-recovery-dubai",       desc: "Dead Mac, files back",        icon: "DatabaseBackup" },
          { label: "MacBook SSD Upgrade",      href: "/macbook-ssd-upgrade-dubai",     desc: "Faster, bigger storage",      icon: "HardDrive" },
          { label: "Overheating & Fan Repair", href: "/macbook-overheating-fix-dubai", desc: "Loud fans, thermal shutdowns", icon: "Gauge" },
        ],
      },
    ],
    featured: {
      title: "Fixed in 30 minutes - or it's free",
      desc: "Screens, batteries and keyboards replaced in 30 minutes by appointment at our Media City workshop. WhatsApp your model - we reserve the part before you arrive.",
      href: "https://wa.me/971557413706",
      cta: "Book a 30-min slot →",
    },
  },
  {
    key: "iphone-ipad",
    label: "iPhone & iPad",
    href: "/apple-repair-dubai",
    intro: "iPhone, iPad and every other Apple device - same Media City workshop, same no-fix-no-charge promise.",
    columns: [
      {
        heading: "iPhone",
        icon: "Smartphone",
        links: [
          { label: "iPhone Repair Dubai",        href: "/iphone-repair-dubai",               desc: "All models, iPhone 6 → 17", icon: "Smartphone" },
          { label: "iPhone Screen Repair",       href: "/iphone-screen-repair-dubai",        desc: "OLED & LCD, same day",      icon: "Smartphone" },
          { label: "iPhone Battery Replacement", href: "/iphone-battery-replacement-dubai",  desc: "Fitted while you wait",     icon: "BatteryCharging" },
          { label: "iPhone Water Damage",        href: "/iphone-water-damage-repair-dubai",  desc: "Ultrasonic board clean",    icon: "Droplets" },
          { label: "iPhone Charging Port Repair", href: "/iphone-charging-port-repair-dubai", desc: "Lightning & USB-C",        icon: "PlugZap" },
        ],
      },
      {
        heading: "iPad",
        icon: "Tablet",
        links: [
          { label: "iPad Repair Dubai",         href: "/ipad-repair-dubai",               desc: "iPad, Air, mini, Pro",          icon: "Tablet" },
          { label: "iPad Screen Repair",        href: "/ipad-screen-repair-dubai",        desc: "Glass & laminated displays",    icon: "Tablet" },
          { label: "iPad Battery Replacement",  href: "/ipad-battery-replacement-dubai",  desc: "Glued cells, careful removal",  icon: "BatteryCharging" },
          { label: "iPad Charging Port Repair", href: "/ipad-charging-port-repair-dubai", desc: "USB-C & Lightning, same day",   icon: "PlugZap" },
          { label: "iPad Water Damage Repair",  href: "/ipad-water-damage-repair-dubai",  desc: "Ultrasonic clean, board rework", icon: "Droplets" },
        ],
      },
      {
        heading: "More Apple repairs",
        icon: "Wrench",
        links: [
          { label: "iPhone Camera Repair",  href: "/iphone-camera-repair-dubai",  desc: "Rear, ultra-wide, LiDAR",        icon: "Smartphone" },
          { label: "iPhone Face ID Repair", href: "/iphone-face-id-repair-dubai", desc: "Dot projector & sensor faults",  icon: "Lock" },
          { label: "iPhone Data Recovery",  href: "/iphone-data-recovery-dubai",  desc: "Photos & files off dead phones", icon: "DatabaseBackup" },
          { label: "iPod touch Repair",     href: "/ipod-touch-7-repair-dubai",   desc: "7th-gen screens & batteries",    icon: "Smartphone" },
        ],
      },
    ],
    featured: {
      title: "Free diagnosis on every Apple device",
      desc: "Walk in, or book free pickup anywhere in Dubai - pay only when you approve the fix. No fix, no charge.",
      href: "/contact",
      cta: "Get a free diagnosis →",
    },
  },
  {
    key: "locations",
    label: "Locations",
    href: "/macbook-repair-near-me",
    intro: "One workshop in Dubai Media City - free pickup across Dubai, free courier collection across the UAE. No branches, no inflated 'near you' claims.",
    columns: [
      {
        heading: "Dubai areas",
        icon: "MapPin",
        links: [
          { label: "Dubai Marina",   href: "/macbook-repair-dubai-marina",   desc: "Pickup in ~30 min", icon: "MapPin" },
          { label: "JBR",            href: "/macbook-repair-jbr",            icon: "MapPin" },
          { label: "JLT",            href: "/macbook-repair-jlt",            icon: "MapPin" },
          { label: "Downtown Dubai", href: "/macbook-repair-downtown-dubai", icon: "MapPin" },
          { label: "Business Bay",   href: "/macbook-repair-business-bay",   icon: "MapPin" },
          { label: "DIFC",           href: "/macbook-repair-difc",           icon: "MapPin" },
          { label: "Jumeirah",       href: "/macbook-repair-jumeirah",       icon: "MapPin" },
          { label: "Internet City",  href: "/macbook-repair-internet-city",  icon: "MapPin" },
          { label: "Silicon Oasis",  href: "/macbook-repair-silicon-oasis",  icon: "MapPin" },
        ],
      },
      {
        heading: "Across the UAE",
        icon: "Truck",
        links: [
          { label: "Sharjah",        href: "/macbook-repair-sharjah",        desc: "Free courier", icon: "Truck" },
          { label: "Abu Dhabi",      href: "/macbook-repair-abu-dhabi",      icon: "Truck" },
          { label: "Ajman",          href: "/macbook-repair-ajman",          icon: "Truck" },
          { label: "Al Ain",         href: "/macbook-repair-al-ain",         icon: "Truck" },
          { label: "Ras Al Khaimah", href: "/macbook-repair-ras-al-khaimah", icon: "Truck" },
          { label: "Fujairah",       href: "/macbook-repair-fujairah",       icon: "Truck" },
          { label: "Umm Al Quwain",  href: "/macbook-repair-umm-al-quwain",  icon: "Truck" },
          { label: "Khor Fakkan",    href: "/macbook-repair-khor-fakkan",    icon: "Truck" },
          { label: "Kalba",          href: "/macbook-repair-kalba",          icon: "Truck" },
        ],
      },
      {
        heading: "How it works",
        icon: "Wrench",
        links: [
          { label: "MacBook Repair Near Me",     href: "/macbook-repair-near-me",                       desc: "Coverage & workshop map",            icon: "MapPin" },
          { label: "On-site MacBook Repair",     href: "/onsite-macbook-repair-dubai",                  desc: "A technician comes to you",          icon: "Wrench" },
          { label: "Free Pickup & Delivery",     href: "/blog/free-pickup-delivery-dubai-how-it-works", desc: "Door-to-door, how it works",         icon: "Truck" },
          { label: "Book a 30-min Appointment",  href: "/contact",                                      desc: "Part replaced in 30 minutes - or free", icon: "Clock" },
        ],
      },
    ],
    featured: {
      title: "Free pickup across Dubai",
      desc: "Door-to-door collection from your area, repaired at our Media City workshop, returned same day on most jobs.",
      href: "/macbook-repair-near-me",
      cta: "See coverage →",
    },
  },
  {
    key: "pricing",
    label: "Pricing",
    href: "/pricing",
    intro: "Published prices, a written warranty of up to 12 months, and no-fix-no-charge - all in writing before we start.",
    columns: [
      {
        heading: "Cost & quotes",
        icon: "Tag",
        links: [
          { label: "Repair Price List",          href: "/pricing",                                            desc: "Published starting prices, VAT-inclusive", icon: "Tag" },
          { label: "Repair Cost Calculator",     href: "/macbook-repair-cost-calculator-dubai",               desc: "Estimate in 60 seconds",                   icon: "Gauge" },
          { label: "Repair Cost Guides",         href: "/blog/repair-costs",                                  desc: "Real 2026 AED prices by model",            icon: "Banknote" },
          { label: "Apple Store vs Independent", href: "/where-to-repair-macbook-dubai",                      desc: "Compare your options",                     icon: "Scale" },
          { label: "How We Price Repairs",       href: "/blog/transparent-repair-pricing-explained",          desc: "No hidden fees, explained",                icon: "Info" },
        ],
      },
      {
        heading: "Warranty & coverage",
        icon: "ShieldCheck",
        links: [
          { label: "Repair Warranty",           href: "/warranty",                            desc: "Written, up to 12 months",  icon: "ShieldCheck" },
          { label: "AppleCare Repair",          href: "/applecare-macbook-repair-dubai",      desc: "In & out of AppleCare",     icon: "BadgeCheck" },
          { label: "Out-of-Warranty Repair",    href: "/out-of-warranty-apple-repair-dubai",  desc: "Past Apple's cutoff",       icon: "Wrench" },
          { label: "Apple Repair Programmes",   href: "/apple-repair-programs-dubai",         desc: "Recalls & known issues",    icon: "ClipboardCheck" },
          { label: "Annual Maintenance (AMC)",  href: "/annual-maintenance-contract-dubai",   desc: "Business & fleet cover",    icon: "Repeat" },
          { label: "MacBook Insurance",         href: "/macbook-insurance-dubai",             desc: "Cover for drops & spills",  icon: "Lock" },
        ],
      },
      {
        heading: "Why choose us",
        icon: "Star",
        links: [
          { label: `${REVIEW_COUNT}+ Five-Star Reviews`, href: "/reviews",                                              desc: "Verified Google reviews",      icon: "Star" },
          { label: "No Fix, No Charge",                  href: "/blog/no-fix-no-charge-policy-explained",               desc: "You pay only for results",     icon: "BadgeCheck" },
          { label: "Genuine vs Quality Parts",           href: "/blog/genuine-parts-vs-quality-alternative-explained",  desc: "What we fit & why",            icon: "Cpu" },
          { label: "Repair Warranty Explained",          href: "/blog/macbook-repair-warranty-explained",               desc: "What's covered, tier by tier", icon: "Newspaper" },
        ],
      },
    ],
    featured: {
      title: "Free loaner MacBook",
      desc: "Repair running over 2 hours? Borrow a MacBook free until yours is ready - reserve one when you book.",
      href: "/contact",
      cta: "Reserve a loaner →",
    },
  },
  {
    key: "guides",
    label: "Guides",
    href: "/blog",
    intro: "Repair guides, costs and buying advice - written by our senior technicians, organised by topic and device.",
    columns: [
      {
        heading: "Browse by topic",
        icon: "Newspaper",
        links: [
          { label: "Repair Costs",            href: "/blog/repair-costs",     desc: "Real AED prices, 2026",     icon: "Tag" },
          { label: "Fixes & Troubleshooting", href: "/blog/fixes",            desc: "Try this before you pay",   icon: "Wrench" },
          { label: "Buying Guides",           href: "/blog/buying-guides",    desc: "Which Mac or iPhone",       icon: "Scale" },
          { label: "Care & Maintenance",      href: "/blog/care-maintenance", desc: "Beat Dubai heat & dust",    icon: "ShieldCheck" },
          { label: "Apple News & Tech",       href: "/blog/apple-news",       desc: "New chips, explained",      icon: "Cpu" },
          { label: "How We Work",             href: "/blog/why-us",           desc: "Pricing, parts & warranty", icon: "BadgeCheck" },
        ],
      },
      {
        heading: "Browse by device",
        icon: "Laptop",
        links: [
          { label: "MacBook Guides",          href: "/blog/tag/macbook", icon: "Laptop" },
          { label: "iMac Guides",             href: "/blog/tag/imac",    icon: "Monitor" },
          { label: "Mac mini, Studio & Pro",  href: "/blog/tag/mac",     icon: "HardDrive" },
          { label: "iPhone Guides",           href: "/blog/tag/iphone",  icon: "Smartphone" },
          { label: "iPad Guides",             href: "/blog/tag/ipad",    icon: "Tablet" },
          { label: "MacBook How-To Library",  href: "/macbook-guides",   desc: "Resets, screenshots & more", icon: "Info" },
        ],
      },
      {
        heading: "Start here",
        icon: "Star",
        links: [
          { label: "Top 10 MacBook Problems", href: "/top-10-common-macbook-problems-and-how-to-fix-them", desc: "And how to fix them",          icon: "Wrench" },
          { label: "MacBook Won't Turn On",   href: "/blog/macbook-not-turning-on-fix-guide",              desc: "The 10-step bench checklist",  icon: "Power" },
          { label: "Water Spill First Aid",   href: "/blog/water-damage-macbook-immediate-action",         desc: "The first 10 minutes matter",  icon: "Droplets" },
          { label: "MacBook Running Slow",    href: "/blog/macbook-running-slow-10-fixes",                 desc: "10 fixes, free first",         icon: "Gauge" },
        ],
      },
    ],
    featured: {
      title: "Why 21 years of Apple repair matters",
      desc: "Pattern-recognition across 6 chip generations and 40,000+ devices.",
      href: "/blog/why-21-years-experience-matters",
      cta: "Read the story →",
    },
  },
  {
    key: "contact",
    label: "Contact",
    href: "/contact",
    intro: "Concord Tower, Office 45 (10th floor), Dubai Media City · Mon-Sat 9 am - 10 pm · Sun closed · WhatsApp 24/7.",
    columns: [
      {
        heading: "Book a repair",
        icon: "ClipboardCheck",
        links: [
          { label: "Book a Free Diagnosis",  href: "/contact",                                      desc: "Form, phone or WhatsApp - reply in minutes", icon: "ClipboardCheck" },
          { label: "On-site MacBook Repair", href: "/onsite-macbook-repair-dubai",                  desc: "A technician comes to you",                  icon: "Wrench" },
          { label: "Free Pickup & Delivery", href: "/blog/free-pickup-delivery-dubai-how-it-works", desc: "Dubai-wide, door to door",                   icon: "Truck" },
        ],
      },
      {
        heading: "Same-day help",
        icon: "Clock",
        links: [
          { label: "Mac Won't Turn On",     href: "/mac-not-turning-on-dubai",                    desc: "Bench-tested the same day",     icon: "Power" },
          { label: "Liquid Spill? Act Now", href: "/blog/water-damage-macbook-immediate-action",  desc: "The first 10 minutes matter",   icon: "Droplets" },
          { label: "Free Full Diagnostic",  href: "/macbook-full-diagnostic-dubai",               desc: "Written report, no obligation", icon: "Gauge" },
        ],
      },
      {
        heading: "Know before you visit",
        icon: "Info",
        links: [
          { label: "About Us - Since 2004",        href: "/about",                       desc: "One workshop, no branches",          icon: "Info" },
          { label: "Apple Service Center Dubai",   href: "/apple-service-center-dubai",  desc: "Independent Apple specialists",      icon: "BadgeCheck" },
          { label: `${REVIEW_COUNT}+ Google Reviews`, href: "/reviews",                  desc: "Five-star average, real customers",  icon: "Star" },
        ],
      },
    ],
    featured: {
      title: "WhatsApp 055 741 3706",
      desc: "Talk to a technician directly - no call centre. Book a guaranteed 30-minute part replacement by appointment, or a free pickup.",
      href: "https://wa.me/971557413706",
      cta: "WhatsApp now →",
    },
  },
];
