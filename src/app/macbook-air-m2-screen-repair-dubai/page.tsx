import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM2ScreenRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-m2-screen-repair-dubai", {
  title: "MacBook Air M2 Screen Repair Dubai — Free Diagnosis",
  description: "MacBook Air M2 screen repair in Dubai: 13 and 15-inch Liquid Retina, True Tone kept, genuine panels. Same-day, 3-month warranty. Get a free quote.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m2-screen-repair-dubai" />
      <View />
    </>
  );
}
