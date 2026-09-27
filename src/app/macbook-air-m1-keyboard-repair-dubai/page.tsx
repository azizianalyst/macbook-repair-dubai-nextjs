import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM1KeyboardRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-m1-keyboard-repair-dubai", {
  title: "MacBook Air M1 Keyboard Repair Dubai — Same Day",
  description: "MacBook Air M1 keyboard repair in Dubai: scissor-switch Magic Keyboard, single key caps and Touch ID, often without a new top case. Same day. WhatsApp us.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m1-keyboard-repair-dubai" />
      <View />
    </>
  );
}
