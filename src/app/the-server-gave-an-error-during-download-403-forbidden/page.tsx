import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideServerError403Download";

export const metadata: Metadata = metaForPath("/the-server-gave-an-error-during-download-403-forbidden");

export default function Page() {
  return (
    <>
      <PageSchema path="/the-server-gave-an-error-during-download-403-forbidden" />
      <View />
    </>
  );
}
