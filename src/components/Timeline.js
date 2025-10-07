import React from "react";
import { IoSchoolOutline } from "react-icons/io5";
import { LuSchool } from "react-icons/lu";
const Timeline = () => {
  return (
    <div>
      <div id="education" className="mt-10 max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold mb-8">Eductaion.</h2>
        <p class="mb-4 text-sm font-light">
          <i
            class="inline-block font-black not-italic text-green-600"
            aria-hidden="true"
          ></i>
        </p>

        <div class="flex-auto p-6">
          <div class="relative flex flex-col justify-center">
            <div class="absolute left-4 h-full border-r-2"></div>
            <div class="relative mb-4">
              <span class="absolute inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-center text-base font-semibold text-white shadow">
                <IoSchoolOutline class="text-white h-6 w-6" />
              </span>
              <div class="ml-12 w-auto pt-1">
                <h6 class="text-xl font-semibold text-black">
                  B.Tech in Computer Science,Graphic era hill university
                  ,Dehradun
                </h6>
                <p class="mt-1 text-xs text-gray-500">2019-2023</p>
              </div>
            </div>
            <div class="relative mb-4">
              <span class="absolute inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-center text-base font-semibold text-white shadow">
                <LuSchool class="text-white h-6 w-6" />
              </span>
              <div class="ml-12 w-auto pt-1">
                <h6 class="text-xl font-semibold text-black">
                  Shri Guru Ram Rai , Roorkee (Uttarakhand)
                </h6>
                <p class="mt-1 text-xs text-gray-500">2017-2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
