// import React from 'react'

import { CgMail } from "react-icons/cg"
import { FaPhoneAlt } from "react-icons/fa"
import { HiMiniLinkSlash } from "react-icons/hi2"
import { useEffect, useRef, useState } from "react"
import { BiCheckCircle } from "react-icons/bi"
import emailjs from "@emailjs/browser"

const Contact: React.FC = () => {

   const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

   useEffect(() => {
    emailjs.init("r8_NJbL2Q3x123FLm"); 
    // emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
  }, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        // 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID

        'service_v5r2j75', 

        // 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID

        'template_f0v3lum', 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'officialdanwilliamsglobal@gmail.com'
        }
      );

      if (result.text === 'OK') {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Email error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
    ref={sectionRef}
     className="w-full min:h-screen flex justify-center items-center  ">
      <div className="w-[90%]  ">
       <div className=" md:text-[60px] text-[40px]  text-red-600 flex justify-center font-bold animate-bounce md:mt-30  mt-20 md:mb-10 mb-5">
        Contact <span className="text-blue-950 pl-5"> Us
          </span>
      </div>
        <div className="md:flex gap-10">

           <div>
          <div className="flex md:justify-normal justify-center items-center md:gap-7 gap-3 mb-5">
            <h1 className="text-red-600 text-2xl"> <FaPhoneAlt /> </h1>
            <h1 className=" font-bold">  MOBILE NUMBER </h1>
          </div>
          <div className="md:flex-none flex md:justify-normal justify-center">
             <h1 className="text-[20px] mb-7 ">
              +234 704 879 6753, <br/> +234 814 890 5370
          </h1>

          </div>
         

           <div className="flex md:justify-normal justify-center items-center md:gap-7 gap-3 mb-5">
            <h1 className="text-red-600 text-3xl">   <CgMail /> </h1>
            <h1 className=" font-bold">  EMAIL </h1>
          </div>
          <div className="md:flex-none flex md:justify-normal justify-center">
            <h1 className="text-[20px] mb-7">
               officialdanwilliamsglobal@gmail.com
          </h1>
          </div>
            <div className="flex  md:justify-normal justify-center items-center md:gap-7 gap-3  mb-5">
            <h1 className="text-red-600 text-3xl">  <HiMiniLinkSlash /> </h1>
            <h1 className=" font-bold">  ALL LINKS  </h1>
          </div>
          <div className="md:flex-none flex md:justify-normal justify-center">
             <h1 className="text-[20px]">
              <a href="https://linktr.ee/danwilliamsglobal">  https://linktr.ee/danwilliamsglobal </a>
          </h1>

          </div>
         
        </div>

        <div>
         {isSubmitted ? (
                <div className="bg-[#f0fdf4] border border-[#86efac] rounded-xl p-6 text-center animate-fade-in">
                  <BiCheckCircle className="w-16 h-16 text-[#16a34a] mx-auto mb-4 animate-bounce" />
                  <h4 className="text-xl font-bold text-[#1f2937] mb-2">Message Sent! 🎉</h4>
                  <p className="text-[#4b5563]">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
                      {error}
                    </div>
                  )}

        <div className="md:mt-0 mt-5 ">
          <div className="md:flex gap-2 md:justify-normal justify-center">
            <h1 className="md:flex md:justify-normal flex justify-center">
            <input type="text"
             placeholder="Your Name"
             name="name" 
             value={formData.name}
                        onChange={handleChange}
                        required
             className="outline-none md:w-95 h-12 border border-red-600 rounded-[100px] flex items-center pl-4 md:mt-0 mt-5"/>
            </h1>

            <h1 className="md:flex flex md:justify-normal justify-center">
            <input type="text"
            name="email"
             placeholder="Your email address"
              value={formData.email}
                        onChange={handleChange}
                        required
             className="outline-none md:w-95 h-12 border border-red-600 rounded-[100px] flex items-center pl-4 md:mt-0 mt-5"/>
            </h1>
          </div>
          <div className="md:flex flex md:justify-normal justify-center">
            <input type="text"
             placeholder="Message"
             name="message"
              value={formData.message}
                        onChange={handleChange}
                        required
             className="outline-none mt-5 md:w-200 w-65 md:h-50 h-20 border border-red-600 md:rounded-[50px] rounded-[30px] pl-5"/>
          </div>
          <div className="md:flex flex  md:justify-normal justify-center">
               <button
               type="submit"
                    disabled={isSubmitting}
               className=" mt-5 md:mb-10 mb-20 md:w-200 w-65 h-12 border bg-red-600  rounded-[100px] text-white font-bold hover:bg-gray-500 " >

             {isSubmitting ? (
                        <>
                          {/* <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg> */}
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          {/* <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> */}
                        </>
                      )}
          </button>
          </div>
          </div>
           </form>
              )}

          
          </div>
           </div>
        </div>
    </section>
  )
}

export default Contact