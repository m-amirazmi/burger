import { Flex, Link } from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";
import { IRoute } from "../../utils/types";

interface IProps {
  routes: IRoute[];
}

export const Sidebar: React.FC<IProps> = ({ routes }) => {
  return (
    <Flex flexDir="column">
      {/* LOGO */}
      <Link as={RLink} to="/">
        Burger Admin
      </Link>
      {/* LINKS */}
    </Flex>
  );
};
