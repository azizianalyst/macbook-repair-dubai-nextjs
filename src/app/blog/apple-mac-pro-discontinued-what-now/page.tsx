import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacProDiscontinued";

export const metadata: Metadata = metaForPath("/blog/apple-mac-pro-discontinued-what-now");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/apple-mac-pro-discontinued-what-now" />
      <View />
    </>
  );
}
