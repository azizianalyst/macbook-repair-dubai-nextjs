import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacStudioNotTurningOn";

export const metadata: Metadata = metaFromFields("/blog/mac-studio-not-turning-on-dubai", {
  title: "Mac Studio Not Turning On in Dubai? 6 Fixes 2026",
  description: "Mac Studio not turning on in Dubai? 6 checks for power cable, SMC and board faults on M1, M2 and M4 Max and Ultra models. Free diagnosis, message us.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-studio-not-turning-on-dubai" />
      <View />
    </>
  );
}
