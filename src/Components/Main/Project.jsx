import React from 'react'
import { IoLogoGithub } from "react-icons/io5";

export default function Project() {
  const projects = [
    {name: 'Alertify Ph', borderColor: 'border-deepBlue', image: 'assets/alertify-screen-shot.png', alt: 'News Web App',
     codeOnGithub: 'https://github.com/jfreepilar/js-api-app/tree/js-api-app',
     githubPages: 'https://jfreepilar.github.io/js-api-app/',
     description: 'A web application that fetches and displays the latest news articles from various sources. It was built using HTML, CSS, and JavaScipt (Async/Await).'
     },

    {name: 'Stomp', borderColor: 'border-orange-400', image: 'assets/stomp-screen-shot.png', alt: 'E-commerce Web App',
     codeOnGithub: 'https://github.com/jfreepilar/react-ecommerce-app',
     githubPages: 'https://jfreepilar.github.io/react-ecommerce-app/',
     description: 'Key functionalities include adding products to the cart and viewing detailed product information. It was built using React (JSX, React Hooks, and React Router'
    },

    {name: 'Savory Spoon', borderColor: 'border-tomato', image: 'assets/recipe-screen-shot.png', alt: 'Recipe Web App',
     codeOnGithub: 'https://github.com/jfreepilar/react-recipe-app',
     githubPages: 'https://jfreepilar.github.io/react-recipe-app/',
     description: 'Key functionalities include searching for specific recipes, displaying recipes by categories, and toggling the visibility of ingredients and instructions. It was built using React (JSX, React Hooks, React Router, and useReducer)'
    },
    {name: 'The Vape Lab', borderColor: 'border-blueViolet', image: 'assets/the-vape-lab-screen-shot.png', alt: 'Vape Shop Web App',
      codeOnGithub: 'https://github.com/jfreepilar/the-vape-lab',
      githubPages: 'https://jfreepilar.github.io/the-vape-lab/',
      description: 'A vape marketing website showcasing the brand’s identity, affiliate partnerships, e-commerce collaborations, success stories, unique process, and a helpful FAQ section for a user-friendly experience.'
     },
     {name: 'Swift', borderColor: 'border-razzmatazz', image: 'assets/swift-screen-shot.png', alt: 'Swift Bank Web App',
      codeOnGithub: 'https://github.com/jfreepilar/swift',
      githubPages: 'https://jfreepilar.github.io/swift/',
      description: 'A digital bank website that blends a fresh, youth-focused approach with the trusted services of traditional banking. Showcasing a sleek, modern UI, it highlights financial services, seamless onboarding, and endless opportunities for a user-friendly experience.'
     }

  ];

  return (
    <div className='px-28 pt-40 pb-10 mt-5 mb-20 text-gray-500' id='project'>
      <h2 className='text-3xl text-center mb-10 max-md:text-[26px]'>Project</h2>

      <div className='flex flex-wrap justify-evenly gap-10 max-md:justify-center'>

        {projects.map((item, index) => (
                  <div className='border-2 w-[470px] mx-auto mt-8  border-gray-300 flex flex-col gap-4' key={index}>
                    <img className={`w-fit h-[250px] border-b-[5px] ${item.borderColor}`} src={item.image} alt={item.alt} />
                    <div className='px-12 h-min-fit'>
                      <p className='text-center text-2xl max-md:text-[18px]'>{item.name}</p>
                      <p className='text-[15px] leading-relaxed mt-1 font-sourceSans text-center max-md:text-[13px]'>{item.description}</p>
                      
                      <div className='flex justify-evenly'>
                        <a href={item.codeOnGithub} target='_blank'>
                          <div className='flex justify-between items-center my-6 mx-auto w-[120px] border-2 border-gray-300 group cursor-pointer
                                          max-md:w-[100px]'>
                            <IoLogoGithub  className='text-4xl p-2 bg-gray-200 group-hover:bg-gray-300  transition-colors duration-300 ease-in
                                                      max-md:text-[32px]'/>
                            <p className='text-[16px] mr-4 max-md:text-[12px]'>Github</p>
                          </div>
                        </a>

                        <a href={item.githubPages} target='_blank'>
                          <div className='flex justify-between items-center my-6 mx-auto w-[120px] border-2 border-gray-300 group cursor-pointer
                                          max-md:w-[100px]'>
                            <IoLogoGithub  className='text-4xl p-2 bg-gray-200 group-hover:bg-gray-300  transition-colors duration-300 ease-in
                                                      max-md:text-[32px]'/>
                            <p className='text-[16px] mr-4 max-md:text-[12px]'>Website</p>
                          </div>
                        </a>
                      </div>

                    </div>
                  </div>
        ))}
    </div>


    </div>
  )
}