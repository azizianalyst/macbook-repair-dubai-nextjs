import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM1KeyboardRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-m1-keyboard-repair-dubai", {
  title: "MacBook Air M1 Keyboard Repair Dubai — From AED 300",
  description: "MacBook Air M1 keyboard repair Dubai from AED 300. Magic Keyboard scissor switch, individual key caps, Touch ID, same-day service. Free diagnosis. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m1-keyboard-repair-dubai" />
      <View />
    </>
  );
}
