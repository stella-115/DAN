import { useEffect, useRef } from 'react';
import { 
  FaLinkedinIn, 
  FaFacebookF, 
  FaInstagram, 
  FaTiktok, 
  FaYoutube, 
  FaTwitter, 
  FaPaperPlane 
} from 'react-icons/fa';
import the from "../../assets/IMG_1391.JPG (1).jpeg";

const Executive = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

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

    const elements = [imageRef.current, contentRef.current, bioRef.current, socialRef.current];
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { icon: <FaLinkedinIn />, url: 'www.linkedin.com/in/danwilliams-global-bba8b8403', label: 'LinkedIn' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/danwilliamsglobal?igsh=aTc1NzJ0OWthZzN4', label: 'Instagram' },
    { icon: <FaFacebookF />, url: 'https://facebook.com/danoluwilliams', label: 'Facebook' },
    { icon: <FaTiktok />, url: 'https://tiktok.com/@danoluwilliams', label: 'TikTok' },
    { icon: <FaYoutube />, url: 'https://youtube.com/danoluwilliams', label: 'YouTube' },
    { icon: <FaTwitter />, url: 'https://twitter.com/danoluwilliams', label: 'Twitter' },
    { icon: <FaPaperPlane />, url: 'https://t.me/danoluwilliams', label: 'Telegram' },
  ];

  return (
    <section className="w-full min-h-screen bg-linear-to-b from-[#09032E] via-[#0f0545] to-[#09032E] py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Main Layout: Image + Intro */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center md:items-start">
          {/* Image */}
          <div
            ref={imageRef}
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100 shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-[#EC3237]/20 rounded-3xl blur-2xl animate-pulse"></div>
              <img
                src={the}
                alt="Dan Olu-Williams - Executive Lead"
                className="relative w-64 md:w-72 rounded-2xl shadow-2xl border-4 border-[#EC3237]/50 hover:scale-105 transition-transform duration-500"
              />
              {/* <div className="absolute -bottom-3 -right-3 bg-[#EC3237] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                CEO
              </div> */}
            </div>
          </div>

          {/* Intro Content */}
          <div
            ref={contentRef}
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200 flex-1"
          >
            <h1 className="text-[#EC3237] text-4xl md:text-5xl font-bold font-serif leading-tight">
              The<br />
              <span className="text-white">Executive Lead</span>
            </h1>
            <div className="w-20 h-1 bg-[#EC3237] rounded-full mt-4 mb-6"></div>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              Dan Olu-Williams is an Entrepreneur, Leadership Facilitator, and Social
              Impact Advocate with a passion for empowering individuals, organizations,
              and communities to achieve sustainable growth and excellence.
            </p>
          </div>
        </div>

        {/* Bio Details */}
        <div
          ref={bioRef}
          className="opacity-0 translate-y-10 transition-all duration-700 ease-out delay-300 mt-12 space-y-4 text-white/80 text-base md:text-lg leading-relaxed"
        >
          <p>
            He is the Executive Director of Danwilliams Global, a capacity-building and
            enterprise development firm committed to strengthening businesses, developing
            leaders, and creating opportunities for economic empowerment.
          </p>
          <p>
            Through training, mentorship, and strategic interventions, he has equipped
            entrepreneurs, professionals, students, and emerging leaders with practical
            skills for personal effectiveness, enterprise growth, and societal impact.
          </p>
          <p>
            Dan is the Convener of The Unveiling Summit, a leadership and youth
            development platform focused on inspiring purpose, unlocking potential, and
            driving transformational change.
          </p>
          <p>
            His work is driven by a commitment to developing resilient leaders,
            productive citizens, and value-creating entrepreneurs who contribute
            meaningfully to society.
          </p>
        </div>

        {/* Social Media & Name Card */}
        <div
          ref={socialRef}
          className="opacity-0 translate-y-10 transition-all duration-700 ease-out delay-500 mt-12 flex justify-center"
        >
          <div className="bg-[#000D5E] rounded-2xl p-6 shadow-2xl border border-white/10  w-65 h-30 max-w-md">
            <div className="flex justify-center gap-2 flex-wrap ">
              {socialLinks.map((item, index) => (
                <a
                  key={index} 
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-white hover:text-red-600 transition-colors duration-300 w-5 h-5 rounded-lg flex items-center justify-center text-xl"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <h3 className="text-white text-[18px] font-bold text-center mt-4 tracking-wider">
              DAN OLU-WILLIAMS
            </h3>
            <p className="text-white/50 text-sm text-center mt-1">Executive Lead</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Executive;