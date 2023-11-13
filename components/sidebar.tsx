"use client";

import { sidebarRoutes } from "@/lib/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {}

const Sidebar: React.FC<IProps> = ({}) => {
  const pathname = usePathname();

  return (
    <div className="flex-shrink-0 flex-grow-0 basis-[280px] h-100% border-r">
      <div className="flex items-center px-6 h-16 border-b font-semibold">
        BURGER ADMIN
      </div>
      <div className="flex flex-col">
        {sidebarRoutes.map((i) => (
          <Link
            key={i.path}
            href={i.path}
            className={`py-4 px-6 flex items-center gap-2 transition-colors ${
              pathname === i.path
                ? "bg-amber-600/10 text-amber-600"
                : "text-slate-500/80"
            }`}
          >
            <span className="text-xl">
              <i.icon />
            </span>
            <span>{i.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
