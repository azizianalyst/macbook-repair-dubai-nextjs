import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM3ScreenRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-m3-screen-repair-dubai", {
  title: "MacBook Air M3 Screen Repair Dubai — From AED 700",
  description: "MacBook Air M3 screen repair Dubai from AED 700. Liquid Retina 13-inch and 15-inch, True Tone, P3. Genuine Apple panels stocked. Same-day service. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m3-screen-repair-dubai" />
      <View />
    </>
  );
}
