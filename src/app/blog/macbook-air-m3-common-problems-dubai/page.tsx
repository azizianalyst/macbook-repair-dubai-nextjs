import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirM3Problems";

export const metadata: Metadata = metaFromFields("/blog/macbook-air-m3-common-problems-dubai", {
  title: "MacBook Air M3 Common Problems Dubai 2024: Fix Guide",
  description: "MacBook Air M3 common problems in Dubai: dual display bugs, battery drain, overheating and MagSafe faults, and the fix for each. Free diagnosis, WhatsApp.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-m3-common-problems-dubai" />
      <View />
    </>
  );
}
