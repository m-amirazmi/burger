"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarRoutes } from "@/lib/routes";

interface IProps {
  onLinkClick: () => void;
}

const SidebarLinks: React.FC<IProps> = ({ onLinkClick }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      {sidebarRoutes.map((i) => (
        <Link
          onClick={onLinkClick}
          key={i.path}
          href={i.path}
          className={`py-4 px-6 flex items-center gap-2 transition-colors ${
            pathname === i.path
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground/70"
          }`}
        >
          <span className="text-xs">
            <i.icon size={20} />
          </span>
          <span>{i.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default SidebarLinks;
