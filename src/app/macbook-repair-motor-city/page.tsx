import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairMotorCity";

export const metadata: Metadata = metaForPath("/macbook-repair-motor-city");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-motor-city" />
      <View />
    </>
  );
}
