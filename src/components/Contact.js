import React from "react";
import Contactform from "./Contactform";
import { Links } from "./Links";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-6 bg-black rounded-2xl text-white p-5"
    >
      <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
        <h2 className="text-2xl font-bold mb-8">Contact.</h2>
        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-2 sm:p-3 md:p-4 lg:p-5">
            LET'S WORK
          </h1>

          <span
            className="animated-marker"
            style={{ "--marker-color": "#ff007c" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-2 sm:p-3 md:p-4 lg:p-5">
              TOGETHER
            </h1>
            <svg
              className="svg-marker svg-marker--style3"
              width="26%"
              height="21"
              viewBox="0 0 184 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M2.99996 17.9626C12.8399 12.7075 30.9393 4.04876 36.8901 3.37945C42.8408 2.71013 41.6481 9.55371 38.7739 14.0685C38.0439 16.3832 40.2101 19.2307 54.715 12.1027L65.0248 7.05411C66.2099 6.45989 68.7141 6.06011 69.2498 9.21479C69.9193 13.1581 74.1326 16.5301 86.875 16.0475C99.6174 15.5649 118.079 9.0809 130.833 7.38711C143.587 5.69332 154.465 4.07802 180.617 7.35907"
                stroke="var(--marker-color)"
                strokeWidth="6"
                strokeLinecap="round"
                className="animate-dash"
                style={{ strokeDasharray: 600, strokeDashoffset: 600 }} // initial offset to hide the stroke
              ></path>
            </svg>
          </span>

          <Link to="/contact" title="">
            <button className="relative inline-flex mr-5 items-center justify-center px-8 py-3 mt-10 text-base font-semibold text-white bg-black rounded hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <span className="z-10">Contact</span>
              <span className="absolute inset-0  rounded bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-1.5 blur-md"></span>
              <span className="absolute inset-0 rounded  bg-black"></span>
            </button>
          </Link>

          <a href="tel:+917452021250" title="Call Now">
            <button className="relative  inline-flex items-center justify-center px-8 py-3 mt-10 text-base font-semibold text-black bg-white rounded hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <span className="z-10">Call Now</span>
            </button>
          </a>
        </div>
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-black">
          <Links />
        </div>
      </div>
    </div>
  );
}

export default Contact;
