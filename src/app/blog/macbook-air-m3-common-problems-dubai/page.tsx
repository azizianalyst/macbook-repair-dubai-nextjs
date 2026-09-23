import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirM3Problems";

export const metadata: Metadata = metaFromFields("/blog/macbook-air-m3-common-problems-dubai", {
  title: "MacBook Air M3 Common Problems Dubai 2024: Fix Guide",
  description: "MacBook Air M3 problems in Dubai: dual display bug, battery drain, overheating, MagSafe issues. All M3 Air faults fixed. Free diagnosis — message us for a quote.",
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
