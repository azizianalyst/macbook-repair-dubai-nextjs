import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideCopyPasteMacBook";

export const metadata: Metadata = metaForPath("/blog/how-to-copy-and-paste-on-a-macbook");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/how-to-copy-and-paste-on-a-macbook" />
      <View />
    </>
  );
}
