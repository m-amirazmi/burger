import { IBreadcrumbs } from "@/utils/types";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Breadcrumbs({ navigations }: IBreadcrumbs) {
  return (
    <Breadcrumb fontSize="14px">
      {navigations.map((i, k) => (
        <BreadcrumbItem
          color={i.current ? "gray.800" : "gray.500"}
          key={k}
          isCurrentPage={i.current}
        >
          <BreadcrumbLink as={!i.current ? NextLink : "a"} href={i.path}>
            {i.name}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
