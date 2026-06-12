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

// ---------------------------------------------------------------------------
// Topic infographics - blueprint-style 2x2 engineering images, one per URL
// topic cluster (88 total, generated + watermarked, see scripts/topic-images/).
// Real lab photos keep priority on the Mac services that already have them.
// ---------------------------------------------------------------------------
import { TOPIC_IMAGES, type TopicImage } from "./topic-images.generated";

const T = (key: string): TopicImage | undefined => TOPIC_IMAGES[key];

/** Service/money-page topic image (src + alt) for a route path. */
export function topicForPath(path: string): TopicImage | undefined {
  const p = path.toLowerCase();

  // iPod Touch (legacy) shares the iPhone family teardown hub image.
  if (p.includes("ipod")) return T("iphone-repair-hub-dubai");

  if (p.includes("iphone")) {
    if (p.includes("screen")) return T("iphone-screen-repair-dubai");
    if (p.includes("battery")) return T("iphone-battery-replacement-dubai");
    if (p.includes("lightning")) return T("iphone-lightning-port-repair-dubai");
    if (p.includes("usb-c")) return T("iphone-usb-c-port-repair-dubai");
    if (p.includes("charging")) return T("iphone-charging-port-repair-dubai");
    if (p.includes("camera")) return T("iphone-camera-repair-dubai");
    if (p.includes("face-id")) return T("iphone-face-id-repair-dubai");
    if (p.includes("water")) return T("iphone-water-damage-repair-dubai");
    if (p.includes("earpiece")) return T("iphone-earpiece-repair-dubai");
    if (p.includes("microphone")) return T("iphone-microphone-repair-dubai");
    if (p.includes("headphone")) return T("iphone-headphone-jack-repair-dubai");
    if (p.includes("speaker")) return T("iphone-speaker-audio-repair-dubai");
    if (p.includes("back-glass")) return T("iphone-back-glass-repair-dubai");
    if (p.includes("nfc")) return T("iphone-nfc-repair-dubai");
    if (p.includes("vibration")) return T("iphone-vibration-motor-repair-dubai");
    if (p.includes("wifi") || p.includes("bluetooth")) return T("iphone-wifi-bluetooth-repair-dubai");
    if (p.includes("home-button")) return T("iphone-home-button-repair-dubai");
    if (p.includes("power-button")) return T("iphone-power-button-repair-dubai");
    if (p.includes("volume")) return T("iphone-volume-button-repair-dubai");
    if (p.includes("sim-tray")) return T("iphone-sim-tray-repair-dubai");
    if (p.includes("button")) return T("iphone-buttons-repair-dubai");
    if (p.includes("data-recovery")) return T("iphone-data-recovery-dubai");
    if (p.includes("network-unlock")) return T("iphone-network-unlock-dubai");
    if (p.includes("icloud") || p.includes("unlock")) return T("iphone-unlock-software-dubai");
    if (p.includes("software")) return T("iphone-software-fix-dubai");
    if (p.includes("diagnostic")) return T("iphone-diagnostic-dubai");
    return undefined; // iPhone model pages keep their generation device image
  }

  if (p.includes("ipad")) {
    if (p.includes("back-glass")) return undefined; // real rear photo via imageForSlug
    if (p.includes("screen")) return T("ipad-screen-repair-dubai");
    if (p.includes("battery")) return T("ipad-battery-replacement-dubai");
    if (p.includes("charging")) return T("ipad-charging-port-repair-dubai");
    if (p.includes("water")) return T("ipad-water-damage-repair-dubai");
    if (p.includes("camera") || p.includes("speaker")) return T("ipad-camera-audio-repair-dubai");
    if (p.includes("home-button")) return T("ipad-home-button-repair-dubai");
    if (p.includes("power-button")) return T("ipad-power-button-repair-dubai");
    if (p.includes("button") || p.includes("smart-connector") || p.includes("pencil"))
      return T("ipad-buttons-connector-repair-dubai");
    if (p.includes("icloud") || p.includes("software")) return T("ipad-software-icloud-dubai");
    if (p.includes("diagnostic")) return T("ipad-diagnostic-dubai");
    return undefined;
  }

  if (p.includes("imac")) {
    if (p.includes("screen")) return T("imac-screen-repair-dubai");
    if (p.includes("logic-board") || p.includes("gpu")) return T("imac-logic-board-repair-dubai");
    if (p.includes("ssd") || p.includes("ram")) return T("imac-ssd-ram-upgrade-dubai");
    if (p.includes("power-supply") || p.includes("not-turning-on")) return T("imac-power-supply-repair-dubai");
    if (p.includes("fan") || p.includes("overheating")) return T("imac-cooling-repair-dubai");
    if (p.includes("data-recovery") || p.includes("diagnostic")) return T("imac-data-recovery-dubai");
    if (p.includes("virus")) return T("macbook-virus-removal-dubai");
    if (p.includes("os-reinstall")) return T("macos-reinstall-dubai");
    return undefined;
  }

  // Money / cross-device landing pages
  if (p.includes("annual-maintenance")) return T("annual-maintenance-contract-dubai");
  if (p.includes("applecare") || p.includes("apple-repair-programs")) return T("applecare-warranty-repair-dubai");
  if (p.includes("out-of-warranty")) return T("out-of-warranty-repair-dubai");
  if (p.includes("insurance")) return T("macbook-insurance-dubai");
  if (p.includes("apple-service-center")) return T("apple-service-center-dubai");
  if (p.includes("apple-display")) return T("apple-display-repair-dubai");
  if (p === "/apple-repair-dubai") return T("apple-repair-dubai");
  if (p.includes("onsite")) return T("onsite-macbook-repair-dubai");
  if (p.includes("sell-") || p.includes("trade-in")) return T("macbook-trade-in-dubai");
  if (p.includes("near-me") || p.includes("cost-calculator")) return T("macbook-repair-near-me");

  // Mac mini / Studio / Pro
  if (p.includes("mac-mini-ram")) return T("macbook-ram-upgrade-dubai");
  if (p.includes("mac-mini")) return T("mac-mini-repair-dubai");
  if (p.includes("mac-pro-gpu")) return T("macbook-gpu-repair-dubai");
  if (p === "/mac-pro-repair-dubai") return T("mac-pro-repair-dubai");

  // MacBook / Mac services (real lab photos keep priority in imageForService)
  if (p.includes("screen") || p.includes("display")) return T("apple-display-repair-dubai");
  if (p.includes("battery")) return T("macbook-battery-replacement-dubai");
  if (p.includes("trackpad")) return T("macbook-trackpad-repair-dubai");
  if (p.includes("hinge")) return T("macbook-hinge-repair-dubai");
  if (p.includes("flexgate")) return T("macbook-flexgate-repair-dubai");
  if (p.includes("ssd")) return T("macbook-ssd-upgrade-dubai");
  if (p.includes("ram")) return T("macbook-ram-upgrade-dubai");
  if (p.includes("camera")) return T("macbook-camera-repair-dubai");
  if (p.includes("speaker")) return T("macbook-speaker-repair-dubai");
  if (p.includes("microphone")) return T("macbook-microphone-repair-dubai");
  if (p.includes("touch-id") || p.includes("power-button")) return T("macbook-touch-id-repair-dubai");
  if (p.includes("touch-bar")) return T("macbook-touch-bar-repair-dubai");
  if (p.includes("backup")) return T("macbook-backup-service-dubai");
  if (p.includes("data-recovery")) return T("macbook-data-recovery-dubai");
  if (p.includes("safe-mode")) return T("macbook-safe-mode-repair-dubai");
  if (p.includes("diagnostic") || p.includes("not-turning-on"))
    return T("macbook-diagnostic-dubai");
  if (p.includes("wifi") || p.includes("bluetooth")) return T("macbook-wifi-bluetooth-repair-dubai");
  if (p.includes("charging-port") || p.includes("port-repair")) return T("macbook-usbc-port-repair-dubai");
  if (p.includes("gpu")) return T("macbook-gpu-repair-dubai");
  if (p.includes("thermal-paste")) return T("macbook-thermal-paste-dubai");
  if (p.includes("virus")) return T("macbook-virus-removal-dubai");
  if (p.includes("os-reinstall") || p.includes("boot-camp")) return T("macos-reinstall-dubai");
  if (p.includes("migration") || p.includes("setup")) return T("mac-data-migration-dubai");
  if (p.includes("cleaning")) return T("macbook-cleaning-service-dubai");
  if (p.includes("performance") || p.includes("tune")) return T("mac-performance-tune-dubai");
  if (p.includes("activation-lock")) return T("mac-activation-lock-dubai");
  return undefined;
}

