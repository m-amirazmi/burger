"use client";
import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

interface IProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<IProps> = ({ children }) => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const handleToggleMobileMenu = () => setToggleMobileMenu(!toggleMobileMenu);
  return (
    <div className="flex h-screen">
      <Sidebar
        toggleMobileMenu={toggleMobileMenu}
        handleToggleMobileMenu={handleToggleMobileMenu}
      />
      <main className="w-full">
        <div className="h-16 flex items-center px-6 border-b">
          <Button
            className="md:hidden"
            size="icon"
            variant="secondary"
            onClick={handleToggleMobileMenu}
          >
            <Menu />
          </Button>
        </div>
        <div className="p-6 mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
