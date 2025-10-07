import React from "react";

export default function Project({ title, description, image, url }) {
  return (
    <div className="relative w-72 sm:w-80 h-96 bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div class="h-100% w-100%  bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 overflow-hidden relative rounded-tr-[5px] rounded-tl-[5px]  border-neutral-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <div class="h-full w-full bg-white z-40 rounded-tr-[4px] overflow-hidden rounded-tl-[4px] relative">
            <div class="h-4 bg-gray-100 relative z-30 w-full flex items-center justify-start px-2 space-x-1">
              <div class="h-2 w-2 rounded-full bg-red-500"></div>
              <div class="h-2 w-2 rounded-full bg-slate-300"></div>
              <div class="h-2 w-2 rounded-full bg-green-500"></div>
            </div>
            <img
              src={image}
              alt={title}
              className="w-full h-40 sm:h-48 object-cover"
            />
          </div>
        </div>

        <div className="p-3 sm:p-4">
          <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">{description}</p>
        </div>
      </a>
    </div>
  );
}
