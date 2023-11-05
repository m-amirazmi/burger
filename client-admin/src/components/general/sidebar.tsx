import { Box, Divider, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";
import { IRoute } from "../../utils/types";
import { SidebarLinks } from "./sidebar-links";

interface IProps {
  routes: IRoute[];
}

export const Sidebar: React.FC<IProps> = ({ routes }) => {
  return (
    <Box flexBasis="280px" flexGrow="0" flexShrink="0">
      <Flex flexDir="column" p="24px">
        {/* LOGO */}
        <Link as={RLink} to="/" mb="16px">
          <Text
            display="flex"
            gap="6px"
            fontSize="2xl"
            textTransform="uppercase"
            fontWeight="semibold"
          >
            <Text as="span">Burger</Text>
            <Text as="span" color="orange.500">
              Admin
            </Text>
          </Text>
        </Link>
        <Divider />
        <Flex mt="16px" flexDir="column">
          <SidebarLinks routes={routes} />
        </Flex>
      </Flex>
    </Box>
  );
};
