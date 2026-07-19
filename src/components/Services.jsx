import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaPaintBrush,
  FaArrowRight,
} from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaCode />,
      title: "Frontend Development",
      description:
        "Modern, responsive, and high-performance user interfaces built with React, Next.js, Tailwind CSS, and JavaScript.",
      technologies: ["React", "Next.js", "Tailwind", "JavaScript"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 2,
      icon: <FaServer />,
      title: "Backend Development",
      description:
        "Secure and scalable REST APIs with authentication, databases, file uploads, and cloud integrations.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: 3,
      icon: <FaMobileAlt />,
      title: "Mobile Development",
      description:
        "Cross-platform and Android applications with beautiful user experiences and reliable performance.",
      technologies: ["Kotlin", "Firebase", "Android Studio"],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      icon: <FaDatabase />,
      title: "Database Design",
      description:
        "Efficient database architecture designed for performance, security, and scalability.",
      technologies: ["MongoDB", "MySQL", "PostgreSQL"],
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      icon: <FaPaintBrush />,
      title: "UI / UX Design",
      description:
        "Beautiful interfaces with intuitive user experiences focused on usability and accessibility.",
      technologies: ["Figma", "Tailwind CSS", "Responsive Design"],
      color: "from-pink-500 to-red-500",
    },
    {
      id: 6,
      icon: <FaLaptopCode />,
      title: "Full Stack Solutions",
      description:
        "Complete web applications from concept to deployment using modern development practices.",
      technologies: ["MERN", "REST API", "Cloudinary", "Git"],
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0B0F19] py-28"
    >
      {/* Background Effects */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle
          badge="Services"
          title="What I"
          highlight="Build"
          description="I create modern digital experiences using the latest technologies, focusing on performance, scalability, and exceptional user experiences."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40"
            >
              {/* Gradient Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10`}
              />

              {/* Icon */}
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-3xl text-white shadow-xl`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-5 leading-8 text-gray-400">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="mt-8 flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-xs font-semibold text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <span className="text-sm font-medium text-gray-500">
                  Professional Service
                </span>

                <button className="flex items-center gap-2 font-semibold text-cyan-400 transition-all duration-300 group-hover:gap-4">
                  Learn More
                  <FaArrowRight />
                </button>
              </div>

              {/* Decorative Border */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-10 text-center backdrop-blur-xl">
          <h3 className="text-3xl font-bold text-white">
            Have a Project in Mind?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Let's collaborate to build a modern, scalable, and visually stunning
            application tailored to your goals.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
          >
            Start a Project
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;