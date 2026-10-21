import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniNoDisplay";

export const metadata: Metadata = metaFromFields("/mac-mini-no-display-dubai", {
  title: "Mac mini No Display Dubai? HDMI & Thunderbolt Fix",
  description: "Mac mini powers on but no display? HDMI port, Thunderbolt handshake or display IC fault, all models. Free diagnosis. WhatsApp us for a quote.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-no-display-dubai" />
      <View />
    </>
  );
}
