import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideChangeMacBookName";

export const metadata: Metadata = metaForPath("/blog/how-to-change-macbook-name");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/how-to-change-macbook-name" />
      <View />
    </>
  );
}
