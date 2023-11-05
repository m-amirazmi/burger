import { IRoute } from "../../utils/types";
import { useRouteHandler } from "../../hooks/useRouteHandler";

interface IProps {
  routes: IRoute[];
}

export const SidebarLinks: React.FC<IProps> = ({ routes }) => {
  const { renderRoutes } = useRouteHandler({ sidebar: true });
  if (!routes || routes.length === 0) return null;
  return <>{renderRoutes(routes)}</>;
};
