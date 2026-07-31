import { useEffect, useRef } from 'react';
import { FaChevronRight, FaStar } from 'react-icons/fa';
import logo2 from "../../assets/about.jpg";
import { NavLink } from 'react-router-dom';
import { GrGallery } from 'react-icons/gr';

const Hero = () => {
  // const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = [contentRef.current, imageRef.current, statsRef.current];
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full min-h-screen bg-linear-to-br from-[#09032E] via-[#120a4a] to-[#09032E] flex justify-center items-center relative overflow-hidden mt-25">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#EC3237]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#EC3237]/5 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-white/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-[#EC3237]/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#EC3237]/10 rounded-full blur-2xl animate-float-delayed"></div>
      </div>

      <div className="w-[92%] max-w-6xl relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
          
          {/* Left Content */}
          <div 
            ref={contentRef}
            className="flex-1 opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            {/* Badge */}
            {/* <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[#EC3237] rounded-full animate-pulse"></span>
              <span className="text-white/70 text-sm font-medium uppercase tracking-wider">
                Dan Williams Global
              </span>
            </div> */}

            <h1 className="text-white md:text-6xl text-4xl font-extrabold leading-tight">
              <span className="bg-linear-to-r from-white to-white/80 bg-clip-text text-transparent">
                EQUIPPING INDIVIDUAL
              </span>
              <br />
              <span className="relative inline-block mt-1">
                <span className="bg-linear-to-r from-[#EC3237] to-[#ff6b6b] bg-clip-text text-transparent">
                  BUILDING TEAMS
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-[#EC3237] to-transparent rounded-full"></span>
              </span>
            </h1>

            <p className="text-white/70 text-base md:text-lg max-w-lg mt-6 leading-relaxed">
              Empowering businesses with innovative solutions, strategic vision, and 
              a commitment to excellence. Let's build something extraordinary together.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <NavLink to="/service">
                 <button className="group bg-[#EC3237] hover:bg-[#d42d32] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#EC3237]/30">
                <span>Explore More</span>
                <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              </NavLink>
             
             <NavLink to="/gallery">
               <button className="group border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#EC3237] transition-colors">
                  <GrGallery className="text-sm ml-0.5" />
                </div>
                <span>View Gallery</span>
              </button>
             </NavLink>
            </div>

            {/* Stats */}
            <div 
              ref={statsRef}
              className="flex gap-8 mt-10 pt-8 border-t border-white/10 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300"
            >
              <div>
                <p className="text-white text-2xl font-bold">3+</p>
                <p className="text-white/50 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-white text-2xl font-bold">1000+</p>
                <p className="text-white/50 text-sm">Happy Clients</p>
              </div>
              <div>
                <p className="text-white text-2xl font-bold">5+</p>
                <p className="text-white/50 text-sm">Awards Won</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div 
            ref={imageRef}
            className="flex-1 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200 w-full max-w-sm md:max-w-none"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-[#EC3237]/20 rounded-full blur-3xl animate-pulse-slow"></div>
              
              <div className="relative bg-linear-to-br from-[#EC3237]/10 to-transparent rounded-3xl p-4 backdrop-blur-sm border border-white/10 shadow-2xl">
                <img 
                  src={logo2} 
                  alt="Dan Williams Global Corporate Profile" 
                  className="w-120 h-auto object-contain rounded-2xl transform hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-[#09032E] border border-[#EC3237] rounded-2xl p-3 shadow-2xl backdrop-blur-sm animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#EC3237] rounded-full flex items-center justify-center">
                      <FaStar className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold">Trusted</p>
                      <p className="text-[#EC3237] text-[10px]">Since 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="flex justify-center mt-12 md:mt-16 animate-bounce-slow">
          <button 
            onClick={scrollToNext}
            className="group flex flex-col items-center gap-2 text-white/40 hover:text-white transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white transition-colors">
              <div className="w-1.5 h-3 bg-[#EC3237] rounded-full mt-2 animate-scroll-bounce"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;