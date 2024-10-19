
import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";
import { LuCopyright } from "react-icons/lu";

export default function Footer() {

  const icons = [
    {icon: <FaFacebookSquare />, link: 'https://www.facebook.com/pilarjoeffrey'},
    {icon: <BsLinkedin /> , link:'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'},
    {icon: <IoLogoGithub />, link: 'https://github.com/jfreepilar'}
    ];


  return (
    <>
      <div className='h-[30f0px] w-[60%] text-white flex flex-col items-center'>
        <h2 className='text-3xl pt-7 text-center max-md:text-[26px]'>Contact me</h2>

        <div className='flex w-full my-2'>
          <p className='text-center contrast-75 leading-relaxed font-sourceSans max-md:text-[16px]'>
            I'd love to hear from you! If you have any questions, feedback, or ideas, please don’t hesitate to reach out. Send me an email at 
              <a href='mailto:pilarjoeffrey@gmail.com' target='_blank' rel='noopener noreferrer'
                className='mx-1 underline text-xl contrast-200 max-md:text-[18px]'>
                pilarjoeffrey@gmail.com
              </a>
            or call me at 0969 565 0962 and let’s start a conversation!
          </p>
        </div>

        <div className='flex mt-3 mb-2 gap-10'>
          {icons.map((item, index) => (
            <a href={item.link} key={index} target="_blank" rel="noopener noreferrer"
              className='text-2xl border-[1px] border-gray-300 rounded-full p-3
                          hover:cursor-pointer hover:bg-white hover:bg-opacity-10'>
              {item.icon}
            </a>))}

        </div>
      
        <div className='my-10 flex'>
          <p className='text-[15px] mt-[5px] mr-1'><LuCopyright /></p>
          <p>Joeffrey Pilar</p> 
        </div>

      </div>
    </>
  )
}
