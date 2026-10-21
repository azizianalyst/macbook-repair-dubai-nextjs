import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacStudioNoDisplay";

export const metadata: Metadata = metaFromFields("/blog/mac-studio-no-display-dubai", {
  title: "Mac Studio No Display Dubai: 6 Black Screen Fixes 2026",
  description: "Mac Studio no display or black screen in Dubai? 6 checks for Thunderbolt, HDMI, monitor input and display IC faults. Free diagnosis, WhatsApp for a quote.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-studio-no-display-dubai" />
      <View />
    </>
  );
}
