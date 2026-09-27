import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacMiniNotTurningOn";

export const metadata: Metadata = metaFromFields("/blog/mac-mini-not-turning-on-dubai", {
  title: "Mac mini Not Turning On? 6 Fixes and Repair Help Dubai 2026",
  description: "Mac mini not turning on in Dubai? 6 checks for M4, M2, M1 and Intel models: power supply, SMC reset or board fault. Free diagnosis, WhatsApp for a quote.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-mini-not-turning-on-dubai" />
      <View />
    </>
  );
}
