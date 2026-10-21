import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneLogicBoardRepair";

export const metadata: Metadata = metaForPath("/iphone-logic-board-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-logic-board-repair-dubai" />
      <View />
    </>
  );
}
