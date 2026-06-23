import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IMacM3RepairHub";

export const metadata: Metadata = metaFromFields("/imac-m3-repair-dubai", {
  title: "iMac M3 Repair Dubai - 24-inch 2023 Retina 4.5K",
  description: "iMac M3 repair Dubai. 24-inch 4.5K Retina iMac with M3 chip (late 2023). Screen from AED 850, USB hub board from AED 400. Check AppleCare+ before booking. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-m3-repair-dubai" />
      <View />
    </>
  );
}
