import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProIntelFlexgate";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-intel-flexgate-dubai", {
  title: "MacBook Pro Flexgate Display Cable Fix Dubai 2026",
  description: "MacBook Pro Flexgate in Dubai? Backlight stage-light effect at the screen bottom. Display cable fix, no full screen needed. Free check, WhatsApp for price.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-intel-flexgate-dubai" />
      <View />
    </>
  );
}
