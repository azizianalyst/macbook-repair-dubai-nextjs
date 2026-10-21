import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirM5Problems";

export const metadata: Metadata = metaFromFields("/blog/macbook-air-m5-common-problems-dubai", {
  title: "MacBook Air M5 Common Problems Dubai 2026: Fix Guide",
  description: "MacBook Air M5 common problems in Dubai: battery drain in the heat, overheating, WiFi drops and screen issues, and the fix for each. Book a free diagnosis.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-10-21",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-m5-common-problems-dubai" />
      <View />
    </>
  );
}
