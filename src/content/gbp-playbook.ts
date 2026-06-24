// GBP Playbook data — a static snapshot of the live Google Business Profile (pulled via
// Supermetrics 2026-06-24) plus the audit, corrections and paste-ready optimisation content.
// Rendered at /admin/gbp-playbook so the owner has the whole plan in one place WITHOUT needing
// the live GBP API connection. Update the snapshot by re-pulling from Supermetrics.

export const GBP_PULLED_AT = "2026-06-24";

export const GBP_CURRENT = {
  name: "MacBook Repair Dubai",
  status: "Open",
  primaryCategory: "Computer repair service",
  additionalCategories: [
    "Computer store", "Computer service", "Computer consultant", "Used computer store",
    "Data recovery service", "Screen repair service", "Computer software store",
    "Computer accessories store",
  ],
  description:
    "Since 2004, MacBook Repair Dubai has been your trusted solution for all things Mac. Located in the heart of Dubai Media City, they offer a comprehensive range of services, from expert computer repairs and consulting to data recovery and screen fixes. Whether you're seeking a reliable computer service, looking for a second-hand computer, or need accessories and software, MacBook Repair Dubai is a one-stop shop to keep your Apple devices running smoothly. Visit them at Concord Tower and discover how they can help you maximize your Mac experience.",
  phone: "055 741 3706",
  website: "https://macbook-repair-dubai.ae/",
  address: "Office #45, 10th Floor, Concord Tower, Media City, Dubai",
  hoursGbp: "Sunday 09:00–17:00 · Monday–Saturday 09:00–22:00",
  hoursWebsite: "Monday–Saturday 09:00–22:00 · Sunday CLOSED",
  reviews: { count: 84, avg: 4.9, note: "Strong recent velocity, high reply rate. 2 recent unreplied; 1 likely-spam 2★." },
};

// Monthly performance (Total views / Maps views / Actions / Phone calls)
export const GBP_PERFORMANCE: { month: string; views: number; maps: number; actions: number; calls: number }[] = [
  { month: "2025-09", views: 2975, maps: 1093, actions: 186, calls: 65 },
  { month: "2025-10", views: 3713, maps: 1304, actions: 201, calls: 41 },
  { month: "2025-11", views: 4857, maps: 1472, actions: 215, calls: 78 },
  { month: "2025-12", views: 4249, maps: 1172, actions: 181, calls: 31 },
  { month: "2026-01", views: 3861, maps: 1176, actions: 195, calls: 50 },
  { month: "2026-02", views: 2769, maps: 820, actions: 161, calls: 33 },
  { month: "2026-03", views: 2603, maps: 679, actions: 165, calls: 31 },
  { month: "2026-04", views: 2965, maps: 771, actions: 145, calls: 46 },
  { month: "2026-05", views: 2643, maps: 656, actions: 201, calls: 52 },
  { month: "2026-06", views: 1765, maps: 410, actions: 156, calls: 47 },
];

// Top search terms that surface the profile (last 6 months) — monthly impressions
export const GBP_SEARCH_TERMS: { term: string; impressions: number }[] = [
  { term: "macbook repair dubai", impressions: 787 },
  { term: "apple store", impressions: 575 },
  { term: "apple", impressions: 263 },
  { term: "macbook repair", impressions: 141 },
  { term: "macbook repair in dubai", impressions: 93 },
  { term: "macbook repair near me", impressions: 90 },
  { term: "apple service center dubai", impressions: 63 },
  { term: "macbook battery replacement dubai", impressions: 61 },
  { term: "laptop repair near me", impressions: 50 },
  { term: "macbook screen replacement dubai", impressions: 17 },
];
export const GBP_ZERO_DEMAND = [
  "iphone repair dubai", "ipad repair dubai", "imac repair dubai", "mac mini dubai",
  "data recovery", "apple watch repair", "airpods repair",
  "+ area queries (JLT, Bur Dubai, Palm Jumeirah, Dubailand)",
];

