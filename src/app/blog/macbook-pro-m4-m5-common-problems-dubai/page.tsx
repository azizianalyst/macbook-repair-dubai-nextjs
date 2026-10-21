import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM4M5Problems";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m4-m5-common-problems-dubai", {
  title: "MacBook Pro M4 M5 Common Problems? Fix Guide Dubai 2026",
  description: "MacBook Pro M4 M5 common problems in Dubai? Display flicker, Wi-Fi drops, memory pressure, thermal throttle, USB-C faults, with step-by-step fixes.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m4-m5-common-problems-dubai" />
      <View />
    </>
  );
}
