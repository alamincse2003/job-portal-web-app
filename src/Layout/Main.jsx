import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../context/ThemeContext";

const Main = () => {
  return (
    <>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900   dark:text-white   transition-colors duration-300">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default Main;
