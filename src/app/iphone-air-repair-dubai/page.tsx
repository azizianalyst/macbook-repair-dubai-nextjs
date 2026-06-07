import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneAirRepair";

export const metadata: Metadata = metaForPath("/iphone-air-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-air-repair-dubai" />
      <View />
    </>
  );
}
