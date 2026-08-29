import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniNoDisplay";

export const metadata: Metadata = metaFromFields("/mac-mini-no-display-dubai", {
  title: "Mac mini No Display Dubai? HDMI & Thunderbolt Fix - Free Diagnosis",
  description: "Mac mini powers on but no display? HDMI 2.0/2.1 port, Thunderbolt handshake, display IC fault. All models. Free diagnosis. WhatsApp us for a quote. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-no-display-dubai" />
      <View />
    </>
  );
}
