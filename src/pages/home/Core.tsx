import { useEffect, useRef } from 'react';
import { FaRocket, FaStar, FaHeart, FaHands } from 'react-icons/fa';

const Core = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
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

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      id: 1,
      title: 'IMPACT',
      icon: <FaRocket className="text-4xl text-[#EC3237]" />,
      description: 'We are committed to creating measurable and lasting positive change in individuals, businesses, and communities.',
      color: 'from-red-50 to-red-100',
      borderColor: 'border-[#EC3237]',
      delay: 'delay-100',
    },
    {
      id: 2,
      title: 'EXCELLENCE',
      icon: <FaStar className="text-4xl text-[#EC3237]" />,
      description: 'We create excellent brand experiences that make our clients feel good and loyal.',
      color: 'from-yellow-50 to-yellow-100',
      borderColor: 'border-[#EC3237]',
      delay: 'delay-200',
    },
    {
      id: 3,
      title: 'CUSTOMER CENTRIC',
      icon: <FaHeart className="text-4xl text-[#EC3237]" />,
      description: 'We craft experiences that make our clients feel valued and understood.',
      color: 'from-pink-50 to-pink-100',
      borderColor: 'border-[#EC3237]',
      delay: 'delay-300',
    },
    {
      id: 4,
      title: 'COLLABORATION',
      icon: <FaHands className="text-4xl text-[#EC3237]" />,
      description: 'We are keen on working together with brands that reflect our shared visions and values.',
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-[#EC3237]',
      delay: 'delay-400',
    },
  ];

  return (
    <section className="w-full min-h-screen  px-4 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fadeIn">
          <h2 className="text-[#09032E] text-3xl md:text-5xl font-medium">
            OUR <br />
            <span className="font-extrabold">CORE VALUES</span>
          </h2>
          <div className="w-24 h-1 bg-[#EC3237] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            These principles guide everything we do and define who we are.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={value.id}
              ref={(el: any) => (cardRefs.current[index] = el)}
              className={`opacity-0 translate-y-10 transition-all duration-700 ease-out ${value.delay}`}
            >
              <div
                className={`bg-linear-to-br ${value.color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 ${value.borderColor} h-full flex flex-col items-start hover:-translate-y-1`}
              >
                {/* Icon and Number */}
                <div className="flex items-center justify-between w-full mb-4">
                  <div className="bg-white/80 p-3 rounded-xl shadow-sm">
                    {value.icon}
                  </div>
                  <span className="text-4xl font-bold text-[#EC3237]/20">
                    {String(value.id).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[#09032E] text-xl md:text-2xl font-extrabold mb-3">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative line */}
                <div className="w-12 h-1 bg-[#EC3237] rounded-full mt-4"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-linear-to-r from-transparent via-[#EC3237] to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Core;