// Inter-emirate city landing-page configs (other emirates, served by FREE COURIER
// collection from the single Dubai Media City workshop). Distinct from areas.ts
// (Dubai neighbourhoods, same-day pickup). HONESTY RULE: we have ONE workshop in
// Dubai and NO branch in any of these cities, every page says so. Content is
// generated/verified for zero fabrication and no implied local presence.

// Editable prose + FAQs are overlaid per-slug from /admin/locations (cities-overrides.generated.ts);
// structural fields stay here. CITIES = BASE_CITIES merged with the overrides.
import { CITY_OVERRIDES } from "./cities-overrides.generated";

export type CityFAQ = { q: string; a: string };
export type CityDistrict = { name: string; note: string };

export type CityConfig = {
  slug: string;            // URL slug, e.g. "abu-dhabi" -> /macbook-repair-abu-dhabi
  city: string;            // "Abu Dhabi"
  emirate: string;         // "Abu Dhabi" (the real emirate. NOT "Dubai")
  short: string;           // short inline name
  distance: string;        // honest drive distance from Dubai Media City, e.g. "about 1.5 hours"
  collectionModel: "pickup" | "courier"; // pickup = near (same-day realistic); courier = far (1-2 days)
  collectionWindow: string; // honest collection phrasing
  turnaround: string;       // honest repair turnaround
  landmarks: string[];      // real public landmarks (reference points only)
  landmarkLine: string;     // one honest sentence for the hero (no false proximity to our workshop)
  districts: CityDistrict[]; // real districts we collect from
  intro: string;            // 80-120 words, honest
  whyChoose: string;        // 80-120 words, honest
  collectionNote: string;   // 60-90 words on how collection works for this city
  faqs: CityFAQ[];          // 8 honest FAQs (incl. "do you have a branch here? No")
  topServices?: { label: string; price: number; href: string }[]; // defaults to COMMON_SERVICES
  reviewIndexes: number[];  // indexes into REVIEWS (real reviews; shown as "across the UAE")
};

// Shared real starting prices (mirrors areas.ts COMMON_SERVICES).
export const COMMON_SERVICES = [
  { label: "MacBook screen repair",        price: 780, href: "/macbook-screen-repair-dubai" },
  { label: "MacBook battery replacement",  price: 590, href: "/macbook-battery-replacement-dubai" },
  { label: "MacBook keyboard replacement", price: 460, href: "/macbook-keyboard-repair-dubai" },
  { label: "MacBook water damage repair",  price: 910, href: "/macbook-water-damage-repair-dubai" },
  { label: "MacBook logic board repair",   price: 1040, href: "/macbook-logic-board-repair-dubai" },
  { label: "MacBook trackpad repair",      price: 460, href: "/macbook-trackpad-repair-dubai" },
];

