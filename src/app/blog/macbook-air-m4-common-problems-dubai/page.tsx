import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirM4Problems";

export const metadata: Metadata = {
  title: "MacBook Air M4 Common Problems Dubai 2025: Fix Guide",
  description: "MacBook Air M4 problems in Dubai: battery drain, thermal throttle, keyboard, WiFi drops. All M4 Air faults fixed fast. Free diagnosis — message us for a price.",
  openGraph: {
    title: "MacBook Air M4 Common Problems Dubai 2025: Fix Guide",
    description: "MacBook Air M4 problems? Battery, overheating, keyboard, WiFi. Fix guide plus free diagnosis in Dubai — message us on WhatsApp for a price.",
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
