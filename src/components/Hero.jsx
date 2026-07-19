import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
  FaDownload,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiKotlin,
} from "react-icons/si";

const Hero = () => {
  const tech = [
    {
      icon: <FaReact />,
      name: "React",
      top: "12%",
      left: "10%",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      top: "25%",
      right: "10%",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      bottom: "32%",
      left: "8%",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
      top: "65%",
      right: "12%",
    },
    {
      icon: <SiKotlin />,
      name: "Kotlin",
      bottom: "15%",
      right: "30%",
    },
    {
      icon: <FaDatabase />,
      name: "SQL",
      top: "45%",
      left: "18%",
    },
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-gradient-to-br from-violet-700/20 via-slate-950 to-cyan-500/10" />

        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-violet-600/20 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      {/* Floating Tech */}

      {tech.map((item, index) => (
        <motion.div
          key={item.name}
          animate={{
            y: [0, -18, 0],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
          }}
          style={{
            top: item.top,
            bottom: item.bottom,
            left: item.left,
            right: item.right,
          }}
          className="absolute hidden lg:flex"
        >
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200 backdrop-blur-xl">
            <span className="text-xl text-violet-400">
              {item.icon}
            </span>

            {item.name}
          </div>
        </motion.div>
      ))}

      {/* Content */}

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-full border border-violet-500/30 bg-violet-500/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-violet-300"
        >
          Welcome To My Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-5xl text-5xl font-black leading-tight text-white sm:text-7xl lg:text-8xl"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Siyabonga
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-2xl font-semibold text-slate-300 sm:text-3xl"
        >
          Full Stack Developer • Mobile Developer • UI/UX Designer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-slate-400"
        >
          I build modern web applications, Android apps, REST APIs,
          and beautiful user interfaces with a focus on performance,
          scalability, and exceptional user experience.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          <a
            href="/resume.pdf"
            className="flex items-center gap-3 rounded-full bg-violet-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-violet-700"
          >
            <FaDownload />

            Download CV
          </a>

          <ScrollLink
            to="projects"
            smooth
            duration={700}
            offset={-70}
            className="cursor-pointer rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:border-violet-500 hover:bg-violet-600"
          >
            View Projects
          </ScrollLink>
        </motion.div>

        {/* Socials */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-12 flex gap-6"
        >
          <a
            href="https://github.com/"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-white transition hover:scale-110 hover:bg-violet-600"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-white transition hover:scale-110 hover:bg-violet-600"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        {/* Scroll */}

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-20"
        >
          <ScrollLink
            to="about"
            smooth
            duration={700}
            offset={-70}
            className="cursor-pointer"
          >
            <FaArrowDown className="text-3xl text-violet-400" />
          </ScrollLink>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;