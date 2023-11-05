import { IRoute } from "../../utils/types";

interface IProps {
  routes: IRoute[];
  sidebar: boolean;
}

export const RouteHandler: React.FC<IProps> = ({ routes, sidebar = false }) => {
  return <div>RouteHandler</div>;
};
