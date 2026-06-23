import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookOverheating";

export const metadata: Metadata = metaFromFields("/macbook-overheating-shutting-down-dubai", {
  title: "MacBook Overheating & Shutting Down Dubai — Fix Same Day",
  description: "MacBook overheating or shutting down in Dubai? Thermal paste dried out, fan failure, dust blocked vents, M-chip throttling. All models. Free diagnosis. From AED 150. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-overheating-shutting-down-dubai" />
      <View />
    </>
  );
}
