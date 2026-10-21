import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogFactoryResetBeforeSelling";

export const metadata: Metadata = metaForPath("/blog/how-to-factory-reset-iphone-before-selling");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/how-to-factory-reset-iphone-before-selling" />
      <View />
    </>
  );
}
