import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIMacSsdUpgrade";

export const metadata: Metadata = metaFromFields("/blog/imac-ssd-upgrade-dubai", {
  title: "iMac SSD Upgrade Dubai 2026: Fusion Drive to SSD Cost",
  description: "iMac SSD upgrade in Dubai: replace a slow Fusion Drive or HDD with a fast SSD on Intel iMac. Same-day, data migrated. WhatsApp us for a quote.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/imac-ssd-upgrade-dubai" />
      <View />
    </>
  );
}
