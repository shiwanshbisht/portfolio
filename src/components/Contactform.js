import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Layout from "./Layout";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Contactform() {
  const ref = useRef();
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c0y4lu6",
        "template_jmrffsw",
        ref.current,
        "uybZWSz1oKWJwyojF"
      )
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccess(false);
        }
      );
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate("/contact");
        setSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  return (
    <>
      <Layout>
        <div className="mt-10 text-center">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl p-2 sm:p-3 md:p-4 lg:p-5"
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
        </div>

        <div className="flex justify-center mt-10">
          {!success ? (
            <form
              ref={ref}
              onSubmit={handleSubmit}
              className="w-full max-w-lg p-8 border border-gray-200 rounded-lg shadow-lg bg-white"
            >
              <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="xyz@gmail.com"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  placeholder="Your message here"
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="relative inline-flex items-center justify-center px-8 py-3 mt-10 text-base font-semibold text-white bg-black rounded hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <span className="z-10">Submit</span>
                <span className="absolute inset-0 rounded bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-1.5 blur-md"></span>
                <span className="absolute inset-0 rounded bg-black"></span>
              </button>
            </form>
          ) : (
            <div className="mx-auto max-w-md overflow-hidden rounded-3xl text-gray-700 shadow-md">
              <div className="h-40 bg-rose-500 pt-10 sm:h-56">
                <img
                  className="h-full w-full object-contain bg-rose-400"
                  src="https://res.cloudinary.com/dqwgwb6gd/image/upload/v1723274724/unwaediln9vr2lpzkeqg.png"
                  alt="Thank You"
                />
              </div>
              <div className="flex flex-col items-center bg-white px-4 py-10">
                <h2
                  className="mb-2 text-3xl font-bold text-rose-500 sm:text-4xl"
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontWeight: 900,
                    fontStyle: "normal",
                    color: "black",
                    fontSize: "36px",
                  }}
                >
                  Thank you!
                </h2>
                <p
                  className="text-lg text-gray-700"
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontWeight: 900,
                    fontStyle: "normal",
                    color: "black",
                    fontSize: "36px",
                  }}
                >
                  Redirecting you to the contact page...
                </p>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}

export default Contactform;
