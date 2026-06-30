// import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { NavLink } from 'react-router-dom';
import { GoDotFill } from 'react-icons/go';

const Service = () => {
  return (
    <div className=' w-full min-h-screen pt-30 pb-20 '>

      <div className=" md:text-[60px] text-[40px]  text-blue-950 flex justify-center font-bold animate-bounce ">
        Our <span className="text-red-600 pl-5"> Services
        </span>
      </div>
        <div className='hidden md:flex'>
             <Swiper
      spaceBetween={1}
       modules={[Navigation, Autoplay ]}
      navigation
      loop={true}
      slidesPerView={2}
      autoplay={{delay: 5000}}
    >
       
      <SwiperSlide>
        <div className='flex justify-center'>
              <div className="md:w-100 md:h-105 bg-red-600 shadow-2xl rounded-[60px] mt-10 p-7  ">
            <div className="">
            <h1 className="text-white text-[20px] font-bold">
              Workplace Effectiveness Training
            </h1>
            <h1 className="text-white text-[13px] mt-2">
              Our Workplace Effectiveness Training is designed to help individuals and organizations improve productivity, professionalism, and performance in today's fast-paced work environment. Whether you are a growing business or an established organization, this training helps create a culture of excellence, accountability, and results.
            </h1>
            </div>
            <h1  className="text-white text-[20px] font-bold mt-5">
              Key Benefits:
            </h1>
            <div className="text-white text-[13px] mt-2">
              <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Improved productivity and efficiency </h1>
               <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Enhanced communication and teamwork </h1>
                <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Better time and task management </h1>
                 <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Increased employee accountability and professionalism  </h1>
                  <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Stronger workplace relationships and morale </h1>
            </div>
            <NavLink to="/contact">
               <div className="flex justify-center">
             <button className="w-60 h-10 rounded-[7px] bg-blue-950 text-white font-bold mt-3 animate-pulse">
              LET'S WORK TOGETHER
            </button>
           </div>
            </NavLink>
          
        </div>

        </div>
      
      </SwiperSlide>

      <SwiperSlide>
        <div className='flex justify-center'> 
              <div className="md:w-100 md:h-105 bg-blue-950 shadow-2xl rounded-[60px] mt-10 p-7 ">
            <div className="">
            <h1 className="text-white text-[20px] font-bold">
             Team & Leadership Building
            </h1>
            <h1 className="text-white text-[13px] mt-2">
             Strong organizations are built on strong teams and effective leaders. Our Team & Leadership Building program focuses on developing leadership capacity, fostering collaboration, and strengthening team dynamics. This training is ideal for managers, supervisors, team leads, and organizations seeking to build high-performing teams that work together with clarity and purpose.
            </h1>
            </div>
            <h1  className="text-white text-[20px] font-bold mt-3">
              Key Benefits:
            </h1>
            <div className="text-white text-[13px] mt-2">
              <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Stronger leadership capabilities </h1>
               <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Improved team cohesion and collaboration </h1>
                <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Enhanced conflict management skills </h1>
                 <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Better decision-making and accountability  </h1>
                  <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Increased employee engagement and performance </h1>
            </div>
            <NavLink to="/contact">
               <div className="flex justify-center">
             <button className="w-60 h-10 rounded-[7px] bg-red-600 text-white font-bold mt-3 animate-pulse">
              LET'S WORK TOGETHER
            </button>
           </div>
            </NavLink>
          
        </div>

        </div>
             
        </SwiperSlide>

      <SwiperSlide>
        <div className=' flex justify-center'>
              <div className="md:w-100 md:h-105 bg-red-600 shadow-2xl rounded-[60px] mt-10 p-7 ">
            <div className="">
            <h1 className="text-white text-[20px] font-bold">
              Customer Service Excellence
            </h1>
            <h1 className="text-white text-[13px] mt-2">
             Exceptional customer service is a key driver of business growth and customer loyalty. Our Customer Service Excellence training equips staff with the skills needed to deliver outstanding customer experiences consistently. This program is suitable for customer-facing teams, service organizations, and businesses that want to stand out through superior service delivery.
            </h1>
            </div>
            <h1  className="text-white text-[20px] font-bold mt-3">
              Key Benefits:
            </h1>
            <div className="text-white text-[13px] mt-2">
              <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Improved customer satisfaction and retention</h1>
               <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Enhanced communication and interpersonal skills </h1>
                <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Effective handling of complaints and difficult situations </h1>
                 <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Stronger brand reputation and customer loyalty </h1>
                  <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Increased sales and business growth opportunities</h1>
            </div>
            <NavLink to="/contact">
               <div className="flex justify-center">
             <button className="w-60 h-10 rounded-[7px] bg-blue-950 text-white font-bold mt-3 animate-pulse">
              LET'S WORK TOGETHER
            </button>
           </div>
            </NavLink>
          
        </div>

        </div>
         
        </SwiperSlide>

      <SwiperSlide>
          <div className='flex justify-center'>
             <div className="md:w-100 md:h-105 bg-blue-950 shadow-2xl rounded-[60px] mt-10 p-7 ">
            <div className="">
            <h1 className="text-white text-[20px] font-bold">
            Startup Formation & Development
            </h1>
            <h1 className="text-white text-[13px] mt-2">
            Starting a business requires more than just an idea—it requires structure, strategy, and execution. Our Startup Formation & Development service supports aspiring entrepreneurs and early-stage businesses in building a solid foundation for success. 
            From concept to launch, we help entrepreneurs transform ideas into viable and sustainable businesses.
            </h1>
            </div>
            <h1  className="text-white text-[20px] font-bold mt-">
              Key Benefits:
          </h1>
            <div className="text-white text-[13px] mt-2">
              <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Proper business setup and registration guidance </h1>
               <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Development of a clear business model and strategy </h1>
                <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Improved market readiness and positioning</h1>
                 <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Access to practical entrepreneurial insights </h1>
                  <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Stronger foundation for business growth and sustainability </h1>
            </div>
            <NavLink to="/contact">
               <div className="flex justify-center">
             <button className="w-60 h-10 rounded-[7px] bg-red-600 text-white font-bold mt-2 animate-pulse">
              LET'S WORK TOGETHER
            </button>
           </div>
            </NavLink>
          
        </div>
          </div>
        </SwiperSlide>


         <SwiperSlide>
        <div className=' flex justify-center'>
 <div className="md:w-100 md:h-105 bg-red-600 shadow-2xl rounded-[60px] mt-10 p-7 ">
            <div className="">
            <h1 className="text-white text-[20px] font-bold">
              Entrepreneur Capacity Building
            </h1>
            <h1 className="text-white text-[13px] mt-2">
             Our Entrepreneur Capacity Building program is designed to empower business owners with the knowledge, skills, and mindset needed to scale their ventures. The training covers business management, financial literacy, marketing, innovation, leadership, and growth planning.
            </h1>
            </div>
            <h1  className="text-white text-[20px] font-bold mt-5">
              Key Benefits:
            </h1>
            <div className="text-white text-[13px] mt-2">
              <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Enhanced business management skills</h1>
               <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>  Better financial planning and decision-making</h1>
                <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Improved marketing and customer acquisition strategies </h1>
                 <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Increased innovation and competitiveness</h1>
                  <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Greater confidence in leading and growing a business
</h1>
            </div>
            <NavLink to="/contact">
               <div className="flex justify-center">
             <button className="w-60 h-10 rounded-[7px] bg-blue-950 text-white font-bold mt-3 animate-pulse">
              LET'S WORK TOGETHER
            </button>
           </div>
            </NavLink>
          
        </div>

        </div>
         
        </SwiperSlide>

      <SwiperSlide>
          <div className='flex justify-center'>
            <div className="md:w-100 md:h-105 bg-blue-950 shadow-2xl rounded-[60px] mt-10 p-7 ">
            <div className="">
            <h1 className="text-white text-[17px] font-bold">
           Staff Retreats and Growth Conference
            </h1>
            <h1 className="text-white text-[12px] mt-2">
           Our Staff Retreats and Growth Conferences provide organizations with a refreshing opportunity to inspire, recharge, and align their workforce. These events combine professional development, team bonding, strategic reflection, and motivational sessions to foster personal and organizational growth.We customize each retreat or conference to meet the unique goals of your organization, ensuring a meaningful and impactful experience for participants.

            </h1>
            </div>
            <h1  className="text-white text-[18px] font-bold mt-2">
              Key Benefits:   </h1>
            <div className="text-white text-[13px] mt-2">
              <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>  Renewed employee motivation and engagement </h1>
               <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Stronger team relationships and collaboration </h1>
                <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Alignment with organizational vision and goals</h1>
                 <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Opportunities for strategic planning and reflection </h1>
                  <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Enhanced workplace culture and morale </h1>
            </div>
            <NavLink to="/contact">
               <div className="flex justify-center">
             <button className="w-60 h-10 rounded-[7px] bg-red-600 text-white font-bold mt-2 animate-pulse">
              LET'S WORK TOGETHER
            </button>
           </div>
            </NavLink>
          
        </div>
          </div>
        </SwiperSlide>


    </Swiper>
    </div>

            <div className='md:hidden lg:hidden'>
             <Swiper
      spaceBetween={1}
       modules={[Navigation, Autoplay ]}
      navigation
      loop={true}
      slidesPerView={1}
      // autoplay={{delay: 5000}}
    >
       
      <SwiperSlide>
        <div className='flex justify-center'>
              <div className="w-80 md:h-105 bg-red-600 shadow-2xl rounded-[60px] mt-10 p-5">
            <div className="">
            <h1 className="text-white text-[18px] font-bold">
              Workplace Effectiveness Training
            </h1>
            <h1 className="text-white text-[13px] mt-2">
              Our Workplace Effectiveness Training is designed to help individuals and organizations improve productivity, professionalism, and performance in today's fast-paced work environment. Whether you are a growing business or an established organization, this training helps create a culture of excellence, accountability, and results.
            </h1>
            </div>
            <h1  className="text-white text-[18px] font-bold mt-5">
              Key Benefits:
            </h1>
            <div className="text-white text-[13px] mt-2">
              <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Improved productivity and efficiency </h1>
               <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Enhanced communication and teamwork </h1>
                <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Better time and task management </h1>
                 <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Increased employee accountability and professionalism  </h1>
                  <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Stronger workplace relationships and morale </h1>
            </div>
            <NavLink to="/contact">
               <div className="flex justify-center">
             <button className="w-60 h-10 rounded-[7px] bg-blue-950 text-white font-bold mt-3 animate-pulse">
              LET'S WORK TOGETHER
            </button>
           </div>
            </NavLink>
          
        </div>

        </div>
      
      </SwiperSlide>

      <SwiperSlide>
        <div className='flex justify-center'> 
              <div className="w-80 md:h-105 bg-blue-950 shadow-2xl rounded-[60px] mt-10 p-5 ">
            <div className="">
            <h1 className="text-white text-[18px] font-bold">
             Team & Leadership Building
            </h1>
            <h1 className="text-white text-[13px] mt-2">
             Strong organizations are built on strong teams and effective leaders. Our Team & Leadership Building program focuses on developing leadership capacity, fostering collaboration, and strengthening team dynamics. This training is ideal for managers, supervisors, team leads, and organizations seeking to build high-performing teams that work together with clarity and purpose.
            </h1>
            </div>
            <h1  className="text-white text-[18px] font-bold mt-3">
              Key Benefits:
            </h1>
            <div className="text-white text-[13px] mt-2">
              <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Stronger leadership capabilities </h1>
               <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Improved team cohesion and collaboration </h1>
                <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Enhanced conflict management skills </h1>
                 <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Better decision-making and accountability  </h1>
                  <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Increased employee engagement and performance </h1>
            </div>
            <NavLink to="/contact">
               <div className="flex justify-center">
             <button className="w-60 h-10 rounded-[7px] bg-red-600 text-white font-bold mt-3 animate-pulse">
              LET'S WORK TOGETHER
            </button>
           </div>
            </NavLink>
          
        </div>

        </div>
             
        </SwiperSlide>

      <SwiperSlide>
        <div className=' flex justify-center'>
              <div className="w-80 md:h-105 bg-red-600 shadow-2xl rounded-[60px] mt-10 p-5 ">
            <div className="">
            <h1 className="text-white text-[18px] font-bold">
              Customer Service Excellence
            </h1>
            <h1 className="text-white text-[13px] mt-2">
             Exceptional customer service is a key driver of business growth and customer loyalty. Our Customer Service Excellence training equips staff with the skills needed to deliver outstanding customer experiences consistently. This program is suitable for customer-facing teams, service organizations, and businesses that want to stand out through superior service delivery.
            </h1>
            </div>
            <h1  className="text-white text-[18px] font-bold mt-3">
              Key Benefits:
            </h1>
            <div className="text-white text-[13px] mt-2">
              <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Improved customer satisfaction and retention</h1>
               <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Enhanced communication and interpersonal skills </h1>
                <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Effective handling of complaints and difficult situations </h1>
                 <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Stronger brand reputation and customer loyalty </h1>
                  <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Increased sales and business growth opportunities</h1>
            </div>
            <NavLink to="/contact">
               <div className="flex justify-center">
             <button className="w-60 h-10 rounded-[7px] bg-blue-950 text-white font-bold mt-3 animate-pulse">
              LET'S WORK TOGETHER
            </button>
           </div>
            </NavLink>
          
        </div>

        </div>
         
        </SwiperSlide>

      <SwiperSlide>
          <div className='flex justify-center'>
             <div className="w-80 md:h-105 bg-blue-950 shadow-2xl rounded-[60px] mt-10 p-5 ">
            <div className="">
            <h1 className="text-white text-[18px] font-bold">
            Startup Formation & Development
            </h1>
            <h1 className="text-white text-[13px] mt-2">
            Starting a business requires more than just an idea—it requires structure, strategy, and execution. Our Startup Formation & Development service supports aspiring entrepreneurs and early-stage businesses in building a solid foundation for success. 
            From concept to launch, we help entrepreneurs transform ideas into viable and sustainable businesses.
            </h1>
            </div>
            <h1  className="text-white text-[18px] font-bold mt-">
              Key Benefits:
          </h1>
            <div className="text-white text-[13px] mt-2">
              <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Proper business setup and registration guidance </h1>
               <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Development of a clear business model and strategy </h1>
                <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Improved market readiness and positioning</h1>
                 <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Access to practical entrepreneurial insights </h1>
                  <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Stronger foundation for business growth and sustainability </h1>
            </div>
            <NavLink to="/contact">
               <div className="flex justify-center">
             <button className="w-60 h-10 rounded-[7px] bg-red-600 text-white font-bold mt-2 animate-pulse">
              LET'S WORK TOGETHER
            </button>
           </div>
            </NavLink>
          
        </div>
          </div>
        </SwiperSlide>


         <SwiperSlide>
        <div className=' flex justify-center'>
      <div className="w-80 md:h-105 bg-red-600 shadow-2xl rounded-[60px] mt-10 p-5 ">
            <div className="">
            <h1 className="text-white text-[18px] font-bold">
              Entrepreneur Capacity Building
            </h1>
            <h1 className="text-white text-[13px] mt-2">
             Our Entrepreneur Capacity Building program is designed to empower business owners with the knowledge, skills, and mindset needed to scale their ventures. The training covers business management, financial literacy, marketing, innovation, leadership, and growth planning.
            </h1>
            </div>
            <h1  className="text-white text-[18px] font-bold mt-5">
              Key Benefits:
            </h1>
            <div className="text-white text-[13px] mt-2">
              <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Enhanced business management skills</h1>
               <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>  Better financial planning and decision-making</h1>
                <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Improved marketing and customer acquisition strategies </h1>
                 <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Increased innovation and competitiveness</h1>
                  <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Greater confidence in leading and growing a business
</h1>
            </div>
            <NavLink to="/contact">
               <div className="flex justify-center">
             <button className="w-60 h-10 rounded-[7px] bg-blue-950 text-white font-bold mt-3 animate-pulse">
              LET'S WORK TOGETHER
            </button>
           </div>
            </NavLink>
          
        </div>

        </div>
         
        </SwiperSlide>

      <SwiperSlide>
          <div className='flex justify-center'>
            <div className="w-80 md:h-105 bg-blue-950 shadow-2xl rounded-[60px] mt-10 p-5 ">
            <div className="">
            <h1 className="text-white text-[17px] font-bold">
           Staff Retreats and Growth Conference
            </h1>
            <h1 className="text-white text-[12px] mt-2">
           Our Staff Retreats and Growth Conferences provide organizations with a refreshing opportunity to inspire, recharge, and align their workforce. These events combine professional development, team bonding, strategic reflection, and motivational sessions to foster personal and organizational growth.We customize each retreat or conference to meet the unique goals of your organization, ensuring a meaningful and impactful experience for participants.

            </h1>
            </div>
            <h1  className="text-white text-[18px] font-bold mt-2">
              Key Benefits:   </h1>
            <div className="text-white text-[13px] mt-2">
              <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>  Renewed employee motivation and engagement </h1>
               <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Stronger team relationships and collaboration </h1>
                <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Alignment with organizational vision and goals</h1>
                 <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span> Opportunities for strategic planning and reflection </h1>
                  <h1 className="flex items-center gap-2">  <span > <GoDotFill /></span>Enhanced workplace culture and morale </h1>
            </div>
            <NavLink to="/contact">
               <div className="flex justify-center">
             <button className="w-60 h-10 rounded-[7px] bg-red-600 text-white font-bold mt-2 animate-pulse">
              LET'S WORK TOGETHER
            </button>
           </div>
            </NavLink>
          
        </div>
          </div>
        </SwiperSlide>


    </Swiper>
    </div>
    </div>
  )
}

export default Service