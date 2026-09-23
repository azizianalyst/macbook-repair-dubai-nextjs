import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPadBatteryDrain";

export const metadata: Metadata = metaFromFields("/blog/ipad-battery-drain-dubai", {
  title: "iPad Battery Draining Fast? 6 Fixes Dubai 2026",
  description: "iPad battery draining fast in Dubai? 6 fixes for all iPad Pro, Air, mini and standard models. Message us on WhatsApp for a battery quote.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/ipad-battery-drain-dubai" />
      <View />
    </>
  );
}
