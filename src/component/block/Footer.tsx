// import React from 'react'

import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import logo from "../../assets/png post.png"
import { CgMail } from "react-icons/cg"

const Footer = () => {
  return (
    <div className="w-full min-h-70 bg-[#032944] flex justify-center">
      <div className="w-[90%] pt-10  flex justify-between">
        <div className="md:flex gap-6">

           <div>
          <img src={logo} alt=""  className="md:w-70 w-50"/>
          <div className="flex items-center md:gap-5 gap-2 mt-7">

            
            <h1 className="text-white md:text-2xl "> <a href="https://www.instagram.com/danwilliamsglobal?igsh=aTc1NzJ0OWthZzN4"><FaInstagram /></a>
              
            </h1>
           
            <h1 className="text-white md:text-2xl"> <a href="www.linkedin.com/in/danwilliams-global-bba8b8403"><FaLinkedin /></a>
              
            </h1>
            <h1 className="text-white md:text-3xl text-2xl">
              <CgMail />
             
            </h1>
             <h1 className="text-white md:text-3xl text-xl"> <a href="https://wa.link/4a4wmn">   <FaWhatsapp /> </a>
               
              </h1>
           
          </div>
        </div>

               <div className="md:leading-8">
            <h1 className="text-white md:text-[15px]  text-[11px] nmt-5">
              E-mail: <span className="">
                officialdanwilliamsglobal@gmail.com
              </span>
            </h1> 
             <h1 className="text-white md:text-[15px] text-[11px] ">
              Official Number: <span className=" ">
                +234 704 879 6753, +234 814 890 5370
              </span>
            </h1>
             
             <h1 className="text-white md:text-[15px] text-[11px] "> All Links: 
              <a href="https://linktr.ee/danwilliamsglobal">  https://linktr.ee/danwilliamsglobal </a>
            </h1>
          </div>

        </div>
       

          <div className="hidden md:flex flex-col">
            <h1 className="text-white text-[18px] font-bold">
              Our Services
            </h1>
            <h1 className="text-white text-[13px] mt-3">
              Leadership Development
            </h1>
            <h1 className="text-white text-[13px]">
              Workplace Effectiveness
            </h1>
            <h1 className="text-white text-[13px]">
                Team Building
            </h1>
            <h1 className="text-white text-[13px]">
                Communication Skills
            </h1>
            <h1 className="text-white text-[13px]">
              Customer Service Excellence
            </h1>
            <h1 className="text-white text-[13px]">
              Startup Development
            </h1>
            <h1 className="text-white text-[13px]">
              Entrepreneur Capacity Building
            </h1>

            <h1 className="text-white text-[13px]">
              Staff Retreats and Conferences
            </h1>
          </div>
          <div className="md:ml-0 ml-5">
            <h1 className="text-white md:text-[18px]  text-[15px] font-bold">
              Other Services
            </h1>
            <h1 className="text-white md:text-[13px] text-[11px] md:mt-3 mt-1">
              Trademarking
            </h1>
            <h1 className="text-white md:text-[13px] text-[11px]">
              CAC Registration
            </h1>
            <h1 className="text-white md:text-[13px] text-[11px]">
                SCUML Certification
            </h1>
            <h1 className="text-white md:text-[13px] text-[11px]">
               International Passport
            </h1>
            <h1 className="text-white md:text-[13px] text-[11px]">
              Corporate Print Production
            </h1>
            
          </div>
      </div>
      

    </div>
  )
}

export default Footer