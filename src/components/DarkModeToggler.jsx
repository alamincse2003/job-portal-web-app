import { FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from "../context/ThemeContext";

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-2xl text-yellow-400 dark:text-white"
    >
      {darkMode ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default DarkModeToggler;
