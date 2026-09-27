import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookNotTurningOn";

export const metadata: Metadata = metaFromFields("/macbook-not-turning-on-dubai", {
  title: "MacBook Not Turning On Dubai? Dead Mac Fixed Same Day",
  description: "MacBook not turning on in Dubai? A free diagnosis finds the cause: SMC, dead battery, logic board or liquid damage, on all Air and Pro models. WhatsApp us.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-not-turning-on-dubai" />
      <View />
    </>
  );
}
