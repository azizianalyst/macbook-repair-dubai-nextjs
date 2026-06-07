import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IMacFullDiagnostic";

export const metadata: Metadata = metaForPath("/imac-full-diagnostic-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-full-diagnostic-dubai" />
      <View />
    </>
  );
}