// Populated from the verified content workflow (see below). Empty until assembled.
const BASE_CITIES: CityConfig[] = [
  {
    "slug": "sharjah",
    "city": "Sharjah",
    "emirate": "Sharjah",
    "short": "Free same-day courier collection from anywhere in Sharjah to our Dubai workshop. We collect your MacBook, repair it, and return it.",
    "distance": "about 35-40 minutes (roughly 45 km), though the Dubai-Sharjah road can be slow at peak hours",
    "collectionModel": "pickup",
    "collectionWindow": "Same-day courier collection",
    "turnaround": "often same day for common repairs; 1-2 days if parts are needed",
    "landmarks": [
      "Al Noor Mosque on Buhaira Corniche",
      "Blue Souq (Sharjah Central Souq)",
      "Al Qasba and the Eye of the Emirates wheel",
      "King Faisal Mosque",
      "Sharjah Museum of Islamic Civilization",
      "Al Majaz Waterfront"
    ],
    "landmarkLine": "Whether you are near Al Noor Mosque on the Buhaira Corniche, the Blue Souq, or out by Al Qasba and the Eye of the Emirates, our courier comes to your door across Sharjah.",
    "districts": [
      {
        "name": "Al Majaz",
        "note": "Courier collects from Al Majaz 1, 2 and 3, including the Waterfront and Buhaira Corniche area."
      },
      {
        "name": "Al Nahda",
        "note": "Quick collection here given how close Al Nahda sits to the Dubai border crossings."
      },
      {
        "name": "Al Khan",
        "note": "We pick up from Al Khan apartments and the lagoon side at no charge."
      },
      {
        "name": "Al Taawun",
        "note": "Door collection along the Al Taawun corniche and tower blocks."
      },
      {
        "name": "Muwaileh",
        "note": "Collection from Muwaileh and the University City side of Sharjah."
      },
      {
        "name": "Al Qasimia",
        "note": "We collect from Al Qasimia homes and offices on request."
      },
      {
        "name": "Al Mamzar",
        "note": "Pickup from the Al Mamzar side near the Sharjah-Dubai boundary."
      },
      {
        "name": "Al Layyah",
        "note": "Courier collection from Al Layyah and the corniche area."
      }
    ],
    "intro": "Sharjah sits right on Dubai's border, and that is exactly why our service works so well here. To be clear up front: we are a single workshop in Concord Tower, Dubai Media City, with no Sharjah branch. Instead, we offer free courier collection: a courier picks up your MacBook from your Sharjah address, brings it to our Dubai bench, and we return it once it is fixed. Sharjah is only about 35-40 minutes away, so collection is usually same-day. The same technicians who handle every Dubai repair work on your machine, whether it is a screen, battery, keyboard, liquid damage, or a board-level fault. You deal with one workshop from start to finish.",
    "whyChoose": "Sharjah has plenty of phone-and-laptop shops, but board-level MacBook work is a specialist job. We do nothing but Apple repair, with the microsoldering gear, genuine-grade parts, and diagnostic tools that a general shop rarely keeps. Because Sharjah borders Dubai, using our workshop by courier costs you no travel and usually no extra time: the courier handles the round trip, free, while you stay home or at work. You get a real diagnosis and a clear price before any work starts, the repair is done on one bench by the same people every time, and your machine comes back to your door. No drop-off, no parking, no waiting in a queue.",
    "collectionNote": "Free collection from Sharjah works like this: you message us with the fault and your address, and we book a courier to come to your door, usually the same day. The courier collects the MacBook in protective packaging and brings it straight to our Dubai Media City workshop, about 35-40 minutes away. We diagnose it and send you a fixed price before doing any work. Once you approve and the repair is done, the same courier returns it to your Sharjah address. Collection and return are both free. You never travel and never visit a shop.",
    "faqs": [
      {
        "q": "Do you have a shop or branch in Sharjah?",
        "a": "No. We are Dubai-based, with one workshop in Concord Tower, Dubai Media City, and no branch or staff in Sharjah. We serve Sharjah customers entirely by free courier: we collect your MacBook from your address, repair it in Dubai, and return it to you."
      },
      {
        "q": "How long does a Sharjah repair take?",
        "a": "Sharjah is only about 35-40 minutes from our workshop, so collection is usually same-day. Common repairs such as screens, batteries and keyboards are often finished the same day. If a part has to be ordered, it is typically one to two days. We tell you the timeline before we start."
      },
      {
        "q": "Is the collection really free?",
        "a": "Yes. Courier collection from your Sharjah address and return delivery are both free. You only pay for the repair itself, at the price we quote you before any work begins. There is no call-out or transport charge."
      },
      {
        "q": "Is it safe to send my MacBook by courier?",
        "a": "Yes. The courier collects it in protective packaging, it travels a short distance to our Dubai workshop, and the same courier returns it to you. We log the device on arrival and keep you updated, so your machine is tracked from your door to our bench and back."
      },
      {
        "q": "What MacBook problems do you fix?",
        "a": "Cracked or faulty screens, weak batteries, keyboard and trackpad faults, charging and port issues, liquid damage, MacBooks that will not power on, and board-level logic board repairs. We handle MacBook Air and MacBook Pro across the common model years."
      },
      {
        "q": "How do I get a price before committing?",
        "a": "Send us the model and a description of the fault. We give an estimate up front, and once the courier brings the MacBook in we confirm the exact price after diagnosis. Nothing is repaired until you approve that price."
      },
      {
        "q": "Can you collect from anywhere in Sharjah?",
        "a": "Yes. We collect across Sharjah city, including Al Majaz, Al Nahda, Al Khan, Al Taawun, Muwaileh, Al Qasimia, Al Mamzar and Al Layyah. Just give us your address when you book."
      },
      {
        "q": "Do you use genuine parts?",
        "a": "We use genuine-grade and high-quality replacement parts suited to your model, and we tell you what is being fitted before the repair. For board-level faults we repair the original logic board where possible rather than swapping parts unnecessarily."
      },
      {
        "q": "What if my MacBook cannot be repaired?",
        "a": "If a repair is not worth it or not possible, we tell you honestly and return your MacBook free of charge. You are not committed to anything until you approve a quote after diagnosis."
      }
    ],
    "reviewIndexes": [
      0,
      4,
      8,
      12,
      16,
      20
    ]
  },
  {
    "slug": "ajman",
    "city": "Ajman",
    "emirate": "Ajman",
    "short": "Free courier collection from anywhere in Ajman to our Dubai Media City workshop. Most MacBook repairs are done the same day. No fix, no charge.",
    "distance": "about 50 minutes by road (around 46 km), longer in peak traffic",
    "collectionModel": "pickup",
    "collectionWindow": "Same-day free courier collection",
    "turnaround": "often same day, most jobs back the same evening or next morning",
    "landmarks": [
      "Ajman Corniche",
      "Sheikh Zayed Mosque Ajman",
      "Al Zorah Nature Reserve",
      "Ajman Museum (Ajman Fort)",
      "Ajman City Centre",
      "Etisalat Tower Ajman"
    ],
    "landmarkLine": "Whether you're near the Ajman Corniche, out by Al Zorah Nature Reserve, or closer to Ajman City Centre, the courier comes to your door, none of these are anywhere near our bench, and we won't pretend otherwise.",
    "districts": [
      {
        "name": "Al Nuaimiya",
        "note": "Courier collects from your building or office, usually within the same-day window."
      },
      {
        "name": "Al Rashidiya",
        "note": "Door pickup near the Corniche end; we confirm a time before the driver sets off."
      },
      {
        "name": "Al Rawda",
        "note": "Villa collection is straightforward here, driver meets you at the gate."
      },
      {
        "name": "Al Jurf",
        "note": "We collect from homes and the industrial side; just have the MacBook ready."
      },
      {
        "name": "Al Mowaihat",
        "note": "Pickup arranged by WhatsApp, driver heads out once you confirm."
      },
      {
        "name": "Al Zahra",
        "note": "Quiet residential streets near the Corniche, door collection, no need to travel."
      },
      {
        "name": "Al Yasmeen",
        "note": "Near the Sharjah border; courier collects from the villa communities here."
      },
      {
        "name": "Mushairif",
        "note": "Home or office pickup, same free courier as the rest of Ajman."
      }
    ],
    "intro": "We don't have a shop in Ajman. MacBook Repair Dubai is one workshop, in Concord Tower, Dubai Media City, and we've been on Apple hardware there since 2004. What we run for Ajman is free courier collection: a driver picks the MacBook up from your home or office, brings it the 46-odd kilometres to our bench, and the same courier returns it once it's fixed. Ajman sits close enough to Dubai, about 50 minutes by road, that most jobs go back the same day. Lead technician Shafiq Ahmed, 21 years in, signs off every repair before it leaves. No fix, no charge.",
    "whyChoose": "A general laptop shop will send your MacBook on to someone like us anyway, then add their margin. Going direct to a Dubai Apple specialist cuts that out. We carry A-grade panels, genuine-capacity batteries and the board-level kit for the common faults, so a job that a Sharjah counter quotes as a week often goes back to Ajman the same evening. Everything's done in front of one technician. Shafiq, 21 years on Apple boards, not shuffled between hands. You get the warranty of up to 12 months (3 months on batteries), no-fix-no-charge, and a workshop with 215+ Google reviews at 5.0★ standing behind it. The courier both ways is free.",
    "collectionNote": "Message us on WhatsApp at 055 741 3706 with the model and what's wrong, and we'll give you a price range before anything moves. Once you're happy, we book a courier to your Ajman address, home, villa or office, anywhere from Al Nuaimiya to Al Yasmeen. The driver collects the MacBook, brings it to Concord Tower in Dubai Media City, and Shafiq diagnoses it on the bench. We confirm the final price before any work starts. Most repairs are done the same day and the same courier returns it to you. Collection and return are both free across Ajman. No fix, no charge.",
    "faqs": [
      {
        "q": "Do you have a shop or branch in Ajman?",
        "a": "No. We're a Dubai workshop, one bench, in Concord Tower, Dubai Media City. We don't have a branch, a counter or staff anywhere in Ajman. What we do offer is free courier collection: a driver picks your MacBook up from your Ajman address, it's repaired at our Dubai bench, and the same courier brings it back. You never need to drive to Dubai."
      },
      {
        "q": "How long does a MacBook repair from Ajman take?",
        "a": "Often the same day. Ajman is about 50 minutes from our Media City workshop, so a morning collection usually means the MacBook is back with you that evening or the next morning. Screen and battery jobs on the common models are quick once it's on the bench. If a part has to be ordered we'll tell you up front and give you a realistic date."
      },
      {
        "q": "How much does the courier collection cost?",
        "a": "Nothing. Collection from your Ajman address and return once it's fixed are both free, there's no call-out fee and no charge if you decide not to go ahead. You only pay for the repair itself, and we confirm that price after Shafiq has looked at the MacBook on the bench. No fix, no charge means a dead-end diagnosis costs you zero."
      },
      {
        "q": "Is courier collection from Ajman safe for my MacBook?",
        "a": "Yes. We've run this for Ajman and the northern emirates for years. The driver collects it in person from your door, it travels straight to Concord Tower, and it's logged in against your name when it arrives. We'd suggest backing up first if the machine still powers on, and we never ask for your login password unless a repair genuinely needs it to test."
      },
      {
        "q": "What MacBook problems can you actually fix this way?",
        "a": "Most of them. Cracked and dead screens, batteries that swell or drain, charging-port and MagSafe faults, liquid damage, keyboards, no-power and no-boot boards, storage and data-recovery jobs. We do board-level work in-house, so faults a general shop writes off as a logic-board swap often come back far cheaper. Send the model and serial on WhatsApp and we'll tell you what's likely involved."
      },
      {
        "q": "Will I lose my data when you repair it?",
        "a": "For most repairs, no, a screen or battery swap doesn't touch your storage. Back up first if you can, just as a habit. If the fault is the drive itself or a dead board, recovery becomes its own job and we'll talk you through the odds and the cost before we attempt anything. We don't wipe machines without your say-so."
      },
      {
        "q": "Do you use genuine Apple parts?",
        "a": "We fit A-grade panels from the same factory lines that supply Apple, and genuine-capacity battery cells with the cycle count reset to zero. For some boards we use original pulls. Genuine-service-part pricing is higher and slower; we'll quote both where there's a real choice and let you decide. Whatever goes in carries our warranty of up to 12 months, 3 months on batteries."
      },
      {
        "q": "Why send it to Dubai instead of a shop in Ajman or Sharjah?",
        "a": "Because a lot of local laptop counters don't repair MacBooks themselves, they forward them to a Dubai specialist and mark it up. Coming to us direct skips that. You get a 21-year Apple technician working on it on a properly stocked bench, a clear price before work starts, and the courier paid for both ways. The 50-minute distance is on us, not on you."
      },
      {
        "q": "What if you can't fix it?",
        "a": "Then you pay nothing, and we courier it straight back to Ajman for free. No-fix-no-charge is exactly that, a flat diagnosis that goes nowhere costs you zero. If a repair is possible but not worth it on an older MacBook, we'll say so plainly rather than take the job. We'd rather you trust the next quote than win this one."
      },
      {
        "q": "How do I book a collection from Ajman?",
        "a": "WhatsApp 055 741 3706 with your MacBook model and a line on what's wrong, a photo helps. We'll come back with a price range, then book a courier to your address, whether that's Al Rawda, Al Nuaimiya, Al Jurf or anywhere else in Ajman. Confirm a time that suits you and the driver does the rest. Diagnosis on arrival, your approval before any work."
      }
    ],
    "reviewIndexes": [
      3,
      7,
      11,
      15,
      19,
      23
    ]
  },
  {
    "slug": "umm-al-quwain",
    "city": "Umm Al Quwain",
    "emirate": "Umm Al Quwain",
    "short": "Free courier collection of your MacBook from anywhere in Umm Al Quwain to our Dubai workshop, repaired and returned to your door.",
    "distance": "about 1 hour (around 84 km) by car from our Dubai Media City workshop",
    "collectionModel": "courier",
    "collectionWindow": "Next-day free courier collection",
    "turnaround": "typically 1-2 days door-to-door by courier",
    "landmarks": [
      "Umm Al Quwain Fort and National Museum",
      "Dreamland Aqua Park",
      "UAQ Marine Club",
      "Al Sinniyah Island",
      "Khor Al Beidah mangroves",
      "Falaj Al Mualla Fort"
    ],
    "landmarkLine": "Umm Al Quwain is known for the 250-year-old Umm Al Quwain Fort and National Museum, the sprawling Dreamland Aqua Park, and the birdlife-rich mangroves around Al Sinniyah Island and Khor Al Beidah.",
    "districts": [
      {
        "name": "Al Salamah",
        "note": "Courier collects from your villa or apartment address here, no need to travel."
      },
      {
        "name": "Al Ramlah",
        "note": "Free door-to-door collection arranged by WhatsApp the day before."
      },
      {
        "name": "Al Raudah",
        "note": "We courier the MacBook from your Al Raudah address to Dubai and back."
      },
      {
        "name": "Al Maidan",
        "note": "Collection from home or office; you stay put while we handle the trip to Dubai."
      },
      {
        "name": "Al Rass",
        "note": "Old-town addresses included; the courier meets you at a time you choose."
      },
      {
        "name": "Umm Al Quwain Marina",
        "note": "Free pickup from Marina residences and the waterfront community."
      },
      {
        "name": "Al Haditha",
        "note": "Collection from Al Haditha homes and shops, returned once repaired."
      },
      {
        "name": "Falaj Al Mualla",
        "note": "Further inland; collection still free, allow the full 1-2 day window."
      }
    ],
    "intro": "We are MacBook Repair Dubai, a single specialist workshop in Concord Tower, Dubai Media City. We do not have a shop in Umm Al Quwain, and we will not pretend otherwise. Instead we run a free courier collection service: a courier picks up your MacBook from your Umm Al Quwain address, brings it to our Dubai bench where the actual repair happens, and a courier returns it to you once it is done. Umm Al Quwain sits about an hour up the coast from Media City, so collection is usually next-day and the full round trip typically takes one to two days. You get a written quote before any work starts, and you never leave home.",
    "whyChoose": "Umm Al Quwain does not have a dedicated Apple-level logic-board and screen specialist, so most people end up driving to Dubai or Sharjah anyway. Our free courier model removes that drive entirely: the device comes to a Dubai workshop that does board-level work, genuine-grade screen and battery replacements, and water-damage recovery in-house, rather than being shipped off to an unnamed warehouse. You deal with one team from collection to return, get a fixed written quote on WhatsApp before we open anything, and the repair is covered by a warranty of up to 12 months. The honest trade-off versus a same-city shop is time: because of the distance, plan on one to two days rather than the same afternoon.",
    "collectionNote": "Collection is genuinely free and arranged over WhatsApp on 055 741 3706. Tell us your Umm Al Quwain address and MacBook model, and we book a courier, normally for the next day, since Umm Al Quwain is about an hour from our Dubai workshop and not on a daily local loop. The courier meets you at your home, office or building reception at an agreed time, takes the MacBook to Dubai, and brings it back to the same address once the repair is finished. There is no collection or return fee, and the diagnosis is free; you only pay for the repair you approve in writing beforehand.",
    "faqs": [
      {
        "q": "Do you have a branch or shop in Umm Al Quwain?",
        "a": "No. We are a Dubai-based workshop in Concord Tower, Dubai Media City, and that is the only location where repairs happen. For Umm Al Quwain we offer free courier collection: we pick up your MacBook from your address, repair it in Dubai, and courier it back. There is no Umm Al Quwain branch or local technician."
      },
      {
        "q": "How long does the whole repair take with courier collection?",
        "a": "Typically one to two days door-to-door. Because Umm Al Quwain is about an hour from our Dubai workshop, collection is usually next-day, then the repair and return follow. Simple jobs can be quicker; parts we need to order can take longer, and we will tell you the realistic timeline before you commit."
      },
      {
        "q": "How much does collection and return cost?",
        "a": "Nothing. Both the courier collection from Umm Al Quwain and the return are free, and the diagnosis is free too. You only pay for the repair itself, at a fixed price we confirm in writing on WhatsApp before any work begins."
      },
      {
        "q": "Is it safe to hand my MacBook to a courier in UAQ?",
        "a": "Yes. The device is handed directly to a courier, logged on collection, and tracked to our Dubai workshop. We confirm receipt by WhatsApp, send you the diagnosis and quote, and only proceed once you approve. The same process applies on the return trip. We recommend backing up your data first, as you would before any repair."
      },
      {
        "q": "Which MacBook repairs can you handle for Umm Al Quwain customers?",
        "a": "Cracked and faulty screens, battery replacement and swelling, keyboard and trackpad faults, liquid and water damage, logic-board and board-level repairs, charging and port issues, storage upgrades and data recovery, and macOS and software problems. We work on every MacBook generation, from older Intel models through to the latest Apple Silicon."
      },
      {
        "q": "How do I book a collection from Umm Al Quwain?",
        "a": "Message us on WhatsApp at 055 741 3706 with your Umm Al Quwain address and your MacBook model and the issue. We confirm a courier slot, normally for the next day, and a free written quote follows once the device reaches our Dubai bench."
      },
      {
        "q": "Will I get a quote before you start the repair?",
        "a": "Always. Once the MacBook arrives in Dubai we run a free diagnosis and send you a fixed written quote on WhatsApp. Nothing is opened up or charged until you approve it. If you decide not to proceed, we courier the device straight back to Umm Al Quwain, free."
      },
      {
        "q": "Do you offer a warranty?",
        "a": "Yes, a warranty of up to 12 months on the parts and labour for the repair we carry out. If the same issue recurs within that period, we arrange a free courier collection and put it right at no extra charge."
      },
      {
        "q": "Can you collect from areas like Falaj Al Mualla or Umm Al Thuoob, not just the city centre?",
        "a": "Yes. We collect from across the emirate, including Al Salamah, Al Ramlah, Al Raudah, Umm Al Quwain Marina, and inland areas such as Falaj Al Mualla and Umm Al Thuoob. For the more distant inland addresses, plan on the full one-to-two-day window."
      },
      {
        "q": "Can you collect from my office or have someone else hand over the MacBook?",
        "a": "Yes. The courier can collect from a home, office or building reception, and you can authorise a family member, colleague or driver to hand it over. Just give us their name on WhatsApp and we confirm the handover by message."
      }
    ],
    "reviewIndexes": [
      6,
      10,
      14,
      18,
      22,
      26
    ]
  },
  {
    "slug": "abu-dhabi",
    "city": "Abu Dhabi",
    "emirate": "Abu Dhabi",
    "short": "Free courier collection from anywhere in Abu Dhabi to our Dubai workshop. We pick up your MacBook, repair it, and return it, usually within 1-2 days.",
    "distance": "about 1.5 hours (roughly 130 km via the E11 Sheikh Zayed Road)",
    "collectionModel": "courier",
    "collectionWindow": "Next-day free courier collection",
    "turnaround": "typically 1-2 days door to door by courier",
    "landmarks": [
      "Sheikh Zayed Grand Mosque",
      "Louvre Abu Dhabi",
      "Abu Dhabi Corniche",
      "Emirates Palace",
      "Qasr Al Watan",
      "Etihad Towers"
    ],
    "landmarkLine": "Whether you are near the Sheikh Zayed Grand Mosque, working along the Corniche, or out on Yas Island, the courier comes to your door, so the distance from these landmarks to our Dubai workshop makes no difference to you.",
    "districts": [
      {
        "name": "Al Reem Island",
        "note": "Courier collects from your tower reception or apartment; common pickup point for residents on the island."
      },
      {
        "name": "Khalifa City",
        "note": "Villa and townhouse pickups handled at your door; popular area for families needing on-site collection."
      },
      {
        "name": "Al Bateen",
        "note": "Door collection from villas and offices; we coordinate a time that suits your schedule."
      },
      {
        "name": "Mohammed Bin Zayed City (MBZ)",
        "note": "Free courier pickup from home or workplace across the MBZ residential blocks."
      },
      {
        "name": "Al Khalidiyah",
        "note": "Collection from apartments and offices in this central district at no charge."
      },
      {
        "name": "Yas Island",
        "note": "Pickup from residences and hotels; courier handles the full island route."
      },
      {
        "name": "Saadiyat Island",
        "note": "Door-to-door collection from villas and beachside residences on the island."
      },
      {
        "name": "Mussafah",
        "note": "Free pickup from residential and business addresses across the Mussafah area."
      }
    ],
    "intro": "Plenty of Abu Dhabi MacBook owners end up sending their machine to Dubai anyway - specialist board-level repair is concentrated there. Our workshop is in Concord Tower, Dubai Media City; we have no Abu Dhabi branch and will never pretend to. What we do offer capital-based customers is free courier collection: a courier picks up your MacBook from your home or office anywhere in the capital, brings it to our Dubai bench where the actual repair happens, and a courier returns it to you once it is done. The drive between the two cities is about 1.5 hours, so this is usually a 1-2 day round trip. You get the same technicians and the same diagnosis you would if you walked in, without making the journey yourself.",
    "whyChoose": "A dedicated MacBook bench beats a general phone-and-laptop shop for one reason: focus. We work on MacBooks all day, so we keep the right board-level tools, genuine-grade parts, and the experience to tell a failing flexgate cable from a failing display. Because everything is done at one Dubai workshop, there is no chain of middlemen and no guesswork about who touched your machine. For Abu Dhabi customers the courier model removes the only real downside of using a Dubai specialist: the drive. You get a proper diagnosis, a clear quote before any work starts, and honest advice on whether a repair is worth it, all without leaving the capital.",
    "collectionNote": "Collection is genuinely free and works the same across Abu Dhabi. You message us with your address and the problem, we book a courier, and they collect the MacBook from your home or office, usually the next day. It travels the roughly 130 km to our Dubai Media City workshop, where we diagnose it and send you a quote before any work begins. Once you approve and the repair is done, a courier brings it back to your Abu Dhabi address. You never pay for the courier in either direction, and you only pay for the repair itself after you have approved the price.",
    "faqs": [
      {
        "q": "Do you have a branch or shop in Abu Dhabi?",
        "a": "No. We are a Dubai-based workshop in Concord Tower, Dubai Media City, and that is the only location where repairs happen. We do not have a branch, shop, or staff in Abu Dhabi. Instead we collect your MacBook by free courier, repair it in Dubai, and courier it back to you."
      },
      {
        "q": "How long does a repair take if I am in Abu Dhabi?",
        "a": "Usually 1-2 days door to door. Because the courier drives about 1.5 hours each way between the cities, we cannot promise same-day like we can for Dubai itself. Most jobs are collected one day and returned within a day or two of approval; complex board-level work can take longer, and we tell you upfront."
      },
      {
        "q": "Is the courier collection really free?",
        "a": "Yes, both ways. We cover the courier cost to collect from your Abu Dhabi address and to return the repaired MacBook. You only pay for the repair itself, and only after you have approved our quote."
      },
      {
        "q": "Is the Abu Dhabi-Dubai courier transfer safe for my MacBook?",
        "a": "Yes. We use tracked courier collection so you know where your machine is, and we recommend backing up your data beforehand where possible. Your MacBook is logged in when it reaches the workshop and handled by the same technicians who would serve a walk-in customer."
      },
      {
        "q": "What kinds of MacBook faults do you repair?",
        "a": "Screen and display replacements, battery replacement, water and liquid damage, keyboard and trackpad faults, charging and logic-board issues, storage and data problems, and slow or overheating machines. We work on MacBook Air and MacBook Pro across the Intel and Apple Silicon ranges."
      },
      {
        "q": "How do I get a price before committing?",
        "a": "Tell us the model and the symptoms when you book the pickup and we will give you a rough estimate. The firm quote comes after we have the MacBook on the bench and have diagnosed it. Nothing is repaired until you approve that quote."
      },
      {
        "q": "Which parts of Abu Dhabi do you collect from?",
        "a": "Anywhere in the emirate. We regularly collect from Al Reem Island, Khalifa City, Al Bateen, Mohammed Bin Zayed City, Al Khalidiyah, Yas Island, Saadiyat Island, and Mussafah, among others. If your address is in or around Abu Dhabi, the courier can reach you."
      },
      {
        "q": "How do I arrange a collection?",
        "a": "Message or call us with your MacBook model, the fault, and your Abu Dhabi address. We book the courier, usually for the next day, and confirm a collection window with you. From there we handle the diagnosis, quote, repair, and return."
      },
      {
        "q": "What if the repair is not worth doing?",
        "a": "We will tell you. If a machine is not economical to fix, we say so and explain why rather than pushing an expensive repair. In that case the diagnosis is honest and we arrange the return of your MacBook."
      }
    ],
    "reviewIndexes": [
      9,
      13,
      17,
      21,
      25,
      29
    ]
  },
  {
    "slug": "al-ain",
    "city": "Al Ain",
    "emirate": "Abu Dhabi (Al Ain)",
    "short": "Free courier MacBook repair for Al Ain. A courier collects from your address, we fix it at our Dubai workshop, and it comes back to you, usually within 1-2 days.",
    "distance": "about 1.5 hours (roughly 130 km) from Dubai Media City",
    "collectionModel": "courier",
    "collectionWindow": "Next-day free courier collection",
    "turnaround": "usually 1-2 days door to door by courier",
    "landmarks": [
      "Jebel Hafeet",
      "Al Ain Oasis (UNESCO World Heritage Site)",
      "Al Jahili Fort",
      "Sheikh Zayed Palace Museum",
      "Al Ain Zoo",
      "Green Mubazzarah"
    ],
    "landmarkLine": "Al Ain is the UAE's garden city, known for Jebel Hafeet rising over the plain and the UNESCO-listed Al Ain Oasis with its ancient falaj channels near Al Jahili Fort.",
    "districts": [
      {
        "name": "Al Jimi",
        "note": "Courier collection from homes and villas around Al Jimi, including near Al Jimi Mall."
      },
      {
        "name": "Al Muwaiji",
        "note": "We arrange a courier pickup from your Al Muwaiji address at a time that suits you."
      },
      {
        "name": "Al Bateen",
        "note": "Free collection across Al Bateen; just have the MacBook ready and we handle the rest."
      },
      {
        "name": "Asharej",
        "note": "Courier pickup from Asharej, close to the universities and college campuses."
      },
      {
        "name": "Al Mutaredh",
        "note": "We collect from Al Mutaredh and return the repaired MacBook to the same address."
      },
      {
        "name": "Central District",
        "note": "Pickup from the Central District near the souqs and the Al Ain Oasis."
      },
      {
        "name": "Al Towayya",
        "note": "Free courier collection from Al Towayya, with tracking shared once it's booked."
      },
      {
        "name": "Falaj Hazza",
        "note": "We arrange collection from Falaj Hazza and keep you updated through the repair."
      },
      {
        "name": "Hili",
        "note": "Courier pickup from Hili, including the residential streets near Hili Fun City."
      }
    ],
    "intro": "Al Ain is the furthest inland of the cities we serve, and the garden city has very few dedicated Apple repair options of its own. We are honest about our setup: one workshop in Concord Tower, Dubai Media City, and no Al Ain shop. Instead, we offer free courier collection: a courier comes to your Al Ain address, brings your MacBook to our Dubai bench, our technicians carry out the repair, and a courier returns it to you. Al Ain is roughly 130 km away, about a 1.5-hour drive, so most jobs run as a 1-2 day round trip rather than same day. You get a clear diagnosis and a price before any work starts, and nothing proceeds until you approve it.",
    "whyChoose": "Using a dedicated MacBook workshop by courier means your machine is handled by technicians who only work on MacBooks all day, rather than a general phone shop. We keep genuine-grade screens, batteries, keyboards and logic-board parts in stock in Dubai, which is harder to find locally in Al Ain. Board-level repairs in particular need proper microsoldering equipment and a clean bench, and we have both. You also get a written quote up front, no charge if you decide not to proceed after diagnosis, and the convenience of never leaving home. The courier handles transport both ways, so the distance to Dubai is our problem, not yours.",
    "collectionNote": "Collection is genuinely free for Al Ain. Once you contact us with the model and the fault, we book a courier to your address, usually for the next day. You hand over the MacBook, the courier brings it to our Dubai Media City workshop, and we diagnose it and send you a fixed price before touching anything. After you approve, we carry out the repair and a courier returns the MacBook to the same Al Ain address. Because it is around a 1.5-hour drive each way, plan on a 1-2 day round trip. We share courier tracking so you always know where your machine is.",
    "faqs": [
      {
        "q": "Do you have a branch or shop in Al Ain?",
        "a": "No. We are a Dubai-based workshop in Concord Tower, Dubai Media City, and we have no branch, shop or staff in Al Ain. We serve Al Ain through free courier collection: we collect your MacBook, repair it in Dubai, and courier it back to you."
      },
      {
        "q": "How long does a repair take for Al Ain?",
        "a": "Al Ain is about 1.5 hours from our workshop, so it is not a same-day service. Most repairs run as a 1-2 day door-to-door round trip, depending on the fault and parts. We confirm an honest timeline once we have diagnosed your MacBook."
      },
      {
        "q": "How much does collection cost?",
        "a": "Collection and return are free for Al Ain. You only pay for the repair itself, and only after you have approved a fixed quote. If you choose not to go ahead after diagnosis, there is no charge."
      },
      {
        "q": "Is the long courier trip from Al Ain safe for my MacBook?",
        "a": "Yes. We use a tracked courier and recommend backing up your data first if the machine still powers on. We share the tracking details with you, so you can follow the MacBook from your Al Ain address to our Dubai bench and back."
      },
      {
        "q": "Which MacBook problems can you fix from Al Ain?",
        "a": "Screen and display replacements, batteries, keyboards and trackpads, charging and port faults, liquid damage, water damage recovery, and board-level logic-board repairs with microsoldering. If it is a MacBook, we most likely repair it."
      },
      {
        "q": "How do I get a price before I send it?",
        "a": "Tell us the model and describe the fault and we will give you a likely range. The firm price comes after we have the MacBook in Dubai and have diagnosed it. We send that fixed quote for your approval before any work begins."
      },
      {
        "q": "How do I book a collection from Al Ain?",
        "a": "Contact us by phone or WhatsApp with your model, the fault and your Al Ain address. We arrange a courier, usually for the next day, and tell you the pickup window. You just need to have the MacBook ready."
      },
      {
        "q": "What if my MacBook will not turn on at all?",
        "a": "That is fine to send. A dead MacBook is often a charging, battery or logic-board issue that we diagnose on the bench. Pack it safely, and the courier will collect it from your Al Ain address as normal."
      },
      {
        "q": "Do you repair water or liquid damaged MacBooks from Al Ain?",
        "a": "Yes. Liquid damage is one of the most common board-level repairs we handle. Stop using the MacBook, do not try to charge it, and book a collection quickly. The sooner it reaches our Dubai workshop, the better the chance of a full recovery."
      },
      {
        "q": "Will I get genuine-grade parts?",
        "a": "Yes. We stock high-quality screens, batteries, keyboards and other components in Dubai and use the correct part for your specific MacBook model. We will tell you exactly what we are fitting in the quote."
      }
    ],
    "reviewIndexes": [
      12,
      16,
      20,
      24,
      28,
      32
    ]
  },
  {
    "slug": "ras-al-khaimah",
    "city": "Ras Al Khaimah",
    "emirate": "Ras Al Khaimah",
    "short": "Free courier collection of your MacBook from anywhere in Ras Al Khaimah, repaired at our Dubai workshop and couriered back, usually within 1-2 days.",
    "distance": "about 1 hour 15 minutes (roughly 120-130 km) from our Dubai Media City workshop",
    "collectionModel": "courier",
    "collectionWindow": "Next-day free courier collection",
    "turnaround": "typically 1-2 days by courier, depending on the repair",
    "landmarks": [
      "Jebel Jais",
      "RAK National Museum",
      "Al Hamra Mangroves",
      "Dhayah Fort",
      "Ras Al Khaimah Corniche",
      "Suwaidi Pearl Farm"
    ],
    "landmarkLine": "Ras Al Khaimah is known for Jebel Jais, the highest peak in the UAE, and the historic Dhayah Fort and RAK National Museum down in the old town.",
    "districts": [
      {
        "name": "Al Nakheel",
        "note": "Courier collection from this waterfront area near the harbour and Julphar Towers, usually arranged for the next day."
      },
      {
        "name": "Dafan Al Nakheel",
        "note": "We collect from homes and offices near the Corniche and Al Naeem Mall, no need to drive anywhere."
      },
      {
        "name": "Al Hamra Village",
        "note": "Free collection from villas and apartments in the Al Hamra and golf community, booked by phone or WhatsApp."
      },
      {
        "name": "Al Mairid",
        "note": "Courier pickup from this central district near the old markets, packed safely for the trip to Dubai."
      },
      {
        "name": "Khuzam",
        "note": "We collect from this residential area and the surrounding Al Dhait and Dafan Al Khor streets."
      },
      {
        "name": "Al Dhait",
        "note": "Free courier collection from Al Dhait North and South, including the areas near the universities."
      },
      {
        "name": "Seih Al Uraibi",
        "note": "Pickup arranged from the university district and nearby residential streets at a time that suits you."
      }
    ],
    "intro": "Ras Al Khaimah is the northernmost emirate we collect from, and the E311 makes it a surprisingly quick link to our bench. We have one workshop - Concord Tower, Dubai Media City - and no shop in Ras Al Khaimah, so for customers up there we run a free courier collection service instead. A courier comes to your address in Ras Al Khaimah, collects your MacBook, and brings it to our Dubai bench, where the actual technician works on it. Once it is fixed and tested, a courier returns it to you. Because Ras Al Khaimah is about an hour and a quarter from Dubai by road, most jobs come back to you within one to two days rather than the same day. You get the same parts, the same diagnostics, and the same person doing the work as a walk-in customer would.",
    "whyChoose": "The honest reason to send your MacBook to Dubai is the bench itself. We work on MacBooks all day, so logic-board faults, liquid damage, failed displays, swollen batteries and dead keyboards are routine here rather than something we send away. A general computer shop in Ras Al Khaimah may not stock genuine Apple parts or have the micro-soldering setup for board-level work. With the courier model you skip the 1.25-hour drive each way and the parking, and you deal directly with the technician by phone or WhatsApp for the diagnosis and the price before anything is approved. The trade-off is the courier leg, which usually adds a day. For most repairs that is a fair swap for getting it done properly.",
    "collectionNote": "Collection is genuinely free across Ras Al Khaimah, with no minimum repair cost to qualify. You message or call us, tell us what the MacBook is doing, and we book a courier to your home or office, often for the next day. Have the laptop ready in a padded bag or its box if you have one; the courier will not need to power it on. It travels to our Dubai Media City workshop, we run a free diagnosis, then call you with the fault and a fixed price before any work starts. After you approve and the repair is tested, a courier brings it back to the same Ras Al Khaimah address. You only pay for the repair itself.",
    "faqs": [
      {
        "q": "Do you have a branch or shop in Ras Al Khaimah?",
        "a": "No. We are a Dubai-based workshop in Concord Tower, Dubai Media City, and that is the only location where repairs happen. For Ras Al Khaimah customers we collect the MacBook for free by courier, repair it in Dubai, and courier it back. There is no counter or drop-off point in Ras Al Khaimah."
      },
      {
        "q": "How long does a repair take if I'm in Ras Al Khaimah?",
        "a": "Plan for one to two days in most cases. Ras Al Khaimah is about an hour and a quarter from our Dubai workshop, so the courier leg adds time on top of the repair. A simple battery or screen swap with parts in stock is quick on the bench; the round trip is what usually makes it a one to two day job rather than same-day."
      },
      {
        "q": "How much does the courier collection cost?",
        "a": "The collection and the return are free, with no minimum spend to qualify. You only pay for the repair, and we give you a fixed price after the free diagnosis in Dubai. Nothing is charged and no work starts until you approve that price."
      },
      {
        "q": "Is it safe to courier my MacBook all the way to Dubai?",
        "a": "Yes. MacBooks travel well when packed properly, so put it in a padded sleeve or its original box. We log it in when it arrives, keep you updated by phone or WhatsApp, and the same courier process brings it back. If you are concerned about data, we recommend signing out of Find My and backing up first, though we never need your password to diagnose hardware."
      },
      {
        "q": "What kinds of MacBook problems do you fix?",
        "a": "All of them: cracked or dim screens, batteries that swell or die, liquid spills, keyboards and trackpads, charging and port faults, fans and overheating, and board-level work like a MacBook that won't power on or charge. We handle MacBook Air and MacBook Pro across both Intel and Apple Silicon models."
      },
      {
        "q": "How do I get a price before sending it?",
        "a": "Tell us the model and what is going wrong by phone or WhatsApp and we will give you a likely range up front. The firm price comes after our free diagnosis in Dubai, once we have seen the actual fault. You approve that fixed price before we order parts or start any work."
      },
      {
        "q": "Do you use genuine Apple parts?",
        "a": "We use genuine or high-grade equivalent parts depending on the repair and the model, and we will tell you which applies to your job before you approve it. For things like batteries and displays we are clear about the part being fitted so there are no surprises."
      },
      {
        "q": "What if the MacBook can't be repaired or I decide not to proceed?",
        "a": "If it is not economical to fix, or you simply decide against the quoted price, we courier the MacBook back to your Ras Al Khaimah address at no charge. The diagnosis is free, so you are never stuck paying for a repair you did not approve."
      },
      {
        "q": "Can you collect from anywhere in Ras Al Khaimah, including Al Hamra or Jebel Jais areas?",
        "a": "Yes, we collect from across the emirate, including Al Nakheel, Dafan Al Nakheel, Al Hamra Village, Al Mairid, Khuzam and Al Dhait, as well as outlying areas. Just give us the address when you book and we will arrange a courier pickup time that works for you."
      }
    ],
    "reviewIndexes": [
      15,
      19,
      23,
      27,
      31,
      35
    ]
  },
  {
    "slug": "fujairah",
    "city": "Fujairah",
    "emirate": "Fujairah",
    "short": "Free courier collection from anywhere in Fujairah to our Dubai MacBook workshop. We pick up your MacBook, repair it, and send it back, usually within 1 to 2 days.",
    "distance": "about 1.5 hours (roughly 135 km) by road from Dubai Media City",
    "collectionModel": "courier",
    "collectionWindow": "Next-day free courier collection across Fujairah",
    "turnaround": "usually 1 to 2 days door to door by courier, depending on the repair",
    "landmarks": [
      "Sheikh Zayed Mosque (Fujairah)",
      "Fujairah Fort",
      "Fujairah Heritage Village",
      "Al Bidya Mosque",
      "Fujairah Corniche",
      "Madhab Park and mineral springs"
    ],
    "landmarkLine": "Fujairah is the only emirate sitting entirely on the Gulf of Oman coast, known for Fujairah Fort, the Sheikh Zayed Mosque and the seafront Corniche.",
    "districts": [
      {
        "name": "Al Faseel",
        "note": "Waterfront villas and apartments on the eastern side; the courier collects from your building or villa door."
      },
      {
        "name": "Sakamkam",
        "note": "Residential blocks and villas to the north of the city; collection arranged at a time that suits you."
      },
      {
        "name": "Madhab",
        "note": "Quiet area near Madhab Park and the mineral springs; door-to-door pickup, no need to travel."
      },
      {
        "name": "Gurfah (Al Ghurfa)",
        "note": "Mix of older and compact villas; we collect from the address you give us."
      },
      {
        "name": "Fujairah Corniche",
        "note": "Seafront apartments and offices along the strip; courier comes straight to reception or your unit."
      },
      {
        "name": "Al Gulaya'a",
        "note": "Family area near Lulu Hypermarket; free pickup and return at your home."
      },
      {
        "name": "Dibba Al Fujairah",
        "note": "Coastal town to the north of the emirate; collection covered, allow a little extra return time for the distance."
      }
    ],
    "intro": "We are MacBook Repair Dubai, a single specialist workshop in Concord Tower, Dubai Media City. We do not have a shop in Fujairah, so for the east coast we run a free courier collection service instead. A courier picks your MacBook up from your home or office anywhere in Fujairah, brings it to our Dubai workbench where the actual repair is done, and a courier returns it to you once it is finished. Fujairah is about a 1.5 hour drive from us, roughly 135 km, so the practical turnaround is usually one to two days door to door rather than same day. You get the same diagnosis, parts and technician you would get if you walked into the workshop yourself.",
    "whyChoose": "MacBook repair on the east coast often means a long drive to Dubai or Sharjah, or handing the machine to a general phone shop that sends Apple work elsewhere anyway. Using a Dubai specialist by courier skips both. Your MacBook goes straight to a bench that only works on Apple laptops, with proper tools for board-level faults, screen and battery replacement, liquid damage and storage recovery. You are not paying a Fujairah middleman markup, and you are not driving 135 km each way. We quote before any work starts, so you approve the price before we open anything. The trade-off is honest: because of the distance it is a one to two day round trip, not an over-the-counter same-day fix.",
    "collectionNote": "Collection from Fujairah is genuinely free, with no charge added to your repair. Tell us your area, whether Al Faseel, Sakamkam, the Corniche or Dibba, and a pickup time, and a courier comes to your home or office to collect the MacBook. Because Fujairah is around 1.5 hours from the Dubai workshop, the courier typically collects the next day rather than same day. We diagnose it, send you a quote, and only start once you approve. When the repair is done, the same free courier brings it back to your Fujairah address. You never need to drive to Dubai or hand the machine to a local third party.",
    "faqs": [
      {
        "q": "Do you have a branch or shop in Fujairah?",
        "a": "No. We are a Dubai-based workshop in Concord Tower, Dubai Media City, and that is the only location we operate from. There is no MacBook Repair Dubai shop, counter or staff member in Fujairah. We serve the emirate through free courier collection: a courier picks up your MacBook, it is repaired in Dubai, and it is couriered back to you."
      },
      {
        "q": "How does free collection from Fujairah work?",
        "a": "Message or call us with your Fujairah address and a convenient time. A courier collects the MacBook from your home or office, usually the next day given the distance. We diagnose it in Dubai, send you a quote, and once you approve we carry out the repair. The same free courier then returns it to your Fujairah address. There is no collection or return fee."
      },
      {
        "q": "How long does a repair take if I am in Fujairah?",
        "a": "Plan on one to two days door to door for most repairs. Fujairah is about a 1.5 hour drive from our Dubai workshop, so a same-day turnaround is not realistic the way it can be inside Dubai. Simple jobs like a battery or screen are quick once the machine is on the bench; the extra time is mostly the courier legs to and from the east coast. Board-level or liquid-damage repairs can take longer, and we will tell you upfront."
      },
      {
        "q": "Is it safe to courier my MacBook from Fujairah to Dubai?",
        "a": "Yes. We use a tracked courier and the MacBook is handled in protective packaging. We log its condition on arrival and keep you updated. If you are worried about data, back up before sending if you can; for repairs that do not touch storage your files stay untouched, and for storage or liquid-damage work we discuss data handling with you first."
      },
      {
        "q": "What can you actually fix?",
        "a": "All common MacBook faults: cracked or faulty screens, swollen or dead batteries, keyboards and trackpads, charging and port problems, liquid damage, no-power and no-display faults, and board-level repairs. We also handle SSD and data issues. If a fault turns out not to be economical to repair, we tell you honestly rather than charging for guesswork."
      },
      {
        "q": "How much does the repair cost, and is collection charged separately?",
        "a": "Collection and return from Fujairah are free; there is no surcharge for the distance. The repair itself is quoted after diagnosis, before any work begins, so you see the price and approve it first. Cost depends on the model and the fault, for example a battery is far less than a logic-board repair. No surprise charges are added at the end."
      },
      {
        "q": "Which MacBook models do you repair?",
        "a": "We work on MacBook Air and MacBook Pro across the Intel and Apple Silicon (M1, M2, M3 and later) generations, as well as older models where parts are still available. Tell us the model or the year and we will confirm whether we have the parts and what the realistic outcome is before you send it."
      },
      {
        "q": "What if my MacBook will not turn on at all?",
        "a": "Send it anyway. A MacBook that will not power on is one of the most common things we see, and the cause is often a charging fault, a failed battery or a board-level issue rather than a dead machine. We diagnose no-power faults on the bench and give you a clear quote. Collection from Fujairah is still free, and the diagnosis tells you whether it is worth repairing."
      },
      {
        "q": "Do I need to include the charger or any accessories?",
        "a": "Just the MacBook is enough for most repairs, but if the issue is charging or power related, including the charger helps us test the full setup. Remove any case if you can. The courier collects whatever you hand over and we log it, so nothing goes missing between Fujairah and the workshop."
      }
    ],
    "reviewIndexes": [
      18,
      22,
      26,
      30,
      34,
      38
    ]
  },
  {
    "slug": "khor-fakkan",
    "city": "Khor Fakkan",
    "emirate": "Sharjah (east coast)",
    "short": "Free courier collection from Khor Fakkan to our Dubai MacBook workshop. We collect, repair in Media City, and return it, usually 1-2 days.",
    "distance": "about 2 hours (roughly 130 km) from our Dubai Media City workshop",
    "collectionModel": "courier",
    "collectionWindow": "Next-day free courier collection",
    "turnaround": "1-2 days by courier, including travel both ways",
    "landmarks": [
      "Khorfakkan Beach and Corniche",
      "Khor Fakkan Amphitheatre",
      "Khorfakkan Waterfall",
      "Al Rabi Tower",
      "Al Suhub Rest House",
      "Khor Fakkan Port"
    ],
    "landmarkLine": "If you live near Khorfakkan Beach and the Corniche, or up by Al Rabi Tower and the amphitheatre, the courier comes to your door, there's nothing to drop off.",
    "districts": [
      {
        "name": "Al Khaledya",
        "note": "Southern coastal area near the port, courier collects from your home or office address."
      },
      {
        "name": "Zubara",
        "note": "On the northern end of the bay; door collection, no need to come to the Corniche."
      },
      {
        "name": "Al Haray",
        "note": "The newer residential plots up against the mountains, courier reaches you there too."
      },
      {
        "name": "Qadsiya",
        "note": "Residential district; we collect from the building entrance at a time you pick."
      },
      {
        "name": "Yarmouk",
        "note": "Apartment and villa area, hand the MacBook to the courier, nothing to fill in beyond the form."
      },
      {
        "name": "Shabiya",
        "note": "Family residential streets; same free door collection across the neighbourhood."
      }
    ],
    "intro": "We don't have a shop in Khor Fakkan. We're a MacBook workshop in Concord Tower, Dubai Media City, and we've been fixing Apple hardware there since 2004. For the east coast we run free courier collection instead. A courier picks the MacBook up from your Khor Fakkan address, brings it to the bench in Dubai, and once it's repaired and QC-checked it goes straight back to you. Khor Fakkan is about two hours from Media City, so the realistic round trip is one to two days. You get the same technician, Shafiq Ahmed, 21 years on Apple hardware, and the same warranty of up to 12 months as anyone who walks into the workshop.",
    "whyChoose": "Most laptop shops on the east coast handle phones and generic PCs. We only do Apple, and only at one bench in Dubai, so the MacBook that leaves Khor Fakkan is worked on by someone who's seen the same fault hundreds of times. Board-level work, screen bonding, battery cells with the cycle count reset, none of that is sent on to a third party. It stays in our Media City workshop. The courier is free both ways, the diagnostic is free, and it's no-fix-no-charge, so the two-hour distance costs you nothing. You also get a price in writing before we touch anything. 215+ Google reviews, 5.0 stars, and the same QC sheet on every job.",
    "collectionNote": "Collection is free and there's no catch on the distance. You WhatsApp us the MacBook model and what's wrong on 055 741 3706, we book a courier, and they collect from your Khor Fakkan address, home or office, usually the next day. The MacBook travels to our Dubai Media City workshop, gets a free diagnostic, and we send you a fixed price before any work starts. Once you approve and it's repaired, the same courier returns it to your door. You pay nothing for collection or return, and nothing at all if we can't fix it. Both legs of the roughly 130 km trip are on us.",
    "faqs": [
      {
        "q": "Do you have a branch or shop in Khor Fakkan?",
        "a": "No. We're Dubai-based, one workshop in Concord Tower, Dubai Media City, running since 2004. There's no MacBook Repair Dubai counter in Khor Fakkan or anywhere on the east coast. What we do offer is free courier collection: a courier picks the MacBook up from your address, it's repaired at our Dubai bench, and it comes back to you. You deal with the same technician either way."
      },
      {
        "q": "How long does a repair take if I'm in Khor Fakkan?",
        "a": "Plan on one to two days door to door. Khor Fakkan is about two hours from Media City, so a fair chunk of that is just the courier travel each way. The actual repair is often done the same day it reaches the bench, most screens and batteries are quick. If a part needs ordering we'll tell you upfront before the courier even collects."
      },
      {
        "q": "What does the courier collection cost?",
        "a": "Nothing. Collection from Khor Fakkan and the return trip are both free, and the diagnostic is free too. You only pay for the repair itself, at the price we quote in writing before we start. If we can't fix it, you pay zero, including the courier. That's the no-fix-no-charge rule, and the roughly 130 km distance doesn't change it."
      },
      {
        "q": "Is it safe to send my MacBook by courier that far?",
        "a": "Yes. We've been doing east-coast collections for years and the laptop is logged in and out with photos at both ends. It travels in protective packaging, and the moment it lands in Media City it's logged against your name and serial. You get a message at each step, collected, received, diagnosed, repaired, on its way back. Back up your data first if you can, as a habit."
      },
      {
        "q": "What MacBook problems can you actually fix from Khor Fakkan?",
        "a": "The same range we fix for walk-ins: cracked or dark screens, batteries that swell or die after 18+ months, charging ports, liquid damage, keyboards, fans, and board-level faults like no-power or no-display. Air and Pro, Intel and Apple silicon. Send the model and a photo of the issue on WhatsApp and we'll tell you whether it's worth fixing before the courier moves."
      },
      {
        "q": "How much is a typical MacBook repair?",
        "a": "Screen repairs start at AED 780 and batteries from around AED 590, both VAT-inclusive, but the honest answer is it depends on the model and fault. We give you a fixed written price after the free diagnostic in Dubai, and nothing happens until you approve it. No surprise charges land on the return courier. WhatsApp the serial and we can usually narrow it down in a few minutes."
      },
      {
        "q": "Will I lose my data or True Tone during the repair?",
        "a": "Your files stay on the drive, we don't wipe anything for a screen, battery or port job. On 14-inch and 16-inch Pros, True Tone re-pairs against your logic-board serial, so it's kept where the hardware allows. We'll always flag if a specific repair touches data. Back up before you hand it to the courier anyway, just to be safe."
      },
      {
        "q": "Do you use genuine Apple parts?",
        "a": "We use A-grade panels and cells from the same factory lines that supply Apple, plus genuine parts where it makes sense for the model. We'll tell you which is going in and why before you approve the quote, no guessing. Everything carries a warranty of up to 12 months, three months on batteries, and that warranty holds even though you're in Khor Fakkan and we're in Dubai."
      },
      {
        "q": "How do I book a collection from Khor Fakkan?",
        "a": "WhatsApp or call 055 741 3706 with your MacBook model, the fault, and your Khor Fakkan address. We confirm a courier slot, usually for the next day, and send you the collection time. From there it's hands-off: collected, repaired in Media City, returned. You can track each stage by message, and you don't pay a thing until you've approved the repair price."
      }
    ],
    "reviewIndexes": [
      21,
      25,
      29,
      33,
      37,
      41
    ]
  },
  {
    "slug": "kalba",
    "city": "Kalba",
    "emirate": "Sharjah (east coast)",
    "short": "Kalba",
    "distance": "about 2 hours (roughly 120 km via the E102)",
    "collectionModel": "courier",
    "collectionWindow": "Next-day free courier collection",
    "turnaround": "usually 1-2 days, plus courier transit each way",
    "landmarks": [
      "Khor Kalba Mangrove Centre",
      "Kalba Clock Tower",
      "Al Hisn Kalba (Kalba Fort)",
      "Bait Sheikh Saeed bin Hamad Al Qasimi",
      "Kalba Bird of Prey Centre",
      "Kalba Corniche and Beach"
    ],
    "landmarkLine": "Whether you live near the Kalba Clock Tower on Al Wahda Street or out by the Khor Kalba mangroves and the Corniche, we arrange the courier to your door.",
    "districts": [
      {
        "name": "Kalba Wall (Al Sur)",
        "note": "The old town core around the fort and Corniche; courier collects from home or office addresses here."
      },
      {
        "name": "Tarif",
        "note": "Largely villa neighbourhoods inland from the seafront; we book the pickup for a time that suits you."
      },
      {
        "name": "Al Ghail",
        "note": "Residential area on the Kalba side; the courier comes to your address, no need to travel."
      },
      {
        "name": "Khor Kalba",
        "note": "Coastal area near the mangrove reserve; collection works the same as anywhere else in the city."
      },
      {
        "name": "Wadi Al Helo",
        "note": "The valley settlement along the Sharjah-Kalba highway; reachable for courier collection, just allow a little extra transit time."
      }
    ],
    "intro": "Kalba, over on the east coast past the Hajar mountains, has essentially no specialist Mac repair nearby - which is who this service exists for. Our only workshop is in Concord Tower, Dubai Media City; there is no Kalba branch, and we will not pretend otherwise. What we offer Kalba customers is free courier collection: a courier picks your MacBook up from your home or office in Kalba, brings it to our Dubai bench, and returns it once it is fixed. Kalba sits on Sharjah's east coast, roughly 120 km and about two hours' drive from us, so this runs as a courier service rather than same-day pickup. Every repair is done in Dubai by the same technician, with genuine-grade parts and a clear price before we start.",
    "whyChoose": "Kalba has few dedicated Mac specialists nearby, and a general phone shop often is not the right place for logic-board or screen work on a MacBook. Sending it to a Dubai workshop that handles Macs all day means proper diagnostics, the right parts, and someone who has seen your exact fault before. You get a quote before any work starts, no charge if you decide not to proceed, and the machine comes back by courier. The only real trade-off versus a Dubai address is transit time, which is why we are upfront that this takes a day or two each way rather than same-day. No travel, no queue, and one accountable workshop start to finish.",
    "collectionNote": "Tell us your Kalba address and the fault, and we book a courier to collect the MacBook from you, usually the next day. It travels to our Dubai Media City workshop, where we diagnose it and send you a fixed price before any work begins. Once you approve and the repair is done, a courier returns it to the same address. Collection both ways is free; you only pay for the agreed repair. Because Kalba is about two hours from Dubai, allow a day for transit in each direction on top of the bench time.",
    "faqs": [
      {
        "q": "Do you have a branch or shop in Kalba?",
        "a": "No. We are based in Dubai, with one workshop in Concord Tower, Dubai Media City. We do not have any branch, shop, or staff in Kalba. We serve Kalba by free courier collection: we collect your MacBook, repair it in Dubai, and courier it back."
      },
      {
        "q": "How does free collection from Kalba work?",
        "a": "You give us your Kalba address and tell us what is wrong. We arrange a courier to collect the MacBook, usually the next day, bring it to our Dubai workshop, and return it to you once it is repaired. Collection and return are both free."
      },
      {
        "q": "How long does a repair take for a Kalba customer?",
        "a": "The repair itself is usually 1-2 days on the bench. On top of that, allow about a day for the courier each way, since Kalba is roughly two hours from Dubai. We tell you the expected timeline once we have seen the machine."
      },
      {
        "q": "Is sending my MacBook from Kalba by courier safe?",
        "a": "Yes. We use a tracked courier and the machine is handled carefully both ways. We recommend you back up your data first if the MacBook still powers on, and remove any case or stickers you want kept separate."
      },
      {
        "q": "What does collection cost?",
        "a": "Courier collection and return are free. You only pay for the repair itself, at a price we confirm in writing before we start any work. If you decide not to go ahead after the diagnosis, there is no charge."
      },
      {
        "q": "What repairs do you cover - screens, batteries, board work?",
        "a": "Screen replacements, battery replacements, keyboard and trackpad repairs, water and liquid damage, logic-board faults, charging and port issues, storage upgrades, and software problems. If we cannot fix something, we tell you honestly rather than guess."
      },
      {
        "q": "Do you use genuine parts?",
        "a": "We use genuine-grade parts suited to your specific MacBook model and tell you exactly what is being fitted before we proceed. The price we quote includes the part and the labour."
      },
      {
        "q": "How do I get a price before sending it?",
        "a": "Message us with your MacBook model and a description of the fault, and we will give you a realistic estimate. The firm price is confirmed after we inspect the machine in Dubai, and no work happens until you approve it."
      },
      {
        "q": "What if my MacBook will not turn on at all?",
        "a": "Still send it. Many no-power faults are repairable, whether it is a charging issue, liquid damage, or a logic-board problem. We diagnose it in Dubai and give you a clear price and an honest view of whether it is worth fixing."
      }
    ],
    "reviewIndexes": [
      24,
      28,
      32,
      36,
      40,
      44
    ]
  }
];

// Overlay admin edits (prose + FAQs) per slug; structural fields stay from BASE_CITIES.
export const CITIES: CityConfig[] = BASE_CITIES.map((c) => {
  const o = CITY_OVERRIDES[c.slug];
  return o ? ({ ...c, ...o } as CityConfig) : c;
});

export const findCity = (slug: string) => CITIES.find((c) => c.slug === slug);
