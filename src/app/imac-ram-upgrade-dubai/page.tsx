import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IMacRamUpgrade";

export const metadata: Metadata = metaFromFields("/imac-ram-upgrade-dubai", {
  title: "iMac Upgrade Dubai: RAM and SSD Upgrades by Model",
  description: "Which iMacs take a RAM or SSD upgrade? The 27-inch 2020 iMac takes up to 128GB, the 2017 and 2019 up to 64GB; M-series RAM is soldered. Free check.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-ram-upgrade-dubai" />
      <View />
    </>
  );
}
