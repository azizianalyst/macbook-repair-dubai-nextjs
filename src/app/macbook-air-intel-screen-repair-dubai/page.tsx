import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirIntelScreenRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-intel-screen-repair-dubai", {
  title: "MacBook Air Intel Screen Repair Dubai — Same-Day",
  description: "MacBook Air Intel screen repair Dubai. 13-inch IPS LCD 2560x1600. Same-day service, backlight repair available, free diagnosis. WhatsApp us for your price. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-intel-screen-repair-dubai" />
      <View />
    </>
  );
}
