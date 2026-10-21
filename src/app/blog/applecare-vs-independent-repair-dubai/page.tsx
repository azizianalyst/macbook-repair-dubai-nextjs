import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogAppleCareVsIndependent";

export const metadata: Metadata = metaForPath("/blog/applecare-vs-independent-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/applecare-vs-independent-repair-dubai" />
      <View />
    </>
  );
}
