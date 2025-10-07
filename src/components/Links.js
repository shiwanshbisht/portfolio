import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin,FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsThreads } from "react-icons/bs";

export const Links = () => {
  return (
    <>
      <div className="mt-6 mb-6 flex flex-wrap gap-0 sm:gap-1 ">
        <ul className="bg-gray-100 flex items-center justify-center p-1 rounded-3xl shadow-sm mt-5">
          <Link
            className="p-2 w-10"
            to="https://github.com/shiwanshbisht"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-8 h-8" />
          </Link>

          <Link
            className="p-2"
            to="https://www.linkedin.com/in/shiwansh-bisht/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-8 h-8" />
          </Link>
          <Link
            className="p-2"
            to="https://leetcode.com/u/shiwanshbisht/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode className="w-8 h-8" />
          </Link>
          <Link
            className="p-2"
            to="https://www.instagram.com/shiwansh_bisht/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-8 h-8" />
          </Link>
          <Link
            className="p-2"
            to="mailto:shiwanshbisht@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail className="w-8 h-8" />
          </Link>
        </ul>
      </div>
    </>
  );
};
