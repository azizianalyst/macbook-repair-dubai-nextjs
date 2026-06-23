"use client";
import { ExternalLink, MapPin, ParkingCircle } from "lucide-react";
import { NAP } from "@/content/site";
import { cn } from "@/lib/utils";

// Verified Google Business Profile embed (pins the actual "MacBook Repair Dubai" listing).
const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.1195460985773!2d55.1561949!3d25.097814300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43c31b8db573%3A0xb173481de4640678!2sMacBook%20Repair%20Dubai!5e0!3m2!1sen!2sae!4v1780646408543!5m2!1sen!2sae";
const GBP_URL = "https://maps.app.goo.gl/X5easM2GnxoZnqhU7";
const DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Concord+Tower+Dubai+Media+City";

export function LocationBlock({ tone = "light", compact = false }: { tone?: "light" | "dark"; compact?: boolean }) {
  const dark = tone === "dark";
  const mapH = compact ? 220 : 320;
  return (
    <section className="grid gap-lg md:grid-cols-2 items-stretch">
      <div className={cn("rounded-xl overflow-hidden border", dark ? "border-border" : "border-border bg-bg-card")}>
        <iframe
          src={MAPS_EMBED}
          title={`Map to ${NAP.name}`}
          width="100%"
          height={mapH}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={cn("block w-full border-0", compact ? "h-[220px]" : "h-[320px]")}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className={cn("text-[18px] font-semibold m-0", dark ? "text-text" : "text-text")}>Find us in Media City</h3>
        <p className={cn("flex items-start gap-sm text-[15px]", dark ? "text-text-muted" : "text-text")}>
          <MapPin size={18} className={cn("mt-1 shrink-0", dark ? "text-accent" : "text-accent")} aria-hidden />
          <span>
            {NAP.street}<br />
            {NAP.area}<br />
            {NAP.city}, UAE
          </span>
        </p>
        <p className={cn("flex items-start gap-sm text-[14px]", dark ? "text-text-faint" : "text-text-muted")}>
          <ParkingCircle size={18} className={cn("mt-1 shrink-0", dark ? "text-accent" : "text-accent")} aria-hidden />
          Paid parking on-site and nearby. Across from Media City Metro.
        </p>
        <div className="flex flex-wrap gap-lg">
          <a
            href={DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("inline-flex min-h-[44px] items-center gap-2 text-[14px] font-semibold hover:underline w-fit", dark ? "text-accent" : "text-primary")}
          >
            Get directions <ExternalLink size={14} aria-hidden />
          </a>
          <a
            href={GBP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("inline-flex min-h-[44px] items-center gap-2 text-[14px] font-semibold hover:underline w-fit", dark ? "text-accent" : "text-primary")}
          >
            View on Google <ExternalLink size={14} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
