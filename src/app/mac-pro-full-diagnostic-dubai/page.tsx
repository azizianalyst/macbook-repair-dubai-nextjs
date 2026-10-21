import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacProFullDiagnostic";

export const metadata: Metadata = metaForPath("/mac-pro-full-diagnostic-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-pro-full-diagnostic-dubai" />
      <View />
    </>
  );
}
