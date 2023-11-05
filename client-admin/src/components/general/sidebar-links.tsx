import { IRoute } from "../../utils/types";
import { Flex, Link } from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";

interface IProps {
  routes: IRoute[];
}

export const SidebarLinks: React.FC<IProps> = ({ routes }) => {
  const renderLinks = (routes: IRoute[]) => {
    return routes.map((route, key) => {
      const { subpages, path, name, showOnSidebar } = route;
      if (!showOnSidebar) return null;

      if (subpages && subpages.length > 0) {
        const newSubpages = subpages.map((i) => {
          return { ...i, path: `${path}/${i.path}` };
        });
        return <Flex key={key}>{renderLinks(newSubpages)}</Flex>;
      }
      return (
        <Link key={key} as={RLink} to={path} textTransform="capitalize">
          {name}
        </Link>
      );
    });
  };

  if (!routes || routes.length === 0) return null;

  return <>{renderLinks(routes)}</>;
};
