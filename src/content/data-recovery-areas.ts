// Mac data-recovery landing pages, one per Dubai area.
//
// Why these exist when /macbook-repair-<area> already covers the area:
// live SERP checks (2026-09-24) show dedicated data-recovery-by-area pages win
// these queries - recoverydata.ae/mac-data-recovery-jlt and
// dubaidatarecovery.com/data-recovery-dubai/dubai-marina/mac-data-recovery-dubai/
// both outrank generic service pages. The same check showed screen/battery/
// logic-board by area is ALREADY held by our own /macbook-repair-<area> pages,
// so those variants are deliberately not built - they would cannibalise.
//
// Every page must earn its place: the `angle`, `who`, `scenarios` and `faqs`
// fields are written to the real character of each district, not templated.

export type DataRecoveryAreaFAQ = { q: string; a: string };

export type DataRecoveryAreaConfig = {
  slug: string;        // URL slug -> /mac-data-recovery-<slug>
  area: string;        // Display name
  short: string;
  driveTime: string;
  collectWindow: string;
  /** 1 sentence for the hero subtitle. */
  landmarkLine: string;
  /** 90-130 words: why data recovery specifically matters in this area. */
  angle: string;
  /** 80-110 words: who we typically recover for here. */
  who: string;
  /** 70-100 words: how collection and confidentiality work here. */
  collection: string;
  /** The 3 failure modes most common in this area, most common first. */
  scenarios: { title: string; body: string }[];
  faqs: DataRecoveryAreaFAQ[];
  reviewIndexes: number[];
};

