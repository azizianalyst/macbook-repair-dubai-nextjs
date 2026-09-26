import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5Problems";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m5-common-problems-dubai", {
  title: "MacBook Pro M5 Common Problems? Fix Guide Dubai 2026",
  description: "MacBook Pro M5 common problems in Dubai: display faults, Thunderbolt 5 issues, thermal throttling and memory pressure on 16GB models. Fixes and repair.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-09-26",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-common-problems-dubai" />
      <View />
    </>
  );
}