/** Featured image for blog posts AND how-to guides (BlogPostTemplate). */
export function blogTopicForPath(path: string): TopicImage | undefined {
  const p = path.toLowerCase();

  // How-to guides
  if (p.includes("how-to-clean") || p.includes("clean-macbook")) return T("guide-clean-macbook-dubai");
  if (p.includes("reset") || p.includes("password") || p.includes("erase-all-data"))
    return T("guide-reset-password-macbook-dubai");
  if (p.includes("screenshot") || p.includes("record-audio") || p.includes("screen-recording"))
    return T("guide-screenshot-recording-macbook-dubai");
  if (p.includes("copy-and-paste") || p.includes("change-macbook-name")) return T("guide-macbook-basics-dubai");
  if (p.includes("choose") || p.includes("configuration") || p.includes("gaming"))
    return T("guide-choose-macbook-dubai");
  if (p.includes("last-over-a-decade") || p.includes("common-macbook-problems") || p.includes("where-to-repair"))
    return T("guide-macbook-longevity-dubai");

  // Device-specific posts first, then topic clusters
  if (p.includes("iphone") || p.includes("airpods") || p.includes("ipod")) return T("blog-iphone-guides-dubai");
  if (p.includes("ipad")) return T("blog-ipad-guides-dubai");
  if (p.includes("battery")) return T("blog-battery-health-dubai");
  if (p.includes("overheat") || p.includes("cooling") || p.includes("thermal")) return T("blog-overheating-cooling-dubai");
  if (p.includes("water") || p.includes("liquid") || p.includes("spill")) return T("blog-water-damage-dubai");
  if (p.includes("data-recovery") || p.includes("recover")) return T("blog-data-recovery-guide-dubai");
  if (p.includes("ssd") || p.includes("storage")) return T("blog-storage-upgrade-dubai");
  if (p.includes("silicon") || p.includes("intel") || /m[1-5]/.test(p) || p.includes("chip"))
    return T("blog-apple-silicon-dubai");
  if (p.includes("screen") || p.includes("display")) return T("blog-screen-display-dubai");
  if (p.includes("not-turning-on") || p.includes("wont-turn")) return T("macbook-diagnostic-dubai");
  if (p.includes("macos") || p.includes("software") || p.includes("update")) return T("blog-software-macos-dubai");
  if (p.includes("cost") || p.includes("price") || p.includes("applecare") || p.includes("warranty") ||
      p.includes("insurance") || p.includes("genuine-parts")) return T("blog-repair-cost-dubai");
  if (p.includes("best-") || p.includes("-vs-") || p.includes("which") || p.includes("buy"))
    return T("blog-buying-guide-dubai");
  if (p.includes("sell") || p.includes("trade")) return T("macbook-trade-in-dubai");
  return T("blog-apple-news-dubai");
}

