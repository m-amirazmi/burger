import { Flex, Text } from "@chakra-ui/react";

interface IProps {}

export const BurgersPage: React.FC<IProps> = ({}) => {
  return (
    <Flex>
      <Text fontSize="6xl" textTransform="uppercase" fontWeight="bold">
        Burgers page
      </Text>
    </Flex>
  );
};
