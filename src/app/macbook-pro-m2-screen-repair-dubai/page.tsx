import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProM2ScreenRepair";

export const metadata: Metadata = metaFromFields("/macbook-pro-m2-screen-repair-dubai", {
  title: "MacBook Pro M2 Screen Repair Dubai — Request a Quote",
  description: "MacBook Pro M2 Pro/Max screen repair Dubai. Liquid Retina XDR 14-inch and 16-inch, 120Hz ProMotion, nano-texture glass. Same-day diagnosis. WhatsApp us for today's price.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-m2-screen-repair-dubai" />
      <View />
    </>
  );
}
