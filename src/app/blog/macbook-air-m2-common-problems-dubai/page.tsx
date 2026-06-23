import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirM2Problems";

export const metadata: Metadata = {
  title: "MacBook Air M2 Common Problems Dubai — Fix Guide 2026",
  description: "MacBook Air M2 problems in Dubai: SSD degradation, overheating, hinge crack, MagSafe 3. All M2 Air faults fixed from AED 350. Free diagnosis, same-day service.",
  openGraph: {
    title: "MacBook Air M2 Common Problems Dubai: 13-inch & 15-inch Fix Guide 2026",
    description: "MacBook Air M2 problems? SSD wear, battery swelling, hinge crack, MagSafe. Fix guide with AED prices. Free diagnosis in Dubai.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-air-m2-common-problems-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
  },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-air-m2-common-problems-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-m2-common-problems-dubai" />
      <View />
    </>
  );
}
