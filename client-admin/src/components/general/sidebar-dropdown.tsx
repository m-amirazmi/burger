import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

interface IProps {
  name: string;
  children: React.ReactNode;
  offset: number;
  icon?: IconType;
  current: boolean;
  level: number;
}

export const SidebarDropdown: React.FC<IProps> = ({
  name,
  children,
  offset = 0,
  icon: Icon,
  current,
  level,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <Flex flexDir="column" ml={offset + "px"}>
      <Flex
        onClick={handleDropdown}
        cursor="pointer"
        py="8px"
        px="12px"
        my="4px"
        display="flex"
        alignItems="center"
        gap="8px"
        rounded="md"
        bgColor={current && level === 0 ? "white" : "transparent"}
        fontWeight={current ? "semibold" : ""}
        _hover={{ textDecorationLine: "none" }}
      >
        {Icon ? (
          <IconButton
            aria-label={"icon_" + name}
            icon={<Icon />}
            fontSize="lg"
            size="sm"
            bg={current ? "orange.500" : "white"}
            color={current ? "white" : "orange.500"}
            _hover={{ bg: `${current ? "orange.500" : "white"}` }}
          />
        ) : (
          <Box
            mx={current ? "10px" : "12px"}
            boxSize={current ? "12px" : "8px"}
            bgColor="orange.500"
            rounded="xl"
          />
        )}
        <Text>{name}</Text>
        <Box ml="auto" color="gray.500" fontSize="sm">
          {showDropdown ? <FaChevronUp /> : <FaChevronDown />}
        </Box>
      </Flex>
      {showDropdown && <Flex flexDir="column">{children}</Flex>}
    </Flex>
  );
};
