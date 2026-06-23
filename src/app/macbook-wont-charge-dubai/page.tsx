import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookWontCharge";

export const metadata: Metadata = metaFromFields("/macbook-wont-charge-dubai", {
  title: "MacBook Not Charging Dubai? MagSafe & USB-C Fix Same Day",
  description: "MacBook not charging in Dubai? MagSafe 3 dead, USB-C port fault, DC-in board, battery not detected. All Air and Pro models. Free diagnosis. From AED 200. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-wont-charge-dubai" />
      <View />
    </>
  );
}
