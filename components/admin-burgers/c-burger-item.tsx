import { IBurgerItem } from "@/utils/types";
import { Button, Flex, Icon, Td, Tr } from "@chakra-ui/react";
import React from "react";
import { FaPen, FaTrash } from "react-icons/fa6";

export default function BurgerItem({
  no = 0,
  id,
  name,
  description,
  noOfStallUsed,
}: IBurgerItem) {
  return (
    <Tr>
      <Td>{no + 1}</Td>
      <Td textTransform="capitalize">{name}</Td>
      <Td>{description}</Td>
      <Td isNumeric>{noOfStallUsed}</Td>
      <Td>
        <Flex gap="8px">
          <Button
            ml="auto"
            display="flex"
            gap="8px"
            colorScheme="blue"
            variant="ghost"
          >
            <Icon as={FaPen} />
            Edit
          </Button>
          <Button display="flex" gap="8px" colorScheme="red" variant="ghost">
            <Icon as={FaTrash} />
            Remove
          </Button>
        </Flex>
      </Td>
    </Tr>
  );
}
