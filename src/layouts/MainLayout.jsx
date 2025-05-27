import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* <main className="flex-grow"> */}
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default MainLayout;
