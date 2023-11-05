import { Text, Link, Divider } from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";

interface IProps {}

export const SidebarLogo: React.FC<IProps> = ({}) => {
  return (
    <Link
      as={RLink}
      to="/"
      px="24px"
      mb="8px"
      _hover={{ textDecorationLine: "none" }}
    >
      <Text
        textAlign="center"
        gap="6px"
        fontSize="2xl"
        textTransform="uppercase"
        fontWeight="semibold"
        mb="16px"
      >
        <Text as="span">Burger</Text>
        <Text as="span" color="orange.500">
          Admin
        </Text>
      </Text>
      <Divider />
    </Link>
  );
};
