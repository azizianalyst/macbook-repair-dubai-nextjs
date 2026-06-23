import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirM4Problems";

export const metadata: Metadata = {
  title: "MacBook Air M4 Common Problems Dubai 2025: Fix Guide",
  description: "MacBook Air M4 problems in Dubai: battery drain, thermal throttle, keyboard issues, WiFi drops. All M4 Air faults fixed from AED 350. Free diagnosis.",
  openGraph: {
    title: "MacBook Air M4 Common Problems Dubai 2025: Fix Guide",
    description: "MacBook Air M4 problems? Battery, overheating, keyboard, WiFi. Fix guide with AED prices. Free diagnosis in Dubai.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-air-m4-common-problems-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
  },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-air-m4-common-problems-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-m4-common-problems-dubai" />
      <View />
    </>
  );
}
