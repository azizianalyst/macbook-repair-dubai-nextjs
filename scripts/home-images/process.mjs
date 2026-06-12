// Post-processes raw home-page PNGs into the site's image contract:
//   public/images/home/<file>.jpg                master (watermarked, per-spec size)
//   <file>-desktop.{avif,webp} 1600w | -tablet 800w | -mobile 360w
// Same AZIZI quadrant watermark + EXIF/XMP ownership block as topic-images.
// Usage: node scripts/home-images/process.mjs [--force]
import sharp from "sharp";
import { mkdirSync, readdirSync, existsSync } from "node:fs";
import { IMAGES } from "./manifest.mjs";

const DIR = new URL(".", import.meta.url).pathname;
const RAW = `${DIR}raw`;
const OUT = `${DIR}../../public/images/home`;

mkdirSync(OUT, { recursive: true });

const BRAND_BLUE = "#2d9cdb";
const BRAND_BLUE_LIGHT = "#85c6e8";
const QUAD_OPACITY = 0.15; // raised from 0.11 (June 2026) - user wants the brand readable
const PHONE = "055 741 3706";
const PHONE_INTL = "+971 55 741 3706"; // with country code for the contact bar
const DOMAIN = "macbook-repair-dubai.ae";

function logoGroup(lw, x, y, op) {
  const lh = Math.round(lw * 1.18);
  const fs = Math.round(lw * 0.21);
  const cfs = Math.round(lw * 0.105);
  return `<g transform="translate(${x},${y})" opacity="${op}">
    <polygon points="${0.54 * lw},0 ${0.70 * lw},${0.34 * lh} ${0.42 * lw},${0.56 * lh} ${0.30 * lw},${0.44 * lh}" fill="${BRAND_BLUE}"/>
    <polygon points="${0.70 * lw},${0.34 * lh} ${lw},${0.62 * lh} ${0.40 * lw},${0.62 * lh} ${0.42 * lw},${0.56 * lh}" fill="${BRAND_BLUE_LIGHT}"/>
    <polygon points="${0.16 * lw},${0.50 * lh} ${0.30 * lw},${0.62 * lh} ${0.10 * lw},${0.62 * lh}" fill="${BRAND_BLUE}"/>
    <text x="${lw / 2}" y="${0.92 * lh}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="${fs}" font-weight="700" letter-spacing="${Math.round(fs * 0.45)}" fill="${BRAND_BLUE}">AZIZI</text>
    <text x="${lw / 2}" y="${0.92 * lh + cfs * 1.5}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="${cfs}" font-weight="600" fill="${BRAND_BLUE}">${PHONE} · ${DOMAIN}</text>
  </g>`;
}

// Readable bottom-center contact bar: phone with +971 country code first,
// then the website - matches scripts/topic-images/process.mjs.
function contactBar(w, h) {
  const fs = Math.max(13, Math.round(w * 0.021));
  const text = `${PHONE_INTL}  ·  ${DOMAIN}`;
  const tw = Math.round(text.length * fs * 0.56);
  const pad = Math.round(fs * 1.1);
  const bw = tw + pad * 2;
  const bh = Math.round(fs * 2.1);
  const x = Math.round((w - bw) / 2);
  const y = Math.round(h - bh - h * 0.018);
  return `<g>
    <rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="${Math.round(bh / 2)}" fill="#ffffff" opacity="0.82"/>
    <rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="${Math.round(bh / 2)}" fill="none" stroke="${BRAND_BLUE}" stroke-width="1.5" opacity="0.9"/>
    <text x="${w / 2}" y="${y + bh / 2 + fs * 0.36}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="${fs}" font-weight="700" fill="${BRAND_BLUE}" opacity="0.95">${text}</text>
  </g>`;
}

function wmSvg(w, h) {
  const lw = Math.round(w * 0.17);
  const lh = Math.round(lw * 1.18);
  const cells = [
    [w * 0.25, h * 0.25], [w * 0.75, h * 0.25],
    [w * 0.25, h * 0.75], [w * 0.75, h * 0.75],
  ];
  const groups = cells
    .map(([cx, cy]) => logoGroup(lw, Math.round(cx - lw / 2), Math.round(cy - lh / 2), QUAD_OPACITY))
    .join("");
  return Buffer.from(`<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">${groups}${contactBar(w, h)}</svg>`);
}

