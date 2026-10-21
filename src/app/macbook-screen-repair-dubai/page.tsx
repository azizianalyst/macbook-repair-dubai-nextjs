import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookScreenRepair";

export const metadata: Metadata = metaForPath("/macbook-screen-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-screen-repair-dubai" />
      <View />
    </>
  );
}
