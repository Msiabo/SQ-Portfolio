import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

const experiences = [
  {
    icon: <FaLaptopCode />,
    year: "2025 - Present",
    title: "Full Stack Developer",
    company: "Freelance",
    description:
      "Building modern web applications using React, Node.js, Express, MongoDB, and Tailwind CSS. Developing scalable solutions for businesses and startups.",
  },
  {
    icon: <FaCode />,
    year: "2024 - 2025",
    title: "Frontend Developer",
    company: "Personal Projects",
    description:
      "Designed and developed responsive portfolio websites, e-commerce platforms, and dashboard applications with modern UI/UX principles.",
  },
  {
    icon: <FaBriefcase />,
    year: "2023 - 2024",
    title: "Software Development Student",
    company: "Independent Learning",
    description:
      "Focused on JavaScript, React, Java, databases, API development, Git, and software engineering best practices through real-world projects.",
  },
  {
    icon: <FaGraduationCap />,
    year: "2022 - 2023",
    title: "Information Technology",
    company: "University",
    description:
      "Studied software development, databases, networking, algorithms, object-oriented programming, and systems analysis.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Experience
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            My Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Every project and every challenge has contributed to my growth
            as a software developer.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">
          {/* Center Line */}

          <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-gradient-to-b from-cyan-500 via-cyan-400 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: .7,
                }}
                className={`relative flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Timeline Dot */}

                <div className="absolute left-5 top-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-950 bg-cyan-500 text-white md:left-1/2">
                  {item.icon}
                </div>

                {/* Card */}

                <div
                  className={`ml-14 w-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl md:ml-0 md:w-[45%] ${
                    index % 2 === 0
                      ? "md:mr-auto"
                      : "md:ml-auto"
                  }`}
                >
                  <span className="inline-block rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                    {item.year}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 font-semibold text-cyan-400">
                    {item.company}
                  </p>

                  <p className="mt-5 leading-8 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mt-28 grid gap-8 md:grid-cols-4"
        >
          {[
            ["3+", "Years Learning"],
            ["40+", "Projects Built"],
            ["15+", "Technologies"],
            ["100%", "Passion"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >
              <h3 className="text-5xl font-bold text-cyan-400">
                {number}
              </h3>

              <p className="mt-4 text-slate-400">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;