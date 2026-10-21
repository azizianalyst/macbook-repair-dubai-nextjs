import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacMiniUpgrade";

export const metadata: Metadata = metaFromFields("/blog/mac-mini-ssd-ram-upgrade-dubai", {
  title: "Mac mini SSD and RAM Upgrade Dubai 2026: Cost Guide",
  description: "Mac mini SSD and RAM upgrade in Dubai. Intel mini RAM and SSD upgrades, same day. Message us on WhatsApp for today's exact price on your model.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-mini-ssd-ram-upgrade-dubai" />
      <View />
    </>
  );
}
