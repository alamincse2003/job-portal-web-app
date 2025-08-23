import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkModeToggler from "./DarkModeToggler";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-200 sticky  top-0 dark:bg-gray-900 shadow transition-colors duration-300">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900 dark:text-white">
          Job Portal Web App
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-800 dark:text-gray-200">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Jobs
          </NavLink>
          <NavLink
            to="/bookmarks"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Bookmarks
          </NavLink>
          <NavLink
            to="/applied"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Applied Jobs
          </NavLink>
        </div>

        {/* Right Side: Toggle Button + Mobile Menu Icon */}
        <div className="flex items-center space-x-4">
          <DarkModeToggler />
          <button
            className="text-2xl text-gray-800 dark:text-gray-200 md:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-gray-800 dark:text-gray-200">
          <NavLink
            to="/"
            className={({ isActive }) => `block ${isActive ? "underline" : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) => `block ${isActive ? "underline" : ""}`}
          >
            Jobs
          </NavLink>
          <NavLink
            to="/bookmarks"
            className={({ isActive }) => `block ${isActive ? "underline" : ""}`}
          >
            Bookmarks
          </NavLink>
          <NavLink
            to="/applied"
            className={({ isActive }) => `block ${isActive ? "underline" : ""}`}
          >
            Applied Jobs
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
