import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  const skills = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend",
      desc: "React, Next.js, Tailwind CSS, JavaScript",
    },
    {
      icon: <FaServer />,
      title: "Backend",
      desc: "Node.js, Express.js, REST APIs",
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      desc: "MongoDB, Firebase, PostgreSQL",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile",
      desc: "Kotlin Android Development",
    },
  ];

  const stats = [
    {
      number: "30+",
      title: "Projects Completed",
    },
    {
      number: "4+",
      title: "Years Learning",
    },
    {
      number: "15+",
      title: "Technologies",
    },
    {
      number: "100%",
      title: "Passion",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#070707] py-28"
    >
      {/* Background Blur */}

      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <p className="font-semibold uppercase tracking-[0.35em] text-cyan-400">
              About Me
            </p>

            <h2 className="mt-6 text-5xl font-black leading-tight text-white lg:text-6xl">
              Passionate Software Developer
            </h2>

            <div className="mt-6 h-1 w-24 rounded-full bg-cyan-500"></div>

            <p className="mt-8 text-lg leading-9 text-gray-400">
              I'm a full-stack software developer focused on creating modern,
              scalable and visually impressive digital products.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-400">
              I enjoy building websites, mobile applications, management
              systems, AI solutions and custom business software that delivers
              exceptional user experiences.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-5">
              {stats.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <h3 className="text-4xl font-black text-cyan-400">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-gray-400">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative">
            {/* Main Card */}

            <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-[#121212] to-[#1d1d1d] p-10 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-3xl text-black">
                  <FaCode />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">
                    What I Do
                  </h3>

                  <p className="text-gray-400">
                    Building complete digital experiences
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-6">
                {skills.map((skill) => (
                  <div
                    key={skill.title}
                    className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-black/30 p-6 transition duration-300 hover:border-cyan-400 hover:bg-cyan-500/5"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500 text-2xl text-black transition group-hover:rotate-6">
                      {skill.icon}
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {skill.title}
                      </h4>

                      <p className="mt-2 leading-7 text-gray-400">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom */}

              <div className="mt-10 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-8">
                <div className="flex items-center gap-4">
                  <FaRocket className="text-4xl text-white" />

                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      Always Learning
                    </h4>

                    <p className="mt-2 text-cyan-100">
                      Constantly exploring new technologies, frameworks and
                      innovative ideas to build better software.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}

            <div className="absolute -left-10 top-16 hidden rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5 backdrop-blur-xl lg:block">
              <h4 className="text-3xl font-black text-cyan-400">15+</h4>

              <p className="text-sm text-white">
                Technologies
              </p>
            </div>

            <div className="absolute -right-8 bottom-20 hidden rounded-2xl border border-purple-500/30 bg-purple-500/10 p-5 backdrop-blur-xl lg:block">
              <h4 className="text-3xl font-black text-purple-400">∞</h4>

              <p className="text-sm text-white">
                Creativity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;