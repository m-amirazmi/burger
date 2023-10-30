import { ILayout } from "@/utils/types";
import { Box } from "@chakra-ui/react";
import { Jost } from "next/font/google";

const font = Jost({ subsets: ["latin"] });

export default function LayoutWrapper({ children }: ILayout) {
  return (
    <Box
      className={font.className}
      as="main"
      fontSize="16px"
      color="gray.800"
      bgColor="gray.50"
    >
      {children}
    </Box>
  );
}
