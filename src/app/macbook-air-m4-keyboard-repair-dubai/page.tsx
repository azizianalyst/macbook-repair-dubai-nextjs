import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM4KeyboardRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-m4-keyboard-repair-dubai", {
  title: "MacBook Air M4 Keyboard Repair Dubai — Free Diagnosis",
  description: "MacBook Air M4 keyboard repair in Dubai: scissor-switch Magic Keyboard, single key caps and Touch ID on 13-inch and 15-inch. Free diagnosis. WhatsApp us.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m4-keyboard-repair-dubai" />
      <View />
    </>
  );
}
