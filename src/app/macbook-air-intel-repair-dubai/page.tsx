import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirIntelRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-intel-repair-dubai", {
  title: "MacBook Air Intel Repair Dubai — Screen, Battery & Board",
  description: "Intel MacBook Air repair in Dubai for 2017-2020 models: screen, battery and board. Free diagnosis, same-day on most repairs. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-intel-repair-dubai" />
      <View />
    </>
  );
}
