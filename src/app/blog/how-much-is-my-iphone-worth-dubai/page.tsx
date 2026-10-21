import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneWorthDubai";

export const metadata: Metadata = metaForPath("/blog/how-much-is-my-iphone-worth-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/how-much-is-my-iphone-worth-dubai" />
      <View />
    </>
  );
}
