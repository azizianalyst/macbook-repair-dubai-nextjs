import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/OutOfWarrantyRepair";

export const metadata: Metadata = metaForPath("/out-of-warranty-apple-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/out-of-warranty-apple-repair-dubai" />
      <View />
    </>
  );
}
