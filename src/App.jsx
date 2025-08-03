import "./App.css";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900   dark:text-white   transition-colors duration-300">
          <Navbar />
          <Home />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
