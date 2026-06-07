import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/Ipad11thGenRepair";

export const metadata: Metadata = metaForPath("/ipad-11th-gen-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-11th-gen-repair-dubai" />
      <View />
    </>
  );
}
