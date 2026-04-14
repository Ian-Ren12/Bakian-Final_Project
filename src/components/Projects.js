import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "React + Tailwind portfolio",
      link: "https://github.com/",
    },
    {
      title: "To-Do App",
      desc: "Task management app",
      link: "https://github.com/",
    },
  ];

  return (
    <section id="projects" className="my-20 text-center">
      <h2 className="text-3xl font-bold text-blue-600">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <h3 className="font-bold text-xl">{p.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {p.desc}
            </p>

            <a
              href={p.link}
              className="inline-block mt-4 text-blue-600 underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}