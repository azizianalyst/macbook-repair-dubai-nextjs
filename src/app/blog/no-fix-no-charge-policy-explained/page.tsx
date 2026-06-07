import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogNoFixNoChargePolicy";

export const metadata: Metadata = metaForPath("/blog/no-fix-no-charge-policy-explained");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/no-fix-no-charge-policy-explained" />
      <View />
    </>
  );
}
