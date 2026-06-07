import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookWifiBluetoothRepair";

export const metadata: Metadata = metaForPath("/macbook-wifi-bluetooth-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-wifi-bluetooth-repair-dubai" />
      <View />
    </>
  );
}
