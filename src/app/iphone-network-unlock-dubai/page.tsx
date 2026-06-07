import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneNetworkUnlock";

export const metadata: Metadata = metaForPath("/iphone-network-unlock-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-network-unlock-dubai" />
      <View />
    </>
  );
}
