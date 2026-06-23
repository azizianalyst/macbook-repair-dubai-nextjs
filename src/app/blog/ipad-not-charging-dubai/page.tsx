import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPadNotCharging";

export const metadata: Metadata = {
  title: "iPad Not Charging? 5 Fixes and Repair Costs Dubai 2026",
  description: "iPad not charging in Dubai? 5 fixes for USB-C, Lightning, charging IC and battery faults. Repair from AED 150 at our workshop.",
  openGraph: {
    title: "iPad Not Charging? 5 Fixes and Repair Costs Dubai 2026",
    description: "iPad not charging in Dubai? 5 fixes for USB-C, Lightning, charging IC and battery faults. Repair from AED 150 at our workshop.",
    url: "https://macbook-repair-dubai.ae/blog/ipad-not-charging-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "iPad not charging, technician diagnosing device at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "iPad Not Charging? 5 Fixes and Repair Costs Dubai 2026",
    description: "iPad not charging in Dubai? 5 fixes for USB-C, Lightning, charging IC and battery faults. Repair from AED 150 at our workshop.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/ipad-not-charging-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/ipad-not-charging-dubai" />
      <View />
    </>
  );
}
