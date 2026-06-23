import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniNotTurningOn";

export const metadata: Metadata = metaFromFields("/mac-mini-not-turning-on-dubai", {
  title: "Mac mini Not Turning On Dubai? Dead Mac mini Fixed - From AED 200",
  description: "Mac mini not turning on in Dubai? Power LED off, fans spin then stop, no chime. Intel PSU failure, M-chip SMC reset, board fault. Free diagnosis. From AED 200. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-not-turning-on-dubai" />
      <View />
    </>
  );
}
