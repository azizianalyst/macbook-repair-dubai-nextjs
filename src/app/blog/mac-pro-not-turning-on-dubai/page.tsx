import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacProNotTurningOn";

export const metadata: Metadata = metaFromFields("/blog/mac-pro-not-turning-on-dubai", {
  title: "Mac Pro Not Turning On in Dubai? 6 Fixes 2026",
  description: "Mac Pro not turning on in Dubai? 6 checks for power supply, SMC and board faults on the 2019 tower, rack and Intel models. Free diagnosis, message us.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-pro-not-turning-on-dubai" />
      <View />
    </>
  );
}
