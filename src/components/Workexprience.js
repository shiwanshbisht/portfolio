import React from "react";
import { IoSchoolOutline } from "react-icons/io5";
import { LuSchool } from "react-icons/lu";
import { MdOutlineWorkspaces } from "react-icons/md";


const Workexprience = () =>{
    return (
        <>
            <div>
      <div id="education" className="mt-10 max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold mb-8">Work Exprience</h2>
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
                
                <MdOutlineWorkspaces class="text-white h-6 w-6"/>
              </span>
              <div class="ml-12 w-auto pt-1">
                <h6 class="text-xl font-semibold text-black">
                 Software Developer Intern At Koders
                </h6>
                <p class="mt-1 text-xs text-gray-500">Jul 2022 - Aug 2022</p>
              </div>
            </div>
            <div class="relative mb-4">
              <span class="absolute inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-center text-base font-semibold text-white shadow">
                
                <MdOutlineWorkspaces class="text-white h-6 w-6"/>
              </span>
              <div class="ml-12 w-auto pt-1">
                <h6 class="text-xl font-semibold text-black">
                 Software Developer At Pearl Organisation
                </h6>
                <p class="mt-1 text-xs text-gray-500">Nov 2023 - Jan 2024</p>
              </div>
            </div>
            <div class="relative mb-4">
              <span class="absolute inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-center text-base font-semibold text-white shadow">
              <MdOutlineWorkspaces class="text-white h-6 w-6"/>
              </span>
              <div class="ml-12 w-auto pt-1">
                <h6 class="text-xl font-semibold text-black">
                Software Engineer At GlobalLogic
                </h6>
                <p class="mt-1 text-xs text-gray-500">Mar 2024 - Present</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default Workexprience;