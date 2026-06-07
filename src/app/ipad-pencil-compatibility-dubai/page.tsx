import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPadPencilCompatibility";

export const metadata: Metadata = metaForPath("/ipad-pencil-compatibility-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-pencil-compatibility-dubai" />
      <View />
    </>
  );
}
