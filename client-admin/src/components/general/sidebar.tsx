import { Box, Flex } from "@chakra-ui/react";
import { IRoute } from "../../utils/types";
import { SidebarLinks } from "./sidebar-links";
import { SidebarLogo } from "./sidebar-logo";

interface IProps {
  routes: IRoute[];
}

export const Sidebar: React.FC<IProps> = ({ routes }) => {
  return (
    <Box flexBasis="240px" flexGrow="0" flexShrink="0">
      <Flex flexDir="column" py="24px">
        <SidebarLogo />
        <Flex px="12px" flexDir="column">
          <SidebarLinks routes={routes} />
        </Flex>
      </Flex>
    </Box>
  );
};
