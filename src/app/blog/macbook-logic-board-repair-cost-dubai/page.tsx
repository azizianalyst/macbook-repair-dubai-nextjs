import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookLogicBoardCost";

export const metadata: Metadata = metaForPath("/blog/macbook-logic-board-repair-cost-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-logic-board-repair-cost-dubai" />
      <View />
    </>
  );
}
