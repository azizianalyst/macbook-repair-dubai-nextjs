import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirM3Problems";

export const metadata: Metadata = {
  title: "MacBook Air M3 Common Problems Dubai 2024: Fix Guide",
  description: "MacBook Air M3 problems in Dubai: dual display bug, battery drain, overheating, MagSafe issues. All M3 Air faults fixed from AED 350. Free diagnosis.",
  openGraph: {
    title: "MacBook Air M3 Common Problems Dubai 2024: Fix Guide",
    description: "MacBook Air M3 problems? Dual display, battery, overheating, MagSafe. Fix guide with AED prices. Free diagnosis in Dubai.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-air-m3-common-problems-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
  },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-air-m3-common-problems-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-m3-common-problems-dubai" />
      <View />
    </>
  );
}
