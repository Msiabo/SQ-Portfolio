import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Msiabo",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/siyabonga-mhlongo-5045b523b",
    },
    {
      icon: <FaInstagram />,
      link: "https://instagram.com/msiaboeldios",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 pt-24">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Main */}

        <div className="grid gap-14 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <h2 className="text-4xl font-black text-white">
              Siyabonga
            </h2>

            <p className="mt-2 text-cyan-400">
              Full Stack Developer
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              I design and develop modern digital experiences with
              beautiful interfaces, scalable architecture and
              performance-focused solutions.
            </p>

            <div className="mt-8 flex gap-4">
              {socials.map((social, index) => (
                <motion.a
                  whileHover={{
                    scale: 1.15,
                    rotate: 8,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-cyan-400 hover:bg-cyan-500"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="text-xl font-bold text-white">
              Navigation
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {links.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-400 transition hover:translate-x-2 hover:text-cyan-400"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xl font-bold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400" />
                <span className="text-slate-400">
                  mhlongoquincy@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-cyan-400" />
                <span className="text-slate-400">
                  +27 76 479 8501
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400" />
                <span className="text-slate-400">
                  South Africa
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}

          <div>
            <h3 className="text-xl font-bold text-white">
              Let's Work Together
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              Looking for a developer to build your next web
              application or collaborate on an exciting project?
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center rounded-full bg-cyan-500 px-7 py-3 font-semibold text-white transition hover:bg-cyan-400"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Divider */}

        <div className="my-14 h-px bg-white/10"></div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 pb-8 md:flex-row">
          <p className="flex items-center gap-2 text-slate-500">
            © {new Date().getFullYear()} Siyabonga Mhlongo.
            Made with
            <FaHeart className="text-red-500" />
            using React & Tailwind CSS.
          </p>

          <motion.a
            whileHover={{
              y: -6,
            }}
            href="#home"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-white shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
          >
            <FaArrowUp />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;