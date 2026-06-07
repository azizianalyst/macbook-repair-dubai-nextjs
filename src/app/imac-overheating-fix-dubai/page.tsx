import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IMacOverheatingFix";

export const metadata: Metadata = metaForPath("/imac-overheating-fix-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-overheating-fix-dubai" />
      <View />
    </>
  );
}
