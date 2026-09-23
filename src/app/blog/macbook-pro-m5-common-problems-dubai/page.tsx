import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5Problems";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m5-common-problems-dubai", {
  title: "MacBook Pro M5 Common Problems? Fix Guide Dubai 2026",
  description: "MacBook Pro M5 common problems in Dubai? OLED display issues, Thunderbolt 5 faults, thermal throttling, memory pressure on 16GB M5.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-common-problems-dubai" />
      <View />
    </>
  );
}
