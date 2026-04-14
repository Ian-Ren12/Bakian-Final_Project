import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer Student",
      year: "2024 - Present",
      desc: "Learning React, Tailwind CSS, and building responsive web applications.",
    },
    {
      title: "Portfolio Projects",
      year: "2025",
      desc: "Created multiple projects including portfolio website, to-do app, and weather app using APIs.",
    },
    {
      title: "Web Development Practice",
      year: "2025",
      desc: "Practiced JavaScript fundamentals, DOM manipulation, and React hooks.",
    },
  ];

  return (
    <section id="experience" className="my-24">

      <h2 className="text-3xl font-bold text-blue-600 text-center">
        Experience
      </h2>

      <div className="mt-10 border-l-2 border-blue-500 pl-6 space-y-10">

        {experiences.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -left-3 top-1 w-5 h-5 bg-blue-500 rounded-full"></div>

            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.year}</p>
            <p className="text-gray-700 dark:text-gray-300 mt-1">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}