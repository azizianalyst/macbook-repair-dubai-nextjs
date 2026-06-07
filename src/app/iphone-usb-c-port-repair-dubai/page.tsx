import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneUsbCPortRepair";

export const metadata: Metadata = metaForPath("/iphone-usb-c-port-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-usb-c-port-repair-dubai" />
      <View />
    </>
  );
}
