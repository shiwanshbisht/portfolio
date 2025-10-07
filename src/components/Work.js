import React from "react";

const Work = () => {
  return (
    <div id="work" className="mt-10 max-w-7xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl font-bold mb-8">Work.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="p-6 hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded">
          <h3 className="text-2xl font-semibold mb-4">Mern Development</h3>
          <p className="text-gray-600">
            Full-stack development using the MERN stack (MongoDB, Express,
            React, and Node.js)
          </p>
        </div>
        <div className="p-6 hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded">
          <h3 className="text-xl font-semibold mb-4">Problem Solving</h3>
          <p className="text-gray-600">
            Efficient problem-solving through mastering data structures and
            algorithms, enabling optimal solutions to complex challenges
          </p>
        </div>

      </div>
      <div className="text-center p-6 hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded">
          <h3 className="text-xl font-semibold mb-4">API Integration</h3>
          <p className="text-gray-600">
            Seamlessly integrating third-party APIs for enhanced app
            functionality.
          </p>
      </div>
    </div>
  );
};

export default Work;
