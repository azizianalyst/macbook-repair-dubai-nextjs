import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirM1Problems";

export const metadata: Metadata = metaFromFields("/blog/macbook-air-m1-common-problems-dubai", {
  title: "MacBook Air M1 Common Problems Dubai: A2337 Fix Guide 2026",
  description: "MacBook Air M1 problems in Dubai: battery at 4+ years, GPU crash, USB-C issues, sleep wake. All M1 Air faults fixed — message us for a price. Free diagnosis same day.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-m1-common-problems-dubai" />
      <View />
    </>
  );
}
