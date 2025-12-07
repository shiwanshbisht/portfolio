import React from "react";
import Layout from "./Layout";
import { Links } from "./Links";

const Resume = () => {
  return (
    <>
      <Layout>
        <div className="min-h-screen flex justify-center  p-4">
          <div className="w-full max-w-4xl bg-[#E9EFEC] shadow-md rounded-lg p-8">
            {/* Header Section */}
            <header className="border-b pb-6 mb-6">
              <h1 className="text-4xl font-bold">Shiwansh</h1>
              <p className="text-gray-600 mt-2">
                Javascript || React || NodeJs || NextJs
              </p>
              <p className="text-gray-600 mt-4">
                Highly motivated and skilled Mern Developer with hands-on
                experience in designing and building robust mobile applications
                and Website. Proficient in JavaScript, React and React Native,
                with a strong understanding of modern development frameworks and
                UI/UX design principles...
              </p>
              <div className="mt-4 sm:mt-6 lg:mt-12 flex justify-center">
                <Links />
              </div>
            </header>

            {/* Experience Section */}
            <section className="mb-6">
              <h2 className="text-3xl font-bold mb-4">Experience</h2>
              <div className="mb-6">
                <h3 className="font-bold text-lg">
                  Software Developer at Pearl Organisation
                </h3>
                <p className="text-gray-600">Nov 2023 - Jan 2024</p>
                <ul className="list-disc ml-5 text-gray-600">
                  <li>Developed site in Mern</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="font-bold text-lg">
                  Software Engineer at GlobalLogic
                </h3>
                <p className="text-gray-600">Mar 2024 - Present</p>
                <ul className="list-disc ml-5 text-gray-600">
                  <li>Worked on PDP page of verizon website</li>
                </ul>
              </div>
            </section>

            {/* Education Section */}
            <section className="mb-6">
              <h2 className="text-3xl font-bold mb-4">Education</h2>
              <p className="font-bold text-lg">
                Graphic Era Hill University, Dehradun
              </p>
              <p className="text-gray-600">2019 - 2023</p>
              <p className="text-gray-600">B.Tech in Computer Science</p>
            </section>

            {/* Skills Section */}
            <section className="mb-6">
              <h2 className="text-3xl font-bold mb-4">Skills</h2>
              <div className="flex justify-around">
                {/* Languages */}
                <div>
                  <h3 className="font-bold text-lg">Languages</h3>
                  <ul className="list-disc ml-5 text-gray-600">
                    <li>C</li>
                    <li>C++</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg">Frameworks</h3>
                  <ul className="list-disc ml-5 text-gray-600">

                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg">Others</h3>
                  <ul className="list-disc ml-5 text-gray-600">
                    <li>Figma</li>
                    <li>Firebase</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4">My Portfolio</h3>

            <p className="text-gray-600">You can download my resume</p>
          </div>

          <a
            href="https://drive.google.com/file/d/1lm4Fe_Ue1to3tSH3US8F-2MDLSgU6QSY/view?usp=sharing"
            download="Shiwansh_Singh_Bisht_Resume.pdf"
          >
            <button className="relative inline-flex items-center justify-center px-8 py-3 mt-10 text-base font-semibold text-white bg-black rounded hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <span className="z-10">Download Resume</span>

              <span className="absolute inset-0  rounded bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-1.5 blur-md"></span>
              <span className="absolute inset-0 rounded  bg-black"></span>
            </button>
          </a>
        </div>
      </Layout>
    </>
  );
};

export default Resume;
