import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneFullDiagnostic";

export const metadata: Metadata = metaForPath("/iphone-full-diagnostic-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-full-diagnostic-dubai" />
      <View />
    </>
  );
}
