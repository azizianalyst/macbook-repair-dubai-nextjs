import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookDataRecovery";

export const metadata: Metadata = metaForPath("/macbook-data-recovery-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-data-recovery-dubai" />
      <View />
    </>
  );
}
