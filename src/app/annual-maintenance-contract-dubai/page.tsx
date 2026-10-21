import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/AnnualMaintenanceContract";

export const metadata: Metadata = metaForPath("/annual-maintenance-contract-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/annual-maintenance-contract-dubai" />
      <View />
    </>
  );
}
