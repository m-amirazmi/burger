import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

interface IProps {}

export const LayoutMain: React.FC<IProps> = ({}) => {
  return (
    <Flex minH="100vh" w="100vw" bgColor="gray.50">
      {/* SIDEBAR */}
      {/* MAIN */}
      <Flex as="main">
        <Outlet />
      </Flex>
    </Flex>
  );
};
