import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookBatterySwollen";

export const metadata: Metadata = metaForPath("/macbook-battery-swollen-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-battery-swollen-repair-dubai" />
      <View />
    </>
  );
}
