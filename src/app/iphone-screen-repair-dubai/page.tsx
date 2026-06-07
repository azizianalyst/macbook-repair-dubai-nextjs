import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneScreenRepair";

export const metadata: Metadata = metaForPath("/iphone-screen-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-screen-repair-dubai" />
      <View />
    </>
  );
}
