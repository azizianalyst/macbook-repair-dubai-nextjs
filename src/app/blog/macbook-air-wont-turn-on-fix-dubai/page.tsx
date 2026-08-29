import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirWontTurnOn";

export const metadata: Metadata = {
  title: "MacBook Air Won't Turn On Fix Dubai 2026 — No Power",
  description: "MacBook Air not turning on in Dubai? Dead, black screen or no power on all models M1-M5 and Intel. Step-by-step fix guide. Free diagnosis on WhatsApp.",
  openGraph: {
    title: "MacBook Air Won't Turn On Fix Dubai 2026: Dead, Black Screen, No Power Guide",
    description: "MacBook Air won't turn on? Dead vs black screen diagnosis, deep discharge, SMC reset, board repair. Free diagnosis in Dubai — message us on WhatsApp.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-air-wont-turn-on-fix-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-macbook-not-turning-on-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "MacBook Air won't turn on, technician diagnosing dead MacBook Air with power probe and multimeter at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Air Won't Turn On Fix Dubai 2026",
    description: "Dead vs black screen diagnosis. Free logic board diagnosis in Dubai — message us on WhatsApp.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-macbook-not-turning-on-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-air-wont-turn-on-fix-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-wont-turn-on-fix-dubai" />
      <View />
    </>
  );
}
