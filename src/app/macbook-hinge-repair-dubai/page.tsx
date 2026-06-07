import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookHingeRepair";

export const metadata: Metadata = metaForPath("/macbook-hinge-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-hinge-repair-dubai" />
      <View />
    </>
  );
}
