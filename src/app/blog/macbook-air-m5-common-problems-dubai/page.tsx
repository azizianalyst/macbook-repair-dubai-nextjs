import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirM5Problems";

export const metadata: Metadata = metaFromFields("/blog/macbook-air-m5-common-problems-dubai", {
  title: "MacBook Air M5 Common Problems Dubai 2026: Fix Guide",
  description: "MacBook Air M5 problems in Dubai: battery drain, overheating, WiFi drops, screen issues. All M5 Air faults diagnosed and fixed. Free diagnosis, WhatsApp for a quote.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-m5-common-problems-dubai" />
      <View />
    </>
  );
}
