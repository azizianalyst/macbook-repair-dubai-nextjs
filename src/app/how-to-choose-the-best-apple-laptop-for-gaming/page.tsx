import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideBestMacForGaming";

export const metadata: Metadata = metaForPath("/how-to-choose-the-best-apple-laptop-for-gaming");

export default function Page() {
  return (
    <>
      <PageSchema path="/how-to-choose-the-best-apple-laptop-for-gaming" />
      <View />
    </>
  );
}
