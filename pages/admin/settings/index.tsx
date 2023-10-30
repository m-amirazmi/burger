import PageTitle from "@/components/general/c-pagetitle";
import { breadcrumbs } from "@/utils/navigations";

export default function AdminSettings() {
  return (
    <>
      <PageTitle breadcrumbs={breadcrumbs.admin.settings} name="Settings" />
    </>
  );
}
