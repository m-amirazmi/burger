import { Divider, Flex } from "@chakra-ui/react";
import Link from "../general/c-href";
import { sidenavs } from "@/utils/navigations";
import SideNav from "./c-sidenav";

export default function Sidebar() {
  return (
    <Flex hideBelow="sm">
      <Flex
        w="280px"
        h="100vh"
        px="24px"
        flexDir="column"
        pos="sticky"
        top="0px"
      >
        {/* Logo */}
        <Flex
          flexDir="column"
          pt="36px"
          px="16px"
          textTransform="uppercase"
          fontWeight="bold"
        >
          <Link
            mb="24px"
            href="/admin"
            display="block"
            _hover={{ textDecor: "none" }}
          >
            Burger Admin
          </Link>
          <Divider />
        </Flex>

        <Flex flexDir="column">
          {sidenavs.map((i) => (
            <SideNav key={i.id} {...i} />
          ))}
        </Flex>

        {/* Nav Links */}
      </Flex>
    </Flex>
  );
}
