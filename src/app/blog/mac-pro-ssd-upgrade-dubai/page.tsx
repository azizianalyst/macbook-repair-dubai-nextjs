import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacProSsdUpgrade";

export const metadata: Metadata = metaFromFields("/blog/mac-pro-ssd-upgrade-dubai", {
  title: "Mac Pro SSD Upgrade Dubai 2026: Storage Expansion Cost",
  description: "Mac Pro SSD upgrade in Dubai. Expand 2019 Mac Pro Apple SSD modules and add PCIe storage. Cost guide and same-day fitting.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-pro-ssd-upgrade-dubai" />
      <View />
    </>
  );
}
