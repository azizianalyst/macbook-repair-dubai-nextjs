import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniNotTurningOn";

export const metadata: Metadata = metaFromFields("/mac-mini-not-turning-on-dubai", {
  title: "Mac mini Not Turning On Dubai? Dead Mac mini Fixed Same Day",
  description: "Mac mini not turning on in Dubai? No power, no chime, fans stop, board fault. Free diagnosis, same-day fixes. Message us on WhatsApp for a quote today.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-not-turning-on-dubai" />
      <View />
    </>
  );
}
