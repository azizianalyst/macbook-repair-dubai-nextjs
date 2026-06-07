import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneWifiBluetoothRepair";

export const metadata: Metadata = metaForPath("/iphone-wifi-bluetooth-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-wifi-bluetooth-repair-dubai" />
      <View />
    </>
  );
}
