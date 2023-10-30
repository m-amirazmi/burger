import PageTitle from "@/components/general/c-pagetitle";
import { breadcrumbs } from "@/utils/navigations";

export default function AdminStalls() {
  return (
    <>
      <PageTitle breadcrumbs={breadcrumbs.admin.stalls} name="Stalls" />
    </>
  );
}
