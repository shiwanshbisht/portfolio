import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SiBuymeacoffee } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";

export default () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [state, setState] = useState(false);

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <nav
      className={`bg-white pb-5 md:text-sm ${
        state
          ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
          : ""
      }`}
    >
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-5 md:block">
          <Link
            to="/"
            className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
          >
            <SiBuymeacoffee className="w-8 h-8" />
            <h5
              className="text-xl font-bold"
              style={{
                fontFamily: "'Caveat', cursive",
                fontWeight: 900,
                fontStyle: "normal",
                color: "black",
                fontSize: "36px",
              }}
            >
              Shiwansh Singh Bisht.
            </h5>
          </Link>
          <div className="md:hidden">
            <button
              className="menu-btn text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 items-center mt-4 md:mt-0 md:flex ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center  md:flex md:space-y-0">
            {isHomePage && (
              <>
                <li role="none">
                  <ScrollLink
                    to="about"
                    smooth={true}
                    className="text-black text-xl py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 lg:px-8"
                  >
                    About
                  </ScrollLink>
                </li>
                <li role="none">
                  <ScrollLink
                    to="work"
                    smooth={true}
                    className="text-black text-xl py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 lg:px-8"
                  >
                    Work
                  </ScrollLink>
                </li>
                <li role="none">
                  <ScrollLink
                    to="education"
                    smooth={true}
                    className="text-black text-xl py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 lg:px-8"
                  >
                    Education
                  </ScrollLink>
                </li>
              </>
            )}
            <li role="none">
              <Link
                to="/project"
                className="text-black text-xl py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 lg:px-8"
              >
                Project
              </Link>
            </li>

            <li role="none">
              <Link
                to="/resume"
                className="text-black text-xl py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 lg:px-8"
              >
                Resume
              </Link>
            </li>

            <li role="none">
              <Link
                to="/contact"
                className="text-black text-xl py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 lg:px-8"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
