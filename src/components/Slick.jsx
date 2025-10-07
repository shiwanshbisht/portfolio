import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SkillsSlider = () => {
  const settingsForward = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="">
      <Slider {...settingsForward}>
        {[
          "C",
          "C++",
          "JavaScript",
          "React",
          "MERN",
          "MySQL",
          "MongoDB",
          "Java",
          "VSCode",
        ].map((skill, index) => (
          <div key={index} >
            <span       className="items-center justify-center hidden px-10 py-3 mt-10 text-base font-semibold text-white transition-all duration-200 bg-black border border-transparent rounded-md lg:inline-flex hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded"
>{skill}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SkillsSlider;
