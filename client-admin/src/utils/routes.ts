import { BurgersPage } from "../pages/burgers";
import { DashboardPage } from "../pages/dashboard";
import { UsersPage } from "../pages/users";

export const routes = [
  {
    path:'/',
    name:'Dashboard',
    element: DashboardPage
  },
  {
    path:'/burgers',
    name:'Burgers',
    element: BurgersPage
  },
  {
    path:'/users',
    name:'Users',
    element: UsersPage
  },
]