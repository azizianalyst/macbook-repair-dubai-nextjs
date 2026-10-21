import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneICloudUnlock";

export const metadata: Metadata = metaForPath("/iphone-icloud-unlock-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-icloud-unlock-dubai" />
      <View />
    </>
  );
}
