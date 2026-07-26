import { Outlet } from "react-router-dom";
import  Navbar  from "./Navbar";
import  Footer  from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">

      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Layout;