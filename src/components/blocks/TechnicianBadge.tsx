"use client";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  years: number;
  specialisation: string;
  photo?: string;          // path under /images/real/
  tone?: "light" | "dark"; // "dark" for use on the bg-primary band; default light
};

export function TechnicianBadge({ name, years, specialisation, photo, tone = "light" }: Props) {
  const dark = tone === "dark";
  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("");
  return (
    <div className="flex items-center gap-md">
      {photo ? (
        <img
          src={photo}
          alt={`${name}, ${specialisation}`}
          width={56} height={56}
          loading="lazy" decoding="async"
          className={cn("w-14 h-14 rounded-full object-cover border", dark ? "border-white/10" : "border-border")}
        />
      ) : (
        <div
          aria-hidden
          className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center font-heading font-bold text-[18px]"
        >
          {initials}
        </div>
      )}
      <div>
        <p className={cn("font-semibold text-[15px]", dark ? "text-on-primary" : "text-text")}>{name}</p>
        <p className={cn("text-[13px]", dark ? "text-on-primary-muted" : "text-text-muted")}>{specialisation} · {years} yrs</p>
      </div>
    </div>
  );
}
