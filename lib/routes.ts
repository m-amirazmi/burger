import { FaHamburger, FaHome, FaUsers, FaCog } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
const adminRoot = "/admin";

export const sidebarRoutes = [
  {
    path: adminRoot + "",
    name: "Dashboard",
    icon: FaHome,
  },
  {
    path: adminRoot + "/burgers",
    name: "Burgers",
    icon: FaHamburger,
  },
  {
    path: adminRoot + "/stalls",
    name: "Stalls",
    icon: FaShop,
  },
  {
    path: adminRoot + "/users",
    name: "Users",
    icon: FaUsers,
  },
  {
    path: adminRoot + "/settings",
    name: "Settings",
    icon: FaCog,
  },
];
