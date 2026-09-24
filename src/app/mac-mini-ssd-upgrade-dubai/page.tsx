import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniSsdUpgrade";

export const metadata: Metadata = metaFromFields("/mac-mini-ssd-upgrade-dubai", {
  title: "Mac mini SSD Upgrade Dubai - Honest Guide (Soldered SSD)",
  description: "Mac mini SSD upgrades in Dubai: which models can be upgraded, which are soldered, and the honest alternatives. Free advice - get a quote on WhatsApp.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-ssd-upgrade-dubai" />
      <View />
    </>
  );
}
