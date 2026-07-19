import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaGithub />,
    title: "GitHub",
    username: "@yourgithub",
    url: "https://github.com/Msiabo",
    color: "hover:bg-gray-900",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    username: "Your Name",
    url: "https://www.linkedin.com/in/siyabonga-mhlongo-5045b523b",
    color: "hover:bg-blue-700",
  },
  {
    icon: <FaInstagram />,
    title: "Instagram",
    username: "@yourhandle",
    url: "https://instagram.com/msiaboeldios",
    color: "hover:bg-pink-600",
  },
  {
    icon: <FaTwitter />,
    title: "Twitter",
    username: "@yourhandle",
    url: "https://twitter.com/yourhandle",
    color: "hover:bg-sky-500",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    username: "Let's Chat",
    url: "https://wa.me/27764798501",
    color: "hover:bg-green-600",
  },
];

const SocialLinks = () => {
  return (
    <section
      id="social"
      className="bg-[#0b0b0b] py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Connect
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Let's Build Something Amazing
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Whether you have a startup idea, freelance project or
            simply want to connect, I'm always open to new
            opportunities.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {socialLinks.map((social) => (
            <a
              key={social.title}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-cyan-400 ${social.color}`}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-400/10 text-4xl text-cyan-400 transition group-hover:rotate-6 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                {social.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {social.title}
              </h3>

              <p className="mt-2 text-gray-400">
                {social.username}
              </p>

              <div className="mt-8 h-1 w-14 rounded-full bg-cyan-400 transition-all duration-500 group-hover:w-full"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;