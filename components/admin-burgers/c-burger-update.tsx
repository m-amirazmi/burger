import { IBurgerUpdate } from "@/utils/types";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

export default function BurgerUpdate({
  handleInput,
  handleSubmit,
  handleToggle,
}: IBurgerUpdate) {
  return (
    <Modal isOpen={true} onClose={handleToggle}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Burger</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Burger Name</FormLabel>
            <Input name="name" placeholder="eg: Ayam" onChange={handleInput} />
            <FormHelperText>
              Please omit &quot;burger&quot; word.
            </FormHelperText>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Burger Description</FormLabel>
            <Textarea
              name="description"
              placeholder="eg: Patties with 1 chicken and some lettuce..."
              onChange={handleInput}
            />
            <FormHelperText>Any description about the burger.</FormHelperText>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="green"
            w="100%"
            variant="outline"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
