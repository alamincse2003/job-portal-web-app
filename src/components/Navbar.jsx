import DarkModeToggler from "./DarkModeToggler";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-200 dark:bg-gray-900 shadow transition-colors duration-300">
      {/* Left - Logo */}
      <div className="text-xl font-bold text-gray-900 dark:text-white">
        Job Portal Web App
      </div>

      {/* Middle - Pages (dummy for now) */}
      <div className="hidden md:flex space-x-6 text-gray-800 dark:text-gray-200">
        <a href="#">Home</a>
        <a href="#">Jobs</a>
        <a href="#">About</a>
      </div>

      {/* Right - Toggle Button */}

      {/* darkMode Toggle */}
      <DarkModeToggler />
      {/* darkMode Toggle */}
    </nav>
  );
};

export default Navbar;