/** Topic image for ANY route - blog/guide, service/money, or location.
 *  Single source of truth for OG images and the image sitemap. */
export function imageForRoute(path: string): TopicImage | undefined {
  const isBlogPost = path.startsWith("/blog/") && path !== "/blog";
  const isGuide = /^\/(how-|do-macbooks|top-10|where-to)/.test(path);
  if (isBlogPost || isGuide) return blogTopicForPath(path);
  const areaSlug = path.match(/^\/macbook-repair-([a-z-]+)$/)?.[1];
  return (
    topicForPath(path) ??
    (areaSlug ? areaTopicForSlug(areaSlug) : undefined) ??
    deviceHubFallback(path)
  );
}

// SEO-image fallback by device family so every hub/model/service route gets a
// real topic og:image instead of the generic og-default. Used ONLY for
// metadata/sitemaps (imageForRoute) - in-page heroes keep their device photos.
function deviceHubFallback(path: string): TopicImage | undefined {
  const p = path.toLowerCase();
  if (p.includes("macbook-pro")) return T("macbook-pro-repair-hub-dubai");
  if (p.includes("macbook-air")) return T("macbook-air-repair-hub-dubai");
  if (p.includes("imac")) return T("imac-repair-hub-dubai");
  if (p.includes("iphone") || p.includes("ipod")) return T("iphone-repair-hub-dubai");
  if (p.includes("ipad")) return T("ipad-repair-hub-dubai");
  if (p.includes("mac-studio")) return T("mac-studio-repair-dubai");
  if (p.includes("mac-mini")) return T("mac-mini-repair-dubai");
  if (p.includes("mac-pro")) return T("mac-pro-repair-dubai");
  if (p.includes("macbook")) return T("macbook-pro-repair-hub-dubai");
  if (p.includes("mac-") || p.includes("mac repair") || p === "/mac-repair-dubai") return T("mac-repair-hub-dubai");
  return undefined;
}

/** Location hero image for area/city pages, keyed by area slug. */
export function areaTopicForSlug(slug: string): TopicImage | undefined {
  const s = slug.toLowerCase();
  if (/deira|bur-dubai|karama/.test(s)) return T("macbook-repair-old-dubai");
  if (/abu-dhabi|al-ain/.test(s)) return T("macbook-repair-abu-dhabi");
  if (/sharjah|ajman|ras-al-khaimah|fujairah|umm-al-quwain|kalba|khor-fakkan/.test(s))
    return T("macbook-repair-northern-emirates");
  if (s.includes("near-me")) return T("macbook-repair-near-me");
  return T("macbook-repair-dubai-pickup"); // Dubai districts
}

// Real service-specific lab photos keep priority for Mac/MacBook repairs that
// have genuine workshop photography; everything else routes to its topic
// infographic. Consumed with priority over imageForSlug in SubServicePageTemplate.
export function imageForService(path: string): string | undefined {
  const p = path.toLowerCase();
  const isIDevice = p.includes("iphone") || p.includes("ipod") || p.includes("ipad");
  if (!isIDevice && !p.includes("imac")) {
    if (p.includes("logic-board")) return `${REAL}/macbook-pro-internal-layout-dubai.jpg`;
    if (p.includes("keyboard")) return `${REAL}/macbook-keyboard-repair-dubai.jpg`;
    if (p.includes("fan") || p.includes("overheat") || p.includes("cooling"))
      return `${REAL}/macbook-fan-heatsink-dubai.jpg`;
    if (p.includes("battery")) return `${REAL}/macbook-battery-internals-dubai.jpg`;
    if (p.includes("water")) return `${REAL}/macbook-full-internals-dubai.jpg`;
    if (p.includes("screen")) return `${SVC}/svc-screen.jpg`;
  }
  return topicForPath(path)?.src;
}
