import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IpadPro13M5Repair";

export const metadata: Metadata = metaForPath("/ipad-pro-13-m5-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-pro-13-m5-repair-dubai" />
      <View />
    </>
  );
}
