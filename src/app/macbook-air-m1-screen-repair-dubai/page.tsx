import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM1ScreenRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-m1-screen-repair-dubai", {
  title: "MacBook Air M1 Screen Repair Dubai — AED 500",
  description: "MacBook Air M1 screen repair Dubai AED 500. IPS Retina 2560x1600, bonded assembly, same-day. Free diagnosis. No True Tone on M1 — we explain why. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m1-screen-repair-dubai" />
      <View />
    </>
  );
}
