import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideCleanMacBookScreen";

export const metadata: Metadata = metaForPath("/how-to-clean-a-macbook-screen");

export default function Page() {
  return (
    <>
      <PageSchema path="/how-to-clean-a-macbook-screen" />
      <View />
    </>
  );
}
