import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideIPhone16ProBatteryCapacity";

export const metadata: Metadata = metaForPath("/iphone-16-pro-battery-capacity");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-16-pro-battery-capacity" />
      <View />
    </>
  );
}
