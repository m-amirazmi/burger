import { BurgersPage } from "../pages/burgers";
import { BurgersCreatePage } from "../pages/burgers/create";
import { DashboardPage } from "../pages";
import { UsersPage } from "../pages/users";
import { IRoute } from "./types";

export const routes: IRoute[] = [
  {
    path: "",
    name: "Dashboard",
    element: DashboardPage,
  },
  {
    path: "burgers",
    name: "Burgers",
    element: BurgersPage,
    subpages: [
      {
        path: "",
        name: "Burgers",
        element: BurgersPage,
      },
      {
        path: "create",
        name: "Create Burgers",
        element: BurgersCreatePage,
      },
    ],
  },
  {
    path: "users",
    name: "Users",
    element: UsersPage,
  },
];
