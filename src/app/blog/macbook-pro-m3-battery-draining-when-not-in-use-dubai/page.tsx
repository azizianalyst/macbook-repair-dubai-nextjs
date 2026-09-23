import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM3BatteryDraining";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m3-battery-draining-when-not-in-use-dubai", {
  title: "MacBook Pro M3 Battery Draining When Not in Use Dubai 2026",
  description: "MacBook Pro M3 battery draining when not in use in Dubai? M3 losing charge overnight or during sleep. DarkWake, backgroundtaskmanagerd, and Sonoma power bugs.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m3-battery-draining-when-not-in-use-dubai" />
      <View />
    </>
  );
}
