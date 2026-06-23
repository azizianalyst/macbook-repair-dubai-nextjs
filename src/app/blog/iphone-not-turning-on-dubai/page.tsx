import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneNotTurningOn";

export const metadata: Metadata = {
  title: "iPhone Not Turning On? 7 Fixes to Try in Dubai 2026",
  description: "iPhone not turning on in Dubai? 7 fixes from force restart to DFU restore. Dead battery, board fault, or iOS crash. Repair from AED 99.",
  openGraph: {
    title: "iPhone Not Turning On? 7 Fixes to Try in Dubai 2026",
    description: "iPhone not turning on in Dubai? 7 fixes from force restart to DFU restore. Dead battery, board fault, or iOS crash. Repair from AED 99.",
    url: "https://macbook-repair-dubai.ae/blog/iphone-not-turning-on-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "iPhone not turning on, technician diagnosing device at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "iPhone Not Turning On? 7 Fixes to Try in Dubai 2026",
    description: "iPhone not turning on in Dubai? 7 fixes from force restart to DFU restore. Dead battery, board fault, or iOS crash. Repair from AED 99.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/iphone-not-turning-on-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-not-turning-on-dubai" />
      <View />
    </>
  );
}
