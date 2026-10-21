import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneVibrationMotorRepair";

export const metadata: Metadata = metaForPath("/iphone-vibration-motor-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-vibration-motor-repair-dubai" />
      <View />
    </>
  );
}
