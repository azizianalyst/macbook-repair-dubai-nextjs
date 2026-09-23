import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirNotCharging";

export const metadata: Metadata = metaFromFields("/blog/macbook-air-not-charging-dubai", {
  title: "MacBook Air Not Charging? 6 Fixes and Costs Dubai 2026",
  description: "MacBook Air not charging in Dubai? 6 fixes for USB-C port, MagSafe, charging IC and power adapter faults. Free diagnosis, WhatsApp for a quote.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-not-charging-dubai" />
      <View />
    </>
  );
}
