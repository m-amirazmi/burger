import { IconType } from "react-icons";

export interface IRoute {
  path: string;
  name: string;
  element?: React.ComponentType<any>;
  showOnSidebar?: boolean;
  subpages?: IRoute[];
  icon?: IconType;
}
