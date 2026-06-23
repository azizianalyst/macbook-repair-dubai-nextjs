import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacMiniNotTurningOn";

export const metadata: Metadata = {
  title: "Mac mini Not Turning On? 6 Fixes and Repair Costs Dubai 2026",
  description: "Mac mini not turning on in Dubai? 6 fixes for M4, M2, M1 and Intel models. Power fault diagnosis from AED 0. Board repair from AED 400.",
  openGraph: {
    title: "Mac mini Not Turning On? 6 Fixes and Repair Costs Dubai 2026",
    description: "Mac mini not turning on in Dubai? 6 fixes for M4, M2, M1 and Intel models. Power fault diagnosis from AED 0. Board repair from AED 400.",
    url: "https://macbook-repair-dubai.ae/blog/mac-mini-not-turning-on-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "Mac mini not turning on, technician diagnosing device at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mac mini Not Turning On? 6 Fixes and Repair Costs Dubai 2026",
    description: "Mac mini not turning on in Dubai? 6 fixes for M4, M2, M1 and Intel models. Power fault diagnosis from AED 0. Board repair from AED 400.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/mac-mini-not-turning-on-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-mini-not-turning-on-dubai" />
      <View />
    </>
  );
}
