import { Flex, Link } from "@chakra-ui/react";
import { IRoute } from "../utils/types";
import { Link as RLink, Route } from "react-router-dom";

interface IRouteHandler {
  sidebar?: boolean;
}

export const useRouteHandler = (options: IRouteHandler | void) => {
  const sidebar = options?.sidebar || false;

  const renderRoutes = (routes: IRoute[]) => {
    if (!routes || routes.length === 0) return null;
    return routes.map((route, key) => {
      const { path, name, subpages, showOnSidebar, element: Element } = route;

      if ((sidebar && !showOnSidebar) || (!sidebar && !Element)) return null;

      if (subpages && subpages.length > 0) {
        if (sidebar) {
          const newSubpages = subpages.map((i) => {
            return { ...i, path: `${path}/${i.path}` };
          });
          return <Flex key={key}>{renderRoutes(newSubpages)}</Flex>;
        } else {
          return (
            <Route key={key} path={path}>
              {renderRoutes(subpages)}
            </Route>
          );
        }
      }

      if (sidebar) {
        return (
          <Link key={key} as={RLink} to={path} textTransform="capitalize">
            {name}
          </Link>
        );
      } else {
        return <Route key={key} path={path} element={<Element />} />;
      }
    });
  };
  return { renderRoutes };
};
