import { Button, Flex, Text } from "@chakra-ui/react";

interface IProps {}

export const Sidebar: React.FC<IProps> = ({}) => {
  return (
    <Flex>
      {/* LOGO */}
      <Text textTransform="uppercase">Burger | Admin</Text>
      <Button textTransform="uppercase">Burger | Admin</Button>
      {/* LINKS */}
    </Flex>
  );
};
