// Renders a transparent 1280x720 watermark overlay for brand videos:
// AZIZI logo + phone + domain, bottom-right corner (solid-ish) and a faint
// center mark, matching the image-pipeline brand block.
// Usage: node scripts/home-images/video-watermark.mjs /tmp/video-wm.png
import sharp from "sharp";

const BRAND_BLUE = "#2d9cdb";
const BRAND_BLUE_LIGHT = "#85c6e8";
const PHONE = "055 741 3706";
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

const W = 1280, H = 720;
const corner = logoGroup(150, W - 170, H - 200, 0.85); // bottom-right, clearly visible
const center = logoGroup(260, W / 2 - 130, H / 2 - 155, 0.07); // faint anti-crop center mark
const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">${center}${corner}</svg>`;

await sharp(Buffer.from(svg)).png().toFile(process.argv[2] ?? "/tmp/video-wm.png");
console.log("watermark written");
