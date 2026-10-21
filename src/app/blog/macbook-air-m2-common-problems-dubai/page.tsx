import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirM2Problems";

export const metadata: Metadata = metaFromFields("/blog/macbook-air-m2-common-problems-dubai", {
  title: "MacBook Air M2 Common Problems Dubai — Fix Guide 2026",
  description: "MacBook Air M2 problems in Dubai: SSD degradation, overheating, hinge crack, MagSafe 3. All M2 Air faults fixed fast. Free diagnosis, same-day service.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-m2-common-problems-dubai" />
      <View />
    </>
  );
}
