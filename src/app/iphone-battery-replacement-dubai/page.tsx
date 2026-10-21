import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneBatteryReplacement";

export const metadata: Metadata = metaForPath("/iphone-battery-replacement-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-battery-replacement-dubai" />
      <View />
    </>
  );
}
