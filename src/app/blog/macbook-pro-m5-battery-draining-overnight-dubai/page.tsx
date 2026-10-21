import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5BatteryOvernight";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m5-battery-draining-overnight-dubai", {
  title: "MacBook Pro M5 Battery Drain Overnight Dubai: Fix 2026",
  description: "MacBook Pro M5 battery draining overnight in Dubai? DarkWake, Power Nap, and background tasks drain 20-40% while sleeping. Step-by-step fix guide.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-battery-draining-overnight-dubai" />
      <View />
    </>
  );
}
