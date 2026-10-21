import { AlertTriangle } from "lucide-react";

// Prominent, highlighted notice shown on every screen-related page (plus /warranty and
// /pricing): a newly cracked or broken screen is accidental PHYSICAL damage and is NOT
// covered by any repair warranty. Sets customer expectations up front and reduces disputes.
// `device` lets the copy read "screen", "glass", "display", etc. per page.
export function GlassWarrantyNotice({ device = "screen" }: { device?: string }) {
  return (
    <div
      role="note"
      className="flex gap-3 rounded-md border border-warning/40 bg-warning/10 p-4 md:p-5"
    >
      <AlertTriangle size={22} className="text-warning shrink-0 mt-0.5" aria-hidden />
      <div className="text-[14.5px] leading-relaxed text-text-muted">
        <p className="font-semibold text-text mb-1">
          A cracked or broken {device} is not covered by warranty
        </p>
        <p>
          Your warranty covers the new part and our workmanship - a faulty panel, dead pixels,
          backlight bleed or touch failure. It does <strong className="text-text">not</strong> cover
          a {device} that cracks or breaks <em>after</em> the repair. Glass can break from a drop, a
          knock, pressure on the closed lid, or opening the device unevenly - that is accidental
          physical damage, and no repair warranty (ours or Apple's) covers it. Please handle a
          freshly fitted {device} with care.
        </p>
      </div>
    </div>
  );
}

export default GlassWarrantyNotice;
