import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIMacNoDisplay";

export const metadata: Metadata = metaFromFields("/blog/imac-no-display-black-screen-dubai", {
  title: "iMac No Display or Black Screen in Dubai? 6 Fixes 2026",
  description: "iMac turns on but no display or black screen in Dubai? 6 fixes for backlight, GPU, and panel faults. Message us on WhatsApp for a repair quote.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/imac-no-display-black-screen-dubai" />
      <View />
    </>
  );
}
