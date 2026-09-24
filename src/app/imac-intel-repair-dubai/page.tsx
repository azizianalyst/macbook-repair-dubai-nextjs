import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IMacIntelRepairHub";

export const metadata: Metadata = metaFromFields("/imac-intel-repair-dubai", {
  title: "iMac Intel Repair Dubai - 21.5-inch & 27-inch 5K 2017-2020",
  description: "Intel iMac repair in Dubai: 21.5-inch 4K and 27-inch 5K Retina, iMac Pro. Screen, SSD, power supply and board. Free diagnosis - call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-intel-repair-dubai" />
      <View />
    </>
  );
}
