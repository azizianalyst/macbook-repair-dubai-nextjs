import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM1ScreenRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-m1-screen-repair-dubai", {
  title: "MacBook Air M1 Screen Repair Dubai — Same-Day",
  description: "MacBook Air M1 screen repair in Dubai, same-day. IPS Retina 2560x1600 bonded assembly fitted; no True Tone on M1, and we explain why. WhatsApp for a quote.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m1-screen-repair-dubai" />
      <View />
    </>
  );
}
