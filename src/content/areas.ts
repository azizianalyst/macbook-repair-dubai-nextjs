// Dubai area landing-page configs. One source of truth - drives every Dubai
// area page (route + view + meta via dynamic-meta.ts, which iterates AREAS).
// Each entry produces ~1,300+ visible words via AreaPageTemplate.
// The editable prose + FAQs are overlaid per-slug from /admin/locations (sparse overrides baked into
// areas-overrides.generated.ts); structural fields (landmarks, travel, topServices, reviewIndexes)
// stay here. AREAS = BASE_AREAS merged with the overrides.
import { AREA_OVERRIDES } from "./areas-overrides.generated";

export type AreaTravelRow = {
  from: string;
  drive: string;
  pickup: string;
};

export type AreaFAQ = { q: string; a: string };

export type AreaConfig = {
  slug: string;             // URL slug, e.g. "dubai-marina"
  area: string;             // Display name, e.g. "Dubai Marina"
  short: string;            // Short variant for inline, e.g. "Marina"
  driveTime: string;        // Drive time from area to workshop
  metroNote: string;        // Public transport sentence
  pickupWindow: string;     // Headline pickup window phrase
  landmarks: string[];      // 4-6 landmarks within / next to the area
  landmarkLine: string;     // 1 sentence used in hero subtitle
  intro: string;            // 80-120 words
  whyChoose: string;        // 80-120 words
  pickupNote: string;       // 60-90 words: how pickup specifically works in this area
  travel: AreaTravelRow[];  // 5-7 rows
  topServices: { label: string; price: number; href: string }[]; // 6 services
  faqs: AreaFAQ[];          // 8 area-specific FAQs
  reviewIndexes: number[];  // indexes into REVIEWS to feature
};

const COMMON_SERVICES = [
  { label: "MacBook screen repair",          price: 780, href: "/macbook-screen-repair-dubai" },
  { label: "MacBook battery replacement",    price: 590, href: "/macbook-battery-replacement-dubai" },
  { label: "MacBook keyboard replacement",   price: 460, href: "/macbook-keyboard-repair-dubai" },
  { label: "MacBook water damage repair",    price: 910, href: "/macbook-water-damage-repair-dubai" },
  { label: "MacBook logic board repair",     price: 1040, href: "/macbook-logic-board-repair-dubai" },
  { label: "MacBook trackpad repair",        price: 460, href: "/macbook-trackpad-repair-dubai" },
];

