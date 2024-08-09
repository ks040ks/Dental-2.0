import React from 'react';
import {Link} from "react-router-dom"
import {RiLinkedinFill} from "react-icons/ri"
import {AiFillGithub, AiOutlineInstagram, AiOutlineFacebook} from "react-icons/ai"
import { RiToothLine } from "react-icons/ri";

const socialLinks = [
  {
    path:"https://github.com/SUKUNA-001",
    icon: <AiFillGithub className='group-hovertext-white w-4 h-5'/>
  },
  {
    path:"https://www.instagram.com/_manik.in",
    icon: <AiOutlineInstagram className='group-hovertext-white w-4 h-5'/>
  },
  {
    path:"https://twitter.com/SUKUNA-001",
    icon: <AiOutlineFacebook className='group-hovertext-white w-4 h-5'/>
  }
];

const quickLinks01 = [
  {
    path:"/home",
    display:"Home"
  },
  {
    path:"/",
    display:"About Us"
  },
  {
    path:"/services",
    display:"Services"
  },
  {
    path:"/",
    display:"Blog"
  }
];

const quickLink02 =[
  {
    path:"/about-doctor",
    display:"About Doctor"

  },
  {
    path:"/",
    display:"Find a Location",

  },
  {
    path:"/",
    display:"Get a Opinion"
  }
]

const  quickLink03 = [ { path: "/", display: "Donate" },
  {path:'/contact',display:"Contact Us"}
 ]

const Footer = () => {

  const year = new  Date().getFullYear()

  return <footer className='pb-16 pt-10'>
<div className='max-w-full w-[1440px] px-5 mx-auto'>
  <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
    <div>
      <img/>{/*=========LOGOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO*/}
             
      <h1 className='text-2xl font-bold mr-14'>Jagdish Dental Clinic</h1>
    <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
      Copyright @ 1990. All rights reserved developed by Manik.</p>
    

      <div className="flex items-center gap-3 mt-4">
      {socialLinks.map((link,index) =>
      (
      <Link to={link.path} key={index} className='w-9 h-9 border  border-solid border-[#181A1E] rounded-full 
      flex items-center justify-center group hover:bg-primaryColor hover:border-none'>

      {link.icon}
      </Link>))}
      </div>
    </div>

        <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
            Quick Links
          </h2>

          <ul>
            {quickLinks01.map((item,index) => <li key={index} className='mb-4'>
            <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
            </li>)}
          </ul>
        </div>

        <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
            I Want to:
          </h2>

          <ul>
            {quickLink02.map((item,index) => <li key={index} className='mb-4'>
            <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
            </li>)}
          </ul>
        </div>

        <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
            Support us
          </h2>

          <ul>
            {quickLink03.map((item,index) => <li key={index} className='mb-4'>
            <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
            </li>)}
          </ul>
        </div>

  </div>
</div>
  </footer>
    
  
}

export default Footer