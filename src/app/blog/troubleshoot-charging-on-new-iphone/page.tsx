import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogTroubleshootChargingNewIPhone";

export const metadata: Metadata = metaForPath("/blog/troubleshoot-charging-on-new-iphone");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/troubleshoot-charging-on-new-iphone" />
      <View />
    </>
  );
}
