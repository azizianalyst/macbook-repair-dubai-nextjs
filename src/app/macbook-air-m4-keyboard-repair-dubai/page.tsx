import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM4KeyboardRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-m4-keyboard-repair-dubai", {
  title: "MacBook Air M4 Keyboard Repair Dubai — Free Diagnosis",
  description: "MacBook Air M4 keyboard repair Dubai. Magic Keyboard scissor switch, individual key caps, Touch ID. 13-inch and 15-inch. Free diagnosis. Message us on WhatsApp for a quote.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m4-keyboard-repair-dubai" />
      <View />
    </>
  );
}
