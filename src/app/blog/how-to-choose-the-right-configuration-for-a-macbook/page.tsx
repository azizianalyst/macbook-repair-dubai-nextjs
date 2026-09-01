import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideMacBookConfiguration";

export const metadata: Metadata = metaForPath("/blog/how-to-choose-the-right-configuration-for-a-macbook");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/how-to-choose-the-right-configuration-for-a-macbook" />
      <View />
    </>
  );
}
