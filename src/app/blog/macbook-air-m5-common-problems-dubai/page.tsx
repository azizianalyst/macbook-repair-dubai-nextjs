import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirM5Problems";

export const metadata: Metadata = {
  title: "MacBook Air M5 Common Problems Dubai 2026: Fix Guide",
  description: "MacBook Air M5 problems in Dubai: battery drain, overheating, WiFi drops, screen issues. All M5 Air faults diagnosed and fixed from AED 350. Free diagnosis.",
  openGraph: {
    title: "MacBook Air M5 Common Problems Dubai 2026: Fix Guide",
    description: "MacBook Air M5 problems? Battery, throttling, WiFi, charging issues. Fix guide with AED prices for Dubai. Free diagnosis.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-air-m5-common-problems-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
  },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-air-m5-common-problems-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-m5-common-problems-dubai" />
      <View />
    </>
  );
}
