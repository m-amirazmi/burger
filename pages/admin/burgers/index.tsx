import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import PageTitle from "@/components/general/c-pagetitle";
import { breadcrumbs } from "@/utils/navigations";
import { Flex } from "@chakra-ui/react";
import PageBurgers from "@/components/admin-burgers/p-burgers";
import { api } from "@/utils/api";
import { IBurgerModel } from "@/utils/types";

export default function AdminBurgers({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Flex flexDir="column" gap="24px">
      <PageTitle breadcrumbs={breadcrumbs.admin.burgers} name="Burgers" />
      <PageBurgers list={repo} />
    </Flex>
  );
}

export const getServerSideProps = (async (context) => {
  const res = await fetch(api().burgers);
  const repo = await res.json();
  return { props: { repo } };
}) satisfies GetServerSideProps<{
  repo: IBurgerModel;
}>;
