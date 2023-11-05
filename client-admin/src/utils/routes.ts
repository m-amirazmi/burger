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
    showOnSidebar: true,
  },
  {
    path: "burgers",
    name: "Burgers",
    element: BurgersPage,
    showOnSidebar: true,
    subpages: [
      {
        path: "",
        name: "Burger List",
        element: BurgersPage,
        showOnSidebar: true,
      },
      {
        path: "create",
        name: "Create Burger",
        element: BurgersCreatePage,
        showOnSidebar: true,
      },
    ],
  },
  {
    path: "users",
    name: "Users",
    element: UsersPage,
    showOnSidebar: true,
  },
];
