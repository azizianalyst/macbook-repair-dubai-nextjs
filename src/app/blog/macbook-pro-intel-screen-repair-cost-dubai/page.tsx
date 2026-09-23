import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProIntelScreenRepair";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-intel-screen-repair-cost-dubai", {
  title: "MacBook Pro Intel Screen Repair Cost Dubai 2026",
  description: "MacBook Pro Intel screen repair Dubai: cracked, Flexgate, dead pixels on 13/15-inch 2016-2020. Free diagnosis, same-day. Message us for your exact price.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-intel-screen-repair-cost-dubai" />
      <View />
    </>
  );
}
