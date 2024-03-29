import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Gradient() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return (
    <>
    <div>
      <motion.div
        initial={{
          x: "10px",
        }}
        animate={{
          x: `${mousePosition.x - 500}px`,
          y: `${mousePosition.y - 300}px`,
        }}
        transition={{
          duration: 25,
          ease: "backOut",
          type: "tween",
        }}
        className="gradient1"
      ></motion.div></div>
      <div className="gradient2"></div>
      
    </>
  );
}

export default Gradient;
