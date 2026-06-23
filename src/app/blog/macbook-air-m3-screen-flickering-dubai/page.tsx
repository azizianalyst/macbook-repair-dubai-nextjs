import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirM3ScreenFlickering";

export const metadata: Metadata = {
  title: "MacBook Air M3 Screen Flickering Dubai? Causes & Fix 2026",
  description: "MacBook Air M3 screen flickering in Dubai? True Tone conflicts, display cable, software bugs, backlight issues. Free diagnosis. Repair from AED 700 same-day.",
  openGraph: {
    title: "MacBook Air M3 Screen Flickering Dubai? Causes & Fix 2026",
    description: "MacBook Air M3 screen flickering in Dubai? True Tone conflicts, display cable, software bugs, backlight issues. Free diagnosis. Repair from AED 700 same-day.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-air-m3-screen-flickering-dubai",
    type: "article",
    publishedTime: "2026-06-23",
    modifiedTime: "2026-06-23",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "MacBook Air M3 screen flickering diagnosis Dubai, technician checking display cable and True Tone sensor at repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Air M3 Screen Flickering Dubai? Causes & Fix 2026",
    description: "MacBook Air M3 screen flickering in Dubai? True Tone conflicts, display cable, software bugs, backlight issues. Free diagnosis. Repair from AED 700 same-day.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-air-m3-screen-flickering-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-m3-screen-flickering-dubai" />
      <View />
    </>
  );
}
