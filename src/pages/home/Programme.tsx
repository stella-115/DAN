import { useEffect, useRef } from 'react';
import { FaUsers, FaHandshake, FaRocket, FaLightbulb } from 'react-icons/fa';

const Programme = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );

    const elements = [titleRef.current, ...cardRefs.current];
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const programmes = [
    {
      title: 'Team Optimization Training',
      icon: <FaUsers className="text-3xl" />,
      description: 'A transformational programme designed to improve collaboration, communication, and team productivity.',
      delay: 'delay-100',
    },
    {
      title: 'Business Conclave',
      icon: <FaHandshake className="text-3xl" />,
      description: 'A training intervention focused on raising student entrepreneurs across higher institutions.',
      delay: 'delay-200',
    },
    {
      title: 'The High-Performance Workforce Programme',
      icon: <FaRocket className="text-3xl" />,
      description: 'Designed to help organizations improve employee productivity, accountability, and workplace effectiveness.',
      delay: 'delay-300',
    },
    {
      title: 'Leadership Catalyst Programme',
      icon: <FaLightbulb className="text-3xl" />,
      description: 'A practical leadership development programme for supervisors, managers, executives, and emerging leaders.',
      delay: 'delay-400',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/img/8.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-red-600 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex justify-center items-center pt-10 md:pt-10  px-4">
        <div className="max-w-6xl w-full">
          {/* Title */}
          <div
            ref={titleRef}
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out text-center mb-12 md:mb-16"
          >
            <h2 className="text-white font-serif font-black text-4xl md:text-6xl leading-tight">
              Signature <br className="md:hidden" />
              <span className="text-[#09032E]">Programmes</span>
            </h2>
            <div className="w-24 h-1 bg-[#09032E] mx-auto mt-4 rounded-full"></div>
            <p className="text-white/80 mt-4 text-base md:text-lg max-w-2xl mx-auto">
              Transformational training experiences designed to elevate individuals, teams, and organizations.
            </p>
          </div>

          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {programmes.map((program, index) => (
              <div
                key={index}
                ref={(el: any) => (cardRefs.current[index] = el)}
                className={`opacity-0 translate-y-10 transition-all duration-700 ease-out ${program.delay}`}
              >
                <div className="group bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border-l-4 border-[#EC3237]">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#EC3237]/10 group-hover:bg-[#EC3237] p-3 rounded-xl transition-colors duration-300 shrink-0">
                      <span className="text-[#EC3237] group-hover:text-white transition-colors duration-300">
                        {program.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[#09032E] text-xl md:text-2xl font-bold leading-tight">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
                        {program.description}
                      </p>
                      <div className="mt-4 w-12 h-1 bg-[#EC3237] rounded-full group-hover:w-20 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="my-12 text-center ">
            <a
              href="/contact"
              className="inline-block bg-[#09032E] text-white px-10 py-6 rounded-full font-semibold hover:bg-[#0f0545] transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programme;