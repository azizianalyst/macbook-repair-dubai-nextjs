import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM2KeyboardRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-m2-keyboard-repair-dubai", {
  title: "MacBook Air M2 Keyboard Repair Dubai — From AED 300",
  description: "MacBook Air M2 keyboard repair Dubai from AED 300. Magic Keyboard scissor switch, individual key caps, Touch ID. 13-inch and 15-inch. Same-day service. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m2-keyboard-repair-dubai" />
      <View />
    </>
  );
}
