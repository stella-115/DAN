import { GoDotFill } from "react-icons/go";
import { NavLink } from "react-router-dom";

interface ServiceItem {
  title: string;
  description: string;
  benefits: string[];
  theme: "red" | "blue";
  desktopTheme?: "red" | "blue";
  titleSize?: string;
}

const services: ServiceItem[] = [
  {
    title: "Workplace Effectiveness Training",
    description:
      "Our Workplace Effectiveness Training is designed to help individuals and organizations improve productivity, professionalism, and performance in today's fast-paced work environment. Whether you are a growing business or an established organization, this training helps create a culture of excellence, accountability, and results.",
    benefits: [
      "Improved productivity and efficiency",
      "Enhanced communication and teamwork",
      "Better time and task management",
      "Increased employee accountability and professionalism",
      "Stronger workplace relationships and morale",
    ],
    // Mobile: red, Desktop: red (top-left)
    theme: "red",
  },
  {
    title: "Team & Leadership Building",
    description:
      "Strong organizations are built on strong teams and effective leaders. Our Team & Leadership Building program focuses on developing leadership capacity, fostering collaboration, and strengthening team dynamics. This training is ideal for managers, supervisors, team leads, and organizations seeking to build high-performing teams that work together with clarity and purpose.",
    benefits: [
      "Stronger leadership capabilities",
      "Improved team cohesion and collaboration",
      "Enhanced conflict management skills",
      "Better decision-making and accountability",
      "Increased employee engagement and performance",
    ],
    // Mobile: blue, Desktop: blue (top-right)
    theme: "blue",
  },
  {
    title: "Startup Formation & Development",
    description:
      "Starting a business requires more than just an idea—it requires structure, strategy, and execution. Our Startup Formation & Development service supports aspiring entrepreneurs and early-stage businesses in building a solid foundation for success. From concept to launch, we help entrepreneurs transform ideas into viable and sustainable businesses.",
    benefits: [
      "Proper business setup and registration guidance",
      "Development of a clear business model and strategy",
      "Improved market readiness and positioning",
      "Access to practical entrepreneurial insights",
      "Stronger foundation for business growth and sustainability",
    ],
    // Mobile: red, Desktop: blue (2nd row left)
    theme: "red",
    desktopTheme: "blue",
  },
  {
    title: "Customer Service Excellence",
    description:
      "Exceptional customer service is a key driver of business growth and customer loyalty. Our Customer Service Excellence training equips staff with the skills needed to deliver outstanding customer experiences consistently. This program is suitable for customer-facing teams, service organizations, and businesses that want to stand out through superior service delivery.",
    benefits: [
      "Improved customer satisfaction and retention",
      "Enhanced communication and interpersonal skills",
      "Effective handling of complaints and difficult situations",
      "Stronger brand reputation and customer loyalty",
      "Increased sales and business growth opportunities",
    ],
    // Mobile: blue, Desktop: red (2nd row right)
    theme: "blue",
    desktopTheme: "red",
  },
  {
    title: "Entrepreneur Capacity Building",
    description:
      "Our Entrepreneur Capacity Building program is designed to empower business owners with the knowledge, skills, and mindset needed to scale their ventures. The training covers business management, financial literacy, marketing, innovation, leadership, and growth planning.",
    benefits: [
      "Enhanced business management skills",
      "Better financial planning and decision-making",
      "Improved marketing and customer acquisition strategies",
      "Increased innovation and competitiveness",
      "Greater confidence in leading and growing a business",
    ],
    // Mobile: red, Desktop: red (3rd row left)
    theme: "red",
  },
  {
    title: "Staff Retreats and Growth Conference",
    description:
      "Our Staff Retreats and Growth Conferences provide organizations with a refreshing opportunity to inspire, recharge, and align their workforce. These events combine professional development, team bonding, strategic reflection, and motivational sessions to foster personal and organizational growth. We customize each retreat or conference to meet the unique goals of your organization.",
    benefits: [
      "Renewed employee motivation and engagement",
      "Stronger team relationships and collaboration",
      "Alignment with organizational vision and goals",
      "Opportunities for strategic planning and reflection",
      "Enhanced workplace culture and morale",
    ],
    // Mobile: blue, Desktop: blue (3rd row right)
    theme: "blue",
    titleSize: "text-[18px] md:text-[20px]",
  },
];

const Service = () => {
  return (
    <div className="w-full min-h-screen pt-28 md:pt-32 pb-20 flex justify-center bg-linear-to-b from-slate-50 to-white">
      <div className="w-[92%] md:w-[90%] max-w-7xl">
        {/* Heading */}
        <div className="text-[40px] md:text-[60px] text-blue-950 flex justify-center font-bold animate-[fadeInDown_0.8s_ease-out]">
          Our <span className="text-red-600 pl-3 md:pl-5">Services</span>
        </div>
        <p className="text-center text-slate-500 mt-4 max-w-2xl mx-auto text-sm md:text-base animate-[fadeIn_1s_ease-out]">
          Explore our tailored programs designed to elevate your team,
          business, and leadership to the next level.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-14">
          {services.map((service, index) => {
            const mobileIsRed = service.theme === "red";
            const desktopIsRed =
              (service.desktopTheme ?? service.theme) === "red";

            // Mobile classes
            const mobileBg = mobileIsRed ? "bg-red-600" : "bg-blue-950";
            const mobileBtn = mobileIsRed ? "bg-blue-950" : "bg-red-600";

            // Desktop classes
            const desktopBg = desktopIsRed ? "md:bg-red-600" : "md:bg-blue-950";
            const desktopBtn = desktopIsRed
              ? "md:bg-blue-950"
              : "md:bg-red-600";

            return (
              <div
                key={index}
                className={`${mobileBg} ${desktopBg} group relative shadow-2xl rounded-[40px] md:rounded-[50px] p-7 md:p-8 flex flex-col justify-between min-h-130 md:min-h-110 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] animate-[fadeInUp_0.7s_ease-out]`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                {/* Decorative glow */}
                <div className="absolute inset-0 rounded-[40px] md:rounded-[50px] bg-white/0 group-hover:bg-white/5 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <h2
                    className={`text-white font-bold ${
                      service.titleSize || "text-[20px] md:text-[22px]"
                    }`}
                  >
                    {service.title}
                  </h2>
                  <p className="text-white/90 text-[13px] md:text-[13.5px] mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  <h3 className="text-white text-[18px] md:text-[20px] font-bold mt-4">
                    Key Benefits:
                  </h3>
                  <div className="text-white/95 text-[13px] md:text-[13.5px] mt-3 space-y-1.5">
                    {service.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 transition-transform duration-300 group-hover:translate-x-1"
                        style={{ transitionDelay: `${i * 40}ms` }}
                      >
                        <span className="mt-0.5 shrink-0">
                          <GoDotFill />
                        </span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <NavLink to="/contact" className="relative z-10 mt-5">
                  <div className="flex justify-center">
                    <button
                      className={`w-full max-w-65 h-11 rounded-[10px] ${mobileBtn} ${desktopBtn} text-white font-bold tracking-wide text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 animate-pulse`}
                    >
                      LET'S WORK TOGETHER
                    </button>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;