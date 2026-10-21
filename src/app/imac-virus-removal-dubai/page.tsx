import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IMacVirusRemoval";

export const metadata: Metadata = metaForPath("/imac-virus-removal-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-virus-removal-dubai" />
      <View />
    </>
  );
}
