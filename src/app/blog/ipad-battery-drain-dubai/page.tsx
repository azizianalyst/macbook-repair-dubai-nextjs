import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPadBatteryDrain";

export const metadata: Metadata = {
  title: "iPad Battery Draining Fast? 6 Fixes and Costs Dubai 2026",
  description: "iPad battery draining fast in Dubai? 6 fixes for all iPad Pro, Air, mini and standard models. Battery replacement from AED 200.",
  openGraph: {
    title: "iPad Battery Draining Fast? 6 Fixes and Costs Dubai 2026",
    description: "iPad battery draining fast in Dubai? 6 fixes for all iPad Pro, Air, mini and standard models. Battery replacement from AED 200.",
    url: "https://macbook-repair-dubai.ae/blog/ipad-battery-drain-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "iPad battery draining fast, technician diagnosing device at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "iPad Battery Draining Fast? 6 Fixes and Costs Dubai 2026",
    description: "iPad battery draining fast in Dubai? 6 fixes for all iPad Pro, Air, mini and standard models. Battery replacement from AED 200.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/ipad-battery-drain-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/ipad-battery-drain-dubai" />
      <View />
    </>
  );
}
