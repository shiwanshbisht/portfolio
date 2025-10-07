import React from "react";
import { motion } from "framer-motion";
import { Links } from "./Links";
import Type from "./Type";
import Window from "./Window";
import { FaDownload } from "react-icons/fa";
import Plane from "./Plane";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Intro() {
  const typingStrings = [
    "HTML",
    "CSS",
    "JavaScript",
    "React js",
    "Node js",
    "Express js",
    "Mongo DB",
  ];

  return (
    <>
      <div id="intro" className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4">
        <div className="flex justify-center md:justify-start">
          <Plane />
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <div className="w-full">
            <div className="i-left">
              <div className="flex flex-col lg:flex-row items-center">
                {" "}
                <div className="i-left-wrapper">
                  <div className="mt-4 sm:mt-6 lg:mt-12n text-center sm:text-left">
                    {" "}
                    <motion.h1
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 0.2 }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl p-1 sm:p-2 md:p-3 lg:p-4"
                    >
                      Hello{" "}
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
                    </motion.h1>
                    <motion.h1
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 0.4 }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl p-1 sm:p-2 md:p-3 lg:p-4"
                    >
                      <span>I'm Shiwansh - Curious</span>
                    </motion.h1>
                    <motion.h1
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 0.6 }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl p-1 sm:p-2 md:p-3 lg:p-4"
                    >
                      Developer
                    </motion.h1>
                    <motion.h1
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 0.8 }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl p-1 sm:p-2 md:p-3 lg:p-4 "
                      style={{
                        color: "#69ccce",
                      }}
                    >
                      <Type strings={typingStrings} />
                    </motion.h1>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0">
                  {" "}
                  <Window />
                </div>
              </div>
              <a
                href="https://drive.google.com/file/d/1x3Z4G6XWt1SAJRq__Lew7NPg7DciQSvE/view?usp=sharing"
                download="Shiwansh_Singh_Bisht_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-center lg:text-left">
                  {" "}
                  {/* Responsive text alignment */}
                  <button className="relative inline-flex items-center justify-center px-8 py-3 mt-10 text-base font-semibold text-white bg-black rounded hover:shadow-lg hover:scale-105 transition-transform duration-300">
                    <span className="z-10">Download CV</span>
                    <span className="ml-2">
                      <FaDownload />
                    </span>
                  </button>
                </div>
              </a>

              <div className="mt-4 sm:mt-6 lg:mt-12 flex justify-center sm:justify-start">
                <Links />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
