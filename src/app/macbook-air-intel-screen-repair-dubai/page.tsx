import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirIntelScreenRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-intel-screen-repair-dubai", {
  title: "MacBook Air Intel Screen Repair Dubai — From AED 500",
  description: "MacBook Air Intel screen repair Dubai from AED 500. 13-inch IPS LCD 2560x1600. Same-day service. Backlight repair available. Free diagnosis. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-intel-screen-repair-dubai" />
      <View />
    </>
  );
}
