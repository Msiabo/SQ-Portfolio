import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame;

    const updateProgress = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percentage =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setProgress(percentage);

      animationFrame = requestAnimationFrame(updateProgress);
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <>
      {/* Background Track */}

      <div className="fixed left-0 top-0 z-[9998] h-[5px] w-full bg-white/5 backdrop-blur-md" />

      {/* Progress */}

      <div
        className="fixed left-0 top-0 z-[9999] h-[5px] rounded-r-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_18px_rgba(34,211,238,0.9)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />

      {/* Glow */}

      <div
        className="fixed left-0 top-0 z-[9998] h-[5px] rounded-r-full bg-cyan-400 blur-md opacity-70 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </>
  );
};

export default ScrollProgress;