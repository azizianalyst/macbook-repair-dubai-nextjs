import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideEraseMacBeforeSelling";

export const metadata: Metadata = metaForPath("/how-to-erase-all-data-on-my-mac-before-giving-it-away");

export default function Page() {
  return (
    <>
      <PageSchema path="/how-to-erase-all-data-on-my-mac-before-giving-it-away" />
      <View />
    </>
  );
}
