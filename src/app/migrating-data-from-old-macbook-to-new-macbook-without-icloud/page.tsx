import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideMacBookMigrationNoICloud";

export const metadata: Metadata = metaForPath("/migrating-data-from-old-macbook-to-new-macbook-without-icloud");

export default function Page() {
  return (
    <>
      <PageSchema path="/migrating-data-from-old-macbook-to-new-macbook-without-icloud" />
      <View />
    </>
  );
}
