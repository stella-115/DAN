import { useEffect, useRef } from 'react';
import { FaEye, FaBullseye } from 'react-icons/fa';
import img from "../../assets/Image.png";

const Vision = () => {
  // const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.2, rootMargin: '0px 0px -30px 0px' }
    );

    const elements = [leftRef.current, rightRef.current];
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full min-h-screen bg-linear-to-b from-white to-gray-50 py-16 md:py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left: Image */}
          <div
            ref={leftRef}
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-[#EC3237]/10 rounded-3xl blur-2xl animate-pulse"></div>
              <img
                src={img}
                alt="Dan Williams Global Vision"
                className="relative w-full h-auto object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              {/* Decorative badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#09032E] text-white px-6 py-3 rounded-xl shadow-xl flex items-center gap-3 animate-float">
                <FaEye className="text-[#EC3237] text-2xl" />
                <div>
                  <p className="text-xs font-light">Our Focus</p>
                  <p className="text-sm font-bold">People & Performance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Vision & Mission */}
          <div
            ref={rightRef}
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300 space-y-10"
          >
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#EC3237]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#EC3237]/10 p-3 rounded-xl">
                  <FaEye className="text-[#EC3237] text-3xl" />
                </div>
                <h2 className="text-[#09032E] text-3xl md:text-4xl font-bold">Vision</h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                To become Africa's leading corporate training and workforce development partner, 
                recognized for transforming people, teams, and organizations.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#EC3237]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#EC3237]/10 p-3 rounded-xl">
                  <FaBullseye className="text-[#EC3237] text-3xl" />
                </div>
                <h2 className="text-[#09032E] text-3xl md:text-4xl font-bold">Mission</h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                To empower organizations and professionals with practical knowledge, 
                transformational training, and performance-driven solutions that improve 
                results and create lasting impact.
              </p>
            </div>

            {/* Small decorative line */}
            <div className="flex justify-start">
              <div className="w-20 h-1 bg-linear-to-r from-[#EC3237] to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;