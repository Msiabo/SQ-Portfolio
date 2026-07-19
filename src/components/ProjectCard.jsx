import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#141414] shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-cyan-500/20">

      {/* Image */}

      <div className="relative h-64 overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* Featured */}

        {project.featured && (
          <div className="absolute left-5 top-5">
            <div className="flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-xs font-bold uppercase tracking-widest text-black shadow-lg">

              <FaStar />

              Featured

            </div>
          </div>
        )}

        {/* Year */}

        <div className="absolute right-5 top-5 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl">
          {project.year}
        </div>

      </div>

      {/* Content */}

      <div className="p-7">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          {project.category}
        </p>

        <h3 className="mt-3 text-2xl font-bold text-white transition group-hover:text-cyan-400">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="mt-6 flex flex-wrap gap-2">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-300"
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="mt-8 flex items-center justify-between">

          <div className="flex gap-3">

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white transition hover:bg-cyan-500 hover:text-black"
            >
              <FaGithub />
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white transition hover:bg-cyan-500 hover:text-black"
            >
              <FaExternalLinkAlt />
            </a>

          </div>

          <button className="flex items-center gap-2 font-semibold text-cyan-400 transition group-hover:gap-3">

            View Project

            <FaArrowRight />

          </button>

        </div>

      </div>

    </article>
  );
};

export default ProjectCard;