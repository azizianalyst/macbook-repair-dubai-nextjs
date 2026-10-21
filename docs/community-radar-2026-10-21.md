# Apple Community radar: what people are asking before they search

**21 October 2026.** Source: discussions.apple.com, the Mac boards (MacBook Neo, MacBook Air, MacBook Pro), pages 1–2 of each, plus 16 threads read in full. Boards checked at least 2 seconds apart.

## Why this list exists
When a new Mac ships, owners describe the fault in a forum weeks before the same words show up in Google. A page that already answers the question when the search starts gets the first impressions. The thread link is the proof of demand; the "today's status" column is what our site has now; the recommendation is additive unless marked otherwise.

## What's on the boards right now (21 Oct)

Pattern across all three boards:
- **MacBook Neo** threads are mostly set-up and software (passwords, Touch ID, Bluetooth, printing). The hardware ones are new and have thin answers: a mechanical trackpad that feels different, unexpected shutdowns after lid close, a boot into macOS Recovery under heavy browser load, a random power-off to the Apple logo, uneven brightness on a black screen.
- **MacBook Air** threads: M4 coil whine (two owners, Apple diagnostics "found nothing"), M5 right-palmrest rattle (fixed by tightening a bottom-case screw), "Liquid detected in USB-C port" alert after an Apple liquid repair, thin vertical line on an M2 panel, MagSafe light staying amber with the 80% charge limit.
- **MacBook Pro** threads: M5 Max kernel panics with Thunderbolt 5 docks and Dell P2715Q displays (iVanky, Anker and CalDigit all affected, `ACIO0 Recoverable Panic assert_id=9450`, 20 replies), M4 14-inch crashing with WindowServer errors after macOS 27.0.1 "Golden Gate", 2019 16-inch waking in a bag and draining to 0% (answer: a slightly swollen battery lifts the lid), 13-inch left dead for weeks and won't charge (deep-discharged battery, trickle charge overnight), M3 random freezes, speaker crackle (Spotify equaliser, not hardware), 2017 15-inch white screen at boot.

## Candidate topics, scored

Score = how new it is × how likely it becomes a Dubai repair enquiry × how thin the existing answers are. Owner page per the no-cannibalisation rule.

