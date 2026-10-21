import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM5ScreenRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-m5-screen-repair-dubai", {
  title: "MacBook Air M5 Screen Repair Dubai — Request a Quote",
  description: "MacBook Air M5 (2026) screen repair Dubai. Liquid Retina 13-inch and 15-inch, True Tone, P3. Genuine panels, free diagnosis, 1–2 day turnaround. Message us on WhatsApp for today's price. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m5-screen-repair-dubai" />
      <View />
    </>
  );
}
