import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideMacBookHorizontalLines";

export const metadata: Metadata = metaForPath("/white-or-grey-horizontal-lines-appearing-on-macbook-screen");

export default function Page() {
  return (
    <>
      <PageSchema path="/white-or-grey-horizontal-lines-appearing-on-macbook-screen" />
      <View />
    </>
  );
}
