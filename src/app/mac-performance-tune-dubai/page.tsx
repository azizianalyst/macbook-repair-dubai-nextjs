import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacPerformanceTune";

export const metadata: Metadata = metaForPath("/mac-performance-tune-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-performance-tune-dubai" />
      <View />
    </>
  );
}
