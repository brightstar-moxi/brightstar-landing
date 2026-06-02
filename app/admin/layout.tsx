import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* <Topbar /> */}

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}