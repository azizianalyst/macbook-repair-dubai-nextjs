// Maps device slugs / families / services to hero images in /public/images.
// Returns undefined when no image is available so the Hero falls back to text-only.
//
// PLACEHOLDER NOTICE - every JPEG referenced from here is currently AI-generated
// and is scheduled to be replaced with real documentary photography of the
// Concord Tower workshop. See:
//   - docs/PHOTOGRAPHY_BRIEF.md   (shot list + style direction)
//   - docs/PHOTO_REPLACEMENT_TRACKER.md   (per-file replacement status)
// When real photos arrive, move them into /public/images/real/{category}/ and
// repoint the paths below. AVIF + WebP variants regenerate via
// `node scripts/optimize-images.cjs`.

const DEVICE = "/images/devices";
const SVC = "/images/services";
// Real documentary photos of the Dubai workshop (Concord Tower lab). These replace
// the AI placeholders for MacBook/Mac/iMac/iPad. AVIF+WebP variants via optimize-images.cjs.
const REAL = "/images/real/lab";

function iphoneImage(slug: string): string | undefined {
  const s = slug.toLowerCase();
  if (s.includes("iphone-air")) return `${DEVICE}/iphone-air.jpg`;
  if (s.includes("iphone-17e")) return `${DEVICE}/iphone-17e.jpg`;
  if (s.includes("iphone-17")) return `${DEVICE}/iphone-17.jpg`;
  if (s.includes("iphone-16")) return `${DEVICE}/iphone-16.jpg`;
  if (s.includes("iphone-15")) return `${DEVICE}/iphone-15.jpg`;
  if (s.includes("iphone-14")) return `${DEVICE}/iphone-14.jpg`;
  if (s.includes("iphone-13")) return `${DEVICE}/iphone-13.jpg`;
  if (s.includes("iphone-12")) return `${DEVICE}/iphone-12.jpg`;
  if (s.includes("iphone-11")) return `${DEVICE}/iphone-11.jpg`;
  if (s.match(/iphone-(x|xr|xs)/)) return `${DEVICE}/iphone-x-era.jpg`;
  if (s.includes("iphone-se")) return `${DEVICE}/iphone-se.jpg`;
  if (s.match(/iphone-([6-8])/)) return `${DEVICE}/iphone-legacy.jpg`;
  return `${DEVICE}/iphone-15.jpg`;
}

function macbookImage(slug: string): string | undefined {
  const s = slug.toLowerCase();
  // NB: match "macbook-air"/"macbook-pro" tokens, NOT bare "air"/"pro" - every
  // slug contains "re-pair", which falsely matched a bare "air" check.
  if (s.includes("macbook-neo")) return `${DEVICE}/macbook-neo.jpg`; // concept model: keep render
  if (s.includes("macbook-air")) {
    return `${REAL}/macbook-air-lid-dubai.jpg`;
  }
  if (s.includes("macbook-pro")) {
    if (s.includes("intel")) return `${REAL}/macbook-open-topdown-dubai.jpg`;
    if (s.includes("pro-16")) return `${REAL}/macbook-pro-product-dubai.jpg`;
    return `${REAL}/macbook-pro-lid-apple-logo-dubai.jpg`;
  }
  return `${REAL}/macbook-pro-product-dubai.jpg`;
}

function ipadImage(slug: string): string | undefined {
  const s = slug.toLowerCase();
  if (s.includes("pro")) return `${REAL}/ipad-on-bench-dubai.jpg`;
  return `${REAL}/ipad-rear-dubai.jpg`;
}

function watchImage(slug: string): string | undefined {
  const s = slug.toLowerCase();
  if (s.includes("ultra-3") || s.includes("ultra-2026")) return `${DEVICE}/watch-ultra-3.jpg`;
  if (s.includes("ultra")) return `${DEVICE}/watch-ultra.jpg`;
  if (s.includes("-se")) return `${DEVICE}/watch-se.jpg`;
  if (s.match(/series-([4-6])/)) return `${DEVICE}/watch-series-classic.jpg`;
  return `${DEVICE}/watch-series.jpg`;
}

function imacImage(slug: string): string | undefined {
  return `${REAL}/imac-front-dubai.jpg`;
}

function macDesktopImage(slug: string): string | undefined {
  const s = slug.toLowerCase();
  if (s.includes("mac-pro") && s.includes("rack")) return `${DEVICE}/mac-pro-rack.jpg`;
  if (s.includes("mac-pro")) return `${DEVICE}/mac-pro-tower.jpg`;
  if (s.includes("mac-studio")) return `${REAL}/mac-studio-dubai.jpg`;
  if (s.includes("mini") && s.includes("pro")) return `${DEVICE}/mac-mini-pro.jpg`;
  if (s.includes("mini")) return `${DEVICE}/mac-mini.jpg`;
  return undefined;
}

export function imageForSlug(slug: string): string | undefined {
  const s = slug.toLowerCase();
  if (s.includes("iphone")) return iphoneImage(s);
  if (s.includes("macbook")) return macbookImage(s);
  if (s.includes("ipad")) return ipadImage(s);
  if (s.includes("watch")) return watchImage(s);
  if (s.includes("imac")) return imacImage(s);
  if (s.includes("mac-mini") || s.includes("mac-studio") || s.includes("mac-pro")) return macDesktopImage(s);
  return undefined;
}

export function imageForFamily(family: string): string | undefined {
  const f = family.toLowerCase();
  if (f.includes("iphone")) return `${DEVICE}/iphone-15.jpg`;
  if (f.includes("macbook")) return `${REAL}/macbook-pro-product-dubai.jpg`;
  if (f.includes("ipad")) return `${REAL}/ipad-rear-dubai.jpg`;
  if (f.includes("watch")) return `${DEVICE}/watch-series.jpg`;
  if (f.includes("imac")) return `${REAL}/imac-front-dubai.jpg`;
  if (f.includes("mac mini") || f.includes("mini")) return `${DEVICE}/mac-mini.jpg`;
  if (f.includes("studio")) return `${REAL}/mac-studio-dubai.jpg`;
  if (f.includes("mac pro")) return `${DEVICE}/mac-pro-tower.jpg`;
  return undefined;
}

// Real service-specific lab photos for Mac/MacBook/iMac repair pages. Returns
// undefined for iPhone/iPad/iPod paths so they keep their device hero image.
// Consumed with priority over imageForSlug in SubServicePageTemplate.
export function imageForService(path: string): string | undefined {
  const p = path.toLowerCase();
  if (p.includes("iphone") || p.includes("ipod") || p.includes("ipad")) return undefined;
  if (p.includes("logic-board")) return `${REAL}/macbook-pro-internal-layout-dubai.jpg`;
  if (p.includes("keyboard")) return `${REAL}/macbook-keyboard-repair-dubai.jpg`;
  if (p.includes("fan") || p.includes("overheat") || p.includes("cooling"))
    return `${REAL}/macbook-fan-heatsink-dubai.jpg`;
  if (p.includes("battery")) return `${REAL}/macbook-battery-internals-dubai.jpg`;
  if (p.includes("water")) return `${REAL}/macbook-full-internals-dubai.jpg`;
  if (p.includes("screen")) return `${SVC}/svc-screen.jpg`;
  return undefined;
}
