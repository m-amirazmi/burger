import { Route, Routes } from "react-router-dom";
import { routes } from "../utils/routes";
import { LayoutMain } from "./layouts/layout-main";

interface IProps {}

export const Routers: React.FC<IProps> = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        {routes.map((i) => {
          const Element = i.element;
          return <Route path={i.path} element={<Element />} />;
        })}
      </Route>
    </Routes>
  );
};
