import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProM5ScreenRepair";

export const metadata: Metadata = metaFromFields("/macbook-pro-m5-screen-repair-dubai", {
  title: "MacBook Pro M5 Screen Repair Dubai — Liquid Retina XDR",
  description: "MacBook Pro M5 screen repair Dubai: 14-inch and 16-inch Liquid Retina XDR mini-LED displays. Free diagnosis, 2–3 day turnaround. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-m5-screen-repair-dubai" />
      <View />
    </>
  );
}
