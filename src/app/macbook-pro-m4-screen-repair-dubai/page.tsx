import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProM4ScreenRepair";

export const metadata: Metadata = metaFromFields("/macbook-pro-m4-screen-repair-dubai", {
  title: "MacBook Pro M4 Screen Repair Dubai — From AED 1,100",
  description: "MacBook Pro M4 Pro/Max screen repair Dubai from AED 1,100. Liquid Retina XDR 14-inch and 16-inch, 120Hz ProMotion, Thunderbolt 5. 1-2 day turnaround. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-m4-screen-repair-dubai" />
      <View />
    </>
  );
}
