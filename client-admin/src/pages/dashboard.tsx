import { Flex, Text } from "@chakra-ui/react";

interface IProps {}

export const DashboardPage: React.FC<IProps> = ({}) => {
  return (
    <Flex>
      <Text fontSize="6xl" textTransform="uppercase" fontWeight="bold">
        Dashboard page
      </Text>
    </Flex>
  );
};
