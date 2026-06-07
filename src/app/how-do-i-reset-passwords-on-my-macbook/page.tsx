import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideResetMacBookPassword";

export const metadata: Metadata = metaForPath("/how-do-i-reset-passwords-on-my-macbook");

export default function Page() {
  return (
    <>
      <PageSchema path="/how-do-i-reset-passwords-on-my-macbook" />
      <View />
    </>
  );
}
