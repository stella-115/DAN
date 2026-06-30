import { useEffect, useRef } from 'react';
import { 
  FaInstagram, 
  FaLinkedin, 
  FaPhone, 
//   FaWhatsapp, 
  FaEnvelope, 
  FaLink,
  FaArrowRight
} from 'react-icons/fa';
// import { MdLocationOn } from 'react-icons/md';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: <FaInstagram className="text-3xl" />,
      iconBg: "bg-gradient-to-br from-purple-600 to-pink-500",
      title: "Instagram",
      value: "@danwilliamsglobal",
      link: "https://instagram.com/danwilliamsglobal",
      delay: "delay-100"
    },
    {
      icon: <FaLinkedin className="text-3xl" />,
      iconBg: "bg-[#0A66C2]",
      title: "LinkedIn",
      value: "@danwilliamsglobal",
      link: "https://linkedin.com/in/danwilliamsglobal",
      delay: "delay-200"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      iconBg: "bg-green-500",
      title: "Call or WhatsApp",
      value: "+234 704 879 6753",
      subValue: "+234 814 890 5370",
      link: "tel:+2347048796753",
      delay: "delay-300"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      iconBg: "bg-red-500",
      title: "Email",
      value: "officialdanwilliamsglobal@gmail.com",
      link: "mailto:officialdanwilliamsglobal@gmail.com",
      delay: "delay-400"
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="w-full min-h-screen bg-linear-to-br from-[#EC3237] via-[#d42d32] to-[#b8252a] flex justify-center items-center py-10 px-4 relative overflow-hidden"
    >
      {/* Animated background elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div> */}

      <div className="w-full max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fadeIn">
          <div className="inline-block">
            <h1 className="text-white md:text-6xl text-4xl font-extrabold tracking-wider mb-4 drop-shadow-lg">
              CONNECT WITH US
            </h1>
            <div className="flex justify-center gap-3 mb-2">
              <div className="w-20 md:w-32 h-1 bg-white/80 rounded-full"></div>
              <div className="w-12 h-1 bg-[#09032E] rounded-full"></div>
              <div className="w-20 md:w-32 h-1 bg-white/80 rounded-full"></div>
            </div>
            <p className="text-white/80 text-lg md:text-xl font-light mt-4">
              Let's stay connected and build something amazing together
            </p>
          </div>
        </div>

        {/* Contact Cards Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              ref={(el: any) => (cardsRef.current[index] = el)}
              className={`opacity-0 translate-y-10 transition-all duration-700 ease-out ${info.delay}`}
            >
              <a
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 group h-full"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className={`${info.iconBg} text-white p-4 rounded-2xl shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[#09032E] text-sm md:text-base font-semibold uppercase tracking-wider mb-1">
                      {info.title}
                    </h3>
                    <p className="text-[#09032E] text-base md:text-xl font-bold wrap-break-word">
                      {info.value}
                    </p>
                    {info.subValue && (
                      <p className="text-[#09032E]/70 text-sm md:text-base font-medium mt-1">
                        {info.subValue}
                      </p>
                    )}
                    <div className="mt-3 flex items-center text-[#EC3237] font-medium text-sm">
                      <span className="group-hover:mr-2 transition-all duration-300">Connect</span>
                      <FaArrowRight className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div> */}

        {/* Linktree Section */}
        <div className="mt-8 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-500" 
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
             }}>
          <a
            href="https://linktr.ee/danwilliamsglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-[#EC3237] text-white p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaLink className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-[#09032E] text-sm font-semibold uppercase tracking-wider">All Links</h3>
                  <p className="text-[#09032E] text-xl md:text-2xl font-bold">linktr.ee/danwilliamsglobal</p>
                </div>
              </div>
              <div className="bg-[#EC3237] text-white px-6 py-3 rounded-xl font-semibold group-hover:bg-[#d42d32] transition-colors flex items-center gap-2">
                <span>Visit</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center opacity-0 translate-y-10 transition-all duration-700 ease-out delay-700"
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
             }}>
          <div className="inline-block bg-[#09032E]/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-xl">
            <h2 className="text-white text-xl md:text-2xl font-bold tracking-wider">
              LET'S HAVE A CHAT ✨
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;