import React from "react";
import Layout from "./Layout";
import Project from "./Project";
import Slick from "./Slick";
import { IoIosLink } from "react-icons/io";


const Projectcontent = () =>{

    const projects = [
        {
          title: 'Online Food Order Website | MERN',
          description: 'Create a dynamic MERN stack online food ordering website that seamlessly connects users with their favorite local restaurants. Empower customers to browse diverse menus, place orders, and track deliveries effortlessly. Enhance user experience with real-time updates and secure payment options, revolutionizing the way people savor their favorite meals.',
          image: '/Assets/Card/food.png',
          url : 'https://github.com/shiwanshbisht',
        },
        
        {
          title: 'Portfolio | React',
          description: 'Build a Portfolio in react js , which so case my hand on experience , projects and Links of my social.',
          image: '/Assets/Card/resume.png',
          url : 'https://github.com/shiwanshbisht'
        },
        {
          title: 'Neat & Clean | MERN',
          description: 'Create a dynamic, user-friendly MERN stack website that connects users with household services such as cleaning and mopping. Allow customers to easily browse a variety of services and book assistance seamlessly. Enhance the user experience with real-time updates and secure payment options, revolutionizing the way people manage their household tasks with convenience and comfort.',
          image: '/Assets/Card/clean.png',
          url : 'https://github.com/shiwanshbisht'
        },
        
      ];
    return (
        <>
        <Layout>
        <h2 className="text-2xl font-bold mb-8 pl-12">Projects.</h2>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 justify-center items-center py-8">
          {projects.map((project, index) => (
            <Project 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              url={project.url}
            />
          ))}
        </div>
        <Slick/>
        </Layout>
        </>
    );
}

export default Projectcontent;