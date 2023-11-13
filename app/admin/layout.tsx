import Sidebar from "@/components/sidebar";

interface IProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="w-full">
        <div className="h-16 flex items-center px-6 border-b">Search</div>
        <div className="p-6 mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
