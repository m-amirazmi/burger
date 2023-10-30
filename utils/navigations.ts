import { TiHome } from "react-icons/ti";
import { AiFillShop } from "react-icons/ai";
import { FaBurger, FaGear, FaUsersGear } from "react-icons/fa6";

export const sidenavs = [
  {
    id: "1",
    name: "Dashboard",
    path: "/admin",
    icon: TiHome,
  },
  {
    id: "2",
    name: "Stalls",
    path: "/admin/stalls",
    icon: AiFillShop,
  },
  {
    id: "3",
    name: "Burgers",
    path: "/admin/burgers",
    icon: FaBurger,
  },
  {
    id: "5",
    name: "Users",
    path: "/admin/users",
    icon: FaUsersGear,
  },
  {
    id: "6",
    name: "Settings",
    path: "/admin/settings",
    icon: FaGear,
  },
];

export const breadcrumbs = {
  admin: {
    dashboard: [
      {
        name: "Admin",
        current: false,
        path: "/admin",
      },
      {
        name: "Dashboard",
        current: true,
        path: "/admin",
      },
    ],
    stalls: [
      {
        name: "Admin",
        current: false,
        path: "/admin",
      },
      {
        name: "Stalls",
        current: true,
        path: "/stalls",
      },
    ],
    burgers: [
      {
        name: "Admin",
        current: false,
        path: "/admin",
      },
      {
        name: "Burgers",
        current: true,
        path: "/burgers",
      },
    ],
    "burgers-create": [
      {
        name: "Admin",
        current: false,
        path: "/admin",
      },
      {
        name: "Burgers",
        current: false,
        path: "/admin/burgers",
      },
      {
        name: "Create Burger",
        current: true,
        path: "/admin/burgers/create",
      },
    ],
    settings: [
      {
        name: "Admin",
        current: false,
        path: "/admin",
      },
      {
        name: "Settings",
        current: true,
        path: "/settings",
      },
    ],
    users: [
      {
        name: "Admin",
        current: false,
        path: "/admin",
      },
      {
        name: "Users",
        current: true,
        path: "/users",
      },
    ],
  },
};
