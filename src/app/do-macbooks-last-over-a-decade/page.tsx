import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideMacBookLifespan";

export const metadata: Metadata = metaForPath("/do-macbooks-last-over-a-decade");

export default function Page() {
  return (
    <>
      <PageSchema path="/do-macbooks-last-over-a-decade" />
      <View />
    </>
  );
}
