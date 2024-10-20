import React from 'react'


export default function Header() {
  return (
    <div className='text-white flex flex-col items-center mt-20 mb-10'>
      <img src='assets/web-portfolio-photo.png' alt='Profile Picture'
      className='mb-12 border-[3px] border-white h-[300px] w-[300px] rounded-full
                 max-md:h-[280px] max-md:w-[280px]'/>
      <h1 className='text-6xl mb-4
                     max-md:text-5xl'>
        Joeffrey Pilar
      </h1>
      <h2 className='text-4xl mb-4 font-sourceSans
                     max-md:text-3xl'>
        Front End Web Developer
      </h2>
      <p className='font-sourceSans max-md:px-16 text-center'>
        I create dynamic, responsive web experiences that blend clean code with user-friendly design to bring ideas to life.</p>

      <div className='flex justify-evenly w-full'>
        <a href='/Program%20Files/Git/web-portfolio/public/assets/joeffrey-pilar-CV.pdf' target='_blank' rel='noopener noreferrer'
           className='border-2 rounded-lg text-xl border-gray-300 py-2 px-5 mt-10
            hover:bg-gray-100 transition-colors duration-300 ease-in hover:bg-opacity-10
              max-md:text-[18px] max-md:mt-6'>
           View Resume
        </a>
      </div>


    </div>
  )
}