import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM2BatteryDraining";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m2-battery-draining-fast-dubai", {
  title: "MacBook Pro M2 Battery Draining Fast Dubai 2026",
  description: "MacBook Pro M2 battery draining fast in Dubai? Ventura memory swap bug, backgroundtaskmanagerd, and Dubai heat all shorten M2 battery life.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m2-battery-draining-fast-dubai" />
      <View />
    </>
  );
}
