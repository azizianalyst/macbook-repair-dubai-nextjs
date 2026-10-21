import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneNfcRepair";

export const metadata: Metadata = metaForPath("/iphone-nfc-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-nfc-repair-dubai" />
      <View />
    </>
  );
}
