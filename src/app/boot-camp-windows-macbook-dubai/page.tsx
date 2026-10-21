import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BootCampWindowsMacBook";

export const metadata: Metadata = metaForPath("/boot-camp-windows-macbook-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/boot-camp-windows-macbook-dubai" />
      <View />
    </>
  );
}
