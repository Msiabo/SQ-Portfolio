import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#0f0f0f]">

      {/* Background Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative flex flex-col items-center">

        {/* Rotating Rings */}
        <div className="relative flex items-center justify-center">

          <div className="absolute h-44 w-44 animate-spin rounded-full border border-cyan-400/20 border-t-cyan-400 duration-[8000ms]" />

          <div className="absolute h-32 w-32 animate-spin rounded-full border border-purple-400/20 border-b-purple-400 [animation-direction:reverse] duration-[5000ms]" />

          <div className="absolute h-20 w-20 animate-ping rounded-full bg-cyan-500/10" />

          {/* Logo */}
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/40 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 shadow-[0_0_50px_rgba(34,211,238,.4)]">

            <span className="text-4xl font-black text-white">
              S
            </span>

          </div>

        </div>

        {/* Text */}
        <div className="mt-12 text-center">

          <h2 className="bg-gradient-to-r from-cyan-300 via-white to-purple-400 bg-clip-text text-3xl font-black tracking-widest text-transparent">
            SIYABONGA
          </h2>

          <p className="mt-3 text-sm uppercase tracking-[0.6em] text-gray-400">
            Software Developer
          </p>

        </div>

        {/* Loading Dots */}
        <div className="mt-10 flex gap-3">

          <span className="h-3 w-3 animate-bounce rounded-full bg-cyan-400"></span>

          <span
            className="h-3 w-3 animate-bounce rounded-full bg-blue-500"
            style={{ animationDelay: ".2s" }}
          ></span>

          <span
            className="h-3 w-3 animate-bounce rounded-full bg-purple-500"
            style={{ animationDelay: ".4s" }}
          ></span>

        </div>

        <p className="mt-8 text-sm tracking-[0.3em] text-gray-500">
          LOADING PORTFOLIO
        </p>

      </div>

    </div>
  );
};

export default Loader;