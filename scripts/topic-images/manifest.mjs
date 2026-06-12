// Topic-image prompt system - 88 blueprint-style 2x2 infographics covering every
// URL topic cluster on the site. Style locked to the approved "favorite" prompt:
// white background, 2x2 grid, exploded views, color-coded engineering arrows.
// Composed prompt = STYLE_HEADER + 4 quadrants + STYLE_FOOTER.
// Output: public/images/topics/<file>.jpg (+ webp/avif responsive variants).

export const STYLE_HEADER =
  "Ultra-detailed technical engineering infographic, clean white background, divided into a precise 2×2 grid by sharp black separator lines. Blueprint-style industrial design visualization featuring photorealistic 3D renders, transparent cutaways, exploded views, dimensional annotations, technical callout boxes, measurement guides, and color-coded engineering arrows (red, blue, green, orange). Professional product design presentation, Apple-style industrial design documentation, high-end technical illustration.";

export const STYLE_FOOTER =
  "Highly detailed CAD visualization, industrial design presentation board, precision engineering drawing, exploded assembly diagrams, transparent materials, photorealistic rendering, ultra-sharp focus, clean typography, scientific infographic aesthetics, professional product teardown documentation, white paper style, 8K resolution, museum-quality technical illustration, symmetrical layout, exceptional clarity. " +
  // Guard rails learned from the June 2026 full-library audit - keep these:
  "IMPORTANT RULES: render every price in UAE dirhams with the prefix AED (never dollar signs, never USD). Never render the words 'TOP LEFT', 'TOP RIGHT', 'BOTTOM LEFT', 'BOTTOM RIGHT' or any layout or style directive as visible text in the image. No 'confidential', 'all rights reserved', copyright or revision-date footer bars. The current year is 2026 and the newest Apple chips are M5 (MacBook/iPad, 2026) and A19 Pro (iPhone 17 Pro, 2025) - never label current devices with older years. Show Apple devices only, never generic PC towers. NEVER invent specifications: no data-rate, wattage, nanometer-process, OS-version, chip-name, model-number or year claims beyond those explicitly stated in this prompt - label physical parts only and leave specification values out unless given here.";

export function composePrompt(spec) {
  const [tl, tr, bl, br] = spec.quads;
  return `${STYLE_HEADER} TOP LEFT: ${tl}. TOP RIGHT: ${tr}. BOTTOM LEFT: ${bl}. BOTTOM RIGHT: ${br}. ${STYLE_FOOTER}`;
}

// Moderation fallback: genericize brand names if a prompt is rejected.
export function genericize(prompt) {
  return prompt
    .replace(/iPhone 17 Pro|iPhone Air|iPhone/g, "modern flagship smartphone")
    .replace(/MacBook Pro|MacBook Air|MacBook/g, "premium aluminum laptop")
    .replace(/iPad Pro|iPad Air|iPad mini|iPad/g, "professional tablet")
    .replace(/iMac/g, "all-in-one desktop computer")
    .replace(/Mac mini/g, "compact desktop computer")
    .replace(/Mac Pro/g, "professional tower workstation")
    .replace(/Mac Studio/g, "compact professional workstation")
    .replace(/Apple-style/g, "premium minimalist");
}

