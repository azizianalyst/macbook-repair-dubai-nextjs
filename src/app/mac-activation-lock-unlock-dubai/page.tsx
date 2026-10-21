import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacActivationLockUnlock";

export const metadata: Metadata = metaForPath("/mac-activation-lock-unlock-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-activation-lock-unlock-dubai" />
      <View />
    </>
  );
}
