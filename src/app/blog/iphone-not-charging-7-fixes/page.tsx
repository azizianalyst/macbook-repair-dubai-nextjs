import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneNotCharging";

export const metadata: Metadata = metaForPath("/blog/iphone-not-charging-7-fixes");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-not-charging-7-fixes" />
      <View />
    </>
  );
}
