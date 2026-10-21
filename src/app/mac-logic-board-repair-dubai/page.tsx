import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacLogicBoardRepair";

export const metadata: Metadata = metaForPath("/mac-logic-board-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-logic-board-repair-dubai" />
      <View />
    </>
  );
}
