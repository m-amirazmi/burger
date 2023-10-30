import { ILayout } from "@/utils/types";
import { Flex, Link as CLink } from "@chakra-ui/react";
import Link from "next/link";

export default function LayoutMain({ children }: ILayout) {
  return (
    <Flex flexDir="column">
      <Flex>
        <CLink as={Link} href="/admin">
          Admin Dashboard
        </CLink>
      </Flex>
      <Flex>{children}</Flex>
    </Flex>
  );
}
