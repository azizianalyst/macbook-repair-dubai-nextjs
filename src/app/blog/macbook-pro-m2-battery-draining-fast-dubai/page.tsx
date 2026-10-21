import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM2BatteryDraining";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m2-battery-draining-fast-dubai", {
  title: "MacBook Pro M2 Battery Draining Fast Dubai 2026",
  description: "MacBook Pro M2 battery draining fast? How the Ventura swap bug, background tasks and Dubai heat cut battery life, and when to replace it. WhatsApp us.",
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
