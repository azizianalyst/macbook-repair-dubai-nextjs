import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IpadAir4Repair";

export const metadata: Metadata = metaForPath("/ipad-air-4-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-air-4-repair-dubai" />
      <View />
    </>
  );
}
