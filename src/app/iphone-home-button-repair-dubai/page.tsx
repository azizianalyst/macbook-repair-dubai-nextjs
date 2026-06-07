import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneHomeButtonRepair";

export const metadata: Metadata = metaForPath("/iphone-home-button-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-home-button-repair-dubai" />
      <View />
    </>
  );
}
