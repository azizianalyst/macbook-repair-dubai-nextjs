// Dubai area landing-page configs. One source of truth - drives 8 pages.
// Each entry produces ~1,300+ visible words via AreaPageTemplate.

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

export const AREAS: AreaConfig[] = [
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
      "Dubai Marina is the closest dense residential cluster to the MacBook Repair Dubai workshop in Concord Tower, Media City. Most Marina towers - from Princess and Marina Crown to the Address Marina and Cayan - are a 10-minute drive up Sheikh Zayed Road, or 4 stops on the Red Line. We collect MacBooks from any Marina building free of charge, deliver back the same day, and provide a written 90-day warranty on every repair. Shafiq, the lead technician, has been repairing Marina residents' MacBooks since the towers first opened in 2007.",
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
      "Downtown Dubai - Burj Khalifa, Dubai Mall, Boulevard, Old Town, the Opera District - is 15 minutes from our workshop in Concord Tower, Media City via Sheikh Zayed Road. We collect MacBooks free of charge from any Downtown apartment, hotel, or office tower, deliver back the same day, and stand behind every repair with a written 90-day warranty. Most Downtown pickups are completed within 45 minutes of WhatsApp confirmation. The workshop has been the go-to repair partner for residents of Burj Vista, The Address, Standpoint, 29 Boulevard and the Old Town since the district was first occupied.",
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
      "Jumeirah Beach Residence (JBR) is one of the closest residential clusters to our Media City workshop - only 8 minutes by car along Al Sufouh Road, or two tram stops + a short Metro ride. We collect MacBooks free of charge from any JBR tower (Rimal, Bahar, Sadaf, Shams, Amwaj, Murjan), deliver back the same day, and provide a written 90-day warranty. Most JBR pickups are completed within 30 minutes of WhatsApp confirmation, often faster during the courier's morning loop along The Walk.",
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
      { q: "Do you sell pre-owned MacBooks for JBR holiday-let landlords?", a: "Yes - refurbished, certified, with a 90-day warranty. Useful for serviced apartments. WhatsApp for current stock and pricing." },
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
      "Business Bay is a high-density residential and commercial cluster south of Downtown - Executive Towers, Bay Square, Bay Avenue, the Damac Towers, the Burj Vista - 18 minutes from our workshop in Concord Tower, Media City via Sheikh Zayed Road and Al Khail Road. We collect MacBooks free of charge from any Business Bay tower or office, deliver back the same day, and provide a written 90-day warranty on every repair. Most Business Bay pickups are completed within 45 minutes of WhatsApp confirmation.",
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
      "Jumeirah - Jumeirah 1, 2 and 3, including the villa belt along Beach Road, La Mer, Sunset Mall and the Mercato area - is 10 minutes from our Media City workshop via Al Sufouh Road. We collect MacBooks free of charge from any Jumeirah villa or apartment, deliver back the same day, and provide a written 90-day warranty. Most Jumeirah pickups are completed within 30 minutes of WhatsApp confirmation. We have a daily route through Jumeirah, so pickups slot into the existing courier loop.",
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
      { q: "Do you sell refurbished MacBooks for the school-run-and-back-up family setup?", a: "Yes - certified refurbished MacBook Air and Pro models with a 90-day warranty, delivered to your villa for inspection. Pay only if you keep it." },
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
      "Jumeirah Lakes Towers (JLT) is one of the closest commercial-residential clusters to our workshop - 8 minutes by car or 3 Metro stops from DMCC to Media City. We collect MacBooks free of charge from any JLT tower (Almas, Lake Shore, Indigo, Saba, Goldcrest, Armada, Mag 214, Lake Terrace), deliver back the same day, and provide a written 90-day warranty. Most JLT pickups are completed within 30 minutes of WhatsApp confirmation, and the courier covers all 26 JLT clusters daily.",
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
      "Dubai International Financial Centre (DIFC) - Gate Building, Index Tower, Burj Daman, Currency House, ICD Brookfield Place - is 16 minutes from our Media City workshop via Sheikh Zayed Road. We collect MacBooks free of charge from any DIFC office or apartment, deliver back the same day, and provide a written 90-day warranty. Most DIFC pickups are completed within 45 minutes of WhatsApp confirmation. The courier knows the DIFC tower security protocols, including the visitor pass procedures at Gate Avenue and ICD Brookfield.",
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
      "Dubai Silicon Oasis (DSO) - Silicon Gate, Silicon Avenue, Cedre Villas, the Choithrams cluster, the universities - is 30 minutes from our Media City workshop via Sheikh Mohammed Bin Zayed Road. We collect MacBooks free of charge from any Silicon Oasis address, deliver back the same or next morning, and provide a written 90-day warranty. The courier runs a Silicon Oasis loop most weekday afternoons, so pickup is same-day if you message us before 2 pm.",
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
      { q: "Are you cheaper than the Apple Service Centre in Festival City?", a: "Roughly 40-60% cheaper for screen, battery and board repairs, with the same 90-day warranty and genuine or OEM-grade parts. Walk-in transparent pricing - no 'minimum service charge'." },
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
      "Dubai Internet City sits right next to our workshop. The two free zones share a border, so most pickups here take five minutes. We collect MacBooks free from any Internet City building, from the Microsoft and Oracle towers down to the smaller Building 1 to 27 clusters along the lagoon. The customers here are mostly companies - design studios, software teams, media firms running fleets of MacBook Pros that can't sit in a queue for a week. We diagnose for free, quote in writing within four hours, and return most repairs the same day, with a written 90-day warranty on the work. Shafiq has been servicing Internet City offices since the zone filled up.",
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
];
