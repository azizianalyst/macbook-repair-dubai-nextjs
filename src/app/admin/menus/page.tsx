import type { Metadata } from "next";
import MenusAdmin from "@/components/blocks/MenusAdmin";

// Private owner tool — never index.
export const metadata: Metadata = {
  title: "Menus",
  robots: { index: false, follow: false },
};

export default function MenusPage() {
  return <MenusAdmin />;
}
