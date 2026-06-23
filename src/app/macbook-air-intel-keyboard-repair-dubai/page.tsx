import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirIntelKeyboardRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-intel-keyboard-repair-dubai", {
  title: "MacBook Air Intel Keyboard Repair Dubai — AED 350",
  description: "MacBook Air Intel butterfly keyboard repair Dubai AED 350. Top-case replacement, same-day 2-hour service. Dust and key failure fixed. Free diagnosis. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-intel-keyboard-repair-dubai" />
      <View />
    </>
  );
}
