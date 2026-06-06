// Registry for the MacBook how-to guide cluster. Drives the /macbook-guides hub and the
// per-guide "service bridge" callout (routes informational readers to the right repair page).
export type GuideBridge = { line: string; label: string; href: string };
export type Guide = { slug: string; title: string; theme: string; bridge: GuideBridge };

export const GUIDES: Guide[] = [
  // ── Everyday tasks ──────────────────────────────────────────────────────
  { slug: "/how-to-take-a-screenshot-on-a-macbook", title: "How to take a screenshot on a MacBook", theme: "Everyday tasks",
    bridge: { line: "Screen capture working but the display itself is glitchy or cracked?", label: "MacBook screen repair Dubai", href: "/macbook-screen-repair-dubai" } },
  { slug: "/how-to-copy-and-paste-on-a-macbook", title: "How to copy and paste on a MacBook", theme: "Everyday tasks",
    bridge: { line: "Keyboard or trackpad not cooperating with shortcuts?", label: "MacBook keyboard & trackpad repair", href: "/macbook-keyboard-repair-dubai" } },
  { slug: "/how-to-change-macbook-name", title: "How to change your MacBook's name", theme: "Everyday tasks",
    bridge: { line: "A bigger MacBook problem than a name change?", label: "Free diagnostic across Dubai", href: "/macbook-full-diagnostic-dubai" } },
  { slug: "/how-can-i-record-audio-while-screen-recording-on-mac", title: "Record audio while screen recording on Mac", theme: "Everyday tasks",
    bridge: { line: "No sound at all, or crackling speakers?", label: "MacBook speaker & audio repair", href: "/macbook-speaker-repair-dubai" } },

  // ── Resets & passwords ──────────────────────────────────────────────────
  { slug: "/how-to-reset-a-macbook", title: "How to reset a MacBook (restart, SMC, NVRAM, factory)", theme: "Resets & passwords",
    bridge: { line: "Reset done but the MacBook still won't behave?", label: "Free workshop diagnostic in Dubai", href: "/macbook-full-diagnostic-dubai" } },
  { slug: "/how-to-recover-macbook-password", title: "How to recover a forgotten MacBook password", theme: "Resets & passwords",
    bridge: { line: "Locked out for good, or stuck after a reset?", label: "macOS reinstall & recovery in Dubai", href: "/macos-reinstall-dubai" } },
  { slug: "/how-do-i-reset-passwords-on-my-macbook", title: "How to reset passwords on your MacBook", theme: "Resets & passwords",
    bridge: { line: "Password reset won't take, or the Mac won't boot?", label: "macOS reinstall & recovery in Dubai", href: "/macos-reinstall-dubai" } },

  // ── Maintenance & care ──────────────────────────────────────────────────
  { slug: "/how-to-clean-a-macbook-screen", title: "How to clean a MacBook screen safely", theme: "Maintenance & care",
    bridge: { line: "A scratch or crack that won't wipe away?", label: "MacBook screen repair Dubai", href: "/macbook-screen-repair-dubai" } },
  { slug: "/how-to-clean-macbook-pro-keyboard", title: "How to clean a MacBook Pro keyboard", theme: "Maintenance & care",
    bridge: { line: "Cleaning didn't fix sticky or dead keys?", label: "MacBook keyboard replacement Dubai", href: "/macbook-keyboard-repair-dubai" } },
  { slug: "/do-macbooks-last-over-a-decade", title: "Do MacBooks last over a decade?", theme: "Maintenance & care",
    bridge: { line: "Keeping yours longer? A fresh battery adds years.", label: "MacBook battery replacement Dubai", href: "/macbook-battery-replacement-dubai" } },
  { slug: "/top-10-common-macbook-problems-and-how-to-fix-them", title: "Top 10 common MacBook problems and how to fix them", theme: "Maintenance & care",
    bridge: { line: "Got one of these and the fix didn't stick?", label: "Free diagnostic, Dubai-wide", href: "/macbook-full-diagnostic-dubai" } },

  // ── Buying, upgrading & selling ─────────────────────────────────────────
  { slug: "/how-to-choose-the-right-configuration-for-a-macbook", title: "How to choose the right MacBook configuration", theme: "Buying, upgrading & selling",
    bridge: { line: "Already own one and it's short on storage or RAM?", label: "MacBook SSD & RAM upgrades Dubai", href: "/macbook-ssd-upgrade-dubai" } },
  { slug: "/how-to-choose-the-best-apple-laptop-for-gaming", title: "Best Apple laptop for gaming", theme: "Buying, upgrading & selling",
    bridge: { line: "Gaming Mac running hot or throttling?", label: "MacBook overheating fix Dubai", href: "/macbook-overheating-fix-dubai" } },
  { slug: "/how-to-erase-all-data-on-my-mac-before-giving-it-away", title: "How to erase all data before selling your Mac", theme: "Buying, upgrading & selling",
    bridge: { line: "Selling up? We buy MacBooks across Dubai, working or faulty.", label: "Sell your MacBook in Dubai", href: "/sell-macbook-dubai" } },
  // ── Troubleshooting ──
  { slug: "/blog/macbook-black-screen-fix", title: "MacBook Black Screen? Fixes for 2026", theme: "Troubleshooting",
    bridge: { line: "Black screen turned out to be the panel or display flex?", label: "MacBook screen repair Dubai", href: "/macbook-screen-repair-dubai" } },
  { slug: "/blog/macbook-stuck-on-apple-logo", title: "MacBook Stuck on the Apple Logo? How to Fix It", theme: "Troubleshooting",
    bridge: { line: "Recovery and First Aid still won't get it past the logo?", label: "macOS reinstall & recovery Dubai", href: "/macos-reinstall-dubai" } },
  { slug: "/blog/macbook-fan-loud-always-on", title: "MacBook Fan Always Loud? Causes & Fixes", theme: "Troubleshooting",
    bridge: { line: "Cleaning at home didn't quiet it down?", label: "MacBook fan cleaning & repaste Dubai", href: "/mac-fan-cleaning-dubai" } },
  { slug: "/blog/macbook-wont-charge-fixes", title: "MacBook Won't Charge? 8 Fixes to Try First", theme: "Troubleshooting",
    bridge: { line: "Tried every charger and it still won't charge?", label: "MacBook charging port repair Dubai", href: "/macbook-charging-port-repair-dubai" } },
];

export const GUIDE_THEMES = ["Troubleshooting", "Everyday tasks", "Resets & passwords", "Maintenance & care", "Buying, upgrading & selling"];

export function guideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
