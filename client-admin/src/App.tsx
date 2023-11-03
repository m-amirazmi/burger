import { Flex, Text } from "@chakra-ui/react";

interface IProps {}

export const App: React.FC<IProps> = ({}) => {
  return (
    <Flex
      bgColor="pink"
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="6xl" textColor="black">
        Work In Progress...
      </Text>
    </Flex>
  );
};
