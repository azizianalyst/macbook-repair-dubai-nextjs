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

export function LocationBlock({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <section className="grid gap-lg md:grid-cols-2 items-stretch">
      <div className={cn("rounded-md overflow-hidden border", dark ? "border-white/10" : "border-border bg-bg-card")}>
        <iframe
          src={MAPS_EMBED}
          title={`Map to ${NAP.name}`}
          width="100%"
          height="320"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block w-full h-[320px] border-0"
        />
      </div>

      <div className="flex flex-col gap-md">
        <h3 className={cn("m-0", dark && "text-on-primary")}>Find us in Media City</h3>
        <p className={cn("flex items-start gap-sm text-[15px]", dark ? "text-on-primary-muted" : "text-text")}>
          <MapPin size={18} className={cn("mt-1 shrink-0", dark ? "text-accent-bright" : "text-accent")} aria-hidden />
          <span>
            {NAP.street}<br />
            {NAP.area}<br />
            {NAP.city}, UAE
          </span>
        </p>
        <p className={cn("flex items-start gap-sm text-[14px]", dark ? "text-on-primary-faint" : "text-text-muted")}>
          <ParkingCircle size={18} className={cn("mt-1 shrink-0", dark ? "text-accent-bright" : "text-accent")} aria-hidden />
          Paid parking on-site and nearby. Across from Media City Metro.
        </p>
        <div className="flex flex-wrap gap-lg">
          <a
            href={DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("inline-flex items-center gap-2 text-[14px] font-semibold hover:underline w-fit", dark ? "text-accent-bright" : "text-primary")}
          >
            Get directions <ExternalLink size={14} aria-hidden />
          </a>
          <a
            href={GBP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("inline-flex items-center gap-2 text-[14px] font-semibold hover:underline w-fit", dark ? "text-accent-bright" : "text-primary")}
          >
            View on Google <ExternalLink size={14} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
