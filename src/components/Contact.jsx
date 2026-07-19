import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/20 blur-[140px]" />
    </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Let's Build Something Amazing
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Have a project in mind? I'd love to hear about it.
            Send me a message and let's create something incredible together.
          </p>
        </motion.div>

        {/* Content */}

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white">
              Get In Touch
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              Whether you're looking for a frontend developer,
              full-stack engineer, freelancer, or someone to
              collaborate with, feel free to reach out.
            </p>

            <div className="mt-10 space-y-6">

              {/* Email */}

              <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-cyan-500">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-cyan-500 text-2xl text-white">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-slate-500">
                    Email
                  </p>

                  <h4 className="text-lg font-semibold text-white">
                    mhlongoquincy@gmail.com
                  </h4>
                </div>
              </div>

              {/* Phone */}

              <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-cyan-500">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-cyan-500 text-2xl text-white">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-slate-500">
                    Phone
                  </p>

                  <h4 className="text-lg font-semibold text-white">
                    +27 76 479 8501
                  </h4>
                </div>
              </div>

              {/* Location */}

              <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-cyan-500">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-cyan-500 text-2xl text-white">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-slate-500">
                    Location
                  </p>

                  <h4 className="text-lg font-semibold text-white">
                    South Africa
                  </h4>
                </div>
              </div>
            </div>

            {/* Socials */}

            <div className="mt-12 flex gap-4">
              {[
                <FaGithub />,
                <FaLinkedin />,
                <FaInstagram />,
              ].map((icon, index) => (
                <a
                  key={index}
                  href="/"
                  className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-white transition hover:scale-110 hover:border-cyan-500 hover:bg-cyan-500"
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <form className="space-y-6">

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="rounded-xl border border-white/10 bg-slate-900/70 px-5 py-4 text-white outline-none transition focus:border-cyan-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-xl border border-white/10 bg-slate-900/70 px-5 py-4 text-white outline-none transition focus:border-cyan-500"
                />

              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-5 py-4 text-white outline-none transition focus:border-cyan-500"
              />

              <textarea
                rows="6"
                placeholder="Tell me about your project..."
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-5 py-4 text-white outline-none transition focus:border-cyan-500"
              />

              <button
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-400"
              >
                Send Message

                <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;