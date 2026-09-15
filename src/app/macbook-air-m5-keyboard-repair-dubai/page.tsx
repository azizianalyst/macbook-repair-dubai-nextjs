import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM5KeyboardRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-m5-keyboard-repair-dubai", {
  title: "MacBook Air M5 Keyboard Repair Dubai — Request a Quote",
  description: "MacBook Air M5 (2026) keyboard repair Dubai. Magic Keyboard scissor switch, single keys or full top-case, Touch ID transfer. Free diagnosis. Message us on WhatsApp for today's price. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m5-keyboard-repair-dubai" />
      <View />
    </>
  );
}
