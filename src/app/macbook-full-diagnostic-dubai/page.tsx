import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookFullDiagnostic";

export const metadata: Metadata = metaForPath("/macbook-full-diagnostic-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-full-diagnostic-dubai" />
      <View />
    </>
  );
}
