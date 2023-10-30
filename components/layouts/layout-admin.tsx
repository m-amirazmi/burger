import { ILayout } from "@/utils/types";
import { Box, Container, Divider, Flex, Icon, Text } from "@chakra-ui/react";

import { TiHome } from "react-icons/ti";
import { useRouter } from "next/router";
import Sidebar from "../admin/c-sidebar";

export default function LayoutAdmin({ children }: ILayout) {
  return (
    <Flex flexDir="row">
      {/* Sidebar - Hidden on mobile */}
      <Sidebar />
      <Container maxW="1400px" py="28px">
        {children}
      </Container>
      {/* Content */}
      {/* Mobile Sidebar - Hidden on desktop */}
    </Flex>
  );
}
