import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProBatteryDrain";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-battery-draining-fast", {
  title: "MacBook Pro Battery Draining Fast? Fixes & Costs Dubai 2026",
  description: "MacBook Pro battery draining fast in Dubai? 5 causes, rogue processes, screen brightness, degraded cell, macOS bugs, heat, with step-by-step fixes.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-battery-draining-fast" />
      <View />
    </>
  );
}
