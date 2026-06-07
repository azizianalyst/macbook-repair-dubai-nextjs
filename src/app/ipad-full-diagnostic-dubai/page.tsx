import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPadFullDiagnostic";

export const metadata: Metadata = metaForPath("/ipad-full-diagnostic-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-full-diagnostic-dubai" />
      <View />
    </>
  );
}
