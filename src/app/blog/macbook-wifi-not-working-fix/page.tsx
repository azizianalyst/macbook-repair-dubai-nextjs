import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookWifiNotWorking";

export const metadata: Metadata = metaForPath("/blog/macbook-wifi-not-working-fix");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-wifi-not-working-fix" />
      <View />
    </>
  );
}
