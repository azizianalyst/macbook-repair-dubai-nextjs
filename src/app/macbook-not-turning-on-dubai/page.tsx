import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookNotTurningOn";

export const metadata: Metadata = metaFromFields("/macbook-not-turning-on-dubai", {
  title: "MacBook Not Turning On Dubai? Dead Mac Fixed Same Day",
  description: "MacBook not turning on in Dubai? Free diagnosis. SMC reset, logic board fault, dead battery, liquid damage. All MacBook Air and Pro models. Same-day service. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-not-turning-on-dubai" />
      <View />
    </>
  );
}
