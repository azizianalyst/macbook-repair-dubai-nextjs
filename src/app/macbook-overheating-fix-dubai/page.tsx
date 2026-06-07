import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookOverheatingFix";

export const metadata: Metadata = metaForPath("/macbook-overheating-fix-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-overheating-fix-dubai" />
      <View />
    </>
  );
}
