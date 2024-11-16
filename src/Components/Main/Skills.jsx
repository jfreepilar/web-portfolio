import React from 'react'
import { SiHtml5 } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function Skills() {
  const skills = [
    {icon: <SiHtml5/>, name: 'HTML' , color: 'text-orange-400',
      description: 'Defines the layout and organization of a web page by using elements such as headings, paragraphs, links, and forms.'
    },
    {icon: <FaCss3/>, name: 'CSS', color: 'text-blue-400',
      description: 'Specify the layout, colors, fonts, spacing, and overall visual design of a web application.'},
    {icon: <RiTailwindCssFill/>, name: 'Tailwind',  color: 'text-teal-400',
      description: 'A utility-first CSS framework that simplifies the process of designing responsive and modern web applications.'},
    {icon: <FaBootstrap />, name: 'Bootstrap', color: 'text-purple',
      description: 'An open-source front-end framework used for building responsive and mobile-first websites and web applications. '},
    {icon: <SiJavascript/>, name: 'JavaScript', color: 'text-yellow-400', background: 'bg-black',
      description: 'Utilized to add dynamic behavior to web applications such as manipulating HTML and CSS to respond to user actions.'},
    {icon: <FaReact/>, name: 'React', color:'text-sky-400',
      description: 'UI library used for building fast, dynamic, and reusable user interfaces using a component-based architecture.'},  
  ];

  return (
    <div className='mt-5 px-1 pt-40 border-gray-200 flex flex-col items-center text-gray-500' id='skills'>

        <h2 className='text-3xl text-center mb-5 max-md:text-[26px]'>Skills</h2>

        <div className='flex flex-wrap justify-between mb-16 w-full max-lg:flex-col max-lg:items-center max-md:gap-5'>
          {skills.map((item, index) => (
              <div key={index} className='flex flex-col items-center w-[400px] my-3'>
                <p className={`text-9xl ${item.color}`}>{item.icon}</p>
                <h3 className='text-2xl mt-3 max-md:text-xl'>{item.name}</h3>
                <div className='w-[270px]'>
                  <p className='text-[16px] text-center font-sourceSans'>{item.description}</p>
                </div>
              </div>
           ))}
          </div>
    </div>
  )
}