import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneNotTurningOn";

export const metadata: Metadata = metaFromFields("/blog/iphone-not-turning-on-dubai", {
  title: "iPhone Not Turning On? 7 Fixes to Try in Dubai 2026",
  description: "iPhone not turning on in Dubai? 7 fixes from force restart to DFU restore. Dead battery, board fault, or iOS crash. Message us on WhatsApp.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-not-turning-on-dubai" />
      <View />
    </>
  );
}
