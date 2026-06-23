import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacMiniOverheating";

export const metadata: Metadata = {
  title: "Mac mini Overheating or Loud Fan in Dubai? Fixes 2026",
  description: "Mac mini overheating or fan loud in Dubai? Dust, thermal paste and 35°C heat explained. Thermal service from AED 250.",
  openGraph: {
    title: "Mac mini Overheating or Loud Fan in Dubai? Fixes 2026",
    description: "Mac mini overheating or fan loud in Dubai? Dust, thermal paste and 35°C heat explained. Thermal service from AED 250.",
    url: "https://macbook-repair-dubai.ae/blog/mac-mini-overheating-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900, alt: "Mac mini overheating, Dubai repair workshop" }],
  },
  twitter: { card: "summary_large_image", title: "Mac mini Overheating or Loud Fan in Dubai? Fixes 2026", description: "Mac mini overheating or fan loud in Dubai? Dust, thermal paste and 35°C heat explained. Thermal service from AED 250.", images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"] },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/mac-mini-overheating-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-mini-overheating-dubai" />
      <View />
    </>
  );
}
