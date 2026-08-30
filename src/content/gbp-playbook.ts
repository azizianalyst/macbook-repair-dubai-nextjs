// GBP Playbook data — a HISTORICAL snapshot of the Google Business Profile, pulled via
// Supermetrics on 2026-06-24, plus the audit and corrections from that pass.
// Rendered at /admin/gbp-playbook alongside the current content.
//
// ⚠️ THIS IS HISTORY, NOT LIVE DATA. The Supermetrics GMB connection expired 2026-06-30, so it
// cannot be re-pulled; use /admin/gbp (the live API) for current figures.
//
// ⚠️ DO NOT ADD PASTE-READY CONTENT HERE. It used to hold a description, categories, 12 services
// and 5 posts. Being hand-written, it went stale: by August that description was still claiming
// "transparent fixed pricing" and "200+ five-star Google reviews", both of which had to go, and it
// sat behind a Copy button ready to publish. All paste-ready content now comes from
// src/content/gbp-content.generated.ts, generated from docs/gbp-content-pack-2026-08-30.md and
// gated on exactly those claims. Edit the markdown, re-run scripts/gen-gbp-content.mjs.

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
