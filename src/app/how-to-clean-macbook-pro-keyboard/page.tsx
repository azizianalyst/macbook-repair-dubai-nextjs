import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideCleanMacBookKeyboard";

export const metadata: Metadata = metaForPath("/how-to-clean-macbook-pro-keyboard");

export default function Page() {
  return (
    <>
      <PageSchema path="/how-to-clean-macbook-pro-keyboard" />
      <View />
    </>
  );
}
