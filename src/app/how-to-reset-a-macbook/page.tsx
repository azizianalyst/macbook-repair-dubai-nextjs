import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideResetMacBook";

export const metadata: Metadata = metaForPath("/how-to-reset-a-macbook");

export default function Page() {
  return (
    <>
      <PageSchema path="/how-to-reset-a-macbook" />
      <View />
    </>
  );
}
