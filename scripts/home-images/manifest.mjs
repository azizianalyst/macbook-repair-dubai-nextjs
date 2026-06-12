// Home-page single-subject images — same blueprint house style as
// scripts/topic-images, but ONE centered composition per image (no 2x2 grid).
// Approved June 2026: the home page uses separate single images per slot.

export const STYLE_HEADER =
  "Ultra-detailed technical engineering infographic, clean white background, ONE single centered composition filling the frame (no grid, no panels, no split layout). Blueprint-style industrial design visualization featuring a photorealistic 3D render, transparent cutaways, exploded views, dimensional annotations, technical callout boxes, measurement guides, and color-coded engineering arrows (red, blue, green, orange). Professional product design presentation, Apple-style industrial design documentation, high-end technical illustration.";

export const STYLE_FOOTER =
  "Highly detailed CAD visualization, industrial design presentation board, precision engineering drawing, transparent materials, photorealistic rendering, ultra-sharp focus, clean typography, scientific infographic aesthetics, professional product teardown documentation, white paper style, 8K resolution, museum-quality technical illustration, exceptional clarity.";

export function composePrompt(spec) {
  // spec.prompt overrides the blueprint style entirely (e.g. the text-free hero).
  if (spec.prompt) return spec.prompt;
  return `${STYLE_HEADER} SUBJECT: ${spec.subject}. ${STYLE_FOOTER}`;
}

export function genericize(prompt) {
  return prompt
    .replace(/MacBook Pro|MacBook Air|MacBook/g, "premium aluminum laptop")
    .replace(/Apple-style/g, "premium minimalist");
}

// ratio: Higgsfield aspect_ratio + output pixel size for the master file.
export const IMAGES = [
  {
    file: "home-hero-macbook-m5-exploded",
    ratio: "1:1",
    size: [1200, 1200],
    trim: 0,           // modern render has no drawing-sheet frame to cut
    watermark: false,  // clean hero - ownership stays in EXIF/XMP metadata
    alt: "MacBook repair Dubai - the latest MacBook Pro M5 in a floating exploded view showing display, logic board, battery and cooling system",
    prompt:
      "Ultra-modern premium product visualization of the latest Apple MacBook Pro M5 (2026) in a dramatic floating exploded view at a cinematic three-quarter angle - Liquid Retina XDR display, space black aluminum top case with Magic Keyboard, M5 logic board with copper heat pipes, battery cells, twin cooling fans and the aluminum bottom case hovering apart in clean vertical separation. Photorealistic high-end studio render, soft realistic shadows and reflections, premium minimalist Apple-style product photography aesthetic. ABSOLUTELY NO TEXT of any kind - no labels, no annotations, no callout boxes, no dimension lines, no arrows, no numbers, no letters, no logos, no watermarks anywhere in the image. Pure white background, ultra-sharp focus, 8K museum-quality render.",
  },
  {
    file: "home-service-screen-replacement",
    ratio: "4:3",
    size: [1600, 1200],
    alt: "MacBook screen replacement Dubai - Retina display assembly lifted from the hinge in exploded view with crack pattern and layer annotations",
    subject:
      "A single MacBook Pro Retina display assembly being lifted away from the open hinge line in exploded view, cracked glass panel mapped with red stress-line annotations radiating from the impact point, display layer stack - cover glass, mini-LED backlight, panel - fanned slightly apart with thickness measurements and callout labels",
  },
  {
    file: "home-service-battery-replacement",
    ratio: "4:3",
    size: [1600, 1200],
    alt: "MacBook battery replacement Dubai - lithium battery pack floating above an opened MacBook with charge-cycle gauge annotations",
    subject:
      "A MacBook Pro opened flat with its multi-cell lithium-polymer battery pack floating above the chassis in exploded view, adhesive pull-tab arrows, battery connector and cell structure annotated, a charge-cycle gauge and maximum-capacity percentage dial drawn beside the battery in clean engineering style",
  },
  {
    file: "home-service-keyboard-repair",
    ratio: "4:3",
    size: [1600, 1200],
    alt: "MacBook keyboard repair Dubai - keycap and scissor mechanism exploded above the aluminum top case with backlight sheet",
    subject:
      "A MacBook Pro aluminum top case with one keyboard keycap exploded high above its scissor mechanism, silicone dome, backlight LED layer and metal frame - the full key-switch stack floating in assembly order with callout labels, actuation-force and key-travel measurements annotated",
  },
  {
    file: "home-service-logic-board-repair",
    ratio: "4:3",
    size: [1600, 1200],
    trim: 0, // content runs to the sheet edge - trimming clips it (June 2026 audit)
    alt: "MacBook water damage and logic board repair Dubai - microsoldering rework on the logic board under a microscope",
    subject:
      "A MacBook Pro logic board clamped on a microsoldering bench beneath a trinocular microscope lens, hot-air rework nozzle and ESD tweezers in frame, corrosion spots highlighted by red inspection circles with a magnified inset, the M5 chip and power-management ICs labeled with engineering callouts",
  },
  {
    file: "home-process-whatsapp-quote",
    ratio: "4:3",
    size: [1600, 1200],
    alt: "Step 1 - WhatsApp your MacBook model and serial for a confirmed repair price quote in Dubai",
    subject:
      "A single smartphone standing beside one closed MacBook Pro on a clean white stage (no other devices), the phone screen showing a WhatsApp-style chat conversation with an itemized repair quote card and a green confirmed-price checkmark, every price labeled in United Arab Emirates dirhams as 'AED 390' and 'AED 790' (never dollars), engineering-style annotation arrows and dimension lines connecting the phone to the laptop",
  },
  {
    file: "home-process-book-slot",
    ratio: "4:3",
    size: [1600, 1200],
    trim: 0, // content runs to the sheet edge - trimming clips it (June 2026 audit)
    alt: "Step 2 - book a 30-minute repair slot while the exact MacBook part is reserved at the Dubai workshop",
    subject:
      "A minimalist weekly appointment schedule plate showing only weekday names and hour rows (strictly no month name and no year anywhere), one 30-minute slot highlighted in green, next to a transparent spare-part case containing a MacBook Retina display assembly with a red RESERVED tag, a clock dial showing 14:00, drawn in clean engineering documentation style with callout boxes",
  },
  {
    file: "home-process-30min-repair",
    ratio: "4:3",
    size: [1600, 1200],
    trim: 0, // content runs to the sheet edge - trimming clips it (June 2026 audit)
    alt: "Step 3 - MacBook repaired in 30 minutes at the bench or it is free, with up to 12-month warranty",
    subject:
      "Gloved technician hands lowering a new Retina display onto an open MacBook Pro at an organized ESD-safe bench, a large 30-minute countdown timer dial annotated at the corner with the needle near completion, a green quality-check checkmark plate and torque screwdriver beside the laptop",
  },
];

export default IMAGES;
