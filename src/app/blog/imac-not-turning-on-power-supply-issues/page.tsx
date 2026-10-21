import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIMacNotTurningOn";

export const metadata: Metadata = metaForPath("/blog/imac-not-turning-on-power-supply-issues");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/imac-not-turning-on-power-supply-issues" />
      <View />
    </>
  );
}
