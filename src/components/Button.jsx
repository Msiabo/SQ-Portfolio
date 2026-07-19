import React from "react";
import { motion } from "framer-motion";

const Button = ({
  children,
  icon,
  variant = "primary",
  size = "md",
  fullWidth = false,
  onClick,
  href,
  target = "_self",
  type = "button",
}) => {
  const variants = {
    primary:
      "bg-cyan-500 text-white hover:bg-cyan-400 shadow-lg shadow-cyan-500/30",

    secondary:
      "bg-white/10 border border-white/20 text-white hover:bg-white/20 backdrop-blur-lg",

    outline:
      "border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900",

    dark:
      "bg-slate-900 text-white hover:bg-slate-800",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `
    inline-flex
    items-center
    justify-center
    gap-3
    rounded-full
    font-semibold
    transition-all
    duration-300
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? "w-full" : ""}
  `;

  const content = (
    <motion.span
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={classes}
    >
      {children}

      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : ""}
        className="group"
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className="group">
      {content}
    </button>
  );
};

export default Button;