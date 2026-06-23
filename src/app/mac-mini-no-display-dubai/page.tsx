import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniNoDisplay";

export const metadata: Metadata = metaFromFields("/mac-mini-no-display-dubai", {
  title: "Mac mini No Display Dubai? HDMI & Thunderbolt Fix - From AED 200",
  description: "Mac mini powers on but no display? HDMI 2.0/2.1 port, Thunderbolt resolution handshake, display IC fault. All models. Free diagnosis. From AED 200. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-no-display-dubai" />
      <View />
    </>
  );
}
