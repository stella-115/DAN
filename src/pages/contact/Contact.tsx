// import React from 'react'

import { CgMail } from "react-icons/cg"
import { FaPhoneAlt } from "react-icons/fa"
import { HiMiniLinkSlash } from "react-icons/hi2"

const Contact = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center md:mt-10 mt-30">
      <div className="w-[90%]  ">
       <div className=" md:text-[60px] text-[40px]  text-red-600 flex justify-center font-bold animate-bounce mb-10">
        Contact <span className="text-blue-950 pl-5"> Us
          </span>
      </div>
        <div className="md:flex gap-10">

           <div>
          <div className="flex items-center gap-7 mb-5">
            <h1 className="text-red-600 text-2xl"> <FaPhoneAlt /> </h1>
            <h1 className=" font-bold">  MOBILE NUMBER </h1>
          </div>
          <h1 className="text-[20px] mb-7">
              +234 704 879 6753, <br/> +234 814 890 5370
          </h1>

           <div className="flex items-center gap-7 mb-5">
            <h1 className="text-red-600 text-3xl">   <CgMail /> </h1>
            <h1 className=" font-bold">  EMAIL </h1>
          </div>
          <h1 className="text-[20px] mb-7">
               officialdanwilliamsglobal@gmail.com
          </h1>

            <div className="flex items-center gap-7 mb-5">
            <h1 className="text-red-600 text-3xl">  <HiMiniLinkSlash /> </h1>
            <h1 className=" font-bold">  ALL LINKS  </h1>
          </div>
          <h1 className="text-[20px]">
              <a href="https://linktr.ee/danwilliamsglobal">  https://linktr.ee/danwilliamsglobal </a>
          </h1>
        </div>

        <div className="md:mt-0 mt-5 ">
          <div className="md:flex gap-2 md:justify-normal justify-center">
            <h1 className="md:flex md:justify-normal flex justify-center">
            <input type="text" placeholder="Your Name" className="outline-none w-65 h-12 border border-red-600 rounded-[100px] flex items-center pl-4 md:mt-0 mt-5"/>
            </h1>

            <h1 className="md:flex flex md:justify-normal justify-center">
            <input type="text" placeholder="Your email address" className="outline-none w-65 h-12 border border-red-600 rounded-[100px] flex items-center pl-4 md:mt-0 mt-5"/>
            </h1>

            <h1 className="md:flex flex md:justify-normal justify-center">
            <input type="string" placeholder="Your phone number" className="outline-none w-65 h-12 border border-red-600 rounded-[100px] flex items-center pl-4 md:mt-0 mt-5" />
            </h1>
          </div>
          <div className="md:flex flex md:justify-normal justify-center">
            <input type="text" placeholder="Message" className="outline-none mt-5 md:w-200 w-65 md:h-50 h-20 border border-red-600 md:rounded-[50px] rounded-[30px] pl-5"/>
          </div>
          <div className="md:flex flex  md:justify-normal justify-center">
               <button className=" mt-5 md:w-200 w-65 h-12 border bg-red-600  rounded-[100px] text-white font-bold hover:bg-gray-500 " >
            Submit
          </button>
          </div>

         
        </div>
        

        </div>
       
      </div>

    </div>
  )
}

export default Contact