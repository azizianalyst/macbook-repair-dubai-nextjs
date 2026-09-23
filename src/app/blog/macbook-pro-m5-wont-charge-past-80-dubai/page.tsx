import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5Battery80Percent";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m5-wont-charge-past-80-dubai", {
  title: "MacBook Pro M5 Won't Charge Past 80%? Dubai 2026",
  description: "MacBook Pro M5 stuck at 80% charge in Dubai? Optimised Battery Charging stops at 80% by design. Here is how it works, how to override it, and when it means a…",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-wont-charge-past-80-dubai" />
      <View />
    </>
  );
}
