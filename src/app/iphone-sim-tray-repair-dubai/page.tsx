import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneSimTrayRepair";

export const metadata: Metadata = metaForPath("/iphone-sim-tray-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-sim-tray-repair-dubai" />
      <View />
    </>
  );
}
