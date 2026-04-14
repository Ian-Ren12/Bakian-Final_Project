import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  // Load saved theme on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      
      <div className="flex justify-between items-center px-6 py-4">
        
        <h1 className="text-xl font-bold text-blue-600">
          Bakian.dev
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 dark:text-white">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-xl"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          {/* Mobile Menu */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col md:hidden px-6 pb-4 space-y-2 text-gray-700 dark:text-white">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}