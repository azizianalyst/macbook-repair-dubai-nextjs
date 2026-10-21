import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5FanNoise";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m5-fan-noise-dubai", {
  title: "MacBook Pro M5 Fan Noise Dubai 2026",
  description: "MacBook Pro M5 fan making crackling, clicking, or grinding noise in Dubai? Debris in fan, bearing fault, firmware bug. Step-by-step fix guide.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-fan-noise-dubai" />
      <View />
    </>
  );
}
