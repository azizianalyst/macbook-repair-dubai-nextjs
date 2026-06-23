import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirNotCharging";

export const metadata: Metadata = {
  title: "MacBook Air Not Charging? 6 Fixes and Costs Dubai 2026",
  description: "MacBook Air not charging in Dubai? 6 fixes for USB-C port, MagSafe, charging IC and power adapter faults. Repair from AED 300.",
  openGraph: {
    title: "MacBook Air Not Charging? 6 Fixes and Costs Dubai 2026",
    description: "MacBook Air not charging in Dubai? 6 fixes for USB-C port, MagSafe, charging IC and power adapter faults. Repair from AED 300.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-air-not-charging-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "MacBook Air not charging, technician diagnosing device at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Air Not Charging? 6 Fixes and Costs Dubai 2026",
    description: "MacBook Air not charging in Dubai? 6 fixes for USB-C port, MagSafe, charging IC and power adapter faults. Repair from AED 300.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-air-not-charging-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-not-charging-dubai" />
      <View />
    </>
  );
}
