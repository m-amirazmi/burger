import { Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import Link from "../general/c-href";
import { FaPlus } from "react-icons/fa6";
import BurgerList from "./c-burger-list";
import { IBurgerList } from "@/utils/types";

export default function PageBurgers({ list }: IBurgerList) {
  return (
    <Flex flexDir="column" gap="24px" bgColor="white" p="24px" rounded="xl">
      <Flex>
        <Heading as="h2" size="md">
          Burger Categories
        </Heading>
        <Button
          as={Link}
          href="/admin/burgers/create"
          ml="auto"
          display="flex"
          gap="8px"
          colorScheme="orange"
          variant="ghost"
          _hover={{ textDecor: "none" }}
        >
          <Icon as={FaPlus} />
          Create New Burger
        </Button>
      </Flex>
      {list.length > 0 ? (
        <BurgerList list={list} />
      ) : (
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          gap="16px"
        >
          <Text fontSize="xl">No burgers available.</Text>
          <Button
            as={Link}
            href="/admin/burgers/create"
            display="flex"
            gap="8px"
            colorScheme="orange"
            variant="ghost"
            _hover={{ textDecor: "none" }}
          >
            <Icon as={FaPlus} />
            Create New Burger
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
