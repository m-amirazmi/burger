import PageTitle from "@/components/general/c-pagetitle";
import { breadcrumbs } from "@/utils/navigations";

export default function AdminUsers() {
  return (
    <>
      <PageTitle breadcrumbs={breadcrumbs.admin.users} name="Users" />
    </>
  );
}
