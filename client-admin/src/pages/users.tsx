import { Flex, Text } from "@chakra-ui/react";

interface IProps {}

export const UsersPage: React.FC<IProps> = ({}) => {
  return (
    <Flex>
      <Text fontSize="6xl" textTransform="uppercase" fontWeight="bold">
        Users page
      </Text>
    </Flex>
  );
};
