import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirM4Problems";

export const metadata: Metadata = metaFromFields("/blog/macbook-air-m4-common-problems-dubai", {
  title: "MacBook Air M4 Common Problems Dubai 2025: Fix Guide",
  description: "MacBook Air M4 common problems in Dubai: battery drain, thermal throttling, keyboard faults and WiFi drops, and what to do about each. Message us.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-m4-common-problems-dubai" />
      <View />
    </>
  );
}
