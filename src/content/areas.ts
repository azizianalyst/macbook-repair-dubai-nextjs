// Dubai area landing-page configs. One source of truth - drives every Dubai
// area page (route + view + meta via dynamic-meta.ts, which iterates AREAS).
// Each entry produces ~1,300+ visible words via AreaPageTemplate. Since 2026-10-15 every page is
// a guide to getting a Mac repaired from that area: walk in, a courier the customer books, or a
// paid onsite visit. Free pickup/collection/delivery has ended and must not appear.
// The editable prose + FAQs are overlaid per-slug from /admin/locations (sparse overrides baked into
// areas-overrides.generated.ts); structural fields (landmarks, travel, topServices, reviewIndexes)
// stay here. AREAS = BASE_AREAS merged with the overrides.
import { AREA_OVERRIDES } from "./areas-overrides.generated";

export type AreaTravelRow = {
  from: string;
  drive: string;
  // Legacy: the old free-pickup turnaround column. Pickup ended 2026-10-15; no longer rendered.
  pickup?: string;
};

export type AreaFAQ = { q: string; a: string };

export type AreaConfig = {
  slug: string;             // URL slug, e.g. "dubai-marina"
  area: string;             // Display name, e.g. "Dubai Marina"
  short: string;            // Short variant for inline, e.g. "Marina"
  driveTime: string;        // Drive time from area to workshop
  metroNote: string;        // Public transport sentence (shown under the drive-time table)
  pickupWindow: string;     // LEGACY, not rendered: free pickup ended 2026-10-15. Kept because the
                            // admin locations API still reads the field.
  landmarks: string[];      // 4-6 landmarks within / next to the area
  landmarkLine: string;     // 1 sentence used in hero subtitle
  intro: string;            // 80-120 words
  whyChoose: string;        // 80-120 words
  pickupNote: string;       // 50-90 words: how to get a Mac to the workshop from this area
                            // (walk in, a courier the customer books, or a paid onsite visit).
                            // Field name kept for the admin locations API.
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
    metroNote: "The Dubai Tram runs through the Marina: ride it to the Palm Jumeirah stop, a 3-minute walk from Concord Tower.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Marina Mall", "JBR Beach", "Sheraton Grand Hotel", "Pier 7", "Marina Walk", "Address Marina"],
    landmarkLine: "5 minutes from Marina Mall, JBR Beach, the Sheraton Grand and the Address Marina.",
    intro:
      "Ten minutes up Sheikh Zayed Road is all that separates most Dubai Marina towers from our workshop at Concord Tower, Dubai Media City. Princess Tower, Marina Crown, Cayan and the Address Marina all sit in that range, and Marina Gate is about twelve. So the simplest MacBook repair route from the Marina is to bring it in yourself: no appointment needed, parking on site, and the diagnosis costs nothing. Can't leave the apartment? Book a same-day courier app from your lobby and send it over, or ask on WhatsApp about a paid onsite visit.",
    whyChoose:
      "The Marina is the closest big residential cluster to our bench, which makes a walk-in realistic even on a work day. Shafiq, our lead technician, opens the Mac, tells you what failed and fixes the price in writing on WhatsApp before a screwdriver touches it. If it can't be fixed, you don't pay. Screens, batteries, keyboards and trackpads are often done the same day when the part is in stock. Logic boards are repaired here at component level, so they take longer, but your MacBook stays on one bench in Media City instead of being posted off somewhere.",
    pickupNote:
      "From a Marina tower, book a same-day courier on Careem Box or a similar app, hand the MacBook over at your lobby or the building's loading bay, and WhatsApp the tracking link to 055 741 3706 with your model and a photo of the fault. We message you when it lands on the bench. Driving in yourself? Head north on Sheikh Zayed Road and take the Media City exit. Need someone to come to you instead? Onsite repair is paid and only when a technician is free.",
    travel: [
      { from: "Dubai Marina (Marina Mall)", drive: "10 min" },
      { from: "Princess Tower / Cayan",     drive: "11 min" },
      { from: "JBR / Address The Walk",     drive: "8 min" },
      { from: "Marina Promenade",           drive: "9 min" },
      { from: "Pier 7 / Address Marina",    drive: "10 min" },
      { from: "Marina Gate towers",         drive: "12 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How do I get my MacBook from Dubai Marina to your workshop?", a: "Walk in. Concord Tower, Dubai Media City is about 10 minutes from Marina Mall by car, and you don't need an appointment for a diagnosis. If you can't come, book a same-day courier app and WhatsApp us the tracking link." },
      { q: "My MacBook is at my office in Marina Plaza or Al Habtoor Business Tower. Can I send it from there?", a: "Yes. Book the courier to your office reception instead of your apartment. WhatsApp us the building it's coming from, the model and the fault, and we'll look out for it." },
      { q: "Is there parking at Concord Tower if I drive over from the Marina?", a: "Yes, Concord Tower has parking on site. From the Marina, head north on Sheikh Zayed Road and take the Media City exit. The drive is about 10 minutes from most towers, 12 from Marina Gate." },
      { q: "Can my MacBook be fixed the same day if I bring it in from Marina?", a: "Often, yes. Screen, battery, keyboard and trackpad jobs can usually be finished the same day when the part is in stock. Component-level logic board work takes longer, and we'll give you a realistic estimate on WhatsApp." },
      { q: "I'm staying at the Sheraton Grand or the Address Marina. How do I get my laptop repaired?", a: "Ask the concierge to help you book a same-day courier, or book one yourself on your phone. WhatsApp us your name, the hotel and the tracking link. Once it's fixed, collect it, or we book a courier to bring it back to the hotel; we agree the details on WhatsApp." },
      { q: "Can a technician come to my Marina apartment?", a: "Sometimes. Onsite repair is a paid service and only happens when a technician is free. Message us the model and the fault first, and we'll quote the visit charge on WhatsApp before anything is booked." },
      { q: "I live in the Marina but work in DIFC. Where should I send my MacBook from?", a: "From wherever the Mac is that day. Book the courier from your DIFC office or your Marina tower, or drop it in on the way home, since Media City sits between the two along Sheikh Zayed Road." },
      { q: "What does a MacBook diagnosis cost in Dubai Marina?", a: "Nothing. The diagnosis is free and the repair price is fixed in writing on WhatsApp before work starts. If we can't fix it, you don't pay. Hardware repairs carry a written warranty of up to 12 months." },
    ],
    reviewIndexes: [0, 5, 8, 10, 13, 21],
  },
  {
    slug: "downtown-dubai",
    area: "Downtown Dubai",
    short: "Downtown",
    driveTime: "15 minutes",
    metroNote: "Start at Burj Khalifa/Dubai Mall on the Red Line. Ride to Al Fardan Exchange and walk about 15 minutes, or carry on to Sobha Realty and take the tram to the Palm Jumeirah stop, a 3-minute walk from us.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Burj Khalifa", "Dubai Mall", "Dubai Opera", "Souk Al Bahar", "Boulevard Plaza", "The Address Downtown"],
    landmarkLine: "10 minutes from Burj Khalifa, Dubai Mall, Dubai Opera and the DIFC border.",
    intro:
      "From Burj Khalifa, Dubai Mall or the Boulevard, Concord Tower in Dubai Media City is about a 15-minute drive along Sheikh Zayed Road. That puts MacBook repair within easy reach of Downtown Dubai residents in Burj Vista, Standpoint, 29 Boulevard and the Old Town. Walk in on any day we're open and the diagnosis is free, with no appointment needed. If the traffic around the Opera District isn't worth it, book a same-day courier app through your tower's concierge and send the Mac to us. A paid onsite visit is also possible when a technician is free.",
    whyChoose:
      "Downtown towers come with concierge desks, valet lanes and security, so carrying a laptop out of the building can feel like a small errand of its own. Plenty of residents leave the MacBook with concierge and let a courier app bring it over. Others drive in and hear the diagnosis in person. Either way the quote is fixed in writing on WhatsApp before any work, and no fix means no charge. We work on older Intel MacBooks and current Apple Silicon models alike, and logic boards are repaired at component level rather than swapped whole.",
    pickupNote:
      "Ask your concierge to hand the MacBook to the rider from a same-day courier app you've booked, or meet the courier at the valet drop-off yourself. WhatsApp 055 741 3706 with the tracking link, your building (say 'Burj Vista 1') and a photo of the fault. Driving in instead? Sheikh Zayed Road towards Media City takes about 15 minutes. For a paid onsite visit, ask on WhatsApp; it depends on a technician being free.",
    travel: [
      { from: "Burj Khalifa / The Address", drive: "15 min" },
      { from: "Dubai Mall",                 drive: "16 min" },
      { from: "Old Town / Souk Al Bahar",   drive: "17 min" },
      { from: "Burj Vista / Standpoint",    drive: "15 min" },
      { from: "Boulevard Plaza / 29 Blvd",  drive: "15 min" },
      { from: "Opera District",             drive: "16 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "What's the quickest way to get a MacBook from Downtown Dubai to you?", a: "If you can't come in, a same-day courier app is quickest: book it, hand the Mac over at concierge, and WhatsApp us the tracking link. If you can spare the time, walk in to Concord Tower, Dubai Media City with no appointment." },
      { q: "Can I send my MacBook from an office in Boulevard Plaza or Emaar Square?", a: "Yes. Book a courier to your office reception with the Concord Tower, Dubai Media City address, then WhatsApp us the model, the fault and the tracking link so we know it's on its way." },
      { q: "How long is the drive from Downtown Dubai to Dubai Media City?", a: "About 15 minutes from Burj Khalifa or Burj Vista, and 16 to 17 minutes from Dubai Mall or Souk Al Bahar, along Sheikh Zayed Road. There's parking on site at Concord Tower." },
      { q: "I'm a hotel guest in Downtown Dubai. How do I get my MacBook repaired?", a: "Ask your hotel's front desk to help book a same-day courier, or book one yourself, and WhatsApp us your name and the tracking link. If you have a free hour, coming in lets you hear the diagnosis first-hand." },
      { q: "How long does a MacBook screen replacement take if I bring it in myself?", a: "Screen, battery, keyboard and trackpad repairs can often be finished the same day when the part is in stock. Send your model on WhatsApp before you set off and we'll check stock. Board repairs take longer." },
      { q: "Can a technician come up to my Downtown apartment?", a: "Onsite repair is possible but it's paid, and it only happens when a technician is free. We quote the charge on WhatsApp before booking. Your building's visitor rules still apply, so check with concierge too." },
      { q: "I'm leaving Dubai in two days. Can my MacBook be fixed in time?", a: "Often, if it's a common repair and the part is in stock. Bring it in early or send it by courier, and tell us your flight date on WhatsApp. If the timing won't work, we'll tell you straight away." },
      { q: "Do you repair the latest Apple Silicon MacBook Pro models?", a: "Yes. We repair Intel and Apple Silicon MacBooks, including logic boards at component level. Send the exact model on WhatsApp and we'll tell you whether the part is in stock before you make the trip." },
    ],
    reviewIndexes: [1, 6, 9, 11, 14, 22],
  },
  {
    slug: "jbr",
    area: "JBR",
    short: "JBR",
    driveTime: "8 minutes",
    metroNote: "The Dubai Tram runs right past JBR. Ride it to the Palm Jumeirah stop, a 3-minute walk from Concord Tower.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["The Walk JBR", "The Beach Mall", "Movenpick Hotel JBR", "Rimal Towers", "Bahar Towers", "Sadaf Towers"],
    landmarkLine: "Adjacent to The Walk JBR and The Beach Mall, near Movenpick Hotel JBR.",
    intro:
      "Living in Jumeirah Beach Residence puts you about eight minutes by car from Concord Tower, Dubai Media City, along Al Sufouh Road. Rimal, Bahar, Sadaf, Shams, Amwaj and Murjan are all that close, and the beach hotels from the Movenpick to the Ritz-Carlton are a minute further at most. For MacBook repair from JBR, that makes driving in the obvious option: no appointment for a free diagnosis, and parking on site. If you'd rather not move the car on a busy beach weekend, send it with a same-day courier app, or ask on WhatsApp about a paid onsite visit.",
    whyChoose:
      "Beach life is hard on a MacBook. Sand works its way into the fan and under the keys, salt air and pool water corrode the board, and sunscreen leaves a greasy film on the keyboard and trackpad. Those are the faults JBR customers tend to bring us, and fixing them is bench work: opening the machine, cleaning the fans and ports, checking the logic board at component level. You get a free diagnosis and a price fixed in writing on WhatsApp before we start. If it can't be fixed, there's no charge, and hardware repairs carry a written warranty of up to 12 months.",
    pickupNote:
      "Book a same-day courier app to your tower lobby on The Walk side, hand the MacBook over, and WhatsApp 055 741 3706 the tracking link with your model and what happened to it (sand, a spill, a drop). Staying at a beach hotel? Reception can often hand it over for you. To drive in, take Al Sufouh Road towards Media City. If a technician is free, a paid onsite visit can be arranged too.",
    travel: [
      { from: "JBR The Walk",               drive: "8 min" },
      { from: "Rimal / Bahar / Sadaf",      drive: "8 min" },
      { from: "Movenpick / Sofitel JBR",    drive: "8 min" },
      { from: "Address Beach Resort",       drive: "9 min" },
      { from: "Hilton / Ritz Carlton JBR",  drive: "9 min" },
      { from: "JBR Amwaj / Shams / Murjan", drive: "8 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How do I get my MacBook from a JBR tower to your workshop?", a: "Drive it in. It's about 8 minutes along Al Sufouh Road to Concord Tower, Dubai Media City, with parking on site and no appointment needed. Or book a same-day courier app from your lobby and WhatsApp us the tracking link." },
      { q: "I'm staying at a JBR hotel like the Movenpick or Sofitel. Can I send my MacBook in?", a: "Yes. Book a same-day courier from your phone and ask reception to hand the Mac over, then WhatsApp us your name, room and the tracking link. When it's finished, we book a courier to bring it back to reception, or you collect it." },
      { q: "My MacBook fell on the sand at JBR Beach. Can it be saved?", a: "Usually. Sand in the vents and ports causes overheating and sticky keys but rarely kills the board on its own. Bring it in soon; we strip and clean the fans, heatsink and ports, then run a full diagnostic before quoting." },
      { q: "Pool water got on my MacBook in JBR. What should I do?", a: "Switch it off, don't charge it and don't shake it. WhatsApp us, then get it to the workshop as fast as you can, by car or a same-day courier. Liquid keeps corroding the board, so the sooner we open it, the better the odds." },
      { q: "Can I hand my MacBook to a courier at The Walk or The Beach Mall instead of my tower?", a: "If the courier app lets you set the meeting point there, yes, since you're the one booking it. Pick a hotel lobby or cafe on The Walk, hand over the MacBook, and WhatsApp us the tracking link." },
      { q: "Is there parking at Concord Tower when I drive in from JBR?", a: "Yes, you can park on site. From JBR it's roughly an 8-minute drive along Al Sufouh Road to Dubai Media City. A diagnosis doesn't need an appointment, so come any time during opening hours." },
      { q: "Can a technician come to my JBR apartment?", a: "Onsite repair exists, but it's paid and depends on a technician being free that day. Send the model and fault on WhatsApp and we'll quote the visit charge before you book. Sand cleaning is usually better done at the bench." },
      { q: "Can my MacBook be repaired the same day if I drop it off from JBR?", a: "For in-stock parts, often yes: screens, batteries, keyboards and trackpads. Bring it in early and tell us on WhatsApp what's wrong first so we can check the part. Liquid damage and board repairs take longer." },
    ],
    reviewIndexes: [2, 7, 10, 12, 15, 23],
  },
  {
    slug: "business-bay",
    area: "Business Bay",
    short: "Business Bay",
    driveTime: "18 minutes",
    metroNote: "From Business Bay station on the Red Line, ride to Al Fardan Exchange and walk about 15 minutes, or change to the tram at Sobha Realty and get off at Palm Jumeirah, a 3-minute walk away.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Bay Avenue", "Bay Square", "Executive Towers", "JW Marriott Marquis", "Business Central Towers", "The Opus"],
    landmarkLine: "5 minutes from Bay Avenue and the JW Marriott Marquis, on the Burj Khalifa side of the canal.",
    intro:
      "Executive Towers, Bay Square and Bay Avenue are about 18 minutes from Concord Tower, Dubai Media City, by Sheikh Zayed Road and Al Khail Road. Business Bay mixes offices and apartments south of Downtown, and most MacBook repair requests from here arrive in the middle of a work day. If you can step out, walk in: there's no appointment for the free diagnosis, and parking is on site. If you can't leave your desk, book a same-day courier app to your office reception and WhatsApp us the tracking link. Onsite repair at the office is paid, and only when a technician is free.",
    whyChoose:
      "Office workers and freelancers in Business Bay can't lose a week to a dead laptop. A courier booked from reception gets the MacBook to our bench without you leaving the building, and you're not waiting on our schedule to send it. Shafiq checks it, the quote is fixed in writing on WhatsApp, and nothing starts until you say yes. Screens, batteries, keyboards and trackpads are often finished the same day when the part is in stock. Board faults take longer, because we repair them at component level instead of replacing the whole board. No fix, no charge.",
    pickupNote:
      "Book a same-day courier app to your office reception (for example 'Executive Tower H, reception' or 'Bay Square Building 3') and hand the MacBook over there. WhatsApp 055 741 3706 with the tracking link, the model and a photo of the fault. If you'd rather drive, Sheikh Zayed Road towards Media City takes about 18 minutes. A paid onsite visit can be booked when a technician is free.",
    travel: [
      { from: "Executive Towers",          drive: "18 min" },
      { from: "Bay Avenue / Bay Square",   drive: "18 min" },
      { from: "JW Marriott Marquis",       drive: "17 min" },
      { from: "Damac Towers by Paramount", drive: "19 min" },
      { from: "The Opus / ME Dubai",       drive: "19 min" },
      { from: "Business Central Towers",   drive: "18 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How do I send my MacBook from a Business Bay office to your workshop?", a: "Book a same-day courier app to your reception with the Concord Tower, Dubai Media City address, and WhatsApp us the tracking link, model and fault. You stay at your desk, and we message you once it's on the bench." },
      { q: "Is it worth driving from Business Bay to Media City for a MacBook repair?", a: "If you can spare the time, yes. It's about 18 minutes from Executive Towers or Bay Square, there's parking on site, and you hear the diagnosis in person. No appointment is needed." },
      { q: "Do you do onsite MacBook repairs at Business Bay offices?", a: "Sometimes. Onsite repair is paid and depends on a technician being free. A few jobs, like a battery swap, can be done at a desk; others need the bench. We quote the visit charge on WhatsApp before booking." },
      { q: "My MacBook died in the middle of a work day. How fast can it be fixed?", a: "Common repairs like a screen, battery, keyboard or trackpad can often be done the same day if the part is in stock. Send it in the morning by courier or bring it in, and tell us your deadline on WhatsApp." },
      { q: "Can I send my MacBook in after office hours?", a: "Time it so it reaches us while we're open: Monday to Thursday and Saturday 9 am to 7 pm, and Friday 9 am to 12 pm and 2 pm to 7 pm. We're closed on Sunday." },
      { q: "Can you repair several MacBooks from our Business Bay office?", a: "Yes. Send the models and faults on WhatsApp, then bring the machines over or send them in one courier booking. Each one gets its own diagnosis and a written quote before any work starts." },
      { q: "I need my MacBook working for a Monday meeting. What are my options?", a: "Saturday is a full working day for us, 9 am to 7 pm, and we're closed on Sunday. Get the Mac to us early on Saturday and in-stock repairs like a screen or battery can often be ready that day." },
      { q: "Can I send an iPhone or iPad from the office along with the MacBook?", a: "Yes. Alongside MacBooks we repair iMac, Mac mini, iPhone and iPad, and we do data recovery. Pack them together with a note of each fault, and every device gets its own quote." },
    ],
    reviewIndexes: [3, 8, 11, 13, 16, 24],
  },
  {
    slug: "jumeirah",
    area: "Jumeirah",
    short: "Jumeirah",
    driveTime: "10 minutes",
    metroNote: "Jumeirah isn't directly on the Metro, so driving in to Concord Tower, Dubai Media City or sending the Mac with a same-day courier app is simpler. If you do take the Metro, Al Fardan Exchange on the Red Line is about a 15-minute walk from us.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Mercato Mall", "Jumeirah Mosque", "Sunset Mall", "La Mer", "City Walk", "Box Park"],
    landmarkLine: "Near Mercato Mall and the Jumeirah Mosque, 10 minutes via Al Wasl Road.",
    intro:
      "Villas along Beach Road, apartments around Mercato and Sunset Mall, the streets of Jumeirah 1, 2 and 3: all of it sits 10 to 12 minutes from our workshop in Concord Tower, Dubai Media City. Umm Suqeim is closer still, and City Walk is around 13. For MacBook repair from Jumeirah, driving in usually wins. You don't need an appointment for the free diagnosis, and parking is on site. If nobody can leave the house, book a same-day courier app to the villa gate and WhatsApp us the tracking link. We can also send a technician to the house for a fee, when one is free.",
    whyChoose:
      "Jumeirah is a family area, and family homes often have several Macs plus an iPad or two. We repair all of them in one place: MacBook, iMac, iPhone and iPad, with data recovery when a drive fails. Juice on a keyboard or a screen cracked by a dropped toy is everyday bench work for us. You get a free diagnosis, a price fixed in writing on WhatsApp before we touch anything, and no charge if it can't be fixed. Since a courier app can take the Mac straight from your gate, you're not stuck waiting for a slot either.",
    pickupNote:
      "From a Jumeirah villa, book a same-day courier app to your gate and hand over the MacBook yourself, or leave it with whoever's at home. Then send 055 741 3706 the tracking link on WhatsApp, plus the model and a photo of what's wrong. Driving in takes about 10 minutes via Al Sufouh Road. If you'd prefer a technician to come to the house, that's a paid visit, booked only when one is free.",
    travel: [
      { from: "Jumeirah 1 / Mercato",     drive: "10 min" },
      { from: "Jumeirah 2",               drive: "10 min" },
      { from: "Jumeirah 3 / Sunset Mall", drive: "11 min" },
      { from: "La Mer",                   drive: "12 min" },
      { from: "City Walk / Box Park",     drive: "13 min" },
      { from: "Umm Suqeim",               drive: "9 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How do I get a MacBook repaired from a Jumeirah villa?", a: "Drive it in to Concord Tower, Dubai Media City, about 10 minutes away, and get a free diagnosis without an appointment. Or book a same-day courier app to your gate and WhatsApp us the tracking link." },
      { q: "Can my driver or housekeeper hand the MacBook to the courier?", a: "Yes. You book the courier, so it's up to you who hands it over at the gate. Just WhatsApp us the tracking link and your name, so we can match the Mac to you when it arrives." },
      { q: "Is there parking when I drive in from Jumeirah?", a: "Yes, there's parking on site at Concord Tower. From Jumeirah 1 or 2 it's about a 10-minute drive via Al Sufouh Road; from La Mer, allow closer to 12." },
      { q: "My child spilled juice on the MacBook. What do I do now?", a: "Turn it off, unplug it and don't try to charge it. WhatsApp us, then get it to the workshop quickly by car or courier. Sugary liquid corrodes the board, so the earlier it's cleaned, the more likely it's recoverable." },
      { q: "Will a technician come to my house in Jumeirah?", a: "It can be arranged, but onsite repair is paid and only booked when a technician is free. Send the model and fault on WhatsApp and we'll quote the visit charge first. Liquid damage usually still has to come to the bench." },
      { q: "We have several Macs and iPads at home. Can you check them together?", a: "Yes. Bring them in together or send them in one courier booking with a note of each fault. Every device gets its own free diagnosis and a written quote on WhatsApp before any work." },
      { q: "How long does a MacBook battery replacement take if I bring it in?", a: "Often the same day when the battery is in stock. Send the exact model on WhatsApp before you drive over and we'll check. Batteries carry a 3-month written warranty." },
      { q: "Can I hand my MacBook to a courier at a Jumeirah cafe instead of at home?", a: "If the courier app lets you set the meeting point at a cafe on Beach Road, yes, since you're the one booking it. Hand over the MacBook, then WhatsApp us the tracking link and the model." },
    ],
    reviewIndexes: [4, 9, 12, 14, 17, 25],
  },
  {
    slug: "jlt",
    area: "JLT",
    short: "JLT",
    driveTime: "8 minutes",
    metroNote: "Change from the Red Line to the tram at DMCC station, on the edge of JLT, and ride to the Palm Jumeirah stop, a 3-minute walk from Concord Tower.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Almas Tower", "DMCC Metro", "Cluster JLT", "Lake Shore Tower", "Armada Towers", "JLT Park"],
    landmarkLine: "Near Almas Tower, opposite DMCC Metro, across the lake from Marina.",
    intro:
      "Across the lake from the Marina, Jumeirah Lakes Towers is one of the closest clusters to Concord Tower, Dubai Media City, at about 8 minutes by car. Almas, Lake Shore, Indigo, Saba, Goldcrest, Armada, Mag 214 and Lake Terrace all fall within 8 to 10 minutes. That short hop makes walking in the natural choice for MacBook repair from JLT: no appointment for the free diagnosis, and parking on site. Stuck in the office? Book a same-day courier app from your tower reception and send it over, or ask on WhatsApp about a paid onsite visit.",
    whyChoose:
      "JLT runs on small offices: startups, freelancers, traders and agencies, many of them working off a single MacBook. When it breaks, the day stops. Being 8 minutes away means you can drive over and be back at your desk with a diagnosis, or send the Mac by courier and keep working on something else. The quote is fixed in writing on WhatsApp before any work starts. Screens, batteries, keyboards and trackpads are often finished the same day with the part in stock, and when a drive or board has failed, data recovery and component-level board repair happen at the same bench.",
    pickupNote:
      "Most JLT towers have a reception or security desk, which makes a courier handover easy. Book a same-day courier app to 'Almas Tower, reception' or wherever your office is, hand the MacBook over, and WhatsApp 055 741 3706 the tracking link, the model and a photo of the fault. Driving over takes about 8 minutes. A technician can also visit, for a fee, if one is free.",
    travel: [
      { from: "Almas Tower",                 drive: "8 min" },
      { from: "Cluster I, J, K (Lake Side)", drive: "9 min" },
      { from: "Lake Shore / Lake Terrace",   drive: "8 min" },
      { from: "Armada Towers",               drive: "10 min" },
      { from: "Indigo / Saba / Goldcrest",   drive: "9 min" },
      { from: "Mag 214 / Lake Point",        drive: "9 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "What's the fastest way to get my MacBook from JLT to your workshop?", a: "Drive it over. Concord Tower, Dubai Media City is about 8 minutes from Almas Tower, with parking on site and no appointment needed. If you can't leave the office, a same-day courier app is the next quickest." },
      { q: "Can I send my MacBook from a JLT office without leaving my desk?", a: "Yes. Book a same-day courier app to your tower reception, hand the Mac over there, and WhatsApp us the tracking link, the model and the fault. We'll message you once it's on the bench." },
      { q: "Where do I park when I come from JLT?", a: "There's parking on site at Concord Tower, Dubai Media City. From JLT it's a short drive of about 8 to 10 minutes depending on your cluster, and you can come straight up for a diagnosis without booking." },
      { q: "Can you fix a few MacBooks from our JLT office in one go?", a: "Yes. List the models and faults on WhatsApp, then drive them over or send them together. Every machine gets its own diagnosis and a written quote, so you approve each repair separately." },
      { q: "Will you explain the fault before I approve the repair?", a: "Yes. Every quote comes with a plain explanation: which part failed, what the repair involves and what the warranty covers. Nothing starts until you agree to the price in writing on WhatsApp." },
      { q: "My MacBook won't turn on and I need the data off it. Can you help?", a: "Yes. Data recovery from dead MacBooks is part of what we do, alongside component-level logic board repair. WhatsApp us the model and what happened, then bring it in or send it by courier for a free diagnosis." },
      { q: "Is an onsite repair at my JLT office possible?", a: "It's a paid service, and we only book it when a technician is free; the charge is quoted on WhatsApp first. Given how close JLT is, bringing the Mac over is usually quicker." },
      { q: "What are your opening hours if I come over from JLT after work?", a: "Monday to Thursday and Saturday, 9 am to 7 pm. Friday, 9 am to 12 pm and 2 pm to 7 pm. We're closed on Sunday, so plan for a weekday or a Saturday." },
    ],
    reviewIndexes: [0, 4, 9, 13, 18, 22],
  },
  {
    slug: "difc",
    area: "DIFC",
    short: "DIFC",
    driveTime: "16 minutes",
    metroNote: "From Financial Centre station on the Red Line, ride to Al Fardan Exchange and walk about 15 minutes, or change to the tram at Sobha Realty for the Palm Jumeirah stop, a 3-minute walk away.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Gate Building", "Index Tower", "Burj Daman", "ICD Brookfield Place", "Gate Avenue", "Currency House"],
    landmarkLine: "10 minutes from the Gate Building, near Index Tower and ICD Brookfield Place.",
    intro:
      "A 16-minute drive along Sheikh Zayed Road separates the Dubai International Financial Centre from our workshop at Concord Tower, Dubai Media City. That covers Gate Village, Index Tower, Burj Daman, Currency House and the Gate Avenue apartments, with ICD Brookfield Place about a minute further. For MacBook repair from DIFC, a same-day courier app booked from your office reception is often the easier route, since you don't have to leave the building. If you'd rather hand it over yourself, walk in without an appointment. A paid onsite visit is possible on days a technician is free.",
    whyChoose:
      "DIFC tenants - law firms, banks, asset managers, fintechs - keep client work on their MacBooks, so what happens to the machine on the bench matters. Most hardware repairs, like a screen, battery or keyboard, don't need your macOS login, and we'll only ask for it if you approve software work. The diagnosis is free, the quote is fixed in writing before anything starts, and in-stock repairs are often done the same day. We're an independent workshop, and logic boards are repaired here at component level rather than shipped elsewhere.",
    pickupNote:
      "Book a same-day courier app to your office reception or the tower's visitor desk, for example 'Index Tower, level 35 reception'. Hand the MacBook over in a sealed sleeve if you like, then WhatsApp 055 741 3706 the tracking link, the model and a photo of the fault. Driving in is about 16 minutes on Sheikh Zayed Road. An onsite visit is paid and depends on a technician being free.",
    travel: [
      { from: "Gate Building / Gate Village", drive: "16 min" },
      { from: "Index Tower",                  drive: "16 min" },
      { from: "Burj Daman",                   drive: "16 min" },
      { from: "ICD Brookfield Place",         drive: "17 min" },
      { from: "Currency House",               drive: "16 min" },
      { from: "Gate Avenue residential",      drive: "16 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How can I get my MacBook repaired from a DIFC office?", a: "Book a same-day courier app to your office reception and WhatsApp us the tracking link, the model and the fault. Or walk in at Concord Tower, Dubai Media City, about 16 minutes away, without an appointment." },
      { q: "Do you need my password to repair my MacBook?", a: "For most hardware repairs, like a screen, battery or keyboard, no. We only ask if a software job such as a macOS reinstall is needed, and only after you approve it. Tell us on WhatsApp if the drive is encrypted." },
      { q: "Can I drive from DIFC to Media City and hand the MacBook over myself?", a: "Yes. It's about 16 minutes on Sheikh Zayed Road, with parking on site at Concord Tower, and you hear the diagnosis in person. Common repairs can often be finished the same day if the part is in stock." },
      { q: "Can my MacBook be repaired before a court hearing or board meeting?", a: "Tell us the deadline on WhatsApp before you send it. Screens and batteries with the part in stock can often be done the same day, and we'll say up front if a board fault won't fit your timeline." },
      { q: "Can I send iPhones and iPads from the same DIFC office?", a: "Yes. We repair iPhone and iPad as well as MacBook, iMac and Mac mini. Send them together with a note of each fault, and each device gets its own written quote on WhatsApp." },
      { q: "Is onsite MacBook repair possible in a DIFC tower?", a: "It's a paid service, booked only when a technician is free, with the charge quoted on WhatsApp first. Your building's visitor screening still applies, and for most faults the bench is faster." },
      { q: "Can my assistant send the MacBook to you on my behalf?", a: "Yes. Whoever books the courier just needs to WhatsApp us the tracking link and the owner's name, so the Mac is matched to the right person when it reaches Concord Tower." },
      { q: "What warranty comes with a MacBook repair?", a: "A written warranty of up to 12 months on hardware repairs, with 90 days on screens and 3 months on batteries. The terms sit on the written quote, so your firm has them before approving the work." },
    ],
    reviewIndexes: [1, 5, 10, 14, 19, 23],
  },
  {
    slug: "silicon-oasis",
    area: "Silicon Oasis",
    short: "Silicon Oasis",
    driveTime: "30 minutes",
    metroNote: "Silicon Oasis is not on the Metro network. Driving in to Concord Tower, Dubai Media City takes about 30 minutes, or send your Mac with a same-day courier app. Coming by Metro from elsewhere? Al Fardan Exchange on the Red Line is about a 15-minute walk from us.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["DSO HQ", "Cedre Shopping Centre", "Silicon Avenue", "Silicon Gate", "Choithrams DSO", "Rochester Institute"],
    landmarkLine: "Near DSO HQ, opposite Cedre Shopping Centre, around the Silicon Avenue residential cluster.",
    intro:
      "Half an hour on Sheikh Mohammed Bin Zayed Road gets you from Dubai Silicon Oasis to our workshop at Concord Tower, Dubai Media City. That holds from Silicon Gate, Silicon Avenue, Cedre Villas and the Choithrams area, and it's a couple of minutes more from Semmer Villas and Arabella. It's a proper drive, so for MacBook repair from Silicon Oasis a same-day courier app is often the practical choice: book it, hand the Mac over, WhatsApp us the tracking link. If you're crossing town anyway, walk in without an appointment. Onsite repair is an option too, paid, when a technician has time.",
    whyChoose:
      "Silicon Oasis is home to people who know their hardware: students and staff at Rochester and Heriot-Watt, software engineers, startup teams in the tech park. Customers from here often arrive with the fault already worked out. We treat the free diagnosis as a check on that, not a sales pitch. Quotes are itemised and fixed in writing on WhatsApp, the warranty is written against the specific repair, and logic boards are repaired at component level. If the Mac can't be fixed, you don't pay.",
    pickupNote:
      "Book a same-day courier from your building lobby or villa gate, for instance 'Silicon Gate 1' or 'Cedre Villas', using Careem Box or any similar app. Hand the MacBook over, then message 055 741 3706 on WhatsApp with the tracking link, your model and a clear photo of the fault. With a drive of about 30 minutes each way, the courier saves you real time from here. Paid onsite repair depends on whether a technician is free that day.",
    travel: [
      { from: "Silicon Gate / Silicon Avenue",     drive: "30 min" },
      { from: "Cedre Villas",                      drive: "30 min" },
      { from: "Choithrams DSO area",               drive: "30 min" },
      { from: "Rochester Institute / Heriot-Watt", drive: "31 min" },
      { from: "DSO HQ / Tech Park",                drive: "30 min" },
      { from: "Semmer Villas / Arabella",          drive: "32 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "What's the easiest way to get a MacBook repaired from Silicon Oasis?", a: "Usually a same-day courier app: book it from your door, hand the Mac over and WhatsApp us the tracking link, with no waiting on us. If you'd rather drive, it's about 30 minutes to Concord Tower, Dubai Media City." },
      { q: "Can I send my MacBook from an office in the DSO Tech Park?", a: "Yes. Book the courier to your office reception with the Concord Tower, Dubai Media City address, then WhatsApp us the tracking link along with the model and the fault." },
      { q: "Is the drive from Silicon Oasis to Media City worth it?", a: "If you want to hear the diagnosis in person, yes. It's about 30 minutes on Sheikh Mohammed Bin Zayed Road, there's parking on site, and no appointment is needed. For a screen or battery, check stock on WhatsApp first." },
      { q: "I'm a student at Rochester or Heriot-Watt. How do I send my MacBook in?", a: "Book a same-day courier app from your campus or accommodation and WhatsApp us the tracking link, your name and the fault. The diagnosis is free, and if the Mac can't be fixed you pay nothing." },
      { q: "Can a technician visit my villa in Cedre or Semmer?", a: "Possibly. Onsite visits are paid and happen only when a technician is free. Send the model and fault on WhatsApp and we'll quote the charge before you book. Board faults still need the workshop bench." },
      { q: "How does my MacBook get back to Silicon Oasis after the repair?", a: "Once it's repaired, we book a courier to bring it back to you, arranged on WhatsApp. If you prefer, you can come and fetch it yourself from Concord Tower during opening hours." },
      { q: "Can I wait for the repair if I drive in from Silicon Oasis?", a: "For in-stock screen, battery, keyboard and trackpad repairs, often yes, since many finish the same day. Message your model on WhatsApp before you leave so we can check the part. Board repairs take longer." },
      { q: "Is it cheaper than taking my MacBook to Apple?", a: "Compare for yourself. We quote after a free diagnosis and before any work, so you can set our price against Apple's. Out of warranty we repair logic boards at component level, with a written warranty of up to 12 months (90 days on screens, 3 months on batteries)." },
    ],
    reviewIndexes: [2, 7, 11, 15, 20, 24],
  },
  {
    slug: "internet-city",
    area: "Dubai Internet City",
    short: "Internet City",
    driveTime: "5 minutes",
    metroNote: "From Dubai Internet City station, ride the Red Line one stop to Al Fardan Exchange and walk about 15 minutes, or change to the tram at Sobha Realty and get off at Palm Jumeirah, a 3-minute walk from Concord Tower.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Microsoft Building", "Oracle Building", "Cisco Building", "Grosvenor House", "Dubai Internet City Metro", "Building 1-27 cluster"],
    landmarkLine: "Right next door - minutes from the Microsoft, Oracle and Cisco buildings and Grosvenor House.",
    intro:
      "Our nearest neighbour is Dubai Internet City. Concord Tower, Dubai Media City is about five minutes from the Microsoft, Oracle and Cisco buildings and the Building 1 to 27 clusters along the lagoon, so MacBook repair from here usually means bringing the Mac over yourself. Walk in, no appointment needed, and the diagnosis is free. Most of the customers here are companies: design studios, software teams and media firms with MacBook Pros that can't sit in a queue for a week. If nobody can step out, book a same-day courier app from reception, or ask about a paid onsite visit.",
    whyChoose:
      "Only Media City itself is closer to our bench than Internet City, and that changes how a repair works. A designer can bring the MacBook over at lunch, hear what Shafiq finds, and head back to the office with a written quote on WhatsApp. Plenty of what comes from here is team hardware: a studio's MacBook Pro with a failing screen, a build machine that died before a deadline. Common screens and batteries are often fixed the same day when the part is in stock, and logic boards are repaired at component level. There's no ticket to raise and no appointment to wait for.",
    pickupNote:
      "From Internet City, just bring it over: it's about five minutes to Concord Tower, Dubai Media City, and you can come straight up for a diagnosis. Send the model and a photo of the fault to 055 741 3706 first so we can check parts. If the machine can't leave with you, book a same-day courier app from your building reception or IT desk and WhatsApp us the tracking link. Paid onsite visits depend on a technician being free.",
    travel: [
      { from: "Internet City (Microsoft / Oracle)", drive: "5 min" },
      { from: "Building 1-9 cluster",               drive: "5 min" },
      { from: "Grosvenor House / lagoon side",      drive: "6 min" },
      { from: "Knowledge Park border",              drive: "4 min" },
      { from: "Media City border",                  drive: "3 min" },
      { from: "Barsha Heights (Tecom) edge",        drive: "6 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How do I get my MacBook to you from Dubai Internet City?", a: "Bring it over. Concord Tower, Dubai Media City is about five minutes away, and no appointment is needed for a free diagnosis. If you can't step out, book a same-day courier app from reception and WhatsApp us the tracking link." },
      { q: "Do you repair company MacBook fleets from Internet City offices?", a: "Yes, a lot of our work here is team machines. Bring several over at once or send them together, list the models and faults on WhatsApp, and each one gets its own diagnosis and written quote." },
      { q: "Can our IT team send a MacBook straight from the IT room?", a: "Yes. Book a same-day courier app to the IT desk or reception, label the Mac with a name or ticket number, and WhatsApp us the tracking link so we can match it when it arrives." },
      { q: "Can I drop my MacBook off at lunch and have it back the same day?", a: "Often, for in-stock parts: screens, batteries, keyboards and trackpads. Bring it in early and check the part on WhatsApp before you come over. Component-level logic board repairs take longer." },
      { q: "Is there parking at Concord Tower if I drive from Internet City?", a: "There is, right at the tower. From Internet City it's a 3 to 5 minute drive; take the Media City exit off Sheikh Zayed Road. At that distance, coming in is often quicker than booking anything." },
      { q: "Can a technician come to our office in Internet City?", a: "Onsite repair is paid and depends on a technician being free, and we quote the charge on WhatsApp before booking. With the workshop this close, bringing the Mac in is usually faster." },
      { q: "Our MacBook holds company data. Can we keep it under our control during the repair?", a: "Bring it in yourself and hear the diagnosis in person. Most hardware repairs, like a screen or battery, don't need your macOS login. Tell us your company's requirements on WhatsApp before you come." },
      { q: "Do you charge to look at a MacBook?", a: "No. The diagnosis is free, the repair price is agreed in writing on WhatsApp before work starts, and if it can't be fixed you pay nothing. The work comes with a written warranty of up to 12 months on hardware." },
    ],
    reviewIndexes: [3, 8, 13, 17, 19, 25],
  },
  {
    slug: "deira",
    area: "Deira",
    short: "Deira",
    driveTime: "25 minutes",
    metroNote: "Union station on the Red and Green Lines is the closest. The workshop is about a 25-minute drive, or take the Red Line to Al Fardan Exchange and walk about 15 minutes.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Gold Souk", "Spice Souk", "Deira City Centre", "Union Square", "Naif Souk", "Al Rigga"],
    landmarkLine: "Serving Gold Souk, Spice Souk, Deira City Centre, Union Square and Al Rigga.",
    intro:
      "Deira is one of Dubai's oldest districts, home to the Gold Souk, the Spice Souk, Naif Souk and Deira City Centre. From here our workshop at Concord Tower, Dubai Media City is a 22 to 27 minute drive, depending on where you start. For MacBook repair from Deira, a same-day courier app is often the easier route: book it from your apartment on Al Rigga Road or your shop in the souk, then WhatsApp us the tracking link. You can also drive or take a taxi in, with no appointment needed. When a technician is free, a paid onsite visit is another option.",
    whyChoose:
      "Deira runs on trade, and plenty of trading companies here keep their accounts, orders and stock lists on one MacBook. When it fails, the business waits. We give a free diagnosis and a quote fixed in writing on WhatsApp before anything starts, and if it can't be fixed you pay nothing. Logic boards are repaired at component level, data can be recovered from a dead drive, and the same written warranty of up to 12 months on hardware applies whether it's a MacBook Air or a MacBook Pro 16. Sending it by courier means you don't lose a morning in traffic.",
    pickupNote:
      "From Deira, book Careem Box or another same-day courier app to your building, such as 'Al Rigga Road, near Deira City Centre', or to your shop's back office in the souk. Hand the MacBook over and WhatsApp 055 741 3706 the tracking link, the model and a photo of the fault. If you're driving in, allow about 25 minutes. Onsite repair is paid and only booked when a technician is free.",
    travel: [
      { from: "Gold Souk / Spice Souk", drive: "25 min" },
      { from: "Deira City Centre",      drive: "22 min" },
      { from: "Al Rigga Road",          drive: "23 min" },
      { from: "Naif Souk",              drive: "26 min" },
      { from: "Union Square",           drive: "24 min" },
      { from: "Al Hamriya",             drive: "27 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How do I send my MacBook from Deira to your workshop?", a: "Book a same-day courier app from your building or shop, hand over the Mac and WhatsApp us the tracking link with the model and fault. It's the fastest route if you can't come in, and there's no waiting on us." },
      { q: "How long will my MacBook repair take once it reaches you?", a: "Most screen, battery, keyboard and trackpad repairs are finished the same day when the part is in stock. Logic board work takes longer. We give you an estimated time on WhatsApp before you send the device." },
      { q: "Can I send a MacBook from a Deira trading company office?", a: "Yes. Book the courier to your office reception with the Concord Tower, Dubai Media City address, and WhatsApp us the company name and tracking link so we know whose Mac has arrived." },
      { q: "Do you charge for a MacBook diagnosis?", a: "No. The diagnosis is free and you only pay for a repair you approve in writing on WhatsApp. If we can't fix it, you pay nothing." },
      { q: "I live in Al Nahda or Al Qusais. Can I still send my MacBook to you?", a: "Yes. Sending it works the same from anywhere in Dubai: book a same-day courier app, hand over the Mac and WhatsApp us the tracking link. Or drive in to Concord Tower if you'd rather hand it over yourself." },
      { q: "Can I take a taxi from Deira to drop off my MacBook?", a: "Yes. Concord Tower, Dubai Media City is roughly 22 to 25 minutes by road from Deira City Centre. No appointment is needed for a diagnosis, and if you drive yourself, there's parking on site." },
      { q: "Does the warranty of up to 12 months apply to Deira customers?", a: "Yes. The same written warranty applies wherever you send the Mac from: up to 12 months on hardware repairs, 90 days on screens and 3 months on batteries." },
      { q: "Can a technician come to my shop in the souk?", a: "Onsite repair is a paid service, and it's only booked when a technician is free. Message the model and fault on WhatsApp and we'll quote the visit charge before you book. Many repairs still need the workshop bench." },
    ],
    reviewIndexes: [1, 4, 9, 14, 18, 22],
  },
  {
    slug: "bur-dubai",
    area: "Bur Dubai",
    short: "Bur Dubai",
    driveTime: "20 minutes",
    metroNote: "BurJuman on the Red and Green Lines is the closest station. It's a 20-minute drive to the workshop, or ride the Red Line from BurJuman to Al Fardan Exchange and walk about 15 minutes.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["BurJuman Centre", "Meena Bazaar", "Al Fahidi Fort", "Dubai Museum", "Karama Market", "Al Mankhool"],
    landmarkLine: "Covering BurJuman, Meena Bazaar, Al Fahidi, Dubai Museum, and Al Mankhool.",
    intro:
      "From the Al Fahidi lanes by the Creek to the towers around BurJuman Centre, Bur Dubai packs hotels, old souks and apartment blocks into a few crowded streets. For MacBook repair, our workshop at Concord Tower, Dubai Media City is about a 20-minute drive away. People from Al Mankhool, Al Raffa and Khalid Bin Al Waleed Road can drive in and walk up without an appointment, and the diagnosis is free. If you can't leave the shop or the hotel, book a same-day courier app and send the Mac over, or ask on WhatsApp about a paid onsite visit.",
    whyChoose:
      "Hotel guests on Khalid Bin Al Waleed Road and office staff near BurJuman usually want one thing: the Mac working again before the next meeting or flight. We fix the quote in writing on WhatsApp before any work starts, and the diagnosis costs nothing. Screen, battery, keyboard and trackpad jobs are often finished the same day if the part is on the shelf. Board faults take longer because Shafiq repairs them at component level instead of swapping the whole board. If it can't be fixed, there's no charge, and hardware repairs carry a written warranty of up to 12 months.",
    pickupNote:
      "Drive out along Sheikh Zayed Road toward Media City; it's about 20 minutes from BurJuman outside rush hour, and there's parking on site at Concord Tower. Staying in a hotel? Ask reception to hand the MacBook to a Careem Box driver you've booked, then WhatsApp 055 741 3706 the tracking link with your model and a photo of the fault. A paid onsite visit is possible when a technician is free.",
    travel: [
      { from: "BurJuman Centre",          drive: "20 min" },
      { from: "Al Fahidi / Dubai Museum", drive: "22 min" },
      { from: "Meena Bazaar",             drive: "21 min" },
      { from: "Al Mankhool",              drive: "19 min" },
      { from: "Khalid Bin Al Waleed Rd",  drive: "20 min" },
      { from: "Al Raffa",                 drive: "23 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Can a Bur Dubai hotel reception send my MacBook to you?", a: "Yes. Book a same-day courier app, leave the Mac at reception in a sealed bag with your name on it, and WhatsApp us the tracking link. We confirm when it reaches the bench, and once it's fixed we book a courier to take it back to the hotel." },
      { q: "How do I get to Concord Tower from Bur Dubai by car?", a: "Take Sheikh Zayed Road toward Dubai Media City. It's roughly a 20-minute drive from BurJuman or Al Mankhool, longer at peak times. There's parking on site, and you can walk in for a diagnosis without booking." },
      { q: "Is same-day MacBook repair possible from Bur Dubai?", a: "Often, yes. Screens, batteries, keyboards and trackpads can usually be finished the same day when the part is in stock, so bring it in early. Logic board repairs take longer, and we'll give you a realistic time on WhatsApp." },
      { q: "Do you cover Karama as well?", a: "Karama has its own page, but the options are the same: walk in at Concord Tower, Dubai Media City, send the Mac with a courier app you book, or ask about a paid onsite visit. WhatsApp us your area and model to start." },
      { q: "Can a technician come to my Al Mankhool apartment?", a: "Sometimes. Onsite repair is a paid service and depends on a technician being free that day. We quote the visit charge on WhatsApp before you book, and some jobs, like board work, still need the bench at the workshop." },
      { q: "What are your opening hours for a drop-off from Bur Dubai?", a: "Monday to Thursday and Saturday, 9 am to 7 pm. Friday, 9 am to 12 pm and 2 pm to 7 pm. We're closed on Sunday. No appointment is needed to walk in for a diagnosis." },
      { q: "Does the warranty change if I send my MacBook from Bur Dubai?", a: "No. Hardware repairs carry a written warranty of up to 12 months whether you walk in or send it by courier. Screen replacements are covered for 90 days and batteries for 3 months." },
      { q: "Can you repair several MacBooks for our Bur Dubai office?", a: "Yes. Send the list of models and faults on WhatsApp and we'll diagnose each one free and quote them in writing before starting. Bring them in together, or send them in a single courier booking." },
    ],
    reviewIndexes: [2, 6, 11, 15, 20, 24],
  },
  {
    slug: "karama",
    area: "Karama",
    short: "Karama",
    driveTime: "18 minutes",
    metroNote: "ADCB on the Green Line is the nearest station, and the workshop is about 18 minutes by car. By Metro, change to the Red Line at BurJuman and ride to Al Fardan Exchange, a 15-minute walk from us.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Karama Market", "Karama Centre", "Zabeel Park", "ADCB Metro", "Al Attar Tower", "Dubai Frame"],
    landmarkLine: "Serving Karama Market, Karama Centre, Zabeel Park, and the Dubai Frame corridor.",
    intro:
      "Shopkeepers in Karama Market, families in the walk-up blocks and office staff near Al Attar Tower all hit the same problem sooner or later: a MacBook that won't charge, won't boot or has a cracked screen. Getting a MacBook repair from Karama is straightforward. Concord Tower, Dubai Media City is about 18 minutes away by car or taxi, and you can walk in without an appointment for a free diagnosis. If you're tied to a shop counter, book a same-day courier app and WhatsApp us the tracking link. A paid onsite visit is also possible when a technician is free.",
    whyChoose:
      "In Karama, people compare prices before they commit, so a written figure matters. We send a fixed quote on WhatsApp before any work starts, and it doesn't move once the Mac is open. The diagnosis is free, and if we can't repair it, you pay nothing. Keyboards and batteries are the jobs most likely to finish the same day, as long as the part is in stock. Logic board faults are repaired at component level on our own bench, and hardware work carries a written warranty of up to 12 months.",
    pickupNote:
      "From Karama, get onto Sheikh Zayed Road and follow it to Media City; it's around 18 minutes outside the rush. Taxis from Karama Centre are easy to find if you'd rather not park, though there is parking on site. Can't leave the shop? Book a same-day courier app, hand the MacBook to the driver, and WhatsApp 055 741 3706 the tracking link, your model and a photo of the fault. Paid onsite visits happen when a technician is free.",
    travel: [
      { from: "Karama Market",   drive: "18 min" },
      { from: "Karama Centre",   drive: "17 min" },
      { from: "Zabeel Park",     drive: "16 min" },
      { from: "ADCB Metro area", drive: "19 min" },
      { from: "Dubai Frame",     drive: "15 min" },
      { from: "Al Attar Tower",  drive: "18 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long is the drive from Karama to your workshop?", a: "About 18 minutes by car or taxi to Concord Tower, Dubai Media City, more in peak traffic. There's parking on site, and you can walk in for a free diagnosis without an appointment." },
      { q: "Can I send my MacBook from a Karama Market shop by courier?", a: "Yes. Book any same-day courier app, hand the Mac to the driver at your shop, and WhatsApp us the tracking link with the model. We'll diagnose it, send a written quote, and when it's done you collect it or we book a courier to bring it back." },
      { q: "Can I get a same-day repair from Karama?", a: "Often. Screen, battery, keyboard and trackpad repairs can usually be completed the same day if the part is in stock. Logic board faults take longer, and we'll tell you the expected time in writing before starting." },
      { q: "Do you do onsite MacBook repair in Karama?", a: "Only when a technician is free, and it's a paid visit. We quote the charge on WhatsApp before you book. Jobs that need the bench, such as board repair, still come back to the workshop." },
      { q: "The office MacBook near Al Attar Tower won't turn on. What should I tell you?", a: "WhatsApp the model, what happened before it died and whether it shows any light or sound when you press power. Then bring it in or courier it over. The diagnosis is free, and data recovery is an option if the board can't be saved." },
      { q: "Do I pay anything if the MacBook can't be fixed?", a: "No. The diagnosis is free and our rule is no fix, no charge. You only pay once you've approved the written quote on WhatsApp and the repair is done." },
      { q: "What warranty do Karama customers get?", a: "The same as everyone: a written warranty of up to 12 months on hardware repairs, 90 days on screens and 3 months on batteries. Keep the WhatsApp quote as your reference if you ever need it." },
      { q: "Do you cover the towers by Zabeel Park and the Dubai Frame?", a: "Yes. From the Zabeel Park and Dubai Frame side of Karama, Concord Tower, Dubai Media City is about 15 to 16 minutes by car. Walk in, or send the Mac with a same-day courier app you book yourself." },
    ],
    reviewIndexes: [0, 3, 7, 12, 16, 23],
  },
  {
    slug: "mirdif",
    area: "Mirdif",
    short: "Mirdif",
    driveTime: "30 minutes",
    metroNote: "The nearest Metro is Centrepoint (formerly Rashidiya) at the end of the Red Line, about a 10-minute drive from most Mirdif addresses. Ride the line across the city to Al Fardan Exchange, then walk about 15 minutes to Concord Tower.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Mirdif City Centre", "Uptown Mirdif", "Al Mushrif Park", "Garhoud Bridge", "Mirdif Hills", "Shorooq community"],
    landmarkLine: "Serving Mirdif City Centre, Uptown Mirdif, Al Mushrif Park, and the Mirdif Hills and Shorooq communities.",
    intro:
      "Mirdif sits out in the north-east, about 30 minutes by car from Concord Tower, Dubai Media City, and that distance shapes how people here handle a MacBook repair. Whether it's a villa in Mirdif Hills or Shorooq or an apartment near Mirdif City Centre and Uptown Mirdif, the choice is one planned drive across, or a same-day courier app that brings the Mac to us. Walk-ins don't need an appointment and the diagnosis is free. A paid onsite visit is possible when a technician is free, with the charge quoted on WhatsApp first.",
    whyChoose:
      "A half-hour drive is a real commitment, so Mirdif families want the price and the plan before they set off. Send a photo and the model on WhatsApp and we'll tell you whether it looks like a same-day job. The quote is fixed in writing before any work starts. Home offices here often run more than one machine, and we repair MacBook, iMac and Mac mini, plus the family iPhone or iPad. Logic boards are fixed at component level. No fix means no charge, and hardware repairs carry a written warranty of up to 12 months.",
    pickupNote:
      "From Mirdif, the usual run heads toward Garhoud Bridge and then along Al Khail Road or Sheikh Zayed Road to Media City, about 30 minutes in fair traffic. Parking is on site. If the drive isn't worth it, book a same-day courier app from your villa gate or building lobby and WhatsApp 055 741 3706 the tracking link, the model and a photo of the fault. Paid onsite visits depend on a technician being free.",
    travel: [
      { from: "Mirdif City Centre", drive: "30 min" },
      { from: "Uptown Mirdif",      drive: "29 min" },
      { from: "Mirdif Hills",       drive: "31 min" },
      { from: "Shorooq community",  drive: "32 min" },
      { from: "Al Mushrif Park",    drive: "28 min" },
      { from: "Garhoud Bridge",     drive: "25 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Is it worth driving from Mirdif to Media City for a MacBook repair?", a: "For a same-day job, often yes. Screen, battery, keyboard and trackpad repairs can usually be finished while you wait nearby if the part is in stock. WhatsApp first so we can check the part before you make the 30-minute drive." },
      { q: "Can I send my MacBook from a Mirdif villa by courier?", a: "Yes. Book a same-day courier app, hand the Mac over at your gate, and WhatsApp us the tracking link. We diagnose it free, send a written quote, and once it's fixed we book a courier to bring it back to your gate." },
      { q: "Do you offer onsite MacBook repair in Mirdif?", a: "When a technician is free, yes, as a paid visit. The charge is quoted on WhatsApp before you book. Some faults, like logic board work, still need the workshop bench and can't be done at home." },
      { q: "I work at Mirdif City Centre. Can I send my MacBook from there?", a: "Yes. Book a courier app from your shop or office in the mall, hand the Mac to the driver, and WhatsApp us the tracking link with the model and the fault. You can also drop it in yourself on a day off, Monday to Saturday." },
      { q: "Why not just go to an Apple Store from Mirdif?", a: "That's your choice, and for some warranty cases it makes sense. We're an independent workshop: we repair logic boards at component level, quote in writing before work starts, and give a written warranty of up to 12 months on hardware repairs." },
      { q: "What happens if my repair takes more than one day?", a: "We keep you updated on WhatsApp. Board repairs and data recovery take longer than screen or battery jobs, and we'll tell you the expected time before starting. When it's ready, you collect it, or we book a courier to bring it back." },
      { q: "Can you look at several Macs from one Mirdif home office?", a: "Yes. Send the list of models and faults on WhatsApp. Each one gets a free diagnosis and its own written quote, and they can all come in on one trip or in one courier booking." },
      { q: "When are you open if I'm driving in from Mirdif?", a: "Monday to Thursday and Saturday, 9 am to 7 pm. On Friday we open 9 am to 12 pm and again 2 pm to 7 pm. Sunday is closed, so plan the drive for another day." },
    ],
    reviewIndexes: [5, 10, 14, 18, 21, 26],
  },
  {
    slug: "palm-jumeirah",
    area: "Palm Jumeirah",
    short: "Palm",
    driveTime: "15 minutes",
    metroNote: "The Palm Monorail runs along the trunk to Atlantis. Off the island, the Palm Jumeirah tram stop is a 3-minute walk from Concord Tower.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Atlantis The Palm", "Nakheel Mall", "The Pointe", "FIVE Palm Hotel", "Signature Villas", "Golden Mile"],
    landmarkLine: "Serving Atlantis, Nakheel Mall, The Pointe, FIVE Palm, and the Signature Villa and Golden Mile communities.",
    intro:
      "Salt air and terrace heat are hard on laptops, and the Palm has plenty of both. For MacBook repair from Palm Jumeirah, the workshop at Concord Tower, Dubai Media City is about 15 minutes from the Palm gateway by Nakheel Mall. Residents on the fronds and the Golden Mile usually drive across and walk in, since the diagnosis is free and no appointment is needed. Hotel guests at Atlantis or FIVE Palm can book a same-day courier app from the lobby and send the Mac over. A paid onsite visit is possible when a technician is free.",
    whyChoose:
      "The Palm is close to Media City, so a repair doesn't have to take over your day. Someone in the Signature Villas can drop a MacBook in on the way along Sheikh Zayed Road and come back once we've messaged. The quote is fixed in writing on WhatsApp, so the bill holds no surprises. We see keyboards gritty with sand and batteries swollen by heat from Palm homes, and both are often finished the same day when the part is in stock. Hardware repairs carry a written warranty of up to 12 months.",
    pickupNote:
      "Leave the island along the trunk, pass Nakheel Mall at the gateway and you're about 15 minutes from Concord Tower; from Atlantis allow 20. There's parking on site. Staying in a crescent hotel? Book a same-day courier app, leave the Mac with the concierge for the driver, and WhatsApp 055 741 3706 the tracking link, your model and a photo of the fault. Paid onsite visits depend on a technician being free.",
    travel: [
      { from: "Palm gateway / Nakheel Mall", drive: "15 min" },
      { from: "Golden Mile",                 drive: "16 min" },
      { from: "Signature Villas (trunk)",    drive: "17 min" },
      { from: "FIVE Palm / The Pointe",      drive: "18 min" },
      { from: "Atlantis The Palm",           drive: "20 min" },
      { from: "Frond A-K villas",            drive: "16–20 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Can I send my MacBook from a Palm Jumeirah villa without driving?", a: "Yes. Book a same-day courier app to your frond villa, hand the Mac to the driver, and WhatsApp us the tracking link. We'll diagnose it free, quote in writing, and book a courier to bring it back once it's done." },
      { q: "How long is the drive from the Palm to your workshop?", a: "About 15 minutes from the Palm gateway and Nakheel Mall, and around 20 from Atlantis. Concord Tower, Dubai Media City has parking on site, and you can walk in for a diagnosis without booking." },
      { q: "I'm a guest at a Palm Jumeirah hotel. How do I get my MacBook repaired?", a: "Book a same-day courier app, leave the Mac with the concierge for the driver, and WhatsApp us the tracking link and your room details, and we'll book a courier to bring it back to the hotel. If you have a car, the workshop is a short drive off the island." },
      { q: "Is same-day MacBook repair possible for Palm residents?", a: "Often. Screen, battery, keyboard and trackpad repairs are usually done the same day when the part is in stock, and a morning drop-off gives the most time. Logic board repairs take longer." },
      { q: "What's the most common MacBook fault you see from Palm residents?", a: "Keyboards and fans clogged with fine sand and salt, and batteries swollen by heat, especially on Macs left out on a terrace. Cracked screens come next. All of these are bench jobs we handle often." },
      { q: "Can a technician come to my villa on the Palm?", a: "Sometimes. Onsite repair is paid and only possible when a technician is free. We'll quote the charge on WhatsApp before you book, and anything needing board work goes back to the workshop." },
      { q: "Can a hotel guest get a MacBook fixed before checking out?", a: "If the part is in stock and it's a screen, battery or keyboard job, it's possible. Send your checkout date on WhatsApp with the model and a photo of the fault, and we'll be straight about whether it fits." },
      { q: "Is there a drop-off option if I'd prefer to come to you?", a: "Yes. Concord Tower is 15 minutes from the Palm gateway by car, easy to combine with a trip along Sheikh Zayed Road. Parking is on site and no appointment is needed for a diagnosis." },
    ],
    reviewIndexes: [2, 7, 11, 17, 22, 25],
  },
  {
    slug: "barsha",
    area: "Al Barsha",
    short: "Barsha",
    driveTime: "8 minutes",
    metroNote: "Mall of the Emirates on the Red Line is the local station. Ride to Al Fardan Exchange and walk about 15 minutes, or change to the tram at Sobha Realty for the Palm Jumeirah stop, a 3-minute walk away.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Mall of the Emirates", "Barsha Pond Park", "Al Barsha 1 / 2 / 3", "My City Centre Al Barsha", "Gems schools cluster", "Al Barsha South"],
    landmarkLine: "8 minutes from Mall of the Emirates, Barsha Pond Park, and all Al Barsha 1, 2, and 3 communities.",
    intro:
      "Eight minutes. That's the drive from the Mall of the Emirates side of Al Barsha to our workshop at Concord Tower, Dubai Media City, which makes walking in the obvious way to get a MacBook repair done. From the Al Barsha 1 towers to the Al Barsha 2 and 3 blocks, the Al Barsha South villas and the streets around Barsha Pond Park, it's a short hop across. No appointment is needed and the diagnosis is free. A courier app you book, or a paid onsite visit when a technician is free, covers the days you can't get away.",
    whyChoose:
      "Being this close means you can bring a MacBook in on the way to work and often have a same-day job ready by evening when the part is in stock. Batteries and keyboards are the repairs we do most for Barsha customers, usually on Macs that have worked hard through the summer heat. Staff at the Gems schools cluster can drop a work laptop in after the school day. You get a fixed written quote on WhatsApp before any work starts, nothing to pay if it can't be fixed, and a written warranty of up to 12 months on hardware.",
    pickupNote:
      "From Al Barsha 1, cross Sheikh Zayed Road by Mall of the Emirates and head into Media City; it's about 8 minutes, or 12 from Al Barsha South. There's parking at Concord Tower. Stuck at your desk? Book a same-day courier app, hand the Mac to the driver, and WhatsApp 055 741 3706 the tracking link with your model and a photo of the fault. A paid onsite visit is possible when a technician is free.",
    travel: [
      { from: "Al Barsha 1 (Mall of Emirates side)", drive: "8 min" },
      { from: "Al Barsha 2 / 3",                     drive: "10 min" },
      { from: "My City Centre Al Barsha",            drive: "8 min" },
      { from: "Al Barsha South",                     drive: "12 min" },
      { from: "Barsha Pond Park",                    drive: "9 min" },
      { from: "Mall of the Emirates",                drive: "8 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How close is your workshop to Al Barsha?", a: "About 8 minutes by car from Al Barsha 1 and Mall of the Emirates, 10 from Al Barsha 2 and 3, and 12 from Al Barsha South. We're at Concord Tower, Dubai Media City, with parking on site." },
      { q: "Can I drop my MacBook off in person since you're close?", a: "Yes, and from Barsha that's the quickest route. Walk in during opening hours without an appointment, get a free diagnosis, and approve a written quote on WhatsApp before any work starts." },
      { q: "Can I send a MacBook from a hotel near Mall of the Emirates?", a: "Yes. Book a same-day courier app from the hotel, leave the Mac at reception for the driver, and WhatsApp us the tracking link. Or take a taxi yourself; Concord Tower is only about 8 minutes away." },
      { q: "Can I get same-day MacBook repair from Al Barsha?", a: "Often, yes. Screen, battery, keyboard and trackpad repairs are usually finished the same day when the part is in stock. Because the drive is short, drop it in the morning and come back once we message you. Board work takes longer." },
      { q: "Do you do onsite repairs in Al Barsha South and Al Barsha 3?", a: "A paid onsite visit is possible when a technician is free, with the charge quoted on WhatsApp first. Honestly, from Al Barsha South the 12-minute drive in is usually quicker than waiting for a visit." },
      { q: "What's the most common repair you do from Barsha?", a: "Batteries and keyboards, mostly on MacBooks used hard through the hot months, followed by screens. Logic board repairs are less common, but we do them at component level on the bench." },
      { q: "Can staff at a Gems school in Barsha get a work MacBook fixed?", a: "Yes. Bring it in after school, or have the office book a same-day courier app and WhatsApp us the tracking link. We quote each machine in writing before starting, so the school can approve it first." },
      { q: "What does it cost if you can't fix my MacBook?", a: "Nothing. The diagnosis is free and we work on a no fix, no charge basis. The price for your specific fault is quoted in writing on WhatsApp before any work begins." },
    ],
    reviewIndexes: [0, 4, 8, 13, 19, 24],
  },
  {
    slug: "al-sufouh",
    area: "Al Sufouh",
    short: "Al Sufouh",
    driveTime: "5 minutes",
    metroNote: "The Dubai Tram runs along Al Sufouh Road, so the easy option is to ride it to the Palm Jumeirah stop, a 3-minute walk from Concord Tower.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Madinat Jumeirah", "Sufouh Beach", "Knowledge Village", "American School of Dubai", "Dubai Media City", "Palm Jumeirah gateway"],
    landmarkLine: "Minutes from Madinat Jumeirah, Sufouh Beach, Knowledge Village and the Palm Jumeirah gateway.",
    intro:
      "Our workshop is in the neighbourhood: Concord Tower, Dubai Media City stands on Al Sufouh Road, at the edge of the district. So for MacBook repair in Al Sufouh, the answer is simple. Walk in. From Al Sufouh 1 and the Knowledge Village campuses it's about a 4-minute drive, and Madinat Jumeirah or Sufouh Gardens are around 6. No appointment is needed and the diagnosis is free, so you can wait or leave the Mac with us. If a lecture or a meeting keeps you, book a courier app yourself, and paid onsite visits happen when a technician is free.",
    whyChoose:
      "Being neighbours changes how a repair works. A student at Knowledge Village can drop a MacBook in between classes, and someone in the Al Sufouh villas can bring it over in the morning and come back when we message that it's ready. Sand from Sufouh Beach in the fans and keyboard is far easier to clean out when it's caught early. The quote is fixed in writing on WhatsApp before work begins, and if we can't fix it you pay nothing. Hardware repairs carry a written warranty of up to 12 months.",
    pickupNote:
      "Most of Al Sufouh is a few minutes from Concord Tower along Al Sufouh Road, so coming over in person is the obvious route. Parking is on site; come up to Office #45 on the 10th floor. If you can't step away from a campus office or a hotel at Madinat Jumeirah, book a same-day courier app and WhatsApp 055 741 3706 the tracking link, your model and a photo of the fault. A paid onsite visit is possible when a technician is free.",
    travel: [
      { from: "Al Sufouh 1 (Media City side)",   drive: "4 min" },
      { from: "Al Sufouh 2 / Sufouh Gardens",    drive: "6 min" },
      { from: "Madinat Jumeirah / Souk Madinat", drive: "6 min" },
      { from: "Knowledge Village / Park",        drive: "4 min" },
      { from: "American School of Dubai",        drive: "5 min" },
      { from: "Sufouh Beach / Palm gateway",     drive: "7 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Where exactly is your workshop in Al Sufouh?", a: "Office #45, 10th Floor, Concord Tower, Dubai Media City, on Al Sufouh Road. From most of Al Sufouh it's a 4 to 6 minute drive, and there's parking on site. Walk in without an appointment." },
      { q: "Can I walk in from Knowledge Village between classes?", a: "Yes. It's about 4 minutes by car from Knowledge Village and Knowledge Park. Bring the MacBook and its charger, get the free diagnosis, and approve the written quote on WhatsApp before we start any work." },
      { q: "Can a Madinat Jumeirah hotel guest get a MacBook repaired nearby?", a: "Yes. The workshop is about 6 minutes from Madinat Jumeirah. Take a taxi and walk in, or book a same-day courier app from the hotel and WhatsApp us the tracking link. When it's fixed, we book a courier to bring it back to the hotel." },
      { q: "Can you repair a MacBook the same day in Al Sufouh?", a: "Often, for screen, battery, keyboard and trackpad jobs with the part in stock. Since you're so close, you can drop it in the morning and come back when we message that it's ready. Board work takes longer." },
      { q: "My MacBook got sand or salt in it at Sufouh Beach. Can you save it?", a: "Usually, if it's caught early. Sand in the vents and salt air cause overheating and sticky keys. Bring it in soon and we strip-clean the fans, heatsinks and ports, then run a full diagnostic before quoting." },
      { q: "Do you offer onsite repair in Al Sufouh?", a: "A paid onsite visit is possible when a technician is free, quoted on WhatsApp before you book. From most Al Sufouh addresses, though, walking in takes less time than arranging a visit." },
      { q: "Can I bring an iPhone and iPad along with the MacBook?", a: "Yes. We repair MacBook, iPhone and iPad, so bring them all on one trip. Each device gets its own free diagnosis and written quote. We don't repair Apple Watch or AirPods." },
      { q: "What are your hours if I'm popping over from Al Sufouh?", a: "Monday to Thursday and Saturday, 9 am to 7 pm. Friday 9 am to 12 pm, then 2 pm to 7 pm after the break. Closed Sunday. No booking is needed for a diagnosis." },
    ],
    reviewIndexes: [0, 6, 12, 16, 21, 23],
  },
  {
    slug: "barsha-heights",
    area: "Barsha Heights",
    short: "Barsha Heights",
    driveTime: "6 minutes",
    metroNote: "The workshop is a 6-minute drive. By Metro, take the Red Line from Dubai Internet City station, on the edge of Barsha Heights, one stop to Al Fardan Exchange and walk about 15 minutes.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Dubai Internet City Metro", "The Montrose", "Two Towers", "Boutique 7 Hotel", "Al Shaiba / API towers", "Sheikh Zayed Road frontage"],
    landmarkLine: "Between Sheikh Zayed Road and Media City, around Dubai Internet City Metro and the Tecom tower clusters.",
    intro:
      "Still called Tecom by most people, Barsha Heights is the tower cluster between Sheikh Zayed Road and Media City, and it sits right beside our workshop. Concord Tower, Dubai Media City is about a 6-minute drive from The Montrose or Two Towers, and 3 from the Media City border. That makes MacBook repair here a walk-in job: bring the Mac over at lunch, get the free diagnosis and approve a written quote. Freelancers and small offices who can't leave a deadline can book a same-day courier app, and paid onsite visits happen when a technician is free.",
    whyChoose:
      "Barsha Heights runs on laptops: freelancers on deadlines, agencies between client calls, co-working desks that can't lose a machine for a week. Because we're next door, you can drop a MacBook in at lunch and get on with your day. Screen, battery, keyboard and trackpad repairs are often finished the same day when the part is in stock. The quote is fixed in writing on WhatsApp before work starts, and if the files matter more than the machine, we do data recovery too. Hardware repairs carry a written warranty of up to 12 months.",
    pickupNote:
      "From most Barsha Heights towers it's a few minutes' drive into Media City, so walking in is usually the quickest way. Parking is on site at Concord Tower. If you can't leave the office, book a same-day courier app from your tower lobby, hand the Mac to the driver, and WhatsApp 055 741 3706 the tracking link, the model and a photo of the fault. Paid onsite visits depend on a technician being free.",
    travel: [
      { from: "Tecom core (Internet City Metro)", drive: "5 min" },
      { from: "The Montrose",                     drive: "6 min" },
      { from: "Two Towers / Boutique 7",          drive: "7 min" },
      { from: "Al Shaiba / API Trio towers",      drive: "6 min" },
      { from: "Sheikh Zayed Road frontage",       drive: "7 min" },
      { from: "Media City border",                drive: "3 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How far is Barsha Heights (Tecom) from your workshop?", a: "Very close. Concord Tower, Dubai Media City is about 5 to 7 minutes by car from the Tecom towers and 3 minutes from the Media City border. Parking is on site and you can walk in without booking." },
      { q: "Is Barsha Heights the same as Tecom?", a: "Yes. Tecom is the old name and Barsha Heights is the official one. People still search both, and it's the same tower cluster next to Media City either way." },
      { q: "Can I drop my MacBook off during a lunch break from Tecom?", a: "Yes. Walk in, leave it for the free diagnosis, and we'll send the written quote on WhatsApp. Watch the Friday hours: 9 am to 12 pm, then 2 pm to 7 pm, so avoid the midday gap." },
      { q: "Can I send a MacBook from my co-working space by courier?", a: "Yes. Book a same-day courier app, hand the Mac to the driver at reception, and WhatsApp us the tracking link with the model and fault. Once it's fixed, collect it, or we book a courier to bring it back." },
      { q: "Can a Tecom freelancer get a MacBook back the same day?", a: "Often, for screen, battery, keyboard and trackpad jobs with the part in stock. Since you're minutes away, you can come and fetch it yourself as soon as we message. Logic board work takes longer." },
      { q: "Our agency has several MacBooks with problems. Can you handle them together?", a: "Yes. Send the list of models and faults on WhatsApp. Each machine gets a free diagnosis and its own written quote before work starts, and you can bring them over together since we're so close." },
      { q: "How do I find your office coming from Barsha Heights?", a: "Drive into Dubai Media City, about 6 minutes from The Montrose or Two Towers. Look for Concord Tower and come up to Office #45 on the 10th floor. Parking is on site." },
      { q: "My MacBook died before a deadline. Can you get the files off it?", a: "Often, yes. We do data recovery as well as repair, and sometimes the quickest way to your files is fixing the fault that stopped it booting. Bring it in with the charger and tell us which files matter most." },
    ],
    reviewIndexes: [1, 5, 10, 15, 18, 22],
  },
  {
    slug: "the-greens",
    area: "The Greens",
    short: "The Greens",
    driveTime: "9 minutes",
    metroNote: "The workshop is a 9-minute drive from The Greens. By Metro, ride the Red Line from Dubai Internet City station to Al Fardan Exchange, then walk about 15 minutes.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Emirates Golf Club", "The Onyx", "Al Thayyal & Al Ghozlan", "Carrefour The Greens", "The Views towers", "Montgomerie Golf Course"],
    landmarkLine: "Around Emirates Golf Club and Carrefour The Greens, next to the neighbouring Views towers.",
    intro:
      "Beside Emirates Golf Club, just off Sheikh Zayed Road, The Greens and The Views are low- and mid-rise neighbourhoods where plenty of people work from home. Our MacBook repair workshop at Concord Tower, Dubai Media City is about 9 minutes by car from Al Thayyal, Al Ghozlan, Al Nakheel, Al Samar or The Onyx, and around 10 from the Golf Towers, Mosela and Travo. The quick route is to drive over and walk in; no appointment is needed and the diagnosis is free. A courier app you book, or a paid onsite visit, covers the days you can't get away.",
    whyChoose:
      "The Greens and The Views are work-from-home territory: consultants, designers and remote teams whose day stops when the MacBook does. A 9-minute drive means you can bring it in mid-morning and often have a screen, battery, keyboard or trackpad job ready the same day when the part is in stock. Diagnosis is free, the quote is fixed in writing on WhatsApp, and if the Mac won't boot at all we can look at data recovery first. Hardware repairs carry a written warranty of up to 12 months.",
    pickupNote:
      "From The Greens, join Sheikh Zayed Road and turn onto Al Sufouh Road for Media City; it's about 9 minutes, a minute longer from The Views. Parking is on site at Concord Tower. Can't leave a call? Book a same-day courier app to your building lobby or the Carrefour The Greens car park, then WhatsApp 055 741 3706 the tracking link, your model and a photo of the fault. Paid onsite visits happen when a technician is free.",
    travel: [
      { from: "Al Thayyal / Al Ghozlan",        drive: "9 min" },
      { from: "The Onyx / Al Nakheel",          drive: "9 min" },
      { from: "Carrefour The Greens",           drive: "9 min" },
      { from: "The Views (Golf Towers/Mosela)", drive: "10 min" },
      { from: "Emirates Golf Club",             drive: "9 min" },
      { from: "Sheikh Zayed Road frontage",     drive: "8 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How far is The Greens from your Media City workshop?", a: "About 9 minutes by car from The Greens and 10 from The Views towers, via Sheikh Zayed Road and Al Sufouh Road. Concord Tower has parking on site, and walk-ins don't need an appointment." },
      { q: "Do you cover The Views as well as The Greens?", a: "Yes. The Views towers, including Golf Towers, Mosela, Travo and Fairways, are effectively the same neighbourhood for us. Drive in, send the Mac with a courier app you book, or ask about a paid onsite visit." },
      { q: "Can I courier my MacBook from a low-rise block in The Greens?", a: "Yes. Book a same-day courier app to your Al Thayyal, Al Ghozlan or Al Samar building, hand the Mac over in the lobby, and WhatsApp us the tracking link. When it's fixed, we book a courier to bring it back to your building." },
      { q: "I work from home in The Greens. Can my MacBook be fixed the same day?", a: "Often. Screen, battery, keyboard and trackpad jobs are usually finished the same day when the part is in stock. Drive it over in the morning and you could be back online by evening. Board faults take longer." },
      { q: "Is onsite MacBook repair available in The Greens or The Views?", a: "Yes, as a paid visit, when a technician is free. We quote the charge on WhatsApp before you book. With the workshop only 9 minutes away, driving in is often the faster choice." },
      { q: "I need data recovered from a MacBook that won't boot. Can you help?", a: "Yes. We do data recovery from Macs that won't start, and sometimes repairing the board fault is the way to reach the files. Bring it in or courier it over, and we'll quote in writing before starting." },
      { q: "Where do I park when I bring my MacBook in from The Greens?", a: "Concord Tower, Dubai Media City has parking on site. Come up to Office #45 on the 10th floor. No appointment is needed for a diagnosis during opening hours, Monday to Saturday." },
      { q: "Is the warranty the same for Greens and Views customers?", a: "Yes. Hardware repairs carry a written warranty of up to 12 months, with 90 days on screens and 3 months on batteries, however the Mac reached us." },
    ],
    reviewIndexes: [2, 7, 11, 14, 20, 24],
  },
  {
    slug: "jvc",
    area: "JVC",
    short: "JVC",
    driveTime: "16 minutes",
    metroNote: "JVC is not on the Metro network, so for a repair it's usually simpler to drive to Concord Tower, Dubai Media City or send the Mac with a same-day courier app you book. On the Metro from elsewhere, Al Fardan Exchange on the Red Line is about a 15-minute walk from us.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Circle Mall", "JVC Community Park", "Saheel & Seasons towers", "Districts 10-16", "Hessa Street", "Al Khail Road"],
    landmarkLine: "Around Circle Mall and the JVC Community Park, across Districts 10 to 16.",
    intro:
      "Apartment towers and townhouses spread across Districts 10 to 16, packed around Circle Mall and the JVC parks: Jumeirah Village Circle has filled up fast with young professionals, couples and families. For MacBook repair, our workshop at Concord Tower, Dubai Media City is about 16 minutes by car via Hessa Street and Sheikh Zayed Road. You can walk in without an appointment and the diagnosis is free. With no Metro in JVC, a same-day courier app you book is the other easy option; just WhatsApp us the tracking link. Paid onsite visits happen when a technician is free.",
    whyChoose:
      "JVC is full of remote workers and small-business owners for whom a dead MacBook means a lost work day. Tower parking and visitor sign-in make the trip out a chore, so it helps to know the plan before you leave. Send the model and a photo on WhatsApp and we'll say whether it looks like a same-day screen, battery or keyboard job. The quote is fixed in writing before work starts. Coffee spills on home desks are board-level work, which we do on our own bench. No fix means no charge, and hardware repairs carry a written warranty of up to 12 months.",
    pickupNote:
      "From JVC, head out by Hessa Street onto Sheikh Zayed Road toward Media City: about 16 minutes from Circle Mall, 18 from Districts 15 and 16. Parking is on site at Concord Tower. If you'd rather stay home, book Careem Box or another same-day courier app to your lobby or townhouse gate, then WhatsApp 055 741 3706 the tracking link, the model and a photo of the fault. Paid onsite visits depend on a technician being free.",
    travel: [
      { from: "Circle Mall / District 12",  drive: "16 min" },
      { from: "District 10-11",             drive: "16 min" },
      { from: "District 13-14",             drive: "17 min" },
      { from: "District 15-16",             drive: "18 min" },
      { from: "Saheel / Seasons Community", drive: "16 min" },
      { from: "Hessa Street edge",          drive: "15 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long does it take to drive from JVC to your workshop?", a: "About 16 minutes from Circle Mall or District 12, and up to 18 from Districts 15 and 16, via Hessa Street and Sheikh Zayed Road. Concord Tower, Dubai Media City has parking on site." },
      { q: "I work from home in JVC. Can I send my MacBook instead of driving?", a: "Yes. Book a same-day courier app to your tower lobby, hand the Mac to the driver and WhatsApp us the tracking link with the model. We diagnose it free, quote in writing, and book a courier to bring it back when it's done." },
      { q: "Do you take MacBooks from both JVC towers and townhouses?", a: "Yes, from anywhere in Districts 10 to 16. Drive in, or book a courier app to your lobby or townhouse gate. Send your district and the model on WhatsApp so we know what's coming." },
      { q: "Can I hand my MacBook to a courier at Circle Mall?", a: "Yes, if the courier app lets you set the mall as the starting point. Book it, hand the Mac over at the meeting spot, and WhatsApp us the tracking link. We'll confirm on WhatsApp when it reaches the bench." },
      { q: "I spilled coffee on my MacBook at home in JVC. What now?", a: "Power it off, don't charge it, and WhatsApp us. Then get it to us quickly, by car or a courier app you book. We clean the logic board, check for corrosion and quote the repair in writing. The sooner it arrives, the better the odds." },
      { q: "Can a technician repair my MacBook at my JVC apartment?", a: "Sometimes. Onsite repair is paid and depends on a technician being free. We quote the charge on WhatsApp before booking. Liquid damage and board faults still need to come to the workshop." },
      { q: "Is there a Metro option from JVC to Media City?", a: "Not directly. JVC isn't on the Metro network, so a taxi or your own car is simpler: about 16 minutes to Concord Tower, Dubai Media City. Or send the Mac with a same-day courier app you book. If you do reach the Red Line, ride it to Al Fardan Exchange, about a 15-minute walk from us." },
      { q: "Can you also fix my iPhone or iPad from JVC?", a: "Yes. iPhone and iPad repairs are done at the same workshop, so one trip or one courier booking covers the household. Tell us every device and fault on WhatsApp and you'll get a written quote for each." },
    ],
    reviewIndexes: [3, 8, 12, 17, 21, 25],
  },
  {
    slug: "dubai-hills",
    area: "Dubai Hills Estate",
    short: "Dubai Hills",
    driveTime: "18 minutes",
    metroNote: "Dubai Hills is not yet on the Metro network, so the practical options are driving in to Concord Tower, Dubai Media City or booking a same-day courier app to send the Mac. If you come by public transport, the Palm Jumeirah tram stop is a 3-minute walk from us.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Dubai Hills Mall", "Dubai Hills Golf Club", "Kings College Hospital", "Park Heights", "Sidra & Maple villas", "Dubai Hills Park"],
    landmarkLine: "Around Dubai Hills Mall, the Golf Club and the Sidra, Maple and Park Heights communities.",
    intro:
      "Villas in Sidra and Maple, the Park Heights apartments, Golf Place and Dubai Hills Mall: Emaar's community off Al Khail Road is spread out, and a single household here often runs several Apple devices. For MacBook repair from Dubai Hills Estate, Concord Tower, Dubai Media City is about 18 minutes by car. Walk in without an appointment for a free diagnosis, and bring the iPhone or iPad with a fault too. If nobody can make the drive, book a same-day courier app from the villa gate, or ask on WhatsApp about a paid onsite visit when a technician is free.",
    whyChoose:
      "Dubai Hills families rarely have time to drive a MacBook across town and then wait around for an answer. We fix the quote in writing on WhatsApp before any work starts, so you know the figure before you commit. One trip can cover the household: we repair MacBook, iMac, iPhone and iPad, and each device gets its own free diagnosis. Logic boards are repaired at component level, which matters when a child's drink has gone into the keyboard. No fix, no charge, and hardware repairs carry a written warranty of up to 12 months.",
    pickupNote:
      "From Dubai Hills, take Al Khail Road or Hessa Street across to Sheikh Zayed Road and on to Media City, about 18 minutes from Park Heights and 20 from Golf Place. Parking is on site. If the family driver or housemaid is home, they can hand the Mac to a Careem Box driver you've booked; WhatsApp 055 741 3706 the tracking link, the model and a photo of the fault. Paid onsite visits depend on a technician being free.",
    travel: [
      { from: "Dubai Hills Mall / Park Heights", drive: "18 min" },
      { from: "Sidra villas",                    drive: "18 min" },
      { from: "Maple villas",                    drive: "19 min" },
      { from: "Golf Place / Parkway Vistas",     drive: "20 min" },
      { from: "Dubai Hills Golf Club",           drive: "18 min" },
      { from: "Al Khail Road edge",              drive: "16 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How far is Dubai Hills Estate from your workshop?", a: "About 18 minutes by car from Dubai Hills Mall, Park Heights or Sidra, and around 20 from Golf Place. We're at Concord Tower, Dubai Media City, with parking on site and no appointment needed." },
      { q: "Can the family driver or housemaid send the MacBook for me?", a: "Yes. Book a same-day courier app, and whoever's home hands the Mac over at the gate. WhatsApp us the tracking link and your name so we can match it when it arrives. Once it's fixed, we book a courier to bring it back to the house." },
      { q: "We have several Apple devices at home. Can you take them together?", a: "Yes. Bring the MacBook, iPhone and iPad on one trip or send them in one courier booking. Each device gets a free diagnosis and a written quote, and you approve each one separately." },
      { q: "Is onsite repair available at a Dubai Hills villa?", a: "When a technician is free, yes, as a paid visit. The charge is quoted on WhatsApp before you book. Spills and board faults usually still need to come back to the workshop bench." },
      { q: "My child spilled a drink on the MacBook at home. What should I do?", a: "Turn it off, unplug it and don't try charging it to check. WhatsApp us, then get it to the workshop quickly, by car or a courier app. We clean and repair the board and quote in writing first." },
      { q: "My Mac in Dubai Hills won't boot. Can you save the photos on it?", a: "Often, yes. We do data recovery, and sometimes the files come back once the fault stopping it from starting is repaired. Tell us on WhatsApp which files matter most before you send it." },
      { q: "Will my MacBook be back the same day if I drive in from Dubai Hills?", a: "Possibly. Screen, battery, keyboard and trackpad repairs are often finished the same day when the part is in stock. WhatsApp the model first so we can check the part before your 18-minute drive." },
      { q: "Is the warranty the same for Dubai Hills customers?", a: "Yes. Every hardware repair comes with a written warranty of up to 12 months: screens 90 days, batteries 3 months. It's the same whether you walked in or sent the Mac by courier." },
    ],
    reviewIndexes: [4, 9, 13, 16, 19, 23],
  },
  {
    slug: "discovery-gardens",
    area: "Discovery Gardens",
    short: "Discovery Gardens",
    driveTime: "15 minutes",
    metroNote: "Discovery Gardens station on the Red Line serves the community, and the workshop is a 15-minute drive. By Metro, ride towards the city, change to the tram at DMCC or Sobha Realty and get off at Palm Jumeirah, a 3-minute walk from Concord Tower.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Ibn Battuta Mall", "Discovery Gardens Pavilion", "Mediterranean Cluster", "Mogul Cluster", "The Gardens", "Discovery Gardens Metro"],
    landmarkLine: "Around Ibn Battuta Mall and the Discovery Gardens Pavilion, across the themed clusters.",
    intro:
      "Tenants and families fill the themed clusters of Discovery Gardens - Mediterranean, Mogul, Mesoamerican, Zen, Cactus and Contemporary - in low-rise blocks beside Ibn Battuta Mall, off Sheikh Zayed Road. Our workshop is in Concord Tower, Dubai Media City, about 15 minutes away by car. For MacBook repair from here, most people simply drive in: no appointment is needed for a diagnosis, and there's parking on site. If you can't get away, book a same-day courier app from your building and WhatsApp us the tracking link. A paid onsite visit is also possible when a technician is free.",
    whyChoose:
      "Discovery Gardens is a renting community, and most people here want a straight answer on cost before they spend anything. That's how we work. The diagnosis is free, the price is fixed in writing on WhatsApp before a screwdriver touches the Mac, and if we can't fix it you don't pay. Screens, batteries, keyboards and trackpads are often done the same day when the part is on the shelf. Shafiq, our lead technician, repairs logic boards at component level, so a dead board doesn't automatically mean buying a new Mac.",
    pickupNote:
      "From the clusters, head onto Sheikh Zayed Road towards Media City and you're at Concord Tower in about 15 minutes. Prefer not to drive? Book a same-day courier app, hand the Mac over at your building entrance, and WhatsApp 055 741 3706 the tracking link with your model and a photo of the fault. Once it's fixed, collect it, or we book a courier to bring it back. A paid onsite visit can be arranged when a technician is free.",
    travel: [
      { from: "Mediterranean / Mogul Cluster", drive: "15 min" },
      { from: "Mesoamerican / Zen Cluster",    drive: "15 min" },
      { from: "Cactus / Contemporary Cluster", drive: "16 min" },
      { from: "Ibn Battuta Mall",              drive: "14 min" },
      { from: "The Gardens",                   drive: "15 min" },
      { from: "Discovery Gardens Pavilion",    drive: "15 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Is there a MacBook repair place near Discovery Gardens?", a: "Our workshop is about 15 minutes away in Concord Tower, Dubai Media City, straight up Sheikh Zayed Road. Walk in for a free diagnosis without an appointment, Monday to Saturday. On Fridays we close between 12 and 2 pm." },
      { q: "Can I send my MacBook from my cluster with a courier app?", a: "Yes. Book any same-day courier app, hand the Mac over at your building entrance, and WhatsApp us the tracking link along with the model and the fault. When the repair is done, we book a courier to bring it back to your cluster." },
      { q: "Can a technician come to my apartment in Discovery Gardens?", a: "Sometimes. Onsite repair is a paid service and depends on a technician being free. Message us on WhatsApp with the model and the problem, and we'll quote the visit charge before anything is booked." },
      { q: "Can I bring it in on my way back from Ibn Battuta Mall?", a: "Yes. Concord Tower is a short drive from Ibn Battuta along Sheikh Zayed Road. Come in during opening hours, leave the Mac with us, and the written quote follows on WhatsApp once we've diagnosed it." },
      { q: "Can my MacBook screen be fixed the same day?", a: "Often, yes. Screen, battery, keyboard and trackpad jobs can usually be finished the same day when the part is in stock. Logic board faults take longer, and you'll get a realistic timeline with the quote." },
      { q: "Is there a diagnostic fee?", a: "No. The diagnosis is free, and the price is fixed in writing on WhatsApp before any work starts. If we can't fix the Mac, you pay nothing at all." },
      { q: "Can I get to the workshop without a car?", a: "Yes. Ask for Concord Tower in Dubai Media City; we're Office #45 on the 10th floor. A taxi takes roughly the same 15 minutes along Sheikh Zayed Road. By Metro, ride the Red Line from Discovery Gardens station, change to the tram at DMCC or Sobha Realty and get off at Palm Jumeirah, a 3-minute walk from us." },
      { q: "Can you also look at my iPhone or iPad?", a: "Yes. We repair iPhone and iPad as well as every Mac, so bring them in together. Each one gets its own diagnosis and its own written quote. We don't repair Apple Watch or AirPods." },
    ],
    reviewIndexes: [1, 6, 11, 16, 20, 24],
  },
  {
    slug: "motor-city",
    area: "Motor City",
    short: "Motor City",
    driveTime: "20 minutes",
    metroNote: "Motor City is not on the Metro network, so most people drive the 20 minutes to the workshop or send the Mac with a same-day courier app. Without a car, a taxi to the nearest Red Line station and a ride to Al Fardan Exchange leaves a 15-minute walk.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Dubai Autodrome", "First Avenue Mall", "Uptown Motor City", "Control Tower", "Green Community border", "Detroit House"],
    landmarkLine: "Around Dubai Autodrome and First Avenue Mall, across Uptown Motor City.",
    intro:
      "Families and professionals choose Motor City for its quiet, parkside streets around the Dubai Autodrome, off Mohammed Bin Zayed Road. The apartments in Uptown Motor City, Foster's, Norton Court and Detroit House, plus the townhouses, are about 20 minutes by car from our workshop in Concord Tower, Dubai Media City. MacBook repair from here usually means one of three routes: drive in and come up to the 10th floor without an appointment, book a same-day courier app and send us the tracking link, or ask for a paid onsite visit if a technician is free. The diagnosis costs nothing.",
    whyChoose:
      "Out here, a broken Mac often means a home office that's stopped. We'd rather you made one trip, or none. Send a photo of the fault on WhatsApp and Shafiq will tell you whether it sounds like a screen, a battery or a board problem before you set off. Common parts are usually fitted the same day when they're in stock. Boards are repaired at component level rather than swapped. The quote is written and fixed before work starts, and if the Mac can't be fixed there's no charge.",
    pickupNote:
      "It's about a 20-minute drive to Concord Tower from Uptown Motor City or First Avenue Mall, with parking on site. If you can't leave the house, book Careem Box or another same-day courier app, hand the Mac over at your lobby or townhouse door, and WhatsApp 055 741 3706 the tracking link, the model and a photo of the fault. A paid onsite visit is possible when a technician is free.",
    travel: [
      { from: "Uptown Motor City",             drive: "20 min" },
      { from: "First Avenue Mall",             drive: "20 min" },
      { from: "Foster's / Norton Court",       drive: "20 min" },
      { from: "Detroit House / Control Tower", drive: "21 min" },
      { from: "Dubai Autodrome",               drive: "20 min" },
      { from: "Green Community border",        drive: "22 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How do I get my MacBook repaired from Motor City?", a: "Drive in to Concord Tower, Dubai Media City, about 20 minutes away, or send it with a same-day courier app and WhatsApp us the tracking link. Paid onsite visits are possible when a technician is free." },
      { q: "Can I send it from a townhouse rather than an apartment?", a: "Yes. A courier app works the same from a townhouse door as from an apartment lobby in Uptown, Foster's, Norton Court or Detroit House. Book it, hand the Mac over, and send us the tracking link on WhatsApp." },
      { q: "Is there parking at the workshop if I drive in from Motor City?", a: "Yes, Concord Tower has parking on site. Come up to Office #45 on the 10th floor; no appointment is needed for a diagnosis. We're open Monday to Thursday and Saturday 9 am to 7 pm, and Friday 9 am to 12 pm and 2 pm to 7 pm." },
      { q: "I work from home in Motor City. Can it be fixed the same day?", a: "For a screen, battery, keyboard or trackpad with the part in stock, often yes. Come in early or book the courier app in the morning. Logic board repairs take longer, and we'll tell you how long when we quote." },
      { q: "Can a technician come out to Motor City?", a: "Onsite repair is paid and depends on a technician being free, so it isn't always available. WhatsApp us the model and fault, and we'll quote the visit charge before you book. Some faults still need the workshop bench." },
      { q: "Can I send the Mac from First Avenue Mall?", a: "Yes, if the courier app lets you set the mall as the starting point. Hand the Mac over in its sleeve or box, and WhatsApp us the tracking link so we know it's on the way." },
      { q: "My MacBook won't turn on and I need the files. Can you help?", a: "Yes. Data recovery is part of what we do, including from Macs that won't power on. WhatsApp us the model and what happened, and we'll explain the options and quote in writing before starting." },
      { q: "What warranty do I get on a repair?", a: "A written warranty of up to 12 months on hardware repairs. Screens carry 90 days and batteries 3 months. It's the same paperwork whether you drove in or sent the Mac by courier." },
    ],
    reviewIndexes: [2, 7, 12, 15, 19, 23],
  },
  {
    slug: "production-city",
    area: "Dubai Production City (IMPZ)",
    short: "Production City",
    driveTime: "20 minutes",
    metroNote: "Dubai Production City (IMPZ) is not on the Metro network, so drive the 20 minutes to the workshop or send the Mac with a same-day courier app. If you reach the Red Line another way, get off at Al Fardan Exchange, about a 15-minute walk from us.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["City Centre Me'aisem", "Lago Vista", "Oakwood Residency", "Centrium Towers", "Dunes Village", "Dubai Production City"],
    landmarkLine: "Around City Centre Me'aisem and the Lago Vista and Centrium tower clusters.",
    intro:
      "Still called IMPZ by most people who live there, Dubai Production City mixes apartment clusters with media businesses off Sheikh Mohammed Bin Zayed Road, next to Motor City and Sports City. Lago Vista, Oakwood Residency, Centrium Towers, Dunes Village and Lakeside are full of editors, designers and families. Our workshop is about 20 minutes away in Concord Tower, Dubai Media City. For MacBook repair you can walk in without an appointment, send the Mac over with a same-day courier app, or book a paid onsite visit when a technician is free. The price is fixed in writing first.",
    whyChoose:
      "People in Production City tend to edit, design and render for a living, so a dead MacBook Pro is lost income. Shafiq repairs logic boards at component level, which matters on a high-spec Mac where swapping the whole board is the expensive route. If the project files aren't backed up, say so on WhatsApp and we'll talk through data recovery before anything else. Screens and batteries are often done the same day when the part is in stock. The diagnosis is free, and if we can't fix the machine you don't pay.",
    pickupNote:
      "From Lago Vista or Centrium Towers it's about a 20-minute drive to Concord Tower. Short on time? Ask your tower reception to hold the Mac for a same-day courier app, or hand it over yourself, then WhatsApp 055 741 3706 the tracking link with the model and a photo of the fault. Media offices in the zone can send straight from their own front desk. A paid onsite visit is possible if a technician is free.",
    travel: [
      { from: "Lago Vista",               drive: "20 min" },
      { from: "Centrium Towers",          drive: "20 min" },
      { from: "Oakwood Residency",        drive: "20 min" },
      { from: "Dunes Village / Lakeside", drive: "21 min" },
      { from: "City Centre Me'aisem",     drive: "19 min" },
      { from: "IMPZ business district",   drive: "20 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Is Dubai Production City the same as IMPZ?", a: "Yes. IMPZ (International Media Production Zone) is the older name and Dubai Production City is the current one. People search for both, and it's the same area, about 20 minutes from our workshop." },
      { q: "Where's the closest Mac repair to IMPZ?", a: "Our workshop in Concord Tower, Dubai Media City, is about 20 minutes' drive from the Production City towers. Walk in for a free diagnosis with no appointment, and use the parking on site." },
      { q: "Can our media company send several Macs at once?", a: "Yes. Pack them separately, send them together with a courier app or bring them in, and list each one on WhatsApp. Every Mac gets its own free diagnosis and its own written quote, so you choose which to repair." },
      { q: "Can I send my MacBook from my tower lobby by courier?", a: "Yes. Book a same-day courier app from your tower, hand the Mac over at reception, and WhatsApp us the tracking link. Once it's repaired, we book a courier to bring it back to the tower." },
      { q: "Will I get my MacBook back the same day?", a: "Quite often, for screens, batteries, keyboards and trackpads when the part is in stock. Board-level faults take longer. You'll get a straight timeline with the written quote, so you can plan around your deadlines." },
      { q: "Do you do onsite repairs in Production City?", a: "When a technician is free, yes, as a paid visit. The charge is quoted on WhatsApp before you book. Some faults, like board repairs, are better done at the workshop, and we'll tell you if yours is one." },
      { q: "My MacBook Pro overheats during long exports. Can you fix it?", a: "Usually. Long renders push the fans and thermal paste hard, and dust makes it worse. We open it up, clean the fans and heatsink, and replace the paste where needed. Send the model on WhatsApp first." },
      { q: "Is my repair covered if the fault comes back?", a: "Yes. Hardware repairs carry a written warranty of up to 12 months; screens are covered for 90 days and batteries for 3 months. If the same fault returns in that time, bring or send it back." },
    ],
    reviewIndexes: [3, 8, 10, 14, 18, 22],
  },
  {
    slug: "arabian-ranches",
    area: "Arabian Ranches",
    short: "Arabian Ranches",
    driveTime: "22 minutes",
    metroNote: "Arabian Ranches is not on the Metro network. The workshop is a 22-minute drive, or you can send the Mac with a same-day courier app. The closest public-transport stop to us is Palm Jumeirah on the Dubai Tram, a 3-minute walk away.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Arabian Ranches Golf Club", "The Ranches Souk", "Dubai Polo & Equestrian Club", "Al Reem", "Saheel", "Mirador"],
    landmarkLine: "Around the Arabian Ranches Golf Club and The Ranches Souk, across the villa communities.",
    intro:
      "Villas set around the golf course and the Dubai Polo & Equestrian Club make up Arabian Ranches, off Sheikh Mohammed Bin Zayed Road. Al Reem, Saheel, Mirador, Alvorada, Palmera and the Ranches II and III phases are family homes, and most have a MacBook, an iPhone and an iPad or two in daily use. Our workshop is about 22 minutes away in Concord Tower, Dubai Media City. For MacBook repair, drive in with the whole bag of devices, send the Mac over with a same-day courier app, or ask about a paid onsite visit when a technician is free.",
    whyChoose:
      "Ranches households rarely have just one broken device. The school MacBook has a cracked screen, someone's iPhone battery is fading, and the iPad won't charge. Bring them in on one trip: we repair Mac, iPhone and iPad under one roof, and each gets a free diagnosis and its own written quote before work starts. Spills happen with kids around, and a wet logic board is cleaned and repaired at component level rather than written off. If we can't fix something, there's no charge for it.",
    pickupNote:
      "From the Ranches it's about 22 minutes to Concord Tower, and parking is on site. If nobody can drive in, book a same-day courier app and leave the Mac with whoever's at the villa to hand over at the gate. WhatsApp 055 741 3706 the tracking link, the model and a photo of the fault, and list any iPhone or iPad in the same package. Paid onsite visits happen when a technician is free.",
    travel: [
      { from: "Al Reem",                   drive: "22 min" },
      { from: "Saheel / Mirador",          drive: "22 min" },
      { from: "Alvorada / Palmera",        drive: "23 min" },
      { from: "Arabian Ranches II",        drive: "24 min" },
      { from: "The Ranches Souk",          drive: "22 min" },
      { from: "Arabian Ranches Golf Club", drive: "22 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Can someone at the villa hand the MacBook over for me?", a: "Yes. Book the courier app yourself and anyone at home can hand it over at the gate. WhatsApp us the tracking link and tell us whose Mac it is and what's wrong, so we can match it when it arrives." },
      { q: "Can you fix our iPhones and iPads along with the MacBook?", a: "Yes. We repair Mac, iPhone and iPad, so bring or send them together. Each device gets its own free diagnosis and a separate written quote, and you decide which ones go ahead. Apple Watch and AirPods aren't repaired here." },
      { q: "How far is your workshop from Arabian Ranches?", a: "About 22 to 24 minutes by car to Concord Tower, Dubai Media City, depending on which phase you're in. Walk in without an appointment for a diagnosis. We're closed on Sundays and between 12 and 2 pm on Fridays." },
      { q: "My child spilled a drink on the MacBook. What should I do?", a: "Switch it off, don't charge it, and stand it open and upside down so liquid can drain. WhatsApp us, then bring it in or send it with a courier app as soon as you can. Corrosion spreads with time." },
      { q: "Do you offer onsite repair at villas in Arabian Ranches?", a: "Onsite repair is a paid service, available when a technician is free. Send the model and fault on WhatsApp and you'll get the visit charge before anything is booked. Bigger jobs come back to the workshop bench." },
      { q: "Is it safe to send a MacBook with a courier app?", a: "It travels fine if it's packed properly. Shut it down, put it in a padded sleeve or its original box, and don't send the charger unless we ask. Send us the tracking link on WhatsApp so we know it's coming." },
      { q: "How long does a MacBook battery replacement take?", a: "Often the same day if the battery for your model is in stock. Screens, keyboards and trackpads are similar. Logic board work takes longer, and the written quote tells you the timeline before you agree." },
      { q: "Do repairs come with a warranty?", a: "Yes, in writing. Hardware repairs carry up to 12 months; screens get 90 days and batteries 3 months. Keep the WhatsApp thread, since it holds the quote and the work we agreed." },
    ],
    reviewIndexes: [0, 5, 13, 17, 21, 25],
  },
  {
    slug: "emirates-living",
    area: "Emirates Living",
    short: "Emirates Living",
    driveTime: "12 minutes",
    metroNote: "The workshop is a 12-minute drive from the Emirates Living communities. The closest stations are Dubai Internet City and DMCC on the Red Line; at DMCC, change to the tram and ride to the Palm Jumeirah stop, a 3-minute walk from Concord Tower.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Emirates Hills", "The Springs Souk", "Meadows Village", "The Lakes", "Montgomerie Golf Course", "Emirates Golf Club"],
    landmarkLine: "Across Emirates Hills, The Springs, The Meadows and The Lakes, by the Montgomerie golf course.",
    intro:
      "Just 12 minutes separate the Emirates Living villas from our workshop in Concord Tower, Dubai Media City. Emirates Hills, The Springs, The Meadows and The Lakes sit around the Montgomerie golf course off Sheikh Zayed Road, about as close as a villa community gets to us. That makes MacBook repair simple: drop the Mac in on the school run or on the way to work, with no appointment needed for the diagnosis. If the day is too full, a same-day courier app does the trip for you, and a paid onsite visit is possible when a technician is free.",
    whyChoose:
      "Being this close changes the maths. A Springs or Meadows family can drop a MacBook in the morning and, if it's a screen or battery with the part in stock, often have it back the same day. We repair iPhone and iPad too, so the cracked phone can come in the same bag. Shafiq repairs logic boards at component level, so a board fault doesn't automatically mean replacing the whole Mac. Diagnosis is free, the quote is fixed in writing, and if it can't be fixed you don't pay.",
    pickupNote:
      "From The Springs or The Meadows it's about 12 minutes to Concord Tower. Parking is on site and we're Office #45 on the 10th floor. If you're stuck at home, book a same-day courier app from the villa gate and WhatsApp 055 741 3706 the tracking link, the Mac model and a photo of the fault. Paid onsite visits are possible when a technician is free.",
    travel: [
      { from: "The Springs",               drive: "12 min" },
      { from: "The Meadows",               drive: "12 min" },
      { from: "The Lakes",                 drive: "13 min" },
      { from: "Emirates Hills",            drive: "13 min" },
      { from: "The Springs Souk",          drive: "12 min" },
      { from: "Montgomerie / Golf border", drive: "12 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Which communities count as Emirates Living?", a: "Emirates Hills, The Springs, The Meadows and The Lakes, the Emaar villa communities around the Montgomerie golf course. All of them are about 12 to 13 minutes' drive from our workshop in Dubai Media City." },
      { q: "Can I drop my MacBook off on the way to work?", a: "Yes. We open at 9 am Monday to Saturday, with a break from 12 to 2 pm on Fridays, and no appointment is needed for a diagnosis. Leave it with us and the written quote comes to you on WhatsApp." },
      { q: "Is a courier app OK for sending a MacBook from my villa?", a: "Yes. Book a same-day courier app, hand the Mac over at the gate in its box or a sleeve, and send us the tracking link on WhatsApp. We'll agree how it comes back with you once the repair is finished." },
      { q: "Do you fix iPhones too, or just Macs?", a: "Both, plus iPads. Bring the household's devices in together and each one gets a free diagnosis and its own written quote. We don't service Apple Watch or AirPods." },
      { q: "Can a technician visit our villa in The Springs?", a: "If one is free, yes, as a paid onsite visit. The charge is quoted on WhatsApp before you book. Given how close the workshop is, dropping the Mac in yourself is often the quicker option." },
      { q: "Water got into my MacBook keyboard. Is it fixable?", a: "Often, if it's dealt with fast. Turn it off and don't plug it in. Bring it in that day if you can: we open the case, clean the board and check for corrosion before quoting. Keyboard-only damage with the part in stock can be a same-day job." },
      { q: "Can you recover photos from a MacBook that won't start?", a: "Often, yes. Family photos are what people most want saved, and we recover data from Macs that won't boot. You'll get a written quote on WhatsApp before any attempt is made." },
      { q: "Is the warranty in writing?", a: "Yes. You get a written warranty of up to 12 months on hardware repairs, with screens at 90 days and batteries at 3 months. It covers the work we did and the parts we fitted." },
    ],
    reviewIndexes: [4, 9, 12, 16, 20, 24],
  },
  {
    slug: "al-quoz",
    area: "Al Quoz",
    short: "Al Quoz",
    driveTime: "14 minutes",
    metroNote: "Equiti station on the Red Line serves Al Quoz. From there it's a short taxi to Concord Tower, or ride the Red Line to Al Fardan Exchange and walk about 15 minutes.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Alserkal Avenue", "Times Square Center", "Oasis Centre", "Al Quoz Industrial Area 1-4", "Dubai Garden Glow", "Al Khail Gate"],
    landmarkLine: "15 minutes from Alserkal Avenue, Times Square Center and the Al Quoz industrial blocks.",
    intro:
      "Creative studios around Alserkal Avenue, design offices, warehouses and staff accommodation all share Al Quoz, the strip between Sheikh Zayed Road and Al Khail Road. It's about 14 minutes by car from our workshop in Concord Tower, Dubai Media City. The Macs here work hard: MacBook Pros running studio jobs, iMacs in design offices, Mac minis behind displays and tills. For MacBook repair or desktop work, drive in without an appointment, send the machine with a same-day courier app, or ask for a paid onsite visit when a technician is free. Every quote is fixed in writing first.",
    whyChoose:
      "A studio in Al Quoz can't sit idle while a Mac is sent away to a service centre. We diagnose free, quote in writing on WhatsApp, and finish many screen, battery and keyboard jobs the same day when the part is in stock. Board faults are repaired on the board itself, at component level, instead of swapping the whole logic board. Dust is the other Al Quoz problem: warehouse air clogs fans and heatsinks, and a proper internal clean often cures the throttling. If we can't fix it, there's no charge.",
    pickupNote:
      "From Alserkal Avenue or the industrial blocks it's roughly 14 to 17 minutes to Concord Tower. If you'd rather keep working, book a same-day courier app from your unit and drop a location pin, since Al Quoz addresses are hard to find. WhatsApp Shafiq on 055 741 3706 with the tracking link, the model and a photo of the fault. Pack an iMac or Mac Studio in its original box if you still have it. Paid onsite visits are possible when a technician is free.",
    travel: [
      { from: "Alserkal Avenue",          drive: "15 min" },
      { from: "Al Quoz Industrial 1",     drive: "14 min" },
      { from: "Al Quoz Industrial 3 / 4", drive: "17 min" },
      { from: "Times Square Center",      drive: "13 min" },
      { from: "Oasis Centre",             drive: "14 min" },
      { from: "Al Khail Gate",            drive: "18 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Can I send a Mac from a warehouse or studio unit in Al Quoz?", a: "Yes. Book a same-day courier app to your unit or loading bay, add a location pin because street numbers here confuse couriers, and WhatsApp us the tracking link with the model and fault." },
      { q: "Do you repair iMacs and Mac minis from Al Quoz studios?", a: "Yes - iMac, Mac mini, Mac Studio and Mac Pro as well as MacBooks. Desktops travel badly loose, so use the original box or bring the machine in by car. The diagnosis is free either way." },
      { q: "Our studio has several Macs that need work. Can they come in together?", a: "Yes. Bring them in or send them in one courier booking, each one labelled. Every machine gets a free diagnosis and the studio gets a written quote per Mac, so you can decide which to repair." },
      { q: "My MacBook is full of dust from the warehouse. Is that repairable?", a: "Yes, and it's common in Al Quoz. Clogged fans and heatsinks cause throttling and sudden shutdowns. An internal clean and fresh thermal paste usually brings temperatures back to normal, often on the same day." },
      { q: "Our point-of-sale Mac mini stopped booting. What now?", a: "WhatsApp us straight away with the model and what happened. Diagnosis is free, and if the data on it matters we recover it before any board work starts. Bring it in by car or send it with a courier app." },
      { q: "Can a technician come to our office in Al Quoz?", a: "When a technician is free, yes, as a paid onsite visit quoted on WhatsApp before you book. Some faults, like board repairs, still need the workshop bench, so we'll tell you which kind yours is." },
      { q: "Where do I drop off a Mac near Al Quoz?", a: "Concord Tower, Office #45, 10th floor, Dubai Media City, about 14 minutes from most of Al Quoz. Parking is on site and no appointment is needed for the diagnosis." },
      { q: "What are your opening hours if I come from Al Quoz after work?", a: "Monday to Thursday and Saturday, 9 am to 7 pm. Friday is 9 am to 12 pm, then 2 pm to 7 pm. We're closed on Sunday, so a Saturday drop-off works if weekdays are tight." },
    ],
    reviewIndexes: [1, 6, 11, 14, 19, 22],
  },
  {
    slug: "dubai-sports-city",
    area: "Dubai Sports City",
    short: "Sports City",
    driveTime: "22 minutes",
    metroNote: "There is no metro station in Sports City, so most people here drive the 22 minutes to the workshop or send the Mac with a same-day courier app. If you use the Red Line from elsewhere, Al Fardan Exchange is about a 15-minute walk from us.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Dubai International Stadium", "The Els Club", "Victory Heights", "Canal Residence West", "ICC Academy", "Bermuda Views"],
    landmarkLine: "20 minutes from Dubai International Stadium, Victory Heights and Canal Residence West.",
    intro:
      "Apartment towers around Dubai International Stadium and the Victory Heights villas make up most of Dubai Sports City, off Al Hessa Street and Sheikh Mohammed Bin Zayed Road. There's very little repair provision inside the community, and our workshop in Concord Tower, Dubai Media City, is roughly 22 minutes away. MacBook repair from here comes down to three routes. Drive in and walk up without an appointment. Book a same-day courier app from your tower and WhatsApp us the tracking link, the fastest way if you can't leave. Or ask about a paid onsite visit if a technician is free.",
    whyChoose:
      "The real reason to come to us from Sports City is what happens once the Mac arrives. The diagnosis is free, the quote is fixed in writing on WhatsApp, and there's no charge if we can't fix the machine. Screens, batteries and keyboards are often done the same day when the part's in stock. Board faults take longer because they're repaired at component level rather than by swapping the whole board. Summer heat is hard on Macs with dusty fans, and a clean and repaste is a routine bench job for us.",
    pickupNote:
      "It's about 22 minutes from Elite Sports Residence or Canal Residence West to Concord Tower, a little longer from Victory Heights. If you're at work, leave the Mac with your building's security desk and book a same-day courier app from there. WhatsApp Shafiq on 055 741 3706 with the tracking link, the model and a photo of the fault, and once it's fixed we book a courier to bring it back. A paid onsite visit is possible when a technician is free.",
    travel: [
      { from: "Dubai International Stadium", drive: "22 min" },
      { from: "Elite Sports Residence",      drive: "22 min" },
      { from: "Victory Heights",             drive: "24 min" },
      { from: "Canal Residence West",        drive: "23 min" },
      { from: "The Els Club",                drive: "24 min" },
      { from: "Bermuda Views / Hub Canal",   drive: "22 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Is there a MacBook repair shop inside Dubai Sports City?", a: "Very little, which is why residents tend to come to us in Concord Tower, Dubai Media City, about 22 minutes away. Drive in without an appointment, or send the Mac with a same-day courier app." },
      { q: "Can I send a MacBook from Victory Heights?", a: "Yes. Book a same-day courier app from your villa in Morella, Novelia, Esmeralda or any other sub-community, hand the Mac over at the gate, and WhatsApp us the tracking link with a note of the fault." },
      { q: "Do I have to be home to send it?", a: "No. Leave the Mac with someone you trust or your building's security desk, and book the courier app from there. Send us the tracking link and tell us whose Mac it is." },
      { q: "Is same-day repair realistic from Sports City?", a: "For in-stock parts, often yes, especially if the Mac reaches us in the morning. Logic board work takes longer because it's done at component level. The written quote includes a realistic timeline." },
      { q: "Do you repair iMac and Mac Studio for Sports City customers?", a: "Yes, along with MacBooks, Mac mini and Mac Pro. Desktops are heavy and easy to damage in transit, so bring them in by car if you can. Otherwise pack them in the original box." },
      { q: "Is there an onsite repair option in Sports City?", a: "Yes, but it's paid and only when a technician is free. WhatsApp the model and the problem and you'll get the visit charge first. Not every fault can be fixed away from the workshop." },
      { q: "How long is the drive to Concord Tower from Sports City?", a: "About 22 minutes from the stadium towers and around 24 from Victory Heights or The Els Club. Parking is on site, and we're open until 7 pm every day except Sunday." },
      { q: "My MacBook overheats badly in summer here. Can that be fixed?", a: "Usually, yes. Dubai summers push dust-clogged fans and dried thermal paste past their limit. An internal clean and repaste is a same-day job in most cases and brings temperatures and fan noise back down." },
    ],
    reviewIndexes: [2, 7, 10, 15, 18, 23],
  },
  {
    slug: "al-furjan",
    area: "Al Furjan",
    short: "Al Furjan",
    driveTime: "18 minutes",
    metroNote: "Al Furjan station on the Red Line puts the workshop within reach without a car. Ride towards the city, change to the tram at DMCC or Sobha Realty and get off at Palm Jumeirah, a 3-minute walk from Concord Tower.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Al Furjan Metro Station", "Masakin Al Furjan", "Murano Residences", "Avenue Residence", "Al Furjan Pavilion", "Discovery Gardens border"],
    landmarkLine: "18 minutes from Al Furjan Metro, Masakin Al Furjan and the Murano Residences.",
    intro:
      "Young professionals who work in Media City, Internet City and JLT make up a big share of Al Furjan, the growing villa-and-apartment community off Sheikh Zayed Road and Mohammed Bin Zayed Road. Our workshop in Concord Tower, Dubai Media City, is about 18 minutes away, which for many residents is on the commute. That's the easiest way to get MacBook repair done: drop the Mac in on the way to work, with no appointment needed for a diagnosis. Otherwise send it with a same-day courier app, or book a paid onsite visit when a technician is free.",
    whyChoose:
      "Board-level Mac work is a specialist job, and it's most of what Shafiq does at the bench. A Mac that another shop calls dead is often a power fault on the logic board that can be repaired at component level. We handle MacBooks and desktop Macs, plus iPhone and iPad. Diagnosis is free and there's no charge if we can't fix it. Screens, batteries and keyboards are often finished the same day when the part is in stock, so a morning drop-off can be ready by the evening.",
    pickupNote:
      "If you commute towards Media City, Concord Tower is about 18 minutes from Murano Residences or Masakin Al Furjan, and parking is on site. On a day you can't come in, book a same-day courier app from your lobby or villa gate and WhatsApp Shafiq on 055 741 3706 with the tracking link, the model and a photo of the fault. A paid onsite visit is possible when a technician is free.",
    travel: [
      { from: "Al Furjan Metro Station",  drive: "18 min" },
      { from: "Masakin Al Furjan",        drive: "19 min" },
      { from: "Murano Residences",        drive: "18 min" },
      { from: "Avenue Residence",         drive: "18 min" },
      { from: "Al Furjan villas (South)", drive: "21 min" },
      { from: "Discovery Gardens border", drive: "16 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Can I drop my MacBook off on my commute from Al Furjan?", a: "Yes. We open at 9 am, and Concord Tower in Dubai Media City is about 18 minutes from Al Furjan. Leave it on the way in, the written quote reaches you on WhatsApp, and you come back for it once it's done." },
      { q: "Can I send it from a villa as well as an apartment?", a: "Yes. A same-day courier app works from either. Hand the Mac over at your gate or lobby reception, and send us the tracking link on WhatsApp with the model and the fault." },
      { q: "Is there parking at your workshop?", a: "Yes, Concord Tower has parking on site. Come up to Office #45 on the 10th floor; no appointment is needed for a diagnosis. We look at the Mac and send the written quote on WhatsApp." },
      { q: "Do you fix iMacs and Mac minis for Al Furjan homes?", a: "Yes, along with Mac Studio, Mac Pro and every MacBook. A desktop is safest brought in by car or sent in its original box. A paid onsite visit is another option when a technician is free." },
      { q: "How fast is a screen or battery replacement?", a: "Often the same day, when the part for your model is in stock. Drop it off in the morning and it can be ready that evening. You approve the written price before we start." },
      { q: "My MacBook will not turn on at all. Is it worth repairing?", a: "Often, yes. A dead Mac is usually a power fault on the logic board rather than a write-off. Diagnosis is free, there's no fee if we can't fix it, and we can attempt data recovery first." },
      { q: "Will a technician come to my building in Al Furjan?", a: "Possibly, as a paid onsite visit when a technician is free. Tell us the fault on WhatsApp and we'll quote the visit charge before you book. Many repairs are quicker done at the workshop." },
      { q: "Do you repair iPhones as well as Macs?", a: "Yes, iPhone and iPad as well as every Mac, so bring the cracked phone along with the laptop. Each device gets a free diagnosis and its own written quote. We don't repair Apple Watch or AirPods." },
    ],
    reviewIndexes: [3, 8, 12, 17, 20, 25],
  },
  {
    slug: "dubai-design-district",
    area: "Dubai Design District",
    short: "d3",
    driveTime: "20 minutes",
    metroNote: "Business Bay station on the Red Line is the nearest to d3, about 8 minutes away by taxi. From there, ride to Al Fardan Exchange and walk about 15 minutes, or change to the tram at Sobha Realty for the Palm Jumeirah stop, a 3-minute walk away.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["d3 Building 1-11", "Design Quarter", "Dubai Institute of Design and Innovation", "d3 Waterfront", "Ras Al Khor Road side", "Business Bay border"],
    landmarkLine: "20 minutes from the d3 office buildings, the Design Quarter and the d3 waterfront.",
    intro:
      "Fashion houses, architecture practices, agencies and the Dubai Institute of Design and Innovation fill the d3 buildings between Business Bay and Ras Al Khor Road. Almost every desk runs a MacBook Pro, an iMac or a Mac Studio. Our workshop in Concord Tower, Dubai Media City, is about 20 minutes away by car. For MacBook repair from Dubai Design District, you can walk in without an appointment, send the machine from your building reception with a same-day courier app, or book a paid onsite visit when a technician is free. The quote is fixed in writing on WhatsApp first.",
    whyChoose:
      "For a d3 studio, a Mac out of action is billable work stopped. Board-level repair is where we make the biggest difference: Shafiq fixes the logic board at component level instead of replacing it, which on a loaded MacBook Pro or Mac Studio can cost far less than a new board. If the Mac holds client files that aren't backed up, we recover the data first and confirm it with you before touching anything else. Screens, batteries and keyboards are often done the same day when the part is in stock.",
    pickupNote:
      "From the d3 buildings it's about 20 minutes to Concord Tower, a bit less from the Business Bay side. If the studio can't spare anyone, leave the Mac at your building reception and book a same-day courier app from there. WhatsApp Shafiq on 055 741 3706 with the tracking link, the model, a photo of the fault and any deadline. Several machines can go in one booking. A paid onsite visit is possible when a technician is free.",
    travel: [
      { from: "d3 Building 1-4",           drive: "20 min" },
      { from: "d3 Building 5-8",           drive: "20 min" },
      { from: "Design Quarter",            drive: "21 min" },
      { from: "Dubai Institute of Design", drive: "21 min" },
      { from: "d3 Waterfront",             drive: "22 min" },
      { from: "Business Bay border",       drive: "18 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Can you repair several Macs from one d3 studio?", a: "Yes. Send or bring them together and each one gets a free diagnosis. You'll get a written quote per machine on WhatsApp, so the studio can decide what to repair and in what order." },
      { q: "Do you repair Mac Studio and iMac, not just MacBooks?", a: "Yes. Mac Studio, iMac, Mac mini and Mac Pro are all repaired at the workshop. Desktops are safest brought in by car or sent in their original box, so the display and chassis don't take knocks." },
      { q: "My MacBook Pro holds unbacked-up client work and won't boot. What happens first?", a: "Data first. We attempt recovery before any board work, confirm with you what came back, and only then discuss the repair. On Apple silicon and T2 Macs the storage is soldered to the board, so this is specialist work." },
      { q: "Is there a faster option for an urgent studio deadline?", a: "Tell us the deadline on WhatsApp before you send the Mac. With the part in stock, many repairs are finished the same day. If we can't meet your date, we'll say so up front rather than let you wait." },
      { q: "How do I send a Mac from d3 by courier?", a: "Book a same-day courier app from your building reception, hand the Mac over packed in a sleeve or box, and WhatsApp us the tracking link. When it's fixed, we book a courier to bring it back to the same reception." },
      { q: "Can a technician come to our studio in d3?", a: "When a technician is free, yes. It's a paid onsite visit, and the charge is quoted on WhatsApp before you book. Board repairs and data recovery need the workshop bench, so those still come to us." },
      { q: "Is there parking if I drive the Mac over from d3?", a: "Yes, Concord Tower has parking on site. Bring the Mac up to Office #45 on the 10th floor; no appointment is needed for a diagnosis. On Fridays we close between 12 and 2 pm." },
      { q: "Can you fix a MacBook Pro screen with lines or flicker?", a: "Usually. Lines and flicker can come from the panel, the display cable or the board, and the free diagnosis tells us which. Screen repairs carry a 90-day warranty, and the quote comes in writing first." },
    ],
    reviewIndexes: [0, 5, 13, 16, 21, 24],
  },
  {
    slug: "dubai-creek-harbour",
    area: "Dubai Creek Harbour",
    short: "Creek Harbour",
    driveTime: "32 minutes",
    metroNote: "There is no metro station inside Creek Harbour, so most people here either drive the 32 minutes to the workshop or send the Mac with a same-day courier app. Once on the Red Line, ride to Al Fardan Exchange; Concord Tower is about a 15-minute walk from there.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Creek Marina", "The Grand", "Address Harbour Point", "Creek Beach", "Dubai Creek Tower site", "Ras Al Khor Wildlife Sanctuary"],
    landmarkLine: "30 minutes from Creek Marina, Address Harbour Point and Creek Beach.",
    intro:
      "Built around the creek on the far side of Ras Al Khor, Dubai Creek Harbour is almost entirely new towers, home to residents who moved in over the past few years. There isn't much in the way of established repair services nearby, and our workshop in Concord Tower, Dubai Media City, is about 32 minutes away by car. That distance shapes how MacBook repair works from here. Many people book a same-day courier app from the tower lobby and WhatsApp us the tracking link. Some drive over on a Saturday. A paid onsite visit is possible when a technician is free.",
    whyChoose:
      "Living this far from Media City, you want the repair done right the first time. We diagnose free, fix the quote in writing on WhatsApp before any work, and charge nothing if the machine can't be repaired. Shafiq repairs boards at component level, so a liquid-damaged or dead Mac isn't automatically a write-off. Screens and batteries are often done the same day when the part is in stock. And because a courier app gets the Mac to us without you leaving the building, the distance matters less than it looks on the map.",
    pickupNote:
      "Many people here send the Mac rather than drive. Book Careem Box or any same-day courier app from your tower lobby, or leave it packed with the concierge to hand over. WhatsApp Shafiq on 055 741 3706 with the tracking link, the model and a photo of the fault. If you'd rather drive, it's about 32 minutes to Concord Tower and parking is on site. Paid onsite visits happen when a technician is free.",
    travel: [
      { from: "Creek Marina",          drive: "32 min" },
      { from: "Address Harbour Point", drive: "32 min" },
      { from: "The Grand",             drive: "33 min" },
      { from: "Creek Beach towers",    drive: "34 min" },
      { from: "Creek Gate",            drive: "31 min" },
      { from: "Harbour Views",         drive: "32 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Do you actually cover Dubai Creek Harbour?", a: "Yes. The workshop is about 32 minutes away in Concord Tower, Dubai Media City. You can drive in, send the Mac with a same-day courier app, or ask for a paid onsite visit when a technician is free." },
      { q: "What's the quickest way to get my MacBook to you from Creek Harbour?", a: "A same-day courier app from your tower. Book it, hand the Mac over in the lobby, and send us the tracking link on WhatsApp. There's no waiting on us, and the diagnosis starts when it lands." },
      { q: "Can the concierge hand my MacBook to the courier?", a: "Yes, if you book the courier app to the reception desk. Leave the Mac packed with the concierge, tell them a courier is coming, and WhatsApp us the tracking link and the fault." },
      { q: "Can I get a screen repair back on the same day from Creek Harbour?", a: "Often, if the part is in stock and the Mac reaches us early. Send it in the morning by courier app and we'll update you on WhatsApp. Once it's done, collect it, or we book a courier to bring it back." },
      { q: "Is onsite repair available at Creek Harbour?", a: "Sometimes. Onsite visits are paid and only happen when a technician is free, and the charge is quoted on WhatsApp before booking. Bigger faults mean the Mac needs to come to the workshop." },
      { q: "Can I send an iMac from Creek Harbour?", a: "Yes, but pack it well. Use the original box if you have it, since the display is the fragile part on a longer trip. A Mac mini travels more easily. Both get a free diagnosis when they arrive." },
      { q: "My MacBook got wet by the creek-side pool. What should I do now?", a: "Power it off immediately, don't plug it in to charge, and message us. Liquid damage gets worse as corrosion spreads. We clean the board and quote in writing once we can see the real damage." },
      { q: "Can I drop it off in person if I'm heading to Media City?", a: "Yes. Concord Tower, Office #45, 10th floor, Dubai Media City. Parking is on site and no appointment is needed for a diagnosis. We're open on Saturday but closed on Sunday." },
    ],
    reviewIndexes: [1, 9, 14, 18, 22, 25],
  },
  {
    slug: "festival-city",
    area: "Dubai Festival City",
    short: "Festival City",
    driveTime: "30 minutes",
    metroNote: "Festival City has no metro station of its own, so most customers here either drive across to Concord Tower, Dubai Media City or book a same-day courier app to bring the Mac to us. The nearest Metro to the workshop is Al Fardan Exchange on the Red Line, about a 15-minute walk.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Festival City Mall", "Al Badia Hillside Village", "Marsa Al Seef side", "InterContinental Dubai Festival City", "Festival Tower", "Dubai Festival City Marina"],
    landmarkLine: "30 minutes from Festival City Mall, Al Badia Hillside and the Festival City marina.",
    intro:
      "On the creek off Ras Al Khor Road, Dubai Festival City is roughly 30 minutes by car from our MacBook repair workshop at Concord Tower, Dubai Media City. The area mixes Festival City Mall, the hotels around the marina, the offices in Festival Tower and the Al Badia Hillside villas, so the Macs that reach us from here range from family MacBook Airs to office iMacs and Mac minis. You can drive in without an appointment, send the Mac with a same-day courier app you book yourself, or ask about a paid onsite visit. Diagnosis is free and the quote is fixed in writing on WhatsApp first.",
    whyChoose:
      "Festival City has plenty of retail but very little genuine board-level Mac repair. Most counters either swap the whole logic board at replacement cost or send the machine away for weeks. Shafiq and the bench here repair the board itself at component level, which is often the difference between a workable bill and being told to buy a new Mac. Diagnosis is free, and if we can't fix it you don't pay. The 30-minute drive along Ras Al Khor Road is the only trip you make, and if you'd rather not make it, a courier you book does it for you.",
    pickupNote:
      "From Festival City the simplest drive is via Ras Al Khor Road, about 28 to 31 minutes depending on where you start. Can't get away? Book a same-day courier app to your office reception, hotel desk or Al Badia villa, hand the Mac over, and WhatsApp 055 741 3706 with the tracking link, the model and a photo of the fault. If a technician is free, a paid onsite visit is possible, quoted on WhatsApp before you book.",
    travel: [
      { from: "Festival City Mall",        drive: "30 min" },
      { from: "Al Badia Hillside Village", drive: "31 min" },
      { from: "InterContinental / Crowne", drive: "30 min" },
      { from: "Festival Tower offices",    drive: "30 min" },
      { from: "Festival City Marina",      drive: "31 min" },
      { from: "Ras Al Khor Road side",     drive: "28 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long is the drive from Festival City to your workshop?", a: "About 30 minutes by car, a little less from the Ras Al Khor Road side. The workshop is Office #45, 10th Floor, Concord Tower, Dubai Media City, and you don't need an appointment for a diagnosis." },
      { q: "Can I send my Mac from a Festival City office instead of bringing it?", a: "Yes. Book a same-day courier app to your office reception, hand the Mac to the courier and WhatsApp us the tracking link. We diagnose it free and send the written quote on WhatsApp before any work starts." },
      { q: "I'm staying at a Festival City hotel. How do I get my MacBook repaired?", a: "Leave the Mac at reception for a courier you book through a same-day courier app, then WhatsApp us the hotel name and the tracking link. Once the repair is done, we book a courier to bring it back to the same desk." },
      { q: "Do you repair iMac and Mac mini from Festival City?", a: "Yes. iMac, Mac mini, Mac Studio and Mac Pro alongside MacBooks. If a courier is bringing a desktop, pack the display or chassis well, ideally in the original box, and tell us on WhatsApp it's on the way." },
      { q: "Can a technician come to Festival City to fix my Mac?", a: "Sometimes. Onsite repair is a paid service and only happens when a technician is free. Message us on WhatsApp with the model and the fault, and we'll quote the visit before you book anything." },
      { q: "Is same-day MacBook repair possible if I drive in from Festival City?", a: "Often, yes. Screens, batteries, keyboards and trackpads can usually be finished the same day when the part is in stock. Logic board work takes longer because it's done at component level." },
      { q: "Another shop quoted a full logic board replacement. Is there an alternative?", a: "Often, yes. Most board faults come down to a small number of failed components rather than the whole board. We diagnose to component level free of charge and quote the real repair before you commit to a replacement." },
      { q: "Is there parking at Concord Tower?", a: "Yes, there's parking at the tower. Come up to Office #45 on the 10th floor. We're open Mon-Thu and Sat 9 am-7 pm, and Friday 9 am-12 pm and 2 pm-7 pm. Sunday is closed." },
    ],
    reviewIndexes: [2, 6, 11, 15, 19, 23],
  },
  {
    slug: "international-city",
    area: "International City",
    short: "International City",
    driveTime: "35 minutes",
    metroNote: "International City isn't on the metro, so residents here usually drive to Concord Tower, Dubai Media City or book a same-day courier app to send the Mac over. Anyone who does reach the Red Line can ride it to Al Fardan Exchange and walk about 15 minutes.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Dragon Mart 1 & 2", "England Cluster", "China Cluster", "Greece Cluster", "Warsan Village", "Al Warsan Lake"],
    landmarkLine: "35 minutes from Dragon Mart and the England, China and Greece clusters.",
    intro:
      "Out past Al Warsan, International City is one of Dubai's most densely populated districts, built as country-themed clusters around Dragon Mart and about 35 minutes by car from Concord Tower, Dubai Media City. Phone and laptop trade is everywhere near Dragon Mart, but genuine MacBook repair at board level is hard to find. So people from the England, China and Greece clusters either drive the Mac to us or send it with a same-day courier app they book themselves. Walk in without an appointment for a free diagnosis, and the price is fixed in writing on WhatsApp before we touch anything.",
    whyChoose:
      "From International City it comes down to cost and trust. The diagnosis is free and there's no charge if we can't fix the machine, so you never pay to hear bad news. Every price is fixed in writing on WhatsApp before work starts, and it doesn't creep up once the Mac is open. Because the logic board is repaired at component level rather than swapped, the quote is usually well below a board replacement. If the 35-minute drive doesn't suit you, a courier you book brings the Mac to the bench instead.",
    pickupNote:
      "Clusters are easy to mix up, so if you book a courier app such as Careem Box, drop the pin on your exact building entrance, for example England Cluster X09, before the courier sets off. Once the Mac is handed over, WhatsApp 055 741 3706 the tracking link, the model and a photo or short description of the fault. Driving yourself? Allow about 35 minutes to Concord Tower. A paid onsite visit is possible only when a technician is free.",
    travel: [
      { from: "England Cluster",             drive: "35 min" },
      { from: "China Cluster / Dragon Mart", drive: "35 min" },
      { from: "Greece Cluster",              drive: "36 min" },
      { from: "Italy / Spain Cluster",       drive: "36 min" },
      { from: "Warsan Village",              drive: "34 min" },
      { from: "Al Warsan Lake side",         drive: "37 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Is International City too far to use your workshop?", a: "No. It's about 35 minutes by car to Concord Tower, Dubai Media City, and many people skip the drive by sending the Mac with a same-day courier app. Either way the diagnosis is free and the quote comes in writing first." },
      { q: "How do I send my MacBook by courier from International City?", a: "Book a same-day courier app to your building, pin the exact cluster entrance, and hand the Mac over in a padded sleeve. Then WhatsApp 055 741 3706 with the tracking link and the fault. After the repair, we book a courier to bring it back to the same entrance." },
      { q: "Is there a cheaper option than replacing the logic board?", a: "Usually yes. Most board faults are a handful of failed components, not the whole board. We repair at component level, which typically costs far less than a board replacement quote. Diagnosis is free either way." },
      { q: "How do I know the price will not change once you open it?", a: "The price is fixed in writing on WhatsApp after the free diagnosis and before any work starts. If we find something else, we come back to you for approval rather than adjusting the bill." },
      { q: "Can someone come to my cluster to repair the Mac there?", a: "Only as a paid onsite visit, and only when a technician is free. Tell us the model and fault on WhatsApp and we'll quote the visit first. For most faults, sending the Mac by courier is quicker." },
      { q: "Can you repair an older Intel MacBook, or is it too old?", a: "We repair Intel MacBooks as well as Apple silicon. Whether it's worth repairing depends on the fault and the model. We'll tell you honestly after the free diagnosis rather than take on work that isn't worth your money." },
      { q: "My MacBook will not turn on. Can you still get my files off it?", a: "Usually yes. On older Intel Macs the SSD can often be read directly. On T2 and Apple silicon Macs the storage is soldered and needs specialist board-level recovery, which we do at the workshop." },
      { q: "Where do I park when I bring the Mac in?", a: "There's parking at Concord Tower itself. Take the lift to the 10th floor, Office #45. No appointment is needed for a diagnosis. We're open Monday to Saturday with a Friday break from 12 to 2 pm, and closed on Sunday." },
    ],
    reviewIndexes: [4, 7, 12, 17, 21, 24],
  },
  {
    slug: "bluewaters",
    area: "Bluewaters Island",
    short: "Bluewaters",
    driveTime: "12 minutes",
    metroNote: "Bluewaters is a footbridge walk from JBR, where the Dubai Tram runs. Ride the tram to the Palm Jumeirah stop, a 3-minute walk from Concord Tower.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Ain Dubai", "Caesars Palace Dubai", "Bluewaters Residences 1-10", "The Wharf", "Banyan Tree Residences", "Bluewaters Bay"],
    landmarkLine: "12 minutes from Ain Dubai, Caesars Palace and the Bluewaters Residences.",
    intro:
      "Just off JBR, Bluewaters Island is a compact, high-end island about 12 minutes by car from our MacBook repair bench at Concord Tower, Dubai Media City. It holds the Bluewaters Residences towers, the Banyan Tree apartments, Caesars Palace and the hotels around Ain Dubai, plus The Wharf retail strip, but no repair workshop. That short hop makes walking in the easy option, with no appointment needed for a diagnosis. If you can't leave, a same-day courier app can bring the Mac over from your lobby, and the quote is fixed in writing on WhatsApp before any work.",
    whyChoose:
      "Bluewaters is close enough to drop a Mac off on the way to work and come back for it, which beats crossing to a mall service counter twice and leaving it with someone who sends it on anyway. This is a Mac workshop: MacBook Air and Pro, iMac, Mac mini, Mac Studio and Mac Pro, Intel and Apple silicon, including logic board work most counters won't attempt. Diagnosis is free, there's no charge if we can't fix it, and the price is agreed in writing before anything is opened.",
    pickupNote:
      "It's a short drive off the island and past JBR to Media City, roughly 12 minutes. Kerbside stopping on Bluewaters is tight, so if you book a same-day courier app instead, have the courier meet you at your tower lobby or the hotel concierge. Then WhatsApp 055 741 3706 the tracking link, your Mac model and a photo of the fault. A paid onsite visit is possible when a technician is free, quoted on WhatsApp first.",
    travel: [
      { from: "Bluewaters Residences 1-4",   drive: "12 min" },
      { from: "Bluewaters Residences 5-10",  drive: "12 min" },
      { from: "Banyan Tree Residences",      drive: "13 min" },
      { from: "Caesars Palace / Bluewaters", drive: "13 min" },
      { from: "The Wharf",                   drive: "12 min" },
      { from: "JBR side / footbridge",       drive: "10 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How far is your workshop from Bluewaters Island?", a: "About 12 minutes by car, a bit less from the JBR side. Walk into Office #45, 10th Floor, Concord Tower, Dubai Media City with the Mac. A diagnosis needs no appointment and costs nothing." },
      { q: "Where should a courier meet me on Bluewaters?", a: "At your tower lobby or reception. Kerbside access on the island is restricted, so a lobby handover is quicker. Book a same-day courier app, hand the Mac over there, and WhatsApp us the tracking link." },
      { q: "Can the concierge hand my Mac to a courier while I am at work?", a: "Yes, if your building allows it. Leave the Mac with the concierge under your name, book a same-day courier app to that desk, and send us the tracking link. When it's done, we book a courier to bring it back to that desk." },
      { q: "I'm a hotel guest on Bluewaters. Can my MacBook still be repaired?", a: "Yes. The quickest way is a 12-minute taxi to Concord Tower with the Mac. Otherwise leave it with the concierge for a same-day courier app you book, and tell us the hotel on WhatsApp so we can book a courier to bring it back." },
      { q: "Can I send an iMac or Mac Studio from Bluewaters?", a: "Yes, we repair both alongside MacBooks. Pack a desktop carefully, ideally in its original box with the screen protected, before a courier takes it. Message us first and we'll tell you what to expect for that model." },
      { q: "Can my MacBook be fixed the same day if I bring it from Bluewaters?", a: "Often. Screens, batteries, keyboards and trackpads can usually be done the same day when the part is in stock, and bringing it in the morning gives us the most time. Board work takes longer." },
      { q: "Is onsite Mac repair available on Bluewaters?", a: "It's possible as a paid visit when a technician is free. The charge is quoted on WhatsApp before you book. With the workshop only 12 minutes away, most people find walking in quicker." },
      { q: "Sand and sea air near the water - does that damage a MacBook?", a: "It can. Salt-laden air speeds up corrosion on exposed board contacts, and fine sand clogs fans. If your Mac is running hot or the ports have gone intermittent, a clean and inspection is worth doing before it becomes a board fault." },
    ],
    reviewIndexes: [0, 6, 10, 15, 20, 23],
  },
  {
    slug: "meydan",
    area: "Meydan",
    short: "Meydan",
    driveTime: "25 minutes",
    metroNote: "Meydan has no metro station of its own, so most customers here drive the 25 minutes to Concord Tower, Dubai Media City or book a same-day courier app to send the Mac in. By Red Line from elsewhere, get off at Al Fardan Exchange, about a 15-minute walk from us.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Meydan Racecourse", "The Meydan Hotel", "Meydan One", "Nad Al Sheba", "The Track Meydan Golf", "Meydan Avenue"],
    landmarkLine: "25 minutes from Meydan Racecourse, The Meydan Hotel and Nad Al Sheba.",
    intro:
      "Around the racecourse and Nad Al Sheba, Meydan spreads inland from Al Khail Road, roughly 25 minutes by car from Concord Tower, Dubai Media City. It's a mix of villa communities, the newer apartment buildings along Meydan Avenue, and the offices and hospitality around The Meydan Hotel. Repair options inside the area are thin, and almost nothing nearby does board-level MacBook repair. Drive in for a free diagnosis with no appointment, or book a same-day courier app from your gate or lobby and WhatsApp us the tracking link. Every quote is fixed in writing first.",
    whyChoose:
      "From Meydan the usual alternative is a mall counter that sends the Mac on to a workshop anyway, so the machine is out of your hands for longer. Here it goes straight to the bench. Diagnosis is free and there's no charge if the machine can't be repaired. The real difference is the board: we repair the logic board at component level rather than quoting a full swap, which on a loaded MacBook Pro or Mac Studio is often the gap between a repair and a replacement. Al Khail Road keeps the drive simple.",
    pickupNote:
      "Al Khail Road is the quickest way across, about 22 minutes from that side and 25 or so from most of Meydan. If you'd rather send it, book a same-day courier app to your villa gate, Meydan Avenue lobby or security desk, and leave the Mac with whoever is home if you're out. WhatsApp 055 741 3706 the tracking link, the model and a photo of the fault. A paid onsite visit can be booked when a technician is free.",
    travel: [
      { from: "Meydan Racecourse",       drive: "25 min" },
      { from: "Meydan Avenue / Riviera", drive: "24 min" },
      { from: "Nad Al Sheba 1-3",        drive: "26 min" },
      { from: "The Meydan Hotel",        drive: "25 min" },
      { from: "Meydan One side",         drive: "26 min" },
      { from: "Al Khail Road side",      drive: "22 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "What's the quickest way to get my Mac to you from Meydan?", a: "Driving in via Al Khail Road, about 25 minutes, with no appointment needed for a diagnosis. If you can't get away, a same-day courier app you book is the fastest alternative, and there's no waiting for us." },
      { q: "Can I send my MacBook from a Nad Al Sheba villa?", a: "Yes. Book a same-day courier app to the villa gate. A family member or helper can hand it over if you're out. WhatsApp us the tracking link and model, and we'll message the free diagnosis and quote once it reaches the bench." },
      { q: "I live on Meydan Avenue. Where should the courier meet me?", a: "At the lobby reception is simplest, since most buildings there have a front desk. Book the courier app to the building name, hand the Mac over in a padded sleeve, and send us the tracking link on WhatsApp." },
      { q: "Do you fix iMac and Mac mini from Meydan homes?", a: "Yes, along with Mac Studio, Mac Pro and every MacBook. A desktop travels better in its original box. If you'd rather not move it, ask about a paid onsite visit, which happens only when a technician is free." },
      { q: "How fast can a MacBook screen or battery be done?", a: "Often the same day when the part is in stock, and the same goes for keyboards and trackpads. Logic board work takes longer because it's repaired at component level. We'll tell you on WhatsApp once the Mac is diagnosed." },
      { q: "I was quoted a whole new logic board. Is that the only option?", a: "Usually not. Most board faults are a small number of failed components rather than the entire board. We diagnose to component level free of charge and quote the actual repair before you commit to a replacement." },
      { q: "Can a technician visit Meydan for an onsite repair?", a: "Yes, as a paid service, but only when a technician is free. The charge is quoted on WhatsApp before booking. Send the model and a photo of the fault so we can say whether onsite makes sense." },
      { q: "Can I just drop the Mac off without booking?", a: "Yes. Walk into Office #45, 10th Floor, Concord Tower, Dubai Media City. There's parking at the tower. Hours are Mon-Thu and Sat 9 am-7 pm, Friday 9 am-12 pm and 2 pm-7 pm, and closed Sunday." },
    ],
    reviewIndexes: [1, 7, 11, 16, 21, 24],
  },
  {
    slug: "town-square",
    area: "Town Square",
    short: "Town Square",
    driveTime: "30 minutes",
    metroNote: "There is no metro serving Town Square, so residents here either drive in to Concord Tower, Dubai Media City or send the Mac with a same-day courier app. On public transport, the stop to aim for is Palm Jumeirah on the Dubai Tram, a 3-minute walk from us.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Town Square Park", "Zahra Apartments", "Hayat Boulevard", "Safi Apartments", "Warda Apartments", "Town Square Dubai villas"],
    landmarkLine: "30 minutes from Town Square Park, Hayat Boulevard and the Zahra and Safi apartments.",
    intro:
      "Al Qudra Road links Town Square to the rest of Dubai, and from here it's about 30 minutes by car to our MacBook repair workshop at Concord Tower, Dubai Media City. The community is large and young: Zahra, Safi, Warda and Hayat apartments plus the townhouse clusters around Town Square Park. Proper Apple repair nearby is scarce. You can drive in with no appointment for a free diagnosis, or book a same-day courier app from your lobby and let it make the trip. Either way, the quote is fixed in writing on WhatsApp before any work starts.",
    whyChoose:
      "Distance is the honest reason people here use us. A mall service counter means a long drive there and back, twice, and often a Mac that gets sent onward anyway. Here it's worked on at one bench in Media City rather than passed between hands. We handle the whole Mac line, from MacBook Air and Pro to iMac, Mac mini and Mac Studio, Intel and Apple silicon, including component-level board repair. No fix, no charge, and the price doesn't change once the machine is open. Booking your own courier means you aren't waiting for us.",
    pickupNote:
      "Town Square repeats building names, so when you book a same-day courier app, set the pin on your exact lobby, for example Zahra Apartments 2B, not just the community. Hand the Mac over, then WhatsApp 055 741 3706 the tracking link, the model and what it's doing wrong. Driving yourself, Al Qudra Road gets you to Media City in about 30 minutes. A paid onsite visit is possible when a technician is free.",
    travel: [
      { from: "Zahra Apartments",       drive: "30 min" },
      { from: "Safi Apartments",        drive: "30 min" },
      { from: "Warda Apartments",       drive: "31 min" },
      { from: "Hayat Boulevard",        drive: "30 min" },
      { from: "Town Square townhouses", drive: "32 min" },
      { from: "Al Qudra Road side",     drive: "28 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Do you take repairs from Town Square?", a: "Yes. It's about 30 minutes to Concord Tower, Dubai Media City by car, or you can send the Mac with a same-day courier app you book. The free diagnosis and written quote work the same either way." },
      { q: "What should I send on WhatsApp when my Mac is on its way from Town Square?", a: "The courier's tracking link, your Mac model, a photo of the fault and your building name. That way the bench knows what's arriving, and the free diagnosis can start once it reaches us." },
      { q: "Do I need to be home when the courier arrives?", a: "Not if someone else can hand it over. You book the courier app yourself, so a family member, your helper or building security can give the Mac to the courier. Send us the tracking link so we know it's coming." },
      { q: "Can a MacBook from Town Square be fixed the same day?", a: "Often, yes, when the part is in stock. Screens, batteries, keyboards and trackpads are usually same-day jobs. Board-level work takes longer. Come in early or send the Mac in the morning to give us the most time." },
      { q: "Does living this far out change the repair price?", a: "No. The repair is priced on the fault and fixed in writing on WhatsApp after the free diagnosis. The courier you book is a separate booking in the app, and when it's fixed we book a courier to bring it back, arranged on WhatsApp." },
      { q: "Can you repair an iMac or Mac mini from Town Square?", a: "Yes. Desktops need careful packing for the drive in, so use the original box if you still have it, or bring it in yourself. A paid onsite visit is another option when a technician is free." },
      { q: "My MacBook is out of warranty and quite old. Worth fixing?", a: "Sometimes yes, sometimes no. We'll tell you honestly after the free diagnosis rather than take on work that isn't worth your money. If it isn't economic, we'll say so, and there's no charge." },
      { q: "Where exactly is the workshop?", a: "Office #45, 10th Floor, Concord Tower, Dubai Media City. There's parking at the tower, and no appointment is needed for a diagnosis. We're closed on Sunday and take a midday break on Friday between 12 and 2 pm." },
    ],
    reviewIndexes: [2, 8, 12, 17, 22, 25],
  },
  {
    slug: "damac-hills",
    area: "Damac Hills",
    short: "Damac Hills",
    driveTime: "25 minutes",
    metroNote: "Damac Hills is not served by the metro, so most residents drive to Concord Tower, Dubai Media City or send the Mac over with a same-day courier app. If you do ride the Red Line, Al Fardan Exchange is the stop, about a 15-minute walk away.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Trump International Golf Club", "Damac Hills Community Mall", "Carson Towers", "Golf Town", "Loreto", "Radisson Dubai Damac Hills"],
    landmarkLine: "25 minutes from Trump International Golf Club, the community mall and the Carson towers.",
    intro:
      "Golf-course living is the character of Damac Hills: villas and mid-rise blocks such as Carson, Golf Town and Loreto around Trump International, with plenty of families and people working from home. It sits off Umm Suqeim Road and Hessa Street, about 25 minutes by car from Concord Tower, Dubai Media City, and there's no Apple repair inside the community. For MacBook repair, drive in for a free diagnosis without an appointment, or book a same-day courier app from your villa gate. A paid onsite visit is possible when a technician is free.",
    whyChoose:
      "Many households here have more than one Mac, and you can bring them in together. Each gets its own free diagnosis, and the quotes arrive side by side on WhatsApp so you can decide which are worth fixing. We repair the whole Mac line at component level, so a board fault another shop prices as a full replacement is often a much smaller job here. There's no charge if we can't fix it, and every price is agreed in writing before anything is opened. Hessa Street keeps the drive in simple.",
    pickupNote:
      "Hessa Street is the quick way out, about 22 minutes from that side of Damac Hills. Prefer not to drive? Book a same-day courier app to your villa gate or tower lobby; your helper or a family member can hand the Mac over if you're out. Then WhatsApp 055 741 3706 the tracking link, the model and a photo of the fault. For several machines, list them in one message. A paid onsite visit is possible when a technician is free.",
    travel: [
      { from: "Carson Towers",              drive: "25 min" },
      { from: "Golf Town",                  drive: "26 min" },
      { from: "Loreto",                     drive: "26 min" },
      { from: "Damac Hills Community Mall", drive: "25 min" },
      { from: "Trump International Golf",   drive: "26 min" },
      { from: "Hessa Street side",          drive: "22 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How far is Damac Hills from your workshop?", a: "About 25 minutes by car, a little under from the Hessa Street side. The workshop is Office #45, 10th Floor, Concord Tower, Dubai Media City, open Mon-Thu and Sat 9 am-7 pm, and Friday with a 12-2 pm break." },
      { q: "We have several Macs at home. Can they all come in together?", a: "Yes. Bring them in one trip or send them in one courier booking. Each gets a free diagnosis and you get a written quote for every machine on WhatsApp, so you decide which ones to repair." },
      { q: "Can my helper hand the Mac to a courier at the villa gate?", a: "Yes. You book the same-day courier app, so anyone at home can hand it over. Pack it in a padded sleeve and WhatsApp us the tracking link and model so we know it's on the way." },
      { q: "Do you repair iMac and Mac Studio from Damac Hills?", a: "Yes, alongside MacBooks. A desktop should travel in its original box or well padded. If moving it is awkward, ask on WhatsApp about a paid onsite visit, which happens only when a technician is free." },
      { q: "Is the warranty the same if I send the Mac by courier?", a: "Yes. You get the same written warranty of up to 12 months on hardware, with 90 days on screens and 3 months on batteries, however the Mac reached the bench." },
      { q: "My child spilled a drink on the MacBook. What should I do right now?", a: "Power it off, don't plug it in to charge, and message us on WhatsApp. Corrosion keeps working the longer it sits. Get it to the bench quickly, by car or a same-day courier app, and we'll quote in writing once the real damage is visible." },
      { q: "What should I do before sending my MacBook in?", a: "Back it up if it still turns on, take off any case, and note what the fault is and when it started. WhatsApp that with the tracking link and the model, and include the charger if the fault involves power." },
      { q: "Can I walk in from Damac Hills without booking?", a: "Yes. No appointment is needed for a diagnosis. Bring the Mac and its charger to Concord Tower, Dubai Media City, where there's parking at the tower. We're closed on Sunday." },
    ],
    reviewIndexes: [3, 9, 13, 18, 19, 23],
  },
  {
    slug: "dubai-south",
    area: "Dubai South",
    short: "Dubai South",
    driveTime: "32 minutes",
    metroNote: "Expo 2020 station on the Route 2020 branch of the Red Line serves Dubai South and Expo City. Ride towards the city, change to the tram at DMCC or Sobha Realty and get off at Palm Jumeirah, a 3-minute walk from Concord Tower.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Expo City Dubai", "The Pulse", "Emaar South", "Al Maktoum International Airport", "Dubai South Business Park", "MBRAH aviation district"],
    landmarkLine: "30 minutes from Expo City, The Pulse and Emaar South.",
    intro:
      "Expo City and the airport shape Dubai South, which mixes homes in The Pulse and Emaar South with business parks, logistics and aviation employers around Al Maktoum International. It's roughly 32 minutes by car from our MacBook repair workshop at Concord Tower, Dubai Media City, and genuine Apple repair out here is thin on the ground. You can walk in without an appointment for a free diagnosis, or book a same-day courier app from home or office reception and WhatsApp us the tracking link. A paid onsite visit is possible when a technician is free.",
    whyChoose:
      "The drive into the city and back is the whole problem from Dubai South. For the business parks it also matters that a machine doesn't disappear for a fortnight. Diagnosis is free, and many screen, battery, keyboard and trackpad jobs are finished the same day when the part is in stock. Board-level faults are repaired on the board rather than by swapping it, which stops a serious fault turning into a replacement. Several office Macs can come in together, each with its own written quote on WhatsApp.",
    pickupNote:
      "From The Pulse allow about 32 minutes to Concord Tower; from Expo City it's closer to 30. If nobody can leave the office, book a same-day courier app from Business Park reception, hand the Mac over, and WhatsApp 055 741 3706 the tracking link, the model and a photo of the fault. For several machines, send the list in one message. A paid onsite visit is possible when a technician is free.",
    travel: [
      { from: "The Pulse",                 drive: "32 min" },
      { from: "Emaar South",               drive: "33 min" },
      { from: "Expo City Dubai",           drive: "30 min" },
      { from: "Dubai South Business Park", drive: "32 min" },
      { from: "Al Maktoum Airport side",   drive: "34 min" },
      { from: "Residential District",      drive: "32 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Do you repair Macs from Dubai South and Expo City?", a: "Yes, both. It's about 32 minutes by car to Concord Tower, Dubai Media City, or you can send the Mac with a same-day courier app. Diagnosis is free and the quote is fixed in writing on WhatsApp." },
      { q: "Can I send a Mac from a Dubai South Business Park office?", a: "Yes. Book a same-day courier app to your reception, hand the Mac over and WhatsApp us the tracking link with the model. We'll diagnose it free and send the quote on WhatsApp before any work starts." },
      { q: "Our office has several MacBooks with faults. Can you take them together?", a: "Yes. Bring them in one trip or send them in one courier booking. Each machine gets a free diagnosis and its own written quote, so you can approve the urgent ones first." },
      { q: "Can a technician come to our Dubai South office?", a: "Sometimes. Onsite repair is paid and only happens when a technician is free. Send the models and faults on WhatsApp, and the charge is quoted before you book." },
      { q: "Does the distance from Dubai South change the price?", a: "No. What you pay for the repair depends on the fault, not your postcode, and it's fixed in writing after the free diagnosis. You book the courier yourself, and when the work is done we book a courier to bring it back, or you collect it." },
      { q: "Do you repair iMac, Mac mini and Mac Studio from Dubai South?", a: "Yes, alongside every MacBook. On a longer drive a desktop needs proper padding, so box it well before handing it to a courier, or bring it in yourself and carry it up to the 10th floor." },
      { q: "Is same-day turnaround realistic from Dubai South?", a: "For common repairs with the part in stock, often yes: screens, batteries, keyboards and trackpads. Getting the Mac to us early helps. Logic board repairs take longer because they're done at component level." },
      { q: "Can I drop the Mac off instead of using a courier?", a: "Yes, and no appointment is needed for a diagnosis. Come to Office #45, 10th Floor, Concord Tower, Dubai Media City, with parking at the tower. On Fridays we close from 12 to 2 pm, and Sunday is closed." },
    ],
    reviewIndexes: [4, 10, 14, 19, 20, 24],
  },
  {
    slug: "garhoud",
    area: "Garhoud",
    short: "Garhoud",
    driveTime: "28 minutes",
    metroNote: "GGICO and Airport Terminal 1 stations on the Red Line serve Garhoud. Ride the line to Al Fardan Exchange and walk about 15 minutes, or change to the tram at Sobha Realty for the Palm Jumeirah stop, a 3-minute walk away.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Dubai International Airport T1 & T3", "Irish Village", "Aviation Club", "Deira City Centre", "Garhoud Bridge", "Century Village"],
    landmarkLine: "28 minutes from Dubai International Airport, Deira City Centre and the Aviation Club.",
    intro:
      "Next to Dubai International Airport on the Deira side of the creek, Garhoud is an established district of villas, older apartment buildings, airline offices, hotels and Deira City Centre, with a lot of long-term residents and airline staff. It's about 28 minutes by car from our MacBook repair workshop at Concord Tower, Dubai Media City. Walk in with the Mac, no appointment needed for a free diagnosis, or book a same-day courier app from your building or office reception and WhatsApp us the tracking link. A paid onsite visit is possible when a technician is free.",
    whyChoose:
      "Garhoud has plenty of general computer trade, but very little genuine board-level Mac work. Most shops either quote a whole logic board or send the machine to a workshop like ours and add their margin. Coming direct cuts that out. Diagnosis is free, there's no charge if we can't fix it, and the price is fixed in writing before anything is opened. If you fly rotations, send the Mac before a trip and tell us your dates, and we'll book the courier back around them, or hold it until you can collect it.",
    pickupNote:
      "From the Garhoud Bridge side it's about 26 minutes to Media City, and roughly 28 from the airport end. Flying out? Book a same-day courier app from your building, villa gate or hotel front desk, hand the Mac over, and WhatsApp 055 741 3706 the tracking link, the model and the date you're back. A colleague can do the handover for you. A paid onsite visit is possible when a technician is free.",
    travel: [
      { from: "Dubai Airport T1 / T3",         drive: "28 min" },
      { from: "Deira City Centre",             drive: "27 min" },
      { from: "Irish Village / Aviation Club", drive: "28 min" },
      { from: "Century Village",               drive: "28 min" },
      { from: "Garhoud villas",                drive: "29 min" },
      { from: "Garhoud Bridge side",           drive: "26 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long is the drive from Garhoud to Media City?", a: "About 28 minutes from the airport end and roughly 26 from the Garhoud Bridge side. Walk into Office #45, 10th Floor, Concord Tower, Dubai Media City. A diagnosis needs no appointment and costs nothing." },
      { q: "I work airline rotations. What happens to my Mac while I'm away?", a: "Tell us your dates on WhatsApp when the Mac comes in. We'll send the quote while you're away, you approve it there, and we'll book a courier to bring it back, or hold it for you to collect, around your roster." },
      { q: "Can I send my MacBook from an office near the airport?", a: "Yes. Book a same-day courier app to your office reception and hand the Mac over there. Send us the tracking link and model on WhatsApp, and the free diagnosis and written quote follow once it reaches the bench." },
      { q: "Another shop in the area quoted a full logic board. Is there an alternative?", a: "Usually yes. Most board faults are a handful of failed components rather than the whole board. We diagnose to component level free of charge and quote the real repair first." },
      { q: "Do you fix iMac and Mac mini for Garhoud customers?", a: "Yes, along with Mac Studio, Mac Pro and all MacBooks. A desktop should travel boxed and padded. If moving it isn't practical, ask on WhatsApp about a paid onsite visit when a technician is free." },
      { q: "I'm staying at a hotel in Garhoud. How do I get my Mac to you?", a: "Take a taxi with it, about 28 minutes, or leave it at the front desk for a same-day courier app you book. Tell us the hotel on WhatsApp, and once it's repaired we book a courier to take it back there." },
      { q: "Will a technician come to my Garhoud villa?", a: "Only when one is free, and it's a paid visit. Message us the model and fault on WhatsApp and the charge is quoted before booking. Faults that need board work are better brought or sent to the workshop." },
      { q: "When can I bring my Mac in from Garhoud?", a: "Mon-Thu and Sat 9 am-7 pm, and Friday 9 am-12 pm then 2 pm-7 pm. Sunday is closed. There's parking at Concord Tower, and no appointment is needed for a diagnosis." },
    ],
    reviewIndexes: [5, 11, 15, 18, 21, 25],
  },
  {
    slug: "oud-metha",
    area: "Oud Metha",
    short: "Oud Metha",
    driveTime: "26 minutes",
    metroNote: "Oud Metha station on the Green Line serves the area. Change to the Red Line and ride to Al Fardan Exchange, a 15-minute walk from Concord Tower.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["American Hospital Dubai", "Al Nasr Leisureland", "Dubai Healthcare City border", "Oud Metha Metro", "Mohammed Bin Rashid Al Maktoum Medical City", "Lamcy area"],
    landmarkLine: "26 minutes from American Hospital Dubai, Al Nasr Leisureland and Oud Metha Metro.",
    intro:
      "Between Bur Dubai and the creek, Oud Metha is an established mixed district of apartment blocks, schools, clinics and the hospital cluster along the edge of Dubai Healthcare City. It's roughly 26 minutes by car from our MacBook repair workshop at Concord Tower, Dubai Media City. Many Macs from here belong to medical and teaching staff, where a machine holding patient or course material can't just be wiped and handed back. Drive in with no appointment for a free diagnosis, or send it with a same-day courier app you book from reception.",
    whyChoose:
      "Two things matter most to Oud Metha customers: their data and an honest price. If a Mac won't boot, we attempt recovery from the SSD before any board work and confirm what came off before going further. On T2 and Apple silicon Macs the storage is soldered, so that's specialist board-level work, not pulling a drive. The diagnosis is free, there's no charge if we can't fix it, and the written price doesn't move once the machine is open. Board faults are repaired at component level rather than replaced.",
    pickupNote:
      "From the Bur Dubai side it's about 24 minutes to Media City, and 26 from around the American Hospital. At a clinic or school, booking a same-day courier app to the front desk at a quiet hour keeps things simple. Hand the Mac over, then WhatsApp 055 741 3706 the tracking link, the model, a photo of the fault and whether the data matters most. A paid onsite visit is possible when a technician is free.",
    travel: [
      { from: "American Hospital Dubai",      drive: "26 min" },
      { from: "Oud Metha Metro",              drive: "26 min" },
      { from: "Al Nasr Leisureland",          drive: "26 min" },
      { from: "Dubai Healthcare City border", drive: "27 min" },
      { from: "Oud Metha Road apartments",    drive: "25 min" },
      { from: "Bur Dubai side",               drive: "24 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Is it quicker to drive from Oud Metha or send the Mac?", a: "Driving takes about 26 minutes, and you can walk in without an appointment. A same-day courier app is the faster choice if you can't leave the clinic or office, since you book it yourself and there's no waiting for us." },
      { q: "My Mac will not boot and holds important work files. What happens first?", a: "Data first. We attempt recovery from the SSD before any board work and confirm with you what was recovered, then discuss the repair. On T2 and Apple silicon Macs the SSD is soldered, so recovery is board-level specialist work." },
      { q: "Should I back up my Mac before sending it in?", a: "Yes, if it still turns on. Copy your work files to an external drive or iCloud first. If it won't boot, stop retrying it, send it in, and tell us on WhatsApp which files matter most so recovery comes first." },
      { q: "Can I send a Mac from a clinic or school reception in Oud Metha?", a: "Yes. Book a same-day courier app to the reception desk, leave the Mac there labelled with your name, and WhatsApp us the tracking link. We'll message the free diagnosis and written quote once it reaches the bench." },
      { q: "Can a technician fix the Mac at our clinic instead?", a: "Sometimes. Onsite repair is paid and only happens when a technician is free. Message us with the model and fault, and we'll quote the visit on WhatsApp before you book it." },
      { q: "Do you repair iMac and Mac mini from Oud Metha?", a: "Yes, plus Mac Studio, Mac Pro and every MacBook. Office desktops can come in by car or courier if they're boxed well, and a paid onsite visit is an option when a technician is free." },
      { q: "Is same-day MacBook repair realistic from Oud Metha?", a: "For in-stock parts, often yes: screens, batteries, keyboards and trackpads. Bring it in early in the day to give us the most time. Board-level and data recovery work takes longer." },
      { q: "Can I come to the workshop without an appointment?", a: "Yes. Bring the Mac to Office #45, 10th Floor, Concord Tower, Dubai Media City. There's parking at the tower. We're open Mon-Thu and Sat 9 am-7 pm, and Friday 9 am-12 pm and 2 pm-7 pm." },
    ],
    reviewIndexes: [0, 7, 12, 16, 22, 23],
  },
  {
    slug: "academic-city",
    area: "Academic City",
    short: "Academic City",
    driveTime: "35 minutes",
    metroNote: "Academic City is not on the metro network, so students and staff here usually drive across to Concord Tower, Dubai Media City or book a same-day courier app to send the Mac in. Students who reach the Red Line can ride it to Al Fardan Exchange, about a 15-minute walk from us.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["BITS Pilani Dubai", "Manipal Academy of Higher Education", "Amity University Dubai", "Heriot-Watt Dubai", "Global Village side", "Silicon Oasis border"],
    landmarkLine: "35 minutes from BITS Pilani, Manipal, Amity and Heriot-Watt Dubai.",
    intro:
      "Coursework lives on the MacBooks of Dubai Academic City, the university district past Silicon Oasis on the Al Ain Road side, home to BITS Pilani, Manipal, Amity, Heriot-Watt and their student accommodation. Very little nearby repairs them properly. Our MacBook repair workshop is at Concord Tower, Dubai Media City, about 35 minutes by car. If you have a car, or a friend with one, walk in with no appointment for a free diagnosis. Otherwise book a same-day courier app from your residence reception and WhatsApp us the tracking link.",
    whyChoose:
      "For a student, two things decide everything: the cost and whether the coursework survives. Diagnosis is free and there's no charge if we can't fix the machine, so you're never billed to hear bad news. If the Mac won't boot, we try to recover your files before any board work and tell you what came off. Because the logic board is repaired at component level instead of replaced, a fault another shop prices near the value of the laptop is often far smaller here. You book the courier yourself, so there's no waiting on us.",
    pickupNote:
      "Driving, allow about 35 minutes; it's a little less from the Silicon Oasis border. Without a car, book a courier app such as Careem Box to your residence reception or campus gate. Hand it over yourself, or have a friend do it if you're in a lecture, then WhatsApp 055 741 3706 the tracking link, the model and a photo of the fault. A paid onsite visit is possible when a technician is free.",
    travel: [
      { from: "BITS Pilani Dubai",      drive: "35 min" },
      { from: "Manipal Academy",        drive: "35 min" },
      { from: "Amity University Dubai", drive: "36 min" },
      { from: "Heriot-Watt Dubai",      drive: "35 min" },
      { from: "Student accommodation",  drive: "35 min" },
      { from: "Silicon Oasis border",   drive: "31 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Can I get my MacBook repaired from Academic City without a car?", a: "Yes. Book a same-day courier app to your campus gate or residence reception, hand the Mac over, and WhatsApp us the tracking link. We diagnose it free and send a written quote before any work starts." },
      { q: "My coursework is on a MacBook that will not turn on. Can you save it?", a: "Usually yes. We attempt recovery from the SSD before any board work and confirm what was recovered. On Apple silicon and T2 Macs the storage is soldered, so it's board-level work rather than pulling out a drive." },
      { q: "I am a student - how do I know the price will not spiral?", a: "The price is fixed in writing on WhatsApp after the free diagnosis and before any work starts. If we find something else, we come back to you for approval rather than adding to the bill." },
      { q: "What if the repair is not worth it on an old MacBook?", a: "We'll tell you that plainly rather than take the job. Diagnosis is free and there's no charge if we can't fix it, so an honest 'not worth it' costs you nothing." },
      { q: "How quickly can a student MacBook screen or battery be replaced?", a: "Often the same day when the part is in stock, and that covers keyboards and trackpads too. Board-level work takes longer. If you have a deadline, tell us on WhatsApp before the Mac arrives." },
      { q: "Can a friend hand my MacBook to the courier while I am in a lecture?", a: "Yes. You book the courier app, so anyone you trust can hand the Mac over at the gate or reception. Send us the tracking link and your name on WhatsApp so the repair is under the right person." },
      { q: "Can a technician come to campus to repair my Mac?", a: "Only as a paid onsite visit, and only when a technician is free. For a single student MacBook, sending it by courier or bringing it in is usually simpler. Ask on WhatsApp and we'll quote any visit first." },
      { q: "Do you repair iMac and Mac mini used in campus labs?", a: "Yes. Lab desktops can come in by courier if they're boxed and padded, or a paid onsite visit can be arranged when a technician is free. Several machines can be quoted together on WhatsApp." },
    ],
    reviewIndexes: [1, 8, 13, 17, 19, 24],
  },
  {
    slug: "dubai-investment-park",
    area: "Dubai Investment Park",
    short: "DIP",
    driveTime: "26 minutes",
    metroNote: "DIP isn't directly on the metro, so most people here either drive in to Concord Tower, Dubai Media City, or book a same-day courier app to bring the Mac to us. By Red Line, change to the tram at DMCC or Sobha Realty and get off at Palm Jumeirah, a 3-minute walk away.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Green Community", "DIP 1 & 2", "Dubai Investment Park offices", "Ewan Residences", "Schools of DIP", "Jebel Ali border"],
    landmarkLine: "26 minutes from Green Community, the DIP business units and Ewan Residences.",
    intro:
      "Out on the Jebel Ali side of the city, Dubai Investment Park is about 26 minutes by road from our workshop in Concord Tower, Dubai Media City. It's an unusual mix: Green Community and Ewan Residences next to a big spread of offices, light industry, warehouses and schools. The Macs that reach us from DIP are as likely to be an office iMac or a Mac mini running a system as a family MacBook. For MacBook repair from here you can drive in, book a same-day courier app to bring the machine over, or ask about a paid onsite visit. Diagnosis is free and the quote is fixed in writing first.",
    whyChoose:
      "For a DIP business, downtime is the real cost. A machine sent away for two weeks is two weeks of disruption. We diagnose free and finish many screen, battery, keyboard and trackpad jobs the same day when the part is in stock. Board faults are repaired at component level rather than by swapping the whole board, which usually comes in well under a replacement quote. If several office Macs are playing up, bring them in together. Each one gets its own free diagnosis and its own written quote, so you can decide what's worth fixing, and if we can't fix it you don't pay.",
    pickupNote:
      "From DIP, Sheikh Zayed Road brings you up to Media City and Concord Tower has parking on site. If you can't leave the unit, book a same-day courier app such as Careem Box, hand the Mac to the driver at your reception or loading bay, and WhatsApp the tracking link to 055 741 3706 with the model and a photo of the fault. When it's done, collect it, or we book a courier to bring it back. A paid onsite visit is possible when a technician is free.",
    travel: [
      { from: "Green Community",      drive: "26 min" },
      { from: "DIP 1 business units", drive: "26 min" },
      { from: "DIP 2 business units", drive: "28 min" },
      { from: "Ewan Residences",      drive: "27 min" },
      { from: "DIP schools",          drive: "27 min" },
      { from: "Jebel Ali border",     drive: "24 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Is it worth driving in from DIP, or should I send the Mac?", a: "If you can spare roughly 26 minutes each way, drive in: the diagnosis starts while you're there and many jobs finish the same day. If you can't leave the unit, book a same-day courier app and WhatsApp us the tracking link." },
      { q: "Can I send a Mac by courier from a warehouse or office unit in DIP?", a: "Yes. Book a same-day courier app, give the driver the unit number and meet them at the door, loading bay or reception. Send us the tracking link on WhatsApp with the model and what's wrong, and we'll look out for it." },
      { q: "Several Macs at our DIP office are playing up. Can you look at them together?", a: "Yes. Bring or send them in one go. Each machine gets its own free diagnosis and its own written quote on WhatsApp, so you can approve the urgent ones first and leave the rest for later." },
      { q: "Can a technician come out to DIP and repair a Mac onsite?", a: "Sometimes. Onsite visits are paid and only happen when a technician is free. WhatsApp us the address and the fault, and we'll quote the visit charge before anything is booked. Some faults, board-level work especially, need the workshop anyway." },
      { q: "Our Mac mini runs a system that can't be down for long. How fast can you turn it round?", a: "Say it's business-critical when you message. If the part is in stock, many common repairs are done the same day. Board faults take longer. If the data on it matters, we deal with that before any board work starts." },
      { q: "Where do I park when I drive in from Dubai Investment Park?", a: "There's parking on site at Concord Tower, Dubai Media City. Come up to Office #45 on the 10th floor. No appointment is needed for a diagnosis, Monday to Saturday, with a break from 12 pm to 2 pm on Friday. Sunday we're closed." },
      { q: "Do you cover Green Community villas as well as the business side?", a: "Yes, the whole of DIP. From a villa it's the same choice: drive in, or book a same-day courier app from your gate and WhatsApp us the tracking link. Send the model and a photo of the fault so we know what's coming." },
      { q: "Dust from the industrial side gets into everything. Is that a problem for Macs?", a: "It's a common cause of overheating and shutdowns out here. Dust-clogged fans and dried thermal paste push temperatures up until the Mac throttles. A full internal clean and repaste is usually a same-day job." },
    ],
    reviewIndexes: [2, 9, 14, 18, 20, 25],
  },
  {
    slug: "al-nahda",
    area: "Al Nahda",
    short: "Al Nahda",
    driveTime: "35 minutes",
    metroNote: "Stadium and Al Nahda stations on the Green Line serve the area. Change to the Red Line and ride to Al Fardan Exchange, then walk about 15 minutes to Concord Tower.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Al Nahda Pond Park", "Al Nahda Metro", "Stadium Metro", "Al Qusais border", "Sahara Centre side", "Dubai-Sharjah border"],
    landmarkLine: "35 minutes from Al Nahda Pond Park, Al Nahda Metro and the Al Qusais border.",
    intro:
      "On the Dubai side of the Sharjah border, Al Nahda is around 35 minutes from our workshop in Concord Tower, Dubai Media City. It's one of the densest residential areas in the emirate: apartment towers, families, and a big commuter population working right across Dubai. There's plenty of general phone and laptop trade nearby but very little that repairs Macs at board level. For MacBook repair from Al Nahda, most people bring the Mac in on a day they're already heading west, or send it with a same-day courier app. A paid onsite visit is possible when a technician is free.",
    whyChoose:
      "Crossing the city to a mall service counter and back twice is most of a day, so people from this side of Dubai want the first trip to count. Diagnosis is free, there's no fee if we can't fix it, and the written quote on WhatsApp doesn't change once the Mac is open. Because we repair the logic board at component level rather than swapping it, the number is usually far lower than a board-replacement quote. If you'd rather not make the drive at all, a courier app you book yourself gets the Mac to us without you leaving home.",
    pickupNote:
      "Driving from Al Nahda, Al Khail Road or Sheikh Mohammed Bin Zayed Road takes you across to Media City; come up to Office #45, 10th floor, Concord Tower. To send it instead, book a same-day courier app such as Careem Box from your building entrance and WhatsApp 055 741 3706 the tracking link, the Mac model and a photo of the fault. A paid onsite visit is possible when a technician is free.",
    travel: [
      { from: "Al Nahda Metro",     drive: "35 min" },
      { from: "Al Nahda Pond Park", drive: "35 min" },
      { from: "Stadium Metro side", drive: "33 min" },
      { from: "Al Qusais border",   drive: "34 min" },
      { from: "Al Nahda 1 towers",  drive: "35 min" },
      { from: "Al Nahda 2 towers",  drive: "36 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Do you take Macs from Al Nahda on the Dubai side?", a: "Yes. It's about 35 minutes by car. If you book a courier app, double-check the address pin says Al Nahda Dubai and not the Sharjah side, since tower names repeat across the border." },
      { q: "What's the quickest way to get my Mac to you from Al Nahda?", a: "A same-day courier app, booked by you. Hand the Mac to the driver at your building, WhatsApp us the tracking link, and there's no waiting for us to send anyone. Driving in works too if you're heading towards Media City anyway." },
      { q: "Is there a cheaper option than a full logic board replacement?", a: "Usually yes. Most board faults are a small number of failed components, not the whole board. We repair at component level and diagnose free of charge, so you can compare before committing." },
      { q: "Will the price change after you open the Mac?", a: "No. The price is fixed in writing on WhatsApp after the free diagnosis. If we find anything else, we come back for your approval rather than adjusting the bill." },
      { q: "Can you repair older Intel MacBooks?", a: "Yes, Intel as well as Apple silicon. Whether it's economic depends on the fault and the model, and we'll tell you honestly after the free diagnosis. If we can't fix it, you don't pay." },
      { q: "Can I bring an iMac or Mac mini in from Al Nahda?", a: "Yes, we repair both alongside MacBooks. For an iMac on a 35-minute drive, the car is safer than a courier: keep the screen facing up and padded. If you do send a desktop, use the original box or plenty of padding." },
      { q: "Will a technician come to Al Nahda for an onsite repair?", a: "Only when one is free, and it's a paid visit. Send the address and the fault on WhatsApp and we'll quote the charge before booking. For many faults it's quicker to send the Mac by courier app than wait for a free slot." },
      { q: "What time can I walk in if I'm coming from Al Nahda after work?", a: "We're open until 7 pm Monday to Thursday and Saturday, and on Friday from 9 am to 12 pm and 2 pm to 7 pm. Sunday we're closed. No appointment is needed for a diagnosis." },
    ],
    reviewIndexes: [3, 10, 15, 19, 21, 23],
  },
  {
    slug: "zabeel",
    area: "Za'abeel",
    short: "Za'abeel",
    driveTime: "22 minutes",
    metroNote: "Max and World Trade Centre stations on the Red Line sit at the edge of Za'abeel. Ride to Al Fardan Exchange and walk about 15 minutes, or change to the tram at Sobha Realty for the Palm Jumeirah stop, a 3-minute walk away.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Dubai Frame", "Zabeel Park", "One Za'abeel", "Dubai World Trade Centre", "Za'abeel 1 & 2", "Dubai International Financial Centre border"],
    landmarkLine: "22 minutes from the Dubai Frame, Zabeel Park, One Za'abeel and the World Trade Centre.",
    intro:
      "Za'abeel, wedged between Bur Dubai and DIFC, is about 22 minutes along Sheikh Zayed Road from our workshop in Concord Tower, Dubai Media City. It combines government and corporate offices around the World Trade Centre, the newer towers at One Za'abeel, and the established Za'abeel 1 and 2 residential districts. Most Macs from here are work machines: MacBook Pros on corporate desks and iMacs in offices. MacBook repair from Za'abeel usually goes one of two ways. Someone drives the Mac over, or the office books a same-day courier app from the lobby. Paid onsite visits happen when a technician is free.",
    whyChoose:
      "For an office machine the questions are turnaround and discretion. We diagnose free, and many screen, battery, keyboard and trackpad repairs finish the same day when the part is in stock, so a work Mac is often back quickly. Board-level faults are repaired on the board rather than replaced, and the quote is fixed in writing on WhatsApp before anyone opens the case. We don't browse or copy your files beyond what a repair or recovery actually needs. Shafiq, our lead technician, will tell you straight if a machine isn't worth the money.",
    pickupNote:
      "From Za'abeel it's a straight run down Sheikh Zayed Road to Media City. If the Mac can't leave the desk with you, book a same-day courier app and have reception hand it over in the lobby, which saves the driver a visitor pass. WhatsApp 055 741 3706 the tracking link, the model and a photo of the fault. For several office machines, a paid onsite visit can be arranged when a technician is free.",
    travel: [
      { from: "One Za'abeel",              drive: "22 min" },
      { from: "Dubai World Trade Centre",  drive: "20 min" },
      { from: "Zabeel Park / Dubai Frame", drive: "22 min" },
      { from: "Za'abeel 1",                drive: "23 min" },
      { from: "Za'abeel 2",                drive: "23 min" },
      { from: "DIFC border",               drive: "20 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long is the drive from Za'abeel to your workshop?", a: "About 22 minutes along Sheikh Zayed Road, depending on traffic. You'll find us at Office #45 on the 10th floor of Concord Tower, Dubai Media City, with parking on site. No appointment is needed for a diagnosis." },
      { q: "Our tower has visitor access control. How do we send a Mac by courier?", a: "Book a same-day courier app and do the handover at reception or in the lobby, so the driver doesn't need a pass. Then WhatsApp us the tracking link and the model, and tell us who should receive the quote." },
      { q: "Can several machines from one office come in together?", a: "Yes. Bring them in, or send them in one courier booking. Each machine gets its own free diagnosis and a written quote, so the company can decide what to repair and in what order." },
      { q: "Can a technician come to our office in Za'abeel?", a: "Yes, when one is free. Onsite visits are paid, and we quote the charge on WhatsApp before booking. Tell us which machines have which faults and we'll say whether a visit makes sense or the Mac needs the workshop." },
      { q: "The Mac holds confidential work. How is that handled?", a: "We don't browse or copy data beyond what the repair or a recovery needs. If you'd rather not share your login, tell us and we'll say whether the repair can be tested without it." },
      { q: "How quickly can a work MacBook be back on my desk?", a: "For in-stock parts, often the same day: screen, battery, keyboard and trackpad are the usual same-day jobs. Board-level work takes longer, and we'll give you a realistic estimate with the written quote." },
      { q: "Can I drop a MacBook off in my lunch break from DWTC?", a: "If your break allows about 20 minutes each way, yes. Walk in, the free diagnosis starts while you're there, and the written quote follows on WhatsApp. Note that on Friday we close from 12 pm to 2 pm, and Sunday we're closed." },
      { q: "Do you repair iMac and Mac Studio from offices here?", a: "Yes, alongside MacBooks and Mac mini. Desktops travel better in a car than on a courier bike, so if you can, bring it in with the original box or plenty of padding around the display." },
    ],
    reviewIndexes: [4, 11, 16, 20, 22, 24],
  },
  {
    slug: "arjan",
    area: "Arjan",
    short: "Arjan",
    driveTime: "20 minutes",
    metroNote: "Arjan isn't on the metro network, so residents here usually drive in to Concord Tower, Dubai Media City, or send the Mac with a same-day courier app. From the Red Line elsewhere, Al Fardan Exchange is about a 15-minute walk from us.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Dubai Miracle Garden", "Dubai Butterfly Garden", "Arjan residential towers", "Al Barsha South border", "Dubai Science Park", "Sheikh Mohammed Bin Zayed Road side"],
    landmarkLine: "20 minutes from Dubai Miracle Garden, Dubai Science Park and the Arjan towers.",
    intro:
      "Next to Al Barsha South and Dubai Science Park, Arjan is about 20 minutes by car from our workshop in Concord Tower, Dubai Media City. It has grown quickly into a dense cluster of mid-rise apartment buildings around the Miracle Garden, with a young, largely professional population. Repair options inside Arjan itself are limited, and almost none do board-level Mac work. MacBook repair from Arjan fits easily into a day: drive over, or book a same-day courier app and send us the tracking link. A paid onsite visit is possible when a technician is free.",
    whyChoose:
      "Arjan is close enough that driving in for a free diagnosis takes less time than a trip to a mall counter where you leave the machine behind. We're a Mac workshop, not a general laptop shop: MacBook Air and Pro, iMac, Mac mini, Mac Studio and Mac Pro, Intel and Apple silicon, including the component-level board work most places won't take on. Diagnosis is free, there's no fee if we can't fix it, and the price is agreed in writing first. Many screen and battery jobs are done the same day when the part is in stock.",
    pickupNote:
      "From Arjan, Hessa Street takes you up to Sheikh Zayed Road right by Media City, around 20 minutes in all. If you're at work, book a same-day courier app and leave the Mac with your building's security desk for the driver. WhatsApp 055 741 3706 the tracking link, the Mac model and a photo of the fault. Paid onsite visits happen only when a technician is free.",
    travel: [
      { from: "Arjan (Miracle Garden side)",  drive: "20 min" },
      { from: "Dubai Science Park",           drive: "18 min" },
      { from: "Al Barsha South border",       drive: "17 min" },
      { from: "Arjan central towers",         drive: "20 min" },
      { from: "Butterfly Garden side",        drive: "21 min" },
      { from: "Sheikh Mohammed Bin Zayed Rd", drive: "19 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long does it take to drive from Arjan to your workshop?", a: "About 20 minutes, a little less from the Al Barsha South side. Concord Tower is in Dubai Media City, there's parking on site, and you don't need an appointment for a diagnosis." },
      { q: "There are many similar tower names in Arjan. Does that matter when I send a Mac?", a: "It matters for the courier app, so drop an accurate pin and put the full building name in the notes for the driver. When the repair is done and we book the courier to bring it back, we'll need the same details." },
      { q: "Can the building security hand the Mac to a courier for me?", a: "Yes, if your courier app allows it. Leave the Mac packed with security, name them as the handover contact in the booking, and WhatsApp us the tracking link plus the model. The quote comes to you, not to security." },
      { q: "Is same-day repair realistic from Arjan?", a: "Often, for screen, battery, keyboard and trackpad jobs when the part is in stock. Drive in or send it in the morning and there's a good chance it's ready the same day. Board work takes longer." },
      { q: "Can someone come to my apartment in Arjan to fix the Mac?", a: "Sometimes. Onsite visits are paid and only happen when a technician is free. Message us the fault and we'll quote the charge on WhatsApp before booking. At 20 minutes away, driving in is often the quicker choice." },
      { q: "Do you repair iMac, Mac mini and Mac Studio from Arjan?", a: "Yes, alongside MacBooks. Desktops are safer brought in by car than sent on a courier bike. Pad the display well, or use the original box if you still have it." },
      { q: "My MacBook overheats and the fans are loud. Can that be fixed?", a: "Usually yes, and it's one of the most common jobs we see. Dust-clogged fans and dried thermal paste cause throttling and noise. A full internal clean and repaste is normally a same-day job." },
      { q: "Where do I go when I arrive at Concord Tower?", a: "Up to the 10th floor, Office #45, Concord Tower, Dubai Media City. Parking is on site. We're open Monday to Thursday and Saturday 9 am to 7 pm, Friday 9 am to 12 pm and 2 pm to 7 pm, and closed on Sunday." },
    ],
    reviewIndexes: [5, 6, 13, 17, 18, 25],
  },
  {
    slug: "media-city",
    area: "Dubai Media City",
    short: "Media City",
    driveTime: "2 minutes",
    metroNote: "The workshop is inside Dubai Media City itself: Concord Tower, Office #45, 10th floor. The Palm Jumeirah tram stop is a 3-minute walk away, and Al Fardan Exchange on the Red Line is about 15 minutes on foot.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Concord Tower (our workshop)", "Media City Amphitheatre", "Arenco Tower", "Shatha Tower", "Business Central Towers", "Media One Hotel"],
    landmarkLine: "Inside Dubai Media City itself, a short walk from Arenco, Shatha and Business Central Towers.",
    intro:
      "This is our home district. The workshop is in Concord Tower, Office #45 on the 10th floor, inside Dubai Media City itself, so for anyone working here MacBook repair is a walk across the plaza rather than a drive. Media City is agencies, broadcasters, publishers and production houses, which means some of the hardest-worked Macs in Dubai: MacBook Pros rendering video, iMacs and Mac Studios in edit suites, Mac minis running playout and signage. Walk in during a lunch break. To be honest, booking a courier or an onsite visit rarely makes sense when you're a few minutes from our door.",
    whyChoose:
      "The advantage of being next door is time. You can watch the free diagnosis happen and get a written quote on WhatsApp before you leave. For in-stock parts like a screen, battery, keyboard or trackpad, you can often pick the Mac up the same afternoon. For board-level faults we repair the failed component rather than swapping the board, which on a loaded MacBook Pro or Mac Studio is usually the difference between a repair bill and a replacement. If the machine holds project files that were never backed up, we deal with the data before anything else.",
    pickupNote:
      "Walk over to Concord Tower, take the lift to the 10th floor and find Office #45. No appointment is needed for a diagnosis. Bring the charger if the fault is about power or charging, and your login if you're happy for us to test with it. A courier or a paid onsite visit rarely makes sense from inside Media City, though an onsite visit for a whole edit suite can be quoted on WhatsApp (055 741 3706) when a technician is free.",
    travel: [
      { from: "Concord Tower (workshop)",     drive: "0 min" },
      { from: "Arenco Tower",                 drive: "2 min" },
      { from: "Shatha Tower",                 drive: "3 min" },
      { from: "Business Central Towers",      drive: "3 min" },
      { from: "Media City Amphitheatre side", drive: "2 min" },
      { from: "Media One Hotel",              drive: "3 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Where exactly is the workshop in Media City?", a: "Concord Tower, Office #45, 10th floor, Al Sufouh, Dubai Media City. There's parking on site if you're coming by car, but from most Media City buildings it's quicker to walk over." },
      { q: "Can I just walk in without an appointment?", a: "Yes, for a diagnosis. Walk in Monday to Thursday or Saturday 9 am to 7 pm, or Friday 9 am to 12 pm and 2 pm to 7 pm. The diagnosis is free. If we need to order a part, we'll quote you and book it in." },
      { q: "I can't leave my desk today. Is it worth sending the Mac over by courier?", a: "Rarely. We're a few minutes' walk away, so a colleague dropping it at Office #45 is faster than any courier booking. If nobody can step out, a same-day courier app works, and you WhatsApp us the tracking link." },
      { q: "Can I wait while it's repaired?", a: "For some jobs, yes: a battery or keyboard on a common model, where the part is in stock. Tell us when you arrive and we'll say honestly whether it's a wait-for-it job or an afternoon job." },
      { q: "Our edit suite has several iMacs and Mac Studios. Can you look at them together?", a: "Yes. Each machine gets its own free diagnosis and written quote. From here it's a short carry, so bring them over well padded. If moving them isn't practical, ask about a paid onsite visit; it happens only when a technician is free." },
      { q: "My MacBook Pro holds client footage and won't boot. What happens first?", a: "Data first. We attempt recovery from the SSD before any board work and confirm what came off before we discuss the repair. On Apple silicon and T2 Macs the SSD is soldered, so this is board-level work." },
      { q: "Is being next door actually faster?", a: "Usually. There's no courier leg either way, you can watch the diagnosis, and for in-stock parts the Mac is often ready the same afternoon. Drop it on your way into the office and come back before 7 pm." },
      { q: "Can a technician fix my Mac at my desk in Media City?", a: "It's possible but rarely worth it. Onsite visits are paid, happen only when a technician is free, and the charge is quoted on WhatsApp first. We're a short walk away, so bringing the Mac to the bench is quicker, and the diagnosis is free." },
    ],
    reviewIndexes: [0, 4, 9, 14, 21, 25],
  },
  {
    slug: "knowledge-park",
    area: "Dubai Knowledge Park",
    short: "Knowledge Park",
    driveTime: "5 minutes",
    metroNote: "Dubai Knowledge Park sits just across Sheikh Zayed Road from Media City; the workshop is a five-minute drive or a short taxi hop. On foot from the Metro, Al Fardan Exchange on the Red Line is about 15 minutes from Concord Tower.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Dubai Knowledge Park blocks", "Knowledge Village", "Middlesex University Dubai", "Murdoch University Dubai", "Dubai Internet City border", "Sheikh Zayed Road side"],
    landmarkLine: "5 minutes from Knowledge Village, Middlesex and Murdoch - across the road from our Media City workshop.",
    intro:
      "Just across Sheikh Zayed Road from Media City, Dubai Knowledge Park is about five minutes from our workshop in Concord Tower. It's a mix of university campuses, training institutes and education offices, so most Macs from here are student MacBooks holding coursework and staff laptops holding lesson and admin material. For MacBook repair from Knowledge Park, the obvious route is to walk or take a short taxi over between classes. Booking a courier or paying for an onsite visit rarely makes sense this close. The diagnosis is free, and the price is fixed in writing before anything starts.",
    whyChoose:
      "For a student, the two questions are cost and whether the coursework survives. The diagnosis is free and there's no fee if we can't fix the machine, so you never pay to hear bad news. If the MacBook won't boot, we try to recover your files first and tell you what came off. Because we repair the logic board at component level instead of replacing it, a fault another shop prices near the value of the laptop often costs far less here. Every price is fixed on WhatsApp before we open the Mac.",
    pickupNote:
      "Most Knowledge Park customers walk or take a short taxi over to Concord Tower, Office #45, 10th floor, in Dubai Media City. Before you come, WhatsApp 055 741 3706 with the model and a photo of the fault so Shafiq knows what to expect. If you're stuck in class, a friend can bring it in for you. A courier app or a paid onsite visit is possible, but from five minutes away it rarely saves time.",
    travel: [
      { from: "Knowledge Village",          drive: "5 min" },
      { from: "Middlesex University Dubai", drive: "5 min" },
      { from: "Murdoch University Dubai",   drive: "6 min" },
      { from: "Knowledge Park Block 2-4",   drive: "5 min" },
      { from: "Knowledge Park Block 10-19", drive: "6 min" },
      { from: "Internet City border",       drive: "4 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How close is the workshop to Knowledge Park?", a: "About five minutes. The workshop is in Concord Tower in Dubai Media City, directly across Sheikh Zayed Road. Most students walk or grab a short taxi over between classes." },
      { q: "My coursework is on a MacBook that won't start. Can you save it?", a: "Usually. We attempt recovery from the SSD before any board work and confirm what was recovered. On Apple silicon and T2 Macs the storage is soldered, so it's board-level work rather than removing a drive." },
      { q: "I'm a student. How do I know the price won't grow?", a: "The price is fixed in writing on WhatsApp after the free diagnosis and before any work starts. If we find something else, we ask you first rather than adding it to the bill." },
      { q: "Is it worth repairing an older MacBook?", a: "Sometimes not, and we'll tell you plainly. The diagnosis is free and there's no fee if we can't fix it, so an honest 'not worth it' costs you nothing." },
      { q: "How fast is a screen or battery replacement?", a: "Often the same day for in-stock parts, and because we're five minutes away you can drop it before a lecture and pick it up after. Board-level work takes longer." },
      { q: "Can a friend drop off or pick up my MacBook for me?", a: "Yes. Tell us their name on WhatsApp before they come, and we'll hand the Mac over to them when it's ready. The quote and the approval still come to you, not to your friend." },
      { q: "Do you repair lab Macs for the universities?", a: "Yes, lab iMacs and Mac minis included. Each machine gets its own free diagnosis and written quote. They're a short drive from here, so carrying them over is usually simpler than an onsite visit, which is paid and depends on a technician being free." },
      { q: "Should I send my MacBook by courier from Knowledge Park?", a: "Usually there's no point. A same-day courier app works, but you'd wait for the app's driver to cover a five-minute trip. Walking it over gets the free diagnosis started sooner, and you can ask Shafiq questions face to face." },
    ],
    reviewIndexes: [1, 5, 10, 16, 19, 23],
  },
  {
    slug: "umm-suqeim",
    area: "Umm Suqeim",
    short: "Umm Suqeim",
    driveTime: "12 minutes",
    metroNote: "Umm Suqeim runs parallel to Sheikh Zayed Road, about 12 minutes by car from the workshop, so most residents drive in to Concord Tower, Dubai Media City, or send the Mac with a same-day courier app. By Metro, ride the Red Line to Al Fardan Exchange and walk about 15 minutes.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Burj Al Arab", "Madinat Jumeirah", "Umm Suqeim Beach", "Jumeirah Beach Hotel", "Wild Wadi", "Umm Suqeim 1-3 villas"],
    landmarkLine: "12 minutes from the Burj Al Arab, Madinat Jumeirah and Umm Suqeim Beach.",
    intro:
      "Along the coast from Madinat Jumeirah and the Burj Al Arab towards Jumeirah, Umm Suqeim is about 12 minutes from our workshop in Concord Tower, Dubai Media City. It's mostly established villa neighbourhoods - Umm Suqeim 1, 2 and 3 - with long-term families and a good number of people working from home. There's very little genuine Mac repair inside the area. For MacBook repair from Umm Suqeim, a 12-minute drive up the road usually beats any other route. If nobody can get away, a same-day courier app does the job, and a paid onsite visit is possible when a technician is free.",
    whyChoose:
      "Umm Suqeim households tend to have several Macs, and often an older one holding years of family photos that never got backed up. Bring them in together: each gets its own free diagnosis and written quote, so you decide what's worth fixing. Board faults are repaired at component level rather than by swapping the board, and where a machine isn't worth the money we say so. The beach is the other factor. Sand and salt air are hard on fans and board contacts, and we see the results on the bench regularly.",
    pickupNote:
      "From Umm Suqeim, Al Sufouh Road or Sheikh Zayed Road takes you up to Media City in about 12 minutes, and Concord Tower has parking on site. If you'd rather stay home, book a same-day courier app, give the driver your villa number and street, and WhatsApp 055 741 3706 the tracking link, the model and a photo of the fault. A paid onsite visit is possible when a technician is free.",
    travel: [
      { from: "Umm Suqeim 1",       drive: "13 min" },
      { from: "Umm Suqeim 2",       drive: "12 min" },
      { from: "Umm Suqeim 3",       drive: "11 min" },
      { from: "Madinat Jumeirah",   drive: "10 min" },
      { from: "Burj Al Arab / JBH", drive: "11 min" },
      { from: "Umm Suqeim Beach",   drive: "12 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long is the drive from Umm Suqeim to Media City?", a: "About 12 minutes, a little less from Umm Suqeim 3 and Madinat Jumeirah. Come up to Office #45, 10th floor, Concord Tower. There's parking on site and no appointment is needed for a diagnosis." },
      { q: "We have several Macs at home. Can you take them together?", a: "Yes. Bring them in on one trip and each gets its own free diagnosis and written quote on WhatsApp, so you can decide which are worth repairing and leave the rest." },
      { q: "Our old MacBook has years of family photos and won't start. Can you recover them?", a: "Often yes. A Mac that won't start usually has a board fault with the storage intact. We attempt recovery before any repair and tell you what came off. The diagnosis is free." },
      { q: "Can my helper send the Mac to you while I'm at work?", a: "Yes. Book a same-day courier app yourself, list your helper as the contact at the villa gate, and WhatsApp us the tracking link. The quote comes to you on WhatsApp, and nothing starts until you approve it." },
      { q: "Does living near the beach damage a MacBook?", a: "It can. Fine sand clogs fans and salt-laden air corrodes exposed board contacts over time. If your Mac is running hot or the ports are intermittent, a clean and inspection is worth doing before it becomes a board fault." },
      { q: "Will a technician come to my villa in Umm Suqeim?", a: "Sometimes. Onsite visits are paid and only happen when a technician is free. WhatsApp the fault and your villa and we'll quote the charge first. Most repairs still need the bench, so driving the Mac over is usually quicker." },
      { q: "Our MacBook got sand in the keyboard after a beach day. What should we do?", a: "Stop pressing the stuck keys and don't blow into it, which pushes grit deeper. Bring it in for a free diagnosis. Often it's a clean under the keys; if a key mechanism is damaged, keyboard repairs are often done the same day when the part is in stock." },
      { q: "Do you repair iMacs as well as MacBooks?", a: "Yes, and Mac mini and Mac Studio too. At 12 minutes away, an iMac is easiest brought over in the car with the screen padded. Send it by courier only if it's well boxed." },
    ],
    reviewIndexes: [2, 6, 11, 15, 20, 24],
  },
  {
    slug: "al-safa",
    area: "Al Safa",
    short: "Al Safa",
    driveTime: "15 minutes",
    metroNote: "Al Safa sits between Al Wasl Road and Sheikh Zayed Road, so most residents drive in to Concord Tower, Dubai Media City, or send the Mac with a same-day courier app. On the Red Line, get off at Al Fardan Exchange; we're about a 15-minute walk from there.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Safa Park", "Al Safa 1 & 2 villas", "Al Wasl Road", "Union Coop Al Safa", "Sheikh Zayed Road side", "Al Manara border"],
    landmarkLine: "15 minutes from Safa Park, Al Wasl Road and the Al Safa villas.",
    intro:
      "Quiet streets and established villas fill Al Safa, between Al Wasl Road and Sheikh Zayed Road, around 15 minutes from our workshop in Concord Tower, Dubai Media City. It's home to long-term families and plenty of people running a business or freelance practice from home, so the Mac on the dining table is often doing serious work. There's very little specialist Mac repair nearby. MacBook repair from Al Safa usually starts with a short drive, or with a same-day courier app if you can't step away from a deadline. A paid onsite visit is possible when a technician is free.",
    whyChoose:
      "When the Mac is the business, the questions are turnaround and data. Many screen, battery, keyboard and trackpad repairs finish the same day when the part is in stock, so a home-office machine is rarely out for long. If it won't boot, we go after the data before any repair work and tell you what came off. Board faults are repaired on the board rather than by swapping it, which keeps a serious fault from turning into a replacement quote. And we'll tell you honestly when an older machine isn't worth the money.",
    pickupNote:
      "From Al Safa, join Sheikh Zayed Road heading towards Media City; Concord Tower is about 15 minutes away with parking on site. On a Friday, come before 12 pm or after 2 pm, as we close in between. To send it instead, book a same-day courier app, hand the Mac over at your gate, and WhatsApp 055 741 3706 the tracking link, the model and a photo of the fault. Paid onsite visits happen only when a technician is free.",
    travel: [
      { from: "Al Safa 1",          drive: "15 min" },
      { from: "Al Safa 2",          drive: "14 min" },
      { from: "Safa Park",          drive: "16 min" },
      { from: "Al Wasl Road side",  drive: "16 min" },
      { from: "Union Coop Al Safa", drive: "15 min" },
      { from: "Al Manara border",   drive: "13 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Can I get to your workshop quickly from Al Safa?", a: "Yes, it's about 15 minutes by car, a little less from the Al Manara side. Concord Tower is in Dubai Media City, there's parking on site, and a diagnosis doesn't need an appointment." },
      { q: "I run my business from a home MacBook. How quickly can it be back?", a: "For in-stock parts, often the same day: drive it in or send it in the morning and it can be ready by the evening. Tell us it's your work machine, and if it won't boot we deal with the data first." },
      { q: "My Mac won't turn on. Is my work lost?", a: "Probably not. When a Mac shows no sign of life, the fault is most often on the board while the storage survives. We try to get your files off before any repair and confirm what we saved. Diagnosis is free." },
      { q: "Can a family member send the Mac by courier for me?", a: "Yes. You book a same-day courier app, they hand the Mac to the driver at the villa gate, and you WhatsApp us the tracking link with the model. The written quote comes to you before any work starts." },
      { q: "Is an older Intel MacBook worth repairing?", a: "It depends on the fault. We repair Intel as well as Apple silicon, and after the free diagnosis we'll tell you honestly whether the repair makes economic sense." },
      { q: "Do you repair iMacs too?", a: "Yes - iMac, Mac mini and Mac Studio as well as MacBooks. An iMac is safer in the back of a car than on a courier bike, so bring it in padded if you can." },
      { q: "Is there an onsite option if I can't leave the house in Al Safa?", a: "There is, but it's paid and only when a technician is free. WhatsApp us the fault and we'll quote the visit charge before booking. If you just can't leave, a same-day courier app is usually the faster route." },
      { q: "My MacBook gets hot on the desk by the window. Is the Dubai sun damaging it?", a: "Direct sun through glass can push a MacBook into throttling, and constant heat ages the battery faster. Move it out of the sun first. If it still runs hot indoors, the fans may be clogged; a clean and repaste is usually a same-day job." },
    ],
    reviewIndexes: [3, 7, 12, 17, 22, 25],
  },
  {
    slug: "satwa",
    area: "Satwa",
    short: "Satwa",
    driveTime: "20 minutes",
    metroNote: "Satwa lies between Sheikh Zayed Road and Jumeirah, about 20 minutes by car from the workshop, so most customers here drive in to Concord Tower, Dubai Media City, or send the Mac with a same-day courier app. By Metro, the Red Line takes you to Al Fardan Exchange, a 15-minute walk from us.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Satwa Roundabout", "Al Diyafah Street", "Al Hudaiba", "Jumeirah Road border", "Satwa Park", "Sheikh Zayed Road side"],
    landmarkLine: "20 minutes from Satwa Roundabout, Al Diyafah Street and Al Hudaiba.",
    intro:
      "One of Dubai's older, busier neighbourhoods, Satwa is tucked between Sheikh Zayed Road and Jumeirah, about 20 minutes from our workshop in Concord Tower, Dubai Media City. It's dense and mixed - apartments, small shops and a big working population - and well served for phone repair but thin on genuine board-level Mac work. For MacBook repair from Satwa you can drive straight down Sheikh Zayed Road, or book a same-day courier app from your building and send us the tracking link. A paid onsite visit is possible when a technician is free.",
    whyChoose:
      "In a neighbourhood full of phone counters, the risk with a Mac is a shop that swaps whatever it can reach and bills for it. We work the other way round. A free diagnosis finds the part that actually failed, and you get a written price on WhatsApp before anything is opened. If we can't fix it, there's no fee. Board faults are repaired at component level rather than by replacing the board, which usually costs far less. And if the Mac simply isn't worth the money, Shafiq will tell you that instead of taking the job.",
    pickupNote:
      "From Satwa, get onto Sheikh Zayed Road towards Media City; it's about 20 minutes to Concord Tower, which has parking on site. Satwa addresses can confuse courier drivers, so if you send it by a same-day courier app, drop an exact pin and add the building name in the notes. Then WhatsApp 055 741 3706 the tracking link, the model and a photo of the fault. A paid onsite visit is possible when a technician is free.",
    travel: [
      { from: "Satwa Roundabout",       drive: "20 min" },
      { from: "Al Diyafah Street",      drive: "20 min" },
      { from: "Al Hudaiba",             drive: "21 min" },
      { from: "Satwa Park",             drive: "20 min" },
      { from: "Jumeirah Road border",   drive: "19 min" },
      { from: "Sheikh Zayed Road side", drive: "18 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How do I get to your workshop from Satwa?", a: "Drive down Sheikh Zayed Road towards Media City, about 20 minutes. We're at Office #45, 10th floor, Concord Tower, Dubai Media City, with parking on site. A diagnosis doesn't need an appointment." },
      { q: "A local shop wants to replace my whole logic board. Is there another option?", a: "Often, yes. Board failures usually come down to one or two dead components, and those can be replaced on the board itself. We find them during the free diagnosis and quote that repair, so you can compare the two prices." },
      { q: "Could the bill go up after you start the repair?", a: "No. Once the free diagnosis is done, the price is fixed in writing on WhatsApp. If we find a second fault, we message you and wait for a yes before touching it." },
      { q: "Can my flatmate hand the Mac to a courier for me?", a: "Yes. Book the same-day courier app yourself, put your flatmate down as the handover contact, and WhatsApp us the tracking link. We send the written quote to you, and no repair starts until you approve it." },
      { q: "My MacBook is old. Is it even worth fixing?", a: "Sometimes not. After the free diagnosis we'll tell you honestly whether it makes economic sense, and there's no fee if we can't fix it. Better to hear that before you spend anything." },
      { q: "Do you repair iMac and Mac mini too?", a: "Yes, alongside MacBooks. A Mac mini travels fine by courier app in a padded box. An iMac is safer driven over with the screen protected, since a cracked display adds to the bill." },
      { q: "Will a technician come to a flat in Satwa?", a: "Possibly. Onsite visits are paid and depend on a technician being free, and the charge is quoted on WhatsApp before booking. For most faults, sending the Mac by courier app or driving it in gets it on the bench sooner." },
      { q: "Can I wait while my MacBook battery is changed?", a: "Sometimes. If it's a common model and the battery is in stock, it may be a wait-for-it job; otherwise it's usually later that day. Tell us when you arrive and we'll say which. Batteries carry a 3-month warranty." },
    ],
    reviewIndexes: [4, 8, 13, 18, 21, 24],
  },
  {
    slug: "al-jaddaf",
    area: "Al Jaddaf",
    short: "Al Jaddaf",
    driveTime: "25 minutes",
    metroNote: "Most customers here drive in to Concord Tower, Dubai Media City, or send the Mac with a same-day courier app. By Metro, take the Green Line from Al Jaddaf, change to the Red Line and ride to Al Fardan Exchange, a 15-minute walk from us.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Jaddaf Waterfront", "Culture Village", "Palazzo Versace Dubai", "Al Jaddaf Metro", "Dubai Healthcare City Phase 2", "Dubai Creek side"],
    landmarkLine: "25 minutes from Jaddaf Waterfront, Culture Village and Al Jaddaf Metro.",
    intro:
      "Set on the creek between Dubai Healthcare City and Business Bay, Al Jaddaf is about 25 minutes from our workshop in Concord Tower, Dubai Media City. It has changed fast, with the Jaddaf Waterfront towers, Culture Village and the healthcare and education buildings of Healthcare City Phase 2, and it now has a large population of residents and professionals with very little specialist Mac repair nearby. For MacBook repair from Al Jaddaf, most people either drive across on Sheikh Zayed Road or book a same-day courier app from the building reception. A paid onsite visit is possible when a technician is free.",
    whyChoose:
      "A lot of Al Jaddaf customers are medical and academic staff, and the Mac holds work that can't simply be wiped. If a machine won't boot, we attempt recovery from the SSD before any repair work and confirm what came off. On Apple silicon and T2 Macs the storage is soldered, so that's board-level work, not pulling a drive. We don't browse or copy data beyond what the job needs. Diagnosis is free, there's no fee if we can't fix it, and the quote is fixed in writing on WhatsApp before work starts.",
    pickupNote:
      "From Al Jaddaf, cross to Sheikh Zayed Road and head towards Media City; Concord Tower has parking on site. From a clinic or office, the simplest route is a same-day courier app such as Careem Box booked to your reception desk. WhatsApp 055 741 3706 the tracking link, the model, a photo of the fault and who should receive the quote. A paid onsite visit is possible when a technician is free.",
    travel: [
      { from: "Jaddaf Waterfront",       drive: "25 min" },
      { from: "Culture Village",         drive: "26 min" },
      { from: "Al Jaddaf Metro",         drive: "25 min" },
      { from: "Healthcare City Phase 2", drive: "25 min" },
      { from: "Palazzo Versace side",    drive: "26 min" },
      { from: "Business Bay border",     drive: "22 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How far is your workshop from Al Jaddaf?", a: "About 25 minutes by car, a bit less from the Business Bay side. Concord Tower is in Dubai Media City, with parking on site. You can walk in for a diagnosis without an appointment." },
      { q: "My Mac holds patient or course material and won't boot. What happens first?", a: "Data first. We attempt recovery from the SSD before any board work and confirm what was recovered. On Apple silicon and T2 Macs the SSD is soldered, so this is specialist board-level work." },
      { q: "Is my data kept confidential?", a: "We don't browse or copy data beyond what a repair or recovery needs. If the Mac holds patient records, say so when you message and we'll explain what the repair involves and whether we need your login to test it." },
      { q: "Can our clinic send a Mac by courier from reception?", a: "Yes. Book a same-day courier app to your reception, hand the Mac to the driver, and WhatsApp us the tracking link with the department and a contact name. Once it's fixed, we book a courier to bring it back to the same reception." },
      { q: "How long does a MacBook screen or battery replacement take?", a: "The same day for in-stock parts in most cases. Screens carry a 90-day warranty and batteries 3 months. Board-level work takes longer, and we give you an estimate with the written quote." },
      { q: "Do you repair iMacs and Mac minis from Al Jaddaf?", a: "Yes. A Mac mini can go by courier app in a padded box. For an iMac, driving it in with the screen protected is safer, because a cracked display turns one repair into two." },
      { q: "Can a technician come to our office in Healthcare City?", a: "Only when one is free, and it's a paid visit. Send the building, the machines and the faults on WhatsApp and we'll quote the charge before booking. Anything needing board work comes back to the workshop anyway." },
      { q: "Do you repair iPhones and iPads too?", a: "Yes. We repair iPhone and iPad as well as every Mac, so one trip from Al Jaddaf can cover a work MacBook and a cracked iPhone. We don't repair Apple Watch or AirPods." },
    ],
    reviewIndexes: [0, 6, 12, 17, 20, 25],
  },
  {
    slug: "jumeirah-golf-estates",
    area: "Jumeirah Golf Estates",
    short: "JGE",
    driveTime: "22 minutes",
    metroNote: "Jumeirah Golf Estates is not on the metro network, so most residents drive to Concord Tower, Dubai Media City, or send the Mac over with a same-day courier app they book themselves. The nearest stop to us is Palm Jumeirah on the Dubai Tram, a 3-minute walk.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Earth Course", "Fire Course", "Jumeirah Golf Estates Clubhouse", "Alandalus", "Wildflower", "Sheikh Mohammed Bin Zayed Road side"],
    landmarkLine: "22 minutes from the Earth and Fire courses, the Clubhouse and Alandalus.",
    intro:
      "Off Sheikh Mohammed Bin Zayed Road, between Motor City and Sports City, Jumeirah Golf Estates is around 22 minutes by car from our workshop at Concord Tower, Dubai Media City. It's a gated villa community built around the Earth and Fire courses, with the Alandalus apartments on one side and plenty of people working from home. Nobody does MacBook repair inside the estate, so you have three options: drive in with the Mac, book a same-day courier yourself and send it to us, or ask for a paid onsite visit when a technician is free. Diagnosis is free and the quote comes in writing on WhatsApp.",
    whyChoose:
      "Villas here usually have more than one Apple device, and you can bring them in together for a free diagnosis on each and one written quote covering the lot. We repair the whole Mac line at component level, so a board fault another shop prices as a full replacement is often a much smaller job on our bench. Nothing gets opened until the price is agreed on WhatsApp, and there's no charge if we can't fix it. If a machine isn't worth the money, Shafiq will tell you so rather than take the job. Repairs carry a written warranty of up to 12 months, depending on the part.",
    pickupNote:
      "From the estate it's a straight run up Sheikh Mohammed Bin Zayed Road towards Media City, and Concord Tower has parking on site. If you can't spare the drive, book a same-day courier app, let estate security know a driver is coming, and hand the Mac over at your door. WhatsApp 055 741 3706 the tracking link, the model and a photo of the fault. A paid onsite visit is possible when a technician is free.",
    travel: [
      { from: "Wildflower / Redwood", drive: "22 min" },
      { from: "Alandalus apartments", drive: "21 min" },
      { from: "Earth Course villas",  drive: "23 min" },
      { from: "Fire Course villas",   drive: "23 min" },
      { from: "Clubhouse",            drive: "22 min" },
      { from: "Motor City border",    drive: "20 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Can I drive from Jumeirah Golf Estates to your workshop without an appointment?", a: "Yes. Walk in for a free diagnosis, no booking needed. We're on the 10th floor of Concord Tower, Dubai Media City, about 22 minutes from the estate, with parking on site. Hours are Mon-Thu and Sat 9 am-7 pm, Friday 9 am-12 pm and 2 pm-7 pm." },
      { q: "How do I send my MacBook from a JGE villa by courier?", a: "Book a same-day courier app, tell estate security the driver is on the way, and hand the Mac over at the door. Then WhatsApp us the tracking link on 055 741 3706. Once the repair is done, we book a courier to bring it back to the villa." },
      { q: "We have several Macs at home. Can they all be checked at once?", a: "Yes. Bring them in together or send them in one courier booking. Each machine gets a free diagnosis, and you receive a single written quote so you can choose which ones to repair." },
      { q: "Can a technician come to my villa in the estate?", a: "Sometimes. Onsite repair is a paid service and depends on a technician being free. Message us the model and the fault on WhatsApp and we'll quote the visit before you book anything." },
      { q: "My child spilled a drink on the MacBook. What now?", a: "Switch it off and don't plug it in to charge. Liquid keeps eating at the board while it's wet, so get it to us the same day if you can, by car or by courier. We quote once the real damage is visible." },
      { q: "Do you repair iMac and Mac Studio as well as MacBooks?", a: "Yes, and Mac mini and Mac Pro too. Desktops are awkward in a courier bag, so many people drive them in. If you do send one, pack it well and WhatsApp us before it leaves the villa." },
      { q: "How long does a MacBook screen or battery repair take?", a: "Screen, battery, keyboard and trackpad jobs are often finished the same day when the part is in stock. Logic board work takes longer. You get the expected timing with the written quote on WhatsApp." },
      { q: "What if my old MacBook isn't worth fixing?", a: "We'll tell you straight after the free diagnosis. There's no charge if we can't fix it, so hearing 'not worth it' costs you nothing, and you can decide what to do with the machine from there." },
    ],
    reviewIndexes: [1, 7, 11, 16, 19, 23],
  },
  {
    slug: "rashidiya",
    area: "Rashidiya",
    short: "Rashidiya",
    driveTime: "32 minutes",
    metroNote: "Centrepoint station (formerly Rashidiya) at the end of the Red Line serves the area. Ride it all the way to Al Fardan Exchange and walk about 15 minutes to Concord Tower.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Centrepoint Metro", "Rashidiya Park", "Dubai Airport Terminal 3 side", "Nad Al Hamar border", "Al Rashidiya villas", "Mirdif border"],
    landmarkLine: "32 minutes from Centrepoint Metro, Rashidiya Park and the Terminal 3 side of the airport.",
    intro:
      "Out on the eastern side of Dubai, between the airport and Mirdif, Rashidiya is about 32 minutes by car from our workshop in Concord Tower, Dubai Media City. It's an established area of villas and low-rise buildings, home to long-term families and a lot of airline and airport staff. Board-level MacBook repair is hard to find on this side of the city. You can drive across and walk in without an appointment, send the Mac with a same-day courier you book yourself, or ask about a paid onsite visit. The diagnosis is free and the price is fixed in writing on WhatsApp.",
    whyChoose:
      "Crossing the city from Rashidiya takes a chunk of the day, so the workshop at the other end has to be worth it. We only do Apple: Intel and Apple silicon Macs across the whole line, plus the component-level board work most counters won't touch. Diagnosis is free, there's no charge if we can't fix it, and the written price doesn't move once the Mac is open. If you'd rather skip the drive, a courier you book from your own door gets it to us without waiting on anyone. When it's fixed, we book a courier to bring it back, and crew on rotation can pick the day on WhatsApp.",
    pickupNote:
      "Driving in is a cross-city run of about 32 minutes, a little less from the Terminal 3 side, and Concord Tower has parking on site. Flying out soon? Book a same-day courier app before you leave, hand the Mac to the driver at your gate and WhatsApp 055 741 3706 the tracking link, the model and a photo of the fault. A paid onsite visit is possible when a technician is free.",
    travel: [
      { from: "Centrepoint Metro",   drive: "32 min" },
      { from: "Rashidiya Park",      drive: "32 min" },
      { from: "Al Rashidiya villas", drive: "33 min" },
      { from: "Terminal 3 side",     drive: "30 min" },
      { from: "Nad Al Hamar border", drive: "33 min" },
      { from: "Mirdif border",       drive: "34 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long is the drive from Rashidiya to your Media City workshop?", a: "About 32 minutes, a bit less from the Terminal 3 side. Walk in without an appointment for a free diagnosis; there's parking on site. We're open Mon-Thu and Sat 9 am-7 pm, Friday 9 am-12 pm and 2 pm-7 pm, and closed Sunday." },
      { q: "I work airline rotations. What happens if I'm away when the repair is done?", a: "Send us your roster on WhatsApp. We book a courier to bring it back for when you're back in Dubai, or you can drop by Concord Tower and pick it up yourself after you land." },
      { q: "Is there a cheaper option than replacing the logic board?", a: "Usually, yes. Most board faults come down to a small number of failed components, and we repair at component level. The diagnosis is free, so you can compare the number before committing to anything." },
      { q: "Can I send my MacBook from Rashidiya by courier instead of driving?", a: "Yes. Book a same-day courier app such as Careem Box, hand the Mac to the driver and WhatsApp us the tracking link on 055 741 3706. It's the quickest route if you can't come in. Once it's fixed, collect it, or we book a courier to bring it back." },
      { q: "Will a technician come out to Rashidiya for a Mac repair?", a: "Only when one is free, and it's a paid visit. WhatsApp us the model and the fault first. We quote the onsite charge before you book, so there are no surprises at the door." },
      { q: "Do you repair older Intel MacBooks?", a: "Yes, Intel as well as Apple silicon. After the free diagnosis we'll tell you honestly whether the repair makes sense for the age of the machine, and there's no fee if we can't fix it." },
      { q: "Do you repair iMacs and Mac minis from Rashidiya?", a: "Yes, plus Mac Studio and Mac Pro. A desktop is easiest to bring in by car. If you send one by courier, box it with padding around the screen and message us before it leaves." },
      { q: "My MacBook will not turn on. Can you still get my files?", a: "Usually. A Mac that won't power on most often has a board fault with the storage still intact. We attempt recovery before any repair and confirm exactly what came off." },
    ],
    reviewIndexes: [2, 9, 14, 18, 22, 24],
  },
  {
    slug: "al-qusais",
    area: "Al Qusais",
    short: "Al Qusais",
    driveTime: "35 minutes",
    metroNote: "Al Qusais is on the Green Line, but it's a long ride across the city, so most customers either drive to Concord Tower, Dubai Media City, or send the Mac with a same-day courier app. If you take the Metro, change to the Red Line and ride to Al Fardan Exchange, a 15-minute walk from us.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Al Qusais Metro", "Al Qusais Industrial Area", "Al Nahda border", "Dubai Grand Hotel", "Al Qusais residential blocks", "Damascus Street"],
    landmarkLine: "35 minutes from Al Qusais Metro, the industrial area and the Al Nahda border.",
    intro:
      "There's no shortage of computer shops near the Sharjah border, but very few will open a Mac logic board. Al Qusais is a big, busy district on Dubai's eastern edge, about 35 minutes from our workshop at Concord Tower, Dubai Media City. Dense residential blocks sit next to the industrial area's offices, warehouses and trading companies. For MacBook repair from here, drive in and walk up without an appointment, book a same-day courier from your building or unit, or ask about a paid onsite visit when a technician is free. The diagnosis costs nothing and the quote comes in writing.",
    whyChoose:
      "What people in Al Qusais ask us for is a straight price. You get one: the diagnosis is free, the figure is fixed in writing on WhatsApp before anything is opened, and it doesn't move afterwards. No fix, no charge. Board faults are repaired at component level rather than by swapping the board, which usually comes in well under a replacement quote. Trading companies in the industrial area can send several office Macs in one go and get a written price per machine. Tell us which one is holding up work and we'll look at that one first.",
    pickupNote:
      "Driving in takes about 35 minutes and Concord Tower has parking on site. For a courier, book a same-day courier app and hand the Mac over at your building entrance, warehouse door or office reception. Building names repeat around here, so give the driver a location pin. Then WhatsApp 055 741 3706 the tracking link, the model and a photo of the fault. Paid onsite visits happen only when a technician is free.",
    travel: [
      { from: "Al Qusais Metro",          drive: "35 min" },
      { from: "Al Qusais residential",    drive: "35 min" },
      { from: "Al Qusais Industrial 1-2", drive: "34 min" },
      { from: "Al Qusais Industrial 3-5", drive: "36 min" },
      { from: "Damascus Street",          drive: "35 min" },
      { from: "Al Nahda border",          drive: "35 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Can I send a MacBook from an Al Qusais warehouse by courier?", a: "Yes. Book a same-day courier app, give the driver your unit number and a location pin, and hand the Mac over at the door or reception. WhatsApp us the tracking link and we take it from there." },
      { q: "We have several office Macs to repair. Can we send them together?", a: "Yes, in one courier booking or one trip in. Each machine gets a free diagnosis and its own written price, so the company decides which ones to go ahead with." },
      { q: "Will the price change after you open the Mac?", a: "No. It's fixed in writing on WhatsApp after the free diagnosis. If we find something else inside, we ask for your approval first rather than adjusting the bill." },
      { q: "Is it worth driving from Al Qusais to Media City for a Mac repair?", a: "If you need board-level work, yes. It's about 35 minutes, you can walk in without an appointment, and many screen, battery and keyboard jobs are done the same day when the part is in stock. There's parking on site." },
      { q: "Do you do onsite MacBook repair in Al Qusais?", a: "Sometimes. A technician visits only when one is free, and onsite repair is paid. The charge is quoted on WhatsApp before you book, so send the model and fault first." },
      { q: "Do you repair iMac and Mac mini for offices here?", a: "Yes, alongside MacBooks, Mac Studio and Mac Pro. Office desktops are safer moved by car. If you courier one, pack it firmly and message us before it leaves the building." },
      { q: "Do you repair iPhones and iPads too?", a: "Yes, iPhone and iPad as well as every Mac. We don't repair Apple Watch or AirPods. Send the model and a photo of the fault on WhatsApp and we'll tell you what's involved." },
      { q: "What are your opening hours on Friday?", a: "Friday we're open 9 am-12 pm and 2 pm-7 pm. Mon-Thu and Saturday it's 9 am-7 pm, and we're closed on Sunday. If you're sending a courier, book it inside those hours so someone is here to receive it." },
    ],
    reviewIndexes: [3, 8, 13, 17, 21, 25],
  },
  {
    slug: "muhaisnah",
    area: "Muhaisnah",
    short: "Muhaisnah",
    driveTime: "36 minutes",
    metroNote: "Muhaisnah is not directly on the metro, so most residents drive to Concord Tower, Dubai Media City, or book a same-day courier app to get the Mac to us. On public transport, aim for Al Fardan Exchange on the Red Line, about a 15-minute walk from the workshop.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Madina Mall", "Muhaisnah 1-4", "Al Mizhar border", "Muhaisnah residential blocks", "Al Qusais border", "Beirut Street"],
    landmarkLine: "36 minutes from Madina Mall and the Muhaisnah residential blocks.",
    intro:
      "Between Al Qusais and Mizhar in the east of Dubai, Muhaisnah is a large, densely populated area where worker accommodation and family housing sit side by side, with almost no specialist Mac repair of its own. Getting MacBook repair from Muhaisnah means one of three things. Drive to Concord Tower, Dubai Media City, about 36 minutes away, and walk in without an appointment. Book a same-day courier yourself and send the Mac to us. Or pay for an onsite visit when a technician is free. The diagnosis is free, and the price is fixed in writing on WhatsApp before work starts.",
    whyChoose:
      "The plain reasons to use us from Muhaisnah are cost and certainty. The diagnosis is free, there's no fee if we can't fix the machine, and the written price stays put once the Mac is open. We repair logic boards at component level rather than replacing them, so the number is usually far below a board-swap quote. When an older Mac isn't worth the money, we say so, and finding that out costs you nothing. If you can't take time off for the drive across town, a courier you book yourself saves you the trip.",
    pickupNote:
      "Many Muhaisnah buildings look alike, so when you book a same-day courier app, drop an exact location pin and meet the driver at your building entrance. Then WhatsApp 055 741 3706 the tracking link, the Mac model and a photo or short video of the fault. If you'd rather drive, Media City is about 36 minutes away and walk-ins don't need an appointment. A paid onsite visit is possible when a technician is free.",
    travel: [
      { from: "Madina Mall",      drive: "36 min" },
      { from: "Muhaisnah 1",      drive: "35 min" },
      { from: "Muhaisnah 2",      drive: "36 min" },
      { from: "Muhaisnah 4",      drive: "37 min" },
      { from: "Al Mizhar border", drive: "37 min" },
      { from: "Al Qusais border", drive: "35 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How do I get my MacBook from Muhaisnah to your workshop?", a: "Drive in, about 36 minutes, and walk in without an appointment, or book a same-day courier app and WhatsApp us the tracking link on 055 741 3706. If neither works for you, ask about a paid onsite visit." },
      { q: "Can I drop my Mac off on a Friday?", a: "Yes. On Friday we're open 9 am-12 pm and 2 pm-7 pm. The rest of the week it's 9 am-7 pm Mon-Thu and Saturday, and we're closed on Sunday. No appointment needed for a diagnosis." },
      { q: "How do I know the repair price won't go up?", a: "It's fixed in writing on WhatsApp after the free diagnosis and before any work starts. If anything extra turns up once the Mac is open, it needs your approval first." },
      { q: "Is repairing the logic board cheaper than replacing it?", a: "Almost always. Most board failures are a handful of dead components, and we repair at component level. The diagnosis is free either way, so you see the number before you decide." },
      { q: "What if my Mac is not worth repairing?", a: "We'll tell you honestly after the free diagnosis. There's no fee if we can't fix it, so an honest 'not worth it' costs nothing and you keep your options open." },
      { q: "Is there an onsite Mac repair service in Muhaisnah?", a: "There is, but it's paid and depends on a technician being free. WhatsApp the model and fault first and we'll quote the visit before anything is booked. For most jobs, a courier to the workshop is quicker." },
      { q: "Can you recover files from a Mac that will not start?", a: "Usually. It's most often a board fault with the storage intact. We attempt recovery before any repair and confirm what came off, so you know where your files stand before you pay for anything." },
      { q: "How long will my MacBook repair take?", a: "Screen, battery, keyboard and trackpad repairs can often be finished the same day when the part is in stock. Board-level work takes longer. The expected time comes with your written quote." },
    ],
    reviewIndexes: [4, 10, 15, 19, 22, 23],
  },
  {
    slug: "al-warqa",
    area: "Al Warqa",
    short: "Al Warqa",
    driveTime: "35 minutes",
    metroNote: "Al Warqa is not on the metro network, so residents usually drive in to Concord Tower, Dubai Media City, or hand the Mac to a same-day courier they book from home. If you ride the Red Line, get off at Al Fardan Exchange and walk about 15 minutes.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Al Warqa 1-4", "Al Warqa City Mall", "Mizhar border", "Mirdif border", "Al Warqa Park", "Tripoli Street"],
    landmarkLine: "35 minutes from Al Warqa City Mall, Al Warqa Park and the Mirdif border.",
    intro:
      "South of Mirdif, Al Warqa is a growing district of villas and newer apartment buildings, popular with families and short on specialist Mac repair. Our workshop is about 35 minutes away at Concord Tower, Dubai Media City, slightly less from the Mirdif border side. For MacBook repair you can drive over and walk in without booking, send the Mac with a same-day courier app you book from home, or ask for a paid onsite visit when one of our technicians is free. Every Mac gets a free diagnosis, and the price is agreed in writing on WhatsApp before anything is opened.",
    whyChoose:
      "Family homes in Al Warqa tend to have several Macs, and often one old machine holding years of photos nobody backed up. Bring them in together, or send them in one courier booking, and each gets a free diagnosis with one combined written quote. If a Mac won't start, we try to recover the data before any repair. Board faults are fixed at component level rather than by replacing the board, and when a machine isn't worth the money we tell you plainly. There's no fee if we can't fix it, and repairs carry a written warranty of up to 12 months.",
    pickupNote:
      "When you book a same-day courier app, write your sub-area, street and villa in the booking notes, for example 'Al Warqa 3, Street 12, Villa 7', and be at the gate when the driver arrives. Then WhatsApp 055 741 3706 the tracking link, the model and a photo of the fault. Driving in instead takes about 35 minutes, with parking at Concord Tower. A paid onsite visit is possible when a technician is free.",
    travel: [
      { from: "Al Warqa 1",         drive: "34 min" },
      { from: "Al Warqa 2",         drive: "35 min" },
      { from: "Al Warqa 3",         drive: "35 min" },
      { from: "Al Warqa 4",         drive: "36 min" },
      { from: "Al Warqa City Mall", drive: "35 min" },
      { from: "Mirdif border",      drive: "33 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "Is there Mac repair near Al Warqa, or do I have to go to Media City?", a: "Our workshop is in Concord Tower, Dubai Media City, about 35 minutes from Al Warqa. If you can't drive over, book a same-day courier app and WhatsApp us the tracking link, or ask about a paid onsite visit." },
      { q: "We have several Macs at home. Can you take them together?", a: "Yes. Bring them in on one trip or send them in one courier booking. Each machine is diagnosed free, and you get a single written quote covering all of them." },
      { q: "Our old MacBook has family photos and will not start. Can you save them?", a: "Often, yes. A Mac that won't start usually has a board fault with the storage intact. We attempt recovery first, before any repair, and tell you exactly what came off." },
      { q: "What should I send on WhatsApp before I courier my Mac?", a: "The model (it's printed on the bottom case or shown in About This Mac), a photo or short video of the fault, and the courier's tracking link. That lets us check parts before the Mac arrives." },
      { q: "Can a technician come to my villa in Al Warqa?", a: "Possibly. Onsite repair is paid and only happens when a technician is free. Tell us the model and fault on WhatsApp and we'll quote the charge before you book." },
      { q: "Can you fix our family iMac too?", a: "Yes. We repair iMac, Mac mini, Mac Studio and Mac Pro alongside MacBooks. An iMac is safest brought in by car. If it has to go by courier, pad the screen well and message us first." },
      { q: "Does a cracked MacBook screen take a full day to replace?", a: "Often not. Screen replacements can usually be finished the same day when the part is in stock. Send the model on WhatsApp first so we can check. Screens carry a 90-day warranty." },
      { q: "Are you open on Sunday?", a: "No, Sunday is closed. We're open Mon-Thu and Sat 9 am-7 pm, and Friday 9 am-12 pm and 2 pm-7 pm. If you're using a courier, time it to reach us within those hours." },
    ],
    reviewIndexes: [5, 9, 12, 16, 20, 24],
  },
  {
    slug: "mudon",
    area: "Mudon",
    short: "Mudon",
    driveTime: "28 minutes",
    metroNote: "Mudon is not on the metro network, so residents either drive to Concord Tower, Dubai Media City, or book a same-day courier to bring the Mac to us. The closest stop to the workshop is Palm Jumeirah on the Dubai Tram, a 3-minute walk.",
    pickupWindow: "", // legacy, not rendered (free pickup ended 2026-10-15)
    landmarks: ["Mudon Community Centre", "Arabella", "Rahat", "Naseem", "Al Salam", "Arabian Ranches 2 border"],
    landmarkLine: "28 minutes from Mudon Community Centre, Arabella and Rahat.",
    intro:
      "Next to Arabian Ranches 2 in Dubailand, Mudon is a young, green community of family villas and townhouses, about 28 minutes from our workshop at Concord Tower, Dubai Media City, and a long way from any specialist Mac repair. In clusters like Arabella, Rahat and Naseem, most homes run more than one Apple device. For MacBook repair you can drive in and come up to the 10th floor without an appointment, send the Mac with a same-day courier you book yourself, or pay for an onsite visit when a technician is free. Diagnosis is free and quotes are fixed in writing on WhatsApp.",
    whyChoose:
      "Out in Dubailand, a trip to a mall counter and back can eat an afternoon, and you often make it twice. With us you can skip the drive: book a courier from your door, and the written quote arrives on WhatsApp after the free diagnosis. Mudon homes usually have several Apple devices, and you can bring or send them together for one combined quote. We repair the whole Mac line at component level, so a board fault is often far cheaper to fix than the replacement another shop would quote. If a machine isn't worth fixing, we say so. No fix, no fee.",
    pickupNote:
      "Community security will want to know a driver is coming, so tell the gate when you book a same-day courier app such as Careem Box, and put your cluster and villa in the booking, for example 'Arabella 2, Villa 31'. WhatsApp 055 741 3706 the tracking link, the model and a photo of the fault. Driving in takes about 28 minutes. Paid onsite visits happen when a technician is free.",
    travel: [
      { from: "Arabella",                 drive: "28 min" },
      { from: "Rahat",                    drive: "28 min" },
      { from: "Naseem",                   drive: "29 min" },
      { from: "Al Salam",                 drive: "29 min" },
      { from: "Mudon Community Centre",   drive: "28 min" },
      { from: "Arabian Ranches 2 border", drive: "27 min" },
    ],
    topServices: COMMON_SERVICES,
    faqs: [
      { q: "How long does it take to drive from Mudon to Dubai Media City?", a: "About 28 minutes, a little less from the Arabian Ranches 2 side. You can walk in without an appointment for a free diagnosis, and there's parking at Concord Tower." },
      { q: "Will a courier driver get through the Mudon gate?", a: "That's handled by the booking you make. Tell community security a courier is coming and put your cluster and villa in the app notes. Once the driver has the Mac, WhatsApp us the tracking link." },
      { q: "We have several Macs. Can you look at them together?", a: "Yes. Bring them in on one trip or send them in one courier booking. Every machine gets a free diagnosis, and you get one written quote so you can choose which to repair." },
      { q: "Can someone else drop the Mac off at your workshop for me?", a: "Yes, anyone can bring it in. Message us the owner's name and the fault on WhatsApp first, so the written quote reaches the right person and nothing gets started without your approval." },
      { q: "Juice went into my kid's MacBook keyboard. Is it ruined?", a: "Not necessarily. Switch it off straight away and don't charge it. Corrosion spreads while the board stays wet, so get it to us quickly by car or courier. The diagnosis is free and we quote once we see the damage." },
      { q: "Can you repair a Mac Studio or iMac from a home office?", a: "Yes. We repair iMac, Mac mini, Mac Studio and Mac Pro as well as MacBooks. Desktops are safer moved by car; if you courier one, pack it with padding around the screen and ports." },
      { q: "Is onsite Mac repair available in Mudon?", a: "It can be, when a technician is free. It's a paid service, and the charge is quoted on WhatsApp before you book. Send the model and a photo of the fault so we know what to bring." },
      { q: "What warranty do I get on a MacBook repair?", a: "A written warranty of up to 12 months on hardware repairs. Screens carry 90 days and batteries 3 months. The terms for your specific job are set out with the written quote." },
    ],
    reviewIndexes: [0, 7, 11, 18, 21, 25],
  },
];

