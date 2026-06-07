import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacFullDiagnostic";

export const metadata: Metadata = metaForPath("/mac-full-diagnostic-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-full-diagnostic-dubai" />
      <View />
    </>
  );
}
