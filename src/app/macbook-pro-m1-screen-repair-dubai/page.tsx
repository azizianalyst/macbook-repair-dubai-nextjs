import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProM1ScreenRepair";

export const metadata: Metadata = metaFromFields("/macbook-pro-m1-screen-repair-dubai", {
  title: "MacBook Pro M1 Screen Repair Dubai — Request a Quote",
  description: "MacBook Pro M1 Pro/Max screen repair Dubai. Liquid Retina XDR mini-LED 14-inch and 16-inch, 120Hz ProMotion. Same-day diagnosis. 3-month warranty. WhatsApp for a quote.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-m1-screen-repair-dubai" />
      <View />
    </>
  );
}
