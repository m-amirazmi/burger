import { Beef, Home, SlidersHorizontal, Store, Users2 } from "lucide-react";
const adminRoot = "/admin";

export const sidebarRoutes = [
  {
    path: adminRoot + "",
    name: "Dashboard",
    icon: Home,
  },
  {
    path: adminRoot + "/burgers",
    name: "Burgers",
    icon: Beef,
  },
  {
    path: adminRoot + "/stalls",
    name: "Stalls",
    icon: Store,
  },
  {
    path: adminRoot + "/users",
    name: "Users",
    icon: Users2,
  },
  {
    path: adminRoot + "/settings",
    name: "Settings",
    icon: SlidersHorizontal,
  },
];
