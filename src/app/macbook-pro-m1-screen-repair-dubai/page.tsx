import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProM1ScreenRepair";

export const metadata: Metadata = metaFromFields("/macbook-pro-m1-screen-repair-dubai", {
  title: "MacBook Pro M1 Screen Repair Dubai — Request a Quote",
  description: "MacBook Pro M1 Pro/Max screen repair in Dubai: 14 and 16-inch Liquid Retina XDR mini-LED, 120Hz. 3-month warranty. Get a free quote on WhatsApp.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-m1-screen-repair-dubai" />
      <View />
    </>
  );
}
