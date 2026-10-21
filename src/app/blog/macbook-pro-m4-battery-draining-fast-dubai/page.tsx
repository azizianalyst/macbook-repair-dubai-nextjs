import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM4BatteryDraining";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m4-battery-draining-fast-dubai", {
  title: "MacBook Pro M4 Battery Draining Fast Dubai 2026: Fix Guide",
  description: "MacBook Pro M4 battery draining fast in Dubai? M4 losing charge too quickly, short runtime, or battery draining while charging. Step-by-step fix.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-09-26",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m4-battery-draining-fast-dubai" />
      <View />
    </>
  );
}
