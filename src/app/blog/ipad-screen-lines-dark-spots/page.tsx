import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPadScreenLinesDarkSpots";

export const metadata: Metadata = metaFromFields("/blog/ipad-screen-lines-dark-spots", {
  title: "Lines or Dark Spots on iPad Screen? Causes and Fixes",
  description: "Lines on your iPad screen or dark spots that won't go away? How to tell software from display damage, what to try first, and when it needs a repair.",
  publishedTime: "2026-09-26",
  modifiedTime: "2026-09-26",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/ipad-screen-lines-dark-spots" />
      <View />
    </>
  );
}
