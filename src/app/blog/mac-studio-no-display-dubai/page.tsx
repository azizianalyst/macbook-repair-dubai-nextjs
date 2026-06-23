import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacStudioNoDisplay";

export const metadata: Metadata = {
  title: "Mac Studio No Display in Dubai? 6 Fixes for Black Screen 2026",
  description: "Mac Studio no display or black screen in Dubai? 6 fixes for cable, Thunderbolt, HDMI and GPU faults. Repair from AED 400.",
  openGraph: {
    title: "Mac Studio No Display in Dubai? 6 Fixes for Black Screen 2026",
    description: "Mac Studio no display or black screen in Dubai? 6 fixes for cable, Thunderbolt, HDMI and GPU faults. Repair from AED 400.",
    url: "https://macbook-repair-dubai.ae/blog/mac-studio-no-display-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900, alt: "Mac Studio no display, Dubai repair workshop" }],
  },
  twitter: { card: "summary_large_image", title: "Mac Studio No Display in Dubai? 6 Fixes for Black Screen 2026", description: "Mac Studio no display or black screen in Dubai? 6 fixes for cable, Thunderbolt, HDMI and GPU faults. Repair from AED 400.", images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"] },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/mac-studio-no-display-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-studio-no-display-dubai" />
      <View />
    </>
  );
}