| # | Thread (date) | Board | What we have today | Recommendation | Score |
|---|---|---|---|---|---|
| 1 | [M5 Max kernel panic with TB5 dock + Dell P2715Q](https://discussions.apple.com/thread/256367499) (29 Sep → 19 Oct, 20 replies, 3 dock brands) | Pro | `/blog/macbook-pro-m5-external-monitor-not-working-dubai/` mentions TB5 dock firmware; no page covers the panic itself or the assert string | **Add a section** to the M5 external-monitor post: "Mac restarts the moment a monitor is plugged into the dock" with the assert text, the workaround (display straight into the Mac, or HDMI from the dock), and when it's a board fault vs firmware. Record "macbook pro m5 kernel panic thunderbolt dock" as a secondary keyword of that post | 9 |
| 2 | [MacBook Air M4 high-pitched noise with brightness/workload](https://discussions.apple.com/thread/256365973) (27 Sep, second owner 21 Oct) | Air | Nothing on coil whine anywhere (0 hits) | **New post** owned by the Air cluster: "MacBook Air M4 coil whine / high-pitched noise". Explains why it tracks brightness (display driver inductors) and load (power stages), what Apple's diagnostic can't hear, when it's a logic board swap. Bench facts needed from Aziz first | 8 |
| 3 | [Neo shuts down after lid close/open; magnetic interference](https://discussions.apple.com/thread/256377745) (17 Oct) and [Neo turns off, Apple logo](https://discussions.apple.com/thread/256369639) (3 Oct) | Neo | `/macbook-neo-repair-dubai/` has no lid, sleep or shutdown content | **Add a section** to the Neo page: "MacBook Neo shuts down or sleeps on its own": lid angle sensor, nearby magnets (bags, stands, sewing machines, iPad covers), then battery/board. Links to `/macbook-not-turning-on-dubai/` | 8 |
| 4 | [Pro 2019 16" turns on in bag, battery 0%](https://discussions.apple.com/thread/256378497) (18 Oct) | Pro | Swollen-battery content exists (10+ hits) but nowhere says "the lid lifts, the Mac wakes, the battery drains" | **Add a section + FAQ** to `/macbook-battery-replacement-dubai/`: "My MacBook wakes up in the bag and drains to 0%" as an early swelling sign. Also fits `/blog/macbook-battery-health-check-guide` | 7 |
| 5 | [Liquid detected in USB-C port after Apple repair](https://discussions.apple.com/thread/256379579) (20 Oct) | Air | Water-damage page never mentions the macOS liquid-detection alert (0 hits) | **Add a section** to `/macbook-water-damage-repair-dubai/`: "What the 'Liquid detected in USB-C port' alert means" (Sequoia and later, Neo/Air/Pro), what to do, when the port itself needs replacing. Pairs with the "liquid damage" wording gap already in `content-gap-2026-10-21.md` | 7 |
| 6 | [MacBook Air M5 right palmrest clicking/hollow](https://discussions.apple.com/thread/256309632) (Jun → 20 Oct, "me too") | Air | Nothing on rattle or loose bottom-case screws | **Add to** `/blog/macbook-air-m5-common-problems-dubai/`: "Right palm-rest clicks or rattles" (loose P5 pentalobe screw under the right side, check before assuming a damaged chassis). Short, honest, cheap fix | 6 |
| 7 | [Pro 14" M4 crashing after macOS 27.0.1](https://discussions.apple.com/thread/256379509) (20 Oct) | Pro | No page mentions 27.0.1, Golden Gate or WindowServer | **Add a dated note** to `/blog/macbook-pro-m4-common-problems-dubai/`: "Freezes and WindowServer restarts after 27.0.1": Safe Mode test, new-user test, then hardware. Mark the date; revisit when 27.1 ships | 6 |
| 8 | [Pro won't charge or turn on after weeks unused](https://discussions.apple.com/thread/256357394) (15 Sep, 3 "me too") | Pro | `/macbook-not-turning-on-dubai/` and deep-discharge mentions exist (6 hits); no "left in a drawer, now dead" section | **Add an FAQ** to `/macbook-not-turning-on-dubai/`: "Left unused for months, now won't charge": trickle overnight, then battery, then board. Dubai angle: summer travel, Mac left in a hot flat | 5 |
| 9 | [Neo trackpad click feels light or tight](https://discussions.apple.com/thread/256377399) (16 Oct) | Neo | Neo page mentions trackpad repair but not that it is a **mechanical** pad, not Force Touch | **Add 2 sentences + 1 FAQ** to `/macbook-neo-repair-dubai/`: the Neo click is mechanical, so "feels different" isn't a fault but a stiff or dead click is | 4 |
| 10 | [Neo display uneven brightness on black](https://discussions.apple.com/thread/256365273) (26 Sep) | Neo | `/macbook-neo-screen-repair-dubai/` has no uniformity content | **Add an FAQ** to the Neo screen page: backlight bleed vs panel fault, what we check | 4 |
| 11 | [Neo boots into Recovery under long Chrome/AI session](https://discussions.apple.com/thread/256377771) (17 Oct) | Neo | Nothing | Watch. One thread, no reply yet. If it repeats, add to the Neo logic-board page (memory pressure on the 8 GB configuration) | 3 |
| 12 | [Air M2 thin vertical line](https://discussions.apple.com/thread/256378135), [Air lines](https://discussions.apple.com/thread/256379744) | Air | Covered: `/blog/macbook-air-m2-screen-lines-dubai/` | No action | 0 |
| 13 | [Speakers popping/crackling](https://discussions.apple.com/thread/256362591) | Pro | Covered: `/macbook-speaker-repair-dubai/` (crackle, 5 hits) | Optional: one FAQ line "try resetting the Spotify equaliser first" | 1 |
| 14 | [MagSafe stays amber with 80% limit](https://discussions.apple.com/thread/256378262) | Air | Covered in spirit by `/blog/macbook-pro-m5-wont-charge-past-80-dubai/` | No action | 0 |

## Suggested order of work
1. Items 1, 3, 5 (sections on existing pages; no new URLs; strongest "nobody answers this" signal).
2. Item 2 (one new post, after Aziz confirms what the bench does for coil whine).
3. Items 4, 6, 7, 8, 9, 10 (FAQs and short sections, one commit each).
4. Re-run this radar every two weeks. The Neo board moves slowest (15 threads a fortnight), so the Neo list above is the complete set, not a sample.

## Rules applied
- No page is created by swapping a model name. Every recommendation is a distinct question with new information.
- Facts about what we do on the bench (coil whine, lid sensor, port replacement) must come from Aziz before they are written. The thread answers above are what Apple volunteers said, not our process.
- Owner pages follow `docs/keyword-page-map.csv`; secondary keywords get added there, not new rows for the same intent.
- Protected pages: none touched.
