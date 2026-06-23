import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProM5ScreenRepair";

export const metadata: Metadata = metaFromFields("/macbook-pro-m5-screen-repair-dubai", {
  title: "MacBook Pro M5 Screen Repair Dubai — OLED Display Specialist",
  description: "MacBook Pro M5 OLED screen repair Dubai. First OLED MacBook Pro — 14-inch and 16-inch tandem OLED. Free diagnosis. 2-3 day turnaround. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-m5-screen-repair-dubai" />
      <View />
    </>
  );
}
