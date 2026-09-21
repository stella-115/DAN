import { useEffect, useRef } from 'react';
import { FaUsers, FaCheckCircle } from 'react-icons/fa';
import { MdBusinessCenter, MdTrendingUp } from 'react-icons/md';

const About = () => {
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
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      id: 1,
      title: "WHO ARE WE",
      icon: <FaUsers className="text-3xl text-white" />,
      bgColor: "bg-[#EC3237]",
      textColor: "text-white",
      content: (
        <>
          Danwilliams Global is a corporate training, business development, and 
          organizational performance firm committed to helping organizations unlock 
          the full potential of their people, teams, and structures.
          <br /><br />
          We partner with businesses, institutions, government agencies, and NGOs 
          to improve productivity, leadership effectiveness, and workplace performance.
        </>
      ),
      delay: "delay-100"
    },
    {
      id: 2,
      title: "WHO DO WE SERVE",
      icon: <MdBusinessCenter className="text-3xl text-white" />,
      bgColor: "bg-[#09032E]",
      textColor: "text-white",
      content: (
        <>
          <ul className="">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#EC3237] mt-1 shrink-0" />
              <span>Corporate Organizations</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#EC3237] mt-1 shrink-0" />
              <span>Small &amp; Medium Enterprises</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#EC3237] mt-1 shrink-0" />
              <span>Government Agencies</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#EC3237] mt-1 shrink-0" />
              <span>Educational Institutions</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#EC3237] mt-1 shrink-0" />
              <span>Faith-based Organizations</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#EC3237] mt-1 shrink-0" />
              <span>Non-Governmental Organizations</span>
            </li>
          </ul>
          <br />
          <p>
            We work directly with organizations seeking to improve workforce 
            effectiveness and organizational outcomes.
          </p>
          <br />
          <p className="font-medium text-[#EC3237]">
            Key decision-makers: HR Managers, L&amp;D Managers, Team Leads, 
            Departmental Heads, CEOs, and Executive Directors.
          </p>
        </>
      ),
      delay: "delay-200"
    },
    {
      id: 3,
      title: "WHAT TRANSFORMATION DO WE DELIVER",
      icon: <MdTrendingUp className="text-3xl text-white" />,
      bgColor: "bg-[#EC3237]",
      textColor: "text-white",
      content: (
        <>
          We transform individuals into productive professionals, teams into 
          collaborative units, and organizations into high-performing institutions.
          <br /><br />
          Our interventions lead to improved leadership capacity, stronger teamwork, 
          enhanced productivity, better communication, and measurable organizational growth.
        </>
      ),
      delay: "delay-300"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-linear-to-b from-gray-50 to-white px-4 pt-10">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 ">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#09032E] mb-4">
            About <span className="text-[#EC3237]">Us</span>
          </h1>
          <div className="w-24 h-1 bg-[#EC3237] mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Discover who we are, who we serve, and the transformation we bring to organizations worldwide.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-12 md:space-y-16">
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={(el: any) => (cardRefs.current[index] = el)}
              className={`opacity-0 translate-y-10 transition-all duration-700 ease-out ${card.delay}`}
            >
              <div className={`${card.bgColor} rounded-3xl shadow-2xl overflow-hidden relative transform hover:scale-[1.02] transition-transform duration-300`}>
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>

                <div className="relative p-6 md:p-10">
                  {/* Header with icon and title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                      {card.icon}
                    </div>
                    <h2 className={`text-xl md:text-3xl font-bold ${card.textColor} tracking-tight`}>
                      {card.title}
                    </h2>
                  </div>

                  {/* Content */}
                  <div className={`${card.textColor} text-base md:text-lg leading-relaxed space-y-4`}>
                    {card.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 mb-5 text-center ">
          <p className="text-gray-600 text-sm md:text-base">
            Ready to transform your organization?{' '}
            <a href="/contact" className="text-[#EC3237] font-semibold hover:underline">
              Get in touch with us today.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;