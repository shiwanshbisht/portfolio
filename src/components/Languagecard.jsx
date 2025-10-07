import React from "react"; 


const Languagecard = ({name,percent}) => {
    
    return (
        <>
        <div className="my-20">
  
  <div className="mt-2 flex flex-col items-start rounded-md border border-gray-100 bg-white px-4 pt-3 pb-6 shadow-lg">
    <strong className="block text-lg font-medium">{name}</strong>
    <div className="mt-4 flex items-center text-xs text-gray-400">
      Impressions
      <div className="ml-4 h-4 w-36 overflow-hidden rounded-md bg-gray-100 sm:w-56">
        <div className="h-full bg-black" style={{
    width: `${percent}%`
}}></div>
      </div>
    </div>

    
  </div>
</div>
        </>
    )
};

export default Languagecard;