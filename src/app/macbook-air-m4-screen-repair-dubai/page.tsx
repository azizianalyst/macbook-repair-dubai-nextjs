import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM4ScreenRepair";

export const metadata: Metadata = metaFromFields("/macbook-air-m4-screen-repair-dubai", {
  title: "MacBook Air M4 Screen Repair Dubai — Request a Quote",
  description: "MacBook Air M4 screen repair in Dubai: 13-inch and 15-inch Liquid Retina, True Tone and P3. Free diagnosis, 90-day warranty. Message us on WhatsApp.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m4-screen-repair-dubai" />
      <View />
    </>
  );
}
