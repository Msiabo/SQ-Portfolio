import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import {
    FaGithub,
    FaLinkedin,
    FaBars,
    FaTimes,
} from "react-icons/fa";

const links = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Services", to: "services" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${scroll
                        ? "border-b border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur-xl"
                        : "bg-transparent"
                    }`}
            >
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                    {/* Logo */}

                    <ScrollLink
                        to="hero"
                        smooth
                        duration={700}
                        className="cursor-pointer"
                    >
                        <h1 className="text-2xl font-black tracking-wide text-white">
                            SIYA<span className="text-violet-500">.</span>
                        </h1>
                    </ScrollLink>

                    {/* Desktop Menu */}

                    <ul className="hidden items-center gap-8 lg:flex">
                        {links.map((link) => (
                            <li key={link.name}>
                                <ScrollLink
                                    to={link.to}
                                    smooth
                                    spy
                                    duration={700}
                                    offset={-80}
                                    activeClass="text-violet-400"
                                    className="group relative cursor-pointer font-medium text-slate-200 transition"
                                >
                                    {link.name}

                                    <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>

                    {/* Right */}

                    <div className="hidden items-center gap-5 lg:flex">

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-xl text-slate-300 transition hover:text-violet-400"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-xl text-slate-300 transition hover:text-violet-400"
                        >
                            <FaLinkedin />
                        </a>

                        <ScrollLink
                            to="contact"
                            smooth
                            duration={700}
                            offset={-80}
                            className="cursor-pointer rounded-full bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
                        >
                            Hire Me
                        </ScrollLink>

                    </div>

                    {/* Mobile Button */}

                    <button
                        onClick={() => setOpen(!open)}
                        className="rounded-xl border border-white/10 bg-white/5 p-3 text-2xl text-white backdrop-blur lg:hidden"
                    >
                        {open ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}

            <AnimatePresence>

                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -25 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -25 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-20 left-4 right-4 z-40 rounded-3xl border border-white/10 bg-slate-900/95 p-8 shadow-2xl backdrop-blur-2xl lg:hidden"
                    >
                        <ul className="space-y-6">

                            {links.map((link) => (
                                <li key={link.name}>
                                    <ScrollLink
                                        to={link.to}
                                        smooth
                                        duration={700}
                                        offset={-80}
                                        onClick={() => setOpen(false)}
                                        className="block cursor-pointer text-lg font-semibold text-slate-200 transition hover:text-violet-400"
                                    >
                                        {link.name}
                                    </ScrollLink>
                                </li>
                            ))}

                        </ul>

                        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

                            <div className="flex gap-5">

                                <a
                                    href="https://github.com/Msiabo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="text-xl text-slate-300 transition duration-300 hover:scale-110 hover:text-violet-400"
                                >
                                    <FaGithub />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/siyabonga-mhlongo-5045b523b"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-2xl text-slate-300 hover:text-violet-400"
                                >
                                    <FaLinkedin />
                                </a>

                            </div>

                            <ScrollLink
                                to="contact"
                                smooth
                                duration={700}
                                offset={-80}
                                onClick={() => setOpen(false)}
                                className="cursor-pointer rounded-full bg-violet-600 px-6 py-3 font-semibold text-white hover:bg-violet-700"
                            >
                                Hire Me
                            </ScrollLink>

                        </div>

                    </motion.div>
                )}

            </AnimatePresence>
        </>
    );
};

export default Navbar;