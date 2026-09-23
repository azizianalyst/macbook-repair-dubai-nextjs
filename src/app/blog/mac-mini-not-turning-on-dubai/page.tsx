import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacMiniNotTurningOn";

export const metadata: Metadata = metaFromFields("/blog/mac-mini-not-turning-on-dubai", {
  title: "Mac mini Not Turning On? 6 Fixes and Repair Help Dubai 2026",
  description: "Mac mini not turning on in Dubai? 6 fixes for M4, M2, M1 and Intel models. Free power fault diagnosis. Message us on WhatsApp for a same-day board repair quote.",
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