// The 23 live posts (summary of state, not full text) — to show what's currently published
export const GBP_POSTS_AUDIT = {
  total: 23,
  cadence: "Inconsistent — gaps Dec'25→Mar'26 and Mar→Jun'26 (ideal: weekly)",
  issues: [
    "All posts are 'What's new' — no Offer or Event posts",
    "Off-topic posts: Lenovo, Samsung/Windows (one credited to 'Microsoft Surface Repair Dubai')",
    "A post published with an unfilled '[Show Photos…]' placeholder + typos",
    "Stale hours stated in posts ('9 AM–7 PM') contradict the profile",
    "Missing latest models (M3, M5, iPhone 16/17, iPad) and data-recovery posts",
  ],
};

export const GBP_CORRECTIONS: { sev: "critical" | "high" | "medium"; text: string }[] = [
  { sev: "critical", text: "Hours: set Sunday = CLOSED on GBP (currently shows 09:00–17:00). Website already correct." },
  { sev: "critical", text: "Description: replace the 3rd-person, generic text (see optimised version below)." },
  { sev: "critical", text: "Delete off-topic posts (Lenovo, Samsung/Windows) and the placeholder post." },
  { sev: "high", text: "Scrub 'Apple Certified/Authorized' from review replies & templates — we are independent." },
  { sev: "high", text: "Reply to the 2 recent unreplied reviews; report the spam 2★." },
  { sev: "medium", text: "Set Locality = Dubai; review 'Used computer store' category (drop if resale isn't a focus)." },
];

export const GBP_OPTIMIZED_DESCRIPTION =
  "Independent Apple repair specialists in Dubai Media City since 2004. We fix MacBook Air & Pro (Intel to M5), iMac, Mac mini, Mac Studio, iPhone (up to 17) and iPad — screen replacement, battery, keyboard, logic-board & water-damage repair, and data recovery. Free diagnosis, same-day service, up to 12-month warranty, no fix–no fee. Free pickup & delivery across Dubai — Marina, Downtown, Business Bay, JLT, Deira and more. Genuine-grade parts, transparent fixed pricing, 200+ five-star Google reviews. WhatsApp or call 055 741 3706 for an instant quote. Concord Tower, Office 45, Dubai Media City.";

export const GBP_RECOMMENDED_CATEGORIES = {
  primary: "Computer repair service",
  add: ["Mobile phone repair shop", "Electronics repair shop", "Phone repair service"],
  keep: ["Data recovery service", "Screen repair service", "Computer accessories store"],
};

export const GBP_SERVICES: { name: string; desc: string }[] = [
  { name: "MacBook screen repair", desc: "Cracked, flickering or dim MacBook display? We replace screens for every model, Intel to M5, including Flexgate. Same day, up to 12-month warranty. Free pickup in Dubai." },
  { name: "MacBook battery replacement", desc: "Battery draining, swelling or 'Service Recommended'? We replace MacBook Air & Pro batteries and restore full runtime, usually same day. Free diagnosis and warranty." },
  { name: "MacBook keyboard repair", desc: "Sticky keys, double-typing or unresponsive keys? We repair or replace MacBook keyboards including butterfly top-case swaps, with a warranty." },
  { name: "MacBook logic board repair", desc: "MacBook won't turn on, won't charge or shuts down? Component-level logic board repair instead of costly full-board swaps. Data kept safe." },
  { name: "MacBook water damage repair", desc: "Liquid spill? Ultrasonic cleaning, corrosion removal and board-level repair to rescue MacBooks others write off. Free diagnosis, no fix–no fee." },
  { name: "Mac data recovery", desc: "MacBook won't boot, failed SSD, water damage or deleted files? We recover data from Intel and Apple Silicon Macs. Free assessment, no recovery–no charge." },
  { name: "iMac repair", desc: "iMac no display, won't power on, overheating or storage upgrade? Board-level service for all iMac models, Intel and M-series, including iMac M4." },
  { name: "Mac mini & Mac Studio repair", desc: "No display, won't power on, overheating or upgrade? We service Apple's desktop Macs, Intel and M-series." },
  { name: "iPhone screen repair", desc: "Cracked iPhone screen? Same-day display replacement for iPhone 11 to 17 with quality parts and a warranty. Free pickup in Dubai." },
  { name: "iPhone battery replacement", desc: "Low battery health or sudden shutdowns? We replace iPhone batteries (iPhone 11–17) and restore full-day runtime, often while you wait." },
  { name: "iPad repair", desc: "Cracked iPad, iPad Air, iPad mini or iPad Pro screen or battery? Professional repair with a warranty and free pickup." },
];

