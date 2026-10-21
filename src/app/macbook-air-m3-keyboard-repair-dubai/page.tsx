import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM3KeyboardRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-m3-keyboard-repair-dubai", {
  title: "MacBook Air M3 Keyboard Repair Dubai — Request a Quote",
  description: "MacBook Air M3 keyboard repair in Dubai: Magic Keyboard keys, backlight and Touch ID on 13 and 15-inch models. Same-day service. Get a free quote.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m3-keyboard-repair-dubai" />
      <View />
    </>
  );
}
