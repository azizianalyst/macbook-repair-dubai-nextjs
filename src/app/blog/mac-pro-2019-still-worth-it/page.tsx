import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacPro2019StillWorthIt";

export const metadata: Metadata = metaForPath("/blog/mac-pro-2019-still-worth-it");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-pro-2019-still-worth-it" />
      <View />
    </>
  );
}
