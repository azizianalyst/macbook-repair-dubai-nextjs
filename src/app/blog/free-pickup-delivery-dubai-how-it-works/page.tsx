import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogFreePickupDeliveryDubai";

export const metadata: Metadata = metaForPath("/blog/free-pickup-delivery-dubai-how-it-works");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/free-pickup-delivery-dubai-how-it-works" />
      <View />
    </>
  );
}
