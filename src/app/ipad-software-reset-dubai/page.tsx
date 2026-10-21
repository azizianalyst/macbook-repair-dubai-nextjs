import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPadSoftwareReset";

export const metadata: Metadata = metaForPath("/ipad-software-reset-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-software-reset-dubai" />
      <View />
    </>
  );
}
