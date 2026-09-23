import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirM4Problems";

export const metadata: Metadata = metaFromFields("/blog/macbook-air-m4-common-problems-dubai", {
  title: "MacBook Air M4 Common Problems Dubai 2025: Fix Guide",
  description: "MacBook Air M4 problems in Dubai: battery drain, thermal throttle, keyboard, WiFi drops. All M4 Air faults fixed fast. Free diagnosis — message us for a price.",
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
