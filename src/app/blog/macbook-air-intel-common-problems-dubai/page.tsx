import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirIntelProblems";

export const metadata: Metadata = metaFromFields("/blog/macbook-air-intel-common-problems-dubai", {
  title: "MacBook Air Intel Common Problems Dubai — Fix Guide 2026",
  description: "MacBook Air Intel problems Dubai: butterfly keyboard, battery at 5+ years, screen backlight, USB-C charging. 2017-2020 models fixed. Free diagnosis.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-intel-common-problems-dubai" />
      <View />
    </>
  );
}
