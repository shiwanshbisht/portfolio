import React from "react";
import Card from './Card';

const Cardcontent = () =>{
    const cards = [
        {
          title: 'Leet Code',
          description: 'Leetcode Profile Showcase my problem solving skill.',
          image: '/Assets/Card/leetcode.png',
          url : 'https://leetcode.com/u/shiwanshbisht/',
        },

        {
          title: 'Github',
          description: 'Github Profile Showcase my projects.',
          image: '/Assets/Card/github.png',
          url : 'https://github.com/shiwanshbisht'
        },
      ];
    
      return (
        <>
        
        <div id="about" className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 mb-8">
      <h2 className="text-2xl font-bold mb-8">Profile.</h2>
        <div className=" flex flex-col md:flex-column  md:space-y-0 md:space-x-6 justify-center items-center gap-10 sm:gap-8">
          {cards.map((card, index) => (
            <Card 
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              url={card.url}
            />
          ))}
        </div>
        </div>
        </>
      );
};

export default Cardcontent;
