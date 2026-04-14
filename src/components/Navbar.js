import React, { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      
      <h1 className="text-xl font-bold text-blue-600">Bakian.dev</h1>

      <div className="space-x-6 font-medium text-gray-700 dark:text-white">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      <button
        onClick={toggleDark}
        className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
      >
        🌙
      </button>
    </nav>
  );
}