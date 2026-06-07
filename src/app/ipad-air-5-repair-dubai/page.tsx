import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IpadAir5Repair";

export const metadata: Metadata = metaForPath("/ipad-air-5-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-air-5-repair-dubai" />
      <View />
    </>
  );
}