const SITE_URL = "https://macbook-repair-dubai.ae";
const LICENSE_URL = `${SITE_URL}/image-usage-license`;
const COPYRIGHT = "© MacBook Repair Dubai - Azizi Technologies, Dubai. Free reuse with link credit: " + LICENSE_URL;
const EXIF = {
  IFD0: {
    Copyright: COPYRIGHT,
    Artist: "MacBook Repair Dubai (Azizi Technologies)",
    ImageDescription: `Engineering infographic by MacBook Repair Dubai - ${SITE_URL}`,
  },
};
function xmpPacket(alt) {
  return `<?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/">
 <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
  <rdf:Description rdf:about=""
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:xmpRights="http://ns.adobe.com/xap/1.0/rights/"
    xmlns:photoshop="http://ns.adobe.com/photoshop/1.0/"
    xmlns:plus="http://ns.useplus.org/ldf/xmp/1.0/"
    photoshop:Credit="MacBook Repair Dubai (macbook-repair-dubai.ae)"
    photoshop:City="Dubai"
    photoshop:State="Dubai"
    photoshop:Country="United Arab Emirates"
    xmpRights:Marked="True"
    xmpRights:WebStatement="${LICENSE_URL}">
   <dc:creator><rdf:Seq><rdf:li>MacBook Repair Dubai (Azizi Technologies)</rdf:li></rdf:Seq></dc:creator>
   <dc:rights><rdf:Alt><rdf:li xml:lang="x-default">${COPYRIGHT}</rdf:li></rdf:Alt></dc:rights>
   <dc:description><rdf:Alt><rdf:li xml:lang="x-default">${alt.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</rdf:li></rdf:Alt></dc:description>
   <plus:Licensor><rdf:Seq><rdf:li rdf:parseType="Resource">
     <plus:LicensorURL>${LICENSE_URL}</plus:LicensorURL>
   </rdf:li></rdf:Seq></plus:Licensor>
  </rdf:Description>
 </rdf:RDF>
</x:xmpmeta>
<?xpacket end="w"?>`;
}

// GIMP-style "color to alpha" against white: pure white becomes fully
// transparent, dark/saturated art stays opaque, antialiased edges keep a
// smooth partial alpha. Lets the blueprint float on any page background.
async function whiteToAlpha(input) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  // Generated "white" backgrounds often sit at ~244-250, which would leave a
  // faint milky veil over colored page bands - snap anything within ~7% of
  // white to fully transparent.
  const A_FLOOR = 18;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const a = Math.max(255 - r, 255 - g, 255 - b); // 0 for white, 255 for black
    if (a <= A_FLOOR) {
      data[i + 3] = 0;
      continue;
    }
    data[i] = Math.round(Math.max(0, Math.min(255, ((r - (255 - a)) * 255) / a)));
    data[i + 1] = Math.round(Math.max(0, Math.min(255, ((g - (255 - a)) * 255) / a)));
    data[i + 2] = Math.round(Math.max(0, Math.min(255, ((b - (255 - a)) * 255) / a)));
    data[i + 3] = Math.min(data[i + 3], a);
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toBuffer();
}

async function variant(master, w, h, file, suffix, alt, watermark = true) {
  let pipeline = master.clone().resize(w, h, { fit: "cover" });
  if (watermark) pipeline = pipeline.composite([{ input: wmSvg(w, h), top: 0, left: 0 }]);
  const marked = await pipeline.png().toBuffer();
  const out = sharp(marked).withExif(EXIF).withXmp(xmpPacket(alt));
  if (suffix === null) {
    await out.png({ compressionLevel: 9, palette: false }).toFile(`${OUT}/${file}.png`);
  } else if (suffix.endsWith("avif")) {
    await out.avif({ quality: 48 }).toFile(`${OUT}/${file}-${suffix}`);
  } else {
    await out.webp({ quality: 70 }).toFile(`${OUT}/${file}-${suffix}`);
  }
}

// The generator draws a "technical drawing sheet" frame (border lines, ruler
// ticks, corner marks) within ~5% of every edge. Trim it off so the art sits
// clean inside the site's own rounded card borders.
const EDGE_TRIM = 0.035;

const available = new Set(readdirSync(RAW).filter((f) => f.endsWith(".png")));
let ok = 0, missing = 0;
for (const spec of IMAGES) {
  if (!available.has(`${spec.file}.png`)) { missing++; continue; }
  if (existsSync(`${OUT}/${spec.file}-mobile.avif`) && process.argv[2] !== "--force") { ok++; continue; }
  const raw = sharp(`${RAW}/${spec.file}.png`);
  const { width: rw, height: rh } = await raw.metadata();
  const t = spec.trim ?? EDGE_TRIM; // per-image override for deeper frames
  const trimmed = await raw
    .extract({
      left: Math.round(rw * t),
      top: Math.round(rh * t),
      width: Math.round(rw * (1 - 2 * t)),
      height: Math.round(rh * (1 - 2 * t)),
    })
    .png()
    .toBuffer();
  const master = sharp(await whiteToAlpha(trimmed));
  const wm = spec.watermark !== false;
  const [mw, mh] = spec.size;
  await variant(master, mw, mh, spec.file, null, spec.alt, wm);
  const ratio = mh / mw;
  for (const [w, s] of [[1600, "desktop"], [800, "tablet"], [360, "mobile"]]) {
    const h = Math.round(w * ratio);
    await variant(master, w, h, spec.file, `${s}.avif`, spec.alt, wm);
    await variant(master, w, h, spec.file, `${s}.webp`, spec.alt, wm);
  }
  ok++;
  console.log(`processed ${spec.file}`);
}
console.log(`DONE: ${ok} processed, ${missing} missing raw files.`);
