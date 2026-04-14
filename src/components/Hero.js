import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold"
      >
        Hi, I'm Bakian 👋
      </motion.h1>

      <p className="text-xl mt-4">
        Front-End Developer | React & Tailwind Enthusiast
      </p>

      <div className="mt-8 flex justify-center gap-4 flex-wrap">

        <a
          href="#contact"
          className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold"
        >
          Hire Me
        </a>

        <a
          href="/resume.pdf"
          download
          className="border border-white px-6 py-2 rounded-full"
        >
          Download CV
        </a>

      </div>
    </section>
  );
}