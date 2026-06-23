import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IMacIntelRepairHub";

export const metadata: Metadata = metaFromFields("/imac-intel-repair-dubai", {
  title: "iMac Intel Repair Dubai - 21.5-inch & 27-inch 5K 2017-2020",
  description: "iMac Intel repair Dubai. 21.5-inch Retina 4K (2017-2019), 27-inch 5K Retina (2017-2020), iMac Pro 27-inch (2017). Screen, logic board, PSU, GPU, SSD upgrade. From AED 300. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-intel-repair-dubai" />
      <View />
    </>
  );
}
