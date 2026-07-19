import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [clicked, setClicked] = useState(false);

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseDown = () => setClicked(true);
    const mouseUp = () => setClicked(false);

    const mouseLeave = () => setHidden(true);
    const mouseEnter = () => setHidden(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);
    document.addEventListener("mouseleave", mouseLeave);
    document.addEventListener("mouseenter", mouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
      document.removeEventListener("mouseleave", mouseLeave);
      document.removeEventListener("mouseenter", mouseEnter);
    };
  }, []);

  // Hide on touch devices
  if ("ontouchstart" in window) return null;

  return (
    <>
      {/* Outer Ring */}

      <motion.div
        animate={{
          x: position.x - 18,
          y: position.y - 18,
          scale: clicked ? 0.8 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 24,
          mass: 0.4,
        }}
        className="
          fixed
          left-0
          top-0
          z-[9999]
          h-9
          w-9
          rounded-full
          border-2
          border-cyan-400
          pointer-events-none
          shadow-[0_0_30px_rgba(34,211,238,.6)]
        "
      />

      {/* Inner Dot */}

      <motion.div
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: clicked ? 2 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 35,
        }}
        className="
          fixed
          left-0
          top-0
          z-[9999]
          h-2
          w-2
          rounded-full
          bg-cyan-400
          pointer-events-none
          shadow-[0_0_20px_rgba(34,211,238,.9)]
        "
      />
    </>
  );
};

export default Cursor;