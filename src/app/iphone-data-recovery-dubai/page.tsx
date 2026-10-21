import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneDataRecovery";

export const metadata: Metadata = metaForPath("/iphone-data-recovery-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-data-recovery-dubai" />
      <View />
    </>
  );
}
