import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProM3ScreenRepair";

export const metadata: Metadata = metaFromFields("/macbook-pro-m3-screen-repair-dubai", {
  title: "MacBook Pro M3 Screen Repair Dubai — Free Diagnosis",
  description: "MacBook Pro M3 Pro/Max screen repair in Dubai: 14 and 16-inch Liquid Retina XDR, 120Hz ProMotion. 3-month warranty. Get a free quote on WhatsApp.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-m3-screen-repair-dubai" />
      <View />
    </>
  );
}
