import PageTitle from "@/components/general/c-pagetitle";
import { breadcrumbs } from "@/utils/navigations";

export default function AdminDashboard() {
  return (
    <>
      <PageTitle breadcrumbs={breadcrumbs.admin.dashboard} name="Dashboard" />
    </>
  );
}
