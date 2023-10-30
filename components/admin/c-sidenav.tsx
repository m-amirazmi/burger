import { Flex, Icon, Text } from "@chakra-ui/react";
import Link from "../general/c-href";
import { useRouter } from "next/router";
import { ISideNav } from "@/utils/types";

export default function SideNav({ path, icon, name }: ISideNav) {
  const { asPath } = useRouter();

  let isCurrentPath = false;
  if (asPath === "/admin" && path === "/admin") isCurrentPath = true;
  if (path !== "/admin" && asPath.startsWith(path)) isCurrentPath = true;

  return (
    <Link
      transitionDuration="300ms"
      transitionProperty="all"
      transitionTimingFunction="ease-in"
      href={path}
      _hover={{ textDecor: "none" }}
      px="16px"
      py="12px"
      my="8px"
      bgColor={isCurrentPath ? "white" : "transparent"}
      display="block"
      rounded="xl"
      fontWeight={isCurrentPath ? "semibold" : "normal"}
      color={isCurrentPath ? "gray.800" : "gray.400"}
    >
      <Flex alignItems="center" gap="12px">
        <Flex
          transitionDuration="300ms"
          transitionProperty="all"
          transitionTimingFunction="ease-in"
          bgColor={isCurrentPath ? "red.300" : "white"}
          alignItems="center"
          p="8px"
          justifyContent="center"
          rounded="xl"
        >
          <Icon
            fontSize="lg"
            as={icon}
            transitionDuration="300ms"
            transitionProperty="all"
            transitionTimingFunction="ease-in"
            color={isCurrentPath ? "white" : "red.300"}
          ></Icon>
        </Flex>
        <Text as="span">{name}</Text>
      </Flex>
    </Link>
  );
}
