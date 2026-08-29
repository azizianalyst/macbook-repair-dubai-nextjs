import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProM3ScreenRepair";

export const metadata: Metadata = metaFromFields("/macbook-pro-m3-screen-repair-dubai", {
  title: "MacBook Pro M3 Screen Repair Dubai — Free Diagnosis",
  description: "MacBook Pro M3 Pro/Max screen repair Dubai. Liquid Retina XDR 14-inch and 16-inch, 120Hz ProMotion, Space Black. Same-day diagnosis. WhatsApp us for a price.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-m3-screen-repair-dubai" />
      <View />
    </>
  );
}
