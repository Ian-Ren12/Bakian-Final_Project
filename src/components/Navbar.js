import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        
        <h1 className="text-xl font-bold text-blue-600">Bakian.dev</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 dark:text-white">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col md:hidden px-6 pb-4 space-y-2">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}