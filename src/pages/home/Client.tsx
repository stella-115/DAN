import  { useEffect, useRef } from 'react';
import { 
  FaBuilding, 
  FaUsers, 
  FaStore, 
  FaHandsHelping, 
  FaUniversity, 
  FaChurch,
} from 'react-icons/fa';

const Client = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    const elements = [titleRef.current, ...cardRefs.current];
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const clientTypes = [
    { name: 'Government Agencies', icon: <FaBuilding className="text-3xl" /> },
    { name: 'Corporate Organizations', icon: <FaUsers className="text-3xl" /> },
    { name: 'Small & Medium Enterprises', icon: <FaStore className="text-3xl" /> },
    { name: 'Non-Governmental Organizations', icon: <FaHandsHelping className="text-3xl" /> },
    { name: 'Educational Institutions', icon: <FaUniversity className="text-3xl" /> },
    { name: 'Faith-Based Organizations', icon: <FaChurch className="text-3xl" /> },
  ];

  return (
    <section className="w-full bg-red-600 py-12 md:py-20">
      <div className="w-full bg-[#000D5E] rounded-t-[60px] md:rounded-t-[80px] py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div
            ref={titleRef}
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out text-center mb-12 md:mb-16"
          >
            <h2 className="text-white text-3xl md:text-5xl font-bold inline-block relative">
              OUR TARGET CLIENTS
              <span className="absolute -bottom-3 left-0 w-full h-1 bg-[#EC3237] rounded-full"></span>
            </h2>
            <p className="text-white/70 mt-6 text-sm md:text-base max-w-2xl mx-auto">
              We partner with a diverse range of organizations to deliver impactful training and development solutions.
            </p>
          </div>

          {/* Client Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {clientTypes.map((client, index) => (
              <div
                key={index}
                ref={(el: any) => (cardRefs.current[index] = el)}
                className={`opacity-0 translate-y-10 transition-all duration-700 ease-out delay-${(index % 3 + 1) * 100}`}
              >
                <div className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-[#EC3237] rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#EC3237]/20 h-full flex flex-col items-center justify-center">
                  <div className="bg-white/20 group-hover:bg-[#EC3237] p-4 rounded-full transition-colors duration-300 mb-4">
                    <span className="text-white group-hover:text-white text-3xl">
                      {client.icon}
                    </span>
                  </div>
                  <h3 className="text-white text-lg md:text-xl font-semibold leading-tight">
                    {client.name}
                  </h3>
                  <div className="mt-3 w-12 h-1 bg-[#EC3237] rounded-full group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom decorative */}
          <div className="mt-12 text-center opacity-0 animate-fadeIn delay-500">
            <p className="text-white/60 text-sm">
              Let's collaborate to transform your organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;