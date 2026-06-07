import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneHeadphoneJackRepair";

export const metadata: Metadata = metaForPath("/iphone-headphone-jack-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-headphone-jack-repair-dubai" />
      <View />
    </>
  );
}
