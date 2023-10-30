import { IPageTitle } from "@/utils/types";
import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Breadcrumbs from "./c-breadcrumbs";
import Head from "next/head";

export default function PageTitle({ breadcrumbs, name }: IPageTitle) {
  return (
    <>
      <Head>
        <title>Admin {name}</title>
      </Head>
      <Flex flexDir="column" gap="4px">
        <Breadcrumbs navigations={breadcrumbs} />
        <Heading size="xl" as="h5">
          {name}
        </Heading>
      </Flex>
    </>
  );
}
