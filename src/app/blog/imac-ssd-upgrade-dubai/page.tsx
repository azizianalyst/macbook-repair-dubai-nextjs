import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIMacSsdUpgrade";

export const metadata: Metadata = {
  title: "iMac SSD Upgrade Dubai 2026: Fusion Drive to SSD Cost",
  description: "iMac SSD upgrade in Dubai from AED 500. Replace slow Fusion Drive or HDD with fast SSD on Intel iMac. Same-day, data migrated.",
  openGraph: {
    title: "iMac SSD Upgrade Dubai 2026: Fusion Drive to SSD Cost",
    description: "iMac SSD upgrade in Dubai from AED 500. Replace slow Fusion Drive or HDD with fast SSD on Intel iMac. Same-day, data migrated.",
    url: "https://macbook-repair-dubai.ae/blog/imac-ssd-upgrade-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900, alt: "iMac SSD upgrade Dubai, Dubai repair workshop" }],
  },
  twitter: { card: "summary_large_image", title: "iMac SSD Upgrade Dubai 2026: Fusion Drive to SSD Cost", description: "iMac SSD upgrade in Dubai from AED 500. Replace slow Fusion Drive or HDD with fast SSD on Intel iMac. Same-day, data migrated.", images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"] },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/imac-ssd-upgrade-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/imac-ssd-upgrade-dubai" />
      <View />
    </>
  );
}
