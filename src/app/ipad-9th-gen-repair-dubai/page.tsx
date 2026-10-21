import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/Ipad9thGenRepair";

export const metadata: Metadata = metaForPath("/ipad-9th-gen-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-9th-gen-repair-dubai" />
      <View />
    </>
  );
}
