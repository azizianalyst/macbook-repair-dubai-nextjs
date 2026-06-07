import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideTop10MacBookProblems";

export const metadata: Metadata = metaForPath("/top-10-common-macbook-problems-and-how-to-fix-them");

export default function Page() {
  return (
    <>
      <PageSchema path="/top-10-common-macbook-problems-and-how-to-fix-them" />
      <View />
    </>
  );
}