const BASE_AREAS: AreaConfig[] = [
  {
    slug: "dubai-marina",
    area: "Dubai Marina",
    short: "Marina",
    driveTime: "10 minutes",
    metroNote: "DMCC Metro on the Red Line is 4 stops from Media City Metro - the workshop is a 4-minute walk from there.",
    pickupWindow: "Within 30 minutes",
    landmarks: ["Marina Mall", "JBR Beach", "Sheraton Grand Hotel", "Pier 7", "Marina Walk", "Address Marina"],
    landmarkLine: "5 minutes from Marina Mall, JBR Beach, the Sheraton Grand and the Address Marina.",
    intro:
      "Dubai Marina is the closest dense residential cluster to the MacBook Repair Dubai workshop in Concord Tower, Media City. Most Marina towers - from Princess and Marina Crown to the Address Marina and Cayan - are a 10-minute drive up Sheikh Zayed Road, or 4 stops on the Red Line. We collect MacBooks from any Marina building free of charge, deliver back the same day, and provide a written warranty of up to 12 months, depending on the repair. Shafiq, the lead technician, has been repairing Marina residents' MacBooks since the towers first opened in 2007.",
    whyChoose:
      "Marina residents make up the single biggest slice of our weekday pickups. We know the building reception desks, the courier loading bays, and the fastest tower-to-tower routes. Our courier moves between Marina addresses on a daily route, which is why most Marina pickups happen within 30 minutes of the WhatsApp confirmation. You don't need to leave your apartment, sit in tower-lobby waiting rooms, or argue with a Service Centre about whether your MacBook will be 'sent to the warehouse'. The diagnosis is free, the quote arrives in 4 hours, and most repairs are finished and delivered the same day.",
    pickupNote:
      "Send Shafiq a WhatsApp on 055 741 3706 with your tower name (e.g. 'Princess Tower, 42nd floor') and the MacBook model. The courier confirms the pickup window within 4 minutes during business hours, then meets you at the tower lobby or the underground loading bay - your choice. Marina pickups are completed within 30 minutes of confirmation, free of charge. The same courier returns the device to the same lobby once the repair is finished.",
    travel: [
      { from: "Dubai Marina (Marina Mall)", drive: "10 min", pickup: "Within 30 min" },
      { from: "Princess Tower / Cayan",     drive: "11 min", pickup: "Within 30 min" },
      { from: "JBR / Address The Walk",     drive: "8 min",  pickup: "Within 30 min" },
      { from: "Marina Promenade",           drive: "9 min",  pickup: "Within 30 min" },
      { from: "Pier 7 / Address Marina",    drive: "10 min", pickup: "Within 30 min" },
      { from: "Marina Gate towers",         drive: "12 min", pickup: "Within 30 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long does pickup take from Dubai Marina?", a: "Within 30 minutes of WhatsApp confirmation during business hours (9 am-10 pm Mon-Sat). The courier follows a daily Marina loop, so you almost never wait longer than half an hour." },
      { q: "What if I'm at the office in Marina or in Marina Plaza?", a: "Same service - the courier collects from any Marina office tower (Marina Plaza, Al Habtoor Business Tower, Marina Diamond) and meets you at the lobby reception or your floor, whichever you prefer." },
      { q: "Do you charge extra for Marina pickup?", a: "No. Pickup and return delivery are completely free for every Marina address. You only pay for the repair itself, with the price agreed in writing on WhatsApp before any work starts." },
      { q: "Can you repair my MacBook the same day if I'm in Marina?", a: "Yes for in-stock parts - screen, battery, keyboard, trackpad. Pickup at 10 am, repair finished by 4 pm, back in your apartment by 6 pm. Logic-board work takes 2-4 days." },
      { q: "Which Marina towers have you visited most?", a: "Princess, Cayan (Infinity), Marina 23, Marina Crown, Marina Pinnacle, Le Reve, Trident Grand, Botanica, Sulafa, Elite Residence, Ocean Heights and the Address Marina - all weekly." },
      { q: "I live in Marina but my MacBook is at my office in DIFC. Can you collect from there?", a: "Yes. Tell us the DIFC address on WhatsApp and we'll collect from the office instead. We cover both ends of the city on the same free-pickup terms." },
      { q: "Is there parking if I prefer to drop off in person?", a: "Yes, paid parking inside Concord Tower (AED 5/hour). From Marina, drive 10 minutes north on Sheikh Zayed Road and exit at Media City. Free street parking on Al Sufouh Road behind the tower." },
      { q: "Can you collect from a Marina hotel - Sheraton, Address, Le Méridien Mina?", a: "Yes. Hotel concierges call us regularly for guest MacBook repairs. Leave the device at reception with your name, we collect, repair, and deliver back to the same desk within 24 hours." },
    ],
    reviewIndexes: [0, 5, 8, 10, 13, 21],
  },
  {
    slug: "downtown-dubai",
    area: "Downtown Dubai",
    short: "Downtown",
    driveTime: "15 minutes",
    metroNote: "Burj Khalifa / Dubai Mall Metro on the Red Line is 6 stops from Media City Metro - a 20-minute Metro ride door to door.",
    pickupWindow: "Within 45 minutes",
    landmarks: ["Burj Khalifa", "Dubai Mall", "Dubai Opera", "Souk Al Bahar", "Boulevard Plaza", "The Address Downtown"],
    landmarkLine: "10 minutes from Burj Khalifa, Dubai Mall, Dubai Opera and the DIFC border.",
    intro:
      "Downtown Dubai - Burj Khalifa, Dubai Mall, Boulevard, Old Town, the Opera District - is 15 minutes from our workshop in Concord Tower, Media City via Sheikh Zayed Road. We collect MacBooks free of charge from any Downtown apartment, hotel, or office tower, deliver back the same day, and stand behind every repair with a written warranty of up to 12 months. Most Downtown pickups are completed within 45 minutes of WhatsApp confirmation. The workshop has been the go-to repair partner for residents of Burj Vista, The Address, Standpoint, 29 Boulevard and the Old Town since the district was first occupied.",
    whyChoose:
      "Downtown traffic and tower security make it tedious to drop a MacBook off in person. Our courier handles the lobby check-in for you. Tell us your tower and apartment number on WhatsApp, leave the device at concierge if you prefer, and we'll do the rest. The diagnosis is free, the written quote arrives within 4 hours, and most repairs are returned to your concierge desk the same evening. We work on every MacBook generation from 2008 Intel models through to 2026 M5 Max - Downtown residents are usually on the newest hardware, which we keep in-stock parts for.",
    pickupNote:
      "WhatsApp 055 741 3706 with your building (e.g. 'The Address Downtown, 38th floor' or 'Burj Vista 1') and the MacBook model. The courier confirms a 45-minute pickup window. He'll meet you at the tower's main reception, valet drop-off, or come up to your floor - whichever your building's policy allows. Free pickup, free return, no charge for tower waiting time.",
    travel: [
      { from: "Burj Khalifa / The Address",  drive: "15 min", pickup: "Within 45 min" },
      { from: "Dubai Mall",                  drive: "16 min", pickup: "Within 45 min" },
      { from: "Old Town / Souk Al Bahar",    drive: "17 min", pickup: "Within 45 min" },
      { from: "Burj Vista / Standpoint",     drive: "15 min", pickup: "Within 45 min" },
      { from: "Boulevard Plaza / 29 Blvd",   drive: "15 min", pickup: "Within 45 min" },
      { from: "Opera District",              drive: "16 min", pickup: "Within 45 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long does pickup take from Downtown Dubai?", a: "Within 45 minutes of WhatsApp confirmation during business hours. Slightly longer than Marina because the courier crosses Sheikh Zayed Road, but still same-hour in 95% of cases." },
      { q: "What if I'm at the office in Downtown - Boulevard Plaza, Emaar Square?", a: "Same free pickup. Tell us the office tower and floor on WhatsApp, we collect from your reception or come up if your building allows it." },
      { q: "Do you charge extra for Downtown pickup?", a: "No. Pickup and return delivery from any Downtown Dubai address are completely free, including hotel apartments at The Address, Vida and Manzil." },
      { q: "Can you collect from Dubai Mall or Burj Khalifa observation deck?", a: "We can meet at the Dubai Mall valet (Fashion Avenue or Grand Drop-off) by appointment. Burj Khalifa observation deck pickup is not practical - leave the device at the reception of your hotel or office instead." },
      { q: "How long does same-day repair take if I drop off myself?", a: "MacBook screen, battery, keyboard, trackpad - 90 minutes to 3 hours. Drop off at 11 am, collect by 3 pm. Wait at the Costa downstairs in Concord Tower or grab lunch at Mall of the Emirates." },
      { q: "Do you cover hotel guests staying in Downtown?", a: "Yes. Hotel concierges at The Address Downtown, Manzil, Palace Downtown, Vida and Sofitel call us several times a week for guest repairs. Free pickup and return to the same hotel desk." },
      { q: "Can you visit my apartment instead of meeting at reception?", a: "Where the building permits visitor escorts to private floors, yes. The courier carries Emirates ID and the workshop logo on his uniform. Most Downtown towers prefer reception drop-off - it's faster for both sides." },
      { q: "I'm leaving Dubai in 2 days. Can you finish a screen repair in time?", a: "Yes if you book the pickup before 12 pm. Same-day diagnosis, repair completed within 24 hours, delivered back to your hotel or apartment before you leave. We've handled hundreds of these emergency turnarounds." },
    ],
    reviewIndexes: [1, 6, 9, 11, 14, 22],
  },
  {
    slug: "jbr",
    area: "JBR",
    short: "JBR",
    driveTime: "8 minutes",
    metroNote: "JLT Metro on the Red Line is 3 stops from Media City Metro. From JBR, a tram + Metro ride is roughly 18 minutes door to door.",
    pickupWindow: "Within 30 minutes",
    landmarks: ["The Walk JBR", "The Beach Mall", "Movenpick Hotel JBR", "Rimal Towers", "Bahar Towers", "Sadaf Towers"],
    landmarkLine: "Adjacent to The Walk JBR and The Beach Mall, near Movenpick Hotel JBR.",
    intro:
      "Jumeirah Beach Residence (JBR) is one of the closest residential clusters to our Media City workshop - only 8 minutes by car along Al Sufouh Road, or two tram stops + a short Metro ride. We collect MacBooks free of charge from any JBR tower (Rimal, Bahar, Sadaf, Shams, Amwaj, Murjan), deliver back the same day, and provide a written warranty of up to 12 months. Most JBR pickups are completed within 30 minutes of WhatsApp confirmation, often faster during the courier's morning loop along The Walk.",
    whyChoose:
      "JBR residents and beachfront hotel guests are some of our most frequent customers. Sand, salt, sunscreen and pool water are tough on MacBooks; we've cleaned more keyboards and replaced more water-damaged logic boards from JBR than any other area in Dubai. The free-pickup model means you don't have to brave the JBR traffic on a Friday afternoon - we come to you. Diagnosis is free, the quote is fixed in writing on WhatsApp before any work starts, and the courier returns the repaired device to your tower lobby or beachfront hotel reception.",
    pickupNote:
      "WhatsApp 055 741 3706 with your tower (e.g. 'Bahar 4, 12th floor') and the MacBook model. The courier confirms a 30-minute pickup window and meets you at the tower lobby off The Walk. He's familiar with every JBR tower's parking and visitor protocols, so there's no waiting around or arguing with security.",
    travel: [
      { from: "JBR The Walk",                drive: "8 min",  pickup: "Within 30 min" },
      { from: "Rimal / Bahar / Sadaf",       drive: "8 min",  pickup: "Within 30 min" },
      { from: "Movenpick / Sofitel JBR",     drive: "8 min",  pickup: "Within 30 min" },
      { from: "Address Beach Resort",        drive: "9 min",  pickup: "Within 30 min" },
      { from: "Hilton / Ritz Carlton JBR",   drive: "9 min",  pickup: "Within 30 min" },
      { from: "JBR Amwaj / Shams / Murjan",  drive: "8 min",  pickup: "Within 30 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long does pickup take from JBR?", a: "Within 30 minutes of WhatsApp confirmation during business hours. JBR is on the courier's primary morning route, so pickups before noon are usually faster." },
      { q: "What if I'm staying in a JBR hotel - Movenpick, Sofitel, Hilton, Ritz Carlton?", a: "Leave the MacBook at hotel reception with your name and room number. The courier collects from the same desk and returns the device there once repaired. Hotel concierges already know us." },
      { q: "Do you charge extra for JBR pickup?", a: "No. Free pickup and free return delivery from any JBR address - apartment, hotel, or beachfront cafe meeting point." },
      { q: "My MacBook fell on the sand at JBR Beach. Can you save it?", a: "Likely yes. Sand inside vents and ports causes overheating but rarely permanent damage. Bring it in within 24 hours; we strip-clean fans, heatsinks and ports, replace any pitted keys, and run a full diagnostic. Typical cost: AED 330-520." },
      { q: "Pool water spilled on my MacBook in JBR. What do I do?", a: "Power off immediately, do NOT charge it, do NOT shake it. WhatsApp us - we'll do an emergency pickup, ultrasonic-clean the logic board within 4 hours, and quote the repair in writing. Acting in the first 24 hours saves 90% of devices." },
      { q: "Can the courier collect from The Walk or The Beach Mall directly?", a: "Yes - meet at any cafe or hotel lobby along The Walk. Most popular meeting points are Costa Coffee Bahar and the Sofitel lobby." },
      { q: "Do you sell pre-owned MacBooks for JBR holiday-let landlords?", a: "Yes - refurbished, certified, with a warranty of up to 12 months. Useful for serviced apartments. WhatsApp for current stock and pricing." },
      { q: "Can you do same-day repair if I drop off in person?", a: "Yes for in-stock parts. From JBR drive 8 minutes north to Concord Tower Media City. Drop off, walk over to Mall of the Emirates for lunch, collect repaired device same afternoon." },
    ],
    reviewIndexes: [2, 7, 10, 12, 15, 23],
  },
  {
    slug: "business-bay",
    area: "Business Bay",
    short: "Business Bay",
    driveTime: "18 minutes",
    metroNote: "Business Bay Metro on the Red Line is 5 stops from Media City Metro. With Metro the door-to-door time is roughly 25 minutes.",
    pickupWindow: "Within 45 minutes",
    landmarks: ["Bay Avenue", "Bay Square", "Executive Towers", "JW Marriott Marquis", "Business Central Towers", "The Opus"],
    landmarkLine: "5 minutes from Bay Avenue and the JW Marriott Marquis, on the Burj Khalifa side of the canal.",
    intro:
      "Business Bay is a high-density residential and commercial cluster south of Downtown - Executive Towers, Bay Square, Bay Avenue, the Damac Towers, the Burj Vista - 18 minutes from our workshop in Concord Tower, Media City via Sheikh Zayed Road and Al Khail Road. We collect MacBooks free of charge from any Business Bay tower or office, deliver back the same day, and provide a written warranty of up to 12 months, depending on the repair. Most Business Bay pickups are completed within 45 minutes of WhatsApp confirmation.",
    whyChoose:
      "Business Bay's office workers and freelance residents make up a large share of our weekday MacBook repairs. We understand the working day pressure: a broken MacBook on Sunday morning can derail a whole week. The free-pickup model means you don't lose half a day to a service-centre queue. Tell us the issue on WhatsApp, hand the device to our courier at your office reception, and the diagnosis is back to you within 4 hours. Most common repairs - screen, battery, keyboard, trackpad - are completed and returned to your desk by end of business the same day.",
    pickupNote:
      "WhatsApp 055 741 3706 with your tower (e.g. 'Executive Tower H, 27th floor' or 'Bay Square Building 3') and the MacBook model. The courier confirms a 45-minute pickup window and meets you at office reception. We have weekly visits to most Business Bay towers, so reception desks know us by name.",
    travel: [
      { from: "Executive Towers",            drive: "18 min", pickup: "Within 45 min" },
      { from: "Bay Avenue / Bay Square",     drive: "18 min", pickup: "Within 45 min" },
      { from: "JW Marriott Marquis",         drive: "17 min", pickup: "Within 45 min" },
      { from: "Damac Towers by Paramount",   drive: "19 min", pickup: "Within 45 min" },
      { from: "The Opus / ME Dubai",         drive: "19 min", pickup: "Within 45 min" },
      { from: "Business Central Towers",     drive: "18 min", pickup: "Within 45 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long does pickup take from Business Bay?", a: "Within 45 minutes of WhatsApp confirmation during business hours. Pickup is faster outside of 8-10 am rush. Same-day return delivery in 90% of cases." },
      { q: "What if I'm at the office in Business Bay?", a: "We're set up for this - most Business Bay pickups are office collections. The courier meets you at reception, signs in if needed, and you stay at your desk." },
      { q: "Do you charge extra for Business Bay pickup?", a: "No. Free pickup and free return delivery from any Business Bay tower, both office and residential." },
      { q: "Do you do on-site repairs at Business Bay offices?", a: "For battery and trackpad swaps we can do on-site if a meeting room is available, but it's usually faster to take the device to the workshop and return it the same afternoon." },
      { q: "Can you collect after office hours?", a: "Yes - pickup runs until 9:30 pm Mon-Sat. If your concierge accepts deliveries after hours, we can collect and return at concierge with your written authorisation." },
      { q: "Can you bill my company for the repair?", a: "Yes. We issue VAT invoices in the company name with the trade licence and TRN. Many Business Bay law firms, agencies and consultancies have us on file as a recurring vendor." },
      { q: "Can you handle multiple MacBooks at once for our office?", a: "Yes - corporate fleet repairs are common. Bulk discounts apply from 5+ devices. We'll come and collect, run a diagnostic on each, and return one written quote covering the whole batch." },
      { q: "Are you available for emergency weekend repairs for a Monday meeting?", a: "Yes. Saturday is a full opening day. WhatsApp on Friday, we'll collect Saturday morning, repair completed and returned to your office by Sunday evening, ready for Monday." },
    ],
    reviewIndexes: [3, 8, 11, 13, 16, 24],
  },
  {
    slug: "jumeirah",
    area: "Jumeirah",
    short: "Jumeirah",
    driveTime: "10 minutes",
    metroNote: "Jumeirah is not directly on the Metro. The closest stop is Business Bay Metro (about 15 min by car). Free pickup is the simpler option.",
    pickupWindow: "Within 30 minutes",
    landmarks: ["Mercato Mall", "Jumeirah Mosque", "Sunset Mall", "La Mer", "City Walk", "Box Park"],
    landmarkLine: "Near Mercato Mall and the Jumeirah Mosque, 10 minutes via Al Wasl Road.",
    intro:
      "Jumeirah - Jumeirah 1, 2 and 3, including the villa belt along Beach Road, La Mer, Sunset Mall and the Mercato area - is 10 minutes from our Media City workshop via Al Sufouh Road. We collect MacBooks free of charge from any Jumeirah villa or apartment, deliver back the same day, and provide a written warranty of up to 12 months. Most Jumeirah pickups are completed within 30 minutes of WhatsApp confirmation. We have a daily route through Jumeirah, so pickups slot into the existing courier loop.",
    whyChoose:
      "Jumeirah is a villa-heavy area where dropping a MacBook to a service centre means an hour of traffic each way. Our free door-to-door pickup turns it into a 30-second WhatsApp message. The courier collects from your villa gate, your driver, your office or your favourite cafe on Beach Road - whichever is most convenient. Diagnosis is free, the quote is in writing within 4 hours, and most common repairs are returned to your villa the same evening. We've been the local choice for Jumeirah families since 2004.",
    pickupNote:
      "WhatsApp 055 741 3706 with your villa address (street name + community is enough - e.g. 'Jumeirah 2, near Sunset Mall') and the MacBook model. The courier confirms a 30-minute pickup window. Meet at the gate, hand to your driver, or arrange concierge / Carrefour locker drop - all options work.",
    travel: [
      { from: "Jumeirah 1 / Mercato",        drive: "10 min", pickup: "Within 30 min" },
      { from: "Jumeirah 2",                  drive: "10 min", pickup: "Within 30 min" },
      { from: "Jumeirah 3 / Sunset Mall",    drive: "11 min", pickup: "Within 30 min" },
      { from: "La Mer",                      drive: "12 min", pickup: "Within 45 min" },
      { from: "City Walk / Box Park",        drive: "13 min", pickup: "Within 45 min" },
      { from: "Umm Suqeim",                  drive: "9 min",  pickup: "Within 30 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long does pickup take from Jumeirah?", a: "Within 30 minutes of WhatsApp confirmation during business hours. Jumeirah is on the daily courier loop, so pickup windows are usually shorter than the headline 30 minutes." },
      { q: "Can the courier meet my driver or housemaid at the gate?", a: "Yes. Authorise them by name on WhatsApp and the courier hands the device to whoever is at the villa gate. We'll send a photo confirming the handover." },
      { q: "Do you charge extra for Jumeirah pickup?", a: "No. Free pickup and free return delivery from any Jumeirah 1, 2 or 3 address - villas, apartments, offices on Beach Road." },
      { q: "Can you collect from a Jumeirah cafe instead - Tom & Serg, Common Grounds, Arabian Tea House?", a: "Yes. Tell us the cafe and time, the courier meets you there. Convenient if you're already out for breakfast or a meeting." },
      { q: "My child spilled juice on my MacBook at home in Jumeirah. What now?", a: "Power off, don't charge it, WhatsApp us. We'll do an emergency pickup within 30 minutes, ultrasonic-clean the logic board, and quote the repair in writing. Most juice spills are recoverable if caught within 24 hours." },
      { q: "Do you sell refurbished MacBooks for the school-run-and-back-up family setup?", a: "Yes - certified refurbished MacBook Air and Pro models with a warranty of up to 12 months, delivered to your villa for inspection. Pay only if you keep it." },
      { q: "Can you do home setup of a new MacBook for my parents in Jumeirah?", a: "Yes. We offer at-home setup - Apple ID, iCloud, email, Office, security settings, data migration from old device. Quoted by the visit; usually 1-2 hours on site." },
      { q: "Do you pick up from Jumeirah private schools - JESS, JC, Raffles, Latifa?", a: "Yes. Leave the device at the school office with your child's name; we collect, repair, and return to the same office for end-of-school pickup." },
    ],
    reviewIndexes: [4, 9, 12, 14, 17, 25],
  },
  {
    slug: "jlt",
    area: "JLT",
    short: "JLT",
    driveTime: "8 minutes",
    metroNote: "DMCC Metro on the Red Line is 3 stops from Media City Metro - about 12 minutes door to door including the walk.",
    pickupWindow: "Within 30 minutes",
    landmarks: ["Almas Tower", "DMCC Metro", "Cluster JLT", "Lake Shore Tower", "Armada Towers", "JLT Park"],
    landmarkLine: "Near Almas Tower, opposite DMCC Metro, across the lake from Marina.",
    intro:
      "Jumeirah Lakes Towers (JLT) is one of the closest commercial-residential clusters to our workshop - 8 minutes by car or 3 Metro stops from DMCC to Media City. We collect MacBooks free of charge from any JLT tower (Almas, Lake Shore, Indigo, Saba, Goldcrest, Armada, Mag 214, Lake Terrace), deliver back the same day, and provide a written warranty of up to 12 months. Most JLT pickups are completed within 30 minutes of WhatsApp confirmation, and the courier covers all 26 JLT clusters daily.",
    whyChoose:
      "JLT is an office-heavy area - startups, freelancers, traders, agencies. A broken MacBook stops your work day, so we move fast. Diagnosis within 4 hours of pickup, written quote on WhatsApp, most common repairs (screen, battery, keyboard, trackpad) returned to your office the same evening. The courier is familiar with every JLT cluster and tower's reception protocol, so there's no waiting at security. We bill companies on a VAT invoice if you need to expense it through the business.",
    pickupNote:
      "WhatsApp 055 741 3706 with your tower (e.g. 'Almas Tower, 47th floor' or 'Indigo Tower JLT') and the MacBook model. The courier confirms a 30-minute pickup window and meets you at office or tower reception. If your floor is restricted-access, leave the device at reception and we'll pick it up there.",
    travel: [
      { from: "Almas Tower",                 drive: "8 min",  pickup: "Within 30 min" },
      { from: "Cluster I, J, K (Lake Side)", drive: "9 min",  pickup: "Within 30 min" },
      { from: "Lake Shore / Lake Terrace",   drive: "8 min",  pickup: "Within 30 min" },
      { from: "Armada Towers",               drive: "10 min", pickup: "Within 30 min" },
      { from: "Indigo / Saba / Goldcrest",   drive: "9 min",  pickup: "Within 30 min" },
      { from: "Mag 214 / Lake Point",        drive: "9 min",  pickup: "Within 30 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long does pickup take from JLT?", a: "Within 30 minutes of WhatsApp confirmation during business hours. JLT is on the daily courier route - most pickups are quicker than the headline window." },
      { q: "What if I'm at the office in JLT?", a: "Same service. Most JLT pickups are office collections. Tell us the tower and floor, courier meets you at reception. We'll bring a VAT invoice if you need it for company reimbursement." },
      { q: "Do you charge extra for JLT pickup?", a: "No. Free pickup and free return delivery from any JLT cluster - residential, office, mixed-use." },
      { q: "Can you bill my JLT-licensed company directly?", a: "Yes. We issue VAT invoices in the company name with our TRN and trade licence. Common for JLT freezone consultancies, traders and agencies." },
      { q: "What's the closest Metro stop to JLT for me to come in person?", a: "DMCC Metro is in JLT itself. From there, take the Red Line one stop to Media City, walk over the bridge to Concord Tower - 8 minutes total. No Metro change." },
      { q: "Can you handle a fleet repair for our JLT office (5+ MacBooks)?", a: "Yes. Bulk discounts apply from 5 devices upwards. We'll collect them all in one visit, run individual diagnostics, return a single quote, and deliver them back as a batch." },
      { q: "Can you walk us through what's wrong before we approve?", a: "Yes - every quote includes a plain-English diagnosis: which part failed, why, what the repair involves, what the warranty covers, and what would happen if you don't repair it. No jargon." },
      { q: "I'm a JLT trader and need data recovered from a dead MacBook urgently.", a: "Yes. Data recovery from dead MacBooks is one of our specialities - including Apple Silicon SSD recovery via the secure DFU board-link procedure. WhatsApp us, we'll quote and start within 24 hours." },
    ],
    reviewIndexes: [0, 4, 9, 13, 18, 22],
  },
  {
    slug: "difc",
    area: "DIFC",
    short: "DIFC",
    driveTime: "16 minutes",
    metroNote: "Financial Centre Metro on the Red Line is 5 stops from Media City Metro - about 20 minutes door to door including the short walk.",
    pickupWindow: "Within 45 minutes",
    landmarks: ["Gate Building", "Index Tower", "Burj Daman", "ICD Brookfield Place", "Gate Avenue", "Currency House"],
    landmarkLine: "10 minutes from the Gate Building, near Index Tower and ICD Brookfield Place.",
    intro:
      "Dubai International Financial Centre (DIFC) - Gate Building, Index Tower, Burj Daman, Currency House, ICD Brookfield Place - is 16 minutes from our Media City workshop via Sheikh Zayed Road. We collect MacBooks free of charge from any DIFC office or apartment, deliver back the same day, and provide a written warranty of up to 12 months. Most DIFC pickups are completed within 45 minutes of WhatsApp confirmation. The courier knows the DIFC tower security protocols, including the visitor pass procedures at Gate Avenue and ICD Brookfield.",
    whyChoose:
      "DIFC tenants - law firms, banks, asset managers, fintechs - depend on encrypted MacBooks for client work. We respect that. The technician runs a hardware-only diagnosis; we never request your password unless software repair is explicitly approved in writing. The diagnosis is free, the quote arrives in 4 hours, the repair is finished and returned to your office reception the same business day for in-stock parts. We issue formal VAT invoices in your firm's name and can sign an NDA on request before the device leaves your office.",
    pickupNote:
      "WhatsApp 055 741 3706 with your tower (e.g. 'Index Tower, 35th floor' or 'ICD Brookfield level 24') and the MacBook model. The courier confirms a 45-minute pickup window and meets you at office reception or the visitor screening desk. Bring your visitor host details if your floor needs an escort.",
    travel: [
      { from: "Gate Building / Gate Village", drive: "16 min", pickup: "Within 45 min" },
      { from: "Index Tower",                 drive: "16 min", pickup: "Within 45 min" },
      { from: "Burj Daman",                  drive: "16 min", pickup: "Within 45 min" },
      { from: "ICD Brookfield Place",        drive: "17 min", pickup: "Within 45 min" },
      { from: "Currency House",              drive: "16 min", pickup: "Within 45 min" },
      { from: "Gate Avenue residential",     drive: "16 min", pickup: "Within 45 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long does pickup take from DIFC?", a: "Within 45 minutes of WhatsApp confirmation during business hours. Allow extra time for tower visitor screening; the courier handles the sign-in." },
      { q: "Will you sign an NDA before taking the MacBook?", a: "Yes. Send your standard one-way NDA on WhatsApp; the technician signs at the reception desk before the device leaves your office. No charge." },
      { q: "Do you charge extra for DIFC pickup?", a: "No. Free pickup and free return delivery from any DIFC tower." },
      { q: "Will you ask for my password during the repair?", a: "Only if you explicitly approve software repair (e.g. macOS reinstall, virus removal). Hardware repairs - screen, battery, keyboard, logic board - are completed without macOS login. We never store passwords or access cloud accounts." },
      { q: "Can you bill my law firm / bank directly with a VAT invoice?", a: "Yes. VAT invoice in the firm's name with our TRN, trade licence and bank details. Net-30 terms available for established corporate clients on request." },
      { q: "Can you collect from the DIFC court building or registrar office?", a: "Yes. Tell us the building and meeting point on WhatsApp; the courier meets you outside the security perimeter and signs in if needed." },
      { q: "Will you handle iPhones and iPads from the same office in one visit?", a: "Yes - multi-device pickups are bundled. One quote, one delivery, one invoice covering all devices in the batch. Common for partner desks needing simultaneous MacBook + iPhone screen repairs." },
      { q: "Can you do an emergency repair before a court hearing or board meeting?", a: "Yes. Tell us the deadline on WhatsApp. We've turned around screen and battery repairs in 2-3 hours for DIFC clients before court appearances; we slot urgent work ahead of the queue when the deadline is real." },
    ],
    reviewIndexes: [1, 5, 10, 14, 19, 23],
  },
  {
    slug: "silicon-oasis",
    area: "Silicon Oasis",
    short: "Silicon Oasis",
    driveTime: "30 minutes",
    metroNote: "Silicon Oasis is not yet on the Metro network. Free pickup and delivery is the practical option for repairs.",
    pickupWindow: "Same day",
    landmarks: ["DSO HQ", "Cedre Shopping Centre", "Silicon Avenue", "Silicon Gate", "Choithrams DSO", "Rochester Institute"],
    landmarkLine: "Near DSO HQ, opposite Cedre Shopping Centre, around the Silicon Avenue residential cluster.",
    intro:
      "Dubai Silicon Oasis (DSO) - Silicon Gate, Silicon Avenue, Cedre Villas, the Choithrams cluster, the universities - is 30 minutes from our Media City workshop via Sheikh Mohammed Bin Zayed Road. We collect MacBooks free of charge from any Silicon Oasis address, deliver back the same or next morning, and provide a written warranty of up to 12 months. The courier runs a Silicon Oasis loop most weekday afternoons, so pickup is same-day if you message us before 2 pm.",
    whyChoose:
      "Silicon Oasis is a tech-heavy area - universities (Rochester, Heriot-Watt, BITS Pilani), startups, software engineers and IT-aware residents. Our customers here usually know exactly what's wrong with their MacBook before they call. We treat the diagnosis as a confirmation, not a sales pitch. Quotes are itemised, fix prices are fixed in writing, and the warranty covers the specific repair (not a vague 'general' policy). For Silicon Oasis residents who can't make the 30-minute drive, free pickup is the practical option.",
    pickupNote:
      "WhatsApp 055 741 3706 with your address (community + villa or apartment number - e.g. 'Cedre Villas, Phase 2' or 'Silicon Gate 1, apt 1408') and the MacBook model. The courier confirms a same-day pickup window. For messages received after 2 pm, we may schedule pickup for the next morning to keep the loop efficient.",
    travel: [
      { from: "Silicon Gate / Silicon Avenue", drive: "30 min", pickup: "Same day" },
      { from: "Cedre Villas",                  drive: "30 min", pickup: "Same day" },
      { from: "Choithrams DSO area",           drive: "30 min", pickup: "Same day" },
      { from: "Rochester Institute / Heriot-Watt", drive: "31 min", pickup: "Same day" },
      { from: "DSO HQ / Tech Park",            drive: "30 min", pickup: "Same day" },
      { from: "Semmer Villas / Arabella",      drive: "32 min", pickup: "Next morning" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long does pickup take from Silicon Oasis?", a: "Same day for messages received before 2 pm; next morning for later requests. The courier runs a dedicated DSO loop most weekday afternoons." },
      { q: "What if I'm at the DSO Tech Park or a startup office?", a: "Same free pickup. Tell us the building (e.g. 'IT Plaza' or 'In5') and floor; courier meets you at office reception." },
      { q: "Do you charge extra for Silicon Oasis pickup?", a: "No. Free pickup and free return delivery from any Silicon Oasis address - Cedre, Silicon Gate, Silicon Avenue, Semmer, Arabella." },
      { q: "Why is the pickup slower than from Marina or JBR?", a: "Distance: Silicon Oasis is 30 km from our Media City workshop, vs 4 km for Marina. We run one loop per day to keep the service free; book before 2 pm to catch the same-day window." },
      { q: "Can you collect from the universities - Rochester, Heriot-Watt, BITS Pilani?", a: "Yes. Many students and faculty use us. Leave the device with security or the IT helpdesk on campus; we collect from there and return the device to the same point once repaired." },
      { q: "I work from home in Cedre Villas. Can the courier come to the door?", a: "Yes. Send the villa number and street; courier meets you at the gate. Same procedure for return delivery." },
      { q: "Can you do same-day in-person if I drive to Media City?", a: "Yes - most repairs (screen, battery, keyboard, trackpad) finish in 1.5-3 hours. Drop off, head to Mall of the Emirates for lunch, collect the same afternoon." },
      { q: "Are you cheaper than the Apple Service Centre in Festival City?", a: "Roughly 40-60% cheaper for screen, battery and board repairs, with the same warranty of up to 12 months and genuine or OEM-grade parts. Walk-in transparent pricing - no 'minimum service charge'." },
    ],
    reviewIndexes: [2, 7, 11, 15, 20, 24],
  },
  {
    slug: "internet-city",
    area: "Dubai Internet City",
    short: "Internet City",
    driveTime: "5 minutes",
    metroNote: "Dubai Internet City Metro on the Red Line is the closest station to the workshop - Concord Tower is a few minutes from the platform.",
    pickupWindow: "Within 20 minutes",
    landmarks: ["Microsoft Building", "Oracle Building", "Cisco Building", "Grosvenor House", "Dubai Internet City Metro", "Building 1-27 cluster"],
    landmarkLine: "Right next door - minutes from the Microsoft, Oracle and Cisco buildings and Grosvenor House.",
    intro:
      "Dubai Internet City sits right next to our workshop. The two free zones share a border, so most pickups here take five minutes. We collect MacBooks free from any Internet City building, from the Microsoft and Oracle towers down to the smaller Building 1 to 27 clusters along the lagoon. The customers here are mostly companies - design studios, software teams, media firms running fleets of MacBook Pros that can't sit in a queue for a week. We diagnose for free, quote in writing within four hours, and return most repairs the same day, with a written warranty of up to 12 months on the work. Shafiq has been servicing Internet City offices since the zone filled up.",
    whyChoose:
      "Internet City is the closest area we cover, full stop. That means the fastest pickups and the least time your machine spends away from your desk. We do a lot of corporate work here - a studio with ten MacBook Pros, a software team whose build machine died on a deadline - so we keep common screens and batteries in stock and turn them around the same day. You don't raise a ticket, wait for an appointment, or watch a laptop get posted to a regional depot. One WhatsApp, a courier at reception, and the machine is back before the end of the day for in-stock repairs.",
    pickupNote:
      "Message Shafiq on 055 741 3706 with the building, floor and MacBook model - 'Oracle building, reception' or 'Building 5, IT room' works fine. The courier confirms a window within four minutes in working hours, then collects from the building reception or your IT desk. Internet City pickups are done within twenty minutes, free of charge. For company fleets we collect several machines in one run and return them together once the repairs are signed off.",
    travel: [
      { from: "Internet City (Microsoft / Oracle)", drive: "5 min", pickup: "Within 20 min" },
      { from: "Building 1-9 cluster",               drive: "5 min", pickup: "Within 20 min" },
      { from: "Grosvenor House / lagoon side",      drive: "6 min", pickup: "Within 20 min" },
      { from: "Knowledge Park border",              drive: "4 min", pickup: "Within 15 min" },
      { from: "Media City border",                  drive: "3 min", pickup: "Within 15 min" },
      { from: "Barsha Heights (Tecom) edge",        drive: "6 min", pickup: "Within 25 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How fast is pickup from Dubai Internet City?", a: "Usually within 20 minutes of your WhatsApp during business hours. Internet City borders our zone, so it's the quickest collection on our map - often faster if the courier is already nearby." },
      { q: "Do you service company MacBook fleets in Internet City?", a: "Yes, that's most of our work here. We collect several machines in one run from your office, repair them together, and return them to the same reception or IT desk. Tell us the quantities on WhatsApp for a combined quote." },
      { q: "Can you collect from our office reception or IT room?", a: "Either one. The courier meets your reception desk or comes up to the IT room - whichever you prefer. Leave the device with a name and ticket number and we handle the rest." },
      { q: "Can you repair the same day?", a: "Yes for in-stock parts - screen, battery, keyboard, trackpad. Collected by 11 am, repaired and back at your desk by late afternoon. Logic-board work runs 2-4 days." },
      { q: "Is pickup and delivery free?", a: "Completely free for every Internet City address. You only pay for the repair, agreed in writing on WhatsApp before any work starts. No collection fee, no 'minimum service charge'." },
      { q: "Which Internet City buildings have you worked in?", a: "The Microsoft, Oracle, Cisco, HP and Dell buildings, the Building 1 to 27 clusters, and Grosvenor House on the lagoon side. Weekly visits to most of them." },
      { q: "Is there a discount for repairing several team laptops?", a: "Yes. Drop-offs of three or more machines get 15% off labour. Common for studios and software teams refreshing a fleet before a project." },
      { q: "What if we'd rather drop off in person?", a: "Concord Tower is a 3 to 5 minute drive - exit at Media City off Sheikh Zayed Road. Paid parking inside the tower (AED 5/hour) and free street parking on Al Sufouh Road behind it." },
    ],
    reviewIndexes: [3, 8, 13, 17, 19, 25],
  },
  {
    slug: "deira",
    area: "Deira",
    short: "Deira",
    driveTime: "25 minutes",
    metroNote: "Union Metro on the Red and Green Line is the closest station, the workshop is accessible via a 25-minute drive or a direct taxi from Union Metro.",
    pickupWindow: "Within 60 minutes",
    landmarks: ["Gold Souk", "Spice Souk", "Deira City Centre", "Union Square", "Naif Souk", "Al Rigga"],
    landmarkLine: "Serving Gold Souk, Spice Souk, Deira City Centre, Union Square and Al Rigga.",
    intro:
      "Deira is one of Dubai's oldest and most densely populated districts, home to the Gold Souk, Spice Souk, and Deira City Centre. MacBook Repair Dubai collects from every Deira address, apartments along Al Rigga Road, offices near Union Square, and shops in the souk corridors, free of charge. Our workshop in Concord Tower, Media City is a 25-minute drive, and most repairs come back the same day. Shafiq and the team have been repairing MacBooks for Deira residents and business owners since 2004.",
    whyChoose:
      "Deira customers range from individual residents to trading companies that run their entire business on a MacBook. We collect from any Deira building. Al Rigga towers, Naif commercial blocks, Gold Souk back-offices and deliver back once the repair is done. You get a written quote on WhatsApp before anything starts, and you only pay if you approve the repair. No 'diagnostic fee', no minimum charge, no courier cost. The same warranty of up to 12 months applies whether you're repairing a MacBook Air or a MacBook Pro 16.",
    pickupNote:
      "Send Shafiq a WhatsApp on 055 741 3706 with your building name or area (e.g. 'Al Rigga Road, near Lamcy Plaza') and the MacBook model. The courier confirms within 5 minutes during business hours and is usually with you within 60 minutes. Pickup is free from every Deira address.",
    travel: [
      { from: "Gold Souk / Spice Souk",    drive: "25 min", pickup: "Within 60 min" },
      { from: "Deira City Centre",          drive: "22 min", pickup: "Within 55 min" },
      { from: "Al Rigga Road",              drive: "23 min", pickup: "Within 55 min" },
      { from: "Naif Souk",                  drive: "26 min", pickup: "Within 60 min" },
      { from: "Union Square",               drive: "24 min", pickup: "Within 60 min" },
      { from: "Al Hamriya",                 drive: "27 min", pickup: "Within 65 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Do you collect from Deira?", a: "Yes, free pickup from every Deira address. Al Rigga, Gold Souk, City Centre, Naif, Union Square, Al Hamriya. The courier arrives within 60 minutes of WhatsApp confirmation during business hours." },
      { q: "How long does the repair take?", a: "Most screen, battery, keyboard and trackpad repairs are finished same-day. Logic board work takes 2-4 days. We give you an estimated time on WhatsApp before you hand over the device." },
      { q: "Can you collect from a Deira trading company office?", a: "Yes. We regularly collect from commercial offices and trading companies. Leave the MacBook at reception with your name and we handle the rest." },
      { q: "Is there a minimum repair charge?", a: "No. The diagnostic is free. You pay only for the repair you approve in writing. If we can't fix it, you pay nothing." },
      { q: "Do you cover Al Nahda / Al Qusais (near Deira)?", a: "Yes. Both are within our free pickup zone. WhatsApp us with your exact building name and we confirm the pickup time." },
      { q: "What if I'd rather drop off in person from Deira?", a: "Concord Tower, Media City is about 25 minutes by taxi from Deira City Centre. Paid parking inside the tower (AED 5/hour). We can also arrange a drop-off at Union Metro if that's easier." },
      { q: "Is the warranty of up to 12 months valid for Deira customers?", a: "Yes, the same written warranty of up to 12 months applies regardless of where in the UAE you are." },
      { q: "Can you repair several MacBooks for our office?", a: "Yes. Send us the models and faults on WhatsApp and we arrange a batch collection. Three or more machines get 15% off labour." },
    ],
    reviewIndexes: [1, 4, 9, 14, 18, 22],
  },
  {
    slug: "bur-dubai",
    area: "Bur Dubai",
    short: "Bur Dubai",
    driveTime: "20 minutes",
    metroNote: "BurJuman Metro on the Red and Green Line is the closest station, a 20-minute drive or taxi from BurJuman puts you at the workshop.",
    pickupWindow: "Within 50 minutes",
    landmarks: ["BurJuman Centre", "Meena Bazaar", "Al Fahidi Fort", "Dubai Museum", "Karama Market", "Al Mankhool"],
    landmarkLine: "Covering BurJuman, Meena Bazaar, Al Fahidi, Dubai Museum, and Al Mankhool.",
    intro:
      "Bur Dubai stretches from the Al Fahidi historic district along the Creek to BurJuman and Karama. MacBook Repair Dubai provides free pickup from every Bur Dubai address, hotel rooms on Khalid Bin Al Waleed Road, apartments in Al Mankhool, offices near BurJuman Centre. Our workshop is a 20-minute drive and most repairs return the same day. We have been serving Bur Dubai residents, hotel guests, and business owners since the workshop opened in 2004.",
    whyChoose:
      "Bur Dubai is one of the busiest courier zones we cover. We collect from hotel receptions on Sheikh Khalifa Bin Zayed Road, apartments in Al Mankhool and Al Raffa, and offices near BurJuman mall, all free, all same-day return on stock parts. You get a written WhatsApp quote before any work starts. No diagnostic fee. No minimum charge. The written warranty of up to 12 months, depending on the repair, is the same whether you brought it in from the Marina or handed it to the courier outside your Bur Dubai building.",
    pickupNote:
      "WhatsApp Shafiq on 055 741 3706 with your address (building name and road) and MacBook model. The courier confirms within 5 minutes and arrives within 50 minutes during business hours (9 am-10 pm Mon-Sat). Free for every Bur Dubai address.",
    travel: [
      { from: "BurJuman Centre",            drive: "20 min", pickup: "Within 50 min" },
      { from: "Al Fahidi / Dubai Museum",   drive: "22 min", pickup: "Within 55 min" },
      { from: "Meena Bazaar",               drive: "21 min", pickup: "Within 50 min" },
      { from: "Al Mankhool",                drive: "19 min", pickup: "Within 45 min" },
      { from: "Khalid Bin Al Waleed Rd",    drive: "20 min", pickup: "Within 50 min" },
      { from: "Al Raffa",                   drive: "23 min", pickup: "Within 55 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Do you pick up from Bur Dubai hotels?", a: "Yes, we collect from hotel receptions on Khalid Bin Al Waleed Road and Sheikh Khalifa Bin Zayed Road regularly. Leave the MacBook at reception with your name and a note, and the courier collects and delivers back to the same desk." },
      { q: "How long is the pickup wait from Bur Dubai?", a: "Within 50 minutes of WhatsApp confirmation during business hours (9 am-10 pm Mon-Sat). BurJuman and Al Mankhool are typically 40-50 minutes; Al Fahidi is slightly longer at peak traffic." },
      { q: "Is pickup free from Al Mankhool and Al Raffa?", a: "Yes, completely free. All Bur Dubai addresses are in our free pickup zone. You only pay for the repair, agreed in writing before we start." },
      { q: "Can you repair a MacBook the same day in Bur Dubai?", a: "Yes for screen, battery, keyboard and trackpad jobs with parts in stock. Collect by 10 am, repair finished by 4 pm, delivered back by 6 pm. Logic board work takes 2-4 days." },
      { q: "Do you cover Karama from here?", a: "Karama is a separate page but yes, it is within our zone. WhatsApp us with the exact address." },
      { q: "What if I prefer to drop it off from Bur Dubai?", a: "Concord Tower is a 20-minute drive. Paid parking inside (AED 5/hour). BurJuman Metro is also close if you prefer public transport." },
      { q: "Is the warranty of up to 12 months the same for Bur Dubai customers?", a: "Yes. Same warranty, same parts quality, same technicians regardless of where in Dubai you are." },
      { q: "Can you repair several MacBooks for our Bur Dubai office?", a: "Yes. Three or more machines in a batch get 15% off labour. Send us the list on WhatsApp for a combined quote." },
    ],
    reviewIndexes: [2, 6, 11, 15, 20, 24],
  },
  {
    slug: "karama",
    area: "Karama",
    short: "Karama",
    driveTime: "18 minutes",
    metroNote: "ADCB Metro on the Green Line is the nearest station, the workshop is approximately 18 minutes by car from Karama.",
    pickupWindow: "Within 45 minutes",
    landmarks: ["Karama Market", "Karama Centre", "Zabeel Park", "ADCB Metro", "Al Attar Tower", "Dubai Frame"],
    landmarkLine: "Serving Karama Market, Karama Centre, Zabeel Park, and the Dubai Frame corridor.",
    intro:
      "Karama is one of Dubai's most established residential and retail districts, home to Karama Market, Karama Centre, and a dense network of apartment blocks. MacBook Repair Dubai provides free pickup from every Karama address. Our Concord Tower workshop is 18 minutes away, close enough that most Karama residents have their MacBook back the same day. We have been the area's go-to MacBook repair service since 2004, with many Karama customers on their third or fourth repair with us.",
    whyChoose:
      "Karama is walkable and well-organised, which makes our courier route fast here. Most pickups happen within 45 minutes of the WhatsApp confirmation. We collect from apartment receptions, ground-floor offices, and retail units in Karama Market, no extra steps, no 'bring it to the counter'. The written quote arrives before any work starts, the repair is same-day on in-stock parts, and the warranty of up to 12 months is on paper.",
    pickupNote:
      "WhatsApp Shafiq on 055 741 3706 with your building name or block (e.g. 'Block 4, Karama Market' or 'Al Attar Tower') and MacBook model. The courier confirms within 5 minutes during business hours and arrives within 45 minutes. Free from every Karama address.",
    travel: [
      { from: "Karama Market",              drive: "18 min", pickup: "Within 45 min" },
      { from: "Karama Centre",              drive: "17 min", pickup: "Within 45 min" },
      { from: "Zabeel Park",                drive: "16 min", pickup: "Within 40 min" },
      { from: "ADCB Metro area",            drive: "19 min", pickup: "Within 45 min" },
      { from: "Dubai Frame",                drive: "15 min", pickup: "Within 40 min" },
      { from: "Al Attar Tower",             drive: "18 min", pickup: "Within 45 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How fast is pickup from Karama?", a: "Within 45 minutes of WhatsApp confirmation during business hours (9 am-10 pm Mon-Sat). Karama is one of our quickest zones." },
      { q: "Do you cover all Karama blocks?", a: "Yes, every block and building in Karama is within our free pickup zone. From Karama Market shops to high-rise apartments near ADCB Metro." },
      { q: "Can I get a same-day repair from Karama?", a: "Yes. Collect before 11 am, finish by 4 pm, deliver back by 6 pm on screen, battery, keyboard and trackpad jobs. Logic board work takes 2-4 days." },
      { q: "Is there a drop-off option near Karama?", a: "The workshop (Concord Tower, Media City) is 18 minutes by taxi. Or we can meet you at a Karama landmark for handover if you'd prefer not to wait at home." },
      { q: "Do you do business pickups from Karama offices?", a: "Yes. Offices and retail units in the market area are common for us. Leave the device at the front desk with your name and we handle collection and return." },
      { q: "Is pickup and delivery free from Karama?", a: "Yes, completely free both ways. You only pay for the repair, agreed in writing before we start." },
      { q: "What warranty do Karama customers get?", a: "Same written warranty of up to 12 months as every other customer. If the same fault returns within 12 months, we fix it at no charge." },
      { q: "Can you collect from Zabeel Park-side buildings?", a: "Yes. Zabeel Park, Sheikh Zayed Road-adjacent Karama towers, and Al Attar Tower are all within our pickup zone." },
    ],
    reviewIndexes: [0, 3, 7, 12, 16, 23],
  },
  {
    slug: "mirdif",
    area: "Mirdif",
    short: "Mirdif",
    driveTime: "30 minutes",
    metroNote: "The nearest Metro is Rashidiya on the Red Line, a 10-minute drive from most Mirdif addresses to the station, then connect onward or take a taxi to the workshop.",
    pickupWindow: "Within 70 minutes",
    landmarks: ["Mirdif City Centre", "Uptown Mirdif", "Al Mushrif Park", "Garhoud Bridge", "Mirdif Hills", "Shorooq community"],
    landmarkLine: "Serving Mirdif City Centre, Uptown Mirdif, Al Mushrif Park, and the Mirdif Hills and Shorooq communities.",
    intro:
      "Mirdif is a popular family residential district in north-east Dubai, home to Mirdif City Centre, Uptown Mirdif, and a mix of villas and apartment communities. MacBook Repair Dubai provides free pickup from every Mirdif address. The workshop in Concord Tower, Media City is approximately 30 minutes away, and most repairs are finished and delivered back the same day. We have been collecting from Mirdif families, freelancers, and home-office workers since 2004.",
    whyChoose:
      "Mirdif customers often prefer us because the nearest Apple Store is significantly further away and requires navigating Dubai Mall traffic. We come to you, repair in-workshop, and return the same day. You get a written WhatsApp quote within 15 minutes of sending us the fault description, no diagnostic fee, and a written warranty of up to 12 months, depending on the repair. The same technicians who repair Downtown and Marina MacBooks handle every Mirdif job.",
    pickupNote:
      "WhatsApp Shafiq on 055 741 3706 with your community name (e.g. 'Mirdif Hills, Block 7' or 'Shorooq, villa 42') and MacBook model. The courier confirms within 5 minutes and arrives within 70 minutes during business hours. Free from every Mirdif address.",
    travel: [
      { from: "Mirdif City Centre",         drive: "30 min", pickup: "Within 70 min" },
      { from: "Uptown Mirdif",              drive: "29 min", pickup: "Within 65 min" },
      { from: "Mirdif Hills",               drive: "31 min", pickup: "Within 70 min" },
      { from: "Shorooq community",          drive: "32 min", pickup: "Within 75 min" },
      { from: "Al Mushrif Park",            drive: "28 min", pickup: "Within 65 min" },
      { from: "Garhoud Bridge",             drive: "25 min", pickup: "Within 60 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Do you pick up from Mirdif villas?", a: "Yes, villas, townhouses, and apartment buildings in every Mirdif community are within our free pickup zone. Leave it at the front door or meet the courier at the gate." },
      { q: "How long does pickup take from Mirdif?", a: "Within 70 minutes of WhatsApp confirmation during business hours. Mirdif is the furthest of our Dubai zones, so we build extra time in; we've never been late on a confirmed pickup." },
      { q: "Is there a same-day service from Mirdif?", a: "Yes, if you WhatsApp before 10 am. Screen, battery, keyboard, trackpad jobs are usually back by 7 pm. Logic board work takes 2-4 days." },
      { q: "Can you collect from Mirdif City Centre shops or offices?", a: "Yes. We collect from retail units, offices, and the food court on the same terms as home addresses." },
      { q: "Why not just go to an Apple Store from Mirdif?", a: "The nearest Apple Store (Dubai Mall) is further from Mirdif than we are, requires parking or Metro connections, and charges significantly more. We collect from your door." },
      { q: "Is pickup free from Shorooq and Mirdif Hills?", a: "Yes, completely free. All Mirdif communities. Shorooq, Mirdif Hills, Ghoroob, Al Waha, are in our free pickup zone." },
      { q: "What if my repair takes more than one day?", a: "We message you on WhatsApp with progress updates. For multi-day repairs (logic board, data recovery), the MacBook comes back to you as soon as it's ready, without you needing to chase us." },
      { q: "Can you repair multiple MacBooks for a home office in Mirdif?", a: "Yes. Three or more machines in a batch get 15% off labour. Send us the list for a combined quote." },
    ],
    reviewIndexes: [5, 10, 14, 18, 21, 26],
  },
  {
    slug: "palm-jumeirah",
    area: "Palm Jumeirah",
    short: "Palm",
    driveTime: "15 minutes",
    metroNote: "The Palm Monorail connects the trunk to the Atlantis at the top. The DMCC Metro (Red Line) is the nearest Metro station, a short taxi from the Palm gateway.",
    pickupWindow: "Within 35 minutes",
    landmarks: ["Atlantis The Palm", "Nakheel Mall", "The Pointe", "FIVE Palm Hotel", "Signature Villas", "Golden Mile"],
    landmarkLine: "Serving Atlantis, Nakheel Mall, The Pointe, FIVE Palm, and the Signature Villa and Golden Mile communities.",
    intro:
      "Palm Jumeirah is Dubai's iconic palm-shaped island, home to the Atlantis resort, five-star hotels, and hundreds of private villas and apartment towers. MacBook Repair Dubai provides free pickup from every Palm address, including the fronds, the trunk, and the crescent hotels. The workshop in Concord Tower, Media City is just 15 minutes from the Palm gateway, making us one of the fastest-responding services on the island.",
    whyChoose:
      "Palm Jumeirah residents and hotel guests consistently choose us because the alternative, taking a MacBook to the Dubai Mall Apple Store, means crossing the city. We collect from the fronds, the Golden Mile, Signature Villas, and hotel receptions at the Atlantis, FIVE Palm, One&Only, and Jumeirah Zabeel Saray. The repair is done in-workshop with genuine-grade parts, and the device returns the same day for most jobs. We are discreet, punctual, and the written quote on WhatsApp means there are never any surprises.",
    pickupNote:
      "WhatsApp Shafiq on 055 741 3706 with your frond number or tower name (e.g. 'Frond G, Villa 12' or 'Golden Mile 3') and MacBook model. The courier confirms within 5 minutes and arrives within 35 minutes. For crescent hotels, we coordinate with the concierge.",
    travel: [
      { from: "Palm gateway / Nakheel Mall", drive: "15 min", pickup: "Within 35 min" },
      { from: "Golden Mile",                 drive: "16 min", pickup: "Within 35 min" },
      { from: "Signature Villas (trunk)",    drive: "17 min", pickup: "Within 40 min" },
      { from: "FIVE Palm / The Pointe",      drive: "18 min", pickup: "Within 40 min" },
      { from: "Atlantis The Palm",           drive: "20 min", pickup: "Within 45 min" },
      { from: "Frond A-K villas",            drive: "16–20 min", pickup: "Within 40–50 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Do you collect from Palm Jumeirah villas on the fronds?", a: "Yes, all fronds (A through P), the trunk buildings, and the crescent hotels are within our free pickup zone. The courier has full Palm access and knows the villa numbering system." },
      { q: "How fast is pickup from Palm Jumeirah?", a: "Within 35-45 minutes of WhatsApp confirmation depending on your location on the frond. Media City is 15 minutes from the Palm gateway, so we're usually the fastest option on the island." },
      { q: "Can you collect from my hotel on Palm Jumeirah?", a: "Yes. We work with concierges at Atlantis, FIVE Palm, One&Only, Jumeirah Zabeel Saray, Sofitel, and W Dubai The Palm. Leave the device at concierge with your name and room number." },
      { q: "Is same-day repair available for Palm customers?", a: "Yes. Collect before 10 am, repaired and back before 6 pm on screen, battery, keyboard, trackpad jobs. Logic board work is 2-4 days." },
      { q: "What's the most common MacBook fault you see from Palm residents?", a: "Keyboard issues (from salt air and fine dust) and battery swelling (from heat). We also see a lot of screen replacements from villas where the MacBook lives on a terrace." },
      { q: "Is pickup and delivery free from every frond?", a: "Yes. Pickup and delivery are always free regardless of your exact Palm address. You only pay for the repair agreed in writing." },
      { q: "Can you service a MacBook for a hotel guest in one day?", a: "Usually yes. If the part is in stock (screen, battery, keyboard) we collect in the morning and return by evening. We confirm the timeline on WhatsApp before collecting." },
      { q: "Is there a drop-off option if I'd prefer to come to you?", a: "Yes. Concord Tower is 15 minutes from the Palm gateway by car. Paid parking inside (AED 5/hour). Many Palm residents drop off on their way to Media City or Sheikh Zayed Road." },
    ],
    reviewIndexes: [2, 7, 11, 17, 22, 25],
  },
  {
    slug: "barsha",
    area: "Al Barsha",
    short: "Barsha",
    driveTime: "8 minutes",
    metroNote: "Mall of the Emirates Metro on the Red Line is 4 minutes from the workshop. Al Barsha is one of the closest major residential areas to the workshop.",
    pickupWindow: "Within 20 minutes",
    landmarks: ["Mall of the Emirates", "Barsha Pond Park", "Al Barsha 1 / 2 / 3", "My City Centre Al Barsha", "Gems schools cluster", "Al Barsha South"],
    landmarkLine: "8 minutes from Mall of the Emirates, Barsha Pond Park, and all Al Barsha 1, 2, and 3 communities.",
    intro:
      "Al Barsha is one of the closest major residential districts to the MacBook Repair Dubai workshop in Concord Tower, Media City, just 8 minutes away. From Al Barsha 1 apartments near Mall of the Emirates to the Al Barsha 2 and 3 communities and the Al Barsha South villas, we cover every Barsha address with some of the fastest pickups on our service map. Most Al Barsha residents have their MacBook back the same morning.",
    whyChoose:
      "Al Barsha is practically on our doorstep. The courier is typically with you within 20 minutes of the WhatsApp confirmation, faster than driving to any service centre in the city. We collect from the apartment blocks along the Sheikh Zayed Road frontage, the Gems schools back-offices, the Al Barsha 2 and 3 blocks, and the Al Barsha South villas. Written quote before we start. A written warranty of up to 12 months after. Free pickup and delivery both ways.",
    pickupNote:
      "WhatsApp Shafiq on 055 741 3706 with your building name (e.g. 'Al Barsha 1, near Mall of the Emirates' or 'Al Barsha South, near the lakes') and MacBook model. The courier confirms within 3 minutes and is usually with you in 20 minutes. Al Barsha is one of our fastest pickup zones.",
    travel: [
      { from: "Al Barsha 1 (Mall of Emirates side)", drive: "8 min",  pickup: "Within 20 min" },
      { from: "Al Barsha 2 / 3",                     drive: "10 min", pickup: "Within 25 min" },
      { from: "My City Centre Al Barsha",             drive: "8 min",  pickup: "Within 20 min" },
      { from: "Al Barsha South",                      drive: "12 min", pickup: "Within 30 min" },
      { from: "Barsha Pond Park",                     drive: "9 min",  pickup: "Within 20 min" },
      { from: "Mall of the Emirates",                 drive: "8 min",  pickup: "Within 20 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How fast is pickup from Al Barsha?", a: "Al Barsha is one of our closest residential zones, typically 15-20 minutes from WhatsApp confirmation, and faster outside peak traffic since the workshop is only 8 minutes away." },
      { q: "Do you collect from the Mall of the Emirates hotels and offices?", a: "Yes. We collect from the hotels and offices around Mall of the Emirates. Kempinski, Sheraton Mall of the Emirates, Novotel and the surrounding Al Barsha 1 towers, and return the device to the same reception desk." },
      { q: "Can I drop off in person since you're close?", a: "Yes. Concord Tower is 8 minutes from Mall of the Emirates. Many Barsha residents walk or drive the MacBook over. Paid parking inside (AED 5/hour)." },
      { q: "Is same-day service guaranteed from Al Barsha?", a: "Yes for screen, battery, keyboard, and trackpad repairs. Collect by 11 am, back by 4 pm is standard. We have one of the fastest turnarounds of any Dubai district." },
      { q: "Do you cover Al Barsha South and Al Barsha 3?", a: "Yes. All Al Barsha zones (1, 2, 3 and South) are in our free pickup zone. Al Barsha South is 12 minutes and we collect there daily." },
      { q: "Is pickup free from Al Barsha?", a: "Completely free, both ways. Al Barsha has been free pickup since we launched in 2004." },
      { q: "What's the most common repair you do from Barsha?", a: "Battery replacements, keyboard replacements (Barsha residents tend to use their MacBooks hard in hot conditions), and screen repairs. Logic board work is less common but we handle it too." },
      { q: "Can you collect from my Gems school office in Barsha?", a: "Yes. We collect from school admin offices and staff rooms. Leave the MacBook with reception, we pick it up and return it the same day for in-stock jobs." },
    ],
    reviewIndexes: [0, 4, 8, 13, 19, 24],
  },
  {
    slug: "al-sufouh",
    area: "Al Sufouh",
    short: "Al Sufouh",
    driveTime: "5 minutes",
    metroNote: "Dubai Internet City Metro on the Red Line is the closest station, and the Al Sufouh Tram runs along the district - the workshop is minutes away on Al Sufouh Road.",
    pickupWindow: "Within 20 minutes",
    landmarks: ["Madinat Jumeirah", "Sufouh Beach", "Knowledge Village", "American School of Dubai", "Dubai Media City", "Palm Jumeirah gateway"],
    landmarkLine: "Minutes from Madinat Jumeirah, Sufouh Beach, Knowledge Village and the Palm Jumeirah gateway.",
    intro:
      "Al Sufouh is the district our workshop sits in - Concord Tower is on the Media City edge of Al Sufouh, on Al Sufouh Road itself. That makes Al Sufouh the single closest area we serve. From the Al Sufouh 1 and 2 villa belt and Sufouh Gardens to the beachfront hotels around Madinat Jumeirah and the Knowledge Village campuses, most pickups here take five minutes. We collect MacBooks free of charge, deliver back the same day, and provide a written warranty of up to 12 months. Shafiq, the lead technician, has worked on Al Sufouh MacBooks since the workshop opened in 2004.",
    whyChoose:
      "Nowhere is closer to us than Al Sufouh - we're neighbours. The courier is usually at your door within 20 minutes of the WhatsApp confirmation, often sooner, which means your MacBook spends the least possible time away from your desk. We collect from the villas along Al Wasl, the Sufouh Gardens low-rises, hotel concierge desks at Madinat Jumeirah and the Mina A'Salam, and the university and school campuses in Knowledge Village and Knowledge Park. Diagnosis is free, the written quote arrives within 4 hours, and most common repairs are returned the same evening.",
    pickupNote:
      "WhatsApp Shafiq on 055 741 3706 with your building or villa (e.g. 'Al Sufouh 1, near the American School' or 'Sufouh Gardens') and the MacBook model. The courier confirms a window within minutes during business hours and is typically with you in 20 minutes. Free pickup and free return from every Al Sufouh address - we're only down the road.",
    travel: [
      { from: "Al Sufouh 1 (Media City side)",   drive: "4 min", pickup: "Within 15 min" },
      { from: "Al Sufouh 2 / Sufouh Gardens",    drive: "6 min", pickup: "Within 20 min" },
      { from: "Madinat Jumeirah / Souk Madinat", drive: "6 min", pickup: "Within 20 min" },
      { from: "Knowledge Village / Park",        drive: "4 min", pickup: "Within 15 min" },
      { from: "American School of Dubai",        drive: "5 min", pickup: "Within 20 min" },
      { from: "Sufouh Beach / Palm gateway",     drive: "7 min", pickup: "Within 25 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How fast is pickup from Al Sufouh?", a: "Al Sufouh is the closest area we cover - our workshop is inside it. Pickups are typically 15-20 minutes from your WhatsApp, and often faster if the courier is already on Al Sufouh Road." },
      { q: "Do you collect from Madinat Jumeirah or the beachfront hotels?", a: "Yes. Hotel concierges at Madinat Jumeirah, Mina A'Salam, Al Qasr and the Jumeirah resorts call us regularly for guest MacBook repairs. Leave the device at reception with your name; we collect and return it to the same desk." },
      { q: "Can you pick up from the schools and universities in Knowledge Village?", a: "Yes. We collect from the American School of Dubai, GEMS Wellington, and the Knowledge Village campuses (Middlesex, Murdoch, Heriot-Watt and others). Leave the MacBook with the office or IT helpdesk and we handle the rest." },
      { q: "Do you charge extra for Al Sufouh pickup?", a: "No. Pickup and return delivery are completely free from every Al Sufouh address - villas, Sufouh Gardens apartments, hotels and campuses alike." },
      { q: "Can you repair the same day?", a: "Yes for in-stock parts - screen, battery, keyboard, trackpad. Because we're minutes away, a 10 am pickup is often back with you by early afternoon. Logic-board work takes 2-4 days." },
      { q: "My MacBook got sand or salt in it at Sufouh Beach. Can you save it?", a: "Usually yes. Sand in the vents and salt air cause overheating but rarely permanent damage if caught early. Bring it in within 24 hours; we strip-clean the fans, heatsinks and ports and run a full diagnostic." },
      { q: "I'd rather drop it off in person - where exactly are you?", a: "Concord Tower, Dubai Media City, on Al Sufouh Road - a 4-5 minute drive from most of Al Sufouh. Paid parking inside the tower (AED 5/hour) and free street parking on Al Sufouh Road behind it." },
      { q: "Do you handle iPhones and iPads from the same Al Sufouh address too?", a: "Yes - multi-device pickups are bundled into one collection, one quote and one delivery. Common for households and hotel guests with a MacBook plus an iPhone or iPad." },
    ],
    reviewIndexes: [0, 6, 12, 16, 21, 23],
  },
  {
    slug: "barsha-heights",
    area: "Barsha Heights",
    short: "Barsha Heights",
    driveTime: "6 minutes",
    metroNote: "Dubai Internet City Metro on the Red Line sits on the edge of Barsha Heights - the workshop is a 6-minute drive or one Metro stop away.",
    pickupWindow: "Within 20 minutes",
    landmarks: ["Dubai Internet City Metro", "The Montrose", "Two Towers", "Boutique 7 Hotel", "Al Shaiba / API towers", "Sheikh Zayed Road frontage"],
    landmarkLine: "Between Sheikh Zayed Road and Media City, around Dubai Internet City Metro and the Tecom tower clusters.",
    intro:
      "Barsha Heights - still widely called Tecom - is the dense tower cluster wedged between Sheikh Zayed Road and Media City, a 6-minute drive from our Concord Tower workshop or one Metro stop on the Red Line. It's mostly apartments and small offices packed with startups, freelancers, media teams and tech workers. We collect MacBooks free of charge from any Barsha Heights tower, deliver back the same day, and provide a written warranty of up to 12 months. Because Tecom borders Media City, it's one of the fastest pickups on our entire map.",
    whyChoose:
      "Barsha Heights runs on laptops - freelancers on deadlines, agencies between client calls, co-working desks that can't lose a machine for a week. We're built for that: tell us the issue on WhatsApp, hand the MacBook to our courier at reception, and the diagnosis is back within 4 hours. Most screen, battery, keyboard and trackpad repairs are returned to your tower the same evening. We issue VAT invoices in your company name for freezone businesses, and the courier knows every Tecom tower's reception and parking, so there's no waiting at security.",
    pickupNote:
      "WhatsApp 055 741 3706 with your tower (e.g. 'The Montrose, 14th floor' or 'Two Towers, Tecom') and the MacBook model. The courier confirms a 20-minute window and meets you at reception, your co-working space, or a cafe downstairs - whichever suits. Free pickup, free return, no charge for waiting time.",
    travel: [
      { from: "Tecom core (Internet City Metro)", drive: "5 min", pickup: "Within 15 min" },
      { from: "The Montrose",                      drive: "6 min", pickup: "Within 20 min" },
      { from: "Two Towers / Boutique 7",           drive: "7 min", pickup: "Within 20 min" },
      { from: "Al Shaiba / API Trio towers",       drive: "6 min", pickup: "Within 20 min" },
      { from: "Sheikh Zayed Road frontage",        drive: "7 min", pickup: "Within 25 min" },
      { from: "Media City border",                 drive: "3 min", pickup: "Within 15 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How fast is pickup from Barsha Heights (Tecom)?", a: "Usually within 20 minutes of your WhatsApp during business hours, and as little as 10-15 minutes - Tecom borders Media City, so it's one of the quickest collections on our map." },
      { q: "Is Barsha Heights the same as Tecom?", a: "Yes. Tecom is the old name; Barsha Heights is the official one. People still search both, and we cover every tower in the cluster either way." },
      { q: "Can you collect from my co-working space or a cafe downstairs?", a: "Yes. Tell us the spot - your desk, the building reception, or a cafe on the ground floor - and the courier meets you there. Convenient between client calls." },
      { q: "Can you bill my freezone company with a VAT invoice?", a: "Yes. We issue VAT invoices in the company name with our TRN and trade licence - common for the agencies, consultancies and startups based in Tecom and Media City." },
      { q: "Can you repair the same day?", a: "Yes for in-stock parts - screen, battery, keyboard, trackpad. Collected by 11 am, back at your desk by late afternoon. Logic-board work runs 2-4 days." },
      { q: "Do you handle fleet repairs for a Tecom agency or studio?", a: "Yes. Bulk discounts apply from 5 devices upwards. We collect them all in one visit, run individual diagnostics, return one combined quote, and deliver them back together." },
      { q: "What's the closest Metro stop if I want to come in person?", a: "Dubai Internet City Metro is on the edge of Barsha Heights. From there it's one stop to Media City and a short walk to Concord Tower, or a 6-minute drive door to door." },
      { q: "Is pickup free from Barsha Heights?", a: "Completely free, both ways. You only pay for the repair, agreed in writing on WhatsApp before any work starts - no collection fee, no minimum charge." },
    ],
    reviewIndexes: [1, 5, 10, 15, 18, 22],
  },
  {
    slug: "the-greens",
    area: "The Greens",
    short: "The Greens",
    driveTime: "9 minutes",
    metroNote: "Dubai Internet City Metro on the Red Line is the nearest station, a short hop from The Greens - the workshop is a 9-minute drive.",
    pickupWindow: "Within 30 minutes",
    landmarks: ["Emirates Golf Club", "The Onyx", "Al Thayyal & Al Ghozlan", "Carrefour The Greens", "The Views towers", "Montgomerie Golf Course"],
    landmarkLine: "Around Emirates Golf Club and Carrefour The Greens, next to the neighbouring Views towers.",
    intro:
      "The Greens and the neighbouring Views are Emaar's low- and mid-rise residential clusters beside Emirates Golf Club, just off Sheikh Zayed Road and 9 minutes from our Media City workshop. They're quiet, leafy and full of settled professionals and families - Al Thayyal, Al Ghozlan, Al Nakheel, Al Samar and The Onyx in The Greens, plus the Golf Towers, Mosela, Travo and Fairways in The Views. We collect MacBooks free of charge from both communities, deliver back the same day, and provide a written warranty of up to 12 months. Most pickups here are completed within 30 minutes of WhatsApp confirmation.",
    whyChoose:
      "The Greens and The Views are work-from-home territory - consultants, designers and remote teams whose day stops when the MacBook does. Our free door-to-door pickup means you don't load the laptop into the car and sit in Sheikh Zayed Road traffic; the courier comes to your block. Diagnosis is free, the written quote lands within 4 hours, and most screen, battery, keyboard and trackpad repairs are back at your apartment the same evening. The courier covers both communities daily, so pickup slots straight into the existing loop.",
    pickupNote:
      "WhatsApp 055 741 3706 with your building (e.g. 'Al Ghozlan 3, The Greens' or 'Golf Towers 2, The Views') and the MacBook model. The courier confirms a 30-minute window and meets you at the building lobby or the Carrefour The Greens parking, whichever is easier. Free pickup and free return from every Greens and Views address.",
    travel: [
      { from: "Al Thayyal / Al Ghozlan",     drive: "9 min",  pickup: "Within 30 min" },
      { from: "The Onyx / Al Nakheel",       drive: "9 min",  pickup: "Within 30 min" },
      { from: "Carrefour The Greens",        drive: "9 min",  pickup: "Within 30 min" },
      { from: "The Views (Golf Towers/Mosela)", drive: "10 min", pickup: "Within 30 min" },
      { from: "Emirates Golf Club",          drive: "9 min",  pickup: "Within 30 min" },
      { from: "Sheikh Zayed Road frontage",  drive: "8 min",  pickup: "Within 25 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long does pickup take from The Greens?", a: "Within 30 minutes of WhatsApp confirmation during business hours. The Greens is close to our workshop and on the daily courier loop, so pickups are usually quicker than the headline window." },
      { q: "Do you cover The Views as well as The Greens?", a: "Yes. The Views towers (Golf Towers, Mosela, Travo, Fairways, Tanaro and the rest) are on the same free-pickup terms as The Greens - they're effectively one neighbourhood for us." },
      { q: "Can the courier collect from a low-rise block rather than a tower?", a: "Yes. We collect from the Al Thayyal, Al Ghozlan, Al Nakheel and Al Samar low-rises just as easily as the Views towers - lobby reception or your door, your choice." },
      { q: "Do you charge extra for pickup from The Greens or The Views?", a: "No. Pickup and return delivery are completely free from every Greens and Views address. You only pay for the repair, quoted in writing before we start." },
      { q: "Can you repair the same day if I work from home?", a: "Yes for in-stock parts. Book a morning pickup and most screen, battery, keyboard and trackpad jobs are back the same evening, so you're offline for hours, not days." },
      { q: "I need data recovered from a MacBook that won't boot. Can you help?", a: "Yes. Data recovery from dead MacBooks - including Apple Silicon SSD recovery via the secure board-link procedure - is one of our specialities. WhatsApp us and we'll quote and start within 24 hours." },
      { q: "What's the nearest Metro if I'd rather come in person?", a: "Dubai Internet City Metro is the closest stop. By car, Concord Tower is a 9-minute drive via Sheikh Zayed Road and Al Sufouh Road. Paid parking inside (AED 5/hour)." },
      { q: "Is the warranty the same for Greens and Views customers?", a: "Yes - the same written warranty of up to 12 months, the same parts quality and the same technicians, regardless of where in Dubai you are." },
    ],
    reviewIndexes: [2, 7, 11, 14, 20, 24],
  },
  {
    slug: "jvc",
    area: "JVC",
    short: "JVC",
    driveTime: "16 minutes",
    metroNote: "JVC is not on the Metro network - the nearest stations are along Sheikh Zayed Road, so free pickup and delivery is the practical option for repairs.",
    pickupWindow: "Within 60 minutes",
    landmarks: ["Circle Mall", "JVC Community Park", "Saheel & Seasons towers", "Districts 10-16", "Hessa Street", "Al Khail Road"],
    landmarkLine: "Around Circle Mall and the JVC Community Park, across Districts 10 to 16.",
    intro:
      "Jumeirah Village Circle (JVC) is one of Dubai's fastest-growing residential communities - a dense mix of apartment towers and townhouses off Al Khail Road and Hessa Street, about 16 minutes from our Media City workshop. Young professionals, couples and families fill the buildings around Circle Mall and the JVC parks, and they run their lives on Apple devices. We collect MacBooks free of charge from any JVC tower or villa across Districts 10 to 16, deliver back the same day, and provide a written warranty of up to 12 months. Most JVC pickups are completed within 60 minutes of WhatsApp confirmation.",
    whyChoose:
      "JVC is full of remote workers and small-business owners for whom a dead MacBook means a lost work day - and JVC's building parking and visitor sign-in make a trip to a service centre a real chore. Our free door-to-door pickup turns it into a WhatsApp message: the courier comes to your tower lobby or villa gate, collects the device, and returns it once it's fixed. Diagnosis is free, the written quote arrives within 4 hours, and most common repairs are back the same evening. The courier runs a daily JVC loop, so pickup fits the existing route.",
    pickupNote:
      "WhatsApp 055 741 3706 with your building and district (e.g. 'District 13, tower near Circle Mall' or 'JVC townhouse, District 11') and the MacBook model. The courier confirms a 60-minute window and meets you at the lobby, villa gate, or Circle Mall parking. Free pickup and free return from every JVC address.",
    travel: [
      { from: "Circle Mall / District 12",   drive: "16 min", pickup: "Within 60 min" },
      { from: "District 10-11",              drive: "16 min", pickup: "Within 60 min" },
      { from: "District 13-14",              drive: "17 min", pickup: "Within 60 min" },
      { from: "District 15-16",              drive: "18 min", pickup: "Within 65 min" },
      { from: "Saheel / Seasons Community",  drive: "16 min", pickup: "Within 60 min" },
      { from: "Hessa Street edge",           drive: "15 min", pickup: "Within 55 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long does pickup take from JVC?", a: "Within 60 minutes of WhatsApp confirmation during business hours. JVC is on the daily courier loop, so most pickups land inside the hour even though it's 16 km from the workshop." },
      { q: "I work from home in JVC - can you repair the same day?", a: "Yes for in-stock parts - screen, battery, keyboard, trackpad. Book a morning pickup and the MacBook is usually back the same evening, so you lose hours, not days." },
      { q: "Do you collect from both the towers and the townhouses?", a: "Yes. We collect from any JVC apartment tower lobby or townhouse gate across Districts 10 to 16 - just send the building name or district on WhatsApp." },
      { q: "Can the courier meet me at Circle Mall instead?", a: "Yes. If you're already out, meet the courier at the Circle Mall parking or a cafe inside - tell us the time and we'll be there." },
      { q: "I spilled coffee on my MacBook at home in JVC. What now?", a: "Power it off, don't charge it, and WhatsApp us. We'll arrange an emergency pickup, ultrasonic-clean the logic board, and quote the repair in writing. Most spills are recoverable if we get it within 24 hours." },
      { q: "Do you charge extra for JVC pickup?", a: "No. Pickup and return delivery are completely free from every JVC address. You only pay for the repair, agreed in writing before any work starts." },
      { q: "Why is pickup a bit slower than from Marina or Al Barsha?", a: "Distance - JVC is about 16 km from our Media City workshop, versus 4 km for Al Barsha. We run a daily JVC loop to keep the service free; message us earlier in the day for the quickest slot." },
      { q: "Can you also fix my iPhone or iPad on the same visit?", a: "Yes - multi-device pickups are bundled into one collection, one quote and one delivery. Handy for households with a MacBook plus an iPhone or iPad." },
    ],
    reviewIndexes: [3, 8, 12, 17, 21, 25],
  },
  {
    slug: "dubai-hills",
    area: "Dubai Hills Estate",
    short: "Dubai Hills",
    driveTime: "18 minutes",
    metroNote: "Dubai Hills is not yet on the Metro network - free pickup and delivery is the practical option for repairs.",
    pickupWindow: "Within 60 minutes",
    landmarks: ["Dubai Hills Mall", "Dubai Hills Golf Club", "Kings College Hospital", "Park Heights", "Sidra & Maple villas", "Dubai Hills Park"],
    landmarkLine: "Around Dubai Hills Mall, the Golf Club and the Sidra, Maple and Park Heights communities.",
    intro:
      "Dubai Hills Estate is Emaar's flagship master community off Al Khail Road - villas, townhouses and the Park Heights apartment cluster wrapped around Dubai Hills Mall and a championship golf course, about 18 minutes from our Media City workshop. It's an affluent, family-heavy area where a single household often runs several Apple devices at once. We collect MacBooks free of charge from any Dubai Hills address, deliver back the same day, and provide a written warranty of up to 12 months. Most Dubai Hills pickups are completed within 60 minutes of WhatsApp confirmation.",
    whyChoose:
      "Dubai Hills families value their time, and most would rather not drive a MacBook across town and wait in a service-centre queue. Our courier comes to the villa gate or the Park Heights lobby, collects the device - handed over by you, your driver or your housemaid, whoever's home - and returns it once it's repaired. Because homes here often have a MacBook, an iPhone and an iPad in use, we'll collect and quote the whole household's Apple devices in one visit. Diagnosis is free, the quote is in writing within 4 hours, and most common repairs come back the same evening.",
    pickupNote:
      "WhatsApp 055 741 3706 with your villa or building (e.g. 'Sidra 2' or 'Park Heights, Building 1') and the MacBook model. The courier confirms a 60-minute window and meets you at the gate or lobby. Authorise your driver or housemaid by name and we'll send a photo confirming the handover. Free pickup and free return from every Dubai Hills address.",
    travel: [
      { from: "Dubai Hills Mall / Park Heights", drive: "18 min", pickup: "Within 60 min" },
      { from: "Sidra villas",                    drive: "18 min", pickup: "Within 60 min" },
      { from: "Maple villas",                    drive: "19 min", pickup: "Within 65 min" },
      { from: "Golf Place / Parkway Vistas",     drive: "20 min", pickup: "Within 65 min" },
      { from: "Dubai Hills Golf Club",           drive: "18 min", pickup: "Within 60 min" },
      { from: "Al Khail Road edge",              drive: "16 min", pickup: "Within 55 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long does pickup take from Dubai Hills Estate?", a: "Within 60 minutes of WhatsApp confirmation during business hours. Dubai Hills is about 18 minutes from the workshop, and the courier runs a daily route through the community." },
      { q: "Can the courier collect from my villa gate or my driver?", a: "Yes. Authorise your driver or housemaid by name on WhatsApp and the courier collects from whoever's at the gate. We send a photo confirming the handover for your peace of mind." },
      { q: "We have several Apple devices at home - can you take them together?", a: "Yes. We bundle multi-device pickups: a MacBook, iPhone and iPad collected in one visit, with one combined quote and one delivery. Common for Dubai Hills households." },
      { q: "Do you charge extra for Dubai Hills pickup?", a: "No. Pickup and return delivery are completely free from every Dubai Hills address - Sidra, Maple, Park Heights, Golf Place and the rest. You only pay for the repair you approve." },
      { q: "My child spilled a drink on the MacBook at home. What should I do?", a: "Power it off, don't charge it, and WhatsApp us. We'll arrange an emergency pickup, ultrasonic-clean the logic board, and quote in writing. Most spills are recoverable if caught within 24 hours." },
      { q: "Can you set up or migrate data on a new MacBook at our home in Dubai Hills?", a: "Yes. We offer at-home setup and data migration - Apple ID, iCloud, email, apps and transfer from the old device. Quoted by the visit, usually 1-2 hours on site." },
      { q: "Can you repair the same day?", a: "Yes for in-stock parts - screen, battery, keyboard, trackpad. A morning pickup is typically back the same evening. Logic-board work takes 2-4 days." },
      { q: "Is the warranty the same for Dubai Hills customers?", a: "Yes - the same written warranty of up to 12 months, the same parts quality and the same technicians, wherever you are in Dubai." },
    ],
    reviewIndexes: [4, 9, 13, 16, 19, 23],
  },
  {
    slug: "discovery-gardens",
    area: "Discovery Gardens",
    short: "Discovery Gardens",
    driveTime: "15 minutes",
    metroNote: "Discovery Gardens Metro on the Red Line serves the community directly, and Ibn Battuta Metro is one stop away - the workshop is a 15-minute drive.",
    pickupWindow: "Within 50 minutes",
    landmarks: ["Ibn Battuta Mall", "Discovery Gardens Pavilion", "Mediterranean Cluster", "Mogul Cluster", "The Gardens", "Discovery Gardens Metro"],
    landmarkLine: "Around Ibn Battuta Mall and the Discovery Gardens Pavilion, across the themed clusters.",
    intro:
      "Discovery Gardens is a large, densely populated low-rise apartment community next to Ibn Battuta Mall, off Sheikh Zayed Road - about 15 minutes from our Media City workshop. Its themed clusters (Mediterranean, Mogul, Mesoamerican, Zen, Cactus and Contemporary) house thousands of tenants and families, and we collect MacBooks free of charge from any building, deliver back the same day, and provide a written warranty of up to 12 months. Most Discovery Gardens pickups are completed within 50 minutes of WhatsApp confirmation, and the courier runs a daily route through the clusters.",
    whyChoose:
      "Discovery Gardens is tenant-and-family territory where value matters - and our free door-to-door pickup means no taxi fare to a service centre and no waiting in a mall repair queue. Tell us your cluster and building on WhatsApp, hand the MacBook to the courier at the building entrance, and the diagnosis is back within 4 hours. Most screen, battery, keyboard and trackpad repairs are returned the same evening. The written quote is fixed before any work starts, there's no diagnostic fee, and if we can't fix it you pay nothing.",
    pickupNote:
      "WhatsApp 055 741 3706 with your cluster and building (e.g. 'Mediterranean Cluster, Building 14' or 'Zen Cluster') and the MacBook model. The courier confirms a 50-minute window and meets you at the building entrance or the Ibn Battuta Mall parking. Free pickup and free return from every Discovery Gardens address.",
    travel: [
      { from: "Mediterranean / Mogul Cluster", drive: "15 min", pickup: "Within 50 min" },
      { from: "Mesoamerican / Zen Cluster",    drive: "15 min", pickup: "Within 50 min" },
      { from: "Cactus / Contemporary Cluster", drive: "16 min", pickup: "Within 55 min" },
      { from: "Ibn Battuta Mall",              drive: "14 min", pickup: "Within 45 min" },
      { from: "The Gardens",                   drive: "15 min", pickup: "Within 50 min" },
      { from: "Discovery Gardens Pavilion",    drive: "15 min", pickup: "Within 50 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long does pickup take from Discovery Gardens?", a: "Within 50 minutes of WhatsApp confirmation during business hours. The courier runs a daily loop through the clusters, so pickups are often quicker than the headline window." },
      { q: "Which clusters do you collect from?", a: "All of them - Mediterranean, Mogul, Mesoamerican, Zen, Cactus and Contemporary, plus the neighbouring Gardens. Just send your cluster and building number on WhatsApp." },
      { q: "Do you charge extra for Discovery Gardens pickup?", a: "No. Pickup and return delivery are completely free from every Discovery Gardens address. You only pay for the repair, agreed in writing before we start." },
      { q: "Can you meet me at Ibn Battuta Mall instead?", a: "Yes. If you're already out, meet the courier at the Ibn Battuta Mall parking or a cafe inside - tell us the time on WhatsApp and we'll be there." },
      { q: "Can you repair the same day?", a: "Yes for in-stock parts - screen, battery, keyboard, trackpad. Book a morning pickup and the MacBook is usually back the same evening. Logic-board work takes 2-4 days." },
      { q: "Is there a minimum charge or diagnostic fee?", a: "No. The diagnosis is free and you only pay for the repair you approve in writing. If we can't fix it, you pay nothing - including the pickup." },
      { q: "What's the nearest Metro if I'd rather come in person?", a: "Discovery Gardens Metro serves the community directly. By car, Concord Tower in Media City is a 15-minute drive via Sheikh Zayed Road. Paid parking inside (AED 5/hour)." },
      { q: "Can you also repair my iPhone or iPad on the same visit?", a: "Yes - multi-device pickups are bundled into one collection, one quote and one delivery. Handy for households with a MacBook plus an iPhone or iPad." },
    ],
    reviewIndexes: [1, 6, 11, 16, 20, 24],
  },
  {
    slug: "motor-city",
    area: "Motor City",
    short: "Motor City",
    driveTime: "20 minutes",
    metroNote: "Motor City is not on the Metro network - free pickup and delivery is the practical option for repairs.",
    pickupWindow: "Within 60 minutes",
    landmarks: ["Dubai Autodrome", "First Avenue Mall", "Uptown Motor City", "Control Tower", "Green Community border", "Detroit House"],
    landmarkLine: "Around Dubai Autodrome and First Avenue Mall, across Uptown Motor City.",
    intro:
      "Motor City is a self-contained residential community wrapped around the Dubai Autodrome, off Mohammed Bin Zayed Road - about 20 minutes from our Media City workshop. Its low- and mid-rise apartments (Uptown Motor City, Foster's, Norton Court, Detroit House) and townhouses are home to families and professionals who value the quiet, parkside setting. We collect MacBooks free of charge from any Motor City building, deliver back the same day, and provide a written warranty of up to 12 months. Most Motor City pickups are completed within 60 minutes of WhatsApp confirmation.",
    whyChoose:
      "Motor City sits away from the Metro and the central repair shops, so a free door-to-door pickup is far easier than driving a MacBook into town. The courier comes to your building lobby or townhouse, collects the device, and returns it once it's fixed. Diagnosis is free, the written quote arrives within 4 hours, and most screen, battery, keyboard and trackpad repairs come back the same evening. The courier runs a daily route out to Motor City, Sports City and Production City, so pickup slots into the existing loop.",
    pickupNote:
      "WhatsApp 055 741 3706 with your building (e.g. 'Norton Court, Uptown Motor City' or 'Foster's') and the MacBook model. The courier confirms a 60-minute window and meets you at the building lobby or First Avenue Mall parking. Free pickup and free return from every Motor City address.",
    travel: [
      { from: "Uptown Motor City",       drive: "20 min", pickup: "Within 60 min" },
      { from: "First Avenue Mall",        drive: "20 min", pickup: "Within 60 min" },
      { from: "Foster's / Norton Court",  drive: "20 min", pickup: "Within 60 min" },
      { from: "Detroit House / Control Tower", drive: "21 min", pickup: "Within 65 min" },
      { from: "Dubai Autodrome",          drive: "20 min", pickup: "Within 60 min" },
      { from: "Green Community border",   drive: "22 min", pickup: "Within 65 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long does pickup take from Motor City?", a: "Within 60 minutes of WhatsApp confirmation during business hours. Motor City is about 20 minutes from the workshop and the courier runs a daily route out that way." },
      { q: "Do you collect from the townhouses as well as the apartments?", a: "Yes. We collect from any Motor City apartment lobby (Uptown, Foster's, Norton Court, Detroit House) or townhouse - just send the building name on WhatsApp." },
      { q: "Do you charge extra for Motor City pickup?", a: "No. Pickup and return delivery are completely free from every Motor City address. You only pay for the repair, agreed in writing before any work starts." },
      { q: "Can you repair the same day if I work from home in Motor City?", a: "Yes for in-stock parts - screen, battery, keyboard, trackpad. Book a morning pickup and the MacBook is usually back the same evening, so you're offline for hours, not days." },
      { q: "Can you meet me at First Avenue Mall?", a: "Yes. If you're already out, meet the courier at the First Avenue Mall parking - tell us the time on WhatsApp and we'll be there." },
      { q: "Why is pickup a bit slower than from Marina or Al Barsha?", a: "Distance - Motor City is around 25 km from our Media City workshop, versus 4 km for Al Barsha. We run a daily loop to keep the service free; message earlier in the day for the quickest slot." },
      { q: "I need data recovered from a MacBook that won't turn on. Can you help?", a: "Yes. Data recovery from dead MacBooks, including Apple Silicon SSD recovery via the secure board-link procedure, is one of our specialities. WhatsApp us and we'll quote and start within 24 hours." },
      { q: "Is the warranty the same for Motor City customers?", a: "Yes - the same written warranty of up to 12 months, the same parts quality and the same technicians, wherever you are in Dubai." },
    ],
    reviewIndexes: [2, 7, 12, 15, 19, 23],
  },
  {
    slug: "production-city",
    area: "Dubai Production City (IMPZ)",
    short: "Production City",
    driveTime: "20 minutes",
    metroNote: "Dubai Production City (IMPZ) is not on the Metro network - free pickup and delivery is the practical option for repairs.",
    pickupWindow: "Within 60 minutes",
    landmarks: ["City Centre Me'aisem", "Lago Vista", "Oakwood Residency", "Centrium Towers", "Dunes Village", "Dubai Production City"],
    landmarkLine: "Around City Centre Me'aisem and the Lago Vista and Centrium tower clusters.",
    intro:
      "Dubai Production City - still widely known as IMPZ (the International Media Production Zone) - is a mixed residential and media-business community off Sheikh Mohammed Bin Zayed Road, near Motor City and Sports City, about 20 minutes from our Media City workshop. Its apartment clusters (Lago Vista, Oakwood Residency, Centrium Towers, Dunes Village, Lakeside) are full of media professionals and families. We collect MacBooks free of charge from any Production City building, deliver back the same day, and provide a written warranty of up to 12 months. Most pickups here are completed within 60 minutes of WhatsApp confirmation.",
    whyChoose:
      "Production City runs on creative work - editors, designers and media teams whose MacBooks are their livelihood, and who can't afford days of downtime. Our free door-to-door pickup means the device never sits in a queue: the courier collects from your tower lobby, the diagnosis is back within 4 hours, and most screen, battery, keyboard and trackpad repairs are returned the same evening. We issue VAT invoices for the media companies based in the zone, and the courier runs a daily route through IMPZ, Motor City and Sports City.",
    pickupNote:
      "WhatsApp 055 741 3706 with your tower (e.g. 'Lago Vista C' or 'Centrium Tower 2, IMPZ') and the MacBook model. The courier confirms a 60-minute window and meets you at the tower lobby or City Centre Me'aisem parking. Free pickup and free return from every Production City address.",
    travel: [
      { from: "Lago Vista",            drive: "20 min", pickup: "Within 60 min" },
      { from: "Centrium Towers",       drive: "20 min", pickup: "Within 60 min" },
      { from: "Oakwood Residency",     drive: "20 min", pickup: "Within 60 min" },
      { from: "Dunes Village / Lakeside", drive: "21 min", pickup: "Within 65 min" },
      { from: "City Centre Me'aisem",  drive: "19 min", pickup: "Within 55 min" },
      { from: "IMPZ business district", drive: "20 min", pickup: "Within 60 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long does pickup take from Dubai Production City (IMPZ)?", a: "Within 60 minutes of WhatsApp confirmation during business hours. IMPZ is about 20 minutes from the workshop and the courier runs a daily route out that way." },
      { q: "Is Dubai Production City the same as IMPZ?", a: "Yes. IMPZ (International Media Production Zone) is the original name; Dubai Production City is the current one. People search both, and we cover the whole zone either way." },
      { q: "Can you bill my media company with a VAT invoice?", a: "Yes. We issue VAT invoices in the company name with our TRN and trade licence - common for the production houses, studios and agencies based in the zone." },
      { q: "Do you charge extra for Production City pickup?", a: "No. Pickup and return delivery are completely free from every IMPZ address. You only pay for the repair, agreed in writing before any work starts." },
      { q: "Can you repair the same day?", a: "Yes for in-stock parts - screen, battery, keyboard, trackpad. Book a morning pickup and the MacBook is usually back the same evening. Logic-board work takes 2-4 days." },
      { q: "Do you handle fleet repairs for a media company in IMPZ?", a: "Yes. Bulk discounts apply from 5 devices upwards. We collect them in one visit, run individual diagnostics, return one combined quote and deliver them back together." },
      { q: "Can you meet me at City Centre Me'aisem?", a: "Yes. If you're already out, meet the courier at the City Centre Me'aisem parking - tell us the time on WhatsApp and we'll be there." },
      { q: "Is the warranty the same for IMPZ customers?", a: "Yes - the same written warranty of up to 12 months, the same parts quality and the same technicians, wherever you are in Dubai." },
    ],
    reviewIndexes: [3, 8, 10, 14, 18, 22],
  },
  {
    slug: "arabian-ranches",
    area: "Arabian Ranches",
    short: "Arabian Ranches",
    driveTime: "22 minutes",
    metroNote: "Arabian Ranches is not on the Metro network - free pickup and delivery is the practical option for repairs.",
    pickupWindow: "Within 75 minutes",
    landmarks: ["Arabian Ranches Golf Club", "The Ranches Souk", "Dubai Polo & Equestrian Club", "Al Reem", "Saheel", "Mirador"],
    landmarkLine: "Around the Arabian Ranches Golf Club and The Ranches Souk, across the villa communities.",
    intro:
      "Arabian Ranches is one of Dubai's established premium villa communities, off Sheikh Mohammed Bin Zayed Road by the golf course and the Dubai Polo & Equestrian Club - about 22 minutes from our Media City workshop. Its villa enclaves (Al Reem, Saheel, Mirador, Alvorada, Palmera and the Ranches II and III phases) are family homes that often run several Apple devices at once. We collect MacBooks free of charge from any Arabian Ranches villa, deliver back the same day, and provide a written warranty of up to 12 months. Most Ranches pickups are completed within 75 minutes of WhatsApp confirmation.",
    whyChoose:
      "Arabian Ranches families value convenience and would rather not drive a MacBook across town and wait in a service-centre queue. The courier comes to the villa gate - handed over by you, your driver or your housemaid, whoever's home - collects the device, and returns it once repaired. Because Ranches homes usually have a MacBook, an iPhone and an iPad in use, we'll collect and quote the whole household's Apple devices in one visit. Diagnosis is free, the written quote arrives within 4 hours, and most common repairs come back the same evening.",
    pickupNote:
      "WhatsApp 055 741 3706 with your community and villa (e.g. 'Saheel 2' or 'Al Reem 3, Arabian Ranches') and the MacBook model. The courier confirms a 75-minute window and meets you at the villa gate. Authorise your driver or housemaid by name and we'll send a photo confirming the handover. Free pickup and free return from every Arabian Ranches address.",
    travel: [
      { from: "Al Reem",                  drive: "22 min", pickup: "Within 75 min" },
      { from: "Saheel / Mirador",         drive: "22 min", pickup: "Within 75 min" },
      { from: "Alvorada / Palmera",       drive: "23 min", pickup: "Within 75 min" },
      { from: "Arabian Ranches II",       drive: "24 min", pickup: "Within 80 min" },
      { from: "The Ranches Souk",         drive: "22 min", pickup: "Within 75 min" },
      { from: "Arabian Ranches Golf Club", drive: "22 min", pickup: "Within 75 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long does pickup take from Arabian Ranches?", a: "Within 75 minutes of WhatsApp confirmation during business hours. The Ranches is about 22 minutes from the workshop, and the courier runs a daily route out to the villa communities." },
      { q: "Can the courier collect from my villa gate or my driver?", a: "Yes. Authorise your driver or housemaid by name on WhatsApp and the courier collects from whoever's at the gate. We send a photo confirming the handover for your peace of mind." },
      { q: "We have several Apple devices at home - can you take them together?", a: "Yes. We bundle multi-device pickups: a MacBook, iPhone and iPad collected in one visit, with one combined quote and one delivery. Common for Arabian Ranches households." },
      { q: "Do you charge extra for Arabian Ranches pickup?", a: "No. Pickup and return delivery are completely free from every Ranches villa - Al Reem, Saheel, Mirador, Alvorada, Palmera and the Ranches II and III phases. You only pay for the repair you approve." },
      { q: "My child spilled a drink on the MacBook at home. What should I do?", a: "Power it off, don't charge it, and WhatsApp us. We'll arrange an emergency pickup, ultrasonic-clean the logic board, and quote in writing. Most spills are recoverable if caught within 24 hours." },
      { q: "Can you set up or migrate data on a new MacBook at our villa?", a: "Yes. We offer at-home setup and data migration - Apple ID, iCloud, email, apps and transfer from the old device. Quoted by the visit, usually 1-2 hours on site." },
      { q: "Can you repair the same day?", a: "Yes for in-stock parts - screen, battery, keyboard, trackpad. A morning pickup is typically back the same evening. Logic-board work takes 2-4 days." },
      { q: "Is the warranty the same for Arabian Ranches customers?", a: "Yes - the same written warranty of up to 12 months, the same parts quality and the same technicians, wherever you are in Dubai." },
    ],
    reviewIndexes: [0, 5, 13, 17, 21, 25],
  },
  {
    slug: "emirates-living",
    area: "Emirates Living",
    short: "Emirates Living",
    driveTime: "12 minutes",
    metroNote: "Dubai Internet City and DMCC Metro on the Red Line are the closest stations - the workshop is a 12-minute drive from the Emirates Living communities.",
    pickupWindow: "Within 40 minutes",
    landmarks: ["Emirates Hills", "The Springs Souk", "Meadows Village", "The Lakes", "Montgomerie Golf Course", "Emirates Golf Club"],
    landmarkLine: "Across Emirates Hills, The Springs, The Meadows and The Lakes, by the Montgomerie golf course.",
    intro:
      "Emirates Living is the cluster of established Emaar villa communities - Emirates Hills, The Springs, The Meadows and The Lakes - set around the Montgomerie golf course off Sheikh Zayed Road, just 12 minutes from our Media City workshop. These are family villas, many running several Apple devices at once, and we collect MacBooks free of charge from any Emirates Living address, deliver back the same day, and provide a written warranty of up to 12 months. Because the communities are so close to us, most pickups here are completed within 40 minutes of WhatsApp confirmation.",
    whyChoose:
      "Emirates Living families are close enough to us for a quick turnaround but would still rather not drive a MacBook out and wait in a service-centre queue. The courier comes to the villa gate - handed over by you, your driver or your housemaid - collects the device, and returns it once repaired. Since these homes usually have a MacBook, an iPhone and an iPad in use, we'll collect and quote the whole household's Apple devices in one visit. Diagnosis is free, the written quote arrives within 4 hours, and most common repairs come back the same evening.",
    pickupNote:
      "WhatsApp 055 741 3706 with your community and villa (e.g. 'Springs 6' or 'Meadows 4') and the MacBook model. The courier confirms a 40-minute window and meets you at the villa gate. Authorise your driver or housemaid by name and we'll send a photo confirming the handover. Free pickup and free return from every Emirates Living address.",
    travel: [
      { from: "The Springs",        drive: "12 min", pickup: "Within 40 min" },
      { from: "The Meadows",        drive: "12 min", pickup: "Within 40 min" },
      { from: "The Lakes",          drive: "13 min", pickup: "Within 45 min" },
      { from: "Emirates Hills",     drive: "13 min", pickup: "Within 45 min" },
      { from: "The Springs Souk",   drive: "12 min", pickup: "Within 40 min" },
      { from: "Montgomerie / Golf border", drive: "12 min", pickup: "Within 40 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long does pickup take from Emirates Living?", a: "Within 40 minutes of WhatsApp confirmation during business hours. Emirates Hills, The Springs, The Meadows and The Lakes are all about 12-13 minutes from the workshop, so pickups are quick." },
      { q: "Which communities does this cover?", a: "Emirates Hills, The Springs, The Meadows and The Lakes - the whole Emirates Living cluster around the Montgomerie golf course. Just send your community and villa number on WhatsApp." },
      { q: "Can the courier collect from my villa gate or my driver?", a: "Yes. Authorise your driver or housemaid by name on WhatsApp and the courier collects from whoever's at the gate. We send a photo confirming the handover for your peace of mind." },
      { q: "We have several Apple devices at home - can you take them together?", a: "Yes. We bundle multi-device pickups: a MacBook, iPhone and iPad collected in one visit, with one combined quote and one delivery. Common for Emirates Living households." },
      { q: "Do you charge extra for Emirates Living pickup?", a: "No. Pickup and return delivery are completely free from every Springs, Meadows, Lakes and Emirates Hills villa. You only pay for the repair you approve." },
      { q: "My child spilled a drink on the MacBook at home. What should I do?", a: "Power it off, don't charge it, and WhatsApp us. We'll arrange a fast pickup, ultrasonic-clean the logic board, and quote in writing. Most spills are recoverable if caught within 24 hours." },
      { q: "Can you set up or migrate data on a new MacBook at our villa?", a: "Yes. We offer at-home setup and data migration - Apple ID, iCloud, email, apps and transfer from the old device. Quoted by the visit, usually 1-2 hours on site." },
      { q: "Is the warranty the same for Emirates Living customers?", a: "Yes - the same written warranty of up to 12 months, the same parts quality and the same technicians, wherever you are in Dubai." },
    ],
    reviewIndexes: [4, 9, 12, 16, 20, 24],
  },
];

// Overlay admin edits (prose + FAQs) per slug; structural fields stay from BASE_AREAS.
export const AREAS: AreaConfig[] = BASE_AREAS.map((a) => {
  const o = AREA_OVERRIDES[a.slug];
  return o ? ({ ...a, ...o } as AreaConfig) : a;
});
