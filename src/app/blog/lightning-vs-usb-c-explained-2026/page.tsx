import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogLightningVsUsbC";

export const metadata: Metadata = metaForPath("/blog/lightning-vs-usb-c-explained-2026");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/lightning-vs-usb-c-explained-2026" />
      <View />
    </>
  );
}
