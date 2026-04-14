import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Modern portfolio using React & Tailwind.",
    },
    {
      title: "To-Do App",
      desc: "Task management app using React hooks.",
    },
    {
      title: "Weather App",
      desc: "API-based weather forecasting app.",
    },
  ];

  return (
    <section id="projects" className="my-20 text-center">

      <h2 className="text-3xl font-bold text-blue-600">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <h3 className="font-bold text-xl">{p.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {p.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}