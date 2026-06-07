import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IpadPro11M4Repair";

export const metadata: Metadata = metaForPath("/ipad-pro-11-m4-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-pro-11-m4-repair-dubai" />
      <View />
    </>
  );
}
