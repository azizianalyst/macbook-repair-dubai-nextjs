import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPadAirM4VsProM5";

export const metadata: Metadata = metaForPath("/blog/ipad-air-m4-vs-pro-m5-2026");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/ipad-air-m4-vs-pro-m5-2026" />
      <View />
    </>
  );
}
