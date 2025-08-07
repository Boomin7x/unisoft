import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col relative min-h-screen">
      <Navbar />
      <div className="flex-1 min-h-[100vh] h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
