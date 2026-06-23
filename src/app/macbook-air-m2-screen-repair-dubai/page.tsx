import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM2ScreenRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-m2-screen-repair-dubai", {
  title: "MacBook Air M2 Screen Repair Dubai — From AED 600",
  description: "MacBook Air M2 screen repair Dubai from AED 600. Liquid Retina 13-inch and 15-inch, True Tone, P3. Same-day service. Genuine Apple panels available. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m2-screen-repair-dubai" />
      <View />
    </>
  );
}
