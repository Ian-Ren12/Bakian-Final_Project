import React from "react";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="my-20 text-center">
      
      <h2 className="text-3xl font-bold text-blue-600">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

    </section>
  );
}