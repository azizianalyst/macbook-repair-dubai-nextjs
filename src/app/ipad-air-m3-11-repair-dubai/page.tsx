import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IpadAirM311Repair";

export const metadata: Metadata = metaForPath("/ipad-air-m3-11-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-air-m3-11-repair-dubai" />
      <View />
    </>
  );
}