export const IMAGES = [
  // ============ CLUSTER: iPhone services (13) ============
  {
    file: "iphone-screen-repair-dubai",
    cluster: "iphone-services",
    alt: "iPhone screen repair Dubai - OLED display assembly exploded-view engineering infographic",
    quads: [
      "iPhone 17 Pro in angled perspective with its Super Retina OLED display lifted away from the titanium frame, display ribbon cables, perimeter adhesive channel and Dynamic Island cutout annotated with dimension lines",
      "Exploded vertical layer stack of the OLED display assembly - ceramic cover glass, polarizer, OLED panel, touch digitizer, metal shield plate - each layer floating with thickness measurements and callout labels",
      "Gloved technician hands using an ESD-safe suction cup and precision spudger to release the display, heat plate softening adhesive below, torque-controlled pentalobe screwdriver beside the phone",
      "Cross-section diagram of the display-to-frame waterproof seal with adhesive channel, callout boxes for True Tone sensor recalibration and Face ID flood illuminator clearance"
    ],
  },
  {
    file: "iphone-battery-replacement-dubai",
    cluster: "iphone-services",
    alt: "iPhone battery replacement Dubai - lithium battery removal and health diagram infographic",
    quads: [
      "iPhone 17 Pro opened flat with its L-shaped lithium-ion battery exposed, battery flex connector, adhesive pull-tabs and metal cowling labeled with engineering callouts",
      "Exploded battery pack showing stacked lithium-polymer cells, battery management board, flex connector and capacity, voltage and watt-hour annotations",
      "Technician hands pulling stretch-release adhesive strips with insulated tweezers, fresh replacement battery floating above with alignment arrows",
      "Battery health engineering chart - charge-cycle degradation curve, maximum capacity percentage gauge, and a cross-section callout of a swollen cell safety warning"
    ],
  },
  {
    file: "iphone-charging-port-repair-dubai",
    cluster: "iphone-services",
    alt: "iPhone charging port repair Dubai - USB-C port assembly microsoldering infographic",
    quads: [
      "Macro view of an iPhone 17 Pro bottom edge with the USB-C charging port assembly highlighted in situ, speaker mesh and microphone holes annotated",
      "Exploded USB-C port flex assembly - connector housing, rubber gasket, microphone module, antenna ribbon - floating with assembly-order arrows",
      "Microscope soldering station view of the port flex being replaced, hot-air rework nozzle, flux pen and ESD tweezers in frame",
      "USB-C connector pin-out schematic with power and data lines color-coded red, blue and green, charge-current measurement table beside"
    ],
  },
  {
    file: "iphone-camera-repair-dubai",
    cluster: "iphone-services",
    alt: "iPhone camera repair Dubai - 48MP triple lens module exploded-view infographic",
    quads: [
      "iPhone 17 Pro rear camera plateau with the triple 48MP lens module raised in exploded view above the titanium body, sapphire lens covers floating",
      "Longitudinal cutaway through one camera stack - sapphire cover, lens elements, sensor-shift optical stabilizer coils, image sensor and ribbon cable, every element labeled",
      "Technician under a trinocular microscope aligning a replacement camera module with fine tweezers, ribbon connector magnified in an inset circle",
      "Optical engineering diagram of the focal path through the lens groups with color-coded light rays and field-of-view angle annotations"
    ],
  },
  {
    file: "iphone-face-id-repair-dubai",
    cluster: "iphone-services",
    alt: "iPhone Face ID repair Dubai - TrueDepth sensor module engineering infographic",
    quads: [
      "iPhone 17 Pro front top section with the Dynamic Island sensor cluster exposed - dot projector, infrared camera and flood illuminator each labeled with callout boxes",
      "Exploded TrueDepth camera module showing lens barrels, infrared emitter die, proximity sensor and flex cable in floating assembly order",
      "Precision repair of the front sensor flex under a microscope, technician probing connector with multimeter, magnified inset of the fragile dot-projector window",
      "Engineering diagram of the infrared dot pattern projecting onto a wireframe human face with depth-map grid and recognition flow arrows"
    ],
  },
  {
    file: "iphone-water-damage-repair-dubai",
    cluster: "iphone-services",
    alt: "iPhone water damage repair Dubai - corrosion treatment and ultrasonic cleaning infographic",
    quads: [
      "Opened iPhone with logic board corrosion spots highlighted by red inspection circles and a magnifier overlay, liquid contact indicators shown triggered",
      "Cutaway of a logic board submerged in an ultrasonic cleaning bath with cavitation bubbles illustrated and temperature annotation",
      "Technician brushing board connectors with isopropyl alcohol under a microscope, before-and-after corrosion inset panels",
      "Liquid ingress path diagram through speaker mesh, SIM tray seal and charging port with blue water-flow arrows and gasket cross-sections"
    ],
  },
  {
    file: "iphone-back-glass-repair-dubai",
    cluster: "iphone-services",
    alt: "iPhone back glass repair Dubai - laser removal process engineering infographic",
    quads: [
      "iPhone Air rear panel with a shattered back glass crack pattern mapped by stress-line annotations radiating from impact point",
      "Laser separation machine raster path diagram over the rear panel, laser head shown with beam, heat-affected zone color map",
      "Technician lifting cleaned glass fragments with tweezers, new back glass panel with pre-cut adhesive sheet floating above in alignment",
      "Cross-section of the glass-to-chassis bond showing the MagSafe magnet array ring, wireless charging coil and adhesive layer thicknesses"
    ],
  },
  {
    file: "iphone-speaker-audio-repair-dubai",
    cluster: "iphone-services",
    alt: "iPhone speaker and earpiece repair Dubai - acoustic module exploded infographic",
    quads: [
      "iPhone 17 Pro opened with bottom loudspeaker assembly floating in exploded view and the earpiece module lifted above the display top edge",
      "Cutaway through the loudspeaker - diaphragm, voice coil, neodymium magnet, acoustic mesh and sealed back-volume chamber, all labeled",
      "Technician testing audio output with a frequency analyzer screen showing response curve, replacement speaker module beside",
      "Acoustic engineering diagram - waveform plot, microphone port routing channels through the chassis and water-resistant mesh cross-section"
    ],
  },
  {
    file: "iphone-logic-board-repair-dubai",
    cluster: "iphone-services",
    alt: "iPhone logic board microsoldering repair Dubai - A19 Pro board engineering infographic",
    quads: [
      "iPhone 17 Pro logic board lifted from the chassis with A19 Pro chip, NAND storage and modem packages labeled by callout boxes",
      "Cutaway of the stacked double-decker board sandwich separated to reveal the interposer frame and inter-board connections",
      "Microsoldering workstation under trinocular microscope - hot air station, jumper wire being laid on a pad, flux and solder paste in frame",
      "Power-rail schematic blueprint with measurement probe points, voltage annotations and color-coded current-flow arrows"
    ],
  },
  {
    file: "iphone-buttons-repair-dubai",
    cluster: "iphone-services",
    alt: "iPhone power and volume button repair Dubai - button mechanism cutaway infographic",
    quads: [
      "iPhone 17 Pro side profile with Action button, volume buttons and power button exploded outward on their flex cables, gaskets floating",
      "Cutaway through a button mechanism - tactile metal dome, actuator plunger, waterproof gasket and flex contact, force arrows in red",
      "Technician threading a replacement side-button flex cable into the titanium frame channel with fine tweezers",
      "Click-force engineering chart with actuation curve plus a labeled drawing of the SIM tray ejector mechanism"
    ],
  },
  {
    file: "iphone-data-recovery-dubai",
    cluster: "iphone-services",
    alt: "iPhone data recovery Dubai - NAND chip-off recovery process infographic",
    quads: [
      "iPhone logic board with the NAND storage chip highlighted and being lifted by a hot-air nozzle, shield removed beside",
      "Cutaway of the NAND package showing stacked memory dies and gold wire bonds with capacity annotation",
      "Chip reading rig with the NAND seated in a programmer socket, data stream visualized flowing to a workstation screen",
      "Data recovery flow diagram - device, NAND extraction, raw image read, file-system reconstruction, recovered files on external drive - connected by green arrows"
    ],
  },
  {
    file: "iphone-unlock-software-dubai",
    cluster: "iphone-services",
    alt: "iPhone software repair and unlock service Dubai - diagnostic workstation infographic",
    quads: [
      "iPhone 17 Pro displaying an abstract wireframe lock interface, tethered by cable to a diagnostics laptop with progress data",
      "Illustrative cutaway of the secure storage region on the logic board with encrypted-data block diagram",
      "Technician at a software workstation with the phone in a fixture, firmware restore progress bars and log console on screen",
      "Engineering flowchart of device states - locked, recovery, restore, activated - with decision diamonds and color-coded paths"
    ],
  },
  {
    file: "iphone-diagnostic-dubai",
    cluster: "iphone-services",
    alt: "iPhone full diagnostic service Dubai - thermal imaging test bench infographic",
    quads: [
      "iPhone 17 Pro on a test bench with a thermal camera overlay revealing a heat hotspot on the board in orange-red gradient",
      "Logic board with multimeter probe points annotated, measured voltage values in callout boxes at each test pad",
      "Technician running a full hardware test matrix - camera, sensors, battery, display - shown as a checklist on a bench monitor",
      "Diagnostic decision-tree diagram with pass and fail branches color-coded green and red ending in repair recommendations"
    ],
  },

  // ============ CLUSTER: iPad services (8) ============
  {
    file: "ipad-screen-repair-dubai",
    cluster: "ipad-services",
    alt: "iPad screen repair Dubai - tandem OLED display assembly exploded infographic",
    quads: [
      "iPad Pro 13-inch M5 with its Ultra Retina tandem OLED display lifted from the aluminum chassis at an angle, perimeter adhesive and flex cables annotated",
      "Exploded layer stack of the tandem OLED panel - cover glass, dual OLED emission layers, touch layer, shield - floating with thickness dimensions",
      "Technician releasing display adhesive with a heated separation machine and plastic picks, suction lifter holding glass edge",
      "Cross-section of the laminated display bond versus a cracked-glass-only damage map with repair-path arrows"
    ],
  },
  {
    file: "ipad-battery-replacement-dubai",
    cluster: "ipad-services",
    alt: "iPad battery replacement Dubai - dual-cell battery removal engineering infographic",
    quads: [
      "iPad Pro M5 opened with its slim dual-cell lithium battery exposed across the chassis, logic board offset to one side, battery connector labeled",
      "Exploded view of the two battery cells with management board, flex and watt-hour annotation floating above the aluminum shell",
      "Technician sliding battery-release cards under cell adhesive with the display safely propped, torque driver beside",
      "Battery capacity engineering chart with cycle-count curve and a thin-cell cross-section showing swelling clearance tolerances"
    ],
  },
  {
    file: "ipad-charging-port-repair-dubai",
    cluster: "ipad-services",
    alt: "iPad charging port repair Dubai - USB-C Thunderbolt port assembly infographic",
    quads: [
      "Macro of an iPad Pro bottom edge with the USB-C Thunderbolt port assembly highlighted inside the chassis, speaker housings either side",
      "Exploded port assembly with connector, gasket and flex ribbon in assembly order with arrows",
      "Microscope view of the port being microsoldered to the board, hot-air nozzle and flux in frame",
      "Thunderbolt pin-out schematic with data-lane speeds and charging wattage table color-coded"
    ],
  },
  {
    file: "ipad-water-damage-repair-dubai",
    cluster: "ipad-services",
    alt: "iPad water damage repair Dubai - board corrosion treatment infographic",
    quads: [
      "Opened iPad with corrosion bloom on the logic board highlighted by red inspection circles and moisture indicator callouts",
      "Logic board in an ultrasonic bath cutaway with cavitation illustration and cleaning solution annotation",
      "Technician inspecting cleaned board under microscope with before-and-after inset panels",
      "Liquid ingress diagram showing entry paths at speaker grilles and port with blue flow arrows"
    ],
  },
  {
    file: "ipad-camera-audio-repair-dubai",
    cluster: "ipad-services",
    alt: "iPad camera and speaker repair Dubai - module exploded-view infographic",
    quads: [
      "iPad Pro rear camera module raised in exploded view with lens, sensor and LiDAR scanner labeled",
      "Cutaway of one landscape stereo speaker chamber - diaphragm, magnet, sealed volume - with acoustic arrows",
      "Technician swapping the front Center Stage camera module under magnification",
      "Audio response curve chart beside an optical path diagram of the camera lens stack"
    ],
  },
  {
    file: "ipad-buttons-connector-repair-dubai",
    cluster: "ipad-services",
    alt: "iPad button and Smart Connector repair Dubai - mechanism cutaway infographic",
    quads: [
      "iPad Air M3 edge with power button with Touch ID and volume buttons exploded outward on flex cables",
      "Cutaway of the top button showing fingerprint sensor stack, tactile dome and gasket layers labeled",
      "Technician replacing the Smart Connector three-pin pad assembly on the chassis edge",
      "Apple Pencil magnetic charging zone diagram with coil alignment and pin-out annotations"
    ],
  },
  {
    file: "ipad-software-icloud-dubai",
    cluster: "ipad-services",
    alt: "iPad software reset and unlock service Dubai - restore workstation infographic",
    quads: [
      "iPad Pro tethered to a diagnostics workstation showing an abstract wireframe restore interface",
      "Block diagram of storage regions - system, data, secure - illustrated as a transparent 3D stack",
      "Technician monitoring firmware restore progress bars and console logs on a bench monitor",
      "Flowchart of recovery states with decision diamonds and green success path"
    ],
  },
  {
    file: "ipad-diagnostic-dubai",
    cluster: "ipad-services",
    alt: "iPad full diagnostic service Dubai - test bench thermal analysis infographic",
    quads: [
      "iPad Pro M5 on a test bench under a thermal camera with heat map overlay on the M5 chip area",
      "Logic board test points annotated with measured voltages in callout boxes",
      "Technician running display, touch, camera and battery test patterns shown on the iPad screen",
      "Diagnostic checklist decision tree with color-coded pass and fail branches"
    ],
  },

  // ============ CLUSTER: iPad models (4) ============
  {
    file: "ipad-pro-m5-repair-dubai",
    cluster: "ipad-models",
    alt: "iPad Pro M5 repair Dubai - full teardown engineering infographic",
    quads: [
      "iPad Pro 13-inch M5 in angled perspective with tandem OLED display removed, exposing the slim internal architecture - battery, M5 logic board, speaker boxes labeled",
      "Exploded full assembly - display, midframe shields, battery cells, logic board, cameras - floating in vertical order with dimension lines",
      "M5 chip package cutaway with CPU, GPU and Neural Engine regions color-mapped",
      "Thickness cross-section of the 5.1 mm chassis with component height tolerances annotated"
    ],
  },
  {
    file: "ipad-air-m3-repair-dubai",
    cluster: "ipad-models",
    alt: "iPad Air M3 repair Dubai - internal architecture engineering infographic",
    quads: [
      "iPad Air 13-inch M3 with display lifted, internal layout exposed and labeled - battery, board, antenna windows",
      "Exploded view of display, battery and logic board layers with assembly arrows",
      "Technician hands replacing the display on an ESD mat with alignment guides",
      "Comparison cross-section diagram of laminated display versus separated glass construction"
    ],
  },
  {
    file: "ipad-mini-7-repair-dubai",
    cluster: "ipad-models",
    alt: "iPad mini 7 repair Dubai - compact tablet teardown infographic",
    quads: [
      "iPad mini 7 in hand-scale perspective with display raised, compact internals exposed and labeled",
      "Exploded stack of the 8.3-inch display, battery and A17 Pro logic board",
      "Macro of the USB-C port and speaker assembly with screws and gaskets floating",
      "Dimensional drawing of the compact chassis with component packaging annotations"
    ],
  },
  {
    file: "ipad-standard-repair-dubai",
    cluster: "ipad-models",
    alt: "iPad 11th generation repair Dubai - tablet repair engineering infographic",
    quads: [
      "iPad 11th generation with display separated showing air-gap glass construction, digitizer flex labeled",
      "Exploded view of cover glass, LCD panel and chassis as three distinct floating layers",
      "Technician releasing cover glass with heat and picks, crack pattern annotated",
      "Cost-efficient repair path diagram - glass-only versus full display replacement - with decision arrows"
    ],
  },

  // ============ CLUSTER: MacBook & Mac services (22) ============
  {
    file: "macbook-trackpad-repair-dubai",
    cluster: "macbook-services",
    alt: "MacBook trackpad repair Dubai - Force Touch haptic engine exploded infographic",
    quads: [
      "MacBook Pro 16-inch M5 in space black opened bottom-up with the Force Touch trackpad assembly highlighted beneath the battery",
      "Exploded trackpad - glass surface, force sensors, haptic engine electromagnetic coils, mounting frame - floating with labels",
      "Technician adjusting trackpad flex cable and torque screws with the bottom case removed",
      "Haptic feedback engineering diagram showing force-sensor zones and click-response waveform"
    ],
  },
  {
    file: "macbook-hinge-repair-dubai",
    cluster: "macbook-services",
    alt: "MacBook hinge repair Dubai - clutch mechanism cutaway engineering infographic",
    quads: [
      "MacBook Air 15-inch M4 side profile with the display hinge area exposed in cutaway, clutch barrel visible",
      "Exploded hinge mechanism - torque clutch, mounting brackets, screws - with rotation-angle arc annotations",
      "Technician aligning a replacement hinge with the display cable routed through the clutch channel",
      "Torque specification chart and hinge-tension cross-section diagram with force arrows"
    ],
  },
  {
    file: "macbook-flexgate-repair-dubai",
    cluster: "macbook-services",
    alt: "MacBook flexgate display cable repair Dubai - backlight ribbon engineering infographic",
    quads: [
      "MacBook Pro with display half-open and the thin display flex cables wrapping the hinge highlighted in red warning callout",
      "Macro cutaway of the backlight ribbon cable showing wear point where it bends over the board edge",
      "Microscope view of the display cable connector being re-worked, stage-light symptom inset on a small screen",
      "Bend-radius engineering diagram comparing worn versus extended replacement cable with stress color map"
    ],
  },
  {
    file: "macbook-ssd-upgrade-dubai",
    cluster: "macbook-services",
    alt: "MacBook SSD upgrade Dubai - NVMe storage architecture infographic",
    quads: [
      "MacBook Pro logic board with NAND storage packages highlighted and one chip raised in exploded view",
      "Cutaway of a NAND package showing stacked dies, controller die and wire bonds with capacity labels",
      "Technician at a BGA rework station upgrading storage chips under microscope",
      "Storage speed bar chart - read and write throughput - beside a capacity upgrade path diagram 512GB to 4TB"
    ],
  },
  {
    file: "macbook-ram-upgrade-dubai",
    cluster: "macbook-services",
    alt: "Mac RAM and unified memory upgrade Dubai - memory architecture infographic",
    quads: [
      "M5 chip package cutaway showing unified memory dies mounted beside the processor die on the same substrate, labeled",
      "Older Intel MacBook bottom view with removable SODIMM memory module raised in exploded view for comparison",
      "Technician seating a memory module into a Mac mini board socket with alignment arrows",
      "Memory bandwidth engineering chart comparing unified memory versus socketed RAM with color-coded bars"
    ],
  },
  {
    file: "macbook-camera-repair-dubai",
    cluster: "macbook-services",
    alt: "MacBook camera repair Dubai - 12MP Center Stage webcam module infographic",
    quads: [
      "MacBook Pro display bezel cutaway with the 12MP camera module exposed in the notch area, labeled",
      "Exploded camera module - lens, sensor, mounting bracket, ribbon - floating in order",
      "Technician threading the camera flex through the hinge with display shell open on bench",
      "Field-of-view optical diagram with Center Stage framing zones illustrated"
    ],
  },
  {
    file: "macbook-speaker-repair-dubai",
    cluster: "macbook-services",
    alt: "MacBook speaker repair Dubai - six-speaker array exploded infographic",
    quads: [
      "MacBook Pro 16-inch top case with keyboard removed showing the six-speaker array placement either side, force-cancelling woofers labeled",
      "Cutaway of one woofer pair showing opposed diaphragms cancelling vibration, magnets and coils annotated",
      "Technician replacing a speaker module with adhesive frame floating above its bay",
      "Frequency response curve chart with woofer and tweeter ranges shaded in color bands"
    ],
  },
  {
    file: "macbook-microphone-repair-dubai",
    cluster: "macbook-services",
    alt: "MacBook microphone repair Dubai - studio mic array engineering infographic",
    quads: [
      "MacBook Air top case edge cutaway revealing the three-microphone studio array beside the speaker grille, port channels labeled",
      "Exploded MEMS microphone - port hole, membrane, ASIC die - in extreme macro with dimension lines",
      "Technician probing the microphone flex with a multimeter, audio waveform on bench scope",
      "Beamforming diagram showing directional pickup pattern lobes in color-coded arcs"
    ],
  },
  {
    file: "macbook-touch-id-repair-dubai",
    cluster: "macbook-services",
    alt: "MacBook Touch ID power button repair Dubai - sensor stack infographic",
    quads: [
      "MacBook Pro top case corner with the Touch ID power button raised in exploded view above its keyboard well",
      "Cutaway of the button stack - sapphire surface, capacitive ring, fingerprint sensor die, tactile dome - labeled",
      "Technician transferring the paired sensor with serialized pairing callout warning box",
      "Fingerprint ridge-detection diagram with capacitive field lines illustrated"
    ],
  },
  {
    file: "macbook-touch-bar-repair-dubai",
    cluster: "macbook-services",
    alt: "MacBook Touch Bar repair Dubai - OLED strip replacement infographic",
    quads: [
      "MacBook Pro top case with the Touch Bar OLED strip lifted in exploded view above the function row",
      "Cutaway of the strip - cover glass, OLED panel, touch layer, adhesive - with thickness annotations",
      "Technician separating the strip with a heated blade and lifting tool",
      "Connector routing diagram showing the Touch Bar flex path to the logic board"
    ],
  },
  {
    file: "macbook-data-recovery-dubai",
    cluster: "macbook-services",
    alt: "MacBook data recovery Dubai - SSD chip-off recovery engineering infographic",
    quads: [
      "Dead MacBook logic board with NAND chips highlighted, one chip lifted by hot-air rework",
      "Recovery rig with NAND in programmer socket, raw data stream visualized to a workstation",
      "Technician transferring recovered data through a donor-board fixture to an external SSD",
      "Recovery pipeline flow diagram - diagnosis, extraction, reconstruction, verified files - with green progress arrows"
    ],
  },
  {
    file: "macbook-diagnostic-dubai",
    cluster: "macbook-services",
    alt: "MacBook full diagnostic Dubai - thermal imaging board analysis infographic",
    quads: [
      "MacBook Pro M5 open on a test bench with thermal camera overlay revealing a hotspot in orange-red",
      "Logic board diagnostic map with probe test points and measured voltages in callout boxes",
      "Technician running a hardware test suite shown on the MacBook display - battery, fans, sensors checklists",
      "Fault-isolation decision tree with color-coded branches ending in repair recommendations"
    ],
  },
  {
    file: "macbook-wifi-bluetooth-repair-dubai",
    cluster: "macbook-services",
    alt: "MacBook WiFi Bluetooth repair Dubai - antenna module engineering infographic",
    quads: [
      "MacBook Pro hinge cover removed exposing the antenna modules in the display hinge channel, coaxial cables labeled",
      "Exploded wireless card region of the board with RF shields lifted, WiFi 7 chipset labeled",
      "Technician reseating antenna connectors with a spudger, signal meter on bench showing bars",
      "RF propagation diagram with 2.4, 5 and 6 GHz bands color-coded and antenna gain arcs"
    ],
  },
  {
    file: "macbook-usbc-port-repair-dubai",
    cluster: "macbook-services",
    alt: "MacBook USB-C Thunderbolt port repair Dubai - port assembly infographic",
    quads: [
      "MacBook Pro side edge cutaway with Thunderbolt 5 ports and MagSafe 3 connector exposed in the chassis, labeled",
      "Exploded port assembly - connector, retimer chip region, mounting bracket, screws - in assembly order",
      "Technician replacing a port flex under magnification with new gasket floating",
      "Thunderbolt lane schematic with bandwidth table and MagSafe pin-out with charge-wattage annotations"
    ],
  },
  {
    file: "macbook-gpu-repair-dubai",
    cluster: "macbook-services",
    alt: "MacBook GPU repair Dubai - graphics silicon engineering infographic",
    quads: [
      "M5 Max chip package macro with the GPU core region color-mapped and highlighted on the die shot",
      "Cross-section of the chip package - die, interposer, substrate, solder balls - with a reflow heat profile curve beside",
      "BGA rework station with hot-air dome over a board, thermal profile graph on its display",
      "GPU performance chart with thermal throttle curve and repair-versus-replace decision arrows"
    ],
  },
  {
    file: "macbook-thermal-paste-dubai",
    cluster: "macbook-services",
    alt: "MacBook thermal paste replacement Dubai - heatsink service infographic",
    quads: [
      "MacBook Pro logic board with heatsink lifted in exploded view revealing dried thermal compound on the M5 chip",
      "Cutaway of the cooling stack - die, thermal interface layer, vapor chamber, heat pipe, fins - with heat-flow arrows in red to blue gradient",
      "Technician applying fresh thermal compound in a precise pattern, spreader tool beside",
      "Temperature comparison chart before and after service with degree annotations"
    ],
  },
  {
    file: "macbook-virus-removal-dubai",
    cluster: "macbook-services",
    alt: "Mac virus and malware removal Dubai - security cleanup infographic",
    quads: [
      "MacBook Air with an abstract malware scan visual on screen - file tree with red flagged nodes being swept",
      "Transparent 3D block diagram of system layers - apps, launch agents, extensions - with threat locations marked red",
      "Technician reviewing a scan report on a bench monitor with quarantine list and green clean checkmarks",
      "Security hardening checklist diagram - updates, permissions, browser cleanup - in flow order with green arrows"
    ],
  },
  {
    file: "macos-reinstall-dubai",
    cluster: "macbook-services",
    alt: "macOS reinstall service Dubai - clean install workflow infographic",
    quads: [
      "MacBook Pro showing an abstract wireframe installation progress interface, connected to a bootable installer drive",
      "Transparent 3D diagram of the SSD partition map - system volume, data volume, recovery - labeled",
      "Technician at a bench imaging multiple machines from a deployment server rack",
      "Install workflow flowchart - backup, erase, install, migrate, verify - with stage icons and green path"
    ],
  },
  {
    file: "mac-data-migration-dubai",
    cluster: "macbook-services",
    alt: "Mac setup and data migration service Dubai - transfer workflow infographic",
    quads: [
      "Two MacBooks side by side connected by Thunderbolt cable with data visualized flowing between them as light streams",
      "Transparent stack diagram of migrated content - apps, documents, photos, settings - moving between drive icons",
      "Technician verifying a completed transfer checklist on the new machine",
      "Migration timeline diagram with transfer-speed annotations and verification stage"
    ],
  },
  {
    file: "macbook-cleaning-service-dubai",
    cluster: "macbook-services",
    alt: "MacBook cleaning and maintenance service Dubai - internal dust removal infographic",
    quads: [
      "MacBook Pro bottom case removed showing dust-clogged fans and vents highlighted with red callouts",
      "Exploded fan assembly - blades, motor, housing - with dust layer illustrated before cleaning",
      "Technician cleaning fan blades with soft brush and filtered air blower, keyboard being detailed beside",
      "Airflow path diagram through intake vents, fans and exhaust with blue flow arrows and temperature drop annotations"
    ],
  },
  {
    file: "mac-performance-tune-dubai",
    cluster: "macbook-services",
    alt: "Mac performance tune-up service Dubai - optimization engineering infographic",
    quads: [
      "MacBook Air showing abstract performance dashboard - CPU, memory and disk activity graphs trending downward after tuning",
      "Transparent 3D view of an SSD with fragmented data blocks consolidating into ordered blocks",
      "Technician reviewing startup items and background process list on a bench monitor",
      "Before-and-after benchmark bar chart with boot time and app launch speed improvements annotated"
    ],
  },
  {
    file: "mac-activation-lock-dubai",
    cluster: "macbook-services",
    alt: "Mac activation lock removal Dubai - ownership verification workflow infographic",
    quads: [
      "MacBook Pro displaying an abstract wireframe lock screen interface with a document folder of ownership proof beside",
      "Block diagram of the activation state stored in the secure region of the board, illustrated transparently",
      "Technician verifying proof-of-purchase documents at a service counter with the device",
      "Unlock workflow flowchart - proof verification, request, removal, activated - with decision diamonds"
    ],
  },

  // ============ CLUSTER: iMac services (6) ============
  {
    file: "imac-screen-repair-dubai",
    cluster: "imac-services",
    alt: "iMac screen repair Dubai - 24-inch 4.5K display panel exploded infographic",
    quads: [
      "iMac 24-inch M4 in blue with its 4.5K Retina display panel lifted away from the slim chassis, adhesive perimeter annotated",
      "Exploded display stack - cover glass laminated to LCD, backlight layers, chassis - floating with thickness dimensions",
      "Technician cutting display adhesive with a wheel tool, suction handles holding the panel",
      "Cross-section of the display-to-chassis adhesive bond with replacement tape channels color-marked"
    ],
  },
  {
    file: "imac-logic-board-repair-dubai",
    cluster: "imac-services",
    alt: "iMac logic board repair Dubai - M4 board engineering infographic",
    quads: [
      "iMac 24-inch M4 opened flat with the compact logic board exposed in the chin area, M4 chip and ports labeled",
      "Logic board lifted in exploded view with cooling fans and speaker assemblies floating around it",
      "Microsoldering work on the board under microscope with hot-air station",
      "Power-rail schematic with probe points and color-coded voltage annotations"
    ],
  },
  {
    file: "imac-ssd-ram-upgrade-dubai",
    cluster: "imac-services",
    alt: "iMac SSD and memory upgrade Dubai - storage architecture infographic",
    quads: [
      "iMac M4 logic board with NAND storage packages highlighted and unified memory beside the M4 die in cutaway",
      "Older 27-inch Intel iMac rear hatch with SODIMM modules raised in exploded view for comparison",
      "Technician at a rework station upgrading storage, capacity labels floating",
      "Upgrade decision chart - storage tiers and memory configurations - with bandwidth bars"
    ],
  },
  {
    file: "imac-power-supply-repair-dubai",
    cluster: "imac-services",
    alt: "iMac power supply repair Dubai - PSU board engineering infographic",
    quads: [
      "iMac 24-inch M4 with external power brick and internal power region exposed, magnetic power connector labeled",
      "Exploded power supply board - transformer, capacitors, rectifier stage - with voltage annotations",
      "Technician testing capacitors with a multimeter, bulged capacitor highlighted in red inset",
      "Power conversion flow diagram from mains AC through stages to DC rails with color-coded arrows"
    ],
  },
  {
    file: "imac-cooling-repair-dubai",
    cluster: "imac-services",
    alt: "iMac cooling and fan repair Dubai - thermal system infographic",
    quads: [
      "iMac 24-inch M4 internal view with the dual blower fans and heat pipe assembly highlighted in the slim chassis",
      "Exploded fan assembly with dust layer illustrated and clean replacement floating beside",
      "Technician vacuum-cleaning vents and reapplying thermal compound to the M4 package",
      "Airflow diagram through the chin intake, across the heatsink and out the rear vent with temperature gradient"
    ],
  },
  {
    file: "imac-data-recovery-dubai",
    cluster: "imac-services",
    alt: "iMac data recovery and diagnostic Dubai - storage recovery infographic",
    quads: [
      "iMac M4 on a diagnostic bench with thermal overlay and test checklist on screen",
      "Logic board NAND region highlighted with chip raised toward a recovery programmer socket",
      "Technician verifying recovered file tree on an external drive connected to a bench workstation",
      "Recovery and diagnostic flow diagram - assess, extract, reconstruct, deliver - with green progress arrows"
    ],
  },

  // ============ CLUSTER: Mac desktop models (2) ============
  {
    file: "mac-mini-repair-dubai",
    cluster: "mac-desktop",
    alt: "Mac mini M4 repair Dubai - compact desktop teardown infographic",
    quads: [
      "Mac mini M4 with its top shell lifted in exploded view revealing the compact internal architecture, fan and board labeled",
      "Full exploded stack - shell, fan, airflow guide, logic board, power supply, base with status light - floating vertically",
      "Technician servicing the M4 board on an ESD mat with the blower fan removed",
      "Thermal airflow diagram through the base intake, over the board and out the rear exhaust with blue-to-red arrows"
    ],
  },
  {
    file: "mac-pro-repair-dubai",
    cluster: "mac-desktop",
    alt: "Mac Pro repair Dubai - tower workstation engineering infographic",
    quads: [
      "Mac Pro tower with its stainless frame and aluminum housing lifted, lattice vent pattern visible, internals exposed",
      "Exploded view of PCIe expansion slots, M2 Ultra board module and triple impeller fan bank with labels",
      "Technician seating an expansion card into a PCIe slot inside the open tower",
      "Cooling zone diagram of front-to-back airflow across expansion bays with pressure annotations"
    ],
  },

  // ============ CLUSTER: Money / landing pages (9) ============
  {
    file: "apple-repair-dubai",
    cluster: "money",
    alt: "Apple device repair Dubai - full device family service infographic",
    quads: [
      "Complete modern device family arranged in perspective - MacBook Pro, iMac, iPad Pro, iPhone 17 Pro, Mac mini - each with a subtle exploded gap revealing internals",
      "Professional repair workbench with microscope, hot-air station and organized precision tools in blueprint annotation",
      "Courier pickup illustration - padded transport case with a laptop secured inside, route map with pin markers",
      "Twelve-month warranty shield diagram with service-coverage checklist and green verified checkmarks"
    ],
  },
  {
    file: "apple-service-center-dubai",
    cluster: "money",
    alt: "Apple service center Dubai - independent repair lab process infographic",
    quads: [
      "Service reception counter with a MacBook being handed over, ticket label and intake checklist annotated",
      "Repair lab floor plan in blueprint style - diagnostic bench, microsoldering station, cleanroom cabinet, parts storage - labeled zones",
      "Technician at a microscope station working on a logic board with tools arranged",
      "Service process timeline - diagnose, quote, repair, test, return - with stage icons and duration annotations"
    ],
  },
  {
    file: "applecare-warranty-repair-dubai",
    cluster: "money",
    alt: "AppleCare and warranty repair options Dubai - coverage decision infographic",
    quads: [
      "MacBook Pro with a transparent protective shield dome over it, coverage checklist annotated beside",
      "Decision flowchart comparing manufacturer warranty path versus independent repair path with cost and time annotations",
      "Service counter consultation with documents and device, checklist clipboard in frame",
      "Coverage timeline diagram - purchase, warranty window, extended coverage, out-of-warranty - on a calendar bar"
    ],
  },
  {
    file: "out-of-warranty-repair-dubai",
    cluster: "money",
    alt: "Out of warranty Apple repair Dubai - cost comparison infographic",
    quads: [
      "MacBook Air with an expired warranty calendar marker and a green repair-available badge beside it",
      "Cost comparison bar chart - official replacement price versus component-level repair price - with savings highlighted in green",
      "Microsoldering bench repairing a single board component, magnified inset of the faulty chip",
      "Repair decision flow - diagnose, quote, approve, component repair, warranty seal - with green arrows"
    ],
  },
  {
    file: "macbook-insurance-dubai",
    cluster: "money",
    alt: "MacBook insurance repair claims Dubai - claim process infographic",
    quads: [
      "MacBook Pro with cracked screen beside an insurance claim document set with stamp and checklist annotations",
      "Damage assessment diagram of the laptop with impact points mapped and severity color-coded",
      "Technician preparing a detailed damage report with photos and itemized quote on a clipboard",
      "Claim workflow - incident, report, assessment, approval, repair, settlement - flowchart with stage icons"
    ],
  },
  {
    file: "annual-maintenance-contract-dubai",
    cluster: "money",
    alt: "Apple device annual maintenance contract Dubai - business fleet service infographic",
    quads: [
      "Fleet of MacBooks and iMacs arranged in a grid representing a company's devices, each tagged with an asset label",
      "Annual service calendar wheel with quarterly maintenance visits marked and SLA response-time annotations",
      "On-site technician servicing a workstation in an office environment with a service kit case open",
      "Fleet health dashboard diagram - device status grid, battery health bars, upcoming service tickets - in clean UI blueprint"
    ],
  },
  {
    file: "macbook-trade-in-dubai",
    cluster: "money",
    alt: "Sell or trade in MacBook Dubai - valuation process infographic",
    quads: [
      "MacBook Pro on a valuation scale with condition checkpoints annotated - screen, battery, chassis - each with grade chips",
      "Data wipe diagram showing the SSD being securely erased with certificate of erasure illustrated",
      "Trade-in counter exchange - device handed over, instant payment symbols (cash and bank transfer icons) annotated",
      "Valuation flow - model check, condition grade, quote, data wipe, payment - with green progress arrows"
    ],
  },
  {
    file: "onsite-macbook-repair-dubai",
    cluster: "money",
    alt: "On-site MacBook repair Dubai - mobile technician service infographic",
    quads: [
      "Technician's mobile service case opened at an office desk with organized tools, beside a MacBook being serviced on a portable ESD mat",
      "Service van route map of a city with numbered stop pins and same-day time windows annotated",
      "Technician replacing a battery at the client's desk with components laid out in order",
      "On-site service checklist diagram - arrival, diagnosis, repair, test, handover - with duration annotations"
    ],
  },
  {
    file: "apple-display-repair-dubai",
    cluster: "money",
    alt: "Apple Studio Display repair Dubai - 5K panel engineering infographic",
    quads: [
      "27-inch 5K studio display on its stand with the front panel lifted in exploded view revealing logic board and speaker array",
      "Exploded display stack - cover glass, 5K LCD panel, backlight, chassis - with thickness dimensions",
      "Technician separating the laminated panel with heated tooling and suction frames",
      "Stand tilt mechanism cutaway and port board diagram with connection annotations"
    ],
  },

  // ============ CLUSTER: Locations (5) ============
  {
    file: "macbook-repair-dubai-pickup",
    cluster: "locations",
    alt: "MacBook repair Dubai Marina Downtown - free pickup and delivery infographic",
    quads: [
      "MacBook Pro secured in a padded courier transport case with protective foam cutout, handle and label annotated",
      "Blueprint-style city skyline outline of modern Dubai towers along a marina waterfront with route pins connecting districts",
      "Courier handing the protected case to a technician at a tower lobby reception",
      "Same-day service timeline - pickup 10am, diagnosis 12pm, repair 3pm, delivery 7pm - on a clock-based diagram"
    ],
  },
  {
    file: "macbook-repair-old-dubai",
    cluster: "locations",
    alt: "MacBook repair Deira Bur Dubai Karama - pickup service area infographic",
    quads: [
      "MacBook Air in a courier case beside a blueprint outline of a historic creek-side district with traditional wind-tower architecture silhouettes",
      "Service area map with district zones shaded and pickup pins along a creek waterway",
      "Courier on a motorbike with a secured delivery box, route arrows through city streets",
      "Pickup-to-delivery flow diagram with response-time annotations per district. Plain white margins with no footer bar, no document classification text, no revision or project labels anywhere"
    ],
  },
  {
    file: "macbook-repair-abu-dhabi",
    cluster: "locations",
    alt: "MacBook repair Abu Dhabi - intercity courier service infographic",
    quads: [
      "MacBook Pro in a sealed transport case beside a blueprint skyline of a corniche waterfront capital city with landmark tower silhouettes",
      "Intercity highway route map between two cities with distance and drive-time annotations",
      "Courier van loading secured device cases with tracking labels scanned",
      "Two-day service timeline diagram - pickup day one, repair, return delivery day two - with stage icons"
    ],
  },
  {
    file: "macbook-repair-northern-emirates",
    cluster: "locations",
    alt: "MacBook repair Sharjah Ajman Northern Emirates - courier coverage infographic",
    quads: [
      "MacBook in a protective courier case beside a blueprint coastline map of several northern coastal cities with pins",
      "Coverage map with concentric service rings extending from a central workshop hub to surrounding emirates",
      "Courier receiving a laptop at a doorstep handover with a signature tablet",
      "Coverage table diagram - city, pickup window, return time - in clean engineering table style"
    ],
  },
  {
    file: "macbook-repair-near-me",
    cluster: "locations",
    alt: "MacBook repair near me Dubai - workshop location and service radius infographic",
    quads: [
      "MacBook Pro with a large map location pin above it and GPS coordinate annotations",
      "Service radius map with concentric distance rings - 5, 15, 30 km - around a tower workshop marker",
      "Workshop building exterior in blueprint elevation view with floor and office number callouts",
      "Three ways to reach us diagram - walk-in, free pickup, courier drop-off - with icons and arrows"
    ],
  },

  // ============ CLUSTER: Blog clusters (13) ============
  {
    file: "blog-battery-health-dubai",
    cluster: "blog",
    alt: "MacBook and iPhone battery health guide Dubai - battery engineering infographic",
    quads: [
      "MacBook and iPhone batteries side by side in exploded view with cells and management boards labeled",
      "Battery chemistry cutaway - anode, cathode, separator, electrolyte - with ion-flow arrows",
      "Charge-cycle degradation curve chart with healthy and degraded zones shaded green and red",
      "Battery care best-practice diagram - optimal charge range 20 to 80 percent, heat avoidance - with icons"
    ],
  },
  {
    file: "blog-overheating-cooling-dubai",
    cluster: "blog",
    alt: "MacBook overheating causes and fixes Dubai - thermal engineering infographic",
    quads: [
      "MacBook Pro with thermal camera overlay showing heat distribution from the chip area in red-orange gradient",
      "Cooling system cutaway - fans, heat pipes, fins - with dust accumulation highlighted",
      "Desert sun and high ambient temperature illustration affecting a laptop on a cafe table with temperature annotations",
      "Temperature management flowchart - clean fans, renew paste, manage workload - with cooling arrows"
    ],
  },
  {
    file: "blog-water-damage-dubai",
    cluster: "blog",
    alt: "Liquid damage first aid for Apple devices Dubai - emergency response infographic",
    quads: [
      "Coffee spill moment frozen over a MacBook keyboard with liquid path arrows showing ingress between keys",
      "Cross-section of liquid reaching the logic board beneath the keyboard with corrosion timeline annotations",
      "Correct first-response steps illustrated - power off, unplug, invert in tent position - numbered 1-2-3",
      "Do-and-do-not table diagram - no rice, no hairdryer, immediate professional cleaning - with red and green icons"
    ],
  },
  {
    file: "blog-storage-upgrade-dubai",
    cluster: "blog",
    alt: "Mac storage and SSD upgrade guide Dubai - storage engineering infographic",
    quads: [
      "Transparent MacBook with its SSD storage region glowing and data blocks visualized inside the NAND chips",
      "Storage evolution exploded line-up - spinning hard drive, SATA SSD, modern soldered NAND - with speed annotations",
      "Full disk warning gauge beside a cleanup strategy panel with file-type size bars",
      "Upgrade decision flowchart - cloud storage, external drive, internal upgrade - with cost-per-terabyte annotations"
    ],
  },
  {
    file: "blog-apple-silicon-dubai",
    cluster: "blog",
    alt: "Apple Silicon M-series chip guide Dubai - processor engineering infographic",
    quads: [
      "M5 chip package macro photograph style with the die exposed, CPU, GPU and Neural Engine regions color-mapped",
      "Generational chip line-up M1 through M5 as floating packages with performance bars rising",
      "Unified memory architecture diagram - processor and memory on one package - versus separate components, compared",
      "Performance-per-watt curve chart comparing chip generations with efficiency zone shading"
    ],
  },
  {
    file: "blog-screen-display-dubai",
    cluster: "blog",
    alt: "Mac and iPhone display technology guide Dubai - screen engineering infographic",
    quads: [
      "Three display technologies side by side in cutaway - LCD with backlight, OLED self-emissive, mini-LED zones - labeled",
      "Pixel structure extreme macro showing red, green, blue subpixel geometry with dimension lines",
      "Common screen failures illustrated on a MacBook display - dead pixels, backlight bleed, crack patterns - annotated",
      "Display specification comparison table - brightness, contrast, refresh rate - in engineering table style"
    ],
  },
  {
    file: "blog-data-recovery-guide-dubai",
    cluster: "blog",
    alt: "Data recovery guide for Mac and iPhone Dubai - recovery engineering infographic",
    quads: [
      "Transparent SSD with data blocks shown intact, corrupted and recovered in green, red and blue color coding",
      "Recovery lab bench with chip-off rig, programmer socket and donor boards arranged in blueprint annotation",
      "Backup strategy diagram - local drive, network storage, cloud - in a 3-2-1 rule layout with arrows",
      "Recovery probability chart by failure type - logical, electrical, physical - with success-rate bars"
    ],
  },
  {
    file: "blog-software-macos-dubai",
    cluster: "blog",
    alt: "macOS tips and software guide Dubai - operating system infographic",
    quads: [
      "MacBook Air showing an abstract layered operating system diagram rising from the keyboard as translucent panels",
      "System architecture stack - hardware, kernel, frameworks, applications - as a transparent 3D block diagram",
      "Maintenance toolkit illustration - disk utility gauge, storage cleanup, update cycle - as instrument panel",
      "Troubleshooting flowchart - restart, safe mode, reinstall - with decision diamonds and color paths"
    ],
  },
  {
    file: "blog-buying-guide-dubai",
    cluster: "blog",
    alt: "Which Mac to buy guide Dubai - model comparison infographic",
    quads: [
      "Modern Mac line-up arranged on a comparison stage - MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio - with price-tier annotations",
      "Use-case matching diagram - student, designer, developer, business - connected by arrows to recommended models",
      "Specification comparison table - chip, memory, storage, display - in clean engineering table style",
      "Value timeline chart showing purchase price versus years of useful life with resale value curve"
    ],
  },
  {
    file: "blog-iphone-guides-dubai",
    cluster: "blog",
    alt: "iPhone tips and repair guides Dubai - smartphone engineering infographic",
    quads: [
      "iPhone 17 Pro and iPhone Air side by side in semi-exploded view with key components labeled",
      "Common iPhone issues mapped on a transparent phone - battery, screen, camera, port - with color-coded markers",
      "Care best-practices panel - case, screen protector, charge habits - illustrated with icons",
      "Repair-versus-upgrade decision flowchart with cost annotations and green recommended path"
    ],
  },
  {
    file: "blog-ipad-guides-dubai",
    cluster: "blog",
    alt: "iPad tips and repair guides Dubai - tablet engineering infographic",
    quads: [
      "iPad Pro M5 with Apple Pencil and Magic Keyboard in exploded arrangement showing the ecosystem connections",
      "Transparent iPad with common failure points marked - screen, battery, charging port - color-coded",
      "Productivity setup illustration - tablet on stand with keyboard and external display connection diagram",
      "Model generation timeline with support-lifespan bars and repair-availability annotations"
    ],
  },
  {
    file: "blog-repair-cost-dubai",
    cluster: "blog",
    alt: "Apple repair cost guide Dubai - pricing comparison infographic",
    quads: [
      "MacBook and iPhone on a balance scale against coin stacks with price-range annotations",
      "Repair cost bar chart by component - screen, battery, board, keyboard - with price ranges in dirhams symbolized generically",
      "Genuine versus aftermarket part comparison cutaway with quality checkpoints annotated",
      "Cost decision flowchart - quote, compare, repair or replace - with savings highlighted in green"
    ],
  },
  {
    file: "blog-apple-news-dubai",
    cluster: "blog",
    alt: "Apple news and updates Dubai - technology timeline infographic",
    quads: [
      "Modern Apple device family - MacBook Pro, iPhone 17 Pro, iPad Pro and iMac - arranged on a presentation stage with spotlight beams",
      "Product release timeline along a horizontal axis with exactly four labeled milestones: 2023 M3 chip, 2024 M4 chip and A18 Pro, 2025 A19 Pro, 2026 M5 chip - no other year labels",
      "Innovation cutaway showcasing a chip die, camera module and display layer as three feature highlights, no year labels",
      "Trend chart of performance generation-over-generation with rising annotated curve, axis labeled by chip name only (M3, M4, M5), no years"
    ],
  },

  // ============ CLUSTER: Guides (6) ============
  {
    file: "guide-clean-macbook-dubai",
    cluster: "guides",
    alt: "How to clean MacBook screen and keyboard - cleaning technique infographic",
    quads: [
      "MacBook Pro at 90-degree open angle with a microfiber cloth wiping the screen in an annotated circular motion path",
      "Cross-section of the display coating layers - anti-reflective coating, glass - with safe and unsafe cleaner chemistry icons",
      "Keyboard cleaning technique - compressed air at 75-degree angle into key edges - with spray pattern arrows",
      "Do-and-do-not panel - no ammonia, no paper towels, no direct spray - with red crosses and green checks"
    ],
  },
  {
    file: "guide-reset-password-macbook-dubai",
    cluster: "guides",
    alt: "How to reset MacBook and recover passwords - recovery workflow infographic",
    quads: [
      "MacBook Air showing an abstract wireframe login interface with a key symbol floating above the keyboard",
      "Recovery options diagram - linked account reset, recovery key, second admin - as three labeled paths",
      "Erase-and-restore flow illustrated - backup drive, system erase, fresh setup - in numbered steps",
      "Security checklist panel - strong password, two-factor, encrypted backup - with shield icons"
    ],
  },
  {
    file: "guide-screenshot-recording-macbook-dubai",
    cluster: "guides",
    alt: "How to screenshot and screen record on MacBook - capture methods infographic",
    quads: [
      "MacBook Pro with keyboard shortcut keys highlighted and glowing - modifier key combinations annotated with callouts",
      "Screen capture regions illustrated on the display - full screen, window, selection rectangle - with dashed borders",
      "Screen recording in progress visual with microphone audio waveform routing diagram beside",
      "Capture workflow flowchart - choose mode, capture, annotate, share - with file format annotations"
    ],
  },
  {
    file: "guide-macbook-basics-dubai",
    cluster: "guides",
    alt: "MacBook basics and settings guide - everyday shortcuts infographic",
    quads: [
      "MacBook Air with finger gestures illustrated above the trackpad - tap, swipe, pinch - with motion arrows",
      "Keyboard with copy and paste shortcut keys highlighted and clipboard flow diagram between two documents",
      "System settings panels floating as translucent cards - device name, display, sound - annotated",
      "Productivity shortcut cheat-sheet table in clean engineering table style"
    ],
  },
  {
    file: "guide-choose-macbook-dubai",
    cluster: "guides",
    alt: "How to choose the right MacBook configuration - selection guide infographic",
    quads: [
      "MacBook Air and MacBook Pro side by side on a comparison stage with size and weight dimension lines",
      "Configuration options exploded - chip tiers, memory sizes, storage tiers - as selectable module blocks",
      "Use-case matching diagram - browsing, design, video editing, gaming - connected to recommended configurations",
      "Budget allocation chart showing where upgrade money matters most with green priority highlights"
    ],
  },
  {
    file: "guide-macbook-longevity-dubai",
    cluster: "guides",
    alt: "How long MacBooks last and common problems - lifespan engineering infographic",
    quads: [
      "MacBook aging timeline - new, 5 years, 10 years - as three laptops with condition annotations",
      "Wear-point map on a transparent MacBook - battery, keyboard, hinge, ports - color-coded by failure frequency",
      "Maintenance schedule wheel - annual cleaning, battery service, software updates - on a calendar dial",
      "Lifespan extension chart showing years gained per maintenance habit with green bars"
    ],
  },

  // ============ CLUSTER: device-hub pages (5 per hub; MacBook Pro is the template) ============
  {
    file: "macbook-pro-repair-hub-dubai",
    cluster: "device-hubs",
    alt: "MacBook Pro repair Dubai - M5 full teardown exploded-view engineering infographic",
    quads: [
      "MacBook Pro 16-inch M5 in full exploded view - display, top case with keyboard, logic board, battery and bottom case floating in assembly order with dimension lines",
      "Liquid Retina XDR display assembly layer stack - cover glass, mini-LED backlight array, panel and lid shell - each layer floating with thickness annotations",
      "MacBook Pro logic board top-down with the M5 chip, unified memory modules and thermal heat pipes highlighted by color-coded callout boxes",
      "Bottom case opened showing the six-cell battery, twin cooling fans and speaker enclosures with engineering labels and screw-map inset"
    ],
  },
  {
    file: "macbook-pro-models-timeline-dubai",
    cluster: "device-hubs",
    alt: "MacBook Pro models we repair in Dubai - Intel to M5 generation evolution infographic",
    quads: [
      "MacBook Pro 13-inch Intel generation (2017-2020) with Touch Bar shown in three-quarter view, model identifier callout plate and port layout annotations",
      "MacBook Pro 13-inch M1 and M2 generation rendered side by side with chip badge callouts and shared chassis dimension lines",
      "MacBook Pro 14-inch and 16-inch M3 and M4 generation lineup with notch display detail inset and HDMI, SDXC and MagSafe 3 port callouts",
      "MacBook Pro M5 generation 2026 flagship hero render with specification table - chip tiers, display sizes, model identifiers - in a clean engineering data plate"
    ],
  },
  {
    file: "macbook-pro-common-repairs-dubai",
    cluster: "device-hubs",
    alt: "MacBook Pro repair services Dubai - screen, battery, keyboard and logic board infographic",
    quads: [
      "MacBook Pro display assembly being lifted from the hinge line in exploded view, broken glass crack pattern mapped with red stress-line annotations",
      "Swollen MacBook Pro battery beside a new replacement battery with adhesive pull-tab arrows, charge-cycle gauge and capacity annotations",
      "MacBook Pro top case with individual keyboard keycap, scissor mechanism and backlight sheet floating in exploded order with callout labels",
      "Logic board on a microsoldering bench under a microscope with corrosion inspection circles, hot-air rework nozzle and multimeter probes in frame"
    ],
  },
  {
    file: "macbook-pro-repair-process-dubai",
    cluster: "device-hubs",
    alt: "MacBook Pro repair process Dubai - diagnosis to quality check four-step infographic",
    quads: [
      "MacBook Pro connected to a diagnostic station with a test-pattern screen and sensor readout panel, free-diagnosis checklist clipboard beside",
      "Transparent quote document plate itemizing parts and labour with green approval checkmark and price-breakdown table in clean typography",
      "Technician replacing a MacBook Pro screen at an organized ESD-safe bench with a 30-minute countdown timer dial annotation",
      "Final quality-check station - MacBook Pro running display, keyboard and battery test software with green pass indicators and a data-privacy shield icon plate"
    ],
  },
  {
    file: "macbook-air-repair-hub-dubai",
    cluster: "device-hubs",
    alt: "MacBook Air repair Dubai - M5 ultralight teardown exploded-view engineering infographic",
    quads: [
      "MacBook Air 15-inch M5 in full exploded view - display, top case with keyboard, fanless logic board and battery floating apart in assembly order with dimension lines",
      "Liquid Retina display assembly layer stack with cover glass, panel and lid shell floating with thickness annotations",
      "Fanless M5 logic board top-down with passive cooling plate, unified memory and SSD modules highlighted by color-coded callout boxes",
      "Sky blue aluminum unibody bottom case with the slim battery pack and speaker modules labeled with engineering callouts"
    ],
  },
  {
    file: "imac-repair-hub-dubai",
    cluster: "device-hubs",
    alt: "iMac repair Dubai - 24-inch M4 all-in-one teardown exploded-view engineering infographic",
    quads: [
      "Apple iMac 24-inch M4 in full exploded view - 4.5K Retina display panel lifted from the colorful aluminum chassis, logic board and stand floating with dimension lines",
      "Display assembly layer stack - cover glass, LCD panel, backlight - floating with thickness annotations and adhesive channel callouts",
      "Slim iMac logic board with the M4 chip, unified memory and power board highlighted by color-coded engineering callout boxes",
      "Rear chassis cutaway showing the power supply, speaker chambers and cooling path with airflow arrows and screw-map inset"
    ],
  },
  {
    file: "iphone-repair-hub-dubai",
    cluster: "device-hubs",
    alt: "iPhone repair Dubai - iPhone 17 Pro full teardown exploded-view engineering infographic",
    quads: [
      "iPhone 17 Pro in full exploded view - Super Retina OLED display, titanium frame, logic board stack and battery floating apart in assembly order with dimension lines",
      "OLED display assembly layer stack - ceramic cover glass, OLED panel, touch digitizer - floating with thickness measurements",
      "Compact folded logic board with the A19 Pro chip, camera modules and Face ID sensors highlighted by color-coded callout boxes",
      "Titanium frame cutaway showing the L-shaped battery, MagSafe ring, speaker and haptic engine labeled with engineering callouts"
    ],
  },
  // ============ CLUSTER: dedicated service headers (June 2026, fact-checked) ============
  {
    file: "iphone-earpiece-repair-dubai",
    cluster: "service-headers",
    alt: "iPhone earpiece speaker repair Dubai - top receiver module exploded-view engineering infographic",
    quads: [
      "iPhone 17 Pro (2025) top edge with the earpiece receiver module lifted in exploded view above the display, speaker mesh and flex cable annotated with engineering callouts",
      "Cutaway through the earpiece module - diaphragm, voice coil, mesh grille and sound channel routing to the display slot - all labeled",
      "Technician cleaning a blocked earpiece mesh with a soft brush under magnification, replacement module waiting beside on an ESD mat",
      "Acoustic diagram of call audio routing from the earpiece through the display slot with frequency-response plot beside"
    ],
  },
  {
    file: "iphone-microphone-repair-dubai",
    cluster: "service-headers",
    alt: "iPhone microphone repair Dubai - triple microphone array engineering infographic",
    quads: [
      "Transparent iPhone 17 Pro showing all three microphone positions - bottom edge, front earpiece area and rear camera area - each highlighted with a callout box",
      "Exploded bottom microphone module beside the speaker assembly with its rubber gasket and mesh, assembly-order arrows",
      "Technician testing microphone input with an audio waveform analyzer screen, replacement flex beside the opened phone",
      "Noise-cancellation diagram showing how the three microphones work together with color-coded sound-path arrows"
    ],
  },
  {
    file: "iphone-headphone-jack-repair-dubai",
    cluster: "service-headers",
    alt: "iPhone headphone jack repair Dubai - legacy 3.5mm audio jack assembly infographic",
    quads: [
      "Classic iPhone 6s opened with its 3.5mm headphone jack flex assembly lifted in exploded view, jack housing and flex cable annotated - the last iPhone generation with a built-in headphone jack (2015)",
      "Cross-section of a 3.5mm audio jack showing tip, ring and sleeve contacts color-coded with signal labels",
      "Technician replacing the headphone jack flex with fine tweezers under magnification on an ESD mat",
      "Modern audio alternatives panel - a USB-C to 3.5mm headphone adapter and wireless earbuds - drawn as clean labeled options for modern USB-C iPhones (iPhone 15 and later)"
    ],
  },
  {
    file: "iphone-home-button-repair-dubai",
    cluster: "service-headers",
    alt: "iPhone home button and Touch ID repair Dubai - button assembly engineering infographic",
    quads: [
      "iPhone SE (3rd generation, 2022, A15 Bionic chip - the last home-button iPhone) with its home button assembly lifted in exploded view - sapphire button surface, Touch ID sensor ring and flex cable annotated. Do not depict or mention A19 or M5 chips anywhere",
      "Cutaway of the Touch ID stack - capacitive ring, fingerprint sensor and tactile switch dome - each layer labeled",
      "Technician transferring the original Touch ID sensor to a new button housing under a microscope - original sensor required for fingerprint function, noted in a callout",
      "Diagram of the secure pairing between the Touch ID sensor and the Secure Enclave inside the A15 Bionic chip with a lock icon and pairing arrows"
    ],
  },
  {
    file: "iphone-power-button-repair-dubai",
    cluster: "service-headers",
    alt: "iPhone power side button repair Dubai - button flex assembly engineering infographic",
    quads: [
      "iPhone 17 Pro side profile with the power side button exploded outward - button cap, tactile switch and flex cable in floating assembly order with callouts",
      "Cross-section of the side button mechanism showing the click dome, bracket and waterproof gasket with thickness annotations",
      "Technician seating a new power button flex along the titanium frame channel with a plastic spudger, alignment arrows",
      "Button function diagram - press, double-press and hold gestures mapped to power, Apple Pay and Siri with clean labeled arrows"
    ],
  },
  {
    file: "iphone-volume-button-repair-dubai",
    cluster: "service-headers",
    alt: "iPhone volume button repair Dubai - volume rocker flex assembly engineering infographic",
    quads: [
      "iPhone 17 Pro (2025, aluminum unibody) left edge with the volume up and down buttons and Action button exploded outward, each cap and tactile switch labeled",
      "Cutaway through a volume button showing click dome, bracket and sealing gasket with engineering measurements",
      "Technician routing the volume flex cable around the battery with insulated tweezers, connector magnified in an inset",
      "Exploded view of the mechanical Action button - button cap, tactile click dome and flex cable - in floating assembly order with callouts"
    ],
  },
  {
    file: "iphone-sim-tray-repair-dubai",
    cluster: "service-headers",
    alt: "iPhone SIM tray repair Dubai - nano-SIM tray and reader assembly engineering infographic",
    quads: [
      "iPhone side edge with the nano-SIM tray ejected and floating beside its slot, waterproof gasket ring annotated",
      "Exploded SIM reader assembly - tray, reader contacts and connector - in floating assembly order with callouts",
      "Technician straightening a bent SIM tray seat and cleaning reader contacts under magnification",
      "Dual SIM diagram - physical nano-SIM plus eSIM chip on the logic board - drawn with labeled connection paths"
    ],
  },
  {
    file: "iphone-lightning-port-repair-dubai",
    cluster: "service-headers",
    alt: "iPhone Lightning port repair Dubai - Lightning connector assembly engineering infographic",
    quads: [
      "iPhone 14 bottom edge with the Lightning port assembly highlighted in situ - Lightning was used on iPhone 5 through iPhone 14 generations (2012-2022) and replaced by USB-C starting with iPhone 15 in 2023, noted in a callout plate",
      "Exploded Lightning port flex - 8-pin connector, rubber gasket, microphone and flex cable in assembly order",
      "Microscope view of the Lightning connector pins with corrosion spots circled in red and a cleaning swab in frame",
      "Lightning pin-out schematic with power and data lines color-coded and charge-current table beside"
    ],
  },
  {
    file: "iphone-usb-c-port-repair-dubai",
    cluster: "service-headers",
    alt: "iPhone USB-C port repair Dubai - USB-C connector assembly engineering infographic",
    quads: [
      "iPhone 17 Pro bottom edge with the USB-C port assembly highlighted - USB-C standard on iPhone 15 and later (2023 onward), noted in a callout plate",
      "Exploded USB-C port flex assembly - 24-pin connector housing, sealing gasket and flex cable floating in assembly order",
      "Technician reflowing the USB-C port connection under a microscope with hot-air nozzle and flux pen in frame",
      "USB-C pin-out schematic with power delivery and data lanes color-coded - iPhone Pro models support USB 3 data up to 10 gigabits per second, noted in one small plate, no other speed or wattage figures"
    ],
  },
  {
    file: "iphone-vibration-motor-repair-dubai",
    cluster: "service-headers",
    alt: "iPhone Taptic Engine repair Dubai - haptic motor assembly engineering infographic",
    quads: [
      "iPhone 17 Pro (2025) opened with the Taptic Engine haptic motor lifted in exploded view above its bay beside the battery, mounting screws and flex annotated",
      "Cutaway of the Taptic Engine linear actuator - moving mass, springs and electromagnetic coils labeled with motion arrows",
      "Technician seating a replacement Taptic Engine with precision screwdriver, torque values annotated",
      "Haptic waveform diagram showing tap, click and notification vibration patterns as labeled signal plots"
    ],
  },
  {
    file: "iphone-wifi-bluetooth-repair-dubai",
    cluster: "service-headers",
    alt: "iPhone WiFi and Bluetooth repair Dubai - antenna and RF system engineering infographic",
    quads: [
      "Transparent iPhone 17 Pro with its antenna lines highlighted along the frame edges and the WiFi/Bluetooth module on the logic board called out",
      "Exploded antenna flex assemblies - upper and lower antenna modules floating with connection-point arrows",
      "Microscope view of the RF module area on the logic board with shield removed, probe testing a connector",
      "Signal diagram - WiFi 7 bands at 2.4, 5 and 6 GHz and Bluetooth at 2.4 GHz drawn as labeled waves with an RF signal-strength meter beside, no other standard names or speed figures"
    ],
  },
  {
    file: "iphone-nfc-repair-dubai",
    cluster: "service-headers",
    alt: "iPhone NFC and Apple Pay repair Dubai - NFC coil assembly engineering infographic",
    quads: [
      "iPhone rear housing interior with the NFC antenna coil highlighted around the camera area and wireless charging coil, each labeled",
      "Exploded NFC reader stack - antenna coil, ferrite sheet and controller chip on the logic board with connection arrows, no fabrication-process or nanometer claims",
      "Technician testing contactless function with an NFC test card over the reassembled phone, diagnostic screen beside",
      "Contactless payment diagram - phone to payment terminal field coupling drawn with radio-wave arcs and a secure-element lock icon"
    ],
  },
  {
    file: "iphone-network-unlock-dubai",
    cluster: "service-headers",
    alt: "iPhone network carrier unlock Dubai - official IMEI unlock process infographic",
    quads: [
      "iPhone Settings About page mock-up titled simply About, showing carrier and IMEI information rows with annotation arrows, drawn as clean UI documentation - no chip names or board architecture labels anywhere",
      "Official carrier whitelist process flow - IMEI submitted, carrier database updated, phone unlocked - as a three-step labeled diagram",
      "World map plate with roaming and local SIM usage icons showing an unlocked phone working across regions",
      "Checklist plate - legitimate ownership proof, no blacklisted IMEI, official carrier channels only - with green checkmarks"
    ],
  },
  {
    file: "iphone-software-fix-dubai",
    cluster: "service-headers",
    alt: "iPhone software repair Dubai - iOS restore and recovery process infographic",
    quads: [
      "iPhone (USB-C) connected to a MacBook with a USB-C to USB-C cable, recovery-mode screen shown, restore progress bar annotated - no OS version numbers or data-rate figures anywhere",
      "iOS system layers diagram - apps, iOS system, firmware, bootloader - as a clean labeled stack with a repair wrench at the system layer",
      "DFU restore process flow - backup, enter DFU, restore firmware, verify - as four labeled steps with arrows",
      "Data-safety panel - backup-first policy plate with cloud and local backup icons and a green data-preserved checkmark"
    ],
  },
  {
    file: "ipad-home-button-repair-dubai",
    cluster: "service-headers",
    alt: "iPad home button and Touch ID repair Dubai - button assembly engineering infographic",
    quads: [
      "iPad 9th generation with its home button assembly lifted in exploded view - sapphire surface, Touch ID ring and flex annotated (the last home-button iPad generation, 2021)",
      "Cutaway of the Touch ID home button stack - capacitive ring, fingerprint sensor, tactile dome - each layer labeled",
      "Technician transferring the original Touch ID sensor to the new display assembly under a microscope, original-sensor-required callout",
      "Touch ID to Secure Enclave pairing diagram with lock icon and verification arrows - no notes about other devices, chips or future technology anywhere in this panel"
    ],
  },
  {
    file: "ipad-power-button-repair-dubai",
    cluster: "service-headers",
    alt: "iPad top button and Touch ID repair Dubai - power button assembly engineering infographic",
    quads: [
      "iPad Air (M2, 2024) top edge with the top button exploded outward - on modern iPads Touch ID is built into the top power button, noted in a callout - use only the device name iPad Air M2 2024, no other model numbers or years",
      "Cutaway of the top button showing fingerprint sensor, click dome and sealing gasket with measurements",
      "Technician routing the top-button flex behind the antenna window with insulated tweezers, magnified connector inset",
      "Button function map - press, hold and double-press mapped to wake, power and Apple Pay with labeled arrows"
    ],
  },
  {
    file: "macbook-backup-service-dubai",
    cluster: "service-headers",
    alt: "MacBook backup service Dubai - Time Machine and data backup workflow infographic",
    quads: [
      "MacBook Pro connected to an external SSD with a Time Machine backup progress ring shown on screen, cable and drive annotated",
      "Backup strategy diagram - local Time Machine drive plus cloud copy - drawn as a labeled 3-2-1 backup scheme with arrows",
      "Technician verifying backup integrity on a bench with checksum plates and a green verified badge",
      "Restore flow as exactly three distinct labeled steps - STEP 1 select snapshot, STEP 2 restore files, STEP 3 verify - with a folder tree illustration, each step number used exactly once"
    ],
  },
  {
    file: "macbook-safe-mode-repair-dubai",
    cluster: "service-headers",
    alt: "MacBook safe mode and startup repair Dubai - boot diagnostics engineering infographic",
    quads: [
      "MacBook Pro showing the macOS startup options screen with Safe Mode highlighted, keyboard shift-key callout for Intel and power-button hold callout for Apple Silicon",
      "Boot sequence diagram - power on, firmware, kernel, login - as a labeled chain with a diagnostic magnifier at the failure point",
      "Technician reviewing startup logs on an attached terminal screen with error lines highlighted in red",
      "Safe Mode checklist plate - caches cleared, login items disabled, kernel extensions skipped - with green checkmarks"
    ],
  },
  {
    file: "macbook-battery-replacement-dubai",
    cluster: "device-hubs",
    alt: "MacBook battery replacement Dubai - lithium battery pack removal and health diagnostics engineering infographic",
    quads: [
      "MacBook Pro M5 opened flat with its six-cell lithium-polymer battery pack lifted above the chassis in exploded view, stretch-release adhesive pull-tabs and battery connector annotated with engineering callouts",
      "Exploded battery pack showing stacked lithium-polymer cells, battery management system board and flex connector floating in assembly order with watt-hour and voltage annotations",
      "Gloved technician hands pulling adhesive strips with insulated tweezers while a new replacement battery waits beside on an ESD mat, alignment arrows showing placement",
      "Battery health engineering panel - charge-cycle degradation curve, maximum capacity gauge reading 92 percent, and a swollen-cell cross-section safety warning with red expansion arrows"
    ],
  },
  {
    file: "mac-studio-repair-dubai",
    cluster: "device-hubs",
    alt: "Mac Studio repair Dubai - M4 Max compact workstation teardown engineering infographic",
    quads: [
      "Apple Mac Studio M4 Max compact aluminum workstation in full exploded view - top shell, massive copper thermal module, logic board and power supply floating in assembly order with dimension lines",
      "Double-sided logic board with the M4 Max chip package, unified memory and SSD modules highlighted by color-coded engineering callout boxes",
      "Cutaway of the dual-blower cooling system with airflow path arrows from the bottom intake through the copper heatsink to the rear exhaust",
      "Rear port array macro view - Thunderbolt 5, 10Gb Ethernet, HDMI and SDXC - each port labeled with engineering callouts and connector cross-sections"
    ],
  },
  {
    file: "mac-repair-hub-dubai",
    cluster: "device-hubs",
    alt: "Mac repair Dubai - complete Apple Mac family lineup engineering infographic",
    quads: [
      "The complete Apple Mac family arranged on a presentation stage - MacBook Pro, MacBook Air, iMac, Mac mini, Mac Studio and Mac Pro tower - each with a model callout plate and dimension lines",
      "Transparent MacBook Pro and iMac side by side with their logic boards, batteries and cooling systems visible through the chassis, color-coded component callouts",
      "Service workflow diagram - diagnosis, quote in AED, repair, quality check - drawn as a clean four-stage engineering flow with green progress arrows",
      "Common Mac repair matrix - screen, battery, logic board, storage upgrade - as a labeled grid with repair-time annotations per category"
    ],
  },
  {
    file: "ipad-repair-hub-dubai",
    cluster: "device-hubs",
    alt: "iPad repair Dubai - iPad Pro M5 full teardown exploded-view engineering infographic",
    quads: [
      "iPad Pro M5 13-inch in full exploded view - Ultra Retina XDR OLED display, aluminum unibody, logic board and battery floating apart in assembly order with dimension lines",
      "Tandem OLED display assembly layer stack - cover glass, dual OLED panels, touch layer - floating with thickness measurements and callout labels",
      "Compact iPad logic board with the M5 chip, camera module and USB-C port highlighted by color-coded engineering callout boxes",
      "Aluminum unibody cutaway showing the dual battery cells, speaker chambers, Apple Pencil charging coil and antenna lines labeled with callouts"
    ],
  },
  {
    file: "macbook-pro-failure-signs-dubai",
    cluster: "device-hubs",
    alt: "Signs your MacBook Pro needs repair - overheating, battery and screen failure infographic",
    quads: [
      "Transparent MacBook Pro with an infrared thermal map overlay showing red heat zones at the fans and heat pipes, dust buildup inset circle",
      "Cross-section of a swollen lithium battery cell pushing against the trackpad with red expansion arrows and a safety warning callout",
      "MacBook Pro screen showing flicker bands and a stage-light symptom pattern along the bottom edge with display-cable wear-point annotation",
      "MacBook Pro that will not power on connected to a bench power supply with an amperage readout, logic-board fault-path diagram beside"
    ],
  },
];

export default IMAGES;
