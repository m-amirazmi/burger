import { Flex, Text } from "@chakra-ui/react";

interface IProps {}

export const App: React.FC<IProps> = ({}) => {
  return (
    <Flex
      bgColor="black"
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="6xl" textColor="white">
        Work In Progress...
      </Text>
    </Flex>
  );
};
