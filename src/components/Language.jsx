import React from "react";
import Languagecard from "./Languagecard";

const Language = () => {

  const language = [
    {
        name : 'React',
        percent : "7/10",
    },
    {
        name : "Node",
        percent : "7/10",
    }
    ,
    {
        name : "Express",
        percent : "7/10",
    }
    ,
    {
        name : "Mongo Db",
        percent : "20",
    }
    ,
    {
        name : "JavaScript",
        percent : "7",
    }
    ,
    {
        name : "C",
        percent : "50",
    },
    {
        name : "C++",
        percent : "50",
    },
    
    {
        name : "DSA",
        percent : "70",
    }
]
    return (
        <>
        <div id="about" className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 mb-8">
      <h2 className="text-2xl font-bold mb-8">Profile.</h2>
        <div className=" flex flex-col md:flex-column  md:space-y-0 md:space-x-6 justify-center items-center gap-10 sm:gap-8">
          {language.map((language, index) => (
            <Languagecard 
              key={index}
              name={language.name}
              percent={language.percent}
              
            />
          ))}
        </div>
        </div>
        
        </>
    );

};

export default Language;