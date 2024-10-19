import React from 'react'

export default function Certificate() {
  return (
    <div className='px-28 pt-40 mt-5 border-b-2 border-gray-200 text-gray-500 
                    max-md:px-12' id='certificate'>
        <h2 className='text-3xl text-center mb-10 max-md:text-[26px]'>Certificate</h2>
        <p className='text-xl text-center mt-6 mb-10 max-md:text-[16px]'>Web Dev Pro: HTML + CSS, Javascript, and React</p>

        <p className='text-xl text-center mt-4 leading-relaxed font-sourceSans mb-10 max-md:text-[16px]'>In this course, I learned how to build modern, responsive websites using HTML, CSS, and JavaScript. I created interactive layouts, styled web pages, and made sure they looked good on all devices. Utilized React to create dynamic, component-based web applications, enhancing user interfaces and functionality. Managed code development efficiently with Git, tracking changes, cloning repositories, committing updates, and pushing changes to remote repositories. This course equipped me with the skills to deliver clean, user-friendly web experiences.</p>
        
        <div className='w-full flex justify-center my-9'>
            <a href='assets/Joeffrey%20Pilar_WDPBatch2_Certificate_of_Completion_2024.pdf%20(1)%20(1).png'
            target='_blank'
               className='border-2 rounded-lg text-xl border-gray-300 py-3 px-7 mt-5 mb-32
               hover:bg-gray-100 transition-colors duration-300 ease-in
                 max-md:text-[16px] max-md:py-2 max-md:px-6'>
                View Certificate
            </a>
        </div>
        
    </div>
  )
}