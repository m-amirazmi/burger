import { IBurgerList } from "@/utils/types";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import BurgerItem from "./c-burger-item";

export default function BurgerList({ list }: IBurgerList) {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>No.</Th>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th isNumeric>No. of Stall Used</Th>
            <Th isNumeric>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {list.map((i, k) => (
            <BurgerItem key={i.id} no={k} {...i} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
