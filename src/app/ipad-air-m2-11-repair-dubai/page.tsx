import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IpadAirM211Repair";

export const metadata: Metadata = metaForPath("/ipad-air-m2-11-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-air-m2-11-repair-dubai" />
      <View />
    </>
  );
}
