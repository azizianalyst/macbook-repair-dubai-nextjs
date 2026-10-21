import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirIntelKeyboardRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-intel-keyboard-repair-dubai", {
  title: "MacBook Air Intel Keyboard Repair Dubai — Same Day",
  description: "MacBook Air Intel butterfly keyboard repair Dubai. Top-case replacement, same-day 2-hour service. Dust and key failure fixed. Free diagnosis. WhatsApp for your price.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-intel-keyboard-repair-dubai" />
      <View />
    </>
  );
}
