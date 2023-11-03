export interface IRoute {
  path: string;
  name: string;
  element: React.ComponentType<any>;
  subpages?: IRoute[];
}