// Overlay admin edits (prose + FAQs) per slug; structural fields stay from BASE_AREAS.
export const AREAS: AreaConfig[] = BASE_AREAS.map((a) => {
  const o = AREA_OVERRIDES[a.slug];
  return o ? ({ ...a, ...o } as AreaConfig) : a;
});

// Title + meta description for an area page. Shared by dynamic-meta.ts (route metadata) and
// AreaPageTemplate (schema names) so the two never drift. Each list is ordered longest-first and
// the first variant inside the SERP limits wins, so long names like "Dubai Production City
// (IMPZ)" still get a title <= 60 chars and a description of 140-155 chars.
export function areaMetaTitle(a: Pick<AreaConfig, "slug" | "area">): string {
  if (a.slug === "media-city") return "MacBook Repair Dubai Media City - In Concord Tower";
  const options = [
    `MacBook Repair ${a.area} - Walk In or Courier`,
    `MacBook Repair ${a.area} - Walk-In Workshop`,
    `MacBook Repair ${a.area} - Walk In`,
  ];
  return options.find((t) => t.length <= 60) ?? options[options.length - 1];
}

export function areaMetaDescription(a: Pick<AreaConfig, "slug" | "area" | "driveTime">): string {
  if (a.slug === "media-city") {
    return "MacBook repair in Dubai Media City: our workshop is in Concord Tower, so walk in with no appointment for a free diagnosis. WhatsApp us a photo for a quote.";
  }
  const d = a.driveTime;
  const options = [
    `MacBook repair for ${a.area}: walk in to Concord Tower, Dubai Media City (${d} away) or send it by courier. Free diagnosis. WhatsApp us a photo for a quote.`,
    `MacBook repair for ${a.area}: walk in to Concord Tower, Dubai Media City (${d} away) or send it by courier. Free diagnosis. WhatsApp a photo for a quote.`,
    `MacBook repair for ${a.area}: walk in to Concord Tower, Media City (${d} away) or send it by courier. Free diagnosis. WhatsApp a photo for a quote.`,
    `MacBook repair for ${a.area}: walk in to our Media City workshop (${d} away) or send it by courier. Free diagnosis. WhatsApp a photo for a quote.`,
    `MacBook repair for ${a.area}: walk in to our Media City workshop or send it by courier. Free diagnosis, no fix no fee. WhatsApp a photo for a quote.`,
    `MacBook repair for ${a.area}: walk in to Concord Tower (${d} away) or send it by courier. Free diagnosis. WhatsApp a photo for a quote.`,
    `MacBook repair for ${a.area}: walk in to Concord Tower, ${d} away, or book a courier. Free diagnosis. WhatsApp a photo for a quote.`,
    `MacBook repair for ${a.area}: walk in to Concord Tower or send it by courier. Free diagnosis. WhatsApp a photo for a quote.`,
  ];
  // Measured as served: page-meta.ts counts ' as &#x27; (Za'abeel), and trims anything over 155.
  const served = (t: string) => t.replace(/&/g, "&amp;").replace(/'/g, "&#x27;").replace(/"/g, "&quot;").replace(/[<>]/g, "&lt;").length;
  return options.find((t) => t.length >= 140 && served(t) <= 155) ?? options[options.length - 1];
}
