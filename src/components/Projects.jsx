import React, { useMemo, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(projectsData.map((project) => project.category)),
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projectsData;
    }

    return projectsData.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0b0b0b] py-28 text-white"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="text-center">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Portfolio
          </span>

          <h2 className="mt-6 text-5xl font-black md:text-6xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            A collection of modern applications built using today's most
            powerful technologies, focusing on beautiful interfaces,
            performance and scalable architecture.
          </p>
        </div>

        {/* Categories */}

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-cyan-500 text-black shadow-xl shadow-cyan-500/30"
                  : "border border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-500/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results */}

        <div className="mt-10 flex items-center justify-center">
          <div className="rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl">
            <span className="text-gray-400">
              Showing{" "}
              <span className="font-bold text-cyan-400">
                {filteredProjects.length}
              </span>{" "}
              {filteredProjects.length === 1 ? "Project" : "Projects"}
            </span>
          </div>
        </div>

        {/* Projects */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* Empty State */}

        {filteredProjects.length === 0 && (
          <div className="mt-16 rounded-3xl border border-dashed border-white/10 bg-white/5 p-16 text-center">
            <h3 className="text-2xl font-bold">
              No Projects Found
            </h3>

            <p className="mt-4 text-gray-400">
              There are currently no projects in this category.
            </p>
          </div>
        )}

        {/* CTA */}

        <div className="mt-24 text-center">
          <a
            href="https://github.com/Msiabo"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40"
          >
            View All Projects

            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;