import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import { motion } from "framer-motion";

const Plane = () => {
  return (
    <div className="flex justify-start sm:justify-center">
  <div
    className="group flex items-center overflow-hidden whitespace-nowrap rounded-full py-0.5 px-2 border border-gray-300 space-x-2"
    style={{
      backgroundColor: "rgb(17, 24, 39)",
      color: "white",
    }}
  >
    {/* 👋 Hand emoji animation */}
    <motion.span
      className="inline-block"
      animate={{ rotate: [0, 20, -10, 20, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      👋
    </motion.span>

    {/* -> Designs */}
    <span className="font-bold inline-block text-sm flex items-center">
      <FaArrowRightLong className="mr-1" />
      Designs
    </span>

    {/* -> Development with icons */}
    <span className="font-bold inline-block text-sm flex items-center">
      <FaArrowRightLong className="mr-1" />
      Development
      <FaArrowRightLong className="ml-1" />
    </span>

    {/* 🚀 Rocket icon animation */}
    <motion.span
      className="inline-block"
      animate={{
        y: [0, -10, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      🚀
    </motion.span>
  </div>
</div>

  );
};

export default Plane;

