import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideIPhone16ShocksCharging";

export const metadata: Metadata = metaForPath("/iphone-16-shocks-while-charging");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-16-shocks-while-charging" />
      <View />
    </>
  );
}