export const DATA_RECOVERY_AREAS: DataRecoveryAreaConfig[] = [
  {
    slug: "dubai-marina",
    area: "Dubai Marina",
    short: "Marina",
    driveTime: "10 minutes",
    collectWindow: "Within 30 minutes",
    landmarkLine: "10 minutes from Marina Mall, JBR and the Address Marina.",
    angle:
      "Dubai Marina is the densest residential cluster near the workshop, and the recoveries we do here are overwhelmingly personal rather than corporate: years of photos, a thesis, a freelance portfolio, a business run from a laptop on the kitchen table. Almost none of it is backed up properly, because Time Machine needs a drive people never bought and iCloud only ever held the phone. When a Marina MacBook stops booting, the question is never really the repair - it is whether the last six years survive. We collect within about 30 minutes, attempt recovery before any repair work, and tell you what came off before you decide anything else.",
    who:
      "Marina recoveries come from residents and freelancers more than offices: photographers and videographers with full drives, students, consultants working from home, and families whose one MacBook holds everything. A large share are Apple silicon MacBook Airs, where the SSD is soldered to the board and the usual trick of pulling the drive out simply does not exist. That is the work we do at component level.",
    collection:
      "WhatsApp the tower name and floor - Princess, Cayan, Marina Gate, the Address - and the courier meets you at the lobby, usually within 30 minutes during business hours. Tell us immediately if the Mac was dropped or got wet, because that changes what we do first. Your data is handled at one bench; we do not browse or copy anything beyond what the recovery needs, and we will wipe the drive before return if you ask and confirm when it is done.",
    scenarios: [
      { title: "MacBook Air or Pro will not boot past the Apple logo", body: "The most common Marina case. Usually a failing SSD controller or a power fault on the board rather than a dead Mac. On Apple silicon the storage is soldered, so recovery is done on the board itself rather than by removing a drive." },
      { title: "Liquid damage - pool, beach bag or a spilled drink", body: "Marina living means water. Corrosion spreads for as long as the board stays wet, so powering it on to 'check' makes it worse. Bring it in off, and we ultrasonic-clean the board before attempting to read the storage." },
      { title: "Accidental deletion or a failed macOS update", body: "Files erased, a drive reformatted, or an update that left the Mac in a boot loop. Often highly recoverable if the Mac is left alone - every hour of continued use risks overwriting what we are trying to get back." },
    ],
    faqs: [
      { q: "How fast can you collect my Mac from Dubai Marina?", a: "Usually within 30 minutes of WhatsApp confirmation during business hours (9 am-10 pm Mon-Sat). The courier runs a daily Marina loop, so Marina is one of the fastest collections we do." },
      { q: "My MacBook Air will not turn on at all. Are my files gone?", a: "Usually not. A Mac that will not power on is most often a board fault rather than dead storage, and the data is still intact on the SSD. We diagnose free of charge and tell you honestly what the chances are before you spend anything." },
      { q: "The SSD is soldered on Apple silicon. Can you still recover it?", a: "Yes - that is exactly the work. On M-series and T2 Macs the storage cannot be unplugged and read in another machine, so recovery happens at board level on our own bench. Most general laptop shops in Dubai do not attempt this." },
      { q: "What does Mac data recovery cost in Dubai Marina?", a: "It depends entirely on the failure - a logical recovery from a healthy drive is a very different job to a corroded board. Diagnosis is free and the price is fixed in writing on WhatsApp before any work starts, so you decide with the real number in front of you." },
      { q: "Is my data kept private?", a: "Yes. Machines are worked on at one bench and not passed between hands. We do not browse or copy your data beyond what the recovery requires, and if you want the drive wiped before the Mac is returned we will do it and confirm." },
      { q: "I spilled water on it last night. What should I do right now?", a: "Leave it switched off and do not plug it in to charge. Do not put it in rice. Message us straight away - corrosion is time-sensitive, and a board cleaned within 24 hours recovers far more often than one left a week." },
      { q: "Can you recover data and then repair the Mac too?", a: "Yes, and that is the normal order: data first, confirmed with you, then we quote the repair separately so you can decide whether the machine is worth fixing." },
      { q: "What if you cannot recover anything?", a: "Then there is no fee. We will also tell you plainly when a case is unlikely before you commit, rather than charging you to find out." },
    ],
    reviewIndexes: [0, 5, 10, 13, 21, 24],
  },
  {
    slug: "jlt",
    area: "JLT",
    short: "JLT",
    driveTime: "12 minutes",
    collectWindow: "Within 40 minutes",
    landmarkLine: "12 minutes from the JLT clusters, DMCC Metro and Almas Tower.",
    angle:
      "JLT is offices stacked on apartments, and that mix shows in the recoveries. Half are small companies - a trading desk, an agency, a consultancy - where the Mac that died holds the accounts, the client files or the only copy of a proposal due that week. The other half are residents in the same towers. What makes JLT different is urgency with a business cost attached: every day the data is missing is a day of work that cannot happen. We collect within about 40 minutes, attempt recovery before anything else, and can invoice the company rather than an individual.",
    who:
      "Mostly DMCC-registered small businesses and freelancers: bookkeeping and trading files, design and video projects, CRM exports, and the laptops of people who are the entire IT department. Machines are typically MacBook Pros a few years old, plus a steady number of Mac minis running an office system. On the newer ones the SSD is soldered, which rules out the drive-swap approach most shops rely on.",
    collection:
      "WhatsApp the cluster and tower - Cluster X, Almas, Gold Tower, the Jumeirah Bay towers - and the courier meets you at the building reception, usually within 40 minutes. Many JLT towers need a visitor pass, so a lobby handover is fastest. Company data is handled at one bench, never passed around, and we can sign off on a wipe before return if your policy requires it.",
    scenarios: [
      { title: "Office Mac mini or iMac stopped booting", body: "Common in JLT because a single desktop often runs the accounts or the point of sale. We treat it as urgent because it stops trading, recover the data first, and only then discuss whether the machine itself is worth repairing." },
      { title: "MacBook Pro dead after a power event or bad update", body: "A board-level power fault or a failed macOS update that leaves the Mac unbootable. The storage is usually intact; the route to it is the problem, and on T2 and Apple silicon machines that route is board-level." },
      { title: "Departing staff member's laptop that nobody can open", body: "A Mac left behind with no working account or a forgotten password. We can often recover the data with proof of ownership - we will ask for it, because we do not unlock machines that cannot be shown to belong to you." },
    ],
    faqs: [
      { q: "How fast can you collect from JLT?", a: "Usually within 40 minutes of WhatsApp confirmation during business hours (9 am-10 pm Mon-Sat). JLT is about 12 minutes from the workshop, so it sits on the daily Marina and JLT run." },
      { q: "Our office Mac holds the accounts and it will not start. How urgent can you be?", a: "Tell us it is business-critical on WhatsApp and we treat it that way - collection the same morning where possible, data recovery attempted before any repair work, and a written update as soon as we know what we are dealing with." },
      { q: "Can you invoice the company instead of taking personal payment?", a: "Yes. We work with a number of DMCC and JLT businesses on invoiced terms. Send the company details on WhatsApp when you book the collection." },
      { q: "How is confidential company data handled?", a: "It stays at one bench with one technician rather than being passed between hands. We do not browse or copy anything beyond what the recovery requires, and we will wipe the drive before return and confirm in writing if your policy needs that." },
      { q: "Can you recover from a Mac mini running our point-of-sale system?", a: "Yes. Mac mini recoveries are common here. If the machine is business-critical, say so - we will prioritise getting the data off so you can keep trading from a replacement while the original is repaired." },
      { q: "An employee left and nobody can log into their MacBook. Can you help?", a: "Often yes, with proof that the company owns the machine - a purchase invoice or asset record. We will ask for it. We do not bypass account locks on machines whose ownership cannot be demonstrated." },
      { q: "What does it cost?", a: "It depends on the failure mode, and diagnosis is free. The price is fixed in writing before any work begins, and if we recover nothing there is no fee." },
      { q: "Do you also repair the Mac afterwards?", a: "Yes. Data first and confirmed with you, then a separate written quote for the repair so you can decide whether the machine is worth keeping." },
    ],
    reviewIndexes: [1, 6, 11, 16, 20, 23],
  },
  {
    slug: "business-bay",
    area: "Business Bay",
    short: "Business Bay",
    driveTime: "18 minutes",
    collectWindow: "Within 60 minutes",
    landmarkLine: "18 minutes from the Business Bay towers, Bay Square and the Canal.",
    angle:
      "Business Bay is where a lot of Dubai's smaller companies actually sit, and the data we recover here tends to belong to a business rather than a person. A failed Mac in a Business Bay office is usually holding client work, financial records or a project mid-delivery, and the people calling are rarely technical - they are the founder or the office manager, working out how bad it is. We collect within about an hour, recover before we repair, quote in writing, and invoice the company if that is easier than a personal payment.",
    who:
      "Agencies, consultancies, real-estate and trading firms, and the studios scattered through the towers. Machines skew towards MacBook Pros and iMacs a few years old, often heavily loaded and rarely backed up beyond whatever iCloud happened to sync. We also see a steady stream of Mac minis quietly running something important that nobody documented.",
    collection:
      "WhatsApp the tower and floor - Bay Square, Executive Towers, Churchill, the Canal-side buildings - and the courier meets you at reception, usually within the hour. Several machines from one office can go in a single collection with one combined quote. Company data stays at one bench, and we can wipe the drive before return and confirm it in writing if your policy requires that.",
    scenarios: [
      { title: "MacBook Pro will not boot with a project mid-delivery", body: "The case we see most in Business Bay. The storage is normally intact behind a board or SSD-controller fault. We attempt recovery first and get you the files, so delivery can continue from another machine while the original is repaired." },
      { title: "iMac or Mac mini running an office system failed", body: "A single desktop holding the accounts, the CRM export or the shared archive. Treated as urgent because it stops the office. Recovery first, then an honest answer about whether the hardware is worth repairing." },
      { title: "Drive reformatted or files deleted during a migration", body: "Someone moving to a new Mac wiped the old one before checking the transfer completed. Frequently very recoverable - provided the machine is put aside immediately rather than kept in use." },
    ],
    faqs: [
      { q: "How fast can you collect from Business Bay?", a: "Usually within an hour of WhatsApp confirmation during business hours (9 am-10 pm Mon-Sat). Business Bay is about 18 minutes from the workshop." },
      { q: "Can you collect several machines from our office at once?", a: "Yes. One visit, each machine assessed free of charge, and a single written quote so you can decide what is worth recovering and in what order." },
      { q: "Can you invoice the company?", a: "Yes, we work with Dubai businesses on invoiced terms. We also run annual maintenance contracts for offices that would rather not be in this position again." },
      { q: "How confidential is this? The files are client work.", a: "Machines are handled at one bench and not passed between technicians. We do not browse or copy data beyond what the recovery requires, and we will wipe the drive before return and confirm in writing if you need that." },
      { q: "Our project is due this week. Can you prioritise it?", a: "Tell us the deadline on WhatsApp. We will say up front whether we can meet it rather than let you wait and find out - and where the data is the urgent part, recovery comes before any repair work." },
      { q: "What does Mac data recovery cost in Business Bay?", a: "It depends on the failure. Diagnosis is free, the price is fixed in writing before work starts, and if nothing is recovered there is no fee." },
      { q: "Someone wiped the old iMac before checking the transfer. Recoverable?", a: "Often yes, if the machine is set aside straight away. Continued use overwrites exactly the data we are trying to recover, so stop using it and send it in." },
      { q: "Do you repair the Mac as well?", a: "Yes, but separately and second. Data first, confirmed with you, then a written quote for the repair so the two decisions stay independent." },
    ],
    reviewIndexes: [2, 7, 12, 15, 19, 25],
  },
  {
    slug: "difc",
    area: "DIFC",
    short: "DIFC",
    driveTime: "20 minutes",
    collectWindow: "Within 60 minutes",
    landmarkLine: "20 minutes from Gate Village, the DIFC Gate Building and Index Tower.",
    angle:
      "DIFC recoveries carry a confidentiality weight that most do not. The Macs we collect here belong to law firms, funds, advisory practices and family offices, and the data on them is privileged or regulated. That changes the job: the technical work is the same board-level recovery we do anywhere, but the handling around it has to be defensible. One technician, one bench, no copies beyond what the recovery requires, and a written confirmation of a secure wipe before the machine goes back if your compliance team needs it.",
    who:
      "Legal, financial and advisory firms in Gate Village, Index Tower, Central Park and the surrounding buildings, plus residents in the same towers. Machines are typically well-specified MacBook Pros, often with full-disk encryption enabled - which is fine, but it means we will need your credentials or your explicit decision about how far the recovery should go.",
    collection:
      "WhatsApp the building and floor and the courier meets you at reception, usually within the hour. DIFC buildings generally require a visitor pass, so a lobby handover is fastest. If your firm requires a signed acknowledgement of custody before the device leaves, say so when you book and we will bring one. We can also confirm a secure wipe in writing before the Mac is returned.",
    scenarios: [
      { title: "Encrypted MacBook Pro that will not boot", body: "FileVault does its job: without the credentials the data stays unreadable, by us as much as anyone. If the board has failed we can usually restore access to the storage, but you will need the password or recovery key. We will tell you that before you spend anything." },
      { title: "Board or SSD-controller failure on a work laptop", body: "The storage is intact, the route to it is broken. On T2 and Apple silicon machines the SSD is soldered, so this is board-level work rather than a drive swap - which is why most general shops cannot attempt it." },
      { title: "Device needed back clean after recovery", body: "Common for regulated firms: recover the data to your supplied encrypted drive, then securely wipe the Mac before it is returned or disposed of. We confirm the wipe in writing." },
    ],
    faqs: [
      { q: "How is client-privileged data handled?", a: "One technician, one bench, no onward handling. We do not browse or copy data beyond what the recovery requires. If your firm needs a written custody acknowledgement or a confirmed secure wipe before return, tell us when you book and we will provide it." },
      { q: "The MacBook is FileVault encrypted. Can you still recover it?", a: "Only with your password or recovery key. That is the point of the encryption and we would not want it otherwise. If the failure is on the board we can usually restore access to the storage, but the decryption still needs your credentials - we will be clear about that before you commit to anything." },
      { q: "How fast can you collect from DIFC?", a: "Usually within an hour of WhatsApp confirmation during business hours (9 am-10 pm Mon-Sat). DIFC is about 20 minutes from the workshop, and a lobby handover avoids the visitor-pass wait." },
      { q: "Can you recover to our own encrypted drive?", a: "Yes. Supply the destination drive and we will recover directly to it, then wipe the source Mac and confirm in writing if that is what you need." },
      { q: "Can you invoice the firm?", a: "Yes, on invoiced terms. Send the entity details on WhatsApp when you book the collection." },
      { q: "What does it cost?", a: "It depends on the failure mode. Diagnosis is free, the price is fixed in writing before any work starts, and if nothing is recovered there is no fee." },
      { q: "Do you provide a report of what was recovered?", a: "Yes. We confirm in writing what was recovered and what was not, which is usually what a compliance or IT team needs on file." },
      { q: "Can you repair the Mac afterwards?", a: "Yes, quoted separately after the recovery is confirmed, so the data decision and the hardware decision stay independent." },
    ],
    reviewIndexes: [3, 8, 14, 17, 22, 24],
  },
  {
    slug: "downtown-dubai",
    area: "Downtown Dubai",
    short: "Downtown",
    driveTime: "20 minutes",
    collectWindow: "Within 60 minutes",
    landmarkLine: "20 minutes from Burj Khalifa, Dubai Mall and the Downtown towers.",
    angle:
      "Downtown is a dense mix of residents, serviced apartments and small offices, and the recoveries reflect that spread - a resident's photo library one day, a consultancy's client files the next, a hotel guest's laptop the day after. The common thread is that almost nobody here has a local backup: storage is at a premium in Downtown apartments, so the external drive never got bought and iCloud only ever held the phone. When the Mac stops booting, what is on it is genuinely the only copy. We collect within about an hour and recover before we repair.",
    who:
      "Residents of the Downtown towers and Old Town, people in serviced apartments and hotels, and the small offices scattered through the area. Mostly MacBook Airs and Pros, a good number of them Apple silicon, where the soldered SSD means recovery has to happen on the board rather than by pulling a drive.",
    collection:
      "WhatsApp the tower and apartment - Burj Views, South Ridge, Standpoint, Old Town, the Address towers - and the courier meets you at the lobby, usually within the hour. Downtown parking and access are awkward, so reception handovers are fastest. Hotel and serviced-apartment guests can leave the Mac with the concierge under their name and we collect from the desk.",
    scenarios: [
      { title: "MacBook will not boot and holds the only copy of everything", body: "The standard Downtown case. Normally an SSD-controller or board fault with the storage intact behind it. We attempt recovery before any repair and confirm what came off before you decide anything else." },
      { title: "Dropped MacBook that stopped working", body: "Physical damage that took out the board or the display while leaving storage readable. Recovery is usually very achievable; whether the Mac itself is worth repairing is a separate question we answer honestly." },
      { title: "Guest or short-let laptop failing away from home", body: "A failure while travelling, with no backup and no home workshop. We collect from the hotel or serviced-apartment desk, recover to a drive you keep, and return the Mac to the same desk." },
    ],
    faqs: [
      { q: "How fast can you collect from Downtown Dubai?", a: "Usually within an hour of WhatsApp confirmation during business hours (9 am-10 pm Mon-Sat). Downtown is about 20 minutes from the workshop." },
      { q: "Can the concierge hand the Mac over for me?", a: "Yes. Authorise the concierge or building reception by name on WhatsApp and the courier collects from the desk. We send a photo confirming the handover and return to the same place." },
      { q: "I am staying in a hotel here and my MacBook died. Can you help?", a: "Yes, this is common. Leave it at the concierge under your name, tell us the hotel, and we collect, attempt recovery and return it to the same desk - usually inside 24-48 hours depending on the failure." },
      { q: "My MacBook Air will not turn on. Is the data lost?", a: "Usually not. A Mac that will not power on is most often a board fault with the storage intact. On Apple silicon the SSD is soldered, so it is board-level work - which we do, and most general shops do not." },
      { q: "What does Mac data recovery cost in Downtown?", a: "It depends on the failure. Diagnosis is free, the price is fixed in writing on WhatsApp before any work starts, and if we recover nothing there is no fee." },
      { q: "Is my data private?", a: "Yes. One bench, one technician, no copies beyond what the recovery needs. We will wipe the drive before return and confirm it if you ask." },
      { q: "I dropped it and now it will not start. Recoverable?", a: "Usually. Impact damage tends to break the board or the display rather than the storage itself. We recover first, then tell you honestly whether the Mac is worth repairing." },
      { q: "How long does a recovery take?", a: "A straightforward logical recovery is often same-day or next-day. Board-level work on a failed or liquid-damaged machine takes longer - typically 2-5 days - and we will give you a realistic timeline once we have seen it." },
    ],
    reviewIndexes: [4, 9, 13, 18, 21, 23],
  },
  {
    slug: "jbr",
    area: "JBR",
    short: "JBR",
    driveTime: "9 minutes",
    collectWindow: "Within 30 minutes",
    landmarkLine: "9 minutes from The Walk, The Beach and the JBR towers.",
    angle:
      "JBR is the closest beachfront community to the workshop and the recoveries here have a distinct flavour: sand, salt air and water. More JBR machines arrive liquid-damaged or corroded than from anywhere else in Dubai, and corrosion is the one failure mode where delay genuinely costs you data. A board left wet keeps deteriorating for as long as it stays wet. We collect within about 30 minutes, and for liquid cases we start the ultrasonic clean the same day rather than letting it sit overnight.",
    who:
      "Residents across the JBR towers, short-let and holiday-home guests, and the cafes, studios and small offices along The Walk and The Beach. Mostly MacBook Airs and Pros - a lot of them personal machines holding photos and freelance work - plus the occasional iMac from a shop or studio on the strip.",
    collection:
      "WhatsApp the tower - Sadaf, Bahar, Rimal, Murjan, Amwaj, Shams - and the courier meets you at the lobby, usually within 30 minutes during business hours. JBR is on the daily Marina run, so it is one of our quickest collections. If the Mac got wet, say so in the first message: it changes what we do first and how fast we need to see it.",
    scenarios: [
      { title: "Liquid damage - sea, pool or a spilled drink", body: "The signature JBR case. Do not switch it on to check and do not charge it; both spread the damage. Corrosion progresses for as long as the board stays wet, so a machine seen within 24 hours recovers far more often than one left a week." },
      { title: "Sand and salt-air corrosion over time", body: "Beachfront living pushes fine sand into fans and salt-laden humidity onto exposed board contacts. It shows up as intermittent ports, random shutdowns, then eventually a board that will not start - with the storage still perfectly intact behind it." },
      { title: "MacBook will not boot with no obvious cause", body: "An SSD-controller or power fault. On Apple silicon and T2 machines the storage is soldered, so the recovery happens on the board itself rather than by removing a drive." },
    ],
    faqs: [
      { q: "My MacBook got wet at the beach. What do I do right now?", a: "Switch it off and leave it off. Do not plug it in to charge and do not put it in rice. Message us immediately - corrosion is time-sensitive and the difference between 24 hours and a week is often the difference between recovering everything and recovering nothing." },
      { q: "How fast can you collect from JBR?", a: "Usually within 30 minutes of WhatsApp confirmation during business hours (9 am-10 pm Mon-Sat). JBR is about 9 minutes from the workshop and sits on the daily Marina loop." },
      { q: "Is liquid-damaged data actually recoverable?", a: "Often yes. Liquid usually kills the board long before it reaches the storage, so once the board is ultrasonic-cleaned we can frequently read the SSD. We will tell you the realistic odds after the free diagnosis rather than take your money on a long shot." },
      { q: "What does Mac data recovery cost in JBR?", a: "It depends on the failure - a logical recovery and a corroded board are very different jobs. Diagnosis is free, the price is fixed in writing first, and if nothing is recovered there is no fee." },
      { q: "Can you collect from a holiday let or short stay?", a: "Yes. Leave it with the building reception or the host under your name, tell us the tower on WhatsApp, and we collect and return to the same place." },
      { q: "The SSD is soldered on my MacBook Air. Does that change things?", a: "It changes the method, not the outcome. On Apple silicon and T2 Macs the storage cannot be pulled out and read elsewhere, so recovery is done at board level on our bench. It is specialist work that most general laptop shops do not attempt." },
      { q: "Is my data kept private?", a: "Yes. One technician, one bench, no copies beyond what the recovery requires. We will securely wipe the Mac before returning it if you ask, and confirm when it is done." },
      { q: "Can you repair the MacBook after recovering the data?", a: "Yes. Data first and confirmed with you, then a separate written quote for the repair - on a badly corroded machine the honest answer is sometimes that the data is worth saving and the Mac is not." },
    ],
    reviewIndexes: [0, 7, 11, 19, 20, 25],
  },
];
