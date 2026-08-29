import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniSsdUpgrade";

export const metadata: Metadata = metaFromFields("/mac-mini-ssd-upgrade-dubai", {
  title: "Mac mini SSD Upgrade Dubai - Honest Guide (Soldered SSD)",
  description: "No Mac mini has a user-upgradeable SSD - the 2018 Intel mini through the M4 all have it soldered to the board. We say so before you pay, and offer what works: 2018 RAM upgrades and external SSD setup. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-ssd-upgrade-dubai" />
      <View />
    </>
  );
}
