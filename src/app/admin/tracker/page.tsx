import { redirect } from "next/navigation";

export default function TrackerRedirect() {
  redirect("/admin/keywords?tab=tracker");
}
