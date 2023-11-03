import { AppRoutes } from "./components/app-routes";
import { routes } from "./utils/routes";

interface IProps {}

export const App: React.FC<IProps> = ({}) => {
  return <AppRoutes routes={routes} />;
};
