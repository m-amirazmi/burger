import { Flex, Link } from "@chakra-ui/react";
import { Link as RLink, Outlet } from "react-router-dom";
import { routes } from "../../utils/routes";

interface IProps {}

export const LayoutMain: React.FC<IProps> = ({}) => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      gap="24px"
      bgColor="teal.300"
    >
      <Outlet />
      <Flex gap="16px" flexDir="column" alignItems="center">
        {routes.map((i, k) => {
          return (
            <Link
              key={k}
              as={RLink}
              to={i.path}
              color="gray.800"
              fontSize="2xl"
              textUnderlineOffset="8px"
            >
              {i.name}
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
};
