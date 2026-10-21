import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPadNotCharging";

export const metadata: Metadata = metaFromFields("/blog/ipad-not-charging-dubai", {
  title: "iPad Not Charging? 5 Fixes and Repair Guide Dubai 2026",
  description: "iPad not charging in Dubai? 5 fixes for USB-C, Lightning, charging IC and battery faults. Message us on WhatsApp for a free diagnosis and quote.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/ipad-not-charging-dubai" />
      <View />
    </>
  );
}