export type GbpPost = { n: number; topic: "What's new" | "Offer"; cta: string; url: string; image: string; summary: string };
export const GBP_POSTS: GbpPost[] = [
  { n: 1, topic: "What's new", cta: "Learn more", url: "https://macbook-repair-dubai.ae/macbook-pro-m5-repair-dubai/", image: "public/images/real/lab/macbook-pro-lid-apple-logo-dubai.jpg", summary: "💻 MacBook Pro M5 Repair in Dubai — Screen, Battery & Logic Board\nGot the new MacBook Pro M5? We repair every M5 model at our Dubai Media City workshop — cracked or flickering screens, battery drain, liquid damage, and board-level faults. Free diagnosis, genuine-grade parts, up to 12-month warranty, and no fix–no fee. Free pickup & drop-off anywhere in Dubai. WhatsApp or call 055 741 3706 for an instant quote.\nConcord Tower, Office 45, Dubai Media City.\n#MacBookProM5 #MacBookRepairDubai #AppleRepairDubai" },
  { n: 2, topic: "What's new", cta: "Learn more", url: "https://macbook-repair-dubai.ae/macbook-air-m4-repair-dubai/", image: "public/images/real/lab/macbook-air-lid-dubai.jpg", summary: "✨ MacBook Air M4 Repair in Dubai\nScreen cracked, battery draining, won't charge, or liquid spill on your MacBook Air M4? Our technicians fix every fault same day with quality parts and a written warranty. Free diagnosis, no fix–no fee, and free pickup across Dubai. Call or WhatsApp 055 741 3706.\nConcord Tower, Office 45, Dubai Media City.\n#MacBookAirM4 #MacBookRepairDubai #AppleRepairDubai" },
  { n: 3, topic: "What's new", cta: "Learn more", url: "https://macbook-repair-dubai.ae/imac-m4-repair-dubai/", image: "public/images/real/lab/imac-front-dubai.jpg", summary: "🖥️ iMac M4 (24-inch, 2024) Repair in Dubai\nBroken 4.5K Retina screen, no display, overheating, or storage upgrade on your iMac M4? We service the latest iMac models with careful, board-level expertise. Free diagnosis, warranty, and collection across Dubai. WhatsApp 055 741 3706 for a quote.\nConcord Tower, Office 45, Dubai Media City.\n#iMacM4 #iMacRepairDubai #AppleRepairDubai" },
  { n: 4, topic: "What's new", cta: "Learn more", url: "https://macbook-repair-dubai.ae/iphone-screen-repair-dubai/", image: "public/images/devices/iphone-16.jpg", summary: "📱 iPhone Screen Repair in Dubai — Same Day\nCracked iPhone screen? We replace displays for iPhone 11 through iPhone 17 with quality parts, same day. Battery, charging port, back glass and water-damage repair too. Free diagnosis, warranty, free pickup across Dubai. Call/WhatsApp 055 741 3706.\nConcord Tower, Office 45, Dubai Media City.\n#iPhoneRepairDubai #iPhoneScreenRepair #AppleRepairDubai" },
  { n: 5, topic: "What's new", cta: "Learn more", url: "https://macbook-repair-dubai.ae/ipad-screen-repair-dubai/", image: "public/images/real/lab/ipad-on-bench-dubai.jpg", summary: "📲 iPad Repair in Dubai — Screen, Battery & Charging\nCracked iPad screen or a battery that won't hold charge? We repair iPad, iPad Air, iPad mini and iPad Pro — screen, battery, charging port and water damage. Free diagnosis, warranty, and free pickup Dubai-wide. WhatsApp 055 741 3706.\nConcord Tower, Office 45, Dubai Media City.\n#iPadRepairDubai #iPadScreenRepair #AppleRepairDubai" },
  { n: 6, topic: "What's new", cta: "Learn more", url: "https://macbook-repair-dubai.ae/mac-data-recovery-dubai/", image: "public/images/real/lab/macbook-pro-internals-topdown-dubai.jpg", summary: "💾 Mac Data Recovery in Dubai\nMacBook won't boot, failed SSD, water damage, or accidentally deleted files? Our specialists recover data from Intel and Apple Silicon Macs — free assessment first, and no recovery, no charge. Honest success rates told upfront. WhatsApp 055 741 3706.\nConcord Tower, Office 45, Dubai Media City.\n#MacDataRecovery #DataRecoveryDubai #MacBookRepairDubai" },
  { n: 7, topic: "What's new", cta: "Learn more", url: "https://macbook-repair-dubai.ae/macbook-repair-dubai-marina/", image: "public/images/real/team/team-workshop-dubai.jpg", summary: "📍 MacBook Repair in Dubai Marina — Free Pickup\nLive or work in Dubai Marina? We collect your MacBook, repair it at our Media City workshop, and deliver it back — free. Screen, battery, keyboard, water damage and more. Same-day on most repairs, up to 12-month warranty. WhatsApp 055 741 3706.\n#DubaiMarina #MacBookRepairDubai #AppleRepairDubai" },
  { n: 8, topic: "Offer", cta: "Call", url: "", image: "public/images/real/team/macbook-bench-repairs-dubai.jpg", summary: "🎁 Free Diagnosis + No Fix, No Fee — MacBook, iMac, iPhone & iPad\nNot sure what's wrong? We diagnose your Apple device free, give you a fixed quote upfront, and you only pay if we fix it. Same-day service, up to 12-month warranty, free pickup Dubai-wide. WhatsApp 055 741 3706.\n#AppleRepairDubai #FreeDiagnosis #MacBookRepairDubai" },
  { n: 9, topic: "What's new", cta: "Learn more", url: "https://macbook-repair-dubai.ae/macbook-screen-repair-dubai/", image: "public/images/real/lab/macbook-open-topdown-dubai.jpg", summary: "🖥️ MacBook Screen Replacement in Dubai — Same Day\nCracked, flickering, lines, or dark patches on your MacBook display? We replace screens for every model — Intel to M5 — including Flexgate backlight faults, same day. Genuine-grade panels, up to 12-month warranty, fixed price quoted upfront. Free pickup & drop-off across Dubai. WhatsApp 055 741 3706.\nConcord Tower, Office 45, Dubai Media City.\n#MacBookScreenRepair #MacBookRepairDubai #AppleRepairDubai" },
  { n: 10, topic: "What's new", cta: "Learn more", url: "https://macbook-repair-dubai.ae/macbook-battery-replacement-dubai/", image: "public/images/real/lab/macbook-battery-internals-dubai.jpg", summary: "🔋 MacBook Battery Replacement in Dubai\nBattery draining fast, swelling, or 'Service Recommended'? We replace MacBook Air & Pro batteries with quality cells and restore full runtime — usually same day. Free diagnosis, warranty, and free pickup Dubai-wide. WhatsApp 055 741 3706 for an instant quote.\nConcord Tower, Office 45, Dubai Media City.\n#MacBookBattery #MacBookRepairDubai #AppleRepairDubai" },
  { n: 11, topic: "What's new", cta: "Learn more", url: "https://macbook-repair-dubai.ae/macbook-water-damage-repair-dubai/", image: "public/images/real/lab/macbook-full-internals-dubai.jpg", summary: "💧 MacBook Water / Liquid Damage Repair in Dubai\nCoffee, water or juice spill? Power it off and bring it in fast. Our board-level technicians do ultrasonic cleaning, corrosion removal and component repair to rescue MacBooks others write off. Free diagnosis, no fix–no fee, free pickup across Dubai. WhatsApp 055 741 3706.\nConcord Tower, Office 45, Dubai Media City.\n#MacBookWaterDamage #LiquidDamageRepair #MacBookRepairDubai" },
  { n: 12, topic: "What's new", cta: "Call", url: "https://macbook-repair-dubai.ae/macbook-logic-board-repair-dubai/", image: "public/images/real/lab/macbook-pro-internal-layout-dubai.jpg", summary: "⚡ MacBook Not Turning On? Logic Board Repair in Dubai\nDead MacBook, won't charge, or shuts down randomly? We do component-level logic board repair — power faults, charging IC, no-display — instead of costly full-board swaps. Free diagnosis, fixed quote first, data kept safe. WhatsApp 055 741 3706.\nConcord Tower, Office 45, Dubai Media City.\n#MacBookLogicBoard #MacBookNotTurningOn #MacBookRepairDubai" },
  { n: 13, topic: "What's new", cta: "Learn more", url: "https://macbook-repair-dubai.ae/macbook-keyboard-repair-dubai/", image: "public/images/real/lab/macbook-keyboard-repair-dubai.jpg", summary: "⌨️ MacBook Keyboard Repair in Dubai\nSticky keys, double-typing, or keys not responding? We repair and replace MacBook keyboards — including butterfly top-case swaps — with quality parts and a warranty. Same-day on most models, free pickup Dubai-wide. WhatsApp 055 741 3706.\nConcord Tower, Office 45, Dubai Media City.\n#MacBookKeyboard #MacBookRepairDubai #AppleRepairDubai" },
  { n: 14, topic: "What's new", cta: "Learn more", url: "https://macbook-repair-dubai.ae/mac-mini-repair-dubai/", image: "public/images/real/lab/mac-studio-dubai.jpg", summary: "🍎 Mac mini & Mac Studio Repair in Dubai\nNo display, won't power on, overheating, or need an SSD upgrade on your Mac mini or Mac Studio? We service Apple's desktop Macs — Intel and M-series — with board-level expertise. Free diagnosis, warranty, and collection across Dubai. WhatsApp 055 741 3706.\nConcord Tower, Office 45, Dubai Media City.\n#MacMiniDubai #MacStudioRepair #AppleRepairDubai" },
  { n: 15, topic: "What's new", cta: "Learn more", url: "https://macbook-repair-dubai.ae/iphone-battery-replacement-dubai/", image: "public/images/devices/iphone-15.jpg", summary: "🔋 iPhone Battery Replacement in Dubai\nBattery health low, shutting down, or draining by lunchtime? We replace iPhone batteries — iPhone 11 to 17 — and restore full-day runtime, often while you wait. Free diagnosis, warranty, free pickup across Dubai. WhatsApp 055 741 3706.\nConcord Tower, Office 45, Dubai Media City.\n#iPhoneBattery #iPhoneRepairDubai #AppleRepairDubai" },
  { n: 16, topic: "What's new", cta: "Learn more", url: "https://macbook-repair-dubai.ae/macbook-repair-business-bay/", image: "public/images/real/team/macbook-bench-repairs-dubai.jpg", summary: "📍 MacBook Repair in Business Bay — Free Pickup\nBased in Business Bay? Skip the trip — we collect your MacBook, repair it at our Media City workshop, and deliver it back free. Screen, battery, keyboard, water damage and more. Same-day on most repairs, up to 12-month warranty. WhatsApp 055 741 3706.\n#BusinessBay #MacBookRepairDubai #AppleRepairDubai" },
  { n: 17, topic: "What's new", cta: "Learn more", url: "https://macbook-repair-dubai.ae/macbook-repair-jlt/", image: "public/images/real/lab/repair-workbench-dubai.jpg", summary: "📍 MacBook Repair in JLT — Free Collection & Delivery\nJLT MacBook acting up? We pick up from Jumeirah Lakes Towers, fix it at our Dubai Media City lab, and return it — all free. Screens, batteries, liquid damage, board-level repairs. Free diagnosis, fair fixed pricing. WhatsApp 055 741 3706.\n#JLT #MacBookRepairDubai #AppleRepairDubai" },
  { n: 18, topic: "Offer", cta: "Call", url: "", image: "public/images/real/team/team-workshop-dubai.jpg", summary: "🎓 Student & Free-Pickup Offer — Apple Repair in Dubai\nStudents get a special rate on MacBook, iPhone & iPad repairs — just show a valid student ID. Plus free pickup & delivery anywhere in Dubai, free diagnosis, and no fix–no fee on every job. WhatsApp 055 741 3706 for a quote.\n#StudentDiscount #AppleRepairDubai #MacBookRepairDubai" },
];
