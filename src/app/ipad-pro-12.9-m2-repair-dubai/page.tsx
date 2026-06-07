import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IpadPro129M2Repair";

export const metadata: Metadata = metaForPath("/ipad-pro-12.9-m2-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-pro-12.9-m2-repair-dubai" />
      <View />
    </>
  );
}
