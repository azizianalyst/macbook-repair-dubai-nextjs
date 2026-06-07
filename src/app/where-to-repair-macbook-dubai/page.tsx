import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/WhereToRepairMacBookDubai";

export const metadata: Metadata = metaForPath("/where-to-repair-macbook-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/where-to-repair-macbook-dubai" />
      <View />
    </>
  );
}
