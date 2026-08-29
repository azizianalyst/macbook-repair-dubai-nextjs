import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM1KeyboardRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-m1-keyboard-repair-dubai", {
  title: "MacBook Air M1 Keyboard Repair Dubai — Same Day",
  description: "MacBook Air M1 keyboard repair Dubai. Magic Keyboard scissor switch, individual key caps, Touch ID, same-day service. Free diagnosis. Message us on WhatsApp for a price.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m1-keyboard-repair-dubai" />
      <View />
    </>
  );
}
