import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPadBatteryDrain";

export const metadata: Metadata = metaFromFields("/blog/ipad-battery-drain-dubai", {
  title: "iPad Battery Draining Fast? 6 Fixes Dubai 2026",
  description: "iPad battery draining fast in Dubai? Why summer heat wears cells, 6 fixes for iPad Pro, Air, mini and standard, and same-day battery swaps. WhatsApp us.",
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
