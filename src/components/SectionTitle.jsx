import React from "react";

const SectionTitle = ({
  badge = "Section",
  title,
  highlight,
  description,
  align = "center",
}) => {
  const alignment = {
    center: "text-center mx-auto",
    left: "text-left",
    right: "text-right ml-auto",
  };

  return (
    <div className={`max-w-3xl ${alignment[align]}`}>

      {/* Badge */}

      <div
        className={`mb-6 flex ${
          align === "center"
            ? "justify-center"
            : align === "right"
            ? "justify-end"
            : "justify-start"
        }`}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-400 backdrop-blur-md">

          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>

          {badge}

        </span>
      </div>

      {/* Heading */}

      <h2 className="text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">

        {title}{" "}

        {highlight && (
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}

      </h2>

      {/* Decorative Line */}

      <div
        className={`mt-8 flex ${
          align === "center"
            ? "justify-center"
            : align === "right"
            ? "justify-end"
            : "justify-start"
        }`}
      >
        <div className="h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_20px_rgba(34,211,238,0.6)]"></div>
      </div>

      {/* Description */}

      {description && (
        <p className="mt-8 text-lg leading-8 text-gray-400 md:text-xl">
          {description}
        </p>
      )}

    </div>
  );
};

export default SectionTitle;