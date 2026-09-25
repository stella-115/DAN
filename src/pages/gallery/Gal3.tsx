import { useState, useEffect } from 'react';
import slide1 from "../../assets/summit2026/DSC_0082-5.jpg";
import slide2 from "../../assets/summit2026/DSC_0087-6.jpg";
import slide3 from "../../assets/summit2026/DSC_0093-7.jpg";
import slide4 from "../../assets/summit2026/DSC_0121-6.jpg";
import slide5 from "../../assets/summit2026/DSC_0127-6.jpg";
import slide6 from "../../assets/summit2026/DSC_0130-5.jpg";
import slide7 from "../../assets/summit2026/DSC_0187-4.jpg";
import slide8 from "../../assets/summit2026/DSC_0210-4.jpg";
import slide9 from "../../assets/summit2026/DSC_0229-4.jpg";
import slide10 from "../../assets/summit2026/DSC_0277-3.jpg";

const slides = [
  { image: slide1,  number: '1 / 10' },
  { image: slide2,  number: '2 / 10' },
  { image: slide3,  number: '3 / 10' },
  { image: slide4,  number: '4 / 10' },
  { image: slide5,  number: '5 / 10', position: 'center 5%' },
  { image: slide6,  number: '6 / 10' },
  { image: slide7, number: '7 / 10' },
  { image: slide8,  number: '8 / 10' },
  { image: slide9,  number: '9 / 10' },
  { image: slide10,  number: '10 / 10' },
];

const Gal3 = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 font-sans pb-0 md:pb-10 pt-20">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-4 text-center sm:text-left">
        Unveiling Submit 2026
      </h2>

      <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg">
        <div className="relative w-full aspect-5/4 sm:aspect-4/3 md:aspect-3/2">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${
                index === slideIndex ? 'block' : 'hidden'
              } absolute inset-0 w-full h-full animate-fade overflow-hidden`}
            >
              <div className="absolute top-2 left-2 z-10 text-white text-xs sm:text-sm bg-black/40 px-2 py-1 rounded">
                {slide.number}
              </div>

              <img
                src={slide.image}
                className="w-full h-full object-cover object-top"
                style={{ objectPosition: slide.position || 'center 20%' }}
              />

              <div className="absolute bottom-0 left-0 w-full text-center text-white text-xs sm:text-sm md:text-base bg-linear-to-t from-black/60 to-transparent px-3 py-3">
  
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlideIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-colors duration-300 ${
              index === slideIndex ? 'bg-gray-700' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gal3;