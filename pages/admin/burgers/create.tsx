import { Flex } from "@chakra-ui/react";
import PageTitle from "@/components/general/c-pagetitle";
import PageBurgers from "@/components/admin-burgers/p-burgers";
import { breadcrumbs } from "@/utils/navigations";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { api } from "@/utils/api";
import { IBurgerModel } from "@/utils/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import BurgerUpdate from "@/components/admin-burgers/c-burger-update";

export default function AdminBurgersCreate({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [input, setInput] = useState<IBurgerModel>({
    name: "",
    description: "",
  });

  const router = useRouter();

  const handleToggle = () => {
    router.push("/admin/burgers");
  };

  const handleInput = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({ ...input, [target.name]: target.value });
  };

  const handleSubmit = async () => {
    if (!input || !input.name || !input.description) return;
    await fetch(api("client").burgers, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    });
    handleToggle();
  };

  return (
    <>
      <Flex flexDir="column" gap="24px">
        <PageTitle
          breadcrumbs={breadcrumbs.admin["burgers-create"]}
          name="Create Burger"
        />
        <PageBurgers list={repo} />
      </Flex>

      <BurgerUpdate
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        handleToggle={handleToggle}
      />
    </>
  );
}

export const getServerSideProps = (async (context) => {
  const res = await fetch(api().burgers);
  const repo = await res.json();
  return { props: { repo } };
}) satisfies GetServerSideProps<{
  repo: IBurgerModel;
}>;
