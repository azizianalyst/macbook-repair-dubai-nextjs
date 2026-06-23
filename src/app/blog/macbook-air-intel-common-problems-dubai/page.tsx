import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirIntelProblems";

export const metadata: Metadata = {
  title: "MacBook Air Intel Common Problems Dubai — Fix Guide 2026",
  description: "MacBook Air Intel problems Dubai: butterfly keyboard, battery at 5+ years, screen backlight, USB-C charging. 2017-2020 models fixed from AED 300.",
  openGraph: {
    title: "MacBook Air Intel Common Problems Dubai: 2017 to 2020 Fix Guide 2026",
    description: "MacBook Air Intel 2017-2020 problems? Butterfly keyboard, battery, backlight, USB-C. Fix guide with AED prices. Free diagnosis in Dubai.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-air-intel-common-problems-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
  },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-air-intel-common-problems-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-intel-common-problems-dubai" />
      <View />
    </>
  );
}
