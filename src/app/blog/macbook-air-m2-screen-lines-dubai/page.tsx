import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirM2ScreenLines";

export const metadata: Metadata = {
  title: "MacBook Air M2 Screen Lines Dubai? Horizontal & Vertical Fix 2026",
  description: "Horizontal or vertical lines on MacBook Air M2 screen in Dubai? Display cable, panel fault, or GPU. Free diagnosis. Repair from AED 600 (13-inch) same-day.",
  openGraph: {
    title: "MacBook Air M2 Screen Lines Dubai? Horizontal & Vertical Fix 2026",
    description: "Horizontal or vertical lines on MacBook Air M2 screen in Dubai? Display cable, panel fault, or GPU. Free diagnosis. Repair from AED 600 (13-inch) same-day.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-air-m2-screen-lines-dubai",
    type: "article",
    publishedTime: "2026-06-23",
    modifiedTime: "2026-06-23",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "MacBook Air M2 screen lines diagnosis Dubai, technician inspecting horizontal lines on Liquid Retina display at repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Air M2 Screen Lines Dubai? Horizontal & Vertical Fix 2026",
    description: "Horizontal or vertical lines on MacBook Air M2 screen in Dubai? Display cable, panel fault, or GPU. Free diagnosis. Repair from AED 600 (13-inch) same-day.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-air-m2-screen-lines-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-m2-screen-lines-dubai" />
      <View />
    </>
  );
}
