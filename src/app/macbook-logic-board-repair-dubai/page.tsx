import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookLogicBoardRepair";

export const metadata: Metadata = metaForPath("/macbook-logic-board-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-logic-board-repair-dubai" />
      <View />
    </>
  );
}
