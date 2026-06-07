import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogM5ChipExplained";

export const metadata: Metadata = metaForPath("/blog/m5-chip-explained-vs-m4");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/m5-chip-explained-vs-m4" />
      <View />
    </>
  );
}
