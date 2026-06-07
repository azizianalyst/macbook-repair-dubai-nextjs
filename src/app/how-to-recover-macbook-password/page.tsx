import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideRecoverMacBookPassword";

export const metadata: Metadata = metaForPath("/how-to-recover-macbook-password");

export default function Page() {
  return (
    <>
      <PageSchema path="/how-to-recover-macbook-password" />
      <View />
    </>
  );
}
