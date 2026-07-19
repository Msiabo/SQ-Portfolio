import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaAndroid,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiFirebase,
  SiKotlin,
  SiTypescript,
  SiMysql,
} from "react-icons/si";

import SectionTitle from "./SectionTitle";

const Skills = () => {
  const skills = [
    {
      name: "React",
      icon: <FaReact />,
      level: 95,
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      level: 90,
      color: "from-gray-700 to-black",
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare />,
      level: 95,
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      level: 85,
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      level: 95,
      color: "from-cyan-400 to-sky-600",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      level: 98,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      level: 95,
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      level: 92,
      color: "from-green-500 to-lime-500",
    },
    {
      name: "Express",
      icon: <SiExpress />,
      level: 90,
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      level: 90,
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      level: 88,
      color: "from-blue-500 to-cyan-600",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      level: 84,
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "Kotlin",
      icon: <SiKotlin />,
      level: 85,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Android",
      icon: <FaAndroid />,
      level: 82,
      color: "from-green-400 to-green-600",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      level: 92,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      level: 94,
      color: "from-gray-700 to-black",
    },
    {
      name: "Figma",
      icon: <FaFigma />,
      level: 80,
      color: "from-pink-500 to-purple-600",
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0B0F19] py-28"
    >
      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="My Skills"
          title="Technologies"
          highlight="I Work With"
          description="I build scalable, modern and high-performance applications using industry-leading technologies."
        />

        {/* Skills Grid */}

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {skills.map((skill) => (

            <div
              key={skill.name}
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-cyan-400/40"
            >

              {/* Icon */}

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${skill.color} text-3xl text-white shadow-xl transition duration-500 group-hover:scale-110`}
              >
                {skill.icon}
              </div>

              {/* Title */}

              <div className="mt-7 flex items-center justify-between">

                <h3 className="text-xl font-bold text-white">
                  {skill.name}
                </h3>

                <span className="text-cyan-400 font-semibold">
                  {skill.level}%
                </span>

              </div>

              {/* Progress */}

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">

                <div
                  style={{ width: `${skill.level}%` }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                />

              </div>

              <p className="mt-5 text-sm leading-7 text-gray-400">
                Professional experience developing production-ready applications
                using {skill.name}.
              </p>

            </div>

          ))}

        </div>

        {/* Bottom Statistics */}

        <div className="mt-24 grid gap-6 md:grid-cols-4">

          {[
            ["17+", "Technologies"],
            ["50+", "Projects Built"],
            ["3+", "Years Learning"],
            ["100%", "Passion"],
          ].map(([number, text]) => (

            <div
              key={text}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition duration-500 hover:border-cyan-400/30 hover:-translate-y-2"
            >

              <h3 className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-5xl font-black text-transparent">
                {number}
              </h3>

              <p className="mt-4 text-gray-400">
                {text}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;