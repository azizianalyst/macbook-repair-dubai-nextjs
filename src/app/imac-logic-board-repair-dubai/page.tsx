import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IMacLogicBoardRepair";

export const metadata: Metadata = metaForPath("/imac-logic-board-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-logic-board-repair-dubai" />
      <View />
    </>
  );
}
