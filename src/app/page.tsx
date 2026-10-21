import type { Metadata } from "next";
import { preload } from "react-dom";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/Home";

export const metadata: Metadata = metaForPath("/");

const HERO_BASE = "/images/real/team/team-workshop-dubai";
const HERO_SIZES = "(max-width: 414px) 360px, (max-width: 768px) 90vw, 480px";

export default function Page() {
  // Preload the LCP hero image (MacBook M5 exploded-view blueprint) so the fetch starts
  // before the HTML body is parsed. React 19 hoists preload() calls to <head> during SSR.
  // imageSrcSet/imageSizes mirror the ResponsiveImage AVIF source so the preload matches
  // the candidate the browser actually picks.
  preload(`${HERO_BASE}.jpg`, {
    as: "image",
    imageSrcSet: `${HERO_BASE}-mobile.avif 360w, ${HERO_BASE}-tablet.avif 800w, ${HERO_BASE}-desktop.avif 1600w`,
    imageSizes: HERO_SIZES,
    fetchPriority: "high",
  });
  return (
    <>
      <PageSchema path="/" />
      <View />
    </>
  );
}
