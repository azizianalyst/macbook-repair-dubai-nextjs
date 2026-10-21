import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogGenuinePartsVsAlternatives";

export const metadata: Metadata = metaForPath("/blog/genuine-parts-vs-quality-alternative-explained");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/genuine-parts-vs-quality-alternative-explained" />
      <View />
    </>
  );
}
