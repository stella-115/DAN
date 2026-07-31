import { useEffect, useRef } from 'react';
import { 
  FaUsers, 
  FaUserTie, 
  // FaHeadset, 
  FaRocket, 
  // FaLightbulb, 
  FaChalkboardTeacher,
  // FaPassport,
  FaCode,
  // FaTrademark,
  // FaCertificate,
  FaBuilding,
  FaPalette
} from 'react-icons/fa';
import img1 from "../../assets/5.png";
import img2 from "../../assets/6.png";
import img3 from "../../assets/7.png";

const Training = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const programRefs = useRef<(HTMLDivElement | null)[]>([]);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

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

    const allElements = [headerRef.current, ...programRefs.current, ...serviceRefs.current, ctaRef.current];
    allElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const trainingPrograms = [
    {
      title: 'Workplace Effectiveness',
      icon: <FaUsers className="text-3xl" />,
      description: 'Boost productivity and efficiency across your organization.',
      delay: 'delay-100',
    },
    {
      title: 'Team & Leadership Building',
      icon: <FaUserTie className="text-3xl" />,
      description: 'Develop strong leaders and cohesive teams that deliver results.',
      delay: 'delay-200',
    },
    // {
    //   title: 'Customer Service Excellence',
    //   icon: <FaHeadset className="text-3xl" />,
    //   description: 'Deliver exceptional customer experiences that build loyalty.',
    //   delay: 'delay-300',
    // },
    {
      title: 'Startup Formation & Development',
      icon: <FaRocket className="text-3xl" />,
      description: 'Build and scale your startup with proven strategies and support.',
      delay: 'delay-100',
    },
    {
      title: 'Staff Retreats & Growth Conferences',
      icon: <FaChalkboardTeacher className="text-3xl" />,
      description: 'Inspire and align your team through transformative retreats.',
      delay: 'delay-300',
    },
    // {
    //   title: 'Entrepreneur Capacity Building',
    //   icon: <FaLightbulb className="text-3xl" />,
    //   description: 'Equip entrepreneurs with skills and knowledge for success.',
    //   delay: 'delay-200',
    // },
    
  ];

  

  const otherServices = [
    { name: 'Business Incorporation & Compliance Services', icon: <FaBuilding /> }, 
    { name: 'Web Development', icon: <FaCode /> },
     { name: 'Corporate Branding', icon: <FaPalette /> },
    // { name: 'Trademarking', icon: <FaTrademark /> },
    // { name: 'SCUML Certification', icon: <FaCertificate /> },
    // { name: 'CAC Registration', icon: <FaBuilding /> },
    // { name: 'Int\'l Passport', icon: <FaPassport /> },
   
  ];

  return (
    <section className="w-full min-h-screen bg-linear-to-b from-[#09032E] via-[#0f0545] to-[#09032E] py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Images and Title */}
        <div
          ref={headerRef}
          className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 mb-10">
            <img src={img1} alt="Training icon 1" className="h-16 md:h-60 w-auto object-contain" />
            <img src={img2} alt="Training icon 2" className="h-16 md:h-60 w-auto object-contain" />
            <img src={img3} alt="Training icon 3" className="h-16 md:h-60 w-auto object-contain" />
          </div>

          <div className="text-center mb-12">
            <div className="inline-block bg-[#EC3237] px-8 md:px-12 py-3 md:py-4 rounded-full shadow-lg shadow-[#EC3237]/30">
              <h2 className="text-white font-bold text-2xl md:text-4xl tracking-wider">
                TRAINING SERVICES
              </h2>
            </div>
            <p className="text-white/70 mt-4 text-sm md:text-base max-w-2xl mx-auto">
              Empowering individuals and organizations through world-class training and development programs.
            </p>
          </div>
        </div>

        {/* Training Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-15 mt-8">
          {trainingPrograms.map((program, index) => (
            <div
              key={index}
              ref={(el: any) => (programRefs.current[index] = el)}
              className={`opacity-0 translate-y-10 transition-all duration-700 ease-out ${program.delay}`}
            >
              <div className="group bg-[#000D5E] rounded-2xl p-6 border-l-4 border-[#EC3237] shadow-xl hover:shadow-2xl hover:shadow-[#EC3237]/20 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="flex items-start gap-4">
                  <div className="bg-[#EC3237]/20 p-3 rounded-xl group-hover:bg-[#EC3237] transition-colors duration-300 shrink-0">
                    <span className="text-[#EC3237] group-hover:text-white transition-colors duration-300">
                      {program.icon}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">
                      {program.title}
                    </h3>
                    <p className="text-white/60 text-sm md:text-base mt-2 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="mt-3 flex items-center text-[#EC3237] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Learn more</span>
                      <span className="ml-2">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Services */}
        <div className="mt-16 md:mt-20">
          <div
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300"
            ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('opacity-100', 'translate-y-0');
                      entry.target.classList.remove('opacity-0', 'translate-y-10');
                    }
                  });
                }, { threshold: 0.1 });
                observer.observe(el);
              }
            }}
          >
            <div className="text-center mb-10">
              <div className="inline-block border-l border-r border-white/20 px-6 py-2">
                <h3 className="text-[#EC3237] text-3xl md:text-5xl font-bold font-serif">
                  Other Services
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
            {otherServices.map((service, index) => (
              <div
                key={index}
                ref={(el: any) => (serviceRefs.current[index] = el)}
                className={`opacity-0 translate-y-10 transition-all duration-700 ease-out delay-${(index % 3 + 1) * 100}`}
              >
                <div className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#EC3237] rounded-xl p-4 flex items-center gap-4 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 cursor-default">
                  <div className="bg-[#EC3237]/20 group-hover:bg-[#EC3237] p-2.5 rounded-lg transition-colors duration-300">
                    <span className="text-[#EC3237] group-hover:text-white text-xl transition-colors duration-300">
                      {service.icon}
                    </span>
                  </div>
                  <span className="text-white text-base md:text-lg font-semibold group-hover:text-[#EC3237] transition-colors duration-300">
                    {service.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          ref={ctaRef}
          className="mt-16 text-center opacity-0 translate-y-10 transition-all duration-700 ease-out delay-500"
        >
          <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-6">
            <p className="text-white/70 text-sm md:text-base">
              Ready to transform your team?{' '}
              <a href="/contact" className="text-[#EC3237] font-semibold hover:underline">
                Get in touch with us
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;