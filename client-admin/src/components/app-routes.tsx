import { Route, Routes } from "react-router-dom";
import { IRoute } from "../utils/types";
import { LayoutMain } from "./layouts/layout-main";

interface IProps {
  routes: IRoute[];
}

export const AppRoutes: React.FC<IProps> = ({ routes }) => {
  const renderRoutes = (routes: IRoute[]) => {
    return routes.map((route, key) => {
      const { element: Element, subpages, path } = route;

      if (subpages && subpages.length > 0) {
        return (
          <Route key={key} path={path}>
            {renderRoutes(subpages)}
          </Route>
        );
      }

      return <Route key={key} path={path} element={<Element />} />;
    });
  };

  return (
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        {renderRoutes(routes)}
      </Route>
    </Routes>
  );
};
