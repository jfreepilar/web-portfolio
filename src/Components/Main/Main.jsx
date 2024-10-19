import React from 'react'
import NavBar from './NavBar'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Project from './Project'
import Certificate from './Certificate'

export default function Main() {
  return (
    <div className='w-4/5 bg-white text-gray-500 rounded-t-m'>
      <NavBar/>
      <AboutMe/>
      <Certificate/>
      <Skills/>
      <Project/>
    </div>
  )
}