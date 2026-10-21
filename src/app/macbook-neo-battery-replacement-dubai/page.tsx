import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookNeoBatteryReplacement";

export const metadata: Metadata = metaForPath("/macbook-neo-battery-replacement-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-neo-battery-replacement-dubai" />
      <View />
    </>
  );
}
