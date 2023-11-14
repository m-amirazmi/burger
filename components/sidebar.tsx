import { cn } from "@/lib/utils";
import SidebarLinks from "./sidebar-links";

interface IProps {
  handleToggleMobileMenu: () => void;
  toggleMobileMenu: boolean;
}

const Sidebar: React.FC<IProps> = ({
  toggleMobileMenu,
  handleToggleMobileMenu,
}) => {
  return (
    <>
      <div
        className={cn(
          "flex-shrink-0 flex-grow-0 basis-[280px] h-100% border-r md:block",
          !toggleMobileMenu
            ? "hidden"
            : "block w-[280px] absolute z-10 bg-white h-screen"
        )}
      >
        <div className="flex items-center px-6 h-16 border-b font-semibold">
          BURGER ADMIN
        </div>
        <SidebarLinks />
      </div>
      {toggleMobileMenu && (
        <div
          onClick={handleToggleMobileMenu}
          className="bg-foreground/30 h-screen w-full absolute top-0 right-0"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
