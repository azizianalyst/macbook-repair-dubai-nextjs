import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/Cookies";

export const metadata: Metadata = metaForPath("/cookies");

export default function Page() {
  return (
    <>
      <PageSchema path="/cookies" />
      <View />
    </>
  );
}
