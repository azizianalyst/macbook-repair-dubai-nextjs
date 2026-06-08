// Mega-menu navigation data - curated for SEO internal linking.
// Update here, propagates to NavBar (desktop mega menu + mobile drawer) and Footer sitemap.
// `icon` is a Lucide icon name resolved by NavBar's MEGA_ICONS map.
//
// Structure mirrors the OLD WordPress header (Home · Mac Repair · Apple Services ·
// Contact Us · Blogs) but each item keeps a rich dropdown so internal-link equity is
// preserved. Truth constraints honoured: single location (no "branches"), canonical
// brand "MacBook Repair Dubai" (no ".pro / Pro"). Every href is a real route in App.tsx.

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
    intro: "Every Mac we repair in Dubai - free diagnosis, no-fix-no-charge, 90-day written warranty.",
    columns: [
      {
        heading: "Mac models",
        icon: "Laptop",
        links: [
          { label: "MacBook Pro Repair", href: "/macbook-pro-repair-dubai", desc: "M1-M5 · Intel · 13/14/16\"", icon: "Laptop" },
          { label: "MacBook Air Repair", href: "/macbook-air-repair-dubai", desc: "M1-M4 · 13\" & 15\"",        icon: "Laptop" },
          { label: "iMac Repair",        href: "/imac-repair-dubai",        desc: "24\" M-series & 27\" 5K",     icon: "Monitor" },
          { label: "Mac mini Repair",    href: "/mac-mini-repair-dubai",    desc: "M1 / M2 / M4 & Intel",       icon: "HardDrive" },
          { label: "Mac Studio Repair",  href: "/mac-studio-repair-dubai",  desc: "Max & Ultra",                icon: "Box" },
          { label: "Mac Pro Repair",     href: "/mac-pro-repair-dubai",     desc: "M2 Ultra & 2019 tower",      icon: "Server" },
        ],
      },
      {
        heading: "MacBook repair",
        icon: "Wrench",
        links: [
          { label: "MacBook Screen Repair",        href: "/macbook-screen-repair-dubai",       desc: "From AED 780",   icon: "Monitor" },
          { label: "MacBook Battery Replacement",  href: "/macbook-battery-replacement-dubai", desc: "From AED 590",   icon: "BatteryCharging" },
          { label: "MacBook Keyboard Replacement", href: "/macbook-keyboard-repair-dubai",     desc: "From AED 460",   icon: "Keyboard" },
          { label: "MacBook Logic Board Repair",   href: "/macbook-logic-board-repair-dubai",  desc: "From AED 1,040", icon: "Cpu" },
          { label: "MacBook Water Damage Repair",  href: "/macbook-water-damage-repair-dubai", desc: "From AED 910",   icon: "Droplets" },
          { label: "MacBook Trackpad Repair",      href: "/macbook-trackpad-repair-dubai",     desc: "From AED 460",   icon: "SquareMousePointer" },
        ],
      },
      {
        heading: "iMac & desktop",
        icon: "Monitor",
        links: [
          { label: "iMac Screen Repair",      href: "/imac-screen-repair-dubai",      desc: "5K Retina panels",        icon: "Monitor" },
          { label: "iMac Logic Board Repair", href: "/imac-logic-board-repair-dubai", desc: "Board-level repair",      icon: "Cpu" },
          { label: "Mac Data Recovery",       href: "/mac-data-recovery-dubai",       desc: "From AED 400",            icon: "DatabaseBackup" },
          { label: "Apple Display Repair",    href: "/apple-display-repair-dubai",    desc: "Studio & Pro Display XDR", icon: "Monitor" },
        ],
      },
    ],
    featured: {
      title: "Free pickup & delivery across Dubai",
      desc: "WhatsApp us - courier within 2 hours. Diagnosis free, pay only on approval.",
      href: "/contact",
      cta: "Book a pickup →",
    },
  },
  {
    key: "apple-services",
    label: "Apple Services",
    href: "/apple-repair-dubai",
    intro: "Beyond Mac - iPhone, iPad and every Apple device, repaired by our Media City workshop.",
    columns: [
      {
        heading: "iPhone",
        icon: "Smartphone",
        links: [
          { label: "iPhone Repair Dubai",       href: "/iphone-repair-dubai",              desc: "All models, iPhone 6 → 17", icon: "Smartphone" },
          { label: "iPhone Screen Repair",      href: "/iphone-screen-repair-dubai",       desc: "From AED 460",              icon: "Smartphone" },
          { label: "iPhone Battery Replacement", href: "/iphone-battery-replacement-dubai", desc: "From AED 330",             icon: "BatteryCharging" },
          { label: "iPhone Water Damage",       href: "/iphone-water-damage-repair-dubai", desc: "From AED 520",              icon: "Droplets" },
        ],
      },
      {
        heading: "iPad",
        icon: "Tablet",
        links: [
          { label: "iPad Repair Dubai",        href: "/ipad-repair-dubai",              desc: "iPad, Air, mini, Pro", icon: "Tablet" },
          { label: "iPad Screen Repair",       href: "/ipad-screen-repair-dubai",       desc: "From AED 460",         icon: "Tablet" },
          { label: "iPad Battery Replacement", href: "/ipad-battery-replacement-dubai", desc: "From AED 460",         icon: "BatteryCharging" },
          { label: "iPad Charging Port Repair", href: "/ipad-charging-port-repair-dubai", desc: "From AED 390",       icon: "PlugZap" },
        ],
      },
      {
        heading: "More Apple",
        icon: "Wrench",
        links: [
          { label: "AppleCare Repair",         href: "/applecare-macbook-repair-dubai",     desc: "In & out of AppleCare",     icon: "ShieldCheck" },
          { label: "Out-of-Warranty Repair",   href: "/out-of-warranty-apple-repair-dubai", desc: "Past Apple's warranty",     icon: "Wrench" },
          { label: "Mac Data Recovery",        href: "/mac-data-recovery-dubai",            desc: "From AED 400",              icon: "DatabaseBackup" },
          { label: "Sell or Trade-In",         href: "/sell-macbook-dubai",                 desc: "Instant cash quote",        icon: "Banknote" },
        ],
      },
    ],
    featured: {
      title: "Not sure which device?",
      desc: "Free diagnosis on every Apple device - bring it in or send via courier.",
      href: "/apple-repair-dubai",
      cta: "Browse all repairs →",
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
          { label: "MacBook Repair Near Me", href: "/macbook-repair-near-me",                        desc: "Coverage & workshop map", icon: "MapPin" },
          { label: "On-site MacBook Repair", href: "/onsite-macbook-repair-dubai",                   desc: "We come to you",          icon: "Wrench" },
          { label: "Free Pickup & Delivery", href: "/blog/free-pickup-delivery-dubai-how-it-works",  desc: "How collection works",    icon: "Truck" },
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
    key: "contact",
    label: "Contact Us",
    href: "/contact",
    intro: "Dubai Media City workshop. Free pickup & delivery across Dubai. WhatsApp 24/7.",
    columns: [
      {
        heading: "Get in touch",
        icon: "MessageCircle",
        links: [
          { label: "Book a free diagnosis", href: "/contact",  desc: "Form, phone or WhatsApp",      icon: "ClipboardCheck" },
          { label: "Repair pricing",        href: "/pricing",  desc: "Transparent starting prices", icon: "Tag" },
          { label: "Warranty",              href: "/warranty", desc: "90-day written warranty",     icon: "ShieldCheck" },
        ],
      },
      {
        heading: "Visit the workshop",
        icon: "MapPin",
        links: [
          { label: "Concord Tower, Media City", href: "/contact", desc: "Office #45, 10th Floor · Al Sufouh",  icon: "MapPin" },
          { label: "Mon-Sat · 9 am - 10 pm",    href: "/contact", desc: "Closed Sundays · WhatsApp 24/7",      icon: "Clock" },
        ],
      },
      {
        heading: "Trust & policies",
        icon: "ShieldCheck",
        links: [
          { label: "No Fix, No Charge",        href: "/blog/no-fix-no-charge-policy-explained",             icon: "BadgeCheck" },
          { label: "Transparent Pricing",      href: "/blog/transparent-repair-pricing-explained",          icon: "Tag" },
          { label: "Genuine vs Quality Parts", href: "/blog/genuine-parts-vs-quality-alternative-explained", icon: "Cpu" },
          { label: "Free Pickup & Delivery",   href: "/blog/free-pickup-delivery-dubai-how-it-works",       icon: "Truck" },
        ],
      },
    ],
    featured: {
      title: "Call 055 741 3706",
      desc: "Reach a technician directly - no call centre. WhatsApp also 24/7.",
      href: "https://wa.me/971557413706",
      cta: "WhatsApp now →",
    },
  },
  {
    key: "blog",
    label: "Blogs",
    href: "/blog",
    intro: "Repair guides, buying advice, and Apple news - written by our senior technicians.",
    columns: [
      {
        heading: "Browse by topic",
        icon: "Newspaper",
        links: [
          { label: "Repair Costs",            href: "/blog/repair-costs",     desc: "AED prices, 2026",        icon: "Tag" },
          { label: "Fixes & Troubleshooting", href: "/blog/fixes",            desc: "Try this before you pay", icon: "Wrench" },
          { label: "Buying Guides",           href: "/blog/buying-guides",    desc: "Which Mac or iPhone",     icon: "Scale" },
          { label: "Sell & Trade-In",         href: "/blog/sell-trade-in",    desc: "Get max value",           icon: "Banknote" },
          { label: "Care & Maintenance",      href: "/blog/care-maintenance", desc: "Make it last",            icon: "ShieldCheck" },
          { label: "Apple News & Tech",       href: "/blog/apple-news",       desc: "New chips & models",      icon: "Cpu" },
          { label: "How We Work",             href: "/blog/why-us",           desc: "Pricing & warranty",      icon: "BadgeCheck" },
        ],
      },
      {
        heading: "Repair guides",
        icon: "Wrench",
        links: [
          { label: "MacBook How-To Guides",                  href: "/macbook-guides",                          icon: "BadgeCheck" },
          { label: "MacBook Won't Turn On - Fix Guide",      href: "/blog/macbook-not-turning-on-fix-guide",   icon: "Power" },
          { label: "iPhone Screen Cracked - Is It Urgent?",  href: "/blog/iphone-screen-cracked-is-it-urgent", icon: "Smartphone" },
          { label: "Mac Mini Running Slow - 8 Fixes",        href: "/blog/mac-mini-running-slow-fix",          icon: "Gauge" },
          { label: "Data Recovery from Broken MacBook",      href: "/blog/data-recovery-broken-macbook-2026",  icon: "DatabaseBackup" },
          { label: "iCloud Locked iPhone - What to Do",      href: "/blog/icloud-locked-iphone-what-to-do",    icon: "Lock" },
        ],
      },
      {
        heading: "Buying & comparison",
        icon: "Scale",
        links: [
          { label: "Best Mac for Developers 2026",  href: "/blog/best-mac-for-developers-dubai-2026", icon: "Code" },
          { label: "iPad Air M4 vs iPad Pro M5",     href: "/blog/ipad-air-m4-vs-pro-m5-2026",         icon: "Tablet" },
          { label: "Mac Studio M3 Ultra vs M4 Max",  href: "/blog/mac-studio-m3-ultra-vs-m4-max-which", icon: "Box" },
          { label: "Mac mini M4 - Worth It?",        href: "/blog/mac-mini-m4-worth-it",               icon: "HardDrive" },
        ],
      },
      {
        heading: "Apple news & costs",
        icon: "Newspaper",
        links: [
          { label: "Apple Discontinued the Mac Pro",     href: "/blog/apple-mac-pro-discontinued-what-now",     icon: "Server" },
          { label: "M5 Chip Explained",                  href: "/blog/m5-chip-explained-vs-m4",                 icon: "Cpu" },
          { label: "iPhone Air - Engineering Deep-Dive",  href: "/blog/iphone-air-design-engineering-marvel",   icon: "Smartphone" },
          { label: "How Much Is My iPhone Worth Dubai",   href: "/blog/how-much-is-my-iphone-worth-dubai",      icon: "Banknote" },
          { label: "iPhone Repair vs AppleCare+",         href: "/blog/iphone-repair-vs-applecare-which-better", icon: "ShieldCheck" },
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
];
