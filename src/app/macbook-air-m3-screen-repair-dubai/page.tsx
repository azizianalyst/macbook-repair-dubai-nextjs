import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM3ScreenRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-m3-screen-repair-dubai", {
  title: "MacBook Air M3 Screen Repair Dubai — Same-Day Service",
  description: "MacBook Air M3 screen repair in Dubai: 13 and 15-inch Liquid Retina, True Tone kept, genuine panels stocked. 3-month warranty. Get a free quote.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m3-screen-repair-dubai" />
      <View />
    </>
  );
}
