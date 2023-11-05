import { IRoute } from "../../utils/types";
import { Box, IconButton, Link } from "@chakra-ui/react";
import { Link as RLink, useLocation } from "react-router-dom";
import { SidebarDropdown } from "./sidebar-dropdown";

interface IProps {
  routes: IRoute[];
}

export const SidebarLinks: React.FC<IProps> = ({ routes }) => {
  const { pathname } = useLocation();

  const renderLinks = (routes: IRoute[], level = 0) => {
    const offset = level < 2 ? 0 : 40;
    return routes.map((route, key) => {
      const { subpages, path, name, showOnSidebar, icon: Icon } = route;

      if (!showOnSidebar) return null;

      let current = pathname === "/" && path === "";
      if (
        pathname !== "/" &&
        path !== "" &&
        pathname.includes(`/${path}`) &&
        level < 2
      )
        current = true;

      if (subpages && subpages.length > 0) {
        const newSubpages = subpages.map((i) => {
          return { ...i, path: `${path}/${i.path}` };
        });

        return (
          <SidebarDropdown
            key={key}
            name={name}
            offset={offset}
            icon={Icon}
            current={current}
            level={level}
          >
            {renderLinks(newSubpages, level + 1)}
          </SidebarDropdown>
        );
      }
      return (
        <Link
          key={key}
          as={RLink}
          to={path}
          textTransform="capitalize"
          py="8px"
          px="12px"
          my="4px"
          ml={offset + "px"}
          display="flex"
          alignItems="center"
          gap="8px"
          rounded="md"
          bgColor={level === 0 && current ? "white" : "transparent"}
          fontWeight={
            (level === 0 && current) || (level !== 0 && pathname === `/${path}`)
              ? "semibold"
              : ""
          }
          _hover={{ textDecorationLine: "none" }}
        >
          {Icon ? (
            <IconButton
              aria-label={"icon_" + name}
              icon={<Icon />}
              fontSize="lg"
              bg={level === 0 && current ? "orange.500" : "white"}
              color={level === 0 && current ? "white" : "orange.500"}
              size="sm"
              _hover={{
                bg: `${level === 0 && current ? "orange.500" : "white"}`,
              }}
            />
          ) : (
            level < 2 && (
              <Box
                mx={pathname === `/${path}` ? "10px" : "12px"}
                boxSize={pathname === `/${path}` ? "12px" : "8px"}
                bgColor="orange.500"
                rounded="xl"
              />
            )
          )}
          {name}
        </Link>
      );
    });
  };

  if (!routes || routes.length === 0) return null;

  return <>{renderLinks(routes)}</>;
};
