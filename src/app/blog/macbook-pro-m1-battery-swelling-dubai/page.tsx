import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM1BatterySwelling";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m1-battery-swelling-dubai", {
  title: "MacBook Pro M1 Battery Swelling Dubai 2026",
  description: "MacBook Pro M1 battery swelling in Dubai? Raised trackpad, bowed bottom case, or won't sit flat means swollen battery. Stop using immediately.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m1-battery-swelling-dubai" />
      <View />
    </>
  );
}
