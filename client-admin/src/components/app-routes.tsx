import { Route, Routes } from "react-router-dom";
import { IRoute } from "../utils/types";
import { LayoutMain } from "./layouts/layout-main";
import { useRouteHandler } from "../hooks/useRouteHandler";

interface IProps {
  routes: IRoute[];
}

export const AppRoutes: React.FC<IProps> = ({ routes }) => {
  const { renderRoutes } = useRouteHandler();

  return (
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        {renderRoutes(routes)}
      </Route>
    </Routes>
  );
};
