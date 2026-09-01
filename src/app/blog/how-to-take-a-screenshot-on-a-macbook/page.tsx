import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideMacBookScreenshot";

export const metadata: Metadata = metaForPath("/blog/how-to-take-a-screenshot-on-a-macbook");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/how-to-take-a-screenshot-on-a-macbook" />
      <View />
    </>
  );
}
