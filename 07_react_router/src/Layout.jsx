import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* Can change dynamically */}
      <Footer />
    </>
  );
};

export default Layout;
