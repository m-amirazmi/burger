import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../general/sidebar";
import { routes } from "../../utils/routes";

interface IProps {}

export const LayoutMain: React.FC<IProps> = ({}) => {
  return (
    <Flex minH="100vh" w="100vw" bgColor="gray.50">
      <Sidebar routes={routes} />
      <Flex as="main" pt="32px">
        <Outlet />
      </Flex>
    </Flex>
  );
};
