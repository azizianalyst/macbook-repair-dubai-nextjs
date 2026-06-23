import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirM1Problems";

export const metadata: Metadata = {
  title: "MacBook Air M1 Common Problems Dubai: A2337 Fix Guide 2026",
  description: "MacBook Air M1 problems in Dubai: battery at 4+ years, GPU crash, USB-C issues, sleep wake. All M1 Air faults fixed from AED 350. Free diagnosis same day.",
  openGraph: {
    title: "MacBook Air M1 Common Problems Dubai: A2337 Fix Guide 2026",
    description: "MacBook Air M1 at 5 years old? Battery, USB-C wear, GPU crash, Bluetooth. Fix guide with AED prices. Free diagnosis in Dubai.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-air-m1-common-problems-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
  },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-air-m1-common-problems-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-m1-common-problems-dubai" />
      <View />
    </>
  );
}
