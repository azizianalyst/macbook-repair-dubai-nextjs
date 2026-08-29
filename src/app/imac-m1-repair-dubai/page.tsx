import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IMacM1RepairHub";

export const metadata: Metadata = metaFromFields("/imac-m1-repair-dubai", {
  title: "iMac M1 Repair Dubai - 24-inch 2021 A2438/A2439",
  description: "iMac M1 repair Dubai. 24-inch M1 (2021), A2438/A2439. Screen and USB hub board repairs, free diagnosis. Message us for your exact price. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-m1-repair-dubai" />
      <View />
    </>
  );
}
