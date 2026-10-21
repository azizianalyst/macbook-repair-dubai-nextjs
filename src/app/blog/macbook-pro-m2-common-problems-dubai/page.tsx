import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM2Problems";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m2-common-problems-dubai", {
  title: "MacBook Pro M2 Common Problems? Fix Guide Dubai 2026",
  description: "MacBook Pro M2 common problems in Dubai? 13-inch SSD write amplification, charging faults, HDMI output glitches, battery swelling in older units.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m2-common-problems-dubai" />
      <View />
    </>
  );
}
