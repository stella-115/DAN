import { useEffect, useRef } from 'react';
import pic1 from "../../assets/10.png";
import pic2 from "../../assets/9.png";
import pic3 from "../../assets/5.png";
import pic4 from "../../assets/11.png";
import pic5 from "../../assets/12.png";
import pic6 from "../../assets/13.png";
import pic7 from "../../assets/16.png";
import pic8 from "../../assets/17.png";
import pic9 from "../../assets/15.png";

const Card = () => {
  // const sectionRef = useRef<HTMLDivElement>(null);
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

  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9];

  return (
    <section className="w-full bg-[#09032E] py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Outer Container with Brand Accents */}
        <div className="border-2 border-[#EC3237] rounded-tl-[60px] md:rounded-tl-[120px] rounded-br-[60px] md:rounded-br-[120px] p-6 md:p-12">
          
          {/* Header */}
          <h2 className="text-3xl md:text-5xl text-white font-bold text-center mb-10 tracking-wider">
            TRAINING <span className="text-[#EC3237]">REFLECTIONS</span>
          </h2>

          {/* Inner Gallery Container */}
          <div className="bg-white rounded-tl-[30px] md:rounded-tl-[60px] rounded-br-[30px] md:rounded-br-[60px] p-4 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {images.map((img, index) => (
                <div
                  key={index}
                  ref={(el: any) => (cardRefs.current[index] = el)}
                  className="opacity-0 translate-y-10 ease-out overflow-hidden rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 aspect-square"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <img
                    src={img}
                    alt={`Training Reflection ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;