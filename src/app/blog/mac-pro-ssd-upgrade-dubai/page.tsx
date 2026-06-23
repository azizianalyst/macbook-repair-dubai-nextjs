import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacProSsdUpgrade";

export const metadata: Metadata = {
  title: "Mac Pro SSD Upgrade Dubai 2026: Storage Expansion Cost",
  description: "Mac Pro SSD upgrade in Dubai. Expand 2019 Mac Pro Apple SSD modules and add PCIe storage. Cost guide and same-day fitting.",
  openGraph: {
    title: "Mac Pro SSD Upgrade Dubai 2026: Storage Expansion Cost",
    description: "Mac Pro SSD upgrade in Dubai. Expand 2019 Mac Pro Apple SSD modules and add PCIe storage. Cost guide and same-day fitting.",
    url: "https://macbook-repair-dubai.ae/blog/mac-pro-ssd-upgrade-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900, alt: "Mac Pro SSD upgrade Dubai, Dubai repair workshop" }],
  },
  twitter: { card: "summary_large_image", title: "Mac Pro SSD Upgrade Dubai 2026: Storage Expansion Cost", description: "Mac Pro SSD upgrade in Dubai. Expand 2019 Mac Pro Apple SSD modules and add PCIe storage. Cost guide and same-day fitting.", images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"] },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/mac-pro-ssd-upgrade-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-pro-ssd-upgrade-dubai" />
      <View />
    </>
  );
}
